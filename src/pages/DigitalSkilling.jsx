import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
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

/* ─────────────────────────── animation helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#0F0F23] px-4 py-1.5 mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
                                About Digital Programmes
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-[1.1] mb-6">
                            About{" "}
                            <span className="relative inline-block">
                                Digital
                                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-yellow rounded-full" />
                            </span>{" "}
                            Programmes
                        </h2>

                        <p className="text-[17px] text-[#1A1A1A]/65 leading-relaxed mb-5">
                            To secure and sustain rewarding employment in today's job scenario, youth must be equipped
                            with the right 21st century job skills and digital skills.
                        </p>
                        <p className="text-[17px] text-[#1A1A1A]/65 leading-relaxed mb-8">
                            Our digital programmes provide youth from underserved communities with technical skilling
                            and the opportunity to secure white collar jobs. We place them on the pathway towards
                            career growth and ensure they retain their jobs through life skills and employability training.
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
                                    <Icon className="w-3.5 h-3.5 text-brand-red" />
                                    <span className="text-xs font-semibold text-[#1A1A1A]">{label}</span>
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
                                <img
                                    src="/digital-aboutprogram.jpg"
                                    alt="Digital skilling in progress"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F23]/30 to-transparent" />
                            </motion.div>

                            {/* Floating stat card — top right */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-[#0F0F23] text-white rounded-2xl px-5 py-4 shadow-2xl"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-3xl font-black text-brand-yellow">3</p>
                                <p className="text-xs text-white/60 mt-0.5 font-medium">Digital Programmes</p>
                            </motion.div>

                            {/* Floating badge — bottom left */}
                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-brand-yellow rounded-2xl px-5 py-4 shadow-xl"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-2xl font-black text-[#0F0F23]">100%</p>
                                <p className="text-xs text-[#0F0F23]/60 font-semibold mt-0.5">Free Placement Support</p>
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
        title: "Graduates Are Eligible",
        desc: "Open to graduates from any stream — STEM or non-STEM — from underserved communities seeking digital careers.",
        accent: "bg-brand-yellow",
        iconColor: "text-[#0F0F23]",
        span: "lg:col-span-1",
    },
    {
        icon: Briefcase,
        title: "Free Job Placement Support",
        desc: "End-to-end placement assistance — from interview preparation to employer connections — completely free of cost.",
        accent: "bg-brand-red",
        iconColor: "text-white",
        span: "lg:col-span-1",
    },
    {
        icon: Bot,
        title: "Technology & AI Fundamentals",
        desc: "Hands-on learning in AI tools, cloud computing, cyber security, and web design — the skills shaping tomorrow's workforce.",
        accent: "bg-[#0F0F23]",
        iconColor: "text-brand-yellow",
        span: "lg:col-span-1",
    },
];

function FeaturesSection() {
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
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
                            Programme Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Programme{" "}
                        <span className="text-brand-yellow">Features</span>
                    </h2>
                </FadeUp>

                {/* Feature grid — 3 equal cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.08 * i}>
                            <motion.div
                                className="group relative rounded-2xl border border-white/8 bg-white/5 p-8 overflow-hidden cursor-default h-full"
                                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.15)" }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                {/* Top accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 ${f.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${f.accent} flex items-center justify-center mb-6`}>
                                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">{f.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>

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
        name: "Fundamentals of AI Tools",
        icon: Bot,
        accentColor: "text-brand-yellow",
        accentBg: "bg-brand-yellow",
        borderColor: "border-brand-yellow",
        duration: "60 hours",
        mode: "Face to face",
        age: "18–25 years",
        workforce: "Grey Collar",
        skills: ["AI Tool Basics", "Prompt Engineering", "Workflow Automation", "Digital Literacy"],
        highlight: "Shortest pathway to AI-ready employment",
    },
    {
        name: "Web Design",
        icon: Code2,
        accentColor: "text-brand-red",
        accentBg: "bg-brand-red",
        borderColor: "border-brand-red",
        duration: "265 hours",
        mode: "Face to face",
        age: "18–25 years",
        workforce: "Grey Collar",
        skills: ["HTML & CSS", "UI/UX Principles", "Responsive Design", "Portfolio Building"],
        highlight: "Most comprehensive digital design track",
        featured: true,
    },
    {
        name: "Fundamentals of Cyber Security",
        icon: Shield,
        accentColor: "text-[#34D399]",
        accentBg: "bg-[#34D399]",
        borderColor: "border-[#34D399]",
        duration: "160 hours",
        mode: "Face to face",
        age: "18–25 years",
        workforce: "Grey Collar",
        skills: ["Network Security", "Threat Analysis", "Data Protection", "Security Protocols"],
        highlight: "High-demand sector with strong career prospects",
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
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F0F23]/60">
                            Programme Details
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-tight max-w-lg">
                            Our Digital Programmes{" "}
                            <span className="text-brand-red">at a Glance</span>
                        </h2>
                        <p className="text-[#0F0F23]/50 text-sm leading-relaxed max-w-xs">
                            Three distinct tracks — each designed to unlock white collar career pathways.
                        </p>
                    </div>
                </FadeUp>

                {/* Tab switcher (mobile) */}
                <div className="flex gap-2 mb-6 lg:hidden overflow-x-auto pb-2">
                    {programmes.map((p, i) => (
                        <button
                            key={p.name}
                            onClick={() => setActive(i)}
                            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                active === i
                                    ? "bg-[#0F0F23] text-white"
                                    : "bg-white border border-gray-200 text-[#0F0F23]/60"
                            }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>

                {/* Desktop 3-column cards */}
                <div className="hidden lg:grid grid-cols-3 gap-5">
                    {programmes.map((prog, i) => (
                        <FadeUp key={prog.name} delay={0.07 * i}>
                            <motion.div
                                className={`relative rounded-3xl bg-white border-2 ${prog.featured ? prog.borderColor : "border-transparent"} overflow-hidden shadow-sm h-full`}
                                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                            >
                                {prog.featured && (
                                    <div className={`absolute top-0 left-0 right-0 ${prog.accentBg} text-white text-[10px] font-black uppercase tracking-[0.2em] text-center py-1.5`}>
                                        Most Popular
                                    </div>
                                )}

                                <div className={`p-7 ${prog.featured ? "pt-10" : ""}`}>
                                    {/* Icon + name */}
                                    <div className={`w-12 h-12 rounded-xl ${prog.accentBg} flex items-center justify-center mb-5`}>
                                        <prog.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-[#0F0F23] leading-snug mb-1">{prog.name}</h3>
                                    <p className={`text-xs font-semibold ${prog.accentColor} mb-6`}>{prog.highlight}</p>

                                    {/* Specs */}
                                    <div className="space-y-3 mb-7 border-t border-gray-100 pt-5">
                                        {rows.map(({ label, key, icon: Icon }) => (
                                            <div key={key} className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-2 text-[#0F0F23]/40">
                                                    <Icon className="w-3.5 h-3.5 shrink-0" />
                                                    <span className="text-xs font-medium">{label}</span>
                                                </div>
                                                <span className="text-xs font-bold text-[#0F0F23] text-right">{prog[key]}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F0F23]/30 mb-3">Skills Covered</p>
                                        <div className="flex flex-wrap gap-2">
                                            {prog.skills.map((s) => (
                                                <span
                                                    key={s}
                                                    className="rounded-full bg-[#F5F5F0] border border-gray-200 px-3 py-1 text-[11px] font-semibold text-[#0F0F23]/65"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
                                        <h3 className="text-xl font-extrabold text-[#0F0F23] mb-1">{prog.name}</h3>
                                        <p className={`text-xs font-semibold ${prog.accentColor} mb-6`}>{prog.highlight}</p>
                                        <div className="space-y-3 border-t border-gray-100 pt-5 mb-6">
                                            {rows.map(({ label, key, icon: Icon }) => (
                                                <div key={key} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-[#0F0F23]/40">
                                                        <Icon className="w-3.5 h-3.5" />
                                                        <span className="text-xs font-medium">{label}</span>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#0F0F23]">{prog[key]}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {prog.skills.map((s) => (
                                                <span key={s} className="rounded-full bg-[#F5F5F0] px-3 py-1 text-[11px] font-semibold text-[#0F0F23]/65">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Full comparison table */}
                <FadeUp delay={0.15} className="mt-12">
                  <div className="overflow-x-auto">
                    <div className="min-w-[640px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                        <div className="grid grid-cols-4 bg-[#0F0F23]">
                            <div className="p-4 text-[10px] font-bold uppercase tracking-widest text-white/30">Framework</div>
                            {programmes.map((p) => (
                                <div key={p.name} className="p-4 flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${p.accentBg}`} />
                                    <span className="text-xs font-bold text-white leading-tight">{p.name}</span>
                                </div>
                            ))}
                        </div>
                        {rows.map(({ label, key, icon: Icon }, ri) => (
                            <div
                                key={key}
                                className={`grid grid-cols-4 ${ri % 2 === 0 ? "bg-white" : "bg-[#F5F5F0]"}`}
                            >
                                <div className="p-4 flex items-center gap-2 text-[#0F0F23]/50">
                                    <Icon className="w-3.5 h-3.5 shrink-0" />
                                    <span className="text-xs font-medium">{label}</span>
                                </div>
                                {programmes.map((p) => (
                                    <div key={p.name} className="p-4 flex items-center">
                                        <span className="text-xs font-bold text-[#0F0F23]">{p[key]}</span>
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
    { num: "3", label: "Digital Programmes", sub: "AI, Web Design, Cyber Security" },
    { num: "485", label: "Total Hours", sub: "Combined curriculum duration" },
    { num: "18–25", label: "Age Group", sub: "Youth from underserved communities" },
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
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                            Outreach & Impact
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Outreach and{" "}
                        <span className="text-brand-yellow">Impact</span>
                    </h2>
                </FadeUp>

                {/* Bento-style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {impactStats.map((stat, i) => (
                        <FadeUp key={stat.label} delay={0.07 * i}>
                            <motion.div
                                className="group rounded-2xl border border-white/8 bg-white/5 p-7 relative overflow-hidden cursor-default"
                                whileHover={{ borderColor: "rgba(255,255,255,0.2)", y: -4 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="text-4xl font-black text-brand-yellow mb-2">{stat.num}</div>
                                    <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                                    <div className="text-xs text-white/40 leading-relaxed">{stat.sub}</div>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Wide image banner */}
                <FadeIn delay={0.2}>
                    <div className="relative rounded-3xl overflow-hidden h-72">
                        <img
                            src="/ngo-images/Ai.jpeg"
                            alt="Digital skilling outreach"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F23]/90 via-[#0F0F23]/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-10 md:px-16">
                            <div className="max-w-lg">
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Our Reach</p>
                                <p className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
                                    Equipping youth with{" "}
                                    <span className="text-brand-yellow">21st century skills</span>{" "}
                                    for the digital economy
                                </p>
                                <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-sm">
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
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F0F23]/60">
                            Contact Details
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F23] leading-tight">
                        Let's <span className="text-brand-red">Connect</span>
                    </h2>
                    <p className="mt-4 text-[#0F0F23]/50 max-w-md mx-auto leading-relaxed">
                        Interested in the Digital Skilling Programme? Reach out to our Senior Director directly.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="mailto:harish.hariharan@magicbusindia.org"
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#0F0F23] rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden"
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
                        <div className="flex-1 relative">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Senior Director</p>
                            <p className="text-xl font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                                Harish Hariharan
                            </p>
                            <p className="text-sm text-white/50 mt-0.5 mb-4">
                                Digital Skilling and Livelihoods
                            </p>
                            <div className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm">
                                <Mail className="w-4 h-4" />
                                harish.hariharan@magicbusindia.org
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
    return (
        <Layout>
            <FaqSchema faqs={digitalSkillingFAQ} />
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/digital-banner.jpg"
                title="Digital Programmes"
                subtitle="Shaping Future-Ready Youth"
                titleGradient={false}
                description="Equipping youth from underserved communities with AI, web design, and cyber security skills — opening pathways to white collar careers and a digital future."
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
                stats={[
                    { num: "3", label: "Digital Tracks" },
                    { num: "485hrs", label: "Combined Content" },
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
