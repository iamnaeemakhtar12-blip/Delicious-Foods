# Phase 9 — About and Contact

## CONTEXT
Create concise trust-building About and action-oriented Contact pages without fabricating business history or operations.

## OBJECTIVE
Explain Delicious Foods’ variety/local role and make call, order, directions, hours, and verified social access effortless.

## EXISTING SYSTEM
Inspect routes, restaurant/location/hours config, global footer, map solution, image assets, order channels, social data, and metadata. Read page specs and brand strategy.

## REQUIREMENTS
### About
- Identity and “every craving” proposition.
- Approved short story or clearly marked content slot; variety, quality, local presence, family/friends, takeaway/delivery only where confirmed.
- No founder/year/award/history invention.
- Store/team/food imagery only with approval and accurate alt.
- Clear Menu/Order/Contact next action.

### Contact
- Exact name, full address, 0321-8807790, and supplied daily 11 AM–12 AM hours pending production reconfirmation.
- Call to Order, Order Now, Get Directions.
- Approved Google Maps link/embed; if exact map unavailable, render address and disable embed rather than guess.
- Delivery/pickup/payment information only when confirmed.
- Only supplied/verified social links; Facebook URL exact, no inferred username.

## DESIGN RULES
About is concise and visual, not corporate. Contact prioritizes actions and facts above decorative content. Use cream and controlled purple; map is secondary to readable NAP.

## COMPONENTS
ContactActions, HoursList, MapBlock, SocialLinks, LocationCTA, SectionHeading, Button. Reuse central data and global components.

## RESPONSIVE REQUIREMENTS
About 7/5 desktop and stacked mobile. Contact two-column details/map desktop; actions first on mobile. Map lazy loads and has static/directions fallback.

## ACCESSIBILITY
Selectable address/phone; tap-to-call; hours list semantics; iframe title; map not sole location source; external link names/destinations; headings and image alt; consent for people imagery.

## SEO
Unique About/Contact metadata; consistent NAP; Restaurant JSON-LD shared—not conflicting. Natural local content. No invented geo/social/delivery fields.

## PERFORMANCE
Lazy-load map and below-fold imagery; no social feeds/widgets; server-render facts; avoid map blocking LCP.

## DO NOT
Do not fabricate brand story, years, awards, testimonials, sourcing, delivery areas, open-now status, coordinates, social usernames, or use another Delicious business listing.

## ACCEPTANCE CRITERIA
- About is credible, concise, and points to food/order.
- Contact provides exact facts and functioning primary actions.
- Unknown operational information is absent/disabled.
- Map failure leaves address/directions usable.
- NAP matches all other surfaces exactly.

## VALIDATION
Search repository for NAP/social inconsistencies; test phone/directions/map fallback/external links; verify midnight hours formatting; test keyboard/mobile/zoom/slow network; validate metadata/schema and build/a11y.
