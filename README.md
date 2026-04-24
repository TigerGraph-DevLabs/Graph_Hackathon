# GraphRAG Inference Hackathon — Site (Next.js)

Static marketing site for the **GraphRAG Inference Hackathon** by TigerGraph (May 1 – May 16, 2026). Built with Next.js 15 (App Router), pure frontend, **statically exported** for Vercel.

## Tech stack

- **Next.js 15** — App Router, JavaScript (no TypeScript), `output: 'export'` for fully static deploys
- **React 18**
- Vanilla CSS (`globals.css`, `home.css`, per-page `<style>` blocks) — no Tailwind, no preprocessors
- Google Fonts CDN — Space Grotesk, Inter, JetBrains Mono
- No backend, no database, no API routes

## Run locally

```bash
cd web-next
npm install        # one-time
npm run dev        # dev server with hot reload
# → http://localhost:3000  (or 3001 if 3000 is taken)
```

Production build + preview:

```bash
npm run build      # outputs static files to ./out
npx serve out      # preview the exported site
```

## Deploy to Vercel

```bash
cd web-next
npx vercel         # first run: log in + link project, returns a preview URL
npx vercel --prod  # promote to production
```

Vercel auto-detects Next.js and runs `next build`. No `vercel.json` needed — `next.config.mjs` (with `output: 'export'`) is the only config.

## Single source of truth — `src/lib/site.config.js`

Edit one file, every page picks up the change.

```js
export const SITE = {
  unstopUrl:    'https://unstop.com/o/97bGeFT?lb=YuMDszPL',
  whatsappUrl:  'https://chat.whatsapp.com/Iwdyhie2gSoIR0k2teMtKb',
  contactEmail: 'devanshu.saxena@tigergraph.com',
  contactPhone: '+917404313376',
  registrationDeadline: Date.UTC(2026, 4, 5, 18, 29, 0), // May 5 23:59 IST
  hackathonDates: 'May 1 – May 16, 2026',
  prizePool: { usd: 700, inr: 65795 },
};
```

`<RegisterButton />`, the live `<Countdown />`, and the footer all import `SITE`. Change the URL or deadline in this file and every page updates.

## Project structure

```
web-next/
├── package.json
├── next.config.mjs              output: 'export' for static deploy
├── jsconfig.json                @/* → src/* alias
├── public/                      static assets served from /
│   ├── assets/
│   │   ├── tigergraph-logo.png
│   │   ├── favicon.svg
│   │   ├── og-image.jpg            (dark banner · social preview)
│   │   └── og-image-light.jpg
│   ├── banners/                    raw banner exports for social posts
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── app/
    │   ├── layout.jsx              <html>, fonts, theme bootstrap, Nav, Footer
    │   ├── page.jsx                home (hero, dual-pipeline, AI Factory, countdown, prize/timeline previews)
    │   ├── globals.css             ported styles.css
    │   ├── home.css                index-only animations
    │   ├── timeline/page.jsx
    │   ├── prizes/page.jsx
    │   ├── about/page.jsx
    │   ├── faq/page.jsx             (client component — scroll-spy on sidebar)
    │   ├── partners/page.jsx        (sample-data badges on tiers 02/03/04)
    │   └── community-leads/page.jsx
    ├── components/
    │   ├── Nav.jsx                 (client — burger, theme toggle, register CTA)
    │   ├── Footer.jsx
    │   ├── ThemeToggle.jsx
    │   ├── Countdown.jsx           (client — ticks every second)
    │   ├── RegisterButton.jsx      (anchor wired to SITE.unstopUrl)
    │   ├── Reveal.jsx              (IntersectionObserver wrapper)
    │   └── CommunityLeadsView.jsx  (client — network/grid view + 20 mock leads)
    └── lib/
        └── site.config.js          single source of truth
```

## Partners — replace before launch

`src/app/partners/page.jsx` ships with a yellow `Sample · Pending` badge on tiers 02/03/04. **Tier 01 (TigerGraph) is real.** Search for `SAMPLE PARTNERS` in that file and:

1. Replace each `<div className="sigil">XX</div>` with `<img src="/assets/partners/<name>.png" alt="<Name>" />`.
2. Drop real logos in `public/assets/partners/`.
3. Update partner names + descriptions.
4. Once everything is real, delete the `<div className="sample-banner">…</div>` block and the `<span className="badge sample-pill">Sample · Pending</span>` from each tier head.

## Community Leads

20 mock leads are hardcoded in `src/components/CommunityLeadsView.jsx` (the `LEADS` array). Network and grid views both read from the same array — replace once, both views update.

## Smoke-test checklist

- [ ] Home: graph constellation animates, countdown ticks, console panel renders
- [ ] All 7 nav links navigate
- [ ] Theme toggle flips entire site, persists across reload
- [ ] Burger menu opens/closes at narrow viewports (≤980 px)
- [ ] FAQ accordion expand/collapse works; sidebar highlights active section as you scroll
- [ ] Community Leads: `◉ Network` shows constellation, `⊞ Grid` shows 20 cards, toggle switches
- [ ] Every "Register on Unstop" button opens the Unstop URL in a new tab
- [ ] Resize to 1440 / 900 / 375 — no layout breaks in light or dark mode

## Stopping the dev server

`Ctrl+C` in the terminal running `npm run dev`. From another shell:

```bash
# kill anything on the dev port
netstat -ano | grep ':3000'      # find PID
taskkill //PID <pid> //F         # stop it (Git Bash on Windows)
```
