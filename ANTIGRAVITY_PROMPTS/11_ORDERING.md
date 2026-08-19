# Phase 10 — Ordering UX

## CONTEXT
Implement honest Stage 1 direct ordering and prepare—but do not overbuild—the Stage 2 cart/checkout boundary.

## OBJECTIVE
Make order intent reliable and trackable through phone and only confirmed messaging channels, with feature-flagged architecture for future full ordering.

## EXISTING SYSTEM
Inspect order channels/config, product/deal action handlers, dialogs, analytics, feature flags, cart code if any, server/API/backend, and security/privacy docs. Preserve any sound existing ordering implementation.

## REQUIREMENTS
### Stage 1
- Global/product/deal actions open an OrderChannelDialog or directly call when UX decision is documented.
- Always show exact display phone and `tel:+923218807790` link.
- WhatsApp/message remains disabled until the owner confirms capability and URL/number.
- Product/deal context can create a concise URL-encoded draft message, including confirmed selections; state clearly that sending/calling is not a placed order.
- If messaging fails, phone remains visible.
- Track channel intent using IDs, never message text/PII.

### Stage 2 readiness
- Define clear interfaces for cart line, selections, totals, availability revalidation, fulfillment, and checkout feature flag.
- If Stage 2 is not explicitly enabled, do not expose cart/checkout controls or routes as working.
- If already in scope, implement according to page/content/component specs with server-side validation, idempotency, privacy, and truthful statuses.

## DESIGN RULES
Order action is prominent but not duplicated everywhere. Channel dialog is short, calm, and branded. Use explicit labels: Call to order, Message to order, Add to order (Stage 2).

## COMPONENTS
OrderChannelDialog, OrderButton, safe message builder; Stage 2 only: CartButton, CartDrawer, CartLine, CartSummary, fulfillment form. Reuse Dialog/Button/form primitives.

## RESPONSIVE REQUIREMENTS
Mobile channel controls are thumb-friendly and safe-area aware; phone action can be primary. Desktop dialog remains compact. Sticky actions never obscure final fields/content.

## ACCESSIBILITY
Dialog title/description, focus trap/Escape/return; descriptive links; loading/error status; required variants validated before handoff; cart changes announced if enabled.

## SEO
Future cart/checkout/confirmation are noindex and excluded from sitemap. Do not put customer/order data in indexable URLs.

## PERFORMANCE
Keep Stage 2 code out of Stage 1 bundles through flags/dynamic boundaries. No large state library solely for a channel chooser.

## DO NOT
Do not claim an order is confirmed/placed after opening another app, assume WhatsApp, invent delivery/payment/fees/times, trust client totals, or build backend/admin/payment without scope.

## ACCEPTANCE CRITERIA
- Every visible Order action reaches a valid truthful outcome.
- Required product choices carry into handoff correctly.
- Phone fallback is always available.
- Analytics contains no PII.
- Stage 2 is either hidden and cleanly bounded or fully validated if explicitly scoped.

## VALIDATION
Test all order entry points, mobile tel behavior, safe message encoding, missing channel/failure state, keyboard/dialog flow, analytics payload inspection, feature flags/build variants, and no exposed inactive transactional routes.
