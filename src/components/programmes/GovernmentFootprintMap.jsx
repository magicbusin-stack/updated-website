import React, { useState } from "react";
import { Landmark, MapPin } from "lucide-react";
import { INDIA_MAP } from "./indiaMapData";

// Interactive "Our footprint" map: real state borders, one bus per partner state (no overlaps),
// state pills and a panel with what the programme has done in the selected state.
// All state details come from the programme team's Government Partnerships document.
const TEAL = "#3CBFC2";
const TEAL_DARK = "#1E9EA2";
const NAVY = "#1F4457";
const CORAL = "#F26B6B";

const FOOTPRINT = [
  ["29 Lakh", "Adolescents"],
  ["28,976", "Schools"],
  ["37,429", "Teachers"],
  ["1,474", "Master Trainers"],
  ["12", "Government Partnerships"],
  ["141", "Aspirational Blocks"],
];

const NITI = "Also part of the NITI Aayog partnership, which aims to improve educational outcomes for 2,00,000 adolescents in aspirational blocks of Uttar Pradesh, Himachal Pradesh, Uttarakhand and Haryana.";

const INFO = {
  "Himachal Pradesh": [
    ["2024–2025", "Technical partnership (HPC) to embed life skills in state frameworks."],
    ["2024–2025", NITI],
  ],
  Haryana: [
    ["2023–2024", "Teacher-led life skills delivered in three districts, reaching over 80,000 adolescents in Haryana."],
    ["2024–2025", NITI],
  ],
  Delhi: [
    [
      "2025–2026",
      "Project Tarang: implemented in partnership with the Department of Women and Child Development (Govt. of NCT of Delhi), this initiative uses football and play-based life skills across 20 Child Care Institutions to foster holistic adolescent development and successful societal reintegration.",
    ],
  ],
  Rajasthan: [
    ["2022–2023", "Established three key district-level partnerships in Ajmer, Dholpur and Karauli."],
    ["2024–2025", "New partnerships in Rajasthan and Chhattisgarh to deepen engagement in tribal schools."],
  ],
  "Madhya Pradesh": [["2023–2024", "Partnered with the Tribal Welfare Department to roll out in 9,000 tribal schools."]],
  Chhattisgarh: [["2024–2025", "New partnerships in Rajasthan and Chhattisgarh to deepen engagement in tribal schools."]],
  Odisha: [
    ["2023–2024", "Kridangan Club (Aspirational Curriculum), sports integrated life skills delivered by teachers in grades 9-10, linking it to board exam marks."],
    ["Evidence", "The Life-Skills Impact Assessment Report 2025 (Odisha) found that 78% of students crossed the baseline benchmark of a minimum 60% score."],
  ],
  Assam: [["2023–2024", "Launched large-scale, teacher-led implementation with SSA, covering 10K schools and over 1 million adolescents."]],
  Meghalaya: [["2024–2025", "Technical partnership (MPOWER) to embed life skills in state frameworks, targeting 5,00,000 adolescents in Meghalaya."]],
  Mizoram: [["2022–2023", "Integrated Life Skills into social science textbooks for grades 6 & 7 and commenced B.Ed teacher training."]],
  "Andhra Pradesh": [["2023–2024", "Sankalpam Programme, dedicated timetable slots and integrated life skills with sports in 1,300 schools."]],
  "Tamil Nadu": [
    [
      "2025–2026",
      "TN-RIGHTS Project: in collaboration with the Commissionerate for the Welfare of Differently Abled Persons (Govt. of Tamil Nadu) and Fernandez Direct Consulting LLP, Magic Bus is designing and piloting an accessible life skills curriculum for all 21 categories of disabilities across five districts, supported by a Training of Trainers (ToT) model.",
    ],
  ],
};
const PARTNER_STATES = Object.keys(INFO);

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function GovernmentFootprintMap() {
  const [pinned, setPinned] = useState("Madhya Pradesh");
  const [hovered, setHovered] = useState(null);
  const active = hovered || pinned;
  const [vw, vh] = INDIA_MAP.viewBox;

  const handlers = (name) => ({
    onClick: () => setPinned(name),
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
        setPinned(name);
      }
    },
  });

  return (
    <div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* map */}
        <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full" style={{ background: CORAL }} />
              12 System-Strengthening States
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">Interactive map</span>
          </div>
          <svg viewBox={`0 0 ${vw} ${vh}`} className="mx-auto h-auto w-full max-w-[560px]" role="group" aria-label="Map of India showing the 12 partner states">
            <defs>
              <symbol id="gfm-bus" viewBox="0 0 30 18" overflow="visible">
                <rect x="0.5" y="0.5" width="29" height="13" rx="3.5" fill="#D7262B" stroke="#fff" strokeWidth="1.2" />
                <rect x="3" y="3" width="5" height="5" rx="1" fill="#FCE9D2" />
                <rect x="9.5" y="3" width="5" height="5" rx="1" fill="#FCE9D2" />
                <rect x="16" y="3" width="5" height="5" rx="1" fill="#FCE9D2" />
                <rect x="22.5" y="3" width="5" height="5" rx="1" fill="#FCE9D2" />
                <rect x="1" y="9" width="28" height="1.8" fill="#F5B800" />
                <circle cx="8" cy="14.2" r="3" fill="#1f2937" stroke="#fff" strokeWidth="1" />
                <circle cx="22" cy="14.2" r="3" fill="#1f2937" stroke="#fff" strokeWidth="1" />
              </symbol>
            </defs>

            {/* states */}
            {Object.entries(INDIA_MAP.states).map(([name, d]) => {
              const partner = PARTNER_STATES.includes(name);
              const on = active === name;
              if (!partner) return <path key={name} d={d} fill="#DEECEE" stroke="#fff" strokeWidth={0.9} strokeLinejoin="round" />;
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
                  {...keys(name)}
                  {...handlers(name)}
                />
              );
            })}

            {/* buses, one per partner state */}
            {PARTNER_STATES.map((name) => {
              const m = INDIA_MAP.markers[name];
              const on = active === name;
              const moved = Math.hypot(m.x - m.ax, m.y - m.ay) > 12;
              return (
                <g key={name} {...keys(name)} {...handlers(name)} aria-label={name} aria-pressed={pinned === name} style={{ cursor: "pointer", outline: "none" }}>
                  {moved && (
                    <g pointerEvents="none">
                      <line x1={m.ax} y1={m.ay} x2={m.x} y2={m.y} stroke="#1f2937" strokeWidth={1.1} />
                      <circle cx={m.ax} cy={m.ay} r={2.4} fill="#1f2937" stroke="#fff" strokeWidth={0.8} />
                    </g>
                  )}
                  <g
                    style={{
                      transform: `translate(${m.x}px, ${m.y}px) scale(${on ? 1.12 : 1})`,
                      transition: "transform .18s ease",
                      filter: on ? "drop-shadow(0 2px 4px rgba(0,0,0,0.35))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
                    }}
                  >
                    <use href="#gfm-bus" x={-15} y={-9} width={30} height={18} />
                    <text
                      className="max-sm:hidden"
                      y={21}
                      textAnchor="middle"
                      fontSize={10.5}
                      fontWeight={700}
                      fill={on ? "#B91C1C" : "#1E293B"}
                      stroke="#fff"
                      strokeWidth={3}
                      paintOrder="stroke"
                      strokeLinejoin="round"
                    >
                      {name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
          <p className="mt-1 text-center text-sm italic text-slate-500">Hover or tap a state or bus to see what we have done there.</p>
        </div>

        {/* right column */}
        <div className="space-y-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-red">Nationwide reach in education and skilling</p>
            <h3 className="mt-1 text-2xl font-black text-[#0F172A]">Government Partnership: System Strengthening Model</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {FOOTPRINT.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-black/10 bg-[#F8FAFC] p-4 text-center shadow-sm">
                <p className="text-2xl font-black sm:text-3xl" style={{ color: NAVY }}>
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-slate-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500">Source: Data as of March 2025</p>

          <div className="rounded-2xl border bg-white p-5 shadow-sm transition-colors" style={{ borderColor: `${TEAL}88`, background: "linear-gradient(135deg,#ECFAFA 0%,#fff 60%)" }}>
            <div className="flex items-center gap-3 border-b border-black/10 pb-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: TEAL_DARK }}>
                <Landmark className="h-5 w-5" />
              </span>
              <h4 className="text-xl font-black text-[#0F172A]">{active}</h4>
            </div>
            <ul className="mt-4 space-y-3">
              {INFO[active].map(([year, text]) => (
                <li key={year + text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold text-white" style={{ background: year === "Evidence" ? "#7B52B8" : NAVY }}>
                    {year}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* state pills */}
      <div className="mt-8">
        <p className="text-lg font-black text-[#0F172A]">Partner States and Union Territories (12)</p>
        <p className="text-sm text-slate-500">Select a state to focus:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {PARTNER_STATES.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={pinned === s}
              onClick={() => setPinned(s)}
              onMouseEnter={() => canHover() && setHovered(s)}
              onMouseLeave={() => setHovered((h) => (h === s ? null : h))}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
                active === s ? "bg-white font-bold text-red-600 shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-red-50"
              }`}
              style={{ borderColor: active === s ? "#F26B6B88" : "#e2e8f0" }}
            >
              <MapPin className="h-3.5 w-3.5" style={{ color: CORAL }} />
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
