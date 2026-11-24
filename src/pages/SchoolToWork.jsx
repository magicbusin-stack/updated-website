import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb, Compass, TrendingUp, Store, Sprout, Settings, Handshake, Users, Presentation, School, MapPin, Map as MapIcon, Check, Target, Mail, ArrowRight, ArrowLeft, Briefcase, UserCheck,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";
import LearnerSupportRings from "../components/programmes/LearnerSupportRings";

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black bg-brand-yellow px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F172A]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}

/* Phones: a row you swipe sideways (so the page is not one long column). Tablet and desktop: the normal layout. */
const SWIPE_ROW =
  "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0";

/* Swipe left / right on an element: calls onSwipe(+1) or onSwipe(-1). Vertical scrolling is left alone. */
function useSwipe(onSwipe) {
  const start = useRef(null);
  return {
    style: { touchAction: "pan-y" },
    onPointerDown: (e) => {
      start.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e) => {
      if (!start.current) return;
      const dx = e.clientX - start.current.x;
      const dy = e.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
    },
    onPointerCancel: () => {
      start.current = null;
    },
  };
}

/* ---------- 1. why it matters ---------- */
// Each gap matches a word in the statement: tap a gap (or the word) to light up the other.
const GAPS = [
  { title: "No map", text: "Few can name the steps from Class 10 to a job", Icon: MapIcon },
  { title: "No practice", text: "Little contact with real workplaces before 18", Icon: Briefcase },
  { title: "No guide", text: "Career periods exist on paper, not in practice", Icon: UserCheck },
];

/* A word in the statement that lights up together with its gap card */
function Word({ i, active, setActive, children }) {
  return (
    <button
      type="button"
      onClick={() => setActive(i)}
      onMouseEnter={() => setActive(i)}
      onFocus={() => setActive(i)}
      className={`rounded-lg px-1.5 font-extrabold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9B1B1F]/40 ${
        active === i ? "bg-[#9B1B1F] text-[#FFD21F]" : "text-[#9B1B1F] underline decoration-[#9B1B1F]/40 decoration-dotted underline-offset-4"
      }`}
    >
      {children}
    </button>
  );
}

function WhySection() {
  const [active, setActive] = useState(0);
  const row = useRef(null);

  // on phones: the gap that is in front of the visitor becomes the active one
  const onRowScroll = () => {
    const el = row.current;
    if (!el || el.scrollWidth <= el.clientWidth + 4) return;
    const card = el.children[0];
    const step = card.getBoundingClientRect().width + 16;
    setActive(Math.min(GAPS.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Bridging the gap</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Why school-to-work pathways matter: Bridging the gap</h2>
        </FadeUp>
        <FadeUp delay={0.06}>
          <div className="mt-8 overflow-hidden rounded-3xl bg-[#FFCC00] p-6 sm:p-10">
            <p className="max-w-4xl text-2xl font-medium leading-snug text-[#2B2B2B] md:text-4xl md:leading-snug">
              Young people have <strong className="font-extrabold text-[#9B1B1F]">aspirations</strong> and want to work. What they lack is{" "}
              <Word i={0} active={active} setActive={setActive}>information</Word>,{" "}
              <Word i={1} active={active} setActive={setActive}>practice</Word> and <Word i={2} active={active} setActive={setActive}>a guide</Word> in Grades 9 and 10, when the decision is
              made.<span aria-hidden="true">*</span>
            </p>

            {/* the three gaps: tap one, or the matching word above */}
            <div ref={row} onScroll={onRowScroll} className={`mt-8 ${SWIPE_ROW} sm:grid sm:grid-cols-3 sm:gap-4`}>
              {GAPS.map(({ title, text, Icon }, i) => {
                const on = active === i;
                return (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={on}
                    className={`group relative w-[82%] shrink-0 snap-center rounded-3xl p-6 text-left shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white sm:w-auto sm:shrink ${
                      on ? "-translate-y-1 bg-[#9B1B1F] text-white shadow-xl" : "bg-white/70 text-[#2B2B2B] hover:bg-white"
                    }`}
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${on ? "bg-[#FFD21F] text-[#9B1B1F]" : "bg-[#9B1B1F]/10 text-[#9B1B1F]"}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className={`mt-4 block text-xl font-extrabold ${on ? "text-[#FFD21F]" : "text-[#9B1B1F]"}`}>{title}</span>
                    <span className={`mt-2 block text-lg leading-snug ${on ? "text-white/95" : "text-[#2B2B2B]/85"}`}>{text}</span>
                    <span aria-hidden="true" className={`absolute inset-x-6 bottom-0 h-1 rounded-full bg-[#FFD21F] transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-sm font-semibold text-[#5A4300]">*Odisha scoping study 2026</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- 2. the solution ---------- */
function SolutionSection() {
  return (
    <section className="bg-[#F6F8FB] py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>The solution</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">The solution: A connected school-to-work pathway</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            The school-to-Work framework connects career awareness, practical experience, and transition support in one pathway. It brings learners,
            families, schools, communities, government, and industry together—combining support around the learner with a progression from aspiration
            to opportunity and transition.
          </p>
        </FadeUp>
        <FadeUp delay={0.06} className="mt-12">
          <h3 className="mb-6 text-2xl font-black text-[#0F172A] md:text-3xl">Build support around the learner</h3>
          <LearnerSupportRings />
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- 3. three pillars ---------- */
const PILLARS = [
  {
    n: 1,
    title: "Aspiration Pillar",
    Icon: Lightbulb,
    color: "#2563EB",
    tint: "#DBEAFE",
    soft: "#EFF6FF",
    text: "Broadening mindsets and building core agency early in adolescent life.",
    points: [
      "Life skills & employability foundational modules.",
      "Interactive career awareness & role-model mentorship.",
      "Visualizing achievable career paths beyond typical tropes.",
    ],
    focus: "Focus: Identity & Vision (Grades 6–8)",
  },
  {
    n: 2,
    title: "Opportunity Pillar",
    Icon: Compass,
    color: "#7C3AED",
    tint: "#EDE9FE",
    soft: "#F5F3FF",
    text: "Connecting youth aspirations to tangible local pathways and exposure.",
    points: [
      "Aligning student choices with regional demand sectors.",
      "Workplace exposure visits, internships & OJT (On-Job-Training).",
      "Cross-departmental institutional convergence.",
    ],
    focus: "Focus: Tangible Experience (Grades 9–10)",
  },
  {
    n: 3,
    title: "Market Pillar",
    Icon: TrendingUp,
    color: "#0D9488",
    tint: "#CCFBF1",
    soft: "#F0FDFA",
    text: "Integrating local economic demand with educational programming.",
    points: [
      "Mapping MSMEs, local industries & emerging economic clusters.",
      "Leveraging Skill Hubs under NEP 2020 guidelines.",
      "Preparing youth for immediate employment or higher vocational tracks.",
    ],
    focus: "Focus: Transition & Placement (Grades 11–12+)",
  },
];

/* Three steps joined by a line: pick one (tap, arrow buttons or swipe) and its details open below. */
function PillarExplorer() {
  const [active, setActive] = useState(0);
  const last = PILLARS.length - 1;
  const go = (n) => setActive((a) => Math.min(last, Math.max(0, a + n)));
  const swipe = useSwipe(go);
  const cur = PILLARS[active];

  return (
    <div>
      {/* the three steps */}
      <div role="group" aria-label="The three pillars" className="relative mx-auto grid max-w-3xl grid-cols-3">
        <div aria-hidden="true" className="absolute left-[16.7%] right-[16.7%] top-8 h-1.5 -translate-y-1/2 rounded-full bg-slate-200" />
        <div
          aria-hidden="true"
          className="absolute left-[16.7%] top-8 h-1.5 -translate-y-1/2 rounded-full transition-all duration-500"
          style={{ width: `${(active / last) * 66.6}%`, background: cur.color }}
        />
        {PILLARS.map((p, i) => {
          const on = i === active;
          const reached = i <= active;
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className="group relative z-10 flex flex-col items-center gap-2 px-1 text-center focus-visible:outline-none"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-brand-yellow ${on ? "scale-110" : "group-hover:scale-105"}`}
                style={{ background: reached ? p.color : "#E2E8F0", color: reached ? "#fff" : "#64748B" }}
              >
                <p.Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className={`text-base font-extrabold leading-tight sm:text-lg ${on ? "text-[#0F172A]" : "text-slate-500"}`}>
                <span className="block text-sm font-bold tracking-wider" style={{ color: reached ? p.color : "#94A3B8" }}>
                  {p.n}
                </span>
                {p.title.replace(" Pillar", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* the selected pillar: all three sit in the same spot so the section keeps one steady height */}
      <div className="mt-8 grid" {...swipe}>
        {PILLARS.map((p, i) => {
          const on = i === active;
          return (
            <div
              key={p.title}
              role="group"
              aria-label={p.title}
              aria-hidden={!on}
              inert={!on}
              className="col-start-1 row-start-1"
              style={{ opacity: on ? 1 : 0, visibility: on ? "visible" : "hidden", transition: on ? "opacity 0.4s ease" : "opacity 0.2s ease, visibility 0s linear 0.2s" }}
            >
              <div
                className="flex h-full flex-col rounded-3xl border-2 p-6 shadow-lg sm:p-8"
                style={{ borderColor: `${p.color}55`, backgroundImage: `linear-gradient(135deg, ${p.soft}, #ffffff 60%)` }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: p.color }}>
                    <p.Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h4 className="text-2xl font-extrabold leading-tight text-[#0F172A] md:text-3xl">
                    {p.n}. {p.title}
                  </h4>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">{p.text}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.points.map((pt, k) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-lg text-slate-800 transition-all duration-500"
                      style={{
                        borderColor: p.tint,
                        transform: on ? "translateX(0)" : "translateX(16px)",
                        opacity: on ? 1 : 0,
                        transitionDelay: on ? `${0.12 * k + 0.1}s` : "0s",
                      }}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white" style={{ background: p.color }}>
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex items-center gap-2 rounded-xl border px-4 py-3 text-base font-semibold" style={{ background: p.soft, borderColor: p.tint, color: p.color }}>
                  <Target className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {p.focus}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={active === 0}
          className="inline-flex w-32 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-bold text-[#0F172A] transition hover:border-brand-red hover:text-brand-red disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={active === last}
          className="inline-flex w-32 items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-2 text-base font-bold text-white transition hover:bg-[#a01018] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
        >
          Next <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function PillarsSection() {
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>How the pathway comes to life</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">How the pathway comes to life</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            To put this support into action we have three connected pillars: helping learners explore career possibilities, gain practical experience,
            and prepare for work or further vocational learning.
          </p>
        </FadeUp>

        <FadeUp delay={0.05} className="mt-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">Operational architecture</p>
          <h3 className="mt-1 text-2xl font-black text-[#0F172A] md:text-3xl">The 3 Pillars of Transformation</h3>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-8">
          <PillarExplorer />
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-700">
            Putting them into practice requires coordinated governance and strong links between schools, training providers, and the local economy.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- 4. governance ---------- */
function GovernanceSection() {
  return (
    <section className="bg-[#F6F8FB] py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10" style={{ borderLeft: "8px solid #1F4E8C" }}>
            <SectionTag>Governance</SectionTag>
            <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Governance and ecosystem convergence</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-700">
              A seamless School-to-Work journey depends on aligned policy and local execution. We convene government departments, policymakers, and
              NGOs on one forum to address early dropouts, strengthen school completion, and close critical transition gaps.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- 5. local economy ---------- */
const ECONOMY = [
  {
    title: "MSMEs & Local Industry",
    Icon: Store,
    text: "Providing early workplace exposure, observational visits, and entry-level apprenticeship slots for Grade 11–12 youth, such as through the ISSA scheme.",
  },
  {
    title: "RSETIs & Rural Hubs",
    Icon: Sprout,
    text: "Rural Self Employment Training Institutes delivering localized vocational skilling modules and self-employment incubation.",
  },
  {
    title: "Skill Hubs (NEP 2020)",
    Icon: Settings,
    text: "Utilizing existing school infrastructure post-hours for vocational training aligned with national qualification frameworks.",
  },
  {
    title: "Public-Private Linkages",
    Icon: Handshake,
    text: "Formalizing MOUs between schools and local industry chambers to guarantee internship placements.",
  },
];
// where each partner sits around the school in the middle (percent of the picture)
const HUB_SPOTS = [
  [50, 13],
  [87, 50],
  [50, 87],
  [13, 50],
];

/* Education in the middle, the four local partners around it. Tap (or hover) a partner to read what it does.
   It also steps through them by itself until the visitor takes over. */
function EconomyHub() {
  const [active, setActive] = useState(0);
  const touched = useRef(false);
  const swipe = useSwipe((d) => {
    touched.current = true;
    setActive((a) => (a + d + ECONOMY.length) % ECONOMY.length);
  });

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => {
      if (!touched.current) setActive((a) => (a + 1) % ECONOMY.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const pick = (i) => {
    touched.current = true;
    setActive(i);
  };

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
      {/* the picture */}
      <div className="relative mx-auto aspect-square w-full max-w-[460px] select-none">
        <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="37" stroke="#BFDBFE" strokeWidth="0.6" strokeDasharray="1.6 1.6" />
          {HUB_SPOTS.map(([x, y], i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={i === active ? "#1E3A8A" : "#BFDBFE"}
              strokeWidth={i === active ? 1.4 : 0.8}
              strokeDasharray={i === active ? "2 2" : "0"}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              className={i === active ? "eco-flow" : ""}
            />
          ))}
        </svg>
        <style>{`.eco-flow{animation:ecoFlow 1s linear infinite}@keyframes ecoFlow{to{stroke-dashoffset:-4}}@media (prefers-reduced-motion:reduce){.eco-flow{animation:none}}`}</style>

        {/* the middle */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-white bg-[#1E3A8A] text-center text-white shadow-2xl">
          <School className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true" />
          <span className="mt-1 text-sm font-extrabold leading-tight sm:text-lg">Education</span>
        </div>

        {/* the four partners */}
        {ECONOMY.map(({ title, Icon }, i) => {
          const on = i === active;
          const [x, y] = HUB_SPOTS[i];
          return (
            <button
              key={title}
              type="button"
              onClick={() => pick(i)}
              onMouseEnter={() => pick(i)}
              aria-pressed={on}
              aria-label={title}
              className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center focus-visible:outline-none"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-brand-yellow sm:h-20 sm:w-20 ${
                  on ? "scale-110 bg-[#1E3A8A] text-white" : "bg-[#DBEAFE] text-[#1E3A8A] group-hover:scale-105"
                }`}
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
              </span>
              <span aria-hidden="true" className={`absolute top-full mt-1 hidden w-28 text-center text-sm font-bold leading-tight transition-colors sm:block ${on ? "text-[#1E3A8A]" : "text-slate-500"}`}>
                {title}
              </span>
            </button>
          );
        })}
      </div>

      {/* what the selected partner does */}
      <div>
        <div className="grid" {...swipe}>
          {ECONOMY.map(({ title, Icon, text }, i) => {
            const on = i === active;
            return (
              <div
                key={title}
                role="group"
                aria-label={title}
                aria-hidden={!on}
                inert={!on}
                className="col-start-1 row-start-1"
                style={{ opacity: on ? 1 : 0, visibility: on ? "visible" : "hidden", transition: on ? "opacity 0.4s ease" : "opacity 0.2s ease, visibility 0s linear 0.2s" }}
              >
                <div className="h-full rounded-3xl border-2 border-[#BFDBFE] bg-gradient-to-br from-[#EFF6FF] to-white p-6 shadow-lg sm:p-8" style={{ borderTopColor: "#1E3A8A", borderTopWidth: 6 }}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E3A8A] text-white shadow-md">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold text-[#1E3A8A] md:text-3xl">{title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">{text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* which one is open; tap a dot to jump */}
        <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start" role="group" aria-label="Choose a partner">
          {ECONOMY.map(({ title }, i) => (
            <button key={title} type="button" onClick={() => pick(i)} aria-label={`Show ${title}`} aria-current={i === active} className="flex h-7 w-7 items-center justify-center">
              <span className={`block rounded-full transition-all duration-300 ${i === active ? "h-3 w-8 bg-[#1E3A8A]" : "h-3 w-3 bg-[#BFDBFE]"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function EconomySection() {
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Local economy</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Connecting Education with the Local Economy</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            We collaborate with local industries and training partners to turn classroom learning into real career opportunities.
          </p>
        </FadeUp>
        <FadeUp delay={0.06} className="mt-10">
          <EconomyHub />
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-4xl leading-relaxed text-slate-700">
            These partnerships provide a starting point for ecosystem mapping, rather than an exhaustive list. Together with the steering committees,
            they connect the three pillars to coordinated support and local opportunities.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- 6. scale ---------- */
// The programme team has not shared the School-to-Work figures yet: set `value` for each card to show it
// (for example value: "1,20,000"). Until then a dash is shown.
const SCALE = [
  { label: "Adolescents", Icon: Users, value: null },
  { label: "Teachers", Icon: Presentation, value: null },
  { label: "Schools", Icon: School, value: null },
  { label: "Districts", Icon: MapPin, value: null },
  { label: "States", Icon: MapIcon, value: null },
];

function ScaleSection() {
  return (
    <section className="bg-[#F6F8FB] py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Our Scale</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F2A5C] md:text-4xl">Our Scale</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            To turn this School-to-Work vision into scalable reality, our programs actively connect learners across diverse geographies with
            institutional and market infrastructure.
          </p>
        </FadeUp>
        <div className={`mt-8 ${SWIPE_ROW} sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5`}>
          {SCALE.map(({ label, Icon, value }) => (
            <div key={label} className="flex w-[44%] shrink-0 snap-start flex-col rounded-2xl border border-[#B9D5F0] bg-[#EAF3FD] p-5 transition hover:-translate-y-1 hover:shadow-md sm:w-auto sm:shrink">
              <Icon className="h-7 w-7 text-[#0F2A5C]" aria-hidden="true" />
              <p className="mt-6 text-3xl font-black text-[#0F2A5C]">{value || "—"}</p>
              <p className="mt-1 text-lg font-bold text-[#0F2A5C]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. contact ---------- */
function ContactSection() {
  return (
    <section className="bg-white pb-20 pt-10 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0F172A] p-8 text-white sm:p-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-black md:text-3xl">Partner with us on School-to-Work</h2>
              <p className="mt-2 text-white/80">Reach out to us</p>
            </div>
            <a
              href="mailto:govtpartner@magicbusindia.org"
              className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-brand-yellow px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:opacity-90 sm:px-6 sm:text-base"
            >
              <Mail className="h-5 w-5 shrink-0" />
              govtpartner@magicbusindia.org
              <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function SchoolToWork() {
  usePageMeta({
    title: "School-to-Work (StW) Transition Framework | Magic Bus India Foundation",
    description:
      "A connected school-to-work pathway that brings learners, families, schools, communities, government and industry together, from aspiration to opportunity and transition.",
  });
  return (
    <Layout>
      <HeroBanner
        badgeText="Adolescent Programme"
        title="School-to-Work (StW) Transition Framework"
        subtitle="A connected pathway from aspiration to opportunity"
        image="/ngo-images/girl.jpeg"
      />
      <WhySection />
      <SolutionSection />
      <PillarsSection />
      <GovernanceSection />
      <EconomySection />
      <ScaleSection />
      <ContactSection />
    </Layout>
  );
}
