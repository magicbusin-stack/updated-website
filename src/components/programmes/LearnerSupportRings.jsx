import React, { useState } from "react";

// "Build support around the learner": concentric circles with the learner at the centre.
// Hover or tap a ring (or its card) to highlight both. Wording is from the programme team's School-to-Work document.
const RINGS = [
  {
    id: "equip",
    title: "Equip learners",
    color: "#2563EB",
    r1: 58,
    r2: 118,
    gap: "Narrow career imagination and absence of a personal actionable roadmap.",
    intervention: "Build core digital literacy, critical life skills, self-confidence, and structured career exploration kits.",
  },
  {
    id: "engage",
    title: "Engage families, schools, and communities",
    color: "#7C3AED",
    r1: 118,
    r2: 188,
    gap: "Parents are uninformed and defer decisions; teachers are academically overloaded.",
    intervention: "Dynamic counseling channels for parents beyond basic PTMs, alongside structured teacher-mentor guides and practical manuals.",
  },
  {
    id: "connect",
    title: "Connect governance and industry",
    color: "#0D9488",
    r1: 188,
    r2: 262,
    gap: "Administrative departmental silos with no joined-up youth register.",
    intervention: "Establish State, District (DSC), and Block Steering Committees; actively map local industries, MSMEs, RSETIs, and Skill Hubs.",
  },
];

const C = 280;
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const ringPath = (r1, r2) =>
  `M${C - r2} ${C} A${r2} ${r2} 0 1 1 ${C + r2} ${C} A${r2} ${r2} 0 1 1 ${C - r2} ${C} Z M${C - r1} ${C} A${r1} ${r1} 0 1 0 ${C + r1} ${C} A${r1} ${r1} 0 1 0 ${C - r1} ${C} Z`;
const topArc = (r) => `M${C - r} ${C} A${r} ${r} 0 0 1 ${C + r} ${C}`;

export default function LearnerSupportRings() {
  const [pinned, setPinned] = useState("equip");
  const [hovered, setHovered] = useState(null);
  const active = hovered || pinned;

  const handlers = (id) => ({
    onClick: () => setPinned(id),
    onMouseEnter: () => canHover() && setHovered(id),
    onMouseLeave: () => setHovered((h) => (h === id ? null : h)),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered((h) => (h === id ? null : h)),
  });

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="mx-auto w-full max-w-[560px]">
        <svg viewBox="0 0 560 560" className="h-auto w-full" role="group" aria-label="Support around the learner: three concentric circles">
          <defs>
            {RINGS.map((r) => (
              <path key={r.id} id={`lsr-${r.id}`} d={topArc((r.r1 + r.r2) / 2 - 5)} />
            ))}
          </defs>
          <circle cx={C} cy={C} r={268} fill="#F1F5F9" />
          {RINGS.map((r) => {
            const on = active === r.id;
            return (
              <g
                key={r.id}
                role="button"
                tabIndex={0}
                aria-label={r.title}
                aria-pressed={pinned === r.id}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPinned(r.id);
                  }
                }}
                style={{ cursor: "pointer", outline: "none", filter: on ? `drop-shadow(0 0 10px ${r.color}99)` : "none", transition: "filter .25s ease" }}
                {...handlers(r.id)}
              >
                <path d={ringPath(r.r1, r.r2)} fillRule="evenodd" fill={r.color} fillOpacity={on ? 1 : 0.88} stroke="#fff" strokeWidth={4} style={{ transition: "fill-opacity .25s ease" }} />
                <text fontSize={r.id === "equip" ? 16 : r.id === "engage" ? 16.5 : 18} fontWeight={700} fill="#fff" textAnchor="middle" pointerEvents="none">
                  <textPath href={`#lsr-${r.id}`} startOffset="50%">
                    {r.title}
                  </textPath>
                </text>
              </g>
            );
          })}
          <circle cx={C} cy={C} r={54} fill="#FFCC00" stroke="#fff" strokeWidth={4} />
          <text x={C} y={C} textAnchor="middle" dominantBaseline="middle" fontSize={17} fontWeight={800} fill="#3A2A00">
            Learner
          </text>
        </svg>
      </div>

      <div className="space-y-4">
        {RINGS.map((r, i) => {
          const on = active === r.id;
          return (
            <div
              key={r.id}
              {...handlers(r.id)}
              className="cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition"
              style={{ borderColor: on ? r.color : "rgba(0,0,0,0.1)", boxShadow: on ? `0 10px 28px ${r.color}33` : undefined }}
            >
              <div className="flex items-center gap-3 px-5 py-3 text-white" style={{ background: r.color }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold" style={{ color: r.color }}>
                  {i + 1}
                </span>
                <h4 className="text-lg font-bold leading-snug">{r.title}</h4>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#FDECEC] p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9B1B1F]">Gap</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{r.gap}</p>
                </div>
                <div className="rounded-xl bg-[#E8F6EE] p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#166534]">Intervention</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{r.intervention}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
