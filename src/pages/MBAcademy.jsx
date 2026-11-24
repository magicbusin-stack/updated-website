import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Apple, BarChart3, BookOpen, GraduationCap, Layers, Mail, MessageSquare, MonitorSmartphone, PlayCircle, Quote, Smartphone, Star } from "lucide-react";
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
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-sm font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

/* ── ABOUT ── */
const aboutTags = [
    { label: "Browser & App Access", Icon: MonitorSmartphone, bg: "bg-brand-red", fg: "text-white" },
    { label: "Multimedia Content", Icon: PlayCircle, bg: "bg-brand-blue", fg: "text-brand-black" },
    { label: "Capacity Building", Icon: GraduationCap, bg: "bg-brand-yellow", fg: "text-brand-black" },
    { label: "Progress Tracking", Icon: BarChart3, bg: "bg-brand-green", fg: "text-brand-black" },
];

function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <div>
                        <FadeUp>
                            <SectionTag><BookOpen className="w-3 h-3" />About MB Academy</SectionTag>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                                What is Magic Bus <span className="text-brand-red">Academy?</span>
                            </h2>
                            <p className="mt-5 text-lg text-[#1A1A1A]/85 leading-relaxed">
                                Magic Bus Academy is a <span className="font-semibold text-[#1A1A1A]">virtual space</span> designed to meet the training needs of staff and volunteers working with Magic Bus. It is an interactive platform where learners get access to customized learning modules and map learning progress.
                            </p>
                            <p className="mt-4 text-lg text-[#1A1A1A]/85 leading-relaxed">
                                It is an <span className="font-semibold text-[#1A1A1A]">online learning management system</span> (with browser and native app access) loaded with original, multimedia and interactive content for capacity building of the Magic Bus delivery staff and volunteers.
                            </p>
                            <p className="mt-4 text-lg text-[#1A1A1A]/85 leading-relaxed">
                                The MB Academy seeks to complement and enhance training outcomes which are primarily face-to-face and resource intensive.
                            </p>

                            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {aboutTags.map(({ label, Icon, bg, fg }, i) => (
                                    <FadeUp key={label} delay={0.07 * i} className="h-full">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                            className="group relative flex h-full cursor-default items-center gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                                        >
                                            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${bg} ${fg}`}>
                                                <Icon className="h-7 w-7" />
                                            </span>
                                            <span className="text-lg md:text-xl font-extrabold leading-snug text-[#1A1A1A]">{label}</span>
                                            <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${bg}`} />
                                        </motion.div>
                                    </FadeUp>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: App mockup + store badges */}
                    <FadeUp delay={0.15}>
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#1A1A1A]">
                                <img loading="lazy" decoding="async" src="/mb-academy/app-mockup.png" alt="MB Academy App"
                                    className="w-full h-full object-cover opacity-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5">
                                    <span className="text-white/90 text-sm font-bold uppercase tracking-widest">Available on</span>
                                    <div className="cta-inline mt-2">
                                        <a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                                            target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 text-white text-sm font-bold hover:bg-white/25 transition-all backdrop-blur-sm">
                                            <Smartphone className="w-4 h-4 text-brand-yellow" />Google Play
                                        </a>
                                        <a href="#" className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 text-white text-sm font-bold hover:bg-white/25 transition-all backdrop-blur-sm">
                                            <Apple className="w-4 h-4 text-white" />App Store
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <motion.div className="absolute -top-4 -right-4 bg-brand-red text-white rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                <p className="text-xl font-black leading-none">LMS</p>
                                <p className="text-xs font-bold uppercase tracking-wider opacity-80">Online Platform</p>
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
    { icon: Smartphone, title: "Google Play & App Store", desc: "Download the MB Academy app on Android and iOS. Learn anytime, anywhere — even on the go.", bg: "bg-brand-red", fg: "text-white" },
    { icon: BookOpen, title: "Access to Learning Materials", desc: "All training content is centralised and easily accessible — multimedia modules, guides, and resources in one place.", bg: "bg-brand-yellow", fg: "text-brand-black" },
    { icon: Layers, title: "Customised Modules", desc: "Learning paths tailored to role and programme — so every staff member and volunteer gets relevant, targeted content.", bg: "bg-brand-blue", fg: "text-brand-black" },
    { icon: BarChart3, title: "Comprehensive Feedback", desc: "Track learning progress, complete assessments, and receive feedback to continuously improve training outcomes.", bg: "bg-brand-green", fg: "text-brand-black" },
];

function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14 text-center">
                    <SectionTag><Layers className="w-3 h-3" />Features</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                        Features of Magic Bus <span className="text-brand-red">Academy</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto">
                        Built to make learning effective, flexible, and measurable for every Magic Bus staff member and volunteer.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.08 * i} className="h-full">
                            <motion.div
                                className="group relative flex h-full cursor-default items-start gap-5 overflow-hidden rounded-3xl border border-[#E0E0E0] bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-8"
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                                {/* Ghost number */}
                                <div className="pointer-events-none absolute -bottom-3 -right-1 select-none text-[100px] font-black leading-none text-[#1A1A1A]/5 transition-colors group-hover:text-[#1A1A1A]/10">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <span className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${f.bg} ${f.fg}`}>
                                    <f.icon className="h-8 w-8" />
                                </span>
                                <div className="relative">
                                    <h3 className="text-2xl font-extrabold leading-snug text-[#1A1A1A]">{f.title}</h3>
                                    <p className="mt-2 text-lg leading-relaxed text-[#1A1A1A]/85">{f.desc}</p>
                                </div>
                                <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${f.bg}`} />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Download CTA strip */}
                <FadeUp delay={0.2}>
                    <div className="mt-12 rounded-3xl bg-[#1A1A1A] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-white font-extrabold text-2xl">Ready to start learning?</p>
                            <p className="text-white/85 text-lg mt-1">Download MB Academy on your device today — it's free for all Magic Bus staff and volunteers.</p>
                        </div>
                        <div className="cta-pair shrink-0">
                            <motion.a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-7 py-3.5 text-base font-bold shadow-md"
                                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />Google Play
                            </motion.a>
                            <motion.a href="#"
                                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white rounded-full px-7 py-3.5 text-base font-bold"
                                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
                                <Apple className="w-4 h-4" />App Store
                            </motion.a>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ── REVIEWS ── */
const reviews = [
    { name: "Ravi K.", role: "Programme Staff", rating: 5, text: "MB Academy has made it so easy to complete my training modules at my own pace. The content is relevant and well-structured." },
    { name: "Sunita M.", role: "Volunteer", rating: 5, text: "Very helpful platform! I love that I can access all the learning materials from my phone. The feedback feature is especially useful." },
    { name: "Anil S.", role: "Field Coordinator", rating: 4, text: "A great resource for all Magic Bus staff. The customised modules save so much time and the progress tracking keeps me motivated." },
    { name: "Priya T.", role: "Programme Officer", rating: 5, text: "The app is intuitive and works even in areas with slower internet. An excellent tool for capacity building at scale." },
];

function ReviewCard({ review, delay }) {
    return (
        <FadeUp delay={delay} className="h-full">
            <motion.div
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-8 shadow-xl ring-1 ring-brand-red/30 transition-shadow duration-300 hover:shadow-2xl md:p-10"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}>
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
                <div className="relative flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                        <Quote className="h-7 w-7 text-brand-black" />
                    </span>
                    <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
                        ))}
                    </div>
                </div>
                <p className="relative mt-6 flex-1 text-xl md:text-2xl font-semibold leading-relaxed text-white">"{review.text}"</p>
                <div className="relative mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-red text-2xl font-black text-white ring-4 ring-brand-yellow">
                        {review.name[0]}
                    </div>
                    <div>
                        <p className="text-xl font-extrabold text-white">{review.name}</p>
                        <p className="text-base font-semibold text-brand-yellow">{review.role}</p>
                    </div>
                </div>
            </motion.div>
        </FadeUp>
    );
}

function ReviewsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag><MessageSquare className="w-3 h-3" />Reviews</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            What Our Learners <span className="text-brand-red">Say</span>
                        </h2>
                        <a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-red text-base md:text-lg font-bold hover:underline shrink-0">
                            View on Google Play <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Aggregate rating */}
                    <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-[#E0E0E0] bg-[#F9F9F6] px-6 py-4">
                        <p className="text-5xl font-black text-brand-red">4.8</p>
                        <div>
                            <div className="flex gap-0.5 mb-1">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />)}
                            </div>
                            <p className="text-base text-[#1A1A1A]/75 font-semibold">Average rating · Google Play Store</p>
                        </div>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((r, i) => <ReviewCard key={r.name} review={r} delay={0.07 * i} />)}
                </div>
            </div>
        </section>
    );
}

/* ── CONTACT ── */
function ContactSection() {
    return (
        <section id="contact-academy" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <FadeUp>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold tracking-[0.2em] uppercase text-brand-yellow mb-4">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Have Questions About <span className="text-brand-yellow">MB Academy?</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
                        Reach out to us for access, support, or to learn more about the platform.
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
export default function MBAcademy() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/mb-academy/hero.png"
                title="Magic Bus Academy"
                subtitle="Learning on the go"
                description="A virtual learning management system for Magic Bus staff and volunteers — interactive, mobile-first, and designed for capacity building at scale."
                ctas={[
                    { href: "https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN", label: "Download on Google Play", variant: "primary", showArrow: true },
                    { href: "#contact-academy", label: "Get in Touch" },
                ]}
            />
            <AboutSection />
            <FeaturesSection />
            <ReviewsSection />
            <ContactSection />
        </Layout>
    );
}
