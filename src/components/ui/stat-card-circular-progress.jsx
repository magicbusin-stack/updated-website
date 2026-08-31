import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NumberTicker from "./number-ticker";

function CircularProgressStat({ icon: Icon, value, decimalPlaces = 0, suffix = "", label, color = "#FFCC04" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const size = 128;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#F1F5F9" strokeWidth={strokeWidth} />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-9 w-9" style={{ color }} />
        </div>
      </div>

      <div className="mt-4 text-3xl font-extrabold text-[#1A1A1A]">
        <NumberTicker value={value} decimalPlaces={decimalPlaces} />
        {suffix}
      </div>
      <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

export default function StatsCircularProgress({ stats }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((s, i) => (
        <CircularProgressStat key={i} {...s} />
      ))}
    </div>
  );
}
