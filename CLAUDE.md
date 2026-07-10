# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**KOMA Coffee** — Indonesian-language landing page for a specialty coffee shop chain with three Bali branches (Mambal, Point, Renon). Single-page React app with multi-route navigation, heavy animations, and brand-specific design system. Deployed as a static build behind nginx, built/pushed to GHCR and deployed to a VPS via SSH.

## Commands

All commands run from the repo root. The project uses both `npm` and `pnpm` (Dockerfile installs via pnpm, `quick-start.sh` uses npm); lockfiles for both exist (`package-lock.json`, `pnpm-lock.yaml`). Use `npm` for local dev to match `package.json` scripts.

```bash
npm install                # install deps
npm run dev                # Vite dev server (http://localhost:5173)
npm run build              # production build → dist/
npm run preview            # serve built dist/ locally
npm run lint               # ESLint (flat config, ignores dist/)
```

Docker build/push and VPS deployment are automated in `.github/workflows/deploy.yml` on push to `main` or `staging`.

## Architecture

### Routing & shell (`src/App.jsx`)
Single layout wrapped in `BrowserRouter` + `ParallaxProvider`, with a `ScrollToTop` helper that resets window scroll on route change. Every route renders inside a shared shell: `ScrollProgress` → `Navbar` → page → `Footer` → floating `WhatsAppButton`.

Routes (all Indonesian URLs):
- `/` → `pages/HomePage.jsx` — composes `Hero` + `home/Ambiance` + `home/Community` + `home/OurBranches`
- `/cerita-kami` → `pages/StoryPage.jsx`
- `/cabang-menu` → `pages/BranchesPage.jsx` — reads `?branch=komaMambal|komaPoint|komaRenon` query param to drive tabs + which menu PDF is highlighted
- `/reservasi` → `pages/ReservationPage.jsx` — form that opens `wa.me/<phone>?text=...` with the encoded reservation details
- `/partnership` → `pages/PartnershipPage.jsx` (placeholder)
- `*` → `pages/NotFoundPage.jsx`

### Component layout
- `src/components/` — shared components (`Navbar`, `Footer`, `Menu`, `Stats`, `About`, `Testimonials`, `Location`, `ScrollProgress`, `WhatsAppButton`). Several of these (`About`, `Stats`, `Testimonials`, `Location`) are **not currently imported by any route** — they appear to be legacy/unused. `Menu` is only used by `BranchesPage`.
- `src/components/home/` — Home-page-only sections (`Ambiance`, `Community`, `OurBranches`).
- `src/pages/` — route components, each typically a self-contained page with hero + body sections.

### State & data
No global state, no API calls, no backend. All branch info, testimonials, menus, stats are inline constants in the component files. The reservation flow is purely client-side: it builds a WhatsApp message string and `window.open`s the URL — no submission endpoint.

### Styling & design tokens (`tailwind.config.js`, `src/index.css`)
Tailwind utility-first with a heavily customized theme. The brand palette lives in `tailwind.config.js` and is the source of truth — refer to it before introducing one-off colors:
- `bg-sand` / `bg-beige-*` — page/section surfaces (use `bg-sand` = beige-200 for default page bg, `bg-beige-50` for cards, `bg-beige-100` = `bg-cream` for section bg, `bg-beige-300` for borders)
- `text-coffee-*` — body/heading text on light surfaces
- `bg-footer-brown` — footer background
- `bg-gold` / `bg-gold-dark` / `bg-gold-light` — accent (CTAs, highlights, active states)
- Fonts: `font-display` (DrukWideBold), `font-sans` (HelveticaNowDisplay — default body), `font-serif` (Ragasta — headings). All three are preloaded from `public/fonts/` in `index.html` and declared via `@font-face` in `src/index.css`.
- Custom Tailwind animations: `float`, `fadeIn`, `slideUp`, `scaleIn`.

`src/index.css` also defines CSS variables (`--beige-page`, `--text-heading`, etc.), the `.glass` utility (glassmorphism with backdrop blur), the `.transition-smooth` utility, and `react-datepicker` overrides under `.custom-datepicker`.

### Animation patterns
- **AOS** is initialized globally in `App.jsx` (`duration: 1000, once: true`) and used via `data-aos` attributes where applicable.
- **Framer Motion** is the primary animation tool — most section components use the `useRef` + `useInView` (`{ once: true, margin: '-100px' })` pattern to trigger enter animations when scrolled into view, then `motion.div` with `initial`/`animate` variants for fade-up, scale, stagger.
- **Hero** additionally uses `@tsparticles/react` (slim engine, gold particles) and a `bg-fixed` parallax background.

### Assets
- `public/fonts/` — preloaded custom fonts (woff2)
- `public/*.pdf` — branch menus (`koma-mambal.pdf`, `koma-point.pdf`, `koma-renon.pdf`)
- `public/manifest.json`, `public/sitemap.xml`, `public/robots.txt` — PWA + SEO basics
- Hero/branch imagery is loaded from Cloudinary (`res.cloudinary.com/dpadqzd98/...`) — the `?w=...` query param controls size. Several other images still use Unsplash URLs.
- `src/assets/` contains `hero.png` (legacy), `react.svg` and `vite.svg` (default Vite assets, unused).

## Build & Deploy

`.github/workflows/deploy.yml` runs on push to `main` or `staging`:
1. `build-and-push` job builds the multi-stage `Dockerfile` (node:20-alpine → nginx:alpine) and pushes the image to GHCR with tags `<branch>` and `sha-<short>`.
2. `deploy` job SSHes into a VPS (secrets: `VPS_HOST`, `VPS_PORT`, `VPS_USER`, `VPS_SSH_KEY`), logs into GHCR with `CR_PAT`, pulls the image, and runs the container on the `proxy` Docker network. Container name: `point-coffee-production` (main) or `point-coffee-staging` (staging).

`nginx.conf` is mounted at `/etc/nginx/conf.d/default.conf` and handles SPA fallback (`try_files $uri $uri/ /index.html`), 1-year cache for static assets, gzip, and basic security headers.

## Conventions

- Project language is **Indonesian** for user-facing copy — keep new copy in Indonesian to match.
- Path naming uses kebab-case (`/cerita-kami`, `/cabang-menu`).
- Components are functional with hooks, default-exported, and live under `src/components/` (shared) or `src/components/home/` (home-only). Pages are route components in `src/pages/`.
- Framer Motion + Tailwind utility classes is the established combo for new sections — mirror the `useRef` + `useInView` + `initial/animate` pattern used throughout.
- Branch identifiers are stable strings (`komaMambal`, `komaPoint`, `komaRenon`) and are referenced from `Footer`, `BranchesPage`, `OurBranches`, and `ReservationPage` — keep them consistent if you rename.