import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb, Compass, TrendingUp, Store, Sprout, Settings, Handshake, Users, Presentation, School, MapPin, Map as MapIcon, Check, Target, Mail, ArrowRight,
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
    <span className="inline-flex items-center gap-2 rounded-full border border-black bg-brand-yellow px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F172A]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}

/* ---------- 1. why it matters ---------- */
const GAPS = [
  ["No map", "Few can name the steps from Class 10 to a job"],
  ["No practice", "Little contact with real workplaces before 18"],
  ["No guide", "Career periods exist on paper, not in practice"],
];

function WhySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Bridging the gap</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Why school-to-work pathways matter: Bridging the gap</h2>
        </FadeUp>
        <FadeUp delay={0.06}>
          <div className="mt-8 rounded-3xl bg-[#FFCC00] p-6 sm:p-10">
            <p className="max-w-4xl text-2xl font-medium leading-snug text-[#2B2B2B] md:text-4xl md:leading-snug">
              Young people have <strong className="font-extrabold text-[#9B1B1F]">aspirations</strong> and want to work. What they lack is{" "}
              <strong className="font-extrabold text-[#9B1B1F]">information, practice and a guide</strong> in Grades 9 and 10, when the decision is
              made.<span aria-hidden="true">*</span>
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {GAPS.map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-[#9B1B1F] p-6 text-white shadow-md">
                  <p className="text-xl font-extrabold text-[#FFD21F]">{title}</p>
                  <p className="mt-2 leading-snug text-white/95">{text}</p>
                </div>
              ))}
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
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
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

function PillarsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Operational architecture</p>
          <h3 className="mt-1 text-2xl font-black text-[#0F172A] md:text-3xl">The 3 Pillars of Transformation</h3>
        </FadeUp>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: p.tint, color: p.color }}>
                  <p.Icon className="h-5 w-5" />
                </span>
                <h4 className="mt-5 text-2xl font-extrabold text-[#0F172A]">
                  {p.n}. {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.text}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-slate-700">
                      <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: p.color }} />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold" style={{ background: p.soft, borderColor: p.tint, color: p.color }}>
                  <Target className="h-4 w-4 shrink-0" />
                  {p.focus}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

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
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
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

function EconomySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Local economy</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Connecting Education with the Local Economy</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            We collaborate with local industries and training partners to turn classroom learning into real career opportunities.
          </p>
        </FadeUp>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ECONOMY.map(({ title, Icon, text }, i) => (
            <FadeUp key={title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="flex items-center gap-2 text-xl font-extrabold text-[#1E3A8A]">
                  <Icon className="h-5 w-5 shrink-0" />
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
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
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Our Scale</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F2A5C] md:text-4xl">Our Scale</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            To turn this School-to-Work vision into scalable reality, our programs actively connect learners across diverse geographies with
            institutional and market infrastructure.
          </p>
        </FadeUp>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {SCALE.map(({ label, Icon, value }, i) => (
            <FadeUp key={label} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[#B9D5F0] bg-[#EAF3FD] p-5 transition hover:-translate-y-1 hover:shadow-md">
                <Icon className="h-7 w-7 text-[#0F2A5C]" />
                <p className="mt-6 text-3xl font-black text-[#0F2A5C]">{value || "—"}</p>
                <p className="mt-1 text-lg font-bold text-[#0F2A5C]">{label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. contact ---------- */
function ContactSection() {
  return (
    <section className="bg-white pb-20 pt-16 sm:pt-20">
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
