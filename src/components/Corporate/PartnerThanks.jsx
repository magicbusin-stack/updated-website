import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/* The thank-you banner on the partner pages: a bold red card with a big yellow "Thank You", a heart,
   scattered confetti shapes and a few of that group's real logos. It is still (no blinking). */
const CONFETTI = [
  { cls: "left-[6%] top-[14%] h-4 w-4 rounded-full bg-brand-yellow", d: 0 },
  { cls: "left-[16%] bottom-[18%] h-3 w-3 rotate-12 bg-white/70", d: 0.1 },
  { cls: "left-[28%] top-[8%] h-3 w-3 rotate-45 bg-brand-yellow/80", d: 0.2 },
  { cls: "right-[8%] top-[18%] h-5 w-5 rounded-full bg-white/30", d: 0.1 },
  { cls: "right-[18%] bottom-[14%] h-4 w-4 rotate-12 bg-brand-yellow", d: 0.3 },
  { cls: "right-[30%] top-[10%] h-3 w-3 rounded-full bg-white/70", d: 0.2 },
  { cls: "left-[4%] top-[55%] h-2.5 w-2.5 rotate-45 bg-white/60", d: 0.3 },
  { cls: "right-[4%] top-[58%] h-2.5 w-2.5 rounded-full bg-brand-yellow/80", d: 0.4 },
];

export default function PartnerThanks({ title = "Thank You", who, message, partners = [], className = "" }) {
  const logos = partners.filter((p) => p.logo).slice(0, 6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red via-[#C41A1F] to-[#7F0F13] p-8 text-center text-white shadow-2xl ring-1 ring-white/10 sm:p-12 md:p-16 ${className}`}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
      {CONFETTI.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + c.d, type: "spring", stiffness: 260, damping: 14 }}
          className={`pointer-events-none absolute ${c.cls}`}
        />
      ))}

      <div className="relative">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg sm:h-20 sm:w-20">
          <Heart className="h-8 w-8 fill-brand-red text-brand-red sm:h-10 sm:w-10" />
        </span>

        <p className="mt-6 whitespace-nowrap text-[2.6rem] font-black leading-none tracking-tight text-brand-yellow drop-shadow min-[400px]:text-6xl sm:text-7xl md:text-8xl">{title}</p>
        {who && <p className="mt-3 text-lg font-extrabold uppercase tracking-[0.2em] text-white sm:text-xl">{who}</p>}
        <div aria-hidden="true" className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-brand-yellow" />

        <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-white sm:text-2xl md:text-3xl md:leading-relaxed">{message}</p>

        {logos.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-7">
            {logos.map((p) => (
              <div key={p.name} className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:h-28 sm:p-5 md:h-32 md:p-6">
                <img src={p.logo} alt={p.name} loading="lazy" decoding="async" className="max-h-full w-full object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
