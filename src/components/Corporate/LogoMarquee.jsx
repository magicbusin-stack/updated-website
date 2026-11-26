import React from "react";

/* Shows every partner logo at once as slowly moving rows (alternating directions) instead of a long grid.
   - Rows keep moving all the time (they do not pause on hover).
   - Visitors who prefer reduced motion get a still, wrapped grid instead (see index.css).
   - A hidden list of names is kept for screen readers and search engines. */
export default function LogoMarquee({ partners = [], rows = 3, secondsPerLogo = 4.5, groups }) {
  // groups: [{ label, partners }]  one row per group, with its name above it (e.g. CSR Partners, Government Partners ...)
  // otherwise: deal partners out to the rows round-robin so every row has a mix.
  let lanes;
  let labels = [];
  if (groups) {
    lanes = groups.map((g) => g.partners);
    labels = groups.map((g) => g.label);
    partners = groups.flatMap((g) => g.partners);
  } else {
    lanes = Array.from({ length: rows }, () => []);
    partners.forEach((p, i) => lanes[i % rows].push(p));
  }

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
          <div key={laneIdx}>
            {labels[laneIdx] && (
              <p className="mx-auto mb-3 max-w-7xl px-6 text-left text-sm font-extrabold uppercase tracking-[0.2em] text-slate-500 lg:px-12">{labels[laneIdx]}</p>
            )}
          <div className="marquee-row" aria-hidden="true">
            <div
              className={`marquee-track ${laneIdx % 2 === 0 ? "marquee-left" : "marquee-right"}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {[0, 1].map((dup) => (
                <div key={dup} className={`marquee-set ${dup === 1 ? "marquee-dup" : ""}`}>
                  {copy.map((p, i) => (
                    <div
                      key={`${p.name}-${i}`}
                      className="flex h-40 w-60 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-md sm:w-64"
                    >
                      {/* no name under the logo: the name is already printed on each logo */}
                      <img src={p.logo} alt={p.name} loading="lazy" decoding="async" className="max-h-28 w-full object-contain mix-blend-multiply" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
