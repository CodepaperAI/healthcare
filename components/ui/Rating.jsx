import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

/** Star rating badge. Amber is reserved for exactly this use. */
export default function Rating({ className, tone = 'light', showLabel = true }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="font-display text-lg font-extrabold leading-none text-strong">
        {site.rating.value}
      </span>
      <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon key={index} name="star" className="h-3.5 w-3.5" />
        ))}
      </span>
      {showLabel && (
        <span
          className={cn(
            'text-[0.76rem] font-medium',
            tone === 'dark' ? 'text-white/65' : 'text-muted',
          )}
        >
          {site.rating.label}
        </span>
      )}
      <span className="sr-only">
        Rated {site.rating.value} out of 5 on {site.rating.source}
      </span>
    </div>
  );
}
