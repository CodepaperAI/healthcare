import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

/**
 * One button, three roles.
 *
 * Renders <Link> for internal routes, <a> for external URLs and tel:/mailto:,
 * and <button> when no href is supplied — so semantics stay correct without
 * the caller thinking about it.
 */

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-all duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-55 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-canvas';

const variants = {
  primary:
    'bg-brand-600 text-white shadow-card hover:bg-brand-700 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0',
  teal:
    'bg-teal-500 text-white shadow-card hover:bg-teal-600 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-line bg-canvas text-strong hover:border-brand-600 hover:text-brand-600 hover:-translate-y-0.5 active:translate-y-0',
  soft: 'bg-brand-600/10 text-brand-600 hover:bg-brand-600/16',
  ghost: 'text-strong hover:bg-brand-600/8 hover:text-brand-600',
  onDark:
    'bg-white text-brand-700 shadow-card hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0',
  onDarkOutline:
    'border border-white/35 text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
  link: 'text-brand-600 underline decoration-brand-600/30 underline-offset-4 hover:decoration-brand-600',
};

const sizes = {
  sm: 'h-9 px-4 text-[0.82rem]',
  md: 'h-11 px-5 text-[0.9rem]',
  lg: 'h-12 px-6 text-[0.94rem] sm:h-[3.25rem] sm:px-8 sm:text-[0.98rem]',
};

const bare = 'h-auto p-0';

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  external,
  className,
  children,
  type = 'button',
  ...rest
}) {
  const isBare = variant === 'link';
  const classes = cn(base, variants[variant] ?? variants.primary, isBare ? bare : sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className="h-[1.1em] w-[1.1em] shrink-0" />
      )}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && (
        <Icon
          name={icon}
          className={cn(
            'h-[1.1em] w-[1.1em] shrink-0 transition-transform duration-300 ease-premium',
            (icon === 'arrowRight' || icon === 'chevronRight') && 'group-hover/btn:translate-x-1',
            icon === 'arrowUpRight' && 'group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5',
          )}
        />
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type} className={classes} {...rest}>
        {content}
      </button>
    );
  }

  const isExternal =
    external ?? (/^https?:\/\//.test(href) || href.startsWith('tel:') || href.startsWith('mailto:'));

  if (isExternal) {
    const isHttp = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
