import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import FaqSection from '@/components/sections/FaqSection';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { insurers, billingSteps, billingFaqs } from '@/data/insurers';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/schema';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Direct Billing', href: '/direct-billing' },
];

export const metadata = buildMetadata({
  title: 'Direct Billing to Insurance in London, Ontario',
  description:
    'Direct billing to all major extended health insurers for physiotherapy, chiropractic, massage and more at Planet Health Care, North London, Ontario. No forms, no waiting.',
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
        intro="Skip the forms and the wait for reimbursement. Planet Health Care offers direct billing to all major extended health insurers for physiotherapy, chiropractic, massage, psychology and more — so most patients pay little or nothing at the visit. We verify your coverage before you’re treated and submit the claim for you."
        trail={trail}
        bookLabel="Book an Appointment"
      />

      {/* Three steps */}
      <section className="bg-canvas py-section">
        <Container>
          <SectionHeading eyebrow="How it works" title="Three steps, no paperwork for you" />

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

      {/* Insurers */}
      <section className="bg-surface py-section">
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
        body="Bring your plan details and we’ll handle the rest. Book online or call the clinic — same-day appointments are often available."
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
