# Phase 5 — Homepage

## CONTEXT
Build the craving-led homepage for Delicious Foods Wah Cantt. It must explain the restaurant, breadth, deals, order path, and location within seconds.

## OBJECTIVE
Implement a branded, appetizing, conversion-focused homepage using approved data/components and honest imagery states.

## EXISTING SYSTEM
Inspect homepage, global shell, tokens, assets, content models, card components, and analytics. Read the Home section in `06_PAGE_SPECS.md`. Preserve useful existing code.

## REQUIREMENTS
Implement in order:
1. Hero: “Whatever you’re craving, we’ve got it.”; concise category support; Wah Cantt cue; Order Now; Explore Menu; strong approved/labeled-placeholder image.
2. Today’s Best Deals: verified/snapshot-safe featured cards and all-deals link.
3. What are you in the mood for?: nine category entry points.
4. Featured Favorites: approved featured products; never “best sellers” without data.
5. Pizza showcase: named highlights and 8/11/13-inch cue; no missing prices invented.
6. Delicious Bar: distinctive drinks preview.
7. Chicken & Pulao merchandising split.
8. Sweets/desserts teaser.
9. Location/order CTA with exact NAP and supplied hours status.

All content comes from structured data. Track category, deal, product, order, and directions intent without PII.

## DESIGN RULES
Food first. Follow cream→purple→cream→yellow/cream→purple→cream rhythm. Use at most one prominent drip gesture per composition. Fewer, larger images; no collage of tiny dishes. One primary action per section.

## COMPONENTS
Reuse Hero, DealsSection/DealCard, CravingGrid/CategoryCard, ProductCard, PizzaShowcase, DeliciousBar, LocationCTA, SectionHeading, Button, Price. Do not make homepage-only duplicate card systems.

## RESPONSIVE REQUIREMENTS
Desktop split hero and 3-column cards; tablet adaptive split/2-column; mobile copy/actions remain immediately visible and cards become 1–2 columns or accessible manual scrollers. No auto carousel. No sticky action obscures final content.

## ACCESSIBILITY
Logical headings, useful food alt, decorative SVG hidden, link/action labels distinct, card semantics valid, no text embedded in images, no motion required to understand content.

## SEO
One H1. Natural Wah Cantt/category support. Home metadata and Restaurant JSON-LD draw from central source. No hard-coded rating/review count or unconfirmed delivery claim.

## PERFORMANCE
Hero image is optimized LCP with correct priority/sizes; below-fold imagery lazy loads; reserve dimensions; avoid heavy animation/video and large client sections.

## DO NOT
Do not say welcome as the main idea, claim featured items are best-selling, invent copy about ingredients, display unconfirmed prices as live, use random stock as actual food, or make every section saturated.

## ACCEPTANCE CRITERIA
- First viewport identifies brand, food breadth, Wah Cantt, and two clear actions.
- All specified sections exist in correct narrative order.
- Category cards lead to usable menu state.
- Every important section has one logical next action.
- Homepage is recognizably custom and passes responsive/accessibility checks.

## VALIDATION
Run page tests/build; click every CTA; verify data provenance; test 360/768/1280/1440, keyboard, reduced motion, image failure/fallback, slow-network layout stability, LCP/CLS, and no console errors. Capture screenshots for review.
