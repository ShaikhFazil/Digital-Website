# Stratos Digital — Full-Service Agency Website

A production-ready React application inspired by modern digital-agency design language
(reference: matrixbricks.com), rebuilt from scratch with original placeholder content and
royalty-free Unsplash imagery.

## Tech stack

- **React 18 + Vite 5** — fast dev server, optimized production builds
- **Tailwind CSS 3.4** — utility-first styling, custom design tokens
- **GSAP + ScrollTrigger** — hero timeline, parallax, scroll-scrubbed process line
- **Framer Motion** — section reveals, page transitions, accordions, mobile menu
- **Lenis** — smooth scrolling, synced with ScrollTrigger
- **Swiper** — industries carousel + testimonials slider
- **react-countup + react-intersection-observer** — animated statistics
- **lucide-react** — icons (tree-shaken via a registry in `src/utils/icons.js`)

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  animations/    Shared Framer Motion variants (fadeUp, blurReveal, stagger…)
  components/    One folder per feature (Navbar, Hero, Services, FAQ…)
    common/      Reusable primitives: Button, SectionHeading, Marquee, LazyImage…
  constants/     ALL site content lives in constants/index.js — edit copy here
  hooks/         useLenis, useScrolled, useLockBody
  layouts/       MainLayout (navbar + outlet + footer + smooth scroll)
  pages/         Route components, lazy-loaded for code splitting
  utils/         cn (clsx + tailwind-merge), icon registry
```

## Customization

- **Copy, links, images, jobs, FAQs** → `src/constants/index.js`
- **Colors, fonts, animations** → `tailwind.config.js` (`ink`, `ember`, `mist` palettes)
- **Brand name/logo** → `src/constants` (SITE) + `src/components/Navbar/Logo.jsx`
- **Contact form** → `src/pages/Contact.jsx` (front-end demo; wire `handleSubmit` to your API)

## Performance & accessibility

- Route-level code splitting + manual vendor chunks (react / animation / ui)
- Lazy images with blur-up placeholders; hero image flagged high priority
- `prefers-reduced-motion` respected globally (Lenis + CSS)
- Semantic landmarks, skip link, ARIA labels, keyboard-visible focus rings

## Notes

All imagery is loaded from Unsplash (royalty-free) as placeholders — replace with brand
assets in `src/constants/index.js` before launch. No proprietary assets from the reference
site are used.
