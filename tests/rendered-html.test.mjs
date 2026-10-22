import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("homepage uses accurate school identity and independent routes",async()=>{const source=await readFile("app/page.tsx","utf8");assert.match(source,/ESTABLISHED IN 2025/);assert.match(source,/href="\/admission"/);assert.match(source,/href="\/academics"/);assert.doesNotMatch(source,/EST\.\s*<\/span><b>2017/)});
test("public navigation contains no placeholder links",async()=>{const source=await readFile("components/SiteChrome.tsx","utf8");assert.doesNotMatch(source,/href=["']#["']/);for(const route of ['/about','/academics','/admission','/student-life','/sports','/facilities','/gallery','/dashboard','/contact'])assert.match(source,new RegExp(route.replace('/','\\/')))});
test("ERP and private APIs are excluded from indexing",async()=>{const source=await readFile("app/robots.ts","utf8");assert.match(source,/\/erp\//);assert.match(source,/\/api\//)});
test("enquiries are persisted through the database helper",async()=>{const source=await readFile("app/api/enquiries/route.ts","utf8");assert.match(source,/getDb\(\)\.insert\(enquiries\)/);assert.match(source,/status:400/)});
