import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeUp,
  fadeUpSm,
  staggerStd,
  VIEWPORT_ONCE,
  EASE_EXPO,
} from "../../hooks/useScrollAnimations";

const col2 = [
  { name: "Reliance", src: "/partners/1 (4).png" },
  { name: "SBI Card", src: "/partners/1 (3).png" },
  { name: "Deutsche Bank", src: "/partners/1 (2).jpg" },
  { name: "Deloitte", src: "/partners/1 (2).png" },
  { name: "KFC", src: "/partners/1 (4).jpg" },
];

const col3 = [
  { name: "Airbus", src: "/partners/1 (5).jpg" },
  { name: "Cisco", src: "/partners/1 (14).jpg" },
  { name: "Puma", src: "/partners/1 (6).jpg" },
  { name: "Convergys", src: "/partners/1 (13).jpg" },
  { name: "IndiGo", src: "/partners/1 (7).jpg" },
];

const col4 = [
  { name: "Oracle", src: "/partners/1 (12).jpg" },
  { name: "MEL", src: "/partners/1 (8).jpg" },
  { name: "Mitsubishi", src: "/partners/1 (11).jpg" },
  { name: "Hexaware", src: "/partners/1 (9).jpg" },
  { name: "Relaygo", src: "/partners/1 (10).jpg" },
];

function LogoCard({ logo }) {
  const Img = (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/70 shadow-sm hover:shadow-md transition-shadow duration-300 p-3 sm:p-6 grid place-items-center h-20 sm:h-32 md:h-40 overflow-hidden"
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-full max-w-full w-auto h-auto object-contain transition duration-300 ease-out will-change-transform"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
  return logo.href ? (
    <a href={logo.href} aria-label={logo.name} className="block">
      {Img}
    </a>
  ) : (
    Img
  );
}

function AnimatedColumn({
  logos,
  direction = "up",
  duration = 22,
  heightClassName = "h-[260px] sm:h-[360px] md:h-[440px]",
  fadeClassName = "h-8 sm:h-16",
  gapClassName = "mb-3 sm:mb-6",
  CardComponent = LogoCard,
}) {
  const shouldReduce = useReducedMotion();
  const rows = [...logos, ...logos];

  return (
    <div className={`relative ${heightClassName} overflow-hidden`}>
      <div className={`pointer-events-none absolute inset-x-0 top-0 ${fadeClassName} bg-gradient-to-b from-white to-transparent z-10`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 ${fadeClassName} bg-gradient-to-t from-white to-transparent z-10`} />

      <div
        className="will-change-transform"
        style={
          shouldReduce
            ? undefined
            : {
                animationName: direction === "up" ? "partnersMarqueeUp" : "partnersMarqueeDown",
                animationDuration: `${duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }
        }
      >
        {rows.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className={gapClassName}>
            <CardComponent logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

const marqueeStyles = `
@keyframes partnersMarqueeUp {
  from { transform: translateY(0%); }
  to { transform: translateY(-50%); }
}
@keyframes partnersMarqueeDown {
  from { transform: translateY(-50%); }
  to { transform: translateY(0%); }
}
`;

let marqueeStylesInjected = false;
function injectMarqueeStyles() {
  if (typeof document !== "undefined" && !marqueeStylesInjected) {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-partners-marquee", "true");
    styleSheet.innerText = marqueeStyles;
    document.head.appendChild(styleSheet);
    marqueeStylesInjected = true;
  }
}

injectMarqueeStyles();

function MobileLogoCard({ logo }) {
  return (
    <div className="bg-white rounded-lg border border-border/70 shadow-sm p-2 grid place-items-center h-16 overflow-hidden">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-full max-w-full w-auto h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function TrustedOrganizations() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-brand-blue/10 via-brand-white to-brand-green/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading — staggered reveal */}
        <motion.div
          className="text-center mb-12"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.p
            variants={fadeUpSm}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-brand-red/10 text-brand-red ring-1 ring-brand-red/20"
          >
            Trusted by 500+ Organizations
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-ink"
          >
            Our Partners in <span className="text-brand-red">Change</span>
          </motion.h2>
          <motion.p
            variants={fadeUpSm}
            className="mt-3 text-ink/70 max-w-2xl mx-auto"
          >
            Strategic employers, corporates and ecosystem allies who power scale with us.
          </motion.p>
        </motion.div>

        {/* Desktop/tablet: 3 auto-scrolling marquee columns */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {[
            { logos: col2, dir: "down" },
            { logos: col3, dir: "up" },
            { logos: col4, dir: "down" },
          ].map(({ logos, dir }, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_EXPO } } }}
            >
              <AnimatedColumn logos={logos} direction={dir} duration={22} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: same 3-column auto-scrolling idea as desktop, just sized down —
            each column is an independent, equal-width grid track (no col-span
            placement to get wrong), so it can't overlap or clip like before. */}
        <div className="grid grid-cols-3 gap-2 sm:hidden">
          {[
            { logos: col2, dir: "down" },
            { logos: col3, dir: "up" },
            { logos: col4, dir: "down" },
          ].map(({ logos, dir }, idx) => (
            <AnimatedColumn
              key={idx}
              logos={logos}
              direction={dir}
              duration={18}
              heightClassName="h-[220px]"
              fadeClassName="h-4"
              gapClassName="mb-2"
              CardComponent={MobileLogoCard}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-brand-white px-5 py-3 font-semibold shadow hover:opacity-90 transition"
            >
              Partner With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
