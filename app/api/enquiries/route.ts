import { enquiries } from "../../../db/schema";

export async function POST(request:Request){
 try{
  const type=request.headers.get('content-type')||'';let body:Record<string,string>;
  if(type.includes('application/json')) body=await request.json() as Record<string,string>;
  else body=Object.fromEntries((await request.formData()).entries()) as Record<string,string>;
  const parentName=body.parentName?.trim(),childName=body.childName?.trim(),phone=body.phone?.replace(/\s/g,''),grade=body.grade?.trim();
  if(!parentName||!childName||!/^\+?\d{10,13}$/.test(phone||'')||!grade)return Response.json({error:'Please check the required fields.'},{status:400});
  const { getDb } = await import('../../../db');
  await getDb().insert(enquiries).values({id:crypto.randomUUID(),parentName,childName,phone,grade,status:'new',createdAt:new Date().toISOString()});
  if(!type.includes('application/json'))return Response.redirect(new URL('/contact?submitted=1',request.url),303);
  return Response.json({ok:true},{status:201});
 }catch(error){return Response.json({error:error instanceof Error?error.message:'Unable to save enquiry'},{status:500})}
}
