# Promedis24 UI Guidelines

## 1. Farbsystem

### Primärfarben

| Farbe | HEX | CSS Variable | Verwendung |
|-------|-----|--------------|------------|
| **Türkis** | `#23D2AF` | `--color-turkis` | Bewerber, primäre Aktionen, Akzente |
| **Türkis Light** | `#E0F7F1` | `--color-turkis-light` | Hintergründe, Hover-States |
| **Türkis Dark** | `#1BA88C` | `--color-turkis-dark` | Hover/Active States |
| **Amethyst** | `#8A84F5` | `--color-amethyst` | Unternehmen, sekundäre Aktionen |
| **Amethyst Light** | `#EEEDFE` | `--color-amethyst-light` | Hintergründe, Hover-States |
| **Amethyst Dark** | `#6B64D9` | `--color-amethyst-dark` | Hover/Active States |

### Neutrale Farben

| Farbe | HEX | CSS Variable | Verwendung |
|-------|-----|--------------|------------|
| **Coal** | `#002D32` | `--color-coal` | Text auf hellen Hintergründen, dunkle Sektionen |
| **Grey** | `#F5F5F5` | `--color-grey` | Leichte Hintergründe, Trennlinien |
| **White** | `#FFFFFF` | `--color-white` | Helle Hintergründe, Text auf dunklen Hintergründen |

---

## 2. Kontrast-Regeln (WCAG AA konform)

### Textfarben nach Hintergrund

| Hintergrund | Textfarbe | Opacity für Sekundärtext |
|-------------|-----------|--------------------------|
| `coal` (dunkel) | `white` | `/50` bis `/70` |
| `white` (hell) | `coal` | `/50` bis `/70` |
| `grey` (hell) | `coal` | `/50` bis `/70` |
| `turkis-light` | `coal` | `/70` bis `/80` |
| `amethyst-light` | `coal` | `/70` bis `/80` |

### Akzentfarben nach Hintergrund

| Hintergrund | Türkis | Amethyst |
|-------------|--------|----------|
| `coal` | ✅ `text-turkis` | ✅ `text-amethyst` |
| `white` | ✅ `text-turkis` | ✅ `text-amethyst` |
| `grey` | ✅ `text-turkis` | ✅ `text-amethyst` |
| `turkis` | ❌ Nicht verwenden | ✅ `text-amethyst` |
| `amethyst` | ✅ `text-turkis` | ❌ Nicht verwenden |

### VERBOTEN (zu wenig Kontrast)

- ❌ `text-coal` auf `coal` Hintergrund
- ❌ `text-coal` auf `turkis` Hintergrund (beide sind grün!)
- ❌ `text-turkis` auf `turkis` Hintergrund
- ❌ `text-amethyst` auf `amethyst` Hintergrund
- ❌ `text-white` auf `white` / `grey` Hintergrund
- ❌ Helle Farben mit Opacity < 40% auf hellen Hintergründen

### RICHTIG für Turkis-Hintergrund
- ✅ `bg-turkis text-white` (Primary Button)
- ✅ `bg-turkis-light text-coal` (Section Hintergrund - light ist ok)

---

## 3. Button-Varianten

### Primary Button (Bewerber)
```css
Hintergrund: turkis
Text: white (NICHT coal - beide sind grünlich!)
Hover: turkis-dark
```
**Tailwind:** `bg-turkis text-white hover:bg-turkis-dark`

### Secondary Button (Unternehmen)
```css
Hintergrund: amethyst
Text: white
Hover: amethyst-dark
```
**Tailwind:** `bg-amethyst text-white hover:bg-amethyst-dark`

### Ghost Button (auf hellem Hintergrund)
```css
Hintergrund: transparent
Text: coal
Hover: grey
```
**Tailwind:** `bg-transparent text-coal hover:bg-grey`

### Ghost Button (auf dunklem Hintergrund)
```css
Hintergrund: transparent / white/10
Text: white
Hover: white/20
```
**Tailwind:** `bg-white/10 text-white hover:bg-white/20`

### Outline Button
```css
Border: turkis (2px)
Text: turkis
Hover: bg-turkis text-white
```
**Tailwind:** `border-2 border-turkis text-turkis hover:bg-turkis hover:text-white`

---

## 4. Typografie

### Font Family
- **Headlines:** Artex Black (fallback: system-ui bold)
- **Body:** Artex Regular (fallback: system-ui)
- **Compressed:** Artex Compressed (für Badges)

### Font Sizes
| Klasse | Größe | Verwendung |
|--------|-------|------------|
| `text-xs` | 0.75rem | Labels, Badges, kleine Hinweise |
| `text-sm` | 0.875rem | Sekundärtext, Navigation |
| `text-base` | 1rem | Body Text |
| `text-lg` | 1.125rem | Einleitung, größerer Body |
| `text-xl` | 1.25rem | Card-Titel |
| `text-2xl` | 1.5rem | Sektion-Subtitel |
| `text-3xl` | 1.875rem | Sektion-Titel |
| `text-4xl` | 2.25rem | Hero-Subtitel |
| `text-5xl` | 3rem | Hero-Titel |

### Font Weights
- `font-medium` (500): Body Text, Navigation
- `font-bold` (700): Subtitel, Akzente
- `font-extrabold` (800): Card-Titel, kleine Headlines
- `font-black` (900): Headlines, Hero-Titel

---

## 5. Spacing & Layout

### Section Padding
| Variante | Mobile | Desktop |
|----------|--------|---------|
| `sm` | `py-8` | `py-12` |
| `md` | `py-12` | `py-16` |
| `lg` | `py-16` | `py-24` |

### Container
- Max-Width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`

### Grid Gaps
- `sm`: 1rem (16px)
- `md`: 1.5rem (24px)
- `lg`: 2rem (32px)

---

## 6. Komponenten-Patterns

### Section Varianten
```tsx
<Section variant="default" />  // bg-white text-coal
<Section variant="coal" />     // bg-coal text-white
<Section variant="turkis" />   // bg-turkis-light text-coal
<Section variant="amethyst" /> // bg-amethyst-light text-coal
<Section variant="grey" />     // bg-grey text-coal
```

### Card Varianten
```tsx
<Card variant="default" />  // bg-white border
<Card variant="turkis" />   // turkis-tinted border
<Card variant="amethyst" /> // amethyst-tinted border
```

### Badge/Tag Pattern
```tsx
// Bewerber (türkis)
<span className="bg-turkis/10 text-turkis border border-turkis/20 rounded-lg px-3 py-1.5 text-sm">
  Tag Text
</span>

// Unternehmen (amethyst)
<span className="bg-amethyst/10 text-amethyst border border-amethyst/20 rounded-lg px-3 py-1.5 text-sm">
  Tag Text
</span>
```

---

## 7. Hover & Transition States

### Transitions
- `transition-all duration-300` - Standard
- `transition-colors duration-200` - Farbwechsel
- `transition-transform duration-400` - Bewegung

### Hover Effects
```css
/* Karten */
hover:shadow-lg
hover:-translate-y-1
hover:border-turkis/30

/* Links */
hover:text-turkis
hover:gap-3 (mit ArrowRight Icon)

/* Buttons */
hover:scale-[1.02]
hover:shadow-lg
```

---

## 8. Icons

### Icon Library
Lucide React (lucide-react)

### Icon Sizes
| Kontext | Größe |
|---------|-------|
| Inline mit Text | `w-4 h-4` |
| Button | `w-[18px] h-[18px]` |
| Card Icon | `w-5 h-5` bis `w-6 h-6` |
| Feature Icon Box | `w-[22px] h-[22px]` |
| Hero/Large | `w-8 h-8` bis `w-12 h-12` |

### Icon Farben
- Bewerber-Kontext: `text-turkis`
- Unternehmen-Kontext: `text-amethyst`
- Neutral auf hell: `text-coal` oder `text-coal/50`
- Neutral auf dunkel: `text-white` oder `text-white/50`

---

## 9. Zielgruppen-Design

### Bewerber (Fachkräfte)
- Primärfarbe: **Türkis** `#23D2AF`
- Tonalität: Locker, "Du"-Anrede
- Icons: Heart, Star, Calendar, Zap
- CTA: "In 60 Sek. bewerben", "Jobs entdecken"

### Unternehmen (Einrichtungen)
- Primärfarbe: **Amethyst** `#8A84F5`
- Tonalität: Professionell, "Sie"-Anrede
- Icons: Building2, Users, Shield, Clock
- CTA: "Personal anfragen", "Kontakt aufnehmen"

---

## 10. Animationen (Framer Motion)

### Fade In
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7, ease: [0.4, 0, 0.15, 1] }}
```

### Stagger Children
```tsx
transition={{ delay: index * 0.08 }}
```

### Hover Scale
```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Hover Y
```tsx
whileHover={{ y: -4 }}
```

---

## 11. Responsive Breakpoints

| Breakpoint | Min-Width | Verwendung |
|------------|-----------|------------|
| `sm` | 640px | Kleine Tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Große Screens |
| `2xl` | 1536px | Extra große Screens |

### Mobile-First Patterns
```css
/* Mobile zuerst, dann Desktop */
className="text-3xl md:text-4xl lg:text-5xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 sm:px-6 lg:px-8"
```

---

## 12. Accessibility Checklist

- [ ] Alle Farben erfüllen WCAG AA Kontrast (4.5:1 für Text)
- [ ] Focus States mit `focus-visible:ring-2`
- [ ] Alle Buttons haben sichtbaren Text oder aria-label
- [ ] Bilder haben alt-Attribute
- [ ] Keyboard-Navigation funktioniert
- [ ] Skip-Links für Hauptinhalt
- [ ] Formular-Labels sind verknüpft

---

## 13. Bekannte Probleme & Lösungen

### Problem: Ghost Button auf dunklem Hintergrund nicht sichtbar
**Lösung:** Verwende `bg-white/10 text-white` statt `text-coal`

### Problem: Grün auf Grün (Coal ist auch grünlich!)
**Lösung:** `text-white` auf `bg-turkis` (nicht coal, da coal=#002D32 auch grün ist)

### Problem: Akzentfarbe auf gleichfarbigem Hintergrund
**Lösung:** Verwende `text-white` auf dunklen Akzenten, `text-coal` auf hellen

---

## 14. Seiten-Status (Vollständigkeit)

### Fertige Seiten ✅

| Pfad | Beschreibung | Zielgruppe |
|------|--------------|------------|
| `/` | Homepage mit Route-Auswahl | Beide |
| `/bewerben` | 5-Step Bewerbungsformular | Bewerber |
| `/benefits` | Benefits-Übersicht | Bewerber |
| `/benefits/[slug]` | Einzelne Benefit-Detailseiten | Bewerber |
| `/jobs-in-meiner-naehe` | Geolocation Jobsuche | Bewerber |
| `/on-tour` | On-Tour Programm | Bewerber |
| `/zeitarbeit-quiz` | Interaktives Quiz | Bewerber |
| `/standorte` | Standort-Übersicht | Beide |
| `/standorte/[city]` | 9 Standort-Detailseiten | Beide |
| `/erfolgsgeschichten` | Testimonials & Stories | Beide |
| `/fuer-unternehmen` | Unternehmen Übersicht | Unternehmen |
| `/kontakt` | Kontaktformular | Unternehmen |
| `/ueber-uns` | Über Promedis24 | Beide |
| `/impressum` | Impressum (rechtlich) | Beide |
| `/datenschutz` | Datenschutz (rechtlich) | Beide |
| `/_not-found` | Custom 404 Seite | Beide |

### Weitere Seiten (Unternehmen) ✅

| Pfad | Beschreibung | Status |
|------|--------------|--------|
| `/fuer-unternehmen/zeitarbeit` | Was ist Zeitarbeit? | ✅ Fertig |
| `/fuer-unternehmen/prozess` | Unser Prozess | ✅ Fertig |
| `/fuer-unternehmen/vorteile` | Ihre Vorteile | ✅ Fertig |
| `/personalvermittlung` | Personalvermittlung | ✅ Fertig |

### Navigation-Links korrigiert

- ✅ `/jobs` → `/jobs-in-meiner-naehe` (SplitHero.tsx)

---

## 15. Technischer Stack

| Technologie | Version | Verwendung |
|-------------|---------|------------|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling (CSS-basierte Config) |
| Framer Motion | 11.x | Animationen |
| Lucide React | 0.4x | Icons |

### Deployment

- **Platform:** Vercel (Hobby Plan)
- **URL:** https://promedis24-web.vercel.app
- **Repository:** https://github.com/babuc1/promedis24-web

---

*Letzte Aktualisierung: Februar 2026*
