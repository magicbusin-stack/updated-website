import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    Award,
    BookOpen,
    Briefcase,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    Heart,
    Lightbulb,
    Mail,
    Phone,
    Sprout,
    Star,
    Target,
    TrendingUp,
    Users,
    Wallet,
    Zap,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { edpFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ─────────────────────────── animation helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

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
   SECTION 1 — NEED / DEMOGRAPHIC CHALLENGES
   Design: Full-bleed dark split with large impactful stats and editorial text
══════════════════════════════════════════════════════════════ */
const challengeStats = [
    {
        num: "35.3%",
        label: "Women's Labour Force Participation",
        sub: "India's female LFPR — one of the lowest in Asia",
        color: "from-brand-red to-[#c41a1f]",
        textColor: "text-white",
    },
    {
        num: "90%",
        label: "Vulnerable Workforce",
        sub: "Workers in India lack quality, secure employment",
        color: "from-[#F59E0B] to-[#D97706]",
        textColor: "text-[#1A1A1A]",
    },
];

function NeedSection() {
    return (
        <section className="py-24 bg-[#111111] relative overflow-hidden">
            {/* Texture overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="pointer-events-none absolute -top-32 right-1/4 w-[600px] h-[400px] rounded-full bg-brand-red/10 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Editorial text */}
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
                            <Target className="w-3.5 h-3.5 text-brand-yellow" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">The Need</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                            Demographic{" "}
                            <span className="text-brand-yellow">Challenges</span>{" "}
                            of India
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-8">
                            In India, the labour force participation of women stands at just{" "}
                            <span className="text-white font-bold">35.3%</span>. Nearly{" "}
                            <span className="text-white font-bold">90% of the workforce</span> is
                            vulnerable due to lack of quality jobs. These challenges call for
                            targeted interventions to help underserved communities become
                            financially independent.
                        </p>

                        {/* Divider line */}
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-yellow/60 to-transparent" />
                            <span className="text-xs text-white/30 font-semibold uppercase tracking-widest">Why EDP Matters</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-brand-yellow/60 to-transparent" />
                        </div>
                    </FadeUp>

                    {/* Right: Giant stat cards */}
                    <div className="space-y-4">
                        {challengeStats.map((stat, i) => (
                            <FadeUp key={stat.num} delay={0.1 * (i + 1)}>
                                <motion.div
                                    className={`relative rounded-2xl bg-gradient-to-br ${stat.color} p-8 overflow-hidden`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <div className={`text-6xl font-black ${stat.textColor} leading-none mb-2`}>{stat.num}</div>
                                    <div className={`text-base font-bold ${stat.textColor} opacity-90 mb-1`}>{stat.label}</div>
                                    <div className={`text-sm ${stat.textColor} opacity-60`}>{stat.sub}</div>
                                    {/* Decorative circle */}
                                    <div className="pointer-events-none absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/10" />
                                </motion.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — ABOUT EDP
   Design: Light warm background, split editorial layout with
   image right, key highlights and funding partners
══════════════════════════════════════════════════════════════ */
const fundingPartners = ["TOMs Shoes", "FICCI – Millennium Alliance", "Prudential", "Duff & Phelps", "Samsara Foundation", "Malaney Foundation", "INDOSPACE", "AU Bank"];

function AboutSection() {
    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-1.5 mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">About EDP</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.1] mb-6">
                            Entrepreneurship{" "}
                            <span className="relative inline-block">
                                Development
                                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-yellow rounded-full" />
                            </span>{" "}
                            Programme
                        </h2>

                        <p className="text-[16px] text-[#111111]/65 leading-relaxed mb-4">
                            Launched in <span className="font-bold text-[#111111]">2019</span>, the Entrepreneurship Development
                            Programme (EDP) supports aspiring young entrepreneurs from underserved communities to start and
                            manage micro-enterprises to combat unemployment.
                        </p>
                        <p className="text-[16px] text-[#111111]/65 leading-relaxed mb-4">
                            We build youth's leadership, knowledge, skill, social, and development capital to start and run
                            micro and nano-enterprises successfully.
                        </p>
                        <p className="text-[16px] text-[#111111]/65 leading-relaxed mb-6">
                            Our programme graduates have successfully launched nano and micro-enterprises in sectors like
                            manufacturing, retail, and the service sector — becoming job creators in their communities.
                            We received the{" "}
                            <span className="font-bold text-[#111111]">Millennium Alliance Award launched by FICCI</span>{" "}
                            to implement EDP in 3 states — Maharashtra, Karnataka and Rajasthan.
                        </p>

                        {/* Award badge */}
                        <div className="inline-flex items-center gap-3 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 px-5 py-3 mb-8">
                            <Award className="w-5 h-5 text-[#D97706]" />
                            <div>
                                <p className="text-xs font-bold text-[#111111]">Millennium Alliance Award — FICCI</p>
                                <p className="text-[11px] text-[#111111]/50">Agreement No. MA/R4/2017/0024</p>
                            </div>
                        </div>

                        {/* Funding partners */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/30 mb-3">Key Funding Partners</p>
                            <div className="flex flex-wrap gap-2">
                                {fundingPartners.map((p) => (
                                    <span key={p} className="rounded-full border border-[#111111]/10 bg-white px-3 py-1 text-[11px] font-semibold text-[#111111]/60 shadow-sm">
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    {/* Right: Image with overlaid stats */}
                    <FadeIn delay={0.12}>
                        <div className="relative h-[520px]">
                            <motion.div
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="/edp-about.jpg" alt="EDP entrepreneurs" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                            </motion.div>
                            {/* Floating year badge */}
                            <motion.div
                                className="absolute -top-5 -right-5 bg-[#111111] text-white rounded-2xl px-5 py-4 shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-3xl font-black text-brand-yellow">2019</p>
                                <p className="text-xs text-white/60 mt-0.5">Programme Launched</p>
                            </motion.div>
                            {/* Floating stat */}
                            <motion.div
                                className="absolute -bottom-5 -left-5 bg-brand-yellow rounded-2xl px-5 py-4 shadow-xl"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                            >
                                <p className="text-2xl font-black text-[#111111]">7 States</p>
                                <p className="text-xs text-[#111111]/60 font-semibold mt-0.5">Active Across India</p>
                            </motion.div>
                            {/* Floating job-creators pill */}
                            <motion.div
                                className="absolute bottom-12 right-0 translate-x-6 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-gray-100 flex items-center gap-2"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red to-[#c41a1f] flex items-center justify-center">
                                    <Sprout className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs font-bold text-[#111111]">Job Creators</span>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — KEY FEATURES
   Design: 4-tile mosaic on deep earthy green background
══════════════════════════════════════════════════════════════ */
const features = [
    {
        icon: BookOpen,
        title: "1 Year Duration",
        desc: "A comprehensive year-long programme giving entrepreneurs the time to build real skills and launch successful ventures.",
        bg: "bg-[#1A3A2A]",
        iconBg: "bg-brand-yellow",
        iconColor: "text-[#111111]",
    },
    {
        icon: Users,
        title: "Classroom Sessions",
        desc: "Interactive in-person sessions that build community, enable peer learning, and create lasting entrepreneurial networks.",
        bg: "bg-[#111111]",
        iconBg: "bg-brand-red",
        iconColor: "text-white",
    },
    {
        icon: CheckCircle2,
        title: "No Fees or Hidden Charges",
        desc: "The entire programme — from training to mentorship and business setup support — is completely free of charge.",
        bg: "bg-brand-yellow",
        iconBg: "bg-[#111111]",
        iconColor: "text-white",
    },
    {
        icon: Zap,
        title: "Training & Capacity Building",
        desc: "End-to-end skilling: market study, business planning, validation, mentoring, and a Business Growth Plan Competition.",
        bg: "bg-[#1A3A2A]",
        iconBg: "bg-white",
        iconColor: "text-brand-red",
    },
];

function FeaturesSection() {
    return (
        <section className="py-24 bg-[#0D2218] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-yellow/5 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-white/3 blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-1.5 mb-5">
                        <Star className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">Programme Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Key Features of{" "}
                        <span className="text-brand-yellow">this Programme</span>
                    </h2>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.07 * i}>
                            <motion.div
                                className={`group relative rounded-3xl ${f.bg} p-8 overflow-hidden cursor-default h-full`}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            >
                                <div className="pointer-events-none absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
                                <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}>
                                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                                </div>
                                <h3 className={`text-xl font-extrabold mb-3 leading-snug ${f.bg === "bg-brand-yellow" ? "text-[#111111]" : "text-white"}`}>{f.title}</h3>
                                <p className={`text-sm leading-relaxed ${f.bg === "bg-brand-yellow" ? "text-[#111111]/65" : "text-white/50"}`}>{f.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — STRUCTURE / 8 STEPS
   Design: Horizontal scroll timeline on white, numbered steps
   with alternating accent colours
══════════════════════════════════════════════════════════════ */
const steps = [
    { num: "01", label: "Mobilisation", desc: "Community outreach and identification of aspiring entrepreneurs", color: "bg-brand-red", light: "bg-brand-red/8", border: "border-brand-red/20", text: "text-brand-red" },
    { num: "02", label: "Entrepreneurship Awareness Programme (EAP)", desc: "Building awareness about entrepreneurship as a viable livelihood pathway", color: "bg-[#F59E0B]", light: "bg-[#F59E0B]/8", border: "border-[#F59E0B]/20", text: "text-[#D97706]" },
    { num: "03", label: "Market Study & Training", desc: "Understanding market needs, competition, and sector-specific demand", color: "bg-[#10B981]", light: "bg-[#10B981]/8", border: "border-[#10B981]/20", text: "text-[#10B981]" },
    { num: "04", label: "Business Planning", desc: "Developing a viable business plan with financial projections and milestones", color: "bg-[#6366F1]", light: "bg-[#6366F1]/8", border: "border-[#6366F1]/20", text: "text-[#6366F1]" },
    { num: "05", label: "Business Plan & Validation Support", desc: "Expert review and validation of business models before launch", color: "bg-brand-red", light: "bg-brand-red/8", border: "border-brand-red/20", text: "text-brand-red" },
    { num: "06", label: "Mentoring & Business Setup", desc: "Hands-on guidance from Udhyam Sahayaks to set up the enterprise", color: "bg-[#F59E0B]", light: "bg-[#F59E0B]/8", border: "border-[#F59E0B]/20", text: "text-[#D97706]" },
    { num: "07", label: "Business Growth Plan Competition", desc: "Pitching growth plans, peer learning, and celebrating entrepreneurial excellence", color: "bg-[#10B981]", light: "bg-[#10B981]/8", border: "border-[#10B981]/20", text: "text-[#10B981]" },
    { num: "08", label: "Programme Evaluation", desc: "Measuring impact, reviewing outcomes, and planning for scale and sustainability", color: "bg-[#6366F1]", light: "bg-[#6366F1]/8", border: "border-[#6366F1]/20", text: "text-[#6366F1]" },
];

function StructureSection() {
    return (
        <section id="edp-structure" className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white px-4 py-1.5 mb-5">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">Programme Structure</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight max-w-lg">
                            Structure and <span className="text-brand-red">Steps</span>
                        </h2>
                        <p className="text-[#111111]/45 max-w-xs text-sm leading-relaxed">
                            An 8-step journey from awareness to a thriving, sustainable enterprise.
                        </p>
                    </div>
                </FadeUp>

                {/* 8-step grid: 4 per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <FadeUp key={step.num} delay={0.05 * i}>
                            <motion.div
                                className={`group relative rounded-2xl border ${step.border} ${step.light} p-6 overflow-hidden h-full cursor-default`}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 270, damping: 22 }}
                            >
                                {/* Ghost num watermark */}
                                <div className="pointer-events-none absolute -bottom-3 -right-2 text-[80px] font-black leading-none select-none text-[#111111]/5">
                                    {step.num}
                                </div>
                                {/* Number pill */}
                                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${step.color} text-white text-xs font-black mb-4`}>
                                    {step.num}
                                </div>
                                <h3 className={`font-extrabold text-[#111111] text-[15px] leading-snug mb-2`}>{step.label}</h3>
                                <p className="text-xs text-[#111111]/50 leading-relaxed">{step.desc}</p>
                                {/* Connector arrow (hidden on last items of each row) */}
                                {(i + 1) % 4 !== 0 && i < 7 && (
                                    <ChevronRight className={`hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 ${step.text}`} />
                                )}
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Row connector line */}
                <FadeUp delay={0.3} className="hidden lg:block mt-0 -mt-2 mb-4">
                    <div className="grid grid-cols-4 gap-4 px-0">
                        {[0,1,2,3].map((i) => (
                            <div key={i} className={`h-0.5 ${steps[i].color} opacity-30 rounded-full`} />
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — COMPONENTS + MENTORSHIP
   Design: Light cream BG, full-width image + Mentorship card
══════════════════════════════════════════════════════════════ */
function ComponentsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
                {/* Components image */}
                <FadeUp>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-[#FDFBF7] px-4 py-1.5 mb-6">
                        <Lightbulb className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">Core Components</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight mb-10">
                        Components of <span className="text-brand-red">EDP</span>
                    </h2>
                    <div className="rounded-3xl overflow-hidden border border-gray-100 bg-[#FDFBF7] shadow-sm">
                        <img
                            src="/entrepreneurship-components.png"
                            alt="Components of the EDP Programme"
                            className="w-full object-contain"
                        />
                    </div>
                </FadeUp>

                {/* Mentorship section */}
                <FadeUp delay={0.1}>
                    <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-[#111111] p-10 md:p-14 overflow-hidden relative">
                        <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-yellow/8 blur-3xl" />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-1.5 mb-5">
                                <Heart className="w-3.5 h-3.5 text-brand-yellow" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">Peer Support</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                                Mentorship &amp; Handholding Support
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-6">
                                The programme involves youth entrepreneurs as agents of change in the community. These{" "}
                                <span className="text-brand-yellow font-bold">Udhyam Sahayaks</span> are our programme graduates
                                who provide mentoring and handholding support to local youth — helping them navigate legal
                                compliance, product marketing, and problem solving.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center">
                                    <Users className="w-5 h-5 text-[#111111]" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Udhyam Sahayaks</p>
                                    <p className="text-white/40 text-xs">Peer mentors from within your community</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
                            {[
                                { label: "Legal Compliance", icon: Briefcase },
                                { label: "Product Marketing", icon: TrendingUp },
                                { label: "Problem Solving", icon: Lightbulb },
                                { label: "Business Growth", icon: Sprout },
                            ].map(({ label, icon: Icon }) => (
                                <motion.div
                                    key={label}
                                    className="rounded-2xl border border-white/8 bg-white/5 p-5 flex flex-col items-center text-center gap-3"
                                    whileHover={{ borderColor: "rgba(255,255,255,0.15)", y: -3 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/15 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-brand-yellow" />
                                    </div>
                                    <span className="text-xs font-bold text-white/70">{label}</span>
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
   SECTION 6 — ELIGIBILITY
   Design: 4 bold horizontal bars on warm cream
══════════════════════════════════════════════════════════════ */
const eligibility = [
    { icon: Users, color: "bg-brand-red", textColor: "text-white", accentBg: "bg-brand-red/6", accentBorder: "border-brand-red/20", accentText: "text-brand-red", label: "Age Range", value: "18 – 45 years", note: "Open to a wider age bracket to include diverse entrepreneurs" },
    { icon: GraduationCap, color: "bg-[#F59E0B]", textColor: "text-white", accentBg: "bg-[#F59E0B]/8", accentBorder: "border-[#F59E0B]/25", accentText: "text-[#D97706]", label: "Education", value: "Minimum 8th Standard Pass", note: "Accessible to those with basic foundational education" },
    { icon: Wallet, color: "bg-[#10B981]", textColor: "text-white", accentBg: "bg-[#10B981]/6", accentBorder: "border-[#10B981]/20", accentText: "text-[#10B981]", label: "Family Income", value: "₹3 Lakh or Less per Annum", note: "Targeted at economically underserved households" },
    { icon: Sprout, color: "bg-[#6366F1]", textColor: "text-white", accentBg: "bg-[#6366F1]/6", accentBorder: "border-[#6366F1]/20", accentText: "text-[#6366F1]", label: "Intent", value: "Desire to Start or Upgrade Enterprise", note: "Whether launching new or growing an existing micro-business" },
];

function EligibilitySection() {
    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white px-4 py-1.5 mb-5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">Who Can Apply</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
                            Eligibility <span className="text-brand-red">Criteria</span>
                        </h2>
                        <p className="text-[#111111]/45 max-w-xs text-sm leading-relaxed">
                            Open to aspiring and existing micro-entrepreneurs from underserved communities.
                        </p>
                    </div>
                </FadeUp>

                {/* 4-card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {eligibility.map((item, i) => (
                        <FadeUp key={item.label} delay={0.08 * i}>
                            <motion.div
                                className={`group relative rounded-3xl border ${item.accentBorder} ${item.accentBg} p-7 overflow-hidden cursor-default h-full`}
                                whileHover={{ y: -5, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                <div className="pointer-events-none absolute -bottom-3 -right-2 text-[80px] font-black leading-none select-none text-[#111111]/4">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow`}>
                                    <item.icon className={`w-6 h-6 ${item.textColor}`} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/35 mb-2">{item.label}</p>
                                <h3 className={`text-xl font-extrabold ${item.accentText} leading-tight mb-3`}>{item.value}</h3>
                                <p className="text-xs text-[#111111]/50 leading-relaxed">{item.note}</p>
                                <div className="mt-5 inline-flex items-center gap-1.5">
                                    <CheckCircle2 className={`w-3.5 h-3.5 ${item.accentText} opacity-50`} />
                                    <span className="text-[10px] font-semibold text-[#111111]/35 uppercase tracking-wider">Required</span>
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
   SECTION 7 — OUTREACH & IMPACT
   Design: Full dark bento with oversized numbers + image
══════════════════════════════════════════════════════════════ */
const impactStats = [
    { num: "1,310", label: "Entrepreneurs Reached", sub: "Micro-enterprise owners supported to date", icon: Users },
    { num: "7", label: "States Covered", sub: "MH, GJ, RJ, MP, KA, OD & TN", icon: Target },
    { num: "1,500+", label: "Entrepreneurs in the Making", sub: "Currently enrolled and in progress", icon: Sprout },
];

function OutreachImpactSection() {
    return (
        <section className="py-24 bg-[#111111] relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-brand-yellow/8 to-transparent blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-5">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">Our Reach</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Outreach and{" "}
                        <span className="text-brand-yellow">Impact</span>
                    </h2>
                </FadeUp>

                {/* Stat cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {impactStats.map((stat, i) => (
                        <FadeUp key={stat.label} delay={0.08 * i}>
                            <motion.div
                                className="group rounded-2xl border border-white/8 bg-white/5 p-8 relative overflow-hidden cursor-default"
                                whileHover={{ borderColor: "rgba(255,255,255,0.18)", y: -4 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/15 flex items-center justify-center shrink-0">
                                        <stat.icon className="w-5 h-5 text-brand-yellow" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-brand-yellow mb-1">{stat.num}</div>
                                        <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                                        <div className="text-xs text-white/40 leading-relaxed">{stat.sub}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Wide image banner */}
                <FadeIn delay={0.2}>
                    <div className="relative rounded-3xl overflow-hidden h-64">
                        <img src="/edp-banner.jpg" alt="EDP outreach impact" className="w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center px-10 md:px-16">
                            <div className="max-w-md">
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">From the Ground</p>
                                <p className="text-white font-extrabold text-2xl md:text-3xl leading-tight">
                                    Building{" "}
                                    <span className="text-brand-yellow">job creators</span>,{" "}
                                    not just job seekers
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
   SECTION 8 — SUCCESS STORIES
   Design: Warm off-white bg, two editorial story cards
   with side accent + quote pull-outs
══════════════════════════════════════════════════════════════ */
const stories = [
    {
        name: "Sakshi Rokade",
        location: "Pune, Maharashtra",
        enterprise: "Boutique & Styling",
        image: "/testimonials/sakshi.png",
        accentColor: "bg-brand-red",
        accentText: "text-brand-red",
        accentBorder: "border-brand-red/20",
        accentBg: "bg-brand-red/8",
        gradientFrom: "from-brand-red/80",
        tag: "Fashion & Beauty",
        quote: "Sakshi is deeply committed to community welfare, advocating for better infrastructure and safety for villagers.",
        paragraphs: [
            "Sakshi's entrepreneurial journey began with a passion for fashion. She started by designing outfits for her friends and family.",
            "Through our programme, she honed her skills in communication, problem solving, and technical design — expanding her customer base and delivering personalised looks.",
            "Her boutique business has grown into makeup and styling consultations, becoming a one-stop shop for clients wanting to revamp their look.",
        ],
    },
    {
        name: "Rupaliben Mayavanshi",
        location: "Valsad, Gujarat",
        enterprise: "Stationery Shop",
        image: "/testimonials/rupaliben.png",
        accentColor: "bg-[#F59E0B]",
        accentText: "text-[#D97706]",
        accentBorder: "border-[#F59E0B]/20",
        accentBg: "bg-[#F59E0B]/8",
        gradientFrom: "from-[#D97706]/80",
        tag: "Retail & Commerce",
        quote: "Today, she contributes significantly to her community's well-being and economic growth, growing into an impactful leader.",
        paragraphs: [
            "Rupaliben hails from the Scheduled Castes community. Living in a remote village with limited opportunities, she faced many challenges including socio-economic barriers and inadequate infrastructure.",
            "After joining our programme, she acquired life skills and practical knowledge through leadership training — launching her own stationery shop and achieving financial stability.",
        ],
    },
];

function SuccessStoriesSection() {
    return (
        <section className="py-24 bg-[#FDFBF7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <FadeUp className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white px-4 py-1.5 mb-5">
                        <Star className="w-3.5 h-3.5 text-[#D97706]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">Real Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
                        Success Stories of{" "}
                        <span className="text-brand-red">Transformation</span>
                    </h2>
                </FadeUp>

                {/* Story cards — vertical stack, horizontal split layout */}
                <div className="space-y-6">
                    {stories.map((story, i) => (
                        <FadeUp key={story.name} delay={0.1 * i}>
                            <motion.div
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
                                whileHover={{ y: -4, boxShadow: "0 24px 56px rgba(0,0,0,0.09)" }}
                                transition={{ type: "spring", stiffness: 250, damping: 24 }}
                            >
                                {/* Left accent strip */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${story.accentColor} group-hover:w-1.5 transition-all duration-300`} />

                                <div className="flex flex-col sm:flex-row gap-0 pl-1">
                                    {/* Small portrait — fixed square */}
                                    <div className="shrink-0 w-full sm:w-44 h-52 sm:h-auto overflow-hidden bg-[#F0EDE8] relative">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* sector tag at image bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[#111]/70 to-transparent">
                                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] text-white`}>
                                                {story.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-7">
                                        {/* Name + location row */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                                            <div>
                                                <h3 className="text-xl font-extrabold text-[#111111] leading-tight">{story.name}</h3>
                                                <p className="text-xs text-[#111111]/45 mt-0.5">{story.location}</p>
                                            </div>
                                            <span className={`shrink-0 inline-flex items-center rounded-full text-[10px] font-bold uppercase tracking-wider px-3 py-1 border ${story.accentBorder} ${story.accentText} bg-white`}>
                                                {story.enterprise}
                                            </span>
                                        </div>

                                        {/* Pull quote */}
                                        <div className={`relative mb-5 pl-4 border-l-2 ${story.accentColor.replace("bg-", "border-")}`}>
                                            <p className={`text-sm font-semibold ${story.accentText} leading-relaxed italic`}>
                                                "{story.quote}"
                                            </p>
                                        </div>

                                        {/* Story paragraphs */}
                                        <div className="space-y-2.5">
                                            {story.paragraphs.map((p, pi) => (
                                                <p key={pi} className="text-sm text-[#111111]/55 leading-relaxed">{p}</p>
                                            ))}
                                        </div>
                                    </div>
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
   SECTION 9 — CONTACT
   Design: Clean warm section with a dark phone/contact card
══════════════════════════════════════════════════════════════ */
function ContactSection() {
    return (
        <section id="contact-edp" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-red/6 blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white px-4 py-1.5 mb-5">
                        <Phone className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111111]/50">Contact Details</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
                        Get in <span className="text-brand-red">Touch</span>
                    </h2>
                    <p className="mt-4 text-[#111111]/50 max-w-md mx-auto leading-relaxed">
                        Reach out to learn more about joining or partnering with the EDP programme.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="tel:9821422910"
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#111111] rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/8 blur-2xl" />

                        <div className="relative shrink-0 w-16 h-16 rounded-2xl bg-brand-yellow flex items-center justify-center group-hover:shadow-lg transition-shadow">
                            <Phone className="w-7 h-7 text-[#111111]" />
                        </div>

                        <div className="flex-1 relative">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Programme Contact</p>
                            <p className="text-xl font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                                Pravina Kukade
                            </p>
                            <div className="mt-3 inline-flex items-center gap-2 text-brand-yellow font-bold text-base">
                                <Phone className="w-4 h-4" />
                                +91 98214 22910
                            </div>
                        </div>

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
export default function EntrepreneurshipDevelopmentProgramme() {
    return (
        <Layout>
            <FaqSchema faqs={edpFAQ} />
            {/* Banner */}
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/edp-banner.jpg"
                title="Entrepreneurship Development Programme"
                subtitle="Creating lasting change in communities"
                titleGradient={false}
                description="Empowering aspiring entrepreneurs from underserved communities to launch and sustain micro-enterprises — building financial independence and creating jobs."
                ctas={[
                    { href: "#edp-structure", label: "View Programme Structure", variant: "primary", showArrow: true },
                    { href: "#contact-edp", label: "Get in Touch" },
                ]}
                showStats
                statsVariant="inline"
                stats={[
                    { num: "2019", label: "Year Launched" },
                    { num: "1,310+", label: "Entrepreneurs Reached" },
                    { num: "7 States", label: "Active Across India" },
                ]}
            />

            <NeedSection />
            <AboutSection />
            <FeaturesSection />
            <StructureSection />
            <ComponentsSection />
            <EligibilitySection />
            <OutreachImpactSection />
            <SuccessStoriesSection />
            <FAQSection
                items={edpFAQ}
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about the Entrepreneurship Development Programme."
            />
            <ContactSection />
        </Layout>
    );
}
