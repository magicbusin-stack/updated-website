import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    GraduationCap,
    Handshake,
    Mail,
    MonitorSmartphone,
    Store,
    Truck,
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

const livelihoodFaq = [
    {
        question: "Which Sustainable Development Goals (SDGs) are addressed through the Livelihood Programme?",
        category: "SDGs",
        answer:
            "The Livelihood Programme is designed to address SDG 8 (Decent Work), SDG 11 (Sustainable Communities), SDG 10 (Reduced Inequalities), SDG 1 (No Poverty), and SDG 4 (Quality Education).",
    },
    {
        question: "In which areas is the Livelihood Programme operational?",
        category: "Coverage",
        answer:
            "This programme is operational in urban, peri-urban, and rural areas, helping underserved youth build sustainable careers and micro-enterprises.",
    },
];

export default function LivelihoodProgramme() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/10.jpg"
                title="Livelihood Programme"
                subtitle="Preparing youth for success"
                description="A livelihood skilling programme that equips underserved youth and women with employability, life, and entrepreneurial skills for sustainable careers."
                ctas={[
                    { href: "#job-placement", label: "Explore Job Placement Sectors", variant: "primary", showArrow: true },
                    { href: "#contact-livelihood", label: "For CSR Support" },
                ]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Need for Youth Interventions</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Need for Youth Interventions</h2>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Nearly 65% of India’s population is under the age of 35. However, unemployment remains high,
                            particularly among youth from underserved communities. The lack of basic employability skills among
                            educated youth remains a major challenge.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            We must equip youth with skills that enhance employability and enable them to adapt to an ever-evolving job market.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="relative overflow-hidden rounded-[34px] border border-gray-200 bg-[#EDEDEA] p-5 md:p-8">
                        <div className="pointer-events-none absolute -left-16 top-1/2 h-px w-52 -rotate-12 bg-brand-red/35" />
                        <div className="pointer-events-none absolute right-[-44px] top-14 h-px w-56 rotate-12 bg-brand-yellow/65" />
                        <div className="pointer-events-none absolute right-20 bottom-16 h-28 w-28 rounded-full bg-brand-yellow/25 blur-2xl" />

                        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-start">
                            <FadeUp className="lg:col-span-7">
                                <div className="relative rounded-[28px] border border-gray-200 bg-white p-7 md:p-8 shadow-sm">
                                    <div className="absolute -right-2 -top-2 h-10 w-10 rounded-full border border-gray-300 bg-white" />
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="inline-flex items-center rounded-full bg-brand-yellow px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-black">
                                            Livelihood Programme
                                        </span>
                                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-[#F7F7F5] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/70">
                                            <BriefcaseBusiness className="w-3.5 h-3.5 text-brand-red" />
                                            Employability + Entrepreneurship
                                        </span>
                                    </div>
                                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-[#15161A] leading-tight">Livelihood Programme</h2>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed text-[#1A1A1A]/80">
                                        The Livelihood Programme of Magic Bus equips youth and women from underserved communities with life skills,
                                        employability skills, and entrepreneurial skills, enabling them to make informed career decisions, support
                                        their families, and contribute to the economy.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.06} className="lg:col-span-5 lg:mt-14">
                                <div className="relative rounded-[28px] border border-[#184987] bg-gradient-to-br from-[#144A8B] to-[#1F5BA2] p-7 text-white shadow-lg">
                                    <div className="absolute -left-3 top-8 rounded-full bg-brand-yellow px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-black">
                                        World of Work
                                    </div>
                                    <p className="mt-8 text-base md:text-lg leading-relaxed text-white/95">
                                        The Livelihood Programme goes beyond technical skilling to build resilience, digital readiness, and agency of
                                        underserved youth. It addresses skill mismatch, limited access to opportunities, and systemic barriers to help
                                        youth increase household incomes and break out of poverty.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.1} className="lg:col-span-12 lg:-mt-2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Resilience", icon: Users2 },
                                        { label: "Digital Readiness", icon: MonitorSmartphone },
                                        { label: "Future Skills", icon: GraduationCap },
                                        { label: "Career Agency", icon: BriefcaseBusiness },
                                    ].map((item, i) => (
                                        <_MOTION.div
                                            key={item.label}
                                            whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                                            className="rounded-2xl border border-gray-200 bg-white p-4"
                                        >
                                            <item.icon className="w-4 h-4 text-brand-red" />
                                            <p className="mt-2 text-sm font-bold text-[#1A1A1A]">{item.label}</p>
                                        </_MOTION.div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>What We Do</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Helping Youth Move from Struggles to Success</h2>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Magic Bus trains underserved youth to step into the modern workforce with new-age skills and build careers with confidence.
                            Participants are equipped with transferable skills, such as digital skills, future-ready skills, life skills, and decision-making abilities.
                        </p>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Magic Bus also supports entrepreneurial aspirations through mentorship to launch and run stable enterprises, enabling financial independence.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <SectionTag>Programme Structure</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Structure, Components, Eligibility for Programme</h2>
                    </FadeUp>
                    <div className="mt-8 grid md:grid-cols-4 gap-4 relative">
                        {[
                            {
                                title: "Who do we support?",
                                points: ["Youth between 21 to 25 years", "Per annum family income less than INR 2,50,000", "NEET (Not in Education, Employment or Training)"],
                            },
                            {
                                title: "What do we provide?",
                                points: ["Life Skills", "Employability Skills"],
                            },
                            {
                                title: "What is our objective?",
                                points: ["To skill and place youth in sustainable employment across white and grey-collar sectors"],
                            },
                            {
                                title: "Where do we place youth?",
                                points: ["Retail & E-Commerce", "IT & ITeS", "QSR", "BFSI", "Logistics"],
                            },
                        ].map((card, i) => (
                            <FadeUp key={card.title} delay={0.05 * i}>
                                <_MOTION.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 bg-white p-5 h-full shadow-sm">
                                    <h3 className="text-lg font-extrabold text-[#1A1A1A]">{card.title}</h3>
                                    <ul className="mt-4 space-y-2">
                                        {card.points.map((point) => (
                                            <li key={point} className="flex gap-2 items-start">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" />
                                                <span className="text-sm text-[#1A1A1A]/75">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </_MOTION.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section id="job-placement" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Job Placement and Sectors</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Job Placement Support for Sectors</h2>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Through the Livelihood Programme, Magic Bus provides job placement support for careers across ITeS, Retail,
                            Logistics, and E-commerce, cultivating pathways to sustainable careers.
                        </p>
                    </FadeUp>

                    <div className="mt-8 rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-[#F7F7F5] px-6 py-4 border-b border-gray-200">
                            <h3 className="text-xl font-extrabold text-[#1A1A1A]">Job Placements for 2024-25</h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {[
                                { sector: "ITeS", placement: "63%", icon: MonitorSmartphone },
                                { sector: "BFSI", placement: "14%", icon: BriefcaseBusiness },
                                { sector: "Retail", placement: "13%", icon: Store },
                                { sector: "Logistics", placement: "1.48%", icon: Truck },
                                { sector: "Hospitality", placement: "1.2%", icon: Users2 },
                            ].map((item) => (
                                <div key={item.sector} className="px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-4 h-4 text-brand-red" />
                                        <span className="font-semibold text-[#1A1A1A]">{item.sector}</span>
                                    </div>
                                    <span className="text-brand-red font-extrabold">{item.placement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center">
                        <SectionTag>Strategic Partnerships</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Our Employment Partners</h2>
                    </FadeUp>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {["/partners/1 (7).jpg", "/partners/1 (8).jpg", "/partners/1 (9).jpg", "/partners/1 (10).jpg", "/partners/1 (11).jpg", "/partners/1 (12).jpg"].map((logo, i) => (
                            <FadeUp key={logo} delay={0.04 * i}>
                                <div className="rounded-xl border border-gray-200 bg-white p-4 h-20 flex items-center justify-center">
                                    <img src={logo} alt="Employment partner logo" className="max-h-10 w-auto object-contain" />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <SectionTag>Impact and Success Stories</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Impact of our Livelihood Programme</h2>
                    </FadeUp>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "4.55 Lac youth placed in jobs from 2015 till March 2025",
                            "1.58 Lac youth placed in jobs from Apr 2024 to Mar 2025",
                            "60% of young people in the Magic Bus Livelihood programme are women",
                            "80% of young people are placed in sustainable jobs with an aspirational salary for entry level job roles ₹15,261",
                            "99% of young people graduate from Magic Bus Livelihood programme",
                            "65% of young people continue with employment for at least 3 months",
                        ].map((metric, i) => (
                            <FadeUp key={metric} delay={0.05 * i}>
                                <_MOTION.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 h-full">
                                    <p className="text-sm font-semibold text-[#1A1A1A]/85">{metric}</p>
                                </_MOTION.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                items={livelihoodFaq}
                title="Frequently Asked Questions"
                subtitle="Quick answers about SDG alignment and programme coverage."
            />

            <section id="contact-livelihood" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-[#F7F7F5] p-7 h-full">
                            <SectionTag>For CSR Support</SectionTag>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">For CSR Support, Contact Us</h2>
                            <p className="mt-4 text-[#1A1A1A]/75">Leena Rao: Head – Programme and Partnerships</p>
                            <a href="mailto:leena.rao@magicbusindia.org" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]">
                                <Mail className="w-4 h-4" />
                                leena.rao@magicbusindia.org
                            </a>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.06}>
                        <div className="rounded-3xl border border-gray-200 bg-white p-7 h-full">
                            <SectionTag>Get in Touch</SectionTag>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">Get in Touch</h2>
                            <p className="mt-4 text-[#1A1A1A]/75">For other enquiries related to this programme.</p>
                            <a href="mailto:info@magicbusindia.org" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]">
                                <Mail className="w-4 h-4" />
                                info@magicbusindia.org
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
}
