/* World Tales: application code (routing, pages, reader, bookmarks, settings).
   Needs js/data.js to be loaded first. */
(function(){
const $=s=>document.querySelector(s),app=$('#app'),S=DATA.stories,R=['I','II','III','IV','V','VI','VII','VIII','IX','X'];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
{const n=((DATA.credits||{}).app||{}).copyright;if(n)$('#ft').insertAdjacentHTML('beforeend','<br>'+esc(n))}
const st={p:{},b:{},r:[]};
try{Object.assign(st,JSON.parse(localStorage.getItem('wt:v1')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('wt:v1',JSON.stringify(st))}catch(e){}};
const ts=()=>{const r=document.documentElement;r.style.setProperty('--ts',{s:.9,m:1,l:1.2}[st.ts||'m']);st.th?r.setAttribute('data-theme',st.th):r.removeAttribute('data-theme')};ts();
const ui={drawer:false,focus:false,q:''};
const sty=id=>S.find(s=>s.id===id),cat=id=>DATA.categories.find(c=>c.id===id),pr=s=>st.p[s.id];
const pct=s=>pr(s)?Math.round(pr(s).last/s.chapters.length*100):0;
const img=(i,alt,eager)=>`<img src="${i.src}" width="${i.w}" height="${i.h}" alt="${esc(alt)}" decoding="async"${eager?'':' loading="lazy"'}>`;
const badges=s=>s.genres.map(g=>`<span class="badge">${esc(g)}</span>`).join('')+`<span class="badge">${esc(s.language)}</span>`;
const cta=s=>{const p=pr(s);return `<a class="btn" href="#/read/${s.id}/${p?p.last:1}">${p?'Continue reading, chapter '+p.last:'Start reading'}</a>`};
const card=s=>`<a class="card" href="#/${s.single?'read/'+s.id+'/1':'story/'+s.id}">${img(s.cover,s.title+' cover')}<div class="cb"><h3 dir="auto">${esc(s.title)}</h3><p>${esc(s.author.name)}</p>${pr(s)?`<span class="bar"><i style="width:${pct(s)}%"></i></span>`:''}</div></a>`;

const cats=()=>DATA.categories,par=s=>s.collection?DATA.collections.find(k=>k.id===s.collection):cat(s.category),items=c=>[...S.filter(s=>s.category===c.id&&!s.collection).map(card),...(DATA.collections||[]).filter(k=>k.category===c.id).map(ccol)],IC={"home": "<path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h5v-6h4v6h5V10\"/>", "explore": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/>", "library": "<path d=\"M5 4v16M10 4v16M15 5l4 14\"/>", "settings": "<path d=\"M4 7h10M18 7h2M4 17h2M10 17h10\"/><circle cx=\"16\" cy=\"7\" r=\"2\"/><circle cx=\"8\" cy=\"17\" r=\"2\"/>"};
const cnt=c=>S.filter(s=>s.category===c.id).length,ccov=c=>c.cover||((DATA.collections||[]).find(k=>k.category===c.id)||{}).cover||(S.find(s=>s.category===c.id)||{}).cover,ccol=k=>`<a class="card" href="#/collection/${k.id}">${img(k.cover,k.name+' cover')}<div class="cb"><h3 dir="auto">${esc(k.name)}</h3><p>${esc(k.author)}</p><p>${S.filter(s=>s.collection===k.id).length} stories</p></div></a>`;
const ccard=(c,big)=>`<a class="kc${big?' big':''}${ccov(c)?'':' nc'}" href="#/category/${c.id}">${ccov(c)?img(ccov(c),c.name):''}<span class="ci"><b dir="auto">${esc(c.name)}</b><small>${cnt(c)?cnt(c)+(cnt(c)===1?' story':' stories'):'No books yet'}</small>${big?`<span class="bl">${esc(c.blurb)}</span>`:''}</span></a>`;
function home(){
  const l=sty(st.r[0]),p=l&&pr(l);
  app.innerHTML=`<div class="wrap hm">${l&&p?`<section><h2>Continue reading</h2><div class="kn"><a class="cv" href="#/story/${l.id}">${img(l.cover,l.title+' cover')}</a><div><h3 dir="auto">${esc(l.title)}</h3><p class="mu">${l.single?'Fable':'Chapter '+p.last+' of '+l.chapters.length}</p><span class="bar"><i style="width:${pct(l)}%"></i></span><p><a class="btn" href="#/read/${l.id}/${p.last}">Continue reading</a></p></div></div></section>`:''}
  <section><h2>Explore stories</h2><div class="kg">${cats().map(c=>ccard(c)).join('')}</div></section>
  <section><h2>Featured stories</h2><div class="grid">${S.filter(s=>s.featured).slice(0,4).map(card).join('')}</div></section></div>`;
}
function explore(){app.innerHTML=`<div class="wrap hm"><h1>Explore</h1><p class="mu">Choose a collection to begin.</p><div class="kg bigs">${cats().map(c=>ccard(c,1)).join('')}</div></div>`}
function library(){
  app.innerHTML=`<div class="wrap hm"><h1>Library</h1><div class="tools"><label class="sr" for="q">Search stories</label><input id="q" type="search" placeholder="Search by title, author or genre" value="${esc(ui.q)}"></div><div id="cats"></div></div>`;
  shelves();
}
function shelves(){
  const q=ui.q.trim().toLowerCase(),m=s=>(!q||[s.title,s.author.name,s.author.country,s.language,...s.genres].join(' ').toLowerCase().includes(q)),flt=!!q;
  $('#cats').innerHTML=cats().map(c=>{const l=S.filter(s=>s.category===c.id&&m(s));if(flt&&!l.length)return '';const b=flt?l.map(card).join(''):items(c).join('');return `<div class="shelf"><h3 class="ct"><a href="#/category/${c.id}">${esc(c.name)}</a></h3><p class="mu">${esc(c.blurb)}</p>${b?`<div class="grid">${b}</div>`:'<p class="mu">No books in this category yet.</p>'}<a class="more" href="#/category/${c.id}">Open ${esc(c.name)}</a></div>`}).join('')||'<p class="mu">No stories match your search.</p>';
}
function category(c){
  const b=items(c).join('');document.title=`${c.name} | World Tales`;
  app.innerHTML=`<div class="wrap hm"><p class="eye"><a href="#/explore">Explore</a> / ${esc(c.name)}</p><h1 dir="auto">${esc(c.name)}</h1><p class="mu">${esc(c.blurb)}</p>${b?`<div class="grid">${b}</div>`:'<p class="mu">No books in this category yet.</p>'}</div>`;
}
function collection(k){
  const c=cat(k.category),l=S.filter(s=>s.collection===k.id);document.title=`${k.name} | World Tales`;
  app.innerHTML=`<div class="wrap hm"><p class="eye"><a href="#/explore">Explore</a> / <a href="#/category/${c.id}">${esc(c.name)}</a> / ${esc(k.name)}</p><h1 dir="auto">${esc(k.name)}</h1><p class="mu">${esc(k.author)}. ${l.length} stories.</p><div class="grid">${l.map(card).join('')}</div></div>`;
}
function settings(){
  const z=st.ts||'m',t=st.th||'',seg=(a,v,o)=>o.map(x=>`<button data-a="${a}" data-k="${x[0]}" aria-pressed="${v===x[0]}">${x[1]}</button>`).join('');
  document.title='Settings | World Tales';
  app.innerHTML=`<div class="wrap hm set"><h1>Settings</h1><section><h2>Reading text size</h2><div class="seg">${seg('ts',z,[['s','Small'],['m','Medium'],['l','Large']])}</div><div class="txt"><p dir="auto">This is how story text will look.</p></div></section><section><h2>Appearance</h2><div class="seg">${seg('th',t,[['','Automatic'],['light','Light'],['dark','Dark']])}</div></section><section><h2>Reading history</h2><p class="mu">Remove saved progress, bookmarks and recent reading from this device.</p><button data-a="clr">Clear reading history</button></section><section><h2>About</h2><p><a href="#/about">About and credits</a></p></section></div>`;
}
function storyPage(s){
 const p=pr(s),rd=p?p.read:[],bm=st.b[s.id]||[],a=s.author,last=n=>n[n.length-1];
 const row=n=>`<li><a href="#/read/${s.id}/${n}"><span class="num">${n}</span><span>${esc(s.chapters[n-1].title)}</span><span class="mk">${bm.includes(n)?'<span title="Bookmarked">★</span>':''}${rd.includes(n)?'<span title="Read">✓</span>':''}</span></a></li>`;
 app.innerHTML=`<header class="sh"><div class="wrap hg"><div class="cover">${img(s.cover,s.title+', cover',1)}</div><div><p class="eye"><a href="#/explore">Explore</a> / <a href="#/category/${s.category}">${esc(cat(s.category).name)}</a>${s.collection?` / <a href="#/collection/${s.collection}">${esc(par(s).name)}</a>`:''}</p><h1>${esc(s.title)}</h1><p class="by">by ${esc(a.name)}${a.country?', '+esc(a.country):''}${a.years?' ('+a.years+')':''}</p><div class="badges">${badges(s)}</div><p class="lead">${esc(s.intro)}</p><p class="acts">${cta(s)}</p><p class="mu">${s.parts?s.parts.length+' parts, ':''}${s.chapters.length} chapters. ${esc(s.edition)}</p></div></div></header>
 ${s.parts?`<section class="wrap"><h2>The parts</h2><div class="parts">${s.parts.map((q,i)=>{const f=s.chapters[q.chapters[0]-1];return `<a class="part" href="#/read/${s.id}/${f.n}">${img(f.img,'')}<span class="pt"><b>Part ${R[i]}: ${esc(q.title)}</b><small>Chapters ${q.chapters[0]} to ${last(q.chapters)}</small></span></a>`}).join('')}</div></section>`:''}
 <section class="wrap"><h2>Contents</h2>${!s.parts?`<ol class="toc">${s.chapters.map((_,i)=>row(i+1)).join('')}</ol>`:s.parts.map((q,i)=>`<h3 class="ph">Part ${R[i]}: ${esc(q.title)}</h3><ol class="toc">${q.chapters.map(row).join('')}</ol>`).join('')}</section>
 <section class="wrap"><h2>Meet the characters</h2><ul class="chars">${s.characters.map(c=>`<li>${img(c.img,c.name)}<b>${esc(c.name)}</b><small>${esc(c.role)}</small></li>`).join('')}</ul></section>
 ${s.props?`<section class="wrap"><h2>${esc(s.props.title)}</h2><figure class="props">${img(s.props.img,s.props.alt)}<figcaption>${esc(s.props.caption)}</figcaption></figure></section>`:''}
 <section class="wrap">${a.bio?`<h2>About the author</h2><p style="max-width:62ch">${esc(a.bio)}</p>`:''}<p class="mu">Chapters here are summaries from the reading edition, not the full text of the novel.</p></section>`;
}
function paras(t){const x=t.replace(/\b(Dr|Mr|Mrs)\./g,'$1§').replace(/([.!?]["”’]?)\s+(?=[A-Z“"‘])/g,'$1|').split('|').map(z=>z.replace(/§/g,'.')),o=[];
 for(let i=0;i<x.length;i+=3)o.push(x.slice(i,i+3).join(' '));return o.map(z=>`<p dir="auto">${esc(z)}</p>`).join('')}
function reader(s,n){
 const T=s.chapters.length;n=Math.min(Math.max(parseInt(n)||1,1),T);
 const one=!!s.single,c=s.chapters[n-1],im=c.img||(one?s.cover:null),pi=s.parts?s.parts.findIndex(q=>q.chapters.includes(n)):-1,q=s.parts?s.parts[pi]:null,bm=st.b[s.id]||[],p=st.p[s.id]=st.p[s.id]||{last:n,read:[]};
 p.last=n;if(!p.read.includes(n))p.read.push(n);st.r=[s.id,...st.r.filter(x=>x!==s.id)].slice(0,6);save();
 const nv=(m,l,k)=>m>=1&&m<=T?`<a class="btn${k}" href="#/read/${s.id}/${m}">${l}</a>`:'<span></span>';
 document.title=`${c.title} | ${s.title} | World Tales`;
 app.innerHTML=`<div class="rbar"><a href="${one?(s.collection?'#/collection/'+s.collection:'#/category/'+s.category):'#/story/'+s.id}">Back to ${esc(one?par(s).name:s.title)}</a>${one?'':'<button data-a="toc" aria-expanded="false" aria-controls="dr">Chapters</button>'}<button data-a="bm" aria-pressed="${bm.includes(n)}">${bm.includes(n)?'Bookmarked ★':'Bookmark ☆'}</button><button data-a="fx">Focus mode</button></div>
 ${one?'':`<div class="prog" role="progressbar" aria-label="Reading progress" aria-valuemin="1" aria-valuemax="${T}" aria-valuenow="${n}"><i style="width:${n/T*100}%"></i></div>`}
 <article class="rd"><p class="eye">${one?esc(par(s).name):`${q?`Part ${R[pi]}: ${esc(q.title)}. `:''}Chapter ${n} of ${T}`}</p><h1>${esc(c.title)}</h1>${im?`<figure class="ill${im.h>im.w?' tall':''}${one?' cov':''}">${img(im,c.alt||s.title+' cover',1)}</figure>`:''}${one?'':'<p class="tag">Chapter summary</p>'}<div class="txt">${c.paras?c.paras.map(z=>`<p dir="auto">${esc(z)}</p>`).join(''):paras(c.text)}</div>${one?'':`<nav class="pn" aria-label="Chapter navigation">${nv(n-1,'Previous chapter',' ghost')}${nv(n+1,'Next chapter','')}</nav>`}</article>
 ${one?'':`<div class="scrim" data-a="toc"></div><aside id="dr" class="drawer" aria-label="Chapter list" inert><div class="dh"><b>${esc(s.title)}</b><button data-a="toc" aria-label="Close chapter list">Close</button></div>${(s.parts||[{chapters:s.chapters.map(c=>c.n)}]).map((g,i)=>`${g.title?`<h3 class="ph">Part ${R[i]}: ${esc(g.title)}</h3>`:''}<ol class="toc">${g.chapters.map(m=>`<li><a href="#/read/${s.id}/${m}"${m===n?' aria-current="page"':''}><span class="num">${m}</span><span>${esc(s.chapters[m-1].title)}</span><span class="mk">${bm.includes(m)?'★':''}</span></a></li>`).join('')}</ol>`).join('')}</aside>`}
 <div class="fx"><button data-a="fx">Exit focus mode</button></div>`;
 sync();
}
function sync(){document.body.classList.toggle('focus',ui.focus);const d=$('#dr');if(!d)return;d.classList.toggle('open',ui.drawer);d.inert=!ui.drawer;$('.scrim').classList.toggle('on',ui.drawer);const t=$('[data-a=toc][aria-expanded]');if(t)t.setAttribute('aria-expanded',ui.drawer)}
function about(){
  const C=DATA.credits||{},A=C.app||{},T=C.thirdParty||[],f=(k,v)=>v?`<p><b>${k}:</b> ${esc(v)}</p>`:'';
  document.title='About and credits | World Tales';
  app.innerHTML=`<div class="wrap abt"><p class="eye"><a href="#/settings">Settings</a> / About</p><h1>About World Tales</h1><p class="lead">World Tales is an illustrated library of world literature, with chapter summaries, illustrations and character guides for each story.</p>
  ${DATA.contact?`<section><h2>${esc(DATA.contact.heading)}</h2><article class="cr">${DATA.contact.text.map(t=>`<p>${esc(t)}</p>`).join('')}<p><b>Email:</b> <a href="mailto:${esc(DATA.contact.email)}">${esc(DATA.contact.email)}</a></p></article></section>`:''}
  ${A.copyright||A.developer||A.contact?`<section><h2>The application</h2>${f('Copyright',A.copyright)}${f('Created by',A.developer)}${f('Contact',A.contact)}</section>`:''}
  <section><h2>The stories</h2>${[...S.filter(s=>!s.single&&!s.collection).map(s=>({t:s.title,a:s.author,c:s.credits})),...(DATA.collections||[]).map(k=>({t:k.name,a:{name:k.author},c:k.credits,l:S.filter(s=>s.collection===k.id).map(s=>s.title).join(', ')}))].map(({t,a,c,l})=>{c=c||{};const il=c.illustrations||{};return `<article class="cr"><h3>${esc(t)}</h3>${f('Stories',l)}${f('Author',a.name+(a.years?' ('+a.years+')':''))}${f('Original publication',c.published)}${f('Source edition',c.edition)}${f('Translator',c.translator)}${f('Illustrations',il.credit)}${f('Illustration license',il.license)}${f('Notes',c.notes)}${a.bio?`<details><summary>About ${esc(a.name)}</summary><p>${esc(a.bio)}</p></details>`:''}</article>`}).join('')}</section>
  ${T.length?`<section><h2>Acknowledgments</h2><ul>${T.map(t=>`<li>${esc(t.name)}${t.what?': '+esc(t.what):''}${t.license?'. '+esc(t.license):''}</li>`).join('')}</ul></section>`:''}</div>`;
}
function route(){
 const [,v,id,n]=location.hash.slice(1).split('/'),s=sty(id);ui.drawer=false;if(v==='story'&&s&&s.single){location.replace('#/read/'+id+'/1');return}
 const ak=v==='read'?'':v==='explore'||v==='category'||v==='collection'||v==='story'?'explore':v==='library'?'library':v==='settings'||v==='about'?'settings':'home';
  $('#nav').innerHTML=[['home','#/','Home'],['explore','#/explore','Explore'],['library','#/library','Library'],['settings','#/settings','Settings']].map(x=>`<a href="${x[1]}"${ak===x[0]?' aria-current="page"':''}><svg class="ni" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[x[0]]}</svg><span>${x[2]}</span></a>`).join('');document.body.classList.toggle('inread',v==='read'&&!!s);
 document.title=s?`${s.title} | World Tales`:'World Tales';
 if(v==='read'&&s)reader(s,n);else{ui.focus=false;if(v==='story'&&s)storyPage(s);else if(v==='about')about();else if(v==='explore')explore();else if(v==='library')library();else if(v==='settings')settings();else if(v==='category'&&cat(id))category(cat(id));else if(v==='collection'&&(DATA.collections||[]).some(k=>k.id===id))collection(DATA.collections.find(k=>k.id===id));else home();sync()}
 scrollTo(0,0);app.focus({preventScroll:true});
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,[,,id,n]=location.hash.slice(1).split('/');
 if(a==='toc'){ui.drawer=!ui.drawer;sync()}
 if(a==='fx'){ui.focus=!ui.focus;sync()}
  if(a==='ts'||a==='th'){const y=scrollY;if(a==='ts')st.ts=b.dataset.k;else if(b.dataset.k)st.th=b.dataset.k;else delete st.th;save();ts();settings();scrollTo(0,y)}
  if(a==='clr'&&confirm('Clear all reading progress, bookmarks and recent reading on this device?')){st.p={};st.b={};st.r=[];save();settings()}
 if(a==='bm'){const k=+n,l=st.b[id]=st.b[id]||[],i=l.indexOf(k);i<0?l.push(k):l.splice(i,1);save();const y=scrollY;reader(sty(id),k);scrollTo(0,y)}});
document.addEventListener('input',e=>{if(e.target.id==='q'){ui.q=e.target.value;shelves()}});
addEventListener('keydown',e=>{const [,v,id,n]=location.hash.slice(1).split('/');if(v!=='read'||/INPUT|TEXTAREA/.test(e.target.tagName))return;const s=sty(id),k=+n;if(!s)return;
 if(e.key==='ArrowRight'&&k<s.chapters.length)location.hash=`#/read/${id}/${k+1}`;
 if(e.key==='ArrowLeft'&&k>1)location.hash=`#/read/${id}/${k-1}`;
 if(e.key==='Escape'){if(ui.drawer)ui.drawer=false;else ui.focus=false;sync()}});
addEventListener('hashchange',route);route();
})();
