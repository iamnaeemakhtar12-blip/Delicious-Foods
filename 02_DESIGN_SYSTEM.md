# Delicious Foods Wah Cantt — Design System

> **Status:** Production specification with provisional brand values. No source logo/menu image files were available for direct sampling. Recalibrate brand hues against approved assets before sign-off, while preserving contrast relationships.

## 1. Philosophy
**Appetite with order.** The system translates the printed menu’s energetic purple/yellow/orange identity into a calm, scannable digital storefront. Food leads; color guides; cream breathes; motion confirms.

Core rules:
1. Use tokens only—no arbitrary colors, shadows, radii, or z-index values.
2. Default to warm neutral surfaces; saturated sections are exceptions.
3. Display typography is for short emotional moments, never dense UI.
4. Components support Stage 1 direct ordering and Stage 2 cart behavior without visual redesign.
5. Every state works with keyboard, zoom, reduced motion, and without color alone.

## 2. Color tokens
### Brand and semantic palette
```css
:root {
  --color-brand-primary: #8A0A78;
  --color-brand-primary-hover: #741066;
  --color-brand-primary-active: #5D0B52;
  --color-brand-primary-soft: #F5E7F2;
  --color-brand-deep: #54064F;
  --color-brand-secondary: #FFC928;
  --color-brand-secondary-hover: #F2B900;
  --color-brand-secondary-active: #D9A500;
  --color-brand-accent: #F28A22;
  --color-brand-accent-soft: #FFF0DE;

  --color-background: #FFF9EC;
  --color-surface: #FFFFFF;
  --color-surface-subtle: #FFF4DD;
  --color-surface-elevated: #FFFFFF;
  --color-surface-inverse: #251A26;

  --color-text-primary: #211820;
  --color-text-secondary: #5F515C;
  --color-text-muted: #7C6F79;
  --color-text-inverse: #FFFFFF;
  --color-text-on-yellow: #241A12;

  --color-border: #E7DCCF;
  --color-border-strong: #CDBEC8;
  --color-focus: #145FCC;
  --color-success: #18794E;
  --color-success-soft: #E7F6EE;
  --color-warning: #9A5B00;
  --color-warning-soft: #FFF3D6;
  --color-error: #B42318;
  --color-error-soft: #FDECEA;
  --color-info: #155EEF;
  --color-info-soft: #EAF1FF;
  --color-price: #6F075F;
  --color-deal-badge: #FFC928;
  --color-disabled-bg: #EAE3DD;
  --color-disabled-text: #756D72;
  --color-overlay: rgb(23 18 26 / 68%);
}
```

### Usage and contrast
- Primary purple may carry white large/body text only after WCAG verification with final sampled hue.
- Yellow always uses dark text; never white.
- Orange is not the default body-text color.
- Focus blue is intentionally distinct from brand colors and must remain visible on cream, white, purple, and yellow.
- Error/success always include icon or text, never color alone.
- Target WCAG 2.2 AA: 4.5:1 normal text, 3:1 large text and meaningful UI graphics.

### Page rhythm
Preferred sequence: **cream → controlled purple → cream → yellow/cream merchandising → purple → cream**. No more than two adjacent fully saturated section backgrounds.

## 3. Typography
### Families
- Display: **Fredoka Variable** (600–700). Friendly, rounded, legible for short Latin headings.
- Body/UI: **Manrope Variable** (400–800). Clear numerals and compact navigation.
- Urdu: **Noto Nastaliq Urdu** for content text after testing, with **Noto Sans Arabic** as UI fallback where compact controls require clearer metrics. Urdu must be human-reviewed.
- System fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.

Use `next/font` and only required subsets/weights. If font loading threatens performance, body may fall back to system sans; preserve metric compatibility.

### Tokens
```css
--font-display: "Fredoka", ui-rounded, system-ui, sans-serif;
--font-body: "Manrope", system-ui, sans-serif;
--font-urdu: "Noto Nastaliq Urdu", "Noto Sans Arabic", serif;

--text-xs: 0.75rem;   /* 12 */
--text-sm: 0.875rem;  /* 14 */
--text-md: 1rem;      /* 16 */
--text-lg: 1.125rem;  /* 18 */
--text-xl: 1.25rem;   /* 20 */
--text-2xl: 1.5rem;   /* 24 */
--text-3xl: 1.875rem; /* 30 */
--text-4xl: 2.25rem;  /* 36 */
--text-5xl: 3rem;     /* 48 */
--text-6xl: 4rem;     /* 64 */
```

- Hero: `clamp(2.5rem, 7vw, 4.75rem)`, line-height .98–1.05.
- H1: `clamp(2.25rem, 5vw, 4rem)`.
- H2: `clamp(1.75rem, 3vw, 2.75rem)`.
- Body line-height 1.55–1.7; UI 1.2–1.4.
- Avoid all caps for sentences. Optional eyebrow text may use 0.06em tracking and max 24 characters.
- Prices use tabular numerals.

## 4. Spacing
4px base, intentionally sparse scale:
```css
--space-0: 0;
--space-1: .25rem;
--space-2: .5rem;
--space-3: .75rem;
--space-4: 1rem;
--space-5: 1.25rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;
```
Section block padding: mobile 48–64px, tablet 72px, desktop 88–112px. Card gaps: 16px mobile, 20–24px larger.

## 5. Grid, breakpoints, containers
```text
sm  480px | md 768px | lg 1024px | xl 1280px | 2xl 1536px
```
- Mobile: 4-column conceptual grid, 16px gutters.
- Tablet: 8 columns, 24px gutters.
- Desktop: 12 columns, 24px gutters.
- `--container-sm: 720px`; `--container-content: 1120px`; `--container-wide: 1280px`.
- Container padding: 16px (<768), 24px (768–1279), 32px (1280+).
- Long-form text max width 68ch; descriptive UI copy 52–60ch.

## 6. Radius, border, shadow
```css
--radius-sm: .5rem;
--radius-md: .75rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
--radius-pill: 999px;
--border-width: 1px;
--border-width-strong: 2px;
--shadow-sm: 0 2px 8px rgb(33 24 32 / 8%);
--shadow-md: 0 10px 28px rgb(60 20 54 / 12%);
--shadow-lg: 0 22px 60px rgb(60 20 54 / 16%);
--shadow-focus: 0 0 0 3px rgb(20 95 204 / 35%);
```
Cards use border + minimal shadow by default. Avoid floating-everything aesthetics.

## 7. Z-index
```text
base 0 | raised 10 | sticky 30 | header 40 | backdrop 60 | modal 70 | toast 80
```
No arbitrary 9999 values.

## 8. Motion
```css
--duration-fast: 120ms;
--duration-normal: 200ms;
--duration-slow: 320ms;
--ease-standard: cubic-bezier(.2,.8,.2,1);
--ease-exit: cubic-bezier(.4,0,1,1);
```
- Hover lift: max `translateY(-2px)`.
- Image hover zoom: max 1.03.
- Modal: opacity + 8px translate, 200ms.
- Cart feedback: brief scale/confirmation, no confetti by default.
- Under `prefers-reduced-motion: reduce`, remove nonessential transforms, smooth scroll, and autoplay motion.

## 9. Iconography and motifs
Use one consistent outline icon library with 1.75–2px stroke; icons supplement labels. Emoji are acceptable in strategy examples but not the primary production category icon set. Create simple custom category illustrations only if stylistically consistent.

The drip motif may appear as:
- one SVG section divider,
- a cropped hero accent,
- a small underline/blob behind a short word.
Never place it behind dense text or repeat on every card.

## 10. Buttons
### Sizes
- sm: 36px min height; icon control still 44px touch target.
- md: 44px min height.
- lg: 52px min height.

### Variants
- **Primary:** purple background, white text; primary order action on light surfaces.
- **Secondary:** yellow background, dark text; merchandising/deal action.
- **Outline:** transparent, strong border, primary text.
- **Inverse:** white on purple.
- **Ghost:** navigation/low-emphasis action.
- **Danger:** error color for destructive admin actions only.

States: hover, active, focus-visible, loading, disabled. Loading preserves width and exposes status text to assistive technology. Disabled actions must not be links disguised with `aria-disabled` unless navigation semantics require it.

## 11. Price and badge
`Price` supports `current`, `old`, `prefix`, `suffix`, and size. Display `Rs. 500`; schema/data uses numeric value and `PKR`. Old prices require a valid promotion and accessible text—not strike-through alone.

Badges: Featured, Deal, New, Unavailable, Spicy only when data exists. Limit to two per card. Deal badge uses yellow/dark; unavailable uses neutral; do not label unverified “Bestseller.”

## 12. Cards
### Product card
- Image ratio: 4:3 default; square permitted in dense menu mode, consistent per grid.
- Body: category/optional badge, name (max two visual lines), short confirmed description (2–3 lines), price, action.
- Entire card may not be a button if it contains other controls. Use heading link plus distinct Add action.
- Mobile: action and price remain visible; no hover-only information.
- Unavailable: retain visibility, mute image, explicit label, disable add.

### Deal card
- Stronger color block, fixed bundle title, item list, price, `Order deal`.
- Do not infer discount amount without baseline price.
- Contents must remain visible without opening a modal.
- Featured card may span two columns but must not reorder reading meaningfully.

### Category card
- Visual, label, optional short descriptor.
- 44px minimum target; selected state uses border + icon/text cue.
- No inaccessible text over busy food photography without overlay.

## 13. Navigation
- Desktop header height: 72–80px; logo left, five links, Order Now right.
- Mobile header: 64px, logo, Order CTA, menu button. Drawer traps focus and closes on Escape/outside action.
- Sticky header gains a subtle border/shadow after scroll; does not consume excessive viewport.
- Current page uses `aria-current="page"`.
- Mobile bottom navigation is optional after usability validation; if used, max five items, respects safe-area inset, and does not duplicate/collide with sticky order controls.

## 14. Footer
Cream or deep-purple section depending preceding rhythm. Contains brand line, NAP, supplied hours marked in data as pending confirmation, menu links, order CTA, directions, and only verified social URLs. Phone is tappable. Heading hierarchy and landmark semantics remain correct.

## 15. Forms
- Persistent visible labels; placeholders are examples, never label substitutes.
- Input min height 48px; textarea min 120px.
- Error appears adjacent, connected via `aria-describedby`; summary at top for checkout.
- Required fields identified in text.
- Use appropriate autocomplete, inputmode, and native types.
- Do not block copy/paste or over-format Pakistan phone input.

## 16. Tabs, filters, search
- Category navigation is a horizontally scrollable tablist only if tabs truly control same-page panels; otherwise use links/chips with current-state semantics.
- Sticky filter row sits below header and supports keyboard scrolling.
- Search has label, clear action, debounced client filtering, and useful zero state.
- Filter state can be encoded in URL query parameters for shareability.

## 17. Modal and drawer
- Product detail may use modal on desktop and bottom sheet/full-screen dialog on mobile; a canonical product URL must still exist if SEO/sharing is required.
- Focus trap, initial focus, Escape close, focus return, backdrop label, and body-scroll lock are mandatory.
- Cart drawer is right-side desktop, full-height mobile sheet; summarize item name, variants, quantity, price, subtotal, and primary next action.

## 18. Feedback states
- Loading: skeleton dimensions match final layout; avoid spinners for full pages.
- Empty: explain cause and offer one next action.
- Error: human-readable message, retry when possible, preserve user input.
- Toast: status only, not the sole place for critical errors; pause timeout on hover/focus.

## 19. Responsive rules
- Design at 320px minimum viewport without horizontal page scrolling.
- Grid: 1 column small mobile, 2 cards where content allows from ~540px, 3 at desktop, 4 only for compact cards at wide screens.
- Hero: stacked mobile; split 5/7 or 6/6 desktop. Keep actions above fold where practical.
- Deal content never shrinks below readable sizes.
- Sticky controls account for iOS safe areas.
- Tables transform into labelled lists/cards; do not require horizontal scrolling for checkout/order summaries.
- Test at 200% browser zoom and text enlargement.

## 20. Image treatment
- Use `next/image`, explicit dimensions/aspect ratio, `sizes`, AVIF/WebP, and blur/neutral placeholders.
- Hero image may be priority/LCP; all below-fold images lazy load.
- Do not lazy-load likely LCP.
- Focal-point metadata should control cropping.
- Decorative organic SVGs are `aria-hidden`; meaningful food alt text describes the dish without keyword stuffing.
- Placeholder path naming must contain `placeholder` and must not claim authenticity.

## 21. Accessibility baseline
- WCAG 2.2 AA target.
- Skip link, semantic landmarks, one H1, logical headings.
- 44×44px touch targets where possible.
- Keyboard operability for navigation, filters, dialogs, quantity, cart.
- Visible focus on every interactive element.
- Announce cart quantity updates with a polite live region.
- Avoid automatic carousels; if unavoidable, provide pause and controls.
- Language/dir attributes for Urdu blocks.
- Test with keyboard, screen reader smoke test, 200% zoom, reduced motion, forced colors, and contrast tooling.

## 22. Implementation mapping
Expose tokens through CSS variables and Tailwind theme aliases. Components must consume semantic names (`bg-background`, `text-primary`) rather than literal hex values. Storybook is optional; a `/design-system` development route or component test fixtures are sufficient for Stage 1 and must not ship indexed in production.
