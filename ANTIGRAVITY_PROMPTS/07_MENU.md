# Phase 6 — Digital Menu

## CONTEXT
Transform the broad printed catalog into a fast, scannable, craving-led menu. The source is a snapshot, not guaranteed live operational data.

## OBJECTIVE
Implement a data-driven Menu page with search, category navigation, clear pricing/status, and an honest order path.

## EXISTING SYSTEM
Inspect menu routes, product data/validation, ProductCard, CategoryNav, search/filter utilities, image assets, order mode, and tests. Read `05_MENU_DATA.md` completely.

## REQUIREMENTS
- H1 and short context; visible search; sticky category navigation; result status; product grid; empty/error/loading/unavailable states.
- Categories: All, Pizza, Burgers, Chicken, Pulao, Rolls & Shawarma, Sandwiches, Sides, Drinks, Desserts.
- Search names, aliases, and confirmed descriptions only.
- Preserve filter/query state in URL where architecture supports it and restore after product detail.
- Render price only where supplied/allowed; missing pizza prices remain explicitly unavailable for ordering, not guessed.
- Group drink subcategories cleanly without forcing a dense print-list reproduction.
- Cross-listed records reference one product source.
- Stage 1 action opens direct-order handoff; unconfirmed orderability is disabled according to verification policy.

## DESIGN RULES
Cream canvas, calm cards, consistent 4:3 imagery, clear names/prices/actions. Selected category uses multiple cues. No excessive badges or dense purple blocks.

## COMPONENTS
MenuSearch, CategoryNav, ProductGrid, ProductCard, Price, Badge, EmptyState, Skeleton, OrderChannelDialog. Reuse foundations. Keep filtering logic outside card presentation.

## RESPONSIVE REQUIREMENTS
Desktop 3 columns with sticky categories below header; tablet 2; mobile 1 or validated compact 2. Category controls scroll horizontally with visible overflow affordance and keyboard access. No hover-only detail.

## ACCESSIBILITY
Search label/clear button; result updates use polite live region; filters expose selected/current state; product headings and actions are unambiguous; unavailable and missing-price states are text; tab semantics only if actual tab behavior.

## SEO
Unique Menu metadata. Canonicalize search/filter queries. Use server-rendered initial content and only accurate ItemList/breadcrumb schema. Do not create thin indexable permutations.

## PERFORMANCE
Do not ship original full-size imagery or unnecessary entire catalog detail payload. Debounce expensive filtering, not keystroke feedback. Lazy-load non-LCP images with dimensions.

## DO NOT
Do not reproduce the PDF layout, invent descriptions/prices/quantities, expose universal add-ons, create one component per category, or hide the menu behind client-only loading.

## ACCEPTANCE CRITERIA
- Every supplied item is represented or documented as blocked due to incomplete transcription.
- Search/filter/reset/back behavior works.
- Product price/status/order actions are accurate to verification policy.
- Menu remains readable and fast on mobile.
- Empty, unavailable, missing-image, and missing-price states are complete.

## VALIDATION
Run catalog reconciliation script/test, schema checks, search/filter tests, direct URL/back navigation, keyboard/zoom/mobile tests, image/error states, no-JS critical render, performance check, and visual comparison across categories.
