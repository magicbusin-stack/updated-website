// src/components/Corporate/PartnersCarousel.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

// Featured partners list for the carousel rows
const ROW1_PARTNERS = [
  { name: "Accenture" },
  { name: "Adidas" },
  { name: "J.P. Morgan" },
  { name: "Deloitte" },
  { name: "BMW" },
  { name: "Bosch" },
  { name: "Oracle" },
  { name: "Barclays" },
  { name: "British Airways" },
  { name: "Cleartrip" },
];

const ROW2_PARTNERS = [
  { name: "Amdocs" },
  { name: "Etihad Airways" },
  { name: "ESPN" },
  { name: "Wipro" },
  { name: "Decathlon" },
  { name: "Cargill" },
  { name: "Western Digital" },
  { name: "Nikon" },
  { name: "Aditya Birla Capital" },
  { name: "Apollo Tyres" },
];

function MarqueeRow({ items, direction = "left", speed = 25 }) {
  const duplicatedItems = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div className="relative w-full overflow-hidden py-3 flex select-none">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-6 shrink-0 min-w-full items-center justify-around"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white border border-slate-200/50 hover:border-brand-yellow/80 hover:shadow-md transition-all duration-300 w-44 h-24 rounded-2xl flex items-center justify-center p-4 cursor-pointer hover:-translate-y-0.5"
          >
            <BrandLogo name={item.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnersCarousel() {
  return (
    <section className="py-16 bg-gray-50/40 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center md:text-left">
        <span className="inline-block bg-brand-yellow/20 text-amber-800 font-bold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">
          Strategic Allies
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-headline">
          Featured Partners in Focus
        </h3>
        <p className="text-slate-500 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
          Leading organizations collaborating with us to build pathways out of poverty and drive institutional change.
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={ROW1_PARTNERS} direction="left" speed={28} />
        <MarqueeRow items={ROW2_PARTNERS} direction="right" speed={32} />
      </div>
    </section>
  );
}
