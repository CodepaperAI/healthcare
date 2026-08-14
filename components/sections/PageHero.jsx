import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * Page banner used by every route except the homepage.
 *
 * Keeps breadcrumbs, H1, intro and the primary actions in one place so future
 * pages inherit the same structure, spacing and heading hierarchy.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  trail = [],
  bookLabel,
  showAssurances = false,
  image,
  imageAlt = '',
  children,
}) {
  const hasImage = Boolean(image);

  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-glow absolute inset-0 opacity-80" />
        <div className="grid-lines absolute inset-0 opacity-25 [mask-image:radial-gradient(75%_70%_at_25%_10%,black,transparent)] dark:opacity-[0.15]" />
      </div>

      <Container className="pb-14 pt-8 lg:pb-18 lg:pt-10">
        <Breadcrumbs trail={trail} />

        <div
          className={
            hasImage
              ? 'mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.74fr)] lg:items-center lg:gap-12'
              : 'mt-7 max-w-3xl'
          }
        >
          <div className="max-w-3xl">
            {eyebrow && (
              <Reveal variant="fade">
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            )}

            <Reveal variant="up">
              <h1 className="mt-4 text-display-md font-extrabold text-strong">{title}</h1>
            </Reveal>

            {intro && (
              <Reveal variant="up" delay={0.07}>
                <p className="mt-6 text-[1.04rem] leading-relaxed text-muted sm:text-[1.12rem]">
                  {intro}
                </p>
              </Reveal>
            )}

            {bookLabel && (
              <Reveal variant="up" delay={0.12} className="mt-8 flex flex-wrap gap-3">
                <Button href={site.links.booking} size="lg" icon="arrowRight">
                  {bookLabel}
                </Button>
                <Button
                  href={site.phoneHref}
                  size="lg"
                  variant="outline"
                  icon="phone"
                  iconPosition="left"
                >
                  Call {site.phone}
                </Button>
              </Reveal>
            )}

            {showAssurances && (
              <Reveal variant="fade" delay={0.18}>
                <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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
                </ul>
              </Reveal>
            )}

            {children}
          </div>

          {hasImage && (
            <Reveal variant="left" delay={0.08}>
              <div className="relative aspect-[16/11] rounded-panel border border-line bg-surface shadow-card">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
