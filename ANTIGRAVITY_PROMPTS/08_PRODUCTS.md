# Phase 7 — Product Experience

## CONTEXT
Build reusable product cards and detail behavior that supports direct ordering now and validated cart selections later.

## OBJECTIVE
Deliver accurate product discovery/detail, variant selection, quantity, and order action without inventing customization.

## EXISTING SYSTEM
Inspect existing ProductCard/detail routes/dialogs, variant models, order flags, accessible primitives, image handling, and data verification. Reuse established components.

## REQUIREMENTS
- ProductCard supports image, name, confirmed description, price/old price, limited badges, action, unavailable, missing-price, placeholder image, and variants-present states.
- Dedicated canonical detail route; optional intercepting modal only if repository architecture supports correct deep links/history.
- Detail hierarchy: breadcrumb, image, name/status, price, description, confirmed variants/add-ons, quantity, instructions (if order system uses them), action, related items.
- Model known candidate variants only after confirmation; do not assume cheese/fries or pizza topping compatibility.
- Stage 1 handoff includes selected item/variant text safely; Stage 2 add action remains feature-flagged.
- Preserve selection and give actionable validation errors.

## DESIGN RULES
Food remains focal. Cards are consistent, not badge-heavy. Detail uses generous image and clear price/action. Mobile bottom action respects safe area.

## COMPONENTS
ProductCard, ProductGallery, ProductDetail, VariantSelector, AddonSelector, QuantitySelector, Price, Badge, ProductDialog, OrderChannelDialog, RelatedProducts. Do not duplicate business selection logic between modal/page.

## RESPONSIVE REQUIREMENTS
Desktop two-column detail; tablet adaptive; mobile full page/full-screen sheet with action reachable but not covering controls. No hover-dependent gallery. Ensure long names/variants wrap.

## ACCESSIBILITY
Fieldset/legend for choices, explicit required/error text, focus first invalid group, labeled increment/decrement, dialog trap/Escape/return, gallery controls named, status changes announced, target sizes and zoom pass.

## SEO
Canonical product route; unique metadata. Product/Offer schema only for confirmed current data. Breadcrumbs match visible hierarchy. No Review/AggregateRating markup.

## PERFORMANCE
Responsive images, only first detail image eager, thumbnails lazy, minimal client boundary around selectors, no oversized gallery libraries.

## DO NOT
Do not make whole card clickable while nesting buttons invalidly, fabricate ingredient descriptions/add-ons, infer savings, enable unavailable/unverified items, or let modal-only URLs block sharing/indexing.

## ACCEPTANCE CRITERIA
- All card/detail states render from typed data.
- Required selection prevents invalid handoff/add.
- Direct links and browser history work.
- Stage 1 and Stage 2 actions are truthful and flag-controlled.
- Keyboard, screen reader, mobile, and image fallback behavior pass.

## VALIDATION
Test each state and representative product types (burger variants, broast sizes, incomplete pizza, ice cream flavors only when confirmed), deep links/history, form validation, encoded order message, schema eligibility, responsive screenshots, and build/typecheck/a11y.
