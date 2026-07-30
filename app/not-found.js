import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';
import { site } from '@/data/site';

export const metadata = {
  title: 'Page not found | Planet Health Care',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-canvas py-section">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 mesh-glow" />

      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-display-md font-extrabold text-strong">
            We couldn’t find that page
          </h1>
          <p className="mt-6 text-[1.04rem] leading-relaxed text-muted">
            The link may be out of date. You can head back to the homepage, browse our services, or
            call the front desk at {site.phone} and we’ll point you in the right direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" size="lg" icon="arrowRight">
              Back to homepage
            </Button>
            <Button href={site.phoneHref} size="lg" variant="outline" icon="phone" iconPosition="left">
              Call {site.phone}
            </Button>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <h2 className="text-eyebrow font-bold uppercase text-strong">Our services</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-[0.86rem] font-semibold text-body transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {service.name}
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
