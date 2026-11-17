import React from "react";

/* Shows every partner logo at once as slowly moving rows (alternating directions) instead of a long grid.
   - Hover (or touch-hold) on a row pauses it so a logo can be read.
   - Visitors who prefer reduced motion get a still, wrapped grid instead (see index.css).
   - A hidden list of names is kept for screen readers and search engines. */
export default function LogoMarquee({ partners, rows = 3, secondsPerLogo = 4.5 }) {
  // Deal partners out to the rows round-robin so every row has a mix.
  const lanes = Array.from({ length: rows }, () => []);
  partners.forEach((p, i) => lanes[i % rows].push(p));

  return (
    <div className="logo-marquee space-y-5 py-2">
      <ul className="sr-only">
        {partners.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>

      {lanes.map((items, laneIdx) => {
        // Repeat the lane until one copy is wide enough to fill very wide screens, then double it for the seamless loop.
        const reps = Math.max(1, Math.ceil(12 / items.length));
        const copy = Array.from({ length: reps }, () => items).flat();
        const duration = Math.round(copy.length * secondsPerLogo);
        return (
          <div key={laneIdx} className="marquee-row" aria-hidden="true">
            <div
              className={`marquee-track ${laneIdx % 2 === 0 ? "marquee-left" : "marquee-right"}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {[0, 1].map((dup) => (
                <div key={dup} className={`marquee-set ${dup === 1 ? "marquee-dup" : ""}`}>
                  {copy.map((p, i) => (
                    <div
                      key={`${p.name}-${i}`}
                      className="flex h-52 w-60 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-md sm:w-64"
                    >
                      <img src={p.logo} alt="" className="max-h-28 w-full object-contain mix-blend-multiply" />
                      <span className="text-center text-base font-semibold leading-snug text-slate-700">{p.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
