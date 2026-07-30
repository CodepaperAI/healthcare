import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

/**
 * Tinted icon tile. `accent` maps to the brand hierarchy:
 * blue (default) -> teal (wellness) -> violet (specialist) -> amber (rare).
 */
const accents = {
  brand: 'bg-brand-600/10 text-brand-600 ring-brand-600/14',
  teal: 'bg-teal-500/12 text-teal-600 ring-teal-500/18 dark:text-teal-400',
  violet: 'bg-violet-500/12 text-violet-500 ring-violet-500/18 dark:text-violet-400',
  amber: 'bg-amber-500/14 text-amber-500 ring-amber-500/20',
  onDark: 'bg-white/10 text-white ring-white/18',
};

const sizes = {
  sm: 'h-9 w-9 rounded-xl',
  md: 'h-11 w-11 rounded-[0.9rem]',
  lg: 'h-14 w-14 rounded-2xl',
};

const glyphSizes = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' };

export default function IconWrapper({ name, accent = 'brand', size = 'md', className }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center ring-1 ring-inset transition-colors duration-300',
        accents[accent] ?? accents.brand,
        sizes[size] ?? sizes.md,
        className,
      )}
    >
      <Icon name={name} className={glyphSizes[size] ?? glyphSizes.md} />
    </span>
  );
}
