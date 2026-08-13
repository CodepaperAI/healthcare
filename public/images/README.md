# Images

## Status

Most core clinic and product images are now real or client-supplied assets. The remaining placeholders should be replaced by saving your file over the placeholder using the
**exact same filename**. Nothing in the code needs to change: image paths and alt
text live in the `data/` files.

### Real photos in use

| Filename | Size (px) | Source photo |
| --- | --- | --- |
| `logo.png` | 900 × 266 | `Logo_3.png`, transparent padding trimmed |
| `og-default.jpg` | 1200 × 630 | Logo lockup on brand navy (social share card) |
| `hero-clinic.jpg` | 1200 × 1300 | Shockwave treatment, wide portrait crop |
| `clinic-treatment-room.jpg` | 1100 × 1200 | Hiral Desai providing manual physiotherapy treatment |
| `products-fitting.jpg` | 1200 × 1000 | Orthotic assessment with 3D scanner |
| `clinic-exterior.jpg` | 1200 × 800 | Storefront at Sherwood Forest Mall |
| `service-physiotherapy.jpg` | 1100 × 1100 | Hiral Desai assessing a patient foot and ankle |
| `service-chiropractic.jpg` | 1100 × 1100 | Spinal adjustment |
| `service-massage.jpg` | 1100 × 1100 | Massage treatment — **see note below** |
| `service-psychology.jpg` | 900 × 900 | Divya Nambiar portrait |
| `service-shockwave.jpg` | 1100 × 1100 | Hiral Desai using shockwave therapy |
| `service-acupuncture.jpg` | 1100 × 825 | Acupuncture needles |
| `service-pelvic-floor-physiotherapy.jpg` | 1100 × 1100 | Hiral Desai guiding a pelvic floor physiotherapy exercise |
| `product-compression.jpg` | 1000 × 800 | Sigvaris medical compression stockings |
| `product-custom-orthotics.jpg` | 1000 × 800 | Sean Deroo assessing a patient foot for custom orthotics |
| `product-tens.jpg` | 1000 × 800 | TENS unit with electrode pads (Wikimedia Commons attribution in data) |
| `product-massage-gun.jpg` | 1000 × 800 | Therapeutic massage gun |
| `product-biofreeze.jpg` | 1000 × 800 | Biofreeze product bottle |
| `team-hiral-desai.jpg` | 640 × 800 | Headshot |
| `team-roshel-jacob.jpg` | 640 × 800 | Headshot |
| `team-sean-deroo.jpg` | 640 × 800 | Headshot |
| `team-tiffany-rose-lukas.jpg` | 640 × 800 | Headshot |
| `team-divya-nambiar.jpg` | 640 × 800 | Headshot |
| `team-shreya.jpg` | 640 × 800 | Headshot |
| `team-mehak-taneja.jpg` | 640 × 800 | Headshot |

### Still placeholders — shot list

| Filename | Size (px) | What to shoot |
| --- | --- | --- |
| `team-marcia-richards.jpg` | 640 × 800 | Headshot, Chiropractor |
| `team-jeff-lewis.jpg` | 640 × 800 | Headshot, Certified Pedorthist |
| `team-shravika-gandhi.jpg` | 640 × 800 | Headshot, Physiotherapy Assistant |
| `product-braces.jpg` | 1000 × 800 | Knee or ankle brace being fitted |

Match the existing headshots when you shoot the remaining three: blue Planet Health
Care polo, the same light interior background, framed from mid-chest up.

### Three things worth fixing when you can

1. **`product-braces.jpg`** is still a placeholder. A real brace fitting photo
   would strengthen the products page.
2. **`service-massage.jpg`** came from a social-media graphic with the tagline,
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
with the grid.

## Adding a new image

1. Save the file here.
2. Reference it from the relevant `data/` file (not from a component).
3. Write descriptive alt text alongside it in the same data file.
