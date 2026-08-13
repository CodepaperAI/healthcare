import Icon from '@/components/ui/Icon';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { clinicStats } from '@/data/team';

/**
 * Trust band. The four figures are connected by a single hairline — the visual
 * argument the whole clinic rests on: separate disciplines, one shared plan.
 */
export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-500/16 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-brand-400/16 blur-3xl" />
      </div>

      <div className="shell relative py-14 lg:py-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-eyebrow font-bold tabular-nums text-white/45">02</span>
            <span className="text-eyebrow font-semibold uppercase text-teal-400">
              Why Planet Health Care
            </span>
            <span aria-hidden="true" className="h-px w-12 bg-white/25" />
          </div>
          <h2 className="mt-4 text-display-sm font-extrabold text-white">
            The whole team under one roof — and they actually talk
          </h2>
        </div>

        <Reveal stagger={0.09} className="relative mt-12">
          {/* The connector: one continuous line linking every figure */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block"
          />

          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {clinicStats.map((stat) => (
              <RevealItem key={stat.label} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-[1.4rem] left-0 hidden h-3 w-3 rounded-full border-2 border-brand-800 bg-teal-400 lg:block"
                />
                <dd className="font-display text-[2.6rem] font-extrabold leading-none tracking-tight text-white sm:text-[3rem]">
                  {stat.value}
                  {stat.suffix && <span className="text-teal-400">{stat.suffix}</span>}
                </dd>
                <dt className="mt-3 font-display text-[0.95rem] font-bold text-white">
                  {stat.label}
                </dt>
                <p className="mt-1.5 text-[0.84rem] leading-relaxed text-white/65">{stat.note}</p>
              </RevealItem>
            ))}
          </dl>
        </Reveal>

        <Reveal
          variant="fade"
          delay={0.2}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/12 pt-6 text-[0.86rem] text-white/75"
        >
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-teal-400" />
            Sherwood Forest Mall, Wonderland Rd N
          </span>
          <span className="flex items-center gap-2">
            <Icon name="car" className="h-4 w-4 text-teal-400" />
            Free parking directly outside the mall entrance
          </span>
        </Reveal>
      </div>
    </section>
  );
}
