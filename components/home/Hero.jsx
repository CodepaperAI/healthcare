'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import Figure from '@/components/ui/Figure';
import Rating from '@/components/ui/Rating';
import { site } from '@/data/site';
import { EASE } from '@/lib/motion';

/**
 * Hero. The thesis of the page: a coordinated team, one location, care that
 * starts on the first visit. Copy leads with the search terms patients actually
 * type, then earns attention with the clinic's real differentiator.
 */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: EASE } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : { variants: container, initial: 'hidden', animate: 'visible' };
  const itemProps = reduceMotion ? {} : { variants: rise };

  return (
    <section className="relative overflow-hidden bg-canvas pb-14 pt-10 sm:pb-18 lg:pb-24 lg:pt-14">
      {/* Ambient background: a soft brand mesh over a faint clinical grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-glow absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_30%_20%,black,transparent)] dark:opacity-[0.2]" />
      </div>

      <div className="w-full px-gutter">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14 xl:gap-20"
          {...motionProps}
        >
          {/* ---------------- Copy ---------------- */}
          <div className="max-w-2xl">
            <motion.div className="flex items-center gap-3" {...itemProps}>
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute h-2 w-2 rounded-full bg-teal-500" />
                <span className="absolute h-2 w-2 rounded-full bg-teal-500 animate-pulse-ring" />
              </span>
              <p className="eyebrow">Multidisciplinary clinic · North London, Ontario</p>
            </motion.div>

            <motion.h1
              className="mt-5 text-display-lg font-extrabold text-strong"
              {...itemProps}
            >
              Physiotherapy, registered massage, pelvic floor physio &amp; custom orthotics in{' '}
              <span className="text-gradient-brand">North London</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-muted sm:text-[1.1rem]"
              {...itemProps}
            >
              One team of ten practitioners - physiotherapists, pelvic floor physiotherapy,
              chiropractors, a registered massage therapist, a psychologist and certified fitters -
              under one roof at Sherwood Forest Mall. Real recovery, coordinated by people who talk
              to each other about your care.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...itemProps}>
              <Button href={site.links.booking} size="lg" icon="arrowRight">
                Book an Appointment
              </Button>
              <Button href={site.phoneHref} size="lg" variant="outline" icon="phone" iconPosition="left">
                Call {site.phone}
              </Button>
            </motion.div>

            <motion.ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3" {...itemProps}>
              {site.assurances.map((assurance) => (
                <li
                  key={assurance.label}
                  className="flex items-center gap-2 text-[0.86rem] font-semibold text-body"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-500/12 text-teal-600 dark:text-teal-400">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {assurance.label}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 flex items-center gap-5 border-t border-line pt-6"
              {...itemProps}
            >
              <Rating />
              <span aria-hidden="true" className="h-8 w-px bg-line" />
              <a
                href={site.links.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-600"
              >
                Read patient reviews
                <Icon
                  name="arrowUpRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* ---------------- Image ---------------- */}
          <motion.div
            className="relative"
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, scale: 0.97, x: 24 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      transition: { duration: 0.85, ease: EASE, delay: 0.12 },
                    },
                  }
            }
          >
            {/* Decorative offset frame behind the photograph */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 hidden h-full w-full rounded-hero border border-brand-600/20 sm:block"
            />

            <Figure
              src="/images/hero-clinic.jpg"
              alt="Physiotherapist assessing a patient's shoulder movement in a bright treatment room at Planet Health Care"
              width={1200}
              height={1300}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              rounded="rounded-hero"
              className="aspect-[5/6] sm:aspect-[6/5] lg:aspect-[5/6]"
            />

            {/* Floating card — the clinic's core claim */}
            <motion.div
              className="absolute -bottom-6 left-3 w-[15.5rem] rounded-card border border-line bg-elevated p-4 shadow-float sm:left-6 sm:w-[17.5rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-600">
                  <Icon name="roof" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[1.35rem] font-extrabold leading-none text-strong">
                    Seven
                    <span className="ml-1 text-[0.8rem] font-bold text-muted">disciplines</span>
                  </p>
                  <p className="mt-1 truncate text-[0.76rem] text-muted">One shared treatment plan</p>
                </div>
              </div>
              <div className="connector mt-3.5 h-px w-full" />
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {['physiotherapy', 'chiropractic', 'massage', 'psychology', 'shockwave', 'acupuncture', 'pelvicFloor'].map(
                  (name) => (
                    <span
                      key={name}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-surface text-muted"
                      aria-hidden="true"
                    >
                      <Icon name={name} className="h-3.5 w-3.5" />
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            {/* Floating card — direct billing */}
            <motion.div
              className="absolute -top-4 right-4 hidden items-center gap-2.5 rounded-full border border-line bg-elevated px-4 py-2.5 shadow-float sm:flex lg:-right-2"
              initial={reduceMotion ? false : { opacity: 0, y: -14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-teal-500/14 text-teal-600 dark:text-teal-400">
                <Icon name="shield" className="h-4 w-4" />
              </span>
              <span className="text-[0.8rem] font-bold text-strong">Direct billing to all insurers</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
