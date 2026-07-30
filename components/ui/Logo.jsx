import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

/**
 * The Planet Health Care brand lockup — the client's own logo, supplied as a
 * transparent PNG so the gold wordmark sits correctly on both the light canvas
 * and the dark navy surface without a second asset.
 *
 * Source file: public/images/logo.png (trimmed, 900x266).
 */
export function LogoImage({ className = 'h-10', priority = false, sizes = '160px' }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={900}
      height={266}
      priority={priority}
      sizes={sizes}
      className={cn('w-auto', className)}
    />
  );
}

export default function Logo({ className, imageClassName = 'h-9 sm:h-10', priority = false }) {
  return (
    <Link
      href="/"
      // The link carries the accessible name, so the image itself is decorative.
      aria-label={`${site.name} — home`}
      className={cn(
        'group flex shrink-0 items-center transition-opacity duration-300 hover:opacity-85',
        className,
      )}
    >
      <LogoImage className={imageClassName} priority={priority} />
    </Link>
  );
}
