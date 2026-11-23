import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

/* The product cards. Clicking a card opens its details (like the leadership profiles).
   TODO: replace each `description` with the final product copy. It currently repeats the placeholder text
   that is printed on the card artwork. */
const PLACEHOLDER =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta diam eget molestie consequat.";

const slides = [
  { title: "FPD", fullName: "Fraud Prevention Detection (FPD)", description: PLACEHOLDER, image: "/tech-cards/fpd.jpg", clean: "/tech-cards/clean/fpd.jpg" },
  { title: "MB Pay", fullName: "MB Pay", description: PLACEHOLDER, image: "/tech-cards/mb-pay.jpg", clean: "/tech-cards/clean/mb-pay.jpg" },
  { title: "MB Insights", fullName: "MB Insights", description: PLACEHOLDER, image: "/tech-cards/mb-insights.jpg", clean: "/tech-cards/clean/mb-insights.jpg" },
  { title: "MB Donor Portal", fullName: "MB Donor Portal", description: PLACEHOLDER, image: "/tech-cards/mb-donor-portal.jpg", clean: "/tech-cards/clean/mb-donor-portal.jpg" },
  { title: "Chatbots", fullName: "Chatbots", description: PLACEHOLDER, image: "/tech-cards/chatbots.jpg", clean: "/tech-cards/clean/chatbots.jpg" },
];
// `image` is the full card artwork (with its title and text) used on the carousel cards.
// `clean` is the same photo without the text on it, used on the left of the details panel.

const AUTO_MS = 3200; // the carousel moves one card every few seconds on its own

const getCarouselConfig = (width) => {
  if (width < 640) {
    return { xMultiplier: 90, yMultiplier: 20, rotationMultiplier: 8, scaleReduction: 0.06 };
  }
  if (width < 1024) {
    return { xMultiplier: 130, yMultiplier: 30, rotationMultiplier: 10, scaleReduction: 0.09 };
  }
  return { xMultiplier: 170, yMultiplier: 40, rotationMultiplier: 12, scaleReduction: 0.12 };
};

export default function TechInnovationCarousel() {
  const scrollProgress = useMotionValue(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(() => getCarouselConfig(windowWidth), [windowWidth]);

  // Auto-scroll: advance one card at a time. Pauses while a card's details are open, and is off for
  // visitors who prefer reduced motion.
  React.useEffect(() => {
    if (selected) return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => {
      animate(scrollProgress, Math.round(scrollProgress.get()) + 1, {
        type: "spring",
        stiffness: 90,
        damping: 22,
        mass: 1,
      });
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [selected, scrollProgress]);

  return (
    <div className="isolate relative flex flex-col items-center justify-center w-full py-10 bg-transparent overflow-hidden select-none">
      <div className="relative w-full max-w-7xl h-80 sm:h-[28rem] lg:h-[32rem] flex items-center justify-center">
        {slides.map((slide, i) => (
          <Card key={slide.title} slide={slide} index={i} total={total} progress={scrollProgress} config={config} onOpen={() => setSelected(slide)} />
        ))}
      </div>

      <DetailModal slide={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function Card({ slide, index, total, progress, config, onOpen }) {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * config.rotationMultiplier));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * config.yMultiplier));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction);
  const opacity = useTransform(offset, [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2], [0, 1, 1, 1, 0]);
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const dimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.5, 0.2, 0, 0.2, 0.5]);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`${slide.title}: show details`}
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-slate-900 group cursor-pointer shadow-xl border-0 outline-none [backface-visibility:hidden]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/50",
        "w-44 h-56 sm:w-56 sm:h-80 lg:w-64 lg:h-96"
      )}
    >
      <img loading="lazy" decoding="async" src={slide.image} alt={slide.title} className="absolute inset-0 block w-full h-full scale-[1.02] object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
      <motion.div style={{ opacity: dimOpacity }} className="absolute inset-0 bg-black pointer-events-none" />
    </motion.button>
  );
}

/* The details panel that opens when a card is clicked */
function DetailModal({ slide, onClose }) {
  React.useEffect(() => {
    if (!slide) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [slide, onClose]);

  // Rendered straight into <body> (not inside the carousel) so no other section can ever sit on top of it.
  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {slide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${slide.title} details`}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white text-left shadow-2xl md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75"
              aria-label="Close details"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gray-100 md:min-h-[32rem]">
              <img decoding="async" src={slide.clean} alt={slide.title} className="h-full max-h-[24rem] w-full object-cover object-top md:max-h-none" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-red">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Tech &amp; Innovation
              </span>
              <h3 className="text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl">{slide.fullName}</h3>
              <div className="mt-4 h-1.5 w-16 rounded-full bg-brand-yellow" />
              <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">{slide.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
