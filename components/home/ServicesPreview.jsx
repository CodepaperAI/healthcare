import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import IconWrapper from '@/components/ui/IconWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { pad } from '@/lib/utils';

/**
 * Services grid. Numbering is meaningful here — the clinic presents its seven
 * disciplines as a numbered set on every page, and each service page states
 * its position ("Service 03 of 07").
 */
export default function ServicesPreview() {
  return (
    <section className="relative bg-canvas py-section">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our services"
            index="01"
            title="Care for how you move and feel"
            description="Seven disciplines, one coordinated plan. Every service has its own page with the conditions we treat, what to expect and your coverage."
            className="max-w-2xl"
          />
          <Reveal variant="fade" className="shrink-0">
            <Button href="/services" variant="outline" icon="arrowRight">
              All services
            </Button>
          </Reveal>
        </div>

        <Reveal stagger={0.07} className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated p-6 shadow-card transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-brand-600/35 hover:shadow-lift sm:p-7"
              >
                {/* Accent wash that surfaces on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/[0.07] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <IconWrapper name={service.icon} accent={service.accent} size="lg" />
                  <span className="font-display text-[0.8rem] font-bold tabular-nums text-muted/70">
                    {pad(index + 1)}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[1.22rem] font-bold text-strong transition-colors duration-300 group-hover:text-brand-600">
                  {service.name}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-muted">
                  {service.summary}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-brand-600">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
