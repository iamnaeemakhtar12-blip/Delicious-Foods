# Phase 1 — Brand Foundation

## CONTEXT
Establish Delicious Foods’ digital brand foundation before building page UI. Brand proposition: **Whatever you’re craving, we’ve got it.** Visual identity must modernize—not replace—the supplied playful purple/yellow/orange system.

## OBJECTIVE
Centralize approved brand assets, business facts, copy constants, asset inventory, and provisional-to-final color decisions so later phases do not improvise.

## EXISTING SYSTEM
Read the audit, existing assets/styles/content, `00_BUSINESS_BRAND_AUDIT.md`, `01_BRAND_STRATEGY.md`, `02_DESIGN_SYSTEM.md`, and master prompt. Inspect actual logo/menu files if present before adjusting hues.

## REQUIREMENTS
- Create a single typed restaurant configuration with exact name, address, phone display/E.164, timezone, source-snapshot hours, known Facebook URL, and disabled unknown social/order channels.
- Create an asset inventory by hero/pizza/burgers/chicken/pulao/rolls/sandwiches/sides/drinks/desserts/deals/restaurant.
- Mark every placeholder and unknown value explicitly.
- Establish approved primary message, supporting copy, tone rules, and CTA labels in content—not scattered JSX.
- If source artwork exists, sample candidate colors and document contrast-driven final values; do not alter the logo.
- Record outstanding approvals: hours, menu, order channel, delivery, map, social links, photography, business story.

## DESIGN RULES
Preserve recognizable purple/yellow/orange/playful identity. Cream is breathing space; food is hero. No luxury black, monochrome minimalism, generic startup aesthetic, or overused drips.

## COMPONENTS
Do not build page components. A minimal `BrandMark` wrapper is allowed if the repository needs consistent sizing/accessible naming. Reuse existing image/logo handling.

## RESPONSIVE REQUIREMENTS
Verify logo assets remain legible at compact mobile header size and high-density displays. Define safe minimum sizes without modifying artwork.

## ACCESSIBILITY
Logo link has accessible name; decorative marks have empty alt. Confirm candidate palette contrast for body text, large text, controls, focus, and semantic states.

## SEO
Ensure business facts can feed metadata/schema later. Do not add ratings, invented descriptions, map coordinates, or guessed social handles.

## PERFORMANCE
Prefer SVG for approved logo when available; optimize raster assets without destructive quality loss; avoid loading every brand asset globally.

## DO NOT
Do not redesign the logo, invent brand history/claims, download random stock photos, publish unconfirmed WhatsApp/delivery, or hard-code facts in multiple files.

## ACCEPTANCE CRITERIA
- One typed source of truth exists for brand/business facts.
- Asset inventory distinguishes actual vs placeholder imagery.
- Copy and CTA vocabulary align with strategy.
- Palette decisions have contrast evidence and approval status.
- Unknown information remains visibly disabled/documented.

## VALIDATION
Run typecheck/data validation; search repository for duplicate phone/address/hours and unauthorized social URLs; test logo rendering at mobile/desktop sizes; report unresolved owner approvals.
