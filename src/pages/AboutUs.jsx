import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Heart,
    Target,
    Lightbulb,
    Users,
    Star,
    BookOpen,
    Briefcase,
    TrendingUp,
    Shield,
    Zap,
    ArrowRight,
    CheckCircle,
    Quote,
    GraduationCap,
    Wallet,
    AlertTriangle,
    Sprout,
    MessageCircle,
    HeartHandshake,
    Rocket,
} from "lucide-react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import FlipCoinButton from "../components/ui/flip-coin-button";
import FAQSection from "../components/Home/FAQSectiom";

/* 
   ANIMATION HELPERS
*/
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "", margin = "-80px" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin });
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
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

/* 
   SECTION LABEL
*/
function SectionLabel({ children, icon: Icon }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-yellow px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-brand-black uppercase mb-6">
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {children}
        </span>
    );
}

/* 
   ANIMATED COUNTER
*/
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = parseFloat(value);
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(parseFloat(start.toFixed(1)));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {typeof value === "string" && value.includes(".")
                ? count.toFixed(1)
                : Math.round(count)}
            {suffix}
        </span>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-xs font-bold tracking-[0.16em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/*  VISION & MISSION  */
function VisionMission() {
    return (
        <section className="py-10 md:py-20 bg-[#F7F7F5]">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-8 md:mb-14">
                    <SectionTag>Purpose</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">
                        What Drives Us Every Day
                    </h2>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-4 md:gap-7">
                    {/* Vision */}
                    <FadeUp delay={0.05}>
                        <div className="relative h-full rounded-3xl bg-[#1A1A1A] text-white p-5 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-red/15 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-red rounded-xl px-3.5 py-2 mb-4 md:mb-6">
                                    <Target className="w-4.5 h-4.5 text-white" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white">Our Vision</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug mb-4">
                                    Breaking the Cycle of Poverty
                                </h2>
                                <p className="text-white/85 leading-relaxed text-lg md:text-xl">
                                    A world where young people break out of poverty to lead fulfilling,
                                    rewarding lives and contribute positively to their communities.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Mission */}
                    <FadeUp delay={0.12}>
                        <div className="relative h-full rounded-3xl border-2 border-brand-yellow bg-white p-5 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-yellow/20 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-yellow rounded-xl px-3.5 py-2 mb-4 md:mb-6">
                                    <Zap className="w-4.5 h-4.5 text-brand-black" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-brand-black">Our Mission</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-snug mb-4">
                                    Equipping for Adulthood
                                </h2>
                                <p className="text-[#1A1A1A]/80 leading-relaxed text-lg md:text-xl">
                                    To equip vulnerable young people with life skills that enable them
                                    to thrive in the transition to adulthood.
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* 
   FAQ DATA
 */
const aboutFAQ = [
    {
        question: "When was Magic Bus established and where?",
        category: "Overview",
        answer: "Magic Bus India Foundation was established in Mumbai in 1999. Our founder noticed the transformative power of sport to change the lives of young boys from underserved communities, which sparked the creation of the organisation.",
    },
    {
        question: "Who does Magic Bus work with?",
        category: "Impact",
        answer: "We work with adolescents and youth from underserved communities, supporting them from school days through to their career phase. We also engage with families, communities, schools, employers, and local institutions to scale sustainable transformation.",
    },
    {
        question: "What is the Magic Bus approach to education?",
        category: "Programmes",
        answer: "Magic Bus integrates life skills education with academic learning and employability pathways. We believe academic education alone is not sufficient  young people also need resilience, communication skills, and the confidence to navigate real-world challenges.",
    },
    {
        question: "What are the key challenges Magic Bus addresses?",
        category: "Impact",
        answer: "We address three core challenges: gender disparity (2 out of 5 girls drop out before completing education), learning gaps (45.8% of 8th graders cannot solve simple arithmetic), and skill mismatch (43.6% of youth are considered unemployable due to lack of future-ready skills).",
    },
    {
        question: "What does Magic Bus mean by 'life skills'?",
        category: "Programmes",
        answer: "Life skills at Magic Bus include resilience, aspiration, self-belief, effective communication, conscious decision-making, emotional management, and readiness for real-world scenarios. These skills help young people thrive beyond the classroom.",
    },
    {
        question: "How does Magic Bus support livelihoods?",
        category: "Programmes",
        answer: "Magic Bus supports youth in acquiring employability skills, accessing job opportunities or self-employment, and sustaining livelihoods. Our programmes create pathways from education to economic independence.",
    },
    {
        question: "What is the 'ecosystem approach' of Magic Bus?",
        category: "Approach",
        answer: "Our ecosystem approach means we engage with all stakeholders  families, communities, schools, employers, and local institutions  to create an enabling environment for young people. This holistic approach ensures sustainable transformation that lasts beyond the programme.",
    },
    {
        question: "How can I partner with or support Magic Bus?",
        category: "Support",
        answer: "Magic Bus is open to collaborating with donors, corporates, foundations, and government partners. You can reach out through the Contact Us or Partner With Us pages on our website to explore how we can work together to create sustainable impact.",
    },
];

/* 
   HERO BANNER
*/
function HeroSection() {
    return (
        <HeroBanner
            badgeText="About Magic Bus"
            title="Transforming Lives"
            subtitle="from Childhood to Livelihood"
            description="Helping young people from underserved communities complete education and build sustainable livelihoods since 1999."
            subtitleClassName="mt-3 text-xl md:text-2xl font-semibold text-white"
            descriptionClassName="mt-7 max-w-3xl text-lg sm:text-xl text-white leading-relaxed"
            ctas={[
                { to: "/donate", label: "Donate Now", variant: "primary", showArrow: true },
                { to: "/partner", label: "Partner With Us" },
            ]}
        />
    );
}

/* 
   PROBLEM STATEMENT
*/
/* One interactive card used for "Challenges" and "What We Do": colour wash + top bar on hover, icon pops, stat counts up */
function InteractiveCard({ icon: Icon, hex, stat, label, desc }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative h-full cursor-default overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 md:p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
            <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0 opacity-[0.09] transition-all duration-500 group-hover:h-full"
                style={{ background: hex }}
            />
            <span
                className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-[0.22] transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: hex }}
            />
            <div className="relative flex h-full flex-col gap-4">
                <motion.div
                    className="inline-flex w-fit rounded-2xl p-4 text-white shadow-md"
                    style={{ background: hex }}
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.14 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="h-8 w-8" />
                </motion.div>
                <div>
                    <div className="mb-2 text-3xl md:text-4xl font-extrabold leading-tight text-brand-red transition-transform duration-300 origin-left group-hover:scale-105">
                        {stat}
                    </div>
                    {label && <h3 className="mb-2 text-xl font-bold text-[#1A1A1A]">{label}</h3>}
                    <p className="text-base leading-relaxed text-[#1A1A1A]/75">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}

const challenges = [
    {
        icon: Users,
        label: "Gender Disparity",
        stat: "2 in 5",
        hex: "#E01085",
        desc: "Girls drop out of school before completing education — losing their voice and chances of financial independence.",
    },
    {
        icon: BookOpen,
        label: "Learning Gaps",
        stat: <AnimatedCounter value="45.8" suffix="%" />,
        hex: "#21BDEA",
        desc: "Of 8th Grade students cannot solve simple arithmetic. Without mathematical abilities, managing a business or job becomes difficult.",
    },
    {
        icon: Briefcase,
        label: "Skill Mismatch",
        stat: <AnimatedCounter value="43.6" suffix="%" />,
        hex: "#B3CC35",
        desc: "Of youth are considered unemployable — they have potential, but lack future-ready skills that employers seek.",
    },
];

const ABOUT_STYLES = `
@keyframes abBlink{0%,100%{opacity:1;text-shadow:0 0 0 rgba(225,34,40,0)}50%{opacity:.55;text-shadow:0 0 18px rgba(225,34,40,.55)}}
@keyframes abRing{0%,100%{box-shadow:0 0 0 0 rgba(225,34,40,.45)}50%{box-shadow:0 0 0 14px rgba(225,34,40,0)}}
@keyframes abSweep{0%{transform:translateX(-130%) skewX(-18deg)}60%,100%{transform:translateX(230%) skewX(-18deg)}}
@keyframes abIcon{0%,100%{transform:scale(1) rotate(0)}25%{transform:scale(1.15) rotate(-8deg)}75%{transform:scale(1.15) rotate(8deg)}}
.ab-alert{animation:abRing 2.2s ease-out infinite}
.ab-blink{animation:abBlink 1.6s ease-in-out infinite}
.ab-sweep{position:absolute;inset:0;width:35%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.7),transparent);animation:abSweep 3.6s ease-in-out infinite;pointer-events:none}
.ab-icon{animation:abIcon 1.8s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.ab-alert,.ab-blink,.ab-sweep,.ab-icon{animation:none}}
`;

function ProblemStatement() {
    return (
        <section className="py-10 md:py-20 bg-white">
            <style>{ABOUT_STYLES}</style>
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={Target}>The Problem</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-[1.15] max-w-4xl">
                        Helping young people complete education and build livelihoods
                    </h2>
                    <p className="mt-5 md:mt-6 text-lg md:text-xl text-[#1A1A1A]/75 max-w-4xl leading-relaxed">
                        India has the biggest population of young people globally. However,
                        millions of adolescents and youth from underserved areas are at risk
                        of being left behind — dropping out of school, struggling at
                        workplaces, and being stuck in intergenerational poverty.
                    </p>
                </FadeUp>

                {/* Challenges */}
                <div className="mt-8 md:mt-14">
                    <FadeUp delay={0.1}>
                        <p className="mb-6 md:mb-8 flex items-center gap-4 text-lg md:text-xl font-extrabold uppercase tracking-[0.12em] text-[#1A1A1A]"><span className="h-1.5 w-12 rounded-full bg-brand-red" />
                            Challenges India Faces Today
                        </p>
                    </FadeUp>
                    <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-3 md:pb-0 [scrollbar-width:none]">
                        {challenges.map((c, i) => (
                            <FadeUp key={c.label} delay={0.1 + i * 0.1} margin="0px" className="w-[85%] shrink-0 snap-start md:w-auto md:shrink">
                                <InteractiveCard icon={c.icon} hex={c.hex} stat={c.stat} label={c.label} desc={c.desc} />
                            </FadeUp>
                        ))}
                    </div>
                </div>

                {/* Poverty trap callout: pulsing ring, light sweep and a blinking red line to catch the eye */}
                <FadeUp delay={0.2} className="mt-5 md:mt-10">
                    <div className="ab-alert relative overflow-hidden rounded-2xl border-2 border-brand-red/40 bg-gradient-to-r from-brand-red/10 via-brand-yellow/25 to-brand-red/10 p-4 md:p-8">
                        <span className="ab-sweep" />
                        <div className="relative flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-6">
                            <span className="ab-icon flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-lg">
                                <AlertTriangle className="h-7 w-7" />
                            </span>
                            <p className="text-lg font-bold text-[#1A1A1A] md:text-2xl md:leading-snug">
                                <span className="ab-blink font-extrabold text-brand-red">
                                    When gaps in education, life skills, and employability are not tackled,
                                </span>
                                <br />
                                young people are deprived of opportunities due to the poverty trap.
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/*
   WHY LIFE SKILLS
*/
const lifeSkillBenefits = [
    { icon: Sprout, hex: "#B3CC35", fg: "#1A1A1A", text: "Enhance resilience, aspiration, and self-belief" },
    { icon: MessageCircle, hex: "#21BDEA", fg: "#1A1A1A", text: "Communicate well and make conscious decisions" },
    { icon: HeartHandshake, hex: "#E01085", fg: "#FFFFFF", text: "Handle emotions, challenges, and relationships" },
    { icon: Rocket, hex: "#E12228", fg: "#FFFFFF", text: "Get ready for real-world scenarios beyond classrooms" },
];

// Highlighter-pen underline for the key challenges named in the paragraph
const Mark = ({ children }) => (
    <span className="rounded-sm bg-gradient-to-t from-brand-yellow/70 to-brand-yellow/70 bg-[length:100%_45%] bg-bottom bg-no-repeat px-0.5 font-semibold text-[#1A1A1A]">
        {children}
    </span>
);

function WhyLifeSkills() {
    return (
        <section className="py-10 md:py-20 bg-[#F7F7F5]">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Left: image */}
                    <FadeIn className="order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[4/3] shadow-xl">
                            <img loading="lazy" decoding="async"
                                src="/ngo-images/5.jpeg"
                                alt="Life skills education"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </FadeIn>

                    {/* Right: content */}
                    <div className="order-1 lg:order-2">
                        <FadeUp>
                            <SectionLabel icon={Lightbulb}>Life Skills</SectionLabel>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-[1.1]">
                                Why Life Skills Education Is Needed
                            </h2>
                            <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
                                Academic education alone may not be sufficient to help young minds overcome
                                poverty. Adolescents from underserved communities often deal with challenges
                                beyond academics — <Mark>low confidence</Mark>, <Mark>absence of role models</Mark>,{" "}
                                <Mark>decision-making struggles</Mark>, and <Mark>limited exposure</Mark>.
                            </p>
                            <p className="mt-4 text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
                                In the absence of life skills, even students who come to school struggle
                                to handle the challenges of higher education or their workplace.
                            </p>

                            <p className="mt-6 md:mt-8 text-xl md:text-2xl font-extrabold text-[#1A1A1A]">With life skills education, young people can:</p>
                            <div className="mt-4 grid grid-cols-2 gap-2.5 md:gap-3">
                                {lifeSkillBenefits.map((b, i) => (
                                    <FadeUp delay={0.06 * (i + 1)} key={b.text}>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group flex h-full flex-col items-start gap-3 md:flex-row md:gap-4 rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm transition-shadow hover:shadow-lg"
                                        >
                                            <motion.span
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md"
                                                style={{ background: b.hex, color: b.fg }}
                                                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                                                transition={{ duration: 0.45 }}
                                            >
                                                <b.icon className="h-6 w-6" />
                                            </motion.span>
                                            <span className="md:pt-1 text-base font-semibold leading-snug text-[#1A1A1A]">{b.text}</span>
                                        </motion.div>
                                    </FadeUp>
                                ))}
                            </div>

                            <FadeUp delay={0.3}>
                                <div className="mt-5 md:mt-8 rounded-xl bg-brand-red/5 border-l-4 border-brand-red p-3 md:p-4">
                                    <p className="text-base leading-relaxed text-[#1A1A1A]/85 italic">
                                        "At Magic Bus, life skills are at the core of all our initiatives. We make
                                        sure education translates to enhanced capabilities, increased confidence,
                                        and sustainable livelihoods."
                                    </p>
                                </div>
                            </FadeUp>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

/*
   WHO WE ARE
*/
const stats = [
    { value: "1999", suffix: "", label: "Founded in Mumbai" },
    { value: "25", suffix: "+", label: "Years of Impact" },
    { value: "14", suffix: "+", label: "States Across India" },
    { value: "1", suffix: "M+", label: "Lives Impacted" },
];

/* Big stat tile: pops in with a springy bump, bumps again on hover, numbers count up */
function StatBump({ value, suffix, label, count, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.55, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 260, damping: 13, delay }}
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.96 }}
            className="relative cursor-default overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 to-white/[0.03] p-4 text-center shadow-lg transition-colors hover:border-brand-yellow/60 hover:shadow-[0_0_40px_rgba(255,204,4,0.28)] sm:p-8"
        >
            <span className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-brand-yellow/25 blur-2xl" />
            <div className="relative text-4xl font-extrabold leading-none tabular-nums text-brand-yellow sm:text-5xl md:text-6xl">
                {count ? <AnimatedCounter value={value} suffix={suffix} /> : <>{value}{suffix}</>}
            </div>
            <div className="relative mt-2 md:mt-3 text-base font-semibold text-white/85 md:text-lg">{label}</div>
        </motion.div>
    );
}

function WhoWeAre() {
    return (
        <section className="py-10 md:py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-yellow/15 blur-3xl" />


            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
                <SectionLabel>Who We Are</SectionLabel>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-white">
                                One of India's Top NGOs in{" "}
                                <span className="text-brand-yellow">Life Skills & Livelihoods</span>
                            </h2>
                            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
                                Established in Mumbai in 1999, Magic Bus India Foundation works in the areas
                                of life skills education, employability skilling, and livelihoods. We support
                                adolescents and youth from underserved communities at crucial stages of
                                transformation  from their school days to their career phase.
                            </p>
                            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed">
                                We work towards making sure challenging circumstances at birth do not
                                determine their life outcomes.
                            </p>
                            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed">
                                Our uniqueness arises from our{" "}
                                <span className="text-brand-yellow font-semibold">ecosystem approach</span>.
                                We engage with families, communities, schools, employers, and local institutions
                                to scale sustainable transformation.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {stats.map((st, i) => (
                            <StatBump key={st.label} value={st.value} suffix={st.suffix} label={st.label} count={st.value !== "1999"} delay={0.1 * i} />
                        ))}
                    </div>
                </div>

                {/* Image strip */}
                <FadeIn delay={0.2} className="mt-8 md:mt-16">
                    <div className="grid grid-cols-3 gap-2 md:gap-4 rounded-3xl overflow-hidden h-32 sm:h-64 md:h-80">
                        {[
                            { src: "/ngo-images/6.jpeg", alt: "Magic Bus team members watering a young tree together" },
                            { src: "/ngo-images/ai2.jpg", alt: "World Youth Skills Day 2025 poster: youth empowerment through AI and digital skills" },
                            { src: "/ngo-images/10.jpg", alt: "Five women holding a sign that reads Skills for Viksit Bharat 2047" },
                        ].map(({ src, alt }, i) => (
                            <div key={i} className="overflow-hidden">
                                <img
                                    src={src}
                                    alt={alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                    <FadeUp delay={0.3} className="mt-5 md:mt-8 text-center">
                        <Link
                            to="/who-we-are"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-base md:text-lg font-bold text-brand-black hover:bg-brand-yellow/90 transition-colors"
                        >
                            Know More <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeUp>
                </FadeIn>
            </div>
        </section>
    );
}

/* 
   WHAT WE DO
*/
const whatWeDo = [
    {
        icon: BookOpen,
        hex: "#21BDEA",
        title: "Education & Adolescents",
        desc: "Adolescents stay in school, acquire life skills through our curriculum, and finish secondary education.",
    },
    {
        icon: Briefcase,
        hex: "#B3CC35",
        title: "Youth & Livelihoods",
        desc: "Youth acquire employability skills, access opportunities for jobs or self-employment, and sustain livelihoods.",
    },
    {
        icon: Users,
        hex: "#E01085",
        title: "Community Support",
        desc: "Communities support young people's education and career growth through an integrated ecosystem.",
    },
];

function WhatWeDo() {
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={TrendingUp}>What We Do</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-[1.1] max-w-4xl">
                        From Classrooms to Careers — an Integrated Approach
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/75 max-w-4xl leading-relaxed">
                        Our work aims to achieve long-term goals, ensuring that progress made in classrooms
                        transitions to actual economic independence.
                    </p>
                </FadeUp>

                <div className="mt-8 md:mt-14 flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-3 md:pb-0 [scrollbar-width:none]">
                    {whatWeDo.map((item, i) => (
                        <FadeUp key={item.title} delay={0.1 + i * 0.1} margin="0px" className="w-[85%] shrink-0 snap-start md:w-auto md:shrink">
                            <InteractiveCard icon={item.icon} hex={item.hex} stat={item.title} desc={item.desc} />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/*
   OUR STORY: SCROLL-DRIVEN BUS JOURNEY
*/

const milestones = [
    {
        year: "1999",
        era: "Foundation",
        title: "Foundation of Magic Bus",
        desc: "Matthew Spacie envisioned Magic Bus while playing Rugby with street children, sparking a movement to transform young lives.",
        highlight: "Born on a Rugby field",
        color: "#E63329",
        bgColor: "bg-brand-red",
        tag: "Origin",
        impact: null,
    },
    {
        year: "2000",
        era: "Early Growth",
        title: "8K Young People Reached",
        desc: "The programme rapidly scaled its outreach  8,000 young people engaged through structured sport and activity-based learning.",
        highlight: "8,000 lives touched",
        color: "#F5A623",
        bgColor: "bg-brand-yellow",
        tag: "Milestone",
        impact: "8K",
    },
    {
        year: "20002008",
        era: "Sports for Development",
        title: "Sports for Development Era",
        desc: "Magic Bus pioneered the 'Sports for Development' model in India, using sport as a vehicle to teach life skills to adolescents.",
        highlight: "Sport as a tool for change",
        color: "#2563EB",
        bgColor: "bg-brand-blue",
        tag: "Programme",
        impact: null,
    },
    {
        year: "2002",
        era: "Recognition",
        title: "Ashoka Fellowship Award",
        desc: "Magic Bus founder Matthew Spacie received the prestigious Ashoka Fellowship, recognising social entrepreneurship changing lives.",
        highlight: "Ashoka Fellow",
        color: "#E63329",
        bgColor: "bg-brand-red",
        tag: "Award",
        impact: null,
    },
    {
        year: "2004",
        era: "Global Recognition",
        title: "Magic Bus UK & UN Award",
        desc: "Magic Bus UK was established and received the Development Marketplace Award from the United Nations, gaining global recognition.",
        highlight: "UN Development Marketplace Award",
        color: "#059669",
        bgColor: "bg-brand-green",
        tag: "Global",
        impact: null,
    },
    {
        year: "20092014",
        era: "Life Skills Evolution",
        title: "Strengthening the Life Skills Model",
        desc: "Magic Bus deepened its programme design, evolving from sport-only to a robust life skills curriculum equipping young people for life beyond school.",
        highlight: "Life skills curriculum launched",
        color: "#9B40BF",
        bgColor: "bg-brand-magenta",
        tag: "Programme",
        impact: null,
    },
    {
        year: "2010",
        era: "International Expansion",
        title: "Magic Bus USA Founded",
        desc: "The organisation expanded internationally with the launch of Magic Bus USA, bringing global partners and donors on board.",
        highlight: "20,000 young people reached",
        color: "#2563EB",
        bgColor: "bg-brand-blue",
        tag: "Global",
        impact: "20K",
    },
    {
        year: "2012",
        era: "Scale-up",
        title: "200K Lives Touched",
        desc: "A landmark year as Magic Bus reached 200,000 young people across India, validating the power of its integrated approach.",
        highlight: "200,000 young people",
        color: "#E63329",
        bgColor: "bg-brand-red",
        tag: "Milestone",
        impact: "200K",
    },
    {
        year: "2014",
        era: "National Award",
        title: "Rashtriya Khel Protsahan Award",
        desc: "Recognised by the Government of India with the Rashtriya Khel Protsahan Award for outstanding contribution to sports development.",
        highlight: "Government of India honour",
        color: "#F5A623",
        bgColor: "bg-brand-yellow",
        tag: "Award",
        impact: null,
    },
    {
        year: "2015",
        era: "Livelihoods",
        title: "First Livelihood Centre Inaugurated",
        desc: "Magic Bus inaugurated its first Livelihood Centre, marking the official launch of its Youth & Livelihoods programme  bridging education and employment.",
        highlight: "300,000 outreach",
        color: "#059669",
        bgColor: "bg-brand-green",
        tag: "Programme",
        impact: "300K",
    },
    {
        year: "20152019",
        era: "Childhood to Livelihood",
        title: "Childhood to Livelihood Framework",
        desc: "Magic Bus formally adopted the 'Childhood to Livelihood' framework, creating end-to-end programmes from early adolescence to sustainable employment.",
        highlight: "Full lifecycle approach",
        color: "#9B40BF",
        bgColor: "bg-brand-magenta",
        tag: "Framework",
        impact: null,
    },
    {
        year: "2016",
        era: "South Asia",
        title: "Magic Bus Nepal & Myanmar",
        desc: "Expanding across South Asia, Magic Bus launched chapters in Nepal and Myanmar, bringing the life skills model to new communities.",
        highlight: "Nepal & Myanmar joined",
        color: "#2563EB",
        bgColor: "bg-brand-blue",
        tag: "Global",
        impact: null,
    },
    {
        year: "2017",
        era: "South Asia",
        title: "Magic Bus Bangladesh",
        desc: "Continued South Asian expansion with the establishment of Magic Bus Bangladesh, deepening regional impact.",
        highlight: "Bangladesh chapter launched",
        color: "#E63329",
        bgColor: "bg-brand-red",
        tag: "Global",
        impact: null,
    },
    {
        year: "2019",
        era: "Government Partnership",
        title: "MoU with Maharashtra & Mizoram",
        desc: "Magic Bus signed MoUs with Maharashtra and Mizoram state governments, scaling programme delivery through public-private partnership.",
        highlight: "400,000 lives reached",
        color: "#F5A623",
        bgColor: "bg-brand-yellow",
        tag: "Partnership",
        impact: "400K",
    },
    {
        year: "2020",
        era: "Resilience",
        title: "COVID-19 Relief Programmes",
        desc: "During the pandemic, Magic Bus pivoted swiftly to deliver COVID-19 relief, support vulnerable communities, and maintain digital learning continuity.",
        highlight: "Rapid pandemic response",
        color: "#059669",
        bgColor: "bg-brand-green",
        tag: "Relief",
        impact: null,
    },
    {
        year: "2021",
        era: "Recognition",
        title: "Great Place to Work & NSDC Bond",
        desc: "Certified India's Best Employer Among Nation-Builders and selected for the first NSDC Skill Impact Bond  dual recognition of people and impact.",
        highlight: "Great Place to Work Certified",
        color: "#9B40BF",
        bgColor: "bg-brand-magenta",
        tag: "Award",
        impact: null,
    },
    {
        year: "2022",
        era: "Excellence",
        title: "ASSOCHAM Best NGO Award",
        desc: "Magic Bus received the ASSOCHAM Award for Best Not-For-Profit Organisation, underscoring its commitment to excellence.",
        highlight: "Industry recognition",
        color: "#E63329",
        bgColor: "bg-brand-red",
        tag: "Award",
        impact: null,
    },
    {
        year: "2024",
        era: "Network",
        title: "120+ Livelihood Centres",
        desc: "The Livelihood Centre network grew to over 120 centres across India, creating local employment pathways for thousands of youth every year.",
        highlight: "120+ centres nationwide",
        color: "#2563EB",
        bgColor: "bg-brand-blue",
        tag: "Scale",
        impact: null,
    },
    {
        year: "2021 Onwards",
        era: "Future",
        title: "Building Capacities for 5x Growth",
        desc: "Magic Bus set an ambitious 5x growth target  strengthening systems, partnerships, and programme delivery to reach 8 million young people by 2026.",
        highlight: "8 Million lives  Our Aim",
        color: "#F5A623",
        bgColor: "bg-brand-yellow",
        tag: "Vision",
        impact: "8Mn",
    },
];

/* Bus SVG Icon */
function BusIcon({ className = "" }) {
    return (
        <svg className={className} viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <rect x="2" y="6" width="58" height="26" rx="5" fill="#E63329" />
            {/* Windshield stripe */}
            <rect x="2" y="6" width="58" height="4" rx="2" fill="#C0271E" />
            {/* Windows */}
            <rect x="8" y="12" width="9" height="8" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="21" y="12" width="9" height="8" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="34" y="12" width="9" height="8" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="47" y="12" width="9" height="8" rx="2" fill="white" fillOpacity="0.9" />
            {/* Door */}
            <rect x="47" y="20" width="9" height="12" rx="1" fill="#C0271E" />
            <rect x="48" y="21" width="3.5" height="10" rx="0.5" fill="white" fillOpacity="0.5" />
            <rect x="52.5" y="21" width="3.5" height="10" rx="0.5" fill="white" fillOpacity="0.5" />
            {/* Bumpers */}
            <rect x="0" y="26" width="4" height="6" rx="1" fill="#888" />
            <rect x="60" y="26" width="4" height="6" rx="1" fill="#888" />
            {/* Undercarriage */}
            <rect x="5" y="32" width="54" height="3" rx="1" fill="#C0271E" />
            {/* Wheels */}
            <circle cx="14" cy="36" r="5" fill="#1A1A1A" />
            <circle cx="14" cy="36" r="2.5" fill="#888" />
            <circle cx="50" cy="36" r="5" fill="#1A1A1A" />
            <circle cx="50" cy="36" r="2.5" fill="#888" />
            {/* Headlight */}
            <rect x="57" y="20" width="5" height="4" rx="1" fill="#FFF176" />
            {/* Magic Bus text */}
            <text x="18" y="28" fontSize="6" fill="white" fontWeight="bold" fontFamily="sans-serif">MAGIC BUS</text>
        </svg>
    );
}

/* Road / destination pin */
function DestPin({ color, active }) {
    return (
        <svg viewBox="0 0 32 40" width="28" height="35" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 10.444 16 24 16 24s16-13.556 16-24C32 7.163 24.837 0 16 0z"
                fill={active ? color : "#D1D5DB"} />
            <circle cx="16" cy="16" r="7" fill="white" fillOpacity={active ? 1 : 0.6} />
        </svg>
    );
}

function OurStory() {
    const sectionRef = useRef(null);
    const milestoneRefs = useRef([]);
    const START_FROM_CENTER = Math.floor((milestones.length - 1) / 2);
    const [activeIdx, setActiveIdx] = useState(START_FROM_CENTER);
    const [isMilestoneImageOpen, setIsMilestoneImageOpen] = useState(false);
    const [openIdx, setOpenIdx] = useState(null); // phones: which milestone is expanded
    const [showAll, setShowAll] = useState(false); // phones: show every milestone
    const PREVIEW_COUNT = 6;

    useEffect(() => {
        if (!isMilestoneImageOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsMilestoneImageOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isMilestoneImageOpen]);

    // Keep bus aligned to the milestone currently visible in viewport.
    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const viewportCenter = window.innerHeight * 0.5;
            let bestIdx = activeIdx;
            let bestDistance = Number.POSITIVE_INFINITY;

            milestoneRefs.current.forEach((el, idx) => {
                if (!el) return;
                const r = el.getBoundingClientRect();
                const isVisible = r.bottom > 0 && r.top < window.innerHeight;
                if (!isVisible) return;

                const cardCenter = r.top + r.height / 2;
                const dist = Math.abs(cardCenter - viewportCenter);
                if (dist < bestDistance) {
                    bestDistance = dist;
                    bestIdx = idx;
                }
            });

            setActiveIdx(bestIdx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const busProgress = milestones.length > 1 ? activeIdx / (milestones.length - 1) : 0;

    return (
        <section
            ref={sectionRef}
            style={{ background: '#0F0F0F' }}
            className="relative py-10 md:py-20 overflow-hidden"
        >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-[420px] rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-6 md:mb-14">
                    <SectionLabel icon={Quote}>Our Story</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        The Magic Bus Journey
                    </h2>
                    <p className="mt-5 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">
                        A timeline of key milestones from our foundation in 1999 to scaling impact across India.
                    </p>
                </FadeUp>

                <FadeUp delay={0.05} className="mb-6 md:mb-14">
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-red">
                        <div className="absolute -top-16 -right-14 h-44 w-44 rounded-full bg-white/10" />
                        <div className="grid lg:grid-cols-5 gap-0">
                            <div className="relative z-10 lg:col-span-3 p-5 md:p-8 lg:p-9">
                                <Quote className="w-10 h-10 text-white/35" />
                                <p className="mt-3 md:mt-4 text-white text-lg md:text-2xl font-semibold leading-snug md:leading-tight max-w-3xl">
                                    Magic Bus India Foundation began in 1999. Our founder noticed the
                                    transformative power of sport to change lives of young boys from underserved
                                    communities. This realisation started with simple rugby sessions that grew
                                    into activity-based camps shaping confidence, discipline, and aspiration.
                                </p>
                                <div className="mt-6 w-40 h-px bg-white/30" />
                                <p className="mt-4 text-white/80 text-sm md:text-base font-bold tracking-[0.16em] uppercase">
                                    Magic Bus Story
                                </p>
                            </div>

                            <div className="lg:col-span-2 flex items-center justify-center p-4 md:p-5">
                                <button
                                    type="button"
                                    onClick={() => setIsMilestoneImageOpen(true)}
                                    className="w-full max-w-[300px] overflow-hidden rounded-xl border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                                    aria-label="Open milestone image"
                                >
                                    <img loading="lazy" decoding="async"
                                        src="/milestone-1.jpg"
                                        alt="Magic Bus journey milestones"
                                        className="h-32 md:h-56 w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.03]"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeUp>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-brand-red/80 via-brand-yellow/60 to-brand-blue/70 rounded-full opacity-40" />

                    <motion.div
                        className="hidden lg:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        animate={{ top: `${Math.max(3, busProgress * 94)}%` }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="rounded-xl bg-[#161616] border border-brand-red/40 px-2 py-1 shadow-[0_0_20px_rgba(230,51,41,0.35)]">
                            <BusIcon className="w-14 h-9" />
                        </div>
                    </motion.div>

                    <div className="space-y-2.5 md:space-y-6 lg:space-y-8">
                        {milestones.map((m, i) => {
                            const isActive = i === activeIdx;
                            const isVisited = i <= activeIdx;
                            const alignRight = i % 2 !== 0;

                            return (
                                <motion.article
                                    key={`${m.year}-${m.title}`}
                                    ref={(el) => {
                                        milestoneRefs.current[i] = el;
                                    }}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.4, ease: EASE }}
                                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                    className={[
                                        'relative cursor-pointer md:cursor-default rounded-xl border backdrop-blur-sm p-4 md:p-5',
                                        'lg:w-[calc(50%-4rem)]',
                                        i >= PREVIEW_COUNT && !showAll ? 'hidden md:block' : '',
                                        alignRight ? 'lg:ml-auto' : 'lg:mr-auto',
                                        isActive ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_35px_rgba(230,51,41,0.22)]' : '',
                                    ].join(' ')}
                                    style={{
                                        background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                                        borderColor: isActive ? `${m.color}88` : isVisited ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)',
                                    }}
                                >
                                    <span
                                        className={[
                                            'hidden lg:block absolute top-8 h-3.5 w-3.5 rounded-full border-2',
                                            alignRight ? '-left-[3.44rem]' : '-right-[3.44rem]',
                                        ].join(' ')}
                                        style={{
                                            background: isVisited ? m.color : '#4B5563',
                                            borderColor: isVisited ? m.color : '#6B7280',
                                        }}
                                    />

                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="text-sm md:text-base font-bold uppercase tracking-[0.14em]" style={{ color: isVisited ? m.color : '#D1D5DB' }}>
                                                {m.year}
                                            </p>
                                            <h3 className="mt-1 text-lg md:text-xl font-bold text-white leading-snug">
                                                {m.title}
                                            </h3>
                                            <p className={`${openIdx === i ? "block" : "hidden"} md:block mt-1.5 text-base text-white/80 leading-relaxed`}>
                                                {m.desc}
                                            </p>
                                        </div>
                                        {m.impact && (
                                            <span
                                                className="shrink-0 rounded-full px-3 py-1.5 text-sm font-bold text-white"
                                                style={{ background: m.color }}
                                            >
                                                {m.impact}
                                            </span>
                                        )}
                                        <span className="md:hidden shrink-0 text-xl font-bold leading-none text-white/50" aria-hidden="true">
                                            {openIdx === i ? "\u2212" : "+"}
                                        </span>
                                    </div>

                                    <div className={`${openIdx === i ? "flex" : "hidden"} md:flex mt-2.5 items-center gap-2`}>
                                        <span
                                            className="text-xs md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
                                            style={{ color: m.color, borderColor: `${m.color}66`, background: `${m.color}1A` }}
                                        >
                                            {m.tag}
                                        </span>
                                        <span className="text-xs md:text-sm text-white/65 uppercase tracking-wider">
                                            {m.era}
                                        </span>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <div className="md:hidden mt-4 text-center">
                    <button
                        type="button"
                        onClick={() => setShowAll((v) => !v)}
                        className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                        {showAll ? "Show fewer milestones" : `Show all ${milestones.length} milestones`}
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.22 }}
                        className="px-1 md:px-3 lg:px-0 max-w-7xl mx-auto w-full py-4"
                    >
                        <div
                            className="rounded-xl px-4 py-2.5 flex items-center gap-3 border"
                            style={{
                                background: `${milestones[activeIdx].color}10`,
                                borderColor: `${milestones[activeIdx].color}30`,
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <div
                                className="w-1.5 self-stretch rounded-full shrink-0"
                                style={{ background: milestones[activeIdx].color }}
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-base font-extrabold uppercase tracking-widest" style={{ color: milestones[activeIdx].color }}>
                                        {milestones[activeIdx].year}
                                    </span>
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                                        style={{ borderColor: `${milestones[activeIdx].color}45`, color: milestones[activeIdx].color }}
                                    >
                                        {milestones[activeIdx].tag}
                                    </span>
                                </div>
                                <p className="text-lg font-bold text-white truncate">{milestones[activeIdx].title}</p>
                                <p className="text-base text-white/65 leading-relaxed line-clamp-1 mt-0.5">{milestones[activeIdx].desc}</p>
                            </div>
                            {milestones[activeIdx].impact && (
                                <div
                                    className="shrink-0 rounded-xl px-4 py-2 text-center text-white"
                                    style={{ background: milestones[activeIdx].color }}
                                >
                                    <div className="text-2xl font-extrabold leading-none">{milestones[activeIdx].impact}</div>
                                    <div className="text-xs opacity-80 mt-0.5 font-semibold">outreach</div>
                                </div>
                            )}
                            <div className="shrink-0 hidden lg:block">
                                <div className="text-5xl font-extrabold tabular-nums" style={{ color: `${milestones[activeIdx].color}25` }}>
                                    {String(activeIdx + 1).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    {isMilestoneImageOpen && (
                        <motion.div
                            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMilestoneImageOpen(false)}
                        >
                            <motion.div
                                className="relative w-full max-w-6xl"
                                initial={{ scale: 0.92, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.96, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsMilestoneImageOpen(false)}
                                    className="absolute -top-12 right-0 text-white/90 text-sm font-semibold hover:text-white"
                                >
                                    Close
                                </button>
                                <div className="rounded-2xl bg-white p-2 md:p-3 shadow-2xl">
                                    <img loading="lazy" decoding="async"
                                        src="/milestone-1.jpg"
                                        alt="Magic Bus journey milestones enlarged"
                                        className="w-full h-auto max-h-[82vh] rounded-xl object-contain"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
/* WHY MAGIC BUS */
const impacts = [
    { icon: GraduationCap, hex: "#21BDEA", fg: "#FFFFFF", label: "Reduces school dropout rates" },
    { icon: Briefcase, hex: "#B3CC35", fg: "#1A1A1A", label: "Enhances job readiness" },
    { icon: Wallet, hex: "#E01085", fg: "#FFFFFF", label: "Enables long-term financial independence" },
];

function WhyMagicBus() {
    const navigate = useNavigate();
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <SectionLabel icon={Zap}>Why Magic Bus?</SectionLabel>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-[1.1]">
                                Operating Across the Full Journey {" "}
                                <span className="text-brand-red">Adolescence to Employment</span>
                            </h2>
                            <p className="mt-6 text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
                                Magic Bus addresses the root causes of school dropouts and unemployment. Through
                                timely intervention and structured support for young people, we help in:
                            </p>

                            <ul className="mt-6 md:mt-8 space-y-4 md:space-y-5 pl-3 md:pl-0">
                                {impacts.map((im, i) => (
                                    <motion.li
                                        key={im.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-40px" }}
                                        transition={{ duration: 0.5, ease: EASE, delay: 0.1 * i }}
                                        whileHover={{ x: 6 }}
                                        className="group relative flex items-center gap-5 rounded-2xl border border-gray-100 bg-[#F7F7F5] py-4 pl-20 pr-5 shadow-sm transition-shadow hover:shadow-lg"
                                    >
                                        {/* Logo badge that pops out of the card's left edge */}
                                        <motion.span
                                            initial={{ scale: 0, rotate: -40 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 280, damping: 12, delay: 0.25 + 0.1 * i }}
                                            whileHover={{ rotate: [0, -12, 12, 0], scale: 1.18 }}
                                            className="absolute -left-3 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl shadow-xl ring-4 ring-white"
                                            style={{ background: im.hex, color: im.fg }}
                                        >
                                            <im.icon className="h-8 w-8" />
                                        </motion.span>
                                        <span className="text-lg font-semibold text-[#1A1A1A] md:text-xl">{im.label}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <FadeUp delay={0.3}>
                                <p className="mt-8 text-[#1A1A1A]/80 leading-relaxed text-base md:text-lg">
                                    We are open to collaborating with donors and partners to create sustainable
                                    impact, scalable models, and outcomes in line with India's development priorities.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link
                                        to="/partner"
                                        className="inline-flex h-14 w-56 items-center justify-center gap-2 rounded-full bg-brand-red px-4 text-base font-bold text-white hover:bg-brand-red/90 transition-colors"
                                    >
                                        Become a Partner <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <FlipCoinButton size="cta" onFlipComplete={() => navigate("/donate")}>
                                        Donate Now
                                    </FlipCoinButton>
                                </div>
                            </FadeUp>
                        </FadeUp>
                    </div>

                    {/* Right image */}
                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden aspect-[16/10] md:aspect-square shadow-xl">
                                <img loading="lazy" decoding="async"
                                    src="/ngo-images/girl.jpeg"
                                    alt="Young person empowerment"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Accent card */}
                            <motion.div
                                className="mt-4 flex items-center gap-4 rounded-2xl bg-brand-yellow p-4 shadow-xl md:absolute md:-bottom-6 md:-left-6 md:mt-0 md:block md:max-w-[200px] md:p-5"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="text-3xl md:text-3xl font-extrabold text-brand-black">25+</div>
                                <div className="text-base font-semibold text-brand-black/80 md:mt-1">Years of transforming young lives across India</div>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* 
   VISION / MISSION / VALUES
*/
const values = [
    {
        icon: Heart,
        title: "Passion",
        desc: "We will work with entrepreneurial zeal to achieve organisational objectives.",
        color: "bg-brand-red",
        hex: "#E12228",
        fg: "text-white",
    },
    {
        icon: Shield,
        title: "Integrity",
        desc: "We will be truthful to ourselves and Magic Bus India Foundation.",
        color: "bg-brand-blue",
        hex: "#21BDEA",
        fg: "text-white",
    },
    {
        icon: Users,
        title: "Respect",
        desc: "We will respect our internal and external stakeholders, diversity of people, ideas and culture.",
        color: "bg-brand-magenta",
        hex: "#E01085",
        fg: "text-white",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "We will promote viable and implementable innovation at our workplace.",
        color: "bg-brand-green",
        hex: "#B3CC35",
        fg: "text-brand-black",
    },
    {
        icon: Star,
        title: "Collaboration",
        desc: "We will always be a united team by upholding our core purpose and honouring one another's commitments.",
        color: "bg-brand-yellow",
        hex: "#FFCC04",
        fg: "text-brand-black",
    },
];

function VisionMissionValues() {
    return (
        <section className="py-12 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Values */}
                <FadeUp className="text-center mb-8 md:mb-12">
                    <SectionLabel>Our Values</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
                        The Values That Drive Us Forward
                    </h2>
                    <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                        At Magic Bus, we abide by certain values that guide every decision and action we take.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    {values.map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i} className={i === values.length - 1 ? "col-span-2 md:col-span-1" : ""}>
                            <motion.div
                                className="group relative flex h-full cursor-default flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-white/30 hover:bg-white/10 sm:p-7"
                                whileHover={{ y: -10 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            >
                                {/* glow in the value's own colour */}
                                <span
                                    className="pointer-events-none absolute -top-14 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                                    style={{ background: v.hex }}
                                />
                                <motion.div
                                    className={`${v.color} relative mb-3 sm:mb-5 inline-flex rounded-3xl p-3.5 shadow-xl ring-4 ring-white/10 sm:p-5`}
                                    whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.18 }}
                                    transition={{ duration: 0.55 }}
                                >
                                    <v.icon className={`h-9 w-9 sm:h-11 sm:w-11 ${v.fg}`} />
                                </motion.div>
                                <h3 className="relative mb-2 text-xl font-extrabold text-white">{v.title}</h3>
                                <p className="relative mt-auto text-base leading-relaxed text-white/80">{v.desc}</p>
                                <span
                                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                                    style={{ background: v.hex }}
                                />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* 
   PAGE EXPORT
 */
export default function AboutUs() {
    return (
        <Layout>
            <HeroSection />
            <ProblemStatement />
            <WhyLifeSkills />
            <WhoWeAre />
            <WhatWeDo />
            <OurStory />
            <WhyMagicBus />
            <VisionMission />
            <VisionMissionValues />
            <FAQSection
                items={aboutFAQ}
                title="Frequently Asked Questions"
                subtitle="Clear answers about Magic Bus, our programmes, and how we create impact."
            />
        </Layout>
    );
}
