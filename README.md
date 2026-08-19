# Planet Health Care

Production website for Planet Health Care — a multidisciplinary clinic at
Sherwood Forest Mall, North London, Ontario.

Next.js 15 (App Router) · JavaScript + JSX only · Tailwind CSS · Framer Motion

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires Node 18.18+ (Node 20+ recommended).

### Uplift blog integration

The `/blog` routes read published articles from Uplift on the server. Set the
token in the deployment environment; do not add it to a client-exposed
`NEXT_PUBLIC_*` variable or commit it to a file:

```bash
UPLIFT_API_TOKEN=your_token_here
```

The token that was shared during setup should be rotated before use, since it
has been exposed in chat history.

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
```

> The first `npm run dev` or `npm run build` downloads the Plus Jakarta Sans and
> Inter font files from Google Fonts and self-hosts them. It needs an internet
> connection once; after that the fonts are cached in `.next`.

---

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/about` | About & full team |
| `/services` | Services index |
| `/services/[service]` | Seven service pages, generated from data |
| `/products` | Medical compression, custom orthotics, bracing and recovery products |
| `/blog` | Uplift-powered health and wellness articles |
| `/blog/[slug]` | Individual Uplift blog article |
| `/direct-billing` | Insurance direct billing |
| `/special-programs` | MVA, IFHP, VAC, FAF |
| `/careers` | Open roles |
| `/contact` | Contact, call-back form, location |
| `/cancellation-policy` | 24-hour cancellation policy |

Plus `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` and a 404 page.

---

## Editing content

**All copy lives in `data/`. You should not need to open a component to change
text.**

| To change | Edit |
| --- | --- |
| Phone, email, address, hours, socials, booking URL | `data/site.js` |
| Menu and footer links | `data/navigation.js` |
| Service copy, conditions, FAQs, SEO | `data/services.js` |
| Practitioners, clinic principles, stats | `data/team.js` |
| Products | `data/products.js` |
| Insurers and billing steps | `data/insurers.js` |
| Special programs | `data/programs.js` |
| Job listings | `data/careers.js` |
| Reviews | `data/testimonials.js` |

### Adding a service

Add an object to the `services` array in `data/services.js` following the shape
of the existing entries. You get a new page, mega-menu entry, homepage card,
sitemap record, breadcrumbs and FAQ schema with no code changes.

---

## Before you deploy

1. **Set the real domain.** `site.url` in `data/site.js` — canonical URLs, Open
   Graph tags, the sitemap and JSON-LD all read from it.
2. **Replace the placeholder images.** See `public/images/README.md` for the
   filename and dimensions of each.
3. **Verify the clinic coordinates.** `site.geo` in `data/site.js` is approximate
   for Sherwood Forest Mall; replace with the exact clinic location for local SEO.
4. **Decide how the call-back form should submit** (see below).
5. Run `npm run build` and confirm it is clean.

Deploys to Vercel, Netlify or any Node host with no extra configuration.

---

## The call-back form

`components/sections/CallbackForm.jsx` currently has **no backend**. On submit it
validates, then opens the visitor's email client with a pre-filled message to
`info@planethealthcare.ca`. This works on a fully static deployment and never
silently drops a submission.

To capture submissions server-side instead, replace the body of `submitRequest`
with a `fetch()` to your own API route or a form service (Formspree, Resend, a
Next.js route handler). The markup, validation and success state need no changes.

---

## Documentation

- **`CLAUDE.md`** — architecture, conventions, and the rules for anyone editing
  this project. Read it first.
- **`DESIGN.md`** — the full design system: colour, type, spacing, components,
  motion, accessibility.

---

## Two things to know

**This project is JavaScript. Do not convert it to TypeScript.** See `CLAUDE.md`.

**Content is data.** If you are typing clinic information into a `.jsx` file, it
belongs in `data/` instead.
