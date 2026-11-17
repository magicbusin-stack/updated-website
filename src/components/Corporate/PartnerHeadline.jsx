import React from "react";
import { motion } from "framer-motion";

/* Shared headline for every partner page (Corporate, Foundation, Government, Employment, Knowledge):
   small pulsing tag, big bold title whose last word gets a hand-drawn yellow underline that sweeps in,
   and a short line underneath. The size scales smoothly from phones to wide screens. */
export default function PartnerHeadline({ chip, line1, line2, sub, align = "left" }) {
  const center = align === "center";
  // Size the title from the width of its own column so the first line always fits (no awkward wrapping),
  // between 36px on small phones and 72px on wide screens.
  const size = `clamp(2.25rem, ${(165 / Math.max(line1.length, 8)).toFixed(1)}cqw, 4.5rem)`;
  return (
    <div className={`@container ${center ? "mx-auto text-center" : ""}`}>
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-brand-red/5 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-red">
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" />
        {chip}
      </span>

      <h2 style={{ fontSize: size }} className="font-black leading-[1.08] tracking-tight text-[#0F172A]">
        {line1}
        <br />
        <span className="relative inline-block pb-3">
          {line2}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-2 w-full origin-left rounded-full bg-brand-yellow sm:h-2.5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
      </h2>

      {sub && <p className={`mt-6 text-lg font-medium leading-relaxed text-slate-600 sm:text-xl ${center ? "mx-auto max-w-2xl" : "max-w-md"}`}>{sub}</p>}
    </div>
  );
}
