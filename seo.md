# Planet Health Care SEO Map

Last reviewed: 2026-08-19

This document records the SEO currently implemented in the project. The site is configured for `https://www.planethealthcare.ca`.

## SEO already implemented

- Page titles and meta descriptions are generated with `buildMetadata()` in `lib/seo.js`.
- Canonical URLs are generated for every indexed page.
- Open Graph and Twitter metadata are generated for every page using the shared SEO helper.
- Robots rules allow indexing for public pages and support `noindex` for thin or private pages.
- `app/sitemap.js` includes static pages and all service pages from `data/services.js`.
- `app/robots.js` publishes the sitemap URL.
- Local business schema is emitted globally from `app/layout.js`.
- Service pages emit medical service schema, breadcrumbs, FAQ schema and WebPage schema where applicable.
- Blog articles emit Article schema and breadcrumbs.
- The site uses one H1 per page through `PageHero`; section headings use H2 and card headings use H3.
- Internal links connect the homepage, services index, service pages, related services, products, billing, contact and booking journeys.
- Local signals are used throughout the content: London, Ontario; North London; Sherwood Forest Mall; address; phone; opening hours; map and service areas.

## Primary keyword map

Use one primary search intent per page. Supporting keywords should appear naturally in the page title, H1, introduction, relevant section headings, body copy, FAQ answers and internal links. Do not force every keyword into metadata or repeat keywords unnaturally.

### Homepage

- URL: `/`
- Title: `Physiotherapy, Massage Therapy, Chiropractic, Pelvic Floor Physio & Custom Orthotics | Planet Health Care`
- Primary keywords:
  - physiotherapy London Ontario
  - pelvic floor physiotherapy London Ontario
  - registered massage therapy North London
  - chiropractor London Ontario
- Supporting keywords:
  - custom orthotics London Ontario
  - compression stockings London Ontario
  - Sherwood Forest Mall clinic
- Source: `app/layout.js`

### Services index

- URL: `/services`
- Title: `Services - Physiotherapy, Chiropractic, Massage & More in London, Ontario | Planet Health Care`
- Primary keywords:
  - physiotherapy clinic London Ontario
  - chiropractic London Ontario
  - massage therapy London Ontario
- Supporting keywords:
  - multidisciplinary clinic North London
  - pelvic floor physiotherapy London Ontario
  - psychology London Ontario
  - shockwave therapy London Ontario
  - acupuncture London Ontario
- Source: `app/services/page.js`

### Physiotherapy

- URL: `/services/physiotherapy`
- Title: `Physiotherapy in London, Ontario | Planet Health Care`
- Primary keywords:
  - physiotherapy London Ontario
  - physiotherapist North London
- Supporting keywords:
  - postural restoration physiotherapy London
  - post surgical rehab London Ontario
  - sports injury physiotherapy
- Source: `data/services.js`

### Chiropractic

- URL: `/services/chiropractic`
- Title: `Chiropractic Care in London, Ontario | Planet Health Care`
- Primary keywords:
  - chiropractor London Ontario
  - chiropractic care London Ontario
- Supporting keywords:
  - prenatal chiropractor London
  - paediatric chiropractic North London
  - back pain chiropractor
- Source: `data/services.js`

### Registered massage therapy

- URL: `/services/massage-therapy`
- Title: `Registered Massage Therapy in London, Ontario | Planet Health Care`
- Primary keywords:
  - RMT London Ontario
  - registered massage therapy North London
- Supporting keywords:
  - manual lymphatic drainage London Ontario
  - deep tissue massage London
- Source: `data/services.js`

### Psychology

- URL: `/services/psychology`
- Title: `Psychology Services in London, Ontario | Planet Health Care`
- Primary keywords:
  - psychologist London Ontario
  - CBT therapy London Ontario
- Supporting keywords:
  - MVA trauma psychology
  - Hindi speaking psychologist London Ontario
  - trauma therapy London Ontario
- Source: `data/services.js`

### Shockwave therapy

- URL: `/services/shockwave-therapy`
- Title: `Shockwave Therapy in London, Ontario | Planet Health Care`
- Primary keywords:
  - shockwave therapy London Ontario
  - radial shockwave North London
- Supporting keywords:
  - plantar fasciitis treatment London Ontario
  - tennis elbow shockwave
- Source: `data/services.js`

### Acupuncture and dry needling

- URL: `/services/acupuncture`
- Title: `Acupuncture & Dry Needling in London, Ontario | Planet Health Care`
- Primary keywords:
  - acupuncture London Ontario
  - dry needling London Ontario
- Supporting keywords:
  - trigger point needling North London
  - medical acupuncture London Ontario
- Source: `data/services.js`

### Pelvic floor physiotherapy

- URL: `/services/pelvic-floor-physiotherapy`
- Title: `Pelvic Floor Physiotherapy in London, Ontario | Planet Health Care`
- Primary keywords:
  - pelvic floor physiotherapy London Ontario
  - pelvic health physiotherapist North London
- Supporting keywords:
  - postpartum physiotherapy London Ontario
  - bladder leakage physiotherapy London
- Source: `data/services.js`

## Supporting landing pages

These pages target service-adjacent, local, commercial or trust-related searches.

| Page | URL | Keyword focus |
| --- | --- | --- |
| About and team | `/about` | Planet Health Care team; physiotherapist London Ontario; chiropractor Sherwood Forest Mall; certified pedorthist London Ontario |
| Products | `/products` | compression stockings London Ontario; Sigvaris London Ontario; knee brace fitting London Ontario; custom orthotics London Ontario |
| Direct billing | `/direct-billing` | direct billing physiotherapy London Ontario; insurance direct billing clinic London; extended health benefits physiotherapy Ontario |
| Special programs | `/special-programs` | MVA physiotherapy London Ontario; car accident rehab London Ontario; VAC physiotherapy Ontario; IFHP clinic London Ontario; FAF form assessment Ontario |
| Contact and booking | `/contact` | contact Planet Health Care; physiotherapy clinic phone number London Ontario |
| Blog index | `/blog` | health and wellness articles London Ontario; movement and recovery guidance |
| Careers | `/careers` | physiotherapy jobs London Ontario; RMT jobs London Ontario; chiropractor associate London Ontario; clinic careers North London |
| Cancellation policy | `/cancellation-policy` | 24-hour cancellation policy Planet Health Care |

## Current URL inventory

The following public URLs are currently created by the App Router and listed in the sitemap.

### Static URLs

- `https://www.planethealthcare.ca/`
- `https://www.planethealthcare.ca/services`
- `https://www.planethealthcare.ca/about`
- `https://www.planethealthcare.ca/products`
- `https://www.planethealthcare.ca/blog`
- `https://www.planethealthcare.ca/direct-billing`
- `https://www.planethealthcare.ca/special-programs`
- `https://www.planethealthcare.ca/contact`
- `https://www.planethealthcare.ca/careers`
- `https://www.planethealthcare.ca/cancellation-policy`

### Service landing URLs

These are generated automatically from `data/services.js` and `app/services/[service]/page.js`.

- `https://www.planethealthcare.ca/services/physiotherapy`
- `https://www.planethealthcare.ca/services/chiropractic`
- `https://www.planethealthcare.ca/services/massage-therapy`
- `https://www.planethealthcare.ca/services/psychology`
- `https://www.planethealthcare.ca/services/shockwave-therapy`
- `https://www.planethealthcare.ca/services/acupuncture`
- `https://www.planethealthcare.ca/services/pelvic-floor-physiotherapy`

### Blog article URLs

Blog article URLs use the dynamic pattern `/blog/[slug]`. They are rendered from the Uplift feed in `app/blog/[slug]/page.js`. The current sitemap does not list individual Uplift articles because the sitemap is generated synchronously from local service data.

Example pattern:

- `https://www.planethealthcare.ca/blog/article-slug`

Before launch, add the actual article slugs to the sitemap if the Uplift feed is stable and those articles should be indexed.

## SEO files and ownership

| File | SEO responsibility |
| --- | --- |
| `lib/seo.js` | Shared title, description, canonical, Open Graph, Twitter and robots metadata |
| `data/services.js` | Service names, page content, service titles, descriptions and keywords |
| `data/site.js` | Domain, name, address, phone, hours, map, social profiles and service areas |
| `app/layout.js` | Homepage metadata, global fonts, local business schema and website schema |
| `app/sitemap.js` | Static and service URL discovery |
| `app/robots.js` | Crawler rules and sitemap reference |
| `lib/schema.js` | Local business, service, breadcrumb, FAQ, article and person structured data |
| `app/services/[service]/page.js` | Programmatic service landing page template |
| `app/blog/[slug]/page.js` | Programmatic blog article template and article metadata |

## UberSuggest workflow

UberSuggest keyword data is not stored in this repository yet. To make decisions from real search demand:

1. Export keyword ideas for `physiotherapy London Ontario`, `chiropractor London Ontario`, `massage therapy London Ontario`, `psychologist London Ontario`, `pelvic floor physiotherapy London Ontario`, `shockwave therapy London Ontario` and `acupuncture London Ontario`.
2. Include keyword, monthly search volume, SEO difficulty, paid difficulty and search intent in the export.
3. Assign one primary keyword to one page only.
4. Add supporting keywords only where the page genuinely answers that search intent.
5. Create a new landing page only when it has distinct local service content, not just a changed neighbourhood name.
6. Review Search Console queries and clicks monthly; UberSuggest estimates are planning signals, not proof of rankings.

## Important SEO notes

- `keywords` metadata is included for organization, but Google does not use the meta keywords tag as a ranking signal.
- The strongest ranking signals here are useful local content, clear page titles and H1s, internal links, fast mobile rendering, accurate business information, reviews and relevant backlinks.
- Do not create thin pages for every neighbourhood in `data/site.js`. The neighbourhood list is a seed for future pages; each location page needs genuinely distinct local content first.
- Keep clinical claims accurate and avoid promising outcomes.
- Verify `site.url` before deployment so canonical URLs, Open Graph URLs, schema URLs and sitemap URLs all use the live domain.
