/* World Tales — Premium Digital Storytelling Platform
   Client-side Hydration & Clean Path-based Navigation (No Hash Routing)
   Requires js/data.js to be loaded first. */
(function () {
  const $ = (s) => document.querySelector(s);
  const app = $('#app');
  const S = DATA.stories;
  const R = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  // Base path detection: supports both GitHub Pages (/World_Tales/) and root hosting (/)
  const basePath = location.pathname.includes('/World_Tales/') ? '/World_Tales/' : '/';

  // Safe HTML Escaping
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Backward compatibility: redirect any legacy hash URLs (e.g. #/story/treasure-island)
  if (location.hash && location.hash.startsWith('#/')) {
    const cleanPath = location.hash.slice(2).replace(/^\/|\/$/g, '');
    history.replaceState(null, '', basePath + (cleanPath ? cleanPath + '/' : ''));
  }

  // Persistent State Schema (wt:v1)
  const st = { p: {}, b: {}, r: [] };
  try {
    Object.assign(st, JSON.parse(localStorage.getItem('wt:v1') || '{}'));
  } catch (e) {}

  const save = () => {
    try {
      localStorage.setItem('wt:v1', JSON.stringify(st));
    } catch (e) {}
  };

  // Typography Scaling and Theme Controller
  const ts = () => {
    const r = document.documentElement;
    r.style.setProperty('--ts', { s: 0.9, m: 1, l: 1.2 }[st.ts || 'm']);
    if (st.th) {
      r.setAttribute('data-theme', st.th);
    } else {
      r.removeAttribute('data-theme');
    }
  };
  ts();

  // Ephemeral UI State
  const ui = { drawer: false, focus: false, q: '' };

  // Helper Lookups
  const sty = (id) => S.find((s) => s.id === id);
  const cat = (id) => DATA.categories.find((c) => c.id === id);
  const pr = (s) => (s ? st.p[s.id] : null);
  const pct = (s) => (pr(s) && s.chapters && s.chapters.length ? Math.round((pr(s).last / s.chapters.length) * 100) : 0);

  // Responsive Image Component with Spine Ridge
  const img = (i, alt, eager) => {
    if (!i || !i.src) return '';
    const src = i.src.startsWith('http') || i.src.startsWith('/') ? i.src : basePath + i.src;
    return `<img src="${esc(src)}" width="${i.w || 300}" height="${i.h || 450}" alt="${esc(alt || '')}" decoding="async"${eager ? '' : ' loading="lazy"'}>`;
  };

  const badges = (s) => (s.genres || []).map((g) => `<span class="badge">${esc(g)}</span>`).join('') + (s.language ? `<span class="badge">${esc(s.language)}</span>` : '');

  const cta = (s) => {
    const p = pr(s);
    return `<a class="btn" href="${basePath}read/${s.id}/${p ? p.last : 1}/">${p ? 'Continue reading, chapter ' + p.last : 'Start reading'}</a>`;
  };

  // Professional Story Card with Clean Path URLs
  const card = (s) => {
    const p = pr(s);
    const dest = s.single ? `read/${s.id}/1/` : `story/${s.id}/`;
    const genre = s.genres && s.genres[0] ? esc(s.genres[0]) : (cat(s.category) ? esc(cat(s.category).name) : '');
    return `
      <a class="card" href="${basePath}${dest}" aria-label="${esc(s.title)} by ${esc(s.author.name)}">
        <div class="cover-wrap">
          ${img(s.cover, s.title + ' cover')}
          <span class="book-spine-highlight"></span>
        </div>
        <div class="cb">
          <p class="eyebrow" style="margin-bottom:4px;font-size:0.72rem">${genre}</p>
          <h3 dir="auto">${esc(s.title)}</h3>
          <p>${esc(s.author.name)}</p>
          <div class="card-footer">
            <span>${s.single ? 'Fable' : (s.chapters ? s.chapters.length + ' chapters' : '')}</span>
            ${p ? `<span style="color:var(--gold-t);font-weight:600">${pct(s)}%</span>` : ''}
          </div>
          ${p ? `<span class="bar"><i style="width:${pct(s)}%"></i></span>` : ''}
        </div>
      </a>
    `;
  };

  const cats = () => DATA.categories;
  const par = (s) => (s.collection ? (DATA.collections || []).find((k) => k.id === s.collection) : cat(s.category));
  const items = (c) => [
    ...S.filter((s) => s.category === c.id && !s.collection).map(card),
    ...(DATA.collections || []).filter((k) => k.category === c.id).map(ccol)
  ];

  // SVG Navigation Icons
  const IC = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    explore: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    library: '<path d="M5 4v16M10 4v16M15 5l4 14"/>',
    settings: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>'
  };

  const cnt = (c) => S.filter((s) => s.category === c.id).length;
  const ccov = (c) => c.cover || ((DATA.collections || []).find((k) => k.category === c.id) || {}).cover || (S.find((s) => s.category === c.id) || {}).cover;

  // Collection Card
  const ccol = (k) => `
    <a class="card collection-card" href="${basePath}collection/${k.id}/">
      <div class="cover-wrap">
        ${img(k.cover, k.name + ' cover')}
        <span class="book-spine-highlight"></span>
      </div>
      <div class="cb">
        <p class="eyebrow" style="margin-bottom:4px;font-size:0.72rem">COLLECTION</p>
        <h3 dir="auto">${esc(k.name)}</h3>
        <p>${esc(k.author)}</p>
        <div class="card-footer">
          <span>${S.filter((s) => s.collection === k.id).length} Stories</span>
        </div>
      </div>
    </a>
  `;

  // Visual Category Plate
  const ccard = (c, big) => `
    <a class="kc${big ? ' big' : ''}${ccov(c) ? '' : ' nc'}" href="${basePath}category/${c.id}/">
      ${ccov(c) ? img(ccov(c), c.name) : ''}
      <span class="ci">
        <b dir="auto">${esc(c.name)}</b>
        <small>${cnt(c)} ${cnt(c) === 1 ? 'story' : 'stories'}</small>
        ${big ? `<span class="bl">${esc(c.blurb)}</span>` : ''}
      </span>
    </a>
  `;

  const getSpotlightStory = () => S.find((s) => s.id === 'treasure-island') || S.find((s) => s.id === 'alice-in-wonderland') || S[0];

  // Route URL Parser
  const parseCurrentRoute = () => {
    let path = location.pathname;
    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length);
    }
    path = path.replace(/^\/|\/$/g, '');
    const [v, id, n] = path.split('/');
    return {
      v: v || 'home',
      id: id || '',
      n: n || ''
    };
  };

  // Hydrate dynamic Continue Reading card on home
  function hydrateContinueReading() {
    const slot = $('#continue-reading-slot');
    if (!slot) return;
    const l = sty(st.r[0]);
    const p = l && pr(l);
    if (l && p) {
      slot.innerHTML = `
        <section class="continue-reading" aria-label="Continue reading">
          <div class="cr-cover">
            <a href="${basePath}story/${l.id}/">
              ${img(l.cover, l.title + ' cover')}
            </a>
          </div>
          <div class="cr-info">
            <span class="eyebrow">Continue Reading</span>
            <h3 dir="auto">${esc(l.title)}</h3>
            <p class="cr-meta">${l.single ? 'Fable' : 'Chapter ' + p.last + ' of ' + l.chapters.length} • ${pct(l)}% Completed</p>
            <span class="bar"><i style="width:${pct(l)}%"></i></span>
            <div class="cr-actions">
              <a class="btn" href="${basePath}read/${l.id}/${p.last}/">Resume Chapter ${p.last}</a>
              <a class="btn secondary" href="${basePath}story/${l.id}/">Chapters List</a>
            </div>
          </div>
        </section>
      `;
    } else {
      slot.innerHTML = '';
    }
  }

  // 1. HOME VIEW
  function home() {
    const spotlight = getSpotlightStory();
    const featuredList = S.filter((s) => s.featured || (s.genres && s.genres.includes('Adventure'))).slice(0, 8);
    const popularList = S.filter((s) => !s.collection).slice(0, 6);
    const collectionsList = DATA.collections || [];

    app.innerHTML = `
      <section class="hero-spotlight">
        <div class="hero-wrap">
          <div class="hero-content">
            <span class="eyebrow" style="color:var(--gold-light)">✦ Editorial Spotlight</span>
            <h1 dir="auto">${esc(spotlight.title)}</h1>
            <p class="hero-author">by ${esc(spotlight.author.name)}${spotlight.author.country ? ', ' + esc(spotlight.author.country) : ''}${spotlight.author.years ? ' (' + esc(spotlight.author.years) + ')' : ''}</p>
            <p class="hero-lead" dir="auto">${esc(spotlight.intro)}</p>
            <div class="hero-actions">
              <a class="btn" href="${basePath}read/${spotlight.id}/1/">Begin Reading</a>
              <a class="btn ghost" href="${basePath}story/${spotlight.id}/">Story Overview</a>
            </div>
          </div>
          <div class="hero-book-card">
            <div class="book-frame">
              ${img(spotlight.cover, spotlight.title + ' cover', 1)}
              <span class="book-spine-highlight"></span>
            </div>
          </div>
        </div>
      </section>

      <div class="wrap hm">
        <div id="continue-reading-slot"></div>

        <section class="shelf">
          <div class="section-head">
            <div>
              <span class="eyebrow">Curated Selection</span>
              <h2>Featured Masterpieces</h2>
              <p class="sub">Iconic literature illustrated chapter by chapter.</p>
            </div>
            <div style="display:flex;gap:8px">
              <button data-a="car-prev" aria-label="Previous story" style="padding:0.4rem 0.8rem;font-size:1.1rem">‹</button>
              <button data-a="car-next" aria-label="Next story" style="padding:0.4rem 0.8rem;font-size:1.1rem">›</button>
            </div>
          </div>
          <div class="carousel-wrapper">
            <div id="feat-carousel" class="carousel-container">
              ${featuredList.map((s) => `<div class="carousel-card">${card(s)}</div>`).join('')}
            </div>
          </div>
        </section>

        <section class="shelf">
          <div class="section-head">
            <div>
              <span class="eyebrow">Timeless Tales</span>
              <h2>Popular Stories</h2>
              <p class="sub">Beloved novels and legendary journeys from around the globe.</p>
            </div>
            <a class="more" href="${basePath}explore/">Explore all ›</a>
          </div>
          <div class="grid">
            ${popularList.map(card).join('')}
          </div>
        </section>

        <section class="shelf">
          <div class="section-head">
            <div>
              <span class="eyebrow">Heritage Anthologies</span>
              <h2>Curated Collections</h2>
              <p class="sub">Multi-tale anthologies of folklore, mystery, and moral fables.</p>
            </div>
          </div>
          <div class="grid">
            ${collectionsList.map(ccol).join('')}
          </div>
        </section>

        <section class="shelf">
          <div class="section-head">
            <div>
              <span class="eyebrow">Browse by Genre</span>
              <h2>Explore Categories</h2>
              <p class="sub">Discover tales by literary tradition and world themes.</p>
            </div>
          </div>
          <div class="kg">
            ${cats().map((c) => ccard(c)).join('')}
          </div>
        </section>
      </div>
    `;
    hydrateContinueReading();
  }

  // 2. EXPLORE VIEW
  function explore() {
    app.innerHTML = `
      <div class="wrap hm">
        <p class="eyebrow">Catalog</p>
        <h1>Explore Collections & Categories</h1>
        <p class="mu" style="margin-bottom:24px">Choose a literary world to begin your journey.</p>
        <div class="kg bigs">
          ${cats().map((c) => ccard(c, 1)).join('')}
        </div>
      </div>
    `;
  }

  // 3. LIBRARY & SEARCH VIEW
  function library() {
    app.innerHTML = `
      <div class="wrap hm">
        <p class="eyebrow">Archive</p>
        <h1>Library</h1>
        <div class="tools">
          <label class="sr" for="q">Search stories</label>
          <input id="q" type="search" placeholder="Search by title, author, country or genre..." value="${esc(ui.q)}" autofocus>
        </div>
        <div id="cats"></div>
      </div>
    `;
    shelves();
  }

  function shelves() {
    const q = ui.q.trim().toLowerCase();
    const m = (s) => !q || [s.title, s.author.name, s.author.country, s.language, ...(s.genres || [])].join(' ').toLowerCase().includes(q);
    const flt = !!q;

    $('#cats').innerHTML =
      cats()
        .map((c) => {
          const l = S.filter((s) => s.category === c.id && m(s));
          if (flt && !l.length) return '';
          const b = flt ? l.map(card).join('') : items(c).join('');
          return `
            <div class="shelf">
              <div class="section-head">
                <div>
                  <h3 class="ct"><a href="${basePath}category/${c.id}/">${esc(c.name)}</a></h3>
                  <p class="mu">${esc(c.blurb)}</p>
                </div>
                <a class="more" href="${basePath}category/${c.id}/">View all ›</a>
              </div>
              ${b ? `<div class="grid">${b}</div>` : '<p class="mu">No books match in this category.</p>'}
            </div>
          `;
        })
        .join('') || '<p class="mu" style="padding:40px 0;text-align:center">No stories match your search query.</p>';
  }

  // 4. CATEGORY VIEW
  function category(c) {
    const b = items(c).join('');
    document.title = `${c.name} — Classic Stories & Folktales | World Tales`;
    app.innerHTML = `
      <div class="wrap hm">
        <p class="eye"><a href="${basePath}explore/">Explore</a> / ${esc(c.name)}</p>
        <h1 dir="auto">${esc(c.name)}</h1>
        <p class="mu" style="margin-bottom:28px">${esc(c.blurb)}</p>
        ${b ? `<div class="grid">${b}</div>` : '<p class="mu">No books in this category yet.</p>'}
      </div>
    `;
  }

  // 5. COLLECTION VIEW
  function collection(k) {
    const c = cat(k.category);
    const l = S.filter((s) => s.collection === k.id);
    document.title = `${k.name} by ${k.author} — Complete Collection | World Tales`;
    app.innerHTML = `
      <div class="wrap hm">
        <p class="eye"><a href="${basePath}explore/">Explore</a> / <a href="${basePath}category/${c.id}/">${esc(c.name)}</a> / ${esc(k.name)}</p>
        <h1 dir="auto">${esc(k.name)}</h1>
        <p class="mu" style="margin-bottom:28px">${esc(k.author)}. ${l.length} stories in this anthology.</p>
        <div class="grid">${l.map(card).join('')}</div>
      </div>
    `;
  }

  // 6. SETTINGS VIEW
  function settings() {
    const z = st.ts || 'm';
    const t = st.th || '';
    const seg = (a, v, o) => o.map((x) => `<button data-a="${a}" data-k="${x[0]}" aria-pressed="${v === x[0]}">${x[1]}</button>`).join('');
    document.title = 'Reader Settings & Preferences | World Tales';
    app.innerHTML = `
      <div class="wrap hm set">
        <p class="eyebrow">Preferences</p>
        <h1>Settings</h1>
        <section>
          <h2>Reading Typography Size</h2>
          <p class="mu">Customize the text scale for maximum reading comfort.</p>
          <div class="seg">${seg('ts', z, [['s', 'Small'], ['m', 'Medium'], ['l', 'Large']])}</div>
          <div class="txt" style="margin-top:16px"><p dir="auto">This is a preview of story typography rendering in World Tales.</p></div>
        </section>
        <section>
          <h2>Appearance & Theme</h2>
          <p class="mu">Switch between Warm Ivory parchment and Midnight Obsidian.</p>
          <div class="seg">${seg('th', t, [['', 'System Default'], ['light', 'Warm Ivory'], ['dark', 'Midnight Navy']])}</div>
        </section>
        <section>
          <h2>Reading Data & Privacy</h2>
          <p class="mu">All progress, bookmarks, and recents are stored locally in your browser (key <code>wt:v1</code>). No personal data is ever transmitted to servers.</p>
          <button data-a="clr" style="border-color:#b83a3a;color:#b83a3a;margin-top:12px">Clear reading history</button>
        </section>
        <section>
          <h2>Colophon & Credits</h2>
          <p><a class="more" href="${basePath}about/">About the project, editions and legal credits ›</a></p>
        </section>
      </div>
    `;
  }

  // 7. STORY DETAILS VIEW
  function storyPage(s) {
    const p = pr(s);
    const rd = p ? p.read : [];
    const bm = st.b[s.id] || [];
    const a = s.author;
    const last = (n) => n[n.length - 1];
    const row = (n) => `
      <li>
        <a href="${basePath}read/${s.id}/${n}/">
          <span class="num">${n}</span>
          <span>${esc(s.chapters[n - 1].title)}</span>
          <span class="mk">${bm.includes(n) ? '<span title="Bookmarked">★</span>' : ''}${rd.includes(n) ? '<span title="Read">✓</span>' : ''}</span>
        </a>
      </li>
    `;

    document.title = `${s.title} by ${a.name} — Full Story & Chapter Guide | World Tales`;
    app.innerHTML = `
      <header class="sh">
        <div class="wrap hg">
          <div class="cover">
            ${img(s.cover, s.title + ', cover', 1)}
          </div>
          <div>
            <p class="eye">
              <a href="${basePath}explore/">Explore</a> / <a href="${basePath}category/${s.category}/">${esc(cat(s.category).name)}</a>
              ${s.collection ? ` / <a href="${basePath}collection/${s.collection}/">${esc(par(s).name)}</a>` : ''}
            </p>
            <h1 dir="auto">${esc(s.title)}</h1>
            <p class="by">by ${esc(a.name)}${a.country ? ', ' + esc(a.country) : ''}${a.years ? ' (' + esc(a.years) + ')' : ''}</p>
            <div class="badges">${badges(s)}</div>
            <p class="lead" dir="auto">${esc(s.intro)}</p>
            <p class="acts">${cta(s)}</p>
            <p class="mu">${s.parts ? s.parts.length + ' parts, ' : ''}${s.chapters.length} chapters. ${esc(s.edition || 'Reading edition')}</p>
          </div>
        </div>
      </header>
      ${
        s.parts
          ? `
        <section class="wrap" style="padding-top:36px">
          <h2>The Parts</h2>
          <div class="parts">
            ${s.parts
              .map((q, i) => {
                const f = s.chapters[q.chapters[0] - 1];
                return `
                <a class="part" href="${basePath}read/${s.id}/${f.n}/">
                  ${img(f.img, '')}
                  <span class="pt">
                    <b>Part ${R[i]}: ${esc(q.title)}</b>
                    <small>Chapters ${q.chapters[0]} to ${last(q.chapters)}</small>
                  </span>
                </a>
              `;
              })
              .join('')}
          </div>
        </section>
      `
          : ''
      }
      <section class="wrap" style="padding-top:36px">
        <h2>Table of Contents</h2>
        ${
          !s.parts
            ? `<ol class="toc">${s.chapters.map((_, i) => row(i + 1)).join('')}</ol>`
            : s.parts.map((q, i) => `<h3 class="ph">Part ${R[i]}: ${esc(q.title)}</h3><ol class="toc">${q.chapters.map(row).join('')}</ol>`).join('')
        }
      </section>
      ${
        s.characters && s.characters.length
          ? `
        <section class="wrap" style="padding-top:36px">
          <h2>Dramatis Personae</h2>
          <ul class="chars">
            ${s.characters
              .map(
                (c) => `
              <li>
                ${img(c.img, c.name)}
                <b dir="auto">${esc(c.name)}</b>
                <small>${esc(c.role)}</small>
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      `
          : ''
      }
      ${
        s.props
          ? `
        <section class="wrap" style="padding-top:36px">
          <h2>${esc(s.props.title)}</h2>
          <figure class="props">
            ${img(s.props.img, s.props.alt)}
            <figcaption>${esc(s.props.caption)}</figcaption>
          </figure>
        </section>
      `
          : ''
      }
      <section class="wrap" style="padding-top:36px">
        ${a.bio ? `<h2>About the Author</h2><p style="max-width:64ch;line-height:1.75">${esc(a.bio)}</p>` : ''}
        <p class="mu">Chapters here are formatted for reading convenience from the authoritative edition.</p>
      </section>
    `;
  }

  function paras(t) {
    if (!t) return '';
    const x = t
      .replace(/\b(Dr|Mr|Mrs|Ms|Prof)\./g, '$1§')
      .replace(/([.!?]["”’]?)\s+(?=[A-Z“"‘])/g, '$1|')
      .split('|')
      .map((z) => z.replace(/§/g, '.'));
    const o = [];
    for (let i = 0; i < x.length; i += 3) {
      o.push(x.slice(i, i + 3).join(' '));
    }
    return o.map((z) => `<p dir="auto">${esc(z)}</p>`).join('');
  }

  // 8. READER VIEW
  function reader(s, n) {
    const T = s.chapters.length;
    n = Math.min(Math.max(parseInt(n) || 1, 1), T);
    const one = !!s.single;
    const c = s.chapters[n - 1];
    const im = c.img || (one ? s.cover : null);
    const pi = s.parts ? s.parts.findIndex((q) => q.chapters.includes(n)) : -1;
    const q = s.parts ? s.parts[pi] : null;
    const bm = st.b[s.id] || [];
    const p = (st.p[s.id] = st.p[s.id] || { last: n, read: [] });

    p.last = n;
    if (!p.read.includes(n)) p.read.push(n);
    st.r = [s.id, ...st.r.filter((x) => x !== s.id)].slice(0, 6);
    save();

    const backLink = one
      ? s.collection
        ? `${basePath}collection/${s.collection}/`
        : `${basePath}category/${s.category}/`
      : `${basePath}story/${s.id}/`;

    document.title = `Chapter ${n}: ${c.title} — ${s.title} | World Tales`;

    app.innerHTML = `
      <div class="rbar-wrapper">
        <div class="rbar">
          <a class="rbar-back" href="${backLink}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${esc(one ? par(s).name : s.title)}</span>
          </a>
          <div class="rbar-controls">
            ${
              one
                ? ''
                : `
              <button class="rbar-btn" data-a="toc" aria-expanded="false" aria-controls="dr" title="Table of Contents">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
                <span>Chapters</span>
              </button>
            `
            }
            <button class="rbar-btn" data-a="bm" aria-pressed="${bm.includes(n)}" title="Bookmark Chapter">
              <span class="bm-icon">${bm.includes(n) ? '★' : '☆'}</span>
              <span>${bm.includes(n) ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
            <button class="rbar-btn" data-a="fx" title="Distraction-free Focus Mode">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              <span>Focus</span>
            </button>
          </div>
        </div>
        ${
          one
            ? ''
            : `
          <div class="prog" role="progressbar" aria-label="Reading progress" aria-valuemin="1" aria-valuemax="${T}" aria-valuenow="${n}">
            <i style="width:${(n / T) * 100}%"></i>
          </div>
        `
        }
      </div>

      <article class="rd">
        <header class="rd-header">
          <div class="rd-eyebrow">
            <span>✦</span>
            <span>${one ? esc(par(s).name) : `${q ? `Part ${R[pi]}: ${esc(q.title)} • ` : ''}Chapter ${n} of ${T}`}</span>
            <span>✦</span>
          </div>
          <h1 class="rd-title" dir="auto">${esc(c.title)}</h1>
          <div class="rd-meta">
            <span class="rd-author">by ${esc(s.author.name)}</span>
            <span class="rd-dot">•</span>
            <span class="rd-book">${esc(s.title)}</span>
          </div>
        </header>

        ${
          im
            ? `
          <figure class="rd-figure${im.h > im.w ? ' tall' : ''}${one ? ' cov' : ''}">
            <div class="rd-img-frame">
              ${img(im, c.alt || s.title + ' cover', 1)}
            </div>
            ${c.alt ? `<figcaption class="rd-caption">${esc(c.alt)}</figcaption>` : ''}
          </figure>
        `
            : ''
        }

        <div class="txt">
          ${c.paras ? c.paras.map((z) => `<p dir="auto">${esc(z)}</p>`).join('') : paras(c.text)}
        </div>

        <div class="rd-end-ornament">✦ ✦ ✦</div>

        ${
          one
            ? ''
            : `
          <nav class="pn" aria-label="Chapter navigation">
            ${
              n > 1
                ? `
              <a class="pn-card prev" href="${basePath}read/${s.id}/${n - 1}/">
                <span class="pn-dir">← Previous Chapter</span>
                <span class="pn-title">${esc(s.chapters[n - 2].title)}</span>
              </a>
            `
                : '<span class="pn-card disabled"></span>'
            }
            ${
              n < T
                ? `
              <a class="pn-card next" href="${basePath}read/${s.id}/${n + 1}/">
                <span class="pn-dir">Next Chapter →</span>
                <span class="pn-title">${esc(s.chapters[n].title)}</span>
              </a>
            `
                : `
              <a class="pn-card finish" href="${basePath}story/${s.id}/">
                <span class="pn-dir">Story Complete</span>
                <span class="pn-title">Return to ${esc(s.title)}</span>
              </a>
            `
            }
          </nav>
        `
        }
      </article>

      ${
        one
          ? ''
          : `
        <div class="scrim" data-a="toc-close"></div>
        <aside id="dr" class="drawer" aria-label="Chapter list" inert>
          <div class="drawer-header">
            <div>
              <span class="eyebrow" style="font-size:0.72rem;margin-bottom:2px">Table of Contents</span>
              <h3 class="drawer-title" dir="auto">${esc(s.title)}</h3>
              <small class="drawer-sub">${s.chapters.length} Chapters • ${pct(s)}% Read</small>
            </div>
            <button class="drawer-close" data-a="toc-close" aria-label="Close chapter list">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="drawer-body">
            ${(s.parts || [{ chapters: s.chapters.map((c) => c.n) }])
              .map(
                (g, i) => `
              ${g.title ? `<h3 class="ph" style="margin:16px 0 8px">Part ${R[i]}: ${esc(g.title)}</h3>` : ''}
              <ol class="toc">
                ${g.chapters
                  .map(
                    (m) => `
                  <li>
                    <a href="${basePath}read/${s.id}/${m}/"${m === n ? ' aria-current="page"' : ''}>
                      <span class="num">${m}</span>
                      <span style="flex:1">${esc(s.chapters[m - 1].title)}</span>
                      <span class="mk">${bm.includes(m) ? '★' : ''}</span>
                    </a>
                  </li>
                `
                  )
                  .join('')}
              </ol>
            `
              )
              .join('')}
          </div>
        </aside>
      `
      }

      <div class="fx"><button class="fx-btn" data-a="fx">Exit Focus Mode</button></div>
    `;
    sync();
  }

  function sync() {
    document.body.classList.toggle('focus', ui.focus);
    const d = $('#dr');
    const scrim = $('.scrim');
    if (!d) return;

    if (ui.drawer) {
      d.classList.add('open');
      d.removeAttribute('inert');
      if (scrim) scrim.classList.add('on');
    } else {
      d.classList.remove('open');
      d.setAttribute('inert', '');
      if (scrim) scrim.classList.remove('on');
    }

    const t = $('[data-a=toc][aria-expanded]');
    if (t) t.setAttribute('aria-expanded', String(ui.drawer));
  }

  // 9. ABOUT VIEW
  function about() {
    const C = DATA.credits || {};
    const A = C.app || {};
    const T = C.thirdParty || [];
    const f = (k, v) => (v ? `<p><b>${k}:</b> ${esc(v)}</p>` : '');

    document.title = 'About and Credits | World Tales';
    app.innerHTML = `
      <div class="wrap abt">
        <p class="eye"><a href="${basePath}settings/">Settings</a> / About</p>
        <p class="eyebrow">Colophon</p>
        <h1>About World Tales</h1>
        <p class="lead">An illustrated digital library celebrating the treasures of world literature, with chapter guides, character dossiers, and authentic artwork.</p>
        ${
          DATA.contact
            ? `
          <section>
            <h2>${esc(DATA.contact.heading)}</h2>
            <article class="cr">
              ${DATA.contact.text.map((t) => `<p>${esc(t)}</p>`).join('')}
              <p><b>Email:</b> <a href="mailto:${esc(DATA.contact.email)}">${esc(DATA.contact.email)}</a></p>
            </article>
          </section>
        `
            : ''
        }
        ${
          A.copyright || A.developer || A.contact
            ? `
          <section>
            <h2>The Application</h2>
            ${f('Copyright', A.copyright)}
            ${f('Created by', A.developer)}
            ${f('Contact', A.contact)}
          </section>
        `
            : ''
        }
        <section>
          <h2>The Literary Editions</h2>
          ${[
            ...S.filter((s) => !s.single && !s.collection).map((s) => ({ t: s.title, a: s.author, c: s.credits })),
            ...(DATA.collections || []).map((k) => ({
              t: k.name,
              a: { name: k.author },
              c: k.credits,
              l: S.filter((s) => s.collection === k.id).map((s) => s.title).join(', ')
            }))
          ]
            .map(({ t, a, c, l }) => {
              c = c || {};
              const il = c.illustrations || {};
              return `
              <article class="cr">
                <h3>${esc(t)}</h3>
                ${f('Stories', l)}
                ${f('Author', a.name + (a.years ? ' (' + a.years + ')' : ''))}
                ${f('Original Publication', c.published)}
                ${f('Source Edition', c.edition)}
                ${f('Translator', c.translator)}
                ${f('Illustrations', il.credit)}
                ${f('Illustration License', il.license)}
                ${f('Notes', c.notes)}
                ${a.bio ? `<details><summary>About ${esc(a.name)}</summary><p>${esc(a.bio)}</p></details>` : ''}
              </article>
            `;
            })
            .join('')}
        </section>
        ${
          T.length
            ? `
          <section>
            <h2>Acknowledgments</h2>
            <ul>
              ${T.map((t) => `<li>${esc(t.name)}${t.what ? ': ' + esc(t.what) : ''}${t.license ? '. ' + esc(t.license) : ''}</li>`).join('')}
            </ul>
          </section>
        `
            : ''
        }
      </div>
    `;
  }

  // Update navigation active states
  function updateNav(ak) {
    const nav = $('#nav');
    if (!nav) return;
    const links = [
      ['home', `${basePath}`, 'Home'],
      ['explore', `${basePath}explore/`, 'Explore'],
      ['library', `${basePath}library/`, 'Library'],
      ['settings', `${basePath}settings/`, 'Settings']
    ];
    nav.innerHTML = links
      .map(
        (x) => `
        <a href="${x[1]}"${ak === x[0] ? ' aria-current="page"' : ''}>
          <svg class="ni" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[x[0]]}</svg>
          <span>${x[2]}</span>
        </a>
      `
      )
      .join('');
  }

  // Route Dispatcher (SPA navigation + Hydration)
  function route(isInitialLoad = false) {
    const { v, id, n } = parseCurrentRoute();
    const s = sty(id);
    ui.drawer = false;

    // Handle single fables redirecting to read
    if (v === 'story' && s && s.single) {
      history.replaceState(null, '', `${basePath}read/${id}/1/`);
      route(isInitialLoad);
      return;
    }

    const ak = v === 'read' ? '' : v === 'explore' || v === 'category' || v === 'collection' || v === 'story' ? 'explore' : v === 'library' ? 'library' : v === 'settings' || v === 'about' ? 'settings' : 'home';

    updateNav(ak);
    document.body.classList.toggle('inread', v === 'read' && !!s);

    if (isInitialLoad) {
      // On initial load, static HTML is already in DOM; hydrate user-specific state
      if (v === 'home') {
        hydrateContinueReading();
      } else if (v === 'read' && s) {
        const chapterNum = parseInt(n) || 1;
        const p = (st.p[s.id] = st.p[s.id] || { last: chapterNum, read: [] });
        p.last = chapterNum;
        if (!p.read.includes(chapterNum)) p.read.push(chapterNum);
        st.r = [s.id, ...st.r.filter((x) => x !== s.id)].slice(0, 6);
        save();
        const bm = st.b[s.id] || [];
        const bmBtn = $('button[data-a="bm"]');
        if (bmBtn) {
          bmBtn.setAttribute('aria-pressed', bm.includes(chapterNum));
          bmBtn.textContent = bm.includes(chapterNum) ? 'Bookmarked ★' : 'Bookmark ☆';
        }
      } else if (v === 'settings') {
        settings();
      } else if (v === 'library') {
        const qInput = $('#q');
        if (qInput) qInput.value = ui.q;
      }
      sync();
      return;
    }

    // Client-side transitions between pages (instant SPA without page reload)
    if (v === 'read' && s) {
      reader(s, n);
    } else {
      ui.focus = false;
      if (v === 'story' && s) storyPage(s);
      else if (v === 'about') about();
      else if (v === 'explore') explore();
      else if (v === 'library') library();
      else if (v === 'settings') settings();
      else if (v === 'category' && cat(id)) category(cat(id));
      else if (v === 'collection' && (DATA.collections || []).some((k) => k.id === id)) collection(DATA.collections.find((k) => k.id === id));
      else home();
      sync();
    }

    scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  // Intercept all internal anchor clicks for instant client-side navigation
  document.addEventListener('click', (e) => {
    // Check if clicked element is or is inside an anchor
    const aTag = e.target.closest('a');
    if (aTag && aTag.href && !aTag.target && !aTag.download && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      const url = new URL(aTag.href, location.origin);
      if (url.origin === location.origin) {
        // Internal navigation
        e.preventDefault();
        if (ui.drawer) {
          ui.drawer = false;
          sync();
        }
        if (url.pathname !== location.pathname) {
          history.pushState(null, '', url.pathname);
          route(false);
        }
        return;
      }
    }

    // Interactive UI controls
    const b = e.target.closest('[data-a]');
    if (!b) return;
    const a = b.dataset.a;
    const { id, n } = parseCurrentRoute();

    if (a === 'toc') {
      ui.drawer = !ui.drawer;
      sync();
    }
    if (a === 'toc-close') {
      ui.drawer = false;
      sync();
    }
    if (a === 'fx') {
      ui.focus = !ui.focus;
      sync();
    }
    if (a === 'car-prev' || a === 'car-next') {
      const c = $('#feat-carousel');
      if (c) {
        const offset = a === 'car-next' ? 240 : -240;
        c.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
    if (a === 'ts' || a === 'th') {
      const y = scrollY;
      if (a === 'ts') st.ts = b.dataset.k;
      else if (b.dataset.k) st.th = b.dataset.k;
      else delete st.th;
      save();
      ts();
      settings();
      scrollTo(0, y);
    }
    if (a === 'clr' && confirm('Clear all reading progress, bookmarks and recent reading on this device?')) {
      st.p = {};
      st.b = {};
      st.r = [];
      save();
      settings();
    }
    if (a === 'bm') {
      const k = parseInt(n) || 1;
      const l = (st.b[id] = st.b[id] || []);
      const i = l.indexOf(k);
      if (i < 0) l.push(k);
      else l.splice(i, 1);
      save();
      const y = scrollY;
      reader(sty(id), k);
      scrollTo(0, y);
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'q') {
      ui.q = e.target.value;
      shelves();
    }
  });

  addEventListener('keydown', (e) => {
    const { v, id, n } = parseCurrentRoute();
    if (v !== 'read' || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    const s = sty(id);
    const k = parseInt(n) || 1;
    if (!s) return;

    if (e.key === 'ArrowRight' && k < s.chapters.length) {
      history.pushState(null, '', `${basePath}read/${id}/${k + 1}/`);
      route(false);
    }
    if (e.key === 'ArrowLeft' && k > 1) {
      history.pushState(null, '', `${basePath}read/${id}/${k - 1}/`);
      route(false);
    }
    if (e.key === 'Escape') {
      if (ui.drawer) ui.drawer = false;
      else ui.focus = false;
      sync();
    }
  });

  // Listen to browser Back / Forward buttons
  addEventListener('popstate', () => route(false));

  // Initialize on page load (hydration)
  route(true);
})();
