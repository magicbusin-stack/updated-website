// OutreachWithDonut.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";
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
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
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
        style={{ width: size * 0.48, height: size * 0.48 }}>
        <img src={centerImage} className="w-full h-full object-cover" alt="center" />
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

/* ---------- useCountUp: animated number counting ---------- */
function useCountUp(target, isInView, duration = 900) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf;
    if (isInView) {
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setVal(0);
      raf = requestAnimationFrame(tick);
    } else {
      setVal(0);
    }
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);
  return val;
}

/* ---------- Bar accent colors ---------- */
const BAR_ACCENTS = [
  "#E12228", "#21BDEA", "#D4A600", "#7CB320",
  "#7C3AED", "#E05A00", "#0891B2", "#BE185D",
];

/* ---------- SkylineChart ---------- */
function SkylineChart({ stats }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [activeIdx, setActiveIdx] = React.useState(-1);

  const logValues = stats.map((s) => Math.log10(Math.max(1, s.value)));
  const maxLog = Math.max(...logValues);

  const chartHeight = 280;
  const minBarHeight = 44;

  return (
    <div ref={ref} className="px-6 md:px-10 pt-10 pb-8">
      {/* Floating tooltip */}
      <AnimatePresence>
        {activeIdx >= 0 && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="flex justify-center mb-4"
          >
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl shadow-lg"
              style={{ backgroundColor: BAR_ACCENTS[activeIdx % BAR_ACCENTS.length] }}
            >
              <span className="text-white font-black text-xl md:text-2xl tabular-nums">
                {stats[activeIdx].value.toLocaleString("en-IN")}
                {stats[activeIdx].suffix && (
                  <span className="text-white/60 text-sm ml-0.5">{stats[activeIdx].suffix}</span>
                )}
              </span>
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                {stats[activeIdx].label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bars row */}
      <div
        className="flex items-end gap-2 sm:gap-3 md:gap-5 lg:gap-6"
        style={{ height: chartHeight + 60 }}
        onMouseLeave={() => setActiveIdx(-1)}
      >
        {stats.map((s, i) => {
          const h = minBarHeight + ((logValues[i] / maxLog) * (chartHeight - minBarHeight));
          return (
            <SkylinePillar
              key={s.label}
              value={s.value}
              suffix={s.suffix || ""}
              label={s.label}
              height={h}
              color={BAR_ACCENTS[i % BAR_ACCENTS.length]}
              index={i}
              isInView={isInView}
              isActive={activeIdx === i}
              isDimmed={activeIdx >= 0 && activeIdx !== i}
              onHover={() => setActiveIdx(i)}
            />
          );
        })}
      </div>

      {/* Baseline */}
      <div className="h-[1.5px] bg-ink/10" />
    </div>
  );
}

/* ---------- SkylinePillar ---------- */
function SkylinePillar({ value, suffix, label, height, color, index, isInView, isActive, isDimmed, onHover }) {
  const count = useCountUp(value, isInView, 1000);

  return (
    <div
      className="flex-1 min-w-0 flex flex-col items-center cursor-pointer"
      onMouseEnter={onHover}
    >
      {/* Number */}
      <motion.div
        className="mb-3 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: isDimmed ? 0.3 : 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.3, delay: isInView ? 0 : 0.5 + index * 0.07 }}
      >
        <span className="text-ink font-extrabold text-sm sm:text-base md:text-lg leading-none tracking-tight tabular-nums">
          {count.toLocaleString("en-IN")}
        </span>
        {suffix && (
          <span className="text-ink/35 text-[10px] md:text-xs ml-0.5 font-bold">{suffix}</span>
        )}
      </motion.div>

      {/* Bar — rectangular with rounded top */}
      <div className="w-full relative" style={{ height }}>
        <motion.div
          className="absolute bottom-0 left-[12%] right-[12%] rounded-t-lg transition-all duration-300"
          style={{
            backgroundColor: color,
            opacity: isDimmed ? 0.25 : 1,
            transform: isActive ? "scaleX(1.15)" : "scaleX(1)",
            boxShadow: isActive ? `0 -4px 20px ${color}40` : "none",
          }}
          initial={{ height: 0 }}
          animate={
            isInView
              ? { height: "100%" }
              : { height: 0 }
          }
          transition={{
            duration: 0.9,
            delay: 0.1 + index * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      {/* Tick mark */}
      <div
        className="w-[1.5px] h-2 mt-0 transition-colors duration-200"
        style={{ backgroundColor: isActive ? color : "rgba(26,26,26,0.12)" }}
      />

      {/* Label */}
      <motion.p
        className="mt-1.5 text-center text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] leading-tight transition-colors duration-200"
        style={{ color: isActive ? color : isDimmed ? "rgba(26,26,26,0.25)" : "rgba(26,26,26,0.45)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.7 + index * 0.07 }}
      >
        {label}
      </motion.p>
    </div>
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
          img: "/ngo-images/girl.jpeg",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "School Regularity • 27%", value: 27, color: "#21BDEA" },
            { label: "Higher Studies • 34%", value: 34, color: "#B3CC35" },
            { label: "Resilience • 45%", value: 45, color: "#FFCC04" },
            { label: "Self Efficacy • 20%", value: 20, color: "#E12228" },
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
          img: "/ngo-images/girl.jpeg",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "Placement • 74%", value: 74, color: "#21BDEA" },
            { label: "Retention • 65%", value: 65, color: "#FF8A65" },
            { label: "Graduates • 99%", value: 99, color: "#B3CC35" },
            { label: "Girls Participation • 60%", value: 60, color: "#FFCC04" },
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
        <div className="flex justify-center gap-3 mb-10">
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

        {/* ── Skyline Bar Chart ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`stats-${tab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SkylineChart stats={active.stats} />
          </motion.div>
        </AnimatePresence>

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