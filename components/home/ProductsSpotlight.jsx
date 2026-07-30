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
              Braces and compression, measured and fitted in clinic
            </h2>
            <p className="mt-5 max-w-prose text-[1.02rem] leading-relaxed text-muted">
              Most clinics send you elsewhere to buy a brace or compression stockings. We assess,
              measure and fit them here — Sigvaris compression, custom and off-the-shelf bracing for
              knee, ankle, wrist, shoulder and back, plus TENS units, Theragun and Biofreeze. Covered
              by most extended health plans with a prescription, billed directly.
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
              src="/images/products-fitting.jpg"
              alt="Certified pedorthist measuring a patient's leg for graduated compression stockings in clinic"
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
                <p className="text-[0.86rem] font-bold text-strong">Fitted on site</p>
                <p className="text-[0.76rem] text-muted">No second trip elsewhere</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
