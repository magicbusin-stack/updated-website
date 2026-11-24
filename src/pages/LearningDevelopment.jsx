import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Crown,
  GraduationCap,
  Layers,
  Lightbulb,
  Monitor,
  Quote,
  RefreshCw,
  Rocket,
  School,
  Smartphone,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePhone from "../hooks/usePhone";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

/* Phones: a row you swipe sideways (so the page is not one very long column). Tablet and desktop: the normal grid. */
const SWIPE_ROW =
  "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0";
const SWIPE_ITEM = "w-[82%] shrink-0 snap-center sm:w-auto sm:shrink";

function FadeUp({ children, delay = 0, className = "", immediate = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <_MOTION.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={immediate || inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, ease: EASE, delay }}
    >
      {children}
    </_MOTION.div>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-bold uppercase tracking-[0.2em] ${
        dark
          ? "border-white/25 bg-white/10 text-white"
          : "border-brand-black/15 bg-brand-yellow/20 text-brand-black"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-yellow" : "bg-brand-red"}`} />
      {children}
    </span>
  );
}

const beliefs = [
  { text: "Empowering teams maximises impact", Icon: Users, bg: "bg-brand-red", fg: "text-white", chip: "bg-white/25" },
  { text: "Skilling people helps them achieve their best", Icon: Target, bg: "bg-brand-blue", fg: "text-brand-black", chip: "bg-white/40" },
  { text: "Driving excellence sparks innovation", Icon: Lightbulb, bg: "bg-brand-yellow", fg: "text-brand-black", chip: "bg-white/50" },
  { text: "Continuous learning fosters collaboration", Icon: RefreshCw, bg: "bg-brand-magenta", fg: "text-white", chip: "bg-white/25" },
];

/* One colour + icon per programme group */
const initiativeStyles = {
  joiners: { Icon: UserPlus, bg: "bg-brand-red", fg: "text-white", soft: "bg-brand-red/10", text: "text-brand-red" },
  managerial: { Icon: Briefcase, bg: "bg-brand-blue", fg: "text-brand-black", soft: "bg-brand-blue/15", text: "text-[#0B86A8]" },
  customised: { Icon: Wrench, bg: "bg-brand-green", fg: "text-brand-black", soft: "bg-brand-green/20", text: "text-[#5E7A00]" },
  leadership: { Icon: Crown, bg: "bg-brand-magenta", fg: "text-white", soft: "bg-brand-magenta/10", text: "text-brand-magenta" },
  "learning-loop": { Icon: Layers, bg: "bg-brand-yellow", fg: "text-brand-black", soft: "bg-brand-yellow/25", text: "text-[#8A6A00]" },
};

const platformIcons = [School, Monitor, Smartphone];

const initiativeTabs = [
  {
    key: "joiners",
    letter: "A",
    title: "For New Members / Joiners",
    blocks: [
      {
        heading: "Saksham & Parichay - Induction Programmes",
        text:
          "Saksham is a structured HR and functional induction programme for all new joiners. It ensures employees begin their journey with clarity, confidence, and a strong understanding of the organisation and its values."
      },
      {
        heading: "Aarambh MT Induction Programme",
        text:
          "Aarambh is a one-month immersive induction bootcamp for Management Trainees recruited from reputed institutions. The programme enables a smooth Campus-to-Corporate transition through hands-on exposure across functions, departments, and field operations."
      }
    ]
  },
  {
    key: "managerial",
    letter: "B",
    title: "For Managerial Development",
    blocks: [
      {
        heading: "First Time Managers (FTM)",
        text:
          "The First Time Managers programme supports employees transitioning from individual contributors to people managers. It focuses on essential managerial capabilities such as delegation, self-awareness, leadership styles, and effective team management, enabling confident role transitions and impact-driven leadership."
      },
      {
        heading: "Capability Development Programme (CDP 1 & 2) - Mid and Senior Managers",
        text:
          "The Capability Development Programme equips mid-level and seasoned managers with critical leadership and people-management skills. With a focus on stakeholder engagement, communication, team leadership, programme execution, and time management, CDP strengthens decision-making and execution excellence while aligning teams with organisational goals."
      }
    ]
  },
  {
    key: "customised",
    letter: "C",
    title: "Customised Role-Based Programmes",
    blocks: [
      {
        heading: "Customised Role-Based Programmes",
        text:
          "We offer customised, role-based programmes that are niche in nature and specifically designed to upskill key roles. As part of this initiative, in 2025, we conducted Across and Beyond for Cluster Managers and the Dale Carnegie Certification for Trainers."
      }
    ]
  },
  {
    key: "leadership",
    letter: "D",
    title: "Leadership Development Programme",
    blocks: [
      {
        heading: "Mastering Leadership Skills",
        text:
          "This is a customised programme designed to strengthen strategic thinking, leadership effectiveness, and organisational impact among senior leaders."
      }
    ]
  },
  {
    key: "learning-loop",
    letter: "E",
    title: "Learning Loop - Frontline Capability Building",
    blocks: [
      {
        heading: "Learning Loop - Frontline Capability Building",
        text:
          "Learning opportunities for frontline and field-level employees are delivered through a blended approach across three platforms:"
      }
    ],
    platforms: [
      "Classroom Learning: Step Up",
      "Virtual Learning: Open Calendar Programmes",
      "E-Learning Academy: Self-paced digital learning modules"
    ],
    footer:
      "These programmes address identified learning needs and enhance employees' capability to perform efficiently and effectively on the ground."
  }
];

const testimonials = [
  {
    programme: "Open Calendar Programme",
    quote:
      "This training helped me understand that effective communication goes beyond speaking-it involves active listening, the right choice of words, and appropriate body language and tone. I will now focus on communicating clearly and positively while being a better listener.",
    by: "Magic Bus employee"
  },
  {
    programme: "Capability Development Programme",
    quote:
      "This programme enhanced my understanding of stakeholder dynamics and equipped me with practical approaches to engage, influence, and manage stakeholders effectively. It also helped refine my communication skills, making my interactions more purposeful and impactful.",
    by: "Magic Bus employee"
  }
];

function HeroSection() {
  return (
    <HeroBanner
      badgeText="Learning & Development"
      title="Learning & Development at Magic Bus"
      subtitle="Helping our people grow with continuous learning"
      description="At Magic Bus, our teams engage in continuous learning, promoting a culture of continuous improvement across the organisation."
    />
  );
}

function IntroductionSection() {
  const promise = [
    { label: "Continuous learning", Icon: BookOpen },
    { label: "Practical capability-building", Icon: Wrench },
    { label: "Measurable impact for every team", Icon: TrendingUp },
  ];
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <FadeUp className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#f8f8f6] p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-brand-red via-brand-yellow to-brand-blue" />
            <SectionTag>Introduction</SectionTag>
            <h2 className="mt-5 text-4xl font-black leading-tight text-[#1A1A1A] md:text-5xl">
              Learning &amp; Development at <span className="text-brand-red">Magic Bus</span>
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-800">
              At Magic Bus, our teams engage in continuous learning, promoting a culture of continuous improvement across the organisation. With the spirit of innovation, we are committed to transforming young lives through impactful training and development initiatives.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <_MOTION.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-8 text-white shadow-xl sm:p-10"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-brand-red/40 blur-3xl" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                <Rocket className="h-7 w-7 text-brand-black" />
              </span>
              <p className="relative mt-5 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">L&amp;D Promise</p>
              <p className="relative mt-3 text-xl font-semibold leading-relaxed text-white">
                Continuous learning, practical capability-building, and measurable impact for every team.
              </p>
              <ul className="relative mt-6 space-y-3">
                {promise.map(({ label, Icon }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <Icon className="h-5 w-5 shrink-0 text-brand-yellow" />
                    <span className="text-lg font-bold">{label}</span>
                  </li>
                ))}
              </ul>
            </_MOTION.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function BeliefsSection() {
  const phone = usePhone();
  return (
    <section className="bg-[#f8f8f6] py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8 sm:mb-10">
          <h2 className="text-4xl font-black leading-tight text-[#1A1A1A] md:text-5xl">
            Our <span className="text-brand-red">Beliefs</span>
          </h2>
        </FadeUp>

        {/* phones: a row you swipe sideways; tablet and desktop: all four across */}
        <div className={`${SWIPE_ROW} sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4`}>
          {beliefs.map((belief, index) => (
            <FadeUp key={belief.text} delay={index * 0.07} className={`h-full ${SWIPE_ITEM}`} immediate={phone}>
              <_MOTION.div
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group relative flex h-full min-h-[220px] cursor-default flex-col overflow-hidden rounded-3xl p-7 shadow-md transition-shadow duration-300 hover:shadow-2xl sm:min-h-[260px] ${belief.bg} ${belief.fg}`}
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${belief.chip} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                  <belief.Icon className="h-7 w-7" />
                </span>
                <p className="relative mt-6 text-2xl font-extrabold leading-snug">{belief.text}</p>
              </_MOTION.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const platformStyles = [
  { bg: "bg-brand-blue", fg: "text-brand-black" },
  { bg: "bg-brand-magenta", fg: "text-white" },
  { bg: "bg-brand-green", fg: "text-brand-black" },
];

function InitiativesSection() {
  const [activeTab, setActiveTab] = useState(initiativeTabs[0].key);
  const active = useMemo(
    () => initiativeTabs.find((item) => item.key === activeTab) || initiativeTabs[0],
    [activeTab]
  );
  const tabRow = useRef(null);

  // phones: the programme group that is in front of the visitor opens below
  const onTabScroll = () => {
    const el = tabRow.current;
    if (!el || el.scrollWidth <= el.clientWidth + 4) return;
    const step = el.children[0].getBoundingClientRect().width + 16;
    const i = Math.min(initiativeTabs.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    setActiveTab(initiativeTabs[i].key);
  };

  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8 max-w-4xl sm:mb-10">
          <SectionTag>L&amp;D Initiatives</SectionTag>
          <h2 className="mt-5 text-4xl font-black leading-tight text-[#1A1A1A] md:text-5xl">
            Learning &amp; Development <span className="text-brand-red">Initiatives</span> at Magic Bus
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-gray-800">
            Our Learning &amp; Development framework is designed to support employees at every stage of their journey from onboarding to leadership by building capability, confidence, and impact.
          </p>
        </FadeUp>

        {/* The five programme groups, each in its own colour. Phones: swipe the row. */}
        <FadeUp delay={0.05}>
          <div className="relative">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-1 rounded-full bg-gradient-to-r from-brand-red via-brand-blue via-brand-green via-brand-magenta to-brand-yellow opacity-40 lg:block" />
            <div
              ref={tabRow}
              onScroll={onTabScroll}
              className={`relative ${SWIPE_ROW} sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-5`}
              role="tablist"
              aria-label="Learning and Development initiatives"
            >
              {initiativeTabs.map((tab) => {
                const isActive = tab.key === activeTab;
                const ts = initiativeStyles[tab.key];
                return (
                  <_MOTION.button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.key)}
                    onMouseEnter={() => setActiveTab(tab.key)}
                    onFocus={() => setActiveTab(tab.key)}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={`flex w-[72%] shrink-0 snap-center flex-col items-center gap-3 rounded-2xl border-2 border-transparent px-4 py-5 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/25 sm:w-auto sm:shrink ${ts.bg} ${ts.fg} ${
                      isActive ? "shadow-xl ring-4 ring-[#1A1A1A]/20 ring-offset-2" : "opacity-90 shadow-sm hover:opacity-100"
                    }`}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25">
                      <ts.Icon className="h-7 w-7" />
                    </span>
                    <span className="text-base font-extrabold leading-snug md:text-lg">{tab.title}</span>
                  </_MOTION.button>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Details */}
        <_MOTION.div
          key={active.key}
          role="tabpanel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-4 overflow-hidden rounded-3xl border border-black/5 bg-[#f8f8f6] shadow-sm sm:mt-6"
        >
          <div className={`h-2 w-full ${initiativeStyles[active.key].bg}`} />

          <div className="space-y-4 p-5 sm:p-8">
            {active.blocks.map((block, bi) => (
              <_MOTION.div
                key={block.heading}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-6"
              >
                <span className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-base font-black ${initiativeStyles[active.key].soft} ${initiativeStyles[active.key].text}`}>
                  {bi + 1}
                </span>
                <div className="min-w-0">
                  {/* the heading is skipped when it only repeats the tab title */}
                  {block.heading !== active.title && (
                    <h3 className="text-xl font-extrabold text-[#1A1A1A] md:text-2xl">{block.heading}</h3>
                  )}
                  <p className={`${block.heading !== active.title ? "mt-3 " : ""}text-lg leading-relaxed text-gray-800`}>{block.text}</p>
                </div>
              </_MOTION.div>
            ))}

            {active.platforms && (
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-6">
                <h3 className={`text-base font-bold uppercase tracking-[0.16em] ${initiativeStyles[active.key].text}`}>Three Platforms</h3>
                {/* the three ways of learning: colour cards (swipe on phones) */}
                <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
                  {active.platforms.map((item, pi) => {
                    const [name, ...rest] = item.split(":");
                    const PIcon = platformIcons[pi] || BookOpen;
                    const ps = platformStyles[pi % platformStyles.length];
                    return (
                      <_MOTION.div
                        key={item}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl p-6 shadow-md sm:w-auto sm:shrink ${ps.bg} ${ps.fg}`}
                      >
                        <PIcon className="pointer-events-none absolute -bottom-5 -right-5 h-32 w-32 opacity-15 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125" aria-hidden="true" />
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30">
                          <PIcon className="h-7 w-7" aria-hidden="true" />
                        </span>
                        <p className="relative mt-5 text-2xl font-extrabold leading-snug">{name}</p>
                        {rest.length > 0 && <p className="relative mt-2 text-lg leading-snug opacity-95">{rest.join(":").trim()}</p>}
                      </_MOTION.div>
                    );
                  })}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-gray-800">{active.footer}</p>
              </div>
            )}
          </div>
        </_MOTION.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // swipe left / right on the quote
  const swipe = {
    style: { touchAction: "pan-y" },
    onPointerDown: (e) => {
      start.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e) => {
      if (!start.current) return;
      const dx = e.clientX - start.current.x;
      const dy = e.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : prev)();
    },
  };

  return (
    <section className="bg-[#f8f8f6] py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8 sm:mb-10">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-5 text-4xl font-black leading-tight text-[#1A1A1A] md:text-5xl">
            Employee <span className="text-brand-red">Testimonials</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-6 shadow-2xl ring-1 ring-brand-red/40 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-red/30 blur-3xl" />
            <Quote className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-white/10 sm:right-8 sm:top-6 sm:h-40 sm:w-40" />

            <div className="relative" {...swipe}>
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                <Quote className="h-6 w-6 text-brand-black" />
              </span>
              <_MOTION.blockquote key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <p className="text-lg font-semibold leading-relaxed text-white sm:text-3xl sm:leading-relaxed">"{testimonials[active].quote}"</p>
                <footer className="mt-5 flex items-center gap-3 sm:mt-7">
                  <span className="h-1 w-10 shrink-0 rounded-full bg-brand-yellow" />
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow sm:text-base">{testimonials[active].by}</span>
                </footer>
              </_MOTION.blockquote>
            </div>

            <div className="relative mt-6 flex items-center justify-between gap-3 sm:mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.programme}
                    onClick={() => setActive(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === active ? "w-12 bg-brand-yellow" : "w-5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-brand-yellow hover:text-brand-black"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-brand-yellow hover:text-brand-black"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function TrainingGlimpsesSection() {
  const images = [
    { id: 1, src: "/lnd/1.jpeg", className: "sm:col-span-2 lg:col-span-2 lg:row-span-2" },
    { id: 2, src: "/lnd/2.jpg", className: "" },
    { id: 3, src: "/lnd/3.jpeg", className: "" },
    { id: 4, src: "/lnd/4.jpg", className: "lg:row-span-2" },
    { id: 5, src: "/lnd/5.jpg", className: "" },
    { id: 6, src: "/lnd/5.jpg", className: "" }
  ];

  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="mb-8">
          <SectionTag>Training Glimpses</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#1A1A1A] md:text-4xl">Catch Glimpses of our Trainings</h2>
        </FadeUp>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {images.map((img, index) => (
            <FadeUp key={img.id} delay={index * 0.05} className={`${img.className} ${index === 0 ? "sm:row-span-2" : ""}`}>
              <_MOTION.div
                whileHover={{ scale: 1.02 }}
                className="group relative h-full w-full overflow-hidden rounded-2xl bg-gray-100"
              >
                <img loading="lazy" decoding="async"
                  src={img.src}
                  alt={`Training glimpse ${img.id}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex translate-y-4 items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    View
                  </span>
                </div>
              </_MOTION.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-10 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-10">
          <SectionTag dark>Contact Details</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Get in Touch with our Team</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="min-w-0 space-y-2 text-white/90">
              <p className="text-lg font-semibold">Rukhsana Shaikh: Head, Learning & Development</p>
              <p className="text-lg">
                Email ID:{" "}
                <a href="mailto:rukhsana.shaikh@magicbusindia.org" className="break-all font-semibold text-brand-yellow hover:underline">
                  rukhsana.shaikh@magicbusindia.org
                </a>
              </p>
            </div>
            <a
              href="mailto:rukhsana.shaikh@magicbusindia.org"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-3 text-base font-bold text-[#1A1A1A] transition hover:bg-brand-yellow/90"
            >
              Write to Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function LearningDevelopment() {
  return (
    <Layout>
      <HeroSection />
      <IntroductionSection />
      <BeliefsSection />
      <InitiativesSection />
      <TestimonialsSection />
      <TrainingGlimpsesSection />
      <ContactSection />
    </Layout>
  );
}
