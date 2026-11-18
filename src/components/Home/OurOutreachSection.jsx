import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OUTREACH_SLIDES, FONTS_HREF } from "./OutreachSlides";

/* "Our Outreach & Impact": replaces the old Outreach (Adolescent / Livelihood tabs) section.
   Four slides (Adolescents Outreach, Adolescents Impact, Livelihood Outreach, Livelihood Impact), one at a time:
   - it moves to the next slide by itself every 4 seconds (restarting the 4 seconds after any manual change);
   - the arrows sit on the left and right of the stats so a slide can be read again;
   - the stats and the whole photo (never cropped) share the screen as far as its height allows;
   - the numbers count up each time a slide appears. */
const AUTO_MS = 4000;

export default function OurOutreachSection() {
  const [i, setI] = useState(0);
  const touchX = useRef(0);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const [photoMax, setPhotoMax] = useState(null); // tallest the photo may be so stats + photo share the screen
  const total = OUTREACH_SLIDES.length;
  const go = (n) => setI((n + total) % total);
  const slide = OUTREACH_SLIDES[i];
  const { Content } = slide;

  // Auto-advance. Changing slide (by hand or automatically) restarts the 4 seconds.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => setI((p) => (p + 1) % total), AUTO_MS);
    return () => clearTimeout(t);
  }, [i, total]);

  // Work out how tall the photo can be: whatever is left of the screen below the header, title and stats.
  // The photo keeps its shape (never cropped); it is not made smaller than 300px, and on phones it is full width.
  useLayoutEffect(() => {
    const fit = () => {
      if (window.innerWidth < 768 || !statsRef.current || !titleRef.current) {
        setPhotoMax(null);
        return;
      }
      const header = document.querySelector("nav")?.offsetHeight || 113;
      const used = titleRef.current.offsetHeight + statsRef.current.offsetHeight + 24;
      setPhotoMax(Math.round(Math.max(300, Math.min(window.innerHeight - header - used, 520))));
    };
    fit();
    window.addEventListener("resize", fit);
    const ro = typeof ResizeObserver !== "undefined" && statsRef.current ? new ResizeObserver(fit) : null;
    if (ro) ro.observe(statsRef.current);
    return () => {
      window.removeEventListener("resize", fit);
      if (ro) ro.disconnect();
    };
  }, [i]);

  const arrow =
    "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-slate-700 shadow-sm transition hover:border-slate-500 hover:bg-white active:scale-95 md:h-11 md:w-11";

  return (
    <section
      className="flex flex-col overflow-hidden bg-white pt-5 md:min-h-[calc(100svh-var(--header-h,113px))] md:pt-6"
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
      {/* Fonts used by the designs (Inter, Montserrat, Open Sans, Outfit) */}
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header ref={titleRef} className="px-4 text-center">
        <h2
          id="our-outreach-heading"
          className="font-['Montserrat',system-ui,sans-serif] text-2xl font-extrabold tracking-tight text-[#0f1d38] sm:text-3xl md:text-[38px]"
        >
          Our Outreach &amp; Impact
        </h2>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={slide.key}
          data-slide={slide.key}
          role="group"
          aria-roledescription="slide"
          aria-label={`${slide.label}: ${i + 1} of ${total}`}
          className="flex flex-1 flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Stats, with the arrows on its left and right */}
          <div ref={statsRef} className="relative mx-auto w-full max-w-[1500px] px-11 py-4 sm:px-14 md:py-5 lg:px-20">
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className={`${arrow} left-1 md:left-4`}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <Content />
            <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className={`${arrow} right-1 md:right-4`}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Photo: shown whole (never cropped). It takes the height that is left on the screen and keeps its shape;
              the soft fade on its left and right edges lets it sit on the white page when it is narrower than the screen. */}
          <div className="flex justify-center overflow-hidden">
            <img
              src={slide.photo}
              alt={slide.alt}
              className="block h-auto w-full max-w-full md:w-auto"
              style={{
                maxHeight: photoMax || undefined,
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
                maskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
              }}
            />
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
