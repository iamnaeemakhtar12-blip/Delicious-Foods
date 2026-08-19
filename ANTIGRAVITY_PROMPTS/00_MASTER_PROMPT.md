# Antigravity Master Prompt — Delicious Foods Wah Cantt

## CONTEXT
You are implementing the production website for **Delicious Foods Wah Cantt**, a colorful, broad-menu restaurant at **Plaza No. A-50, Main Shah Wali Road, Shah Wali Colony, Wah Cantt, 47010, Pakistan**. Phone: **0321-8807790 / +92 321 8807790**. Supplied hours snapshot: **daily 11:00 AM–12:00 AM**, requiring pre-launch confirmation. The menu spans pizza, burgers, chicken, pulao, rolls/shawarma, sandwiches, sides, drinks, desserts, and deals.

The strategic proposition is variety made easy. Main message: **“Whatever you’re craving, we’ve got it.”** Core discovery prompt: **“What are you craving?”** The experience is a digital storefront, not a corporate brochure or print-menu clone.

Treat all menu/pricing data as **MENU SNAPSHOT — VERIFY BEFORE PRODUCTION**. Do not use information from “Delicious Food House” or any other business. The supplied Facebook profile URL is exact; do not derive a username. Instagram/TikTok links are unknown.

## OBJECTIVE
Build a custom, mobile-first, accessible, high-performance Next.js website that lets a Wah Cantt customer understand the offering, discover food/deals, and reach a confirmed order channel within seconds. Stage 1 is menu/marketing plus phone or confirmed WhatsApp handoff. Prepare clean seams for Stage 2 cart/checkout without building unrequested backend complexity.

## EXISTING SYSTEM — INSPECT FIRST
Before editing:
1. Inspect repository tree, package manager, framework/version, scripts, routes, configs, tests, linting, styling, fonts, assets, data, components, environment handling, and git status/diff if available.
2. Read every file in `/DELICIOUS_FOODS_PROJECT/`, especially `02_DESIGN_SYSTEM.md`, `04_CONTENT_MODEL.md`, `05_MENU_DATA.md`, `06_PAGE_SPECS.md`, and `07_COMPONENT_ARCHITECTURE.md`.
3. Identify existing working patterns and reuse them. Document conflicts and choose the least destructive migration.
4. Search for duplicate business facts, literal colors, hard-coded product data, placeholder domains, and unrelated branding.
5. Do not overwrite working code or reinitialize the repository. Make small, reviewable changes.

## REQUIREMENTS
- Preferred stack: Next.js App Router, TypeScript strict mode, Tailwind CSS; adapt to a sound existing equivalent rather than forcing migration.
- Server Components by default; client components only where interaction requires them.
- Separate restaurant/menu/deal data from UI. Validate structured data at build/runtime boundary.
- Implement Home, Menu, product detail readiness, Deals, About, and Contact. Cart/Checkout/Confirmation remain feature-flagged future scope unless explicitly requested.
- Use exact NAP data from the source; centralize it.
- Stage 1 Order actions must truthfully open a confirmed channel. Phone is known. WhatsApp is disabled until confirmed.
- Product/deal availability and orderability depend on verification status. Never silently publish snapshot data as confirmed.
- Implement metadata, canonical strategy, Restaurant JSON-LD, sitemap, robots, Open Graph, and local SEO according to `08_SEO_SPEC.md`.
- Add test coverage for critical data/interaction paths and run all repository checks.

## DESIGN RULES
- Visual personality: fun, colorful, modern, appetizing, affordable, family-friendly, local, trustworthy.
- Food first; cream is the default background; purple establishes brand; yellow emphasizes deals/actions; orange is secondary warmth.
- Use only design tokens from `02_DESIGN_SYSTEM.md`. Provisional values must be sampled/reconciled if approved assets exist.
- Display: Fredoka-like approved rounded face; body: Manrope-like readable sans; use `next/font`. Never introduce random fonts.
- Translate the purple drip/liquid motif into restrained SVG accents; never repeat it on every card.
- Strong photography, consistent ratios/crops, natural color. Prefer approved real assets. Label placeholders and never imply they are real products.
- One primary CTA per context. Keep cards calm enough for food and prices to lead.

## COMPONENTS
Use/reuse cohesive typed components: SiteHeader, SiteFooter, Button, IconButton, Badge, Price, SectionHeading, CategoryNav, MenuSearch, ProductGrid, ProductCard, ProductDetail, VariantSelector, QuantitySelector, DealCard, Dialog/Drawer, OrderChannelDialog, ContactActions, HoursList, MapBlock, Empty/Loading/Error states. Do not fragment trivial wrappers or duplicate accessible primitives already present.

## RESPONSIVE REQUIREMENTS
- Mobile-first; support 320px without page-level horizontal scrolling.
- Header: compact logo, Order, menu trigger. Desktop: five links plus Order.
- Hero actions and identity are immediately visible. Grids adapt 1→2→3 as content permits.
- Sticky category navigation and optional sticky order controls must not cover content and must honor safe areas.
- No hover-only functionality. Test 360, 768, 1280, 1440 widths and 200% zoom.

## ACCESSIBILITY
Target WCAG 2.2 AA: semantic landmarks, skip link, one H1/page, logical headings, visible focus, contrast, keyboard operation, 44px targets, accessible dialogs, labels/errors, reduced motion, live announcements for dynamic results/cart, useful alt text, language/direction handling for Urdu, and no color-only states. Use ARIA only when native HTML is insufficient.

## SEO
Centralize NAP and structured data. Do not hard-code the audit-time rating/review count. Do not fabricate reviews, delivery, awards, founding date, “best” claims, geo coordinates, social handles, or product descriptions. Canonicalize query filters and exclude future transactional/private pages from indexing.

## PERFORMANCE
- Optimize LCP image; lazy-load below-fold images and maps.
- Use explicit image dimensions, responsive sizes, AVIF/WebP via Next Image.
- Minimize client JS and third-party embeds.
- Avoid autoplay sliders and layout shift.
- Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at 75th percentile.

## DATA AND IMAGE RULES
- Never hard-code products inside JSX.
- Prices are numeric PKR in data, formatted in UI.
- Unknown values remain null/inactive.
- Add verification metadata and prevent orderability for unconfirmed records.
- Use asset inventory folders by category. If approved actual images exist, use them; otherwise use clearly named/labeled placeholders.
- Do not download random stock photography unless the owner explicitly approves it.

## DO NOT
- Do not reinitialize, blindly overwrite, or change package manager unnecessarily.
- Do not build a generic Tailwind/AI restaurant template, luxury black site, SaaS layout, PDF-to-HTML menu, or competitor imitation.
- Do not introduce arbitrary colors/fonts/components.
- Do not invent business/menu/order facts.
- Do not build backend/admin/payment infrastructure unless explicitly scoped.
- Do not claim an order was placed when only opening a call/message channel.
- Do not hide failures, skip tests, suppress TypeScript errors, or leave console/build errors.

## PHASE ORDER
0 Repository audit → 1 Brand foundation → 2 Design system → 3 Architecture → 4 Global layout → 5 Home → 6 Menu → 7 Product → 8 Deals → 9 About/Contact → 10 Ordering UX → 11 SEO → 12 Responsive polish → 13 Accessibility/performance → 14 Final QA.

Complete and validate each phase before the next. Ask only genuinely blocking questions; otherwise follow the specification and record assumptions.

## ACCEPTANCE CRITERIA
- The result feels recognizably Delicious Foods—purple/yellow/orange and playful—while clean, accessible, and food-led.
- First viewport answers what it is, what customers can eat, where it is, and how to order.
- Menu/deals are typed, data-driven, and verification-aware.
- All key pages and states work across target widths and keyboard input.
- NAP is consistent; no invented facts or unrelated business assets exist.
- SEO files/schema validate; no staging/placeholder domain leaks.
- Build, typecheck, lint, tests, accessibility smoke tests, and key E2E flows pass.
- No duplicate component systems, literal design drift, broken links, image layout shifts, or material console errors.

## VALIDATION
Run the repository’s install-safe commands for format, lint, typecheck, unit tests, production build, and E2E if configured. Validate HTML/metadata/schema, keyboard flows, responsive screenshots, contrast, reduced motion, empty/error/unavailable states, phone/directions links, and no-JS critical information. Report commands, results, changed files, assumptions, remaining verification blockers, and any intentionally deferred Stage 2 work.
