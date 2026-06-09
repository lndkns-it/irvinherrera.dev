# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reloads on changes)
ng build           # Production build with SSR to dist/
ng test            # Run unit tests with Vitest
node dist/irvinherrera.dev/server/server.mjs  # Run the SSR production server
```

To run a single test file:
```bash
ng test --include="**/header.spec.ts"
```

## Architecture

Personal portfolio site built with **Angular 21**, **Tailwind CSS v3**, and **SSR via Angular SSR**.

### SSR / Rendering
- All routes are **prerendered** (`RenderMode.Prerender` in `app.routes.server.ts`)
- Client hydration uses event replay (`withEventReplay()`)
- SSR entry: `src/server.ts`, server bootstrap: `src/main.server.ts`
- Do not reference browser globals (e.g., `window`, `document`, `performance`, `requestAnimationFrame`) without guarding for the server environment

### Routing & Pages
Pages live in `src/app/pages/` — one folder per route:
- `/home` → `pages/home/`
- `/about` → `pages/about/`
- `/projects` → `pages/projects/`
- `/contact` → `pages/contact/`

Routes are **not** lazy-loaded yet; consider lazy loading when pages grow.

### Shared Components
Reusable components live in `src/app/components/`. Current components: `header`, `skill-meter`.

### Styling
- **Tailwind CSS** for utility classes (`src/styles.scss` imports `@tailwind base/components/utilities`)
- **SCSS** for component-level styles (each component has its own `.scss` file)
- Default component style extension is `scss` (set in `angular.json`)

### Testing
- Test runner: **Vitest** (not Karma/Jasmine)
- Each component/page has a `.spec.ts` file co-located beside it

## Key Rules (from `.claude/CLAUDE.md`)

- Do NOT set `standalone: true` in decorators — it's the default in Angular v20+
- Use `input()` / `output()` functions, not `@Input()` / `@Output()` decorators
- Use signals (`signal()`, `computed()`) for state; never use `mutate()`
- Set `changeDetection: ChangeDetectionStrategy.OnPush` on every component
- Use `class` bindings instead of `ngClass`; use `style` bindings instead of `ngStyle`
- Use native control flow (`@if`, `@for`, `@switch`) — not structural directives
- Use `inject()` for DI, not constructor injection
- Host bindings go in the `host` object of `@Component`/`@Directive`, not `@HostBinding`/`@HostListener`
- Use `NgOptimizedImage` for all static images (not inline base64)
- Must pass all AXE checks and meet WCAG AA minimums
