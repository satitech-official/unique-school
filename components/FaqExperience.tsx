"use client";
import {useEffect,useMemo,useState} from "react";
const categories=[
 {id:"general",name:"General",icon:"fa-school",summary:"Discover Unique School",items:[
 ["Where is Unique Higher Secondary Public School located?","The school is located near Kirad Mangal Bhawan, Sadar, Betul, Madhya Pradesh."],
 ["How can we contact the school office?","Call +91 94520 03222 or use the official enquiry options on the Contact page."],
 ["Can parents visit the school?","Yes, you may request a campus visit. Please confirm the appointment with the school office before travelling."],
 ["Where can we find verified announcements?","Check the News, Events and Notices pages, and contact the school for the latest approved information."]]},
 {id:"academics",name:"Academics",icon:"fa-book-open",summary:"Classes, curriculum & learning",items:[
 ["Which classes are available?","Please ask the school office to confirm the current classes, seat availability and admission eligibility."],
 ["Which education board and streams does the school offer?","Official affiliation, streams, subjects and medium of instruction should be confirmed with the administration before making an admission decision."],
 ["How are examinations and learning progress communicated?","Ask the school about its current assessment methods, reports and parent-teacher communication arrangements."],
 ["Where can I get the academic calendar?","Request the school's current approved calendar through the Contact or Downloads page."],
 ["Is computer learning part of the programme?","Please confirm technology resources, timetable and available practical activities directly with the school."]]},
 {id:"admissions",name:"Admissions",icon:"fa-clipboard-list",summary:"Admission journey & enquiries",items:[
 ["Are admissions open right now?","Admission dates, available classes and seats can change. Confirm the latest status directly with the school office."],
 ["How do I send an admission enquiry?","Open the Admissions page, complete its guided enquiry form and send the prefilled message through WhatsApp."],
 ["What documents might be needed?","Depending on class and school policy, the school may request age proof, student photographs, previous academic reports and a transfer certificate where applicable."],
 ["Where can I find the current fees?","Request the latest officially approved fee details from the school. Fees are not collected through the website enquiry form."],
 ["Can I request a campus visit before applying?","Yes. Use the campus visit enquiry button and wait for the school to confirm a suitable appointment."]]},
 {id:"student-life",name:"Student Life",icon:"fa-children",summary:"Activities & everyday experience",items:[
 ["What activities can students take part in?","Explore the Student Life page for illustrative themes. Ask the school which clubs, creative activities and celebrations are currently offered."],
 ["Does the school organise cultural events?","Please confirm current events, participation details and the annual schedule with school staff."],
 ["How are student achievements showcased?","Verified achievements may be published after school approval and appropriate student or guardian consent."],
 ["Can parents contribute to school activities?","Contact the school to ask about parent meetings, events and opportunities for involvement."]]},
 {id:"sports",name:"Sports",icon:"fa-futbol",summary:"Games, fitness & wellbeing",items:[
 ["Which sports are available?","The Sports page showcases illustrative activities. Confirm actual sports, equipment and facilities with the school office."],
 ["Are coaching or training sessions available?","Ask about available coaching, the supervision arrangements and any training schedules."],
 ["Does the school participate in inter-school competitions?","Participation and results will be shown once verified; contact the school for the latest details."],
 ["Can parents visit the sports areas?","Request a campus visit with the school office and ask which facilities can be viewed."],
 ["What safety measures apply during sports?","The school can provide its official supervision, hydration, first-aid and activity policies on request."]]},
 {id:"facilities",name:"Facilities",icon:"fa-building-columns",summary:"Campus spaces & student support",items:[
 ["Are the website photos from Unique School?","Photos on the Facilities page are illustrative reference images, not verified photographs of the Unique School campus."],
 ["Are computer and science laboratories available?","Ask the administration to confirm the labs, equipment and practical learning arrangements currently available."],
 ["Does the campus have a library?","Library and reading-space access must be confirmed with the school office."],
 ["Does the school provide buses?","Contact the school to confirm current transport options, routes, stops and fees."],
 ["Can parents ask about water, hygiene, security and accessibility?","Yes. School staff can provide details about these arrangements and available student support."]]},
 {id:"gallery",name:"Gallery & Events",icon:"fa-images",summary:"Photographs & celebrations",items:[
 ["Where can we see school photographs?","Visit the Gallery page. Any illustrative stock photos are identified as such until authentic, approved school photographs are supplied."],
 ["Where will upcoming events be announced?","Look at the Events and Notices pages for school-approved dates and information."],
 ["How can student photos be added to the website?","School administrators should approve the images and obtain appropriate permission before publishing student photographs."]]},
 {id:"dashboard",name:"Dashboard & ERP",icon:"fa-gauge-high",summary:"School portal help",items:[
 ["Who can access the school dashboard?","Access depends on the school portal and authorised user permissions. Contact the administration for credentials and access guidance."],
 ["How do I report an ERP login problem?","Contact the school office and describe the login issue. Never send your password through an enquiry or WhatsApp message."],
 ["Is the ERP portal fully operational?","Please verify the status of any ERP features with the school before relying on them for attendance, fees or student records."]]},
 {id:"contact",name:"Contact & Transport",icon:"fa-headset",summary:"Reach the right team",items:[
 ["What is the school's contact number?","You can call +91 94520 03222."],
 ["How do I reach the school?","The school is near Kirad Mangal Bhawan, Sadar, Betul, Madhya Pradesh. Use the directions link on the Contact page."],
 ["How can I enquire about transport?","Ask the school office to verify routes, stops, seats, timing and applicable transport charges."],
 ["Can I enquire directly on WhatsApp?","Yes. The website links to the school's listed WhatsApp number and prepares a message for you to review and send."]]}
] as const;
type CategoryId=typeof categories[number]["id"];
export default function FaqExperience(){
 const [category,setCategory]=useState<CategoryId>("general"),[search,setSearch]=useState(""),[open,setOpen]=useState<string|null>("general-0");
 const [show,setShow]=useState(true);
 const [expandedAll,setExpandedAll]=useState(false);
 const visible=useMemo(()=>categories.filter(c=>(!search.trim()||c.items.some(([q,a])=>(q+" "+a).toLowerCase().includes(search.toLowerCase().trim()))||c.name.toLowerCase().includes(search.toLowerCase().trim()))&&(search.trim()||category===c.id)),[category,search]);
 const count=categories.reduce((n,c)=>n+c.items.length,0);
 const select=(id:CategoryId)=>{setCategory(id);setOpen(id+"-0");setExpandedAll(false);setShow(false);requestAnimationFrame(()=>setShow(true))};
 useEffect(()=>{const f=(e:KeyboardEvent)=>{if(e.key==="Escape")setSearch("")};window.addEventListener("keydown",f);return()=>window.removeEventListener("keydown",f)},[]);
 return <main className="faq-page">
  <section className="faq-hero"><div className="faq-hero-orb one"/><div className="faq-hero-orb two"/><div className="faq-wrap faq-hero-content"><span className="faq-eyebrow"><i className="fa-solid fa-circle-question" aria-hidden="true"/> UNIQUE SCHOOL / HELP CENTRE</span><div className="faq-hero-split"><div><h1>Questions?<br/><em>Answers.</em></h1><p>One helpful place for academics, admissions, student life, sports, facilities and everything in between.</p><a href="#faq-categories">Find your answer <i className="fa-solid fa-arrow-down" aria-hidden="true"/></a></div><div className="faq-hero-art" aria-hidden="true"><span>?</span><div><b>Q.</b><strong>A.</strong></div></div></div><div className="faq-hero-bottom"><span><i className="fa-solid fa-layer-group" aria-hidden="true"/> {categories.length} TOPIC AREAS</span><span><i className="fa-regular fa-comments" aria-hidden="true"/> {count} ANSWERS</span><span>MADE FOR STUDENTS & PARENTS</span></div></div></section>
  <section className="faq-search-band"><div className="faq-wrap"><label htmlFor="faq-search-input"><i className="fa-solid fa-magnifying-glass" aria-hidden="true"/><input id="faq-search-input" type="search" value={search} onChange={e=>{setSearch(e.target.value);setShow(true);setExpandedAll(false)}} placeholder="Search fees, classes, transport, sports..." autoComplete="off"/>{search&&<button type="button" onClick={()=>setSearch("")} aria-label="Clear search"><i className="fa-solid fa-xmark" aria-hidden="true"/></button>}</label><p>Try “fees”, “campus visit”, “sports” or “library”</p></div></section>
  <section className="faq-wrap faq-content" id="faq-categories"><div className="faq-title"><span className="faq-eyebrow">01 / EXPLORE BY TOPIC</span><h2>Everything, <em>in its place.</em></h2><p>Select a topic to explore its questions and answers, or search across all topics.</p></div><div className="faq-columns"><nav className="faq-sidebar" aria-label="FAQ topics">{categories.map(c=><button key={c.id} type="button" onClick={()=>{setSearch("");select(c.id)}} className={category===c.id&&!search?"active":""} aria-current={category===c.id&&!search?"true":undefined}><i className={"fa-solid "+c.icon} aria-hidden="true"/><span>{c.name}<small>{c.summary}</small></span><i className="fa-solid fa-arrow-right" aria-hidden="true"/></button>)}</nav><div className={"faq-answers "+(show?"faq-fade-in":"faq-fade-out")}><div className="faq-answers-toolbar"><span>{search?"SEARCH RESULTS":"SELECTED TOPIC"}</span><button type="button" onClick={()=>setExpandedAll(!expandedAll)}><i className={"fa-solid "+(expandedAll?"fa-compress":"fa-expand")} aria-hidden="true"/> {expandedAll?"Collapse all":"Expand all"}</button></div>{visible.length?visible.map((c,k)=>{const list=c.items.map(([q,a],i)=>({q,a,i})).filter(({q,a})=>!search.trim()||c.name.toLowerCase().includes(search.toLowerCase().trim())||(q+" "+a).toLowerCase().includes(search.toLowerCase().trim()));return <section key={c.id} className="faq-group" style={{animationDelay:k*80+"ms"}}><div className="faq-group-heading"><div className="faq-group-icon"><i className={"fa-solid "+c.icon} aria-hidden="true"/></div><div><span>TOPIC {String(categories.indexOf(c)+1).padStart(2,"0")}</span><h3>{c.name}</h3><p>{c.summary}</p></div></div><div className="faq-qa-list">{list.map(({q,a,i})=>{const id=c.id+"-"+i;const expanded=expandedAll||open===id;return <article key={id} className={expanded?"expanded":""}><button type="button" onClick={()=>{setExpandedAll(false);setOpen(open===id?null:id)}} aria-expanded={expanded}><span className="faq-question-num">{String(i+1).padStart(2,"0")}</span><span>{q}</span><i className={"fa-solid "+(expanded?"fa-minus":"fa-plus")} aria-hidden="true"/></button><div className="faq-answer" aria-hidden={!expanded}><p>{a}</p></div></article>})}</div></section>}):<div className="faq-empty"><i className="fa-regular fa-face-frown" aria-hidden="true"/><h3>No matching questions</h3><p>Try searching another word or choose a topic.</p><button type="button" onClick={()=>setSearch("")}>Clear search</button></div>}</div></div></section>
  <section className="faq-links"><div className="faq-wrap"><span className="faq-eyebrow">02 / KEEP EXPLORING</span><h2>Explore the school.</h2><div className="faq-links-grid">{[["Academics","/academics","fa-book-open"],["Admissions","/admission","fa-clipboard-check"],["Sports","/sports","fa-futbol"],["Facilities","/facilities","fa-building-columns"]].map(([t,url,icon])=><a key={t} href={url}><i className={"fa-solid "+icon} aria-hidden="true"/><span>{t}</span><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"/></a>)}</div></div></section>
  <section className="faq-cta"><div className="faq-wrap faq-cta-grid"><div><span className="faq-eyebrow">03 / STILL HAVE QUESTIONS?</span><h2>We're here to <em>help.</em></h2><p>For official fees, eligibility, facilities and up-to-date information, please contact the school office.</p></div><div><a href="https://wa.me/919452003222?text=Hello%20Unique%20School%2C%20I%20have%20a%20question%20about%20the%20school." target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true"/> Ask on WhatsApp</a><a href="/contact"><i className="fa-solid fa-envelope" aria-hidden="true"/> Contact school</a></div></div></section>
 </main>
}