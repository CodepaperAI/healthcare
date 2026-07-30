import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import CallbackForm from '@/components/sections/CallbackForm';
import LocationSection from '@/components/home/LocationSection';
import { site, addressLines } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
];

export const metadata = buildMetadata({
  title: 'Contact & Book',
  description:
    'Contact Planet Health Care at Unit 15, 1225 Wonderland Rd N, Sherwood Forest Mall, London ON. Book online, call the clinic, or request a call-back. Same-day appointments, free parking.',
  path: '/contact',
  keywords: ['contact Planet Health Care', 'physiotherapy clinic phone number London Ontario'],
});

const channels = [
  {
    icon: 'calendar',
    title: 'Book online',
    body: 'Choose your practitioner and time in our booking portal, any time of day.',
    action: 'Open booking portal',
    href: site.links.booking,
    accent: 'brand',
  },
  {
    icon: 'phone',
    title: 'Call the front desk',
    body: 'Speak to our clinic administrator during clinic hours for same-day availability.',
    action: site.phone,
    href: site.phoneHref,
    accent: 'teal',
  },
  {
    icon: 'mail',
    title: 'Email us',
    body: 'For general questions, coverage checks, forms and job applications.',
    action: site.email,
    href: site.emailHref,
    accent: 'brand',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · North London, Ontario"
        title="Contact Planet Health Care"
        intro="Book online any time, call the front desk, or send a request below and we’ll call you back during clinic hours. Same-day appointments are often available at Sherwood Forest Mall."
        trail={trail}
      />

      {/* Channels + form */}
      <section className="bg-canvas py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <Reveal stagger={0.08} className="flex flex-col gap-4">
                {channels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    {...(channel.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-start gap-4 rounded-card border border-line bg-elevated p-6 shadow-card transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-600/35 hover:shadow-lift"
                  >
                    <span
                      className={
                        channel.accent === 'teal'
                          ? 'grid h-11 w-11 shrink-0 place-items-center rounded-[0.9rem] bg-teal-500/12 text-teal-600 dark:text-teal-400'
                          : 'grid h-11 w-11 shrink-0 place-items-center rounded-[0.9rem] bg-brand-600/10 text-brand-600'
                      }
                    >
                      <Icon name={channel.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.08rem] font-bold text-strong transition-colors group-hover:text-brand-600">
                        {channel.title}
                      </span>
                      <span className="mt-1.5 block text-[0.92rem] leading-relaxed text-muted">
                        {channel.body}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-brand-600">
                        {channel.action}
                        <Icon
                          name="arrowRight"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </a>
                ))}
              </Reveal>

              <Reveal
                variant="fade"
                delay={0.15}
                className="mt-6 rounded-card border border-line bg-surface p-6"
              >
                <h2 className="flex items-center gap-2 font-display text-[1rem] font-bold text-strong">
                  <Icon name="pin" className="h-4 w-4 text-brand-600" />
                  Visit the clinic
                </h2>
                <address className="mt-3 text-[0.94rem] not-italic leading-relaxed text-muted">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={site.links.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-brand-600"
                >
                  Get directions
                  <Icon
                    name="arrowUpRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            </div>

            <Reveal variant="left">
              <CallbackForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <LocationSection />

      <Schema
        data={[
          webPageSchema({
            title: 'Contact & Book',
            description: metadata.description,
            path: '/contact',
          }),
          breadcrumbSchema(trail),
        ]}
      />
    </>
  );
}
