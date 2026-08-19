# Phase 2 — Design System Implementation

## CONTEXT
Implement the token and primitive layer defined in `02_DESIGN_SYSTEM.md` so all Delicious Foods pages share a controlled, accessible visual language.

## OBJECTIVE
Create semantic tokens and a small cohesive component foundation without page-specific styling or duplicate UI libraries.

## EXISTING SYSTEM
Inspect existing CSS variables, Tailwind config/version, component library, accessible primitives, fonts, icons, utility patterns, dark mode, and tests. Reuse sound existing foundations and map them to the specification.

## REQUIREMENTS
- Implement semantic color, type, spacing, container, radius, border, shadow, z-index, and motion tokens.
- Configure approved fonts through `next/font`; keep body fallback robust. Do not load Urdu font until Urdu content/scope requires it, but define strategy.
- Implement/reconcile Button, IconButton, Badge, Price, SectionHeading, form controls, Dialog/Drawer, Toast, Empty/Loading/Error states, and Breadcrumbs.
- Add a development-only component fixture/gallery or tests that show variants/states.
- Ensure no literal color drift in new code and provide migration notes for existing literals.

## DESIGN RULES
Cream default, purple ownership, yellow actions/deals, orange accent. Cards use border plus subtle shadow; controlled rounded corners; no gradients unless specifically derived and documented. Food imagery must not be buried under ornamental UI.

## COMPONENTS
Each primitive supports documented props, ref forwarding where required, class extension without style escape abuse, disabled/loading/focus/error states, and semantic element choice. Do not wrap every HTML element in a component.

## RESPONSIVE REQUIREMENTS
Touch targets ≥44px where possible; typography uses clamp rules; containers/gutters match spec; components render without clipping at 320px and 200% zoom.

## ACCESSIBILITY
WCAG 2.2 AA contrast; visible focus on all backgrounds; native semantics first; dialog focus trap/Escape/return; form labels/descriptions/errors; reduced-motion override; forced-colors sanity.

## SEO
Primitives must render semantic headings/links correctly and not hide indexable content behind client-only shells.

## PERFORMANCE
Tree-shake icons, subset fonts, avoid large client component boundaries, and keep animations CSS-based where possible.

## DO NOT
Do not introduce a second design library, arbitrary hex values, random fonts, excessive radii/shadows, inaccessible custom controls, or page implementations.

## ACCEPTANCE CRITERIA
- Token names/values align with the specification or documented asset-based refinements.
- All component states are testable and visually coherent.
- Contrast/focus/touch targets pass.
- Existing pages continue to build during migration.
- No duplicate Button/Dialog/Price system remains without explicit deprecation plan.

## VALIDATION
Run lint, typecheck, component tests, production build, automated accessibility on fixture, contrast checks, keyboard dialog/form test, reduced motion, 320px/200% zoom screenshots, and search new code for literal colors.
