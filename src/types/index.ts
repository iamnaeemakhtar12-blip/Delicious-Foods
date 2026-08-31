export type ID = string;
export type ISODate = string;
export type VerificationStatus = "verified" | "snapshot" | "needs-confirmation";

export type Verification = {
  status: VerificationStatus;
  source?: "printed-menu" | "google-listing" | "owner" | "photography";
  checkedAt?: ISODate;
  notes?: string;
};

export type Money = {
  amount: number; // whole PKR for current catalog
  currency: "PKR";
};

export type LocalizedText = {
  en: string;
  ur?: string;
};

export type ImageAsset = {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
  placeholder?: boolean;
  rights?: string;
};

export type Restaurant = {
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

export type OrderChannel = {
  type: "phone" | "whatsapp" | "web-checkout";
  value: string;
  enabled: boolean;
  label: string;
};

export type Location = {
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

export type BusinessHours = {
  id: ID;
  timezone: "Asia/Karachi";
  weekly: Array<{
    days: Array<"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday">;
    opens: string; // HH:mm
    closes: string; // HH:mm; 24:00 allowed by app convention
  }>;
  exceptions: Array<{ date: string; closed?: boolean; opens?: string; closes?: string; note?: string }>;
  verification: Verification;
};

export type DeliveryArea = { id: ID; name: string; fee?: Money; minimumOrder?: Money; enabled: boolean };

export type Category = {
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

export type PizzaSizeOption = {
  id: "S" | "M" | "L";
  label: string;
  price: Money;
};

export type Product = {
  id: ID;
  slug: string;
  name: LocalizedText;
  description?: LocalizedText;
  categoryIds: ID[];
  images: ImageAsset[];
  basePrice?: Money;
  pizzaSizes?: PizzaSizeOption[];
  variantGroupIds?: ID[];
  addonGroupIds?: ID[];
  badges?: Array<"featured" | "deal" | "new" | "spicy">;
  available: boolean;
  featured: boolean;
  sortOrder: number;
  aliases?: string[];
  dietary?: string[]; // only confirmed facts
  verification: Verification;
  seo?: SEOMetadata;
};

export type ProductVariantGroup = {
  id: ID;
  name: LocalizedText;
  selection: "single" | "multiple";
  required: boolean;
  min?: number;
  max?: number;
  options: ProductVariant[];
};

export type ProductVariant = {
  id: ID;
  name: LocalizedText;
  price: Money;
  available: boolean;
  sku?: string;
  metadata?: Record<string, string | number | boolean>;
  verification: Verification;
};

export type AddonGroup = {
  id: ID;
  name: LocalizedText;
  required: false;
  max?: number;
  options: Addon[];
};

export type Addon = {
  id: ID;
  name: LocalizedText;
  price: Money;
  available: boolean;
  compatibleProductIds?: ID[];
  verification: Verification;
};

export type Deal = {
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
  badges?: Array<"featured" | "limited-time">;
  active: boolean;
  startsAt?: ISODate;
  endsAt?: ISODate;
  terms?: LocalizedText;
  sortOrder: number;
  verification: Verification;
};

export type SocialProfile = {
  id: ID;
  network: "facebook" | "instagram" | "tiktok";
  url?: string;
  handle?: string;
  active: boolean;
  verification: Verification;
};

export type SEOMetadata = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  ogImage?: ImageAsset;
  keywords?: string[]; // editorial aid; not meta-keywords output
};
