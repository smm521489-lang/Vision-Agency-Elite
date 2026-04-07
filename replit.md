# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Project: Izzatillo Maripov Personal Brand Website

Premium personal brand website for Izzatillo Maripov — content marketer and Vision Agency founder. All content is in **Uzbek language**.

### Features
- Dark premium theme with electric cyan accents
- Glassmorphism card effects
- Framer Motion animations (scroll-triggered, staggered, parallax)
- 10 sections: Hero, Trust, Case Studies, Services, Video Content, Process, Testimonials, About, CTA, Footer
- Sticky navbar with scroll-aware styling
- Mobile-first responsive design
- Smooth scrolling
- Telegram and Instagram social links

### Fonts
- **Display**: Outfit (headings)
- **Body**: Plus Jakarta Sans

### Key Files
- `artifacts/izzatillo-site/src/pages/home.tsx` — Main single-page component with all sections
- `artifacts/izzatillo-site/src/index.css` — Theme variables, glass-card utility, font imports
- `artifacts/izzatillo-site/index.html` — HTML with dark class and Uzbek lang

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
