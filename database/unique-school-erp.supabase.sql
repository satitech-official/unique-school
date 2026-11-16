-- Unique School ERP: production database baseline for a NEW DEDICATED Supabase project.
-- NOT APPLIED to any existing project. Review and migrate after school approval.
-- Requires Supabase Auth (auth.users) and a dedicated school project with appropriate DPDP safeguards.
-- Safe by default: anon privileges revoked, RLS on all tables; initial user roles must be provisioned by administrator.
begin;

create table if not exists public.erp_profiles(
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  role text not null check(role in ('administrator','teacher','accounts','admissions','librarian','transport','student','parent')),
  active boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists erp_profiles_role_idx on public.erp_profiles(role) where active;

create table if not exists public.erp_students(
  id uuid primary key default gen_random_uuid(),
  admission_no text not null unique,
  full_name text not null,
  class_name text not null,
  section text not null default 'A',
  guardian_name text,
  guardian_phone text,
  status text not null default 'active' check(status in ('active','inactive','transferred')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists erp_students_class_idx on public.erp_students(class_name,section);

create table if not exists public.erp_student_access(
  student_id uuid not null references public.erp_students(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  relationship text not null check (relationship in ('student','parent','guardian')),
  primary key(student_id,user_id)
);
create index if not exists erp_student_access_user_idx on public.erp_student_access(user_id);

create table if not exists public.erp_teacher_sections(
  teacher_id uuid not null references auth.users(id) on delete cascade,
  class_name text not null,
  section text not null,
  primary key(teacher_id,class_name,section)
);

create table if not exists public.erp_admissions(
  id uuid primary key default gen_random_uuid(),
  applicant text not null,
  class_name text not null,
  guardian text,
  phone text,
  stage text not null default 'enquiry' check(stage in('enquiry','documents_pending','visit_scheduled','under_review','admitted','closed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.erp_attendance(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.erp_students(id) on delete cascade,
  day date not null,
  status text not null check(status in('present','absent','late','excused')),
  marked_by uuid references auth.users(id),
  updated_at timestamptz not null default now(),
  unique(student_id,day)
);
create index if not exists erp_attendance_day_idx on public.erp_attendance(day);

create table if not exists public.erp_timetable(
  id uuid primary key default gen_random_uuid(),
  class_name text not null,
  section text not null,
  subject text not null,
  teacher_id uuid references auth.users(id),
  weekday int not null check(weekday between 1 and 7),
  period int not null check(period between 1 and 15),
  room text,
  unique(class_name,section,weekday,period)
);

create table if not exists public.erp_exams(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.erp_students(id) on delete cascade,
  exam_name text not null,
  subject text not null,
  marks numeric(7,2) not null check(marks>=0),
  maximum_marks numeric(7,2) not null check(maximum_marks>0),
  exam_date date,
  created_at timestamptz not null default now(),
  constraint erp_marks_max check(marks<=maximum_marks)
);

create table if not exists public.erp_fee_invoices(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.erp_students(id) on delete cascade,
  fee_type text not null,
  amount numeric(12,2) not null check(amount>=0),
  paid numeric(12,2) not null default 0 check(paid>=0),
  due_date date,
  status text not null default 'unpaid' check(status in('unpaid','part_paid','paid','overdue')),
  updated_at timestamptz not null default now(),
  constraint erp_fee_paid_check check(paid<=amount)
);

create table if not exists public.erp_homework(
  id uuid primary key default gen_random_uuid(),
  class_name text not null,
  section text not null default 'A',
  subject text not null,
  title text not null,
  instructions text,
  due_date date,
  assigned_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.erp_library_books(
  id uuid primary key default gen_random_uuid(),
  catalogue_no text not null unique,
  title text not null,
  author text,
  borrower_id uuid references public.erp_students(id),
  due_date date,
  status text not null default 'available' check(status in('available','issued','reserved','lost'))
);

create table if not exists public.erp_transport_routes(
  id uuid primary key default gen_random_uuid(),
  route_name text not null,
  vehicle_registration text,
  driver_name text,
  contact_phone text,
  stops text,
  status text not null default 'active' check(status in('active','inactive'))
);

create table if not exists public.erp_notices(
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  audience text not null default 'all' check(audience in('all','students','parents','teachers','staff')),
  status text not null default 'draft' check(status in('draft','approved','archived')),
  created_by uuid references auth.users(id),
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.erp_cms_drafts(
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  title text not null,
  content text not null,
  status text not null default 'draft' check(status in('draft','under_review','approved')),
  created_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

create table if not exists public.erp_audit_logs(
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id),
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

-- Privileges + RLS: never grant anon access to school information.
revoke all on public.erp_profiles,public.erp_students,public.erp_student_access,
 public.erp_teacher_sections,public.erp_admissions,public.erp_attendance,
 public.erp_timetable,public.erp_exams,public.erp_fee_invoices,
 public.erp_homework,public.erp_library_books,public.erp_transport_routes,
 public.erp_notices,public.erp_cms_drafts,public.erp_audit_logs from anon;
grant select on public.erp_profiles,public.erp_students,public.erp_student_access,
 public.erp_teacher_sections,public.erp_admissions,public.erp_attendance,
 public.erp_timetable,public.erp_exams,public.erp_fee_invoices,public.erp_homework,
 public.erp_library_books,public.erp_transport_routes,public.erp_notices,
 public.erp_cms_drafts to authenticated;
grant insert,update,delete on public.erp_students,public.erp_admissions,
 public.erp_attendance,public.erp_timetable,public.erp_exams,
 public.erp_fee_invoices,public.erp_homework,public.erp_library_books,
 public.erp_transport_routes,public.erp_notices,public.erp_cms_drafts to authenticated;
-- Profiles and mappings intentionally cannot be client-edited: provision via audited server/admin operations.

alter table public.erp_profiles enable row level security;
alter table public.erp_students enable row level security;
alter table public.erp_student_access enable row level security;
alter table public.erp_teacher_sections enable row level security;
alter table public.erp_admissions enable row level security;
alter table public.erp_attendance enable row level security;
alter table public.erp_timetable enable row level security;
alter table public.erp_exams enable row level security;
alter table public.erp_fee_invoices enable row level security;
alter table public.erp_homework enable row level security;
alter table public.erp_library_books enable row level security;
alter table public.erp_transport_routes enable row level security;
alter table public.erp_notices enable row level security;
alter table public.erp_cms_drafts enable row level security;
alter table public.erp_audit_logs enable row level security;

create policy erp_own_profile_read on public.erp_profiles
 for select to authenticated using ((select auth.uid())=user_id);
create policy erp_own_student_link on public.erp_student_access
 for select to authenticated using ((select auth.uid())=user_id);
create policy erp_teacher_own_sections on public.erp_teacher_sections
 for select to authenticated using ((select auth.uid())=teacher_id);

-- Each table defaults to no access unless a policy explicitly permits it.
-- Admin decisions use a centrally provisioned ACTIVE profile. No user_metadata authorization.
create policy erp_admin_students on public.erp_students for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_admissions on public.erp_admissions for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_attendance on public.erp_attendance for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_timetable on public.erp_timetable for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_exams on public.erp_exams for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_fees on public.erp_fee_invoices for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_homework on public.erp_homework for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_library on public.erp_library_books for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_transport on public.erp_transport_routes for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_notices on public.erp_notices for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));
create policy erp_admin_cms on public.erp_cms_drafts for all to authenticated
 using(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active))
 with check(exists(select 1 from public.erp_profiles p where p.user_id=(select auth.uid()) and p.role='administrator' and p.active));

-- Non-admin authorization: view only if the student is explicitly assigned to that user.
create policy erp_family_student_read on public.erp_students for select to authenticated
 using(
   exists(select 1 from public.erp_student_access s where s.student_id=id and s.user_id=(select auth.uid()))
   or exists(select 1 from public.erp_teacher_sections t where t.teacher_id=(select auth.uid()) and t.class_name=class_name and t.section=section)
 );
create policy erp_family_attendance_read on public.erp_attendance for select to authenticated
 using(exists(select 1 from public.erp_student_access s where s.student_id=erp_attendance.student_id and s.user_id=(select auth.uid())));
create policy erp_family_exams_read on public.erp_exams for select to authenticated
 using(exists(select 1 from public.erp_student_access s where s.student_id=erp_exams.student_id and s.user_id=(select auth.uid())));
create policy erp_family_fees_read on public.erp_fee_invoices for select to authenticated
 using(exists(select 1 from public.erp_student_access s where s.student_id=erp_fee_invoices.student_id and s.user_id=(select auth.uid())));
create policy erp_teacher_attendance_read on public.erp_attendance for select to authenticated
 using(exists(select 1 from public.erp_students st join public.erp_teacher_sections t
  on t.class_name=st.class_name and t.section=st.section
  where st.id=erp_attendance.student_id and t.teacher_id=(select auth.uid())));
create policy erp_teacher_exams_read on public.erp_exams for select to authenticated
 using(exists(select 1 from public.erp_students st join public.erp_teacher_sections t
  on t.class_name=st.class_name and t.section=st.section
  where st.id=erp_exams.student_id and t.teacher_id=(select auth.uid())));

-- Access for teacher writes, accounts, admissions etc must be separately approved,
-- tested and narrowly scoped BEFORE enabling production workflows.
-- Audit logs and role mappings have no client write policy by design.
commit;
