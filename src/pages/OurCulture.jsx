import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Heart, Shield, Users, Lightbulb, Star,
    Zap, BookOpen, TrendingUp, MessageCircle,
    Mail, ArrowRight, CheckCircle,
    Award, Quote, User, Sparkles, ExternalLink,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { cultureFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ─────────────────────────── helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

function FadeIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

function SectionTag({ children, dark = false }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase mb-4 ${dark ? "border border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow" : "border border-brand-black/15 bg-brand-yellow text-brand-black"
            }`}>
            {children}
        </span>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 0 — HERO / BANNER
══════════════════════════════════════════════════════════════ */
function CultureHeroBanner() {
    return (
        <HeroBanner
            badgeText="Magic Bus India Foundation"
            title="Our Culture"
            subtitle="Purpose is part of who we are"
            description="A workplace where curiosity is encouraged, integrity is non-negotiable, and people grow together while shaping something bigger than 'Self'."
            image="/great-place-to-work.jpg"
            showTitleDivider
            subtitleClassName="mt-3 text-xl md:text-2xl font-semibold text-white"
            descriptionClassName="mt-7 max-w-2xl text-base md:text-lg text-white leading-relaxed"
            ctas={[
                {
                    href: "#connect",
                    variant: "primary",
                    label: "Join Our Team",
                    showArrow: true,
                },
                {
                    href: "#awards",
                    variant: "secondary",
                    label: "Our Awards",
                    icon: Award,
                },
            ]}
        />
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — INTRODUCTION (infographic style)
══════════════════════════════════════════════════════════════ */
const culturePoints = [
    { icon: Lightbulb, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Curiosity", desc: "Curiosity fuels our innovation and keeps us moving forward. We thrive on questions, ideas, and fresh perspectives." },
    { icon: Shield, color: "bg-brand-blue", textColor: "text-white", title: "Integrity", desc: "Trust, transparency, and accountability guide everything we do and form the foundation of our culture." },
    { icon: TrendingUp, color: "bg-brand-green", textColor: "text-brand-black", title: "Learning", desc: "Growth is not only supported — it's expected and celebrated through new challenges and shared knowledge." },
    { icon: Zap, color: "bg-brand-magenta", textColor: "text-white", title: "Bold Ideas", desc: "We value experimentation over perfection. Bold ideas and calculated risks help us evolve and stay relevant." },
    { icon: Users, color: "bg-brand-red", textColor: "text-white", title: "Collaboration", desc: "Great things happen when people work together toward shared goals — because that's how we succeed." },
    { icon: Star, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Agility", desc: "Change is constant, and we embrace it. Our teams move fast and adapt with confidence." },
];


function PillarsExplorer() {
    const [active, setActive] = useState(0);
    const cur = culturePoints[active];
    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" role="tablist" aria-label="The six pillars of our culture">
                {culturePoints.map((pt, i) => {
                    const on = i === active;
                    return (
                        <motion.button
                            key={pt.title}
                            type="button"
                            role="tab"
                            aria-selected={on}
                            onClick={() => setActive(i)}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            className={`relative flex flex-col items-start gap-1.5 overflow-hidden rounded-xl border-2 px-3 py-2.5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/25 ${
                                on ? `${pt.color} ${pt.textColor} border-transparent shadow-lg` : "border-gray-200 bg-[#F7F7F5] text-[#1A1A1A] hover:border-[#1A1A1A]/30 hover:bg-white"
                            }`}
                        >
                            <span className={`text-xl font-black leading-none select-none ${on ? "opacity-40" : "text-[#1A1A1A]/20"}`}>{String(i + 1).padStart(2, "0")}</span>
                            <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${on ? "bg-white/25" : `${pt.color} ${pt.textColor}`}`}>
                                <pt.icon className="h-4 w-4" />
                            </span>
                            <span className="text-base font-extrabold leading-tight">{pt.title}</span>
                        </motion.button>
                    );
                })}
            </div>

            <motion.div
                key={active}
                role="tabpanel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`mt-4 flex flex-col items-start gap-5 rounded-2xl p-6 md:flex-row md:items-center md:p-7 ${cur.color} ${cur.textColor}`}
            >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/25">
                    <cur.icon className="h-7 w-7" />
                </span>
                <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{cur.title}</h3>
                    <p className="mt-2 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">{cur.desc}</p>
                </div>
            </motion.div>
        </div>
    );
}

function IntroSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Top split: text + image */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    <FadeUp>
                        <SectionTag>Who We Are</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mt-2">
                            A Culture Built on <span className="text-brand-red">Purpose</span>
                        </h2>
                        <p className="mt-5 text-lg text-[#1A1A1A]/80 leading-relaxed">
                            At Magic Bus, we believe that work should be meaningful, energising, and human. Our workplace is our second home — one where curiosity is encouraged, integrity is non-negotiable, and people grow together while shaping something bigger than 'Self'.
                        </p>
                        <p className="mt-4 text-lg text-[#1A1A1A]/80 leading-relaxed">
                            Every role at Magic Bus makes a difference and helps shape the organisation's direction. We empower our people to take ownership and create change that truly matters.
                        </p>
                        {/* Stats: same style as the programme pages */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 border-t border-gray-100 pt-6">
                            {[
                                { num: "6+", unit: "Years", label: "Great Place to Work", accent: "text-brand-yellow", bar: "bg-brand-yellow" },
                                { num: "90%", unit: "Employee", label: "Satisfaction", accent: "text-brand-blue", bar: "bg-brand-blue" },
                                { num: "3", unit: "National", label: "Awards", accent: "text-brand-red", bar: "bg-brand-red" },
                            ].map((st) => (
                                <div key={st.unit} className="flex items-stretch gap-3">
                                    <div className={`w-1.5 shrink-0 self-stretch rounded-full ${st.bar}`} />
                                    <div>
                                        <div className={`font-black leading-none select-none text-5xl md:text-6xl ${st.accent}`}>{st.num}</div>
                                        <div className="mt-2 text-base font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/70">{st.unit}</div>
                                        <div className="mt-1 text-lg leading-snug text-[#1A1A1A]/80">{st.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.1}>
                        <div className="relative rounded-3xl aspect-[4/3] shadow-2xl overflow-visible">
                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                <img src="/ngo-images/6.jpeg" alt="Magic Bus team members watering a young tree together" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                            </div>

                            <div className="absolute bottom-5 left-5 z-20">
                                <div className="relative inline-flex items-center rounded-3xl border border-white/70 bg-white/95 backdrop-blur-sm pl-10 pr-6 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.25)]">
                                    <div className="absolute -left-16 top-2/3 h-48 w-24 -translate-y-1/2">
                                        <img loading="lazy" decoding="async"
                                            src="/great-place-to-work-logo.png"
                                            alt="Great Place to Work logo"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-extrabold text-[#1A1A1A] leading-tight">Great Place to Work</p>
                                        <p className="text-xs text-[#1A1A1A]/70 leading-tight mt-1">Certified 6 years in a row</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Six pillars: pick one to read it */}
                <FadeUp className="mb-8">
                    <div className="flex items-center gap-4">
                        <div className="h-0.5 w-10 bg-brand-red" />
                        <p className="text-base md:text-lg font-bold tracking-[0.18em] uppercase text-[#1A1A1A]/75">The Six Pillars of Our Culture</p>
                    </div>
                </FadeUp>
                <PillarsExplorer />
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — AWARDS (cinematic stacked rows)
══════════════════════════════════════════════════════════════ */
const awards = [
    { img: "/ngo-images/award1.jpg", title: "Great Place to Work", sub: "Certified six consecutive years in a row" },
    { img: "/ngo-images/award2.jpg", title: "India's Best NGOs to Work For", sub: "Recognised nationally for workplace excellence" },
    { img: "/ngo-images/award3.jpg", title: "Best Employers Among Nation Builders", sub: "Honoured for meaningful contributions to society" },
];

function AwardsSection() {
    return (
        <section id="awards" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16">
                    <SectionTag dark>Recognition</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Awards &amp; <span className="text-brand-yellow">Recognition</span>
                        </h2>
                        <p className="text-white/85 max-w-md leading-relaxed text-base">
                            Consistent recognition for culture, employee wellbeing, and purposeful work.
                        </p>
                    </div>
                </FadeUp>

                {/* Cinematic stacked award rows */}
                <div className="space-y-4">
                    {awards.map((a, i) => (
                        <FadeUp key={a.title} delay={0.1 * i}>
                            <motion.div
                                className="group relative rounded-2xl overflow-hidden h-44 cursor-default"
                                whileHover={{ scale: 1.015 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <img loading="lazy" decoding="async"
                                    src={a.img} alt={a.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center opacity-20 group-hover:opacity-35 scale-105 group-hover:scale-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/85 to-[#111]/30" />
                                <div className="relative z-10 h-full flex items-center px-8 gap-6">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-xl">
                                        <Award className="w-7 h-7 text-brand-black" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-yellow mb-1">Award #{i + 1}</p>
                                        <h3 className="text-xl md:text-2xl font-extrabold text-white leading-snug">{a.title}</h3>
                                        <p className="text-base md:text-lg text-white/90 mt-1">{a.sub}</p>
                                    </div>
                                </div>
                                {/* Left accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — GREAT PLACE TO WORK (alternating rows)
══════════════════════════════════════════════════════════════ */
const gptw = [
    { icon: Shield, title: "Safe &amp; Positive", desc: "Our people consistently affirm that Magic Bus provides a safe workplace that contributes to a positive working environment." },
    { icon: Heart, title: "Meaningful Work", desc: "Many share that their work holds special meaning beyond being just a job — a sense of purpose embedded in every role." },
    { icon: Users, title: "Inclusive Culture", desc: "By embracing different backgrounds, experiences, and viewpoints, everyone can contribute authentically and perform at their best." },
    { icon: CheckCircle, title: "Ethics &amp; Accountability", desc: "Fairness, transparency, and mutual respect guide how we operate and form the basis of trust-based relationships across the organisation." },
    { icon: TrendingUp, title: "Professional Growth", desc: "We invest in building skills and expanding capabilities through real-world challenges and collaboration. Progress is actively recognised." },
    { icon: Star, title: "Community Impact", desc: "People are encouraged to take ownership and play a part in shaping both our work and our culture — contributing to something bigger." },
];

function GreatPlaceSection() {

    return (
        <section className="bg-white overflow-hidden">
            {/* ── TOP: heading + six interactive cards ── */}
            <div className="bg-white relative overflow-hidden border-t border-gray-100">
                <div className="pointer-events-none absolute -top-40 right-0 w-[460px] h-[460px] rounded-full bg-brand-red/4 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-yellow/8 blur-3xl" />

                {/* Top red accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red/20" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20">
                    <FadeUp className="mb-12 max-w-3xl">
                        <SectionTag>Great Place to Work</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mt-2">
                            What Makes Us a{" "}
                            <span className="relative inline-block">
                                <span className="text-brand-red">Great Place</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red/30 rounded-full" />
                            </span>{" "}
                            to Work?
                        </h2>
                        <p className="mt-5 text-[#1A1A1A]/80 leading-relaxed text-lg md:text-xl">
                            At Magic Bus, we are intentional about creating an environment where people feel respected, supported, and empowered to do meaningful work.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {gptw.map((item, i) => (
                            <FadeUp key={item.title} delay={0.06 * i} className="h-full">
                                <motion.div
                                    tabIndex={0}
                                    className="group relative flex h-full cursor-default flex-col gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5] p-6 transition-colors duration-300 hover:border-brand-red hover:bg-brand-red focus-visible:border-brand-red focus-visible:bg-brand-red focus-visible:outline-none"
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                >
                                    <span className="pointer-events-none absolute -bottom-3 -right-1 text-8xl font-black leading-none text-[#1A1A1A]/5 transition-colors group-hover:text-white/15 group-focus-visible:text-white/15 select-none">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 transition-colors duration-300 group-hover:bg-white/20 group-focus-visible:bg-white/20">
                                        <item.icon className="h-7 w-7 text-brand-red transition-colors duration-300 group-hover:text-white group-focus-visible:text-white" />
                                    </span>
                                    <div className="relative">
                                        <h3 className="text-xl md:text-2xl font-extrabold leading-snug text-[#1A1A1A] transition-colors group-hover:text-white group-focus-visible:text-white" dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <p className="mt-2 text-base md:text-lg leading-relaxed text-[#1A1A1A]/80 transition-colors group-hover:text-white group-focus-visible:text-white">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BOTTOM: Quote accent strip ── */}
            <FadeUp>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
                    <div className="relative rounded-3xl overflow-hidden bg-[#F7F7F5] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                        {/* Decorative left bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-yellow via-brand-red to-brand-red/30 rounded-l-3xl" />
                        <div className="shrink-0">
                            <div className="w-14 h-14 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-md">
                                <Quote className="w-6 h-6 text-brand-black" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl font-semibold text-[#1A1A1A] leading-relaxed italic">
                                "Ethical conduct and accountability guide how we operate. Fairness, transparency, and mutual respect form the basis of strong, trust-based relationships across the organisation."
                            </p>
                            <div className="mt-5 flex items-center gap-3">
                                <div className="w-6 h-0.5 bg-brand-red" />
                                <span className="text-sm text-[#1A1A1A]/70 font-bold uppercase tracking-widest">Magic Bus Culture Pillar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — CORE VALUES (editorial strip layout)
══════════════════════════════════════════════════════════════ */
const coreValues = [
    { icon: Shield, color: "bg-brand-red", textColor: "text-white", title: "Integrity", desc: "Our strong and transparent systems ensure smooth operations, upholding trust." },
    { icon: Heart, color: "bg-brand-blue", textColor: "text-white", title: "Passion", desc: "We follow a people-first approach and prioritise the well-being of our employees." },
    { icon: Users, color: "bg-brand-magenta", textColor: "text-white", title: "Respect", desc: "Teams feel valued in our positive culture, celebrating diversity and collaboration." },
    { icon: Lightbulb, color: "bg-brand-green", textColor: "text-brand-black", title: "Innovation", desc: "We are a technology-led organisation embracing change with agility." },
    { icon: Star, color: "bg-brand-yellow", textColor: "text-brand-black", title: "Collaboration", desc: "With shared ideas, we achieve common goals and impact millions." },
];

function CoreValuesSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-16">
                    <SectionTag>Values</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Core Values <span className="text-brand-red">Defining</span> Our Work
                        </h2>
                        <p className="text-[#1A1A1A]/75 max-w-sm text-base leading-relaxed">
                            Five values that guide every decision, every interaction, and every programme we run.
                        </p>
                    </div>
                </FadeUp>

                {/* Editorial bold strip layout */}
                <div className="divide-y divide-gray-100 border-t border-gray-100">
                    {coreValues.map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i}>
                            <motion.div
                                className="group flex items-stretch overflow-hidden cursor-default"
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.015)" }}
                            >
                                {/* Number column */}
                                <div className="shrink-0 w-14 flex items-center justify-center">
                                    <span className="text-4xl font-black text-[#1A1A1A]/15 group-hover:text-[#1A1A1A]/30 transition-colors select-none">{String(i + 1).padStart(2, "0")}</span>
                                </div>
                                {/* Color icon block */}
                                <div className={`shrink-0 w-14 group-hover:w-20 flex items-center justify-center ${v.color} transition-all duration-300`}>
                                    <v.icon className={`w-5 h-5 ${v.textColor}`} />
                                </div>
                                {/* Content */}
                                <div className="flex-1 py-6 px-6 flex flex-col md:flex-row md:items-center md:gap-16">
                                    <h3 className="font-black text-[#1A1A1A] text-2xl md:text-3xl md:w-64 md:shrink-0">{v.title}</h3>
                                    <p className="text-lg md:text-2xl font-medium text-[#1A1A1A]/85 leading-snug mt-1 md:mt-0 flex-1">{v.desc}</p>
                                </div>
                                {/* Arrow reveal */}
                                <div className="shrink-0 flex items-center pr-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="w-5 h-5 text-[#1A1A1A]/50" />
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
   SECTION 5 — WORKING HERE (photo mosaic) — UNCHANGED
══════════════════════════════════════════════════════════════ */
function WorkingHereSection() {
    return (
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-blue/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-red/8 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <FadeUp>
                        <SectionTag dark>Inside Magic Bus</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-2">
                            What Is It Like Working Here?
                        </h2>
                        <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                            At Magic Bus, employees feel supported, inspired, and motivated in creating change that matters. Our teams bring passion and collaboration to every initiative.
                        </p>

                        <div className="mt-8 space-y-3">
                            {[
                                "A culture of ownership and empowerment",
                                "Flexible, purpose-driven team environment",
                                "Strong sense of community and belonging",
                                "Continuous learning and challenge at every level",
                            ].map((point, i) => (
                                <FadeUp key={point} delay={0.08 * i}>
                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        className="group flex items-center gap-4 rounded-2xl border border-white/15 border-l-4 border-l-brand-yellow bg-white/10 px-5 py-4 transition-colors duration-300 hover:bg-brand-yellow"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-colors group-hover:bg-[#1A1A1A]">
                                            <CheckCircle className="h-6 w-6 text-brand-black transition-colors group-hover:text-brand-yellow" />
                                        </span>
                                        <p className="text-lg md:text-xl font-bold leading-snug text-white transition-colors group-hover:text-brand-black">{point}</p>
                                    </motion.div>
                                </FadeUp>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.1}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-3 gap-3 h-auto sm:h-[400px]">
                            <div className="h-40 sm:h-auto sm:col-span-2 sm:row-span-2 rounded-2xl overflow-hidden">
                                <img loading="lazy" decoding="async" src="/ngo-images/2.JPG" alt="Magic Bus team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="h-40 sm:h-auto rounded-2xl overflow-hidden">
                                <img src="/ngo-images/7.jpg" alt="A group of Magic Bus colleagues smiling and giving a thumbs up together" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="h-40 sm:h-auto rounded-2xl overflow-hidden">
                                <img src="/ngo-images/8.jpg" alt="Hindustan Times article &quot;National Sports Policy scores a goal&quot; showing girls playing football" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="h-40 sm:h-auto rounded-2xl overflow-hidden">
                                <img src="/ngo-images/10.jpg" alt="Five women holding a sign that reads Skills for Viksit Bharat 2047" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="h-40 sm:h-auto sm:col-span-2 rounded-2xl overflow-hidden">
                                <img src="/ngo-images/girl.jpeg" alt="Three smiling schoolchildren holding their textbooks" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 6 — HOW WE INVEST — UNCHANGED
══════════════════════════════════════════════════════════════ */
const investments = [
    {
        icon: BookOpen,
        color: "bg-brand-blue",
        textColor: "text-white",
        title: "Capability Development Program",
        desc: "Designed to upskill mid-level managers with leadership, communication, and project execution skills to drive social impact effectively.",
    },
    {
        icon: MessageCircle,
        color: "bg-brand-green",
        textColor: "text-brand-black",
        title: "Growth Talk Platform",
        desc: "Connects thought leadership with employees, bringing fresh perspectives that help teams learn and grow through open conversations.",
    },
    {
        icon: Users,
        color: "bg-brand-magenta",
        textColor: "text-white",
        title: "Alumni Connect",
        desc: "Re-engages former employees to gather insights, reduce attrition, and boost rehiring — with 5% of monthly hires from alumni via 'Ghar Vapasi'.",
    },
];

function InvestSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>Employee Investment</SectionTag>
                    <div className="grid lg:grid-cols-2 gap-8 items-end">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            How We Invest in Our Employees
                        </h2>
                        <p className="text-lg text-[#1A1A1A]/80 leading-relaxed">
                            Members of Magic Bus are encouraged to embrace continuous learning and grow with excellence. We support this through structured programmes and initiatives.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid md:grid-cols-3 gap-6">
                    {investments.map((item, i) => (
                        <FadeUp key={item.title} delay={0.08 * i} className="h-full">
                            <motion.div
                                className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                {/* Top colour bar */}
                                <div className={`absolute left-0 right-0 top-0 h-1.5 ${item.color}`} />
                                {/* Ghost number */}
                                <span className="pointer-events-none absolute -bottom-4 -right-2 text-[110px] font-black leading-none text-[#1A1A1A]/5 select-none transition-colors group-hover:text-[#1A1A1A]/10">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {/* Icon with soft halo */}
                                <div className="relative mb-6 w-fit">
                                    <span className={`absolute inset-0 rounded-2xl ${item.color} opacity-30 blur-md transition-opacity group-hover:opacity-60`} />
                                    <span className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                                        <item.icon className={`h-8 w-8 ${item.textColor}`} />
                                    </span>
                                </div>
                                <h3 className="relative text-2xl font-extrabold leading-snug text-[#1A1A1A] mb-3">{item.title}</h3>
                                <p className="relative text-base md:text-lg leading-relaxed text-[#1A1A1A]/80">{item.desc}</p>
                                {/* Arrow that appears on hover */}
                                <span className="relative mt-auto pt-6">
                                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${item.color} ${item.textColor} translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}>
                                        <ArrowRight className="h-5 w-5" />
                                    </span>
                                </span>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — TESTIMONIALS — UNCHANGED
══════════════════════════════════════════════════════════════ */
const testimonials = [
    {
        quote: "It is truly heartening to see adolescents from underserved communities embrace learning through our programmes. Their engagement reflects the work of our teams grounded in a culture of innovation and strong processes.",
        name: "Mercy K",
        role: "Curriculum – Programme Development",
        img: "/ngo-images/mercy.png",
        link: "https://www.linkedin.com/posts/magic-bus_employee-testimonial-mercy-activity-7127292955408670720-vlEl/",
    },
    {
        quote: "The company promotes innovation and values employee input, sparking fresh ideas and products. Flexible hours and wellness programs show they care about our wellbeing. Community involvement through volunteering adds a strong sense of purpose.",
        name: "Magic Bus Employee",
        role: "Team Member",
        img: "",
        link: "https://www.greatplacetowork.in/Magic-bus-Success-Story.pdf",
    },
];

function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Testimonials</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Hear from Our Employees
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed">
                        The voices of our people reflect the culture we have built — one of purpose, trust, and impact.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {testimonials.map((t, i) => (
                        <FadeUp key={t.name} delay={0.08 * i} className="h-full">
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-8 shadow-xl ring-1 ring-brand-red/30 transition-shadow duration-300 hover:shadow-2xl md:p-10"
                            >
                                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
                                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                                    <Quote className="h-7 w-7 text-brand-black" />
                                </span>
                                <p className="relative mt-6 flex-1 text-xl md:text-2xl font-semibold leading-relaxed text-white">
                                    "{t.quote}"
                                </p>
                                <div className="relative mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-yellow/20 ring-4 ring-brand-yellow">
                                        {t.img ? (
                                            <img loading="lazy" decoding="async" src={t.img} alt={t.name} className="h-full w-full object-cover" onError={e => e.target.style.display = 'none'} />
                                        ) : (
                                            <User className="h-8 w-8 text-brand-yellow" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xl font-extrabold text-white">{t.name}</p>
                                        <p className="text-base font-semibold text-brand-yellow">{t.role}</p>
                                    </div>
                                    {t.link && (
                                        <a href={t.link} target="_blank" rel="noopener noreferrer" aria-label={`Read more from ${t.name}`}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black">
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.1}>
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red to-[#c41a1f] text-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-7 h-7 text-brand-yellow shrink-0" />
                            <p className="font-semibold text-white">
                                Build a career with purpose at Magic Bus.{" "}
                                <span className="text-brand-yellow">Explore jobs here.</span>
                            </p>
                        </div>
                        <a href="https://www.magicbus.org/work-with-us.php" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 shrink-0 rounded-full bg-white px-6 py-3 font-bold text-brand-red transition hover:bg-brand-yellow hover:text-brand-black group">
                            View Open Positions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 8 — FAQs — UNCHANGED
══════════════════════════════════════════════════════════════ */
function FAQSectionWrapper() {
    return (
        <FAQSection
            items={cultureFAQ}
            title="Frequently Asked Questions"
            subtitle="Common questions about working at Magic Bus and our culture."
        />
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 9 — CONNECT / CONTACT — UNCHANGED
══════════════════════════════════════════════════════════════ */
function ConnectSection() {
    return (
        <section id="connect" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <SectionTag dark>Get In Touch</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Connect With Us</h2>
                    <p className="mt-3 text-white/55 max-w-md mx-auto leading-relaxed">Reach out to us for queries, partnerships, or career opportunities.</p>
                </FadeUp>

                <div className="grid sm:grid-cols-2 gap-5">
                    {[
                        { icon: Mail, label: "General Queries", email: "Info@magicbusindia.org", sub: "For general information and partnerships" },
                        { icon: Users, label: "Career Opportunities", email: "careers@magicbusindia.org", sub: "To explore roles and working with us" },
                    ].map((c, i) => (
                        <FadeUp key={c.label} delay={0.08 * i}>
                            <motion.a
                                href={`mailto:${c.email}`}
                                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-brand-yellow/40 transition-all duration-300 group"
                                whileHover={{ y: -3 }}
                            >
                                <div className="bg-brand-yellow rounded-xl p-3 shrink-0">
                                    <c.icon className="w-5 h-5 text-brand-black" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{c.label}</p>
                                    <p className="font-bold text-white group-hover:text-brand-yellow transition-colors">{c.email}</p>
                                    <p className="text-xs text-white/45 mt-1">{c.sub}</p>
                                </div>
                            </motion.a>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.15} className="mt-8 text-center">
                    <a href="https://www.magicbus.org/work-with-us.php" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-bold text-brand-black shadow-lg transition hover:shadow-xl hover:bg-brand-yellow/90 group">
                        Explore Career Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function OurCulture() {
    return (
        <Layout>
            <FaqSchema faqs={cultureFAQ} />
            <CultureHeroBanner />
            <IntroSection />
            <AwardsSection />
            <GreatPlaceSection />
            <CoreValuesSection />
            <WorkingHereSection />
            <InvestSection />
            <TestimonialsSection />
            <FAQSectionWrapper />
            <ConnectSection />
        </Layout>
    );
}
