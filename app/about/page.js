import Image from 'next/image';
import Container from '@/components/ui/Container';
import IconWrapper from '@/components/ui/IconWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import Schema from '@/components/ui/Schema';
import PageHero from '@/components/sections/PageHero';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { team, principles } from '@/data/team';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, personSchema, webPageSchema } from '@/lib/schema';
import { pad } from '@/lib/utils';

const trail = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const metadata = buildMetadata({
  title: 'About & Team',
  description:
    'Meet the multidisciplinary team at Planet Health Care in North London, Ontario — physiotherapists, chiropractors, certified pedorthists, an RMT and a psychologist at Sherwood Forest Mall.',
  path: '/about',
  keywords: [
    'Planet Health Care team',
    'physiotherapist London Ontario',
    'chiropractor Sherwood Forest Mall',
    'certified pedorthist London Ontario',
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Planet Health Care"
        title="The multidisciplinary clinic team in North London"
        intro="Planet Health Care is a team of physiotherapists, chiropractors, certified pedorthists, a registered massage therapist and a psychologist working together at Sherwood Forest Mall since 2020. We focus on restoring how you move — and because every discipline shares one roof, your practitioners share one plan."
        trail={trail}
        bookLabel="Book an Appointment"
      />

      {/* How we work */}
      <section className="bg-canvas py-section">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clinic your family can trust"
            description="Three commitments that shape every appointment, from the first phone call to your last visit."
          />

          <Reveal stagger={0.09} className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <RevealItem
                key={principle.title}
                className="relative flex h-full flex-col rounded-card border border-line bg-elevated p-6 shadow-card sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconWrapper name={principle.icon} accent="brand" size="lg" />
                  <span className="font-display text-[0.8rem] font-bold tabular-nums text-muted/70">
                    {pad(index + 1)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.15rem] font-bold text-strong">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted">{principle.body}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Full roster */}
      <section className="bg-surface py-section">
        <Container>
          <SectionHeading
            eyebrow="The practitioners"
            title="Meet the team"
            description="Ten practitioners and support staff across physiotherapy, chiropractic, pedorthics, massage therapy and psychology."
          />

          <Reveal stagger={0.06} className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated shadow-card transition-all duration-400 ease-premium hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Planet Health Care`}
                      width={640}
                      height={480}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[1.08rem] font-bold leading-snug text-strong">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[0.82rem] font-semibold text-brand-600">{member.role}</p>
                    <p className="mt-3.5 flex-1 text-[0.9rem] leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </section>

      <AppointmentCTA
        title="Not sure who to see first?"
        body="Call the front desk and we’ll match your condition to the right practitioner — often the same day."
        withForm={false}
      />

      <Schema
        data={[
          webPageSchema({
            title: 'About & Team',
            description: metadata.description,
            path: '/about',
          }),
          breadcrumbSchema(trail),
          ...team.map((member) => personSchema(member)),
        ]}
      />
    </>
  );
}
