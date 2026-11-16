# Unique School ERP — production readiness

## Current live release
This is a clearly identified interactive **demo**, NOT a live authenticated school management system.

- 15 interactive modules: Students, Admissions, Attendance, Academics, Exams, Fees, Transport, Library, Homework, Certificates, ID Cards, Notices, Reports, CMS and Settings.
- Form validation, locally saved demo records, edit/delete, attendance marking, search, status filters, CSV exports, demo reports and print previews.
- Synthetic records only. Records created during the demonstration remain in the current browser.
- Role dropdown is a UI preview, not security or authorization. The old any-password login was removed.
- CMS drafts do not publish to the public site; fees do not charge payments; print previews are not official certificates.
- Never enter real student, guardian, fee or staff information into this open demo.

## To launch a real school ERP
1. Provision a **new school-owned dedicated database and authentication project**. Do not reuse another business's Supabase project without explicit approval. Obtain cost approval if a new project has a nonzero quoted cost.
2. Review the proposed SQL file: database/unique-school-erp.supabase.sql. It has RLS, model constraints, roles and limited scoped read policies. It has **not been executed** in a project.
3. Invite approved school staff through verified accounts, assign server-managed roles, and configure MFA for administrators.
4. Configure Vercel environment variables for a **dedicated school project**. Keep all service-role keys server-side. No keys or student information in Git.
5. Replace all browser-local CRUD paths with authenticated server queries, backed by Postgres RLS; enforce role permissions and school ownership on *every* action.
6. Test least-privilege access for parent/student/teacher/admin, approval processes, fee ledgers, receipts, exams, timetable, attendance, homework, transport, library, files, certificates, notices and CMS.
7. Implement immutable audit logs, backups, consent/retention policy, imports and secure exports. Obtain school administrator approval of fees, official documents and student records.
8. QA mobile widths, security, backup recovery and load testing before using it with actual personal information.

## Relevant files
- components/erp/ERPWorkspace.tsx — browser-based demo application
- components/erp/erpData.ts — module fields and synthetic records
- app/erp/page.tsx — demo entry route
- app/globals.css — responsive ERP styling
- database/unique-school-erp.supabase.sql — future protected database migration
- db/index.ts — existing Cloudflare D1 enquiry backend, NOT a Vercel ERP connection

No dedicated school database, real user accounts, or production ERP records were created or connected in this release.
