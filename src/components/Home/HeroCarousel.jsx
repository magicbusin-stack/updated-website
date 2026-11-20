import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FlipCoinButton from "../ui/flip-coin-button";

const EASE = [0.16, 1, 0.3, 1];

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  const slides = [
    {
      image: "/ngo-videos/mbif-homepage-video.mp4",
      eyebrow: "Digital Skills",
      title: "Build Future-Ready Skills",
      desc: "Hands-on, market-aligned training for tomorrow's workforce.",
      cta: { label: "Donate Now", href: "/donate" },
    },
    {
      image: "/ngo-videos/mbif-homepage-video.mp4",
      eyebrow: "AI • Digital • Impact",
      title: "AI & Digital Programmes",
      desc: "First NGO to Launch AI & Digital Programmes for India's boldest disruptors.",
      cta: { label: "Donate Now", href: "/donate" },
    },
    {
      image: "/ngo-videos/mbif-homepage-video.mp4",
      eyebrow: "Youth Empowerment",
      title: "Empowering Adolescents",
      desc: "AI-powered platform transforming adolescents into skilled professionals.",
      cta: { label: "Donate Now", href: "/donate" },
    },
  ];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => next(), 6500);
    return () => clearInterval(t);
  }, [paused, i]);

  const wrap = (n) => (n + slides.length) % slides.length;
  const next = () => {
    setDir(1);
    setI((p) => wrap(p + 1));
  };
  const prev = () => {
    setDir(-1);
    setI((p) => wrap(p - 1));
  };

  // Ken Burns effect on image
  const imgVariants = {
    initial: { scale: 1 },
    animate: { scale: 1 },
  };

  // Text card animation
  const cardVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: EASE } },
  };

  const textItem = (delay) => ({
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, delay: delay * 0.5 } },
  });

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111]"
      style={{
        // Reserve real space for the header (--header-h, measured live by
        // NavbarNew) so the video can never overlap or be cropped by it.
        marginTop: "var(--header-h, 113px)",
        // Never shrink below the video's native 16:9 height for the current
        // width — on short/wide browser windows, filling the leftover
        // viewport height alone forces a much wider-than-16:9 box, which
        // makes object-fit:cover crop a huge chunk off the top/bottom.
        // Taking the max means a short window scrolls a little instead of
        // cropping the video into a disproportionate close-up.
        height: "max(calc(100vh - var(--header-h, 113px)), 56.25vw)",
        maxHeight: "900px",
        minHeight: "420px",
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
      }}
    >
      {/* ── Background media (full bleed) ─────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slides[i].image}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.1, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
        >
          <motion.div
            className="absolute inset-0"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            {slides[i].image.match(/\.(mp4|MP4|MOV|mov|webm)$/) ? (
              <motion.video
                key={slides[i].image}
                src={slides[i].image}
                poster="/ngo-videos/mbif-homepage-video-poster.jpg"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <img
                src={slides[i].image}
                alt={slides[i].title}
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* Subtle left-side gradient so the white card reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
          {/* Top fade — the header now floats directly over this video with no
              reserved space, so this cushions contrast for the logo/nav text
              sitting on top of whatever the video shows underneath. */}
          <div className="absolute top-0 left-0 right-0 h-28 sm:h-44 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
          {/* Bottom fade so the card merges smoothly */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ── White text card (with the Donate button) — left side, vertically centred ─────────── */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        {/* Same container and side padding as the header, so the card's left edge lines up with the logo */}
        <div className="w-full max-w-[104rem] mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${i}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block bg-white border border-gray-200/70 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-8 sm:py-7 max-w-[300px] sm:max-w-lg shadow-xl pointer-events-auto"
            >
              {/* Eyebrow */}
              {slides[i].eyebrow && (
                <motion.span
                  {...textItem(0.1)}
                  initial={textItem(0.1).initial}
                  animate={textItem(0.1).animate}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-semibold uppercase tracking-widest text-brand-red mb-2 sm:mb-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red inline-block" />
                  {slides[i].eyebrow}
                </motion.span>
              )}

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, delay: 0.1 } }}
                className="text-2xl sm:text-4xl font-extrabold leading-tight text-[#1A1A1A] mb-2 sm:mb-3 uppercase tracking-tight"
              >
                {slides[i].title}
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { duration: 0.4, ease: EASE, delay: 0.2 } }}
                className="origin-left h-[2px] sm:h-[3px] w-8 sm:w-12 rounded-full bg-brand-red mb-1.5 sm:mb-3"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, delay: 0.25 } }}
                className="text-base sm:text-lg text-[#333] leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none"
              >
                {slides[i].desc}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, delay: 0.3 } }}
                className="flex flex-wrap items-center gap-2 sm:gap-3"
              >
                <div className="shrink-0">
                  <FlipCoinButton size="lg" onFlipComplete={() => navigate(slides[i].cta.href)}>
                    {slides[i].cta.label}
                  </FlipCoinButton>
                </div>
                <motion.button
                  className="inline-flex w-auto px-6 h-[2.9rem] sm:h-14 items-center justify-center gap-2 rounded-full border-2 border-brand-red bg-brand-red/5 text-base sm:text-lg font-bold text-brand-red hover:bg-brand-red/10 active:bg-brand-red/15 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}