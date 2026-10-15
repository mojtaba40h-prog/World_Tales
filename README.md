# World Tales

An illustrated library of world literature: 41 stories in 6 categories (some grouped into 3 collections), chapter-by-chapter reading, character guides, bookmarks and reading progress.

This is the same app as before, split into separate files. The design, features, texts and illustrations are unchanged.

## Folder structure

```
worldtales/
  index.html            Page structure (header, main area, footer). Loads the files below.
  css/style.css         All styles (layout, light and dark theme, reader).
  js/startup-check.js   Shows a clear message if the app cannot start (for example a missing file).
  js/data.js            All content: categories, collections, stories, chapters, characters, credits.
  js/app.js             Application code: pages, routing, reader, bookmarks, search, settings.
  assets/favicon.png    Browser tab icon.
  assets/logo.png       Logo in the header.
  assets/images/        All story illustrations (WebP), grouped by story:
                        covers, chapter illustrations and character portraits.
  .nojekyll             Tells GitHub Pages to serve the files as they are.
  README.md             This file.
```

The scripts load in this order: `startup-check.js`, `data.js`, `app.js`. Keep that order.

There is no build step, no `npm install`, no server code and no database. Nothing is loaded from the internet.

## Run it on your computer

Double-click `index.html`, or start a small local server:

```
cd worldtales
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy to GitHub Pages

1. Create a repository (public, for the free plan).
2. Upload the **whole contents of this folder**, keeping the folders (`css`, `js`, `assets`) and the hidden file `.nojekyll`. On the GitHub website use *Add file*, then *Upload files*, and drag the files and folders in. Or use `git add . && git commit && git push`.
3. In *Settings*, then *Pages*, choose the main branch and the root folder.
4. Open `https://<username>.github.io/<repository>/` after a minute or two.

`index.html` must be in the root of the published folder. File names are case-sensitive on GitHub Pages: do not rename anything.

If the page is blank or shows "World Tales could not start", the message says which file is missing. The usual cause is that a folder was not uploaded.

Other free hosts work the same way: Cloudflare Pages, Netlify (drag the folder onto https://app.netlify.com/drop) and Vercel.

## How data is stored

- **Content:** in `js/data.js`. Image fields hold a path such as `assets/images/stories/the-jungle-book/ch03.webp`.
- **Reader data:** progress, bookmarks, recent reading, text size and theme are saved in the reader's own browser (`localStorage`, key `wt:v1`). They are not sent anywhere, do not sync between devices, and are lost if the browser data is cleared.

## Editing and adding stories

Open `js/data.js`. Each story looks like this:

```
{ "id", "title", "author": {"name"}, "category", "genres": [...], "language", "edition", "intro",
  "cover": {"src", "w", "h"},
  "characters": [{"name", "role", "img": {"src","w","h"}}],
  "chapters": [{"n", "title", "paras": [...], "img": {"src","w","h"}, "alt"}],
  "credits": {...} }
```

Category ids: `adventure`, `fantasy`, `nature`, `folktales`, `society`, `mystery`.

To add a story: put its images in `assets/images/stories/<story-id>/`, then add an entry with the paths and the real pixel width and height of each image. Keep illustrations small (WebP, about 40 to 80 KB).

## Before you launch

1. Fill in the credits in `js/data.js`: the `credits.app` block (copyright, developer, contact) is empty, and most stories have no publication, edition, illustration credit or license.
2. Confirm you have the right to publish every text edition and every illustration.
3. Optional: add a page description and a sharing image in the `<head>` of `index.html`.
4. Test on a real phone and a real desktop browser.

## What was verified

By running the code in Node with a simulated page (no real browser was available):
- The split version renders exactly the same pages as the original single file: all 243 pages (home, explore, library, settings, about, every category, collection, story page and all 187 chapters), with every image compared by its content.
- Search, bookmarks, text size and theme work in the split version.
- All JavaScript files pass a syntax check. Every file referenced by `index.html` exists.

Not verified: appearance and behaviour in a real browser, load speed on slow connections, and legal clearance of texts and illustrations.
