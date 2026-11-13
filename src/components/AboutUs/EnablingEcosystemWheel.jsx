import React, { useEffect, useRef, useState } from "react";
import {
  Landmark, Users, School, Handshake, Brain, Smile, Heart, BookOpen, Trophy, ShieldPlus, ListChecks,
  Globe2, Rocket, Bike, ArrowRight, PersonStanding, ChevronDown,
} from "lucide-react";

import { CHANGE, PRINCIPLES, LIFE_SKILLS, INTERVENTIONS, ECOSYSTEM } from "./adolescentFrameworkContent";

// All wording comes from the approved programme-team content (see adolescentFrameworkContent.js).
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const skillsOf = (name) =>
  LIFE_SKILLS.items
    .find(([n]) => n === name)[1]
    .replace(/\.$/, "")
    .split(/,\s*|\s+and\s+/)
    .map((t) => [cap(t), ""]);
const SKILLS_NOTE = "Part of our 11 core life skills, which span three interconnected dimensions: cognitive, social and emotional.";

const DATA = {
  hub: {
    title: "Wellbeing, Empowerment & Gender Equity",
    listTitle: "The Change We Seek",
    color: "#E12228",
    desc: CHANGE.intro,
    modules: CHANGE.items,
  },
  cognitive: { title: "Cognitive", listTitle: "Core Life Skills", color: "#4F46E5", desc: SKILLS_NOTE, modules: skillsOf("Cognitive") },
  emotional: { title: "Emotional", listTitle: "Core Life Skills", color: "#047857", desc: SKILLS_NOTE, modules: skillsOf("Emotional") },
  social: { title: "Social", listTitle: "Core Life Skills", color: "#E11D48", desc: SKILLS_NOTE, modules: skillsOf("Social") },
  sports: { title: INTERVENTIONS.sports.title, listTitle: "Four Pillars", color: "#E0670C", desc: INTERVENTIONS.sports.intro, modules: INTERVENTIONS.sports.items },
  academic: { title: INTERVENTIONS.academic.title, listTitle: "Focus Areas", color: "#3F8F2B", desc: INTERVENTIONS.academic.intro, modules: INTERVENTIONS.academic.items },
  future: { title: INTERVENTIONS.future.title, listTitle: "Five Connected Areas", color: "#0F7F96", desc: INTERVENTIONS.future.intro, modules: INTERVENTIONS.future.items },
  cross: { title: "Cross-Cutting Principles", listTitle: "Principles That Guide Our Work", color: "#2F7D32", desc: PRINCIPLES.intro, modules: PRINCIPLES.items },
  ecosystem: { title: "Enabling Ecosystem", listTitle: "Enabling Systems", color: "#2A6DB0", desc: ECOSYSTEM.intro, modules: ECOSYSTEM.items },
  govt: { title: ECOSYSTEM.items[0][0], color: "#1F4E8C", desc: ECOSYSTEM.items[0][1], modules: [] },
  school: { title: ECOSYSTEM.items[1][0], color: "#D9700B", desc: ECOSYSTEM.items[1][1], modules: [] },
  community: { title: ECOSYSTEM.items[2][0], color: "#3F9142", desc: ECOSYSTEM.items[2][1], modules: [] },
  collaboratives: { title: ECOSYSTEM.items[3][0], color: "#7B52B8", desc: ECOSYSTEM.items[3][1], modules: [] },
};

const ICONS = {
  hub: Heart,
  cognitive: Brain,
  emotional: Smile,
  social: Users,
  sports: Trophy,
  academic: BookOpen,
  future: Rocket,
  cross: ShieldPlus,
  ecosystem: Globe2,
  govt: Landmark,
  school: School,
  community: Users,
  collaboratives: Handshake,
};

// Quick-select strip shown on phones, where the labels inside the wheel are too small to read.
const MOBILE_CHIPS = [
  ["hub", "Wellbeing & Equity"],
  ["cognitive", "Cognitive"],
  ["social", "Social"],
  ["emotional", "Emotional"],
  ["cross", "Cross-Cutting"],
  ["sports", "Sports"],
  ["academic", "Academic"],
  ["future", "Future Readiness"],
  ["ecosystem", "Enabling Ecosystem"],
  ["govt", "Government"],
  ["school", "School & Teachers"],
  ["community", "Community"],
  ["collaboratives", "Collaboratives"],
];

const STAGES = [
  { id: "explorer", name: "Explorer", grades: "Grade 3–5", desc: "Sparking curiosity through guided playground activities, peer discovery and emotional expression.", mantra: "Play · Ask · Discover", Icon: Bike, c: "#E8830F", bg: "#FFF3E3", border: "#F5C48A" },
  { id: "learner", name: "Learner", grades: "Grade 6–8", desc: "Deepening active listening, classroom habits, resilience and personal accountability.", mantra: "Listen · Learn · Explore", Icon: BookOpen, c: "#C98F08", bg: "#FFF8E0", border: "#F1D77F" },
  { id: "thinker", name: "Thinker", grades: "Grade 9–10", desc: "Analytical problem-solving, self-awareness and resisting pressures to drop out.", mantra: "Think · Create · Apply", Icon: Brain, c: "#3E9A47", bg: "#EAF6EA", border: "#A9D6AC" },
  { id: "collaborator", name: "Collaborator", grades: "Grade 11–12", desc: "Negotiation, group work, career stream selection, digital literacy and community action.", mantra: "Ideate · Adapt · Connect", Icon: Users, c: "#2E7FC1", bg: "#E8F2FB", border: "#A8CBE8" },
];

const GLOW = { cross: "#4C9A2A" };
const OUTLINE = { ecosystem: "#2A6DB0" };

// ---- geometry (viewBox 800 x 800) ----
const CX = 400;
const CY = 400;
const R_OUT = 395; // pale blue Enabling Ecosystem circle
const R_INT = 262; // outer edge of the programme sectors
const R_SEC_IN = 168; // inner edge of the sectors
const R_CROSS_IN = 124; // cross-cutting ring (inner edge)
const R_LIFE_IN = 56; // inner edge of the life skills sectors
const HUB_X = 400;
const HUB_Y = 400;
const HUB_R = 50;
const NODE_R = 330;
const NODE_SIZE = 40;

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.sin(a), CY - r * Math.cos(a)];
};

const sector = (r1, r2, a0, a1) => {
  const g = 0.8;
  const s = a0 + g;
  const e = a1 - g;
  const large = e - s > 180 ? 1 : 0;
  const [x1, y1] = pt(r2, s);
  const [x2, y2] = pt(r2, e);
  const [x3, y3] = pt(r1, e);
  const [x4, y4] = pt(r1, s);
  return `M${x1} ${y1} A${r2} ${r2} 0 ${large} 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 ${large} 0 ${x4} ${y4} Z`;
};

const fullRing = (r1, r2) =>
  `M${CX - r2} ${CY} A${r2} ${r2} 0 1 1 ${CX + r2} ${CY} A${r2} ${r2} 0 1 1 ${CX - r2} ${CY} Z M${CX - r1} ${CY} A${r1} ${r1} 0 1 0 ${CX + r1} ${CY} A${r1} ${r1} 0 1 0 ${CX - r1} ${CY} Z`;

const topArc = (r) => `M${CX - r} ${CY} A${r} ${r} 0 0 1 ${CX + r} ${CY}`;

const arcBetween = (r, a0, a1) => {
  const [x1, y1] = pt(r, a0);
  const [x2, y2] = pt(r, a1);
  return `M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`;
};

function Lines({ x, y, lines, size = 16, color = "#fff", weight = 700 }) {
  const start = y - ((lines.length - 1) * size * 1.15) / 2;
  return (
    <text x={x} y={start} textAnchor="middle" dominantBaseline="middle" fontSize={size} fontWeight={weight} fill={color} pointerEvents="none">
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.15}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

function ArcLabel({ id, text, size, spacing = 0, fill = "#fff", weight = 700, opacity = 1 }) {
  return (
    <text fontSize={size} fontWeight={weight} letterSpacing={spacing} fill={fill} opacity={opacity} textAnchor="middle" pointerEvents="none">
      <textPath href={`#${id}`} startOffset="50%">
        {text}
      </textPath>
    </text>
  );
}

export default function EnablingEcosystemWheel() {
  const [pinned, setPinned] = useState("cognitive");
  const [hovered, setHovered] = useState(null);
  const chipRefs = useRef({});
  const [open, setOpen] = useState({ id: null, i: 0 }); // which module text is expanded in the panel
  const activeId = hovered || pinned;
  // keep the selected chip in view when a part of the wheel is tapped (phones)
  useEffect(() => {
    const el = chipRefs.current[pinned];
    if (el && el.offsetParent) el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [pinned]);
  const info = DATA[activeId];
  const openIdx = open.id === activeId ? open.i : 0;
  const Icon = ICONS[activeId];
  const glowOf = (id) => GLOW[id] || DATA[id].color;

  const pin = (id) => setPinned(id);

  const props = (id) => ({
    role: "button",
    tabIndex: 0,
    "aria-label": DATA[id].title,
    "aria-pressed": pinned === id,
    onClick: () => pin(id),
    onMouseEnter: () => canHover() && setHovered(id),
    onMouseLeave: () => setHovered((h) => (h === id ? null : h)),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered((h) => (h === id ? null : h)),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pin(id);
      }
    },
    style: { cursor: "pointer", outline: "none" },
  });

  const nodePos = (deg) => pt(NODE_R, deg);
  const [govtX, govtY] = nodePos(296);
  const [commX, commY] = nodePos(64);
  const [collX, collY] = nodePos(116);
  const [schoolX, schoolY] = nodePos(244);

  const LOW = [
    { id: "ecosystem", kind: "disc", r: R_OUT },
    { id: "academic", kind: "ring", r1: R_SEC_IN, r2: R_INT, a0: 0, a1: 125, lines: ["Academic"], size: 16 },
    { id: "future", kind: "ring", r1: R_SEC_IN, r2: R_INT, a0: 125, a1: 235, lines: ["Future Readiness", "and", "Employability"], size: 15 },
    { id: "sports", kind: "ring", r1: R_SEC_IN, r2: R_INT, a0: 235, a1: 360, lines: ["Sports", "Ecosystem"], size: 15 },
    { id: "cross", kind: "band" },
    { id: "emotional", kind: "ring", r1: R_LIFE_IN, r2: R_CROSS_IN, a0: 0, a1: 120, lines: ["Emotional"], size: 12, dr: -2 },
    { id: "social", kind: "ring", r1: R_LIFE_IN, r2: R_CROSS_IN, a0: 120, a1: 240, lines: ["Social"], size: 13 },
    { id: "cognitive", kind: "ring", r1: R_LIFE_IN, r2: R_CROSS_IN, a0: 240, a1: 360, lines: ["Cognitive"], size: 12, dr: -2 },
  ];
  const HIGH = [
    { id: "hub", kind: "hub" },
    { id: "govt", kind: "node", x: govtX, y: govtY, Icon: Landmark, lines: ["Government", "System"], lx: -8 },
    { id: "community", kind: "node", x: commX, y: commY, Icon: Users, lines: ["Community", "System"], lx: 8 },
    { id: "collaboratives", kind: "node", x: collX, y: collY, Icon: Handshake, lines: ["Collaboratives", "and Partners"], lx: -28 },
    { id: "school", kind: "node", x: schoolX, y: schoolY, Icon: School, lines: ["School Leadership", "and Teachers"], lx: 36 },
  ];
  const ALL = [...LOW, ...HIGH];

  const originOf = (sh) => {
    if (sh.kind === "ring") return pt((sh.r1 + sh.r2) / 2 + (sh.dr || 0), (sh.a0 + sh.a1) / 2);
    if (sh.kind === "node") return [sh.x, sh.y];
    if (sh.kind === "hub") return [HUB_X, HUB_Y];
    return [CX, CY];
  };

  const body = (sh) => {
    if (sh.kind === "disc" && sh.id === "ecosystem") {
      return <circle cx={CX} cy={CY} r={sh.r} fill="url(#eew-sky)" stroke="#B9D4EE" strokeWidth={2} />;
    }
    if (sh.kind === "ring") {
      const [lx, ly] = originOf(sh);
      return (
        <>
          <path d={sector(sh.r1, sh.r2, sh.a0, sh.a1)} fill={DATA[sh.id].color} stroke="#fff" strokeWidth={3} />
          <Lines x={lx} y={ly} lines={sh.lines} size={sh.size} />
        </>
      );
    }
    if (sh.kind === "band") {
      return <path d={fullRing(R_CROSS_IN, R_SEC_IN)} fillRule="evenodd" fill="#CDE9BE" stroke="#fff" strokeWidth={2} />;
    }
    if (sh.kind === "hub") {
      return (
        <>
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R} fill="#fff" stroke="#e2e8f0" strokeWidth={3} />
          <Lines x={HUB_X} y={HUB_Y} lines={["Wellbeing,", "Empowerment", "& Gender", "Equity"]} size={11.5} color="#334155" />
        </>
      );
    }
    // node
    const h = sh.lines.length * 17 * 1.15;
    return (
      <>
        <circle cx={sh.x} cy={sh.y} r={NODE_SIZE} fill={DATA[sh.id].color} stroke="#fff" strokeWidth={3} />
        <sh.Icon x={sh.x - 17} y={sh.y - 17} width={34} height={34} color="#fff" strokeWidth={1.8} />
      </>
    );
  };

  const nodeLabel = (sh) => {
    const size = 14.5;
    const h = sh.lines.length * size * 1.15;
    return <Lines key={`lab-${sh.id}`} x={sh.x + (sh.lx || 0)} y={sh.y + NODE_SIZE + 10 + h / 2} lines={sh.lines} size={size} color="#12305A" />;
  };

  // Enlarged copy drawn on top so a hovered piece can grow without being hidden by its neighbours.
  const overlay = (id) => {
    const sh = ALL.find((x) => x.id === id);
    const isPinned = pinned === id;
    const glow = isPinned && hovered !== id ? `drop-shadow(0 0 7px ${glowOf(id)}aa)` : `drop-shadow(0 0 11px ${glowOf(id)})`;
    if (sh.kind === "disc") {
      // big circles only get a glowing outline, so they never cover what sits on top of them
      return (
        <circle
          key={`ov-${id}`}
          aria-hidden="true"
          pointerEvents="none"
          cx={CX}
          cy={CY}
          r={sh.r - 2}
          fill="none"
          stroke={OUTLINE[id]}
          strokeWidth={4}
          style={{ filter: glow }}
        />
      );
    }
    const [ox, oy] = originOf(sh);
    const scale = hovered === id ? (sh.kind === "node" ? 1.14 : sh.kind === "band" ? 1.02 : 1.07) : sh.kind === "band" ? 1.01 : 1.04;
    return (
      <g
        key={`ov-${id}-${isPinned ? "p" : "h"}`}
        className="eew-pop"
        aria-hidden="true"
        pointerEvents="none"
        style={{
          "--s": scale,
          transformOrigin: `${ox}px ${oy}px`,
          transformBox: "view-box",
          animation: "eewPop .18s ease-out forwards",
          filter: glow,
        }}
      >
        {body(sh)}
      </g>
    );
  };

  const overlayIds = [...new Set([pinned, hovered].filter(Boolean))];

  return (
    <div>
      <style>{`
@keyframes eewPop{from{transform:scale(1)}to{transform:scale(var(--s))}}
@keyframes eewSpin{to{transform:rotate(360deg)}}
@keyframes eewPulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.1);opacity:0}}
@keyframes eewHalo{0%,100%{opacity:.35}50%{opacity:.85}}
@keyframes eewFlow{to{stroke-dashoffset:-28}}
@media (prefers-reduced-motion: reduce){
  .eew-anim{animation:none!important}
  .eew-pop{animation-duration:.01ms!important}
}`}</style>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
        <div className="relative overflow-hidden rounded-3xl bg-white border shadow-sm p-1.5 md:p-4">
          {/* soft glow behind the wheel that follows the colour of the active piece */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: glowOf(activeId), filter: "blur(70px)", opacity: hovered ? 0.26 : 0.16, transition: "background .5s ease, opacity .4s ease" }}
          />

          <div className="relative z-10 mb-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 pt-1 md:hidden" role="group" aria-label="Choose a part of the wheel">
            {MOBILE_CHIPS.map(([id, label]) => (
              <button
                key={id}
                ref={(el) => {
                  chipRefs.current[id] = el;
                }}
                type="button"
                aria-pressed={pinned === id}
                onClick={() => pin(id)}
                className="flex shrink-0 snap-start items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors"
                style={
                  pinned === id
                    ? { background: DATA[id].color, borderColor: DATA[id].color, color: "#fff" }
                    : { background: "#fff", borderColor: "#e2e8f0", color: "#334155" }
                }
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: pinned === id ? "#fff" : DATA[id].color }} />
                {label}
              </button>
            ))}
          </div>

          <svg viewBox="0 0 800 800" className="relative z-10 w-full h-auto" role="group" aria-label="Enabling Ecosystem wheel" onMouseLeave={() => setHovered(null)}>
            <defs>
              <radialGradient id="eew-sky" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EAF4FC" />
                <stop offset="100%" stopColor="#D2E5F6" />
              </radialGradient>
              <path id="eew-title-arc" d={topArc(362)} />
              <path id="eew-cross-title-arc" d={topArc(152)} />
              <path id="eew-cross-words-arc" d={topArc(133)} />
            </defs>

            {LOW.map((sh) => (
              <g key={sh.id} {...props(sh.id)}>
                {body(sh)}
              </g>
            ))}

            {/* decorative arcs of the orbit, with a slow flow of dots along them */}
            {[
              [254, 279],
              [81, 106],
              [148, 172],
              [188, 212],
            ].map(([a0, a1]) => (
              <g key={a0} pointerEvents="none">
                <path d={arcBetween(NODE_R, a0, a1)} fill="none" stroke="#6AA4D8" strokeWidth={7} strokeLinecap="round" opacity={0.75} />
                <path
                  className="eew-anim"
                  d={arcBetween(NODE_R, a0, a1)}
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray="2 12"
                  style={{ animation: "eewFlow 2.4s linear infinite" }}
                />
              </g>
            ))}

            {/* soft pulse around the centre, in the colour of the active piece */}
            <circle
              className="eew-anim"
              cx={HUB_X}
              cy={HUB_Y}
              r={HUB_R}
              fill="none"
              stroke={glowOf(activeId)}
              strokeWidth={3}
              pointerEvents="none"
              style={{ transformOrigin: "center", transformBox: "fill-box", animation: "eewPulse 2.8s ease-out infinite", transition: "stroke .5s ease" }}
            />

            {HIGH.map((sh) => (
              <g key={sh.id} {...props(sh.id)}>
                {sh.kind === "node" && (
                  <circle
                    className="eew-anim"
                    cx={sh.x}
                    cy={sh.y}
                    r={NODE_SIZE + 6}
                    fill="none"
                    stroke={DATA[sh.id].color}
                    strokeWidth={1.8}
                    strokeDasharray="3 6"
                    pointerEvents="none"
                    style={{ transformOrigin: "center", transformBox: "fill-box", animation: "eewSpin 30s linear infinite, eewHalo 3.4s ease-in-out infinite" }}
                  />
                )}
                {body(sh)}
                {sh.kind === "node" && nodeLabel(sh)}
              </g>
            ))}

            {overlayIds.map(overlay)}

            {/* headline texts */}
            <ArcLabel id="eew-title-arc" text="ENABLING ECOSYSTEM" size={21} spacing={3} fill="#17365F" />
            {/* tags sit on top of the dividing line, so the words are never cut in two */}
            <g pointerEvents="none">
              <rect x={CX - 92} y={166} width={184} height={28} rx={14} fill="#fff" fillOpacity={0.94} />
              <text x={CX} y={180} textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={700} fill="#0B2545">
                Programme Interventions
              </text>
            </g>
            <ArcLabel id="eew-cross-title-arc" text="CROSS-CUTTING PRINCIPLES" size={11.5} spacing={1.1} fill="#1E5A2A" />
            <g pointerEvents="none">
              <rect x={CX - 36} y={288} width={72} height={17} rx={8.5} fill="#fff" fillOpacity={0.94} />
              <text x={CX} y={296.5} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight={700} letterSpacing={1.6} fill="#16365F">
                LIFESKILLS
              </text>
            </g>
            <ArcLabel id="eew-cross-words-arc" text="Gender Transformation  ·  Inclusion  ·  Equity  ·  Safety" size={10.5} weight={600} fill="#1E5A2A" />
          </svg>
        </div>

        <div className="md:sticky md:top-24 space-y-3">
          <div
            className="relative overflow-hidden rounded-2xl border p-3 md:p-4 shadow-md transition-colors"
            style={{ background: `linear-gradient(135deg, ${info.color}26 0%, #ffffff 65%)`, borderColor: `${info.color}55` }}
          >
            <div className="absolute inset-x-0 top-0 h-2 transition-colors" style={{ background: info.color }} />
            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-slate-900">{info.title}</h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-md" style={{ background: info.color, color: "#fff" }}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-5 text-slate-700">{info.desc}</p>
          </div>

          {info.modules.length > 0 && (
            <div className="space-y-3 rounded-2xl border p-3 md:p-4 shadow-sm transition-colors" style={{ background: `${info.color}0F`, borderColor: `${info.color}33` }}>
              <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-slate-900">
                <ListChecks className="h-5 w-5" style={{ color: info.color }} />
                {info.listTitle}
              </h4>
              <ol className="flex flex-col gap-2">
                {info.modules.map(([name, text], i) => {
                  const expandable = Boolean(text);
                  const isOpen = expandable && openIdx === i;
                  return (
                    <li
                      key={name}
                      className="rounded-xl bg-white shadow-sm transition hover:shadow-md"
                      style={{ borderLeft: `4px solid ${info.color}` }}
                    >
                      <button
                        type="button"
                        disabled={!expandable}
                        aria-expanded={expandable ? isOpen : undefined}
                        onClick={() => setOpen({ id: activeId, i: isOpen ? -1 : i })}
                        className={`flex w-full items-center gap-3 p-2 md:p-2.5 text-left ${expandable ? "cursor-pointer" : "cursor-default"}`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ background: info.color, color: "#fff" }}>
                          {i + 1}
                        </span>
                        <span className="flex-1 text-sm md:text-base font-bold leading-snug text-slate-900">{name}</span>
                        {expandable && <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                      </button>
                      {isOpen && <p className="px-3 pb-3 pl-[3.25rem] text-xs md:text-[13px] leading-snug text-slate-600">{text}</p>}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </div>

      <div className="mt-14">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Continuous growth arc</p>
        <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900">Learner progression: from play to future ready citizens</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {STAGES.map((s) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center rounded-2xl border-2 p-5 text-center shadow-sm lg:flex-1" style={{ background: s.bg, borderColor: s.border }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow" style={{ background: s.c }}>
                  <s.Icon className="h-6 w-6" />
                </span>
                <h4 className="mt-3 text-xl font-bold text-slate-900">{s.name}</h4>
                <span className="mt-2 rounded-full px-3 py-0.5 text-sm font-bold text-white" style={{ background: s.c }}>
                  {s.grades}
                </span>
                <p className="mt-3 flex-1 text-sm leading-snug text-slate-600">{s.desc}</p>
                <p className="mt-3 text-sm font-semibold text-slate-800">{s.mantra}</p>
              </div>
              <div className="hidden items-center px-2 lg:flex" aria-hidden="true">
                <ArrowRight className="h-6 w-6" style={{ color: s.c }} />
              </div>
            </React.Fragment>
          ))}
          <div className="flex flex-col items-center rounded-2xl border-2 p-5 text-center shadow-sm sm:col-span-2 lg:flex-1" style={{ background: "#F1EBFA", borderColor: "#C9B5E8" }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow" style={{ background: "#7B52B8" }}>
              <PersonStanding className="h-6 w-6" />
            </span>
            <h4 className="mt-3 text-xl font-bold text-slate-900">Future Ready Citizens</h4>
            <p className="mt-3 text-sm leading-snug text-slate-600">Young adults who move into jobs or higher education with confidence and life skills.</p>
          </div>
        </div>
        <div className="mt-5 rounded-full bg-gradient-to-r from-[#2B6CA8] to-[#1F4E8C] px-6 py-3 text-center text-sm font-semibold text-white shadow md:text-base">
          Equitable opportunities &nbsp;·&nbsp; Lifelong learning &nbsp;·&nbsp; Stronger communities &nbsp;·&nbsp; A more inclusive future
        </div>
      </div>
    </div>
  );
}
