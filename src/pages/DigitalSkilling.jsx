import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    Bot,
    Briefcase,
    CheckCircle2,
    ChevronRight,
    Clock,
    Code2,
    GraduationCap,
    Lock,
    Mail,
    Monitor,
    Shield,
    Sparkles,
    Users,
    Wifi,
    Zap,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { digitalSkillingFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import usePageMeta from "../hooks/usePageMeta";
import usePhone from "../hooks/usePhone";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "", immediate = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={immediate || inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}
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
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

/* A figure (60 hours, Face to face ...) shown as a chip in its programme's colour.
   It pops in once, when it scrolls into view, and lifts a little when you point at it. No blinking. */
function Chip({ prog, children, i = 0 }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.06 * i }}
            whileHover={{ y: -3, scale: 1.06 }}
            className={`inline-block cursor-default whitespace-nowrap rounded-full px-3 py-1 text-base font-extrabold shadow-md sm:px-3.5 ring-1 ring-black/5 ${prog.accentBg} ${prog.chipText}`}
        >
            {children}
        </motion.span>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — ABOUT
   Design: Split — editorial left text + layered image collage right
══════════════════════════════════════════════════════════════ */
function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-[1.1] mb-6">
                            About Magic Bus{" "}
                            <span className="relative inline-block">
                                Digital
                                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-yellow rounded-full" />
                            </span>{" "}
                            Programmes
                        </h2>

                        <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-5">
                            To secure and sustain rewarding employment in today's AI-driven job scenario, youth must be equipped
                            with the right 21st century job skills, digital skills and AI literacy. Magic Bus digital programmes
                            provide youth from underserved communities with technical skilling in AI, data and web design and the
                            opportunity to secure white collar jobs.
                        </p>
                        <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-5">
                            We place them on the pathway towards tech career growth through free job placement support, and ensure
                            they retain in the jobs through life skills and employability training.
                        </p>
                        <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-8">
                            Key programmes are AI-Connect with Work (AI-CWW), STEM AI-CWW, Data Annotation, AI-Powered Data
                            Analytics and Web Design.
                        </p>

                        {/* 3 inline pills */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "AI & Cloud Skills", icon: Bot },
                                { label: "White Collar Jobs", icon: Briefcase },
                                { label: "Life Skills Embedded", icon: Sparkles },
                            ].map(({ label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2 rounded-full border border-[#0F0F23]/10 bg-[#F5F5F0] px-4 py-2"
                                >
                                    <Icon className="w-4 h-4 text-brand-red" />
                                    <span className="text-sm font-semibold text-[#1A1A1A]">{label}</span>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Right: layered image collage */}
                    <FadeIn delay={0.12}>
                        <div className="relative h-[480px]">
                            {/* Main image */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img loading="lazy" decoding="async"
                                    src="/digital-aboutprogram.jpg"
                                    alt="Digital skilling in progress"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F23]/30 to-transparent" />
                            </motion.div>

                            {/* Floating stat card — top right */}
                            <motion.div
                                className="absolute -bottom-4 -right-2 max-w-[120px] rounded-2xl bg-[#0F0F23] px-4 py-3 text-white shadow-2xl sm:-top-4 sm:-right-4 sm:bottom-auto sm:max-w-none sm:px-5 sm:py-4"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-4xl font-black text-brand-yellow">3</p>
                                <p className="text-sm text-white/80 mt-0.5 font-medium">Digital Programmes</p>
                            </motion.div>

                            {/* Floating badge — bottom left */}
                            <motion.div
                                className="absolute -bottom-4 -left-4 max-w-[150px] rounded-2xl bg-brand-yellow px-4 py-3 shadow-xl sm:max-w-none sm:px-5 sm:py-4"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-3xl font-black text-[#0F0F23]">100%</p>
                                <p className="text-sm text-[#0F0F23]/75 font-semibold mt-0.5">Free Placement Support</p>
                            </motion.div>

                            {/* Small AI sticker */}
                            <motion.div
                                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red to-[#c41a1f] flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs font-bold text-[#0F0F23]">AI-Ready</span>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — PROGRAMME FEATURES
   Design: Bold dark section with 3 oversized feature tiles in a mosaic
══════════════════════════════════════════════════════════════ */
const features = [
    {
        icon: GraduationCap,
        title: "Graduates are eligible",
        desc: "Open to graduates from any stream — STEM or non-STEM — from underserved communities seeking digital careers.",
        accent: "bg-brand-yellow",
        iconColor: "text-[#0F0F23]",
        span: "lg:col-span-1",
    },
    {
        icon: Briefcase,
        title: "Free job placement support",
        desc: "End-to-end placement assistance — from interview preparation to employer connections — completely free of cost.",
        accent: "bg-brand-red",
        iconColor: "text-white",
        span: "lg:col-span-1",
    },
    {
        icon: Bot,
        title: "Technology and AI fundamentals",
        desc: "Hands-on learning in AI tools, cloud computing, cyber security, and web design — the skills shaping tomorrow's workforce.",
        accent: "bg-[#0F0F23]",
        iconColor: "text-brand-yellow",
        span: "lg:col-span-1",
    },
];

function FeaturesSection() {
    const phone = usePhone();
    return (
        <section className="py-24 bg-[#0F0F23] relative overflow-hidden">
            {/* Decorative glows */}
            <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-red/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-brand-yellow/8 blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/25 bg-brand-yellow/10 px-4 py-1.5 mb-5">
                        <Zap className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
                            Programme Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Digital Programme{" "}
                        <span className="text-brand-yellow">Features</span>
                    </h2>
                </FadeUp>

                {/* Feature cards: on phones a row you swipe through; larger screens a grid of 3 equal cards */}
                <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.08 * i} className="flex w-[82%] shrink-0 snap-center flex-col md:h-full md:w-auto md:shrink" immediate={phone}>
                            <motion.div
                                className="group relative flex-1 rounded-2xl border border-white/8 bg-white/5 p-6 md:p-8 overflow-hidden cursor-default"
                                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.15)" }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                {/* Top accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 ${f.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${f.accent} flex items-center justify-center mb-6`}>
                                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-snug">{f.title}</h3>
                                <p className="text-base text-white/75 leading-relaxed">{f.desc}</p>

                                {/* Hover arrow */}
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                                    <ArrowRight className="w-4 h-4 text-brand-yellow" />
                                    <span className="text-xs font-semibold text-brand-yellow">Learn more</span>
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
   SECTION 3 — PROGRAMME DETAILS AT A GLANCE
   Design: Contemporary tabbed comparison — 3 programmes as columns
══════════════════════════════════════════════════════════════ */
const programmes = [
    {
        name: "Fundamentals of AI tools + STEM AI-CWW",
        icon: Bot,
        accentColor: "text-[#A16207]",
        accentBg: "bg-brand-yellow",
        chipText: "text-[#0F0F23]",
        borderColor: "border-brand-yellow",
        duration: "60 hours",
        mode: "Face to face",
        age: "20–25 years",
        workforce: "Grey collar",
        skills: ["AI Tool Basics", "Prompt Engineering", "Workflow Automation", "Digital Literacy"],
        highlight: "Shortest pathway to AI-ready employment",
    },
    {
        name: "Web design",
        icon: Code2,
        accentColor: "text-brand-red",
        accentBg: "bg-brand-red",
        chipText: "text-white",
        borderColor: "border-brand-red",
        duration: "265 hours",
        mode: "Face to face",
        age: "18–25 years",
        workforce: "White collar",
        skills: ["HTML & CSS", "UI/UX Principles", "Responsive Design", "Portfolio Building"],
        highlight: "Most comprehensive digital design track",
        featured: true,
    },
    {
        name: "AI-Data Analytics/Data Annotation",
        icon: BarChart3,
        accentColor: "text-[#34D399]",
        accentBg: "bg-[#34D399]",
        chipText: "text-[#0F0F23]",
        borderColor: "border-[#34D399]",
        duration: "240 hours",
        mode: "Face to face",
        age: "20–25 years",
        workforce: "White collar",
    },
];

const rows = [
    { label: "Course Duration", key: "duration", icon: Clock },
    { label: "Delivery Mode", key: "mode", icon: Monitor },
    { label: "Age Group", key: "age", icon: Users },
    { label: "Workforce", key: "workforce", icon: Briefcase },
];

function ProgrammeDetailsSection() {
    const [active, setActive] = useState(0);

    return (
        <section id="programmes" className="py-24 bg-[#F5F5F0] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <FadeUp className="mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0F0F23]/10 bg-white px-4 py-1.5 mb-5">
                        <Monitor className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0F0F23]/60">
                            Programme Details
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-tight max-w-4xl">
                            Our Digital Programmes{" "}
                            <span className="text-brand-red">at a Glance: AI, Data Analytics and Web Design Courses</span>
                        </h2>
                    </div>
                </FadeUp>

                {/* Tab switcher (mobile) */}
                <div className="flex gap-2 mb-6 lg:hidden overflow-x-auto pb-2">
                    {programmes.map((p, i) => (
                        <button
                            key={p.name}
                            onClick={() => setActive(i)}
                            className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-bold transition-all ${
                                active === i
                                    ? "bg-[#0F0F23] text-white"
                                    : "bg-white border border-gray-200 text-[#0F0F23]/75"
                            }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>

                {/* Desktop 3-column cards */}
                <div className="hidden lg:grid grid-cols-3 gap-5">
                    {programmes.map((prog, i) => (
                        <FadeUp key={prog.name} delay={0.07 * i} className="h-full">
                            <motion.div
                                className={`relative rounded-3xl bg-white border-2 ${prog.featured ? prog.borderColor : "border-transparent"} overflow-hidden shadow-sm h-full`}
                                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                            >
                                {prog.featured && (
                                    <div className={`absolute top-0 left-0 right-0 ${prog.accentBg} text-white text-sm font-black uppercase tracking-[0.2em] text-center py-2`}>
                                        Most Popular
                                    </div>
                                )}

                                <div className={`p-7 ${prog.featured ? "pt-10" : ""}`}>
                                    {/* Icon + name */}
                                    <div className={`w-12 h-12 rounded-xl ${prog.accentBg} flex items-center justify-center mb-5`}>
                                        <prog.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-[#0F0F23] leading-snug mb-1">{prog.name}</h3>
                                    {prog.highlight ? (
                                        <p className={`text-base font-semibold ${prog.accentColor} mb-6`}>{prog.highlight}</p>
                                    ) : (
                                        <div className="mb-6" />
                                    )}

                                    {/* Specs */}
                                    <div className="space-y-3 mb-7 border-t border-gray-100 pt-5">
                                        {rows.map(({ label, key, icon: Icon }) => (
                                            <div key={key} className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-2 text-[#0F0F23]/65">
                                                    <Icon className="w-4 h-4 shrink-0" />
                                                    <span className="text-base font-medium">{label}</span>
                                                </div>
                                                <span className="text-base font-bold text-[#0F0F23] text-right"><Chip prog={prog}>{prog[key]}</Chip></span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Skills */}
                                    {prog.skills && (
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-widest text-[#0F0F23]/60 mb-3">Skills Covered</p>
                                            <div className="flex flex-wrap gap-2">
                                                {prog.skills.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="rounded-full bg-[#F5F5F0] border border-gray-200 px-3.5 py-1.5 text-sm font-semibold text-[#0F0F23]/80"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Mobile single card view */}
                <div className="lg:hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm"
                        >
                            {(() => {
                                const prog = programmes[active];
                                return (
                                    <div className="p-7">
                                        <div className={`w-12 h-12 rounded-xl ${prog.accentBg} flex items-center justify-center mb-5`}>
                                            <prog.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-[#0F0F23] mb-1">{prog.name}</h3>
                                        {prog.highlight && (
                                            <p className={`text-base font-semibold ${prog.accentColor} mb-6`}>{prog.highlight}</p>
                                        )}
                                        <div className="space-y-3 border-t border-gray-100 pt-5 mb-6">
                                            {rows.map(({ label, key, icon: Icon }) => (
                                                <div key={key} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-[#0F0F23]/65">
                                                        <Icon className="w-4 h-4" />
                                                        <span className="text-base font-medium">{label}</span>
                                                    </div>
                                                    <span className="text-base font-bold text-[#0F0F23] text-right"><Chip prog={prog}>{prog[key]}</Chip></span>
                                                </div>
                                            ))}
                                        </div>
                                        {prog.skills && (
                                            <div className="flex flex-wrap gap-2">
                                                {prog.skills.map((s) => (
                                                    <span key={s} className="rounded-full bg-[#F5F5F0] px-3.5 py-1.5 text-sm font-semibold text-[#0F0F23]/80">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Programme Framework on phones: one block per programme, so nothing needs a sideways swipe */}
                <div className="mt-10 md:hidden">
                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#0F0F23]/60">Programme Framework</p>
                    <div className="space-y-4">
                        {programmes.map((p, pi) => (
                            <div key={p.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 bg-[#0F0F23] px-4 py-3">
                                    <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${p.accentBg}`} />
                                    <span className="text-lg font-bold leading-tight text-white">{p.name}</span>
                                </div>
                                <dl className="grid grid-cols-2 gap-px bg-gray-200">
                                    {rows.map(({ label, key, icon: Icon }) => (
                                        <div key={key} className="bg-white p-3.5">
                                            <dt className="flex items-start gap-1.5 text-sm font-medium text-[#0F0F23]/70">
                                                <Icon className="h-4 w-4 shrink-0" />
                                                {label}
                                            </dt>
                                            <dd className="mt-1.5 text-lg font-bold leading-snug text-[#0F0F23]">
                                                <Chip prog={p} i={pi}>{p[key]}</Chip>
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full comparison table (tablet and desktop) */}
                <FadeUp delay={0.15} className="mt-12 hidden md:block">
                  <div className="overflow-x-auto">
                    <div className="min-w-[720px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                        <div className="grid grid-cols-4 bg-[#0F0F23]">
                            <div className="p-5 text-sm md:text-base font-bold uppercase tracking-widest text-white/75">Programme Framework</div>
                            {programmes.map((p) => (
                                <div key={p.name} className="p-5 flex items-center gap-3">
                                    <div className={`w-2.5 h-2.5 shrink-0 rounded-full ${p.accentBg}`} />
                                    <span className="text-base md:text-lg font-bold text-white leading-tight">{p.name}</span>
                                </div>
                            ))}
                        </div>
                        {rows.map(({ label, key, icon: Icon }, ri) => (
                            <div
                                key={key}
                                className={`grid grid-cols-4 ${ri % 2 === 0 ? "bg-white" : "bg-[#F5F5F0]"}`}
                            >
                                <div className="p-5 flex items-center gap-2 text-[#0F0F23]/70">
                                    <Icon className="w-4 h-4 shrink-0" />
                                    <span className="text-base font-medium">{label}</span>
                                </div>
                                {programmes.map((p, pi) => (
                                    <div key={p.name} className="p-5 flex items-center">
                                        <span className="text-base md:text-lg font-bold text-[#0F0F23]"><Chip prog={p} i={pi}>{p[key]}</Chip></span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                  </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — OUTREACH & IMPACT
   Design: Bold bento-style stat grid on dark background
══════════════════════════════════════════════════════════════ */
const impactStats = [
    { num: "2,11,143", label: "Cumulative Enrolment in Digital Programmes", sub: "Young people enrolled as on August 2026" },
    { num: "1,22,271", label: "Female participation in Digital Programmes", sub: "58% of young people enrolled" },
    { num: "3", label: "Digital Programmes", sub: "AI, Data Analytics, Web Design" },
    { num: "White Collar", label: "Job Pathway", sub: "Technical sector opportunities" },
];

function OutreachImpactSection() {
    return (
        <section className="py-24 bg-[#0F0F23] relative overflow-hidden">
            {/* Gradient mesh */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-brand-red/10 to-transparent blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-5">
                        <Wifi className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                            Outreach & Impact
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Outreach and{" "}
                        <span className="text-brand-yellow">Impact of Digital Programmes</span>
                    </h2>
                </FadeUp>

                {/* Bento-style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {impactStats.map((stat, i) => (
                        <FadeUp key={stat.label} delay={0.07 * i} className="h-full">
                            <motion.div
                                className="group h-full rounded-2xl border border-white/8 bg-white/5 p-7 relative overflow-hidden cursor-default"
                                whileHover={{ borderColor: "rgba(255,255,255,0.2)", y: -4 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="text-4xl xl:text-5xl font-black text-brand-yellow mb-3">{stat.num}</div>
                                    <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                                    <div className="text-base text-white/70 leading-relaxed">{stat.sub}</div>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Wide image banner */}
                <FadeIn delay={0.2}>
                    <div className="relative rounded-3xl overflow-hidden h-72">
                        <img loading="lazy" decoding="async"
                            src="/ngo-images/Ai.jpeg"
                            alt="Digital skilling outreach"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F23]/90 via-[#0F0F23]/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-10 md:px-16">
                            <div className="max-w-lg">
                                <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-3">Our Reach</p>
                                <p className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
                                    Equipping youth with{" "}
                                    <span className="text-brand-yellow">21st century skills</span>{" "}
                                    for the digital economy
                                </p>
                                <p className="mt-4 text-white/80 text-base leading-relaxed max-w-md">
                                    Through our digital programmes, underserved youth gain access to technical skills
                                    that open doors to white collar careers.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — CONTACT
   Design: Two-column glass card on dark
══════════════════════════════════════════════════════════════ */
function ContactSection() {
    return (
        <section id="contact-digital" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-red/8 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0F0F23]/10 bg-white px-4 py-1.5 mb-5">
                        <Mail className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0F0F23]/60">
                            Contact Details
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-tight">
                        Let's Connect About <span className="text-brand-red">Digital Programmes</span>
                    </h2>
                    <p className="mt-4 text-[#0F0F23]/75 max-w-md mx-auto leading-relaxed">
                        Interested in the Digital Programmes? Reach out to our Director, Programme Design & Development directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="mailto:pdlivelihood@magicbusindia.org"
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#0F0F23] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-2xl" />

                        {/* Icon */}
                        <div className="relative shrink-0 w-16 h-16 rounded-2xl bg-brand-yellow flex items-center justify-center group-hover:shadow-lg transition-shadow">
                            <Mail className="w-7 h-7 text-[#0F0F23]" />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 max-w-full flex-1 relative">
                            <p className="text-sm font-bold uppercase tracking-widest text-white/65 mb-1">Director</p>
                            <p className="text-xl font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                                Programme Design &amp; Development
                            </p>
                            <div className="mt-4 inline-flex max-w-full items-start gap-2 text-brand-yellow font-bold text-[15px] sm:text-base break-all">
                                <Mail className="mt-1 hidden w-4 h-4 shrink-0 sm:block" />
                                pdlivelihood@magicbusindia.org
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="shrink-0 relative opacity-0 group-hover:opacity-100 transition-opacity">
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
export default function DigitalSkilling() {
    usePageMeta({
        title: "Digital Programmes: AI Skills for Youth | Magic Bus",
        description:
            "Magic Bus Digital Programmes: AI-CWW, data annotation, AI data analytics and web design courses for underserved youth, with free job placement support.",
    });

    return (
        <Layout>
            <FaqSchema faqs={digitalSkillingFAQ} />
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/digital-banner.jpg"
                title="Digital Programmes: AI and Digital Skilling for Youth"
                subtitle="Shaping Future-Ready Youth with AI and Digital Skills Training"
                titleGradient={false}
                description="Equipping youth from underserved communities with foundational AI skills, data annotation training, and AI-linked data analytics — opening pathways to white-collar tech careers and a digital future."
                ctas={[
                    {
                        href: "#programmes",
                        label: "Explore Programmes",
                        variant: "primary",
                        showArrow: true,
                    },
                    { href: "#contact-digital", label: "Get in Touch" },
                ]}
                showStats
                statsVariant="inline"
                statsStackOnPhone
                stats={[
                    { num: "3", label: "Digital Tracks" },
                    { num: "Nano & short-term courses", label: "60 hours AI-CWW / 240 Hours AI Data Analytics" },
                    { num: "White Collar", label: "Job Pathway" },
                ]}
            />

            {/* 1. About */}
            <AboutSection />

            {/* 2. Features */}
            <FeaturesSection />

            {/* 3. Programme Details */}
            <ProgrammeDetailsSection />

            {/* 4. Outreach & Impact */}
            <OutreachImpactSection />

            {/* 5. FAQs */}
            <FAQSection
                items={digitalSkillingFAQ}
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about our digital skill-building programmes."
            />

            {/* 6. Contact */}
            <ContactSection />
        </Layout>
    );
}
