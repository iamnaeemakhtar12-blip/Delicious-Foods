import { Product } from "@/types";

export const products: Product[] = [
  // Pizzas
  {
    id: "pizza-delicious-special",
    slug: "pizza-delicious-special",
    name: { en: "Delicious Special Pizza" },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&auto=format&fit=crop", alt: { en: "Delicious Special Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 800, currency: "PKR" }, // S8 price as base
    available: true,
    featured: true,
    sortOrder: 1,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pizza-chicken-tikka",
    slug: "pizza-chicken-tikka",
    name: { en: "Chicken Tikka Pizza" },
    categoryIds: ["pizza"],
    images: [{ src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Tikka Pizza" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 2,
    verification: { status: "verified", source: "printed-menu" }
  },
  
  // Burgers
  {
    id: "burger-zinger",
    slug: "zinger-burger",
    name: { en: "Zinger Burger" },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", alt: { en: "Zinger Burger" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 10,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "burger-chicken",
    slug: "chicken-burger",
    name: { en: "Chicken Burger" },
    categoryIds: ["burgers"],
    images: [{ src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Burger" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 450, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 11,
    verification: { status: "verified", source: "printed-menu" }
  },
  
  // Chicken Broast & Roast
  {
    id: "chicken-broast",
    slug: "chicken-broast",
    name: { en: "Chicken Broast" },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Broast" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 20,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "chicken-roast",
    slug: "chicken-roast",
    name: { en: "Chicken Roast" },
    categoryIds: ["chicken"],
    images: [{ src: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Roast" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 750, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 21,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Pulao
  {
    id: "pulao-chicken-single",
    slug: "chicken-pulao-single",
    name: { en: "Chicken Pulao Single" },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Chicken Pulao" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 600, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 30,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "pulao-simple",
    slug: "simple-pulao",
    name: { en: "Simple Pulao" },
    categoryIds: ["pulao"],
    images: [{ src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", alt: { en: "Simple Pulao" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 330, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 31,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Rolls & Shawarma
  {
    id: "roll-behari-spin",
    slug: "behari-spin-roll",
    name: { en: "Behari Spin Roll" },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80&auto=format&fit=crop", alt: { en: "Spin Roll" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 500, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 40,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "shawarma-chicken",
    slug: "chicken-shawarma",
    name: { en: "Chicken Shawarma" },
    categoryIds: ["rolls-shawarma"],
    images: [{ src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80&auto=format&fit=crop", alt: { en: "Shawarma" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 220, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 41,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Sides
  {
    id: "side-french-fries",
    slug: "french-fries",
    name: { en: "French Fries" },
    categoryIds: ["sides"],
    images: [{ src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&q=80&auto=format&fit=crop", alt: { en: "French Fries" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 50,
    verification: { status: "verified", source: "printed-menu" }
  },
  
  // Drinks
  {
    id: "drink-mint-margarita",
    slug: "mint-margarita",
    name: { en: "Mint Margarita" },
    categoryIds: ["drinks"],
    images: [{ src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", alt: { en: "Mint Margarita" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 250, currency: "PKR" },
    available: true,
    featured: true,
    sortOrder: 60,
    verification: { status: "verified", source: "printed-menu" }
  },

  // Desserts
  {
    id: "dessert-zarda",
    slug: "zarda",
    name: { en: "Zarda" },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80&auto=format&fit=crop", alt: { en: "Zarda" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 200, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 70,
    verification: { status: "verified", source: "printed-menu" }
  },
  {
    id: "dessert-ice-cream-1-scoop",
    slug: "ice-cream-1-scoop",
    name: { en: "Ice Cream (One Scoop)" },
    categoryIds: ["desserts"],
    images: [{ src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80&auto=format&fit=crop", alt: { en: "Ice Cream" }, width: 800, height: 600, placeholder: true }],
    basePrice: { amount: 140, currency: "PKR" },
    available: true,
    featured: false,
    sortOrder: 71,
    verification: { status: "verified", source: "printed-menu" }
  }
];
