import React, { useEffect, useState } from "react";

/* A number that counts up from 0 to its final value when it appears (a still number for visitors who prefer
   reduced motion). Pass the number exactly as it is written, e.g. "37,389", "52%", "₹15,920/Mo.", "2,450+", "3.5 LAKHS".
   Anything around the digits (₹, %, +, /Mo., LAKHS ...) is kept as it is. */
const DURATION = 1200;

function parse(value) {
  const m = String(value).match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  return {
    prefix: m[1],
    suffix: m[3],
    target: parseFloat(raw.replace(/,/g, "")),
    decimals: raw.includes(".") ? raw.split(".")[1].length : 0,
    grouped: raw.includes(","),
  };
}

export default function OutreachTicker({ value }) {
  const p = parse(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!p) return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(p.target);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setN(p.target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!p) return value;
  const shown = p.grouped ? n.toLocaleString("en-US", { minimumFractionDigits: p.decimals, maximumFractionDigits: p.decimals }) : n.toFixed(p.decimals);
  return (
    <span aria-label={value}>
      <span aria-hidden="true">
        {p.prefix}
        {shown}
        {p.suffix}
      </span>
    </span>
  );
}
