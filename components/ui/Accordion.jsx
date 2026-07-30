'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { EASE } from '@/lib/motion';

/**
 * Accessible disclosure list.
 *
 * Real <button> elements with aria-expanded and aria-controls, keyboard
 * operable by default, and the panel is animated only when the visitor has not
 * asked for reduced motion.
 */
export default function Accordion({ items = [], allowMultiple = false, className, tone = 'card' }) {
  const baseId = useId();
  const [open, setOpen] = useState(() => (allowMultiple ? [] : null));
  const reduceMotion = useReducedMotion();

  const isOpen = (index) => (allowMultiple ? open.includes(index) : open === index);

  const toggle = (index) => {
    if (allowMultiple) {
      setOpen((current) =>
        current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
      );
    } else {
      setOpen((current) => (current === index ? null : index));
    }
  };

  return (
    <div
      className={cn(
        tone === 'card' && 'divide-y divide-line overflow-hidden rounded-card border border-line bg-elevated',
        tone === 'flush' && 'divide-y divide-line border-y border-line',
        className,
      )}
    >
      {items.map((item, index) => {
        const expanded = isOpen(index);
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.q || item.title || index}>
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 sm:px-6 sm:py-5',
                  'hover:bg-brand-600/[0.04]',
                  expanded && 'bg-brand-600/[0.04]',
                )}
              >
                <span
                  className={cn(
                    'font-display text-[0.98rem] font-bold leading-snug sm:text-[1.05rem]',
                    expanded ? 'text-brand-600' : 'text-strong',
                  )}
                >
                  {item.q || item.title}
                </span>
                <span
                  className={cn(
                    'grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-premium',
                    expanded
                      ? 'rotate-180 border-brand-600 bg-brand-600 text-white'
                      : 'border-line text-muted',
                  )}
                >
                  <Icon name={expanded ? 'minus' : 'plus'} className="h-3.5 w-3.5" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? {} : { height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-[0.95rem] leading-relaxed text-muted sm:px-6 sm:pb-6">
                    {item.a || item.body}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
