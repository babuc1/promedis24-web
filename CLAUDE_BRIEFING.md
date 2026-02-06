# Promedis24 Website - Claude AI Briefing Document

**Last Updated:** 2026-02-06

## Project Overview

This is a website relaunch for **Promedis24**, a German healthcare staffing company specializing in temporary work (Zeitarbeit) for nursing, education, and medical professionals.

**Project Location:** `/Users/babu/promedis24-web`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16+ (App Router) | Core framework with SSG/SSR |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling with CSS-based config |
| Framer Motion | Animations |
| Supabase | Backend (to be connected) |
| Lucide React | Icons |
| Vercel | Deployment target |

---

## Project Structure

```
promedis24-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── bewerben/          # Application form
│   │   ├── benefits/          # Benefits pages (overview + 6 detail)
│   │   ├── standorte/         # Location pages (overview + 9 cities)
│   │   ├── fuer-unternehmen/  # Enterprise pages
│   │   ├── zeitarbeit-quiz/   # Interactive quiz
│   │   ├── kontakt/           # Contact form
│   │   ├── ueber-uns/         # About page
│   │   ├── on-tour/           # On-Tour program page
│   │   ├── erfolgsgeschichten/ # Success stories
│   │   ├── jobs-in-meiner-naehe/ # Location-based job search
│   │   ├── impressum/         # Legal
│   │   └── datenschutz/       # Privacy
│   ├── components/
│   │   ├── ui/                # Design system (Button, Card, Section, Grid, TapeStrip)
│   │   ├── layout/            # Header, Footer, Navigation
│   │   └── sections/          # Page sections (Hero, Stats, etc.)
│   ├── content/               # JSON content (CMS-ready)
│   │   ├── locations/         # Location data (9 cities + index)
│   │   ├── benefits/          # Benefits data
│   │   ├── testimonials/      # Testimonial data
│   │   ├── stories/           # Success stories (6 stories)
│   │   ├── on-tour/           # On-Tour program content
│   │   └── quiz/              # Quiz questions
│   └── lib/
│       ├── utils.ts           # Utility functions (cn, slugify)
│       └── types.ts           # TypeScript types
└── public/                    # Static assets
```

---

## Design System

### Brand Colors (defined in `src/app/globals.css`)

| Color | Hex | Usage |
|-------|-----|-------|
| Turkis | `#23D2AF` | Primary (Bewerber/Applicants) |
| Turkis Light | `#E0F7F1` | Backgrounds |
| Amethyst | `#8A84F5` | Secondary (Unternehmen/Enterprise) |
| Amethyst Light | `#EEEDFE` | Backgrounds |
| Coal | `#002D32` | Text (NOT black!) |
| Grey | `#F5F5F5` | Neutral backgrounds |

### Typography

- **Artex** font family (not yet installed - placeholder using system fonts)
- Font files needed: Artex Black, Artex Compressed, Artex Extended, Artex Regular
- Place in `/public/fonts/` and uncomment `@font-face` rules in `globals.css`

### Core UI Components (`src/components/ui/`)

- `Button` - Primary/Secondary/Ghost/Outline variants, supports `href` for links
- `Card` - Default/Turkis/Amethyst/Tape variants
- `Section` - Full-width sections with background variants
- `Grid` - Responsive grid (1-6 columns)
- `TapeStrip` - Decorative tape element (brand identity)

---

## Dual Audience System

The website serves TWO audiences with distinct color coding:

1. **Bewerber (Job Seekers)** - Turkis color scheme
   - Routes: `/bewerben`, `/jobs`, `/benefits`, `/zeitarbeit-quiz`, `/on-tour`, `/jobs-in-meiner-naehe`, `/erfolgsgeschichten`

2. **Unternehmen (Employers)** - Amethyst color scheme
   - Routes: `/fuer-unternehmen/*`, `/personalvermittlung`, `/kontakt`

The navigation has a toggle to switch between modes.

---

## Current Build Status

**31 static pages generated successfully**

```
Route (app)
├ ○ /
├ ○ /benefits
├ ● /benefits/[slug] (6 pages)
├ ○ /bewerben
├ ○ /datenschutz
├ ○ /erfolgsgeschichten
├ ○ /fuer-unternehmen
├ ○ /impressum
├ ○ /jobs-in-meiner-naehe
├ ○ /kontakt
├ ○ /on-tour
├ ○ /standorte
├ ● /standorte/[city] (9 cities)
├ ○ /ueber-uns
└ ○ /zeitarbeit-quiz
```

---

## What's Completed

### Pages
- [x] Homepage with all sections
- [x] Benefits pages (overview + 6 detail pages)
- [x] Standorte pages (overview + 9 cities: Berlin, Hamburg, München, Nürnberg, Köln, Düsseldorf, Frankfurt, Leipzig, Friedrichshafen)
- [x] Zeitarbeit Quiz (interactive)
- [x] Bewerben page (multi-step application form)
- [x] Fuer-Unternehmen landing page
- [x] Kontakt page (dual form)
- [x] Ueber-uns page
- [x] Legal pages (Impressum, Datenschutz)
- [x] **On-Tour page** - Program with FAQ accordion, destinations map, testimonials
- [x] **Erfolgsgeschichten** - Success stories with filter and modal view
- [x] **Jobs-in-meiner-Naehe** - Geolocation-based search with radius filtering

### Infrastructure
- [x] Project setup (Next.js, Tailwind, Framer Motion)
- [x] Design tokens and global styles
- [x] Core UI components
- [x] Layout (Header, Footer, Navigation with dual-mode)
- [x] Content JSON structure

---

## What's NOT Completed (Remaining Tasks)

### Phase 1: Missing Pages
- [ ] `/jobs` - Job listings (needs ATS integration)
- [ ] `/fuer-unternehmen/zeitarbeit` - What is Zeitarbeit page
- [ ] `/fuer-unternehmen/prozess` - Process page with step animation
- [ ] `/fuer-unternehmen/vorteile` - Benefits for employers
- [ ] `/personalvermittlung` - Direct placement service

### Phase 2: Integrations
- [ ] **Google Maps API** - Replace map placeholders in Standorte pages
- [ ] **Supabase Backend** - Connect forms (contact, application)
- [ ] **ATS Integration** - Connect to jobs.promedis24.de for job listings
- [ ] **Analytics** - Vercel Analytics or GA4

### Phase 3: Assets & Polish
- [ ] **Artex Fonts** - Install when provided
- [ ] **Images** - Add real photos/images
- [ ] **Videos** - Hero video, testimonial videos
- [ ] **OG Images** - Social sharing images
- [ ] **Performance** - Lighthouse optimization

### Phase 4: Deployment
- [ ] Set up GitHub repository
- [ ] Vercel deployment
- [ ] Domain setup (promedis24.de)
- [ ] SSL/DNS configuration

---

## Content Files

All content is in `src/content/` as JSON files:

| File | Purpose |
|------|---------|
| `locations/index.json` | All 9 locations with coordinates |
| `locations/*.json` | Individual city data (9 files) |
| `benefits/index.json` | Benefits list |
| `testimonials/index.json` | Testimonial quotes |
| `stories/index.json` | 6 success stories (talents & employers) |
| `on-tour/index.json` | On-Tour benefits, destinations, FAQ |
| `quiz/questions.json` | Quiz questions |

---

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start
```

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Design tokens, fonts, global styles |
| `src/components/ui/Button.tsx` | Button component (supports href for links) |
| `src/components/layout/Navigation.tsx` | Main nav with dual-mode toggle |
| `src/lib/types.ts` | TypeScript interfaces |

---

## Notes for Continuation

1. **Button Component** - Use `href` prop for links, not `asChild`
   ```tsx
   <Button href="/bewerben">Click me</Button>
   ```

2. **Section Variants** - Use `variant` prop: default, coal, turkis, amethyst, grey

3. **Responsive Grid** - Use `cols` prop (1, 2, 3, 4, 6)

4. **Animations** - Framer Motion is set up. Use `motion.div` with `initial`, `animate`, `whileInView`

5. **Content** - All text content should come from JSON files in `/src/content/`

6. **Geolocation** - Jobs-in-meiner-Naehe uses Haversine formula for distance calculation

7. **Stories Filter** - Erfolgsgeschichten supports filtering by: alle, Pflege, Pädagogik, Einrichtung

---

## Location Data

9 cities with real addresses and coordinates:

| City | Region | Area Manager |
|------|--------|--------------|
| Berlin | Osten | Franciska Morawa |
| Hamburg | Norden | N.N. |
| München | Süden | N.N. |
| Nürnberg | Süden | N.N. |
| Köln | Westen | Guido Wollsiefer |
| Düsseldorf | Westen | Guido Wollsiefer |
| Frankfurt | Mitte | N.N. |
| Leipzig | Osten | Franciska Morawa |
| Friedrichshafen | Süden | N.N. |

---

## Original Project Plan

The complete project plan is available at:
`/Users/babu/Downloads/Promedis24_Website-Projektplan.docx`

Key sections:
- Executive Summary
- Technical Architecture
- Sitemap & Page Structure
- Interactive Features
- Design System
- Phase Plan (6 phases)
- SEO Strategy

---

## Contact/Context

- **Design**: Following Brand Guidelines Q3/2025 (Artex font, Turkis/Amethyst colors, Tape-strip aesthetic)
- **Development**: Claude Code (agentic coding)
- **Designer**: Phillip (creating mockups in parallel)
