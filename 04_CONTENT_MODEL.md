# Delicious Foods Wah Cantt — Content Model

## 1. Modeling rules
- Content is separate from React components.
- Stable IDs are not derived from display names.
- Prices are numeric PKR values, not formatted strings.
- Every mutable fact can carry verification metadata.
- Unknown values are `null`/omitted, never invented.
- Stage 1 files can implement these types locally; a database/CMS can replace the repository later.

## 2. Shared types
```ts
type ID = string;
type ISODate = string;
type VerificationStatus = "verified" | "snapshot" | "needs-confirmation";

type Verification = {
  status: VerificationStatus;
  source?: "printed-menu" | "google-listing" | "owner" | "photography";
  checkedAt?: ISODate;
  notes?: string;
};

type Money = {
  amount: number; // whole PKR for current catalog
  currency: "PKR";
};

type LocalizedText = {
  en: string;
  ur?: string;
};

type ImageAsset = {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
  placeholder?: boolean;
  rights?: string;
};
```

## 3. Restaurant
```ts
type Restaurant = {
  id: ID;
  legalOrDisplayName: string;
  shortName: string;
  description?: LocalizedText;
  phone: { display: string; e164: string; whatsappEnabled?: boolean };
  primaryLocationId: ID;
  hoursId: ID;
  orderChannels: OrderChannel[];
  socialProfileIds: ID[];
  logo: ImageAsset;
  verification: Verification;
};

type OrderChannel = {
  type: "phone" | "whatsapp" | "web-checkout";
  value: string;
  enabled: boolean;
  label: string;
};
```

Example:
```json
{
  "id": "restaurant-delicious-foods-wah",
  "legalOrDisplayName": "Delicious Foods Wah Cantt",
  "shortName": "Delicious Foods",
  "phone": {
    "display": "0321-8807790",
    "e164": "+923218807790"
  },
  "primaryLocationId": "location-wah-cantt",
  "hoursId": "hours-main",
  "orderChannels": [
    { "type": "phone", "value": "+923218807790", "enabled": true, "label": "Call to order" }
  ],
  "socialProfileIds": ["social-facebook"],
  "verification": { "status": "snapshot", "source": "owner" }
}
```

## 4. Location and hours
```ts
type Location = {
  id: ID;
  name: string;
  address: {
    street: string;
    locality: "Wah Cantt";
    region: string;
    postalCode: string;
    country: "PK";
    formatted: string;
  };
  geo?: { latitude: number; longitude: number };
  googleMapsUrl?: string;
  placeId?: string;
  delivery?: {
    enabled: boolean;
    areas: DeliveryArea[];
    minimumOrder?: Money;
    feeRule?: string;
  };
  verification: Verification;
};

type BusinessHours = {
  id: ID;
  timezone: "Asia/Karachi";
  weekly: Array<{
    days: Array<"Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday">;
    opens: string; // HH:mm
    closes: string; // HH:mm; 24:00 allowed by app convention
  }>;
  exceptions: Array<{ date: string; closed?: boolean; opens?: string; closes?: string; note?: string }>;
  verification: Verification;
};

type DeliveryArea = { id: ID; name: string; fee?: Money; minimumOrder?: Money; enabled: boolean };
```

## 5. Category
```ts
type Category = {
  id: ID;
  slug: string;
  name: LocalizedText;
  shortDescription?: LocalizedText;
  image?: ImageAsset;
  iconKey?: string;
  parentId?: ID;
  sortOrder: number;
  active: boolean;
  seo?: SEOMetadata;
};
```

Top-level IDs: `pizza`, `burgers`, `chicken`, `pulao`, `rolls-shawarma`, `sandwiches`, `sides`, `drinks`, `desserts`.

## 6. Product, variant, add-on
```ts
type Product = {
  id: ID;
  slug: string;
  name: LocalizedText;
  description?: LocalizedText;
  categoryIds: ID[];
  images: ImageAsset[];
  basePrice?: Money;
  variantGroupIds?: ID[];
  addonGroupIds?: ID[];
  badges?: Array<"featured"|"deal"|"new"|"spicy">;
  available: boolean;
  featured: boolean;
  sortOrder: number;
  aliases?: string[];
  dietary?: string[]; // only confirmed facts
  verification: Verification;
  seo?: SEOMetadata;
};

type ProductVariantGroup = {
  id: ID;
  name: LocalizedText;
  selection: "single" | "multiple";
  required: boolean;
  min?: number;
  max?: number;
  options: ProductVariant[];
};

type ProductVariant = {
  id: ID;
  name: LocalizedText;
  price: Money;
  available: boolean;
  sku?: string;
  metadata?: Record<string, string | number | boolean>;
  verification: Verification;
};

type AddonGroup = {
  id: ID;
  name: LocalizedText;
  required: false;
  max?: number;
  options: Addon[];
};

type Addon = {
  id: ID;
  name: LocalizedText;
  price: Money;
  available: boolean;
  compatibleProductIds?: ID[];
  verification: Verification;
};
```
Do not convert extras into universal add-ons until compatibility is confirmed.

## 7. Deal
```ts
type Deal = {
  id: ID;
  slug: string;
  name: LocalizedText;
  description?: LocalizedText;
  contents: Array<{
    text: LocalizedText;
    quantity?: number;
    referencedProductId?: ID;
    variantId?: ID;
  }>;
  price: Money;
  compareAtPrice?: Money;
  image?: ImageAsset;
  badges?: Array<"featured"|"limited-time">;
  active: boolean;
  startsAt?: ISODate;
  endsAt?: ISODate;
  terms?: LocalizedText;
  sortOrder: number;
  verification: Verification;
};
```
Never compute a saving unless all component prices and deal rules are current.

## 8. Social profile
```ts
type SocialProfile = {
  id: ID;
  network: "facebook" | "instagram" | "tiktok";
  url?: string;
  handle?: string;
  active: boolean;
  verification: Verification;
};
```
Facebook may contain the supplied profile URL. Instagram/TikTok remain inactive or without links until confirmed.

## 9. SEO metadata
```ts
type SEOMetadata = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  ogImage?: ImageAsset;
  keywords?: string[]; // editorial aid; not meta-keywords output
};
```

## 10. Cart/order future model
```ts
type CartItem = {
  id: ID;
  productId?: ID;
  dealId?: ID;
  variantOptionIds: ID[];
  addonIds: ID[];
  quantity: number;
  instructions?: string;
  unitPriceSnapshot: Money;
};

type Order = {
  id: ID;
  status: "pending"|"accepted"|"preparing"|"ready"|"delivered"|"cancelled";
  fulfillment: "delivery"|"pickup";
  items: CartItem[];
  customer: { name: string; phone: string; address?: string };
  totals: { subtotal: Money; fees: Money; total: Money };
  paymentMethod?: string;
  createdAt: ISODate;
};
```
All totals and availability must be recalculated server-side before order acceptance.

## 11. Data file recommendation
```text
src/content/restaurant.ts
src/content/locations.ts
src/content/hours.ts
src/content/categories.ts
src/content/products.ts
src/content/variants.ts
src/content/addons.ts
src/content/deals.ts
src/content/social.ts
src/content/verification.ts
```
Optionally store raw JSON validated by Zod at build time. Add uniqueness, nonnegative price, referenced-ID, active category, slug, and order-channel validation.

## 12. Verification workflow
Every source-snapshot record defaults to:
```json
{
  "status": "needs-confirmation",
  "source": "printed-menu",
  "notes": "MENU SNAPSHOT — VERIFY BEFORE PRODUCTION"
}
```
Production release gate fails if:
- enabled/orderable item lacks confirmed price/availability;
- enabled order channel is unconfirmed;
- required NAP/hours/map fields are missing;
- a placeholder image is represented as real food;
- a live deal is beyond its end date.
