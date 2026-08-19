'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import Navbar from '@/components/navigation/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { site, addressOneLine } from '@/data/site';
import { cn } from '@/lib/utils';

/**
 * Sticky header.
 *
 * A thin utility bar carries the clinic address and phone on large screens; the
 * main bar holds the logo, navigation and the booking call to action. On scroll
 * the bar tightens and gains a translucent background so long pages keep the
 * booking action within reach without the header dominating the hero.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-[60] w-full">
        {/* Utility bar — clinic essentials, hidden on small screens */}
        <div className="hidden border-b border-white/10 bg-brand-800 text-white lg:block">
          <div className="shell flex h-9 items-center justify-between gap-6 text-[0.76rem]">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-white/80">
                <Icon name="pin" className="h-3.5 w-3.5 text-teal-400" />
                {addressOneLine}
              </span>
              <span className="hidden items-center gap-1.5 text-white/80 xl:flex">
                <Icon name="clock" className="h-3.5 w-3.5 text-teal-400" />
                Mon–Fri 10 am – 6 pm · Closed Wednesday
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="hidden items-center gap-1.5 text-white/80 xl:flex">
                <Icon name="shield" className="h-3.5 w-3.5 text-teal-400" />
                Direct billing to all most insurers
              </span>
              <a
                href={site.phoneHref}
                className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-teal-400"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div
          className={cn(
            'border-b transition-all duration-400 ease-premium',
            scrolled
              ? 'border-line bg-canvas/85 shadow-card backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/75'
              : 'border-transparent bg-canvas',
          )}
        >
          <div
            className={cn(
              'shell flex items-center justify-between gap-4 transition-all duration-400 ease-premium',
              scrolled ? 'h-16' : 'h-[4.5rem] lg:h-20',
            )}
          >
            <Logo priority />

            <Navbar className="hidden xl:flex" />

            <div className="flex items-center gap-2 sm:gap-2.5">
              <ThemeToggle className="hidden sm:grid" />

              <a
                href={site.phoneHref}
                aria-label={`Call the clinic at ${site.phone}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-strong transition-all duration-300 hover:border-brand-600 hover:text-brand-600 lg:hidden"
              >
                <Icon name="phone" className="h-[1.05rem] w-[1.05rem]" />
              </a>

              <Button
                href={site.links.booking}
                icon="calendar"
                iconPosition="left"
                size="md"
                className="hidden sm:inline-flex"
              >
                Book Appointment
              </Button>

              <button
                ref={triggerRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-strong transition-all duration-300 hover:border-brand-600 hover:text-brand-600 xl:hidden"
              >
                <Icon name="menu" className="h-[1.15rem] w-[1.15rem]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} triggerRef={triggerRef} />
    </>
  );
}
