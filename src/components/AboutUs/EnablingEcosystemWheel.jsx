import React, { useState } from "react";
import { Landmark, Users, School, Handshake } from "lucide-react";

// NOTE: All descriptions below are draft copy based on the reference wheel.
// Please confirm wording with the programme team before publishing.
const DATA = {
  overview: {
    title: "Enabling Ecosystem",
    color: "#E12228",
    text: "Life skills are the base. Around them sit four domains that prepare young people for the future, supported by the people and systems around them. Select any part of the wheel to learn more.",
    items: [],
  },
  hub: {
    title: "Well-being, Empowerment & Gender Equity",
    color: "#64748B",
    text: "The centre of the wheel. Every skill and domain is built to support the well-being and empowerment of young people, with gender equity at the heart.",
    items: [],
  },
  cognitive: {
    title: "Cognitive",
    color: "#4A55A8",
    text: "Thinking skills that help young people analyse situations and make sound choices.",
    items: ["Problem Solving", "Decision Making", "Creative Thinking", "Self-Management"],
  },
  social: {
    title: "Social",
    color: "#F5A623",
    text: "Skills for working and living well with others.",
    items: ["Empathy", "Negotiation", "Communication", "Assertiveness", "Collaboration"],
  },
  emotional: {
    title: "Emotional",
    color: "#7CB342",
    text: "Understanding and managing one's own feelings and responding to change.",
    items: ["Self Awareness", "Adaptability"],
  },
  future: {
    title: "Future Skills",
    color: "#1E88C7",
    text: "Skills that prepare young people for the world of work and a changing economy.",
    items: ["Digital & AI", "Entrepreneurial Mindset", "Career Exploration", "Green Skills", "Financial Literacy"],
  },
  academic: {
    title: "Academic Domain",
    color: "#F39A2B",
    text: "Support that helps young people stay on track and do well in school.",
    items: ["Academic Support"],
  },
  sports: {
    title: "Sports Domain",
    color: "#E12228",
    text: "Sport is the heart of the Magic Bus method, used to build skills and confidence.",
    items: ["S4E", "Sports for Employability", "Fellowship"],
  },
  wellbeing: {
    title: "Well-being & Safety",
    color: "#2BA39B",
    text: "Keeping young people healthy, safe and supported.",
    items: ["Nutrition and Hygiene", "SRH", "Risk Management"],
  },
  govt: {
    title: "Government System",
    color: "#6B5B95",
    text: "Government departments and schemes that create the policy and public-service backdrop for young people.",
    items: [],
  },
  community: {
    title: "Community System",
    color: "#6B8E23",
    text: "Families, local leaders and community groups who support young people day to day.",
    items: [],
  },
  school: {
    title: "School Leadership & Teachers",
    color: "#E07B39",
    text: "Principals and teachers who work with Magic Bus to bring life skills into the school.",
    items: [],
  },
  partners: {
    title: "Partner Organisations",
    color: "#7B5EA7",
    text: "Corporate, foundation and civil society partners who help programmes reach more young people.",
    items: [],
  },
  explorer: { title: "Explorer", color: "#E07B39", text: "Grades 5-6", items: ["Play", "Ask", "Discover"] },
  learner: { title: "Learner", color: "#E07B39", text: "Grades 6-8", items: ["Listen", "Learn", "Explore"] },
  thinker: { title: "Thinker", color: "#E07B39", text: "Grades 8-10", items: ["Think", "Create", "Apply"] },
  collaborator: { title: "Collaborator", color: "#E07B39", text: "Grades 10-12", items: ["Debate", "Adapt", "Connect"] },
  workready: {
    title: "Work-Ready Citizens",
    color: "#E12228",
    text: "The goal of the journey: young people who are ready for work and for life.",
    items: [],
  },
};

const STAGES = ["explorer", "learner", "thinker", "collaborator", "workready"];
const CX = 350;
const CY = 350;

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
  const [active, setActive] = useState("overview");
  const info = DATA[active];
  const dim = (id) => (active === "overview" || active === id ? 1 : 0.55);

  const interactive = (id) => ({
    role: "button",
    tabIndex: 0,
    "aria-label": DATA[id].title,
    "aria-pressed": active === id,
    onClick: () => setActive(id),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(id);
      }
    },
    style: { cursor: "pointer", outline: "none", opacity: dim(id), transition: "opacity .2s" },
    className: "focus-visible:[&>*:first-child]:stroke-black",
  });

  const ring = (id, r1, r2, a0, a1, lines, size) => {
    const mid = (a0 + a1) / 2;
    const [lx, ly] = pt((r1 + r2) / 2, mid);
    const selected = active === id;
    return (
      <g key={id} {...interactive(id)}>
        <path d={sector(r1, r2, a0, a1)} fill={DATA[id].color} stroke={selected ? "#111" : "#fff"} strokeWidth={selected ? 4 : 2} />
        <Lines x={lx} y={ly} lines={lines} size={size} />
      </g>
    );
  };

  const node = (id, deg, Icon, lines, labelAbove) => {
    const [x, y] = pt(300, deg);
    const selected = active === id;
    return (
      <g key={id} {...interactive(id)}>
        <circle cx={x} cy={y} r={34} fill={DATA[id].color} stroke={selected ? "#111" : "#fff"} strokeWidth={selected ? 4 : 3} />
        <Icon x={x - 16} y={y - 16} width={32} height={32} color="#fff" strokeWidth={1.8} />
        <Lines x={x} y={labelAbove ? y - 58 : y + 58} lines={lines} size={14} color="#1f2937" />
      </g>
    );
  };

  return (
    <section id="ecosystem" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-black">Enabling Ecosystem</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Select any part of the wheel to see how Magic Bus builds life skills, supports young people and prepares them for work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <svg viewBox="0 0 700 700" className="w-full max-w-[620px] mx-auto h-auto" role="group" aria-label="Enabling Ecosystem wheel">
              <circle cx={CX} cy={CY} r={300} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 8" />

              {ring("social", 64, 152, 0, 120, ["Social"], 17)}
              {ring("emotional", 64, 152, 120, 240, ["Emotional"], 17)}
              {ring("cognitive", 64, 152, 240, 360, ["Cognitive"], 17)}

              {ring("future", 160, 246, -45, 45, ["Future", "Skills"], 17)}
              {ring("academic", 160, 246, 45, 135, ["Academic", "Domain"], 15)}
              {ring("sports", 160, 246, 135, 225, ["Sports", "Domain"], 17)}
              {ring("wellbeing", 160, 246, 225, 315, ["Well-being", "& Safety"], 14)}

              <g {...interactive("hub")}>
                <circle cx={CX} cy={CY} r={58} fill="#fff" stroke={active === "hub" ? "#111" : "#cbd5e1"} strokeWidth={active === "hub" ? 4 : 2} />
                <Lines x={CX} y={CY} lines={["Well-being,", "Empowerment", "& Gender", "Equity"]} size={11} color="#334155" />
              </g>

              {node("govt", -45, Landmark, ["Government", "System"], true)}
              {node("community", 45, Users, ["Community", "System"], true)}
              {node("partners", 135, Handshake, ["Partner", "Organisations"], false)}
              {node("school", -135, School, ["School Leadership", "& Teachers"], false)}
            </svg>

            <p className="text-center text-sm text-gray-500 mt-2">Life skills are the base of the wheel.</p>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="rounded-3xl border bg-white shadow-lg p-6 md:p-8" style={{ borderTop: `6px solid ${info.color}` }}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{info.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{info.text}</p>
              {info.items.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {info.items.map((it) => (
                    <li key={it} className="px-3 py-1.5 rounded-full text-sm font-semibold text-white" style={{ background: info.color }}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
              {active !== "overview" && (
                <button type="button" onClick={() => setActive("overview")} className="mt-6 text-sm font-semibold text-brand-red underline">
                  Back to overview
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-lg font-bold text-gray-900 mb-5">The learner journey</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {STAGES.map((id, i) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                aria-pressed={active === id}
                className={`px-5 py-3 rounded-2xl border text-left transition ${
                  active === id ? "bg-brand-yellow border-black shadow-md" : "bg-orange-50 border-orange-200 hover:bg-orange-100"
                }`}
              >
                <span className="block text-xs text-gray-500">{i + 1 < STAGES.length ? `Stage ${i + 1}` : "Goal"}</span>
                <span className="block font-bold text-gray-900">{DATA[id].title}</span>
                {DATA[id].items.length > 0 && <span className="block text-xs text-gray-600">{DATA[id].text}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
