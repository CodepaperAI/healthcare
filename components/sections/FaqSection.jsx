import Container from '@/components/ui/Container';
import Accordion from '@/components/ui/Accordion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * FAQ block. Pair with faqSchema() from lib/schema.js on the page that uses it
 * so the questions are eligible for rich results.
 */
export default function FaqSection({ eyebrow = 'FAQ', title, items = [], tone = 'surface' }) {
  if (!items.length) return null;

  return (
    <section className={tone === 'surface' ? 'bg-surface py-section' : 'bg-canvas py-section'}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} />
            <Reveal variant="fade" delay={0.1} className="mt-7">
              <p className="max-w-prose text-[0.94rem] leading-relaxed text-muted">
                Still have a question? The front desk is happy to help before you book.
              </p>
              <Button
                href={site.phoneHref}
                variant="soft"
                size="sm"
                icon="phone"
                iconPosition="left"
                className="mt-5"
              >
                {site.phone}
              </Button>
            </Reveal>
          </div>

          <Reveal variant="up">
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
