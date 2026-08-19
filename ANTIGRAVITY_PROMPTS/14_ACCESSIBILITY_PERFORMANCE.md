# Phase 13 — Accessibility and Performance

## CONTEXT
Conduct a dedicated WCAG 2.2 AA and Core Web Vitals hardening pass after functional/responsive completion.

## OBJECTIVE
Remove access barriers and performance waste without diluting the Delicious Foods visual identity.

## EXISTING SYSTEM
Inspect semantic markup, focus order, dialogs, filters, forms, images, fonts, motion, third parties, JS bundles, route rendering, caching, and current automated/Lighthouse results.

## REQUIREMENTS
### Accessibility
- Landmarks, skip link, one H1, logical headings.
- Keyboard all flows; no traps except managed dialogs; focus visible and logical.
- Contrast across tokens/states; forced colors sanity.
- 44px targets where possible; labels, instructions, errors, status announcements.
- Dialog/drawer focus trap/Escape/return and scroll behavior.
- Search/filter result announcement; unavailable/price/status not color-only.
- Useful alt/decorative null alt; Urdu language/dir if present.
- Reduced motion; no autoplay/timeout barriers.
- Test 200% zoom and screen-reader smoke paths.

### Performance
- Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75.
- Identify actual LCP per key page; optimize priority, dimensions, format, and sizes.
- Lazy-load below-fold images/maps; reserve space.
- Reduce client components/JS, unused libraries/icons, duplicate fonts/CSS.
- Inspect caching/server rendering and third-party cost.

## DESIGN RULES
Accessibility fixes use the system’s focus and semantic tokens, not visual degradation. Performance fixes preserve image fidelity sufficient for appetite appeal.

## COMPONENTS
Fix shared primitives first, then domain/page exceptions. Do not apply one-off `aria` patches when native element/component repair solves all usages.

## RESPONSIVE REQUIREMENTS
Audit representative mobile and desktop pages under CPU/network throttling, zoom, text enlargement, portrait/landscape.

## ACCESSIBILITY
This is the primary requirement. Automated tools are minimum, not proof. Include manual keyboard and screen-reader smoke tests for Home→Menu→Product→Order and Contact.

## SEO
Performance/semantics must retain server-rendered indexable content, metadata, and schema. No hiding text for scores.

## PERFORMANCE
Record before/after measurements and identify lab vs field expectations. Avoid chasing a perfect score through misleading content removal.

## DO NOT
Do not suppress audit rules, add empty ARIA labels, remove focus outlines, autoplay motion, lazy-load LCP, ship unoptimized originals, or declare compliance from automation alone.

## ACCEPTANCE CRITERIA
- No known critical/serious automated accessibility issues on key pages.
- Manual keyboard and screen-reader core flows complete.
- Contrast/zoom/reduced-motion/forced-color checks pass materially.
- Production build has no unexpected bundle regressions.
- Lab CWV targets pass on representative mobile where environment allows; remaining gaps documented with evidence.

## VALIDATION
Run lint/typecheck/tests/build, axe or repository equivalent, Lighthouse/performance profiling, bundle analysis if available, keyboard-only flows, screen-reader smoke test, contrast, forced colors, reduced motion, 200% zoom, throttled mobile, and image/font/network inspection. Report before/after metrics.
