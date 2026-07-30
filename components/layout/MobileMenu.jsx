'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import IconWrapper from '@/components/ui/IconWrapper';
import Logo from '@/components/ui/Logo';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { primaryNav } from '@/data/navigation';
import { site, addressLines } from '@/data/site';
import { cn } from '@/lib/utils';
import { EASE } from '@/lib/motion';

/**
 * Mobile navigation drawer.
 *
 * Locks background scroll while open, closes on Escape, on backdrop tap and on
 * navigation, moves focus into the panel on open and returns it to the trigger
 * on close, and keeps the nested services list keyboard operable.
 */
export default function MobileMenu({ open, onClose, triggerRef }) {
  const pathname = usePathname();
  const panelRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Close whenever the route changes.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock background scroll and remember the scrollbar width so the layout
  // does not jump when the scrollbar disappears.
  useEffect(() => {
    if (!open) return undefined;

    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    body.style.overflow = 'hidden';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // Escape to close, and a simple focus loop inside the panel.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        triggerRef?.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const focusTimer = setTimeout(() => {
      panelRef.current?.querySelector('button, a')?.focus();
    }, 60);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(focusTimer);
    };
  }, [open, onClose, triggerRef]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] xl:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-strong/45 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.25, ease: EASE }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            variants={{
              hidden: reduceMotion ? { opacity: 0 } : { x: '100%' },
              visible: reduceMotion ? { opacity: 1 } : { x: 0 },
            }}
            transition={{ duration: 0.36, ease: EASE }}
            className="absolute right-0 top-0 flex h-full w-[min(24rem,100%)] flex-col border-l border-line bg-canvas shadow-float"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <Logo imageClassName="h-8" />
              <div className="flex items-center gap-2">
                <ThemeToggle size="sm" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-strong transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <ul className="flex flex-col gap-0.5">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    {item.children ? (
                      <>
                        <div className="flex items-center gap-1">
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                              'flex-1 rounded-xl px-3 py-3 font-display text-[1.02rem] font-bold transition-colors',
                              isActive(item.href)
                                ? 'bg-brand-600/8 text-brand-600'
                                : 'text-strong hover:bg-brand-600/[0.06]',
                            )}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-label={servicesOpen ? 'Collapse services' : 'Expand services'}
                            onClick={() => setServicesOpen((value) => !value)}
                            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-brand-600 hover:text-brand-600"
                          >
                            <Icon
                              name="chevronDown"
                              className={cn(
                                'h-4 w-4 transition-transform duration-300 ease-premium',
                                servicesOpen && 'rotate-180',
                              )}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {servicesOpen && (
                            <motion.ul
                              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                              animate={reduceMotion ? {} : { height: 'auto', opacity: 1 }}
                              exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: EASE }}
                              className="overflow-hidden pl-1"
                            >
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-[0.9rem] font-semibold text-body transition-colors hover:bg-brand-600/[0.06] hover:text-brand-600"
                                  >
                                    <IconWrapper name={child.icon} accent={child.accent} size="sm" />
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={cn(
                          'block rounded-xl px-3 py-3 font-display text-[1.02rem] font-bold transition-colors',
                          isActive(item.href)
                            ? 'bg-brand-600/8 text-brand-600'
                            : 'text-strong hover:bg-brand-600/[0.06]',
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-line bg-surface px-5 py-5">
              <a
                href={site.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 text-[0.92rem] font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <Icon name="calendar" className="h-4 w-4" />
                Book an Appointment
              </a>
              <a
                href={site.phoneHref}
                className="mt-2.5 flex h-12 items-center justify-center gap-2 rounded-full border border-line text-[0.92rem] font-semibold text-strong transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                <Icon name="phone" className="h-4 w-4" />
                Call {site.phone}
              </a>

              <address className="mt-4 flex items-start gap-2.5 text-[0.8rem] not-italic leading-relaxed text-muted">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
