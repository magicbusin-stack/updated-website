// OutreachWithDonut.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";
import MovingDotCard from "../ui/moving-dot-card";
import MediaThumb from "../ui/media-thumb";
/**
 * Four-Quadrant Impact Chart (Exact Image Match)
 */
export function ImpactChart({ size = 520, segments, centerImage }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const center = size / 2;
  const strokeWidth = size * 0.22;
  const radius = (size - strokeWidth) / 2 - 10;
  const textRadius = radius + strokeWidth / 2 + 18;

  const polarToCartesian = (cx, cy, r, deg) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  // Updated helper with clockwise support
  const getArcPath = (start, end, r, clockwise = false) => {
    const s = polarToCartesian(center, center, r, clockwise ? start : end);
    const e = polarToCartesian(center, center, r, clockwise ? end : start);
    const large = Math.abs(end - start) <= 180 ? 0 : 1;
    const sweep = clockwise ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} ${sweep} ${e.x} ${e.y}`;
  };

  const quadrants = [
    { start: -88, end: -2, id: "tr" },
    { start: 2, end: 88, id: "br" },
    { start: 92, end: 178, id: "bl" },
    { start: 182, end: 268, id: "tl" },
  ];

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-full mx-auto"
      style={{ maxWidth: size, aspectRatio: "1 / 1" }}
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
        <defs>
          {quadrants.map((q) => (
            <path
              key={q.id}
              id={`path-${q.id}`}
              // FIX: Only Top-Left (tl) and Top-Right (tr) should be Clockwise (true).
              // Bottom-Right (br) and Bottom-Left (bl) must be Counter-Clockwise (false) to be readable.
              d={getArcPath(
                q.start - 6, 
                q.end + 6, 
                textRadius, 
                q.id === "br" || q.id === "tr"
              )}
            />
          ))}
        </defs>

        {quadrants.map((q, i) => {
          const d = segments[i];
          const mid = (q.start + q.end) / 2;
          const pos = polarToCartesian(center, center, radius, mid);

          return (
            <g key={q.id}>
              <motion.path
                d={getArcPath(q.start, q.end, radius, false)}
                fill="none"
                stroke="#FFCC04"
                strokeWidth={strokeWidth}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.1 }}
              />

              <text className="text-[14px] font-bold fill-slate-800 uppercase">
                <textPath href={`#path-${q.id}`} startOffset="50%" textAnchor="middle">
                  {d.label}
                </textPath>
              </text>

              <motion.text
                x={pos.x} y={pos.y + 6}
                textAnchor="middle"
                className="fill-red-600 font-black"
                style={{ fontSize: 28 }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                {d.value}%<tspan dx="3" dy="-3">↑</tspan>
              </motion.text>
            </g>
          );
        })}
      </svg>

      <div className="absolute rounded-full overflow-hidden border-[6px] border-white shadow-xl"
        style={{ width: "48%", height: "48%" }}>
        <MediaThumb src={centerImage} className="w-full h-full object-cover" alt="center" />
      </div>
    </div>
  );
}

/* ----- shared: angles & layout helpers ----- */
const TAU = Math.PI * 2;
// rotate whole chart (screen coords). -90 means start at top (12 o'clock)
const START_ANGLE_DEG = -90;
const deg2rad = (d) => (d * Math.PI) / 180;

function computeLayout(segments) {
  const total = Math.max(1, segments.reduce((s, x) => s + x.value, 0));
  let acc = 0; // radians in data space, 0 at 3 o'clock
  const rot = deg2rad(START_ANGLE_DEG); // screen rotation

  const enriched = segments.map((seg) => {
    const frac = seg.value / total;
    const arc = frac * TAU;
    const mid = acc + arc / 2; // data coords
    const screenMid = mid + rot; // after rotation

    // side by x of the unit circle after rotation: left if cos < 0
    const side = Math.cos(screenMid) < 0 ? "left" : "right";
    // y for vertical sort (smaller y is higher on screen)
    const y = Math.sin(screenMid);

    acc += arc;
    return { ...seg, side, y, midAngle: screenMid };
  });

  // split & sort top→bottom per side
  const left = enriched
    .filter((s) => s.side === "left")
    .sort((a, b) => a.y - b.y);
  const right = enriched
    .filter((s) => s.side === "right")
    .sort((a, b) => a.y - b.y);

  return { left, right, enriched };
}

/* ---------- DonutChart (re-animates on each re-entry) ---------- */
function DonutChart({
  size = 420,
  thickness = 42,
  segments = [],
  centerImage = "/ngo-videos/mbif-homepage-video.mp4",
  caption = "",
  gap = 6,
}) {
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  const total = Math.max(1, segments.reduce((s, x) => s + x.value, 0));
  const rot = START_ANGLE_DEG; // keep in sync with computeLayout

  let accAngle = 0;
  const arcs = segments.map((seg) => {
    const frac = seg.value / total;
    const angle = frac * TAU;
    const arcLen = circumference * frac;
    const gapLen = Math.min(arcLen * 0.06, gap);
    const visibleLen = Math.max(0.0001, arcLen - gapLen);
    const dashArray = `${visibleLen} ${Math.max(0.0001, circumference - visibleLen)}`;
    const offsetPx = circumference * (accAngle / TAU);
    const dashOffset = circumference - offsetPx;
    accAngle += angle;
    return { ...seg, dashArray, dashOffset };
  });

  const wrapRef = React.useRef(null);
  const inView = useInView(wrapRef, { once: false, amount: 0.45 });

  // bump "run" each time we re-enter viewport to remount the <g> and replay strokes
  const [run, setRun] = React.useState(0);
  React.useEffect(() => {
    if (inView) setRun((n) => n + 1);
  }, [inView]);

  return (
    <motion.div
      ref={wrapRef}
      className="relative z-20"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: inView ? 1 : 0.9, scale: inView ? 1 : 0.96 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg className="bg-white rounded-full" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g key={run} transform={`translate(${size / 2}, ${size / 2}) rotate(${rot})`}>
          <circle
            r={r}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="rgba(0,0,0,.06)"
            strokeWidth={thickness}
          />
          {arcs.map(({ color, dashArray, dashOffset }, idx) => (
            <motion.circle
              key={idx}
              r={r}
              cx="0"
              cy="0"
              fill="transparent"
              stroke={color}
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={dashArray}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ duration: 2.2 + idx * 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </g>
      </svg>

      {/* center image */}
      <div
        className="absolute rounded-full overflow-hidden ring-8 ring-white shadow-xl"
        style={{
          width: size * 0.46,
          height: size * 0.46,
          left: `calc(50% - ${size * 0.46 / 2}px)`,
          top: `calc(50% - ${size * 0.46 / 2}px)`,
        }}
      >
        <MediaThumb src={centerImage} className="w-full h-full object-cover" />
      </div>

      {caption && (
        <div className="absolute -bottom-8 w-full text-center text-xs text-ink/60">
          {caption}
        </div>
      )}
    </motion.div>
  );
}

/* ---------- StatTile (re-animates on each re-entry) ---------- */
function StatTile({ value, suffix = "", label, delay = 0, accent }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.35 });

  React.useEffect(() => {
    let raf;
    if (isInView) {
      const dur = 900;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(value * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setVal(0); // restart
      raf = requestAnimationFrame(tick);
    } else {
      // reset when out of view so it can replay
      setVal(0);
    }
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.32, delay }}
    >
      <MovingDotCard accent={accent}>
        <div
          className="text-2xl md:text-3xl font-extrabold mb-1"
          style={{
            background: `linear-gradient(90deg, ${accent}, #ffffff)`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {val.toLocaleString("en-IN")}
          {suffix}
        </div>
        <div className="mt-1 text-xs md:text-sm text-white/70 font-medium">
          {label}
        </div>
      </MovingDotCard>
    </motion.div>
  );
}

/* ---------- OutreachWithDonut ---------- */
export default function OutreachWithDonut() {
  const [tab, setTab] = useState("livelihood");

  const TABS = useMemo(
    () => ({
      adolescent: {
        title: "Adolescent Programme Outreach",
        stats: [
          { label: "Adolescents Outreach", value: 3500000, suffix: "+" },
          { label: "Schools", value: 30069 },
          { label: "Community Learning Centres", value: 343 },
          { label: "Teachers Trained", value: 37389 },
          { label: "Government Partnerships", value: 11 },
          { label: "States & UT", value: 22 },
          { label: "Aspirational Blocks", value: 141 },
          { label: "% Girl Participants", value: 52, suffix: "%" },
        ],
        donut: {
          img: "/ngo-videos/mbif-homepage-video.mp4",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "School Regularity • 27%", value: 27, color: "#21BDEA" }, // blue
            { label: "Higher Studies • 34%", value: 34, color: "#B3CC35" },   // green
            { label: "Resilience • 45%", value: 45, color: "#FFCC04" },       // yellow
            { label: "Self Efficacy • 20%", value: 20, color: "#E12228" },    // red
          ],
        },
      },
      livelihood: {
        title: "Livelihood Programme Outreach",
        stats: [
          { label: "Outreach", value: 214493 },
          { label: "Youth Placed", value: 158319 },
          { label: "Colleges", value: 1130 },
          { label: "Livelihood Centres", value: 133 },
          { label: "% Girls Participants", value: 60, suffix: "%" },
          { label: "States", value: 17 },
        ],
        donut: {
          img: "/ngo-videos/mbif-homepage-video.mp4",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "Placement • 74%", value: 74, color: "#21BDEA" },   // blue
            { label: "Retention • 65%", value: 65, color: "#FF8A65" },   // orange
            { label: "Graduates • 99%", value: 99, color: "#B3CC35" },   // green
            { label: "Girls Participation • 60%", value: 60, color: "#FFCC04" }, // yellow
          ],
        },
      },
    }),
    []
  );

  const active = TABS[tab];

  // compute placement for label columns based on segment mid-angles
  const { left: leftHighlights, right: rightHighlights } = useMemo(
    () => computeLayout(active.donut.segments),
    [active.donut.segments]
  );

  const accents = ["#4F5BFE", "#FF7A59", "#21BDEA", "#B3CC35", "#FFCC04", "#E12228", "#8B5CF6", "#06B6D4"];

  return (
    <section className="py-16 md:py-20 relative">
      <motion.div
        className="text-center mb-8"
        variants={staggerStd}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
          Our <span className="text-brand-red">Outreach</span>
        </motion.h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {["adolescent", "livelihood"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === t ? "bg-ink text-white shadow" : "bg-white text-ink border border-border hover:bg-gray-50"
              }`}
            >
              {t === "adolescent" ? "Adolescent Programme" : "Livelihood Programme"}
            </button>
          ))}
        </div>

        {/* Stats grid */}
        <div
          className={`mt-4 grid gap-4
            grid-cols-2
            sm:grid-cols-3
            ${
              tab === "livelihood"
                ? "lg:grid-cols-3"
                : "lg:grid-cols-4"
            }
          `}
        >
          {active.stats.map((s, i) => (
            <StatTile
              key={s.label}
              value={s.value}
              suffix={s.suffix || ""}
              label={s.label}
              delay={i * 0.03}
              accent={accents[i % accents.length]}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 flex justify-center"
        >
          <button
            className="px-8 py-3 text-sm md:text-base font-semibold rounded-full text-white bg-brand-red shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View Our Outreach
          </button>
        </motion.div>

        <motion.div
          className="text-center my-8"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
            Our <span className="text-brand-red">Impact</span>
          </motion.h2>
        </motion.div>

        {/* Donut & labels aligned by side and vertical position */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="mt-12"
          >
            <div className="relative isolate gap-8 items-center max-w-6xl mx-auto">
              {/* LEFT column (segments whose midpoint lies on left half) */}
              {/* <div className="space-y-6 relative z-0">
                {leftHighlights.map((seg, i) => (
                  <motion.div
                    key={`${seg.label}-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.18 + i * 0.08 }}
                    className="bg-white rounded-xl p-5 border border-border shadow-md hover:shadow-lg transition relative overflow-hidden"
                  >
                    <div
                      className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-t border-l border-border rounded-tr-md transform rotate-45 shadow-sm"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ background: seg.color }} />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div className="text-3xl font-extrabold" style={{ color: seg.color }}>
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div> */}

              {/* center donut (re-animates when in view) */}
              <div className="flex items-center justify-center">
                {/* <DonutChart
                  size={500}
                  thickness={48}
                  centerImage={active.donut.img}
                  segments={active.donut.segments}
                  caption={active.donut.caption}
                  gap={6}
                /> */}
                <ImpactChart
                  size={550}
                  centerImage={active.donut.img}
                  segments={active.donut.segments}
                />
              </div>

              {/* RIGHT column (segments on right half) */}
              {/* <div className="space-y-6 relative z-0">
                {rightHighlights.map((seg, i) => (
                  <motion.div
                    key={`${seg.label}-${i}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.18 + i * 0.08 }}
                    className="bg-white rounded-xl p-5 pl-14 border border-border shadow-md hover:shadow-lg transition relative overflow-hidden"
                  >
                    <div
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-t border-l border-border rounded-tr-md transform -rotate-45 shadow-sm"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ background: seg.color }} />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div className="text-3xl font-extrabold" style={{ color: seg.color }}>
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}