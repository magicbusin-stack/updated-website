import { motion, useReducedMotion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import FlipCoinButton from "../ui/flip-coin-button";
import {
  fadeUp,
  fadeUpSm,
  scalePop,
  staggerStd,
  staggerFast,
  VIEWPORT_ONCE,
  EASE_EXPO,
} from "../../hooks/useScrollAnimations";

export default function GetInvolvedSection() {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const baseDrift = prefersReduced
    ? { x: 0, y: 0, opacity: 0.75, rotate: 0 }
    : undefined;

  const blobDurations = { yellow: 28, red: 34, blue: 32 };

  const cards = [
    {
      title: "Show Your Support",
      iconBg: "bg-brand-yellow",
      icon: (
        <svg className="h-8 w-8 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      ctaText: "Donate Now",
      ctaHref: "/donate",
    },
    {
      title: "Partner With Us",
      iconBg: "bg-brand-blue",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      ctaText: "Become a Partner",
      ctaHref: "/partner",
    },
    {
      title: "Work With Us",
      iconBg: "bg-brand-magenta",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      ctaText: "View Openings",
      ctaHref: "/work-with-us",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-red via-[#C11A1F] to-[#A81818] py-20">
      {/* Animated Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-28 -right-24 h-[28rem] w-[28rem] rounded-full mix-blend-screen"
          style={{
            background: "radial-gradient(closest-side, rgba(255,204,4,.18), rgba(255,204,4,.08), transparent 70%)",
            filter: "blur(64px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.7, rotate: 0 }}
          animate={baseDrift ?? {
            x: [0, -20, -8, 18, 0],
            y: [0, -18, 16, -8, 0],
            opacity: [0.7, 0.58, 0.66, 0.62, 0.7],
            rotate: [0, 4, -2, 3, 0],
          }}
          transition={{ duration: blobDurations.yellow, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-36 -left-24 h-[30rem] w-[30rem] rounded-full mix-blend-screen"
          style={{
            background: "radial-gradient(closest-side, rgba(225,34,40,.12), rgba(225,34,40,.06), transparent 70%)",
            filter: "blur(64px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.7, rotate: 0 }}
          animate={baseDrift ?? {
            x: [0, 30, 6, -24, 0],
            y: [0, 12, -18, 8, 0],
            opacity: [0.68, 0.56, 0.66, 0.6, 0.68],
            rotate: [0, -5, 3, -4, 0],
          }}
          transition={{ duration: blobDurations.red, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 h-[22rem] w-[22rem] rounded-full mix-blend-screen"
          style={{
            background: "radial-gradient(closest-side, rgba(33,189,234,.12), rgba(33,189,234,.06), transparent 70%)",
            filter: "blur(56px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.7, rotate: 0 }}
          animate={baseDrift ?? {
            x: [0, -12, 18, -10, 0],
            y: [0, 14, -10, 8, 0],
            opacity: [0.7, 0.6, 0.68, 0.62, 0.7],
            rotate: [0, 3, -3, 2, 0],
          }}
          transition={{ duration: blobDurations.blue, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-dosis text-4xl md:text-5xl font-bold text-white"
          >
            Collaborate with us
          </motion.h2>
          <motion.p
            variants={fadeUpSm}
            className="mx-auto mt-4 max-w-2xl font-lato text-lg text-white/90"
          >
            Here's how you can get involved and make a change.
          </motion.p>
        </motion.div>

        {/* Cards — staggered scroll entry */}
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-3 gap-1.5 sm:gap-6 items-stretch"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {cards.map((card, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="
                  group mx-auto w-full max-w-sm rounded-lg sm:rounded-2xl
                  bg-gray-900/90
                  backdrop-blur-xl
                  border border-white/10
                  shadow-2xl
                  relative overflow-hidden
                "
              >
                {/* Gloss shine overlay */}
                <div className="
                  absolute inset-0 pointer-events-none
                  bg-gradient-to-tr from-white/30 via-transparent to-white/50
                  opacity-20 group-hover:opacity-30 transition
                " />

                <div className="relative h-full p-1.5 sm:p-6 flex flex-col items-center text-center">
                  {/* Icon box — pops in */}
                  <motion.div
                    variants={scalePop}
                    className={`mb-1 sm:mb-5 flex h-6 w-6 sm:h-14 sm:w-14 items-center justify-center rounded-md sm:rounded-xl shadow-md ${card.iconBg}`}
                  >
                    <div className="scale-[0.4] sm:scale-100">{card.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-1 sm:mb-3 text-[9px] leading-tight sm:text-lg font-dosis font-bold text-white">{card.title}</h3>

                  {/* Description */}
                  <p className="hidden sm:block text-sm text-white/85 mb-6">
                    {card.title === "Work With Us"
                      ? "Find roles or volunteer opportunities where your skills can change lives."
                      : card.title === "Partner With Us"
                      ? "Work together for sustainable community impact."
                      : "Join us in creating opportunities for young people."}
                  </p>

                  {/* CTA — mobile: compact plain pill so 3 cards fit in one row and stay readable */}
                  <div className="sm:hidden w-full mt-auto pt-1">
                    {card.ctaHref === "/donate" ? (
                      <button
                        onClick={() => navigate(card.ctaHref)}
                        className="flex w-full min-h-[26px] items-center justify-center text-center rounded-full bg-brand-yellow px-1 py-1 text-[8px] leading-tight font-bold text-brand-black shadow"
                      >
                        {card.ctaText}
                      </button>
                    ) : (
                      <a
                        href={card.ctaHref}
                        className="flex w-full min-h-[26px] items-center justify-center text-center rounded-full bg-brand-yellow px-1 py-1 text-[8px] leading-tight font-bold text-brand-black shadow"
                      >
                        {card.ctaText}
                      </a>
                    )}
                  </div>

                  {/* CTA — tablet/desktop: original treatment unchanged */}
                  <div className="hidden sm:block mt-auto">
                    {card.ctaHref === "/donate" ? (
                      <FlipCoinButton onFlipComplete={() => navigate(card.ctaHref)}>
                        {card.ctaText}
                      </FlipCoinButton>
                    ) : (
                      <motion.a
                        href={card.ctaHref}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="inline-flex w-48 h-12 items-center justify-center rounded-full bg-brand-yellow px-4 text-sm font-bold text-brand-black shadow"
                      >
                        {card.ctaText}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.5 }}
        >
          <p className="text-sm text-white/80">
            Want to do more?{" "}
            <Link to="/contact" className="underline text-white">
              Get in touch
            </Link>
            — we'd love to partner with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
