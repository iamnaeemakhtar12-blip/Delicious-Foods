# Phase 8 — Deals Page

## CONTEXT
Implement a high-conversion deals destination for the four Pizza Deals and four Krispo Deals supplied as menu snapshot data.

## OBJECTIVE
Make bundle contents and prices easy to compare and order while respecting verification and validity.

## EXISTING SYSTEM
Inspect deal data/model, DealCard, homepage deals, order channel, imagery, dates/availability, and tests. Reuse one deal component system.

## REQUIREMENTS
- Page intro and active/preview status.
- Group Pizza Deals and Krispo Deals; allow featured ordering via data.
- Every card displays exact deal name, semantic contents list, snapshot/current price according to environment policy, availability, and Order Deal action.
- Do not calculate discounts without verified component totals.
- Support inactive/expired states and optional start/end dates.
- Deal handoff includes exact deal ID/name and any confirmed choices.
- Include concise terms area only from confirmed content.

## DESIGN RULES
Deals can use stronger yellow/purple blocks than product cards, but content remains readable and food photography accurate to the full bundle. No fake urgency or crowded stickers.

## COMPONENTS
DealGrid, DealCard, Price, Badge, OrderChannelDialog, EmptyState, SectionHeading. Homepage and page share these components.

## RESPONSIVE REQUIREMENTS
1 column mobile, 2 tablet, 3–4 desktop where contents remain readable. Action regions align without truncating bundle lists. Mobile cards show full contents before CTA.

## ACCESSIBILITY
Contents are lists; price/status text; expiry accessible; button names include deal; no color-only active state; logical group headings.

## SEO
Unique deals metadata with natural Wah Cantt phrasing. Offer schema only when current availability/validity is confirmed. Expired deals handled intentionally; no stale schema.

## PERFORMANCE
Use correctly sized bundle imagery, lazy loading below fold, and server-render deal content. Avoid countdown timers and client-heavy carousels.

## DO NOT
Do not invent saving percentages, serving counts, substitutions, expiry, drink choices, or bundle photos. Do not label snapshot data current without sign-off.

## ACCEPTANCE CRITERIA
- All eight supplied deals are accurately represented in data/staging.
- Grouping, availability, status, and order intent work.
- Cards are comparable and responsive.
- Shared components prevent homepage/page divergence.
- No false discount or urgency claim appears.

## VALIDATION
Reconcile every content line/price against `05_MENU_DATA.md`; test active/inactive/expired/missing-image states, order message, keyboard/mobile/zoom, schema gating, build and a11y.
