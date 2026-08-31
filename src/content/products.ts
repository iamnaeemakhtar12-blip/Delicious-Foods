import { Product } from "@/types";

export const products: Product[] = [
  // =========================================================================
  // CATEGORY: PIZZA
  // =========================================================================
  {
    id: "pizza-star",
    slug: "pizza-star",
    name: { en: "Star Pizza" },
    description: { en: "Signature star-shaped crust pizza loaded with premium toppings. Extra toppings: L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&auto=format&fit=crop", alt: { en: "Star Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "L", label: "Large 13\"", price: { amount: 1500, currency: "PKR" } }
    ],
    available: true,
    featured: true,
    sortOrder: 1,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-4-flavour",
    slug: "pizza-4-flavour",
    name: { en: "4 Flavour Pizza" },
    description: { en: "Four unique flavor combinations on a single large pizza. Extra toppings: L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80&auto=format&fit=crop", alt: { en: "4 Flavour Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1800, currency: "PKR" },
    pizzaSizes: [
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: true,
    sortOrder: 2,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-extreme-loaded",
    slug: "pizza-extreme-loaded",
    name: { en: "Extreme Loaded Pizza" },
    description: { en: "Extremely loaded with extra chicken, cheese, and vegetables. Extra toppings: M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80&auto=format&fit=crop", alt: { en: "Extreme Loaded Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "M", label: "Medium 11\"", price: { amount: 1500, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 2000, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 3,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-cheese-stuffed",
    slug: "pizza-cheese-stuffed",
    name: { en: "Cheese Stuffed Pizza" },
    description: { en: "Rich mozzarella stuffed in every bite of the crust. Extra toppings: M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80&auto=format&fit=crop", alt: { en: "Cheese Stuffed Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "M", label: "Medium 11\"", price: { amount: 1500, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 4,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-kabab-stuffed",
    slug: "pizza-kabab-stuffed",
    name: { en: "Kabab Stuffed Pizza" },
    description: { en: "Delicious kabab stuffed directly into the crust edges. Extra toppings: M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80&auto=format&fit=crop", alt: { en: "Kabab Stuffed Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "M", label: "Medium 11\"", price: { amount: 1500, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 5,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-crown-crust",
    slug: "pizza-crown-crust",
    name: { en: "Crown Crust Pizza" },
    description: { en: "Crown-shaped stuffed crust filled with chicken and cheese. Extra toppings: M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&q=80&auto=format&fit=crop", alt: { en: "Crown Crust Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "M", label: "Medium 11\"", price: { amount: 1500, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: true,
    sortOrder: 6,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-kabab-doner",
    slug: "pizza-kabab-doner",
    name: { en: "Kabab Doner Pizza" },
    description: { en: "Turkish doner style kabab toppings with special sauces. Extra toppings: M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80&auto=format&fit=crop", alt: { en: "Kabab Doner Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1500, currency: "PKR" },
    pizzaSizes: [
      { id: "M", label: "Medium 11\"", price: { amount: 1500, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 7,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-delicious-special",
    slug: "pizza-delicious-special",
    name: { en: "Delicious Special Pizza" },
    description: { en: "Chef's special recipe with loaded chicken, olives, mushrooms, and cheese. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop", alt: { en: "Delicious Special Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 800, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1300, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: true,
    sortOrder: 8,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-behari-kabab",
    slug: "pizza-behari-kabab",
    name: { en: "Behari Kabab Pizza" },
    description: { en: "Spicy Behari kabab chunks paired with red onion and mozzarella. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&q=80&auto=format&fit=crop", alt: { en: "Behari Kabab Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 800, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1300, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 9,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-malai-boti",
    slug: "pizza-malai-boti",
    name: { en: "Malai Boti Pizza" },
    description: { en: "Creamy Malai Boti chicken pieces with onions and capsicum. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80&auto=format&fit=crop", alt: { en: "Malai Boti Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 800, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1300, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1800, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 10,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-chicken-tikka",
    slug: "pizza-chicken-tikka",
    name: { en: "Chicken Tikka Pizza" },
    description: { en: "Traditional tikka chicken topping with herbs and spices. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Tikka Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 600, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1100, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1500, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 11,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-fajita",
    slug: "pizza-fajita",
    name: { en: "Fajita Pizza" },
    description: { en: "Fajita marinated chicken with fresh green bell peppers and onions. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80&auto=format&fit=crop", alt: { en: "Fajita Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 600, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1100, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1500, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 12,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-vegetable",
    slug: "pizza-vegetable",
    name: { en: "Vegetable Pizza" },
    description: { en: "Fresh mushrooms, black olives, bell peppers, tomatoes, and onions. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=800&q=80&auto=format&fit=crop", alt: { en: "Vegetable Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 600, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1100, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1500, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 13,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-hot-n-spicy",
    slug: "pizza-hot-n-spicy",
    name: { en: "Hot N Spicy Pizza" },
    description: { en: "Spicy chicken chunks, jalapeños, onions, and spicy tomato sauce. Extra toppings: S = Rs 100, M = Rs 150, L = Rs 200." },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80&auto=format&fit=crop", alt: { en: "Hot N Spicy Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    pizzaSizes: [
      { id: "S", label: "Small 8\"", price: { amount: 600, currency: "PKR" } },
      { id: "M", label: "Medium 11\"", price: { amount: 1100, currency: "PKR" } },
      { id: "L", label: "Large 13\"", price: { amount: 1500, currency: "PKR" } }
    ],
    available: true,
    featured: false,
    sortOrder: 14,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: BURGERS
  // =========================================================================
  {
    id: "burger-zinger",
    slug: "zinger-burger",
    name: { en: "Zinger Burger" },
    description: { en: "Crispy fried chicken fillet in a toasted bun with mayo and lettuce." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", alt: { en: "Zinger Burger" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 20,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-zinger-cheese",
    slug: "zinger-burger-with-cheese",
    name: { en: "Zinger Burger (with Cheese)" },
    description: { en: "Crispy zinger fillet topped with a melted cheese slice." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", alt: { en: "Zinger Burger with Cheese" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 21,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-zinger-fries",
    slug: "zinger-burger-with-fries",
    name: { en: "Zinger Burger (with Fries)" },
    description: { en: "Crispy Zinger Burger served alongside a generous portion of hot french fries." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", alt: { en: "Zinger Burger with Fries" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 22,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-chicken",
    slug: "chicken-burger",
    name: { en: "Chicken Burger" },
    description: { en: "Classic juicy chicken patty burger with fresh sauce and lettuce." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Burger" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 23,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-chicken-cheese",
    slug: "chicken-burger-with-cheese",
    name: { en: "Chicken Burger (with Cheese)" },
    description: { en: "Classic chicken patty burger with a slice of rich cheddar cheese." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Burger with Cheese" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 24,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-chicken-fries",
    slug: "chicken-burger-with-fries",
    name: { en: "Chicken Burger (with Fries)" },
    description: { en: "Classic chicken burger served with crispy french fries." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Burger with Fries" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 25,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-egg-shami",
    slug: "egg-shami-burger",
    name: { en: "Egg Shami Burger (with Shami Kabab)" },
    description: { en: "Authentic street style Shami kabab burger topped with fried egg and mint chutney." },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80&auto=format&fit=crop", alt: { en: "Egg Shami Burger" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 220, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 26,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: CHICKEN BROAST & ROAST
  // =========================================================================
  {
    id: "chicken-roast-full",
    slug: "chicken-roast-full",
    name: { en: "Chicken Roast (Full)" },
    description: { en: "Whole marinated roasted chicken prepared in aromatic spices." },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Roast Full" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1450, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 30,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "chicken-roast-half",
    slug: "chicken-roast-half",
    name: { en: "Chicken Roast (Half)" },
    description: { en: "Half portion of marinated roasted chicken." },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Roast Half" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 750, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 31,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "chicken-broast-piece",
    slug: "chicken-broast-piece",
    name: { en: "Chicken Broast (Piece)" },
    description: { en: "Single piece of deep fried crispy golden chicken broast." },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Broast Piece" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 32,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "chicken-broast-half",
    slug: "chicken-broast-half",
    name: { en: "Chicken Broast (Half)" },
    description: { en: "Half chicken broast served crisp and hot." },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Broast Half" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 950, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 33,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "chicken-broast-full",
    slug: "chicken-broast-full",
    name: { en: "Chicken Broast (Full)" },
    description: { en: "Full family size chicken broast platter fried to golden perfection." },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Broast Full" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 1800, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 34,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: CHICKEN PULAO
  // Note: Box Charges Rs 30 applies per order.
  // =========================================================================
  {
    id: "pulao-chicken-single",
    slug: "chicken-pulao-single",
    name: { en: "Chicken Pulao Single" },
    description: { en: "Aromatic basmati rice cooked with chicken piece and kabab. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Single" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 40,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-single-choice",
    slug: "chicken-pulao-single-with-choice-piece",
    name: { en: "Chicken Pulao Single with Choice Piece" },
    description: { en: "Chicken Pulao Single served with your custom choice chicken piece. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Single Choice Piece" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 610, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 41,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-single-nokabab",
    slug: "chicken-pulao-single-without-kabab",
    name: { en: "Chicken Pulao Single without Kabab" },
    description: { en: "Chicken Pulao single serving served without kabab. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Single Without Kabab" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 520, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 42,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-single-nokabab-choice",
    slug: "chicken-pulao-single-without-kabab-choice-piece",
    name: { en: "Chicken Pulao Single without Kabab (Choice Piece)" },
    description: { en: "Chicken Pulao single serving without kabab, with choice piece. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Single Without Kabab Choice Piece" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 530, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 43,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-special",
    slug: "chicken-pulao-special",
    name: { en: "Chicken Pulao Special" },
    description: { en: "Special double chicken portion pulao with extra rice and kabab. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Special" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 750, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 44,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-special-choice",
    slug: "chicken-pulao-special-choice-piece",
    name: { en: "Chicken Pulao Special (Choice Piece)" },
    description: { en: "Special Chicken Pulao with your choice of chicken pieces. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Special Choice Piece" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 770, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 45,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-special-nokabab",
    slug: "chicken-pulao-special-without-kabab",
    name: { en: "Chicken Pulao Special without Kabab" },
    description: { en: "Special portion Chicken Pulao without kabab. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Special Without Kabab" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 670, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 46,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-special-nokabab-choice",
    slug: "chicken-pulao-special-without-kabab-choice-piece",
    name: { en: "Chicken Pulao Special without Kabab (Choice Piece)" },
    description: { en: "Special portion Chicken Pulao without kabab, with choice piece. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Special Without Kabab Choice" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 690, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 47,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-kabab",
    slug: "pulao-kabab",
    name: { en: "Pulao Kabab" },
    description: { en: "Flavored pulao rice served with Shami kabab. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80&auto=format&fit=crop", alt: { en: "Pulao Kabab" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 430, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 48,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-simple",
    slug: "simple-pulao",
    name: { en: "Simple Pulao" },
    description: { en: "Plain seasoned basmati pulao rice. Box Charges Rs 30 applies per order." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80&auto=format&fit=crop", alt: { en: "Simple Pulao" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 330, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 49,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-shami-dozen",
    slug: "shami-kabab-per-dozen",
    name: { en: "Shami Kabab (Per Dozen)" },
    description: { en: "12 pieces of freshly prepared authentic chicken Shami Kabab." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop", alt: { en: "Shami Kabab Per Dozen" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 660, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 50,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-chicken-piece",
    slug: "chicken-piece-1-8",
    name: { en: "Chicken Piece 1/8" },
    description: { en: "Single seasoned chicken piece (1/8)." },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Piece 1/8" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 51,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: ROLLS & SHAWARMA
  // =========================================================================
  {
    id: "shawarma-chicken",
    slug: "chicken-shawarma-roll-paratha",
    name: { en: "Chicken Shawarma / Roll Paratha" },
    description: { en: "Tender chicken wrapped in fresh pita/paratha with signature garlic sauce." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Shawarma" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 220, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 60,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "shawarma-zinger",
    slug: "zinger-shawarma-roll-paratha",
    name: { en: "Zinger Shawarma / Roll Paratha" },
    description: { en: "Crispy zinger chicken strips wrapped in warm paratha/pita." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80&auto=format&fit=crop", alt: { en: "Zinger Shawarma" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 61,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "roll-behari-spin",
    slug: "behari-spin-roll",
    name: { en: "Behari Spin Roll (3 pcs)" },
    description: { en: "3 pcs of crispy spin rolls stuffed with spicy Behari chicken filling." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80&auto=format&fit=crop", alt: { en: "Behari Spin Roll" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 62,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "roll-chicken-spin",
    slug: "chicken-spin-roll",
    name: { en: "Chicken Spin Roll (3 pcs)" },
    description: { en: "3 pcs of crispy spin rolls stuffed with seasoned chicken." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Spin Roll" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 63,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "roll-kabab-cheesy",
    slug: "kabab-cheesy-roll",
    name: { en: "Kabab Cheesy Roll" },
    description: { en: "Juicy kabab loaded with melted cheese wrapped in crisp paratha." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=800&q=80&auto=format&fit=crop", alt: { en: "Kabab Cheesy Roll" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 64,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "roll-chicken-cheesy",
    slug: "chicken-cheesy-roll",
    name: { en: "Chicken Cheesy Roll" },
    description: { en: "Tender chicken and melted cheese roll with special dressing." },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Cheesy Roll" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 65,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: SANDWICHES
  // =========================================================================
  {
    id: "sandwich-mexican-cheese",
    slug: "mexican-cheese-sandwich",
    name: { en: "Mexican Cheese Sandwich" },
    description: { en: "Grilled sandwich layered with spicy Mexican sauce, chicken, and melted cheese." },
    categoryIds: ["sandwiches"],
    images: [{ src: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&q=80&auto=format&fit=crop", alt: { en: "Mexican Cheese Sandwich" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 700, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 70,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "sandwich-euro",
    slug: "euro-sandwich",
    name: { en: "Euro Sandwich" },
    description: { en: "European style toasted club sandwich packed with chicken, egg, and mayonnaise." },
    categoryIds: ["sandwiches"],
    images: [{ src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", alt: { en: "Euro Sandwich" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 700, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 71,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: SIDES & EXTRAS
  // =========================================================================
  {
    id: "side-french-fries",
    slug: "french-fries",
    name: { en: "French Fries" },
    description: { en: "Crispy golden salted potato fries." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80&auto=format&fit=crop", alt: { en: "French Fries" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 80,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-hot-wings-6",
    slug: "hot-wings-6-pcs",
    name: { en: "Hot Wings (6 pcs)" },
    description: { en: "6 pieces of spicy crispy fried chicken wings." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80&auto=format&fit=crop", alt: { en: "Hot Wings 6 pcs" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 400, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 81,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-hot-shots-6",
    slug: "hot-shots-6-pcs",
    name: { en: "Hot Shots (6 pcs)" },
    description: { en: "6 bite-sized spicy chicken hot shots." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80&auto=format&fit=crop", alt: { en: "Hot Shots 6 pcs" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 400, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 82,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-hot-shots-12",
    slug: "hot-shots-12-pcs",
    name: { en: "Hot Shots (12 pcs)" },
    description: { en: "12 bite-sized spicy chicken hot shots." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80&auto=format&fit=crop", alt: { en: "Hot Shots 12 pcs" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 750, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 83,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-nuggets-6",
    slug: "nuggets-6-pcs",
    name: { en: "Nuggets (6 pcs)" },
    description: { en: "6 crispy golden chicken nuggets." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&q=80&auto=format&fit=crop", alt: { en: "Nuggets 6 pcs" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 350, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 84,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-loaded-fries",
    slug: "loaded-fries",
    name: { en: "Loaded Fries" },
    description: { en: "French fries smothered in melted cheese, chicken chunks, jalapeños, and secret sauce." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&q=80&auto=format&fit=crop", alt: { en: "Loaded Fries" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 650, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 85,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-extra-raita",
    slug: "extra-raita",
    name: { en: "Extra Raita" },
    description: { en: "Fresh mint yogurt raita side cup." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop", alt: { en: "Extra Raita" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 30, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 86,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-extra-salad",
    slug: "extra-salad",
    name: { en: "Extra Salad" },
    description: { en: "Fresh sliced cucumber, onion, and cabbage salad cup." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop", alt: { en: "Extra Salad" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 30, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 87,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-ketchup",
    slug: "ketchup",
    name: { en: "Ketchup" },
    description: { en: "Extra tomato ketchup sachet." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&q=80&auto=format&fit=crop", alt: { en: "Ketchup" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 10, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 88,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "side-mayo-dip",
    slug: "mayo-dip",
    name: { en: "Mayo Dip" },
    description: { en: "Creamy garlic mayonnaise dip cup." },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80&auto=format&fit=crop", alt: { en: "Mayo Dip" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 70, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 89,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: DELICIOUS BAR & DRINKS
  // =========================================================================
  // Mocktails
  {
    id: "drink-mint-margarita",
    slug: "mint-margarita",
    name: { en: "Mint Margarita" },
    description: { en: "Refreshing blend of fresh mint leaves, lime juice, ice, and soda." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", alt: { en: "Mint Margarita" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 100,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-peach-margarita",
    slug: "peach-margarita",
    name: { en: "Peach Margarita" },
    description: { en: "Sweet peach flavor blended with lemon and ice." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&auto=format&fit=crop", alt: { en: "Peach Margarita" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 300, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 101,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-pinacolada",
    slug: "pinacolada",
    name: { en: "Pinacolada" },
    description: { en: "Creamy blend of pineapple juice and coconut cream." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80&auto=format&fit=crop", alt: { en: "Pinacolada" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 102,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-blue-lagoon",
    slug: "blue-lagoon",
    name: { en: "Blue Lagoon" },
    description: { en: "Vibrant blue curaçao syrup topped with lemon-lime fizzy soda." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80&auto=format&fit=crop", alt: { en: "Blue Lagoon" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 103,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-bluecolada",
    slug: "bluecolada",
    name: { en: "Bluecolada" },
    description: { en: "Signature fusion of blue lagoon syrup and coconut pinacolada." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80&auto=format&fit=crop", alt: { en: "Bluecolada" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 104,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Mojito
  {
    id: "drink-passion-fruit-mojito",
    slug: "passion-fruit-mojito",
    name: { en: "Passion Fruit Mojito" },
    description: { en: "Tropical passion fruit extract with crushed mint, lime, and soda." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80&auto=format&fit=crop", alt: { en: "Passion Fruit Mojito" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 499, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 105,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-raspberry-mojito",
    slug: "raspberry-mojito",
    name: { en: "Raspberry Mojito" },
    description: { en: "Tangy raspberry puree muddled with mint and soda." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80&auto=format&fit=crop", alt: { en: "Raspberry Mojito" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 499, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 106,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-strawberry-mojito",
    slug: "strawberry-mojito",
    name: { en: "Strawberry Mojito" },
    description: { en: "Sweet strawberry syrup mixed with fresh mint and sparkling soda." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", alt: { en: "Strawberry Mojito" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 499, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 107,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-blueberry-mojito",
    slug: "blueberry-mojito",
    name: { en: "Blueberry Mojito" },
    description: { en: "Juicy blueberry flavor with mint leaves, lemon, and ice." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80&auto=format&fit=crop", alt: { en: "Blueberry Mojito" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 499, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 108,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Smoothies
  {
    id: "drink-strawberry-smoothie",
    slug: "strawberry-smoothie",
    name: { en: "Strawberry Smoothie" },
    description: { en: "Thick and creamy blended real strawberry smoothie." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80&auto=format&fit=crop", alt: { en: "Strawberry Smoothie" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 109,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-blueberry-smoothie",
    slug: "blueberry-smoothie",
    name: { en: "Blueberry Smoothie" },
    description: { en: "Rich blueberry smoothie blended with yogurt and crushed ice." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80&auto=format&fit=crop", alt: { en: "Blueberry Smoothie" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 110,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-mango-smoothie",
    slug: "mango-smoothie",
    name: { en: "Mango Smoothie" },
    description: { en: "Sweet mango pulp blended into a smooth refreshment." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80&auto=format&fit=crop", alt: { en: "Mango Smoothie" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 111,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Special Shakes
  {
    id: "drink-kit-kat-shake",
    slug: "kit-kat-shake",
    name: { en: "Kit Kat Shake" },
    description: { en: "Crushed Kit Kat chocolate bars blended with vanilla ice cream and milk." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80&auto=format&fit=crop", alt: { en: "Kit Kat Shake" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 112,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-oreo-shake",
    slug: "oreo-shake",
    name: { en: "Oreo Shake" },
    description: { en: "Classic thick milkshake loaded with Oreo cookies." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80&auto=format&fit=crop", alt: { en: "Oreo Shake" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 350, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 113,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-ice-cream-shake",
    slug: "ice-cream-shake",
    name: { en: "Ice Cream Shake" },
    description: { en: "Rich milk shake topped with your favorite scoop of ice cream." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream Shake" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 400, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 114,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-fresh-milk-shake",
    slug: "fresh-milk-shake",
    name: { en: "Fresh Milk Shake (Mango/Apple/Banana)" },
    description: { en: "Fresh fruit milk shake prepared with your choice of seasonal fruit." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80&auto=format&fit=crop", alt: { en: "Fresh Milk Shake" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 115,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Ice Tea
  {
    id: "drink-peach-ice-tea",
    slug: "peach-ice-tea",
    name: { en: "Peach Ice Tea" },
    description: { en: "Chilled iced black tea infused with sweet peach flavor." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80&auto=format&fit=crop", alt: { en: "Peach Ice Tea" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 350, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 116,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-strawberry-ice-tea",
    slug: "strawberry-ice-tea",
    name: { en: "Strawberry Ice Tea" },
    description: { en: "Chilled iced tea infused with sweet strawberry flavor." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", alt: { en: "Strawberry Ice Tea" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 350, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 117,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-lemon-ice-tea",
    slug: "lemon-ice-tea",
    name: { en: "Lemon Ice Tea" },
    description: { en: "Zesty chilled black tea flavored with natural lemon syrup." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80&auto=format&fit=crop", alt: { en: "Lemon Ice Tea" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 350, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 118,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Cold Coffees
  {
    id: "drink-vanilla-cold-coffee",
    slug: "vanilla-cold-coffee",
    name: { en: "Vanilla Cold Coffee" },
    description: { en: "Chilled espresso and milk blended with rich vanilla syrup." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop", alt: { en: "Vanilla Cold Coffee" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 490, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 119,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-caramel-cold-coffee",
    slug: "caramel-cold-coffee",
    name: { en: "Caramel Cold Coffee" },
    description: { en: "Chilled brewed coffee blended with creamy caramel." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop", alt: { en: "Caramel Cold Coffee" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 490, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 120,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-chocolate-cold-coffee",
    slug: "chocolate-cold-coffee",
    name: { en: "Chocolate Cold Coffee" },
    description: { en: "Iced coffee with rich chocolate syrup and cocoa." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop", alt: { en: "Chocolate Cold Coffee" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 490, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 121,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Other Drinks
  {
    id: "drink-fresh-lassi",
    slug: "fresh-lassi",
    name: { en: "Fresh Lassi" },
    description: { en: "Traditional yogurt lassi served chilled." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format&fit=crop", alt: { en: "Fresh Lassi" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 150, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 122,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-fresh-lime",
    slug: "fresh-lime",
    name: { en: "Fresh Lime" },
    description: { en: "Fizzy soda with freshly squeezed lime." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", alt: { en: "Fresh Lime" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 123,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-green-tea",
    slug: "green-tea",
    name: { en: "Green Tea" },
    description: { en: "Warm aromatic green tea cup." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format&fit=crop", alt: { en: "Green Tea" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 80, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 124,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-tea",
    slug: "tea",
    name: { en: "Tea" },
    description: { en: "Traditional hot Karak milk tea." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80&auto=format&fit=crop", alt: { en: "Tea" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 120, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 125,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-milk-coffee",
    slug: "milk-coffee",
    name: { en: "Milk Coffee" },
    description: { en: "Hot brewed milk coffee." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80&auto=format&fit=crop", alt: { en: "Milk Coffee" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 126,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Cold Drinks / Water (Price on request)
  {
    id: "drink-cold-drink-tin",
    slug: "cold-drink-regular-tin-250ml",
    name: { en: "Cold Drink Regular Tin 250ml" },
    description: { en: "Chilled soft drink tin 250ml. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80&auto=format&fit=crop", alt: { en: "Cold Drink Tin 250ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 127,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-cold-drink-1000ml",
    slug: "cold-drink-1000ml",
    name: { en: "Cold Drink 1000ml" },
    description: { en: "Chilled soft drink 1 Liter bottle. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80&auto=format&fit=crop", alt: { en: "Cold Drink 1000ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 128,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-cold-drink-1500ml",
    slug: "cold-drink-1500ml",
    name: { en: "Cold Drink 1500ml" },
    description: { en: "Chilled soft drink 1.5 Liter bottle. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80&auto=format&fit=crop", alt: { en: "Cold Drink 1500ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 129,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-cold-drink-2000ml",
    slug: "cold-drink-2000ml",
    name: { en: "Cold Drink 2000ml" },
    description: { en: "Chilled soft drink 2.0 Liter bottle. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80&auto=format&fit=crop", alt: { en: "Cold Drink 2000ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 130,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-mineral-water-500ml",
    slug: "mineral-water-500ml",
    name: { en: "Mineral Water 500ml" },
    description: { en: "Pure mineral water 500ml bottle. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&q=80&auto=format&fit=crop", alt: { en: "Mineral Water 500ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 131,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "drink-mineral-water-1500ml",
    slug: "mineral-water-1500ml",
    name: { en: "Mineral Water 1500ml" },
    description: { en: "Pure mineral water 1.5 Liter bottle. Price on request." },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&q=80&auto=format&fit=crop", alt: { en: "Mineral Water 1500ml" }, width: 800, height: 600, placeholder: true }],
    available: true,
    featured: false,
    sortOrder: 132,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: SWEETS & ICE CREAM
  // Note: Flavors available: Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla.
  // =========================================================================
  {
    id: "dessert-zarda",
    slug: "zarda",
    name: { en: "Zarda" },
    description: { en: "Traditional sweet saffron rice garnished with nuts and dried fruits." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop", alt: { en: "Zarda" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 140,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-kheer-single",
    slug: "kheer-single-person",
    name: { en: "Kheer (Single Person)" },
    description: { en: "Rich creamy traditional rice pudding bowl." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80&auto=format&fit=crop", alt: { en: "Kheer Single Person" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 141,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-kheer-box",
    slug: "kheer-box-three-person",
    name: { en: "Kheer Box (Three Person)" },
    description: { en: "Family size traditional rice kheer box for three persons." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80&auto=format&fit=crop", alt: { en: "Kheer Box Three Person" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 142,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-fruit-chaat",
    slug: "ice-cream-fruit-chaat",
    name: { en: "Ice Cream Fruit Chaat" },
    description: { en: "Fresh chopped fruits served with a generous scoop of ice cream." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream Fruit Chaat" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 550, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 143,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-russian-salad",
    slug: "russian-salad",
    name: { en: "Russian Salad" },
    description: { en: "Creamy salad mixture of diced fruits, vegetables, and mayo dressing." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80&auto=format&fit=crop", alt: { en: "Russian Salad" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 144,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-mix-fruit-salad",
    slug: "mix-fruit-salad",
    name: { en: "Mix Fruit Salad" },
    description: { en: "Refreshing blend of fresh seasonal diced fruits." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop", alt: { en: "Mix Fruit Salad" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 145,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-1-scoop",
    slug: "ice-cream-one-scoop",
    name: { en: "Ice Cream (One Scoop)" },
    description: { en: "Single scoop of ice cream. Available flavors: Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1560008511-11c63416e52d?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream One Scoop" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 140, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 146,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-2-scoop",
    slug: "ice-cream-two-scoop",
    name: { en: "Ice Cream (Two Scoop)" },
    description: { en: "Two scoops of ice cream. Available flavors: Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream Two Scoop" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 270, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 147,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-3-scoop",
    slug: "ice-cream-three-scoop",
    name: { en: "Ice Cream (Three Scoop)" },
    description: { en: "Three scoops of ice cream. Available flavors: Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1560008511-11c63416e52d?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream Three Scoop" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 400, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 148,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-family-pack",
    slug: "ice-cream-six-scoop-family-pack",
    name: { en: "Ice Cream (Six Scoop Family Pack)" },
    description: { en: "Family pack with 6 scoops of ice cream. Available flavors: Pista, Kulfa, Chocolate Chip, Mango, Strawberry, Vanilla." },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream Six Scoop Family Pack" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 149,
    verification: { status: "verified", source: "printed-menu" }
  },

  // =========================================================================
  // CATEGORY: PARTY & BULK ORDERS (DEIG)
  // =========================================================================
  {
    id: "deig-sada-pulao",
    slug: "sada-pulao-deig-10kg-rice",
    name: { en: "Sada Pulao Deig (10kg Rice)" },
    description: { en: "10kg Rice Pot cooked in traditional aromatic spices for events and gatherings." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80&auto=format&fit=crop", alt: { en: "Sada Pulao Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 9500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 160,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-chana-pulao",
    slug: "chana-pulao-deig-10kg-rice-2kg-chana",
    name: { en: "Chana Pulao Deig (10kg Rice, 2kg Chana)" },
    description: { en: "10kg Rice Pot cooked with 2kg chickpeas (Chana) for bulk orders." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80&auto=format&fit=crop", alt: { en: "Chana Pulao Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 10500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 161,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-sabzi-pulao",
    slug: "sabzi-pulao-deig-10kg-rice",
    name: { en: "Sabzi Pulao Deig (10kg Rice)" },
    description: { en: "10kg Rice Pot cooked with mixed fresh vegetables." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&q=80&auto=format&fit=crop", alt: { en: "Sabzi Pulao Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 10500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 162,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-chicken-pulao",
    slug: "chicken-pulao-deig-10kg-rice-6-chicken",
    name: { en: "Chicken Pulao Deig (10kg Rice, 6 Chicken)" },
    description: { en: "10kg Rice Pot cooked with 6 whole chickens for large celebrations." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 16000, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 163,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-chicken-biryani",
    slug: "chicken-biryani-deig-10kg-rice-10-chicken",
    name: { en: "Chicken Biryani Deig (10kg Rice, 10 Chicken)" },
    description: { en: "10kg Rice Pot cooked with 10 whole chickens in rich spicy biryani masala." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Biryani Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 19500, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 164,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-chicken-qorma",
    slug: "chicken-qorma-deig-10-chicken",
    name: { en: "Chicken Qorma Deig (10 Chicken)" },
    description: { en: "Traditional rich gravy Chicken Qorma pot prepared with 10 chickens." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Qorma Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 16000, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 165,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "deig-zarda-chawal",
    slug: "zarda-chawal-deig-10kg-rice",
    name: { en: "Zarda Chawal Deig (10kg Rice, Raisins, Sweet Marmalade)" },
    description: { en: "10kg Sweet Zarda Rice Pot with raisins, almonds, and sweet marmalade." },
    categoryIds: ["deig"],
    images: [{ src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop", alt: { en: "Zarda Chawal Deig" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 14000, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 166,
    verification: { status: "verified", source: "printed-menu" }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
