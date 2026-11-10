import React, { useRef } from "react";
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
    Star,
    MessageCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import FaqSchema from "../components/seo/FaqSchema";
import usePageMeta from "../hooks/usePageMeta";
import FrameworkWheel from "../components/programmes/FrameworkWheel";
import { YOUTH_FRAMEWORK } from "../components/programmes/frameworkWheelData";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];
const _MOTION = motion;

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <_MOTION.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 ${
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
                        <p className="mt-5 text-base text-[#1A1A1A]/65 leading-relaxed">
                            Magic Bus India Foundation’s Youth Skilling Programme equips undergraduate youth from underserved
                            communities with 21st-century life and employability skills through a structured two-month job-oriented
                            programme. Practical, application-based experiential learning builds job-ready skills and strengthens
                            communication, confidence, teamwork, problem-solving, English communication, AI foundations, interview
                            readiness, and career navigation. These employability skills enhance the competencies of youth and equip
                            them to enter into suitable entry-level formal jobs. Participants can also opt for NCVET-approved QP
                            code-based certification, enabling them to earn up to 11 academic credits that may be used toward higher
                            education under the credit framework envisaged in NEP 2020.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/65 leading-relaxed">
                            The Youth Skilling Programme helps young people build the confidence, skills and workplace readiness needed
                            to transition successfully into formal employment. Post-placement support further helps youth adapt to the
                            workplace, retain employment and progress towards sustainable livelihoods.
                        </p>

                        {/* Quick stat strip */}
                        <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-100 pt-6">
                            {[
                                { num: "8 Weeks", label: "Intensive Programme" },
                                { num: "2 Months", label: "Skilling Duration" },
                                { num: "Grey-Collar Jobs", label: "Transitioning to" },
                                { num: "11 academic credit", label: "Optional NCVET Certification" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-extrabold text-brand-red">{s.num}</p>
                                    <p className="text-xs text-[#1A1A1A]/50 leading-tight mt-0.5 max-w-[130px]">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Right: image */}
                    <FadeIn delay={0.1}>
                        <div className="relative rounded-3xl aspect-[4/3] shadow-2xl overflow-hidden">
                            <img
                                src="/ngo-images/6.jpg"
                                alt="Youth skilling in action"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                                    <div className="bg-brand-yellow rounded-xl p-2">
                                        <Star className="w-4 h-4 text-brand-black" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider">
                                            Connecting Youth to
                                        </p>
                                        <p className="text-sm font-bold text-[#1A1A1A]">
                                            Formal Entry-Level Opportunities
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Youth Skilling Programme <span className="text-brand-red">highlights</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Four defining features that shape the programme's reach and effectiveness.
                        </p>
                    </div>
                </FadeUp>

                {/* Bold editorial stat strip */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {programmeDetails.map((item, i) => (
                        <FadeUp key={item.title} delay={0.08 * i}>
                            <_MOTION.div
                                className="group grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-0 items-stretch cursor-default overflow-hidden"
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
                                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/35 mt-1">
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
                                    <h3 className="font-extrabold text-[#1A1A1A] text-xl leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="flex items-center py-8 md:px-8 md:border-l border-gray-200">
                                    <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{item.desc}</p>
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
    return (
        <section id="programme-structure" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16">
                    <SectionTag dark>Structure of Programme</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Youth Skilling Programme{" "}
                            <span className="text-brand-yellow">Structure</span>
                        </h2>
                        <p className="text-white/45 max-w-sm text-sm leading-relaxed">
                            A six-step journey from first contact to long-term employment support.
                        </p>
                    </div>
                </FadeUp>

                {/* Step grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {structureSteps.map((step, i) => (
                        <FadeUp key={step.label} delay={0.07 * i}>
                            <_MOTION.div
                                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
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
                                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
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

                <FadeUp delay={0.08}>
                    <FrameworkWheel data={YOUTH_FRAMEWORK} />
                </FadeUp>
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
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Sectors and Roles</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Opportunities for Youth: <span className="text-brand-red">Entry-Level Jobs and Sectors</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Trained youth are connected to employers across five key formal-sector industries.
                        </p>
                    </div>
                </FadeUp>

                {/* Table header */}
                <FadeUp delay={0.05}>
                    <div className="hidden md:grid grid-cols-2 gap-1 mb-2 px-2">
                        {["Sector", "Roles Available"].map((col) => (
                            <p
                                key={col}
                                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/35"
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
                            <_MOTION.div
                                className="group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-stretch cursor-default overflow-hidden"
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.015)" }}
                            >
                                {/* Col 1: sector name + icon */}
                                <div className="flex items-center gap-4 py-6 md:pr-6">
                                    <div
                                        className={`${item.color} rounded-xl w-12 h-12 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow`}
                                    >
                                        <item.icon className={`w-6 h-6 ${item.textColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[#1A1A1A] text-xl">{item.sector}</h3>
                                    </div>
                                </div>
                                {/* Col 2: roles */}
                                <div className="flex items-center py-6 md:px-6 md:border-l border-gray-200">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/35 mb-1 md:hidden">
                                            Roles
                                        </p>
                                        <p className="text-base font-semibold text-[#1A1A1A]/75 leading-relaxed">
                                            {item.roles}
                                        </p>
                                    </div>
                                </div>
                            </_MOTION.div>
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
        value: "Not in education, employment or training",
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
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Eligibility Criteria for the <span className="text-brand-red">Youth Skilling Programme</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Designed for youth from underserved backgrounds seeking their first formal employment.
                        </p>
                    </div>
                </FadeUp>

                {/* Editorial strip rows */}
                <div className="divide-y divide-gray-100 border-t border-gray-100">
                    {eligibility.map((item, i) => (
                        <FadeUp key={item.title} delay={0.07 * i}>
                            <_MOTION.div
                                className="group flex items-stretch overflow-hidden cursor-default"
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.015)" }}
                            >
                                {/* Number */}
                                <div className="shrink-0 w-14 flex items-center justify-center">
                                    <span className="text-4xl font-black text-[#1A1A1A]/8 group-hover:text-[#1A1A1A]/15 transition-colors select-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                {/* Colour icon */}
                                <div
                                    className={`shrink-0 w-14 group-hover:w-20 flex items-center justify-center ${item.color} transition-all duration-300`}
                                >
                                    <item.icon className={`w-5 h-5 ${item.textColor}`} />
                                </div>
                                {/* Content */}
                                <div className="flex-1 py-6 px-6 flex flex-col md:flex-row md:items-center md:gap-16">
                                    <h3 className="font-black text-[#1A1A1A] text-xl md:text-2xl min-w-[120px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-[#1A1A1A]/55 leading-relaxed mt-1 md:mt-0 flex-1">
                                        {item.value}
                                    </p>
                                </div>
                                {/* Check reveal */}
                                <div className="shrink-0 flex items-center pr-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
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
   SECTION 7 — STRATEGIC PARTNERSHIPS
══════════════════════════════════════════════════════════════ */
const partnerLogos = [
    "/partners/1 (13).jpg",
    "/partners/1 (14).jpg",
    "/partners/1 (15).jpg",
    "/partners/1 (16).jpg",
    "/partners/1 (17).jpg",
    "/partners/1 (18).jpg",
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
                    <p className="mt-4 text-[#1A1A1A]/50 max-w-md mx-auto text-sm leading-relaxed">
                        We collaborate with leading employers and organisations to create real job opportunities for trained youth.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {partnerLogos.map((logo, i) => (
                        <FadeUp key={logo} delay={0.04 * i}>
                            <_MOTION.div
                                className="rounded-2xl border border-gray-200 bg-white p-4 h-24 flex items-center justify-center hover:shadow-lg hover:border-brand-red/20 transition-all duration-300 group"
                                whileHover={{ y: -4 }}
                            >
                                <img
                                    src={logo}
                                    alt="Strategic partner logo"
                                    className="max-h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                                />
                            </_MOTION.div>
                        </FadeUp>
                    ))}
                </div>
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
                    <p className="mt-4 text-white/50 max-w-md mx-auto leading-relaxed">
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
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">
                                Programme Point of Contact
                            </p>
                            <p className="font-extrabold text-xl text-white group-hover:text-brand-yellow transition-colors">
                                Director: Programme Design &amp; Development
                            </p>
                            <div className="mt-3 inline-flex items-center gap-2 text-brand-yellow font-bold text-base">
                                <Mail className="w-4 h-4" />
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
        { num: "2,30,124", label: "Youth enrolled in Standard Skilling" },
        { num: "1,44,982", label: "Female participants" },
        { num: "63%", label: "Female participation" },
    ];
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12">
                    <SectionTag>Outreach and Impact</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Outreach and <span className="text-brand-red">Impact</span>
                    </h2>
                    <p className="mt-3 text-sm text-[#1A1A1A]/50">Cumulative enrolment as on August 2026</p>
                </FadeUp>
                <div className="grid sm:grid-cols-3 gap-4">
                    {stats.map((st, i) => (
                        <FadeUp key={st.label} delay={0.06 * i}>
                            <div className="rounded-2xl border border-gray-200 bg-white p-7 h-full">
                                <p className="text-4xl md:text-5xl font-black text-brand-red">{st.num}</p>
                                <p className="mt-2 text-sm font-semibold text-[#1A1A1A]/65">{st.label}</p>
                            </div>
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

function SuccessStoriesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12">
                    <SectionTag>Success Stories</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Success <span className="text-brand-red">Stories</span>
                    </h2>
                </FadeUp>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {successStories.map((item, i) => (
                        <FadeUp key={item.name} delay={0.05 * i}>
                            <article className="h-full rounded-2xl border border-gray-200 bg-[#F7F7F5] p-6 flex flex-col">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-extrabold text-[#1A1A1A]">{item.name}</h3>
                                    <span className="shrink-0 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black">
                                        {item.city}
                                    </span>
                                </div>
                                <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/70">{item.story}</p>
                            </article>
                        </FadeUp>
                    ))}
                </div>
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
