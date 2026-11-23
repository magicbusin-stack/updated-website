import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    ClipboardList,
    Mail,
    MonitorSmartphone,
    Network,
    Smartphone,
    Trophy,
    UserCheck,
    Users,
    Workflow,
    ListChecks,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import FaqSchema from "../components/seo/FaqSchema";

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}>
            {children}
        </motion.div>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-sm font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/* ── ABOUT ── */
const aboutPoints = [
    { text: "Simplifies day-to-day HR tasks for all employees", Icon: ListChecks, bg: "#E12228", fg: "text-white" },
    { text: "Available on desktop browser and mobile app", Icon: MonitorSmartphone, bg: "#21BDEA", fg: "text-[#1A1A1A]" },
    { text: "Automates processes for faster, smoother workflows", Icon: Workflow, bg: "#FFCC04", fg: "text-[#1A1A1A]" },
];

function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left */}
                    <FadeUp>
                        <SectionTag>About Darwinbox</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            About <span className="text-brand-red">Darwinbox</span>
                        </h2>
                        <p className="mt-5 text-lg text-[#1A1A1A]/85 leading-relaxed">
                            Darwinbox is a <span className="font-semibold text-[#1A1A1A]">new-age human resource management system</span> tool used by Magic Bus to help employees manage tasks easily. This application simplifies HR tasks and helps employees work efficiently through smooth processes and automation.
                        </p>
                        <div className="mt-8 space-y-3">
                            {aboutPoints.map(({ text, Icon, bg, fg }, i) => (
                                <FadeUp key={text} delay={0.07 * i}>
                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                        className="group flex items-center gap-4 rounded-2xl border border-gray-200 border-l-4 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                                        style={{ borderLeftColor: bg }}
                                    >
                                        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${fg}`} style={{ backgroundColor: bg }}>
                                            <Icon className="h-7 w-7" />
                                        </span>
                                        <p className="text-lg md:text-xl font-bold leading-snug text-[#1A1A1A]">{text}</p>
                                    </motion.div>
                                </FadeUp>
                            ))}
                        </div>

                        {/* Download strip */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <motion.a href="#" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 text-base font-bold shadow-md"
                                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />Google Play
                            </motion.a>
                            <motion.a href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white text-[#1A1A1A]/85 px-6 py-3 text-base font-bold"
                                whileHover={{ scale: 1.04, y: -1, borderColor: "#E12228", bg: "bg-brand-red" }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />App Store
                            </motion.a>
                        </div>
                    </FadeUp>

                    {/* Right: hero image */}
                    <FadeUp delay={0.15}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img loading="lazy" decoding="async" src="/darwinbox/hero.png" alt="Darwinbox HRMS"
                                className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            {/* Floating stat */}
                            <motion.div
                                className="absolute top-5 right-5 bg-white rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
                                <p className="text-xl font-black text-brand-red leading-none">6+</p>
                                <p className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/75 mt-0.5">HR Modules</p>
                            </motion.div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ── FEATURES ── */
const features = [
    { icon: Users,         title: "Employee Records",       desc: "Maintain complete, up-to-date employee profiles — personal details, documents, history and more in one secure place.", bg: "bg-brand-red", hover: "hover:bg-brand-red focus-visible:bg-brand-red", iconHover: "group-hover:text-brand-red", light: true },
    { icon: ClipboardList, title: "Attendance",             desc: "Track attendance seamlessly with clock-in/out, leave management, and real-time reporting for managers.", bg: "bg-brand-yellow", hover: "hover:bg-brand-yellow focus-visible:bg-brand-yellow", iconHover: "group-hover:text-[#1A1A1A]", light: false },
    { icon: Network,       title: "Social Network",         desc: "Connect with colleagues across the organisation, share updates, celebrate milestones and build a vibrant work culture.", bg: "bg-brand-blue", hover: "hover:bg-brand-blue focus-visible:bg-brand-blue", iconHover: "group-hover:text-[#1A1A1A]", light: false },
    { icon: BarChart3,     title: "Performance Management", desc: "Set goals, conduct reviews, and track performance with structured appraisal workflows and continuous feedback.", bg: "bg-brand-magenta", hover: "hover:bg-brand-magenta focus-visible:bg-brand-magenta", iconHover: "group-hover:text-brand-magenta", light: true },
    { icon: UserCheck,     title: "Recruitment",            desc: "Streamline hiring from job posting to onboarding — applicant tracking, interview scheduling, and offer management.", bg: "bg-brand-green", hover: "hover:bg-brand-green focus-visible:bg-brand-green", iconHover: "group-hover:text-[#1A1A1A]", light: false },
    { icon: Trophy,        title: "Employee Management",    desc: "Manage transfers, promotions, role changes, and offboarding with automated workflows and clear audit trails.", bg: "bg-brand-red", hover: "hover:bg-brand-red focus-visible:bg-brand-red", iconHover: "group-hover:text-brand-red", light: true },
];

function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14 text-center">
                    <SectionTag>Platform Features</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Features of this <span className="text-brand-red">Platform</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto">
                        Everything you need to manage HR — simplified, automated, and in one place.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.07 * i} className="h-full">
                            {/* Hover or keyboard focus: the whole card fills with its colour */}
                            <motion.div
                                tabIndex={0}
                                className={`group relative flex h-full cursor-default flex-col overflow-hidden rounded-3xl border border-[#E0E0E0] bg-white p-7 shadow-sm transition-colors duration-300 hover:border-transparent focus-visible:border-transparent focus-visible:outline-none ${f.hover}`}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                                <div className={`pointer-events-none absolute -bottom-3 -right-1 select-none text-[100px] font-black leading-none text-[#1A1A1A]/5 transition-colors ${f.light ? "group-hover:text-white/20" : "group-hover:text-[#1A1A1A]/10"}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <span className={`relative mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white ${f.bg} ${f.light ? "text-white" : "text-[#1A1A1A]"} ${f.iconHover}`}>
                                    <f.icon className="h-8 w-8" />
                                </span>
                                <h3 className={`relative mb-2 text-2xl font-extrabold leading-snug text-[#1A1A1A] ${f.light ? "group-hover:text-white" : ""}`}>{f.title}</h3>
                                <p className={`relative flex-1 text-lg leading-relaxed text-[#1A1A1A]/85 ${f.light ? "group-hover:text-white" : "group-hover:text-[#1A1A1A]"}`}>{f.desc}</p>
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── FAQ ── */
const faqs = [
    {
        question: "How to download the application?",
        category: "Download",
        answer: "Darwinbox app can be downloaded from App Store and Google Play. Search for 'Darwinbox' in your device's app store, install it, and log in with your Magic Bus employee credentials.",
    },
    {
        question: "Is this application easy to use?",
        category: "Usage",
        answer: "Yes, Darwinbox app is easy to use on desktop as well as mobile, having simple steps to set up one's profile and navigate features. The interface is designed to be intuitive for all users.",
    },
    {
        question: "Who can access Darwinbox?",
        category: "Access",
        answer: "All Magic Bus employees and authorised staff can access Darwinbox using credentials provided by the HR team during onboarding.",
    },
    {
        question: "What should I do if I forget my password?",
        category: "Login",
        answer: "Use the 'Forgot Password' option on the Darwinbox login screen, or contact your HR team at info@magicbusindia.org for assistance.",
    },
];

/* ── CONTACT ── */
function ContactSection() {
    return (
        <section id="contact-darwinbox" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <FadeUp>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold tracking-[0.2em] uppercase text-brand-yellow mb-4">Connect with us</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Need Help with <span className="text-brand-yellow">Darwinbox?</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
                        For login issues, access requests, or any HR queries, get in touch with the team.
                    </p>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <motion.a href="mailto:info@magicbusindia.org"
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-brand-yellow/40 transition-all duration-300 group max-w-2xl mx-auto text-left"
                        whileHover={{ y: -3 }}>
                        <div className="bg-brand-yellow rounded-xl p-4 shrink-0">
                            <Mail className="w-6 h-6 text-brand-black" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/65 mb-1">Email ID</p>
                            <div className="inline-flex items-center gap-2 text-brand-yellow font-extrabold text-xl break-all">
                                <Mail className="w-5 h-5 shrink-0" />
                                info@magicbusindia.org
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

/* ── PAGE EXPORT ── */
export default function Darwinbox() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/darwinbox/hero.png"
                title="Darwinbox"
                subtitle="One place for all tasks"
                description="A new-age HRMS used by Magic Bus to simplify HR tasks, automate workflows, and help employees work efficiently — on desktop and mobile."
                ctas={[
                    { href: "#", label: "Download the App", variant: "primary", showArrow: true },
                    { href: "#contact-darwinbox", label: "Get Support" },
                ]}
            />
            <FaqSchema faqs={faqs} />
            <AboutSection />
            <FeaturesSection />
            <FAQSection
                items={faqs}
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about using Darwinbox at Magic Bus."
                categoriesLabel="Filter by topic"
            />
            <ContactSection />
        </Layout>
    );
}
