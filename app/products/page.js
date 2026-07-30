import Container from '@/components/ui/Container';
import Figure from '@/components/ui/Figure';
import IconWrapper from '@/components/ui/IconWrapper';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import FaqSection from '@/components/sections/FaqSection';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { products, productFaqs } from '@/data/products';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
];

export const metadata = buildMetadata({
  title: 'Compression Stockings, Braces & Recovery Products in London, Ontario',
  description:
    'Compression stockings (Sigvaris), custom orthopedic braces, TENS units, Theragun and Biofreeze — assessed and fitted in clinic at Sherwood Forest Mall, North London, Ontario. Direct billing.',
  path: '/products',
  keywords: [
    'compression stockings London Ontario',
    'Sigvaris London Ontario',
    'knee brace fitting London Ontario',
    'custom orthotics London Ontario',
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & professional fitting · North London"
        title="Compression, Bracing & Recovery Products in London, Ontario"
        intro="Most clinics send you elsewhere to buy a brace or compression stockings. At Planet Health Care we assess, measure and fit them right here at Sherwood Forest Mall — plus TENS units, Theragun and Biofreeze for recovery at home. Covered by most extended health plans with a prescription, billed directly."
        trail={trail}
        bookLabel="Book a fitting"
      />

      <section className="bg-canvas py-section">
        <Container>
          <div className="flex flex-col gap-16 lg:gap-20">
            {products.map((product, index) => {
              const flipped = index % 2 === 1;
              return (
                <article
                  key={product.slug}
                  className="grid items-center gap-10 border-t border-line pt-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={flipped ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4">
                      <IconWrapper name={product.icon} accent={product.accent} size="lg" />
                      <span className="font-display text-[0.8rem] font-bold tabular-nums text-muted/70">
                        {pad(index + 1)}
                      </span>
                    </div>

                    <h2 className="mt-5 text-display-sm font-extrabold text-strong">
                      {product.name}
                    </h2>
                    <p className="mt-3 font-display text-[1.02rem] font-semibold leading-snug text-brand-600">
                      {product.tagline}
                    </p>
                    <p className="mt-5 max-w-prose text-[1rem] leading-relaxed text-muted">
                      {product.body}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <li key={tag}>
                          <Badge tone={product.accent === 'brand' ? 'brand' : 'teal'}>{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Reveal variant={flipped ? 'right' : 'left'} className={flipped ? 'lg:order-1' : ''}>
                    <Figure
                      src={product.image}
                      alt={product.imageAlt}
                      width={1000}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="aspect-[4/3]"
                    />
                  </Reveal>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <FaqSection title="Products & fitting — common questions" items={productFaqs} />

      <AppointmentCTA
        title="Get measured and fitted"
        body="Book a fitting for compression stockings or bracing at Sherwood Forest Mall — direct billing and free parking at the door."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'Compression Stockings, Braces & Recovery Products',
            description: metadata.description,
            path: '/products',
          }),
          breadcrumbSchema(trail),
          faqSchema(productFaqs),
        ]}
      />
    </>
  );
}
