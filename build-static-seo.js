/**
 * World Tales — Static Multi-Page Site Generator (Technical SEO Edition)
 * Generates 100% pre-rendered, semantic, indexable HTML files for all routes.
 * Zero hash-based URLs. Full JSON-LD structured data, Open Graph, and Twitter cards.
 */
const fs = require('fs');
const path = require('path');

// Load DATA
const dataCode = fs.readFileSync(path.join(__dirname, 'js/data.js'), 'utf8');
const DATA = new Function(dataCode + '\nreturn DATA;')();

const SITE_URL = 'https://mojtaba40h-prog.github.io/World_Tales';
const S = DATA.stories;
const R = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sty = (id) => S.find((s) => s.id === id);
const cat = (id) => DATA.categories.find((c) => c.id === id);
const cnt = (c) => S.filter((s) => s.category === c.id).length;
const ccov = (c) => c.cover || ((DATA.collections || []).find((k) => k.category === c.id) || {}).cover || (S.find((s) => s.category === c.id) || {}).cover;
const par = (s) => (s.collection ? (DATA.collections || []).find((k) => k.id === s.collection) : cat(s.category));

const img = (i, alt, root, eager) => {
  if (!i || !i.src) return '';
  return `<img src="${root}${esc(i.src)}" width="${i.w || 300}" height="${i.h || 450}" alt="${esc(alt || '')}" decoding="async"${eager ? '' : ' loading="lazy"'}>`;
};

const card = (s, root) => {
  const dest = s.single ? `read/${s.id}/1/` : `story/${s.id}/`;
  const genre = s.genres && s.genres[0] ? esc(s.genres[0]) : (cat(s.category) ? esc(cat(s.category).name) : '');
  return `
    <a class="card" href="${root}${dest}" aria-label="${esc(s.title)} by ${esc(s.author.name)}">
      <div class="cover-wrap">
        ${img(s.cover, s.title + ' cover', root)}
        <span class="book-spine-highlight"></span>
      </div>
      <div class="cb">
        <p class="eyebrow" style="margin-bottom:4px;font-size:0.72rem">${genre}</p>
        <h3 dir="auto">${esc(s.title)}</h3>
        <p>${esc(s.author.name)}</p>
        <div class="card-footer">
          <span>${s.single ? 'Fable' : (s.chapters ? s.chapters.length + ' chapters' : '')}</span>
        </div>
      </div>
    </a>
  `;
};

const ccol = (k, root) => `
  <a class="card collection-card" href="${root}collection/${k.id}/">
    <div class="cover-wrap">
      ${img(k.cover, k.name + ' cover', root)}
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

const ccard = (c, root, big) => `
  <a class="kc${big ? ' big' : ''}${ccov(c) ? '' : ' nc'}" href="${root}category/${c.id}/">
    ${ccov(c) ? img(ccov(c), c.name, root) : ''}
    <span class="ci">
      <b dir="auto">${esc(c.name)}</b>
      <small>${cnt(c)} ${cnt(c) === 1 ? 'story' : 'stories'}</small>
      ${big ? `<span class="bl">${esc(c.blurb)}</span>` : ''}
    </span>
  </a>
`;

const items = (c, root) => [
  ...S.filter((s) => s.category === c.id && !s.collection).map((s) => card(s, root)),
  ...(DATA.collections || []).filter((k) => k.category === c.id).map((k) => ccol(k, root))
];

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

// Global Shell Wrapper
function renderShell({ title, description, canonicalPath, root, ogImage, ogType = 'website', jsonLd, bodyContent, currentNav = 'home' }) {
  const canonicalUrl = `${SITE_URL}/${canonicalPath}`.replace(/\/+/g, '/').replace(':/', '://');
  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}/${ogImage}`.replace(/\/+/g, '/').replace(':/', '://')) : `${SITE_URL}/assets/logo.png`;

  const IC = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    explore: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    library: '<path d="M5 4v16M10 4v16M15 5l4 14"/>',
    settings: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>'
  };

  const navLinks = [
    ['home', `${root}`, 'Home'],
    ['explore', `${root}explore/`, 'Explore'],
    ['library', `${root}library/`, 'Library'],
    ['settings', `${root}settings/`, 'Settings']
  ]
    .map(
      (x) => `
      <a href="${x[1]}"${currentNav === x[0] ? ' aria-current="page"' : ''}>
        <svg class="ni" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[x[0]]}</svg>
        <span>${x[2]}</span>
      </a>
    `
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQBPFZJGM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SVQBPFZJGM');
  </script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0b1424">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" href="${root}assets/favicon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${fullOgImage}">
  <meta property="og:site_name" content="World Tales">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${fullOgImage}">

  <!-- Preconnect & Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${root}css/style.css">

  <!-- Technical SEO Structured Data (JSON-LD) -->
  ${jsonLd ? `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n  </script>` : ''}
</head>
<body>
  <header class="top">
    <div class="wrap">
      <a class="logo" href="${root}" aria-label="World Tales Home">
        <img src="${root}assets/logo.png" alt="World Tales Emblem" width="58" height="46">
        <span>World Tales</span>
      </a>
      <nav id="nav" aria-label="Main Navigation">
        ${navLinks}
      </nav>
    </div>
  </header>

  <main id="app" tabindex="-1">
${bodyContent}
  </main>

  <footer id="ft">
    <div class="wrap">
      <p style="font-family:var(--serif);font-size:1.1rem;color:var(--gold-t);margin-bottom:8px">✦ World Tales ✦</p>
      <p>An illustrated library of world literature, preserved for timeless reading.</p>
      <p style="font-size:0.85rem;margin-top:12px">
        <a href="${root}about/">About & Credits</a> • <a href="${root}explore/">Explore Catalog</a> • <a href="${root}library/">Search Library</a> • <a href="${root}settings/">Settings</a>
      </p>
    </div>
  </footer>

  <script src="${root}js/startup-check.js" charset="utf-8"></script>
  <script src="${root}js/data.js" charset="utf-8"></script>
  <script src="${root}js/app.js" charset="utf-8"></script>
</body>
</html>`;
}

// 1. HOME VIEW
function generateHome() {
  const root = './';
  const spotlight = S.find((s) => s.id === 'treasure-island') || S[0];
  const featuredList = S.filter((s) => s.featured || (s.genres && s.genres.includes('Adventure'))).slice(0, 8);
  const popularList = S.filter((s) => !s.collection).slice(0, 6);
  const collectionsList = DATA.collections || [];

  const bodyContent = `
    <!-- EDITORIAL HERO SPOTLIGHT -->
    <section class="hero-spotlight">
      <div class="hero-wrap">
        <div class="hero-content">
          <span class="eyebrow" style="color:var(--gold-light)">✦ Editorial Spotlight</span>
          <h1 dir="auto">${esc(spotlight.title)}</h1>
          <p class="hero-author">by ${esc(spotlight.author.name)}${spotlight.author.country ? ', ' + esc(spotlight.author.country) : ''}${spotlight.author.years ? ' (' + esc(spotlight.author.years) + ')' : ''}</p>
          <p class="hero-lead" dir="auto">${esc(spotlight.intro)}</p>
          <div class="hero-actions">
            <a class="btn" href="${root}read/${spotlight.id}/1/">Begin Reading</a>
            <a class="btn ghost" href="${root}story/${spotlight.id}/">Story Overview</a>
          </div>
        </div>
        <div class="hero-book-card">
          <div class="book-frame">
            ${img(spotlight.cover, spotlight.title + ' cover', root, 1)}
            <span class="book-spine-highlight"></span>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap hm">
      <!-- DYNAMIC CONTINUE READING PLACEHOLDER (Hydrated by js/app.js) -->
      <div id="continue-reading-slot"></div>

      <!-- FEATURED STORIES CAROUSEL -->
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
            ${featuredList.map((s) => `<div class="carousel-card">${card(s, root)}</div>`).join('')}
          </div>
        </div>
      </section>

      <!-- POPULAR STORIES & WORLD CLASSICS -->
      <section class="shelf">
        <div class="section-head">
          <div>
            <span class="eyebrow">Timeless Tales</span>
            <h2>Popular Stories</h2>
            <p class="sub">Beloved novels and legendary journeys from around the globe.</p>
          </div>
          <a class="more" href="${root}explore/">Explore all ›</a>
        </div>
        <div class="grid">
          ${popularList.map((s) => card(s, root)).join('')}
        </div>
      </section>

      <!-- RECENTLY ADDED & HERITAGE COLLECTIONS -->
      <section class="shelf">
        <div class="section-head">
          <div>
            <span class="eyebrow">Heritage Anthologies</span>
            <h2>Curated Collections</h2>
            <p class="sub">Multi-tale anthologies of folklore, mystery, and moral fables.</p>
          </div>
        </div>
        <div class="grid">
          ${collectionsList.map((k) => ccol(k, root)).join('')}
        </div>
      </section>

      <!-- CATEGORY BROWSING -->
      <section class="shelf">
        <div class="section-head">
          <div>
            <span class="eyebrow">Browse by Genre</span>
            <h2>Explore Categories</h2>
            <p class="sub">Discover tales by literary tradition and world themes.</p>
          </div>
        </div>
        <div class="kg">
          ${DATA.categories.map((c) => ccard(c, root)).join('')}
        </div>
      </section>
    </div>
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'World Tales',
    'url': `${SITE_URL}/`,
    'description': 'An illustrated library of world literature: 53 classic stories across 6 categories with chapter guides, character guides, and custom reader settings.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${SITE_URL}/library/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return renderShell({
    title: 'World Tales — Illustrated Library of World Literature',
    description: 'A premium illustrated digital library of classic world literature: 53 timeless stories, 224 chapters, character dossiers, and customizable reading typography.',
    canonicalPath: '',
    root,
    jsonLd,
    bodyContent,
    currentNav: 'home'
  });
}

// 2. EXPLORE VIEW
function generateExplore() {
  const root = '../';
  const bodyContent = `
    <div class="wrap hm">
      <p class="eyebrow">Catalog</p>
      <h1>Explore Collections & Categories</h1>
      <p class="mu" style="margin-bottom:24px">Choose a literary world to begin your journey.</p>
      <div class="kg bigs">
        ${DATA.categories.map((c) => ccard(c, root, 1)).join('')}
      </div>
    </div>
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Explore Literary Categories & Collections',
    'url': `${SITE_URL}/explore/`,
    'description': 'Browse our comprehensive library of adventure, fantasy, survival, folklore, and mystery literature.'
  };

  return renderShell({
    title: 'Explore Collections & Categories | World Tales',
    description: 'Browse the World Tales library by genre: Adventure & Exploration, Fantasy & Wonder, Nature & Survival, Folktales & World Heritage, Society, and Mystery.',
    canonicalPath: 'explore/',
    root,
    jsonLd,
    bodyContent,
    currentNav: 'explore'
  });
}

// 3. LIBRARY & SEARCH VIEW
function generateLibrary() {
  const root = '../';
  const shelvesHtml = DATA.categories
    .map((c) => {
      const b = items(c, root).join('');
      return `
      <div class="shelf">
        <div class="section-head">
          <div>
            <h3 class="ct"><a href="${root}category/${c.id}/">${esc(c.name)}</a></h3>
            <p class="mu">${esc(c.blurb)}</p>
          </div>
          <a class="more" href="${root}category/${c.id}/">View all ›</a>
        </div>
        ${b ? `<div class="grid">${b}</div>` : '<p class="mu">No books match in this category.</p>'}
      </div>
    `;
    })
    .join('');

  const bodyContent = `
    <div class="wrap hm">
      <p class="eyebrow">Archive</p>
      <h1>Library</h1>
      <div class="tools">
        <label class="sr" for="q">Search stories</label>
        <input id="q" type="search" placeholder="Search by title, author, country or genre..." autofocus>
      </div>
      <div id="cats">${shelvesHtml}</div>
    </div>
  `;

  return renderShell({
    title: 'Library & Search | World Tales',
    description: 'Search the complete catalog of classic world stories by title, author, nationality, or genre.',
    canonicalPath: 'library/',
    root,
    bodyContent,
    currentNav: 'library'
  });
}

// 4. SETTINGS VIEW
function generateSettings() {
  const root = '../';
  const bodyContent = `
    <div class="wrap hm set">
      <p class="eyebrow">Preferences</p>
      <h1>Settings</h1>
      <section>
        <h2>Reading Typography Size</h2>
        <p class="mu">Customize the text scale for maximum reading comfort.</p>
        <div class="seg">
          <button data-a="ts" data-k="s" aria-pressed="false">Small</button>
          <button data-a="ts" data-k="m" aria-pressed="true">Medium</button>
          <button data-a="ts" data-k="l" aria-pressed="false">Large</button>
        </div>
        <div class="txt" style="margin-top:16px"><p dir="auto">This is a preview of story typography rendering in World Tales.</p></div>
      </section>
      <section>
        <h2>Appearance & Theme</h2>
        <p class="mu">Switch between Warm Ivory parchment and Midnight Obsidian.</p>
        <div class="seg">
          <button data-a="th" data-k="" aria-pressed="true">System Default</button>
          <button data-a="th" data-k="light" aria-pressed="false">Warm Ivory</button>
          <button data-a="th" data-k="dark" aria-pressed="false">Midnight Navy</button>
        </div>
      </section>
      <section>
        <h2>Reading Data & Privacy</h2>
        <p class="mu">All progress, bookmarks, and recents are stored locally in your browser (key <code>wt:v1</code>). No personal data is ever transmitted to servers.</p>
        <button data-a="clr" style="border-color:#b83a3a;color:#b83a3a;margin-top:12px">Clear reading history</button>
      </section>
      <section>
        <h2>Colophon & Credits</h2>
        <p><a class="more" href="${root}about/">About the project, editions and legal credits ›</a></p>
      </section>
    </div>
  `;

  return renderShell({
    title: 'Reader Settings & Preferences | World Tales',
    description: 'Customize typography size, reading themes (warm ivory parchment or dark obsidian), and manage local reading history.',
    canonicalPath: 'settings/',
    root,
    bodyContent,
    currentNav: 'settings'
  });
}

// 5. ABOUT VIEW
function generateAbout() {
  const root = '../';
  const C = DATA.credits || {};
  const A = C.app || {};
  const T = C.thirdParty || [];
  const f = (k, v) => (v ? `<p><b>${k}:</b> ${esc(v)}</p>` : '');

  const bodyContent = `
    <div class="wrap abt">
      <p class="eye"><a href="${root}settings/">Settings</a> / About</p>
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

  return renderShell({
    title: 'About and Credits | World Tales',
    description: 'Learn about the World Tales project, curated literary source editions, translators, and copyright credits.',
    canonicalPath: 'about/',
    root,
    bodyContent,
    currentNav: 'settings'
  });
}

// 6. CATEGORY VIEW
function generateCategory(c) {
  const root = '../../';
  const b = items(c, root).join('');
  const bodyContent = `
    <div class="wrap hm">
      <p class="eye"><a href="${root}explore/">Explore</a> / ${esc(c.name)}</p>
      <h1 dir="auto">${esc(c.name)}</h1>
      <p class="mu" style="margin-bottom:28px">${esc(c.blurb)}</p>
      ${b ? `<div class="grid">${b}</div>` : '<p class="mu">No books in this category yet.</p>'}
    </div>
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `${c.name} — World Tales`,
    'url': `${SITE_URL}/category/${c.id}/`,
    'description': c.blurb,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Explore', 'item': `${SITE_URL}/explore/` },
        { '@type': 'ListItem', 'position': 3, 'name': c.name, 'item': `${SITE_URL}/category/${c.id}/` }
      ]
    }
  };

  return renderShell({
    title: `${c.name} — Classic Stories & Folktales | World Tales`,
    description: `${c.blurb} Explore ${cnt(c)} illustrated stories in the ${c.name} category.`,
    canonicalPath: `category/${c.id}/`,
    root,
    ogImage: ccov(c) ? ccov(c).src : undefined,
    jsonLd,
    bodyContent,
    currentNav: 'explore'
  });
}

// 7. COLLECTION VIEW
function generateCollection(k) {
  const root = '../../';
  const c = cat(k.category);
  const l = S.filter((s) => s.collection === k.id);
  const bodyContent = `
    <div class="wrap hm">
      <p class="eye"><a href="${root}explore/">Explore</a> / <a href="${root}category/${c.id}/">${esc(c.name)}</a> / ${esc(k.name)}</p>
      <h1 dir="auto">${esc(k.name)}</h1>
      <p class="mu" style="margin-bottom:28px">${esc(k.author)}. ${l.length} stories in this anthology.</p>
      <div class="grid">${l.map((s) => card(s, root)).join('')}</div>
    </div>
  `;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `${k.name} — Anthology`,
    'url': `${SITE_URL}/collection/${k.id}/`,
    'description': `${k.name} by ${k.author}. Collection of ${l.length} traditional illustrated tales.`,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Explore', 'item': `${SITE_URL}/explore/` },
        { '@type': 'ListItem', 'position': 3, 'name': c.name, 'item': `${SITE_URL}/category/${c.id}/` },
        { '@type': 'ListItem', 'position': 4, 'name': k.name, 'item': `${SITE_URL}/collection/${k.id}/` }
      ]
    }
  };

  return renderShell({
    title: `${k.name} by ${k.author} — Complete Collection | World Tales`,
    description: `Read all ${l.length} stories in ${k.name} by ${k.author}. Complete illustrated stories with character dossiers.`,
    canonicalPath: `collection/${k.id}/`,
    root,
    ogImage: k.cover ? k.cover.src : undefined,
    jsonLd,
    bodyContent,
    currentNav: 'explore'
  });
}

// 8. STORY PAGE VIEW
function generateStory(s) {
  const root = '../../';
  const a = s.author;
  const last = (n) => n[n.length - 1];
  const row = (n) => `
    <li>
      <a href="${root}read/${s.id}/${n}/">
        <span class="num">${n}</span>
        <span>${esc(s.chapters[n - 1].title)}</span>
        <span class="mk"></span>
      </a>
    </li>
  `;

  const badges = (s.genres || []).map((g) => `<span class="badge">${esc(g)}</span>`).join('') + (s.language ? `<span class="badge">${esc(s.language)}</span>` : '');

  const bodyContent = `
    <header class="sh">
      <div class="wrap hg">
        <div class="cover">
          ${img(s.cover, s.title + ', cover', root, 1)}
        </div>
        <div>
          <p class="eye">
            <a href="${root}explore/">Explore</a> / <a href="${root}category/${s.category}/">${esc(cat(s.category).name)}</a>
            ${s.collection ? ` / <a href="${root}collection/${s.collection}/">${esc(par(s).name)}</a>` : ''}
          </p>
          <h1 dir="auto">${esc(s.title)}</h1>
          <p class="by">by ${esc(a.name)}${a.country ? ', ' + esc(a.country) : ''}${a.years ? ' (' + esc(a.years) + ')' : ''}</p>
          <div class="badges">${badges}</div>
          <p class="lead" dir="auto">${esc(s.intro)}</p>
          <p class="acts">
            <a class="btn" href="${root}read/${s.id}/1/">Start reading</a>
          </p>
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
              <a class="part" href="${root}read/${s.id}/${f.n}/">
                ${img(f.img, '', root)}
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
              ${img(c.img, c.name, root)}
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
          ${img(s.props.img, s.props.alt, root)}
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    'name': s.title,
    'author': {
      '@type': 'Person',
      'name': a.name
    },
    'description': s.intro,
    'inLanguage': s.language || 'English',
    'genre': s.genres,
    'numberOfPages': s.chapters.length,
    'image': s.cover && s.cover.src ? `${SITE_URL}/${s.cover.src}` : undefined,
    'url': `${SITE_URL}/story/${s.id}/`,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': cat(s.category).name, 'item': `${SITE_URL}/category/${s.category}/` },
        { '@type': 'ListItem', 'position': 3, 'name': s.title, 'item': `${SITE_URL}/story/${s.id}/` }
      ]
    }
  };

  return renderShell({
    title: `${s.title} by ${a.name} — Full Story & Chapter Guide | World Tales`,
    description: `${s.intro.slice(0, 155)}... Read ${s.title} online with chapter-by-chapter summaries and character guides.`,
    canonicalPath: `story/${s.id}/`,
    root,
    ogImage: s.cover ? s.cover.src : undefined,
    ogType: 'book',
    jsonLd,
    bodyContent,
    currentNav: 'explore'
  });
}

// 9. READER VIEW (Chapter Page)
function generateReader(s, n) {
  const root = '../../../';
  const T = s.chapters.length;
  n = Math.min(Math.max(parseInt(n) || 1, 1), T);
  const one = !!s.single;
  const c = s.chapters[n - 1];
  const im = c.img || (one ? s.cover : null);
  const pi = s.parts ? s.parts.findIndex((q) => q.chapters.includes(n)) : -1;
  const q = s.parts ? s.parts[pi] : null;

  const backLink = one
    ? s.collection
      ? `${root}collection/${s.collection}/`
      : `${root}category/${s.category}/`
    : `${root}story/${s.id}/`;

  const bodyContent = `
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
          <button class="rbar-btn" data-a="bm" aria-pressed="false" title="Bookmark Chapter">
            <span class="bm-icon">☆</span>
            <span>Bookmark</span>
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
            ${img(im, c.alt || s.title + ' cover', root, 1)}
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
            <a class="pn-card prev" href="${root}read/${s.id}/${n - 1}/">
              <span class="pn-dir">← Previous Chapter</span>
              <span class="pn-title">${esc(s.chapters[n - 2].title)}</span>
            </a>
          `
              : '<span class="pn-card disabled"></span>'
          }
          ${
            n < T
              ? `
            <a class="pn-card next" href="${root}read/${s.id}/${n + 1}/">
              <span class="pn-dir">Next Chapter →</span>
              <span class="pn-title">${esc(s.chapters[n].title)}</span>
            </a>
          `
              : `
            <a class="pn-card finish" href="${root}story/${s.id}/">
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
            <small class="drawer-sub">${s.chapters.length} Chapters</small>
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
                  <a href="${root}read/${s.id}/${m}/"${m === n ? ' aria-current="page"' : ''}>
                    <span class="num">${m}</span>
                    <span style="flex:1">${esc(s.chapters[m - 1].title)}</span>
                    <span class="mk"></span>
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Chapter',
    'name': c.title,
    'position': n,
    'isPartOf': {
      '@type': 'Book',
      'name': s.title,
      'author': {
        '@type': 'Person',
        'name': s.author.name
      },
      'url': `${SITE_URL}/story/${s.id}/`
    },
    'url': `${SITE_URL}/read/${s.id}/${n}/`,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
        { '@type': 'ListItem', 'position': 2, 'name': s.title, 'item': `${SITE_URL}/story/${s.id}/` },
        { '@type': 'ListItem', 'position': 3, 'name': `Chapter ${n}: ${c.title}`, 'item': `${SITE_URL}/read/${s.id}/${n}/` }
      ]
    }
  };

  const previewSnippet = (c.paras && c.paras[0] ? c.paras[0] : (c.text || '')).slice(0, 150).replace(/\s+/g, ' ');

  return renderShell({
    title: `Chapter ${n}: ${c.title} — ${s.title} | World Tales`,
    description: `Read Chapter ${n} of ${s.title} by ${s.author.name}. "${previewSnippet}..." Online illustrated edition.`,
    canonicalPath: `read/${s.id}/${n}/`,
    root,
    ogImage: im ? im.src : (s.cover ? s.cover.src : undefined),
    ogType: 'article',
    jsonLd,
    bodyContent,
    currentNav: 'explore'
  });
}

// 10. 404 NOT FOUND VIEW
function generate404() {
  const root = './';
  const bodyContent = `
    <div class="wrap hm" style="text-align:center;padding:72px 24px">
      <span class="eyebrow" style="font-size:1rem;color:var(--gold-t)">Page Not Found</span>
      <h1 style="margin:16px 0 20px;font-size:clamp(3rem,8vw,5rem)">404</h1>
      <p class="lead" style="margin:0 auto 32px;max-width:52ch">
        The chapter or tale you are searching for has drifted away or does not exist.
      </p>
      <div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap">
        <a class="btn" href="${root}">Return to Library Home</a>
        <a class="btn secondary" href="${root}explore/">Explore Catalog</a>
        <a class="btn secondary" href="${root}library/">Search Stories</a>
      </div>
    </div>
  `;

  return renderShell({
    title: 'Page Not Found (404) | World Tales',
    description: 'The requested page could not be found on World Tales.',
    canonicalPath: '404.html',
    root,
    bodyContent,
    currentNav: 'home'
  });
}

// File Writing Helper
function writePage(relPath, content) {
  const fullPath = path.join(__dirname, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

// MAIN BUILD EXECUTION
console.log('Generating Static Multi-Page Website for World Tales...');
let totalPages = 0;

// Home
writePage('index.html', generateHome());
totalPages++;

// Standard pages
writePage('explore/index.html', generateExplore());
totalPages++;
writePage('library/index.html', generateLibrary());
totalPages++;
writePage('settings/index.html', generateSettings());
totalPages++;
writePage('about/index.html', generateAbout());
totalPages++;
writePage('404.html', generate404());
totalPages++;

// Categories
for (const c of DATA.categories) {
  writePage(`category/${c.id}/index.html`, generateCategory(c));
  totalPages++;
}

// Collections
for (const k of DATA.collections || []) {
  writePage(`collection/${k.id}/index.html`, generateCollection(k));
  totalPages++;
}

// Stories & Chapters
for (const s of S) {
  if (!s.single) {
    writePage(`story/${s.id}/index.html`, generateStory(s));
    totalPages++;
  }
  for (let n = 1; n <= s.chapters.length; n++) {
    writePage(`read/${s.id}/${n}/index.html`, generateReader(s, n));
    totalPages++;
  }
}

console.log(`Generated ${totalPages} static multi-page HTML files.`);

// Generate updated sitemap.xml
console.log('Generating sitemap.xml with full metadata...');
const sitemapUrls = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'explore/', priority: '0.9', changefreq: 'monthly' },
  { path: 'library/', priority: '0.9', changefreq: 'weekly' },
  { path: 'settings/', priority: '0.3', changefreq: 'yearly' },
  { path: 'about/', priority: '0.5', changefreq: 'yearly' }
];

for (const c of DATA.categories) {
  sitemapUrls.push({ path: `category/${c.id}/`, priority: '0.8', changefreq: 'monthly' });
}
for (const k of DATA.collections || []) {
  sitemapUrls.push({ path: `collection/${k.id}/`, priority: '0.8', changefreq: 'monthly' });
}
for (const s of S) {
  if (!s.single) {
    sitemapUrls.push({ path: `story/${s.id}/`, priority: '0.8', changefreq: 'monthly' });
  }
  for (let n = 1; n <= s.chapters.length; n++) {
    sitemapUrls.push({ path: `read/${s.id}/${n}/`, priority: '0.6', changefreq: 'monthly' });
  }
}

const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}/${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Updated sitemap.xml with ${sitemapUrls.length} canonical URLs.`);

// Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt, 'utf8');
console.log('Updated robots.txt.');

