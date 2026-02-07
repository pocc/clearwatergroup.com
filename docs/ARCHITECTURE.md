# Clearwater Group - Architecture Reference

## Current State (as of Feb 2025)

### Dual-Mode Deployment

The site runs as **Cloudflare Pages** with two parts:

1. **Static HTML site** (main domain) - GoDaddy/Starfield monolith HTML pages saved with monolith tool
2. **React SPA** (`/demo` route) - Vite + React + TypeScript app, currently placeholder

### Directory Structure

```
clearwatergroup.com/
├── index.html              # Static homepage (7.1MB monolith HTML with embedded fonts)
├── _redirects              # Cloudflare Pages redirects: /demo/* -> /demo/index.html
├── services/index.html     # Static services page
├── team/index.html         # Static team page
│   ├── JJ_CV_230219.pdf    # James Jacobs CV
│   └── OJ_CV_230219.pdf    # Olivia Jacobs CV
├── books/index.html        # Static books page
│   └── Jim_Jacobs_headshot_230818.png
├── faq/index.html          # Static FAQ page
├── contact/index.html      # Static contact page
├── sea-level-rise/index.html # Static SLR page
├── src/
│   ├── client/             # React SPA (builds to /demo)
│   │   ├── index.html      # SPA entry point
│   │   ├── index.css        # @import "tailwindcss"
│   │   ├── main.tsx         # React root with BrowserRouter basename="/demo"
│   │   ├── App.tsx          # Routes definition
│   │   ├── components/
│   │   │   └── Layout.tsx   # Shell with nav + Outlet
│   │   └── routes/
│   │       └── Home.tsx     # Placeholder homepage
│   ├── server/
│   │   ├── worker.ts        # Cloudflare Worker entry: API routes, static assets, SPA fallback
│   │   ├── index.ts         # Hono app with /demo/api basePath, /health endpoint
│   │   └── db/
│   │       ├── index.ts     # Drizzle ORM + D1 connection
│   │       └── schema.ts    # Database schema (placeholder)
│   └── shared/
│       └── types.ts         # Env interface: { DB: D1Database, ASSETS: Fetcher }
├── drizzle/                # Migration output directory
├── public/                 # Static assets for Vite
├── package.json
├── vite.config.ts
├── wrangler.toml
├── tsconfig.json
└── drizzle.config.ts
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend framework | React 19 + TypeScript |
| Routing | react-router v7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Build tool | Vite 6 |
| Server/API | Hono (on Cloudflare Workers) |
| Database | Cloudflare D1 + Drizzle ORM |
| Deployment | Cloudflare Pages (with `pages_build_output_dir = "dist"`) |

### Build Process

```bash
# package.json "build" script:
mkdir -p dist && \
cp -r books contact faq sea-level-rise services team index.html _redirects dist/ && \
vite build
```

1. Creates `dist/` output directory
2. Copies all static HTML pages + assets into `dist/`
3. Vite builds React SPA into `dist/demo/`
4. Result: `dist/` contains both static site and React SPA

### Deployment

```bash
npm run deploy  # → npm run build && wrangler deploy
```

- `wrangler.toml` sets `pages_build_output_dir = "dist"` for Cloudflare Pages
- Worker (`src/server/worker.ts`) handles routing:
  - `/demo/api/*` → Hono API
  - Static assets → `env.ASSETS.fetch()`
  - `/demo/*` → SPA fallback to `/demo/index.html`
  - Everything else → static assets (the HTML pages)

### Key Configuration

**wrangler.toml:**
- `name = "clearwatergroup"`
- `compatibility_date = "2025-01-01"`
- D1 database binding: `DB` → `clearwater-db`

**vite.config.ts:**
- `base: "/demo/"` - all SPA assets served from /demo/
- `root: "src/client"` - client source root
- `build.outDir: "../../dist/demo"` - outputs into dist/demo/

### Git History

```
2cd9aa3 Fix Pages deployment: copy static site into dist and add pages_build_output_dir
7419e8e Fix /demo route by using bare custom_domain and scoping SPA fallback
0b6f2e9 Convert from Cloudflare Pages to Worker deployment
140d553 Scaffold Vite + React + TypeScript full-stack app at /demo
fde9269 added copyright 2025
532ebb8 Added PhD
6cf2010 added book author photo
b399b38 added updated resumes
7c02a43 using monolith instead
6184849 first commit
```

### Static Site Details

- Built with GoDaddy Website Builder (Starfield Technologies v8.0)
- HTML pages are monolith exports (single file with embedded base64 fonts, inline CSS)
- Uses Open Sans font (embedded as base64)
- External assets from wsimg.com CDN (logos, images)
- Google reCAPTCHA on contact form
- Responsive design via data-ux components
