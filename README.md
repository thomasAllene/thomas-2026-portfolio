# Thomas 2026 Portfolio

Personal portfolio of **Thomas Allene B. Escoto** — React + Vite, deployed as a static site to GitHub Pages.

## Stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | React 18                                           |
| Build      | Vite 6                                             |
| Routing    | React Router 6 (`BrowserRouter`)                   |
| Styling    | Bootstrap 5 via the Sneat dark theme (static CSS)  |
| Icons      | Boxicons                                           |
| Animation  | AOS (Animate On Scroll)                            |
| Hosting    | GitHub Pages                                       |

There is no backend. Everything is static.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Project layout

```
index.html                    Entry HTML; loads the Sneat CSS + portfolio.css
vite.config.js                `base` must match the repo name (see Deployment)
src/
  main.jsx                    Mounts React, inits AOS, sets router basename
  App.jsx                     Routes + ambient backdrop + navbar/footer shell
  data/portfolio.js           ALL site content lives here
  components/
    Navbar.jsx                Shared navbar (mobile menu via React state)
    Footer.jsx                Shared footer
    ScrollManager.jsx         Hash scrolling, scroll-to-top, AOS refresh
  hooks/useDocumentMeta.js    Per-page <title> and meta description
  pages/
    Home.jsx                  Hero, about, skills, projects, experience,
                              education, contact
    ProjectsPage.jsx          Full project listing (/projects)
public/
  assets/css/portfolio.css    Custom dark glassmorphism theme
  assets/vendor/              Sneat core-dark.css, front-page.css, Boxicons
  404.html                    GitHub Pages SPA redirect shim
  .nojekyll                   Stops Pages running Jekyll over the build
```

## Editing content

Everything — name, title, about copy, skills, experience, education, projects,
contact links, nav items — lives in **[src/data/portfolio.js](src/data/portfolio.js)**.
The components just render it, so you rarely need to touch JSX.

Projects use one array for both pages: `featured: true` puts a project in the
landing-page preview grid (using `summary` + `featuredTags`), while every entry
renders in full on `/projects` (using `desc` + `highlights` + `tags`).

Styling is in **[public/assets/css/portfolio.css](public/assets/css/portfolio.css)**;
the palette is a set of CSS variables at the top of that file.

## Deployment

Pushing to `main` (or `react-development`) runs
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and
publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo, go to *Settings → Pages* and set
**Source** to **GitHub Actions**.

Live URL: `https://thomasAllene.github.io/thomas-2026-portfolio/`

### If you rename the repo or move to a user site

Two values must agree:

1. `base` in [vite.config.js](vite.config.js) — `'/<repo-name>/'`
2. `pathSegmentsToKeep` in [public/404.html](public/404.html) — `1` for a
   project site, `0` for a user site (`username.github.io`)

For a user site, set `base: '/'` and `pathSegmentsToKeep = 0`.

### Why 404.html exists

GitHub Pages has no server-side routing, so a hard refresh on `/projects`
would return a 404. `404.html` catches that, encodes the path into a query
string, and bounces to `index.html`, where a small snippet in the `<head>`
restores the real URL before React Router boots.
Technique: [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages) (MIT).
