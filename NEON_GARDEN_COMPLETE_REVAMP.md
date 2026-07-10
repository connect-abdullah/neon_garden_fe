# Neon Garden Website — Complete Revamp Specification

## Master instruction for Cursor

Revamp the existing Neon Garden website in the current codebase. The live implementation target is:

- `https://neon-garden-fe.vercel.app/`

Do **not** rebuild the project blindly or remove working functionality. First inspect the existing framework, routes, components, forms, package data, navigation, responsive behavior, and integrations. Reuse the current architecture where practical, then refactor the visual layer and component structure to match this specification.

The supplied screenshots are **design references only**. Do not place the screenshots themselves on the website. Recreate their visual language with production-ready HTML/CSS/components and with the actual content and images available in the project.

---

# 1. Non-negotiable image and asset rule

Use the **new local images already stored inside `public/assets`** throughout the revamped website.

This applies to:

- Hero imagery
- Service/discovery cards
- Package-list thumbnails
- Package-detail hero images
- About/editorial imagery
- Statistics background imagery
- CTA backgrounds
- Related-package imagery, if used
- **Every image in the gallery**

Implementation rules:

1. Inspect `public/assets` before coding and create a deliberate asset map based on the actual files present.
2. Do not invent asset filenames.
3. Do not leave broken paths or placeholder URLs.
4. Do not use remote stock-image URLs when a suitable local asset exists.
5. Do not keep old gallery imagery if newer relevant images exist in `public/assets`.
6. Avoid repeating the same image in multiple prominent sections unless there are not enough appropriate assets.
7. Use descriptive `alt` text based on the visible event scene, not the filename.
8. Use the framework’s optimized image component where available, such as `next/image` in Next.js.
9. Set explicit dimensions or aspect ratios to prevent layout shift.
10. Use `object-fit: cover` and intentional `object-position` values so people, tables, signs, food, florals, and décor are not awkwardly cropped.

Create a centralized image map rather than scattering raw image paths throughout components. Example structure:

```ts
export const siteImages = {
  hero: "/assets/...",
  storyLeft: "/assets/...",
  storyCenter: "/assets/...",
  storyRight: "/assets/...",
  statsBackground: "/assets/...",
  services: {
    eventConcept: "/assets/...",
    catering: "/assets/...",
    styling: "/assets/...",
  },
  gallery: [
    "/assets/...",
    "/assets/...",
  ],
};
```

Use actual filenames discovered in `public/assets`.

---

# 2. Overall design direction

The redesigned site should feel like a premium editorial events and luxury picnic brand rather than a generic event-hire template.

The visual language should combine:

- Elegant, high-contrast serif typography for major statements
- Clean modern sans-serif typography for navigation, body copy, labels, controls, and package information
- Deep forest green as the core brand color
- Warm white and subtle blush/stone backgrounds
- Very thin neutral borders
- Large-scale event photography
- Generous negative space
- Simple, restrained interactions
- Minimal shadows
- Strong asymmetrical editorial layouts
- Rounded pill buttons only where shown or functionally useful
- Square or nearly square image crops in service and package cards
- Full-width cinematic image sections for emotional impact

The site must not look overly glossy, overly rounded, neon-heavy, or like a SaaS landing page. Avoid gradients except for subtle dark image overlays. Avoid excessive glassmorphism, bright accent colors, heavy card shadows, decorative blobs, and generic icon grids.

---

# 3. Design tokens

Use CSS variables or the project’s theme system so the design remains consistent.

```css
:root {
  --color-forest: #002c20;
  --color-forest-deep: #001f17;
  --color-ink: #10251f;
  --color-body: #5f6461;
  --color-muted: #858a87;
  --color-white: #ffffff;
  --color-ivory: #fbfaf7;
  --color-blush: #f6f1ef;
  --color-border: #dedfdb;
  --color-border-soft: #ecece8;
  --color-overlay: rgba(0, 20, 14, 0.48);

  --radius-small: 4px;
  --radius-medium: 10px;
  --radius-pill: 999px;

  --container-max: 1760px;
  --page-gutter-desktop: clamp(32px, 4vw, 72px);
  --page-gutter-mobile: 20px;

  --section-space-desktop: clamp(96px, 10vw, 170px);
  --section-space-tablet: 88px;
  --section-space-mobile: 64px;
}
```

These values may be adjusted slightly after comparing against the references, but the final result should preserve the same restrained forest/ivory/blush character.

---

# 4. Typography

Use two font families:

1. **Display serif** for large editorial headings and package-detail titles.
2. **Modern sans serif** for UI, body copy, package titles, labels, and accordions.

Preferred pair if the project does not already include suitable brand fonts:

- Display: `Cormorant Garamond`, `Italiana`, or another refined high-contrast editorial serif
- Sans: `Manrope`, `DM Sans`, or `Inter`

Do not mix more than two primary font families.

Suggested scale:

```css
--text-display-xl: clamp(58px, 7.2vw, 128px);
--text-display-lg: clamp(48px, 5.4vw, 92px);
--text-h1-sans: clamp(50px, 5vw, 86px);
--text-h2: clamp(38px, 4vw, 66px);
--text-h3: clamp(28px, 2.5vw, 44px);
--text-body-lg: clamp(18px, 1.4vw, 24px);
--text-body: 17px;
--text-small: 14px;
```

Typography behavior:

- Major serif headings should use tight line-height, approximately `0.92–1.02`.
- Sans-serif section headings should use line-height around `1.05–1.12`.
- Body text should use line-height around `1.45–1.65`.
- Use normal or medium weight for most text.
- Avoid excessive bold text.
- Use uppercase only for small labels, button text, eyebrow text, and major editorial headings where appropriate.
- Keep letter spacing restrained. Buttons may use `0.04em–0.08em` tracking.

---

# 5. Global layout and responsive system

## Desktop

- Maximum content width: approximately `1760px`.
- Use generous horizontal gutters.
- Full-bleed photographic sections may extend close to the viewport edges while retaining a thin outer margin, as shown in the references.
- Use thin horizontal and vertical rules to create structure.

## Tablet

- Reduce gutters to `28–36px`.
- Change four-column structures to two columns where needed.
- Stack complex package rows into a two-column card layout before reaching mobile.

## Mobile

- Use `20px` outer padding.
- Stack editorial columns.
- Maintain large typography but prevent awkward one-word wrapping.
- Do not shrink text so far that the premium editorial effect is lost.
- Replace oversized desktop controls with touch targets of at least `44px`.
- Avoid horizontal page overflow.

Breakpoints should follow the existing project conventions where possible. Suggested behavior ranges:

- Mobile: below `768px`
- Tablet: `768px–1199px`
- Desktop: `1200px` and above

---

# 6. Header and navigation

No dedicated navbar reference was supplied, so redesign the current navbar to support the new visual system without changing the existing information architecture unnecessarily.

## Desktop navbar

- Position over the hero image initially.
- Use white logo and navigation text over the hero.
- Keep height approximately `84–96px`.
- Use generous left and right padding aligned with the hero content.
- Keep the brand/logo on the left.
- Keep current primary links in the middle or right.
- Retain the current primary booking/contact CTA only once; do not duplicate “Book,” “Contact,” or “Schedule” actions next to one another.
- A primary CTA may use a white pill with forest text when the navbar overlays the hero.
- On scroll, transition to a warm-white or white background with forest text and a very thin bottom border.
- Avoid heavy shadow.

## Mobile navbar

- Keep logo left and menu trigger right.
- Use a clean full-screen or right-side menu panel.
- Make links large and easy to tap.
- Keep only one primary booking CTA.
- Lock body scrolling while the menu is open.
- Preserve keyboard navigation and visible focus states.

---

# 7. Homepage section order

Use the following order unless the existing site contains a required functional section that must be preserved:

1. Header / navigation
2. Hero
3. Editorial brand-story / about section
4. Discover services section
5. Packages section
6. Statistics section
7. Gallery
8. FAQ
9. Footer

The exact content should come from the current website and current project data. Do not replace real business information with reference-template copy unless specifically required.

---

# 8. Hero section

Reference file: `hero_section.png`

## Visual structure

Create a full-width, cinematic hero using one of the strongest new event images from `public/assets`.

- Hero should fill most or all of the first viewport.
- Suggested height: `min(100svh, 980px)` with a minimum of approximately `720px` on desktop.
- Image must cover the entire section.
- Use a dark forest/black overlay, stronger on the left and lighter toward the right so the event scene remains visible.
- Keep the focal event detail visible: table, florals, lights, décor, guests, or installation.
- The reference uses foreground blur and depth; choose an asset that provides a similarly immersive result where possible.

## Content placement

Position content in the left half, vertically around the middle to lower-middle of the hero.

Include:

- A very large uppercase serif headline, split across two or three purposeful lines
- A concise supporting paragraph beneath it
- A minimal text-link CTA with a right-facing arrow and underline/bottom rule

Keep the current website’s brand message and CTA destination, but rewrite line breaks and hierarchy to fit the reference style. Do not use a standard filled button for the main hero CTA unless a secondary CTA is absolutely required.

## Suggested desktop dimensions

- Content width: `min(900px, 62vw)`
- Headline: `clamp(60px, 6.8vw, 120px)`
- Paragraph width: `min(820px, 55vw)`
- Paragraph font: `18–22px`
- CTA top margin: `48–64px`

## Interaction

- Arrow shifts approximately `6px` to the right on hover.
- Underline expands or becomes slightly brighter on hover.
- No bouncing, glowing, or exaggerated animation.

## Mobile

- Minimum height approximately `720px` or `85svh`.
- Use a stronger overlay for readability.
- Align content near the bottom with enough clearance from the mobile navbar.
- Headline around `44–58px`, depending on line length.
- Keep paragraph readable and no wider than `34rem`.

---

# 9. Editorial brand-story / about section

Reference file: `Screenshot 2026-07-10 at 1.08.38 PM.png`

## Purpose

This section should establish the brand story through one large statement and an editorial image composition.

## Layout

- White or ivory background.
- Large centered uppercase serif heading across two lines.
- Centered supporting paragraph directly below.
- Three images arranged in an asymmetrical composition:
  - Smaller portrait image on the left, positioned lower
  - Taller/larger central image as the visual anchor
  - Smaller portrait or square image on the right, positioned slightly above or around the center of the main image
- Maintain large gaps and ample white space.

## Image usage

Use three different new images from `public/assets` that work together:

- A décor/detail image
- A wide or vertical event-table image
- A catering/styling/detail image

Do not repeat the hero image here.

## Desktop sizing

- Heading max width: approximately `1100–1250px`
- Supporting paragraph max width: approximately `850px`
- Central image width: around `35–40%` of the content area
- Side images: around `20–24%` each

## Mobile

- Keep the heading centered.
- Convert the collage into a deliberate stacked editorial sequence, not three tiny columns.
- Show central image first, then two supporting images in a two-column row or vertical stack.

---

# 10. Discover services section

Reference file: `discover.png`

## Section header

Use a two-part header row:

- Large left-aligned sans-serif heading, split across two lines if needed
- Dark forest pill CTA on the right labeled with the current equivalent of “View All Services”

The heading should feel oversized and spacious, not tightly contained.

## Card grid

Display three equal-width service cards across desktop.

Each card contains:

1. Large image with a near-square or `4:3` crop
2. Service title in a bold/medium sans-serif
3. One or two lines of supporting text
4. Optional subtle text link or arrow only if the existing site requires a service-detail route

Card styling:

- White background
- Thin vertical dividers between cards
- Thin top and bottom section borders
- Very little or no shadow
- Small image radius, approximately `4–6px`
- Large inner padding, around `28–36px`

The section may use a full-width bordered shell, closely matching the screenshot.

## Hover behavior

- Image scales from `1` to roughly `1.025` inside an overflow-hidden frame.
- Title or arrow shifts subtly.
- Do not lift the whole card with a large shadow.

## Mobile

- Stack cards vertically.
- Remove unnecessary vertical divider lines and use horizontal separators.
- Place the “View All Services” CTA below the heading or at the bottom of the section.
- Keep images wide and prominent.

---

# 11. Packages section — critical interaction

Reference file: `packages.png`

This section is one of the most important parts of the redesign.

## Top link

At the top of the section, place a centered underlined text link similar to:

- “Explore Picnic Packages” followed by a small right arrow

Use the current site’s terminology if it differs. This is a simple editorial link, not a large CTA button.

## Package row layout

On desktop, each package appears as one large horizontal row divided into four areas:

1. **Package image**
   - Square or near-square image on the far left
   - Approximate desktop width: `360–460px`, depending on viewport
   - Use the package’s mapped local image from `public/assets`

2. **Package identity**
   - Large sans-serif package title
   - Title may wrap across two lines
   - Two outlined pill metadata chips beneath:
     - Guest range
     - Price range

3. **Inclusions preview**
   - A clean bullet list showing approximately four to five main inclusions
   - Use current package content/data
   - Medium gray body text
   - Comfortable vertical spacing

4. **Chevron navigation control**
   - Narrow vertical rectangle at the far right
   - Contains only a centered diagonal or right-facing arrow/chevron
   - First/default highlighted row may use a dark forest fill with white arrow
   - Other rows may use a white/transparent background with thin border and forest arrow

Use a thin horizontal divider between package rows.

## Mandatory navigation behavior

There must **not** be a visible “Go to Package” button or label.

The navigation action is represented by the chevron/arrow control.

- Clicking the chevron opens that package’s package-detail page.
- Give the control an accessible label, for example: `aria-label="View Corporate Outdoor Retreat package"`.
- The arrow must be a real link when navigation is intended, not a `div` with an `onClick` handler.
- The chevron must support keyboard focus, Enter activation, and visible focus styling.
- Do not add duplicate “Read More,” “View Package,” or “Go to Package” buttons within the same row.
- The package title and image may optionally link to the same route for usability, but the only visible navigation control should remain the chevron.

## Hover/focus behavior

When hovering or focusing a row:

- The row image may scale slightly.
- The arrow may shift up-right or right by `4–6px`.
- The chevron control may transition from outline to forest fill.
- The title may change slightly in color.
- Keep the effect refined and fast, around `180–260ms`.

## Tablet

Use a two-column composition:

- Image left
- Package title, chips, list, and chevron right

## Mobile

Convert each package into a stacked card:

1. Full-width image
2. Title
3. Guest and price pills
4. Inclusions list
5. Square chevron link aligned to the lower right

Do not turn the chevron into a text button on mobile.

---

# 12. Package data and routing architecture

Implement packages as reusable structured data rather than hardcoding a separate page component for every package.

Recommended data shape:

```ts
export type Package = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  price: string;
  guestRange: string;
  listImage: string;
  heroImage: string;
  inclusionsPreview: string[];
  inclusions: Array<{
    title: string;
    description: string;
  }>;
  additionalOptions: string[];
  closingNote?: string;
  relatedPackageSlugs: string[];
  ctaImage?: string;
};
```

Use the project’s existing package names, prices, guest ranges, descriptions, and inclusions where available. Do not overwrite correct current data merely to copy template wording.

Recommended route pattern:

- `/packages`
- `/packages/[slug]`

If the existing app uses another route pattern, preserve it unless there is a clear reason to migrate it. Ensure all package chevrons point to valid routes and no package page produces a 404.

---

# 13. Package-detail page

Reference files:

- `package_page.png`
- `Product_page 1.png`
- `product_page_2.png`
- `product_page_3.png`

Build one reusable package-detail template populated by the package data.

## 13.1 Package header panel

Create a large pale blush/stone panel near the top of the page.

### Left side

- Very large uppercase serif package title
- Short description beneath in sans-serif body copy
- Title should occupy most of the visual weight
- Allow purposeful line breaks for long titles

### Right side: package details card

Place a clean white card inside the blush panel.

The card includes:

- Heading: “Package Details” or current equivalent
- One short explanatory line
- Two-column details row:
  - `PRICE`
  - `GUESTS`
- Actual values below each label
- Full-width dark forest pill booking CTA

Card styling:

- White background
- No heavy shadow
- Generous internal padding
- Very small or no border radius, depending on the project’s visual consistency
- CTA height around `58–68px`

The booking CTA should use the existing booking/contact flow and should not point to a dead route.

## 13.2 Main package image

Immediately below the header panel, show a large edge-to-edge package image.

- Use the corresponding local package asset.
- Desktop aspect ratio approximately `2.2:1–2.8:1` depending on the image.
- Use `object-position` intentionally.
- Keep a small gap between the blush panel and image, matching the screenshot.

## 13.3 Overview content and related packages

Below the main image, create a two-column layout.

### Main content column

Include:

- “Package Overview” heading
- Overview paragraph
- “What’s included:” heading
- Bulleted list of inclusions
- Each inclusion may begin with a bold label followed by descriptive text
- “Additional Options:” heading
- Additional-options bullet list
- Optional closing paragraph

Use comfortable line length, approximately `65–80` characters per line.

### Related packages sidebar

Use a pale blush panel titled “You May Also Like.”

- Show related package names as full-width text links
- Separate each item with a thin horizontal rule
- Exclude the package currently being viewed
- Hover may shift the text slightly right or reveal a subtle arrow
- Related links must open the correct package routes

## 13.4 Package-detail CTA section

At the bottom of each package page, include a full-width photographic CTA section.

- Use a new local event/floral image as the background.
- Add a subtle dark overlay if required for contrast.
- Place a large white rectangular content panel centered over the image.
- Inside the panel:
  - Small uppercase eyebrow in the upper left
  - Small decorative event image in the upper right
  - Large centered uppercase serif CTA heading
  - Short centered paragraph
  - Dark forest pill CTA
  - Separate circular arrow control visually attached to or immediately beside the pill

The CTA should use the existing booking or enquiry destination.

## Mobile package page

- Stack package title and details card.
- Details card becomes full width.
- Main image remains wide.
- Related packages move below the overview.
- CTA overlay card uses nearly the full width and smaller display typography.
- Do not allow the long package title to overflow.

---

# 14. Statistics section

Reference file: `stats.png`

## Layout

Create a wide, cinematic image section using one of the strongest wide event images from `public/assets`.

- Keep a narrow margin around the image on large screens.
- Use a dark gradient from transparent in the top area to near-black/forest at the bottom.
- Place statistics in a row across the bottom portion.
- Use five columns on large desktop if there are five valid statistics in the current content.

Each statistic contains:

- Large elegant serif number
- Optional superscript `+`
- Short two-line description beneath in white sans-serif

Use actual verified company statistics from the current website/content. Do not invent numbers. If the current site contains fewer statistics, use the actual available count and rebalance the grid.

## Mobile

- Keep the image as the section background.
- Use a stronger overlay.
- Display stats in a two-column grid, with the last item spanning the width if needed.
- Keep text left aligned or consistently centered; do not mix alignment.

---

# 15. Gallery

The gallery must use the **new images from `public/assets`**.

Do not retain old gallery images merely because the current gallery component already references them.

## Visual direction

The gallery should feel editorial and curated rather than like a uniform image dump.

Preferred structure:

- One large featured image
- Several supporting portrait, landscape, and square tiles
- Mixed but controlled aspect ratios
- Consistent narrow gaps
- No decorative text overlays on every image
- Optional category/filter controls only if they already exist and are functional

Suggested desktop grid:

- 12-column CSS grid
- Featured tile spans 7 columns and 2 rows
- Supporting tiles span 5, 4, or 3 columns depending on image orientation
- Maintain a coherent visual rhythm

## Gallery interaction

- Images may open in an accessible lightbox if one already exists or can be implemented cleanly.
- Lightbox must support keyboard navigation, Escape to close, focus trapping, and mobile swipe where practical.
- Use subtle image zoom on hover.
- Do not apply heavy overlays or captions unless the current gallery has meaningful captions.

## Image-selection rules

- Select the best available event, décor, catering, installation, venue, signage, floral, and guest-experience images from `public/assets`.
- Avoid near-duplicates.
- Avoid repeating a gallery image already used as a hero unless needed.
- Ensure every gallery image has meaningful alt text.

---

# 16. FAQ section

Reference file: `faq.png`

## Intro

- Small centered uppercase eyebrow above the heading
- Large centered sans-serif heading split across multiple lines
- Heading max width around `900–1050px`
- Large breathing room before the accordion

## Accordion structure

Use a centered max-width column.

Each FAQ row contains:

1. Three-digit index such as `001`, `002`, `003`
2. Question text
3. Plus icon on the far right

Styling:

- Thin top/bottom separators
- Large vertical padding, around `38–52px` on desktop
- Index smaller than question but clearly visible
- Plus icon made with CSS or a clean icon component
- No boxed accordion cards
- White or ivory background

## Open state

- Plus rotates into an `×` or becomes a minus.
- Answer expands below the question with a smooth height/opacity transition.
- Answer aligns with the question column, not under the index.
- Keep only one panel open at a time unless the current FAQ explicitly allows multiple.

## Accessibility

- Use semantic buttons.
- Add `aria-expanded` and `aria-controls`.
- Keep visible keyboard focus.
- Respect `prefers-reduced-motion`.

## Mobile

- Use a compact three-column row: index, flexible question, icon.
- Reduce row padding without making it cramped.
- Keep question text at least `20–22px` if possible.

---

# 17. Footer

No dedicated footer screenshot was supplied. Preserve the current footer’s real contact information, legal links, social links, and functional destinations, but restyle it to match the new design.

Recommended direction:

- Deep forest background
- White/ivory typography
- Large logo or wordmark area
- Clear navigation columns
- Contact information and social links
- One restrained booking/enquiry CTA if not already repeated excessively above
- Thin translucent divider
- Bottom row for copyright, privacy, and terms
- Generous padding and no heavy card containers

Do not duplicate the full navbar inside the footer unless it is genuinely useful. Remove obsolete or dead links.

---

# 18. Buttons, links, and controls

Use a small, consistent set of control styles.

## Primary pill button

- Dark forest background
- White text
- Height around `56–64px`
- Horizontal padding around `30–42px`
- Uppercase or small tracked label
- Full rounded pill
- Hover: slightly lighter forest or subtle opacity change

## Light pill button

- White background
- Forest text
- Thin border where needed

## Editorial text link

- Inline arrow
- Underline or bottom rule
- No filled background

## Chevron control

- Square or tall rectangular control
- Arrow only
- Must have accessible label
- Used for package navigation
- Do not add visible “Go to Package” text

All interactive controls must have:

- Hover state
- Focus-visible state
- Disabled state if relevant
- Minimum `44px` touch target

---

# 19. Motion and transitions

Motion should be subtle and premium.

Use:

- Section reveal with slight upward movement and opacity
- Image hover scale of no more than `1.03`
- Arrow movement of `4–6px`
- Accordion transition around `220–320ms`
- Navbar background transition on scroll

Do not use:

- Continuous floating effects
- Large parallax that harms performance
- Excessive text animation
- Cursor-following effects
- Bright glow or neon animation

Disable or simplify animation for `prefers-reduced-motion: reduce`.

---

# 20. Content rules

1. Preserve accurate current business details.
2. Preserve current routes and working integrations where possible.
3. Do not copy template-brand names such as “Edenly” into Neon Garden.
4. Replace reference-template copy with Neon Garden’s actual content.
5. Do not invent pricing, guest counts, statistics, service inclusions, contact details, or testimonials.
6. Keep package data consistent between the package list and package-detail pages.
7. Use consistent terminology: choose “package,” “service,” “event,” and “booking” labels deliberately.
8. Avoid duplicate calls to action in the same visual area.
9. Correct typos, inconsistent capitalization, and broken punctuation in the current content.

---

# 21. Component architecture

Refactor repeated UI into reusable components. Suggested structure:

```txt
components/
  layout/
    Header
    MobileMenu
    Footer
    Container
    SectionHeader
  home/
    Hero
    BrandStory
    ServicesGrid
    PackagesList
    PackageRow
    StatsSection
    Gallery
    FAQ
    FAQItem
  packages/
    PackageHeader
    PackageDetailsCard
    PackageOverview
    RelatedPackages
    PackageCTA
  ui/
    PillButton
    TextArrowLink
    ChevronLink
    ResponsiveImage
```

Names may follow the existing codebase conventions.

Avoid one giant homepage component. Keep package content in data/config, not repeated JSX.

---

# 22. SEO and metadata

Preserve or improve the current site’s SEO implementation.

For each package page:

- Unique page title
- Unique meta description
- Canonical URL
- Open Graph title, description, and package image
- Descriptive heading structure with only one `h1`
- Valid internal links

Add structured data only where accurate and appropriate. Do not add fake review scores or fabricated event offers.

---

# 23. Accessibility

Meet practical WCAG AA expectations.

- Maintain sufficient contrast over imagery.
- Use semantic heading order.
- Use real links for navigation.
- Use buttons only for actions.
- Give icon-only controls accessible names.
- Add alt text to meaningful images and empty alt text to purely decorative images.
- Ensure keyboard navigation works for menu, packages, gallery/lightbox, FAQ, and forms.
- Use visible focus states.
- Associate labels and error messages with form fields.
- Do not rely on color alone to communicate state.

---

# 24. Performance

- Optimize all images.
- Use responsive `srcset`/image sizes.
- Prioritize only the hero image and above-the-fold critical assets.
- Lazy-load below-the-fold images.
- Avoid loading every full-resolution gallery image immediately.
- Reserve image dimensions to prevent cumulative layout shift.
- Avoid unnecessary animation libraries.
- Reuse current dependencies where possible.
- Do not ship the reference screenshots as production assets.

---

# 25. Implementation sequence

Follow this order:

1. Audit the current repository and routes.
2. Inventory the actual images in `public/assets`.
3. Create the centralized image map.
4. Create/update design tokens and typography.
5. Rebuild header and hero.
6. Build brand-story and services sections.
7. Create package data model and package rows.
8. Connect each package chevron to its valid detail route.
9. Build reusable package-detail template.
10. Update statistics with verified current data.
11. Rebuild gallery using new `public/assets` images.
12. Rebuild FAQ accordion.
13. Restyle footer.
14. Complete responsive pass.
15. Complete accessibility pass.
16. Test all routes, links, package chevrons, booking CTAs, forms, and mobile navigation.
17. Run lint, type-check, and production build.

---

# 26. Acceptance checklist

The revamp is complete only when all of the following are true:

- [ ] Hero closely reflects `hero_section.png` in composition, scale, typography, and image treatment.
- [ ] Brand-story section reflects the centered serif statement and asymmetrical three-image composition.
- [ ] Discover section reflects `discover.png` with its large heading, right-side CTA, and three bordered image cards.
- [ ] Packages are displayed as horizontal rows on desktop.
- [ ] Every package row has image, title, metadata pills, inclusions preview, and a far-right chevron.
- [ ] There is no visible “Go to Package” button or label.
- [ ] Clicking a package chevron opens the correct package-detail page.
- [ ] Package chevrons are keyboard accessible and have accessible labels.
- [ ] All package-detail pages use one reusable template.
- [ ] Package-detail header, detail card, panoramic image, overview, related list, and CTA match the supplied product-page references.
- [ ] Statistics use a full-width event image with a dark lower overlay and verified company numbers.
- [ ] FAQ matches the indexed editorial accordion layout.
- [ ] All newly used imagery comes from `public/assets`.
- [ ] The gallery has been fully updated with new images from `public/assets`.
- [ ] No broken image paths exist.
- [ ] No remote placeholder or template-brand content remains.
- [ ] Desktop, tablet, and mobile layouts are complete.
- [ ] Existing working forms and integrations remain functional.
- [ ] No dead internal links or package routes exist.
- [ ] The project passes lint, type-checking, and production build.

---

# Final instruction

Implement the redesign faithfully, but do not copy the reference template’s brand name or placeholder content. The screenshots define the **visual system, layout, spacing, typography, imagery treatment, package interaction, and package-detail structure**. Neon Garden’s existing business content, routes, booking flow, and data must remain accurate and functional.

Most importantly:

- Use the **new images from `public/assets` everywhere appropriate**.
- Use those new images in the **gallery as well**.
- Keep packages horizontal on desktop.
- Use the **chevron** as the visible package-page navigation control.
- Do **not** add a visible “Go to Package” button.
