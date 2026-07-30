'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { variantMap, staggerContainer, viewportOnce, EASE } from '@/lib/motion';

/**
 * The only scroll-animation component in the project.
 *
 * Wrap anything that should ease in as it enters the viewport. When the visitor
 * prefers reduced motion, it renders the element with no transform or opacity
 * animation at all rather than a faster version of the same movement.
 */
export default function Reveal({
  as = 'div',
  variant = 'up',
  delay = 0,
  stagger,
  className,
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  // Stagger mode: children animate in sequence and must themselves be Reveals
  // (or motion elements) using the same variant names.
  if (stagger) {
    return (
      <MotionTag
        className={className}
        variants={staggerContainer(stagger, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  const selected = variantMap[variant] || variantMap.up;

  return (
    <MotionTag
      className={className}
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...selected.visible.transition, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * A child of a staggered <Reveal stagger={...}>. It inherits the parent's
 * orchestration instead of triggering its own viewport observer.
 */
export function RevealItem({ as = 'div', variant = 'up', className, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag className={className} variants={variantMap[variant] || variantMap.up} {...rest}>
      {children}
    </MotionTag>
  );
}
