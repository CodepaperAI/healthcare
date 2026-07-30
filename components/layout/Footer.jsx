import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { LogoImage } from '@/components/ui/Logo';
import { footerNav } from '@/data/navigation';
import { site, addressLines } from '@/data/site';
import { resolveHref } from '@/lib/utils';

/**
 * Footer. A server component — nothing here needs client JavaScript.
 * Link groups come from data/navigation.js so adding a page updates the footer.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { name: 'Facebook', icon: 'facebook', href: site.links.facebook },
    { name: 'Instagram', icon: 'instagram', href: site.links.instagram },
    { name: 'Google reviews', icon: 'google', href: site.links.googleReviews },
  ].filter((social) => social.href);

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-8">
          {/* Brand + contact */}
          <div className="max-w-sm">
            <LogoImage className="h-12" sizes="200px" />

            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">{site.shortDescription}</p>

            <address className="mt-5 flex flex-col gap-3 text-[0.88rem] not-italic text-body">
              <a
                href={site.links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors hover:text-brand-600"
              >
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {addressLines.map((line) => (
                    <span key={line} className="block leading-relaxed">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 font-semibold transition-colors hover:text-brand-600"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-600" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-600"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-600" />
                {site.email}
              </a>
            </address>

            <ul className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-canvas text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-600"
                  >
                    <Icon name={social.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link groups */}
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-eyebrow font-bold uppercase text-strong">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => {
                  const href = resolveHref(link.href);
                  return (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-[0.88rem] text-muted transition-colors hover:text-brand-600"
                        >
                          {link.label}
                          <Icon
                            name="arrowUpRight"
                            className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="text-[0.88rem] text-muted transition-colors hover:text-brand-600"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        {/* Hours strip */}
        <div className="mt-12 rounded-card border border-line bg-canvas p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <h2 className="flex items-center gap-2 text-eyebrow font-bold uppercase text-strong">
              <Icon name="clock" className="h-4 w-4 text-brand-600" />
              Clinic hours
            </h2>
            <dl className="flex flex-wrap gap-x-6 gap-y-2 text-[0.84rem]">
              {site.hours.map((entry) => (
                <div key={entry.day} className="flex items-center gap-2">
                  <dt className="font-semibold text-body">{entry.day.slice(0, 3)}</dt>
                  <dd className={entry.open ? 'text-muted' : 'text-muted/70'}>{entry.display}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · Physiotherapy, Chiropractic &amp; Custom Orthotics in{' '}
            {site.address.city}, {site.address.regionName}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/cancellation-policy" className="transition-colors hover:text-brand-600">
              Cancellation Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-brand-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
