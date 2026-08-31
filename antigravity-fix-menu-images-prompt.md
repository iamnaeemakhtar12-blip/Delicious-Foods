# Prompt for Antigravity: Fix Duplicate Images Across Menu Items

Copy everything below into Antigravity as one prompt.

---

## Bug

On `/menu`, every product within the same category is currently showing the **same image**. For example, all Pizza items share one photo, all Burger items share one photo, all Chicken Pulao items share one photo, etc. Each menu item needs its **own distinct image**, not a shared category-level image.

## Root cause to check first

Look at how images are assigned to menu items in the data layer / component (likely wherever the menu item objects were generated from the last prompt). It's likely one of these:
1. A single `categoryImage` field is being used to render all cards in a category instead of a per-item `image` field.
2. Each item does have its own `image` field, but they were all populated with the same placeholder URL by mistake during the last integration.
3. The image is being pulled dynamically by category name only (e.g. a lookup keyed on `category`) instead of by item name/slug.

Fix whichever of these is the actual cause so that **every item's image comes from its own unique field**, keyed by the item's slug/id — not by category.

## What to do

1. Audit every menu item object and confirm each has its own `image` field (not inherited from a shared category constant).
2. Since real food photography isn't available yet for these items, assign a **distinct stock photo per item** (not per category) using relevant, specific Unsplash photos — matched to what the item actually is (e.g. a Zinger burger photo for Zinger Burger, a different burger photo for Chicken Burger, a plain-cheese pizza photo for Cheese Stuffed Pizza vs. a pepperoni-style photo for Behari Kabab Pizza, etc.) so items visually look distinct from each other even though they're stock images.
3. Where multiple size/variant items are basically the same physical dish (e.g. "Zinger Burger", "Zinger Burger with Cheese", "Zinger Burger with Fries"), it's fine for those close variants to share one image — but different dishes within the same category (e.g. Zinger Burger vs. Chicken Burger vs. Egg Shami Burger) must NOT share an image.
4. Add a simple fallback (e.g. a generic "food placeholder" image) for any item where no specific image could be sourced, so nothing renders broken.
5. Structure the `image` field so each one can be swapped for a real photo later by just replacing a URL — no logic changes needed once real photography is available.
6. After fixing, do a self-check: list every item where the current image URL is identical to another item's URL in the same category that is NOT a close variant of the same dish (per rule 3), and resolve any remaining duplicates.

## Do not change

Layout, styling, cart logic, pricing, or category structure — this is strictly an image-assignment fix.
