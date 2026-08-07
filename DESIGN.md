# DESIGN.md — Planet Health Care Design System

---

## 1. Brand

**Planet Health Care** — a multidisciplinary clinic in North London, Ontario.

**Tagline:** Better Care. Better Health. Better Tomorrow.

**Positioning:** the differentiator is not equipment or price, it is
*coordination*. Seven disciplines share one roof and one set of notes about each
patient. Everything in the design should feel like one connected clinic rather
than a directory of separate practices.

**Personality:** professional · trustworthy · compassionate · modern · clean ·
premium · human · accessible.

**What to avoid:** stock-photo hospital template, clip-art crosses, teal-on-white
1990s medical, heavy glassmorphism, gradient overload.

### The mark

The clinic's own logo: a gold ring enclosing a blue human figure and a wire-frame
globe, beside a gold "Planet HEALTH CARE" wordmark.

It ships as a single trimmed, transparent PNG (`public/images/logo.png`) so the
same asset reads correctly on the light canvas and on dark navy. It is rendered
only through `components/ui/Logo.jsx` — never inline an `<img>` for it elsewhere.
The favicon and PWA icon (`app/icon.png`, `public/icon-512.png`) are the circular
mark on brand navy `#060666`.

**Gold belongs to the logo and nothing else.** It is not a UI colour: no gold
buttons, borders, headings or icons. The interface stays on the blue → teal →
violet → amber hierarchy below, which lets the gold mark read as the brand
signature rather than one more accent competing for attention.

### Signature element

**The connector line.** A single hairline running through a set of items,
sometimes with node dots, expressing "separate disciplines, one shared plan."
It appears in the trust band, in the hero's floating card, beside the numbered
principle lists and in the service first-visit steps. The `.connector` class in
`globals.css` is the blue→teal gradient version.

This is the one place boldness is spent. Everything around it stays quiet.

---

## 2. Colour

All colour is defined as CSS custom properties in `app/globals.css` (space-separated
RGB channels so Tailwind opacity modifiers work) and surfaced as utilities in
`tailwind.config.js`. **Components never contain hex values.**

### Brand blue — primary identity

| Token       | Light     | Dark      | Use                                    |
| ----------- | --------- | --------- | -------------------------------------- |
| `brand-50`  | `#EFF6FF` | same      | Faintest tint                          |
| `brand-100` | `#DBEAFE` | same      | Tint backgrounds                       |
| `brand-300` | `#93C5FD` | same      | Decorative glow                        |
| `brand-400` | `#60A5FA` | same      | Light accent, dark-mode glow           |
| `brand-500` | `#3B82F6` | same      | Gradient midpoint                      |
| `brand-600` | `#2563EB` | `#3B82F6` | **Primary** — buttons, links, icons    |
| `brand-700` | `#1D4ED8` | `#2563EB` | Hover, CTA band background             |
| `brand-800` | `#1E40AF` | same      | Utility bar, trust band                |
| `brand-900` | `#1E3A8A` | same      | Deepest gradient stop, image overlay   |

`brand-600` and `brand-700` lift one step in dark mode so they keep contrast
against navy.

### Accents

| Token        | Hex       | Reserved for                                              |
| ------------ | --------- | --------------------------------------------------------- |
| `teal-500`   | `#10B981` | Wellness, success, checkmarks, secondary CTA, eyebrows on dark |
| `teal-400`   | `#34D399` | Dark-background text and icons                            |
| `teal-600`   | `#059669` | Teal text on light backgrounds (contrast)                 |
| `violet-500` | `#8B5CF6` | **Psychology only** — and the VAC program badge           |
| `amber-500`  | `#F59E0B` | **Star ratings only** — and one warning callout           |

**Hierarchy: blue → teal → violet → amber.** They are not equal. Blue carries
the interface. Teal confirms and reassures. Violet marks one distinct discipline.
Amber appears perhaps twice on the whole site.

If you are reaching for a fifth colour, the answer is a neutral.

### Semantic surfaces

| Token      | Light     | Dark      | Use                              |
| ---------- | --------- | --------- | -------------------------------- |
| `canvas`   | `#FFFFFF` | `#0F172A` | Page background                  |
| `surface`  | `#F8FAFC` | `#111827` | Alternating section bands        |
| `elevated` | `#FFFFFF` | `#1E293B` | Cards, panels, menus             |
| `line`     | `#E2E8F0` | `#334155` | All borders and dividers         |

### Semantic text

| Token     | Light     | Dark      | Use                          |
| --------- | --------- | --------- | ---------------------------- |
| `strong`  | `#0F172A` | `#F8FAFC` | Headings, emphasis           |
| `body`    | `#334155` | `#CBD5E1` | Body copy                    |
| `muted`   | `#64748B` | `#94A3B8` | Supporting copy, captions    |
| `inverse` | `#FFFFFF` | `#0F172A` | Text on a filled brand block |

Because these are semantic, `text-muted` is correct in both themes — you rarely
need a `dark:` variant. Reach for `dark:` only when a value genuinely differs by
theme (e.g. `text-teal-600 dark:text-teal-400` for contrast).

---

## 3. Light mode

Bright, clinical, spacious. White canvas, `#F8FAFC` bands to separate sections,
white cards with a hairline border and a soft shadow. Generous whitespace does
the work; shadows stay subtle.

## 4. Dark mode

A **layered navy interface**, not an inversion.

```
Background   #0F172A   canvas
Bands        #111827   surface
Cards        #1E293B   elevated
Borders      #334155   line
Primary      #3B82F6   brand-600 (lifted)
Teal         #10B981
Text         #F8FAFC   strong
Muted        #94A3B8   muted
```

Rules:

- Depth comes from surface *lightness* steps, not from heavy shadows.
- Photographs get a stronger overlay in dark mode (`Figure` handles it) so they
  do not glare against navy.
- Colour tints stay low-alpha (`bg-brand-600/10`) so they read as tinted glass
  rather than blocks of paint.
- Check every hover state — a hover that lightens in light mode may need to
  lighten differently on navy.

---

## 5. Typography

| Role        | Face               | Weights       | Notes                              |
| ----------- | ------------------ | ------------- | ---------------------------------- |
| Display     | Plus Jakarta Sans  | 600, 700, 800 | Headings, stat figures, nav labels |
| Body / UI   | Inter              | 400, 500, 600, 700 | Paragraphs, labels, buttons   |

Both self-hosted via `next/font/google` as `--font-display` and `--font-body`.

### Scale

Fluid `clamp()` sizes, so type scales continuously instead of jumping at
breakpoints.

| Class             | Range          | Use                          |
| ----------------- | -------------- | ---------------------------- |
| `text-display-lg` | 2.6 → 5rem     | Homepage `h1` only           |
| `text-display-md` | 2.25 → 3.75rem | Inner page `h1`              |
| `text-display-sm` | 1.9 → 2.75rem  | Section `h2`                 |
| `text-eyebrow`    | 0.6875rem      | Uppercase labels, 0.16em tracking |

Body copy sits at 0.9–1.14rem depending on prominence. Nothing below 0.74rem.

### Rules

- Display type is tightly tracked (`-0.02em` to `-0.03em`); eyebrows are widely
  tracked. That contrast is a big part of the personality.
- Headings use `text-wrap: balance`, paragraphs use `text-wrap: pretty`.
- Body measure is capped at `max-w-prose` (68ch). Full-width text is unreadable.
- One `h1` per page; never skip a level.

---

## 6. Spacing and layout

### The full-bleed shell

Content runs **edge to edge** with only a small safe gutter — no dead margins on
the left and right.

```css
--gutter: 1.25rem;   /* < 640px  */
--gutter: 2rem;      /* ≥ 640px  */
--gutter: 2.75rem;   /* ≥ 1024px */
--gutter: 3.5rem;    /* ≥ 1536px */
```

- `.shell` — `max-width: 1800px`, centred, `padding-inline: var(--gutter)`.
  This is `<Container>`, the default for most sections.
- `<Container wide>` — no max width at all, gutter padding only. Used by the hero
  so the layout spans the whole viewport.
- Full-bleed bands (trust band, testimonial rail) skip the container entirely and
  set their own background across the full width.

### Vertical rhythm

`py-section` = `clamp(3.5rem, 2.5rem + 4vw, 7rem)`. Use it for every major
section so the page breathes consistently. Alternate `bg-canvas` and `bg-surface`
to separate bands instead of adding dividers everywhere.

### Radius

| Token            | Value    | Use                          |
| ---------------- | -------- | ---------------------------- |
| `rounded-full`   | pill     | Buttons, badges, pills       |
| `rounded-xl`     | 0.75rem  | Small tiles, inputs          |
| `rounded-card`   | 1.25rem  | Cards                        |
| `rounded-panel`  | 1.75rem  | Large panels, forms          |
| `rounded-hero`   | 2.25rem  | Hero imagery                 |

Bigger surface → bigger radius. Keep it consistent.

### Shadows

| Token          | Use                                       |
| -------------- | ----------------------------------------- |
| `shadow-card`  | Resting card                              |
| `shadow-lift`  | Hovered card                              |
| `shadow-float` | Floating overlays, dropdown, drawer       |

Three levels only. No inner shadows, no coloured glows on cards.

---

## 7. Buttons

`components/ui/Button.jsx`. Renders `<Link>` for internal routes, `<a>` for
external/`tel:`/`mailto:`, `<button>` when no `href`.

| Variant         | Appearance                    | Use                                |
| --------------- | ----------------------------- | ---------------------------------- |
| `primary`       | Solid `brand-600`, white text | The main action on any surface     |
| `teal`          | Solid `teal-500`             | Wellness-flavoured secondary       |
| `outline`       | Border + canvas               | Secondary beside a primary         |
| `soft`          | `brand-600/10` tint          | Tertiary, inside cards             |
| `ghost`         | Text only until hover         | Low-emphasis                       |
| `onDark`        | White on brand band          | Primary on a filled band           |
| `onDarkOutline` | White border on brand band   | Secondary on a filled band         |
| `link`          | Inline underlined text       | Inside prose                       |

Sizes `sm` (36px), `md` (44px), `lg` (48–52px). All are at least 44px tall on
touch except `sm`, which is used only in dense card footers.

Hover is a 2px lift plus a shadow step. Arrow icons slide 4px on hover. One
primary action per view — if two buttons compete, one should be `outline`.

---

## 8. Cards

Base: `components/ui/Card.jsx` — `rounded-card`, `border-line`, `bg-elevated`.

Interactive cards add: `-translate-y-1.5` lift, border shifts to
`brand-600/35`, shadow steps to `shadow-lift`, title colour shifts to
`brand-600`, and a soft accent wash fades in from a corner. 400ms, `ease-premium`.

When a whole card is clickable, the card **is** the `<Link>` — never a card with
a nested link plus an `onClick` wrapper.

---

## 9. Forms

`components/sections/CallbackForm.jsx` is the reference implementation.

- Inputs: 48px tall, `rounded-xl`, `border-line`, `bg-canvas`.
- Focus: `border-brand-600` plus a `brand-600/25` ring.
- Error: `border-red-500`, message below in `text-red-500`, `aria-invalid` set,
  and `aria-describedby` pointing at the message.
- Every field has a real `<label>` with `htmlFor`. Placeholders are examples, not
  labels.
- Required fields are marked with a `brand-600` asterisk.
- Validation on submit, not while typing; clear the error as soon as the field is
  edited.
- Success state replaces the form and is announced with `role="status"`.

---

## 10. Navigation

**Utility bar** (`lg+`): `brand-800`, 36px, address and phone. Hidden on mobile.

**Main bar:** logo left, nav right, theme toggle + phone + Book Appointment. Sticky.
On scroll it tightens from 80px to 64px and gains a blurred translucent
background.

**Desktop nav appears at `xl` (1280px)** — eight items plus a CTA do not fit
comfortably below that, so tablet uses the drawer. This is deliberate.

**Services mega-menu:** two columns of services with icon, name and a one-line
note, plus a panel with the "not sure who to see" phone CTA. Opens on hover for
pointers, click/Enter for keyboard; closes on Escape, outside click, or focus
leaving. A 140ms close delay lets the pointer cross the gap to the panel.

**Mobile drawer:** slides from the right, 384px max, scroll-locked background,
`role="dialog"` + `aria-modal`, Escape to close, focus loop, focus returned to
the trigger. Services expand in place. Booking and call actions pinned at the
bottom.

**Mobile action bar:** fixed Call / Book pair below `sm`, with a matching spacer
in the layout so it never covers content.

---

## 11. Hero

Two columns at `lg`, stacked below. Left: pulse dot + eyebrow, fluid `h1` with a
gradient phrase, intro paragraph, two CTAs, three assurance ticks, rating row.
Right: portrait photograph in `rounded-hero` with an offset outline frame behind
it and two floating cards — the seven-discipline card (bottom left, overlapping the
frame) and a direct-billing pill (top right).

Background: `mesh-glow` radial washes over a faint `grid-lines` pattern, masked
so it fades out. Both are decorative and `aria-hidden`.

Entrance: staggered 90ms, each element rising 22px over 620ms; image scales from
0.97 and slides in; floating cards land last at 650ms and 800ms. All suppressed
under reduced motion.

---

## 12. Sections

Standard anatomy:

```
eyebrow (+ optional sequence number)
h2
supporting paragraph  (max-w-prose)
content
```

`SectionHeading` renders the first three. **Sequence numbers are only used where
the content is genuinely a sequence** — the seven services are a numbered set the
clinic refers to by number ("Service 03 of 07"), and the homepage bands are a
numbered tour. Do not number a group just for decoration.

Page-level section order on the homepage:

1. Hero
2. Trust band — four clinic figures on a connector line (`brand-800`)
3. Services — seven cards
4. How we work — image + three principles
5. Products spotlight
6. Team preview — four practitioners
7. Testimonials — marquee rail
8. Location — address, hours, service areas
9. Appointment CTA + call-back form

---

## 13. Animation

All variants in `lib/motion.js`. Easing is `cubic-bezier(0.16, 1, 0.3, 1)`
(`ease-premium`) everywhere.

| Duration | Value | Use                     |
| -------- | ----- | ----------------------- |
| fast     | 0.28s | Micro-interactions      |
| base     | 0.5s  | Reveals                 |
| slow     | 0.75s | Large image entrances   |

| Variant   | Movement          |
| --------- | ----------------- |
| `fade`    | opacity only      |
| `up`      | +18px → 0         |
| `down`    | −14px → 0         |
| `left`    | +28px → 0         |
| `right`   | −28px → 0         |
| `scale`   | 0.96 → 1          |

`<Reveal>` fires once, 80px before entering the viewport. Groups use
`<Reveal stagger={0.06–0.1}>` with `<RevealItem>` children.

Reduced motion: handled globally in CSS **and** per component with
`useReducedMotion()`, which renders elements with no movement at all. The
testimonial marquee stops; it also pauses on hover.

---

## 14. Responsive breakpoints

| Width  | Behaviour                                                        |
| ------ | ---------------------------------------------------------------- |
| 320px  | Single column, 1.25rem gutter, mobile action bar, hero image stacks below copy |
| 375px  | Baseline mobile target                                           |
| 640px  | 2-column card grids, 2rem gutter, header booking button appears   |
| 768px  | Wider grids, two-column product rows                             |
| 1024px | Utility bar appears, 2-column hero, 2.75rem gutter               |
| 1280px | Desktop nav and mega-menu replace the drawer, 3-column grids      |
| 1536px | 3.5rem gutter                                                    |
| 1800px | Shell caps; beyond this the page centres                         |

Mobile is redesigned, not shrunk: the hero reorders, the trust band goes to one
column, the testimonial rail becomes a swipeable marquee, the mega-menu becomes
an in-place expander.

`body` uses `overflow-x: clip` so a stray wide element can never produce a
horizontal scrollbar — but that is a safety net, not a licence to ship one.

---

## 15. Icons

Local inline SVG set in `components/ui/Icon.jsx`. No icon package.

- 24×24 grid, 1.6 stroke, round caps and joins, `currentColor`.
- Sizes: 3.5 (14px) inline, 4 (16px) in buttons, 5 (20px) in tiles, 6 (24px) featured.
- `IconWrapper` puts an icon in a tinted tile — `sm` 36px, `md` 44px, `lg` 56px —
  with the accent controlling the tint.
- Purely decorative icons are `aria-hidden`; pass `title` only when the icon
  carries meaning on its own.

Each service has a purpose-drawn glyph (a spine for chiropractic,
radiating arcs for shockwave, needle and points for acupuncture) rather than a
generic medical symbol.

---

## 16. Image style

Wanted: real clinical environments, natural light, practitioners genuinely
interacting with patients, uncluttered rooms, warm and calm. Wide enough to show
the space.

Not wanted: isolated stock smiles, glossy blue-tinted "medical technology"
composites, models in unused scrubs, close-ups of equipment with nobody present.

Handling — all images go through `components/ui/Figure.jsx`:

- `next/image` with explicit dimensions and correct `sizes`.
- `rounded-panel` by default, `rounded-hero` for the hero.
- A brand gradient overlay plus a bottom scrim so overlaid text stays legible and
  photographs sit comfortably in dark mode.
- 900ms 1.03 scale on hover.
- `priority` on the hero image only; everything else lazy.
- Descriptive alt text lives in `data/`, next to the image path.

Placeholders currently ship in `public/images` — see `public/images/README.md`
for the filename and dimension of each one.

---

## 17. Accessibility

- Contrast: body text ≥ 4.5:1, large text ≥ 3:1, in both themes. `brand-600` on
  white is 4.6:1; on navy, `brand-600` resolves to `#3B82F6` for the same reason.
- Focus: 2px `brand-600` ring with a 2px canvas offset, on every interactive
  element.
- Touch targets ≥ 44px.
- Real semantics: `<nav>`, `<main>`, `<header>`, `<footer>`, `<address>`,
  `<dl>` for hours and stats, `<blockquote>` + `<figcaption>` for reviews.
- Skip link to `#main` first in the tab order.
- Colour never carries meaning alone — a tick accompanies every "included" state.
- `prefers-reduced-motion` respected everywhere.

---

## 18. Design principles

1. **Coordination is the story.** If a design choice can express "one clinic, one
   plan," take it. The connector line exists for this.
2. **Booking is never more than one action away.** Header CTA on desktop, fixed
   bar on mobile, a CTA band closing every page.
3. **Structure carries information.** Eyebrows label, numbers sequence, dividers
   separate. Nothing decorative pretends to be structural.
4. **Restraint over richness.** One signature element, three shadow levels, four
   colours in strict hierarchy, two typefaces.
5. **Whitespace is the premium signal**, not gradients or glass.
6. **Both themes are first-class.** Neither is an afterthought.
7. **Content is data.** The design is a system for displaying content the client
   owns and can change.
8. **Fast on a phone on mall Wi-Fi.** Server components by default, one icon
   system, no unnecessary JavaScript.
