import React, { useState } from "react";
import {
  Landmark, Users, School, Handshake, Brain, Smile, Sprout, BookOpen, Trophy, ShieldPlus, ListChecks,
  Sparkles, Globe2, Rocket, Bike, ArrowRight, PersonStanding,
} from "lucide-react";

// Built from the updated "Enabling Ecosystem" diagram.
// DRAFT COPY: the one-line descriptions are working wording and must be confirmed by the
// programme team before publishing. Names, numbered items and the headline texts come from the diagram.
const DATA = {
  hub: {
    title: "Holistic Development",
    category: "Core",
    layer: "Centre of the wheel",
    color: "#A16207",
    desc: "The heart of the framework. Every life skill and every intervention is built around the holistic development of young people: wellbeing, agency and empowerment, and gender equity.",
    modules: [
      ["Wellbeing", "Safe spaces, first-aid for stress and supportive peers."],
      ["Agency & Empowerment", "Helping children express their aspirations and take part in decisions about their future."],
      ["Gender Equity", "Equal leadership opportunities and challenging gender stereotypes."],
    ],
  },
  lifeskills: {
    title: "Life Skills Framework",
    category: "Lifeskills",
    layer: "Inner circle",
    color: "#16365F",
    desc: "The skills every adolescent builds, in three groups: Cognitive, Social and Emotional. Select one of them on the wheel to see its skills.",
    modules: [
      ["Cognitive", "Problem solving, decision making, critical thinking and self-management."],
      ["Social", "Empathy, assertiveness, negotiation, communication and collaboration."],
      ["Emotional", "Self-awareness and adaptability."],
    ],
  },
  cognitive: {
    title: "Cognitive",
    category: "Lifeskills",
    layer: "Life Skills Framework",
    color: "#4F46E5",
    desc: "Thinking skills that help adolescents process information, assess situations and steer their own choices.",
    modules: [
      ["Problem Solving", "Recognising bottlenecks, reasoning to root causes, and forming practical step-by-step action plans."],
      ["Decision Making", "Weighing alternatives and consequences, and resisting risky impulsive behaviour under pressure."],
      ["Critical Thinking", "Questioning information and weighing evidence before forming a view."],
      ["Self-Management", "Goal setting, time management, discipline, focus and personal responsibility."],
    ],
  },
  emotional: {
    title: "Emotional",
    category: "Lifeskills",
    layer: "Life Skills Framework",
    color: "#047857",
    desc: "Self-awareness tools that help young people understand stress, manage reactions and build inner strength.",
    modules: [
      ["Self-Awareness", "Understanding personal strengths, identity, triggers and self-worth."],
      ["Adaptability", "Coping with change and hardship, and bouncing back from setbacks."],
    ],
  },
  social: {
    title: "Social",
    category: "Lifeskills",
    layer: "Life Skills Framework",
    color: "#E11D48",
    desc: "Interpersonal skills that help young people build healthy relationships, resolve differences constructively and speak up for their future.",
    modules: [
      ["Empathy", "Recognising emotions in peers, taking other perspectives and supporting others."],
      ["Assertiveness", "Saying no to peer pressure and speaking up safely for personal rights."],
      ["Negotiation", "Constructive dialogue skills, such as speaking with parents about continuing education."],
      ["Communication", "Expressing ideas clearly and listening well, in person and at work."],
      ["Collaboration", "Teamwork on the field and in group work, with shared accountability."],
    ],
  },
  sports: {
    title: "Sports Ecosystem",
    category: "Programme Interventions",
    layer: "Outer ring",
    color: "#E0670C",
    desc: "Learning through play: the playground becomes a space for teamwork, confidence and breaking down gender barriers.",
    modules: [
      ["Sports for Development", "Play-based sessions that build life skills, teamwork and confidence."],
      ["Sports for Excellence", "Coaching and pathways for young people who want to compete and grow in sport."],
      ["Sports for Employability", "Building discipline, fitness, punctuality and team accountability for work."],
      ["S4D Fellowship", "A fellowship that supports young people to grow as leaders through sport."],
    ],
  },
  academic: {
    title: "Academic",
    category: "Programme Interventions",
    layer: "Outer ring",
    color: "#3F8F2B",
    desc: "Learning support that strengthens foundations, helps prevent dropout at key transitions and builds confidence in STEAM.",
    modules: [
      ["FLN / CLC", "Support to build foundational literacy and numeracy (FLN)."],
      ["Academic Support", "Tutoring and study support that helps young people stay on track in school."],
      ["Remedial Learning", "Catch-up support for young people who have fallen behind."],
      ["STEAM", "Hands-on learning in science, technology, engineering, arts and maths."],
    ],
  },
  future: {
    title: "Future Readiness and Employability",
    category: "Programme Interventions",
    layer: "Outer ring",
    color: "#0F7F96",
    desc: "Forward-looking skills that prepare adolescents for the modern economy, digital workplaces and green livelihoods.",
    modules: [
      ["Digital & AI", "Using digital tools, staying safe online, and understanding the basics of AI."],
      ["Green Skills", "Environmental awareness, resource efficiency and local sustainability action."],
      ["Career Exploration", "Matching interests to career paths, and preparing a resume."],
      ["Financial Literacy", "Banking basics, budgeting, and safe digital transactions."],
      ["Entrepreneurial Mindset", "Creating value, spotting local micro-enterprise needs and understanding customers."],
    ],
  },
  cross: {
    title: "Cross-Cutting Principles",
    category: "Principles",
    layer: "Run through every intervention",
    color: "#2F7D32",
    desc: "Four principles that run through every part of the wheel: gender transformative, inclusive, equitable and safe.",
    modules: [
      ["Gender Transformative", "Challenging stereotypes so girls and boys have equal opportunities."],
      ["Inclusive", "Making sure every young person can take part, including those at the margins."],
      ["Equitable", "Fair access to opportunities, support and resources."],
      ["Safe", "Keeping young people safe in every programme space."],
    ],
  },
  ecosystem: {
    title: "Enabling Ecosystem",
    category: "Enabling Ecosystem",
    layer: "Outer circle",
    color: "#2A6DB0",
    desc: "Enabling equitable access, participation, agency and supportive environments: the systems and people around a young person that make the programme work.",
    modules: [
      ["Government Systems", "Working with state education departments and public systems so that the programme lasts."],
      ["Community Systems", "Parents, school management committees and village youth champions."],
      ["School Leadership & Teachers", "Principals and teachers who create the daily environment where life skills are practised."],
      ["Collaborators", "Partners, funders, researchers and employers who help the programme reach more young people."],
    ],
  },
  govt: {
    title: "Government Systems",
    category: "Enabling Ecosystem",
    layer: "Outer circle",
    color: "#1F4E8C",
    desc: "Working with state education departments and public systems so that the programme lasts.",
    modules: [
      ["Curricular Policy Integration", "Aligning life skills with national and state education guidelines."],
      ["State Teacher Training", "Training government school teachers through master-trainer modules."],
      ["Public System Institutionalisation", "Building government ownership so the work can scale over time."],
    ],
  },
  community: {
    title: "Community Systems",
    category: "Enabling Ecosystem",
    layer: "Outer circle",
    color: "#3F9142",
    desc: "The people around a young person outside school: parents, school management committees and village youth champions.",
    modules: [
      ["Parental Engagement", "Workshops on the value of keeping girls in education."],
      ["School Management Committees", "Mobilising local oversight for school safety, sanitation and quality."],
      ["Community Youth Leaders", "Local youth who act as mentors and role models."],
    ],
  },
  school: {
    title: "School Leadership & Teachers",
    category: "Enabling Ecosystem",
    layer: "Outer circle",
    color: "#D9700B",
    desc: "Principals and teachers who create the daily environment where life skills are practised and reinforced.",
    modules: [
      ["Teacher Capacity Building", "Positive, non-punitive classroom management strategies."],
      ["Pedagogic Co-delivery", "Teachers and Magic Bus youth leaders running sessions together."],
      ["Attendance & Dropout Tracking", "Early warning follow-up for students at risk of missing school."],
    ],
  },
  collaboratives: {
    title: "Collaborators",
    category: "Enabling Ecosystem",
    layer: "Outer circle",
    color: "#7B52B8",
    desc: "Partners, funders, researchers and employers who work with Magic Bus to help the programme reach and support more young people.",
    modules: [
      ["CSR Governance & Funding", "Audited partnerships that deliver measured impact."],
      ["Independent Impact Evaluation", "Third-party assessment of outcomes."],
      ["Employer Placement Consortia", "Links to employers offering first jobs for graduating youth."],
    ],
  },
};

const ICONS = {
  hub: Sprout,
  lifeskills: Sparkles,
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

const STAGES = [
  { id: "explorer", name: "Explorer", grades: "Grade 3–5", desc: "Sparking curiosity through guided playground activities, peer discovery and emotional expression.", mantra: "Play · Ask · Discover", Icon: Bike, c: "#E8830F", bg: "#FFF3E3", border: "#F5C48A" },
  { id: "learner", name: "Learner", grades: "Grade 6–8", desc: "Deepening active listening, classroom habits, resilience and personal accountability.", mantra: "Listen · Learn · Explore", Icon: BookOpen, c: "#C98F08", bg: "#FFF8E0", border: "#F1D77F" },
  { id: "thinker", name: "Thinker", grades: "Grade 9–10", desc: "Analytical problem-solving, self-awareness and resisting pressures to drop out.", mantra: "Think · Create · Apply", Icon: Brain, c: "#3E9A47", bg: "#EAF6EA", border: "#A9D6AC" },
  { id: "collaborator", name: "Collaborator", grades: "Grade 11–12", desc: "Negotiation, group work, career stream selection, digital literacy and community action.", mantra: "Ideate · Adapt · Connect", Icon: Users, c: "#2E7FC1", bg: "#E8F2FB", border: "#A8CBE8" },
];

// Filter pills: focus one part of the wheel.
const GROUPS = {
  all: { label: "Complete Wheel", ids: null, first: "hub" },
  core: { label: "Life Skills", ids: ["lifeskills", "cognitive", "emotional", "social"], first: "lifeskills" },
  interventions: { label: "Interventions", ids: ["sports", "academic", "future"], first: "sports" },
  systems: { label: "Enabling Ecosystem", ids: ["ecosystem", "govt", "community", "school", "collaboratives"], first: "ecosystem" },
};
const FILTER_KEYS = Object.keys(GROUPS);
const CENTRE_IDS = ["hub", "cross"]; // always shown at full strength
const QUICK_GROUPS = { centre: CENTRE_IDS, core: GROUPS.core.ids, interventions: GROUPS.interventions.ids, systems: GROUPS.systems.ids };
const groupOf = (id) => Object.keys(QUICK_GROUPS).find((k) => QUICK_GROUPS[k].includes(id));
const SHORT = {
  hub: "Holistic Development",
  cross: "Cross-Cutting",
  lifeskills: "Life Skills Framework",
  future: "Future Readiness",
  govt: "Government",
  community: "Community",
  school: "School & Teachers",
  collaboratives: "Collaborators",
};
const GLOW = { cross: "#4C9A2A", lifeskills: "#3B82F6", hub: "#D4A017" };
const OUTLINE = { ecosystem: "#2A6DB0", lifeskills: "#60A5FA" };

// ---- geometry (viewBox 800 x 800) ----
const CX = 400;
const CY = 400;
const R_OUT = 395; // pale blue Enabling Ecosystem circle
const R_INT = 262; // outer edge of the programme sectors
const R_SEC_IN = 164; // inner edge of the sectors
const R_CROSS_IN = 120; // cross-cutting ring (inner edge)
const R_NAVY = 120; // life skills circle
const HUB_X = 400;
const HUB_Y = 436;
const HUB_R = 62;
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

const PILLS = [
  { id: "cognitive", label: "Cognitive", w: 68 },
  { id: "social", label: "Social", w: 50 },
  { id: "emotional", label: "Emotional", w: 68 },
];
const PILL_GAP = 6;
const PILL_Y = 358;
const PILL_H = 20;

export default function EnablingEcosystemWheel() {
  const [pinned, setPinned] = useState("lifeskills");
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter] = useState("all");
  const activeId = hovered || pinned;
  const info = DATA[activeId];
  const Icon = ICONS[activeId];
  const glowOf = (id) => GLOW[id] || DATA[id].color;

  const isDimmed = (id) => filter !== "all" && !CENTRE_IDS.includes(id) && !GROUPS[filter].ids.includes(id);

  const pin = (id) => {
    setPinned(id);
    const g = groupOf(id);
    // Clicking something outside the focused group moves the focus to that group.
    if (filter !== "all" && FILTER_KEYS.includes(g) && g !== filter) setFilter(g);
  };

  const chooseFilter = (key) => {
    setFilter(key);
    setPinned(GROUPS[key].first);
    setHovered(null);
  };

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
    style: { cursor: "pointer", outline: "none", opacity: isDimmed(id) ? 0.38 : 1, transition: "opacity .3s ease" },
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
    { id: "lifeskills", kind: "disc", r: R_NAVY },
  ];
  const HIGH = [
    { id: "hub", kind: "hub" },
    { id: "govt", kind: "node", x: govtX, y: govtY, Icon: Landmark, lines: ["Government", "Systems"], lx: -8 },
    { id: "community", kind: "node", x: commX, y: commY, Icon: Users, lines: ["Community", "Systems"], lx: 8 },
    { id: "collaboratives", kind: "node", x: collX, y: collY, Icon: Handshake, lines: ["Collaborators"], lx: -22 },
    { id: "school", kind: "node", x: schoolX, y: schoolY, Icon: School, lines: ["School Leadership", "& Teachers"], lx: 36 },
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
    if (sh.kind === "disc") {
      return (
        <>
          <circle cx={CX} cy={CY} r={sh.r} fill="#16365F" stroke="#fff" strokeWidth={3} />
          <Lines x={CX} y={318} lines={["Life Skills", "Framework"]} size={16} />
        </>
      );
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
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R} fill="#FDF3D8" stroke="#E9D9A6" strokeWidth={3} />
          <Sprout x={HUB_X - 12} y={HUB_Y - 40} width={24} height={24} color="#3E9A47" strokeWidth={2} />
          <Lines x={HUB_X} y={HUB_Y + 10} lines={["Holistic", "Development"]} size={14} color="#16365F" />
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

  const overlayIds = [...new Set([pinned, hovered].filter(Boolean))].filter((id) => !PILLS.some((p) => p.id === id));

  const pillTotal = PILLS.reduce((s, p) => s + p.w, 0) + PILL_GAP * (PILLS.length - 1);
  let px = CX - pillTotal / 2;
  const pillsLaidOut = PILLS.map((p) => {
    const x = px;
    px += p.w + PILL_GAP;
    return { ...p, x };
  });

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

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
        <div className="relative overflow-hidden rounded-3xl bg-white border shadow-sm p-2 md:p-4">
          {/* soft glow behind the wheel that follows the colour of the active piece */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[56%] aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: glowOf(activeId), filter: "blur(70px)", opacity: hovered ? 0.26 : 0.16, transition: "background .5s ease, opacity .4s ease" }}
          />

          <div className="relative z-10 mb-2 flex flex-wrap gap-2 px-1 pt-1" role="group" aria-label="Focus the wheel">
            {FILTER_KEYS.map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={filter === k}
                onClick={() => chooseFilter(k)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === k ? "bg-slate-900 text-white shadow" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {GROUPS[k].label}
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
              <path id="eew-sub-arc" d={topArc(343)} />
              <path id="eew-list-arc" d={topArc(322)} />
              <path id="eew-prog-arc" d={topArc(241)} />
              <path id="eew-cross-title-arc" d={topArc(148)} />
              <path id="eew-cross-words-arc" d={topArc(129)} />
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

            {/* Cognitive / Social / Emotional sit inside the Life Skills circle and can be selected one by one */}
            {pillsLaidOut.map((p) => {
              const on = pinned === p.id || hovered === p.id;
              return (
                <g key={p.id} {...props(p.id)}>
                  <rect
                    x={p.x}
                    y={PILL_Y - PILL_H / 2}
                    width={p.w}
                    height={PILL_H}
                    rx={PILL_H / 2}
                    fill={on ? "#fff" : "rgba(255,255,255,0.14)"}
                    stroke={on ? "#fff" : "rgba(255,255,255,0.5)"}
                    strokeWidth={1}
                    style={{ transition: "fill .2s ease" }}
                  />
                  <text x={p.x + p.w / 2} y={PILL_Y} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={700} fill={on ? "#16365F" : "#fff"} pointerEvents="none">
                    {p.label}
                  </text>
                </g>
              );
            })}

            {overlayIds.map(overlay)}

            {/* headline texts */}
            <g style={{ opacity: isDimmed("ecosystem") ? 0.38 : 1, transition: "opacity .3s ease" }}>
              <ArcLabel id="eew-title-arc" text="ENABLING ECOSYSTEM" size={21} spacing={3} fill="#17365F" />
              <ArcLabel id="eew-sub-arc" text="Enabling equitable access, participation, agency and supportive environments." size={11} weight={600} fill="#2F5580" />
              <ArcLabel id="eew-list-arc" text="Government Systems  ·  Community Systems  ·  Schools & Teachers  ·  Collaborators" size={11} weight={600} fill="#2F5580" />
            </g>
            <g style={{ opacity: GROUPS[filter].ids && !GROUPS[filter].ids.includes("sports") ? 0.38 : 1, transition: "opacity .3s ease" }}>
              <ArcLabel id="eew-prog-arc" text="Programme Interventions" size={15} spacing={0.6} fill="#0B2545" />
            </g>
            <ArcLabel id="eew-cross-title-arc" text="CROSS-CUTTING PRINCIPLES" size={11.5} spacing={1.1} fill="#1E5A2A" />
            <ArcLabel id="eew-cross-words-arc" text="Gender Transformative  ·  Inclusive  ·  Equitable  ·  Safe" size={10.5} weight={600} fill="#1E5A2A" />
          </svg>
        </div>

        <div className="md:sticky md:top-32 space-y-5">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Jump to">
            {QUICK_GROUPS[groupOf(pinned)].map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={pinned === id}
                onClick={() => pin(id)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                  pinned === id ? "bg-white text-slate-900 shadow" : "bg-white/60 text-slate-600 hover:bg-white"
                }`}
                style={{ borderColor: pinned === id ? DATA[id].color : "#e2e8f0" }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: DATA[id].color }} />
                {SHORT[id] || DATA[id].title}
              </button>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-3xl border p-6 md:p-8 shadow-md transition-colors"
            style={{ background: `linear-gradient(135deg, ${info.color}26 0%, #ffffff 65%)`, borderColor: `${info.color}55` }}
          >
            <div className="absolute inset-x-0 top-0 h-2 transition-colors" style={{ background: info.color }} />
            <div className="flex items-start justify-between gap-4 pt-1">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-3 py-1 text-xs md:text-sm font-bold" style={{ background: info.color, color: "#fff" }}>
                    {info.category}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-slate-600">{info.layer}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-900">{info.title}</h3>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md" style={{ background: info.color, color: "#fff" }}>
                <Icon className="h-7 w-7" />
              </div>
            </div>
            <p className="mt-5 text-lg md:text-xl leading-8 text-slate-700">{info.desc}</p>
          </div>

          <div className="space-y-4 rounded-3xl border p-5 md:p-6 shadow-sm transition-colors" style={{ background: `${info.color}0F`, borderColor: `${info.color}33` }}>
            <div className="flex items-center justify-between gap-3">
              <h4 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-slate-900">
                <ListChecks className="h-6 w-6" style={{ color: info.color }} />
                Core Competencies &amp; Modules
              </h4>
              <span className="shrink-0 rounded-full px-3 py-1 text-xs md:text-sm font-bold" style={{ background: info.color, color: "#fff" }}>
                {info.modules.length} Components
              </span>
            </div>
            <ol className="flex flex-col gap-3">
              {info.modules.map(([name, text], i) => (
                <li
                  key={name}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 md:p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderLeft: `6px solid ${info.color}` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold" style={{ background: info.color, color: "#fff" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-bold leading-snug text-slate-900">{name}</p>
                    <p className="mt-1 text-base md:text-lg leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
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
