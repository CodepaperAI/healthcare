import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import IconWrapper from '@/components/ui/IconWrapper';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { careerReasons, openRoles } from '@/data/careers';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/careers' },
];

export const metadata = buildMetadata({
  title: 'Careers — Join Our Clinic Team in London, Ontario',
  description:
    'Physiotherapy, massage, chiropractic and assistant careers at Planet Health Care, a multidisciplinary clinic in North London, Ontario. Apply today.',
  path: '/careers',
  keywords: [
    'physiotherapy jobs London Ontario',
    'RMT jobs London Ontario',
    'chiropractor associate London Ontario',
    'clinic careers North London',
  ],
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Planet Health Care"
        title="Join Our Team in North London, Ontario"
        intro="We’re always glad to meet great clinicians. Planet Health Care is a multidisciplinary clinic at Sherwood Forest Mall where physiotherapists, chiropractors, an RMT, a psychologist and certified fitters work together — with the time, equipment and referral base to do their best work. If that sounds like you, we’d love to talk."
        trail={trail}
      >
        <Reveal variant="up" delay={0.12} className="mt-8 flex flex-wrap gap-3">
          <Button href={site.emailHref} size="lg" icon="mail" iconPosition="left">
            Send your resume
          </Button>
          <Button href={site.phoneHref} size="lg" variant="outline" icon="phone" iconPosition="left">
            Call {site.phone}
          </Button>
        </Reveal>
      </PageHero>

      {/* Why work here */}
      <section className="bg-canvas py-section">
        <Container>
          <SectionHeading eyebrow="Why work here" title="A team worth joining" />

          <Reveal stagger={0.09} className="mt-12 grid gap-5 lg:grid-cols-3">
            {careerReasons.map((reason, index) => (
              <RevealItem
                key={reason.title}
                className="flex h-full flex-col rounded-card border border-line bg-elevated p-6 shadow-card sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconWrapper name={reason.icon} accent="brand" size="lg" />
                  <span className="font-display text-[0.8rem] font-bold tabular-nums text-muted/70">
                    {pad(index + 1)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.15rem] font-bold text-strong">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted">{reason.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Open roles */}
      <section className="bg-surface py-section">
        <Container>
          <SectionHeading eyebrow="Open roles" title="Now welcoming applications" />

          <Reveal stagger={0.07} className="mt-12 flex flex-col gap-4">
            {openRoles.map((role) => (
              <RevealItem key={role.title}>
                <article className="flex flex-col gap-5 rounded-card border border-line bg-elevated p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-[1.15rem] font-bold text-strong">
                        {role.title}
                      </h3>
                      <Badge tone="teal">{role.type}</Badge>
                    </div>
                    <p className="mt-2.5 max-w-2xl text-[0.94rem] leading-relaxed text-muted">
                      {role.body}
                    </p>
                  </div>

                  <Button
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Application - ${role.title}`)}`}
                    icon="arrowRight"
                    className="shrink-0"
                  >
                    Apply
                  </Button>
                </article>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal
            variant="fade"
            className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-card border border-line bg-canvas p-5 text-[0.94rem] text-muted"
          >
            <Icon name="mail" className="mr-1 h-4 w-4 text-brand-600" />
            <span>Don’t see your role? We still want to hear from you. Send your resume to</span>
            <a href={site.emailHref} className="font-semibold text-brand-600 hover:underline">
              {site.email}
            </a>
            <span>or call</span>
            <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
              {site.phone}
            </a>
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA
        eyebrow="Let’s talk"
        title="Send your resume and a note about what you’re looking for"
        body="We read every application from clinicians who care about their patients."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'Careers — Join Our Clinic Team',
            description: metadata.description,
            path: '/careers',
          }),
          breadcrumbSchema(trail),
        ]}
      />
    </>
  );
}
