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

// Six headline numbers (Data as of March 2025). Colours and icons follow the supplied "metric boxes" design.
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
    {d.map((p) => (
      <path key={p} d={p} />
    ))}
  </svg>
);

const STATS = [
  {
    value: "29 Lakh",
    label: "Adolescents",
    tag: "Youth",
    bg: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)",
    border: "#fed7aa",
    iconBg: "linear-gradient(135deg,#f97316 0%,#ea580c 100%)",
    tagColor: "#c2410c",
    d: ["M12 14l9-5-9-5-9 5 9 5z", "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"],
  },
  {
    value: "28,976",
    label: "Schools",
    tag: "Institutions",
    bg: "linear-gradient(135deg,#f0fdfa 0%,#ccfbf1 100%)",
    border: "#99f6e4",
    iconBg: "linear-gradient(135deg,#0d9488 0%,#059669 100%)",
    tagColor: "#0f766e",
    d: ["M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"],
  },
  {
    value: "37,429",
    label: "Teachers",
    tag: "Educators",
    bg: "linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)",
    border: "#c7d2fe",
    iconBg: "linear-gradient(135deg,#6366f1 0%,#4f46e5 100%)",
    tagColor: "#4338ca",
    d: ["M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"],
  },
  {
    value: "1,474",
    label: "Master Trainers",
    tag: "Mentors",
    bg: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%)",
    border: "#bae6fd",
    iconBg: "linear-gradient(135deg,#0284c7 0%,#0369a1 100%)",
    tagColor: "#0369a1",
    d: ["M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"],
  },
  {
    value: "12",
    label: "Government Partnerships",
    tag: "State Level",
    bg: "linear-gradient(135deg,#fff1f2 0%,#ffe4e6 100%)",
    border: "#fecdd3",
    iconBg: "linear-gradient(135deg,#e11d48 0%,#be123c 100%)",
    tagColor: "#be123c",
    d: ["M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"],
  },
  {
    value: "141",
    label: "Aspirational Blocks",
    tag: "NITI Aayog",
    bg: "linear-gradient(135deg,#fefce8 0%,#fef08a 100%)",
    border: "#fde047",
    iconBg: "linear-gradient(135deg,#d97706 0%,#b45309 100%)",
    tagColor: "#b45309",
    d: ["M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"],
  },
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
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        {/* map */}
        <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full" style={{ background: CORAL }} />
              12 System-Strengthening States
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">Interactive map</span>
          </div>
          <svg viewBox={`0 0 ${vw} ${vh}`} className="mx-auto h-auto w-full max-w-[680px]" role="group" aria-label="Map of India showing the 12 partner states">
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
              const moved = Math.hypot(m.x - m.ax, m.y - m.ay) > 16;
              return (
                <g key={name} {...keys(name)} {...handlers(name)} aria-label={name} aria-pressed={pinned === name} style={{ cursor: "pointer", outline: "none" }}>
                  {moved && (
                    <g pointerEvents="none">
                      <line x1={m.ax} y1={m.ay} x2={m.x} y2={m.y} stroke="#1f2937" strokeWidth={1.6} />
                      <circle cx={m.ax} cy={m.ay} r={3.4} fill="#1f2937" stroke="#fff" strokeWidth={1} />
                    </g>
                  )}
                  <g
                    style={{
                      transform: `translate(${m.x}px, ${m.y}px) scale(${on ? 1.12 : 1})`,
                      transition: "transform .18s ease",
                      filter: on ? "drop-shadow(0 2px 4px rgba(0,0,0,0.35))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
                    }}
                  >
                    <use href="#gfm-bus" x={-21} y={-12.5} width={42} height={25} />
                    <text
                      className="max-sm:hidden"
                      y={29}
                      textAnchor="middle"
                      fontSize={15}
                      fontWeight={700}
                      fill={on ? "#B91C1C" : "#1E293B"}
                      stroke="#fff"
                      strokeWidth={4.5}
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
        <div className="space-y-4 lg:sticky lg:top-28">
          {/* headline numbers (Data as of March 2025) */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#ffe4e6] bg-[#fff1f2] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#e11d48]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#e11d48]">Nationwide Reach in Education and Skilling</span>
            </div>
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#0f2644] sm:text-2xl">Government Partnership: System Strengthening Model</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {STATS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col justify-between rounded-2xl border p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-6px_rgba(15,23,42,0.1)]"
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div className="mb-2 flex items-center justify-between gap-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_3px_8px_rgba(0,0,0,0.1)]" style={{ background: c.iconBg }}>
                    <Icon d={c.d} />
                  </span>
                  <span className="rounded-full bg-white/70 px-1.5 py-[2px] text-[9px] font-bold uppercase tracking-[0.05em]" style={{ color: c.tagColor }}>
                    {c.tag}
                  </span>
                </div>
                <div>
                  <p className="whitespace-nowrap text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0f2644]">{c.value}</p>
                  <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-600">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-slate-400">Source: Data as of March 2025</p>

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
