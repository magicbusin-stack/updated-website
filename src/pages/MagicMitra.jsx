import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Bot,
    CheckCircle2,
    Gauge,
    Globe2,
    Mail,
    PlayCircle,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Users2,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <_MOTION.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
            {children}
        </_MOTION.div>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
            {children}
        </span>
    );
}

const mitraFaq = [
    {
        question: "Who has developed Magic Mitra?",
        category: "General",
        answer: "Magic Mitra has been created in-house by Magic Bus India Foundation.",
    },
    {
        question: "Can Magic Mitra be accessed by users outside Magic Bus India Foundation?",
        category: "Access",
        answer: "No, Magic Mitra is only available for users part of Magic Bus India Foundation.",
    },
];

export default function MagicMitra() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/ai2.jpg"
                title="Magic Mitra"
                subtitle="Where innovation meets impact"
                description="A WhatsApp-based, AI-enabled teaching companion helping government school teachers deliver life skills sessions with confidence and consistency."
                ctas={[
                    { href: "#watch-demo", label: "Watch Demo", variant: "primary", showArrow: true },
                    { href: "#get-in-touch", label: "Get in Touch" },
                ]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                        <FadeUp>
                            <SectionTag>About Magic Mitra</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">What is Magic Mitra?</h2>
                            <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                                Magic Mitra is a WhatsApp-based AI-enabled chatbot developed in-house by Magic Bus India Foundation
                                to strengthen the delivery of life skills and 21st century competencies in government schools.
                            </p>
                            <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                                Designed to work seamlessly on basic smartphones and in low-connectivity environments, it ensures
                                that teachers receive structured, on-demand support directly through a platform they already use.
                            </p>
                            <div className="mt-5 space-y-2">
                                {[
                                    "Step-by-step session guides",
                                    "Automated reminders",
                                    "Facilitation prompts",
                                    "Real-time assistance",
                                ].map((item) => (
                                    <div key={item} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                        <p className="text-[#1A1A1A]/80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.06}>
                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#0f3f79] via-[#15549b] to-[#1f63ad] p-7 text-white h-full">
                                <p className="text-sm uppercase tracking-widest font-bold text-brand-yellow">Operational Reach</p>
                                <p className="mt-3 text-white/85 leading-relaxed">
                                    Currently operational across six states — Madhya Pradesh, Rajasthan, and four NITI Aayog Aspirational States
                                    (Uttarakhand, Uttar Pradesh, Himachal Pradesh, and Haryana) — Magic Mitra enables scalable, technology-driven
                                    programme implementation within public education systems.
                                </p>
                                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
                                    {[
                                        { icon: Smartphone, label: "Low-connectivity ready" },
                                        { icon: Bot, label: "AI-enabled support" },
                                        { icon: Users2, label: "Teacher-first design" },
                                        { icon: Gauge, label: "Real-time tracking" },
                                    ].map((item) => (
                                        <div key={item.label} className="rounded-xl bg-white/10 p-3">
                                            <item.icon className="w-4 h-4 text-brand-yellow" />
                                            <p className="mt-2 text-xs font-semibold">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Benefits</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Benefits of Magic Mitra</h2>
                    </FadeUp>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Scalable", desc: "Operates seamlessly across multiple states and languages through WhatsApp.", icon: Globe2 },
                            { title: "Accessible & Familiar", desc: "Built on WhatsApp with a user-friendly flow for low-bandwidth and remote settings.", icon: Smartphone },
                            { title: "Smart & Efficient", desc: "Leverages AI to provide quick, automated, and responsive support.", icon: Sparkles },
                            { title: "Easy Integration", desc: "Aligns smoothly with existing government education systems and processes.", icon: ShieldCheck },
                            { title: "Cost-Effective", desc: "Reduces reliance on traditional in-person support and lowers operational costs.", icon: Gauge },
                            { title: "Data-Driven", desc: "Enables real-time monitoring, performance tracking, and informed decision-making.", icon: Bot },
                            { title: "Teacher-Friendly", desc: "Provides instant assistance and structured guidance to improve facilitation quality.", icon: Users2 },
                            { title: "Future-Ready", desc: "Ensures consistent, high-quality life skills delivery while evolving with emerging needs.", icon: CheckCircle2 },
                        ].map((item, i) => (
                            <FadeUp key={item.title} delay={0.05 * i}>
                                <_MOTION.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 bg-white p-5 h-full">
                                    <item.icon className="w-5 h-5 text-brand-red" />
                                    <h3 className="mt-3 text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                                    <p className="mt-2 text-sm text-[#1A1A1A]/70">{item.desc}</p>
                                </_MOTION.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section id="watch-demo" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <SectionTag>Demo</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Watch a Demo</h2>
                    </FadeUp>
                    <FadeUp delay={0.06} className="mt-8">
                        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-black">
                            <video className="w-full h-auto max-h-[640px] object-cover" controls preload="metadata">
                                <source src="/ngo-videos/4.MOV" type="video/quicktime" />
                            </video>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <SectionTag>Testimonials</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Listen to Testimonials</h2>
                    </FadeUp>

                    <div className="mt-8 grid lg:grid-cols-3 gap-5">
                        {[
                            {
                                name: "Vidyabhushan",
                                role: "Teacher",
                                quote: "Magic Mitra has proven to be very beneficial for students as well as teachers.",
                                video: "/Testimonial 1.mp4",
                            },
                            {
                                name: "Neenu Mishra",
                                role: "Session Reporter",
                                quote: "From attendance to session reporting, Magic Mitra has simplified many tasks for me.",
                                video: "/Testimonial 2.mp4",
                            },
                            {
                                name: "Nitya",
                                role: "Teacher",
                                quote: "It is very easy and convenient to use Magic Mitra chatbot.",
                                video: "/Testimonial 3.mp4",
                            },
                        ].map((item, i) => (
                            <FadeUp key={item.name} delay={0.05 * i}>
                                <_MOTION.article whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 bg-white p-5">
                                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
                                        <video className="w-full aspect-video object-cover" controls preload="metadata">
                                            <source src={item.video} type="video/mp4" />
                                        </video>
                                    </div>
                                    <p className="mt-4 text-sm text-[#1A1A1A]/75 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                                    <p className="mt-3 font-bold text-[#1A1A1A]">{item.name}</p>
                                    <p className="text-xs uppercase tracking-wider text-[#1A1A1A]/55">{item.role}</p>
                                </_MOTION.article>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                items={mitraFaq}
                title="Frequently Asked Questions"
                subtitle="Answers to key questions about access, development, and usage of Magic Mitra."
            />

            <section id="get-in-touch" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-brand-red to-[#c9212b] text-white p-8 md:p-10">
                            <SectionTag>Get in Touch</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in Touch</h2>
                            <p className="mt-4 text-white/90 font-semibold">Aashiq Rizvi</p>
                            <p className="text-white/80">Associate Director - Curriculum &amp; Training, Govt. Partnerships</p>
                            <a
                                href="mailto:rizvi@magicbusindia.org"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-brand-red font-bold"
                            >
                                <Mail className="w-4 h-4" />
                                rizvi@magicbusindia.org
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
}
