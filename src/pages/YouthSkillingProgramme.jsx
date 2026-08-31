import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    Mail,
    MonitorSmartphone,
    Store,
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
            "The Youth Skilling Programme trains youth through experiential learning activities, role plays, and case studies, preparing them to join the workforce.",
    },
    {
        question: "Does the programme ensure job retention among participants?",
        category: "Retention",
        answer:
            "The programme offers mentorship and post-placement support to make sure youth retain their jobs and achieve sustainable livelihoods.",
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
                        <SectionTag>About Youth Skilling Programme</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mt-2">
                            About Youth Skilling{" "}
                            <span className="text-brand-red">Programme</span>
                        </h2>
                        <p className="mt-5 text-base text-[#1A1A1A]/65 leading-relaxed">
                            The Magic Bus Youth Livelihood Skilling programme offers undergraduate youth training in 21st century life
                            and employability skills that prepare them to enter the formal workforce. Through various hands-on group
                            and individual activities, we foster peer to peer learning, encourage collaboration, improve communication
                            and elevate confidence.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/65 leading-relaxed">
                            We impart core skills like Communicative English and mentor youth in order to prepare them to tackle job
                            interviews and navigate the job market with ease. Post completing the 2 months skilling programme, we
                            connect youth to entry-level grey-collar jobs.
                        </p>

                        {/* Quick stat strip */}
                        <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-100 pt-6">
                            {[
                                { num: "8 Weeks", label: "Intensive Programme" },
                                { num: "2 Months", label: "Skilling Duration" },
                                { num: "Grey-Collar", label: "Jobs Connected" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-extrabold text-brand-red">{s.num}</p>
                                    <p className="text-xs text-[#1A1A1A]/50 leading-tight mt-0.5 max-w-[90px]">
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
        title: "Intensive Course",
        desc: "A focused, time-bound curriculum that creates quick, effective pathways to employment for urban youth.",
    },
    {
        icon: Globe,
        stat: "2",
        unit: "Modes",
        accentColor: "text-brand-blue",
        barColor: "bg-brand-blue",
        title: "Online & Offline Sessions",
        desc: "Hybrid delivery combining digital flexibility with in-person community engagement for maximum reach.",
    },
    {
        icon: Zap,
        stat: "21st",
        unit: "Century",
        accentColor: "text-brand-red",
        barColor: "bg-brand-red",
        title: "Life & Employability Skills",
        desc: "Skills employers actually need — communication, problem solving, and full workplace readiness.",
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
                            Programme <span className="text-brand-red">Highlights</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Three defining features that shape the programme's reach and effectiveness.
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
        desc: "Community outreach to identify and engage eligible youth",
        color: "bg-brand-red",
        numColor: "bg-brand-red",
        textColor: "text-white",
    },
    {
        label: "Counselling",
        desc: "Understanding aspirations and providing career guidance",
        color: "bg-brand-yellow",
        numColor: "bg-brand-yellow",
        textColor: "text-brand-black",
    },
    {
        label: "Enrolment",
        desc: "Registration, documentation and baseline assessment",
        color: "bg-brand-blue",
        numColor: "bg-brand-blue",
        textColor: "text-white",
    },
    {
        label: "Training",
        desc: "8-week intensive life & employability skills programme",
        color: "bg-brand-green",
        numColor: "bg-brand-green",
        textColor: "text-white",
    },
    {
        label: "Placement",
        desc: "Job interviews and connecting to employer partners",
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
                        Programme <span className="text-brand-red">Components</span>
                    </h2>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white min-h-[75vh]">
                        <img
                            src="/youth-circle.jpg"
                            alt="Youth Skilling Programme components"
                            className="w-full h-[75vh] object-contain object-center"
                        />
                    </div>
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
        desc: "Information Technology enabled Services — a fast-growing sector with strong demand for trained youth.",
    },
    {
        sector: "BFSI",
        roles: "Sales Associate, Loan Processing Officer",
        icon: WalletCards,
        color: "bg-brand-green",
        textColor: "text-white",
        desc: "Banking, Financial Services and Insurance — entry-level roles with clear career progression pathways.",
    },
    {
        sector: "Retail & E-Commerce",
        roles: "Sales Associate, Customer Service",
        icon: Store,
        color: "bg-brand-magenta",
        textColor: "text-white",
        desc: "India's booming retail and digital commerce sector offering youth an accessible first job opportunity.",
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
                            Opportunities <span className="text-brand-red">for Youth</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Trained youth are connected to employers across three key formal-sector industries.
                        </p>
                    </div>
                </FadeUp>

                {/* Table header */}
                <FadeUp delay={0.05}>
                    <div className="hidden md:grid grid-cols-3 gap-1 mb-2 px-2">
                        {["Sector", "Roles Available", "About the Sector"].map((col) => (
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
                                className="group grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-stretch cursor-default overflow-hidden"
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
                                {/* Col 3: description */}
                                <div className="flex items-center py-6 md:px-6 md:border-l border-gray-200">
                                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.desc}</p>
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
                            across ITeS, BFSI, and Retail — sectors with high absorption and growth potential.
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
        value: "Annual family income of 1.2 lakh or less",
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
                            Eligibility <span className="text-brand-red">Criteria</span>
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
                        Let's <span className="text-brand-yellow">Connect</span>
                    </h2>
                    <p className="mt-4 text-white/50 max-w-md mx-auto leading-relaxed">
                        Interested in partnering, enrolling youth, or learning more about the programme? Reach out directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <_MOTION.a
                        href="mailto:leena.rao@magicbusindia.org"
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
                                Leena Rao
                            </p>
                            <p className="text-sm text-white/50 mt-0.5">
                                Head, Programme Design &amp; Development
                            </p>
                            <div className="mt-3 inline-flex items-center gap-2 text-brand-yellow font-bold text-base">
                                <Mail className="w-4 h-4" />
                                leena.rao@magicbusindia.org
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
   PAGE EXPORT
══════════════════════════════════════════════════════════════ */
export default function YouthSkillingProgramme() {
    return (
        <Layout>
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/youth-skilling.jpg"
                title="Youth Skilling Programme"
                subtitle="Connecting youth to opportunities"
                description="A focused pathway that equips youth with life and employability skills and connects them to formal entry-level jobs."
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
                subtitle="Quick answers about programme readiness and job retention support."
            />

            {/* 9. Contact */}
            <ContactSection />
        </Layout>
    );
}
