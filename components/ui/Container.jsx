import { cn } from '@/lib/utils';

/**
 * Layout shell. Content runs edge to edge across the viewport with only a
 * small safe gutter (var(--gutter)) — no wasted dead space on the left and
 * right. `wide` removes the max-width cap entirely for full-bleed bands.
 */
export default function Container({ as: Tag = 'div', wide = false, className, children, ...rest }) {
  return (
    <Tag className={cn(wide ? 'w-full px-gutter' : 'shell', className)} {...rest}>
      {children}
    </Tag>
  );
}
