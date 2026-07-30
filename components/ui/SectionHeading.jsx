import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/**
 * Section header with an optional eyebrow. The eyebrow is a label, not
 * decoration — pass `index` only where the content genuinely is a sequence.
 */
export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
  className,
  children,
}) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal variant="fade" className="flex items-center gap-3">
          {index && (
            <span
              className={cn(
                'text-eyebrow font-bold tabular-nums',
                tone === 'dark' ? 'text-white/45' : 'text-muted',
              )}
            >
              {index}
            </span>
          )}
          <span className={cn('eyebrow', tone === 'dark' && 'text-teal-400')}>{eyebrow}</span>
          <span
            aria-hidden="true"
            className={cn('h-px w-10 sm:w-16', tone === 'dark' ? 'bg-white/25' : 'bg-line')}
          />
        </Reveal>
      )}

      <Reveal variant="up">
        <Tag
          className={cn(
            'text-display-sm font-extrabold',
            tone === 'dark' && 'text-white',
            centered && 'mx-auto max-w-3xl',
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {description && (
        <Reveal variant="up" delay={0.06}>
          <p
            className={cn(
              'max-w-prose text-[1.02rem] leading-relaxed',
              tone === 'dark' ? 'text-white/70' : 'text-muted',
              centered && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}

      {children}
    </div>
  );
}
