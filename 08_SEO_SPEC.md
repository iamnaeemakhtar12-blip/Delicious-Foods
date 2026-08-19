# Delicious Foods Wah Cantt — SEO Specification

## 1. Objective
Win accurate branded and local-intent discovery while converting search visitors to menu, call/order, and directions. Accuracy outranks volume; no keyword stuffing or fabricated reputation claims.

## 2. Canonical facts
- Name: Delicious Foods Wah Cantt
- Address: Plaza No. A-50, Main Shah Wali Road, Shah Wali Colony, Wah Cantt, 47010, Pakistan
- Phone: +92 321 8807790 (`0321-8807790` display)
- Hours snapshot: daily 11:00–24:00; reconfirm before production
- Canonical map: client-supplied listing; exact URL/place ID/geo needed
- Facebook: supplied profile URL; no invented username

Use one data source to render page copy, footer, metadata helpers, and JSON-LD.

## 3. URL strategy
```text
/                                   brand/local overview
/menu                               complete menu
/menu/pizza                         only if substantial unique content
/menu/pizza/delicious-special-pizza product detail when confirmed
/deals                              current deals
/about                              brand/local story
/contact                            location/hours/contact
```
Use lowercase kebab-case, HTTPS, one preferred host, trailing-slash policy applied consistently. Canonicalize filter/search query pages to `/menu` or index only curated category routes. Redirect changed slugs.

## 4. Title strategy
Format: **Primary intent | Delicious Foods Wah Cantt**. Keep concise and unique.

Suggested drafts (owner/data review required):
- Home: `Delicious Foods Wah Cantt | Pizza, Burgers, Pulao & More`
- Menu: `Menu & Prices | Delicious Foods Wah Cantt`
- Deals: `Food & Pizza Deals in Wah Cantt | Delicious Foods`
- About: `About Delicious Foods Wah Cantt`
- Contact: `Contact & Location | Delicious Foods Wah Cantt`
- Category: `[Category] in Wah Cantt | Delicious Foods Menu`
- Product: `[Product] | Delicious Foods Wah Cantt`

Do not use “Best” as a factual superiority claim.

## 5. Description strategy
140–160 characters is a writing guide, not a ranking requirement. Describe actual offering, location, and action.

Example home draft:
> Explore pizza, burgers, chicken, pulao, drinks, desserts and deals from Delicious Foods on Main Shah Wali Road, Wah Cantt. View the menu and order.

Only mention delivery when current policy/channel is confirmed.

## 6. On-page content
- One clear H1 per page.
- Natural references to Wah Cantt and relevant categories.
- Menu/category copy serves users; avoid repetitive city/category permutations.
- Visible NAP/hours and meaningful internal links.
- Product pages include confirmed description, price, availability, image, category breadcrumb, and order path.
- Keep expired/unavailable content useful or redirect intentionally.

## 7. Structured data
Use JSON-LD generated from shared data.

### Home/contact: `Restaurant`
Recommended properties after confirmation:
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://CANONICAL-DOMAIN.example/#restaurant",
  "name": "Delicious Foods Wah Cantt",
  "url": "https://CANONICAL-DOMAIN.example/",
  "telephone": "+923218807790",
  "priceRange": "Rs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza No. A-50, Main Shah Wali Road, Shah Wali Colony",
    "addressLocality": "Wah Cantt",
    "postalCode": "47010",
    "addressCountry": "PK"
  },
  "openingHoursSpecification": [],
  "sameAs": [
    "https://web.facebook.com/profile.php?id=61589381895753#"
  ]
}
```
Do not ship placeholder domain. Add geo, servesCuisine, menu URL, hasMap, image, acceptsReservations, delivery, and payment only when confirmed. `priceRange` should be owner-approved.

### Product/Offer
Use on dedicated indexable product pages only when product, price, currency, URL, image, and availability are current. Do not attach AggregateRating/Review from the Google snapshot or copy third-party reviews without compliance and live accuracy.

### BreadcrumbList
Use on category/product pages matching visible breadcrumbs.

### Menu
A `hasMenu`/`Menu` structure may be used if implementation remains accurate; do not create bloated or conflicting schema.

## 8. Local SEO
- Keep NAP identical across website and managed listings.
- Link the canonical Google Business Profile/map.
- Confirm primary/secondary GBP categories operationally.
- Add accurate hours and holiday exceptions.
- Earn local relevance through useful pages and real photography, not doorway pages.
- Encourage legitimate reviews operationally; never gate or fabricate them.
- Monitor confusion with “Delicious Food House”; reinforce exact name/address in title, contact page, schema, and citations.

Target themes, used naturally:
- Delicious Foods Wah Cantt
- restaurant / fast food in Wah Cantt
- pizza, burgers, chicken pulao in Wah Cantt
- food delivery in Wah Cantt (only when confirmed)
- food deals in Wah Cantt

## 9. Open Graph/social
- `og:type=website` (or appropriate article/product where valid), title, description, canonical URL, locale, site name.
- Approved 1200×630 image with logo safe area and real food; no stale price baked in.
- Twitter/X large-image metadata may be included without implying an account.
- Product/deal pages use accurate dedicated image and text.

## 10. Image SEO
- Descriptive filenames: `delicious-foods-zinger-burger-wah-cantt.webp` without stuffing.
- Alt describes visible dish and context; decorative images use empty alt.
- Width/height, responsive `sizes`, AVIF/WebP, LCP priority only for hero.
- Image sitemap only if valuable and technically justified.

## 11. Technical controls
- `robots.txt`: allow public site; disallow or noindex staging, internal search, checkout, confirmation/admin as appropriate. Robots disallow is not a substitute for authentication.
- XML sitemap: canonical public 200-status URLs only; exclude cart/checkout/confirmation, filtered queries, inactive products/deals.
- Canonical tags self-reference public pages.
- Correct 301s, useful 404, no soft 404s.
- Server-render critical content and metadata.
- Set production/staging indexing via environment safeguards; staging defaults to noindex.
- Provide `manifest.webmanifest`, icons, and theme color after logo approval.

## 12. Performance and SEO
Meet Core Web Vitals at 75th percentile target:
- LCP ≤2.5s, INP ≤200ms, CLS ≤0.1.
- Reserve image/font dimensions.
- Minimize client JS and third-party scripts.
- Lazy-load maps and below-fold imagery.
- Self/Next-host fonts with subset/preload discipline.
- Do not let a heavy map or social embed block contact content.

## 13. Measurement
Configure privacy-conscious analytics and Search Console after domain ownership:
- organic landing pages and queries;
- menu/category/product engagement;
- order/call/message/directions outbound events;
- crawl/index errors and rich-result validity;
- Core Web Vitals by device.

Do not send phone numbers, names, addresses, free-form order instructions, or other PII as analytics parameters.

## 14. Launch checklist
- [ ] Canonical domain and preferred host confirmed.
- [ ] NAP/hours/map/social/order facts owner-approved.
- [ ] Metadata unique and rendered.
- [ ] Schema validates and matches visible content.
- [ ] No snapshot review count/rating hard-coded.
- [ ] No placeholder domain/image/coordinates.
- [ ] Sitemap/robots/canonicals correct.
- [ ] Staging noindex; production index enabled intentionally.
- [ ] 404/redirects tested.
- [ ] Mobile CWV and accessibility audited.
- [ ] Search Console/analytics ownership and privacy documentation complete.
