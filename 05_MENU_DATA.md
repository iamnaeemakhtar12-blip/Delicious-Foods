# Delicious Foods Wah Cantt — Menu Data Specification

> # MENU SNAPSHOT — VERIFY BEFORE PRODUCTION
> This catalog is transcribed only from information supplied in the project brief. It is not proof of current price, availability, serving size, ingredients, or deal validity. No pizza item prices or complete cold-drink size/prices were supplied. Do not make an item orderable until operations confirms it.

## 1. Data conventions
- Currency: PKR; display as `Rs. 500`.
- A slash-separated printed item is retained as written where product structure is unclear.
- “Variant candidate” means the items may be normalized into one product after confirmation.
- Descriptions are intentionally omitted rather than invented.
- All records: `verification.status = needs-confirmation`, `source = printed-menu`.

## 2. Deals
| ID | Deal | Contents | Snapshot price |
|---|---|---|---:|
| pizza-deal-1 | Pizza Deal 1 | 3 Small Pizza; 1 Liter Drink | Rs. 1,800 |
| pizza-deal-2 | Pizza Deal 2 | 3 Medium Pizza; 1.5 Liter Drink | Rs. 3,300 |
| pizza-deal-3 | Pizza Deal 3 | 3 Large Pizza; 2 Liter Drink | Rs. 4,500 |
| pizza-deal-4 | Pizza Deal 4 | 1 Large Pizza; 1 Medium Pizza; 1 Small Pizza; 1.5 Liter Drink | Rs. 3,200 |
| krispo-deal-1 | Krispo Deal 1 | 1 Zinger Burger; French Fries; 350 ml Drink | Rs. 800 |
| krispo-deal-2 | Krispo Deal 2 | 1 Chicken Burger; French Fries; 350 ml Drink | Rs. 750 |
| krispo-deal-3 | Krispo Deal 3 | 2 Zinger Burgers; 6 Hot Wings; French Fries; 1 Liter Drink | Rs. 1,700 |
| krispo-deal-4 | Krispo Deal 4 | 4 Zinger Burgers; 12 Pieces Hotshots; French Fries; 1.5 Liter Drink | Rs. 2,800 |

**Confirm:** pizza flavor-choice rules, drink brand/choice, fries quantity, deal availability, substitutions, serving claims, and whether “Hotshots” spelling should be “Hot Shots.”

## 3. Pizza
### Sizes shown
- Small — **8 in**
- Medium — **11 in**
- Large — **13 in**

### Products (prices not supplied)
1. Star Pizza
2. 4 Flavour Pizza
3. Extreme Loaded Pizza
4. Cheese Stuffed Pizza
5. Kabab Stuffed Pizza
6. Crown Crust Pizza
7. Kabab Doner Pizza
8. Delicious Special Pizza
9. Behari Kabab Pizza
10. Malai Boti Pizza
11. Chicken Tikka Pizza
12. Fajita Pizza
13. Vegetable Pizza
14. Hot N Spicy Pizza

### Extra topping snapshot
| Size | Price |
|---|---:|
| Small | Rs. 100 |
| Medium | Rs. 150 |
| Large | Rs. 200 |

**Blocking confirmation:** price by product × size, ingredients/flavor descriptions, stuffed/crust rules, topping compatibility, deal flavor eligibility.

## 4. Burgers, shawarma and paratha rolls
| Product | Snapshot price | Modeling note |
|---|---:|---|
| Zinger Burger | Rs. 500 | Variant candidate |
| Zinger Burger with Cheese | Rs. 550 | Variant candidate |
| Zinger Burger with Fries | Rs. 600 | Variant candidate; fries may be bundle, not variant |
| Chicken Burger | Rs. 450 | Variant candidate |
| Chicken Burger with Cheese | Rs. 500 | Variant candidate |
| Chicken Burger with Fries | Rs. 550 | Variant candidate; fries may be bundle |
| Egg Shami Burger | Rs. 220 | Standalone |
| Chicken Shawarma / Roll Paratha | Rs. 220 | Clarify whether two products or one choice |
| Zinger Shawarma / Roll Paratha | Rs. 500 | Clarify whether two products or one choice |

## 5. Chicken: broast, roast and snacks
| Product/variant | Snapshot price | Note |
|---|---:|---|
| Chicken Broast — Piece | Rs. 250 | Confirm piece definition |
| Chicken Broast — Half | Rs. 950 | Variant candidate |
| Chicken Broast — Full | Rs. 1,800 | Variant candidate |
| Chicken Roast — Half | Rs. 750 | Variant candidate |
| Chicken Roast — Full | Rs. 1,450 | Variant candidate |
| Hot Wings | Rs. 400 | Quantity not supplied here |
| Hot Shots | Rs. 400 / Rs. 750 | Quantity-to-price mapping missing |
| Nuggets | Rs. 350 | Quantity not supplied here |

## 6. Pulao
| Product | Snapshot price |
|---|---:|
| Chicken Pulao Single | Rs. 600 |
| Chicken Pulao Single with Choice Piece | Rs. 610 |
| Chicken Pulao Single with Shami Kabab | Rs. 520 |
| Chicken Pulao Single with Choice Piece + Shami Kabab | Rs. 530 |
| Chicken Pulao Special | Rs. 750 |
| Chicken Pulao Special with Choice Piece | Rs. 770 |
| Chicken Pulao Special with Shami Kabab | Rs. 670 |
| Chicken Pulao Special with Choice Piece + Shami Kabab | Rs. 690 |
| Pulao Kabab | Rs. 430 |
| Simple Pulao | Rs. 330 |
| Shami Kabab per dozen | Rs. 660 |
| Chicken Piece 1/8 | Rs. 200 |

Printed note: **Box Charges Rs. 30/-**

**High-priority reconciliation:** some “with Shami Kabab” combinations are priced below corresponding plain variants. Preserve the transcription, but require owner verification before display/order. Confirm what “single,” “special,” “choice piece,” and included quantities mean. Decide whether box charge applies by fulfillment/item and model as a fee, not a universal add-on.

## 7. Rolls and sandwiches
| Product | Snapshot price |
|---|---:|
| Behari Spin Roll | Rs. 500 |
| Chicken Spin Roll | Rs. 500 |
| Kabab Cheesy Roll | Rs. 800 |
| Chicken Cheesy Roll | Rs. 800 |
| Mexican Cheese Sandwich | Rs. 700 |
| Euro Sandwich | Rs. 700 |

## 8. Sides and extras
| Product/add-on | Snapshot price | Type candidate |
|---|---:|---|
| French Fries | Rs. 250 | Product |
| Loaded Fries | Rs. 650 | Product |
| Extra Raita | Rs. 30 | Add-on; compatibility required |
| Extra Salad | Rs. 30 | Add-on; compatibility required |
| Ketchup | Rs. 10 | Add-on; confirm unit |
| Mayo Dip | Rs. 70 | Add-on |

## 9. Delicious Bar
### Mocktails
| Product | Snapshot price |
|---|---:|
| Mint Margarita | Rs. 250 |
| Peach Margarita | Rs. 300 |
| Pinacolada | Rs. 450 |
| Blue Lagoon | Rs. 450 |
| Bluecolada | Rs. 450 |

### Mojito
| Product | Snapshot price |
|---|---:|
| Passion Fruit Mojito | Rs. 499 |
| Raspberry Mojito | Rs. 499 |
| Strawberry Mojito | Rs. 499 |
| Blueberry Mojito | Rs. 499 |

### Smoothies
| Product | Snapshot price |
|---|---:|
| Strawberry Smoothie | Rs. 550 |
| Blueberry Smoothie | Rs. 550 |
| Mango Smoothie | Rs. 550 |

### Special shakes
| Product | Snapshot price |
|---|---:|
| Kit Kat Shake | Rs. 550 |
| Oreo Shake | Rs. 350 |
| Ice Cream Shake | Rs. 400 |
| Fresh Milk Shake | Rs. 250 |

### Ice tea
| Product | Snapshot price |
|---|---:|
| Peach Ice Tea | Rs. 350 |
| Strawberry Ice Tea | Rs. 350 |
| Lemon Ice Tea | Rs. 350 |

Confirm whether “Strawberry” should be named “Strawberry Ice Tea.”

### Cold coffee
| Product | Snapshot price |
|---|---:|
| Vanilla Cold Coffee | Rs. 490 |
| Caramel Cold Coffee | Rs. 490 |
| Chocolate Cold Coffee | Rs. 490 |

### Fresh
| Product | Snapshot price |
|---|---:|
| Fresh Lassi | Rs. 150 |
| Fresh Lime | Rs. 200 |

### Winter
| Product | Snapshot price |
|---|---:|
| Green Tea | Rs. 80 |
| Tea | Rs. 120 |
| Milk Coffee | Rs. 200 |

### Cold drinks and water
The printed menu reportedly includes multiple cold-drink/mineral-water sizes, but names, sizes, and prices were not supplied in this brief. Create no records until transcribed from the source and confirmed.

## 10. Sweets
| Product | Snapshot price |
|---|---:|
| Zarda | Rs. 200 |
| Kheer Single Person | Rs. 200 |
| Kheer Box Three Person | Rs. 550 |

Confirm serving description and naming grammar.

## 11. Salads / fruit
| Product | Snapshot price |
|---|---:|
| Ice Cream Fruit Chaat | Rs. 550 |
| Russian Salad | Rs. 450 |
| Mix Fruit Salad | Rs. 450 |

## 12. Ice cream
| Variant | Snapshot price |
|---|---:|
| One Scoop | Rs. 140 |
| Two Scoop | Rs. 270 |
| Three Scoop | Rs. 400 |
| Six Scoop Family Pack | Rs. 800 |

Flavors shown: **Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla**.

Confirm whether mixed flavors are allowed, flavor availability, serving/container, and whether family pack is six selectable scoops.

## 13. Category mapping
```text
pizza: all named pizzas + extra topping group
burgers: zinger/chicken/egg shami burgers
chicken: broast, roast, wings, hot shots, nuggets
pulao: all pulao/kabab/chicken-piece entries
rolls-shawarma: shawarma/paratha, spin rolls, cheesy rolls
sandwiches: Mexican Cheese, Euro
sides: fries, loaded fries, confirmed extras
drinks: all Delicious Bar groups + confirmed cold drinks/water
desserts: sweets, salads/fruit, ice cream
```
Implementation typo note: use category ID `sides`, not the explanatory `aides/sides` line above.

## 14. Suggested machine-readable example
```ts
{
  id: "product-zinger-burger",
  slug: "zinger-burger",
  name: { en: "Zinger Burger" },
  categoryIds: ["burgers"],
  basePrice: { amount: 500, currency: "PKR" },
  images: [{
    src: "/images/placeholders/burgers/zinger-burger.webp",
    alt: { en: "Placeholder image; replace with an approved Delicious Foods Zinger Burger photo" },
    width: 1200,
    height: 900,
    placeholder: true
  }],
  available: false,
  featured: true,
  sortOrder: 10,
  verification: {
    status: "needs-confirmation",
    source: "printed-menu",
    notes: "MENU SNAPSHOT — VERIFY BEFORE PRODUCTION"
  }
}
```
`available: false` is deliberate until owner confirmation; staging may render snapshot items with a non-orderable preview state.

## 15. Pre-launch menu sign-off checklist
- [ ] Every item name reconciled with latest source menu.
- [ ] Every orderable item has current price and availability.
- [ ] Pizza price matrix complete.
- [ ] Pulao anomalies signed off.
- [ ] Hot Wings/Hot Shots/Nuggets quantities complete.
- [ ] Cold drink/water entries complete.
- [ ] Deal choice and substitution rules complete.
- [ ] Add-on compatibility mapped.
- [ ] Box charge logic defined.
- [ ] Product imagery correctly represents portion and item.
- [ ] English/Urdu labels approved if bilingual.
- [ ] Restaurant manager signs dated export used for launch.
