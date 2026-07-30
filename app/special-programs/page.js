import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import IconWrapper from '@/components/ui/IconWrapper';
import Badge from '@/components/ui/Badge';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { programs, programsDisclaimer } from '@/data/programs';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'Special Programs', href: '/special-programs' },
];

export const metadata = buildMetadata({
  title: 'MVA, IFHP, VAC & FAF Rehabilitation Programs in London, Ontario',
  description:
    'Motor vehicle accident (MVA) rehab, Interim Federal Health Program (IFHP), Veterans Affairs Canada (VAC) and Functional Abilities Form (FAF) assessments in North London, Ontario. Direct billing.',
  path: '/special-programs',
  keywords: [
    'MVA physiotherapy London Ontario',
    'car accident rehab London Ontario',
    'VAC physiotherapy Ontario',
    'IFHP clinic London Ontario',
    'FAF form assessment Ontario',
  ],
});

export default function SpecialProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Special programs · North London, Ontario"
        title="MVA, IFHP, VAC & FAF Rehabilitation in London, Ontario"
        intro="Planet Health Care supports patients through motor vehicle accident (MVA) rehabilitation, the Interim Federal Health Program (IFHP), Veterans Affairs Canada (VAC) coverage and Functional Abilities Form (FAF) assessments. We handle the paperwork and bill directly wherever possible — so you can focus on getting better."
        trail={trail}
        bookLabel="Book an Appointment"
      />

      <section className="bg-canvas py-section">
        <Container>
          <Reveal stagger={0.08} className="flex flex-col gap-5">
            {programs.map((program, index) => (
              <RevealItem key={program.slug}>
                <article className="grid gap-6 rounded-panel border border-line bg-elevated p-6 shadow-card sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <IconWrapper name={program.icon} accent={program.accent} size="lg" />
                    <div className="flex items-center gap-3 lg:mt-2 lg:flex-col lg:items-start">
                      <span className="font-display text-[0.8rem] font-bold tabular-nums text-muted/70">
                        {pad(index + 1)}
                      </span>
                      <Badge tone={program.accent}>{program.abbr}</Badge>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display text-[1.3rem] font-extrabold leading-snug text-strong sm:text-[1.45rem]">
                      {program.title}
                    </h2>
                    <p className="mt-4 max-w-prose text-[1rem] leading-relaxed text-muted">
                      {program.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal
            variant="fade"
            className="mt-10 flex items-start gap-3 rounded-card border border-amber-500/25 bg-amber-500/[0.07] p-5"
          >
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-[0.92rem] leading-relaxed text-body">{programsDisclaimer}</p>
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA
        title="Start your claim the easy way"
        body="Call the front desk with your claim or authorization details and we’ll take it from there — coordinated care, billed directly wherever possible."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'MVA, IFHP, VAC & FAF Rehabilitation Programs',
            description: metadata.description,
            path: '/special-programs',
          }),
          breadcrumbSchema(trail),
        ]}
      />
    </>
  );
}
