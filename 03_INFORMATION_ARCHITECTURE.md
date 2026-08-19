# Delicious Foods Wah Cantt — Information Architecture

## 1. Architecture principle
Organize around customer intent, not the printed menu’s physical layout. A user should move from **craving → category → item/deal → order channel** with location and hours always easy to reach.

## 2. Sitemap and release scope
```text
/                              Home                         Stage 1
/menu                          Menu index                   Stage 1
/menu/[category]               Category landing/filter     Stage 1 or URL state
/menu/[category]/[product]     Product detail               Stage 1-ready; canonical
/deals                         Deals                        Stage 1
/about                         About                        Stage 1
/contact                       Contact/location             Stage 1
/cart                          Cart                         Stage 2
/checkout                      Checkout                     Stage 2
/order-confirmation/[id]       Confirmation                 Stage 2, noindex
/privacy                       Privacy                      Required if analytics/forms
/terms                         Ordering terms               Stage 2/if required
```
Stage 1 may use `/menu?category=pizza` instead of separate category routes. Choose based on content depth and SEO value; never create thin duplicate pages. Product modals must preserve/link to canonical URLs if products are indexable.

## 3. Global navigation
### Primary
Home · Menu · Deals · About · Contact

### Persistent action
**Order now** opens the confirmed order channel selector or direct channel. It must not imply checkout exists during Stage 1.

### Utility/trust
Phone, hours, and directions appear in footer/contact; a slim status cue may appear in header only if the hours engine is trustworthy and handles midnight correctly.

### Mobile
Header: logo, compact Order button, menu trigger. Optional bottom nav after testing: Home · Menu · Deals · Order · More. Do not use both bottom nav and a large overlapping sticky CTA without spacing/testing.

## 4. Page hierarchy
### Home
Hero → best deals → craving categories → featured favorites → pizza showcase → Delicious Bar → chicken/pulao → sweets/desserts → location/order CTA.

### Menu
H1/context → search/filter → sticky category navigation → product grid/list → unavailable/empty states → order help.

### Product
Image → name/status → price → confirmed description → variants/add-ons → quantity/instructions (Stage 2) → action → related items.

### Deals
Hero/context → active deal cards grouped by type → terms/availability → ordering CTA.

### About
Identity/variety → approved story → quality/service principles → local presence → order/location CTA.

### Contact
NAP/hours → call/order/directions actions → map → confirmed delivery information → verified social profiles.

## 5. Menu taxonomy
### Customer-facing top level
1. Pizza
2. Burgers
3. Chicken
4. Pulao
5. Rolls & Shawarma
6. Sandwiches
7. Sides
8. Drinks
9. Desserts

### Internal subcategories
- Chicken: Krispo/broast, roast, wings/hot shots/nuggets.
- Drinks: mocktails, mojitos, smoothies, shakes, iced tea, cold coffee, fresh, winter, cold drinks/water.
- Desserts: sweets, salads/fruit, ice cream.
- Sides: fries, dips/extras; some chicken snacks may be cross-listed without duplicated product records.

Cross-list by category references/tags, not copied data. Deals are a separate content type and may reference products.

## 6. Product architecture
```text
Category
  └─ Product
      ├─ base content
      ├─ variants (size/format)
      ├─ permitted add-on groups
      ├─ price/availability
      ├─ image assets
      └─ merchandising flags
```
Examples:
- “Zinger Burger” can hold regular/cheese/fries variants only if restaurant confirms these are true variants rather than separate SKUs.
- Pizza names require size-price data before orderable implementation; 8/11/13-inch sizes are known but product prices were not supplied here.
- Chicken Broast can be one product with Piece/Half/Full variants.

## 7. Core user flows
### A. Known-item Stage 1
Search/landing → Menu → category/search → product → Order this item → call/message handoff with item context where technically possible.

### B. Deal seeker Stage 1
Home/Deals → deal card → Order deal → confirmed channel → restaurant completes order.

### C. Discovery
Home → What are you craving? → filtered menu/category → product detail → order.

### D. Visit
Search/contact/footer → hours/address → directions/map → visit.

### E. Stage 2 cart
Menu/product → select required variants → Add to order → cart → delivery/pickup → customer details → payment choice → review → place order → confirmation.

## 8. Ordering strategy
### Stage 1
- Channel selector supports **Call** and **WhatsApp/message only if confirmed**.
- Where possible, prefill a concise message containing product/deal name and non-authoritative price snapshot; ask customer to confirm availability/total with restaurant.
- Track outbound intent without delaying navigation.
- No fake cart or checkout controls.

### Stage 2
- Cart persists safely for a reasonable session.
- Validate prices/availability server-side.
- Distinguish delivery and pickup before requesting irrelevant fields.
- Show fees/minimum/time only from operational settings.
- Do not process payments until compliance/security and operational ownership are defined.

## 9. CTA strategy
- One visually primary CTA per section.
- “Order now” is global and channel-aware.
- “Explore menu” is the default secondary route.
- Product actions use “Order this item” in Stage 1, “Add to order” in Stage 2.
- Contact uses “Call to order” and “Get directions.”
- Links describe destination; avoid repeated “Learn more.”

## 10. URL and state rules
- Lowercase kebab-case slugs.
- Stable product/category IDs separate from slugs.
- Filters: `?category=pizza&query=zinger` where useful.
- Redirect retired slugs; unavailable products may remain visible if temporary.
- Expired deals return helpful status or redirect only when there is a genuine successor.
- Canonicalize query variants to prevent duplicate indexing.

## 11. Search and filter behavior
- Search names, aliases, and confirmed descriptions.
- Category filters are mutually exclusive initially; “All” resets.
- Preserve state when returning from detail.
- Zero state suggests clearing filters, close spellings, and order contact.
- Analytics log query patterns without storing sensitive free text beyond defined retention.

## 12. Content ownership
| Data | Owner/reviewer | Review cadence |
|---|---|---|
| NAP/hours | Restaurant manager | Monthly + holidays |
| Menu/prices | Operations | Before launch and each change |
| Deals | Marketing + operations | Start/end dates |
| Delivery/payment | Operations | Monthly |
| Photos | Brand owner | Per shoot/change |
| SEO/editorial | Site owner | Quarterly |

## 13. Error and edge routes
- Custom 404 offers Menu, Deals, Contact.
- Product unavailable state offers same-category alternatives without false equivalence.
- Ordering channel failure always exposes the phone number.
- Map failure retains written address and directions link.
- JavaScript failure leaves NAP, menu, and direct call links usable wherever possible.
