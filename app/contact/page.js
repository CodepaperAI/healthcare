import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
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
    body: 'For general questions, intake forms and job applications.',
    action: site.email,
    href: site.emailHref,
    accent: 'brand',
  },
];

const callbackNotes = [
  'Your information is 100% confidential.',
  'We will call you soon to discuss availability.',
];

const firstVisitNotes = [
  {
    icon: 'clipboard',
    title: 'No doctor referral needed',
    body: 'You do not need a doctor referral to come see us for most services. Your insurance plan may still ask for one for reimbursement.',
  },
  {
    icon: 'clock',
    title: 'Plan for 30-60 minutes',
    body: 'Most first visits last between 30 and 60 minutes depending on the service, assessment and treatment plan.',
  },
  {
    icon: 'heart',
    title: 'Wear comfortable clothing',
    body: 'Wear non-restrictive clothing such as sweatpants or shorts and a T-shirt so your practitioner can assess movement comfortably.',
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

            <Reveal variant="left" className="flex flex-col gap-4">
              <CallbackForm />
              <div className="rounded-card border border-line bg-surface p-5">
                <ul className="flex flex-col gap-3">
                  {callbackNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5 text-[0.9rem] font-semibold text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-section">
        <Container>
          <SectionHeading
            eyebrow="Before your first visit"
            title="Three things you should know"
            description="A little preparation helps your first appointment start smoothly."
          />

          <Reveal stagger={0.07} className="mt-12 grid gap-5 lg:grid-cols-3">
            {firstVisitNotes.map((note) => (
              <RevealItem
                key={note.title}
                className="flex h-full gap-4 rounded-card border border-line bg-elevated p-6 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.9rem] bg-brand-600/10 text-brand-600">
                  <Icon name={note.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.02rem] font-bold text-strong">
                    {note.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{note.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal
            variant="fade"
            delay={0.12}
            className="mt-8 rounded-panel border border-line bg-elevated p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Save time</p>
                <h3 className="mt-3 font-display text-[1.45rem] font-extrabold leading-tight text-strong">
                  You can complete your paperwork in advance
                </h3>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted">
                  After you book, we can send online intake forms for you to complete before your
                  appointment. You can also bring completed forms with you, or arrive 10-15 minutes
                  early to complete intake forms at the clinic.
                </p>
              </div>
              <a
                href={site.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-[0.94rem] font-semibold text-white transition-all duration-300 ease-premium hover:bg-brand-700 hover:shadow-lift"
              >
                Book online
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
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
