# World Tales — Static Multi-Page Website (Technical SEO Edition)

An illustrated library of classic world literature: **53 stories** in **6 categories** and **4 collections**, with **224 chapters**, character guides, reading progress, and bookmarks.

This repository is built as a **search-engine-friendly static multi-page website (MPA)** with clean, path-based URLs (**zero hash-based URLs**), full JSON-LD structured data, pre-rendered semantic HTML, and client-side progressive hydration.

---

## Technical SEO Architecture

1. **Pre-rendered Static Pages (261 Pages):**
   - Every single route exists on disk as a true HTML file (`explore/index.html`, `story/alice-in-wonderland/index.html`, `read/alice-in-wonderland/1/index.html`, etc.).
   - Search engine crawlers (Googlebot, Bingbot, etc.) receive 100% pre-rendered semantic HTML with complete chapter text, author metadata, and illustrations.

2. **Clean Path-Based Navigation (No Hash `#` Routing):**
   - All internal links use clean relative paths (e.g., `../../story/treasure-island/`, `../../read/treasure-island/1/`).
   - Legacy hash URLs (e.g. `#/story/...`) automatically redirect to clean path URLs via `history.replaceState`.
   - Client-side navigation uses the HTML5 `History API` for instant, smooth page transitions without full-page reloads.

3. **Structured Data & Schema.org (JSON-LD):**
   - **Homepage:** `WebSite` and `SearchAction` schema.
   - **Category & Collection Pages:** `CollectionPage` and `BreadcrumbList` schema.
   - **Story Detail Pages:** `Book` and `BreadcrumbList` schema with author, genre, and image metadata.
   - **Reader / Chapter Pages:** `Chapter` schema linked to parent `Book` schema and `BreadcrumbList`.

4. **Meta Tags & Social Cards:**
   - Canonical URLs (`<link rel="canonical">`) pointing to authoritative endpoints.
   - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`) tailored per book and chapter.
   - Twitter Cards (`summary_large_image`).
   - Dynamic mobile theme-color: `#0b1424`.

5. **Sitemap & Robots:**
   - `sitemap.xml`: Comprehensive XML sitemap containing all 260 canonical URLs with `<lastmod>`, `<changefreq>`, and `<priority>`.
   - `robots.txt`: Explicit crawl permissions linking to the canonical sitemap.

---

## Folder Structure

```
World_Tales/
  index.html            Home page (pre-rendered with Editorial Spotlight & Carousel)
  explore/index.html    Explore categories view
  library/index.html    Searchable library shelf
  settings/index.html   Reader settings & preferences
  about/index.html      Colophon, credits, and editions
  404.html              Branded fallback page
  category/             Pre-rendered category pages (adventure, fantasy, nature, etc.)
  collection/           Pre-rendered collection pages (aesop, japanese, holmes, etc.)
  story/                Pre-rendered story overview & chapter guide pages
  read/                 Pre-rendered reader pages for every individual chapter (1 to 224)
  css/style.css         Luxury editorial styling (Warm Ivory, Midnight Navy, Muted Gold)
  js/startup-check.js   Diagnostic script catching file/script errors
  js/data.js            Database: categories, collections, stories, chapters, credits
  js/app.js             Application engine: progressive hydration, state (wt:v1), reader
  build-static-seo.js   Static site generator script (builds all 261 static HTML pages)
  sitemap.xml           Canonical XML sitemap with 260 URLs
  robots.txt            Crawler instructions
  assets/               Favicon, logo, and WebP artwork
```

---

## Re-building Static Pages

If you add new stories, edit chapter texts, or modify templates, regenerate all static HTML files with:

```bash
npm run build
# or directly:
node build-static-seo.js
```

---

## Local Development & Preview

Start a local static server from the project directory:

```bash
cd World_Tales
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser. All links and pages work without server-side rewrite rules.

---

## Deployment to GitHub Pages

1. Commit and push the repository:
   ```bash
   git add .
   git commit -m "feat(seo): static multi-page website with clean URLs and JSON-LD schema"
   git push origin main
   ```
2. In GitHub repository **Settings → Pages**, set the branch to `main` and folder to `/ (root)`.
3. Your site will be published at `https://<username>.github.io/<repository>/`.
