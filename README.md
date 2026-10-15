# World Tales (export)

An illustrated library of world literature: 41 stories in 6 categories (some grouped into 3 collections: Aesop's Fables, Japanese Folktales, Sherlock Holmes), chapter-by-chapter reading, character guides, bookmarks and reading progress.

This folder is an **unchanged copy** of the World Tales app as published from Claude. Nothing was redesigned, removed or rewritten for the export.

## What is in this folder

| File | Purpose |
|---|---|
| `index.html` | The entire app: HTML, CSS, JavaScript, all story text, and all illustrations (embedded as images inside the file). |
| `README.md` | This file. |

There are no other files to install. No build step, no `npm install`, no server code, no database.

SHA-256 of `index.html`: `b94a2e841237a0a1e09ba3253c69e53a4c823cf872d55b15287ddb6706a16431`

## Run it on your computer

**Simplest:** double-click `index.html`. It opens in your browser and works offline.

**Or, with a local web server** (closer to how it behaves online):

```
cd worldtales-export
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy as a public website (free options)

The app is a single static file, so any static host works. All of these have free plans. Pick one.

**Cloudflare Pages (recommended)**
1. Create a free Cloudflare account and open *Workers & Pages*, then *Create*, then *Pages*, then *Upload assets*.
2. Name the project and upload this folder (it must contain `index.html`).
3. Deploy. You get a `https://<name>.pages.dev` address. Add your own domain later if you want.
Note: Cloudflare Pages limits a single file to 25 MiB. `index.html` is about 15 MiB, so it fits, but there is limited room to add more stories (see "Adding stories").

**Netlify**
1. Open https://app.netlify.com/drop and drag the folder onto the page.
2. You get a `https://<name>.netlify.app` address.

**GitHub Pages**
1. Create a public repository and upload `index.html` to its main branch.
2. In *Settings*, then *Pages*, choose the main branch and root folder.
3. Your site appears at `https://<username>.github.io/<repository>/`.

**Vercel**: import the repository or drag the folder into a new project; choose "Other" as the framework and leave the build command empty.

No special server settings are needed. The app uses `#/...` address links (for example `/#/story/oliver-twist`), so every link is served by the single `index.html`.

## How the app stores things

- **Book content:** inside `index.html`, in one JavaScript object named `DATA` (categories, collections, stories, chapters, character guides, credits, contact details). Illustrations are embedded in it as base64 WebP images.
- **Reader data:** reading progress, bookmarks, recent reading, text size and light/dark choice are saved in the reader's own browser (`localStorage`, key `wt:v1`). It never leaves their device. It does not sync between devices, and it is lost if the reader clears their browser data. The Settings page has a "Clear reading history" button.
- **No accounts, no backend, no analytics, no cookies, no external services.** The page makes no network requests after it loads. Fonts are the reader's system fonts, so the exact typeface differs a little between devices.

## Editing the contents

Open `index.html` in a text editor and find `const DATA=`. Story entries follow this shape:

```
{ id, title, author:{name}, category, genres:[...], language, edition, intro,
  cover:{src,w,h}, characters:[{name,role,img}], chapters:[{n,title,paras:[...],img,alt}],
  credits:{...} }
```

Category ids: `adventure`, `fantasy`, `nature`, `folktales`, `society`, `mystery`.

### Adding stories

Everything is in one file, so every new story makes the file larger. Keep new images small (WebP, about 40 to 80 KB each). If you outgrow a single file, the next step is to move the images out into separate files and load them from there. That is a code change, so it is not done in this export.

## Before you launch (checklist)

These are things the app does not do for you yet:

1. **Fill in the credits.** In the `DATA.credits.app` block, `copyright`, `developer` and `contact` are empty. For most stories the *Original publication*, *Source edition*, *Illustration credit* and *Illustration license* fields are empty, so the About page shows nothing for them.
2. **Confirm you have the right to publish** every text edition and every illustration, and record that in the credits. Check the terms of whatever tool or source produced the illustrations.
3. **Test on a real phone and a real desktop browser** before sharing the link. See "What was verified" below.
4. **Optional, low effort:** add a page description and a social-sharing image in the `<head>`, so links look good when shared. The page currently has only a title.
5. **Be aware of page weight.** The page is about 15 MB (roughly 11 to 12 MB when your host compresses it). It loads once and then works from the browser cache. First load on a slow mobile connection will be slow.

## What was verified for this export

Verified (by reading the code and running it in Node with a simulated page):
- The code has no syntax errors, and `index.html` contains no links to outside scripts, styles, fonts or APIs.
- All 243 routes (home, explore, library, settings, about, every category, collection, story page and all 187 chapters) render without errors or "undefined" values.
- All 331 embedded images decode and match their declared sizes. Chapter numbering is consistent in every story and every chapter has text.
- Library search, bookmarks, reading progress, "Continue reading", text size, light/dark theme and "Clear reading history" work in the simulation.

**Not** verified:
- How it looks in a real browser, on real phones, or with a screen reader. No browser was available for the test.
- Load time on slow connections.
- Legal clearance of texts and illustrations.

So please treat this as a verified export of the existing app, not as a certified production release.
