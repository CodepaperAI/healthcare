import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Figure from '@/components/ui/Figure';
import IconWrapper from '@/components/ui/IconWrapper';
import Button from '@/components/ui/Button';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { principles } from '@/data/team';
import { pad } from '@/lib/utils';

/** How the clinic works — three principles beside a photograph of the space. */
export default function WhyChooseUs() {
  return (
    <section className="relative bg-surface py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="right" className="relative order-2 lg:order-1">
            <Figure
              src="/images/clinic-treatment-room.jpg"
              alt="A physiotherapist and chiropractor reviewing a patient treatment plan together at Planet Health Care"
              width={1100}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="aspect-[4/3] lg:aspect-[9/10]"
            />

            {/* Overlay caption anchored inside the frame */}
            <div className="absolute bottom-5 left-5 right-5 rounded-card border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-[19rem]">
              <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">
                <Icon name="pin" className="h-3.5 w-3.5" />
                Sherwood Forest Mall
              </p>
              <p className="mt-2 text-[0.9rem] font-semibold leading-snug text-white">
                Six disciplines sharing one set of notes about your care.
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="text-eyebrow font-bold tabular-nums text-muted">03</span>
              <span className="eyebrow">How we work</span>
              <span aria-hidden="true" className="h-px w-12 bg-line" />
            </div>

            <h2 className="mt-4 text-display-sm font-extrabold text-strong">
              Healthcare that puts you first
            </h2>
            <p className="mt-5 max-w-prose text-[1.02rem] leading-relaxed text-muted">
              Planet Health Care has been at Sherwood Forest Mall since 2020. We focus on restoring
              how you move — and because every discipline shares one roof, your practitioners share
              one plan.
            </p>

            <Reveal stagger={0.1} className="mt-10 flex flex-col">
              {principles.map((principle, index) => (
                <RevealItem
                  key={principle.title}
                  className="group relative flex gap-5 border-t border-line py-6 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col items-center gap-3">
                    <IconWrapper name={principle.icon} accent="brand" size="md" />
                    {index < principles.length - 1 && (
                      <span aria-hidden="true" className="w-px flex-1 bg-line" />
                    )}
                  </div>
                  <div className="pb-1">
                    <h3 className="flex items-baseline gap-2.5 font-display text-[1.08rem] font-bold text-strong">
                      <span className="text-[0.72rem] font-bold tabular-nums text-brand-600">
                        {pad(index + 1)}
                      </span>
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-[0.94rem] leading-relaxed text-muted">
                      {principle.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>

            <Reveal variant="fade" delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" icon="arrowRight">
                About the clinic
              </Button>
              <Button href="/direct-billing" variant="outline">
                How direct billing works
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
