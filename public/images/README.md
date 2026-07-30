# Images

## Status

**16 images are the clinic's real photography.** The remaining 10 are generated
placeholders — replace them by saving your file over the placeholder using the
**exact same filename**. Nothing in the code needs to change: image paths and alt
text live in the `data/` files.

### Real photos in use

| Filename | Size (px) | Source photo |
| --- | --- | --- |
| `logo.png` | 900 × 266 | `Logo_3.png`, transparent padding trimmed |
| `og-default.jpg` | 1200 × 630 | Logo lockup on brand navy (social share card) |
| `hero-clinic.jpg` | 1200 × 1300 | Shockwave treatment, wide portrait crop |
| `clinic-treatment-room.jpg` | 1100 × 1200 | Spinal adjustment, room view |
| `products-fitting.jpg` | 1200 × 1000 | Orthotic assessment with 3D scanner |
| `clinic-exterior.jpg` | 1200 × 800 | Treatment room — **interior stand-in, see below** |
| `service-physiotherapy.jpg` | 1100 × 1100 | Foot and ankle mobilisation |
| `service-chiropractic.jpg` | 1100 × 1100 | Spinal adjustment |
| `service-massage.jpg` | 1100 × 1100 | Massage treatment — **see note below** |
| `service-psychology.jpg` | 900 × 900 | Divya Nambiar portrait |
| `service-shockwave.jpg` | 1100 × 1100 | Shockwave handpiece in use |
| `service-acupuncture.jpg` | 1100 × 1100 | Treatment room — **not a needling photo** |
| `product-tens.jpg` | 1000 × 800 | Electrotherapy unit with electrode pads |
| `team-tiffany-rose-lukas.jpg` | 640 × 800 | Headshot |
| `team-divya-nambiar.jpg` | 640 × 800 | Headshot |
| `team-shreya.jpg` | 640 × 800 | Headshot |
| `team-mehak-taneja.jpg` | 640 × 800 | Headshot |

### Still placeholders — shot list

| Filename | Size (px) | What to shoot |
| --- | --- | --- |
| `team-hiral-desai.jpg` | 640 × 800 | Headshot, Registered Physiotherapist |
| `team-marcia-richards.jpg` | 640 × 800 | Headshot, Chiropractor |
| `team-sean-deroo.jpg` | 640 × 800 | Headshot, Certified Pedorthist |
| `team-jeff-lewis.jpg` | 640 × 800 | Headshot, Certified Pedorthist |
| `team-roshel-jacob.jpg` | 640 × 800 | Headshot, RMT (only a treatment photo was supplied) |
| `team-shravika-gandhi.jpg` | 640 × 800 | Headshot, Physiotherapy Assistant |
| `product-compression.jpg` | 1000 × 800 | Sigvaris compression stockings being measured or fitted |
| `product-braces.jpg` | 1000 × 800 | Knee or ankle brace being fitted |
| `product-theragun.jpg` | 1000 × 800 | Percussive massage device |
| `product-biofreeze.jpg` | 1000 × 800 | Biofreeze at the front desk |

Match the existing headshots when you shoot the remaining six: blue Planet Health
Care polo, the same light interior background, framed from mid-chest up.

### Three things worth fixing when you can

1. **`service-acupuncture.jpg`** is a treatment-room photo, not acupuncture. The
   alt text describes the room honestly rather than implying needling, but a real
   photo of needling or dry needling would serve the page much better.
2. **`clinic-exterior.jpg`** is an interior shot standing in for the building. It
   is the image referenced by the `MedicalBusiness` structured data, so an actual
   photo of the clinic entrance at Sherwood Forest Mall would help local SEO.
3. **`service-massage.jpg`** came from a social-media graphic with the tagline,
   phone number, address and logo burnt into the image. Those bands have been
   cropped out, which cost some framing. A clean version of the same photo
   without the overlay would look better.

## Recommended specs

- Format: JPG (or WebP — if you switch, update the filename in the matching
  `data/` file)
- Quality ~85%, aim for under 300 KB each
- Keep the aspect ratio close to the sizes above, or the crop will shift

## Headshots

Shot in portrait and cropped to 4:5. Faces should sit in the upper third — the
homepage card crops to 4:5 and the About card crops to 4:3, so leave headroom.

## Changing who appears on the homepage

Set `featured: true` on the members you want in `data/team.js`. Four works best
with the grid. It is currently set to the four practitioners with real headshots;
once the remaining photos arrive you may want to feature the physiotherapist and
RMT instead.

## Adding a new image

1. Save the file here.
2. Reference it from the relevant `data/` file (not from a component).
3. Write descriptive alt text alongside it in the same data file.
