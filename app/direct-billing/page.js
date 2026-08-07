import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import FaqSection from '@/components/sections/FaqSection';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { insurers, billingSteps, coverageNotes, billingFaqs } from '@/data/insurers';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/schema';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Direct Billing', href: '/direct-billing' },
];

export const metadata = buildMetadata({
  title: 'Direct Billing to Insurance in London, Ontario',
  description:
    'Direct billing to major extended health insurers for physiotherapy, pelvic floor physiotherapy, chiropractic, massage, orthotics, braces and compression in North London.',
  path: '/direct-billing',
  keywords: [
    'direct billing physiotherapy London Ontario',
    'insurance direct billing clinic London',
    'extended health benefits physiotherapy Ontario',
  ],
});

export default function DirectBillingPage() {
  return (
    <>
      <PageHero
        eyebrow="Extended health & direct billing"
        title="Direct Billing to Insurance in London, Ontario"
        intro="Planet Health Care offers direct billing to many extended health insurers for physiotherapy, pelvic floor physiotherapy, chiropractic, massage, psychology, orthotics, braces and compression stockings. Bring your plan details and we will submit eligible claims directly where your insurer allows."
        trail={trail}
        bookLabel="Book an Appointment"
      />

      {/* Three steps */}
      <section className="bg-canvas py-section">
        <Container>
          <SectionHeading eyebrow="How it works" title="Three steps to direct billing" />

          <Reveal stagger={0.09} className="relative mt-12 grid gap-5 lg:grid-cols-3">
            {billingSteps.map((step, index) => (
              <RevealItem
                key={step.title}
                className="relative flex h-full flex-col rounded-card border border-line bg-elevated p-6 shadow-card sm:p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 font-display text-[1rem] font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-[1.12rem] font-bold text-strong">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted">{step.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Coverage basics */}
      <section className="bg-surface py-section">
        <Container>
          <SectionHeading
            eyebrow="Coverage basics"
            title="What to know before your visit"
            description="We make direct billing convenient, but your insurance plan sets the exact limits, deductibles and referral rules."
          />

          <Reveal stagger={0.05} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coverageNotes.map((note) => (
              <RevealItem
                key={note.title}
                className="flex h-full gap-4 rounded-card border border-line bg-elevated p-6 shadow-card"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600/10 text-brand-600">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span>
                  <h3 className="font-display text-[0.98rem] font-bold text-strong">{note.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{note.body}</p>
                </span>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Insurers */}
      <section className="bg-canvas py-section">
        <Container>
          <SectionHeading
            eyebrow="Insurers we bill directly"
            title="We work with all major providers"
            description="Don’t see yours? We likely bill it too — just ask at the front desk."
          />

          <Reveal stagger={0.04} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {insurers.map((insurer) => (
              <RevealItem
                key={insurer}
                className="flex items-center gap-3 rounded-card border border-line bg-elevated px-5 py-4"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-500/12 text-teal-600 dark:text-teal-400">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.92rem] font-semibold text-body">{insurer}</span>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <FaqSection title="Direct billing — common questions" items={billingFaqs} tone="canvas" />

      <AppointmentCTA
        title="Use your benefits today"
        body="Bring your insurance details and any plan limits your insurer has shared. We will direct bill where your plan allows and help with the documentation you need."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'Direct Billing to Insurance',
            description: metadata.description,
            path: '/direct-billing',
          }),
          breadcrumbSchema(trail),
          faqSchema(billingFaqs),
        ]}
      />
    </>
  );
}
