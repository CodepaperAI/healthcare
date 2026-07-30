'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import IconWrapper from '@/components/ui/IconWrapper';
import { site } from '@/data/site';
import { cn, pad } from '@/lib/utils';
import { EASE } from '@/lib/motion';

/**
 * Services mega-menu.
 *
 * Opens on hover for pointer users and on click/Enter for keyboard users,
 * closes on Escape, on outside click and when focus leaves the menu. Items are
 * generated from data/navigation.js, which is generated from data/services.js.
 */
export default function ServicesDropdown({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        wrapperRef.current?.querySelector('button')?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  // Small delay so the pointer can cross the gap between trigger and panel.
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  const handleBlur = (event) => {
    if (!wrapperRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onBlur={handleBlur}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          className={cn(
            'rounded-full px-3 py-2 text-[0.84rem] font-semibold transition-colors duration-200',
            isActive ? 'text-brand-600' : 'text-strong hover:text-brand-600',
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={open ? 'Close services menu' : 'Open services menu'}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            'grid h-6 w-5 place-items-center rounded text-muted transition-colors hover:text-brand-600',
            open && 'text-brand-600',
          )}
        >
          <Icon
            name="chevronDown"
            className={cn('h-3.5 w-3.5 transition-transform duration-300 ease-premium', open && 'rotate-180')}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.985 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.99 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute left-1/2 top-full z-50 w-[min(46rem,calc(100vw-3rem))] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-panel border border-line bg-elevated shadow-float">
              <div className="grid gap-0 sm:grid-cols-[1.55fr_1fr]">
                <ul className="grid gap-1 p-3 sm:grid-cols-2">
                  {item.children.map((child, index) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-brand-600/[0.06]"
                      >
                        <IconWrapper name={child.icon} accent={child.accent} size="sm" />
                        <span className="min-w-0">
                          <span className="flex items-baseline gap-1.5">
                            <span className="text-[0.6rem] font-bold tabular-nums text-muted">
                              {pad(index + 1)}
                            </span>
                            <span className="font-display text-[0.9rem] font-bold text-strong transition-colors group-hover:text-brand-600">
                              {child.label}
                            </span>
                          </span>
                          <span className="mt-0.5 block text-[0.78rem] leading-snug text-muted">
                            {child.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="relative flex flex-col justify-between gap-4 border-t border-line bg-surface p-5 sm:border-l sm:border-t-0">
                  <div>
                    <p className="eyebrow">One roof, one plan</p>
                    <p className="mt-2 font-display text-[0.98rem] font-bold leading-snug text-strong">
                      Not sure who to see first?
                    </p>
                    <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                      Call the front desk and we’ll match your condition to the right practitioner —
                      often the same day.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={site.phoneHref}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 text-[0.82rem] font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      <Icon name="phone" className="h-3.5 w-3.5" />
                      {site.phone}
                    </a>
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-line px-4 text-[0.82rem] font-semibold text-strong transition-colors hover:border-brand-600 hover:text-brand-600"
                    >
                      All services
                      <Icon name="arrowRight" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
