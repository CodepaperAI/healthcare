import { cn } from '@/lib/utils';

/**
 * Base surface for every card in the project. `interactive` adds the shared
 * hover lift so cards never each invent their own hover behaviour.
 */
export default function Card({
  as: Tag = 'div',
  interactive = false,
  padded = true,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'relative overflow-hidden rounded-card border border-line bg-elevated',
        padded && 'p-6 sm:p-7',
        interactive &&
          'shadow-card transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-600/35 hover:shadow-lift',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
