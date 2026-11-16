// src/pages/OurApproach.jsx  (new design: "Childhood to Livelihood")
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Users,
  Handshake,
  BookMarked,
  Layers,
  Target,
  ShieldCheck,
  UserCheck,
  CheckCircle,
  ArrowRight,
  GitMerge,
  ChevronDown,
} from "lucide-react";
import Layout from "../components/Layout";
import StrategicFramework from "../components/AboutUs/StrategicFramework";

const EASE = [0.16, 1, 0.3, 1];

// Photos used on this page are real Magic Bus photos from /public/ngo-images
const HERO_IMG = "/ngo-images/our-approach-hero.jpg";
const ADOLESCENT_IMG = "/ngo-images/our-approach-adolescent.jpg";
const LIVELIHOOD_IMG = "/ngo-images/our-approach-livelihood.jpg";

const STYLES = `
.oa-page{font-family:"Plus Jakarta Sans",system-ui,sans-serif}
.oa-display{font-family:"Epilogue","Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:-0.02em}
@keyframes oaSpin{to{transform:rotate(360deg)}}
@keyframes oaPing{75%,100%{transform:scale(1.7);opacity:0}}
.oa-orbit{animation:oaSpin 40s linear infinite;transform-origin:400px 310px}
.oa-ping{animation:oaPing 2.4s cubic-bezier(0,0,.2,1) infinite}
.oa-scroll-row{scrollbar-width:none}
.oa-scroll-row::-webkit-scrollbar{display:none}
@media (prefers-reduced-motion: reduce){.oa-orbit,.oa-ping{animation:none}}
`;

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   The five pillars. Descriptions are the same approved wording the page
   already used; the three small tags under each description are taken
   word-for-word from that description.
------------------------------------------------------------------- */
const PILLARS = [
  {
    id: 1,
    short: "Life Skills",
    title: "Life Skills Education",
    lines: ["Life Skills", "Education"],
    tag: "Pillar 01",
    Icon: Sparkles,
    hex: "#F59E0B",
    iconBg: "bg-amber-500",
    dot: "bg-amber-500",
    text: "text-amber-600",
    chipActive: "bg-amber-500",
    desc: "Teaches core life skills to adolescents and youth, helping them become more resilient and show higher self-efficacy.",
    chips: ["Core life skills", "Resilience", "Self-efficacy"],
    pos: { top: 25, left: "50%", transform: "translateX(-50%)", width: 220 },
  },
  {
    id: 2,
    short: "Education Enhancement",
    title: "Education Enhancement",
    lines: ["Education", "Enhancement"],
    tag: "Pillar 02",
    Icon: GraduationCap,
    hex: "#C026D3",
    iconBg: "bg-fuchsia-600",
    dot: "bg-fuchsia-500",
    text: "text-fuchsia-600",
    chipActive: "bg-fuchsia-600",
    desc: "Provides adolescents with learning support that improves their basic literacy and numeracy, to boost their overall grades.",
    chips: ["Basic literacy", "Basic numeracy", "Better grades"],
    pos: { top: 140, right: 55, width: 210 },
  },
  {
    id: 3,
    short: "Employability Skills",
    title: "Employability Skills Education",
    lines: ["Employability", "Skills Education"],
    tag: "Pillar 03",
    Icon: Briefcase,
    hex: "#2563EB",
    iconBg: "bg-blue-600",
    dot: "bg-blue-500",
    text: "text-blue-600",
    chipActive: "bg-blue-600",
    desc: "Includes financial literacy, digital literacy, spoken English and career awareness that will help young people to get a job.",
    chips: ["Financial & digital literacy", "Spoken English", "Career awareness"],
    pos: { bottom: 50, right: 140, width: 220 },
  },
  {
    id: 4,
    short: "Livelihood Connect",
    title: "Livelihood Connect",
    lines: ["Livelihood", "Connect"],
    tag: "Pillar 04",
    Icon: Users,
    hex: "#E11D48",
    iconBg: "bg-rose-600",
    dot: "bg-rose-500",
    text: "text-rose-600",
    chipActive: "bg-rose-600",
    desc: "Involves sector-specific orientation, placement and post-placement support to help young people sustain their jobs.",
    chips: ["Sector-specific orientation", "Placement", "Post-placement support"],
    pos: { bottom: 50, left: 140, width: 220 },
  },
  {
    id: 5,
    short: "Community Engagement",
    title: "Community Engagement",
    lines: ["Community", "Engagement"],
    tag: "Pillar 05",
    Icon: Handshake,
    hex: "#059669",
    iconBg: "bg-emerald-600",
    dot: "bg-emerald-500",
    text: "text-emerald-600",
    chipActive: "bg-emerald-600",
    desc: "Engages with parents, local government bodies, and the community to build support for adolescents.",
    chips: ["Parents", "Local government bodies", "Community support"],
    pos: { top: 140, left: 55, width: 210 },
  },
];

// line end points for the diagram (centre is 400,310)
const LINE_ENDS = {
  1: [400, 85],
  2: [630, 190],
  3: [550, 495],
  4: [250, 495],
  5: [170, 190],
};

const CHIP_ICONS = [Target, ShieldCheck, UserCheck];

/* ====================== HERO ====================== */
function Hero() {
  return (
    <section
      id="overview"
      className="relative flex min-h-[78svh] items-center overflow-hidden bg-slate-900 text-white md:min-h-[88vh]"
      style={{ marginTop: "var(--header-h, 93px)" }}
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="A Magic Bus mentor walking with two children"
          className="h-full w-full object-cover object-center brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/55 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md"
          >
            <span className="oa-ping relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            Our Approach &amp; Pedagogy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="oa-display text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Equip. Educate. <br />
            <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-rose-500 bg-clip-text text-transparent">Empower for Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
            className="max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl md:text-2xl md:leading-relaxed"
          >
            Working hand-in-hand with vulnerable young people to create an unbroken pathway from childhood into sustainable, dignified
            livelihoods—combining socio-emotional life skills, foundational education, and sector-specific employability aligned with NEP 2020.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4"
          >
            <a
              href="#framework"
              className="flex items-center gap-2.5 rounded-xl bg-rose-600 px-7 py-4 text-base font-semibold text-white sm:text-lg shadow-lg shadow-rose-600/40 transition hover:-translate-y-0.5 hover:bg-rose-700"
            >
              Strategic Framework
              <GitMerge className="h-5 w-5" />
            </a>
            <a
              href="#programmes"
              className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white sm:text-lg backdrop-blur-md transition hover:bg-white/20"
            >
              Explore 2 Programmes
              <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ====================== OVERVIEW (existing approved intro text) ====================== */
function Overview() {
  const focus = [
    { Icon: Sparkles, hex: "bg-amber-500", title: "Life Skills", text: "Socio-emotional learning, resilience & decision-making" },
    { Icon: GraduationCap, hex: "bg-fuchsia-600", title: "Education Enhancement", text: "Foundational literacy & numeracy support" },
    { Icon: Briefcase, hex: "bg-blue-600", title: "Livelihood Skills", text: "Digital, English, sector-specific training & job placement" },
  ];
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
        <FadeUp className="lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-rose-600">
            Overview
          </span>
          <h2 className="oa-display mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Approach</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed">
            Young people from underserved communities are especially vulnerable to the fallouts of poverty such as school drop-out and child
            labour. Magic Bus works to address these at the root through our <strong className="text-slate-900">Childhood to Livelihood</strong>{" "}
            approach. The National Education Policy (2020) emphasises socio-emotional learning and higher-order thinking skills — both core to our
            programmes.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="lg:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
            <h3 className="oa-display text-base font-extrabold uppercase tracking-wider text-slate-500">Focus Areas</h3>
            <ul className="mt-5 space-y-4">
              {focus.map(({ Icon, hex, title, text }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${hex}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-base font-bold text-slate-900 sm:text-lg">{title}</p>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ====================== FIVE PILLARS (interactive) ====================== */
function Pillars() {
  const [activeId, setActiveId] = useState(1);
  const active = PILLARS.find((p) => p.id === activeId);

  return (
    <section id="components" className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-50/60 via-slate-50/40 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-8 max-w-3xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-rose-600">
            <Layers className="h-4 w-4" /> Integrated Ecosystem
          </div>
          <h2 className="oa-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Five Pillars of Our Approach</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Hover or tap any pillar below to see how these five connected components work together to guide adolescents into sustainable livelihoods.
          </p>
        </FadeUp>

        {/* Pillar tabs: one swipeable row on phones */}
        <div className="oa-scroll-row -mx-4 mb-8 flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0">
          {PILLARS.map((p) => {
            const on = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 sm:text-base ${
                  on ? `${p.chipActive} border-transparent text-white` : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${on ? "bg-white" : p.dot}`} />
                {p.short}
              </button>
            );
          })}
        </div>

        {/* Desktop radial diagram: the lines and the pillars share one coordinate system, so they line up exactly */}
        <div className="relative mx-auto mb-10 hidden w-full max-w-4xl select-none lg:block" style={{ aspectRatio: "800 / 620" }}>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none" viewBox="0 0 800 620">
            <circle className="oa-orbit" cx="400" cy="310" r="230" stroke="#E2E8F0" strokeDasharray="6 6" strokeWidth="2" />
            <circle cx="400" cy="310" r="160" stroke="#F1F5F9" strokeWidth="1.5" />
            {PILLARS.map((p) => (
              <line
                key={p.id}
                x1="400"
                y1="310"
                x2={LINE_ENDS[p.id][0]}
                y2={LINE_ENDS[p.id][1]}
                stroke={p.hex}
                strokeDasharray="4 4"
                strokeWidth="2.5"
                style={{ opacity: p.id === activeId ? 0.9 : 0.25, transition: "opacity 0.5s" }}
              />
            ))}
          </svg>

          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border-4 border-slate-50 bg-white p-4 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="oa-ping pointer-events-none absolute inset-0 rounded-full border-2 border-rose-300 opacity-25" />
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-600 shadow-inner">
                <BookMarked className="h-7 w-7" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Our Model</span>
              <h3 className="oa-display mt-1 text-2xl font-extrabold leading-tight text-slate-900">
                CHILDHOOD <br />
                <span className="text-rose-600">TO LIVELIHOOD</span>
              </h3>
            </div>
          </div>

          {/* Pillar nodes: each icon is centred exactly on the end of its line */}
          {PILLARS.map((p) => {
            const on = p.id === activeId;
            const [x, y] = LINE_ENDS[p.id];
            return (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={p.title}
                onClick={() => setActiveId(p.id)}
                onMouseEnter={() => setActiveId(p.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveId(p.id)}
                className="absolute z-30 cursor-pointer text-center"
                style={{ left: `${(x / 800) * 100}%`, top: `${(y / 620) * 100}%`, transform: "translate(-50%, -48px)", width: 240 }}
              >
                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl text-white transition-all duration-300 ${p.iconBg} ${
                    on ? "scale-110 ring-4" : "ring-4 ring-transparent"
                  }`}
                  style={on ? { boxShadow: `0 18px 30px -8px ${p.hex}88`, ["--tw-ring-color"]: `${p.hex}33` } : { boxShadow: `0 8px 16px -6px ${p.hex}66` }}
                >
                  <p.Icon className="h-11 w-11" />
                </div>
                <h4 className={`oa-display mx-auto mt-3 w-fit rounded-md bg-white/90 px-2 py-0.5 text-lg font-bold leading-tight transition-colors ${on ? "text-slate-950" : "text-slate-500"}`}>
                  {p.lines[0]}
                  <br />
                  {p.lines[1]}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Detail card */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="relative rounded-3xl border-2 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8"
              style={{ borderColor: `${active.hex}66`, backgroundImage: `linear-gradient(135deg, ${active.hex}1A, #ffffff 55%)` }}
            >
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3.5">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${active.iconBg}`}>
                    <active.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className={`text-sm font-bold uppercase tracking-wider ${active.text}`}>{active.tag}</span>
                    <h3 className="oa-display text-2xl font-bold text-slate-900 sm:text-3xl">{active.title}</h3>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed">{active.desc}</p>

              <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 text-sm font-semibold text-slate-700 sm:grid-cols-3 sm:text-base">
                {active.chips.map((c, i) => {
                  const Icon = CHIP_ICONS[i % CHIP_ICONS.length];
                  return (
                    <div key={c} className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3.5">
                      <Icon className={`h-5 w-5 shrink-0 ${active.text}`} />
                      <span>{c}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ====================== PROGRAMME AREAS ====================== */
const PROGRAMMES = [
  {
    key: "adolescent",
    img: ADOLESCENT_IMG,
    imgAlt: "Children taking part in a Magic Bus session on a playground",
    badge: "Ages 12 – 18",
    badgeBg: "bg-rose-600",
    BadgeIcon: Users,
    title: "Adolescent Programme",
    sub: "Helping adolescents complete secondary education",
    text: "Through the Adolescent Programme we work with adolescents for holistic development — helping them complete secondary education. Activity-based life skills and education enhancement build confidence and foundational literacy & numeracy.",
    points: ["Socio-emotional learning, resilience & decision-making", "Foundational literacy & numeracy support", "Activity-based life skills and education enhancement"],
    foot: "Direct delivery in schools & communities",
    cta: "Support Adolescents",
    to: "/donate",
    ctaColor: "text-rose-600",
  },
  {
    key: "livelihood",
    img: LIVELIHOOD_IMG,
    imgAlt: "Young people in a Magic Bus livelihood training session",
    badge: "Ages 18 – 25",
    badgeBg: "bg-blue-600",
    BadgeIcon: Briefcase,
    title: "Livelihood Programme",
    sub: "Employability, placement and retention",
    text: "The Livelihood Programme enhances youth employability via life skills, sectoral training and job placements. Post-placement mentoring and financial counselling supports retention.",
    points: ["Digital, English & sector-specific training", "Job placements", "Post-placement mentoring & financial counselling"],
    foot: "Livelihood centres",
    cta: "Hire or Partner",
    to: "/partner",
    ctaColor: "text-blue-600",
  },
];

function Programmes() {
  return (
    <section id="programmes" className="border-t border-slate-200 bg-slate-100 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto mb-8 max-w-4xl text-center md:mb-14">
          <span className="rounded-full bg-rose-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-rose-600">Core Offerings</span>
          <h2 className="oa-display mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">Two Targeted Programme Areas</h2>
          <p className="mt-3 text-lg text-slate-600 sm:text-xl">Interventions designed for adolescents and young adults respectively.</p>
        </FadeUp>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {PROGRAMMES.map((p, i) => (
            <FadeUp key={p.key} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60 w-full overflow-hidden bg-slate-900 sm:h-72">
                  <img src={p.img} alt={p.imgAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-md ${p.badgeBg}`}>
                      <p.BadgeIcon className="h-3.5 w-3.5" /> {p.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="oa-display text-2xl font-extrabold text-white sm:text-3xl">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-100 sm:text-base">{p.sub}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-8">
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">{p.text}</p>
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-base font-medium text-slate-700 sm:text-lg">
                        <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <span className="text-sm font-medium text-slate-500 sm:text-base">{p.foot}</span>
                    <Link to={p.to} className={`inline-flex items-center gap-2 text-base font-bold transition-all hover:gap-3 ${p.ctaColor}`}>
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== THEORY OF CHANGE (existing approved text, new style) ====================== */
function TheoryOfChange() {
  const items = [
    {
      title: "Strategic Pathways",
      accent: "border-t-rose-500",
      text: "Adolescent Programme (12–18): secondary completion and life skills. Livelihood Programme (18–25): skills, placements and retention.",
    },
    {
      title: "Best-in-Class Programmes",
      accent: "border-t-fuchsia-500",
      text: "Direct delivery (school & community), government partnership, livelihood centers for skilling & placement support.",
    },
    {
      title: "Outcomes of Focus",
      accent: "border-t-blue-500",
      text: "Academic impact, empowerment & agency, employability, job-placement and workplace retention.",
    },
  ];
  return (
    <section className="border-t border-slate-200 bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <h2 className="oa-display text-3xl font-extrabold text-slate-900 sm:text-5xl">Theory of Change</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Magic Bus emerged stronger following the pandemic. A planning exercise mapped a strategy to deliver two aligned, skills-anchored
            approaches for adolescents and youth.
          </p>
        </FadeUp>
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.08}>
              <div className={`h-full rounded-2xl border border-slate-200 border-t-4 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6 ${it.accent}`}>
                <h3 className="oa-display text-xl font-bold text-slate-900">{it.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{it.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== CALL TO ACTION ====================== */
function JoinCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 py-14 text-white md:py-20">
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
      <div className="relative z-10 mx-auto max-w-5xl space-y-5 px-4 text-center sm:px-6 lg:px-8 md:space-y-6">
        <span className="inline-block rounded-full bg-amber-400 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-slate-900 shadow-md">Join The Movement</span>
        <h2 className="oa-display text-3xl font-extrabold tracking-tight sm:text-5xl">Join Us to Transform Vulnerability into Leadership</h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-rose-100 sm:text-xl">
          Support programmes that forge sustained generational change—from rural classrooms to formal corporate offices. Partner as an employer,
          fund a cohort, or volunteer with us.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4">
          <Link to="/donate" className="rounded-xl bg-white px-9 py-4 text-base font-bold text-rose-600 sm:text-lg shadow-xl transition hover:-translate-y-0.5 hover:bg-rose-50 hover:shadow-2xl">
            Donate Now
          </Link>
          <Link to="/partner" className="rounded-xl border border-white/30 bg-slate-900/40 px-9 py-4 text-base font-bold text-white sm:text-lg backdrop-blur-md transition hover:bg-slate-900/60">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ====================== PAGE ====================== */
export default function OurApproach() {
  return (
    <Layout>
      {/* Fonts for this page's design (Epilogue headings, Plus Jakarta Sans text) */}
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Epilogue:wght@600;700;800;900&display=swap"
      />
      <style>{STYLES}</style>
      <main className="oa-page bg-slate-50 text-slate-800 antialiased">
        <Hero />
        <Overview />
        <Pillars />
        <Programmes />
        <TheoryOfChange />
        <div id="framework">
          <StrategicFramework />
        </div>
        <JoinCTA />
      </main>
    </Layout>
  );
}
