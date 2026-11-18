import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OUTREACH_SLIDES, FONTS_HREF } from "./OutreachSlides";

/* "Our Outreach & Impact": replaces the old Outreach (Adolescent / Livelihood tabs) section.
   Six slides, one visible at a time (each = the stats from one of the team's HTML files + its photo).
   For now they are moved by hand: arrows, dots, keyboard arrows or a swipe. How they should be displayed
   in the end (auto-play, tabs ...) is still to be decided. */
export default function OurOutreachSection() {
  const [i, setI] = useState(0);
  const touchX = useRef(0);
  const total = OUTREACH_SLIDES.length;
  const go = (n) => setI((n + total) % total);
  const slide = OUTREACH_SLIDES[i];
  const { Content } = slide;

  return (
    <section
      className="overflow-hidden bg-white py-12 md:py-16"
      aria-roledescription="carousel"
      aria-labelledby="our-outreach-heading"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(i - 1);
        if (e.key === "ArrowRight") go(i + 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 60) go(dx > 0 ? i - 1 : i + 1);
      }}
    >
      {/* Fonts used by the six designs (Inter, Montserrat, Open Sans, Outfit) */}
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header className="mb-6 px-4 text-center md:mb-8">
        <h2
          id="our-outreach-heading"
          className="font-['Montserrat',system-ui,sans-serif] text-3xl font-extrabold tracking-tight text-[#0f1d38] sm:text-4xl md:text-[44px]"
        >
          Our Outreach &amp; Impact
        </h2>
      </header>

      {/* Slide controls */}
      <div className="mb-8 flex items-center justify-center gap-4 px-4">
        <button
          type="button"
          onClick={() => go(i - 1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose a slide">
          {OUTREACH_SLIDES.map((s, idx) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Slide ${idx + 1} of ${total}: ${s.label}`}
              onClick={() => go(idx)}
              className="-m-2 p-2"
            >
              <span className={`block h-2.5 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-slate-800" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(i + 1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={slide.key}
          data-slide={slide.key}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Content />
          </div>
          <img src={slide.photo} alt={slide.alt} className="mt-8 block h-auto w-full" />
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
