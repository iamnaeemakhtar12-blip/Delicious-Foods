# Prompt for Antigravity: UI/UX Improvements (Mobile + Desktop)

Copy everything below into Antigravity as one prompt. These are UI/UX and structural improvements only — do not change pricing, menu data, or category content.

---

## 1. Fix remaining duplicate images on the homepage

The homepage "Popular Menu" section (separate from `/menu`, likely still using its own hardcoded/sample data) still has duplicate images:
- "Chicken Pulao Single" and "Simple Pulao" currently use the identical image.
- "Behari Spin Roll" and "Chicken Shawarma" currently use the identical image.

Find wherever the homepage's "Popular Menu" section sources its data/images from (it may be separate from the `/menu` page's data) and give each of these four items its own distinct image, following the same approach used to fix `/menu`. Audit the rest of the homepage's Popular Menu and Exclusive Deals sections for any other duplicate images and fix those too.

## 2. Add a sticky cart bar on mobile

When the cart has 1+ items, show a persistent bar fixed to the bottom of the viewport on mobile (below `~768px` width) displaying: item count, total price, and a "View Cart" button. This should stay visible while the user scrolls through the menu, so checkout is always one tap away. Make sure it doesn't overlap or block the "+ Add" buttons on product cards at the bottom of the screen.

## 3. Convert the category filter into a horizontally scrollable chip/pill row on mobile

On mobile, the category list ("All Menu, Deals, Pizza, Burgers, Chicken Broast & Roast, Chicken Pulao, Rolls & Shawarma, Sandwiches, Sides & Extras, Delicious Bar & Drinks, Sweets & Ice Cream, Party & Bulk Orders") should render as a single horizontally scrollable row of pill-shaped buttons, not a stacked vertical list. The currently active category should be visually distinct (filled background or underline). Add subtle scroll affordance (e.g. a fade/gradient edge) so users know it's scrollable.

## 4. Increase tap target size for "+ Add" buttons on mobile

Ensure all "+ Add" buttons on product cards have a minimum touch target height of ~44px on mobile, with adequate padding, so they're easy to tap accurately on a phone.

## 5. Check hero heading rendering at mobile widths

Verify the homepage hero heading ("Delicious Foods") renders correctly at common mobile widths (start with 375px), with no awkward line-wrapping or unintended extra spacing between words. Confirm font-size scales down appropriately on small screens so nothing overflows or gets cut off.

## 6. Use a multi-column grid for menu items on desktop

On desktop/wide viewports (roughly 1024px+), the `/menu` page should render items in a 3-4 column grid instead of a narrower layout carried over from mobile. Use responsive breakpoints so it degrades gracefully: e.g. 1 column on small mobile, 2 on larger mobile/tablet, 3-4 on desktop.

## 7. Add a sticky sidebar category filter on desktop

On desktop, replace or supplement the horizontal category list with a left-side sticky sidebar showing all categories, remaining visible as the user scrolls through menu items. Highlight the active category. Keep the horizontal/chip version for mobile as described in item 3.

## 8. Add hover states to product cards on desktop

On non-touch/desktop viewports, add a subtle hover effect to product cards — e.g. a slight lift (translateY) and soft shadow increase, plus a hover state on the "+ Add" button (color shift or scale). Skip hover effects on touch devices to avoid sticky-hover issues on mobile.

## 9. Add a search bar to the `/menu` page

Add a search input at the top of `/menu` that filters items by name in real time as the user types, searching across all categories regardless of which category filter is currently active. Show a clear "no results" state if nothing matches. This should work alongside the existing category filter (search + category filter can combine, or search can override category selection — pick whichever is simpler to implement correctly).

## 10. Replace the plain-text loading state with skeleton loaders

Currently `/menu` shows the text "Loading our delicious offerings..." while data loads. Replace this with skeleton placeholder cards (grey animated blocks in the shape/size of actual product cards) matching the current grid layout, so the loading state feels polished rather than a bare loading message.

## 11. Add "Popular" or "Bestseller" badges

Add a small badge (e.g. a colored corner ribbon or tag reading "Popular") to a curated set of 6-8 items across categories — reuse the same items currently featured in the homepage's "Popular Menu" section. This should render on both the homepage and `/menu` page product cards for those specific items, to help first-time visitors navigate a menu this large.

---

## General notes

- Keep all pricing, menu item data, and category structure exactly as-is — this is a UI/UX pass only.
- Test both the sticky mobile cart bar and the desktop sidebar filter to make sure they don't visually conflict with the existing header/nav.
- After implementing, do a pass at common breakpoints (375px, 768px, 1024px, 1440px) to confirm nothing breaks or overlaps.
