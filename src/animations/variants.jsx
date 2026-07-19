/**
 * Shared Framer Motion variants.
 * Import these instead of redefining animation objects per component.
 */

const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

export const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const VIEWPORT_ONCE = { once: true, margin: '-80px' };
