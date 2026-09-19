# Campaign Tech Services — codebase

Living map of this repo. Update the **Structure** section when files or folders change, and append a **Changelog** entry on every commit/push.

## What this is

A Vite + React + TypeScript marketing site for CampaignTech (campaign technology infrastructure). Single-page layout: fixed header, hero, partner ticker, footer.

## Stack

| Layer | Choice |
| --- | --- |
| App | React 19, TypeScript |
| Bundler | Vite 8 (`@vitejs/plugin-react`) |
| Styles | Tailwind CSS 4 (`src/index.css` `@theme` tokens) |
| Motion | Framer Motion |
| Icons | Lucide React |
| Class names | `cn()` from `src/lib/utils.ts` (`clsx` + `tailwind-merge`) |

Scripts: `npm run dev` (Vite), `npm run build` (`tsc -b && vite build`), `npm run lint`, `npm run preview`.

TypeScript is split: `tsconfig.json` references `tsconfig.app.json` (browser `src/`, `vite/client` types) and `tsconfig.node.json` (`vite.config.ts`, Node types).

## Folder structure

```
campaign-tech-Services/
├── docs/
│   └── CODEBASE.md          ← this file
├── public/
├── src/
│   ├── assets/
│   │   └── Hero.png         ← full-bleed hero background
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   ← fixed glass header
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustedPartner.tsx
│   │   │   ├── WhatWeDo.tsx
│   │   │   ├── OurServices.tsx
│   │   │   └── AIProcessing.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── CTAButton.tsx
│   │       ├── Reveal.tsx
│   │       └── SectionHeader.tsx
│   ├── lib/
│   │   └── utils.ts         ← cn()
│   ├── App.tsx              ← page composition
│   ├── main.tsx             ← entry
│   └── index.css            ← tokens, marquee keyframes
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

## Page composition

`App.tsx` mounts:

1. **Navbar** — full-width, `h-[5.2rem]` (~1.3× default). Logo pinned left, links centered, `Talk to Our Team` pinned right. Glass: `bg-navy/40 backdrop-blur-xl`, white text, no bottom border.
2. **Hero** — `Hero.png` cover background, navy gradient overlay, white copy. Network SVG on the right. Stats via `AnimatedCounter` (electric → violet gradient).
3. **TrustedPartner** — full-bleed news ticker of party names. Gradient pill nudge: “Our trusted partners, till now”. Two opposite-direction rows below `sm`, one row from `sm` up.
4. **WhatWeDo** — dark navy band. Left: WHAT WE DO, headline, copy, Explore Our Services. Right: five feature cards (2-col wrap from `sm`, 3-col from `xl`). No campaign-platform visual.
5. **OurServices** — light (`bg-light`) band after the dark What We Do section. Eyebrow, “One Place. Every Campaign Need.”, supporting line, then six white service cards (`Reveal` + Framer hover). 1 / 3 / 6 columns on mobile / tablet / `xl`.
6. **AIProcessing** — dark navy “AI & Automation” pipeline. `SectionHeader` plus a three-stage diagram (inputs → AI core → chips/output) with SVG curves and traveling particles. Vertical chevron flow below `md`; particles/pulses off when `prefers-reduced-motion`.
7. **Footer** — dark (`#050910`) link columns.

## Design tokens (`src/index.css`)

| Token | Value | Role |
| --- | --- | --- |
| `--color-deep` | `#ffffff` | Page/light surfaces |
| `--color-navy` | `#0b1330` | Dark text / glass tint |
| `--color-electric` | `#3e7bfa` | Primary accent |
| `--color-cyan` | `#22d3ee` | Hero badge |
| `--color-violet` | `#8b6bf0` | Gradient pair with electric |
| `--color-light` | `#f3f6fc` | Trust bar background |
| `--font-display` | Space Grotesk | Headings, ticker, logo |
| `--font-body` | Inter | Body, nav, buttons |

Marquee: `--animate-marquee` / `--animate-marquee-reverse` (paused when `prefers-reduced-motion`).

## Conventions

- Compose `className` with `cn()` from `src/lib/utils` when combining strings. Standalone literals need no `cn`.
- Reuse `CTAButton`, `Reveal`, `AnimatedCounter` instead of one-off motion/buttons.
- Hero content width: `max-w-7xl mx-auto px-6 md:px-10`. Header/ticker are full viewport width.

## Changelog

Entries are newest first. Add one on every push.

### 2026-09-16 — AI & Automation pipeline

- Added `src/components/ui/SectionHeader.tsx` (dark/light, left/center) and `src/components/sections/AIProcessing.tsx`.
- Mounted AIProcessing after OurServices: six inputs converge on a pulsing AI core, then Categorize/Detect/Prioritize/Summarize chips and an Actionable Output card, with Framer Motion particles on curved SVG paths.

### 2026-09-16 — Our Services section

- Added `src/components/sections/OurServices.tsx` and mounted it in `App.tsx` after WhatWeDo.
- Light section with six mapped service cards (icon, copy, check-list, Learn More). Entrance via `Reveal`; card lift/glow hover via Framer Motion, skipped when `prefers-reduced-motion`.

### 2026-09-15 — What We Do cards replace platform visual

- Removed the Campaign Platform illustration from `WhatWeDo.tsx`.
- Feature cards now sit in that right-hand slot beside the copy.

### 2026-09-15 — What We Do cards + static visual

- Refactored `WhatWeDo.tsx` to the Section 3 layout: copy + CTA, static network/platform visual, five mapped feature cards.
- Removed Framer Motion from this section; card hover is CSS only (lift, border, glow).

### 2026-09-15 — What We Do section

- Added `src/components/sections/WhatWeDo.tsx` and mounted it in `App.tsx` after TrustedPartner.
- Left column: WHAT WE DO eyebrow, heading, infrastructure copy, Explore Our Services CTA (`Reveal` + `CTAButton`).
- Right column: glass campaign-platform illustration with SVG network paths, traveling particles, Reach/Engage/Manage nodes, laptop modules, and a companion phone. Reduced paths on small screens; particles off when `prefers-reduced-motion`.

### 2026-09-15 — Initial structure snapshot

Documented the repo as it stands after the first marketing-page build:

- Vite React TS app with split `tsconfig.app.json` / `tsconfig.node.json`.
- Hero with `src/assets/Hero.png` background, overlay, stats counters, network visual.
- Glass header: logo left, CTA right, white type, no hairline border.
- Partner ticker with local + major party names; small gradient nudge; two rows below `sm`.
- Design tokens and marquee animations in `src/index.css`.
