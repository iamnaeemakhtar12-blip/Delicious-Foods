# Phase 12 — Responsive Polish

## CONTEXT
Polish the complete Stage 1 experience across mobile, tablet, desktop, zoom, touch, and variable content. Mobile is the primary storefront, not a reduced desktop.

## OBJECTIVE
Remove layout friction and ensure hierarchy, order actions, navigation, imagery, and dense menu content remain excellent at real device widths.

## EXISTING SYSTEM
Inspect every public route/component with device emulation and actual browser resizing. Review CSS breakpoints, container rules, sticky layers, image sizes, long content, and existing visual tests.

## REQUIREMENTS
- Test at 320, 360, 390, 480, 768, 1024, 1280, 1440 widths and portrait/landscape where relevant.
- Verify 200% browser zoom and enlarged text.
- Resolve overflow, wrapping, clipping, tap overlap, safe-area, sticky header/category/order collisions, modal/sheet viewport behavior, and footer spacing.
- Use realistic longest names, deal contents, missing images/prices, unavailable states, and Urdu test strings if bilingual scope exists.
- Tune hero crops/focal points and responsive `sizes`.
- Confirm mobile action priority: order, menu, deals, categories, contact/location.

## DESIGN RULES
Do not solve density by shrinking text or targets. Preserve hierarchy and breathing space. Food remains visually strong without pushing actions impossibly far below fold.

## COMPONENTS
Adjust existing components only. Add no alternate mobile component unless semantics/function genuinely differ and duplication is justified.

## RESPONSIVE REQUIREMENTS
This phase owns all breakpoint/container/grid/sticky/safe-area behavior. Avoid device-specific hacks and content-dependent magic numbers where robust layout can solve it.

## ACCESSIBILITY
Reflow meets WCAG; no two-dimensional scroll for ordinary content; touch targets and focus visibility remain valid; zoom does not trap dialogs or hide actions; orientation is unrestricted.

## SEO
Ensure responsive changes do not hide important content from DOM or create duplicate desktop/mobile copies.

## PERFORMANCE
Verify correct image candidates, no desktop assets downloaded unnecessarily on mobile, and responsive JS is not driven by resize listeners when CSS suffices.

## DO NOT
Do not reduce body text below 16px for density, hide content essential to mobile users, use hover-only controls, create horizontal page scroll, or duplicate content for breakpoints.

## ACCEPTANCE CRITERIA
- All pages pass the width/zoom matrix without critical overflow/overlap.
- Sticky elements coexist and remain dismissible/non-obstructive.
- Long/empty/error/unavailable content states reflow cleanly.
- Mobile first viewport retains identity and clear action.
- Screenshots show consistent rhythm and token use.

## VALIDATION
Run automated viewport screenshots and visual diff if available; manual touch/keyboard checks; inspect network image candidates on mobile/desktop; test iOS safe-area simulation, landscape, 200% zoom, longest strings, and reduced motion. Document intentional breakpoint changes.
