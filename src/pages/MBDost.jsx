import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    Award,
    BookOpen,
    CheckCircle2,
    Mail,
    MessageCircle,
    Play,
    Quote,
    RefreshCw,
    Smartphone,
    Star,
    Target,
    TrendingUp,
    Users,
    Video,
    Wifi,
    Zap,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { mbDostFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ──────────────────── design tokens ──────────────────── */
const DOST_GREEN = "#25D366";
const DOST_DARK  = "#0B1A13";
const EASE = [0.16, 1, 0.3, 1];

/* ──────────────────── animation helpers ──────────────────── */
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

function ChatBubble({ text, isUser = false, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: EASE, delay }}
        >
            <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    isUser ? "rounded-tr-sm font-medium" : "rounded-tl-sm"
                }`}
                style={{
                    backgroundColor: isUser ? DOST_GREEN : "#1F2C34",
                    color: isUser ? "#111111" : "rgba(255,255,255,0.85)",
                }}
            >
                {text}
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — ABOUT
══════════════════════════════════════════════════════════════ */
const supportPoints = [
    { num: "01", icon: BookOpen, title: "Learn Life Skills", desc: "Develop nine essential life skills and understand their application in personal and professional life. MB Dost strengthens this learning with explanations, practice questions, and reinforcement content." },
    { num: "02", icon: Target, title: "Track Progress", desc: "Monitor your self-learning journey, assess understanding, and identify areas where you may need additional support." },
    { num: "03", icon: RefreshCw, title: "Revise and Reinforce", desc: "Revisit concepts covered in offline sessions, recap key life skills, improve retention, and build confidence through simple on-demand access." },
];

const chatMessages = [
    { text: "👋 Hey! I'm MB Dost. Ready to continue learning today?", isUser: false, delay: 0.1 },
    { text: "Yes! Show me today's Life Skills module.", isUser: true, delay: 0.3 },
    { text: "Great! Today we're covering Goal Setting 🎯\n\nModule 3 of 9 — 12 min read", isUser: false, delay: 0.55 },
    { text: "What was covered in Session 2?", isUser: true, delay: 0.75 },
    { text: "Session 2 covered Self-Awareness 🧠\nTap below to revise or take the quiz!", isUser: false, delay: 0.95 },
];

function AboutSection() {
    return (
        <section className="py-24 overflow-hidden" style={{ backgroundColor: DOST_DARK }}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
                style={{ backgroundColor: `${DOST_GREEN}18` }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
                            style={{ borderColor: `${DOST_GREEN}30`, backgroundColor: `${DOST_GREEN}12` }}>
                            <MessageCircle className="w-3.5 h-3.5" style={{ color: DOST_GREEN }} />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: DOST_GREEN }}>About MB Dost</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                            What is{" "}
                            <span className="relative inline-block" style={{ color: DOST_GREEN }}>
                                MB Dost?
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: DOST_GREEN }} />
                            </span>
                        </h2>
                        <p className="text-[16px] text-white/60 leading-relaxed mb-4">
                            MB Dost is a <span className="text-white font-semibold">WhatsApp-based chatbot</span> developed by Magic Bus India Foundation for the Livelihood{" "}
                            <span className="text-white font-semibold">FutureX Programme</span>. It provides easy access to self-learning modules and continuous learning support.
                        </p>
                        <p className="text-[16px] text-white/60 leading-relaxed mb-10">
                            MB Dost acts as a <span className="text-white font-semibold">digital learning companion</span>, enabling participants to strengthen their understanding, practice key concepts, and stay engaged beyond classroom sessions.
                        </p>
                        <div className="space-y-5">
                            {supportPoints.map((point, i) => (
                                <FadeUp key={point.num} delay={0.1 * i}>
                                    <motion.div
                                        className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5"
                                        whileHover={{ borderColor: `${DOST_GREEN}30`, x: 4 }}
                                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    >
                                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: `${DOST_GREEN}20` }}>
                                            <point.icon className="w-5 h-5" style={{ color: DOST_GREEN }} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-0.5">{point.num}</p>
                                            <h4 className="font-extrabold text-white text-base mb-1">{point.title}</h4>
                                            <p className="text-sm text-white/50 leading-relaxed">{point.desc}</p>
                                        </div>
                                    </motion.div>
                                </FadeUp>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.15}>
                        <div className="relative max-w-sm mx-auto">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ backgroundColor: "#0A1628" }}>
                                <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1F2C34" }}>
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm"
                                        style={{ backgroundColor: DOST_GREEN, color: DOST_DARK }}>MB</div>
                                    <div>
                                        <p className="text-white font-bold text-sm leading-tight">MB Dost</p>
                                        <p className="text-white/40 text-[11px]">In-House Learning Companion</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: DOST_GREEN }} />
                                        <span className="text-[10px] font-semibold" style={{ color: DOST_GREEN }}>Online</span>
                                    </div>
                                </div>
                                <div className="px-4 py-5 space-y-3 min-h-[320px]"
                                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${DOST_GREEN}08 1px, transparent 0)`, backgroundSize: "20px 20px" }}>
                                    {chatMessages.map((msg, i) => (
                                        <ChatBubble key={i} {...msg} />
                                    ))}
                                </div>
                                <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1F2C34" }}>
                                    <div className="flex-1 rounded-full bg-white/10 text-white/30 text-xs px-4 py-2 border border-white/5">
                                        Type a message...
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: DOST_GREEN }}>
                                        <ArrowRight className="w-4 h-4" style={{ color: DOST_DARK }} />
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 shadow-xl"
                                style={{ backgroundColor: DOST_GREEN }}
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-xl font-black" style={{ color: DOST_DARK }}>WhatsApp</p>
                                <p className="text-[10px] font-bold" style={{ color: `${DOST_DARK}99` }}>Powered</p>
                            </motion.div>
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
    { icon: Smartphone, title: "Easy to Use", desc: "Built on WhatsApp — a familiar and user-friendly interface making access simple and convenient.", featured: true },
    { icon: Wifi, title: "Flexible Learning", desc: "Engage anytime, anywhere, at your own pace — no fixed schedule required.", featured: false },
    { icon: Zap, title: "On-Demand Support", desc: "Seek clarification and strengthen understanding whenever needed.", featured: false },
    { icon: MessageCircle, title: "Interactive Experience", desc: "Questions, videos, scenario-based exercises and activities keep learners engaged.", featured: false },
    { icon: Target, title: "Practice Quizzes", desc: "Goal-based quizzes reinforce learning and track improvement over time.", featured: true },
    { icon: Award, title: "Certification", desc: "Earn a certificate upon successful completion of all modules.", featured: false },
    { icon: TrendingUp, title: "Progress Monitoring", desc: "Track each young person's learning journey and engagement levels.", featured: false },
    { icon: Users, title: "Trainer Insights", desc: "Visibility into which young people are actively engaging with trainers.", featured: false },
    { icon: CheckCircle2, title: "Pre & Post Assessments", desc: "Knowledge checks to measure learning outcomes and growth before and after.", featured: true },
];

function BenefitsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111]/10 bg-[#F5F5F0] px-4 py-1.5 mb-5">
                        <Star className="w-3.5 h-3.5" style={{ color: DOST_GREEN }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111]/50">Why MB Dost</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
                        Benefits of <span style={{ color: DOST_GREEN }}>MB Dost</span>
                    </h2>
                    <p className="mt-4 text-[#111]/50 max-w-md mx-auto text-sm leading-relaxed">
                        Nine powerful features that make MB Dost the definitive digital companion for every FutureX learner.
                    </p>
                </FadeUp>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((b, i) => (
                        <FadeUp key={b.title} delay={0.05 * i}>
                            <motion.div
                                className="group relative rounded-2xl p-7 overflow-hidden cursor-default h-full border transition-all duration-300"
                                style={{ backgroundColor: b.featured ? DOST_DARK : "white", borderColor: b.featured ? `${DOST_GREEN}30` : "#E5E7EB" }}
                                whileHover={{ y: -5, boxShadow: b.featured ? `0 20px 50px ${DOST_GREEN}18` : "0 16px 40px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            >
                                <div className="pointer-events-none absolute -bottom-2 -right-2 text-[80px] font-black leading-none select-none"
                                    style={{ color: b.featured ? `${DOST_GREEN}08` : "#11111108" }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative"
                                    style={{ backgroundColor: `${DOST_GREEN}${b.featured ? "25" : "12"}` }}>
                                    <b.icon className="w-5 h-5" style={{ color: DOST_GREEN }} />
                                </div>
                                <h3 className="font-extrabold text-base mb-2 leading-snug" style={{ color: b.featured ? "white" : "#111111" }}>
                                    {b.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: b.featured ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.55)" }}>
                                    {b.desc}
                                </p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — DEMO VIDEO
══════════════════════════════════════════════════════════════ */
function DemoSection() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <section id="demo" className="py-24 overflow-hidden" style={{ backgroundColor: "#0D1117" }}>
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-3xl rounded-full"
                style={{ backgroundColor: `${DOST_GREEN}0C` }} />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
                        style={{ borderColor: `${DOST_GREEN}25`, backgroundColor: `${DOST_GREEN}10` }}>
                        <Video className="w-3.5 h-3.5" style={{ color: DOST_GREEN }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: DOST_GREEN }}>Live Demo</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Watch a <span style={{ color: DOST_GREEN }}>Demo</span>
                    </h2>
                    <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
                        See MB Dost in action — from chatbot interactions to chat support and learning flows.
                    </p>
                </FadeUp>

                <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
                    <FadeUp>
                        <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl" style={{ backgroundColor: "#1C1C1E" }}>
                            <div className="px-5 py-3 flex items-center gap-3 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                                </div>
                                <div className="flex-1 flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: DOST_GREEN }}>
                                        <MessageCircle className="w-2.5 h-2.5" style={{ color: DOST_DARK }} />
                                    </div>
                                    <span className="text-white/40 text-xs font-medium">MB Dost — Programme Walkthrough</span>
                                </div>
                            </div>
                            <div className="relative aspect-video bg-[#0D1117]">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-contain"
                                    src="/ngo-videos/4.MOV"
                                    controls={playing}
                                    onPlay={() => setPlaying(true)}
                                    onPause={() => setPlaying(false)}
                                />
                                {!playing && (
                                    <motion.button
                                        onClick={handlePlay}
                                        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                                        style={{ backgroundColor: "rgba(13,17,23,0.7)" }}
                                        whileHover={{ backgroundColor: "rgba(13,17,23,0.55)" }}
                                    >
                                        <motion.div
                                            className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                                            style={{ backgroundColor: DOST_GREEN }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Play className="w-8 h-8 ml-1" style={{ color: DOST_DARK }} />
                                        </motion.div>
                                        <span className="text-white/70 text-sm font-semibold">Click to play demo</span>
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <div className="space-y-4">
                            {[
                                { label: "MB Dost", desc: "Full chatbot walkthrough — self-learning modules, quizzes and reinforcement flow", icon: MessageCircle },
                                { label: "Chat Support", desc: "How young people interact with MB Dost for on-demand help and progress tracking", icon: Smartphone },
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    className="rounded-2xl border border-white/8 bg-white/4 p-5 cursor-pointer"
                                    whileHover={{ borderColor: `${DOST_GREEN}40`, y: -2 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${DOST_GREEN}20` }}>
                                            <item.icon className="w-4 h-4" style={{ color: DOST_GREEN }} />
                                        </div>
                                        <span className="text-white font-extrabold text-sm">{item.label}</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed pl-11">{item.desc}</p>
                                </motion.div>
                            ))}
                            <div className="rounded-2xl border border-white/8 bg-white/4 p-5 text-center">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: DOST_GREEN }}>
                                    <MessageCircle className="w-6 h-6" style={{ color: DOST_DARK }} />
                                </div>
                                <p className="text-white font-bold text-sm">Available on WhatsApp</p>
                                <p className="text-white/40 text-xs mt-1">No app download required</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — TESTIMONIALS
   Youth cards use initial-letter avatars (no photos)
══════════════════════════════════════════════════════════════ */
const youthTestimonials = [
    {
        name: "Abhishek",
        centre: "MSDF Peeragarhi",
        quote: "MB Dost is a great self-learning platform for us. It helps us remember all the sessions and goals. In this platform we can understand all the topics easily. And this platform appreciates and motivates us.",
    },
    {
        name: "Pawan",
        centre: "MSDF Peeragarhi",
        quote: "Creating a space like 'MB Dost' to discuss heavy topics like self-esteem and leadership is a massive power move. 'Work ethics' and 'problem-solving' together puts you miles ahead — you're learning to think like leaders.",
    },
    {
        name: "Amit",
        centre: "MSDF Peeragarhi",
        quote: "My communication skills & problem solving have improved because of MB Dost. I can explain my ideas clearly and more confidently now. MB Dost gives you real-life examples to learn about job-life.",
    },
];

const headQuotes = [
    "What began as a simple idea has grown into a powerful support system, and witnessing the real impact MB Dost creates for young people every day reminds us why purposeful action truly matters.",
    "Our drive for innovation led to the creation of MB Dost, and building it together as a team has been a truly rewarding journey for Magic Bus.",
    "MB Dost reflects how a simple idea, when led with purpose, can become a force for positive change for young people.",
];

function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#F5F5F0] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111]/10 bg-white px-4 py-1.5 mb-5">
                        <Quote className="w-3.5 h-3.5 text-[#111]/40" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111]/50">Voices</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">Testimonials</h2>
                </FadeUp>

                {/* Youth cards */}
                <div className="mb-6 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/35">Youth Participants — Livelihood Programme</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                    {youthTestimonials.map((t, i) => (
                        <FadeUp key={t.name} delay={0.08 * i}>
                            <motion.div
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-full"
                                whileHover={{ y: -5, boxShadow: "0 24px 50px rgba(0,0,0,0.09)" }}
                                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                            >
                                {/* Top accent bar */}
                                <div className="h-1" style={{ backgroundColor: DOST_GREEN }} />

                                {/* Person row — initial avatar */}
                                <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-gray-50">
                                    <div
                                        className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-black text-base"
                                        style={{ backgroundColor: `${DOST_GREEN}18`, color: DOST_GREEN }}
                                    >
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-extrabold text-[#111] text-sm">{t.name}</p>
                                        <p className="text-[11px] text-[#111]/40 mt-0.5">{t.centre}</p>
                                    </div>
                                    <div className="ml-auto w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: `${DOST_GREEN}15` }}>
                                        <MessageCircle className="w-4 h-4" style={{ color: DOST_GREEN }} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-sm text-[#111]/60 leading-relaxed">{t.quote}</p>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Programme Head quotes */}
                <FadeUp delay={0.1}>
                    <div className="rounded-3xl overflow-hidden border border-white/5" style={{ backgroundColor: DOST_DARK }}>
                        <div className="px-8 py-6 border-b border-white/8">
                            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: DOST_GREEN }}>
                                From The Programme Head, Magic Bus
                            </p>
                        </div>
                        <div className="divide-y divide-white/5">
                            {headQuotes.map((q, i) => (
                                <motion.div
                                    key={i}
                                    className="group flex items-start gap-5 px-8 py-6 cursor-default"
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                                        style={{ backgroundColor: `${DOST_GREEN}20` }}>
                                        <span className="text-[10px] font-black" style={{ color: DOST_GREEN }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <p className="text-white/65 text-[15px] leading-relaxed italic flex-1">"{q}"</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
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
        <section id="contact-mbdost" className="py-24 overflow-hidden" style={{ backgroundColor: DOST_DARK }}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
                style={{ backgroundColor: `${DOST_GREEN}15` }} />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
                        style={{ borderColor: `${DOST_GREEN}25`, backgroundColor: `${DOST_GREEN}10` }}>
                        <Mail className="w-3.5 h-3.5" style={{ color: DOST_GREEN }} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: DOST_GREEN }}>Contact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Get in Touch for <span style={{ color: DOST_GREEN }}>Enquiries</span>
                    </h2>
                    <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
                        Want to learn more about MB Dost or partner with the FutureX programme?
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="mailto:info@magicbusindia.org"
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden border"
                        style={{ backgroundColor: "#111827", borderColor: `${DOST_GREEN}25` }}
                        whileHover={{ scale: 1.02, borderColor: `${DOST_GREEN}50` }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-2xl"
                            style={{ backgroundColor: `${DOST_GREEN}10` }} />
                        <div className="relative shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow"
                            style={{ backgroundColor: DOST_GREEN }}>
                            <Mail className="w-7 h-7" style={{ color: DOST_DARK }} />
                        </div>
                        <div className="flex-1 relative">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Email Us</p>
                            <p className="text-xl font-extrabold text-white mb-3">Magic Bus India Foundation</p>
                            <div className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: DOST_GREEN }}>
                                <Mail className="w-4 h-4" />
                                info@magicbusindia.org
                            </div>
                        </div>
                        <div className="shrink-0 relative opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-5 h-5" style={{ color: DOST_GREEN }} />
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
export default function MBDost() {
    return (
        <Layout>
            <FaqSchema faqs={mbDostFAQ} />
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/futurex1.png"
                title="MB Dost"
                subtitle="In-House Companion of Magic Bus"
                titleGradient={false}
                description="A WhatsApp-based digital learning companion empowering FutureX programme participants with on-demand life skills training, progress tracking, and certification — anytime, anywhere."
                ctas={[
                    { href: "#demo", label: "Watch Demo", variant: "primary", showArrow: true },
                    { href: "#contact-mbdost", label: "Get in Touch" },
                ]}
                showStats
                statsVariant="inline"
                stats={[
                    { num: "9", label: "Life Skills Modules" },
                    { num: "WhatsApp", label: "No App Required" },
                    { num: "Certificate", label: "On Completion" },
                ]}
            />
            <AboutSection />
            <BenefitsSection />
            <DemoSection />
            <TestimonialsSection />
            <FAQSection
                items={mbDostFAQ}
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about MB Dost and its relationship with the FutureX programme."
            />
            <ContactSection />
        </Layout>
    );
}
