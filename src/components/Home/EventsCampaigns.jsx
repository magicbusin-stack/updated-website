import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE, EASE_EXPO } from "../../hooks/useScrollAnimations";

/* Single sticky/stacked card */
function UpdateCard({ index, total, scrollYProgress, item }) {
  const targetScale = 1 - (total - index) * 0.05;
  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [1, targetScale]
  );

  return (
    <motion.div
      style={{
        scale,
        top: `calc(${index * 28}px + 8rem)`,
      }}
      className="sticky mb-10"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
        <div className="relative h-[400px] md:h-[460px]">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm">
                {item.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-6">
              {item.description}
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink font-bold rounded-full hover:bg-gray-100 transition-colors w-fit">
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LatestUpdates() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const updates = [
    {
      category: "Events",
      title: "Annual Fundraiser Gala 2025",
      description:
        "An evening celebrating youth empowerment and innovation. Together, we’re building brighter futures.",
      image: "/ngo-images/4.JPG",
      gradient: "from-brand-red/70 via-brand-magenta/60 to-brand-yellow/50",
    },
    {
      category: "Campaigns",
      title: "Digital Skills Campaign",
      description:
        "Help train 5,000 youth in digital skills this quarter with mentor sessions and hands-on labs.",
      image: "/ngo-images/5.jpeg",
      gradient: "from-brand-blue/70 to-brand-green/60",
    },
    {
      category: "Programs",
      title: "Mentor-A-Youth Program",
      description:
        "Share your expertise and guide the next generation of leaders through structured mentorship.",
      image: "/ngo-images/6.jpeg",
      gradient: "from-orange-500/70 to-brand-red/70",
    },
    {
      category: "Updates",
      title: "FutureX Tech Summit",
      description:
        "Spotlighting AI innovation in the NGO sector with panels, demos, and workshops.",
      image: "/ngo-images/3.JPG",
      gradient: "from-fuchsia-500/70 to-purple-600/70",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Sticky header with scroll-reveal */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerStd}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-ink mb-4">
              Latest Updates
            </motion.h2>
            <motion.div
              variants={fadeUpSm}
              className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-green"
            />
          </motion.div>
        </div>
      </div>

      {/* Stacked / overlapping cards */}
      <div className="relative px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          {updates.map((item, i) => (
            <UpdateCard
              key={i}
              index={i}
              total={updates.length}
              item={item}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
