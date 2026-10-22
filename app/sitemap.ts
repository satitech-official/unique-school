import type { MetadataRoute } from "next";
const routes=['','about','contact','gallery','sports','admission','academics','student-life','facilities','dashboard','news','events','notices','achievements','faculty','transport','downloads','mandatory-disclosure','privacy-policy'];
export default function sitemap():MetadataRoute.Sitemap{return routes.map((route,i)=>({url:`https://veena-vadini-public-school.nikhilbaraskar551.chatgpt.site/${route}`,lastModified:new Date(),changeFrequency:i?'monthly':'weekly',priority:i?0.7:1}))}
