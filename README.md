# Antique Clock Restorers

An educational journal and community website for restoring antique clocks, pendulum and grandfather clocks, vintage pocket watches, and collectibles — written for collectors aged 55 and over.

The site is built with **React + Vite + Tailwind CSS + React Router**, and every route is **pre-rendered to static HTML** at build time using [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg). All article text, legal pages, FAQs, contact details, and testimonials are present in the raw HTML source — the site is fully readable with JavaScript disabled and crawlable by search engines and ad reviewers. A small **Express** server with **compression** serves the pre-rendered output in production.

## Tech stack

- React 18 + React Router DOM 6
- Vite 5 (build tooling)
- vite-react-ssg (static pre-rendering of every route)
- Tailwind CSS 3 (design system)
- Express 4 + compression (production server)
- Google Analytics 4 (`G-4J046JXWVC`) with **Consent Mode v2** (denied by default)

## Project structure

```
.
├── index.html                # HTML shell + GA tag + Consent Mode v2 defaults
├── server.js                 # Express production server (compression, static, SPA fallback)
├── vite.config.js            # Vite + SSG options
├── tailwind.config.js        # Design tokens (colors, fonts, shadows)
├── public/
│   ├── robots.txt            # Allows all crawling, references sitemap
│   ├── sitemap.xml           # All routes
│   └── favicon.svg
└── src/
    ├── main.jsx              # ViteReactSSG entry
    ├── routes.jsx            # Route tree (all pages)
    ├── index.css             # Tailwind layers + base styles
    ├── assets/images/        # Local images only (hero, categories, community, guides)
    ├── components/           # Navbar, Footer, Seo, CookieBanner, Accordion, etc.
    ├── data/                 # site, categories, articles, guides, testimonials, faqs
    ├── pages/                # Home, About, Blog, Community, Contact, guides, legal, 404
    └── utils/analytics.js    # trackPageView(), trackEvent(), consent helpers
```

## Requirements

- Node.js **20.x**
- npm 10+

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Starts the Vite dev server (via `vite-react-ssg dev`) at http://localhost:5173.

## Production build (with pre-rendering)

```bash
npm run build
```

This generates the static site into `dist/`, producing a real HTML file for every route (`index.html`, `about.html`, `blog.html`, `legal/privacy.html`, `404.html`, and so on). Open any file in `dist/` and **View Source** to confirm the full content is present without JavaScript.

Preview the static output locally with Vite:

```bash
npm run preview
```

## Run the production Express server

```bash
npm run build
npm start
```

Serves `dist/` on `PORT` (default `8080`) with gzip compression, long-lived caching for fingerprinted assets, clean-URL resolution, and a pre-rendered `404.html` fallback.

## Deployment

The build output in `dist/` is static, so it can be hosted on any static host. The Express server is provided for platforms that run a Node process.

### Heroku
Uses `Procfile` (`web: node server.js`) and `app.json`.
```bash
heroku create
git push heroku main
```
Heroku runs `npm install` and `npm run build` automatically, then `npm start`.

### Vercel
Configured by `vercel.json` (`cleanUrls: true`, output `dist`).
```bash
vercel --prod
```
Build command `npm run build`, output directory `dist`.

### Netlify
Configured by `netlify.toml`.
```bash
netlify deploy --prod
```
Build command `npm run build`, publish directory `dist`. Pretty URLs and `404.html` are handled automatically.

### AWS Amplify
Configured by `amplify.yml`. Connect the repository in the Amplify console; it runs `npm ci`, `npm run build`, and serves `dist` as the artifact base directory.

## Analytics & consent

- The Google tag is embedded directly in `index.html`.
- **Consent Mode v2** sets `ad_storage`, `ad_user_data`, `ad_personalization`, and `analytics_storage` to `denied` by default.
- The cookie banner slides up from the bottom; accepting updates consent to `granted` and stores the choice in `localStorage` (key `acr-consent`).
- `src/utils/analytics.js` exposes `trackPageView()` and `trackEvent()`. Page views fire on every route change via the `ScrollToTop` component.

## Content & images

- All images are stored locally in `src/assets/images/` and imported as ES modules — no hotlinking or CDN image dependencies.
- All page content is original and present in the pre-rendered HTML.

## Business information

- **Antique Clock Restorers**
- Email: antiqueclockrestorers@gmail.com
- Phone: (480) 391-7426
- Address: 244 Desert Willow Dr, Scottsdale, AZ 85251
