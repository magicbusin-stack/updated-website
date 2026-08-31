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

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
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
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-yellow px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-black uppercase mb-6">
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
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/*  VISION & MISSION  */
function VisionMission() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="text-center mb-14">
                    <SectionTag>Purpose</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                        What Drives Us Every Day
                    </h2>
                </FadeUp>

                <div className="grid md:grid-cols-2 gap-7">
                    {/* Vision */}
                    <FadeUp delay={0.05}>
                        <div className="relative h-full rounded-3xl bg-[#1A1A1A] text-white p-8 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-red/15 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-red rounded-xl px-3.5 py-2 mb-6">
                                    <Target className="w-4.5 h-4.5 text-white" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">Our Vision</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
                                    Breaking the Cycle of Poverty
                                </h2>
                                <p className="text-white/70 leading-relaxed text-base">
                                    A world where young people break out of poverty to lead fulfilling,
                                    rewarding lives and contribute positively to their communities.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Mission */}
                    <FadeUp delay={0.12}>
                        <div className="relative h-full rounded-3xl border-2 border-brand-yellow bg-white p-8 md:p-10 overflow-hidden">
                            <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-brand-yellow/20 blur-2xl" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-brand-yellow rounded-xl px-3.5 py-2 mb-6">
                                    <Zap className="w-4.5 h-4.5 text-brand-black" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black">Our Mission</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] leading-snug mb-4">
                                    Equipping for Adulthood
                                </h2>
                                <p className="text-[#1A1A1A]/70 leading-relaxed text-base">
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
const challenges = [
    {
        icon: Users,
        label: "Gender Disparity",
        stat: "2 in 5",
        color: "bg-brand-magenta",
        desc: "Girls drop out of school before completing education  losing their voice and chances of financial independence.",
    },
    {
        icon: BookOpen,
        label: "Learning Gaps",
        stat: "45.8%",
        color: "bg-brand-blue",
        desc: "Of 8th Grade students cannot solve simple arithmetic. Without mathematical abilities, managing a business or job becomes difficult.",
    },
    {
        icon: Briefcase,
        label: "Skill Mismatch",
        stat: "43.6%",
        color: "bg-brand-green",
        desc: "Of youth are considered unemployable  they have potential, but lack future-ready skills that employers seek.",
    },
];

function ProblemStatement() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={Target}>The Problem</SectionLabel>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight max-w-3xl">
                        Helping young people complete education and build livelihoods
                    </h2>
                    <p className="mt-5 text-lg text-[#1A1A1A]/70 max-w-3xl leading-relaxed">
                        India has the biggest population of young people globally. However,
                        millions of adolescents and youth from underserved areas are at risk
                        of being left behind  dropping out of school, struggling at
                        workplaces, and being stuck in intergenerational poverty.
                    </p>
                </FadeUp>

                {/* Challenges */}
                <div className="mt-14">
                    <FadeUp delay={0.1}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/50 mb-6">
                            Challenges India Faces Today
                        </p>
                    </FadeUp>
                    <div className="grid md:grid-cols-3 gap-6">
                        {challenges.map((c, i) => (
                            <FadeUp key={c.label} delay={0.1 + i * 0.1}>
                                <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`${c.color} rounded-xl p-3 inline-flex`}
                                        >
                                            <c.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-3xl font-extrabold text-[#1A1A1A] opacity-10 group-hover:opacity-20 transition-opacity">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-extrabold text-brand-red mb-1">
                                            {c.stat}
                                        </div>
                                        <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{c.label}</h3>
                                        <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">{c.desc}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>

                {/* Poverty trap callout */}
                <FadeUp delay={0.2} className="mt-10">
                    <div className="rounded-2xl bg-gradient-to-r from-brand-red/10 via-brand-yellow/10 to-brand-red/5 border border-brand-red/15 p-7">
                        <p className="text-base md:text-lg font-medium text-[#1A1A1A] text-center">
                            <span className="text-brand-red font-bold">When gaps in education, life skills, and employability are not tackled,</span>{" "}<br/>
                            young people are deprived of opportunities due to the poverty trap.
                        </p>
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
    "Enhance resilience, aspiration, and self-belief",
    "Communicate well and make conscious decisions",
    "Handle emotions, challenges, and relationships",
    "Get ready for real-world scenarios beyond classrooms",
];

function WhyLifeSkills() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left  image */}
                    <FadeIn className="order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                            <img
                                src="/ngo-images/5.jpeg"
                                alt="Life skills education"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            {/* Floating card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-yellow rounded-lg p-2.5">
                                        <Star className="w-5 h-5 text-brand-black" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#1A1A1A]/60 font-medium uppercase tracking-wider">Research & Experience Show</p>
                                        <p className="text-sm font-bold text-[#1A1A1A]">Life skills increase chances of finishing education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right  content */}
                    <div className="order-1 lg:order-2">
                        <FadeUp>
                            <SectionLabel icon={Lightbulb}>Life Skills</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Why Life Skills Education Is Needed
                            </h2>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Academic education alone may not be sufficient to help young minds overcome
                                poverty. Adolescents from underserved communities often deal with challenges
                                beyond academics  low confidence, absence of role models, decision-making
                                struggles, and limited exposure.
                            </p>
                            <p className="mt-3 text-base text-[#1A1A1A]/70 leading-relaxed">
                                In the absence of life skills, even students who come to school struggle
                                to handle the challenges of higher education or their workplace.
                            </p>

                            <p className="mt-6 font-semibold text-[#1A1A1A]">With life skills education, young people can:</p>
                            <ul className="mt-4 space-y-3">
                                {lifeSkillBenefits.map((b, i) => (
                                    <FadeUp delay={0.05 * (i + 1)} key={b}>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                                            <span className="text-[#1A1A1A]/75 text-sm leading-relaxed">{b}</span>
                                        </li>
                                    </FadeUp>
                                ))}
                            </ul>

                            <FadeUp delay={0.3}>
                                <div className="mt-8 rounded-xl bg-brand-red/5 border-l-4 border-brand-red p-4">
                                    <p className="text-sm leading-relaxed text-[#1A1A1A]/80 italic">
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

function WhoWeAre() {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-yellow/15 blur-3xl" />


            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <SectionLabel>Who We Are</SectionLabel>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                                One of India's Top NGOs in{" "}
                                <span className="text-brand-yellow">Life Skills & Livelihoods</span>
                            </h2>
                            <p className="mt-5 text-white/70 leading-relaxed">
                                Established in Mumbai in 1999, Magic Bus India Foundation works in the areas
                                of life skills education, employability skilling, and livelihoods. We support
                                adolescents and youth from underserved communities at crucial stages of
                                transformation  from their school days to their career phase.
                            </p>
                            <p className="mt-4 text-white/70 leading-relaxed">
                                We work towards making sure challenging circumstances at birth do not
                                determine their life outcomes.
                            </p>
                            <p className="mt-4 text-white/70 leading-relaxed">
                                Our uniqueness arises from our{" "}
                                <span className="text-brand-yellow font-semibold">ecosystem approach</span>.
                                We engage with families, communities, schools, employers, and local institutions
                                to scale sustainable transformation.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-5 items-center">
                        {stats.map((s, i) => (
                            <FadeUp key={s.label} delay={0.1 * i}>
                                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
                                    <div className="text-3xl md:text-4xl font-extrabold text-brand-yellow">
                                        {s.value}
                                        {s.suffix}
                                    </div>
                                    <div className="mt-2 text-sm text-white/60 font-medium">{s.label}</div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>

                {/* Image strip */}
                <FadeIn delay={0.2} className="mt-16">
                    <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden h-64 md:h-80">
                        {["/ngo-images/6.jpeg", "/ngo-images/ai2.jpg", "/ngo-images/10.jpg"].map((src, i) => (
                            <div key={i} className="overflow-hidden">
                                <img
                                    src={src}
                                    alt=""
                                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                    <FadeUp delay={0.3} className="mt-8 text-center">
                        <Link
                            to="/who-we-are"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-black hover:bg-brand-yellow/90 transition-colors"
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
        color: "text-brand-blue",
        bg: "bg-brand-blue/10",
        title: "Education & Adolescents",
        desc: "Adolescents stay in school, acquire life skills through our curriculum, and finish secondary education.",
    },
    {
        icon: Briefcase,
        color: "text-brand-green",
        bg: "bg-brand-green/10",
        title: "Youth & Livelihoods",
        desc: "Youth acquire employability skills, access opportunities for jobs or self-employment, and sustain livelihoods.",
    },
    {
        icon: Users,
        color: "text-brand-magenta",
        bg: "bg-brand-magenta/10",
        title: "Community Support",
        desc: "Communities support young people's education and career growth through an integrated ecosystem.",
    },
];

function WhatWeDo() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <SectionLabel icon={TrendingUp}>What We Do</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight max-w-2xl">
                        From Classrooms to Careers  an Integrated Approach
                    </h2>
                    <p className="mt-4 text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
                        Our work aims to achieve long-term goals, ensuring that progress made in classrooms
                        transitions to actual economic independence.
                    </p>
                </FadeUp>

                <div className="mt-14 grid md:grid-cols-3 gap-7">
                    {whatWeDo.map((item, i) => (
                        <FadeUp key={item.title} delay={0.1 + i * 0.1}>
                            <div className="relative rounded-2xl border border-gray-100 bg-[#F7F7F5] p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                {/* Icon */}
                                <div className={`${item.bg} ${item.color} inline-flex rounded-xl p-3.5 mb-5`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">{item.desc}</p>
                                {/* Decorative number */}
                                <div className="absolute top-6 right-6 text-5xl font-extrabold text-[#1A1A1A]/5 group-hover:text-[#1A1A1A]/10 transition-colors">
                                    0{i + 1}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* 
   OUR STORY  SCROLL-DRIVEN BUS JOURNEY
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
            className="relative py-16 md:py-20 overflow-hidden"
        >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-[420px] rounded-full bg-brand-red/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
                <FadeUp className="text-center mb-10 md:mb-14">
                    <SectionLabel icon={Quote}>Our Story</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        The Magic Bus Journey
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                        A timeline of key milestones from our foundation in 1999 to scaling impact across India.
                    </p>
                </FadeUp>

                <FadeUp delay={0.05} className="mb-10 md:mb-14">
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-red">
                        <div className="absolute -top-16 -right-14 h-44 w-44 rounded-full bg-white/10" />
                        <div className="grid lg:grid-cols-5 gap-0">
                            <div className="relative z-10 lg:col-span-3 p-6 md:p-8 lg:p-9">
                                <Quote className="w-10 h-10 text-white/35" />
                                <p className="mt-4 text-white text-lg md:text-2xl font-semibold leading-snug md:leading-tight max-w-2xl">
                                    Magic Bus India Foundation began in 1999. Our founder noticed the
                                    transformative power of sport to change lives of young boys from underserved
                                    communities. This realisation started with simple rugby sessions that grew
                                    into activity-based camps shaping confidence, discipline, and aspiration.
                                </p>
                                <div className="mt-6 w-40 h-px bg-white/30" />
                                <p className="mt-4 text-white/65 text-xs md:text-sm font-bold tracking-[0.18em] uppercase">
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
                                    <img
                                        src="/milestone-1.jpg"
                                        alt="Magic Bus journey milestones"
                                        className="h-44 md:h-56 w-full object-cover object-left-top transition-transform duration-300 hover:scale-[1.03]"
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

                    <div className="space-y-5 md:space-y-6 lg:space-y-8">
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
                                    className={[
                                        'relative rounded-xl border backdrop-blur-sm p-3 md:p-4',
                                        'lg:w-[calc(50%-4rem)]',
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
                                            <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: isVisited ? m.color : '#9CA3AF' }}>
                                                {m.year}
                                            </p>
                                            <h3 className="mt-1 text-sm md:text-base font-bold text-white leading-snug">
                                                {m.title}
                                            </h3>
                                            <p className="mt-1.5 text-[11px] md:text-xs text-white/65 leading-relaxed">
                                                {m.desc}
                                            </p>
                                        </div>
                                        {m.impact && (
                                            <span
                                                className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                                                style={{ background: m.color }}
                                            >
                                                {m.impact}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-2.5 flex items-center gap-2">
                                        <span
                                            className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                                            style={{ color: m.color, borderColor: `${m.color}66`, background: `${m.color}1A` }}
                                        >
                                            {m.tag}
                                        </span>
                                        <span className="text-[9px] text-white/45 uppercase tracking-wider">
                                            {m.era}
                                        </span>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
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
                                    <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: milestones[activeIdx].color }}>
                                        {milestones[activeIdx].year}
                                    </span>
                                    <span
                                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                                        style={{ borderColor: `${milestones[activeIdx].color}45`, color: milestones[activeIdx].color }}
                                    >
                                        {milestones[activeIdx].tag}
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-white truncate">{milestones[activeIdx].title}</p>
                                <p className="text-xs text-white/45 leading-relaxed line-clamp-1 mt-0.5">{milestones[activeIdx].desc}</p>
                            </div>
                            {milestones[activeIdx].impact && (
                                <div
                                    className="shrink-0 rounded-xl px-4 py-2 text-center text-white"
                                    style={{ background: milestones[activeIdx].color }}
                                >
                                    <div className="text-xl font-extrabold leading-none">{milestones[activeIdx].impact}</div>
                                    <div className="text-[9px] opacity-70 mt-0.5 font-semibold">outreach</div>
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
                                    <img
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
    { icon: TrendingUp, color: "text-brand-blue", label: "Reduces school dropout rates" },
    { icon: Briefcase, color: "text-brand-green", label: "Enhances job readiness" },
    { icon: Shield, color: "text-brand-magenta", label: "Enables long-term financial independence" },
];

function WhyMagicBus() {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <SectionLabel icon={Zap}>Why Magic Bus?</SectionLabel>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Operating Across the Full Journey {" "}
                                <span className="text-brand-red">Adolescence to Employment</span>
                            </h2>
                            <p className="mt-5 text-[#1A1A1A]/70 leading-relaxed">
                                Magic Bus addresses the root causes of school dropouts and unemployment. Through
                                timely intervention and structured support for young people, we help in:
                            </p>

                            <ul className="mt-6 space-y-4">
                                {impacts.map((im, i) => (
                                    <FadeUp key={im.label} delay={0.1 * i}>
                                        <li className="flex items-center gap-4 rounded-xl border border-gray-100 bg-[#F7F7F5] px-5 py-4">
                                            <im.icon className={`w-5 h-5 ${im.color} shrink-0`} />
                                            <span className="font-medium text-[#1A1A1A]">{im.label}</span>
                                        </li>
                                    </FadeUp>
                                ))}
                            </ul>

                            <FadeUp delay={0.3}>
                                <p className="mt-6 text-[#1A1A1A]/70 leading-relaxed text-sm">
                                    We are open to collaborating with donors and partners to create sustainable
                                    impact, scalable models, and outcomes in line with India's development priorities.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link
                                        to="/partner"
                                        className="inline-flex w-48 items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3.5 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors"
                                    >
                                        Become a Partner <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <FlipCoinButton onFlipComplete={() => navigate("/donate")}>
                                        Donate Now
                                    </FlipCoinButton>
                                </div>
                            </FadeUp>
                        </FadeUp>
                    </div>

                    {/* Right image */}
                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                                <img
                                    src="/ngo-images/girl.jpeg"
                                    alt="Young person empowerment"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Accent card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-brand-yellow rounded-2xl p-5 shadow-xl max-w-[200px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="text-3xl font-extrabold text-brand-black">25+</div>
                                <div className="text-xs font-semibold text-brand-black/70 mt-1">Years of transforming young lives across India</div>
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
    },
    {
        icon: Shield,
        title: "Integrity",
        desc: "We will be truthful to ourselves and Magic Bus India Foundation.",
        color: "bg-brand-blue",
    },
    {
        icon: Users,
        title: "Respect",
        desc: "We will respect our internal and external stakeholders, diversity of people, ideas and culture.",
        color: "bg-brand-magenta",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "We will promote viable and implementable innovation at our workplace.",
        color: "bg-brand-green",
    },
    {
        icon: Star,
        title: "Collaboration",
        desc: "We will always be a united team by upholding our core purpose and honouring one another's commitments.",
        color: "bg-brand-yellow",
    },
];

function VisionMissionValues() {
    return (
        <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Values */}
                <FadeUp className="text-center mb-12">
                    <SectionLabel>Our Values</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                        The Values That Drive Us Forward
                    </h2>
                    <p className="mt-3 text-white/55 max-w-xl mx-auto text-sm">
                        At Magic Bus, we abide by certain values that guide every decision and action we take.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {values.map((v, i) => (
                        <FadeUp key={v.title} delay={0.07 * i}>
                            <motion.div
                                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors group cursor-default h-full flex flex-col"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className={`${v.color} inline-flex rounded-xl p-3 mb-4 mx-auto`}>
                                    <v.icon className={`w-5 h-5 ${v.title === "Innovation" || v.title === "Collaboration" ? "text-brand-black" : "text-white"}`} />
                                </div>
                                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                                <p className="text-xs text-white/50 leading-relaxed mt-auto">{v.desc}</p>
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
