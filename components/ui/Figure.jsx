import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Image frame used everywhere a photograph appears.
 *
 * Wraps next/image so every picture in the project gets the same treatment:
 * a themed border, rounded corner scale, a soft gradient wash that keeps
 * photographs sitting comfortably in dark mode, and correct sizes hints.
 *
 * Replace the files in /public/images with real photography — the filenames
 * are referenced from the data files, so no component changes are needed.
 */
export default function Figure({
  src,
  alt,
  width = 1200,
  height = 1400,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  ratio,
  rounded = 'rounded-panel',
  className,
  imageClassName,
  overlay = true,
  children,
}) {
  return (
    <figure
      className={cn(
        'group relative isolate overflow-hidden border border-line bg-surface',
        rounded,
        ratio,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        sizes={sizes}
        className={cn(
          'h-full w-full object-cover transition-transform duration-[900ms] ease-premium',
          'group-hover:scale-[1.03]',
          imageClassName,
        )}
      />

      {overlay && (
        <>
          {/* Warms the photograph toward the brand and lifts contrast at the
              bottom edge where floating cards and captions sit. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-900/35 via-brand-700/5 to-transparent mix-blend-multiply dark:from-brand-900/55"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-900/45 to-transparent dark:from-[#0b1220]/70"
          />
        </>
      )}

      {children}
    </figure>
  );
}
