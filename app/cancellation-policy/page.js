import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
];

export const metadata = buildMetadata({
  title: '24-Hour Cancellation Policy',
  description:
    'Planet Health Care’s 24-hour cancellation policy for our North London, Ontario clinic. Please give at least 24 hours’ notice to change or cancel an appointment.',
  path: '/cancellation-policy',
});

const sections = [
  {
    title: 'How to cancel or reschedule',
    icon: 'phone',
    body: (
      <>
        Please call us at{' '}
        <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
          {site.phone}
        </a>{' '}
        during clinic hours, or manage your appointment through our online booking portal, as early
        as you can. If you reach us outside of clinic hours, please leave a voicemail with your name,
        appointment date and time — the message is time-stamped and counts as notice.
      </>
    ),
  },
  {
    title: 'Late cancellations & missed appointments',
    icon: 'calendar',
    body: 'Appointments cancelled with less than 24 hours’ notice, or missed without notice (“no-shows”), may be subject to a cancellation fee. This fee is not covered by insurance and is the patient’s responsibility. We consider individual circumstances — genuine emergencies and illness are handled with understanding.',
  },
  {
    title: 'Late arrivals',
    icon: 'clock',
    body: 'If you arrive late, we’ll always do our best to see you, but your treatment may be shortened so the next patient isn’t delayed, and the full appointment fee may still apply.',
  },
];

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinic policy"
        title="24-Hour Cancellation Policy"
        trail={trail}
        intro="We know life happens, and we do our best to be flexible. At the same time, your appointment time is reserved specifically for you, and late cancellations mean another patient who needed care couldn’t be seen."
      />

      <section className="bg-canvas py-section">
        <Container>
          <div className="max-w-3xl">
            <Reveal
              variant="up"
              className="rounded-panel border border-brand-600/25 bg-brand-600/[0.06] p-6 sm:p-8"
            >
              <p className="text-[1.05rem] leading-relaxed text-body">
                To keep appointments available for everyone in our North London community, Planet
                Health Care asks for at least{' '}
                <strong className="font-bold text-strong">24 hours’ notice</strong> to change or
                cancel an appointment.
              </p>
            </Reveal>

            <div className="mt-12 flex flex-col gap-10">
              {sections.map((section) => (
                <Reveal key={section.title} variant="up" as="article">
                  <h2 className="flex items-center gap-3 font-display text-[1.25rem] font-extrabold text-strong">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                      <Icon name={section.icon} className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-relaxed text-muted">{section.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal
              variant="fade"
              className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-line pt-8 text-[0.96rem] text-muted"
            >
              <span>Questions about this policy? Call the front desk at</span>
              <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
                {site.phone}
              </a>
              <span>— we’re happy to help.</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <AppointmentCTA
        title="Need to reschedule?"
        body="Call the front desk or manage your appointment online — the sooner the better, so we can offer the time to someone else."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: '24-Hour Cancellation Policy',
            description: metadata.description,
            path: '/cancellation-policy',
          }),
          breadcrumbSchema(trail),
        ]}
      />
    </>
  );
}
