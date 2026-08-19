# Phase 4 — Global Layout, Header, Footer and Navigation

## CONTEXT
Implement the persistent shell that gives every Delicious Foods page clear identity, navigation, trust, and an honest order action.

## OBJECTIVE
Deliver a compact responsive header, accessible mobile navigation, consistent footer, page container system, skip link, and Stage 1 order-channel entry.

## EXISTING SYSTEM
Inspect current root layout, header/footer/navigation, logo assets, dialog/drawer primitive, routing links, analytics hooks, and restaurant config. Reuse accessible working components.

## REQUIREMENTS
- Desktop header: logo, Home, Menu, Deals, About, Contact, Order Now.
- Mobile header: logo, compact Order CTA, menu trigger; drawer includes all navigation and key contact cue.
- Sticky behavior only if it improves access; add subtle border/shadow after scroll without layout shift.
- Footer includes brand line, exact address/phone, source-snapshot hours, page links, order/directions action, and only verified socials.
- Implement skip link and main landmark target.
- Global Order opens a truthful phone/confirmed-channel chooser; phone fallback always available.
- Current navigation state and outbound event hooks are present.

## DESIGN RULES
Header 64px mobile, roughly 72–80px desktop. Cream/light shell with controlled purple; yellow not used for every control. Logo remains unmodified. Footer follows page color rhythm and remains readable.

## COMPONENTS
SiteHeader, MobileMenu, SiteFooter, SkipLink, OrderChannelDialog, NavLink, SocialLinks. Do not create new Button/Dialog primitives.

## RESPONSIVE REQUIREMENTS
No overlap at 320px; account for safe areas; mobile drawer handles long labels and zoom; desktop nav does not wrap at target widths. Optional bottom navigation remains off until tested.

## ACCESSIBILITY
Semantic header/nav/footer; labeled navs; `aria-current`; menu button expanded/controls; drawer focus trap/Escape/return; skip link visible on focus; phone/address selectable; verified socials have network names.

## SEO
NAP must be server-rendered and identical to central config. Do not output unknown social links or schema here if it duplicates the metadata layer.

## PERFORMANCE
No client JS for static footer; keep scroll-state logic minimal; optimize logo; avoid global social/map embeds.

## DO NOT
Do not make header tall, hide Order inside mobile menu, invent open status, guess WhatsApp/social links, duplicate facts, or use a hover-only mega menu.

## ACCEPTANCE CRITERIA
- All navigation/order/contact links are correct and keyboard operable.
- Header/footer work on every route and width.
- NAP is exact and centrally sourced.
- Mobile menu manages focus and body scroll.
- No content is obscured by sticky elements.

## VALIDATION
Test all routes/active states, 320/360/768/1280 widths, 200% zoom, keyboard/screen reader landmarks, Escape/focus return, reduced motion, phone link format, external-link safety, and no layout shift during sticky transition.
