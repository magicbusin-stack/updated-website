import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    BriefcaseBusiness,
    CalendarCheck,
    Compass,
    GraduationCap,
    Handshake,
    Heart,
    Mail,
    MapPin,
    MonitorSmartphone,
    Rocket,
    ShieldCheck,
    Store,
    Target,
    TrendingUp,
    Truck,
    Users2,
    Wallet,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import FaqSchema from "../components/seo/FaqSchema";
import usePageMeta from "../hooks/usePageMeta";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { CountUp, StatsBand } from "../components/reports/ReportBlocks";

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
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
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
            "The Magic Bus Livelihood Programme is operational in urban, peri-urban, and rural areas, helping underserved youth build sustainable careers and micro-enterprises.",
    },
    {
        question: "Who is eligible for the Magic Bus Livelihood Programme?",
        category: "Eligibility",
        answer:
            "Youth between 18-25 years from underserved communities, with a per annum income of INR 3.5 Lacs, can enrol for life skills, employability skills and job placement support.",
    },
    {
        question: "How can companies support the Livelihood Programme through CSR?",
        category: "CSR",
        answer:
            "Companies can partner with Magic Bus India Foundation through CSR funding to skill underserved youth and place them in sustainable jobs. To discuss a CSR partnership for youth skilling, write to the Head of Programme and Partnerships at the contact below.",
    },
];


/* Resilience / Digital Readiness / Future Skills / Career Agency */
const strengths = [
    { label: "Resilience", icon: ShieldCheck, color: "bg-brand-red", iconColor: "text-white" },
    { label: "Digital Readiness", icon: MonitorSmartphone, color: "bg-brand-blue", iconColor: "text-white" },
    { label: "Future Skills", icon: Rocket, color: "bg-brand-yellow", iconColor: "text-brand-black" },
    { label: "Career Agency", icon: Compass, color: "bg-brand-green", iconColor: "text-white" },
];

/* Programme structure: same row style as the Sectors and Eligibility rows on the Youth Skilling page */
const structureRows = [
    {
        title: "Who do we support?",
        icon: Users2,
        color: "bg-brand-red",
        iconColor: "text-white",
        points: ["Youth between 18-25", "Per annum income INR 3.5 Lacs"],
    },
    {
        title: "What do we provide in the Livelihood Programme?",
        icon: BookOpen,
        color: "bg-brand-blue",
        iconColor: "text-white",
        points: ["Life Skills", "Employability Skills", "Digital Skills", "Financial Literacy", "Entrepreneurial Skills"],
    },
    {
        title: "What is our objective?",
        icon: Target,
        color: "bg-brand-yellow",
        iconColor: "text-brand-black",
        points: ["To skill and place youth in sustainable employment across white and grey-collar sectors"],
    },
    {
        title: "Where do we place youth?",
        icon: MapPin,
        color: "bg-brand-green",
        iconColor: "text-white",
        points: ["ITeS", "BFSI", "Retail", "Logistics", "Hospitality", "E-commerce"],
    },
];

/* Job placements 2024-25 (bar length is the real percentage) */
const placements = [
    { sector: "ITeS", to: 63, decimals: 0, icon: MonitorSmartphone, color: "bg-brand-blue" },
    { sector: "BFSI", to: 14, decimals: 0, icon: BriefcaseBusiness, color: "bg-brand-green" },
    { sector: "Retail", to: 13, decimals: 0, icon: Store, color: "bg-brand-magenta" },
    { sector: "Logistics", to: 1.48, decimals: 2, icon: Truck, color: "bg-brand-red" },
    { sector: "Hospitality", to: 1.2, decimals: 1, icon: Users2, color: "bg-brand-yellow" },
];

/* Names are the ones printed on each logo image. */
const employmentPartners = [
    { name: "Aditya Birla Capital", logo: "/partners/1 (7).jpg" },
    { name: "Accenture", logo: "/partners/1 (8).jpg" },
    { name: "adidas", logo: "/partners/1 (9).jpg" },
    { name: "Arisaig Partners", logo: "/partners/1 (10).jpg" },
    { name: "Amdocs", logo: "/partners/1 (11).jpg" },
    { name: "Ansell", logo: "/partners/1 (12).jpg" },
];

const impactStats = [
    { to: 7.63, decimals: 2, suffix: " Lac", label: "youth placed in jobs from 2015 till Aug 2026", Icon: BriefcaseBusiness, color: "yellow" },
    { to: 2.33, decimals: 2, suffix: " Lac", label: "youth placed in jobs from Apr 2025 to Mar 2026", Icon: TrendingUp, color: "green" },
    { to: 60, suffix: "%", label: "of young people in the Magic Bus Livelihood programme are women", Icon: Heart, color: "red" },
    {
        to: 83,
        suffix: "%",
        label: "of young people enrolled for placement linked programme are placed in sustainable jobs with an aspirational salary for entry level job roles ₹16,219",
        Icon: Wallet,
        color: "blue",
    },
    { to: 99, suffix: "%", label: "of young people graduate from Magic Bus Livelihood programme", Icon: GraduationCap, color: "yellow" },
    { to: 65, suffix: "%", label: "of young people continue with employment for at least 3 months", Icon: CalendarCheck, color: "green" },
];

function StructureRow({ item, i }) {
    return (
        <FadeUp delay={0.07 * i}>
            <div className="group flex items-stretch overflow-hidden transition-colors duration-300 hover:bg-white focus-within:bg-white">
                <div className="hidden sm:flex shrink-0 w-14 items-center justify-center">
                    <span className="text-4xl font-black text-[#1A1A1A]/10 group-hover:text-[#1A1A1A]/20 transition-colors select-none">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                </div>
                <div className={`shrink-0 w-12 sm:w-14 sm:group-hover:w-20 flex items-center justify-center ${item.color} transition-all duration-300`}>
                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0 py-5 sm:py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:gap-12">
                    <h3 className="font-black text-[#1A1A1A] text-xl md:text-2xl md:w-80 md:shrink-0">{item.title}</h3>
                    <ul className="mt-3 md:mt-0 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                            <li
                                key={point}
                                tabIndex={0}
                                className="rounded-3xl border border-gray-300/80 bg-white px-4 py-1.5 text-base md:text-lg font-medium leading-snug text-[#1A1A1A]/85 transition-colors duration-200 hover:border-[#1A1A1A]/40 hover:text-[#1A1A1A] focus-visible:border-[#1A1A1A]/40 focus-visible:outline-none"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </FadeUp>
    );
}

export default function LivelihoodProgramme() {
    usePageMeta({
        title: "Livelihood Programme for Youth Skills and Jobs | Magic Bus",
        description:
            "Magic Bus Livelihood Programme equips underserved youth with life, employability and digital skills, with job placement in ITeS, BFSI and retail.",
    });

    return (
        <Layout>
            <FaqSchema faqs={livelihoodFaq} />
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/10.jpg"
                title="Livelihood Programme"
                subtitle="Building youth agency and empowerment through skills, jobs and sustainable livelihoods"
                ctas={[
                    { href: "#job-placement", label: "Explore Job Placement Sectors", variant: "primary", showArrow: true },
                    { href: "#contact-livelihood", label: "For CSR Support" },
                ]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Need for Livelihood Interventions</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]">Need for Livelihood Interventions for Youth in India</h2>
                        <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/85 leading-relaxed">
                            India’s large youth population represents a powerful opportunity for economic growth, yet many young
                            people—especially those from underserved communities—struggle to transition from education to meaningful
                            employment. Gaps in communication, digital readiness, problem-solving, workplace behaviour and career
                            navigation often limit their employability. There is an urgent need to equip youth with future-ready
                            skills, confidence and access to employment pathways so they can enter, adapt and progress in a rapidly
                            changing world of work.
                        </p>
                        <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/85 leading-relaxed">
                            For rural youth and women, we equip their entrepreneurial ability through EDP programmes
                            (Entrepreneurship Development Programme) so they can set up nano-enterprises or start self-employment.
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
                                        <span className="inline-flex items-center rounded-full bg-brand-yellow px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-black">
                                            Livelihood Programme
                                        </span>
                                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-[#F7F7F5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/70">
                                            <BriefcaseBusiness className="w-3.5 h-3.5 text-brand-red" />
                                            Employability + Entrepreneurship
                                        </span>
                                    </div>
                                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-[#15161A] leading-tight">Magic Bus Livelihood Programme</h2>
                                    <h3 className="mt-4 text-base md:text-lg font-normal leading-relaxed text-[#1A1A1A]/80">
                                        Magic Bus India Foundation’s Livelihood Programmes equip underserved youth and women with 21st
                                        century life &amp; employability skills, along with digital and entrepreneurial skills to access
                                        sustainable livelihood opportunities. This enables them to make informed career decisions, secure
                                        sustainable jobs, support their families, and contribute to the economy. For rural youth and women,
                                        we help them to set up their nano-enterprises or self-employment at their own villages through EDP
                                        (Entrepreneurship Development Programme) and enhancing their business professionalism.
                                    </h3>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.06} className="lg:col-span-5 lg:mt-14">
                                <div className="relative rounded-[28px] border border-[#184987] bg-gradient-to-br from-[#144A8B] to-[#1F5BA2] p-7 text-white shadow-lg">
                                    <div className="absolute -left-3 top-8 rounded-full bg-brand-yellow px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-black">
                                        World of Work
                                    </div>
                                    <p className="mt-8 text-base md:text-lg leading-relaxed text-white/95">
                                        The Livelihood Programme addresses the challenges of skill mismatch, limited access to job opportunities,
                                        and systemic barriers, helping youth increase their household incomes and break out of the cycle of poverty.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.1} className="lg:col-span-12 lg:-mt-2">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    {strengths.map((item) => (
                                        <_MOTION.div
                                            key={item.label}
                                            whileHover={{ y: -6 }}
                                            transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                            className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                                        >
                                            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                                                <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                                            </span>
                                            <p className="text-xl font-extrabold leading-snug text-[#1A1A1A] md:text-2xl">{item.label}</p>
                                            <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 ${item.color} transition-transform duration-500 group-hover:scale-x-100`} />
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
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]">Skilling youth for the world of work: skill development and employability training</h2>
                        <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/85 leading-relaxed">
                            The Livelihood Programme builds confidence, resilience, digital readiness, and agency of underserved youth.
                            It addresses the challenges of skill mismatch, limited access to job opportunities, and systemic barriers,
                            helping youth increase their household incomes and break out of the cycle of poverty.
                        </p>
                        <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/85 leading-relaxed">
                            Magic Bus also supports entrepreneurial aspirations of underserved youth by providing mentorship to launch
                            and run stable enterprises. Through mentorship, guidance and access to opportunities, young entrepreneurs
                            running small businesses are empowered to achieve financial independence and support their families.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="mb-12">
                        <SectionTag>Programme Structure</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]">Structure, Components, Eligibility for the Livelihood Programme</h2>
                    </FadeUp>
                    <div className="divide-y divide-gray-200 border-t border-gray-200">
                        {structureRows.map((item, i) => (
                            <StructureRow key={item.title} item={item} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="job-placement" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Job Placement and Sectors</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]">Job Placement Support for Sectors: ITeS, BFSI, Retail and More</h2>
                        <p className="mt-5 text-lg md:text-xl text-[#1A1A1A]/85 leading-relaxed">
                            Through the Livelihood Programme, Magic Bus provides job placement support for building careers across
                            sectors, such as ITeS, BFSI, Retail, Logistics, Hospitality, and E-commerce, thereby cultivating pathways
                            to sustainable careers.
                        </p>
                    </FadeUp>

                    <h3 className="mt-12 mb-6 text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">Job Placements for 2024-25</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {placements.map((item, i) => (
                            <FadeUp key={item.sector} delay={0.06 * i} className="h-full">
                                <_MOTION.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                                >
                                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                                        <item.icon className={`h-7 w-7 ${item.color === "bg-brand-yellow" ? "text-brand-black" : "text-white"}`} />
                                    </span>
                                    <p className="mt-5 text-xl md:text-2xl font-extrabold text-[#1A1A1A]">{item.sector}</p>
                                    <p className="mt-1 text-5xl font-black leading-none text-[#1A1A1A]">
                                        <CountUp to={item.to} decimals={item.decimals} suffix="%" />
                                    </p>
                                    <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-gray-100">
                                        <_MOTION.div
                                            className={`h-full rounded-full ${item.color}`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.to}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, ease: EASE, delay: 0.1 * i }}
                                        />
                                    </div>
                                </_MOTION.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center mb-12">
                        <SectionTag>Strategic Partnerships</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]">Our Employment Partners for Youth Jobs</h2>
                    </FadeUp>
                    {/* Same big, slowly moving logo row as the Partner pages */}
                    <LogoMarquee partners={employmentPartners} rows={1} />
                </div>
            </section>

            <StatsBand eyebrow="Impact and Success Stories" title="Impact of our Livelihood Programme" stats={impactStats} cols={3} compact />

            <FAQSection
                items={livelihoodFaq}
                title="Frequently Asked Questions"
                subtitle="Quick answers about SDG alignment, programme coverage, eligibility and CSR support."
            />

            <section id="contact-livelihood" className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-6 lg:grid-cols-2">
                    <FadeUp className="h-full">
                        <_MOTION.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#1A1A1A] p-8 shadow-xl md:p-10"
                        >
                            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
                            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                                <Handshake className="h-8 w-8 text-brand-black" />
                            </span>
                            <p className="relative mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">For CSR Support</p>
                            <h2 className="relative mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                For CSR Support for Youth Livelihood, Contact Us
                            </h2>
                            <div className="relative mt-6 border-l-4 border-brand-yellow pl-4">
                                <p className="text-2xl font-extrabold text-white">Leena Rao</p>
                                <p className="mt-1 text-lg text-white/85">Head – Programme and Partnerships</p>
                            </div>
                            <a
                                href="mailto:leena.rao@magicbusindia.org"
                                className="relative mt-8 inline-flex w-fit max-w-full items-center gap-3 rounded-full bg-brand-yellow px-6 py-3 text-base font-bold text-brand-black transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/40 md:text-lg"
                            >
                                <Mail className="h-5 w-5 shrink-0" />
                                <span className="break-all">leena.rao@magicbusindia.org</span>
                                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                            </a>
                        </_MOTION.div>
                    </FadeUp>

                    <FadeUp delay={0.08} className="h-full">
                        <_MOTION.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl md:p-10"
                        >
                            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl" />
                            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red shadow-lg">
                                <Mail className="h-8 w-8 text-white" />
                            </span>
                            <p className="relative mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Get in Touch</p>
                            <h2 className="relative mt-3 text-3xl font-extrabold leading-tight text-[#1A1A1A] md:text-4xl">
                                Get in Touch About the Livelihood Programme
                            </h2>
                            <div className="relative mt-6 border-l-4 border-brand-red pl-4">
                                <p className="text-lg text-[#1A1A1A]/85 md:text-xl">For other enquiries related to this programme.</p>
                            </div>
                            <a
                                href="mailto:info@magicbusindia.org"
                                className="relative mt-8 inline-flex w-fit max-w-full items-center gap-3 rounded-full bg-brand-red px-6 py-3 text-base font-bold text-white transition hover:bg-[#c41b20] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30 md:text-lg"
                            >
                                <Mail className="h-5 w-5 shrink-0" />
                                <span className="break-all">info@magicbusindia.org</span>
                                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                            </a>
                        </_MOTION.div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
}
