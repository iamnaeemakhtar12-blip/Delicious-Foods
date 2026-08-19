# 🚀 DELICIOUS FOODS - FRONTEND PUBLISH PLAN (MASTER PROMPT)

> **Instruction for the next Agent/Developer:** Read this entire document. This is your master blueprint for finishing the frontend of the Delicious Foods website and making it 100% ready for publishing. Follow the precise step-by-step instructions below.

## 📌 Project Context
- **Brand:** Delicious Foods (Wah Cantt, Pakistan)
- **Tech Stack:** Next.js 16.3.1 (App Router), React 19, Tailwind CSS v4, Framer Motion.
- **Current State:** The Hero Section is complete (premium 3D parallax). The file structure for the remaining pages exists (`/about`, `/menu`, `/contact`, `/gallery`, `/blog`), but they lack the premium, photorealistic design and SEO optimizations required for a production launch.

---

## 🛑 Critical Design Rules
1. **Maintain Premium Aesthetic:** Do not build basic, generic pages. Use rich typography, subtle micro-animations (via Framer Motion), and high-quality dark/light mode contrasts.
2. **Pakistani Context:** Keep copy and design relevant to a fast-food brand in Wah Cantt.
3. **Performance First:** Use `next/image` for all images. Avoid heavy client-side rendering where server components will suffice.

---

## 💻 Phase 1: Complete the Core Pages

### Task 1: Homepage (Below the Hero)
Currently, `src/app/page.tsx` only has the Hero. You must add:
1. **Featured Categories Section:** A beautiful horizontal scroll or grid showing "Pizzas", "Burgers", "Shawarmas".
2. **Best Sellers Section:** 3-4 `ProductCard` components featuring the most popular items.
3. **Why Choose Us / Trust Badges:** A section highlighting "Fresh Ingredients", "Fast Delivery in Wah Cantt", "100% Halal".

### Task 2: The Interactive Menu Page (`/menu`)
1. Edit `src/app/menu/page.tsx`.
2. Implement a **Category Navigation Bar** (sticky at the top) that filters the menu items.
3. Display the menu items using a CSS Grid of `ProductCard` components.
4. Ensure every product card has a highly appetizing layout, price tag (Rs.), and an "Add to Cart" button (which will be wired up by the backend team).

### Task 3: About & Gallery Pages
1. **`/about/page.tsx`**: Build a storytelling page. Include a "Our Journey" section, the vision for providing premium fast food in Wah Cantt, and a call-to-action to view the menu. Use a split layout (Text on left, Image on right).
2. **`/gallery/page.tsx`**: Implement a **Masonry Grid Layout** for food photography. Add hover effects (e.g., slight zoom and overlay) to make the gallery feel interactive.

### Task 4: Contact Page (`/contact`)
1. Edit `src/app/contact/page.tsx`.
2. **Layout:** Split screen.
3. **Left Side:** Contact Information (Phone: 03XX-XXXXXXX, Address in Sector 1/Wah Cantt, Opening Hours). Include a button that links to WhatsApp (`wa.me`).
4. **Right Side:** A beautifully styled "Send us a Message" form. (You do not need to wire up the backend for this form, just build the UI).

### Task 5: Blog & SEO Section (`/blog`)
1. **`/blog/page.tsx`**: Build a grid of blog post cards (e.g., "Top 5 Pizzas to Try in Wah Cantt").
2. **`/blog/[slug]/page.tsx`**: Build a clean, highly readable article layout with a massive typography hierarchy, optimized for SEO.

---

## 🚀 Phase 2: SEO & Production Readiness

A website is not ready to publish without SEO. You must implement the following:

### Task 1: Global Metadata
Edit `src/app/layout.tsx` to include a rich Next.js `Metadata` object:
```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Delicious Foods Wah Cantt',
    default: 'Delicious Foods | Premium Fast Food in Wah Cantt',
  },
  description: 'The best pizza, burgers, and fast food in Wah Cantt. Order online for fast local delivery.',
  openGraph: {
    title: 'Delicious Foods Wah Cantt',
    description: 'The best pizza, burgers, and fast food in Wah Cantt.',
    url: 'https://deliciousfoods.com',
    siteName: 'Delicious Foods',
    locale: 'en_PK',
    type: 'website',
  },
}
```

### Task 2: Page-Specific Metadata
Ensure every single page (`/menu`, `/about`, `/contact`, `/gallery`) exports its own `metadata` object with a relevant title and description.

### Task 3: Sitemap & Robots.txt
1. Create `src/app/sitemap.ts` that dynamically generates a sitemap for the homepage, menu, about, contact, and blog posts.
2. Create `src/app/robots.txt` to allow all crawlers and point to the sitemap.

---

## 🎯 Final Acceptance Criteria for the Agent
- ALL pages (`/`, `/menu`, `/about`, `/contact`, `/gallery`, `/blog`) must have fully complete, responsive, and visually stunning UI.
- No placeholder "lorem ipsum" text should remain.
- The site must achieve a 95+ score on Lighthouse for SEO and Accessibility.
- Once this prompt is executed, the frontend is considered **100% READY TO PUBLISH**.
