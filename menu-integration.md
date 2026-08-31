# Replace Mock Menu with Real Delicious Foods Menu


## Task

Replace all mock/placeholder menu, deals, and pricing data in this project with the real menu data for **Delicious Foods, Wah Cantt** provided below. Do not change the site's layout, design, styling, cart/checkout logic, or component structure — this is a **data/content replacement only**.

## What to do

1. **Remove all existing mock items** in the "Popular Menu" section, the "Exclusive Deals" section, and any hardcoded sample data used for menu items, deals, or category filters.
2. **Replace them with the real data below**, keeping the existing data shape/schema (name, price, category, image, etc.) used in the current codebase — just populate it with real values instead of mock ones.
3. **Update the category filter list** so it matches the categories actually present in the real data (see categories below). Remove any category that has no items, and add "Deig / Bulk Orders" as a new category (see note at the bottom).
4. **For pizzas**, which have Small/Medium/Large pricing, implement a size selector on the item card (S/M/L) that updates the price shown and the price added to cart, rather than three separate menu entries. Use the size-price map provided.
5. **For Chicken Pulao items with "Choice Piece" and "without Kabab" variants**, treat these as separate menu entries (not variants), exactly as listed below, since they're priced and named individually on the real menu.
6. **Images**: There are no real food photos available yet for these items. Keep using relevant existing stock/placeholder images matched by category (e.g. reuse the current pizza stock photo for all pizza items, burger stock photo for burger items, etc.) so nothing breaks visually. Structure each item's `image` field so it can be swapped for a real photo later without touching other fields.
7. **Deals section**: Replace the current 4 generic mock deals with the real "Delicious Krispo Deals" and "Pizza Deals" listed below (8 deals total). If the design only supports a limited number of deal cards, prioritize the 4 Krispo deals first and note that pizza deals were left out due to layout limits.
8. Keep the restaurant's existing contact info as-is (already correct in the current codebase): phone `0321-8807790`, address `Plaza No. A-50, Main Shah Wali Road, Wah Cantt`.

---

## Real Menu Data

### Category: Chicken Pulao
| Item | Price (Rs) |
|---|---|
| Chicken Pulao Single | 600 |
| Chicken Pulao Single with Choice Piece | 610 |
| Chicken Pulao Single without Kabab | 520 |
| Chicken Pulao Single without Kabab (Choice Piece) | 530 |
| Chicken Pulao Special | 750 |
| Chicken Pulao Special (Choice Piece) | 770 |
| Chicken Pulao Special without Kabab | 670 |
| Chicken Pulao Special without Kabab (Choice Piece) | 690 |
| Pulao Kabab | 430 |
| Simple Pulao | 330 |
| Shami Kabab (Per Dozen) | 660 |
| Chicken Piece 1/8 | 200 |

Note: Add a small note on Chicken Pulao items — "Box Charges Rs 30" applies per order.

### Category: Chicken Broast & Roast
| Item | Price (Rs) |
|---|---|
| Chicken Roast (Full) | 1450 |
| Chicken Roast (Half) | 750 |
| Chicken Broast (Piece) | 250 |
| Chicken Broast (Half) | 950 |
| Chicken Broast (Full) | 1800 |

### Category: Burgers
| Item | Price (Rs) |
|---|---|
| Zinger Burger | 500 |
| Zinger Burger (with Cheese) | 550 |
| Zinger Burger (with Fries) | 600 |
| Chicken Burger | 450 |
| Chicken Burger (with Cheese) | 500 |
| Chicken Burger (with Fries) | 550 |
| Egg Shami Burger (with Shami Kabab) | 220 |

### Category: Rolls & Shawarma
| Item | Price (Rs) |
|---|---|
| Chicken Shawarma / Roll Paratha | 220 |
| Zinger Shawarma / Roll Paratha | 500 |
| Behari Spin Roll (3 pcs) | 500 |
| Chicken Spin Roll (3 pcs) | 500 |
| Kabab Cheesy Roll | 800 |
| Chicken Cheesy Roll | 800 |

### Category: Sandwiches
| Item | Price (Rs) |
|---|---|
| Mexican Cheese Sandwich | 700 |
| Euro Sandwich | 700 |

### Category: Sides & Extras
| Item | Price (Rs) |
|---|---|
| French Fries | 250 |
| Hot Wings (6 pcs) | 400 |
| Hot Shots (6 pcs) | 400 |
| Hot Shots (12 pcs) | 750 |
| Nuggets (6 pcs) | 350 |
| Loaded Fries | 650 |
| Extra Raita | 30 |
| Extra Salad | 30 |
| Ketchup | 10 |
| Mayo Dip | 70 |

### Category: Pizza (with size pricing S8" / M11" / L13")
| Item | S | M | L |
|---|---|---|---|
| Star Pizza | — | — | 1500 |
| 4 Flavour Pizza | — | — | 1800 |
| Extreme Loaded Pizza | — | 1500 | 2000 |
| Cheese Stuffed Pizza | — | 1500 | 1800 |
| Kabab Stuffed Pizza | — | 1500 | 1800 |
| Crown Crust Pizza | — | 1500 | 1800 |
| Kabab Doner Pizza | — | 1500 | 1800 |
| Delicious Special Pizza | 800 | 1300 | 1800 |
| Behari Kabab Pizza | 800 | 1300 | 1800 |
| Malai Boti Pizza | 800 | 1300 | 1800 |
| Chicken Tikka Pizza | 600 | 1100 | 1500 |
| Fajita Pizza | 600 | 1100 | 1500 |
| Vegetable Pizza | 600 | 1100 | 1500 |
| Hot N Spicy Pizza | 600 | 1100 | 1500 |

Extra Toppings: S = Rs 100, M = Rs 150, L = Rs 200 (add as an optional add-on if the item schema supports add-ons; otherwise note it in the item description).

### Category: Delicious Bar & Drinks

**Mocktails**
| Item | Price (Rs) |
|---|---|
| Mint Margarita | 250 |
| Peach Margarita | 300 |
| Pinacolada | 450 |
| Blue Lagoon | 450 |
| Bluecolada | 450 |

**Mojito**
| Item | Price (Rs) |
|---|---|
| Passion Fruit Mojito | 499 |
| Raspberry Mojito | 499 |
| Strawberry Mojito | 499 |
| Blueberry Mojito | 499 |

**Smoothies**
| Item | Price (Rs) |
|---|---|
| Strawberry Smoothie | 550 |
| Blueberry Smoothie | 550 |
| Mango Smoothie | 550 |

**Special Shakes**
| Item | Price (Rs) |
|---|---|
| Kit Kat Shake | 550 |
| Oreo Shake | 350 |
| Ice Cream Shake | 400 |
| Fresh Milk Shake (Mango/Apple/Banana) | 250 |

**Ice Tea**
| Item | Price (Rs) |
|---|---|
| Peach Ice Tea | 350 |
| Strawberry Ice Tea | 350 |
| Lemon Ice Tea | 350 |

**Cold Coffees**
| Item | Price (Rs) |
|---|---|
| Vanilla Cold Coffee | 490 |
| Caramel Cold Coffee | 490 |
| Chocolate Cold Coffee | 490 |

**Other Drinks**
| Item | Price (Rs) |
|---|---|
| Fresh Lassi | 150 |
| Fresh Lime | 200 |
| Green Tea | 80 |
| Tea | 120 |
| Milk Coffee | 200 |

**Cold Drinks / Water** (no listed price in source images — mark as "Price on request" or omit until confirmed with the restaurant): Cold Drink Regular Tin 250ml, Cold Drink 1000ml, Cold Drink 1500ml, Cold Drink 2000ml, Mineral Water 500ml, Mineral Water 1500ml.

### Category: Sweets & Ice Cream
| Item | Price (Rs) |
|---|---|
| Zarda | 200 |
| Kheer (Single Person) | 200 |
| Kheer Box (Three Person) | 550 |
| Ice Cream Fruit Chaat | 550 |
| Russian Salad | 450 |
| Mix Fruit Salad | 450 |
| Ice Cream (One Scoop) | 140 |
| Ice Cream (Two Scoop) | 270 |
| Ice Cream (Three Scoop) | 400 |
| Ice Cream (Six Scoop Family Pack) | 800 |

Ice cream flavors available (add as a note or flavor-selector if schema supports it): Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla.

---

## Deals Section (replace current mock deals)

**Delicious Krispo Deals**
| Deal | Price (Rs) | Includes |
|---|---|---|
| Deal 1 | 800 | 1 Zinger Burger, French Fries, 350ml Drink |
| Deal 2 | 750 | 1 Chicken Burger, French Fries, 350ml Drink |
| Deal 3 | 1700 | 2 Zinger Burgers, 6 pcs Hot Wings, French Fries, 1L Drink |
| Deal 4 | 2800 | 4 Zinger Burgers, 12 pcs Hot Shots, French Fries, 1.5L Drink |

**Pizza Deals**
| Deal | Price (Rs) | Includes |
|---|---|---|
| Deal 1 | 1800 | 3 Small Pizzas, 1L Drink |
| Deal 2 | 3300 | 3 Medium Pizzas, 1.5L Drink |
| Deal 3 | 4500 | 3 Large Pizzas, 2L Drink |
| Deal 4 | 3200 | 1 Large + 1 Medium + 1 Small Pizza, 1.5L Drink |

---

## Optional new category: Deig / Bulk & Party Orders

This is a catering menu (10kg rice pots) that doesn't fit the existing dine-in categories. If adding a new category/tab is straightforward within the current design, add a "Party & Bulk Orders" category with these items. If it would require significant structural changes, skip this for now and flag it back to me instead of forcing it in.

| Item | Price (Rs) |
|---|---|
| Sada Pulao Deig (10kg Rice) | 9500 |
| Chana Pulao Deig (10kg Rice, 2kg Chana) | 10500 |
| Sabzi Pulao Deig (10kg Rice) | 10500 |
| Chicken Pulao Deig (10kg Rice, 6 Chicken) | 16000 |
| Chicken Biryani Deig (10kg Rice, 10 Chicken) | 19500 |
| Chicken Qorma Deig (10 Chicken) | 16000 |
| Zarda Chawal Deig (10kg Rice, Raisins, Sweet Marmalade) | 14000 |

---

## Final checklist for Antigravity

- [ ] All mock menu items removed
- [ ] Real menu items added under correct categories
- [ ] Pizza size selector implemented (S/M/L pricing)
- [ ] Deals section replaced with the 8 real deals (or 4 Krispo deals minimum)
- [ ] Category filter bar updated to match real categories
- [ ] No changes to layout, styling, or cart logic — data only
- [ ] Confirm whether "Deig / Bulk Orders" category was added or flagged as skipped
