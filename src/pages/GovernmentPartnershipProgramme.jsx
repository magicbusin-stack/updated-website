import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Mail, ArrowRight, BookOpen,
    Users, BarChart3, Building2, CheckCircle2, Landmark
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSectiom from "../components/Home/FAQSectiom";
import { governmentPartnershipFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

const EASE = [0.16, 1, 0.3, 1];

const outreachStats = [
    { label: "Adolescents Outreach", value: "29,56,366" },
    { label: "Schools", value: "27,737" },
    { label: "Master Trainers Trained", value: "1,474" },
    { label: "Teachers Trained", value: "37,389" },
    { label: "Girl Participants", value: "52%" },
    { label: "Government Partnerships", value: "11" },
    { label: "Aspirational Blocks", value: "141" },
];

const governmentPartners = [
    "/government partners/Govt Andhra Pradesh-01.png",
    "/government partners/Govt Assam-01.png",
    "/government partners/Govt Haryana-01.png",
    "/government partners/Govt Mizoram-01.png",
    "/government partners/Govt of Odisha.png",
    "/government partners/Govt Rajasthan-01.png",
    "/government partners/himachal.png",
    "/government partners/meghalaya.png",
    "/government partners/MP Govt Logo.jpg",
    "/government partners/chhatisgadh.png",
];

const foundationPartners = [
    "/foundation partners/azim.jpg",
    "/foundation partners/Echidnag.jpg",
    "/foundation partners/kadoorie.jpg",
    "/foundation partners/michael.jpg",
];

/* ── Helpers ─────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58, ease: EASE, delay }}>
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

function Tag({ children, light = false }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase ${
            light
                ? "border border-white/25 bg-white/10 text-white"
                : "border border-brand-red/20 bg-brand-red/8 text-brand-red"
        }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-brand-yellow" : "bg-brand-red"}`} />
            {children}
        </span>
    );
}

/* ── NEED SECTION ────────────────────────────────────────── */
function NeedSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeUp>
                        <Tag>Why It Matters</Tag>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            The Need for Adolescent <span className="text-brand-red">Support</span>
                        </h2>
                        <p className="mt-6 text-[#1A1A1A]/65 leading-relaxed text-base">
                            As 253 million adolescents in India cross the threshold from childhood into livelihood, only one-third will have a higher secondary qualification. Of these, only 2 in 5 will have the soft skills necessary for employment.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/65 leading-relaxed text-base">
                            Today, over 50% of employers list life skills like problem-solving, collaboration, and communication among the top valued job skills. By supporting holistic development, we enable adolescents to continue education and build better futures.
                        </p>
                        <div className="mt-8 flex items-center gap-3">
                            <div className="h-0.5 w-8 bg-brand-red" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/40">Source: magicbus.org</span>
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.1}>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                            {[
                                { icon: Users, val: "253M", label: "Adolescents in India", color: "bg-brand-red", tc: "text-white" },
                                { icon: BookOpen, val: "⅓", label: "Will have higher secondary qualification", color: "bg-brand-yellow", tc: "text-brand-black" },
                                { icon: BarChart3, val: "2 in 5", label: "Will have employability soft skills", color: "bg-brand-blue", tc: "text-white" },
                                { icon: CheckCircle2, val: "50%+", label: "Employers value life skills in top criteria", color: "bg-brand-green", tc: "text-white" },
                            ].map((item, i) => (
                                <motion.div key={item.label}
                                    className={`rounded-2xl ${item.color} p-5 flex flex-col gap-3`}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 * i, duration: 0.5, ease: EASE }}>
                                    <item.icon className={`w-5 h-5 ${item.tc} opacity-80`} />
                                    <p className={`text-3xl font-extrabold ${item.tc}`}>{item.val}</p>
                                    <p className={`text-xs ${item.tc} opacity-75 leading-snug`}>{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ── ABOUT SECTION ───────────────────────────────────────── */
function AboutSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
                    <FadeIn delay={0.08}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <img src="/ngo-images/5.jpeg" alt="Teacher training and life-skills integration"
                                className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                            <div className="absolute bottom-5 left-5">
                                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-xl">
                                    <div className="h-9 w-9 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                                        <Landmark className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-extrabold text-[#1A1A1A]">11 State Partners</p>
                                        <p className="text-[11px] text-[#1A1A1A]/55">Active MOUs across India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeUp delay={0.05}>
                        <Tag>What Is The Programme?</Tag>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Government <span className="text-brand-red">Partnership</span> Programme
                        </h2>
                        <p className="mt-6 text-[#1A1A1A]/65 leading-relaxed">
                            Equipping government school teachers to impart life skills education helps ensure holistic development of adolescents. To advance this mission, Magic Bus collaborates with institutions and agencies through the Government Partnership Programme.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/65 leading-relaxed">
                            The programme integrates life skills education into content, training, monitoring and assessment, while strengthening system capacity across teachers, school leaders, monitoring officers, and block and district administrators.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/65 leading-relaxed">
                            Our aim is to equip adolescents with life skills that build resilience, self-efficacy and agency.
                        </p>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ── WHAT WE DO — horizontal numbered timeline ───────────── */
function WhatWeDo() {
    const steps = [
        { icon: BookOpen, num: "01", title: "Classroom Life Skills", desc: "Teachers deliver life skills education in schools for adolescents from grades 6 to 10." },
        { icon: Users, num: "02", title: "Community Engagement", desc: "Interventions activate School Management Committees and community outreach." },
        { icon: CheckCircle2, num: "03", title: "Peer Support Structures", desc: "Peer support structures are established to sustain adolescent participation and confidence." },
        { icon: Building2, num: "04", title: "System Strengthening", desc: "System-level officials and cluster heads are oriented for collective planning and monitoring." },
    ];

    return (
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-yellow/8 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16">
                    <Tag light>What We Do</Tag>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        How We Drive <span className="text-brand-yellow">Change</span>
                    </h2>
                    <p className="mt-4 text-white/55 max-w-xl leading-relaxed">
                        A four-pillar approach that reaches adolescents, teachers, and systems simultaneously.
                    </p>
                </FadeUp>

                {/* Horizontal connector line on desktop */}
                {/* <div className="hidden lg:block relative mb-0">
                    <div className="absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red/30" />
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((s, i) => (
                        <FadeUp key={s.num} delay={0.08 * i}>
                            <motion.div
                                className="group relative flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-brand-yellow/30 transition-all duration-300 cursor-default"
                                whileHover={{ y: -4 }}
                            >
                                {/* Icon circle — acts as timeline node */}
                                <div className="w-11 h-11 rounded-full bg-brand-red flex items-center justify-center mb-5 shadow-lg shadow-brand-red/30 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-4xl font-black text-white/8 group-hover:text-white/12 transition-colors absolute top-4 right-5 leading-none select-none">{s.num}</p>
                                <h3 className="font-extrabold text-white text-base mb-2">{s.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── IMPLEMENTATION MODEL ────────────────────────────────── */
function ImplementationModel() {
    const [zoom, setZoom] = useState(false);
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-10">
                    <Tag>Implementation Model</Tag>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Programme Implementation <span className="text-brand-red">Model</span>
                    </h2>
                    <p className="mt-2 text-xs text-[#1A1A1A]/40 font-medium">Source: magicbus.org/government-partnership-programme.php</p>
                </FadeUp>

                <FadeIn delay={0.1}>
                    <button
                        onClick={() => setZoom(true)}
                        className="group w-full overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F5] p-4 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300"
                        aria-label="Open implementation model">
                        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                            <img src="/government partnership.png" alt="Programme implementation model"
                                className="w-full object-contain group-hover:scale-[1.01] transition-transform duration-500" />
                        </div>
                        <p className="mt-3 text-xs text-center text-[#1A1A1A]/35 font-medium">Click to enlarge</p>
                    </button>
                </FadeIn>
            </div>

            {zoom && (
                <button className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-5"
                    onClick={() => setZoom(false)} aria-label="Close">
                    <img src="/government partnership.png" alt="Implementation model enlarged"
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-3 shadow-2xl" />
                </button>
            )}
        </section>
    );
}

/* ── HOW WE WORK — split image + text ────────────────────── */
function HowWeWork() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <FadeUp>
                        <Tag>How We Work</Tag>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Working with the <span className="text-brand-red">Government</span>
                        </h2>
                        <p className="mt-6 text-[#1A1A1A]/65 leading-relaxed">
                            Through the Government Partnership Programme, teachers are trained to integrate life skills into classrooms and playgrounds, equipping adolescents to transition confidently from school to work.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/65 leading-relaxed">
                            With Magic Bus support, state education bodies co-create curricula, design training frameworks, and set up monitoring systems that drive and sustain lasting change.
                        </p>

                        <div className="mt-10 space-y-3">
                            {["Co-create curriculum with state education departments", "Train teachers and school leaders at scale", "Set up robust monitoring and evaluation systems", "Engage communities through parent and SMC outreach"].map((pt, i) => (
                                <FadeUp key={pt} delay={0.06 * i}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                        </div>
                                        <p className="text-sm text-[#1A1A1A]/70">{pt}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.1}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <img src="/ngo-images/2.JPG" alt="Working with the Government"
                                className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/30 via-transparent to-transparent mix-blend-multiply" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ── OUTREACH IMPACT — full-bleed stat ribbon ────────────── */
function OutreachImpact() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12">
                    <Tag>Outreach and Impact 2024–25</Tag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Programme <span className="text-brand-red">Outreach</span> & Impact
                        </h2>
                        <p className="text-xs text-[#1A1A1A]/40 font-medium md:text-right">Source: magicbus.org/outreach.php</p>
                    </div>
                </FadeUp>

                {/* Stat grid — alternating accent colours */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                    {outreachStats.map((item, i) => {
                        const accents = ["bg-brand-red text-white", "bg-brand-yellow text-brand-black", "bg-[#F7F7F5] text-[#1A1A1A]", "bg-white text-[#1A1A1A]"];
                        const cls = accents[i % accents.length];
                        return (
                            <FadeUp key={item.label} delay={0.05 * i}>
                                <div className={`${cls} p-6 border-r border-b border-gray-100 flex flex-col gap-2 h-full`}>
                                    <p className="text-3xl font-extrabold leading-none">{item.value}</p>
                                    <p className="text-xs font-medium opacity-70 leading-snug">{item.label}</p>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ── PARTNERS ─────────────────────────────────────────────── */
function Partners() {
    return (
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-yellow/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-red/8 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-14">
                    <Tag light>Our Partners</Tag>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Partners for the <span className="text-brand-yellow">Programme</span>
                    </h2>
                    <p className="mt-2 text-xs text-white/35 font-medium">Source: magicbus.org/government-partnership-programme.php</p>
                </FadeUp>

                {/* Government Partners */}
                <FadeUp className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-0.5 w-8 bg-brand-yellow" />
                        <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">Government Partners</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {governmentPartners.map((logo, i) => (
                            <FadeUp key={logo} delay={0.04 * i}>
                                <motion.div className="group h-28 rounded-2xl border border-white/10 bg-white flex items-center justify-center px-4 hover:border-brand-yellow/40 hover:scale-105 transition-all duration-300"
                                    whileHover={{ y: -2 }}>
                                    <img src={logo} alt={`Government partner ${i + 1}`}
                                        className="max-h-16 w-auto object-contain" loading="lazy" />
                                </motion.div>
                            </FadeUp>
                        ))}
                    </div>
                </FadeUp>

                {/* Foundation Partners */}
                <FadeUp>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-0.5 w-8 bg-brand-red" />
                        <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">Foundation Partners</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {foundationPartners.map((logo, i) => (
                            <FadeUp key={logo} delay={0.06 * i}>
                                <motion.div className="group h-28 rounded-2xl border border-white/10 bg-white flex items-center justify-center px-4 hover:border-brand-yellow/40 hover:scale-105 transition-all duration-300"
                                    whileHover={{ y: -2 }}>
                                    <img src={logo} alt={`Foundation partner ${i + 1}`}
                                        className="max-h-16 w-auto object-contain" loading="lazy" />
                                </motion.div>
                            </FadeUp>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ── SUCCESS STORY ───────────────────────────────────────── */
function SuccessStory() {
    const [zoom, setZoom] = useState(false);
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-10">
                    <Tag>Success Story</Tag>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Spreading <span className="text-brand-red">Impact</span>
                    </h2>
                    <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A]/70">
                        Government of Odisha and Magic Bus India Foundation's Kridangan Framework
                    </h3>
                    <p className="mt-2 text-xs text-[#1A1A1A]/40 font-medium">Source: Annual report 2024-25</p>
                </FadeUp>

                <FadeIn delay={0.08}>
                    <button
                        onClick={() => setZoom(true)}
                        className="group w-full overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F5] p-4 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300"
                        aria-label="Open Kridangan Framework">
                        <img src="/Kridangan.png"
                            alt="Kridangan Framework"
                            className="w-full rounded-2xl object-cover group-hover:scale-[1.005] transition-transform duration-500" />
                        <p className="mt-3 text-xs text-center text-[#1A1A1A]/35 font-medium">Click to enlarge</p>
                    </button>
                </FadeIn>
            </div>

            {zoom && (
                <button className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-5"
                    onClick={() => setZoom(false)} aria-label="Close">
                    <img src="/Kridangan.png"
                        alt="Kridangan Framework enlarged"
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white p-3 shadow-2xl" />
                </button>
            )}
        </section>
    );
}

/* ── CONTACT ─────────────────────────────────────────────── */
function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-10 text-center">
                    <Tag>Get In Touch</Tag>
                    <h2 className="mt-4 text-4xl font-extrabold text-[#1A1A1A]">Connect With Us</h2>
                    <p className="mt-3 text-[#1A1A1A]/55 max-w-md mx-auto">Reach out for support, partnerships, or queries about the programme.</p>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-5">
                    <FadeUp>
                        <div className="rounded-3xl bg-[#1A1A1A] p-8 text-white relative overflow-hidden h-full">
                            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-red/20 blur-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center mb-6">
                                    <Mail className="w-5 h-5 text-brand-black" />
                                </div>
                                <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">For CSR Support</p>
                                <h3 className="text-2xl font-extrabold mb-3">CSR Enquiries</h3>
                                <p className="text-white/65 text-sm mb-5">Sandhya R Krishnan: Director - Operations, Adolescent Programme</p>
                                <a href="mailto:sandhya.krishnan@magicbusindia.org"
                                    className="inline-flex items-center gap-2 font-semibold text-brand-yellow hover:gap-3 transition-all">
                                    <Mail className="w-4 h-4" />
                                    sandhya.krishnan@magicbusindia.org
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.08}>
                        <div className="rounded-3xl bg-[#F7F7F5] border border-gray-100 p-8 h-full">
                            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
                                <Mail className="w-5 h-5 text-brand-red" />
                            </div>
                            <p className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/40 mb-2">Other Enquiries</p>
                            <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-3">For Queries, Let's Connect</h3>
                            <p className="text-[#1A1A1A]/55 text-sm mb-5">For other inquiries related to Government Partnership Programme</p>
                            <a href="mailto:govtpartner@magicbusindia.org"
                                className="inline-flex items-center gap-2 font-semibold text-brand-red hover:gap-3 transition-all">
                                <Mail className="w-4 h-4" />
                                govtpartner@magicbusindia.org
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ── PAGE ─────────────────────────────────────────────────── */
export default function GovernmentPartnershipProgramme() {
    return (
        <Layout>
            <FaqSchema faqs={governmentPartnershipFAQ} />
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                title="Government Partnership Programme"
                subtitle="Aligning with national priorities to deliver life skills education at scale."
                image="/ngo-images/6.jpeg"
                showStats
                stats={[
                    { label: "State MOUs", value: "11" },
                    { label: "Adolescents Reached", value: "29.5L+" },
                    { label: "Aspirational Blocks", value: "141" }
                ]}
            />
            <NeedSection />
            <AboutSection />
            <WhatWeDo />
            <ImplementationModel />
            <HowWeWork />
            <OutreachImpact />
            <Partners />
            <SuccessStory />
            <FAQSectiom
                items={governmentPartnershipFAQ}
                title="Frequently Asked Questions"
                subtitle="Clear answers on reach, implementation, and outcomes of the Government Partnership Programme."
                categoriesLabel="Browse by topic"
            />
            <ContactSection />
        </Layout>
    );
}
