import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Globe,
    Layers,
    Mail,
    MessageCircle,
    Monitor,
    Smartphone,
    Sparkles,
    TrendingUp,
    Users,
    Wifi,
    Zap,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { futureXFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ────────────── design tokens — Magic Bus brand palette ────────────── */
const FX_RED    = "#E12228";   // brand-red  → primary
const FX_YELLOW = "#FFCC04";   // brand-yellow → accent / highlight
const FX_BLUE   = "#21BDEA";   // brand-blue → secondary nodes
const FX_DARK   = "#111111";   // near-black
const EASE = [0.16, 1, 0.3, 1];

/* ────────────── animation helpers ────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}>
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
            transition={{ duration: 0.65, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — ABOUT FUTUREX
══════════════════════════════════════════════════════════════ */
const channels = [
    { icon: Monitor,       label: "Virtual Sessions",  angle: 0   },
    { icon: Users,         label: "In-Person",         angle: 90  },
    { icon: Smartphone,    label: "Mobile App",        angle: 180 },
    { icon: MessageCircle, label: "WhatsApp Chatbot",  angle: 270 },
];

function OrbitVisual() {
    // Container is 320×320px (w-80/h-80) so centre = 160,160
    const CX = 160;
    const NODE_R = 128;   // radius for the icon nodes
    const LABEL_R = 180;  // radius for text labels — far out from nodes

    return (
        <div className="relative w-80 h-80 mx-auto">
            {/* Centre hub */}
            <motion.div
                className="absolute inset-0 m-auto w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-10"
                style={{ background: `linear-gradient(135deg, ${FX_RED}, ${FX_YELLOW})` }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/5" />

            {/* Channel nodes */}
            {channels.map((ch, i) => {
                const rad = (ch.angle * Math.PI) / 180;
                const cx = CX + NODE_R * Math.sin(rad) - 24;
                const cy = CX - NODE_R * Math.cos(rad) - 24;
                return (
                    <motion.div
                        key={ch.label}
                        className="absolute w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 shadow-lg"
                        style={{ left: cx, top: cy, backgroundColor: "#222222" }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: EASE }}
                        whileHover={{ scale: 1.15 }}
                    >
                        <ch.icon className="w-5 h-5"
                            style={{ color: i % 2 === 0 ? FX_RED : FX_YELLOW }} />
                    </motion.div>
                );
            })}

            {/* Labels — placed at LABEL_R, centred on the label width */}
            {channels.map((ch, i) => {
                const rad = (ch.angle * Math.PI) / 180;
                const cx = CX + LABEL_R * Math.sin(rad);
                const cy = CX - LABEL_R * Math.cos(rad);

                // Anchor adjustment so text is centred horizontally / vertically on the point
                const anchorX = ch.angle === 0   ? -48   // top  → shift left by ~half label width
                              : ch.angle === 90  ?  8    // right → leave a small gap
                              : ch.angle === 180 ? -48   // bottom → shift left
                                                 : -100; // left  → shift far left (label is right of calc point)
                const anchorY = ch.angle === 0   ? -18   // top → push above
                              : ch.angle === 90  ?  -8   // right → vertically centred
                              : ch.angle === 180 ?  8    // bottom → below
                                                 :  -8;  // left → vertically centred
                return (
                    <motion.span
                        key={ch.label}
                        className="absolute text-[9px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                        style={{ left: cx + anchorX, top: cy + anchorY, color: "rgba(255,255,255,0.40)" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                    >
                        {ch.label}
                    </motion.span>
                );
            })}
        </div>
    );
}

function AboutSection() {
    return (
        <section className="py-24 overflow-hidden relative" style={{ backgroundColor: FX_DARK }}>
            {/* Ambient glows — brand red + yellow */}
            <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
                style={{ backgroundColor: `${FX_RED}18` }} />
            <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
                style={{ backgroundColor: `${FX_YELLOW}12` }} />
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
                            style={{ borderColor: `${FX_RED}40`, backgroundColor: `${FX_RED}12` }}>
                            <Sparkles className="w-3.5 h-3.5" style={{ color: FX_RED }} />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                                style={{ color: FX_RED }}>Strategic Initiative</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                            What is{" "}
                            <span style={{ color: FX_RED }}>FutureX?</span>
                        </h2>

                        <p className="text-[16px] text-white/60 leading-relaxed mb-5">
                            FutureX is an innovative strategic initiative of{" "}
                            <span className="text-white font-semibold">Magic Bus India Foundation</span>{" "}
                            built for delivering life and employability skills to youth from underserved communities
                            by leveraging technology.
                        </p>
                        <p className="text-[16px] text-white/60 leading-relaxed mb-10">
                            This programme is a strategic partnership between Magic Bus and{" "}
                            <span className="text-white font-semibold">Michael Susan Dell Foundation (MSDF)</span>.
                        </p>

                        {/* Key fact pills */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "9 Goals", sub: "One per week" },
                                { label: "Blended Learning", sub: "Tech-enabled" },
                                { label: "4 Channels", sub: "Multi-platform" },
                                { label: "MSDF Partnership", sub: "Strategic" },
                            ].map((pill) => (
                                <motion.div
                                    key={pill.label}
                                    className="rounded-xl border border-white/8 bg-white/5 px-4 py-2.5"
                                    whileHover={{ borderColor: `${FX_RED}50`, backgroundColor: `${FX_RED}10`, y: -2 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                >
                                    <p className="text-white font-bold text-sm">{pill.label}</p>
                                    <p className="text-white/35 text-[10px] font-semibold uppercase tracking-wider">{pill.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Right: Orbit visual */}
                    <FadeIn delay={0.15}>
                        <div className="relative flex flex-col items-center gap-6">
                            <OrbitVisual />
                            {/* Channel legend */}
                            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                                {channels.map((ch, i) => (
                                    <div key={ch.label}
                                        className="flex items-center gap-2 rounded-xl border border-white/6 bg-white/4 px-3 py-2">
                                        <ch.icon className="w-3.5 h-3.5 shrink-0"
                                            style={{ color: i % 2 === 0 ? FX_RED : FX_YELLOW }} />
                                        <span className="text-[11px] font-semibold text-white/55">{ch.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — BENEFITS
══════════════════════════════════════════════════════════════ */
const benefits = [
    {
        icon: Users,
        title: "Peer-Learning Approach",
        desc: "Youth learn alongside peers, fostering collaboration, shared experiences, and community-led growth throughout the programme.",
        gradient: `linear-gradient(135deg, ${FX_RED}12, ${FX_YELLOW}06)`,
        borderColor: `${FX_RED}25`,
        iconColor: FX_RED,
    },
    {
        icon: Wifi,
        title: "Flexibility to Learn Anytime",
        desc: "Participants can access learning modules at their own pace — on their schedule, not constrained by fixed classroom timings.",
        gradient: `linear-gradient(135deg, ${FX_YELLOW}18, ${FX_RED}06)`,
        borderColor: `${FX_YELLOW}30`,
        iconColor: FX_YELLOW,
    },
    {
        icon: Layers,
        title: "Blended, Tech-Enabled Learning",
        desc: "A powerful mix of digital content, AI-powered tools, and on-the-ground facilitation creates a rich, scalable learning experience.",
        gradient: `linear-gradient(135deg, ${FX_BLUE}15, ${FX_RED}06)`,
        borderColor: `${FX_BLUE}25`,
        iconColor: FX_BLUE,
    },
    {
        icon: Globe,
        title: "In-Person and Digital Sessions",
        desc: "The programme bridges the digital divide by combining face-to-face sessions with virtual and mobile-first learning journeys.",
        gradient: `linear-gradient(135deg, ${FX_RED}12, ${FX_BLUE}08)`,
        borderColor: `${FX_RED}25`,
        iconColor: FX_RED,
    },
];

function BenefitsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111]/10 bg-[#FFF8F8] px-4 py-1.5 mb-5">
                        <Zap className="w-3.5 h-3.5" style={{ color: FX_RED }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111]/50">Why FutureX</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
                        Benefits of{" "}
                        <span style={{ color: FX_RED }}>FutureX</span>
                    </h2>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {benefits.map((b, i) => (
                        <FadeUp key={b.title} delay={0.07 * i}>
                            <motion.div
                                className="group relative rounded-3xl border p-8 overflow-hidden cursor-default h-full"
                                style={{ background: b.gradient, borderColor: b.borderColor }}
                                whileHover={{ y: -6, boxShadow: `0 24px 56px ${b.iconColor}18` }}
                                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                            >
                                {/* Ghost num */}
                                <div className="pointer-events-none absolute -bottom-3 -right-3 text-[90px] font-black leading-none select-none"
                                    style={{ color: `${b.iconColor}10` }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                                    style={{ backgroundColor: `${b.iconColor}15` }}>
                                    <b.icon className="w-6 h-6" style={{ color: b.iconColor }} />
                                </div>

                                <h3 className="text-xl font-extrabold text-[#111] mb-3 leading-snug">{b.title}</h3>
                                <p className="text-sm text-[#111]/55 leading-relaxed">{b.desc}</p>

                                <div className="mt-6 h-0.5 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${b.iconColor}50, transparent)` }} />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — FUTUREX IN ACTION
══════════════════════════════════════════════════════════════ */
function InActionSection() {
    return (
        <section className="py-24 overflow-hidden relative" style={{ backgroundColor: FX_DARK }}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-14">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
                                style={{ borderColor: `${FX_RED}35`, backgroundColor: `${FX_RED}12` }}>
                                <TrendingUp className="w-3.5 h-3.5" style={{ color: FX_RED }} />
                                <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                                    style={{ color: FX_RED }}>Real Impact</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                FutureX in{" "}
                                <span style={{ color: FX_YELLOW }}>Action</span>
                            </h2>
                        </div>
                        <p className="text-white/40 max-w-xs text-sm leading-relaxed">
                            Youth from underserved communities building skills and confidence through FutureX's blended learning approach.
                        </p>
                    </div>
                </FadeUp>

                {/* Image grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
                    {/* Main large image */}
                    <FadeUp>
                        <motion.div
                            className="relative rounded-3xl overflow-hidden h-80 lg:h-[420px]"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src="/futurex1.png" alt="FutureX in action"
                                className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0"
                                style={{ background: `linear-gradient(to top, ${FX_DARK}CC 0%, transparent 60%)` }} />

                            {/* Overlaid stat */}
                            <motion.div
                                className="absolute bottom-5 left-5 rounded-2xl border border-white/10 backdrop-blur-md px-5 py-4"
                                style={{ backgroundColor: "rgba(17,17,17,0.80)" }}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-2xl font-black text-white">9 Weeks</p>
                                <p className="text-xs text-white/45 mt-0.5">Structured programme duration</p>
                            </motion.div>
                        </motion.div>
                    </FadeUp>

                    {/* Right column */}
                    <div className="flex flex-col gap-4">
                        <FadeUp delay={0.08}>
                            <motion.div
                                className="relative rounded-3xl overflow-hidden h-48"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="/futurex-testimonial.png" alt="Youth participants"
                                    className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0"
                                    style={{ background: `linear-gradient(to top, ${FX_DARK}BB 0%, transparent 55%)` }} />
                            </motion.div>
                        </FadeUp>

                        {/* Delivery mode card — brand red → yellow gradient */}
                        <FadeUp delay={0.14}>
                            <div className="rounded-3xl p-6 flex-1 relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${FX_RED}, #C0392B)` }}>
                                <div className="pointer-events-none absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/10" />
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-3">Programme Delivery</p>
                                <div className="space-y-2.5">
                                    {[
                                        { icon: Monitor,       label: "Virtual Sessions" },
                                        { icon: Users,         label: "In-Person Training" },
                                        { icon: Smartphone,    label: "Mobile Learning App" },
                                        { icon: MessageCircle, label: "WhatsApp Chatbot" },
                                    ].map(({ icon: Icon, label }) => (
                                        <div key={label} className="flex items-center gap-2.5">
                                            <Icon className="w-3.5 h-3.5 text-white/70 shrink-0" />
                                            <span className="text-white font-semibold text-sm">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* Bottom metric strip */}
                <FadeUp delay={0.2} className="mt-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { num: "1 Goal", sub: "Introduced per week" },
                            { num: "9 Weeks", sub: "Full programme duration" },
                            { num: "4 Channels", sub: "Blended delivery modes" },
                            { num: "MSDF", sub: "Strategic partner" },
                        ].map((s) => (
                            <motion.div
                                key={s.num}
                                className="rounded-2xl border border-white/8 bg-white/4 px-6 py-4"
                                whileHover={{ borderColor: `${FX_RED}45`, y: -3 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                <p className="text-xl font-black text-white">{s.num}</p>
                                <p className="text-xs text-white/35 mt-0.5 font-semibold">{s.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — TESTIMONIAL
══════════════════════════════════════════════════════════════ */
function TestimonialSection() {
    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111]/10 bg-white px-4 py-1.5 mb-5">
                        <BookOpen className="w-3.5 h-3.5" style={{ color: FX_RED }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111]/50">Voices</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
                        Read <span style={{ color: FX_RED }}>Testimonial</span>
                    </h2>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.div
                        className="relative rounded-3xl overflow-hidden p-10 md:p-14"
                        style={{
                            backgroundColor: FX_DARK,
                            border: `1px solid ${FX_RED}30`
                        }}
                        whileHover={{ boxShadow: `0 32px 80px ${FX_RED}18` }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Ambient glows */}
                        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
                            style={{ backgroundColor: `${FX_RED}12` }} />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl"
                            style={{ backgroundColor: `${FX_YELLOW}0C` }} />

                        {/* Giant quote mark in brand yellow */}
                        <div className="absolute top-6 left-8 text-[120px] font-black leading-none select-none"
                            style={{ color: `${FX_YELLOW}30` }}>
                            "
                        </div>

                        <div className="relative z-10">
                            <p className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed mb-8 mt-8">
                                The FutureX Programme helped me transform my life through confidence and skills.
                                Today, I have a stable job that supports my family.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    {/* Initial avatar — brand red */}
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                                        style={{ backgroundColor: FX_RED, color: "white" }}>
                                        K
                                    </div>
                                    <div>
                                        <p className="text-white font-extrabold">Karthik</p>
                                        <p className="text-white/40 text-xs">Programme Participant</p>
                                    </div>
                                </div>
                                {/* Instagram source chip */}
                                <motion.a
                                    href="https://www.instagram.com/p/DRzW8UUjKrp/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold text-white/60 hover:border-white/30 hover:text-white/80 transition-all"
                                    whileHover={{ scale: 1.04 }}
                                >
                                    <span>View on Instagram</span>
                                    <ArrowRight className="w-3 h-3" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — CONTACT
══════════════════════════════════════════════════════════════ */
function ContactSection() {
    return (
        <section id="contact-futurex" className="py-24 overflow-hidden relative" style={{ backgroundColor: FX_DARK }}>
            <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
                style={{ backgroundColor: `${FX_RED}15` }} />
            <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
                style={{ backgroundColor: `${FX_YELLOW}0C` }} />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
                        style={{ borderColor: `${FX_RED}30`, backgroundColor: `${FX_RED}12` }}>
                        <Mail className="w-3.5 h-3.5" style={{ color: FX_RED }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em]"
                            style={{ color: FX_RED }}>Contact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Get in <span style={{ color: FX_RED }}>Touch</span>
                    </h2>
                    <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
                        Learn more about FutureX or explore partnership opportunities with Magic Bus.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="mailto:info@magicbusindia.org"
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-3xl p-8 md:p-10 max-w-2xl mx-auto relative overflow-hidden border"
                        style={{ backgroundColor: "#1A1A1A", borderColor: `${FX_RED}30` }}
                        whileHover={{ scale: 1.02, borderColor: `${FX_RED}60`, boxShadow: `0 24px 64px ${FX_RED}18` }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-2xl"
                            style={{ backgroundColor: `${FX_RED}12` }} />

                        <div className="relative shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: FX_RED }}>
                            <Mail className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-1 relative">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Email Us</p>
                            <p className="text-xl font-extrabold text-white mb-2">Magic Bus India Foundation</p>
                            <div className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: FX_RED }}>
                                <Mail className="w-4 h-4" />
                                info@magicbusindia.org
                            </div>
                        </div>

                        <div className="shrink-0 relative opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-5 h-5" style={{ color: FX_RED }} />
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
export default function FutureX() {
    return (
        <Layout>
            <FaqSchema faqs={futureXFAQ} />
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/6.jpeg"
                title="FutureX"
                subtitle="Blended learning programme for youth skilling"
                titleGradient={false}
                description="An innovative strategic initiative leveraging technology to deliver life and employability skills to youth from underserved communities — in partnership with Michael Susan Dell Foundation."
                ctas={[
                    { href: "#contact-futurex", label: "Get in Touch", variant: "primary", showArrow: true },
                ]}
                showStats
                statsVariant="inline"
                stats={[
                    { num: "9 Goals", label: "One per week" },
                    { num: "4 Channels", label: "Blended delivery" },
                    { num: "MSDF", label: "Strategic partner" },
                ]}
            />

            <AboutSection />
            <BenefitsSection />
            <InActionSection />
            <TestimonialSection />
            <FAQSection
                items={futureXFAQ}
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about the FutureX programme."
            />
            <ContactSection />
        </Layout>
    );
}
