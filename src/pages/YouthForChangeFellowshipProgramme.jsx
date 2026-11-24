import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    Compass,
    ExternalLink,
    Handshake,
    Landmark,
    Leaf,
    Mail,
    MapPinned,
    Quote,
    Rocket,
    Sprout,
    Target,
    Users2,
} from "lucide-react";
import usePhone from "../hooks/usePhone";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
const _MOTION = motion;

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "", immediate = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <_MOTION.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={immediate || inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}
        >
            {children}
        </_MOTION.div>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-sm font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
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

/* ══════════════════════════════════════════════════════════════
   Programme journey: one phase at a time (keeps the section short)
══════════════════════════════════════════════════════════════ */
function PhaseExplorer() {
    const [active, setActive] = useState(0);
    const last = programmePhases.length - 1;
    const go = (n) => setActive(Math.min(last, Math.max(0, n)));

    return (
        <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <SectionTag>Programme Journey</SectionTag>
                <span className="mb-4 rounded-full border border-gray-200 bg-[#F7F7F5] px-3 py-1 text-base font-bold text-[#1A1A1A]/80">
                    15 Month Pathway
                </span>
            </div>

            {/* The five phases: tap one to read it */}
            <div role="group" aria-label="Programme phases" className="relative flex items-start justify-between">
                <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 h-1 -translate-y-1/2 rounded-full bg-gray-200" />
                <div
                    aria-hidden="true"
                    className="absolute left-[10%] top-6 h-1 -translate-y-1/2 rounded-full bg-brand-red transition-all duration-500"
                    style={{ width: `${(active / last) * 80}%` }}
                />
                {programmePhases.map((p, i) => (
                    <button
                        key={p.title}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={i === active}
                        aria-label={`Phase ${i + 1}, ${p.duration}`}
                        className="group relative z-10 flex w-1/5 flex-col items-center gap-2 focus-visible:outline-none"
                    >
                        <span
                            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-extrabold transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-brand-yellow ${
                                i <= active
                                    ? "border-brand-red bg-brand-red text-white"
                                    : "border-gray-300 bg-white text-[#1A1A1A] group-hover:border-brand-red group-hover:text-brand-red"
                            } ${i === active ? "scale-110 ring-4 ring-brand-red/20" : ""}`}
                        >
                            {i + 1}
                        </span>
                        <span className={`hidden text-center text-sm font-bold leading-tight sm:block ${i === active ? "text-brand-red" : "text-[#1A1A1A]/70"}`}>
                            {p.duration}
                        </span>
                    </button>
                ))}
            </div>

            {/* The selected phase. All five sit in the same spot so the section keeps one steady height. */}
            <div className="mt-6 grid flex-1">
                {programmePhases.map((p, i) => (
                    <div
                        key={p.title}
                        role="group"
                        aria-label={p.title}
                        aria-hidden={i !== active}
                        inert={i !== active}
                        className="col-start-1 row-start-1"
                        style={{
                            opacity: i === active ? 1 : 0,
                            visibility: i === active ? "visible" : "hidden",
                            transition: i === active ? "opacity 0.4s ease" : "opacity 0.25s ease, visibility 0s linear 0.25s",
                        }}
                    >
                        <div className="h-full rounded-2xl border border-brand-red/25 bg-[#FFF7F2] p-5 md:p-6">
                            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                                <h3 className="text-xl font-extrabold text-[#1A1A1A] md:text-2xl">{p.title}</h3>
                                <span className="shrink-0 rounded-full bg-brand-yellow px-3 py-1 text-base font-bold text-brand-black">{p.duration}</span>
                            </div>
                            <p className="mt-3 text-lg leading-relaxed text-[#1A1A1A]/85">{p.detail}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={() => go(active - 1)}
                    disabled={active === 0}
                    className="inline-flex w-32 items-center justify-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-2 text-base font-bold text-[#1A1A1A] transition sm:gap-2 sm:px-4 hover:border-brand-red hover:text-brand-red disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
                >
                    <ArrowLeft className="h-4 w-4" /> Previous
                </button>
                <button
                    type="button"
                    onClick={() => go(active + 1)}
                    disabled={active === last}
                    className="inline-flex w-32 items-center justify-center gap-1.5 rounded-full bg-brand-red px-3 py-2 text-base font-bold text-white transition sm:gap-2 sm:px-4 hover:bg-[#a01018] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
                >
                    Next <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════
   The "Youth for Change Fellowship" journey picture, redrawn from the team's artwork
   (yellow panel, round title, colour arc with five dots, five soft shapes)
══════════════════════════════════════════════════════════════ */
const ARC = { cx: 384, cy: 117, r: 161 };
const arcPoint = (deg) => {
    const a = (deg * Math.PI) / 180;
    return [ARC.cx - ARC.r * Math.sin(a), ARC.cy + ARC.r * Math.cos(a)];
};
const arcPath = (from, to) => {
    const [x1, y1] = arcPoint(from);
    const [x2, y2] = arcPoint(to);
    return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${ARC.r} ${ARC.r} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
};
const ARC_PARTS = [
    { from: 90, to: 57, color: "#FF9800", width: 3 },
    { from: 57, to: 24, color: "#26C6DA", width: 10 },
    { from: 24, to: -24, color: "#42A5F5", width: 15 },
    { from: -24, to: -57, color: "#EC407A", width: 10 },
    { from: -57, to: -90, color: "#8E44AD", width: 3 },
];
const ARC_DOTS = [
    { at: 57, r: 5.5, color: "#FF9800" },
    { at: 24, r: 8, color: "#26C6DA" },
    { at: -24, r: 8, color: "#EC407A" },
    { at: -57, r: 6.5, color: "#EC407A" },
];

/* each soft shape is a fan piece turned around the title circle */
const PIECE = { inner: 216, outer: 370, halfTop: 44, halfBottom: 96, round: 8 };
const piecePath = () => {
    const yTop = Math.sqrt(PIECE.inner ** 2 - PIECE.halfTop ** 2);
    const yBottom = Math.sqrt(PIECE.outer ** 2 - PIECE.halfBottom ** 2);
    return `M ${-PIECE.halfTop} ${yTop.toFixed(1)} A ${PIECE.inner} ${PIECE.inner} 0 0 0 ${PIECE.halfTop} ${yTop.toFixed(1)} L ${PIECE.halfBottom} ${yBottom.toFixed(1)} A ${PIECE.outer} ${PIECE.outer} 0 0 1 ${-PIECE.halfBottom} ${yBottom.toFixed(1)} Z`;
};
const FELLOWSHIP_STEPS = [
    { angle: 71, fill: "#FDF3C8", lines: ["Selection of the", "fellows from", "different parts", "of the country."] },
    { angle: 37, fill: "#D3F5D3", lines: ["Capacity Building", "Training of", "these fellows."] },
    { angle: 0, fill: "#D5F3FA", lines: ["Development", "of the project"] },
    { angle: -37, fill: "#FBE4E8", lines: ["Identifying the", "problem / needs", "in the community"] },
    { angle: -71, fill: "#F4EBD8", lines: ["Building", "connections", "with local", "organizations."] },
];
const LINE_H = 23;

/* Photo for the empty slot next to the diagram (Role of Magic Bus section). Leave null until the image is ready. */
const FELLOWSHIP_PHOTO = null;

function FellowshipDiagram() {
    const path = piecePath();
    return (
        <div className="overflow-hidden rounded-2xl">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap" precedence="default" />

            {/* Tablet and desktop: the picture */}
            <svg
                viewBox="0 0 768 505"
                role="img"
                aria-labelledby="y4c-diagram-title y4c-diagram-desc"
                className="hidden h-auto w-full sm:block"
                style={{ fontFamily: "Lato, Inter, system-ui, sans-serif" }}
            >
                <title id="y4c-diagram-title">Youth for Change Fellowship journey</title>
                <desc id="y4c-diagram-desc">
                    Five steps: selection of the fellows from different parts of the country; capacity building training of these fellows;
                    development of the project; identifying the problem or needs in the community; building connections with local organizations.
                </desc>
                <rect width="768" height="505" fill="#FBCB14" />

                {FELLOWSHIP_STEPS.map((s) => {
                    const a = (s.angle * Math.PI) / 180;
                    const tx = ARC.cx - 292 * Math.sin(a);
                    const ty = ARC.cy + 292 * Math.cos(a);
                    return (
                        <g key={s.lines[0]}>
                            <path
                                d={path}
                                fill={s.fill}
                                stroke={s.fill}
                                strokeWidth={PIECE.round * 2}
                                strokeLinejoin="round"
                                transform={`translate(${ARC.cx} ${ARC.cy}) rotate(${s.angle})`}
                            />
                            <text textAnchor="middle" fontSize="18" fontWeight="700" fill="#3B3B3B">
                                {s.lines.map((line, i) => (
                                    <tspan key={line} x={tx.toFixed(1)} y={(ty + (i - (s.lines.length - 1) / 2) * LINE_H).toFixed(1)} dominantBaseline="central">
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </g>
                    );
                })}

                {/* the colour arc */}
                {ARC_PARTS.map((p) => (
                    <path key={p.color} d={arcPath(p.from, p.to)} fill="none" stroke={p.color} strokeWidth={p.width} />
                ))}
                {(() => {
                    const [x, y] = arcPoint(90);
                    return <circle cx={x} cy={y} r="4.5" fill="#FF9800" />;
                })()}
                {(() => {
                    const [x, y] = arcPoint(-90);
                    return <circle cx={x} cy={y} r="4.5" fill="#fff" stroke="#8E44AD" strokeWidth="2" />;
                })()}
                {ARC_DOTS.map((d) => {
                    const [x, y] = arcPoint(d.at);
                    return <circle key={d.at} cx={x} cy={y} r={d.r} fill="#fff" stroke={d.color} strokeWidth="3" />;
                })}

                {/* the title circle */}
                <circle cx="384" cy="100" r="100" fill="#F2F2F2" />
                <text textAnchor="middle" fontSize="28" fontWeight="900" fill="#3B3B3B">
                    {["Youth", "for", "Change", "Fellowship"].map((line, i) => (
                        <tspan key={line} x="384" y={52.5 + i * 33} dominantBaseline="central">
                            {line}
                        </tspan>
                    ))}
                </text>
            </svg>

            {/* Phones: the same five steps as a list (the picture would be too small to read) */}
            <div className="rounded-2xl bg-[#FBCB14] p-4 sm:hidden">
                <p className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-[#F2F2F2] px-5 text-center text-lg font-black leading-tight text-[#3B3B3B]">
                    Youth for Change Fellowship
                </p>
                <ul className="space-y-3">
                    {FELLOWSHIP_STEPS.map((s) => (
                        <li key={s.lines[0]} className="rounded-2xl px-4 py-3 text-center text-lg font-bold leading-snug text-[#3B3B3B]" style={{ backgroundColor: s.fill }}>
                            {s.lines.join(" ")}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════
   "Why the need": four cards. Tap one to fill it; on phones they are a row you swipe, and the card in front fills.
══════════════════════════════════════════════════════════════ */
const NEEDS = [
    { label: "Climate Vulnerability", icon: Sprout },
    { label: "Educational Gaps", icon: Compass },
    { label: "Lack of Sports Infrastructure", icon: MapPinned },
    { label: "Limited Access to Quality Physical Education", icon: Users2 },
];

function NeedCards() {
    const phone = usePhone();
    const row = useRef(null);
    const [active, setActive] = useState(null);

    // on a phone the first card starts filled, so it is clear the cards can be touched
    React.useEffect(() => {
        if (phone) setActive((a) => (a === null ? 0 : a));
    }, [phone]);

    const onScroll = () => {
        const el = row.current;
        if (!el || el.scrollWidth <= el.clientWidth + 4) return;
        const step = el.children[0].getBoundingClientRect().width + 16;
        setActive(Math.min(NEEDS.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
    };

    return (
        <div
            ref={row}
            onScroll={onScroll}
            className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
            {NEEDS.map((item, i) => {
                const on = active === i;
                return (
                    <FadeUp key={item.label} delay={0.08 * i} className="w-[78%] shrink-0 snap-center sm:h-full sm:w-auto sm:shrink" immediate={phone}>
                        <_MOTION.button
                            type="button"
                            onClick={() => setActive(on ? null : i)}
                            aria-pressed={on}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                            className={`group relative flex h-full min-h-[200px] w-full cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-2xl border p-6 text-left transition-colors duration-300 hover:border-brand-red hover:bg-brand-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow ${
                                on ? "border-brand-red bg-brand-red shadow-xl" : "border-gray-200 bg-[#F7F7F5]"
                            }`}
                        >
                            <item.icon aria-hidden="true" className={`pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/15 ${on ? "rotate-12 text-white/15" : "text-[#1A1A1A]/5"}`} />
                            <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-white/20 ${on ? "bg-white/20" : "bg-brand-red/10"}`}>
                                <item.icon className={`h-7 w-7 transition-colors duration-300 group-hover:text-white ${on ? "text-white" : "text-brand-red"}`} />
                            </span>
                            <p className={`relative text-xl font-extrabold leading-snug transition-colors duration-300 group-hover:text-white ${on ? "text-white" : "text-[#1A1A1A]"}`}>
                                {item.label}
                            </p>
                        </_MOTION.button>
                    </FadeUp>
                );
            })}
        </div>
    );
}

/* ══════════════════════════════════════════════════════════════
   Programme Focus: the Goal box and the four focus areas as boxes you can touch
══════════════════════════════════════════════════════════════ */
const FOCUS = [
    { label: "Climate literacy", Icon: Leaf, color: "#3F8F2B" },
    { label: "Civic leadership", Icon: Landmark, color: "#2563EB" },
    { label: "Stakeholder engagement", Icon: Handshake, color: "#E01085" },
    { label: "Project execution", Icon: Rocket, color: "#E12228" },
];

function FocusBoxes() {
    const [on, setOn] = useState(null);
    return (
        <>
            <_MOTION.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red to-[#9F1239] p-5 text-white shadow-lg"
            >
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 rounded-full border-2 border-white/25" />
                <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                        <Target className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-yellow">Goal</p>
                        <p className="mt-1 text-lg font-extrabold leading-snug">To empower youth to lead change in communities.</p>
                    </div>
                </div>
            </_MOTION.div>

            <div className="mt-4 grid grid-cols-2 gap-3">
                {FOCUS.map(({ label, Icon, color }) => {
                    const sel = on === label;
                    return (
                        <_MOTION.button
                            key={label}
                            type="button"
                            onClick={() => setOn(sel ? null : label)}
                            onMouseEnter={() => setOn(label)}
                            aria-pressed={sel}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            className="group flex min-h-[104px] flex-col items-start justify-between gap-3 rounded-2xl border-2 p-3.5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
                            style={sel ? { background: color, borderColor: color, color: "#fff" } : { background: "#fff", borderColor: `${color}40`, color: "#1A1A1A" }}
                        >
                            <span
                                className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                                style={sel ? { background: "rgba(255,255,255,0.25)", color: "#fff" } : { background: `${color}1A`, color }}
                            >
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span className="text-base font-bold leading-snug">{label}</span>
                        </_MOTION.button>
                    );
                })}
            </div>
        </>
    );
}

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
                        <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed text-lg">
                            Over 65% of India&apos;s population is below the age of 35, positioning youth
                            leadership as a powerful driver of community transformation.
                        </p>
                    </FadeUp>

                    <NeedCards />

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

                    <div className="mt-10 grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                        <FadeUp className="lg:col-span-5 h-full">
                            <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#fff2e9] via-white to-[#fff7dc] p-7 md:p-8">
                                <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand-red/10 blur-2xl" />
                                <p className="text-sm uppercase tracking-widest font-bold text-brand-red">Programme Focus</p>
                                <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed text-lg">
                                    India&apos;s development challenges need young leaders who understand grassroots realities,
                                    engage communities with empathy, and translate intent into action.
                                </p>
                                <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed text-lg">
                                    The Youth for Change Fellowship Programme by Magic Bus enables young people to become
                                    catalysts of change by combining life skills, leadership development, and community engagement.
                                </p>

                                <FocusBoxes />
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08} className="lg:col-span-7 h-full">
                            <PhaseExplorer />
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
                        <p className="mt-4 text-[#1A1A1A]/75 leading-relaxed text-lg">
                            Fellows work closely with Magic Bus teams and communities, gaining first-hand experience
                            in development work while strengthening the skills required to lead effectively.
                        </p>
                    </FadeUp>

                    <div className="mt-10 grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-6 items-stretch">
                        <FadeUp className="h-full">
                            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#faf7ed] to-white p-7 h-full">
                                <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Programme Overview and Design</h3>
                                <p className="mt-3 text-lg text-[#1A1A1A]/80 leading-relaxed">
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
                                            <CheckCircle2 className="w-6 h-6 text-brand-red mt-0.5 shrink-0" />
                                            <p className="text-lg text-[#1A1A1A]/80">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://www.magicbus.org/youth-for-change-fellowship-programme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-base font-bold text-brand-red hover:text-[#a01018]"
                                >
                                    Source: Magic Bus programme page
                                    <ArrowRight className="w-4 h-4" />
                                </a>

                                <div className="mt-6">
                                    <FellowshipDiagram />
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08} className="h-full">
                            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7">
                                {/* Photo slot: fills the space above the text. It stays empty until FELLOWSHIP_PHOTO is set
                                    (put the image in /public and use its path, e.g. "/youth-fellows.jpg"). */}
                                <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                                    {FELLOWSHIP_PHOTO && (
                                        <img loading="lazy" decoding="async" src={FELLOWSHIP_PHOTO} alt="Youth for Change fellows in community action" className="absolute inset-0 h-full w-full object-cover" />
                                    )}
                                </div>
                                <h3 className="mt-5 text-2xl font-extrabold text-[#1A1A1A]">Shaping Young Leaders</h3>
                                <p className="mt-3 text-lg text-[#1A1A1A]/80 leading-relaxed">
                                    The Youth for Change (Y4C) Fellowship is a leadership journey for young people
                                    aged 18–30 across Climate Action, Education, Sports for Good, and Physical Education.
                                </p>
                                <p className="mt-3 text-lg text-[#1A1A1A]/80 leading-relaxed">
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
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            <FadeUp className="lg:col-span-5">
                                <SectionTag>Who Can Join</SectionTag>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                                    Who Can Join This Programme?
                                </h2>
                                <div className="mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
                                <div className="mt-6 space-y-3">
                                    {[
                                        "Are in the 18-30 years age group",
                                        "Are motivated to work on social and community issues",
                                        "Want hands-on experience beyond classroom learning",
                                        "Are willing to engage with communities consistently",
                                        "Show curiosity, commitment, and leadership potential",
                                    ].map((item) => (
                                        <_MOTION.div
                                            key={item}
                                            whileHover={{ x: 6 }}
                                            className="flex items-center gap-3 rounded-xl border border-gray-200 border-l-4 border-l-brand-red bg-white px-4 py-3 shadow-sm"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red">
                                                <CheckCircle2 className="h-5 w-5 text-white" />
                                            </span>
                                            <p className="text-lg font-semibold text-[#1A1A1A]">{item}</p>
                                        </_MOTION.div>
                                    ))}
                                </div>

                                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Leadership in action, with visible results",
                                        "Self-management skills",
                                        "Strong communication and teamwork abilities",
                                        "Problem-solving and decision-making skills",
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-brand-yellow bg-brand-yellow/25 p-4 text-lg font-bold leading-snug text-[#1A1A1A]">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.08} className="lg:col-span-7">
                                <div className="relative">
                                    <div className="flex flex-col rounded-3xl border border-brand-black/10 bg-brand-yellow p-5 md:p-6 text-[#1A1A1A] shadow-xl">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">Programme Outcomes</h3>
                                            <span className="rounded-full bg-[#1A1A1A] px-3 py-1 text-sm font-bold tracking-wider uppercase text-brand-yellow">
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
                                                    className="flex items-center gap-3 rounded-xl border border-brand-black/10 bg-white px-4 py-5 text-lg font-bold leading-snug text-[#1A1A1A] shadow-sm"
                                                >
                                                    <CheckCircle2 className="h-7 w-7 shrink-0 text-brand-red" />
                                                    <span>{item}</span>
                                                </_MOTION.div>
                                            ))}
                                        </div>

                                        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                { label: "Leadership", value: "92%" },
                                                { label: "Teamwork", value: "89%" },
                                                { label: "Problem Solving", value: "87%" },
                                                { label: "Community Action", value: "94%" },
                                            ].map((stat) => (
                                                <div key={stat.label} className="min-w-0 rounded-xl border border-brand-black/10 bg-white p-3 shadow-sm">
                                                    {/* the label sits above the number, so neither can run into the other on a narrow screen */}
                                                    <div className="text-[15px] font-bold leading-tight text-[#1A1A1A] sm:text-base">{stat.label}</div>
                                                    <div className="mt-1 text-3xl font-black leading-none text-brand-red">{stat.value}</div>
                                                    <div className="mt-2 h-2 rounded-full bg-[#1A1A1A]/10 overflow-hidden">
                                                        <div className="h-full rounded-full bg-brand-red" style={{ width: stat.value }} />
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
                            <p className="mt-4 text-white/85 text-lg md:text-xl">
                                The duration of the programme is 12 to 24 months.
                            </p>
                            <p className="mt-2 text-white/85 text-lg">
                                The duration is specific depending upon the programme structure and design,
                                and is declared along with the respective application forms.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-lg font-semibold">
                                <Clock3 className="w-4 h-4" />
                                12-24 months
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section id="success-stories" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <FadeUp className="text-center mb-14">
                        <SectionTag>Success Stories</SectionTag>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                            Journeys That Inspire
                        </h2>
                        <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed">
                            The journeys of our fellows reflect how early exposure and mentorship can shape
                            responsible, capable leaders.
                        </p>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-6">
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
                            <FadeUp key={story.name} delay={0.08 * i} className="h-full">
                                <_MOTION.article
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-8 shadow-xl ring-1 ring-brand-red/30 transition-shadow duration-300 hover:shadow-2xl md:p-10"
                                >
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
                                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                                        <Quote className="h-7 w-7 text-brand-black" />
                                    </span>
                                    <p className="relative mt-6 flex-1 text-xl md:text-2xl font-semibold leading-relaxed text-white">
                                        &ldquo;{story.quote}&rdquo;
                                    </p>
                                    <div className="relative mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-yellow/20 ring-4 ring-brand-yellow">
                                            <img loading="lazy" decoding="async" src={story.image} alt={story.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xl font-extrabold text-white">{story.name}</p>
                                            <p className="text-base font-semibold text-brand-yellow">Fellow, {story.location}</p>
                                        </div>
                                        <a
                                            href={story.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={story.cta}
                                            title={story.cta}
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </a>
                                    </div>
                                </_MOTION.article>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                items={y4cFaqItems}
                title="Frequently Asked Questions (FAQs)"
                subtitle="Everything you need to know about eligibility, commitment, mentorship, and programme rollout."
            />

            <section id="programme-enquiries" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-6">
                    <FadeUp>
                        <div className="rounded-3xl border border-gray-200 bg-[#F7F7F5] p-7 h-full">
                            <SectionTag>For Programme Enquiries</SectionTag>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
                                Contact Us
                            </h2>
                            <p className="mt-4 text-[#1A1A1A]/75 text-lg">
                                Garima Mehandiratta: Program Manager - Youth for Change Fellowship
                            </p>
                            <a
                                href="mailto:garima.mehandiratta@magicbusindia.org"
                                className="mt-5 inline-flex max-w-full items-center gap-2 text-base font-bold text-brand-red hover:text-[#a01018] break-all"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
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
                            <p className="mt-4 text-[#1A1A1A]/75 text-lg">
                                For all other enquiries related to the Youth for Change Fellowship Programme.
                            </p>
                            <a
                                href="mailto:info@magicbusindia.org"
                                className="mt-5 inline-flex items-center gap-2 text-base font-bold text-brand-red hover:text-[#a01018]"
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
