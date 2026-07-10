# Neon Garden Event Hire — React App

A premium, mobile-first website for **Neon Garden Event Hire**, Melbourne's boutique studio for event hire, styling and décor. Built as a React single-page app with client-side routing.

## Stack

- **Vite** + **React 18**
- **React Router v6** — client-side navigation with active-link highlighting
- **Tailwind CSS** — design tokens ported into `tailwind.config.js`

## Pages / routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, services preview, hire collection, inspiration, testimonials, Instagram strip |
| `/about` | About | Brand story, mission, approach, why-us |
| `/services` | Services | All 13 services with enquiry CTAs |
| `/hire-items` | Hire Items | Backdrops, vertical gardens, frames, neon lights |
| `/gallery` | Gallery | Filterable masonry of real event imagery + lightbox |
| `/packages` | Packages | Trending styling packages and inspiration |
| `/contact` | Contact | WhatsApp, phone, email, address, enquiry form, map |

## Project structure

```
/
├── index.html              # Vite entry (Google Fonts, meta, JSON-LD)
├── public/assets/images/   # real event photos (referenced as /assets/images/...)
├── src/
│   ├── main.jsx            # React root + <BrowserRouter>
│   ├── App.jsx             # routes (Layout wrapper + child routes)
│   ├── index.css           # Tailwind directives + base layer + reveal helper
│   ├── data/               # page content (services, packages, gallery, etc.)
│   ├── components/         # Layout, Navbar, Footer, Button, Card, Reveal, Counter, Lightbox…
│   ├── hooks/              # useScrolled (sticky nav)
│   └── pages/              # one component per route
├── tailwind.config.js      # design tokens (colours, fonts, shadows, animations)
└── vite.config.js
```

## How to run

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Things to customise before going live

1. **Google Map embed** — `CONTACT.mapEmbed` in `src/data/site.js`.
2. **Instagram handle** — `CONTACT.instagram` in `src/data/site.js`.
3. **WhatsApp number** — `WHATSAPP_NUMBER` in `src/data/site.js` (used by every WhatsApp link, the floating button, and the contact form).

## Features

- Sticky translucent navigation with active-link highlighting and a mobile hamburger menu
- Floating WhatsApp button on every page (pulses for attention)
- Gallery filter buttons + lightbox with keyboard arrows / escape support
- Animated counters in the Home stats row
- Scroll-reveal animations on every section (respects `prefers-reduced-motion`)
- Contact form that opens WhatsApp pre-filled with the enquiry details
- Mobile-first responsive layout

## Design tokens

All colours, fonts, shadows and animations live in `tailwind.config.js` under `theme.extend`. Adjust there to re-theme the entire site:

- `plum` / `ink` deep aubergine ink colour
- `gold` / `golddeep` luxe gold accents
- `blush` / `blushdeep` soft pink
- `neonpink` / `neongreen` neon-garden accents
- Typography: Cormorant Garamond (display) + Inter (body)
