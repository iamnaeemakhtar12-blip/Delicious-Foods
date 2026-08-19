# 🚀 DELICIOUS FOODS - ANTIGRAVITY BACKEND MASTER PROMPT

> **Instruction for the next Agent/Developer:** Read this entire document. This is your master blueprint. Follow the precise step-by-step instructions below to implement the backend for this Next.js 16.3.1 (App Router) project.

## 📌 Project Context
- **Brand:** Delicious Foods (Located in Wah Cantt, Pakistan)
- **Tech Stack:** Next.js 16.3.1 (App Router), React 19, Tailwind CSS v4, Framer Motion, Zustand, Supabase Native.
- **Frontend Status:** Premium UI is already complete. You are solely responsible for wiring up the backend, cart state, checkout, and admin dashboard.

---

## 🛑 Critical Architecture Rules
1. **NO PRISMA:** We are using **Native Supabase** (`@supabase/supabase-js`) to communicate directly with the database. Do NOT use or install an ORM.
2. **State Management:** Use `zustand` for the cart. It is already installed.
3. **Styling:** Use Tailwind CSS v4 and `lucide-react` icons to match the existing premium UI. Do not introduce new UI libraries.

---

## 🗄️ Phase 1: Database Setup (Supabase)

Before writing code, set up the Supabase Database. Execute the following SQL in the Supabase SQL Editor to create the schema.

```sql
-- Create Orders Table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  total_amount NUMERIC NOT NULL,
  delivery_fee NUMERIC DEFAULT 150,
  status TEXT DEFAULT 'PENDING', -- PENDING, PREPARING, OUT_FOR_DELIVERY, COMPLETED
  payment_method TEXT DEFAULT 'COD'
);

-- Create Order Items Table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price NUMERIC NOT NULL,
  subtotal NUMERIC NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies (For MVP, allow anon inserts so customers can checkout)
CREATE POLICY "Allow public insert" ON orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON order_items FOR INSERT TO anon WITH CHECK (true);
-- Allow public read so the admin dashboard works (for MVP only)
CREATE POLICY "Allow public read" ON orders FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public read" ON order_items FOR SELECT TO anon USING (true);
```

**Environment Variables:** Add these to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## 💻 Phase 2: Implementation Tasks

### Task 1: Supabase Client & Cart Store
1. Create `src/lib/supabase.ts` and initialize the Supabase client using `@supabase/supabase-js` and the environment variables.
2. Create `src/store/useCartStore.ts`. 
   - Define a `CartItem` interface (id, name, price, quantity).
   - Implement `zustand` with the `persist` middleware (key: `'delicious-foods-cart'`).
   - Implement actions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, and `getCartTotal`.

### Task 2: Cart UI & Menu Integration
1. Create a `CartDrawer.tsx` (or Sheet) component that listens to `useCartStore`.
2. Map over the cart items, showing their name, quantity controls (+ / -), and price.
3. Show the subtotal + Flat Delivery Fee (Rs. 150) + Grand Total.
4. Add a "Proceed to Checkout" button that navigates to `/checkout`.
5. Ensure all existing "Add to Cart" buttons in the menu actually call `addItem()` from the store.

### Task 3: The Public Checkout Flow
1. Create `src/app/checkout/page.tsx`.
2. Build a highly polished, mobile-friendly form:
   - **Fields:** Full Name, Phone Number (03XX-XXXXXXX), Delivery Address.
   - **Summary:** Display the order total and the Rs. 150 delivery fee.
3. **Submit Logic:**
   - On submit, use `supabase.from('orders').insert({...}).select('id')` to save the order.
   - Use the returned `order_id` to insert the items into `order_items`.
   - Clear the Zustand cart.
4. **WhatsApp Handoff:**
   - After successful DB insertion, construct a WhatsApp string.
   - Example: `const msg = "New Order!\nName: " + name + "\nItems: " + itemsList + "\nTotal: Rs " + grandTotal;`
   - Open WhatsApp: `window.open("https://wa.me/923000000000?text=" + encodeURIComponent(msg), '_blank');`
   - Show a beautiful "Order Confirmed" success message.

### Task 4: Realtime Admin Dashboard
1. Create `src/app/admin/page.tsx`.
2. Build a Kanban board UI with 4 columns: `Pending`, `Preparing`, `Out for Delivery`, `Completed`.
3. Fetch all orders from Supabase on mount.
4. **Implement Realtime Magic:**
   - Use `supabase.channel('custom-all-channel').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, payload => { /* play notification sound and add to state */ }).subscribe();`
5. **Status Updates:**
   - Add buttons to each order card to move them between statuses.
   - On click, execute: `supabase.from('orders').update({ status: 'PREPARING' }).eq('id', orderId)`.

---

## 🎯 Final Acceptance Criteria for the Agent
- The app must compile with no TypeScript errors.
- The UI must remain visually premium and match the existing aesthetic.
- A user must be able to add to cart, fill the checkout form, see the order save to Supabase, and get redirected to WhatsApp.
- The `/admin` page must automatically update without a page refresh when a new order is inserted into the database.
