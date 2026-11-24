import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    Mail,
    MonitorSmartphone,
    Store,
    Truck,
    WalletCards,
    Users,
    Target,
    Briefcase,
    BookOpen,
    Clock,
    Globe,
    Zap,
    Award,
    ArrowRight,
    ChevronLeft,
    Quote,
    MessageCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import FaqSchema from "../components/seo/FaqSchema";
import usePageMeta from "../hooks/usePageMeta";
import usePhone from "../hooks/usePhone";
import CountOnView from "../components/ui/CountOnView";
import FrameworkWheel from "../components/programmes/FrameworkWheel";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { YOUTH_FRAMEWORK } from "../components/programmes/frameworkWheelData";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];
const _MOTION = motion;

/* Phones: a row you swipe sideways (so the page is not one very long column). Tablet and desktop: the normal grid. */
const SWIPE_ROW =
    "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0";
const SWIPE_ITEM = "w-[82%] shrink-0 snap-center sm:w-auto sm:shrink";

function FadeUp({ children, delay = 0, className = "", immediate = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <_MOTION.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={immediate || inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
            {children}
        </_MOTION.div>
    );
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <_MOTION.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </_MOTION.div>
    );
}

function SectionTag({ children, dark = false }) {
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase mb-4 ${
                dark
                    ? "border border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow"
                    : "border border-brand-black/15 bg-brand-yellow text-brand-black"
            }`}
        >
            {children}
        </span>
    );
}

/* ─────────────────────────── FAQs ─────────────────────────── */
const yspFaq = [
    {
        question: "How does the Youth Skilling Programme prepare youth for jobs?",
        category: "Training",
        answer:
            "The Youth Skilling Programme builds job readiness through experiential learning, role plays, simulations and case studies that strengthen communication, problem-solving, teamwork, confidence and workplace skills.",
    },
    {
        question: "Does the programme ensure job retention among participants?",
        category: "Retention",
        answer:
            "Yes. The programme provides post-placement support and mentoring to help young people adapt to the workplace, address early employment challenges, retain their jobs and progress towards sustainable livelihoods.",
    },
    {
        question: "What are the key employability skills and competencies taught under the Youth Skilling Programme?",
        category: "Skills",
        answer:
            "Key skills and competencies include communication and Communicative English, problem-solving, teamwork and collaboration, critical thinking, adaptability, self-confidence, workplace behaviour, digital readiness including foundational AI, financial literacy, interview preparedness, career navigation and overall job readiness.",
    },
    {
        question: "Do participants get a certificate after completing the Youth Skilling Programme?",
        category: "Certification",
        answer:
            "Yes. Participants can opt for an NCVET-approved, QP code-based certification that can earn up to 11 academic credits under NEP 2020.",
    },
];

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — ABOUT PROGRAMME
══════════════════════════════════════════════════════════════ */
const aboutStats = [
    { num: "8", unit: "Weeks", label: "Intensive Programme", accent: "text-brand-yellow", bar: "bg-brand-yellow" },
    { num: "2", unit: "Months", label: "Skilling Duration", accent: "text-brand-blue", bar: "bg-brand-blue" },
    { num: "Grey-Collar", unit: "Jobs", label: "Transitioning to", accent: "text-brand-red", bar: "bg-brand-red" },
    { num: "11", unit: "Academic credit", label: "Optional NCVET Certification", accent: "text-brand-green", bar: "bg-brand-green" },
];

function AboutSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left: content */}
                    <FadeUp>
                        <SectionTag>About the Programme</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mt-2">
                            About Skilling for Undergraduates{" "}
                            <span className="text-brand-red">Programme</span>
                        </h2>
                        <p className="mt-5 text-base text-[#1A1A1A]/80 leading-relaxed">
                            Magic Bus India Foundation’s Youth Skilling Programme equips undergraduate youth from underserved
                            communities with 21st-century life and employability skills through a structured two-month job-oriented
                            programme. Practical, application-based experiential learning builds job-ready skills and strengthens
                            communication, confidence, teamwork, problem-solving, English communication, AI foundations, interview
                            readiness, and career navigation. These employability skills enhance the competencies of youth and equip
                            them to enter into suitable entry-level formal jobs. Participants can also opt for NCVET-approved QP
                            code-based certification, enabling them to earn up to 11 academic credits that may be used toward higher
                            education under the credit framework envisaged in NEP 2020.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/80 leading-relaxed">
                            The Youth Skilling Programme helps young people build the confidence, skills and workplace readiness needed
                            to transition successfully into formal employment. Post-placement support further helps youth adapt to the
                            workplace, retain employment and progress towards sustainable livelihoods.
                        </p>

                        {/* Stats: same style as the Programme highlights below */}
                        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-100 pt-6">
                            {aboutStats.map((st) => (
                                <div key={st.unit} className="flex items-stretch gap-3">
                                    <div className={`w-1.5 shrink-0 self-stretch rounded-full ${st.bar}`} />
                                    <div>
                                        <div
                                            className={`font-black leading-none select-none ${st.accent} ${
                                                st.num.length > 4 ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"
                                            }`}
                                        >
                                            {st.num}
                                        </div>
                                        <div className="mt-2 text-base font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/70">{st.unit}</div>
                                        <div className="mt-1 text-lg leading-snug text-[#1A1A1A]/80">{st.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Right: image */}
                    <FadeIn delay={0.1}>
                        <div className="relative rounded-3xl aspect-[4/3] shadow-2xl overflow-hidden">
                            <img loading="lazy" decoding="async"
                                src="/ngo-images/6.jpg"
                                alt="Youth skilling in action"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — PROGRAMME DETAILS / HIGHLIGHTS
   Design: bold oversized-number stat strip (editorial)
══════════════════════════════════════════════════════════════ */
const programmeDetails = [
    {
        icon: Clock,
        stat: "8",
        unit: "Weeks",
        accentColor: "text-brand-yellow",
        barColor: "bg-brand-yellow",
        title: "Intensive course",
        desc: "A focused, time-bound, job-oriented curriculum that creates quick and effective pathways to employment for urban youth.",
    },
    {
        icon: Globe,
        stat: "3",
        unit: "Modes",
        accentColor: "text-brand-blue",
        barColor: "bg-brand-blue",
        title: "Online, offline and self-learning sessions",
        desc: "A blended online and offline delivery model that combines the flexibility and accessibility of digital learning with the depth of in-person engagement to maximise reach, participation and learning outcomes.",
    },
    {
        icon: Zap,
        stat: "21st",
        unit: "Century",
        accentColor: "text-brand-red",
        barColor: "bg-brand-red",
        title: "Life and Employability Skills",
        desc: "Building the employability skills today’s employers value most — communication, problem-solving, teamwork, adaptability, confidence and workplace readiness — to help young people enter, succeed and progress in the world of work.",
    },
    {
        icon: Award,
        stat: "QP",
        unit: "Certification",
        accentColor: "text-brand-green",
        barColor: "bg-brand-green",
        title: "NCVET-approved QP based certification (optional)",
        desc: "Participants can opt for an NCVET-approved, QP-based certification that formally recognises their skills and enables them to earn up to 11 academic credits, supporting higher education and future learning pathways.",
    },
];

function ProgrammeDetailsSection() {
    return (
        <section className="py-20 bg-[#F7F7F5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Programme Details</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Youth Skilling Programme <span className="text-brand-red">highlights</span>
                    </h2>
                </FadeUp>

                {/* Phones: four cards you swipe through */}
                <div className={`${SWIPE_ROW} sm:hidden`}>
                    {programmeDetails.map((item) => (
                        <div
                            key={item.title}
                            className={`${SWIPE_ITEM} flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-1.5 self-stretch rounded-full ${item.barColor}`} />
                                <div className="min-w-0">
                                    <div className={`text-5xl font-black leading-none ${item.accentColor}`}>{item.stat}</div>
                                    <div className="mt-1.5 text-base font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/70">{item.unit}</div>
                                </div>
                                <div className={`ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.barColor}`}>
                                    <item.icon className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <h3 className="mt-5 text-xl font-extrabold leading-snug text-[#1A1A1A]">{item.title}</h3>
                            <p className="mt-2 text-base leading-relaxed text-[#1A1A1A]/80">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tablet and desktop: bold editorial stat strip */}
                <div className="hidden divide-y divide-gray-200 border-t border-gray-200 sm:block">
                    {programmeDetails.map((item, i) => (
                        <FadeUp key={item.title} delay={0.08 * i}>
                            <_MOTION.div
                                className="group grid grid-cols-1 md:grid-cols-[200px_minmax(0,0.9fr)_minmax(0,1.5fr)] gap-0 items-stretch cursor-default overflow-hidden"
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Big number block */}
                                <div className="flex items-center gap-4 py-8 md:pr-8">
                                    {/* Coloured left bar — expands on hover */}
                                    <div
                                        className={`shrink-0 w-1.5 group-hover:w-3 self-stretch ${item.barColor} transition-all duration-300 rounded-full`}
                                    />
                                    <div>
                                        <div className={`text-6xl md:text-7xl font-black leading-none ${item.accentColor} select-none`}>
                                            {item.stat}
                                        </div>
                                        <div className="text-base font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/70 mt-1.5">
                                            {item.unit}
                                        </div>
                                    </div>
                                </div>

                                {/* Title + icon */}
                                <div className="flex items-center py-8 md:px-8 md:border-l border-gray-200 gap-4">
                                    <div
                                        className={`shrink-0 w-10 h-10 rounded-xl ${item.barColor} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}
                                    >
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-extrabold text-[#1A1A1A] text-xl md:text-2xl leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="flex items-center py-8 md:px-8 md:border-l border-gray-200">
                                    <p className="border-l-4 border-transparent pl-4 text-lg md:text-xl leading-8 text-[#1A1A1A]/85 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1A1A1A] group-hover:border-brand-yellow">
                                        {item.desc}
                                    </p>
                                </div>
                            </_MOTION.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — STRUCTURE OF PROGRAMME
══════════════════════════════════════════════════════════════ */
const structureSteps = [
    {
        label: "Mobilisation",
        desc: "Community outreach to identify and engage eligible youth for the Youth Skilling Programme along with alumni referrals",
        color: "bg-brand-red",
        numColor: "bg-brand-red",
        textColor: "text-white",
    },
    {
        label: "Counselling",
        desc: "Understanding aspirations and providing career counselling and career guidance for both youth and parents",
        color: "bg-brand-yellow",
        numColor: "bg-brand-yellow",
        textColor: "text-brand-black",
    },
    {
        label: "Enrolment",
        desc: "Soft Launch, Registration, documentation",
        color: "bg-brand-blue",
        numColor: "bg-brand-blue",
        textColor: "text-white",
    },
    {
        label: "Training",
        desc: "8-week NCVET approved intensive 21st Century Life & Employability skills programme",
        color: "bg-brand-green",
        numColor: "bg-brand-green",
        textColor: "text-white",
    },
    {
        label: "Placement",
        desc: "Job interviews, job placement and connecting to employer partners",
        color: "bg-brand-magenta",
        numColor: "bg-brand-magenta",
        textColor: "text-white",
    },
    {
        label: "Support",
        desc: "Post-placement mentorship for sustainable livelihoods",
        color: "bg-brand-red",
        numColor: "bg-brand-red",
        textColor: "text-white",
    },
];

function StructureSection() {
    const phone = usePhone();
    return (
        <section id="programme-structure" className="py-12 sm:py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16">
                    <SectionTag dark>Structure of Programme</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Youth Skilling Programme{" "}
                        <span className="text-brand-yellow">Structure</span>
                    </h2>
                </FadeUp>

                {/* Step grid (on phones a row you swipe through) */}
                <div className={`${SWIPE_ROW} sm:grid sm:grid-cols-2 lg:grid-cols-3`}>
                    {structureSteps.map((step, i) => (
                        <FadeUp key={step.label} delay={0.07 * i} className={`flex flex-col sm:h-full ${SWIPE_ITEM}`} immediate={phone}>
                            {/* h-full on both, so every box in a row is as tall as the tallest one */}
                            <_MOTION.div
                                className="group relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                {/* Left accent */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${step.color}`} />
                                <div className="p-6 pl-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`${step.numColor} rounded-full w-8 h-8 flex items-center justify-center text-xs font-black shrink-0 ${step.textColor}`}
                                        >
                                            {i + 1}
                                        </div>
                                        {i < structureSteps.length - 1 && (
                                            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-brand-yellow/50 transition-colors hidden lg:block" />
                                        )}
                                    </div>
                                    <h3 className="font-extrabold text-white text-xl mb-2">{step.label}</h3>
                                    <p className="text-sm text-white/75 leading-relaxed">{step.desc}</p>
                                </div>
                            </_MOTION.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Linear connector strip (desktop only) */}
                <FadeUp delay={0.2} className="mt-10 hidden lg:block">
                    <div className="flex items-center gap-0">
                        {structureSteps.map((step, i) => (
                            <React.Fragment key={step.label}>
                                <div className={`h-1 flex-1 ${step.color} opacity-40`} />
                                {i < structureSteps.length - 1 && (
                                    <ChevronRight className="w-3.5 h-3.5 text-white/20 shrink-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — CORE COMPONENTS
══════════════════════════════════════════════════════════════ */
function CoreComponentsSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Core Components</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Programme Framework: <span className="text-brand-red">21st Century Life and Employability Skills</span>
                    </h2>
                </FadeUp>

                <FrameworkWheel data={YOUTH_FRAMEWORK} />
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — SECTORS AND ROLES
══════════════════════════════════════════════════════════════ */
const sectors = [
    {
        sector: "ITeS",
        roles: "CRM, IT Helpdesk Assistant, Data Entry",
        icon: MonitorSmartphone,
        color: "bg-brand-blue",
        textColor: "text-white",
    },
    {
        sector: "BFSI",
        roles: "Sales Associate, Relationship Executive, Business Development Executive, Loan Processing Officer, Phone Banking Officer",
        icon: WalletCards,
        color: "bg-brand-green",
        textColor: "text-white",
    },
    {
        sector: "Retail & E-Commerce",
        roles: "Sales Associate, Customer Service Executive, Relationship officer",
        icon: Store,
        color: "bg-brand-magenta",
        textColor: "text-white",
    },
    {
        sector: "Logistics",
        roles: "Inventory Executive, Documentation Executive, Data Entry / MIS Executive",
        icon: Truck,
        color: "bg-brand-red",
        textColor: "text-white",
    },
    {
        sector: "Tourism and Hospitality",
        roles: "Sales Executive, Relationship Executive",
        icon: Users,
        color: "bg-brand-yellow",
        textColor: "text-brand-black",
    },
];

function SectorsSection() {
    return (
        <section className="py-12 sm:py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-8 sm:mb-14">
                    <SectionTag>Sectors and Roles</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Opportunities for Youth: <span className="text-brand-red">Entry-Level Jobs and Sectors</span>
                    </h2>
                </FadeUp>

                {/* Table header */}
                <FadeUp delay={0.05}>
                    <div className="hidden md:grid grid-cols-2 mb-2">
                        {["Sector", "Roles Available"].map((col, ci) => (
                            <p
                                key={col}
                                className={`text-sm font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/65 ${ci === 0 ? "pl-5" : "px-6"}`}
                            >
                                {col}
                            </p>
                        ))}
                    </div>
                </FadeUp>

                {/* Sector rows — editorial strip layout */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {sectors.map((item, i) => (
                        <FadeUp key={item.sector} delay={0.08 * i}>
                            {/* Hover (or keyboard focus) is quiet: the row turns white, a thin bar in the sector colour
                                slides in on the left, the icon lifts a little and the role pills get a soft outline. */}
                            <div className="group relative grid grid-cols-[44px_minmax(0,1fr)] gap-x-4 gap-y-1.5 px-3 py-5 md:grid-cols-2 md:gap-0 md:p-0 items-stretch overflow-hidden transition-colors duration-300 hover:bg-white focus-within:bg-white">
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 ${item.color} transition-transform duration-300 group-hover:scale-y-100 group-focus-within:scale-y-100`}
                                />
                                {/* Col 1: sector name + icon */}
                                {/* (On phones this wrapper "disappears" so the icon, name and roles line up in one grid:
                                    icon on the left, name on top, its roles right underneath.) */}
                                <div className="contents md:flex md:items-center md:gap-4 md:py-6 md:pl-5 md:pr-6">
                                    <div
                                        className={`${item.color} row-span-2 self-start rounded-xl w-11 h-11 md:row-span-1 md:self-auto md:w-12 md:h-12 flex items-center justify-center shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md`}
                                    >
                                        <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.textColor}`} />
                                    </div>
                                    <h3 className="font-extrabold leading-snug text-[#1A1A1A] text-xl md:text-2xl">{item.sector}</h3>
                                </div>
                                {/* Roles. On phones: a tight list under the sector name, so every sector fits on screen at once.
                                    Tablet and desktop: small pills. */}
                                <div className="md:flex md:items-center md:py-6 md:px-6 md:border-l border-gray-200">
                                    <div>
                                        <ul className="flex flex-col gap-1 md:flex-row md:flex-wrap md:gap-2">
                                            {item.roles.split(", ").map((role) => (
                                                <li
                                                    key={role}
                                                    tabIndex={0}
                                                    className="flex items-start gap-2 text-[15px] leading-snug font-medium text-[#1A1A1A]/85 md:block md:rounded-full md:border md:border-gray-300/80 md:bg-white md:px-4 md:py-1.5 md:text-lg transition-colors duration-200 md:hover:border-[#1A1A1A]/40 hover:text-[#1A1A1A] focus-visible:outline-none md:focus-visible:border-[#1A1A1A]/40"
                                                >
                                                    <span aria-hidden="true" className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full md:hidden ${item.color}`} />
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* Bottom callout */}
                <FadeUp delay={0.2} className="mt-8">
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red/8 via-brand-yellow/8 to-brand-red/5 border border-brand-red/15 p-6">
                        <p className="text-base md:text-lg font-medium text-[#1A1A1A] text-center">
                            <span className="text-brand-red font-bold">
                                Youth are placed in entry-level grey-collar roles
                            </span>{" "}
                            across ITeS, BFSI, and Retail, Logistics, and Tourism &amp; Hospitality — sectors with high absorption and growth potential.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 6 — ELIGIBILITY CRITERIA
══════════════════════════════════════════════════════════════ */
const eligibility = [
    {
        icon: Users,
        color: "bg-brand-red",
        textColor: "text-white",
        title: "Age",
        value: "18 to 25 years",
    },
    {
        icon: Briefcase,
        color: "bg-brand-blue",
        textColor: "text-white",
        title: "Status",
        value: "Not in education, employment or training (NEET)",
    },
    {
        icon: BookOpen,
        color: "bg-brand-green",
        textColor: "text-white",
        title: "Education",
        value: "12th standard pass",
    },
    {
        icon: Target,
        color: "bg-brand-yellow",
        textColor: "text-brand-black",
        title: "Income",
        value: "Annual family income of 3.5 lakhs or less",
    },
];

function EligibilitySection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Eligibility</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Eligibility Criteria for the <span className="text-brand-red">Youth Skilling Programme</span>
                    </h2>
                </FadeUp>

                {/* Editorial strip rows */}
                <div className="divide-y divide-gray-100 border-t border-gray-100">
                    {eligibility.map((item, i) => (
                        <FadeUp key={item.title} delay={0.07 * i}>
                            {/* Same quiet hover as the Sectors table: the row turns soft grey, the colour block widens a little
                                and a tick appears. */}
                            <div className="group flex items-stretch overflow-hidden transition-colors duration-300 hover:bg-[#F7F7F5] focus-within:bg-[#F7F7F5]">
                                {/* Number (hidden on small phones to leave room for the text) */}
                                <div className="hidden sm:flex shrink-0 w-14 items-center justify-center">
                                    <span className="text-4xl font-black text-[#1A1A1A]/10 group-hover:text-[#1A1A1A]/20 transition-colors select-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                {/* Colour icon */}
                                <div
                                    className={`shrink-0 w-12 sm:w-14 sm:group-hover:w-20 flex items-center justify-center ${item.color} transition-all duration-300`}
                                >
                                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.textColor}`} />
                                </div>
                                {/* Content */}
                                <div className="flex-1 min-w-0 py-5 sm:py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:gap-16">
                                    <h3 className="font-black text-[#1A1A1A] text-xl md:text-2xl md:w-48 md:shrink-0">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg md:text-2xl font-medium text-[#1A1A1A]/85 leading-snug mt-1 md:mt-0 flex-1">
                                        {item.value}
                                    </p>
                                </div>
                                {/* Check reveal */}
                                <div className="hidden sm:flex shrink-0 items-center pr-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — STRATEGIC PARTNERSHIPS
══════════════════════════════════════════════════════════════ */
/* Names are the ones printed on each logo image. */
const partnerLogos = [
    { name: "Azim Premji Foundation", logo: "/partners/1 (13).jpg" },
    { name: "Bloomberg", logo: "/partners/1 (14).jpg" },
    { name: "Bank of America", logo: "/partners/1 (15).jpg" },
    { name: "Bosch", logo: "/partners/1 (16).jpg" },
    { name: "Decathlon", logo: "/partners/1 (17).jpg" },
    { name: "Deloitte", logo: "/partners/1 (18).jpg" },
];

function PartnershipsSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Strategic Partnerships</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Our Strategic <span className="text-brand-red">Partnerships</span>
                    </h2>
                    <p className="mt-4 text-[#1A1A1A]/70 max-w-md mx-auto text-sm leading-relaxed">
                        We collaborate with leading employers and organisations to create real job opportunities for trained youth.
                    </p>
                </FadeUp>

                {/* Same big, slowly moving logo row as the Partner pages */}
                <LogoMarquee partners={partnerLogos} rows={1} />
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 9 — CONTACT DETAILS
══════════════════════════════════════════════════════════════ */
function ContactSection() {
    return (
        <section id="contact-ysp" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <SectionTag dark>Contact Details</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Let's Connect About the <span className="text-brand-yellow">Youth Skilling Programme</span>
                    </h2>
                    <p className="mt-4 text-white/75 max-w-md mx-auto leading-relaxed">
                        Interested in partnering, enrolling, or learning more about the programme? Reach out directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <_MOTION.a
                        href="mailto:pdlivelihood@magicbusindia.org"
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-brand-yellow/40 transition-all duration-300 group max-w-2xl mx-auto"
                        whileHover={{ y: -3 }}
                    >
                        <div className="bg-brand-yellow rounded-xl p-4 shrink-0">
                            <Mail className="w-6 h-6 text-brand-black" />
                        </div>
                        <div className="min-w-0 max-w-full flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/65 mb-1">
                                Programme Point of Contact
                            </p>
                            <p className="font-extrabold text-xl text-white group-hover:text-brand-yellow transition-colors">
                                Director: Programme Design &amp; Development
                            </p>
                            <div className="mt-3 inline-flex max-w-full items-start gap-2 text-brand-yellow font-bold text-base break-all">
                                <Mail className="mt-1 w-4 h-4 shrink-0" />
                                pdlivelihood@magicbusindia.org
                            </div>
                        </div>
                        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity pr-2 self-center">
                            <ArrowRight className="w-5 h-5 text-brand-yellow" />
                        </div>
                    </_MOTION.a>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   OUTREACH AND IMPACT
══════════════════════════════════════════════════════════════ */
function ImpactSection() {
    const stats = [
        { num: "2,30,124", label: "Youth enrolled in Standard Skilling", icon: Users, tile: "bg-brand-red text-white", chip: "bg-white/20 text-white", sub: "text-white/90" },
        { num: "1,44,982", label: "Female participants", icon: Award, tile: "bg-brand-blue text-brand-black", chip: "bg-brand-black/10 text-brand-black", sub: "text-brand-black/85" },
        { num: "63%", label: "Female participation", icon: Target, tile: "bg-brand-yellow text-brand-black", chip: "bg-brand-black/10 text-brand-black", sub: "text-brand-black/85", bar: 63 },
    ];
    return (
        <section className="py-12 sm:py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-8 sm:mb-12">
                    <SectionTag>Outreach and Impact</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Outreach and <span className="text-brand-red">Impact</span>
                    </h2>
                    <p className="mt-3 text-base text-[#1A1A1A]/75">Cumulative enrolment as on August 2026</p>
                </FadeUp>
                {/* Three colour tiles. The numbers count up when they scroll into view. */}
                <div className="grid gap-4 md:grid-cols-3">
                    {stats.map((st, i) => (
                        <FadeUp key={st.label} delay={0.08 * i} className="h-full">
                            <_MOTION.div
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                className={`relative h-full overflow-hidden rounded-3xl p-6 shadow-lg md:p-7 ${st.tile}`}
                            >
                                <st.icon aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-10" />
                                {/* phones: icon beside the number, so each tile stays short; larger screens: icon above */}
                                <div className="relative flex items-center gap-4 md:block">
                                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${st.chip}`}>
                                        <st.icon className="h-5 w-5" />
                                    </span>
                                    <div className="min-w-0 md:mt-5">
                                        <p className="text-4xl font-black leading-none min-[400px]:text-5xl md:text-[clamp(2rem,3.6vw,3.25rem)]">
                                            <CountOnView value={st.num} />
                                        </p>
                                        <p className={`mt-2 text-lg font-semibold leading-snug md:mt-3 ${st.sub}`}>{st.label}</p>
                                    </div>
                                </div>
                                {st.bar && (
                                    <div className="relative mt-4 md:mt-5" aria-hidden="true">
                                        <div className="h-3 overflow-hidden rounded-full bg-brand-black/15">
                                            <_MOTION.div
                                                className="h-full rounded-full bg-brand-black"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${st.bar}%` }}
                                                viewport={{ once: true, margin: "-40px" }}
                                                transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </_MOTION.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SUCCESS STORIES
══════════════════════════════════════════════════════════════ */
const successStories = [
    {
        "name": "Bangaru Priyanka",
        "city": "Bangalore",
        "story": "Bangaru Priyanka, a 25-year-old from a financially struggling family in Bangalore, faced pressure to discontinue her education and focus on household responsibilities. After joining the Magic Bus Livelihood Programme at Siddapura, Whitefield, she built confidence, communication skills, workplace readiness and interview preparation skills. Priyanka secured a position as Technician at Pred Labs, Ramagondanahalli, earning INR 23,000 per month. She used her first salary to continue her college education, turning employment into a pathway for learning and independence. Today, she contributes to her family while inspiring other young women to pursue education and careers."
    },
    {
        "name": "Diksha Gangawane",
        "city": "Mumbai",
        "story": "Diksha Gangawane comes from a humble family of five, where her father works as a daily wage labourer and her mother manages the household. Although she had completed her education, limited confidence, communication skills and professional exposure led to repeated interview rejections. Through the Magic Bus youth skilling training programme, she gradually transformed from a shy and hesitant individual into a confident young professional by participating in sessions on Tally, Advanced Excel, GST, interview preparation, workplace readiness, mock interviews and group discussions. Magic Bus facilitated an interview with agility, where Diksha secured the position of Apprentice Trainee with a monthly salary package of INR 15,000 CTC. For Diksha, Magic Bus became the turning point that helped her begin her career and realise her dream of supporting her family."
    },
    {
        "name": "Dhakshayani SS",
        "city": "Bangalore",
        "story": "Dhakshayani SS paused her higher education when her father fell ill and lost his job, while her mother continued working in the garment sector to support the family. With limited English communication and interview exposure, she found it difficult to secure employment. At the Magic Bus Livelihood Programme at Bhavani Centre, she strengthened her communication, teamwork, problem-solving and leadership skills. She secured a Data Entry Operator role at Iron Mountain with a monthly CTC of INR 23,000. The job helped her support her mother financially, contribute to her father’s medical expenses and rebuild her confidence as a self-reliant young professional."
    },
    {
        "name": "Shaikh Asif",
        "city": "Bangalore",
        "story": "Shaikh Asif, a 23-year-old from Bangalore, grew up in a financially constrained household where his father, a carpenter, was the sole earner. Through the Magic Bus Livelihood Programme at Siddapura, Whitefield, he developed communication skills, workplace readiness and confidence. He secured a Technician role at Pred Labs, Ramagondanahalli, with a salary of INR 23,000 per month. One of his proudest moments was using his first salary to take admission in college and continue his education alongside work, showing how livelihood support can reopen educational aspirations as well as income pathways."
    },
    {
        "name": "Mantasha Zeenat",
        "city": "Kolkata",
        "story": "Mantasha Zeenat, a 22-year-old from Kolkata, faced financial hardship and uncertainty after completing Higher Secondary education. With limited career guidance and growing family responsibilities, she joined the Magic Bus Livelihood Programme at the DHL Kolkata Centre after learning about it through a youth peer. During the 45-day job skills training, she developed skills in communication, customer service, computer basics, teamwork and interview preparation. She secured a Customer Support Executive role at Tatwa Technologies Ltd with a salary of INR 13,000 per month. Her journey reflects how guidance, family engagement and skill development can help young women move from uncertainty to confidence and financial contribution."
    }
];

/* Same look as the testimonials on the other pages: a dark card with a yellow quote mark, one story at a time,
   with dots and arrows (and swipe on a touch screen). All stories sit in one grid cell, so the card never changes height. */
function SuccessStoriesSection() {
    const [active, setActive] = useState(0);
    const start = useRef(null);
    const count = successStories.length;
    const [open, setOpen] = useState(false); /* phones: the full story is opened with "Read full story" */
    const go = (n) => {
        setActive((n + count) % count);
        setOpen(false);
    };
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
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
        },
    };
    return (
        <section className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-8 sm:mb-12">
                    <SectionTag>Success Stories</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Success <span className="text-brand-red">Stories</span>
                    </h2>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-6 shadow-2xl ring-1 ring-brand-red/40 sm:p-10 md:p-12">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-red/30 blur-3xl" />
                        <Quote className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-white/10 sm:right-8 sm:top-6 sm:h-40 sm:w-40" />

                        <div className="relative grid" {...swipe} aria-live="polite">
                            {successStories.map((item, i) => (
                                <article
                                    key={item.name}
                                    inert={i !== active}
                                    aria-hidden={i !== active}
                                    className={`col-start-1 row-start-1 flex flex-col transition-opacity duration-300 ${
                                        i === active ? "opacity-100" : "pointer-events-none invisible opacity-0"
                                    }`}
                                >
                                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                                        <Quote className="h-6 w-6 text-brand-black" />
                                    </span>
                                    <p
                                        className={`text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl md:leading-relaxed sm:line-clamp-none ${
                                            open && i === active ? "" : "line-clamp-[9]"
                                        }`}
                                    >
                                        &ldquo;{item.story}&rdquo;
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setOpen((o) => !o)}
                                        className="mt-3 self-start text-base font-bold text-brand-yellow underline underline-offset-4 sm:hidden"
                                    >
                                        {open ? "Show less" : "Read full story"}
                                    </button>
                                    <footer className="mt-5 flex items-center gap-3 border-t border-white/20 pt-5 sm:mt-7">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20 text-lg font-black text-brand-yellow ring-4 ring-brand-yellow">
                                            {item.name.charAt(0)}
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-lg font-extrabold text-white sm:text-xl">{item.name}</p>
                                            <p className="text-base font-semibold text-brand-yellow">{item.city}</p>
                                        </div>
                                    </footer>
                                </article>
                            ))}
                        </div>

                        <div className="relative mt-6 flex items-center justify-between gap-3 sm:mt-8">
                            <div className="flex items-center gap-2">
                                {successStories.map((item, i) => (
                                    <button
                                        key={item.name}
                                        onClick={() => go(i)}
                                        className={`h-2.5 rounded-full transition-all ${
                                            i === active ? "w-10 bg-brand-yellow" : "w-4 bg-white/30 hover:bg-white/50"
                                        }`}
                                        aria-label={`Show story ${i + 1}: ${item.name}`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => go(active - 1)}
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-brand-yellow hover:text-brand-black"
                                    aria-label="Previous story"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => go(active + 1)}
                                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-brand-yellow hover:text-brand-black"
                                    aria-label="Next story"
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

/* ══════════════════════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════════════════════ */
export default function YouthSkillingProgramme() {
    usePageMeta({
        title: "Youth Skilling Programme: Job Course After 12th | Magic Bus",
        description:
            "Magic Bus Youth Skilling Programme: an 8-week employability skills course after 12th, with NCVET certification, up to 11 credits and job placement.",
    });

    return (
        <Layout>
            <FaqSchema faqs={yspFaq} />
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/youth-skilling.jpg"
                title="Skilling for Undergraduates Programme"
                titleSizeClassName="text-[2.15rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                subtitle="Connecting youth to livelihood opportunities through a job-oriented skilling course after 12th"
                ctas={[
                    {
                        href: "#programme-structure",
                        label: "View Programme Structure",
                        variant: "primary",
                        showArrow: true,
                    },
                    { href: "#contact-ysp", label: "Let's Connect" },
                ]}
            />

            {/* 1. About */}
            <AboutSection />

            {/* 2. Programme details */}
            <ProgrammeDetailsSection />

            {/* 3. Structure */}
            <StructureSection />

            {/* 4. Core components */}
            <CoreComponentsSection />

            {/* 5. Sectors & Roles */}
            <SectorsSection />

            {/* 6. Eligibility */}
            <EligibilitySection />

            {/* 7. Strategic partnerships */}
            <PartnershipsSection />

            {/* 8. FAQs */}
            <FAQSection
                items={yspFaq}
                title="Frequently Asked Questions"
                subtitle="Quick answers about job readiness, job retention, skills taught and certification."
            />

            {/* 9. Outreach and impact */}
            <ImpactSection />

            {/* 10. Success stories */}
            <SuccessStoriesSection />

            {/* 11. Contact */}
            <ContactSection />
        </Layout>
    );
}
