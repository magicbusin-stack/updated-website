import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OUTREACH_SLIDES, FONTS_HREF, DATA_LINE } from "./OutreachSlides";

/* "Our Outreach & Impact": replaces the old Outreach (Adolescent / Livelihood tabs) section.
   Four slides, one after another: Adolescents Outreach, Adolescents Impact, Livelihood Outreach, Livelihood Impact.
   - every 7 seconds the stats change (and the 7 seconds restart after any manual change);
   - the PHOTO belongs to the programme, so it only changes when the programme changes:
     Adolescents Outreach -> Adolescents Impact keeps the same photo and only the stats change;
   - the arrows sit on the left and right of the stats, always at the same height;
   - the numbers on the right count up each time stats appear; the big number on the left stays still. */
const AUTO_MS = 7000;

export default function OurOutreachSection() {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0); // counts every change, so the numbers count up again whenever stats appear
  const touchX = useRef(0);
  const total = OUTREACH_SLIDES.length;
  const go = (n) => {
    setI((n + total) % total);
    setTick((t) => t + 1);
  };
  const slide = OUTREACH_SLIDES[i];
  const photo = slide.photo;
  // all the slides that share this photo (one programme): they are stacked in one place so the area keeps one steady height
  const group = OUTREACH_SLIDES.filter((s) => s.photo === photo);

  // Auto-advance. Changing slide (by hand or automatically) restarts the 7 seconds.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => go(i + 1), AUTO_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const arrow =
    "absolute top-36 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-slate-700 shadow-sm transition hover:border-slate-500 hover:bg-white active:scale-95 md:h-11 md:w-11";

  return (
    <section
      className="overflow-hidden bg-white pt-5 md:pt-6"
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
      {/* Fonts used by the designs (Inter) */}
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header className="px-4 text-center">
        <h2
          id="our-outreach-heading"
          className="font-['Inter',system-ui,sans-serif] text-2xl font-extrabold tracking-tight text-[#0f1d38] sm:text-3xl md:text-[38px]"
        >
          Our Outreach &amp; Impact
        </h2>
      </header>

      {/* Stats, with the arrows on its left and right (the arrows never move or fade) */}
      <div className="relative w-full" data-slide={slide.key}>
        <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className={`${arrow} left-1 md:left-2`}>
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="mx-auto w-full max-w-[1500px] px-11 py-4 sm:px-14 md:py-5 lg:px-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={photo} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* The programme's slides sit on top of each other; only the current one is visible. Same-programme
                changes just cross-fade the stats. */}
            <div className="grid">
              {group.map((s) => {
                const active = s.key === slide.key;
                const { Content } = s;
                return (
                  <div
                    key={s.key}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={s.label}
                    aria-hidden={!active}
                    inert={!active}
                    className="col-start-1 row-start-1"
                    style={{
                      opacity: active ? 1 : 0,
                      visibility: active ? "visible" : "hidden",
                      pointerEvents: active ? "auto" : "none",
                      transition: active ? "opacity 0.5s ease" : "opacity 0.4s ease, visibility 0s linear 0.4s",
                    }}
                  >
                    {/* new key each time it becomes the current slide, so its numbers count up again */}
                    <Content key={active ? `on-${tick}` : "off"} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className={`${arrow} right-1 md:right-2`}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Photo: changes only when the programme changes; full width, never cropped */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={photo}
          src={photo}
          alt={slide.alt}
          className="block h-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Source line: centred under the photo, so the stats and the photo can be seen together */}
      <p className="mx-auto w-full max-w-[1500px] px-4 py-4 text-center text-[14px] font-bold text-slate-700 sm:px-6 lg:px-20">{DATA_LINE}</p>
    </section>
  );
}
