# CLAUDE.md — Planet Health Care

Working notes for anyone (human or AI) editing this codebase. Read this before
writing code.

---

## 1. Project purpose

Production website for **Planet Health Care**, a multidisciplinary health clinic
at Sherwood Forest Mall, North London, Ontario. Seven clinical services
(physiotherapy, pelvic floor physiotherapy, chiropractic, massage therapy,
psychology, shockwave therapy, acupuncture) plus in-clinic compression, custom
orthotics and bracing fitting.

The site exists to do three things, in order:

1. Get found for local searches ("physiotherapy London Ontario").
2. Get the visitor to book — online, by phone, or by call-back request.
3. Explain coverage and direct billing so cost is not a reason to hesitate.

Every design and code decision should serve one of those three.

---

## 2. Technology stack

| Concern     | Choice                                     |
| ----------- | ------------------------------------------ |
| Framework   | Next.js 15, App Router                     |
| Language    | JavaScript only                            |
| Components  | `.jsx`                                     |
| Styling     | Tailwind CSS 3.4 + CSS custom properties   |
| Animation   | Framer Motion                              |
| Icons       | Local inline SVG set (`components/ui/Icon.jsx`) |
| Logo        | Client-supplied transparent PNG via `components/ui/Logo.jsx` |
| Fonts       | `next/font/google` — Plus Jakarta Sans + Inter |

No other runtime dependencies. Check `package.json` before adding one — an icon
library, a class-merging library, a carousel or a UI kit is not needed here and
each one costs bundle size on a site whose whole job is loading fast on a phone.

---

## 3. ⛔ DO NOT convert this project to TypeScript.

**DO NOT convert this project to TypeScript.**

- No `.ts` files.
- No `.tsx` files.
- No `tsconfig.json`.
- No `@types/*` packages.
- No type annotations, generics, interfaces, `satisfies`, or `as` casts.

Use JSDoc comments if a function's shape needs documenting. `jsconfig.json`
provides the `@/*` path alias and nothing more.

---

## 4. Folder structure

```
app/
  layout.js                 Root layout: fonts, metadata, theme init, header/footer
  page.js                   Homepage
  globals.css               Design tokens + base layer + component primitives
  not-found.js              404
  sitemap.js                Generated from data/
  robots.js                 Generated
  manifest.js               PWA manifest
  icon.svg                  Favicon
  about/ services/ products/ direct-billing/
  special-programs/ careers/ contact/ cancellation-policy/
  services/[service]/       ONE template renders all service pages

components/
  layout/     Header, Footer, MobileMenu, MobileActionBar, ThemeProvider, ThemeToggle
  navigation/ Navbar, ServicesDropdown
  home/       Hero, TrustBar, ServicesPreview, WhyChooseUs, ProductsSpotlight,
              TeamPreview, Testimonials, LocationSection
  sections/   PageHero, FaqSection, AppointmentCTA, CallbackForm  (reused site-wide)
  ui/         Container, Section, Button, Card, Badge, IconWrapper, Icon, Logo,
              SectionHeading, Accordion, Figure, Breadcrumbs, Prose, Rating,
              Reveal, Schema

data/       All editable content. No prose belongs in a component.
lib/        seo.js, schema.js, motion.js, utils.js
public/     images/, icons/
```

---

## 5. The content rule (most important rule in this file)

**Editable content lives in `data/`. Components render it.**

If you find yourself typing a practitioner's name, a phone number, an opening
time, a service description or an FAQ answer inside a `.jsx` file — stop. It
belongs in `data/`.

| File                 | Owns                                                     |
| -------------------- | -------------------------------------------------------- |
| `data/site.js`       | Name, phone, email, address, hours, socials, booking URL, service areas |
| `data/navigation.js` | Header, mega-menu and footer links                       |
| `data/services.js`   | All services: copy, conditions, first visit, FAQs, SEO |
| `data/team.js`       | Practitioners, clinic principles, clinic stats           |
| `data/products.js`   | Products, tags, product FAQs                             |
| `data/insurers.js`   | Insurer list, billing steps, billing FAQs                |
| `data/programs.js`   | MVA / IFHP / VAC / FAF programs                          |
| `data/careers.js`    | Reasons to join, open roles                              |
| `data/testimonials.js` | Published Google reviews                               |
| `data/locations.js`  | Neighbourhood seed data for future local pages           |

Changing the phone number should be a one-line edit in `data/site.js` that
updates the header, footer, every CTA, the mobile bar and the JSON-LD.

### Content honesty

This clinic is a real business. Do not invent practitioners, credentials,
review quotes, patient counts, certifications or clinical claims. If a fact is
not in `data/`, either get it from the client or leave it out. Clinical copy
describes what the clinic does; it must not promise outcomes.

---

## 6. Design system

Full documentation is in **`DESIGN.md`**. The short version:

- Colour comes from CSS custom properties defined once in `app/globals.css` and
  exposed as Tailwind utilities in `tailwind.config.js`.
- **Never write a hex value in a component.** Use `bg-brand-600`, `text-muted`,
  `border-line`, `bg-surface`, and so on.
- Colour hierarchy is **blue → teal → violet → amber**. Blue is the brand.
  Teal marks wellness, success and secondary actions. Violet appears only for
  psychology. Amber appears only on star ratings and one warning callout.
- Semantic surface tokens (`canvas`, `surface`, `elevated`, `line`) and text
  tokens (`strong`, `body`, `muted`, `inverse`) automatically adapt to dark mode.
  Use them instead of `dark:` variants wherever possible.

---

## 7. Light and dark mode

- Toggled by a `dark` class on `<html>`.
- `ThemeProvider` (`components/layout/ThemeProvider.jsx`) owns the state:
  system preference on first visit, then the visitor's stored choice.
- `themeInitScript` runs in `<head>` before first paint, so there is no flash of
  the wrong theme.
- `ThemeToggle` decides which icon to show **in CSS** (`dark:hidden` /
  `hidden dark:block`), not in React state. This is deliberate — it keeps server
  and client markup identical and avoids a hydration mismatch. Keep it that way.
- Dark mode is a layered navy interface, not inverted light mode. Brand blue is
  lifted from `#2563EB` to `#3B82F6` in dark so it holds contrast on navy.

Test both themes on every change. A card, border or hover state that only works
in one theme is a bug.

---

## 8. SEO rules

- **All metadata goes through `buildMetadata()` in `lib/seo.js`.** Never hand-write
  a `metadata` export with raw `openGraph`/`twitter`/`robots` objects.
- Every page needs: unique title, unique description (~150–160 chars), canonical
  path, Open Graph and Twitter tags. `buildMetadata` produces all of it.
- One `<h1>` per page. Do not skip heading levels. `PageHero` renders the `h1`;
  section headings are `h2` via `SectionHeading`, and cards inside them use `h3`.
- Structured data lives in `lib/schema.js` and renders through `<Schema />`.
  `MedicalBusiness` + `WebSite` are emitted globally from `app/layout.js`; pages
  add `WebPage`, `BreadcrumbList`, `MedicalTherapy`, `FAQPage`, `Person` as
  appropriate.
- If a page shows an FAQ accordion, it must also emit `faqSchema()` with the same
  questions. Visible content and structured data must always match.
- `app/sitemap.js` builds from `data/`. Add a route → add it to the static list
  there (service pages are automatic).
- Update `site.url` in `data/site.js` before deploying, or canonicals will be
  wrong.

---

## 9. Programmatic SEO rules

`app/services/[service]/page.js` is the pattern to follow:

```js
export function generateStaticParams() { /* from data */ }
export async function generateMetadata({ params }) { /* buildServiceMetadata */ }
export const dynamicParams = false;   // unknown slugs 404 instead of rendering
```

Adding a service to `data/services.js` produces a complete page — metadata,
breadcrumbs, FAQ schema, mega-menu entry, sitemap record — with no new code.

The architecture is ready for `/services/[service]/[location]` using
`data/locations.js` and `buildServiceMetadata(service, { location })`.
**It is intentionally not built yet.** Do not generate location pages until each
has genuinely distinct local content. Forty near-identical pages differing only
by neighbourhood name is thin content; it can suppress the pages that already
rank. Write real local copy first, then generate.

---

## 10. Accessibility requirements

Non-negotiable:

- Semantic HTML. A thing that navigates is an `<a>`/`<Link>`; a thing that acts is
  a `<button>`. Never a clickable `<div>`.
- Visible keyboard focus. The global `:focus-visible` ring is in `globals.css`;
  do not remove outlines without replacing them.
- Every image has meaningful `alt`. Decorative elements get `aria-hidden="true"`.
- Accordions use `aria-expanded` + `aria-controls`. The mobile drawer uses
  `role="dialog"`, `aria-modal`, scroll lock, Escape to close, a focus loop, and
  returns focus to its trigger.
- Icon-only buttons need an `aria-label` or an `sr-only` label.
- A skip link to `#main` is the first focusable element on the page.
- Respect `prefers-reduced-motion` — see below.

---

## 11. Performance requirements

- **Server Components by default.** Add `'use client'` only when the component
  needs state, effects, event handlers or Framer Motion.
  Currently client: `Header`, `Navbar`, `ServicesDropdown`, `MobileMenu`,
  `ThemeProvider`, `ThemeToggle`, `Reveal`, `Accordion`, `Hero`, `CallbackForm`.
  Everything else is server-rendered. Keep that ratio.
- Never put `'use client'` in `app/layout.js` or a page file.
- Use `next/image` for every photograph, via `components/ui/Figure.jsx`.
  `priority` belongs on the hero image only.
- No `localStorage` reads during render — only inside `useEffect`.
- Avoid `useEffect` where a derived value or CSS would do.

---

## 12. Animation guidelines

- All variants live in `lib/motion.js`. Import them; do not write inline
  transition objects.
- Scroll animation is `<Reveal>`; sequenced groups are
  `<Reveal stagger={0.08}>` wrapping `<RevealItem>` children.
- Reduced motion is honoured twice: globally in CSS, and in `Reveal` /
  `Accordion` / `MobileMenu` / `Hero` via `useReducedMotion()`, which renders the
  element with **no** movement rather than faster movement.
- Subtle and fast. Entrances travel ~18px and last ~0.5s. If an animation is
  noticeable as an animation, it is too much.
- Never animate anything that delays the visitor reaching the booking button.

---

## 13. Coding conventions

- Components: `PascalCase.jsx`, one component per file, default export.
- Data and lib modules: `camelCase.js`, named exports.
- Combine classes with `cn()` from `lib/utils.js`.
- Long class lists: order roughly layout → box → typography → colour → state.
- Keep components under ~200 lines. If a page grows past that, extract a section
  component into `components/sections/`.
- Comment the *why*, not the *what*. Explain non-obvious decisions (a hydration
  workaround, a delay on a hover menu), not obvious code.

---

## 14. Things future developers must NOT do

1. **Do not convert to TypeScript.** (Rule 3.)
2. Do not hardcode content in components — it goes in `data/`.
3. Do not write hex colours in components — use tokens.
4. Do not invent business facts, practitioners, statistics or reviews.
5. Do not use the logo's gold in the interface — it is reserved for the mark.
6. Do not write alt text that describes something the photograph does not show
   (see the notes in `public/images/README.md`).
7. Do not add `'use client'` to a page or layout.
8. Do not add a dependency for something the project already solves (icons,
   class merging, accordions, carousels).
9. Do not remove focus outlines.
10. Do not build `/services/[service]/[location]` pages with templated copy.
11. Do not remove `prefers-reduced-motion` handling.
12. Do not put `localStorage` access in a render path — it breaks hydration.
13. Do not add an FAQ accordion without matching `faqSchema()`.
14. Do not use `overflow-x: hidden` on a section to hide a layout bug — find the
    element that is too wide. `body` already uses `overflow-x: clip`.
15. Do not let `data/site.js` and the JSON-LD drift apart — schema reads from it,
    so edit the data, never the schema output.

---

## 15. Before you commit

```bash
npm run build      # must pass with no errors
npm run lint       # must be clean
```

Then check by hand:

- Light **and** dark mode.
- 320px, 375px, 768px, 1024px, 1280px, 1920px — no horizontal scrollbar.
- Keyboard only: tab through the header, mega-menu, mobile drawer, accordions,
  and the call-back form.
- Browser console is free of errors and hydration warnings.
