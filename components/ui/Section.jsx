import { cn } from '@/lib/utils';

/**
 * A vertical rhythm wrapper. `tone` selects the themed background so section
 * banding stays consistent instead of being re-invented per page.
 */
const tones = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
  elevated: 'bg-elevated',
  brand: 'bg-brand-700 text-white',
  none: '',
};

export default function Section({
  as: Tag = 'section',
  tone = 'canvas',
  className,
  bordered = false,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'relative py-section',
        tones[tone] ?? tones.canvas,
        bordered && 'border-t border-line',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
