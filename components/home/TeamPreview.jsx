import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { featuredTeam } from '@/data/team';

/** Four practitioners on the homepage; the full roster lives on /about. */
export default function TeamPreview() {
  return (
    <section className="relative bg-surface py-section">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The team"
            index="05"
            title="People your family can trust"
            description="A few of the people you'll meet at Sherwood Forest Mall. The full team spans physiotherapy, pelvic floor physiotherapy, chiropractic, pedorthics, massage therapy and psychology."
            className="max-w-2xl"
          />
          <Reveal variant="fade" className="shrink-0">
            <Button href="/about" variant="outline" icon="arrowRight">
              Meet the full team
            </Button>
          </Reveal>
        </div>

        <Reveal stagger={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTeam.map((member) => (
            <RevealItem key={member.slug}>
              <Link
                href={`/about#team-${member.slug}`}
                className="group block h-full rounded-card border border-line bg-elevated shadow-card transition-all duration-400 ease-premium hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/5] bg-canvas">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Planet Health Care`}
                    width={600}
                    height={750}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-contain object-top transition-transform duration-[900ms] ease-premium group-hover:scale-[1.02]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/45 via-transparent to-transparent"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[1.02rem] font-bold leading-snug text-strong">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[0.82rem] font-medium text-brand-600">{member.role}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-600">
                    View bio
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
