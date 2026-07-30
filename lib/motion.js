/**
 * Shared animation vocabulary.
 *
 * Every animated component imports from here — no ad-hoc transition objects
 * scattered through the codebase. Reduced motion is handled by the <Reveal />
 * component and the global CSS media query, so variants stay simple.
 */

export const EASE = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.28,
  base: 0.5,
  slow: 0.75,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const slideDown = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.fast, ease: EASE } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.slow, ease: EASE } },
};

export const slideRight = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION.slow, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION.base, ease: EASE } },
};

export const variantMap = {
  fade: fadeIn,
  up: slideUp,
  down: slideDown,
  left: slideLeft,
  right: slideRight,
  scale: scaleIn,
};

/** Parent wrapper that releases children one after another. */
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Default scroll trigger: fires slightly before the element is centred. */
export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px' };
