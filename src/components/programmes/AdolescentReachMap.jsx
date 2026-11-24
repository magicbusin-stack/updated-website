import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { INDIA_MAP } from "./indiaMapData";
import { REACH_PLACES } from "./adolescentReachData";

/* "Our Reach Across India" map for the Adolescent Programme. Same look as the Government Partnerships map
   (real state outlines, teal for the places we work in, soft grey for the rest), with a red marker for each place
   shown on the team's outreach map picture. Tap or hover a marker, a state or a name in the list to highlight it. */
const TEAL = "#3CBFC2";
const TEAL_DARK = "#1E9EA2";
const REACH_POLYGONS = new Set(REACH_PLACES.map((p) => p.polygon));
const ALPHABETICAL = [...REACH_PLACES].sort((a, b) => a.name.localeCompare(b.name));

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function AdolescentReachMap() {
  const [pinned, setPinned] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = hovered || pinned;
  const activePlace = REACH_PLACES.find((p) => p.name === active) || null;
  const [vw, vh] = INDIA_MAP.viewBox;

  const select = (name) => setPinned((cur) => (cur === name ? null : name));
  const handlers = (name) => ({
    onClick: () => select(name),
    onMouseEnter: () => canHover() && setHovered(name),
    onMouseLeave: () => setHovered((h) => (h === name ? null : h)),
    onFocus: () => setHovered(name),
    onBlur: () => setHovered((h) => (h === name ? null : h)),
  });
  const keys = (name) => ({
    tabIndex: 0,
    role: "button",
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(name);
      }
    },
  });
  // clicking a state outline selects the first place inside it (Jammu for Jammu and Kashmir)
  const placeOfPolygon = (poly) => REACH_PLACES.find((p) => p.polygon === poly)?.name;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      {/* map */}
      <div className="-mx-3 rounded-3xl border border-black/10 bg-white p-3 shadow-sm sm:mx-0 sm:p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-base font-semibold text-slate-600">
            <MapPin className="h-5 w-5 text-brand-red" aria-hidden="true" />
            Places where the Adolescent Programme works
          </span>
        </div>
        <svg viewBox={`0 0 ${vw} ${vh}`} className="mx-auto h-auto w-full max-w-[640px]" role="group" aria-label="Map of India with the places where the Adolescent Programme works">
          {Object.entries(INDIA_MAP.states).map(([name, d]) => {
            if (!REACH_POLYGONS.has(name)) return <path key={name} d={d} fill="#DEECEE" stroke="#fff" strokeWidth={0.9} strokeLinejoin="round" />;
            const on = activePlace?.polygon === name;
            const target = placeOfPolygon(name);
            return (
              <path
                key={name}
                d={d}
                fill={on ? TEAL_DARK : TEAL}
                stroke="#fff"
                strokeWidth={on ? 1.6 : 0.9}
                strokeLinejoin="round"
                style={{ cursor: "pointer", transition: "fill .2s ease" }}
                aria-label={name}
                {...keys(target)}
                {...handlers(target)}
              />
            );
          })}

          {/* red markers */}
          {REACH_PLACES.map((p) => {
            const on = active === p.name;
            return (
              <g key={p.name} {...keys(p.name)} {...handlers(p.name)} aria-label={p.name} aria-pressed={pinned === p.name} style={{ cursor: "pointer", outline: "none" }}>
                <g
                  style={{
                    transform: `translate(${p.x}px, ${p.y}px) scale(${on ? 1.35 : 1})`,
                    transition: "transform .18s ease",
                    filter: on ? "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                  }}
                >
                  {/* a larger invisible circle makes the marker easy to tap on a phone */}
                  <circle cx={0} cy={-12} r={16} fill="transparent" />
                  <path d="M0 0 C-2 -6 -10 -11 -10 -19 A10 10 0 1 1 10 -19 C10 -11 2 -6 0 0 Z" fill="#D7262B" stroke="#fff" strokeWidth={1.6} />
                  <circle cx={0} cy={-19} r={3.8} fill="#fff" />
                </g>
              </g>
            );
          })}

          {/* name of the highlighted place */}
          {activePlace && (
            <text
              x={Math.min(Math.max(activePlace.x, 70), vw - 70)}
              y={activePlace.y - 36}
              textAnchor="middle"
              fontSize={21}
              fontWeight={800}
              fill="#0F172A"
              stroke="#fff"
              strokeWidth={6}
              paintOrder="stroke"
              strokeLinejoin="round"
              pointerEvents="none"
            >
              {activePlace.name}
            </text>
          )}
        </svg>
      </div>

      {/* list of places */}
      <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-xl font-black text-[#0F172A]">{activePlace ? activePlace.name : "Select a place"}</p>
        <p className="mt-1 text-base text-slate-600">
          {activePlace ? "The Magic Bus Adolescent Programme works here." : "Tap a marker on the map, or a name below, to highlight it."}
        </p>
        {/* phones: one row you swipe sideways (keeps the section short); tablet and desktop: all names visible */}
        <ul
          className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
          aria-label="Places where the Adolescent Programme works"
        >
          {ALPHABETICAL.map((p) => {
            const on = active === p.name;
            return (
              <li key={p.name} className="shrink-0">
                <button
                  type="button"
                  onClick={() => select(p.name)}
                  onMouseEnter={() => canHover() && setHovered(p.name)}
                  onMouseLeave={() => setHovered((h) => (h === p.name ? null : h))}
                  aria-pressed={pinned === p.name}
                  className={`rounded-full border px-3.5 py-2 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow ${
                    on ? "border-[#1E9EA2] bg-[#1E9EA2] text-white shadow-md" : "border-slate-200 bg-slate-50 text-slate-800 hover:border-[#1E9EA2] hover:bg-white"
                  }`}
                >
                  {p.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
