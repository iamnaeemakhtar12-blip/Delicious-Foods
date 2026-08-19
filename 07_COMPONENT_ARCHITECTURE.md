# Delicious Foods Wah Cantt — Component Architecture

## 1. Principles
- Prefer cohesive domain components over atom explosion.
- Server Components by default; add client boundaries only for interaction/state.
- Data enters through typed props; components do not import scattered prices/hours.
- Separate visual state from operational truth.
- Every interactive component documents keyboard, focus, loading, error, and reduced-motion behavior.

## 2. Suggested tree
```text
src/
  app/
    (site)/layout.tsx
    (site)/page.tsx
    (site)/menu/page.tsx
    (site)/menu/[category]/[product]/page.tsx
    (site)/deals/page.tsx
    (site)/about/page.tsx
    (site)/contact/page.tsx
    (ordering)/cart/page.tsx             # Stage 2 flag
    (ordering)/checkout/page.tsx         # Stage 2 flag
  components/
    layout/ SiteHeader SiteFooter MobileNav SkipLink
    ui/ Button IconButton Badge Price SectionHeading
         Input Select Dialog Drawer Toast EmptyState Skeleton Breadcrumbs
    menu/ CategoryNav MenuSearch ProductGrid ProductCard ProductDetail
          VariantSelector AddonSelector QuantitySelector
    deals/ DealGrid DealCard
    ordering/ OrderChannelDialog CartButton CartDrawer CartLine CartSummary
    sections/ Hero DealsSection CravingGrid FeaturedSection PizzaShowcase
              DeliciousBar LocationCTA
    contact/ ContactActions HoursList MapBlock SocialLinks
  content/
  lib/ formatting validation seo analytics ordering
  types/
```

## 3. Foundation components
### Button
```ts
type ButtonProps = {
  variant?: "primary"|"secondary"|"outline"|"ghost"|"inverse";
  size?: "sm"|"md"|"lg";
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
```
Use actual link component for navigation. Loading retains label width; `aria-disabled` and native disabled as appropriate.

### IconButton
Requires `aria-label`; 44px target; tooltip cannot be the only name.

### Price
```ts
type PriceProps = { value: Money; oldValue?: Money; size?: "sm"|"md"|"lg"; note?: string };
```
Uses `Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", currencyDisplay: "narrowSymbol" })` only if output matches approved `Rs.` style; otherwise a tested formatter.

### Badge
Semantic variants: featured/deal/new/unavailable/status. Not interactive unless explicitly rendered as a control.

### SectionHeading
Eyebrow, title, description, optional action, alignment. Maintains heading level through an `as` prop with safe default.

### Dialog/Drawer
Built on an accessible primitive already in repository if present. Focus trap, Escape, return focus, title/description associations, scroll lock. Do not build a second modal system.

## 4. Global layout
### SiteHeader
Props: navigation items, logo, order channels, current route. States: top/scrolled, desktop/mobile drawer, order enabled/disabled. Mobile drawer focus managed; `aria-current` on active link.

### SiteFooter
Props: restaurant, location, hours, links, verified socials. Never creates guessed URLs. NAP text is server-rendered.

### MobileNav (optional)
Feature flag; max 5 destinations; safe-area; current route; no overlap with dialogs/sticky actions.

## 5. Menu components
### CategoryNav
```ts
type CategoryNavProps = {
  categories: Category[];
  activeId?: ID;
  mode: "links"|"filter";
  onChange?: (id?: ID) => void;
};
```
Links for route navigation; buttons for same-page filtering. Horizontal mobile overflow, scroll active item into view without forced motion.

### MenuSearch
Controlled query, clear control, result status target, optional suggestions. Visible label. Debounce only expensive computation; immediate input rendering.

### ProductGrid
Owns layout and empty/loading states, not product data mutation.

### ProductCard
```ts
type ProductCardProps = {
  product: Product;
  mode?: "default"|"compact"|"featured";
  actionMode: "direct-order"|"cart"|"details-only";
  onOrderIntent?: (productId: ID) => void;
};
```
States: available, unavailable, placeholder image, price missing, loading action. If price missing, show “Price to be confirmed” in staging; production order action disabled until approved.

### ProductDetail
Composes gallery, selectors, quantity, instructions, summary/action. Business selection logic lives in a hook/service with schema validation.

### VariantSelector / AddonSelector
Fieldset/legend. Required state and validation message. No invented options. Supports single/multiple limits.

### QuantitySelector
Min/max controlled; buttons include item-specific labels when possible; visible value; polite announcement only for meaningful changes.

## 6. Deal components
### DealCard
Props: deal, variant, action mode. Contents are list. Optional image. No computed discount unless `compareAtPrice` is verified.

### DealGrid
Supports groups and featured layout without DOM reordering that harms reading order.

## 7. Order components
### OrderChannelDialog — Stage 1
Props: enabled channels, selected product/deal context. Presents call and only confirmed message channel. Builds safe encoded message; phone always visible fallback. Never claims order placement.

### CartProvider/Store — Stage 2
Use the lightest existing state solution. Persist IDs/selections, not trusted totals. Hydration-safe. Server revalidation at checkout.

### CartButton
Accessible item count and live update. Count badge has screen-reader text.

### CartDrawer
Editable line items, subtotal snapshot, checkout action, empty/error states. Focus returns to trigger.

### CartLine / CartSummary
Distinct remove/edit controls; format variants; do not hide fees.

## 8. Page sections
Sections accept normalized data and presentation props, not hard-coded restaurant facts.
- `Hero`: heading, copy, images, primary/secondary actions, location cue.
- `DealsSection`: selected deals and all-deals link.
- `CravingGrid`: categories.
- `FeaturedSection`: featured products with honest label.
- `PizzaShowcase`: image, sizes, product links; no unsupplied pricing.
- `DeliciousBar`: drink subcategory preview.
- `LocationCTA`: restaurant/location/hours/order actions.

## 9. Contact components
### ContactActions
Call, order, directions. External link security and analytics. Do not intercept native phone behavior.

### HoursList
Weekly groups and exceptions; formats time in Asia/Karachi. Dynamic open state is separate and tested across midnight.

### MapBlock
Approved embed or static preview; has title, lazy-load, consent/performance fallback, and textual address/directions link.

### SocialLinks
Renders only active profiles with valid verified URL; network name in accessible label.

## 10. State ownership
- URL: category/query when shareable.
- Local client state: dialogs, ephemeral selections.
- Persistent client state: Stage 2 cart only.
- Server/business source: restaurant, menu, availability, price, deals.
- Avoid global state for header/menu filters.

## 11. Responsive behavior matrix
| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Header | logo/order/menu | same or compact links | full nav |
| Hero | stacked | adaptive split | split composition |
| CategoryNav | horizontal scroll | wrap/scroll | wrap/sticky |
| ProductGrid | 1 or tested 2 | 2 | 3, max 4 compact |
| Product detail | full page/sheet | stacked/split | two-column/dialog |
| Deals | 1 | 2 | 3–4 |
| Cart | page/full sheet | drawer/page | right drawer + summary |

## 12. Testing contract
- Unit: formatters, URL/filter logic, selection validation, open-hours engine, message encoding.
- Component: card states, unavailable/price-missing, filter/search, dialogs, quantity, cart updates.
- Integration/E2E: Home→Menu→product→order channel; Deal→order; Contact→call/directions; future add→cart→checkout validation.
- Automated accessibility on core pages plus manual keyboard/screen-reader smoke tests.
- Visual snapshots at 360, 768, 1280, and 1440 widths.
