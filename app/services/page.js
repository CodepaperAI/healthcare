import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Figure from '@/components/ui/Figure';
import IconWrapper from '@/components/ui/IconWrapper';
import Button from '@/components/ui/Button';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceListSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
];

export const metadata = buildMetadata({
  title: 'Services — Physiotherapy, Chiropractic, Massage & More in London, Ontario',
  description:
    'Physiotherapy, chiropractic, massage therapy, psychology, shockwave therapy and acupuncture in North London, Ontario at Sherwood Forest Mall. Direct billing, same-day appointments.',
  path: '/services',
  keywords: [
    'physiotherapy clinic London Ontario',
    'chiropractic London Ontario',
    'massage therapy London Ontario',
    'multidisciplinary clinic North London',
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services · North London, Ontario"
        title="Physiotherapy & rehabilitation services in London, Ontario"
        intro="Six clinical disciplines, one coordinated team at Sherwood Forest Mall. Every service links to its own page with the conditions we treat, what to expect on your first visit, coverage and answers to common questions."
        trail={trail}
        bookLabel="Book an Appointment"
      />

      <section className="bg-canvas py-section">
        <Container>
          <Reveal stagger={0.07} className="grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full gap-5 rounded-card border border-line bg-elevated p-6 shadow-card transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-brand-600/35 hover:shadow-lift sm:gap-6 sm:p-7"
                >
                  <div className="flex flex-col items-center gap-3">
                    <IconWrapper name={service.icon} accent={service.accent} size="lg" />
                    <span className="font-display text-[0.78rem] font-bold tabular-nums text-muted/70">
                      {pad(index + 1)}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h2 className="font-display text-[1.22rem] font-bold text-strong transition-colors duration-300 group-hover:text-brand-600">
                      {service.name}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[0.94rem] leading-relaxed text-muted">
                      {service.intro}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-brand-600">
                      Learn more
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Products cross-sell */}
      <section className="bg-surface py-section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <p className="eyebrow">Beyond treatment</p>
              <h2 className="mt-4 text-display-sm font-extrabold text-strong">
                Compression, bracing &amp; recovery products
              </h2>
              <p className="mt-5 max-w-prose text-[1.02rem] leading-relaxed text-muted">
                We also assess, measure and fit compression stockings and orthopedic braces in
                clinic, and carry TENS units, Theragun and Biofreeze.
              </p>
              <Button href="/products" icon="arrowRight" className="mt-8">
                Explore products
              </Button>
            </div>

            <Reveal variant="left">
              <Figure
                src="/images/products-fitting.jpg"
                alt="Compression stockings and orthopedic bracing being fitted at Planet Health Care"
                width={900}
                height={700}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <AppointmentCTA
        title="Book the right service"
        body="Not sure who to see first? Call the front desk and we’ll match your condition to the right practitioner — often the same day."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'Services in London, Ontario',
            description: metadata.description,
            path: '/services',
          }),
          serviceListSchema(services),
          breadcrumbSchema(trail),
        ]}
      />
    </>
  );
}
