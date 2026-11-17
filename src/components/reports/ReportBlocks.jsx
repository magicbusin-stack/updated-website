import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Clock, Download, Eye, FileText, HardDrive, Sparkles } from "lucide-react";

/* Shared building blocks for the report pages (Gender Journey, FLFPR ...), same look as the Impact Reports page. */

/* Counts up from 0 when it scrolls into view (a still number for visitors who prefer reduced motion). */
export function CountUp({ prefix = "", to, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(to);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const dur = 1800;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const RING = {
  yellow: { ring: "from-brand-yellow to-amber-400", glow: "bg-brand-yellow/25" },
  green: { ring: "from-emerald-400 to-brand-green", glow: "bg-brand-green/25" },
  red: { ring: "from-rose-400 to-brand-red", glow: "bg-brand-red/25" },
  blue: { ring: "from-sky-400 to-brand-blue", glow: "bg-brand-blue/25" },
};

/* stats: [{ prefix, to, decimals, suffix, label, Icon, color: "yellow" | "green" | "red" | "blue" }] */
export function StatsBand({ eyebrow = "Our impact at a glance", stats }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#232323] to-[#1A1A1A] py-16 md:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-yellow">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            {eyebrow}
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => {
            const c = RING[s.color] || RING.yellow;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/50 hover:bg-white/10 sm:p-8"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${c.glow}`} />
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14 ${c.ring}`}>
                  <s.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <div className="relative mt-5 bg-gradient-to-b from-white to-brand-yellow bg-clip-text text-4xl font-black leading-none tracking-tight text-transparent sm:text-5xl xl:text-6xl">
                  <CountUp prefix={s.prefix} to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <p className="relative mt-3 text-base font-semibold uppercase tracking-wider text-white/80 sm:text-lg">{s.label}</p>
                <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${c.ring}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* A highlight that starts with a figure ("95% skill improvement") shows the figure big and the words under it;
   one without a figure gets a tick instead. */
function HighlightTile({ text }) {
  const m = text.match(/^(\S*\d\S*)\s+(.+)$/);
  return (
    <li className="flex items-center gap-3 rounded-xl border border-brand-yellow/50 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-col sm:items-start sm:gap-1">
      {m ? (
        <>
          <span className="text-3xl font-black leading-none text-brand-red sm:text-4xl">{m[1]}</span>
          <span className="text-lg font-semibold leading-snug text-ink">{m[2]}</span>
        </>
      ) : (
        <>
          <CheckCircle className="h-8 w-8 shrink-0 text-brand-green sm:h-9 sm:w-9" />
          <span className="text-lg font-semibold leading-snug text-ink">{text}</span>
        </>
      )}
    </li>
  );
}

/* The yellow "Key highlights" panel. columns: tailwind grid classes for the tiles. */
export function HighlightsBox({ title = "Key highlights", items, columns = "sm:grid-cols-3" }) {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-yellow/60 bg-gradient-to-br from-brand-yellow/25 via-brand-yellow/10 to-white p-5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-yellow/40 blur-2xl" />
      <h4 className="relative flex items-center gap-2 text-lg font-extrabold uppercase tracking-wide text-brand-red">
        <Sparkles className="h-5 w-5" />
        {title}
      </h4>
      <ul className={`relative mt-4 grid grid-cols-1 gap-3 ${columns}`}>
        {items.map((h) => (
          <HighlightTile key={h} text={h} />
        ))}
      </ul>
    </div>
  );
}

/* Pages / size / format tiles */
export function ReportFacts({ pages, fileSize }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {[
        { v: pages, l: "Pages", Icon: FileText },
        { v: fileSize, l: "Size", Icon: HardDrive },
        { v: "PDF", l: "Format", Icon: Download },
      ].map((f) => (
        <div key={f.l} className="rounded-2xl border border-slate-200 p-3 text-center">
          <f.Icon className="mx-auto h-5 w-5 text-brand-red" />
          <div className="mt-1 text-lg font-extrabold text-ink">{f.v}</div>
          <div className="text-base text-slate-500">{f.l}</div>
        </div>
      ))}
    </div>
  );
}

/* Download + View buttons. While a report has no real PDF link (downloadUrl "#") it shows "PDF coming soon". */
export function ReportActions({ url }) {
  const ready = url && url !== "#";
  return (
    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
      {ready ? (
        <>
          <a
            href={url}
            download
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-lg font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#c41b20] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30 active:translate-y-0 active:scale-[0.98]"
          >
            <Download className="h-5 w-5" />
            Download report
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-7 py-4 text-lg font-bold text-ink transition hover:border-brand-red hover:text-brand-red active:scale-[0.98]"
          >
            <Eye className="h-5 w-5" />
            View
          </a>
        </>
      ) : (
        <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-dashed border-slate-300 bg-slate-50 px-7 py-4 text-lg font-bold text-slate-500">
          <Clock className="h-5 w-5" />
          PDF coming soon
        </span>
      )}
    </div>
  );
}
