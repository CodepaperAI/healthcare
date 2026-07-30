import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

const tones = {
  brand: 'bg-brand-600/10 text-brand-600 ring-brand-600/16',
  teal: 'bg-teal-500/12 text-teal-600 ring-teal-500/20 dark:text-teal-400',
  violet: 'bg-violet-500/12 text-violet-500 ring-violet-500/20 dark:text-violet-400',
  amber: 'bg-amber-500/14 text-amber-500 ring-amber-500/22',
  neutral: 'bg-surface text-muted ring-line',
  onDark: 'bg-white/10 text-white ring-white/20',
};

export default function Badge({ tone = 'brand', icon, className, children, ...rest }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.74rem] font-semibold ring-1 ring-inset',
        tones[tone] ?? tones.brand,
        className,
      )}
      {...rest}
    >
      {icon && <Icon name={icon} className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}
