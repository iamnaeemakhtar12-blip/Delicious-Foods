# Delicious Foods Wah Cantt — Page-by-Page UX Specification

## Shared rules
- Stage 1 = marketing/menu plus direct phone/confirmed message ordering.
- Stage 2 = cart, checkout, confirmation; clearly feature-flagged.
- Every page exposes a logical next step without CTA clutter.
- Use only confirmed facts in production. Snapshot prices can appear in staging with clear internal verification status.
- Shared requirements: semantic landmarks, skip link, one H1, visible focus, 44px targets, reduced-motion support, real/labeled-placeholder images, and no horizontal page scroll at 320px.

---

## 1. Home `/`
### Objective
Identify the restaurant, simplify its breadth, surface deals, and convert to order/menu/location actions.

### Target user
First-time local visitor, repeat customer, group planner, deal seeker.

### Hierarchy and sections
1. **Hero:** logo/brand cue; H1 “Whatever you’re craving, we’ve got it.”; short category-rich support; Wah Cantt cue; Order now; Explore menu; one strong food composition.
2. **Today’s Best Deals:** 3–4 featured verified deal cards, link to all deals.
3. **What are you in the mood for?:** nine category cards.
4. **Featured Favorites:** approved featured products; never unverified “best sellers.”
5. **Pizza showcase:** product visuals, 8/11/13-inch size cue, menu link; no price if not confirmed.
6. **Delicious Bar:** visually cooler/refreshing sub-section with drink groups.
7. **Chicken & Pulao:** two-path merchandising band.
8. **Something sweet:** sweets/salads/ice cream teaser.
9. **Location/order CTA:** address, supplied hours, call and directions.

### Interactions/CTAs
Category cards deep-link to filtered menu. Deal/product order controls open Stage 1 channel handoff or Stage 2 detail/cart. Sticky mobile order control optional.

### Responsive
- Desktop: split hero, 3-card deals, 3×3 or responsive category grid.
- Tablet: stacked or 5/7 hero, 2-column merchandising.
- Mobile: copy first, image second unless tested LCP composition supports overlay; horizontally scrollable featured cards only with visible next-card affordance and no auto-scroll.

### Accessibility
Hero image alt describes actual spread; decorative blobs hidden. Avoid text baked into imagery. Cards have distinct links/actions.

### SEO
Home title targets brand + restaurant/food delivery intent naturally. Restaurant JSON-LD. H1 not stuffed.

### Motion
Hero accents fade/slide subtly; card hover only on hover-capable devices.

### Images needed
Hero mixed spread; 4 deals; 9 category representatives; 4 featured dishes; pizza; 3–5 drinks; chicken/pulao; desserts; storefront optional.

---

## 2. Menu `/menu`
### Objective
Help users find, compare, and act on products quickly.

### Target user
Known-item searcher and browsing customer.

### Hierarchy
H1/context → search → sticky categories → result count/status → grouped/grid products → order help/contact.

### Components
SearchField, CategoryFilter, ProductGrid, ProductCard, Price, Badge, EmptyState, ProductDialog/links, OrderChannelDialog.

### Interactions
- Filter by category, query by name/alias/confirmed description.
- URL state optional and shareable.
- Opening detail preserves scroll/filter state.
- Stage 1 action: “Order this item”; Stage 2: “Add to order.”

### Responsive
Desktop sticky category rail below header and 3-column grid. Tablet 2 columns. Mobile 1 column or tested compact 2-column cards; category chips horizontal with keyboard access; no hover dependencies.

### Accessibility
Search has visible label; result changes politely announced; filters indicate current state; unavailable state explicit.

### SEO
Unique menu metadata; ItemList/Breadcrumb only if accurate. Avoid indexing every query permutation.

### Performance
Server-render initial catalog; lightweight client filtering; no loading all full-resolution images.

### Images
One approved 4:3 image per product where possible; fallback explicitly generic/category illustration, not fake dish.

---

## 3. Product detail `/menu/[category]/[product]`
### Objective
Resolve product questions and capture a valid order selection.

### Hierarchy
Breadcrumb → image → name/status/badges → price → confirmed description → required variant groups → compatible add-ons → quantity → instructions → action → related products.

### Stage rules
Stage 1 may show confirmed variants then hand off selected text to the order channel. Stage 2 calculates cart line item. Never expose unsupported choices.

### Responsive
Desktop 6/6 image/content with sticky summary when content is long. Mobile image, content, bottom safe-area action; modal variant may become full-screen sheet.

### Accessibility
Variant groups use fieldset/legend; errors focus and explain missing choice; quantity has labeled increment/decrement and typed input safeguards; dialog mechanics if modal.

### SEO
Canonical product URL, Product schema only when price/availability and page content meet eligibility; no fake reviews.

### Motion
Dialog transition 200ms; image gallery no auto-rotation.

### Images
Hero product, optional detail/portion image, accurate variants.

---

## 4. Deals `/deals`
### Objective
Make bundles easy to compare and order.

### Hierarchy
H1/intro → featured active deals → Pizza Deals → Krispo Deals → terms/verification-controlled note → order CTA.

### Components
DealCard, deal filter (only if volume requires), price, contents list, expiry/availability.

### Responsive
4/2/1 column responsive grid based on content; equal-height action region but no clipped item lists.

### Accessibility
Contents are semantic lists. Expiry/status is text. Do not communicate promotion through color alone.

### SEO
Natural “food deals in Wah Cantt” copy; Offer schema only with verified validity/availability.

### Images
Exact photographed bundle for each deal; no generic pizza presented as a three-pizza deal.

---

## 5. About `/about`
### Objective
Build brand and local trust without distracting from ordering.

### Hierarchy
H1/identity → variety proposition → approved brand story placeholder → food/quality/service principles → local presence → CTA.

### Content
Do not fabricate founder, year, awards, sourcing, or preparation claims. Owner input slots: short origin, what the team cares about, what guests can expect.

### Responsive
Editorial 7/5 desktop; stacked mobile; text max 68ch.

### Accessibility/SEO
Meaningful staff/store imagery and alt text; Organization/Restaurant facts remain centrally sourced. Title uses brand + “About.”

### Images
Storefront, dining/serving environment, team only with consent, mixed menu spread.

---

## 6. Contact `/contact`
### Objective
Enable call/order/directions and provide reliable operational facts.

### Hierarchy
H1 → action cards → NAP/hours → map/directions → confirmed delivery info → verified social links.

### Exact supplied display data
- Delicious Foods Wah Cantt
- Plaza No. A-50, Main Shah Wali Road, Shah Wali Colony, Wah Cantt, 47010, Pakistan
- 0321-8807790
- Daily 11:00 AM–12:00 AM, pending launch reconfirmation

### Interactions
Tap-to-call; confirmed order channel; Google Maps directions; map embed only with approved URL/config and privacy/performance consideration.

### Responsive
Desktop two-column details/map; mobile actions first, static map preview/directions fallback.

### Accessibility
Map has accessible title and is never sole location source. Phone/address remain selectable text. Hours use table/list semantics.

### SEO
Local title/description; consistent NAP; LocalBusiness/Restaurant data from shared source.

---

## 7. Cart `/cart` — **Stage 2 future**
### Objective
Review valid selections and move to fulfillment.

### Hierarchy
Items → variants/add-ons/instructions → quantity/remove → subtotal/fees status → checkout.

### Behavior
Persist cart carefully; revalidate price/availability; disclose that total may change only before checkout confirmation; empty cart links to menu.

### Responsive
Desktop item list + sticky summary. Mobile stacked rows and bottom checkout action with safe area.

### Accessibility
Updates announced; remove action names item; focus managed after removal; quantity operable by keyboard.

### SEO
`noindex`; no Product schema.

---

## 8. Checkout `/checkout` — **Stage 2 future**
### Objective
Collect minimum required information and place an accurate order.

### Steps
1. Fulfillment: pickup/delivery.
2. Contact: name, phone.
3. Delivery address only if relevant.
4. Payment method only if supported.
5. Review: items, fees, total, terms.
6. Place order.

### Rules
Server-side validation/idempotency, explicit consent/terms, no unsupported delivery estimate, preserve input after errors, no account required by default.

### Responsive
Single-column mobile; desktop form + sticky summary. Do not split into excessive steps unless testing supports it.

### Accessibility
Error summary, programmatic labels, autocomplete, correct keyboard, focus first invalid field, status during submission.

### SEO/security
`noindex`; HTTPS; minimize PII; define retention; never expose secrets/client-only order acceptance.

---

## 9. Order confirmation `/order-confirmation/[id]` — **Stage 2 future**
### Objective
Confirm receipt and communicate the next verified step.

### Hierarchy
Success status → public order reference → summary → fulfillment/contact details → what happens next → contact restaurant → return home/menu.

### Rules
Do not claim “accepted” if merely received. Do not expose sequential/internal IDs or private data in shareable URLs. Handle refresh safely.

### Responsive/accessibility
Status heading receives focus; success is text/icon as well as color. Printable/selectable summary. Mobile actions first.

### SEO
`noindex, nofollow`; exclude from sitemap.

## Cross-page analytics events
`view_menu`, `select_category`, `search_menu`, `view_product`, `select_deal`, `order_cta_click`, `call_click`, `message_click`, `directions_click`, and future cart/checkout events. Event payloads use content IDs and channel; no unnecessary PII.
