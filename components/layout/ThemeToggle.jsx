'use client';

import Icon from '@/components/ui/Icon';
import { useTheme } from '@/components/layout/ThemeProvider';
import { cn } from '@/lib/utils';

/**
 * Light/dark switch.
 *
 * Which icon shows is decided by CSS (the `dark` class on <html>), not React
 * state — so the server and client render identical markup and there is no
 * hydration mismatch or first-paint flicker.
 */
export default function ThemeToggle({ className, size = 'md' }) {
  const { toggle } = useTheme();

  const dimensions = size === 'sm' ? 'h-9 w-9' : 'h-10 w-10';

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'group relative grid shrink-0 place-items-center rounded-full border border-line bg-canvas',
        'text-muted transition-all duration-300 ease-premium',
        'hover:border-brand-600/40 hover:text-brand-600',
        dimensions,
        className,
      )}
    >
      {/* Moon while light theme is active (tap to go dark) */}
      <span className="dark:hidden">
        <Icon name="moon" className="h-[1.05rem] w-[1.05rem]" />
        <span className="sr-only">Switch to dark theme</span>
      </span>

      {/* Sun while dark theme is active (tap to go light) */}
      <span className="hidden dark:block">
        <Icon name="sun" className="h-[1.05rem] w-[1.05rem]" />
        <span className="sr-only">Switch to light theme</span>
      </span>
    </button>
  );
}
