# Phase 0 — Repository Audit

## CONTEXT
Audit the existing repository before implementing the Delicious Foods Wah Cantt digital storefront. This phase changes no product UI unless required to make the audit tooling run safely.

## OBJECTIVE
Produce a concise repository audit and an evidence-based implementation plan that preserves working code and identifies conflicts with the project specification.

## EXISTING SYSTEM
Inspect first: tree, README/docs, git status/diff, package manager/lockfile, package scripts, Next/React/TypeScript/Tailwind versions, App/Pages Router, routes, layouts, components, CSS/tokens, fonts, assets, content/data, tests, lint/format, environment variables, analytics, SEO, deployment config, accessibility primitives, and build status. Read all `/DELICIOUS_FOODS_PROJECT/*.md` and the master prompt.

## REQUIREMENTS
- Create/update an audit document containing current architecture, reusable assets/components, risks, gaps, dependencies, and recommended phase mapping.
- Locate every instance of restaurant facts, menu prices, hard-coded colors/fonts, unrelated brands, placeholder domains, and duplicate components.
- Identify whether approved logo/menu/food assets exist and record dimensions/formats/rights metadata if available.
- Determine Stage 1 order channel behavior currently implemented.
- Run existing checks without destructive dependency upgrades.
- List genuinely blocking owner inputs separately from safe implementation assumptions.

## DESIGN RULES
No redesign in this phase. Evaluate current UI against food-first cream/purple/yellow/orange direction and identify migration path rather than giving generic taste opinions.

## COMPONENTS
Inventory components by keep/adapt/replace/remove. Flag duplicated buttons, cards, dialogs, headers, and token systems.

## RESPONSIVE REQUIREMENTS
Inspect at least 360, 768, 1280 widths if runnable. Record overflow, navigation, tap target, and layout issues.

## ACCESSIBILITY
Run available automated checks and manual keyboard smoke test. Record landmark, heading, focus, contrast, image-alt, form-label, and dialog issues.

## SEO
Inventory metadata, robots, sitemap, schema, canonical handling, NAP consistency, and indexability settings.

## PERFORMANCE
Capture current build output/bundle clues and a baseline Lighthouse/Web Vitals measurement if tooling permits. Do not install heavy tooling just for this phase without need.

## DO NOT
Do not reinitialize the project, delete unknown code, switch frameworks/package managers, mass-format unrelated files, commit secrets, or implement speculative architecture.

## ACCEPTANCE CRITERIA
- Audit is based on inspected files and executed commands.
- Reuse plan names concrete files/components.
- Every contradiction with the master specification is identified.
- Phase plan has dependencies and release gates.
- No working product behavior is unintentionally changed.

## VALIDATION
Report commands and exit codes; verify working tree changes are audit-only; include build/check failures verbatim with likely cause and next action.
