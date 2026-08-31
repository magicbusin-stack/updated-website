import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Mail, MessageSquare, Smartphone, Star, Layers, BarChart3, Apple } from "lucide-react";
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
                    <div>
                        <FadeUp>
                            <SectionTag><BookOpen className="w-3 h-3" />About MB Academy</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                What is Magic Bus Academy?
                            </h2>
                            <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Magic Bus Academy is a <span className="font-semibold text-[#1A1A1A]">virtual space</span> designed to meet the training needs of staff and volunteers working with Magic Bus. It is an interactive platform where learners get access to customized learning modules and map learning progress.
                            </p>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                It is an <span className="font-semibold text-[#1A1A1A]">online learning management system</span> (with browser and native app access) loaded with original, multimedia and interactive content for capacity building of the Magic Bus delivery staff and volunteers.
                            </p>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                The MB Academy seeks to complement and enhance training outcomes which are primarily face-to-face and resource intensive.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {["Browser & App Access", "Multimedia Content", "Capacity Building", "Progress Tracking"].map((tag, i) => (
                                    <FadeUp key={tag} delay={0.07 * i}>
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8F8] border border-brand-red/20 px-3 py-1.5 text-xs font-semibold text-brand-red">
                                            <CheckCircle2 className="w-3 h-3" />{tag}
                                        </span>
                                    </FadeUp>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: App mockup + store badges */}
                    <FadeUp delay={0.15}>
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#1A1A1A]">
                                <img src="/mb-academy/app-mockup.png" alt="MB Academy App"
                                    className="w-full h-full object-cover opacity-90" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5">
                                    <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Available on</span>
                                    <div className="flex gap-3 mt-2">
                                        <a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                                            target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-bold hover:bg-white/25 transition-all backdrop-blur-sm">
                                            <Smartphone className="w-3.5 h-3.5 text-brand-yellow" />Google Play
                                        </a>
                                        <a href="#" className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-bold hover:bg-white/25 transition-all backdrop-blur-sm">
                                            <Apple className="w-3.5 h-3.5 text-white" />App Store
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <motion.div className="absolute -top-4 -right-4 bg-brand-red text-white rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                <p className="text-xl font-black leading-none">LMS</p>
                                <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Online Platform</p>
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
    { icon: Smartphone, title: "Google Play & App Store", desc: "Download the MB Academy app on Android and iOS. Learn anytime, anywhere — even on the go.", color: "#E12228" },
    { icon: BookOpen, title: "Access to Learning Materials", desc: "All training content is centralised and easily accessible — multimedia modules, guides, and resources in one place.", color: "#FFCC04" },
    { icon: Layers, title: "Customised Modules", desc: "Learning paths tailored to role and programme — so every staff member and volunteer gets relevant, targeted content.", color: "#21BDEA" },
    { icon: BarChart3, title: "Comprehensive Feedback", desc: "Track learning progress, complete assessments, and receive feedback to continuously improve training outcomes.", color: "#E12228" },
];

function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14 text-center">
                    <SectionTag><Layers className="w-3 h-3" />Features</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                        Features of Magic Bus Academy
                    </h2>
                    <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-xl mx-auto">
                        Built to make learning effective, flexible, and measurable for every Magic Bus staff member and volunteer.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <FadeUp key={f.title} delay={0.08 * i}>
                            <motion.div
                                className="relative bg-white rounded-3xl border border-[#E0E0E0] p-7 flex flex-col h-full overflow-hidden"
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
                                <h3 className="text-base font-extrabold text-[#1A1A1A] mb-2 leading-snug">{f.title}</h3>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed flex-1">{f.desc}</p>
                                <div className="mt-5 h-0.5 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${f.color}50, transparent)` }} />
                            </motion.div>
                        </FadeUp>
                    ))}
                </div>

                {/* Download CTA strip */}
                <FadeUp delay={0.2}>
                    <div className="mt-12 rounded-3xl bg-[#1A1A1A] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-white font-extrabold text-xl">Ready to start learning?</p>
                            <p className="text-white/50 text-sm mt-1">Download MB Academy on your device today — it's free for all Magic Bus staff and volunteers.</p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <motion.a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-6 py-3 text-sm font-bold shadow-md"
                                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
                                <Smartphone className="w-4 h-4" />Google Play
                            </motion.a>
                            <motion.a href="#"
                                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-6 py-3 text-sm font-bold"
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
        <FadeUp delay={delay}>
            <motion.div
                className="bg-white rounded-2xl border border-[#E0E0E0] p-6 flex flex-col h-full shadow-sm"
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(225,34,40,0.08)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                </div>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed flex-1 mb-5">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0F0F0]">
                    <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white text-sm font-black shrink-0">
                        {review.name[0]}
                    </div>
                    <div>
                        <p className="text-sm font-extrabold text-[#1A1A1A]">{review.name}</p>
                        <p className="text-[11px] text-[#1A1A1A]/45 font-semibold">{review.role}</p>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                            What Our Learners Say
                        </h2>
                        <a href="https://play.google.com/store/apps/details?id=co.courseplay.magicbus&hl=en_IN"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-red text-sm font-bold hover:underline shrink-0">
                            View on Google Play <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Aggregate rating */}
                    <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-[#E0E0E0] bg-[#F9F9F6] px-6 py-4">
                        <p className="text-4xl font-black text-brand-red">4.8</p>
                        <div>
                            <div className="flex gap-0.5 mb-1">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />)}
                            </div>
                            <p className="text-xs text-[#1A1A1A]/50 font-semibold">Average rating · Google Play Store</p>
                        </div>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {reviews.map((r, i) => <ReviewCard key={r.name} review={r} delay={0.07 * i} />)}
                </div>
            </div>
        </section>
    );
}

/* ── CONTACT ── */
function ContactSection() {
    return (
        <section id="contact-academy" className="py-20 bg-[#1A1A1A]">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <FadeUp>
                    <SectionTag>Get in Touch</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                        Have Questions About MB Academy?
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
                        Reach out to us for access, support, or to learn more about the platform.
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
export default function MBAcademy() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/mb-academy/hero.png"
                title="Magic Bus Academy"
                subtitle="Learning on the go"
                titleGradient={false}
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
