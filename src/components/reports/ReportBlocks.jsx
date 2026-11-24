import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Download, Eye, FileText } from "lucide-react";
import usePhone from "../../hooks/usePhone";

/* Shared building blocks for ALL the downloadable-report pages (Annual Reports, Impact Reports, Gender Journey, FLFPR):
   the same stats band and the same report card everywhere, so the pages never drift apart. */

/* Counts up from 0 when it scrolls into view (a still number for visitors who prefer reduced motion). */
/* group: write big numbers the Indian way, 6,05,143 */
export function CountUp({ prefix = "", to, decimals = 0, suffix = "", group = false }) {
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
      {group ? val.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : val.toFixed(decimals)}
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
/* title (optional): a heading shown under the small tag.  cols: 4 (default) or 3 numbers across on a wide screen. */
/* eyebrow: the small tag above the title; pass null to leave it out.
   slider: on a phone, show one number at a time and move to the next every `slideSeconds` seconds (dots and swipe work too),
           instead of one long column of cards. */
function StatCard({ s, i, compact, longLabels, countKey, still }) {
  const c = RING[s.color] || RING.yellow;
  return (
    <motion.div
      initial={still ? false : { opacity: 0, y: 30 }}
      whileInView={still ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={still ? undefined : { y: -8 }}
      className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/50 hover:bg-white/10 ${compact ? "sm:p-5" : "sm:p-8"}`}
    >
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${c.glow}`} />
      <span className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${compact ? "h-10 w-10" : "h-12 w-12 sm:h-14 sm:w-14"} ${c.ring}`}>
        <s.Icon className={compact ? "h-5 w-5" : "h-6 w-6 sm:h-7 sm:w-7"} />
      </span>
      <div className={`relative bg-gradient-to-b from-white to-brand-yellow bg-clip-text font-black leading-none tracking-tight text-transparent ${compact ? "mt-3 text-3xl sm:text-4xl" : "mt-5 text-4xl sm:text-5xl xl:text-6xl"}`}>
        <CountUp key={countKey} prefix={s.prefix} to={s.to} decimals={s.decimals} suffix={s.suffix} group={s.group} />
      </div>
      <p className={`relative ${compact ? "mt-2" : "mt-3"} font-semibold text-white/85 ${longLabels ? "text-base leading-snug sm:text-lg" : "text-base uppercase tracking-wider sm:text-lg"}`}>{s.label}</p>
      <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${c.ring}`} />
    </motion.div>
  );
}

export function StatsBand({ eyebrow = "Our impact at a glance", title, subtitle, stats, cols = 4, compact = false, slider = false, slideSeconds = 4 }) {
  /* short labels are shown in capitals; if any label is a full sentence they all switch to normal sentence case, so the row stays even */
  const longLabels = stats.some((st) => st.label.length > 45);
  const phone = usePhone();
  const sliding = slider && phone;
  const [active, setActive] = useState(0);
  const start = useRef(null);
  const count = stats.length;
  const go = (n) => setActive((n + count) % count);

  useEffect(() => {
    if (!sliding) return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), slideSeconds * 1000);
    return () => clearTimeout(t); /* any change of slide (also by hand) starts the countdown again */
  }, [sliding, active, count, slideSeconds]);

  const swipe = {
    style: { touchAction: "pan-y" },
    onPointerDown: (e) => {
      start.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e) => {
      if (!start.current) return;
      const dx = e.clientX - start.current.x;
      const dy = e.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
    },
  };

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#232323] to-[#1A1A1A] ${compact ? "py-12 md:py-16" : "py-16 md:py-24"}`}>
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`mx-auto max-w-3xl text-center ${compact ? "mb-8" : "mb-12"}`}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-yellow">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              {eyebrow}
            </span>
          )}
          {title && <h2 className={`${eyebrow ? "mt-5" : ""} font-extrabold leading-tight text-white ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>{title}</h2>}
          {subtitle && <p className="mt-3 text-base text-white/75">{subtitle}</p>}
        </motion.div>

        {sliding ? (
          <div>
            <div className="grid" {...swipe} aria-live="off">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  inert={i !== active}
                  aria-hidden={i !== active}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${i === active ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
                >
                  {/* the number counts up each time its card comes round */}
                  <StatCard s={s} i={0} compact={compact} longLabels={longLabels} countKey={i === active ? `on-${active}` : "off"} still />
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {stats.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all ${i === active ? "w-10 bg-brand-yellow" : "w-4 bg-white/30 hover:bg-white/50"}`}
                  aria-label={`Show figure ${i + 1} of ${count}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={`grid gap-4 sm:gap-6 ${cols === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"}`}>
            {stats.map((s, i) => (
              <StatCard key={s.label} s={s} i={i} compact={compact} longLabels={longLabels} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------ the report card ------------------------------ */

/* A highlight that starts with a figure ("95% skill improvement") shows the figure in bold red. */
function Bullet({ text }) {
  const m = text.match(/^(\S*\d\S*)\s+(.+)$/);
  return (
    <li className="flex items-start gap-2 text-sm leading-snug text-slate-600">
      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
      <span>
        {m ? (
          <>
            <strong className="font-bold text-brand-red">{m[1]}</strong> {m[2]}
          </>
        ) : (
          text
        )}
      </span>
    </li>
  );
}

const MAX_HIGHLIGHTS = 4;

/* The one card used on every report page.
   report: { title, year, description, fileSize, pages, downloadUrl, featured, publishDate }
   kind: the small label under the year ("Annual Report", "Impact Assessment" ...)
   tag: optional small red line under the title (a theme or subtitle)
   highlights: list of short text lines
   While downloadUrl is "#" the card shows "PDF coming soon" instead of buttons that do nothing.
   To make it work: put the PDF in /public/reports/ and set downloadUrl to "/reports/<file>.pdf". */
export function ReportCard({ report, kind, tag, highlights = [], index = 0 }) {
  const ready = report.downloadUrl && report.downloadUrl !== "#";
  const date = new Date(report.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const shown = highlights.slice(0, MAX_HIGHLIGHTS);
  const more = highlights.length - shown.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-brand-red/30 hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
            <FileText className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{report.year}</span>
              {report.featured && <span className="rounded-md bg-brand-red px-2 py-1 text-xs font-medium text-white">Latest</span>}
            </div>
            <p className="text-xs text-slate-500">{kind}</p>
          </div>
        </div>

        {/* Title, tag, description */}
        <h3 className="mt-4 mb-2 line-clamp-2 text-lg font-bold text-ink transition-colors group-hover:text-brand-red">{report.title}</h3>
        {tag && (
          <div className="mb-3">
            <span className="inline-block rounded-md bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">{tag}</span>
          </div>
        )}
        <p className="mb-4 line-clamp-4 text-sm text-slate-600">{report.description}</p>

        {/* Key highlights */}
        {shown.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">Key highlights</h4>
            <ul className="space-y-1.5">
              {shown.map((h) => (
                <Bullet key={h} text={h} />
              ))}
            </ul>
            {more > 0 && <p className="mt-1.5 text-xs font-medium text-brand-red">+{more} more in the report</p>}
          </div>
        )}

        {/* Facts + footer stay at the bottom, so they line up across neighbouring cards */}
        <div className="mt-auto">
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { v: report.pages, l: "Pages" },
              { v: report.fileSize, l: "Size" },
              { v: "PDF", l: "Format" },
            ].map((f) => (
              <div key={f.l} className="rounded-lg bg-slate-50 p-2 text-center">
                <div className="text-sm font-bold text-ink">{f.v}</div>
                <div className="text-xs text-slate-500">{f.l}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <span className="text-xs text-slate-500">{date}</span>
            {ready ? (
              <div className="flex gap-2">
                <a
                  href={report.downloadUrl}
                  download
                  className="flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c41b20] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
                <a
                  href={report.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${report.title}`}
                  className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-50"
                >
                  <Eye className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-500">
                <Clock className="h-4 w-4" />
                PDF coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* The grid the cards sit in: 3 across on a wide screen, or 2 across when there are 2 or 4 cards (so no lonely card on its own row). */
export function ReportGrid({ count, children }) {
  const cols = count === 2 || count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${cols}`}>{children}</div>;
}
