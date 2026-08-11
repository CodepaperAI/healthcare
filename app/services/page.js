import Link from 'next/link';
import Image from 'next/image';
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
    'Physiotherapy, pelvic floor physiotherapy, chiropractic, registered massage therapy, psychology, shockwave therapy and acupuncture in North London, Ontario.',
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
        intro="Seven clinical disciplines, one coordinated team at Sherwood Forest Mall. Every service links to its own page with the conditions we treat, what to expect on your first visit, coverage and answers to common questions."
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
                  className="group grid h-full overflow-hidden rounded-card border border-line bg-elevated shadow-card transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-brand-600/35 hover:shadow-lift sm:grid-cols-[11rem_minmax(0,1fr)]"
                >
                  <div className="relative min-h-44 overflow-hidden bg-surface sm:min-h-full">
                    <Image
                      src={service.cardImage ?? service.image}
                      alt={service.cardImageAlt ?? service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 11rem"
                      className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.04]"
                      style={{ objectPosition: service.cardImagePosition ?? 'center' }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-900/55 via-brand-900/10 to-transparent"
                    />
                    <IconWrapper
                      name={service.icon}
                      accent="onDark"
                      size="md"
                      className="absolute bottom-4 left-4 backdrop-blur"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-canvas/90 px-2.5 py-1 font-display text-[0.76rem] font-bold tabular-nums text-muted shadow-card backdrop-blur dark:bg-elevated/90">
                      {pad(index + 1)}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
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
                Medical compression, custom bracing &amp; recovery products
              </h2>
              <p className="mt-5 max-w-prose text-[1.02rem] leading-relaxed text-muted">
                We also assess, measure and fit medical compression stockings, custom orthotics and
                orthopedic braces in clinic, and carry TENS units, therapeutic massage guns and
                Biofreeze.
              </p>
              <Button href="/products" icon="arrowRight" className="mt-8">
                Explore products
              </Button>
            </div>

            <Reveal variant="left">
              <Figure
                src="/images/product-custom-orthotics.jpg"
                alt="Certified pedorthist assessing a patient foot for custom orthotics at Planet Health Care"
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
