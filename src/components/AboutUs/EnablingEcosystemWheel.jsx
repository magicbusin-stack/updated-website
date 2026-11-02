import React, { useState } from "react";
import { Landmark, Users, School, Handshake, Brain, Smile, Rocket, BookOpen, Trophy, ShieldPlus, Heart, ListChecks } from "lucide-react";

// DRAFT COPY: descriptions come from a Stitch design mock-up and must be confirmed
// by the programme team before publishing. Statistics were deliberately left out.
const DATA = {
  cognitive: {
    title: "Cognitive Competencies",
    category: "Core Life Skills",
    layer: "Inner Ring",
    color: "#2563EB",
    desc: "Foundational thinking skills that help adolescents process information, assess situations critically and steer their own choices.",
    modules: [
      ["Problem Solving", "Recognising bottlenecks, reasoning to root causes, and forming practical step-by-step action plans."],
      ["Decision Making", "Weighing alternatives and consequences, and resisting risky impulsive behaviour under pressure."],
      ["Creative Thinking", "Thinking laterally and designing new solutions to everyday challenges in the community."],
      ["Self-Management", "Goal setting, time management, discipline, focus and personal responsibility."],
    ],
  },
  social: {
    title: "Social Competencies",
    category: "Core Life Skills",
    layer: "Inner Ring",
    color: "#F59E0B",
    text: "#1f2937",
    desc: "Interpersonal skills that help young people build healthy relationships, resolve differences constructively and speak up for their future.",
    modules: [
      ["Empathy", "Recognising emotions in peers, taking other perspectives and supporting others."],
      ["Negotiation", "Constructive dialogue skills, such as speaking with parents about continuing education."],
      ["Communication", "Expressing ideas clearly, active listening and respectful discussion."],
      ["Assertiveness", "Saying no to peer pressure and speaking up safely for personal rights."],
      ["Collaboration", "Teamwork on the field and in group work, with shared accountability."],
    ],
  },
  emotional: {
    title: "Emotional Competencies",
    category: "Core Life Skills",
    layer: "Inner Ring",
    color: "#84CC16",
    text: "#1f2937",
    desc: "Self-awareness tools that help young people understand stress, manage reactions and build inner strength.",
    modules: [
      ["Self-Awareness", "Understanding personal strengths, identity, triggers and self-worth."],
      ["Adaptability & Resilience", "Coping with disruption and hardship, and bouncing back from setbacks."],
    ],
  },
  future: {
    title: "Future Skills Domain",
    category: "Application Domain",
    layer: "Outer Ring - Top",
    color: "#0D9488",
    desc: "Forward-looking skills that prepare adolescents for the modern economy, digital workplaces and green livelihoods.",
    modules: [
      ["Digital Literacy & AI Basics", "Using digital tools, staying safe online, basic spreadsheets and research."],
      ["Entrepreneurial Mindset", "Creating value, spotting local micro-enterprise needs and understanding customers."],
      ["Career Exploration", "Matching interests to career paths, and preparing a resume."],
      ["Green Skills", "Environmental awareness, resource efficiency and local sustainability action."],
      ["Financial Literacy", "Banking basics, budgeting, and safe digital transactions."],
    ],
  },
  academic: {
    title: "Academic Domain",
    category: "Application Domain",
    layer: "Outer Ring - Right",
    color: "#EA580C",
    desc: "Learning support that strengthens foundations, helps prevent dropout at key transitions and builds confidence in STEM.",
    modules: [
      ["Academic Support & Remediation", "Tutoring, bridging for learning gaps and peer study groups."],
      ["Academic Retention & STEM", "Supporting students through grade transitions, with confidence in maths and science."],
    ],
  },
  sports: {
    title: "Sports Domain (S4E)",
    category: "Application Domain",
    layer: "Outer Ring - Bottom",
    color: "#DC2626",
    desc: "Learning through play: the playground becomes a space for teamwork, confidence and breaking down gender barriers.",
    modules: [
      ["S4E (Sports for Empowerment)", "Games designed to reflect real-life situations and gender equality."],
      ["Sports for Employability", "Building discipline, fitness, punctuality and team accountability."],
      ["Fellowship & Tournaments", "Matches between communities that build friendship, inclusion and pride."],
    ],
  },
  wellbeing: {
    title: "Well-being & Safety Domain",
    category: "Application Domain",
    layer: "Outer Ring - Left",
    color: "#059669",
    desc: "Health and safety awareness so that adolescents grow up secure, dignified and well nourished.",
    modules: [
      ["Protection & Hygiene", "Menstrual health, WASH awareness, sanitation and child protection."],
      ["SRHR (Health & Rights)", "Age-appropriate reproductive health, bodily autonomy and consent."],
      ["Nutrition Management", "Nutrition awareness, tackling anaemia and balanced eating habits."],
    ],
  },
  hub: {
    title: "Well-being, Empowerment & Gender Equity",
    category: "Core Anchor",
    layer: "Centre of the wheel",
    color: "#E12228",
    desc: "The heart of the framework. Every life skill and every partnership is anchored here, so that every child has equal opportunity.",
    modules: [
      ["Gender Transformative Practice", "Equal leadership opportunities and challenging gender stereotypes."],
      ["Child Agency & Voice", "Helping children express their aspirations and take part in decisions about their future."],
      ["Holistic Mental Well-being", "Safe spaces, first-aid for stress and supportive peers."],
    ],
  },
  govt: {
    title: "Government System",
    category: "Enabling Ecosystem",
    layer: "Orbit - Top Left",
    color: "#1E293B",
    desc: "Working with state education departments and public systems so that the programme lasts.",
    modules: [
      ["Curricular Policy Integration", "Aligning life skills with national and state education guidelines."],
      ["State Teacher Training", "Training government school teachers through master-trainer modules."],
      ["Public System Institutionalisation", "Building government ownership so the work can scale over time."],
    ],
  },
  school: {
    title: "School Leadership & Teachers",
    category: "Enabling Ecosystem",
    layer: "Orbit - Bottom Left",
    color: "#EA580C",
    desc: "Principals and teachers who create the daily environment where life skills are practised and reinforced.",
    modules: [
      ["Teacher Capacity Building", "Positive, non-punitive classroom management strategies."],
      ["Pedagogic Co-delivery", "Teachers and Magic Bus youth leaders running sessions together."],
      ["Attendance & Dropout Tracking", "Early warning follow-up for students at risk of missing school."],
    ],
  },
  community: {
    title: "Community System",
    category: "Enabling Ecosystem",
    layer: "Orbit - Top Right",
    color: "#15803D",
    desc: "The people around a young person outside school: parents, school management committees and village youth champions.",
    modules: [
      ["Parental Engagement", "Workshops on the value of keeping girls in education."],
      ["School Management Committees", "Mobilising local oversight for school safety, sanitation and quality."],
      ["Community Youth Leaders", "Local youth who act as mentors and role models."],
    ],
  },
  partners: {
    title: "Partner Organisations",
    category: "Enabling Ecosystem",
    layer: "Orbit - Bottom Right",
    color: "#4338CA",
    desc: "CSR partners, foundations, researchers and employers who help the programme reach and support more young people.",
    modules: [
      ["CSR Governance & Funding", "Audited partnerships that deliver measured impact."],
      ["Independent Impact Evaluation", "Third-party assessment of outcomes."],
      ["Employer Placement Consortia", "Links to employers offering first jobs for graduating youth."],
    ],
  },
};

// Icon and readable dark text colour for each item (used in the info panel).
// To show Stitch-style stat cards, add  stats: [["Label", "Value", "Description"], ...]  to an item
// in DATA above, using ONLY figures the programme team has confirmed.
const META = {
  cognitive: { Icon: Brain, ink: "#1D4ED8", chip: "Cognitive" },
  social: { Icon: Users, ink: "#B45309", chip: "Social" },
  emotional: { Icon: Smile, ink: "#4D7C0F", chip: "Emotional" },
  future: { Icon: Rocket, ink: "#0F766E", chip: "Future Skills" },
  academic: { Icon: BookOpen, ink: "#C2410C", chip: "Academics" },
  sports: { Icon: Trophy, ink: "#B91C1C", chip: "Sports (S4E)" },
  wellbeing: { Icon: ShieldPlus, ink: "#047857", chip: "Well-being" },
  hub: { Icon: Heart, ink: "#B91C1C", chip: "Centre Core" },
  govt: { Icon: Landmark, ink: "#1E293B" },
  school: { Icon: School, ink: "#C2410C" },
  community: { Icon: Users, ink: "#166534" },
  partners: { Icon: Handshake, ink: "#4338CA" },
};

const STAGES = [
  { id: "explorer", name: "Explorer", grades: "Grades 5 - 6", desc: "Sparking curiosity through guided playground activities, peer discovery and emotional expression.", mantra: "Play - Ask - Discover" },
  { id: "learner", name: "Learner", grades: "Grades 7 - 8", desc: "Deepening active listening, classroom habits, resilience and personal accountability.", mantra: "Listen - Learn - Explore" },
  { id: "thinker", name: "Thinker", grades: "Grades 9 - 10", desc: "Analytical problem-solving, self-awareness and resisting pressures to drop out.", mantra: "Think - Create - Apply" },
  { id: "collaborator", name: "Collaborator", grades: "Grades 10 - 12", desc: "Negotiation, group work, career stream selection, digital literacy and community action.", mantra: "Debate - Adapt - Connect" },
];

const CX = 350;
const CY = 350;
const NODE_R = 305;

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

export default function EnablingEcosystemWheel() {
  const [pinned, setPinned] = useState("cognitive");
  const [hovered, setHovered] = useState(null);
  const activeId = hovered || pinned;
  const info = DATA[activeId];
  const meta = META[activeId];
  const isPreview = hovered && hovered !== pinned;
  const props = (id) => ({
    role: "button",
    tabIndex: 0,
    "aria-label": DATA[id].title,
    "aria-pressed": pinned === id,
    onClick: () => setPinned(id),
    onMouseEnter: () => canHover() && setHovered(id),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered(null),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setPinned(id);
      }
    },
    style: { cursor: "pointer", outline: "none" },
  });

  const [govtX, govtY] = pt(NODE_R, -45);
  const [commX, commY] = pt(NODE_R, 45);
  const [partX, partY] = pt(NODE_R, 135);
  const [schoolX, schoolY] = pt(NODE_R, -135);

  const SHAPES = [
    { id: "social", kind: "ring", r1: 72, r2: 160, a0: 0, a1: 120, lines: ["Social"], size: 22 },
    { id: "emotional", kind: "ring", r1: 72, r2: 160, a0: 120, a1: 240, lines: ["Emotional"], size: 22 },
    { id: "cognitive", kind: "ring", r1: 72, r2: 160, a0: 240, a1: 360, lines: ["Cognitive"], size: 22 },
    { id: "future", kind: "ring", r1: 168, r2: 264, a0: -45, a1: 45, lines: ["Future", "Skills"], size: 21 },
    { id: "academic", kind: "ring", r1: 168, r2: 264, a0: 45, a1: 135, lines: ["Academic", "Domain"], size: 18 },
    { id: "sports", kind: "ring", r1: 168, r2: 264, a0: 135, a1: 225, lines: ["Sports", "Domain"], size: 21 },
    { id: "wellbeing", kind: "ring", r1: 168, r2: 264, a0: 225, a1: 315, lines: ["Well-being", "& Safety"], size: 16.5 },
    { id: "hub", kind: "hub" },
    { id: "govt", kind: "node", x: govtX, y: govtY, Icon: Landmark, lines: ["Government", "System"], above: true },
    { id: "community", kind: "node", x: commX, y: commY, Icon: Users, lines: ["Community", "System"], above: true },
    { id: "partners", kind: "node", x: partX, y: partY, Icon: Handshake, lines: ["Partner", "Organisations"], above: false },
    { id: "school", kind: "node", x: schoolX, y: schoolY, Icon: School, lines: ["School Leadership", "& Teachers"], above: false },
  ];

  const originOf = (sh) => {
    if (sh.kind === "ring") return pt((sh.r1 + sh.r2) / 2, (sh.a0 + sh.a1) / 2);
    if (sh.kind === "node") return [sh.x, sh.y];
    return [CX, CY];
  };

  const body = (sh) => {
    if (sh.kind === "ring") {
      const [lx, ly] = originOf(sh);
      return (
        <>
          <path d={sector(sh.r1, sh.r2, sh.a0, sh.a1)} fill={DATA[sh.id].color} stroke="#fff" strokeWidth={3} />
          <Lines x={lx} y={ly} lines={sh.lines} size={sh.size} color={DATA[sh.id].text || "#fff"} />
        </>
      );
    }
    if (sh.kind === "hub") {
      return (
        <>
          <circle cx={CX} cy={CY} r={66} fill="#fff" stroke="#e2e8f0" strokeWidth={3} />
          <Lines x={CX} y={CY} lines={["Well-being,", "Empowerment", "& Gender", "Equity"]} size={14} color="#334155" />
        </>
      );
    }
    return (
      <>
        <circle cx={sh.x} cy={sh.y} r={36} fill={DATA[sh.id].color} stroke="#fff" strokeWidth={3} />
        <sh.Icon x={sh.x - 17} y={sh.y - 17} width={34} height={34} color="#fff" strokeWidth={1.8} />
        <Lines x={sh.x} y={sh.above ? sh.y - 62 : sh.y + 62} lines={sh.lines} size={17} color="#1f2937" />
      </>
    );
  };

  // Enlarged copy drawn on top so a hovered piece can grow without being hidden by its neighbours.
  const overlay = (id) => {
    const sh = SHAPES.find((x) => x.id === id);
    const [ox, oy] = originOf(sh);
    const isPinned = pinned === id;
    const scale = hovered === id ? (sh.kind === "node" ? 1.14 : 1.07) : 1.04;
    return (
      <g
        key={`ov-${id}-${isPinned ? "p" : "h"}`}
        aria-hidden="true"
        pointerEvents="none"
        style={{
          "--s": scale,
          transformOrigin: `${ox}px ${oy}px`,
          transformBox: "view-box",
          animation: "eewPop .18s ease-out forwards",
          filter: isPinned ? "drop-shadow(0 0 8px rgba(225,34,40,0.6))" : "drop-shadow(0 0 9px rgba(37,99,235,0.55))",
        }}
      >
        {body(sh)}
      </g>
    );
  };

  const overlayIds = [...new Set([pinned, hovered].filter(Boolean))];

  const chips = ["cognitive", "social", "emotional", "future", "academic", "sports", "wellbeing", "hub"];

  return (
    <section id="ecosystem" className="py-14 bg-slate-50">
      <style>{"@keyframes eewPop{from{transform:scale(1)}to{transform:scale(var(--s))}}"}</style>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Childhood to Livelihood - Holistic Pedagogy</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-brand-black">The Enabling Ecosystem &amp; Life Skills Wheel</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Hover over any part of the wheel to preview it, and click to keep it open. On a phone, just tap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
          <div className="rounded-3xl bg-white border shadow-sm p-2 md:p-4">
            <svg
              viewBox="0 0 700 700"
              className="w-full h-auto"
              role="group"
              aria-label="Enabling Ecosystem wheel"
              onMouseLeave={() => setHovered(null)}
            >
              <circle cx={CX} cy={CY} r={NODE_R} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 8" />
              {SHAPES.map((sh) => (
                <g key={sh.id} {...props(sh.id)}>
                  {body(sh)}
                </g>
              ))}
              {overlayIds.map(overlay)}
            </svg>
          </div>
          </div>

          <div className="md:sticky md:top-32 space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-1.5 transition-colors" style={{ background: info.color }} />
              <div className="flex items-start justify-between gap-3 pt-1">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold" style={{ background: `${info.color}1A`, color: meta.ink }}>
                      {info.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{info.layer}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                      <span className={`h-2 w-2 rounded-full ${isPreview ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`} />
                      {isPreview ? "Hovered live" : "Pinned"}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">{info.title}</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm" style={{ background: `${info.color}1A`, color: info.color }}>
                  <meta.Icon className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-6 text-slate-600">{info.desc}</p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h4 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <ListChecks className="h-5 w-5 text-brand-red" />
                  Core Competencies &amp; Modules
                </h4>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                  {info.modules.length} Components
                </span>
              </div>
              <ol className="flex flex-col gap-2">
                {info.modules.map(([name, text], i) => (
                  <li key={name} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ background: `${info.color}1A`, color: meta.ink }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{name}</p>
                      <p className="text-sm leading-snug text-slate-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {info.stats && (
              <div className="grid grid-cols-2 gap-3">
                {info.stats.map(([label, value, text]) => (
                  <div key={label} className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="mt-1 text-2xl font-bold text-brand-red">{value}</p>
                    <p className="mt-1 text-xs leading-snug text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Inspect other domains</p>
                <p className="text-[10px] text-slate-400">Hover to preview</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2" aria-label="Choose a domain">
                {chips.map((id) => {
                  const on = activeId === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPinned(id)}
                      onMouseEnter={() => canHover() && setHovered(id)}
                      onMouseLeave={() => setHovered(null)}
                      aria-pressed={pinned === id}
                      className="rounded-full border px-3 py-1 text-xs font-semibold transition"
                      style={
                        on
                          ? { background: DATA[id].color, color: "#fff", borderColor: DATA[id].color }
                          : { background: `${DATA[id].color}14`, color: META[id].ink, borderColor: `${DATA[id].color}33` }
                      }
                    >
                      {META[id].chip}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Continuous growth arc</p>
          <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900">Learner progression: from play to sustained livelihoods</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <div key={s.id} className="rounded-2xl bg-white border shadow-sm p-5 flex flex-col">
                <div className="flex items-center justify-between text-xs text-gray-400 font-semibold">
                  <span>Stage {i + 1}</span>
                  <span className="rounded-full bg-orange-50 text-orange-700 px-2 py-0.5">{s.grades}</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-gray-900">{s.name}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-snug flex-1">{s.desc}</p>
                <p className="mt-4 pt-3 border-t text-xs font-bold text-brand-red">{s.mantra}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-black text-white p-5 flex flex-col">
              <span className="text-xs text-gray-400 font-semibold">Outcome</span>
              <h4 className="mt-3 text-lg font-bold">Work-Ready Citizens</h4>
              <p className="mt-2 text-sm text-gray-300 leading-snug flex-1">
                Young adults who move into jobs or higher education with confidence and life skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
