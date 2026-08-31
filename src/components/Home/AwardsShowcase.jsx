import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, fadeUpSm, scaleReveal, staggerStd, VIEWPORT_ONCE, EASE_EXPO } from "../../hooks/useScrollAnimations";

const AWARDS = [
  {
    year: "2023",
    title: "Mother Teresa Memorial Award for Social Justice 2023",
    icon: "🏆",
    badge: "presented by Harmony Foundation",
    accent: "from-yellow-400 to-orange-500",
    img: "/ngo-images/award1.jpg",
  },
  {
    year: "2024",
    title: "Football for Social Impact award",
    icon: "🥇",
    badge: "at Global Soccer Conclave 3.0",
    accent: "from-blue-400 to-indigo-500",
    img: "/ngo-images/award2.jpg",
  },
  {
    year: "2023",
    title: "Best Livelihood Approach Award",
    icon: "🌟",
    badge: "at ET Now’s World CSR Day Congress and Awards.",
    accent: "from-green-400 to-teal-500",
    img: "/ngo-images/award3.jpg",
  },
  {
    year: "2022",
    title: "Excellent NGO of the Year",
    icon: "🏅",
    badge: "awarded by the CMAI Association of India.",
    accent: "from-red-400 to-pink-500",
    img: "/ngo-images/award4.png",
  },
];

function AwardTitleFX({ text }) {
  return (
    <div className="relative text-center select-none">
      <h3
        className="font-black tracking-tight leading-tight"
        style={{
          fontSize: "clamp(25px, 5vw, 45px)",
          background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "none",
          filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.3)) drop-shadow(0px 0px 30px rgba(255,255,255,0.5))",
        }}
      >
        {text}
      </h3>
    </div>
  );
}

export default function AwardsShowcase() {
  const [i, setI] = useState(0);
  const a = AWARDS[i];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — staggered scroll reveal */}
        <motion.div
          className="flex items-start md:items-center justify-between gap-6 mb-12"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <div>
            <motion.p variants={fadeUpSm} className="text-sm font-semibold tracking-wider text-red-600 uppercase mb-2">
              Recognition
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900">
              Awards &amp; Achievements
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUpSm}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-all hover:shadow-lg"
          >
            All Awards
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Main Grid — scale reveal on entry */}
        <motion.div
          className="grid lg:grid-cols-16 gap-6 items-stretch"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {/* Left stats card */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[420px] rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-7xl font-black text-gray-900">8</span>
                  <span className="text-3xl font-bold text-orange-500">+</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-amber-500 text-2xl">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-base mt-3 text-gray-700 font-medium">
                  Global awards & certifications
                </p>
              </div>

              <div className="space-y-3 mt-8">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Recent Honors</p>
                <div className="flex items-center -space-x-2">
                  {AWARDS.slice(0, 4).map((w, idx) => (
                    <div
                      key={idx}
                      className={`w-14 h-14 rounded-full grid place-items-center text-2xl ring-4 ring-amber-50 bg-gradient-to-br ${w.accent} shadow-md hover:scale-110 transition-transform cursor-pointer`}
                      title={w.title}
                    >
                      <span>{w.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right awards carousel */}
          <div className="lg:col-span-11">
            <div className="relative h-full min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Background image with overlay */}
                  <div className="relative h-full w-full">
                    <motion.img
                      src={a.img}
                      alt={a.title}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top badge */}
                    <div className="flex justify-end">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                        <div className={`w-8 h-8 rounded-full grid place-items-center text-lg bg-gradient-to-br ${a.accent}`}>
                          {a.icon}
                        </div>
                        <span className="text-white font-semibold text-sm">{a.badge}</span>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div>
                      <AwardTitleFX text={a.title} />
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-white to-white/50 rounded-full" />
                        <span className="text-white/90 text-lg font-semibold">{a.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots and arrows */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {AWARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to award ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setI((p) => (p - 1 + AWARDS.length) % AWARDS.length)}
                  aria-label="Previous award"
                  className="h-10 w-10 grid place-items-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-md active:scale-95 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => setI((p) => (p + 1) % AWARDS.length)}
                  aria-label="Next award"
                  className="h-10 w-10 grid place-items-center rounded-full bg-red-600 text-white hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.2 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-8 py-3.5 font-semibold hover:bg-gray-800 transition-all hover:shadow-xl"
          >
            View All Awards &amp; Certifications
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}