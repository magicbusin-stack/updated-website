/**
 * Shared scroll animation utilities — inspired by Daylight, Ctrl.xyz, Clearstreet
 * Use these across all Home page components for visual consistency.
 */

// ─── Viewport config ─────────────────────────────────────────────────────────
// Both set to once:false — animations replay on every entry AND reset on exit
export const VIEWPORT_ONCE = { once: false, amount: 0.18 };
export const VIEWPORT_REPEAT = { once: false, amount: 0.18 };

// ─── Easing curves ────────────────────────────────────────────────────────────
// Premium expo-out used by Clearstreet
export const EASE_EXPO = [0.16, 1, 0.3, 1];
// Snappy spring-feel used by Ctrl.xyz
export const EASE_SNAPPY = [0.6, 0.01, -0.05, 0.95];
// Soft, analog feel used by Daylight
export const EASE_SOFT = [0.25, 0.46, 0.45, 0.94];

// ─── Core entry variants ──────────────────────────────────────────────────────

/** Fade + slide up — default for most elements */
export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_EXPO },
  },
};

/** Fade + slide up — shorter travel for smaller elements */
export const fadeUpSm = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: EASE_EXPO },
  },
};

/** Fade in only */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.85, ease: EASE_SOFT },
  },
};

/** Scale + fade — for images, cards, media */
export const scaleReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: EASE_EXPO },
  },
};

/** Scale up from small — for icons and badges */
export const scalePop = {
  hidden: { opacity: 0, scale: 0.68 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

/** Slide in from left */
export const slideLeft = {
  hidden: { opacity: 0, x: -44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: EASE_EXPO },
  },
};

/** Slide in from right */
export const slideRight = {
  hidden: { opacity: 0, x: 44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: EASE_EXPO },
  },
};

// ─── Stagger container ────────────────────────────────────────────────────────

/** Wrap a list with this to stagger children */
export const staggerContainer = (stagger = 0.1, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Tighter stagger for denser grids */
export const staggerFast = staggerContainer(0.10, 0.06);
/** Standard stagger for cards */
export const staggerStd = staggerContainer(0.16, 0.10);
/** Slow stagger for hero-level elements */
export const staggerSlow = staggerContainer(0.22, 0.14);
