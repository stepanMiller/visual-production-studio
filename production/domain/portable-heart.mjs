// Converts the anonymized presentation to work under both the GitHub Pages
// project path and a later custom domain at the root. Run once; it checks
// all expected source strings before writing anything.
import {readFileSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'../..');
const paths={
  html:'cases/heart/index.html',
  app:'cases/heart/_next/static/chunks/049_xztlzsmus.js',
  bootstrap:'cases/heart/_next/static/chunks/07lhk_q6pmm3r.js',
  runtime:'cases/heart/_next/static/chunks/turbopack-0cek.dh0dqtgy.js'
};
const files=Object.fromEntries(Object.entries(paths).map(([key,path])=>[key,{path,content:readFileSync(resolve(root,path),'utf8')}]));
function replace(key,oldValue,newValue,count){
  const file=files[key];
  const occurrences=file.content.split(oldValue).length-1;
  if(occurrences!==count) throw Error(`${file.path}: wanted ${count} copies of ${oldValue}, found ${occurrences}`);
  file.content=file.content.replaceAll(oldValue,newValue);
}
replace('html','/visual-production-studio/cases/heart/','./',125);
replace('app','let i="/visual-production-studio/cases/heart";function r(e)',
  'let i=new URL(".",location.href).pathname.replace(/\\/$/,"");function r(e)',1);
replace('app','let i="/visual-production-studio/assets/healthcare-heart-music.mp4",r="/visual-production-studio/assets/healthcare-heart-music.mp4";',
  'let i=new URL("../../assets/healthcare-heart-music.mp4",location.href).pathname,r=i;',1);
replace('bootstrap','t.indexOf("/visual-production-studio/cases/heart/_next/")',
  't.indexOf(new URL(".",location.href).pathname+"_next/")',1);
replace('runtime','let t="/visual-production-studio/cases/heart/_next/",r=function()',
  'let t=new URL("../../",document.currentScript.src).pathname,r=function()',1);
for(const {path,content} of Object.values(files))writeFileSync(resolve(root,path),content);
console.log('Converted',Object.values(paths));
