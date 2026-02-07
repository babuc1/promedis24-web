# Promedis24 Website - Claude AI Briefing Document

**Last Updated:** 2026-02-07

## Project Overview

This is a website relaunch for **Promedis24**, a German healthcare staffing company specializing in temporary work (Zeitarbeit) for nursing, education, and medical professionals.

**Project Location:** `/Users/babu/promedis24-web`
**Live URL:** https://promedis24-web.vercel.app
**Repository:** https://github.com/babuc1/promedis24-web

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Core framework with App Router |
| React | 19 | UI Library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling with **CSS-based config** |
| Framer Motion | 11.x | Animations |
| Lucide React | Latest | Icons |
| Vercel | - | Deployment |

---

## CRITICAL: Lessons Learned

### 1. Tailwind v4 Uses CSS-based Config (NOT tailwind.config.js)

Design tokens are defined in `src/app/globals.css` using `@theme` blocks:

```css
@import "tailwindcss";

@theme inline {
  --color-turkis: #23D2AF;
  --color-amethyst: #8A84F5;
  --color-coal: #002D32;
  /* etc. */
}
```

### 2. CSS Specificity Can Override Tailwind Classes

**Problem we fixed:** Text was appearing as dark green instead of white on buttons, even with `text-white` class applied.

**Root Cause:** Base styles in `globals.css` were overriding Tailwind utility classes:

```css
/* THIS WAS THE PROBLEM - color declaration overrode Tailwind! */
h1, h2, h3, h4, h5, h6 {
  color: var(--color-coal);  /* ← REMOVED */
}
```

**Solution:** Never set `color` in base CSS styles. Let Tailwind utility classes control colors:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-artex-black);
  line-height: 1.2;
  /* color removed - let Tailwind classes handle text color */
}
```

### 3. Coal (#002D32) is NOT Black - It's Dark Green/Teal!

This is critical for contrast:

| Background | Text Color | Result |
|------------|-----------|--------|
| `bg-turkis` | `text-coal` | BAD - Green on green |
| `bg-turkis` | `text-white` | GOOD |
| `bg-coal` | `text-coal` | BAD - No contrast |
| `bg-coal` | `text-white` | GOOD |

### 4. Use !important When Needed

Tailwind v4 syntax for !important:
```tsx
className="!text-white"  // Generates: color: #fff !important;
```

---

## Design System

### Brand Colors

| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| Turkis | `#23D2AF` | `--color-turkis` | Primary (Bewerber) |
| Turkis Light | `#E0F7F1` | `--color-turkis-light` | Light backgrounds |
| Turkis Dark | `#1BA88C` | `--color-turkis-dark` | Hover states |
| Amethyst | `#8A84F5` | `--color-amethyst` | Secondary (Unternehmen) |
| Amethyst Light | `#EEEDFE` | `--color-amethyst-light` | Light backgrounds |
| Amethyst Dark | `#6B64D9` | `--color-amethyst-dark` | Hover states |
| Coal | `#002D32` | `--color-coal` | Text on light, dark sections |
| Grey | `#F5F5F5` | `--color-grey` | Neutral backgrounds |
| White | `#FFFFFF` | `--color-white` | Light bg, text on dark |

### Button Variants (src/components/ui/Button.tsx)

```tsx
variants: {
  primary: "bg-turkis !text-white hover:bg-turkis-dark",      // Bewerber
  secondary: "bg-amethyst text-white hover:bg-amethyst-dark", // Unternehmen
  ghost: "bg-transparent text-coal hover:bg-grey",            // Light backgrounds
  "ghost-dark": "bg-white/10 text-white hover:bg-white/20",   // Dark backgrounds
  outline: "border-2 border-turkis text-turkis hover:bg-turkis hover:text-white",
}
```

### Typography

- **Artex** font family (using system fonts until Artex files provided)
- Font files needed: Artex Black, Artex Compressed, Artex Extended, Artex Regular
- Place in `/public/fonts/` and uncomment `@font-face` rules in `globals.css`

---

## Project Structure

```
promedis24-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Tailwind v4 theme config (CRITICAL!)
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── bewerben/          # Application form (5 steps)
│   │   ├── benefits/          # Benefits pages (overview + 6 detail)
│   │   ├── standorte/         # Location pages (overview + 9 cities)
│   │   ├── fuer-unternehmen/  # Enterprise pages
│   │   │   ├── page.tsx       # Overview
│   │   │   ├── zeitarbeit/    # What is Zeitarbeit
│   │   │   ├── prozess/       # 6-step process
│   │   │   └── vorteile/      # Benefits for employers
│   │   ├── personalvermittlung/ # Direct placement
│   │   ├── zeitarbeit-quiz/   # Interactive quiz
│   │   ├── kontakt/           # Contact form
│   │   ├── ueber-uns/         # About page
│   │   ├── on-tour/           # On-Tour program
│   │   ├── erfolgsgeschichten/ # Success stories
│   │   ├── jobs-in-meiner-naehe/ # Geolocation job search
│   │   ├── impressum/         # Legal
│   │   └── datenschutz/       # Privacy
│   ├── components/
│   │   ├── ui/                # Design system (Button, Card, Section, Grid)
│   │   ├── layout/            # Header, Footer, Navigation
│   │   └── sections/          # Page sections (Hero, Stats, etc.)
│   ├── content/               # JSON content (CMS-ready)
│   └── lib/
│       ├── utils.ts           # Utility functions (cn, slugify)
│       └── types.ts           # TypeScript types
└── public/                    # Static assets
```

---

## Dual Audience System

The website serves TWO audiences with distinct color coding:

1. **Bewerber (Job Seekers)** - Turkis color scheme
   - Routes: `/bewerben`, `/benefits`, `/zeitarbeit-quiz`, `/on-tour`, `/jobs-in-meiner-naehe`, `/erfolgsgeschichten`

2. **Unternehmen (Employers)** - Amethyst color scheme
   - Routes: `/fuer-unternehmen/*`, `/personalvermittlung`, `/kontakt`

The navigation has a toggle to switch between modes.

---

## Current Build Status

**35 static pages generated successfully**

### Completed Pages

#### Bewerber Section
- [x] `/` - Homepage with route selection
- [x] `/bewerben` - 5-step application form
- [x] `/benefits` - Benefits overview
- [x] `/benefits/[slug]` - 6 benefit detail pages
- [x] `/jobs-in-meiner-naehe` - Geolocation job search
- [x] `/on-tour` - On-Tour program
- [x] `/zeitarbeit-quiz` - Interactive quiz
- [x] `/erfolgsgeschichten` - Success stories

#### Unternehmen Section
- [x] `/fuer-unternehmen` - Enterprise overview
- [x] `/fuer-unternehmen/zeitarbeit` - What is Zeitarbeit
- [x] `/fuer-unternehmen/prozess` - 6-step process
- [x] `/fuer-unternehmen/vorteile` - Benefits for employers
- [x] `/personalvermittlung` - Direct placement
- [x] `/kontakt` - Contact form

#### Shared
- [x] `/standorte` - Locations overview
- [x] `/standorte/[city]` - 9 city detail pages
- [x] `/ueber-uns` - About us
- [x] `/impressum` - Legal imprint
- [x] `/datenschutz` - Privacy policy
- [x] `/_not-found` - Custom 404

---

## What's NOT Completed (Remaining Tasks)

### Integrations
- [ ] **Google Maps API** - Replace map placeholders in Standorte pages
- [ ] **Supabase Backend** - Connect forms (contact, application)
- [ ] **ATS Integration** - Connect to jobs.promedis24.de for job listings
- [ ] **Analytics** - Vercel Analytics or GA4

### Assets & Polish
- [ ] **Artex Fonts** - Install when provided
- [ ] **Images** - Add real photos/images
- [ ] **Videos** - Hero video, testimonial videos
- [ ] **OG Images** - Social sharing images
- [ ] **Performance** - Lighthouse optimization

---

## Key Patterns

### Section with Dark Background
```tsx
<section className="bg-coal text-white py-24 px-6">
  <h2 className="text-white">Headline</h2>  {/* Explicit text-white! */}
</section>
```

### Button Usage
```tsx
<Button href="/bewerben">Click me</Button>  // Link button
<Button onClick={handleClick}>Submit</Button>  // Action button
<Button variant="secondary">Enterprise</Button>  // Amethyst style
<Button variant="ghost-dark">On dark bg</Button>  // For coal sections
```

### Framer Motion Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: [0.4, 0, 0.15, 1] }}
>
```

### Badge/Tag Pattern
```tsx
// Bewerber (turkis)
<span className="bg-turkis/10 text-turkis border border-turkis/20 rounded-lg px-3 py-1.5 text-sm">

// Unternehmen (amethyst)
<span className="bg-amethyst/10 text-amethyst border border-amethyst/20 rounded-lg px-3 py-1.5 text-sm">
```

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
| `src/app/globals.css` | Tailwind v4 theme config - CRITICAL for colors! |
| `src/components/ui/Button.tsx` | Button with variants (primary uses !text-white) |
| `src/components/layout/Navigation.tsx` | Main nav with dual-mode toggle |
| `UI_GUIDELINES.md` | Comprehensive UI documentation |

---

## Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Text not white on dark bg | Check `globals.css` for overriding base styles |
| Ghost button invisible on dark | Use `ghost-dark` variant |
| Green on green contrast | Coal is green! Use `text-white` on turkis |
| Tailwind classes not applying | CSS specificity - use `!` prefix or fix base styles |
| Headings ignoring text-white | Remove `color:` from h1-h6 in globals.css |

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

## Related Documentation

- `UI_GUIDELINES.md` - Comprehensive UI/design documentation
- `README.md` - Project setup instructions

---

## Contact/Context

- **Design**: Following Brand Guidelines Q3/2025 (Artex font, Turkis/Amethyst colors, Tape-strip aesthetic)
- **Development**: Claude Code (agentic coding)
- **Designer**: Phillip (creating mockups in parallel)
