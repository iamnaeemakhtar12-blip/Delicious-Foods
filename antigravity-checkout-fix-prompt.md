# Prompt for Antigravity: Fix Checkout Page Layout & Footer

Copy everything below into Antigravity as one prompt. This targets the `/checkout` page specifically.

---

## Issue 1: Remove/fix the empty space at the top of checkout

Directly below the header on `/checkout`, there's a large empty grey block with no content before the "Secure Checkout" heading. Find what's rendering this (likely a leftover hero/banner component reused from another page, or an image that isn't loading) and remove it. The checkout page should go straight from the header into the "Secure Checkout" heading with normal spacing — no large empty gap.

## Issue 2: Reorder checkout content so Order Summary appears before or alongside Delivery Details, not after

Currently the flow is: Secure Checkout heading → Delivery Details form (Full Name, Phone, Delivery Address) → Order Summary → Total → Place Order button. This makes users scroll through the entire form before seeing what they're actually ordering and paying for.

Fix this with one of the following approaches (pick whichever fits the current component structure best):
- **Option A (preferred for mobile):** Show a compact, collapsible Order Summary at the very top of the checkout page, right after the "Secure Checkout" heading — e.g. a collapsed bar reading "Order Summary (2 items) · Rs 1,820 ▾" that expands to show item details when tapped. The Delivery Details form follows below it.
- **Option B (for desktop/wide viewports):** Use a two-column layout — Delivery Details form on the left, Order Summary + Total + Place Order button in a sticky right-hand column that stays visible while scrolling. Fall back to Option A's stacked/collapsible layout on mobile widths.

Implement Option A for mobile at minimum. If reasonable given the current codebase, also implement Option B for desktop.

## Issue 3: Make the "Place Order" button sticky/fixed on mobile

On mobile, once the user starts filling the form, the "Place Order" button should remain reachable without scrolling all the way down — e.g. a fixed bottom bar showing the total and the "Place Order" button, similar to the sticky cart bar pattern used elsewhere on the site. This replaces the need for the cart bar on this specific page (see Issue 5).

## Issue 4: Replace the full footer with a minimal footer on the checkout page only

On `/checkout` specifically, the footer currently shows the full site footer: About text, Quick Links (Home, Menu, Deals & Offers, About Us, Gallery, Blog, Contact), Contact Us, Opening Hours, and copyright. This gives users six+ ways to navigate away mid-checkout, which hurts completion rate.

Replace it with a minimal footer for this page only, containing just:
- Copyright line ("© 2026 Delicious Foods Wah Cantt. All rights reserved.")
- A single support contact line (phone number) in case something goes wrong during checkout

Do not change the footer on any other page — this applies to `/checkout` only.

## Issue 5: Remove or fix the sticky cart/"View Cart" bar on the checkout page

The floating "2 items in order · Rs 1,670 · View Cart" bar is currently rendering below the footer on `/checkout` instead of staying fixed to the viewport — meaning it's not actually working as a sticky bar on this page, it's just static content stacked at the bottom. Since the user is already on the checkout page looking at their Order Summary, this "View Cart" prompt is redundant and confusing here.

Remove this sticky cart bar specifically on `/checkout` (keep it as-is on `/menu` and other pages where it's working correctly). Replace its role on checkout with the sticky "Place Order" bar described in Issue 3.

---

## Do not change

Pricing, delivery fee logic, payment method options, form field structure, or any other page's footer/cart bar — this is scoped to `/checkout` layout only.

## After implementing

Test the full `/checkout` flow on a mobile viewport (375px) to confirm:
- No empty grey space at top
- Order Summary is visible early without scrolling through the whole form first
- "Place Order" stays reachable without a long scroll
- Footer is minimal and doesn't offer full site navigation
- No duplicate/broken cart bar appears below the footer
