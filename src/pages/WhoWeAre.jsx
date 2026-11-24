// src/pages/WhoWeAre.jsx  (new design: "Impact Vanguard")
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import CountOnView from "../components/ui/CountOnView";
import {
    ArrowRight,
    BookOpen,
    FileText,
    GraduationCap,
    Briefcase,
    Users,
    Quote,
    Flag,
    History,
    Clapperboard,
    Eye,
    Globe2,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { whoWeAreFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* Colours from the design: crimson #C41A1F, sunshine #F9A825, forest #1B3B36, ink #1A1A1A, cream #FBFBFA */
const CRIMSON = "#C41A1F";
const SUN = "#F9A825";
const FOREST = "#1B3B36";
const INK = "#1A1A1A";
const BORDER = "#E5E5DF";

const EASE = [0.16, 1, 0.3, 1];

const STYLES = `
.wa-page{font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:${INK}}
.wa-display{font-family:"Epilogue","Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:-0.02em}
`;

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

/* Small uppercase section marker (label-caps in the design) */
function Tag({ icon: Icon, children, tone = "red" }) {
    const tones = {
        red: "bg-[#FFDAD6] text-[#93000D]",
        sun: "bg-[#FFF8E1] text-[#855700]",
        forest: "bg-[#E3EFEC] text-[#1B3B36]",
    };
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.06em] ${tones[tone]}`}>
            {Icon && <Icon className="h-4 w-4" />}
            {children}
        </span>
    );
}

/* ======================= HERO ======================= */
/* The same banner as the other pages: photo, gradient title, yellow tag, Donate and report buttons. */
function Hero() {
    return (
        <HeroBanner
            badgeText="Magic Bus India Foundation"
            image="/ngo-images/who-hero.jpg" imagePosition="50% 15%"
            title="Who We Are"
            subtitle="An NGO Trusted by Millions"
            description="Helping young people from underserved communities complete their education, build life skills, and secure sustainable livelihoods — one life at a time, since 1999."
            ctas={[
                { to: "/donate", label: "Donate Now", variant: "primary", showArrow: true },
                { to: "/annual-reports", label: "Read Annual Report", icon: FileText },
            ]}
        />
    );
}

/* ======================= FOUNDATION ======================= */
const DIFFERENTIATORS = [
    {
        Icon: GraduationCap,
        tint: "bg-[#C41A1F]/10 text-[#C41A1F]",
        title: "Life skills education integrated with academic outcomes",
        text: "The organisation supports adolescents to complete secondary education.",
    },
    {
        Icon: Briefcase,
        tint: "bg-[#835400]/10 text-[#835400]",
        title: "Employability skilling for sustainable livelihoods",
        text: "The organisation equips youth to build sustainable livelihoods.",
    },
    {
        Icon: Users,
        tint: "bg-[#32524C]/10 text-[#32524C]",
        title: "Ecosystem approach — families, communities, employers",
        text: "We engage with families, communities, schools, employers, and local institutions to scale sustainable transformation.",
    },
];

const STATS = [
    { num: "1999", label: "Year Founded", note: "Founded in Mumbai", bg: `linear-gradient(135deg, ${CRIMSON} 0%, #7F0F13 100%)`, fg: "#FFFFFF", sub: "rgba(255,255,255,0.85)" },
    { num: "1M+", label: "Lives Impacted", bg: `linear-gradient(135deg, ${FOREST} 0%, #0E221E 100%)`, fg: "#FFFFFF", sub: "rgba(255,255,255,0.85)" },
    { num: "14+", label: "States Across India", bg: `linear-gradient(135deg, ${SUN} 0%, #E08F00 100%)`, fg: INK, sub: "rgba(26,26,26,0.85)" },
    { num: "25+", label: "Years of Commitment", bg: `linear-gradient(135deg, #3A3A3A 0%, ${INK} 100%)`, fg: "#FFFFFF", sub: "rgba(255,255,255,0.85)" },
];

function Foundation() {
    return (
        <section className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
                <FadeUp className="mb-10 max-w-3xl md:mb-14">
                    <Tag icon={Flag}>Our Foundation</Tag>
                    <h2 className="wa-display mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">
                        Helping Young People Move Out of Poverty
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[#4A4A48] sm:text-xl sm:leading-9">
                        Magic Bus India Foundation is one of India's largest NGOs working in the areas of life skills education and employability skilling for young people living in underserved communities.
                        The organisation supports adolescents to complete secondary education and equips youth to build sustainable livelihoods.
                    </p>
                </FadeUp>

                <div className="grid gap-6 lg:grid-cols-12">
                    {/* Left: differentiators + photo banner */}
                    <div className="flex flex-col gap-4 lg:col-span-7">
                        {DIFFERENTIATORS.map(({ Icon, tint, title, text }, i) => (
                            <FadeUp key={title} delay={i * 0.07}>
                                <div className="flex items-start gap-4 rounded-lg border border-[#E5E5DF] bg-[#F6F3F2] p-5 transition hover:bg-[#F0EDED] sm:p-6">
                                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${tint}`}>
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <h3 className="wa-display text-lg font-bold leading-snug sm:text-[22px] sm:leading-[30px]">{title}</h3>
                                        <p className="mt-1.5 text-base leading-relaxed text-[#4A4A48]">{text}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}

                        <FadeUp delay={0.2}>
                            <div className="relative h-48 overflow-hidden rounded-lg border border-[#E5E5DF] sm:h-56">
                                <img loading="lazy" decoding="async" src="/ngo-images/7.jpg" alt="The Magic Bus team together" className="h-full w-full object-cover object-center" />
                                <div className="absolute inset-0 flex items-center justify-between bg-[#313030]/45 p-5 sm:p-6">
                                    <span className="wa-display text-xl font-bold text-white sm:text-2xl">Childhood to Livelihood Pathway</span>
                                    <TrendingUp className="h-7 w-7 shrink-0 text-[#F9A825]" />
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: metrics */}
                    <div className="flex flex-col gap-4 lg:col-span-5">
                        <div className="grid grid-cols-2 gap-4">
                            {STATS.map((s, i) => (
                                <FadeUp key={s.label} delay={i * 0.07} className="h-full">
                                    <div
                                        className="relative h-full overflow-hidden rounded-lg p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:p-6"
                                        style={{ background: s.bg, color: s.fg }}
                                    >
                                        <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" />
                                        <div className="wa-display relative text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                                            <CountOnView value={s.num} />
                                        </div>
                                        <div className="relative mt-3 h-1 w-10 rounded-full" style={{ background: s.fg, opacity: 0.55 }} aria-hidden="true" />
                                        <div className="relative mt-3 text-sm font-bold uppercase tracking-[0.06em]">{s.label}</div>
                                        {s.note && (
                                            <p className="relative mt-1 text-sm" style={{ color: s.sub }}>
                                                {s.note}
                                            </p>
                                        )}
                                    </div>
                                </FadeUp>
                            ))}
                        </div>

                        <FadeUp delay={0.3} className="flex-1">
                            <div className="flex h-full items-start gap-4 rounded-lg p-5 text-white sm:p-6" style={{ background: FOREST }}>
                                <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[#F9A825]" />
                                <div>
                                    <p className="wa-display text-lg font-bold sm:text-xl">Childhood to Livelihood Model</p>
                                    <p className="mt-1 text-base leading-relaxed text-white/80">
                                        A seamless pathway for young people — combining socio-emotional learning, foundational education and sectoral employability.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ======================= HISTORY ======================= */
function HistorySection() {
    return (
        <section className="bg-[#FBFBFA] py-12 md:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
                <FadeUp className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
                    <div>
                        <Tag icon={History} tone="sun">Our History</Tag>
                        <h2 className="wa-display mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">Over 26 Years of Magic</h2>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E5DF] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-[#4A4A48]">
                        <span className="h-2 w-2 rounded-full bg-[#C41A1F]" />
                        Origin: Bombay Gymkhana, 1999
                    </span>
                </FadeUp>

                <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                    {/* Story */}
                    <div className="flex flex-col gap-5 lg:col-span-7">
                        <FadeUp>
                            <div className="rounded-lg border border-[#E5E5DF] bg-white p-6 sm:p-8">
                                <span className="text-xs font-bold uppercase tracking-[0.06em]" style={{ color: CRIMSON }}>
                                    How it began
                                </span>
                                <h3 className="wa-display mt-2 text-2xl font-bold leading-snug sm:text-[28px] sm:leading-9">From a Saturday Rugby Match to a National Movement</h3>
                                <div className="mt-5 space-y-5 text-base leading-8 text-[#3A3A38] sm:text-lg sm:leading-9">
                                    <p>
                                        In 1999, while playing rugby at Bombay Gymkhana, Matthew Spacie noticed a group of boys watching from outside and invited them to join. What began as a simple game soon became regular
                                        coaching sessions. As a team, the boys grew in confidence and ambition. Many returned to school, pursued vocational courses, and began mentoring others in their community.
                                    </p>
                                    <p>
                                        Seeing a larger gap, Matthew engaged these boys to bring more children into weekend activity camps. One such trip became the start of the "Magic Bus", offering adolescents a chance to
                                        experience freedom, teamwork, and life skills education. Inspired by its impact, he left his corporate role to build the organisation full-time. What began with rugby soon expanded
                                        into multiple sports, reaching many more young people.
                                    </p>
                                    <p>
                                        With over 3300 employees to date, the Magic Bus family continues to grow in strength and number. With a presence spread across Nepal and Bangladesh, the organisation has grown
                                        tremendously. However, our essence remains the same as it did on that first Saturday in 1999.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <div className="flex items-center justify-between gap-4 rounded-lg p-5 text-white sm:p-6" style={{ background: FOREST }}>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.06em] text-[#F9A825]">Where we work</span>
                                    <p className="wa-display mt-1 text-xl font-bold sm:text-2xl">India, Nepal &amp; Bangladesh</p>
                                </div>
                                <Globe2 className="h-10 w-10 shrink-0 text-white/40" />
                            </div>
                        </FadeUp>
                    </div>

                    {/* Archive photos + founder quote */}
                    <div className="flex flex-col gap-5 lg:col-span-5">
                        <FadeUp delay={0.05}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg border border-[#E5E5DF] bg-[#EFEDE6]">
                                    <img loading="lazy" decoding="async" src="/history_2002.png" alt="An early Magic Bus session" className="h-full w-full object-cover object-center" />
                                    <span className="absolute bottom-3 left-3 rounded bg-[#1A1A1A]/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-white">From the archive</span>
                                </div>
                                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[#E5E5DF] bg-[#EFEDE6]">
                                    <img loading="lazy" decoding="async" src="/history1-1.jpg" alt="Early coaching sessions on the field" className="h-full w-full object-cover" />
                                </div>
                                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[#E5E5DF] bg-[#EFEDE6]">
                                    <img loading="lazy" decoding="async" src="/history2-1.jpg" alt="Matthew Spacie with children" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            {/* Highlighted founder quote */}
                            <figure className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#C41A1F] via-[#B01519] to-[#8F1015] p-6 text-white shadow-[0_12px_32px_-8px_rgba(196,26,31,0.45)] sm:p-8">
                                <span className="absolute inset-y-0 left-0 w-2 bg-[#F9A825]" />
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                                <Quote className="relative h-10 w-10 text-[#F9A825]" />
                                <blockquote className="wa-display relative mt-3 text-xl font-semibold leading-9 sm:text-2xl sm:leading-[38px]">
                                    "A couple of things really struck me early on. Firstly, there were tremendous amounts of infrastructure and services focused on education, but{" "}
                                    <mark className="rounded bg-[#F9A825] px-1.5 text-[#1A1A1A]">schools sat empty</mark>. Secondly, there was a great deficit of organisations focusing on{" "}
                                    <mark className="rounded bg-[#F9A825] px-1.5 text-[#1A1A1A]">sustainable livelihoods</mark>."
                                </blockquote>
                                <figcaption className="relative mt-6 flex items-center gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold" style={{ color: CRIMSON }}>
                                        MS
                                    </span>
                                    <span>
                                        <span className="block text-lg font-bold">Matthew Spacie</span>
                                        <span className="block text-sm text-white/80">Founder, Magic Bus India Foundation</span>
                                    </span>
                                </figcaption>
                            </figure>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ======================= MILESTONES / VIDEO ======================= */
function Milestones() {
    return (
        <section className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
                {/* the text on the left and the video on the right (stacked on phones) */}
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <FadeUp>
                    <Tag icon={Clapperboard} tone="forest">Our Milestones</Tag>
                    <h2 className="wa-display mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">Over Two Decades of Commitment</h2>
                    <p className="mt-5 text-lg leading-8 text-[#4A4A48] sm:text-xl sm:leading-9">
                        Spanning more than two decades, our journey to shape the future of young India has been one defined by numerous milestones and achievements. What sets us apart is the spirit of hope,
                        resilience, and determination that we have fostered. Magic Bus is built on the belief that every young person deserves a chance to live a fulfilling life, and we are proud of all that we
                        have accomplished together. These are key moments that serve as a testament to our commitment to creating a brighter future for the next generation.
                    </p>
                </FadeUp>

                <FadeUp delay={0.08}>
                    <div className="overflow-hidden rounded-lg bg-[#1A1A1A] shadow-[0_8px_24px_-4px_rgba(26,26,26,0.12)]">
                        <div className="aspect-video bg-black">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube.com/embed/NRLpqKHihFk"
                                title="Magic Bus Milestones"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                            <p className="text-base text-white/80 sm:text-lg">Watch key moments from the Magic Bus journey.</p>
                            <Link to="/about-us" className="group inline-flex items-center gap-2 text-base font-bold text-[#F9A825]">
                                Explore the full timeline
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ======================= WORK IN ACTION ======================= */
const WORK = [
    {
        img: "/ngo-images/who-life-skills.jpg",
        alt: "Students presenting their project at a Magic Bus event",
        chip: "Life Skills",
        title: "Adolescent Life Skills",
        text: "Core life skills that help adolescents become more resilient and show higher self-efficacy.",
        to: "/adolescent-programme",
    },
    {
        img: "/ngo-images/who-digital.jpg",
        alt: "Two young people from the Magic Bus programme",
        chip: "Digital Skilling",
        title: "Digital & Spoken-English Skills",
        text: "Digital literacy and spoken English, alongside financial literacy and career awareness, to help young people get a job.",
        to: "/digital-skilling",
    },
    {
        img: "/ngo-images/our-approach-livelihood.jpg",
        alt: "Young people in a Magic Bus livelihood training session",
        chip: "Employability",
        title: "Livelihood Placement",
        text: "Sector-specific orientation, placement and post-placement support to help young people sustain their jobs.",
        to: "/livelihood-programme",
    },
    {
        img: "/ngo-images/girl.jpeg",
        alt: "Smiling girls holding their school books",
        chip: "Girls' Education",
        title: "Girls' Education",
        text: "Helping girls stay in school and complete their education, so they keep their voice and their chances of financial independence.",
        to: "/gender-journey-report",
    },
];

function WorkInAction() {
    return (
        <section className="bg-[#FBFBFA] py-12 md:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
                <FadeUp className="mb-10 md:mb-14">
                    <Tag icon={Eye}>Programmes in focus</Tag>
                    <h2 className="wa-display mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">Our Work in Action</h2>
                </FadeUp>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {WORK.map((w, i) => (
                        <FadeUp key={w.title} delay={i * 0.07} className="h-full">
                            <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#E5E5DF] bg-white transition hover:-translate-y-1 hover:shadow-[0_8px_24px_-4px_rgba(26,26,26,0.1)]">
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFEDE6]">
                                    <img src={w.img} alt={w.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <span className="absolute left-3 top-3 rounded-full bg-[#F9A825] px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A] shadow">{w.chip}</span>
                                </div>
                                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                                    <div>
                                        <h3 className="wa-display text-xl font-bold leading-snug">{w.title}</h3>
                                        <p className="mt-2 text-base leading-relaxed text-[#4A4A48]">{w.text}</p>
                                    </div>
                                    <Link to={w.to} className="inline-flex items-center gap-2 text-base font-bold transition-all hover:gap-3" style={{ color: CRIMSON }}>
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ======================= ANNUAL REPORT BAND ======================= */
function AnnualReportCTA() {
    return (
        <section className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
                <FadeUp>
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#C41A1F] via-[#B01519] to-[#8F1015] p-8 text-center text-white sm:p-12 md:p-16">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5" />
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#F9A825] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#1A1A1A]">
                                <BookOpen className="h-4 w-4" />
                                Learn More About Us
                            </span>
                            <h2 className="wa-display mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px] lg:leading-[52px]">Discover the Impact We've Created Together</h2>
                            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                                Our Annual Report details the journeys of thousands of young people whose lives have been transformed through education, life skills, and livelihoods. Read how your support is making a
                                difference.
                            </p>
                            <div className="cta-pair mx-auto mt-8">
                                <Link
                                    to="/annual-reports"
                                    className="group inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold shadow-lg transition hover:bg-[#F4F4F0] sm:text-lg"
                                    style={{ color: CRIMSON }}
                                >
                                    <BookOpen className="h-5 w-5" />
                                    Read Our Annual Report
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/partner"
                                    className="inline-flex items-center gap-2 rounded border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20 sm:text-lg"
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ======================= PAGE ======================= */
export default function WhoWeAre() {
    return (
        <Layout>
            {/* Fonts for this page's design (Epilogue headings, Plus Jakarta Sans text) */}
            <link
                rel="stylesheet"
                precedence="default"
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Epilogue:wght@600;700;800;900&display=swap"
            />
            <style>{STYLES}</style>
            <FaqSchema faqs={whoWeAreFAQ} />
            <Hero />
            <div className="wa-page bg-[#FBFBFA] antialiased">
                <Foundation />
                <HistorySection />
                <Milestones />
                <WorkInAction />
                <FAQSection items={whoWeAreFAQ} title="Frequently Asked Questions" subtitle="Learn more about who we are, our mission, and how we work." />
                <AnnualReportCTA />
            </div>
        </Layout>
    );
}
