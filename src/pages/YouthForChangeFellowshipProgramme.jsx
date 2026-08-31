import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Compass,
    Mail,
    MapPinned,
    Sprout,
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
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}
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

const y4cFaqItems = [
    {
        question: "Do I need prior experience in social work?",
        category: "Eligibility",
        answer:
            "Prior experience in social work is not needed. However, basic understanding or experience in the core domain of the programme is an added plus.",
    },
    {
        question: "Is this a full-time fellowship?",
        category: "Commitment",
        answer:
            "A minimum of 40 hours/week commitment is required. However, fellows can adjust their timings based on the project needs.",
    },
    {
        question: "Will fellows receive training and mentorship?",
        category: "Support",
        answer:
            "Yes. Fellows receive structured training, ongoing guidance, and learning support.",
    },
    {
        question: "Is certification provided?",
        category: "Certification",
        answer:
            "Yes. Fellows who successfully complete the programme receive a formal certificate from Magic Bus India Foundation.",
    },
    {
        question: "Where is the fellowship implemented?",
        category: "Locations",
        answer:
            "The programme is implemented across selected locations in India, based on community and programme needs.",
    },
];

const programmePhases = [
    {
        title: "Phase 1: Inception & Capacity Building",
        duration: "Months 1–4",
        detail:
            "Outreach, application and selection; orientation of fellows and mentors; intensive climate literacy, SDGs, civic leadership skills, and project design training; development of individual learning plans.",
    },
    {
        title: "Phase 2: Community Research & Action Plan Development",
        duration: "Months 5–7",
        detail:
            "Baseline assessments, community mapping, focus group discussions, and drafting of climate action plans; review and approval by Magic Bus and local governance bodies.",
    },
    {
        title: "Phase 3: Project Implementation & Monitoring",
        duration: "Months 8–12",
        detail:
            "Roll-out of fellow-led projects on themes such as water conservation, waste management, or climate-smart agriculture; regular monitoring, data collection, mentor check-ins, and mid-term learning review.",
    },
    {
        title: "Phase 4: Consolidation & Evaluation",
        duration: "Months 13–14",
        detail:
            "Endline surveys, comparison with baseline, documentation of outcomes and lessons.",
    },
    {
        title: "Phase 5: Dissemination & Alumni Network",
        duration: "Month 15",
        detail:
            "Certification, launch of an alumni network, setting up of social enterprise pathways, and alignment with government schemes for continued engagement.",
    },
];

export default function YouthForChangeFellowshipProgramme() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/youth_banner.jpg"
                title="Youth for Change Fellowship Programme"
                subtitle="Shaping Young Leaders for Community Transformation"
                description="A leadership journey that equips young people to turn community challenges into measurable, local action."
                ctas={[
                    { href: "#programme-enquiries", label: "Contact Programme Team", variant: "primary", showArrow: true },
                    { href: "#success-stories", label: "View Success Stories" },
                ]}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center max-w-3xl mx-auto">
                        <SectionTag>Programme Need</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Why the Need for Youth for Change?</h2>
                        <p className="mt-4 text-[#1A1A1A]/70 leading-relaxed">
                            Over 65% of India&apos;s population is below the age of 35, positioning youth
                            leadership as a powerful driver of community transformation.
                        </p>
                    </FadeUp>

                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Climate Vulnerability", icon: Sprout },
                            { label: "Educational Gaps", icon: Compass },
                            { label: "Lack of Sports Infrastructure", icon: MapPinned },
                            { label: "Limited Access to Quality Physical Education", icon: Users2 },
                        ].map((item, i) => (
                            <FadeUp key={item.label} delay={0.08 * i}>
                                <_MOTION.div
                                    whileHover={{ y: -4 }}
                                    className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 h-full"
                                >
                                    <item.icon className="w-5 h-5 text-brand-red" />
                                    <p className="mt-3 font-semibold text-[#1A1A1A] leading-snug">{item.label}</p>
                                </_MOTION.div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center max-w-3xl mx-auto">
                        <SectionTag>Building Leadership Capacities</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                            Leadership Built Through Real Community Action
                        </h2>
                    </FadeUp>

                    <div className="mt-10 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        <FadeUp className="lg:col-span-5">
                            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#fff2e9] via-white to-[#fff7dc] p-7 md:p-8">
                                <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand-red/10 blur-2xl" />
                                <p className="text-sm uppercase tracking-widest font-bold text-brand-red">Programme Focus</p>
                                <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed">
                                    India&apos;s development challenges need young leaders who understand grassroots realities,
                                    engage communities with empathy, and translate intent into action.
                                </p>
                                <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed">
                                    The Youth for Change Fellowship Programme by Magic Bus enables young people to become
                                    catalysts of change by combining life skills, leadership development, and community engagement.
                                </p>

                                <_MOTION.div
                                    whileHover={{ y: -4 }}
                                    className="mt-6 rounded-2xl border border-brand-red/20 bg-white/90 p-5 shadow-sm"
                                >
                                    <p className="text-xs uppercase tracking-[0.16em] font-bold text-brand-red">Goal</p>
                                    <p className="mt-2 text-lg font-extrabold text-[#1A1A1A]">
                                        To empower youth to lead change in communities.
                                    </p>
                                </_MOTION.div>

                                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
                                    {[
                                        "Climate literacy",
                                        "Civic leadership",
                                        "Stakeholder engagement",
                                        "Project execution",
                                    ].map((pill) => (
                                        <_MOTION.div
                                            key={pill}
                                            whileHover={{ scale: 1.03 }}
                                            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-[#1A1A1A]/80"
                                        >
                                            {pill}
                                        </_MOTION.div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08} className="lg:col-span-7">
                            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-7">
                                <div className="flex items-center justify-between gap-3">
                                    <SectionTag>Programme Journey</SectionTag>
                                    <span className="rounded-full border border-gray-200 bg-[#F7F7F5] px-3 py-1 text-xs font-bold text-[#1A1A1A]/70">
                                        15 Month Pathway
                                    </span>
                                </div>

                                <div className="mt-4 space-y-4">
                                    {programmePhases.map((phase, i) => (
                                        <_MOTION.div
                                            key={phase.title}
                                            initial={{ opacity: 0, x: 18 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                                            whileHover={{ x: 4 }}
                                            className="relative rounded-2xl border border-gray-200 bg-[#FAFAF8] p-5 pl-12"
                                        >
                                            <div className="absolute left-4 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-[11px] font-bold text-white">
                                                {i + 1}
                                            </div>
                                            {i !== programmePhases.length - 1 && (
                                                <div className="absolute left-7 top-12 bottom-[-16px] w-px bg-brand-red/20" />
                                            )}
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="text-base font-bold text-[#1A1A1A]">{phase.title}</h3>
                                                <span className="shrink-0 rounded-full bg-brand-yellow/70 px-3 py-1 text-xs font-bold text-brand-black">
                                                    {phase.duration}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed">{phase.detail}</p>
                                        </_MOTION.div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="max-w-3xl">
                        <SectionTag>What We Do in Y4C</SectionTag>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                            Role of Magic Bus in Developing Leadership in Youth
                        </h2>
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed">
                            Fellows work closely with Magic Bus teams and communities, gaining first-hand experience
                            in development work while strengthening the skills required to lead effectively.
                        </p>
                    </FadeUp>

                    <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
                        <FadeUp>
                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#faf7ed] to-white p-7 h-full">
                                <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Programme Overview and Design</h3>
                                <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                                    The fellowship design combines learning, mentorship, and on-ground implementation,
                                    so fellows can build practical leadership in real community settings.
                                </p>
                                <div className="mt-5 space-y-3">
                                    {[
                                        "Trains fellows in life skills, leadership, and communication",
                                        "Provides exposure to grassroots programme implementation",
                                        "Enables fellows to engage with communities, schools, and local stakeholders",
                                        "Offers continuous mentoring and learning support",
                                    ].map((point) => (
                                        <div key={point} className="flex gap-3 items-start rounded-xl border border-gray-200 bg-white p-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                            <p className="text-sm text-[#1A1A1A]/80">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://www.magicbus.org/youth-for-change-fellowship-programme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]"
                                >
                                    Source: Magic Bus programme page
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <div className="rounded-3xl border border-gray-200 bg-white p-7 h-full">
                                <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10]">
                                    <img src="/youth.jpg" alt="Youth for Change fellows in community action" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="mt-5 text-2xl font-extrabold text-[#1A1A1A]">Shaping Young Leaders</h3>
                                <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                                    The Youth for Change (Y4C) Fellowship is a leadership journey for young people
                                    aged 18–30 across Climate Action, Education, Sports for Good, and Physical Education.
                                </p>
                                <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                                    Over 12–24 months, fellows build domain expertise and core civic leadership,
                                    communication, and problem-solving skills that prepare them for social impact careers.
                                </p>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="rounded-3xl border border-gray-200 bg-[#F4F5EF] p-6 md:p-8 lg:p-10">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                            <FadeUp className="lg:col-span-5">
                                <SectionTag>Who Can Join</SectionTag>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                    Who Can Join This Programme?
                                </h2>
                                <div className="mt-6 space-y-3">
                                    {[
                                        "Are in the 18-30 years age group",
                                        "Are motivated to work on social and community issues",
                                        "Want hands-on experience beyond classroom learning",
                                        "Are willing to engage with communities consistently",
                                        "Show curiosity, commitment, and leadership potential",
                                    ].map((item) => (
                                        <div key={item} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                                            <p className="text-[#1A1A1A]/80">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Leadership in action, with visible results",
                                        "Self-management skills",
                                        "Strong communication and teamwork abilities",
                                        "Problem-solving and decision-making skills",
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-[#1A1A1A]/80">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.08} className="lg:col-span-7">
                                <div className="relative">
                                    <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#0C3B73] via-[#114a8d] to-[#1a5ba0] p-5 md:p-6 shadow-xl">
                                        <div className="flex items-center justify-between gap-3">
                                            <h3 className="text-xl md:text-2xl font-extrabold">Programme Outcomes</h3>
                                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                                                What Fellows Learn
                                            </span>
                                        </div>

                                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                            {[
                                                "Community engagement and facilitation experience",
                                                "Skills in programme design, delivery, and monitoring",
                                                "Understanding of social issues affecting underserved young people",
                                                "Youth agency and initiative for meaningful change",
                                            ].map((item, i) => (
                                                <_MOTION.div
                                                    key={item}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.06, duration: 0.35 }}
                                                    className="rounded-lg bg-white/10 px-3 py-2 text-sm leading-relaxed"
                                                >
                                                    {item}
                                                </_MOTION.div>
                                            ))}
                                        </div>

                                        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3">
                                            {[
                                                { label: "Leadership", value: "92%" },
                                                { label: "Teamwork", value: "89%" },
                                                { label: "Problem Solving", value: "87%" },
                                                { label: "Community Action", value: "94%" },
                                            ].map((stat) => (
                                                <div key={stat.label} className="rounded-xl bg-white/10 p-3">
                                                    <div className="flex items-center justify-between text-xs text-white/75">
                                                        <span>{stat.label}</span>
                                                        <span>{stat.value}</span>
                                                    </div>
                                                    <div className="mt-2 h-1.5 rounded-full bg-white/20 overflow-hidden">
                                                        <div className="h-full rounded-full bg-brand-yellow" style={{ width: stat.value }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-brand-red to-[#c9212b] text-white p-8 md:p-10">
                            <SectionTag>Programme Duration</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Duration of the Programme</h2>
                            <p className="mt-4 text-white/85 text-base md:text-lg">
                                The duration of the programme is 12 to 24 months.
                            </p>
                            <p className="mt-2 text-white/75">
                                The duration is specific depending upon the programme structure and design,
                                and is declared along with the respective application forms.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                                <Clock3 className="w-4 h-4" />
                                12-24 months
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section id="success-stories" className="py-20 bg-[#F7F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            <FadeUp className="lg:col-span-4">
                                <SectionTag>Success Stories</SectionTag>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                    Journeys That Inspire
                                </h2>
                                <p className="mt-4 text-[#1A1A1A]/70 leading-relaxed">
                                    The journeys of our fellows reflect how early exposure and mentorship can shape
                                    responsible, capable leaders.
                                </p>
                            </FadeUp>

                            <div className="lg:col-span-8 grid md:grid-cols-2 gap-5 md:gap-6 pt-8">
                                {[
                                    {
                                        name: "Monika Regar",
                                        location: "Rajasthan",
                                        cta: "Explore her journey",
                                        link: "https://linkedin.com/posts/magic-bus_magicbusindiafoundation-childhoodtolivelihood-activity-7344006955163631616-X7Wu",
                                        quote:
                                            "Through the fellowship, I worked towards setting up a mini nursery and a kitchen garden in a government school in Ajmer.",
                                        image: "/testimonials/monika.png",
                                    },
                                    {
                                        name: "Vikas Raghuvanshi",
                                        location: "Madhya Pradesh",
                                        cta: "Explore his journey",
                                        link: "https://www.linkedin.com/posts/magic-bus_magicbusindiafoundation-childhoodtolivelihood-activity-7358845646402924547-crrG/",
                                        quote:
                                            "I united farmers in Ahmedpur to promote sustainable farming practices, resulting in nearly 7% increase in crop yield.",
                                        image: "/testimonials/vikas.png",
                                    },
                                ].map((story, i) => (
                                    <FadeUp key={story.name} delay={0.07 * i}>
                                        <_MOTION.article
                                            whileHover={{ y: -6 }}
                                            className="relative rounded-2xl border border-gray-200 bg-white px-5 pb-6 pt-12 shadow-sm"
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-100">
                                                <img src={story.image} alt={story.name} className="h-full w-full object-cover" />
                                            </div>
                                            <h3 className="mt-2 text-center text-xl font-extrabold text-[#1A1A1A]">{story.name}</h3>
                                            <p className="mt-1 text-center text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/45">
                                                {story.location}
                                            </p>
                                            <p className="mt-4 text-center text-sm text-[#1A1A1A]/70 leading-relaxed">
                                                {story.quote}
                                            </p>
                                            <div className="mt-5 text-center">
                                                <a
                                                    href={story.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]"
                                                >
                                                    {story.cta}
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </_MOTION.article>
                                    </FadeUp>
                                ))}
                            </div>
                    </div>
                </div>
            </section>

            <FAQSection
                items={y4cFaqItems}
                title="Frequently Asked Questions (FAQs)"
                subtitle="Everything you need to know about eligibility, commitment, mentorship, and programme rollout."
            />

            <section id="programme-enquiries" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-6">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-[#F7F7F5] p-7 h-full">
                            <SectionTag>For Programme Enquiries</SectionTag>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
                                Contact Us
                            </h2>
                            <p className="mt-4 text-[#1A1A1A]/75">
                                Garima Mehandiratta: Program Manager - Youth for Change Fellowship
                            </p>
                            <a
                                href="mailto:garima.mehandiratta@magicbusindia.org"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]"
                            >
                                <Mail className="w-4 h-4" />
                                garima.mehandiratta@magicbusindia.org
                            </a>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.08}>
                        <div className="rounded-3xl border border-gray-200 bg-white p-7 h-full">
                            <SectionTag>For Other Enquiries</SectionTag>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
                                Connect With Magic Bus
                            </h2>
                            <p className="mt-4 text-[#1A1A1A]/75">
                                For all other enquiries related to the Youth for Change Fellowship Programme.
                            </p>
                            <a
                                href="mailto:info@magicbusindia.org"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-[#a01018]"
                            >
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
