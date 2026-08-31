import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    Download,
    HeartHandshake,
    Leaf,
    Mail,
    Phone,
    ShieldCheck,
    Sparkles,
    Trophy,
    TreePine,
    HeartPulse,
    Gift,
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

const evpFaq = [
    {
        question: "Does Magic Bus offer virtual or hybrid options for volunteering?",
        category: "Format",
        answer:
            "Employee volunteering programmes with Magic Bus are of three types: indoor, outdoor, and virtual. Corporates can opt for the option best suited to their team capacity.",
    },
    {
        question: "Does Magic Bus provide certificates or recognition for employee volunteers?",
        category: "Recognition",
        answer:
            "Based on the requirement, the NGO provides a certificate of participation to each employee volunteering for community service programmes, recognising their commitment to serving society at large.",
    },
    {
        question: "Are Magic Bus volunteering sessions suitable for leadership teams or senior executives?",
        category: "Participation",
        answer:
            "Yes. Volunteering programmes of Magic Bus are suitable for employees across the company hierarchy, ranging from senior leadership to junior and mid-level teams. Employees are encouraged to participate in large numbers for empowering underserved communities.",
    },
    {
        question: "Can Magic Bus customise volunteering activities based on our company’s CSR or ESG priorities?",
        category: "Customisation",
        answer:
            "Yes. Magic Bus facilitates corporate volunteering programmes in India based on a company’s CSR focus, ESG goals, employee skill sets, location, and time availability. Activities can be customised across themes such as education, gender, and youth development.",
    },
    {
        question: "How does Magic Bus ensure the safety and effectiveness of employee volunteering activities?",
        category: "Safety",
        answer:
            "All volunteering activities follow safety protocols. Structured formats and on-ground coordination ensure that employee volunteers have a safe and well-managed experience while delivering positive outcomes for communities.",
    },
];

const VOL_CATEGORIES = [
    {
        key: "youth",
        label: "Youth-Oriented Plans",
        Icon: Sparkles,
        accent: "#103f7b",
        accentLight: "#EBF0FA",
        tag: "Education & Skilling",
        description:
            "Empower the next generation through mentorship, digital skills, and career readiness workshops co-created with your employees.",
        activities: [
            "Career mentorship along with guidance",
            "CV making and workshops hosted on LinkedIn",
            "Basic AI training and exposure",
            "Digital awareness and financial literacy training",
        ],
    },
    {
        key: "sports",
        label: "Sports-Based Activities",
        Icon: Trophy,
        accent: "#c9212b",
        accentLight: "#FDEAEA",
        tag: "Life Skills Through Play",
        description:
            "Use the universal language of sport to build camaraderie, resilience, and life skills among adolescents alongside your teams.",
        activities: [
            "Sports matches with students",
            "Life skills learning through sport and play",
        ],
    },
    {
        key: "sustainability",
        label: "Sustainability Initiatives",
        Icon: TreePine,
        accent: "#1a7a4a",
        accentLight: "#E8F5EE",
        tag: "Environment & ESG",
        description:
            "Contribute to a greener future through hands-on community-led sustainability drives aligned with your ESG commitments.",
        activities: [
            "Tree plantation drives",
            "Seed ball making",
            "Cleanliness drives",
        ],
    },
    {
        key: "health",
        label: "Health & Wellbeing",
        Icon: HeartPulse,
        accent: "#9a3abf",
        accentLight: "#F5EAF9",
        tag: "Community Health",
        description:
            "Support underserved communities through health awareness, education, and life-saving health camps.",
        activities: [
            "Hygiene awareness sessions",
            "Menstrual health education",
            "Blood donation and health check-up camps",
        ],
    },
    {
        key: "community",
        label: "Community & Seasonal",
        Icon: Gift,
        accent: "#b46b00",
        accentLight: "#FDF3E3",
        tag: "Festive & Relief Drives",
        description:
            "Mark meaningful occasions by giving back — from school kits and winter relief to festive celebrations with communities.",
        activities: [
            "Back-to-school kit drives",
            "Winter relief initiatives",
            "Community meals and festive celebrations",
        ],
    },
];

function VolunteeringOpportunitiesSection() {
    const [activeKey, setActiveKey] = useState(VOL_CATEGORIES[0].key);
    const active = VOL_CATEGORIES.find((c) => c.key === activeKey);

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <FadeUp className="max-w-3xl mb-10">
                <SectionTag>Volunteering Opportunities</SectionTag>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                    Volunteering Opportunities with Magic Bus
                </h2>
                <p className="mt-4 text-[#1A1A1A]/70 leading-relaxed">
                    We organise structured{" "}
                    <span className="font-semibold">employee volunteering programme</span>{" "}
                    journeys as single-day engagements, recurring programmes, and yearly
                    corporate volunteering calendars.
                </p>
            </FadeUp>

            <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
                {/* Sticky Sidebar */}
                <FadeUp delay={0.06} className="h-fit lg:sticky lg:top-24">
                    <div className="rounded-3xl border border-black/5 bg-white p-4 shadow-sm space-y-2">
                        {VOL_CATEGORIES.map((cat) => {
                            const isActive = cat.key === activeKey;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveKey(cat.key)}
                                    style={
                                        isActive
                                            ? { backgroundColor: cat.accent, borderColor: "transparent" }
                                            : {}
                                    }
                                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                                        isActive
                                            ? "text-white shadow-lg"
                                            : "border-black/8 bg-[#F7F7F5] text-[#1A1A1A] hover:border-black/15 hover:bg-white"
                                    }`}
                                >
                                    <span
                                        style={
                                            isActive
                                                ? { backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }
                                                : { backgroundColor: cat.accentLight, color: cat.accent }
                                        }
                                        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors"
                                    >
                                        <cat.Icon className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm font-semibold leading-snug">{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </FadeUp>

                {/* Animated Content Panel */}
                <FadeUp delay={0.1}>
                    <AnimatePresence mode="wait">
                        <_MOTION.div
                            key={active.key}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-3xl border border-black/5 bg-white shadow-sm overflow-hidden"
                        >
                            {/* Coloured top accent bar */}
                            <div
                                style={{ backgroundColor: active.accent }}
                                className="h-1.5 w-full"
                            />

                            <div className="p-6 sm:p-8">
                                {/* Category badge + title */}
                                <div className="flex flex-wrap items-center gap-3 mb-5">
                                    <span
                                        style={{
                                            backgroundColor: active.accentLight,
                                            color: active.accent,
                                        }}
                                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
                                    >
                                        <active.Icon className="w-3 h-3" />
                                        {active.tag}
                                    </span>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span
                                        style={{ backgroundColor: active.accentLight, color: active.accent }}
                                        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                                    >
                                        <active.Icon className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-black text-[#1A1A1A] leading-tight">
                                            {active.label}
                                        </h3>
                                        <p className="mt-2 text-[#1A1A1A]/70 leading-relaxed">
                                            {active.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Activities */}
                                <div className="mt-7">
                                    <p
                                        style={{ color: active.accent }}
                                        className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
                                    >
                                        Activities Included
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {active.activities.map((activity, idx) => (
                                            <_MOTION.div
                                                key={activity}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.22, delay: idx * 0.06 }}
                                                whileHover={{ x: 4 }}
                                                style={{ borderLeftColor: active.accent }}
                                                className="flex items-start gap-3 rounded-xl border border-black/5 bg-[#F7F7F5] p-4 border-l-2"
                                            >
                                                <span
                                                    style={{ color: active.accent }}
                                                    className="mt-0.5 shrink-0"
                                                >
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </span>
                                                <span className="text-sm font-medium text-[#1A1A1A]/85 leading-snug">
                                                    {activity}
                                                </span>
                                            </_MOTION.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Customisation note */}
                                <div
                                    style={{ backgroundColor: active.accentLight }}
                                    className="mt-7 flex items-start gap-3 rounded-2xl p-4"
                                >
                                    <CalendarDays
                                        style={{ color: active.accent }}
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                    />
                                    <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                                        All activities are fully{" "}
                                        <span className="font-semibold text-[#1A1A1A]">customisable</span>{" "}
                                        based on employee skills, time, location, and your company's CSR &
                                        ESG priorities.
                                    </p>
                                </div>
                            </div>
                        </_MOTION.div>
                    </AnimatePresence>
                </FadeUp>
            </div>
        </div>
    );
}

export default function EmployeeVolunteeringProgramme() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/8.jpg"
                title="Corporate Volunteering: Creating Purposeful Community Impact"
                subtitle="Collaborate with Magic Bus India Foundation to build meaningful employee volunteering experiences that improve engagement alongside supporting adolescents and youth from underserved groups all over India."
                description="A structured employee volunteering programme designed to align CSR and ESG priorities with measurable, on-ground community impact."
                ctas={[
                    { href: "#volunteering-opportunities", label: "Explore corporate volunteering opportunities at Magic Bus", variant: "primary", showArrow: true },
                    { href: "#contact-evp", label: "For Programme Enquiries" },
                ]}
            />

            <section id="contact-evp" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>Corporate Volunteering: Need for Today</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Corporate Volunteering: Need for Today</h2>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Employee volunteering might make employees feel good personally. However, when it comes to organisations,
                            <span className="font-semibold"> corporate volunteering programmes in india </span>
                            can help organisations strengthen leadership traits, culture, and employer brand, while building measurable social value in reality.
                        </p>
                    </FadeUp>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Greater employee morale and alignment with purpose",
                            "Better collaboration across functions",
                            "Improved employee retention and leadership traits",
                            "Elevated brand trust with various stakeholders",
                        ].map((item, i) => (
                            <FadeUp key={item} delay={0.06 * i}>
                                <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 h-full">
                                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                                    <p className="mt-3 text-sm text-[#1A1A1A]/80">{item}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-[#1A1A1A]/70">The main differentiator is seen in how these volunteering programmes are thoughtfully designed and ultimately delivered.</p>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 items-stretch">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-white p-7 h-full">
                            <SectionTag>Employee Volunteering with Magic Bus</SectionTag>
                            <p className="text-[#1A1A1A]/75 leading-relaxed">
                                At Magic Bus, <span className="font-semibold">corporate volunteering programmes in india</span> move beyond one-off activities.
                                Our Employee Volunteering Programme (EVP) enables companies to convert intent into action through structured, outcome-driven experiences.
                            </p>
                            <p className="mt-4 text-[#1A1A1A]/75">We co-create volunteering engagements aligned with:</p>
                            <div className="mt-4 space-y-3">
                                {["Your CSR objectives", "ESG priorities", "Employee skills, interests, and availability"].map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                        <p className="text-[#1A1A1A]/80">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-sm text-[#1A1A1A]/70">
                                Every activity responds to real, on-ground needs of adolescents and youth ensuring impact is meaningful, ethical, and sustainable.
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.06}>
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#103f7b] to-[#1a5ca6] p-7 text-white h-full">
                            <SectionTag>Why Companies Choose Magic Bus</SectionTag>
                            <p className="text-white/85 leading-relaxed">
                                With over 27 years of experience working with young people at scale, Magic Bus brings credibility, safety, and structure to
                                <span className="font-semibold"> corporate volunteering programmes in india</span>.
                            </p>
                            <div className="mt-5 grid sm:grid-cols-2 gap-3">
                                {[
                                    { title: "Need-driven", desc: "Designed around community priorities, not optics", icon: HeartHandshake },
                                    { title: "Structured", desc: "Clear objectives, roles, and outcomes", icon: BriefcaseBusiness },
                                    { title: "Safe & inclusive", desc: "Delivered by trained on-ground teams", icon: ShieldCheck },
                                    { title: "Impact-focused", desc: "Aligned with CSR and ESG goals", icon: Users2 },
                                ].map((item) => (
                                    <div key={item.title} className="rounded-xl bg-white/10 p-4">
                                        <item.icon className="w-4 h-4 text-brand-yellow" />
                                        <p className="mt-2 text-sm font-bold">{item.title}</p>
                                        <p className="mt-1 text-xs text-white/75">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-sm text-white/80">
                                As one of the well-known <span className="font-semibold">corporate volunteering ngos in india</span>, Magic Bus ensures volunteering creates value for both employees and communities.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-4xl">
                        <SectionTag>SDG Alignment</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                            Magic Bus Alignment with the Sustainable Development Goals (SDGs)
                        </h2>
                        <p className="mt-4 text-[#1A1A1A]/75">
                            Magic Bus volunteering programmes contribute directly to SDG 4 (Quality Education), SDG 5 (Gender Equality),
                            SDG 8 (Decent Work & Economic Growth), and SDG 10 (Reduced Inequalities).
                        </p>
                    </FadeUp>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {["SDG 4: Quality Education", "SDG 5: Gender Equality", "SDG 8: Decent Work & Economic Growth", "SDG 10: Reduced Inequalities"].map((sdg, i) => (
                            <FadeUp key={sdg} delay={0.05 * i}>
                                <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5">
                                    <Leaf className="w-5 h-5 text-brand-green" />
                                    <p className="mt-3 font-semibold text-[#1A1A1A] text-sm">{sdg}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-[#1A1A1A]/70">
                        These alignments help organisations strengthen ESG reporting and stakeholder communication through
                        <span className="font-semibold"> corporate volunteering programmes in india</span>.
                    </p>
                </div>
            </section>

            <section id="volunteering-opportunities" className="py-20 bg-[#F7F7F5]">
                <VolunteeringOpportunitiesSection />
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-[#F7F7F5] p-7">
                            <SectionTag>Campaign Days</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Days and Campaign-Based Engagements</h2>
                            <p className="mt-4 text-[#1A1A1A]/75">
                                As a reputed <span className="font-semibold">employee volunteering ngo</span>, we curate activities around observance days:
                            </p>
                            <div className="mt-5 space-y-2 text-[#1A1A1A]/80">
                                <p>Literacy Day</p>
                                <p>World Environment Day</p>
                                <p>International Women&apos;s Day</p>
                            </div>
                            <a
                                href="/evp_calender.png"
                                download="Employee-Volunteering-Calendar-2026.png"
                                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 font-semibold hover:bg-[#b3181f]"
                            >
                                <Download className="w-4 h-4" />
                                Download Employee Volunteering Calendar 2026
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center">
                        <SectionTag>Our Corporate Partners</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Trusted by Leading Organisations</h2>
                        <h3 className="mt-3 text-lg text-[#1A1A1A]/70">Trusted by leading organisations for meaningful employee engagement.</h3>
                    </FadeUp>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {["/partners/1 (1).jpg", "/partners/1 (2).jpg", "/partners/1 (3).jpg", "/partners/1 (4).jpg", "/partners/1 (5).jpg", "/partners/1 (6).jpg"].map((logo, i) => (
                            <FadeUp key={logo} delay={0.04 * i}>
                                <div className="rounded-xl border border-gray-200 bg-white p-4 h-20 flex items-center justify-center">
                                    <img src={logo} alt="Corporate partner logo" className="max-h-10 w-auto object-contain" />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-brand-red to-[#c9212b] text-white p-8 md:p-10">
                            <SectionTag>Let&apos;s Join Hands</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let&apos;s Join Hands for Purposeful Volunteering</h2>
                            <p className="mt-5 text-white/90 font-semibold">Programme Lead: Sangeeta Sishodia</p>
                            <p className="text-white/80">Manager – Corporate Employee Volunteering</p>
                            <div className="mt-5 flex flex-col sm:flex-row gap-4">
                                <a href="mailto:Sangeeta.sishodia@magicbusindia.org" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-red px-5 py-3 font-bold">
                                    <Mail className="w-4 h-4" />
                                    Sangeeta.sishodia@magicbusindia.org
                                </a>
                                <a href="tel:+917715007354" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 font-semibold">
                                    <Phone className="w-4 h-4" />
                                    +91 77150 07354
                                </a>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <FAQSection
                items={evpFaq}
                title="Frequently Asked Questions (FAQs)"
                subtitle="Quick answers about formats, customisation, safety, and participation in Magic Bus corporate volunteering opportunities."
            />
        </Layout>
    );
}
