import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Figure from '@/components/ui/Figure';
import Button from '@/components/ui/Button';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { productHighlights } from '@/data/products';

/**
 * Products spotlight. This is a genuine differentiator for the clinic — fitting
 * happens in house — so it gets its own band rather than a card in a grid.
 */
export default function ProductsSpotlight() {
  return (
    <section className="relative bg-canvas py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-eyebrow font-bold tabular-nums text-muted">04</span>
              <span className="eyebrow">Products &amp; professional fitting</span>
              <span aria-hidden="true" className="h-px w-12 bg-line" />
            </div>

            <h2 className="mt-4 text-display-sm font-extrabold text-strong">
              Medical compression stockings, custom orthopedic bracing and recovery products
            </h2>
            <p className="mt-5 max-w-prose text-[1.02rem] leading-relaxed text-muted">
              We assess, measure and fit Sigvaris medical compression stockings, custom orthotics
              and custom orthopedic bracing in clinic. You can also find TENS units, therapeutic
              massage guns and Biofreeze for recovery at home. Direct billing is available for many
              extended health plans.
            </p>

            <Reveal stagger={0.06} className="mt-8 grid gap-3 sm:grid-cols-2">
              {productHighlights.map((highlight) => (
                <RevealItem
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-500/12 text-teal-600 dark:text-teal-400">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.88rem] font-semibold text-body">{highlight}</span>
                </RevealItem>
              ))}
            </Reveal>

            <Reveal variant="fade" delay={0.15} className="mt-8">
              <Button href="/products" icon="arrowRight">
                Explore products
              </Button>
            </Reveal>
          </div>

          <Reveal variant="left" className="relative">
            <Figure
              src="/images/product-custom-orthotics.jpg"
              alt="Certified pedorthist assessing a patient foot for custom orthotics at Planet Health Care"
              width={1200}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-card border border-line bg-elevated px-4 py-3 shadow-float sm:left-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                <Icon name="compression" className="h-[1.1rem] w-[1.1rem]" />
              </span>
              <div>
                <p className="text-[0.86rem] font-bold text-strong">Measured on site</p>
                <p className="text-[0.76rem] text-muted">Orthotics, braces and compression</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
