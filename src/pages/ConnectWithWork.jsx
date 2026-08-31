import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Briefcase,
    Building2,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    Mail,
    MonitorSmartphone,
    ShoppingBag,
    Store,
    Users,
    WalletCards,
    Zap,
    UtensilsCrossed,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { cwwFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ─────────────────────────────── helpers ─────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </motion.div>
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
                            About the{" "}
                            <span className="text-brand-red">Programme</span>
                        </h2>
                        <p className="mt-5 text-base text-[#1A1A1A]/65 leading-relaxed">
                            The Magic Bus Connect With Work programme is a rapid college-based programme
                            in core 21st century employability skills for graduate youth from underserved
                            households. After undergoing basic skilling, we link programme participants
                            to grey collar, entry level job opportunities and provide them with
                            post-placement support to ensure job continuity.
                        </p>
                        <p className="mt-4 text-base text-[#1A1A1A]/65 leading-relaxed">
                            The programme is conducted in tier II and III colleges, bringing
                            employability skills training directly to underserved graduate communities
                            across India.
                        </p>

                        {/* Quick stat strip */}
                        <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-100 pt-6">
                            {[
                                { num: "7–10", label: "Days Course" },
                                { num: "Tier II/III", label: "Colleges" },
                                { num: "Grey Collar", label: "Jobs Connected" },
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
                                src="/cww1.jpg"
                                alt="Connect With Work programme in action"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
                                    <div className="bg-brand-yellow rounded-xl p-2">
                                        <GraduationCap className="w-4 h-4 text-brand-black" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider">
                                            Connecting Graduates to
                                        </p>
                                        <p className="text-sm font-bold text-[#1A1A1A]">
                                            Entry-Level Opportunities
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
   SECTION 2 — PROGRAMME FEATURES
══════════════════════════════════════════════════════════════ */
const features = [
    {
        icon: CheckCircle2,
        accentColor: "text-brand-red",
        barColor: "bg-brand-red",
        stat: "Free",
        unit: "No Cost",
        title: "No Fees or Hidden Charges",
        desc: "The entire programme — from training to job placement support — is completely free for eligible graduates.",
    },
    {
        icon: Zap,
        accentColor: "text-brand-yellow",
        barColor: "bg-brand-yellow",
        stat: "7–10",
        unit: "Days",
        title: "Short, Intensive Course",
        desc: "A focused 7 to 10 day boot camp format designed to deliver maximum impact in minimum time.",
    },
    {
        icon: Users,
        accentColor: "text-brand-blue",
        barColor: "bg-brand-blue",
        stat: "Live",
        unit: "Offline",
        title: "Offline Sessions",
        desc: "In-person, interactive sessions held on campus for hands-on learning and peer collaboration.",
    },
    {
        icon: Briefcase,
        accentColor: "text-brand-green",
        barColor: "bg-brand-green",
        stat: "100%",
        unit: "Support",
        title: "Free Job Placement Support",
        desc: "Comprehensive placement assistance including job fairs, employer connections, and post-placement follow-up.",
    },
];

function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F7F7F5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Programme Features</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Programme <span className="text-brand-red">Features</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Four defining pillars that make CWW accessible, effective, and impactful.
                        </p>
                    </div>
                </FadeUp>

                {/* Editorial stat strip layout */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {features.map((item, i) => (
                        <FadeUp key={item.title} delay={0.07 * i}>
                            <motion.div
                                className="group grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-0 items-stretch cursor-default overflow-hidden"
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Big stat block */}
                                <div className="flex items-center gap-4 py-8 md:pr-8">
                                    <div
                                        className={`shrink-0 w-1.5 group-hover:w-3 self-stretch ${item.barColor} transition-all duration-300 rounded-full`}
                                    />
                                    <div>
                                        <div className={`text-5xl md:text-6xl font-black leading-none ${item.accentColor} select-none`}>
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
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — PROGRAMME STRUCTURE
══════════════════════════════════════════════════════════════ */
const structureSteps = [
    {
        label: "College Collaboration",
        desc: "Partnering with tier II and III colleges to facilitate the programme on campus",
        color: "bg-brand-red",
        numColor: "bg-brand-red",
        textColor: "text-white",
    },
    {
        label: "Mobilisation & Enrolment",
        desc: "Outreach to eligible graduating students and enrolment into the programme",
        color: "bg-brand-yellow",
        numColor: "bg-brand-yellow",
        textColor: "text-brand-black",
    },
    {
        label: "Boot Camp Training",
        desc: "7–10 day intensive offline sessions covering 21st century employability skills",
        color: "bg-brand-blue",
        numColor: "bg-brand-blue",
        textColor: "text-white",
    },
    {
        label: "Job Fair",
        desc: "Direct connections with employer partners through structured job fair events",
        color: "bg-brand-green",
        numColor: "bg-brand-green",
        textColor: "text-white",
    },
    {
        label: "Placement",
        desc: "Matching trained graduates to grey-collar, entry-level job opportunities",
        color: "bg-brand-magenta",
        numColor: "bg-brand-magenta",
        textColor: "text-white",
    },
    {
        label: "Post-Placement Support",
        desc: "Ongoing support and mentoring to ensure job retention and continuity",
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
                    <SectionTag dark>Programme Structure</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Programme{" "}
                            <span className="text-brand-yellow">Structure</span>
                        </h2>
                        <p className="text-white/45 max-w-sm text-sm leading-relaxed">
                            A six-step journey from campus to career — designed for speed and impact.
                        </p>
                    </div>
                </FadeUp>

                {/* Step grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {structureSteps.map((step, i) => (
                        <FadeUp key={step.label} delay={0.07 * i}>
                            <motion.div
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
                                    <h3 className="font-extrabold text-white text-lg mb-2 leading-snug">{step.label}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
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
                        Components of{" "}
                        <span className="text-brand-red">CWW Programme</span>
                    </h2>
                    <p className="mt-4 text-base text-[#1A1A1A]/60 leading-relaxed max-w-2xl">
                        The CWW programme is built around interconnected components that together
                        form a holistic pathway from education to sustainable employment.
                    </p>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                        <img
                            src="/cww-components.png"
                            alt="Components of the Connect With Work Programme"
                            className="w-full object-contain object-center"
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
        desc: "Information Technology enabled Services — fast-growing sector with strong demand for trained graduates.",
    },
    {
        sector: "BFSI",
        roles: "Sales Associate, Loan Processing Officer",
        icon: WalletCards,
        color: "bg-brand-green",
        textColor: "text-white",
        desc: "Banking, Financial Services and Insurance — entry-level roles with structured career progression pathways.",
    },
    {
        sector: "Retail & E-Commerce",
        roles: "Sales Associate, Customer Service",
        icon: ShoppingBag,
        color: "bg-brand-magenta",
        textColor: "text-white",
        desc: "India's booming retail sector offering accessible first job opportunities with high absorption rates.",
    },
    {
        sector: "QSR",
        roles: "Sales Associate, Customer Service",
        icon: UtensilsCrossed,
        color: "bg-brand-red",
        textColor: "text-white",
        desc: "Quick Service Restaurant sector — high-growth industry with strong entry-level employment demand.",
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
                            Sectors <span className="text-brand-red">and Roles</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Trained graduates are connected across four key industries with entry-level roles.
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

                {/* Sector rows */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {sectors.map((item, i) => (
                        <FadeUp key={item.sector} delay={0.08 * i}>
                            <motion.div
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
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Bottom callout */}
                <FadeUp delay={0.2} className="mt-8">
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red/8 via-brand-yellow/8 to-brand-red/5 border border-brand-red/15 p-6">
                        <p className="text-base md:text-lg font-medium text-[#1A1A1A] text-center">
                            <span className="text-brand-red font-bold">
                                Graduates are placed in entry-level grey-collar roles
                            </span>{" "}
                            across ITeS, BFSI, Retail & E-Commerce, and QSR — sectors with high absorption and growth potential.
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
        value: "21 to 25 years",
    },
    {
        icon: GraduationCap,
        color: "bg-brand-blue",
        textColor: "text-white",
        title: "Education",
        value: "Graduation completed",
    },
    {
        icon: Briefcase,
        color: "bg-brand-green",
        textColor: "text-white",
        title: "Status",
        value: "Not in education, employment or training (NEET)",
    },
];

function EligibilitySection() {
    const criteria = [
        {
            icon: Users,
            color: "bg-brand-red",
            textColor: "text-white",
            accentBg: "bg-brand-red/8",
            accentBorder: "border-brand-red/20",
            accentText: "text-brand-red",
            label: "Age Range",
            value: "21 – 25 years",
            note: "Open to graduates within this age group",
        },
        {
            icon: GraduationCap,
            color: "bg-[#1A1A1A]",
            textColor: "text-white",
            accentBg: "bg-[#1A1A1A]/5",
            accentBorder: "border-[#1A1A1A]/15",
            accentText: "text-[#1A1A1A]",
            label: "Education",
            value: "Graduation completed",
            note: "Any stream — BA, BSc, BCom and more",
        },
        {
            icon: Briefcase,
            color: "bg-brand-yellow",
            textColor: "text-brand-black",
            accentBg: "bg-brand-yellow/10",
            accentBorder: "border-brand-yellow/30",
            accentText: "text-[#1A1A1A]",
            label: "Status",
            value: "NEET",
            note: "Not in Education, Employment or Training",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <FadeUp className="mb-14">
                    <SectionTag>Eligibility</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Eligibility <span className="text-brand-red">Criteria</span>
                        </h2>
                        <p className="text-[#1A1A1A]/50 max-w-xs text-sm leading-relaxed">
                            Designed for graduate youth from underserved households seeking their first formal employment.
                        </p>
                    </div>
                </FadeUp>

                {/* 3 Bold Criteria Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {criteria.map((item, i) => (
                        <FadeUp key={item.label} delay={0.08 * i}>
                            <motion.div
                                className={`group relative rounded-3xl border ${item.accentBorder} ${item.accentBg} p-8 overflow-hidden cursor-default h-full`}
                                whileHover={{ y: -5, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                {/* Big number watermark */}
                                <div className="pointer-events-none absolute -bottom-4 -right-4 text-[120px] font-black leading-none select-none text-[#1A1A1A]/5">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}>
                                    <item.icon className={`w-7 h-7 ${item.textColor}`} />
                                </div>

                                {/* Label */}
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-2">
                                    {item.label}
                                </p>

                                {/* Value */}
                                <h3 className={`text-2xl md:text-3xl font-extrabold ${item.accentText} leading-tight mb-3`}>
                                    {item.value}
                                </h3>

                                {/* Note */}
                                <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">
                                    {item.note}
                                </p>

                                {/* Check badge */}
                                <div className="mt-6 inline-flex items-center gap-1.5">
                                    <CheckCircle2 className={`w-4 h-4 ${item.accentText} opacity-60`} />
                                    <span className="text-xs font-semibold text-[#1A1A1A]/40 uppercase tracking-wider">Required</span>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Banner callout */}
                <FadeUp delay={0.2}>
                    <div className="rounded-2xl overflow-hidden relative">
                        <img
                            src="/cww-banner.jpg"
                            alt="Connect With Work programme graduates"
                            className="w-full h-56 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/50 to-transparent flex items-center">
                            <div className="px-8 md:px-12 max-w-lg">
                                <p className="text-white font-extrabold text-2xl md:text-3xl leading-snug">
                                    Empowering graduates from{" "}
                                    <span className="text-brand-yellow">underserved households</span>
                                </p>
                                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                                    Tier II and III college graduates building sustainable livelihoods through CWW.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — CONTACT DETAILS
══════════════════════════════════════════════════════════════ */
function ContactSection() {
    return (
        <section id="contact-cww" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <SectionTag dark>Contact Details</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Get in Touch{" "}
                        <span className="text-brand-yellow">with Us</span>
                    </h2>
                    <p className="mt-4 text-white/50 max-w-md mx-auto leading-relaxed">
                        Interested in partnering, enrolling graduates, or learning more about the CWW programme? Reach out directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <motion.a
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
                    </motion.a>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════════════════════ */
export default function ConnectWithWork() {
    return (
        <Layout>
            <FaqSchema faqs={cwwFAQ} />
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/cww-banner.jpg"
                title="Connect With Work"
                subtitle="Skilling programme for graduates"
                description="A rapid college-based employability skilling programme for graduate youth from underserved households — linking them to grey-collar, entry-level jobs with ongoing post-placement support."
                ctas={[
                    {
                        href: "#programme-structure",
                        label: "View Programme Structure",
                        variant: "primary",
                        showArrow: true,
                    },
                    { href: "#contact-cww", label: "Get in Touch" },
                ]}
            />

            {/* 1. About */}
            <AboutSection />

            {/* 2. Features */}
            <FeaturesSection />

            {/* 3. Structure */}
            <StructureSection />

            {/* 4. Core components */}
            <CoreComponentsSection />

            {/* 5. Sectors & Roles */}
            <SectorsSection />

            {/* 6. Eligibility */}
            <EligibilitySection />

            {/* 7. FAQs */}
            <FAQSection
                items={cwwFAQ}
                title="Frequently Asked Questions"
                subtitle="Quick answers about the Connect With Work programme, eligibility, and placement support."
            />

            {/* 8. Contact */}
            <ContactSection />
        </Layout>
    );
}
