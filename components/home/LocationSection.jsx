import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Reveal, { RevealItem } from '@/components/ui/Reveal';
import { site, addressLines, serviceAreas } from '@/data/site';

/**
 * Location, hours and the neighbourhoods served.
 *
 * The service-area list is the same data that will seed future
 * /services/[service]/[location] pages, so local SEO stays consistent.
 */
export default function LocationSection({ index }) {
  return (
    <section className="relative bg-surface py-section">
      <Container>
        <div className="flex items-center gap-3">
          {index && (
            <span className="text-eyebrow font-bold tabular-nums text-muted">{index}</span>
          )}
          <span className="eyebrow">Find us</span>
          <span aria-hidden="true" className="h-px w-12 bg-line" />
        </div>
        <h2 className="mt-4 max-w-2xl text-display-sm font-extrabold text-strong">
          Sherwood Forest Mall, Wonderland Rd N
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Address */}
          <Reveal className="rounded-card border border-line bg-elevated p-6 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-[0.9rem] bg-brand-600/10 text-brand-600">
              <Icon name="pin" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-[1.05rem] font-bold text-strong">{site.name}</h3>
            <address className="mt-2.5 text-[0.94rem] not-italic leading-relaxed text-muted">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-[0.94rem] font-bold text-brand-600"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={site.links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-body transition-colors hover:text-brand-600"
              >
                Get directions
                <Icon
                  name="arrowUpRight"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-teal-500/[0.08] p-3.5 text-[0.84rem] leading-relaxed text-body">
              <Icon name="car" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
              Free parking directly outside the clinic entrance.
            </p>
          </Reveal>

          {/* Hours */}
          <Reveal delay={0.08} className="rounded-card border border-line bg-elevated p-6 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-[0.9rem] bg-brand-600/10 text-brand-600">
              <Icon name="clock" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-[1.05rem] font-bold text-strong">Clinic hours</h3>

            <dl className="mt-4 divide-y divide-line">
              {site.hours.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[0.9rem] font-semibold text-body">{entry.day}</dt>
                  <dd
                    className={
                      entry.open
                        ? 'text-[0.88rem] text-muted'
                        : 'text-[0.88rem] font-medium text-muted/70'
                    }
                  >
                    {entry.display}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Service areas */}
          <Reveal delay={0.16} className="rounded-card border border-line bg-elevated p-6 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-[0.9rem] bg-teal-500/12 text-teal-600 dark:text-teal-400">
              <Icon name="globe" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-[1.05rem] font-bold text-strong">
              Serving North London
            </h3>
            <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
              Patients travel to us from across the north end of the city.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area.slug}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-[0.8rem] font-medium text-body"
                >
                  {area.name}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button href="/contact" variant="soft" size="sm" icon="arrowRight">
                Contact the clinic
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
