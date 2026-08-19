# Phase 3 — Site and Data Architecture

## CONTEXT
Create the route, content, validation, and feature-boundary architecture for the Delicious Foods Stage 1 site, preserving a clean path to Stage 2 ordering.

## OBJECTIVE
Establish typed, validated, data-driven architecture before page detail work.

## EXISTING SYSTEM
Inspect router/layout conventions, existing routes/API, content source, state management, environment flags, data validation, error/not-found handling, and tests. Read `03_INFORMATION_ARCHITECTURE.md`, `04_CONTENT_MODEL.md`, and `05_MENU_DATA.md`.

## REQUIREMENTS
- Create/adapt routes for Home, Menu, product detail readiness, Deals, About, Contact; add custom not-found/error boundaries.
- Define typed models for restaurant, location, hours, category, product, variants, add-ons, deals, social, SEO, and verification.
- Store menu data outside components and transcribe only supplied items; include verification status.
- Implement schema/reference validation: unique IDs/slugs, nonnegative prices, valid categories, no enabled unknown channels, no orderable unverified item.
- Add feature flags for direct-order vs cart ordering. Cart/checkout routes remain absent or clearly disabled unless scoped.
- Implement formatting helpers for PKR, phone links, hours, and safe order message construction.

## DESIGN RULES
Architecture must enable the craving-led homepage/menu and consistent components; do not encode visual layout in content records.

## COMPONENTS
Create only architectural providers/helpers and shared route shells needed now. Reuse existing state/data solutions; avoid global state for menu filters.

## RESPONSIVE REQUIREMENTS
Server-render core content. URL/category state must work with direct navigation and browser back; no mobile-only data forks.

## ACCESSIBILITY
Error/not-found pages have headings and recovery links. Feature-disabled actions explain alternatives. JS failure should retain NAP and direct call links where practical.

## SEO
Plan canonical product/category URLs; avoid thin duplicate filter routes; future cart/checkout/confirmation are noindex and excluded from sitemap.

## PERFORMANCE
Keep initial data payload scoped to page needs. Avoid shipping the full future ordering model/client state to every route.

## DO NOT
Do not create a database, admin, auth, payment system, API abstraction with no consumer, duplicate product records for cross-listing, or hard-coded prices in JSX.

## ACCEPTANCE CRITERIA
- Routes compile with meaningful placeholders/shells.
- All supplied menu records are represented without invented fields.
- Validation catches missing references and unsafe orderability.
- Stage 1/Stage 2 behavior is explicit and testable.
- Unknown data is null/inactive, not guessed.

## VALIDATION
Run schema/data tests, route build, typecheck, direct/deep-link navigation, back/forward behavior, 404/error recovery, and searches for product/price literals in components. Output a data-verification report.
