# Phase 11 — SEO Implementation

## CONTEXT
Implement accurate technical, local, social, and structured SEO for Delicious Foods Wah Cantt using centralized business/menu data.

## OBJECTIVE
Make public pages crawlable, distinct, locally relevant, and eligible for truthful rich results without stale or fabricated information.

## EXISTING SYSTEM
Inspect metadata APIs, domain/environment config, robots, sitemap, manifest, schema, canonicals, redirects, 404, Open Graph assets, analytics, and staging indexing. Read `08_SEO_SPEC.md`.

## REQUIREMENTS
- Implement unique titles/descriptions for Home, Menu, Deals, About, Contact, curated categories, and confirmed product pages.
- Configure canonical base/domain via validated environment; fail or block production metadata when placeholder domain remains.
- Generate Restaurant JSON-LD from central NAP; add hours/map/geo/social/menu/delivery only when confirmed.
- Generate Breadcrumb and Product/Offer only on eligible pages with current visible data.
- Add XML sitemap with canonical public URLs only; robots with environment-safe staging noindex; metadata robots for transactional/private/search pages.
- Implement Open Graph/Twitter-style sharing with approved real-food image and no stale price text baked in.
- Ensure useful 404 and redirects for retired slugs.

## DESIGN RULES
SEO content remains concise and useful; no visibly awkward keyword blocks. Social cards follow brand colors and preserve food/logo clarity.

## COMPONENTS
Prefer metadata/schema helpers, not visual SEO components. Visible breadcrumbs reuse Breadcrumb component and match schema.

## RESPONSIVE REQUIREMENTS
Metadata is device-neutral; visible title/local content remains readable and does not create mobile copy walls.

## ACCESSIBILITY
Alt text is descriptive, not stuffed. Breadcrumbs are labeled navigation. Structured data must match visible accessible content.

## SEO
Target natural brand/local/category intent. Never use audit-time 4.5/10-review snapshot in permanent schema/copy. Validate `sameAs`; no guessed handles. Ensure one preferred host, HTTPS, canonical consistency, and no query-page index bloat.

## PERFORMANCE
No SEO plugin/client script that duplicates Next metadata. Sharing images optimized; analytics/privacy implementation does not block rendering.

## DO NOT
Do not ship placeholder domain, hard-code review schema, generate thin city/category doorway pages, use meta-keywords, copy third-party content, or index staging/cart/checkout/confirmation/internal search.

## ACCEPTANCE CRITERIA
- Metadata is unique and source-driven.
- Schema validates and exactly matches visible confirmed facts.
- Robots/sitemap/canonicals are correct per environment.
- No duplicate or conflicting structured data.
- Social previews use approved assets.

## VALIDATION
Run production build; inspect rendered head/JSON-LD; validate schema, sitemap XML, robots, canonical/OG absolute URLs, 200/301/404 behavior, staging noindex and production configuration; crawl representative routes; search output for placeholder domain, rating, reviewCount, guessed social URLs.
