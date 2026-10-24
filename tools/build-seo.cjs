// Run from the repository root: node tools/build-seo.cjs
// Re-run after updating js/data.js. No npm dependencies required.
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..'),origin='https://mojtaba40h-prog.github.io';
const dataCode=fs.readFileSync(path.join(root,'js/data.js'),'utf8');
const data=vm.runInNewContext(dataCode+';DATA');
const appCode=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=s=>s.replace(/href="#\//g,'href="/');
const routes=['/','/explore/','/library/','/settings/','/about/',...data.categories.map(c=>'/category/'+c.id+'/'),...(data.collections||[]).map(c=>'/collection/'+c.id+'/')];
for(const s of data.stories){if(!s.single)routes.push('/story/'+s.id+'/');for(let i=1;i<=s.chapters.length;i++)routes.push('/read/'+s.id+'/'+i+'/')}
const urls=[];
for(const url of routes){
 const elements={};
 function el(){return {innerHTML:'',classList:{toggle(){}},style:{setProperty(){}},setAttribute(){},removeAttribute(){},insertAdjacentHTML(_,s){this.innerHTML+=s},focus(){}}}
 for(const id of ['#app','#nav','#ft','#cats'])elements[id]=el();
 const document={title:'World Tales',querySelector:s=>elements[s]||null,querySelectorAll:()=>[],documentElement:el(),body:el(),addEventListener(){}};
 const ctx={document,location:{hash:'',pathname:url,replace(){throw Error('Unexpected redirect '+url)}},localStorage:{getItem:()=>null,setItem(){}},scrollTo(){},addEventListener(){}};
 vm.runInNewContext(dataCode+';\n'+appCode,ctx);
 elements['#app'].innerHTML=elements['#app'].innerHTML.replace('<div id="cats"></div>','<div id="cats">'+elements['#cats'].innerHTML+'</div>');
 const [,kind,id,n]=url.split('/'),s=data.stories.find(s=>s.id===id),c=s&&kind==='read'?s.chapters[Number(n)-1]:null;
 const title=url==='/'?'World Tales | Illustrated Classic Stories':document.title;
 const desc=(c?(c.paras?c.paras.join(' '):c.text):s?s.intro:kind==='category'?(data.categories.find(c=>c.id===id)||{}).blurb:'Explore illustrated classic stories, short chapter summaries and character guides at World Tales.').replace(/\s+/g,' ').slice(0,165);
 const noindex=['settings','library'].includes(kind);
 const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><base href="/"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${origin+url}">${noindex?'<meta name="robots" content="noindex,follow">':''}<link rel="icon" href="assets/favicon.png"><link rel="stylesheet" href="css/style.css"><script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQBPFZJGM"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-SVQBPFZJGM');</script></head><body${kind==='read'?' class="inread"':''}><header class="top"><div class="wrap"><a class="logo" href="/"><img src="assets/logo.png" alt="" width="58" height="46">World Tales</a><nav id="nav" aria-label="Main">${clean(elements['#nav'].innerHTML)}</nav></div></header><main id="app" tabindex="-1">${clean(elements['#app'].innerHTML)}</main><footer id="ft">World Tales, an illustrated library of world literature. <a href="/about/">About and credits</a>${elements['#ft'].innerHTML}</footer><script src="js/startup-check.js" charset="utf-8"></script><script src="js/data.js" charset="utf-8"></script><script src="js/app.js" charset="utf-8"></script></body></html>`;
 const dest=path.join(root,url,'index.html');fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
 if(!noindex)urls.push(origin+url);
}
fs.writeFileSync(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(u=>'<url><loc>'+esc(u)+'</loc></url>').join('\n')+'\n</urlset>\n');
fs.writeFileSync(path.join(root,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+origin+'/sitemap.xml\n');
console.log(`Generated ${routes.length} HTML pages; ${urls.length} sitemap URLs.`);
