import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Figure from '@/components/ui/Figure';
import Prose from '@/components/ui/Prose';
import IconWrapper from '@/components/ui/IconWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import FaqSection from '@/components/sections/FaqSection';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { services, getService, getRelatedServices } from '@/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

/**
 * PROGRAMMATIC SERVICE PAGE
 *
 * One template renders all six services from data/services.js. Adding a service
 * to that array produces a new statically generated page with metadata,
 * breadcrumbs, FAQ schema, menu entries and a sitemap record — no new code.
 */

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildServiceMetadata(service);
}

export const dynamicParams = false;

export default async function ServicePage({ params }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === service.slug);
  const related = getRelatedServices(service);

  const trail = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Service ${pad(index + 1)} of ${pad(services.length)} · North London`}
        title={service.headline}
        intro={service.intro}
        trail={trail}
        bookLabel={service.bookLabel}
        showAssurances
      />

      {/* About + photograph */}
      <section className="bg-canvas py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Overview" title={service.about.heading} as="h2" />
              <Reveal variant="up" className="mt-7">
                <Prose paragraphs={service.about.body} size="lg" />
              </Reveal>
            </div>

            <Reveal variant="left">
              <Figure
                src={service.image}
                alt={service.imageAlt}
                width={1100}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[4/3] lg:aspect-square"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Conditions treated */}
      <section className="bg-surface py-section">
        <Container>
          <SectionHeading eyebrow="What we treat" title="Conditions we help with" />
          <Reveal stagger={0.05} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.conditions.map((condition) => (
              <RevealItem
                key={condition}
                className="flex items-center gap-3 rounded-card border border-line bg-elevated px-5 py-4"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600/10 text-brand-600">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.94rem] font-semibold text-body">{condition}</span>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* First visit + practitioner */}
      <section className="bg-canvas py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="What to expect" title="Your first visit" />
              <Reveal stagger={0.09} className="mt-10 flex flex-col">
                {service.firstVisit.map((step, stepIndex) => (
                  <RevealItem
                    key={step.title}
                    className="flex gap-5 border-t border-line py-6 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-[0.9rem] font-bold text-white">
                        {stepIndex + 1}
                      </span>
                      {stepIndex < service.firstVisit.length - 1 && (
                        <span aria-hidden="true" className="w-px flex-1 bg-line" />
                      )}
                    </div>
                    <div className="pb-1">
                      <h3 className="font-display text-[1.08rem] font-bold text-strong">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-[0.94rem] leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
            </div>

            <Reveal variant="left">
              <div className="rounded-panel border border-line bg-surface p-6 sm:p-8">
                <p className="eyebrow">Your practitioner &amp; coverage</p>

                <div className="mt-6 flex items-start gap-4">
                  <IconWrapper name="users" accent={service.accent} size="md" />
                  <div>
                    <h3 className="font-display text-[0.94rem] font-bold text-strong">
                      Who you’ll see
                    </h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                      {service.practitioner.who}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4 border-t border-line pt-7">
                  <IconWrapper name="shield" accent="teal" size="md" />
                  <div>
                    <h3 className="font-display text-[0.94rem] font-bold text-strong">Coverage</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                      {service.practitioner.coverage}
                    </p>
                  </div>
                </div>

                <Link
                  href="/direct-billing"
                  className="group mt-7 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-brand-600"
                >
                  How direct billing works
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection title={`${service.name} — common questions`} items={service.faqs} />

      {/* Works well with */}
      {related.length > 0 && (
        <section className="bg-canvas py-section">
          <Container>
            <SectionHeading
              eyebrow="One roof, one plan"
              title="Works well with"
              description="Because every discipline is in the same clinic, treatments are combined deliberately rather than repeated."
            />
            <Reveal stagger={0.07} className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <RevealItem key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex h-full flex-col rounded-card border border-line bg-elevated p-6 shadow-card transition-all duration-400 ease-premium hover:-translate-y-1.5 hover:border-brand-600/35 hover:shadow-lift"
                  >
                    <IconWrapper name={item.icon} accent={item.accent} size="md" />
                    <h3 className="mt-5 font-display text-[1.05rem] font-bold text-strong transition-colors group-hover:text-brand-600">
                      {item.name}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">
                      {item.note}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-600">
                      Learn more
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      <AppointmentCTA
        title="Start feeling better"
        body="Same-day appointments are often available at Sherwood Forest Mall — direct billing, free parking at the door, no referral needed for most services."
      />

      <Schema
        data={[
          webPageSchema({
            title: service.seo.title,
            description: service.seo.description,
            path: `/services/${service.slug}`,
          }),
          serviceSchema(service),
          breadcrumbSchema(trail),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
