import Icon from '@/components/ui/Icon';
import Container from '@/components/ui/Container';
import Rating from '@/components/ui/Rating';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';
import { site } from '@/data/site';

function Quote({ item }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col justify-between rounded-card border border-line bg-elevated p-6 sm:w-[23rem]">
      <div>
        <Icon name="quote" className="h-6 w-6 text-brand-600/25" />
        <blockquote className="mt-4 text-[0.96rem] leading-relaxed text-body">
          {item.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-2.5 border-t border-line pt-4">
        <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon key={index} name="star" className="h-3 w-3" />
          ))}
        </span>
        <span className="text-[0.8rem] font-semibold text-strong">{item.author}</span>
        <span className="text-[0.76rem] text-muted">· {item.source}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Patient reviews as a continuous rail. The marquee pauses on hover and stops
 * entirely for visitors who prefer reduced motion (handled globally in CSS).
 */
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-canvas py-section">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-eyebrow font-bold tabular-nums text-muted">06</span>
              <span className="eyebrow">From our patients</span>
              <span aria-hidden="true" className="h-px w-12 bg-line" />
            </div>
            <h2 className="mt-4 text-display-sm font-extrabold text-strong">
              Rated {site.rating.value} on {site.rating.source}
            </h2>
          </div>
          <Rating className="pb-2" />
        </div>
      </Container>

      <Reveal variant="fade" className="group mt-12">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, index) => (
              <Quote key={`${item.author}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </Reveal>

      <Container className="mt-10">
        <a
          href={site.links.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[0.86rem] font-semibold text-brand-600"
        >
          <Icon name="google" className="h-4 w-4" />
          Read every review on Google
          <Icon
            name="arrowUpRight"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </Container>
    </section>
  );
}
