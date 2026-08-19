# Phase 14 — Final QA and Release Audit

## CONTEXT
Perform the final production-readiness audit for the Delicious Foods Wah Cantt Stage 1 website. Fix defects; do not add unplanned features.

## OBJECTIVE
Prove that implementation matches the single source of truth, contains no invented data, works across key flows/devices, and is safe to release after owner verification.

## EXISTING SYSTEM
Review all project specifications, audit/change history, feature flags, content verification report, current repository diff, CI/deployment config, environment variables, analytics/privacy, and all public routes.

## REQUIREMENTS
- Reconcile pages/components/data against every acceptance criterion in phases 0–13.
- Verify exact NAP and source-snapshot hours everywhere.
- Reconcile every menu item/deal; list production-blocking unconfirmed records.
- Confirm no “Delicious Food House” or unrelated business data/assets.
- Validate every link, action, form/state, image/alt, route, redirect, 404/error, metadata, schema, sitemap, robots, analytics event, and feature flag.
- Verify approved real vs placeholder assets and ensure placeholders cannot be mistaken for actual dishes.
- Ensure Stage 2 controls/routes are hidden unless fully scoped/tested.
- Produce a release report: pass/fail, commands/results, blockers, owner sign-offs, deferred work, rollback considerations.

## DESIGN RULES
Compare against brand/design system: food-first, cream breathing space, controlled purple/yellow/orange, consistent fonts/cards/motion, no generic template drift.

## COMPONENTS
Search for duplicates, dead components, literal styles, inaccessible forks, and unused dependencies. Remove only when evidence shows safe removal.

## RESPONSIVE REQUIREMENTS
Final visual/regression matrix: 360, 768, 1280, 1440 plus 320 edge, landscape, and 200% zoom. Test sticky layers/safe areas and longest content.

## ACCESSIBILITY
Repeat automated and manual core-flow tests. Confirm no regressions in headings, landmarks, focus, dialogs, labels, contrast, alt, live regions, reduced motion, and touch targets.

## SEO
Validate rendered production URLs/metadata/schema/canonicals/OG, sitemap, robots, 404/redirects, noindex rules, NAP, and absence of hard-coded rating/review count or placeholder domain.

## PERFORMANCE
Run production build and representative mobile audits. Confirm optimized images/fonts, no severe console/network errors, no layout shift, and no unexpected third-party scripts.

## DO NOT
Do not waive failures silently, invent missing owner approvals, enable unconfirmed menu/order data, make broad refactors, change dependencies without need, or call the site production-ready while blockers remain.

## ACCEPTANCE CRITERIA
- All automated repository checks pass.
- Critical user flows pass on keyboard, mobile, and desktop.
- No invented/stale/unrelated facts are published.
- Design-system and component reuse are consistent.
- SEO/accessibility/performance gates pass or are explicitly blocking release.
- Release report clearly distinguishes code-ready from content/operations-ready.

## VALIDATION
Run format, lint, typecheck, unit/component/integration/E2E, production build, link crawl, schema/metadata/sitemap/robots validation, axe/manual accessibility, responsive visual regression, Lighthouse/CWV lab tests, console/network checks, and content grep. Provide exact commands, exit status, evidence paths, blockers, and final go/no-go recommendation.
