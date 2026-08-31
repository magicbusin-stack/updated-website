import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    ChevronDown,
    ClipboardList,
    Mail,
    Network,
    Smartphone,
    Star,
    Trophy,
    UserCheck,
    Users,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

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
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/* ── ABOUT ── */
function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left */}
                    <FadeUp>
                        <SectionTag>About Darwinbox</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                            About Darwinbox
                        </h2>
                        <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                            Darwinbox is a <span className="font-semibold text-[#1A1A1A]">new-age human resource management system</span> tool used by Magic Bus to help employees manage tasks easily. This application simplifies HR tasks and helps employees work efficiently through smooth processes and automation.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                "Simplifies day-to-day HR tasks for all employees",
                                "Available on desktop browser and mobile app",
                                "Automates processes for faster, smoother workflows",
                            ].map((pt, i) => (
                                <FadeUp key={pt} delay={0.07 * i}>
                                    <div className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                        <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{pt}</p>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>

                        {/* Download strip */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <motion.a href="#" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-5 py-2.5 text-sm font-bold shadow-md"
                                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />Google Play
                            </motion.a>
                            <motion.a href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white text-[#1A1A1A]/70 px-5 py-2.5 text-sm font-bold"
                                whileHover={{ scale: 1.04, y: -1, borderColor: "#E12228", color: "#E12228" }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />App Store
                            </motion.a>
                        </div>
                    </FadeUp>

                    {/* Right: hero image */}
                    <FadeUp delay={0.15}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img src="/darwinbox/hero.png" alt="Darwinbox HRMS"
                                className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            {/* Floating stat */}
                            <motion.div
                                className="absolute top-5 right-5 bg-white rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
                                <p className="text-xl font-black text-brand-red leading-none">6+</p>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 mt-0.5">HR Modules</p>
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
    { icon: Users,         title: "Employee Records",       desc: "Maintain complete, up-to-date employee profiles — personal details, documents, history and more in one secure place.", color: "#E12228" },
    { icon: ClipboardList, title: "Attendance",             desc: "Track attendance seamlessly with clock-in/out, leave management, and real-time reporting for managers.", color: "#FFCC04" },
    { icon: Network,       title: "Social Network",         desc: "Connect with colleagues across the organisation, share updates, celebrate milestones and build a vibrant work culture.", color: "#21BDEA" },
    { icon: BarChart3,     title: "Performance Management", desc: "Set goals, conduct reviews, and track performance with structured appraisal workflows and continuous feedback.", color: "#E12228" },
    { icon: UserCheck,     title: "Recruitment",            desc: "Streamline hiring from job posting to onboarding — applicant tracking, interview scheduling, and offer management.", color: "#FFCC04" },
    { icon: Trophy,        title: "Employee Management",    desc: "Manage transfers, promotions, role changes, and offboarding with automated workflows and clear audit trails.", color: "#21BDEA" },
];

function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14 text-center">
                    <SectionTag>Platform Features</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                        Features of this Platform
                    </h2>
                    <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-xl mx-auto">
                        Everything you need to manage HR — simplified, automated, and in one place.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.07 * i}>
                            <motion.div
                                className="relative bg-white rounded-3xl border border-[#E0E0E0] p-7 flex flex-col h-full overflow-hidden group"
                                whileHover={{ y: -6, boxShadow: `0 20px 50px ${f.color}18` }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                                {/* Ghost number */}
                                <div className="pointer-events-none absolute -bottom-2 -right-2 text-[80px] font-black leading-none select-none"
                                    style={{ color: `${f.color}08` }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                                    style={{ backgroundColor: `${f.color}15` }}>
                                    <f.icon className="w-6 h-6" style={{ color: f.color }} />
                                </div>
                                <h3 className="text-base font-extrabold text-[#1A1A1A] mb-2">{f.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed flex-1">{f.desc}</p>
                                <div className="mt-5 h-0.5 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${f.color}60, transparent)` }} />
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
        q: "How to download the application?",
        a: "Darwinbox app can be downloaded from App Store and Google Play. Search for 'Darwinbox' in your device's app store, install it, and log in with your Magic Bus employee credentials.",
    },
    {
        q: "Is this application easy to use?",
        a: "Yes, Darwinbox app is easy to use on desktop as well as mobile, having simple steps to set up one's profile and navigate features. The interface is designed to be intuitive for all users.",
    },
    {
        q: "Who can access Darwinbox?",
        a: "All Magic Bus employees and authorised staff can access Darwinbox using credentials provided by the HR team during onboarding.",
    },
    {
        q: "What should I do if I forget my password?",
        a: "Use the 'Forgot Password' option on the Darwinbox login screen, or contact your HR team at info@magicbusindia.org for assistance.",
    },
];

function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            className="border border-[#E0E0E0] rounded-2xl overflow-hidden bg-white"
            initial={false}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            >
                <span className="font-semibold text-[#1A1A1A] text-sm leading-snug">
                    <span className="text-brand-red font-black mr-2">{String(index + 1).padStart(2, "0")}.</span>
                    {faq.q}
                </span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="w-5 h-5 text-[#1A1A1A]/40 shrink-0" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}>
                        <div className="px-6 pb-5 text-sm text-[#1A1A1A]/65 leading-relaxed border-t border-[#F0F0F0] pt-4">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function FAQSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12 text-center">
                    <SectionTag>FAQs</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-base text-[#1A1A1A]/55 max-w-lg mx-auto">
                        Everything you need to know about using Darwinbox at Magic Bus.
                    </p>
                </FadeUp>
                <div className="space-y-3">
                    {faqs.map((f, i) => (
                        <FadeUp key={f.q} delay={0.07 * i}>
                            <FAQItem faq={f} index={i} />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── CONTACT ── */
function ContactSection() {
    return (
        <section id="contact-darwinbox" className="py-20 bg-[#1A1A1A]">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <FadeUp>
                    <SectionTag>Connect with us</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                        Need Help with Darwinbox?
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
                        For login issues, access requests, or any HR queries, get in touch with the team.
                    </p>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <motion.a href="mailto:info@magicbusindia.org"
                        className="group inline-flex items-center gap-4 rounded-2xl border border-brand-yellow/20 bg-white/5 px-8 py-5 max-w-md w-full mx-auto"
                        whileHover={{ scale: 1.02, borderColor: "rgba(255,204,4,0.5)", backgroundColor: "rgba(255,255,255,0.08)" }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}>
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Email ID</p>
                            <p className="text-white font-bold">info@magicbusindia.org</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
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
                titleGradient={false}
                description="A new-age HRMS used by Magic Bus to simplify HR tasks, automate workflows, and help employees work efficiently — on desktop and mobile."
                ctas={[
                    { href: "#", label: "Download the App", variant: "primary", showArrow: true },
                    { href: "#contact-darwinbox", label: "Get Support" },
                ]}
            />
            <AboutSection />
            <FeaturesSection />
            <FAQSection />
            <ContactSection />
        </Layout>
    );
}
