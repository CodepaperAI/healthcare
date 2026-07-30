import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import CallbackForm from '@/components/sections/CallbackForm';
import { site } from '@/data/site';

/**
 * The closing call to action, reused at the bottom of every page.
 *
 * Pass `title` and `body` to match the page it sits on; `withForm` shows the
 * call-back form (homepage and contact) or hides it for a tighter band.
 */
export default function AppointmentCTA({
  eyebrow = 'Ready when you are',
  index,
  title = 'Book online, or ask us to call you back',
  body = 'Same-day appointments are often available. Direct billing to all insurers, no referral needed for most services.',
  withForm = true,
}) {
  return (
    <section className="relative overflow-hidden bg-brand-700 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-teal-500/18 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-300/14 blur-3xl" />
      </div>

      <Container className="relative py-section">
        <div
          className={
            withForm
              ? 'grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16'
              : 'flex flex-col items-center text-center'
          }
        >
          <div className={withForm ? '' : 'max-w-2xl'}>
            <div
              className={
                withForm
                  ? 'flex items-center gap-3'
                  : 'flex items-center justify-center gap-3'
              }
            >
              {index && (
                <span className="text-eyebrow font-bold tabular-nums text-white/45">{index}</span>
              )}
              <span className="text-eyebrow font-semibold uppercase text-teal-400">{eyebrow}</span>
              <span aria-hidden="true" className="h-px w-12 bg-white/25" />
            </div>

            <h2 className="mt-4 text-display-sm font-extrabold text-white">{title}</h2>
            <p
              className={`mt-5 max-w-prose text-[1.02rem] leading-relaxed text-white/75 ${
                withForm ? '' : 'mx-auto'
              }`}
            >
              {body}
            </p>

            <div
              className={`mt-8 flex flex-wrap gap-3 ${withForm ? '' : 'justify-center'}`}
            >
              <Button href={site.links.booking} size="lg" variant="onDark" icon="arrowRight">
                Book online now
              </Button>
              <Button
                href={site.phoneHref}
                size="lg"
                variant="onDarkOutline"
                icon="phone"
                iconPosition="left"
              >
                Call {site.phone}
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {site.assurances.map((assurance) => (
                <li
                  key={assurance.label}
                  className="flex items-center gap-2 text-[0.86rem] font-medium text-white/80"
                >
                  <Icon name="check" className="h-4 w-4 text-teal-400" />
                  {assurance.label}
                </li>
              ))}
            </ul>
          </div>

          {withForm && (
            <Reveal variant="left">
              <CallbackForm tone="onDark" />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
