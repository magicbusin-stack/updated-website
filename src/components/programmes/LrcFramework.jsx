import React from "react";
import {
    Banknote,
    BarChart3,
    Brain,
    Briefcase,
    Handshake,
    Heart,
    Laptop,
    Lightbulb,
    Link2,
    MapPin,
    Presentation,
    Store,
    TrendingUp,
    UserCheck,
    Users,
} from "lucide-react";

/* Components of the Livelihood Resource Centre (LRC) model.
   Hard-coded replacement for the old flat image (/edp-lrc-components.png).
   Wide screens (xl and up): the full infographic (program model puzzle, features, outcomes).
   Smaller screens: the same content as simple stacked cards, so the text stays readable. */

const C = {
    red: "#C8102E",
    redDark: "#B01020",
    grey: "#5F6A66",
    yellow: "#FFB527",
    cream: "#FAE4A8",
    peach: "#F8A992",
    banner: "#FCE6A8",
    coral: "#F5928D",
    pink: "#F8C4BC",
    pill: "#D5E2DC",
    ink: "#1A1A1A",
};

const FEATURES = [
    { label: ["Geographically", "Embedded"], Icon: MapPin, color: C.red },
    { label: ["Udyam Sahayak", "(Peer Mentors)"], Icon: UserCheck, color: "#0284C7" },
    { label: ["Convergence &", "Collectivisation"], Icon: Users, color: C.red },
    { label: ["Market, Credit &", "employer Linkages"], Icon: Link2, color: "#F59E0B" },
];

const OUTCOMES = [
    { label: "Enhanced Agency and Leadership", Icon: Users, bg: C.cream },
    { label: "Increase in Income", Icon: TrendingUp, bg: C.peach },
    { label: "Access to Resources - Physical, Market, Legal & Govt", Icon: BarChart3, bg: C.cream },
    { label: "Enhanced Credit worthiness & Access to credit", Icon: Banknote, bg: C.peach },
    { label: "Improved Quality of Life", Icon: Heart, bg: C.cream },
];

const PIECES = [
    { title: "Skill and transit to sustainable Employment", age: "18-25 years of age", pct: "30-35%", bg: C.grey, fg: "#fff" },
    { title: "Skill and transit to setting nano enterprises", age: "18-45 years of age", pct: "50-60%", bg: C.red, fg: "#fff" },
    { title: "Skill and transit to self-employment", age: "18-45 years of age", pct: "10-15%", bg: C.yellow, fg: C.ink },
];

/* ---------- the small coloured label under/over the puzzle ---------- */
function Tag({ x, y, w, text, bg, fg = "#fff" }) {
    return (
        <g>
            <rect x={x} y={y} width={w} height={34} rx={4} fill={bg} />
            <text x={x + w / 2} y={y + 23} textAnchor="middle" fontSize="17" fontWeight="700" fill={fg}>
                {text}
            </text>
        </g>
    );
}

/* ---------- donut sector path ---------- */
const CX = 270;
const CY = 372;
const R = 250;
const HOLE = 70;
const rad = (d) => (d * Math.PI) / 180;
const pt = (r, d) => [CX + r * Math.cos(rad(d)), CY + r * Math.sin(rad(d))];
function sector(a0, a1) {
    const [x0, y0] = pt(R, a0);
    const [x1, y1] = pt(R, a1);
    const [x2, y2] = pt(HOLE, a1);
    const [x3, y3] = pt(HOLE, a0);
    const span = (((a1 - a0) % 360) + 360) % 360;
    const large = span > 180 ? 1 : 0;
    return `M ${x0} ${y0} A ${R} ${R} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${HOLE} ${HOLE} 0 ${large} 0 ${x3} ${y3} Z`;
}

function ProgramModelSvg() {
    const badge = (d, text, bg, fg = "#fff") => {
        const [x, y] = pt(205, d);
        return (
            <g>
                <rect x={x - 46} y={y - 18} width={92} height={36} rx={8} fill={bg} stroke="#fff" strokeWidth={2.5} />
                <text x={x} y={y + 7} textAnchor="middle" fontSize="19" fontWeight="800" fill={fg}>
                    {text}
                </text>
            </g>
        );
    };
    return (
        <svg viewBox="0 0 760 730" className="h-auto w-full" role="img" aria-label="Program model: three pathways, skill and transit to sustainable employment, nano enterprises and self-employment, supported by mentoring and 21st century life skills">
            {/* Mentoring circle (behind the puzzle) */}
            <circle cx="605" cy="372" r="150" fill={C.pink} />
            <g textAnchor="middle" fill={C.ink}>
                <text x="648" y="296" fontSize="20" fontWeight="700">Mentoring and</text>
                <text x="648" y="321" fontSize="20" fontWeight="700">Handholding</text>
                <Handshake x={620} y={333} width={56} height={56} strokeWidth={1.6} />
                <Brain x={620} y={405} width={52} height={52} strokeWidth={1.6} />
                <text x="648" y="480" fontSize="20" fontWeight="700">21<tspan fontSize="12" dy="-8">st</tspan><tspan dy="8"> century life skills</tspan></text>
            </g>

            {/* Puzzle pieces */}
            <path d={sector(200, 318)} fill={C.grey} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
            <path d={sector(318, 78)} fill={C.red} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
            <path d={sector(78, 200)} fill={C.yellow} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />

            {/* Piece text */}
            <g textAnchor="middle" fill="#fff" fontWeight="700">
                <text x="238" y="222" fontSize="22">Skill and transit to</text>
                <text x="238" y="249" fontSize="22">sustainable</text>
                <text x="238" y="276" fontSize="22">Employment</text>
                <text x="238" y="303" fontSize="16" fontWeight="500" fill="#E5E7E6">(18-25 years of age)</text>

                <text x="431" y="345" fontSize="20">Skill and transit</text>
                <text x="431" y="371" fontSize="20">to setting nano</text>
                <text x="431" y="397" fontSize="20">enterprises</text>
                <text x="431" y="422" fontSize="16" fontWeight="500" fill="#FFE4E8">(18-45 years of age)</text>

                <g fill={C.ink}>
                    <text x="150" y="478" fontSize="22">Skill and transit to</text>
                    <text x="150" y="505" fontSize="22">self-employment</text>
                    <text x="150" y="530" fontSize="16" fontWeight="500">(18-45 years of age)</text>
                </g>
            </g>

            {/* Percentages */}
            {badge(318, "30-35%", C.grey)}
            {badge(78, "50-60%", C.red)}
            {badge(200, "10-15%", C.yellow, C.ink)}

            {/* Magic Bus logo hub */}
            <circle cx={CX} cy={CY} r={HOLE - 2} fill="#fff" />
            <image href="/logo-header.png" x={CX - 52} y={CY - 52} width="104" height="104" preserveAspectRatio="xMidYMid meet" />

            {/* Dashed links from the callouts */}
            <g stroke={C.red} strokeWidth="2" strokeDasharray="5 5" fill="none">
                <path d="M 92 150 L 150 215" />
                <path d="M 470 150 L 395 250" />
                <path d="M 90 700 L 120 560" />
            </g>

            {/* Callouts */}
            <g>
                <rect x="14" y="6" width="226" height="52" rx="4" fill={C.grey} />
                <text x="127" y="28" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">21<tspan fontSize="11" dy="-6">st</tspan><tspan dy="6"> century</tspan></text>
                <text x="127" y="49" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">employability skills</text>
                <Lightbulb x={68} y={72} width={48} height={48} strokeWidth={1.6} color={C.ink} />

                <Tag x={285} y={8} w={150} text="Job Placement" bg={C.grey} />
                <Briefcase x={343} y={50} width={48} height={48} strokeWidth={1.6} color={C.ink} />

                <Tag x={455} y={98} w={140} text="EDP Training" bg={C.red} />
                <Presentation x={502} y={140} width={46} height={46} strokeWidth={1.6} color={C.ink} />

                <Store x={420} y={560} width={50} height={50} strokeWidth={1.6} color={C.ink} />
                <Tag x={390} y={616} w={170} text="Enterprise Setup" bg={C.red} />

                <Laptop x={72} y={640} width={46} height={46} strokeWidth={1.6} color={C.ink} />
                <Tag x={14} y={690} w={170} text="Self Employment" bg={C.yellow} fg="#fff" />
                <Presentation x={252} y={620} width={46} height={46} strokeWidth={1.6} color={C.ink} />
                <Tag x={205} y={672} w={140} text="EDP Training" bg={C.yellow} fg="#fff" />
            </g>
        </svg>
    );
}

/* ---------- header banners ---------- */
const clipStart = "polygon(0 50%, 22px 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 22px 100%)";
const clipEnd = "polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)";
const clipCard = "polygon(26px 0, 100% 0, 100% 100%, 26px 100%, 0 50%)";

function Banner({ children, bg, color, clip }) {
    return (
        <div
            className="flex h-16 items-center justify-center px-5 text-center text-xl font-extrabold leading-tight 2xl:text-2xl"
            style={{ background: bg, color, clipPath: clip }}
        >
            {children}
        </div>
    );
}

export default function LrcFramework() {
    return (
        <section
            aria-label="Components of the Livelihood Resource Centre model"
            className="w-full rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8"
        >
            {/* ================= WIDE SCREENS: full infographic ================= */}
            <div className="hidden xl:grid grid-cols-[3.25rem_minmax(0,7fr)_minmax(0,2.3fr)_minmax(0,3.7fr)_4.5rem] gap-x-3 gap-y-6">
                <div />
                <Banner bg={C.banner} color={C.redDark} clip={clipStart}>
                    Program Model
                </Banner>
                <Banner bg={C.coral} color={C.ink}>
                    Features for Sustainability
                </Banner>
                <div className="col-span-2">
                    <Banner bg={C.banner} color={C.redDark} clip={clipEnd}>
                        Outcomes
                    </Banner>
                </div>

                {/* Left vertical title */}
                <div className="flex items-center justify-center rounded-md bg-[#FADCD5]">
                    <h3
                        className="whitespace-nowrap text-2xl font-black uppercase tracking-tight text-stone-900"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        Livelihood Resource Centre
                    </h3>
                </div>

                <div className="min-w-0">
                    <ProgramModelSvg />
                </div>

                {/* Features */}
                <div className="relative flex flex-col justify-around py-2">
                    <div className="pointer-events-none absolute bottom-6 left-1/2 top-6 -z-0 border-l-2 border-dashed border-sky-300" />
                    {FEATURES.map(({ label, Icon, color }) => (
                        <div key={label[0]} className="relative z-10 flex flex-col items-center text-center">
                            <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-sm" style={{ borderColor: color, color }}>
                                <Icon className="h-8 w-8" strokeWidth={1.8} />
                            </span>
                            <span className="rounded bg-white/90 px-1 text-lg font-bold leading-snug text-stone-900">
                                {label[0]}
                                <br />
                                {label[1]}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Outcomes */}
                <div className="flex flex-col gap-3">
                    {OUTCOMES.map(({ label, Icon, bg }) => (
                        <article
                            key={label}
                            className="flex min-h-[92px] flex-1 items-center gap-3 py-2 pl-9 pr-3 transition-transform duration-200 hover:translate-x-1"
                            style={{ background: bg, clipPath: clipCard }}
                        >
                            <Icon className="h-10 w-10 shrink-0 text-stone-800" strokeWidth={1.6} />
                            <p className="text-lg font-bold leading-snug text-stone-900">{label}</p>
                        </article>
                    ))}
                </div>

                {/* Terminal pill */}
                <div className="flex items-center justify-center">
                    <div className="flex h-[78%] w-full items-center justify-center rounded-full border border-slate-300 bg-[#D5E2DC] px-2 shadow-sm">
                        <p
                            className="text-center text-xl font-extrabold leading-snug text-stone-900"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            Empowered Youth with Enhanced Agency and Income
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= SMALLER SCREENS: stacked cards ================= */}
            <div className="space-y-10 xl:hidden">
                <div>
                    <div className="mb-5 overflow-hidden rounded-xl">
                        <Banner bg={C.banner} color={C.redDark}>
                            Program Model
                        </Banner>
                    </div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-stone-700">Livelihood Resource Centre</p>
                    <div className="grid gap-4 md:grid-cols-3">
                        {PIECES.map((p) => (
                            <div key={p.title} className="rounded-2xl p-5" style={{ background: p.bg, color: p.fg }}>
                                <span className="inline-block rounded-lg border-2 border-white px-3 py-1 text-lg font-extrabold" style={{ background: p.fg === "#fff" ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.5)" }}>
                                    {p.pct}
                                </span>
                                <p className="mt-3 text-xl font-bold leading-snug">{p.title}</p>
                                <p className="mt-1 text-base opacity-90">({p.age})</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-4 rounded-2xl bg-[#F8C4BC] p-5">
                            <Handshake className="h-10 w-10 shrink-0 text-stone-800" strokeWidth={1.6} />
                            <p className="text-xl font-bold text-stone-900">Mentoring and Handholding</p>
                        </div>
                        <div className="flex items-center gap-4 rounded-2xl bg-[#F8C4BC] p-5">
                            <Brain className="h-10 w-10 shrink-0 text-stone-800" strokeWidth={1.6} />
                            <p className="text-xl font-bold text-stone-900">
                                21<sup className="text-xs">st</sup> century life skills
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {[
                            { t: "21st century employability skills", bg: C.grey, Icon: Lightbulb },
                            { t: "Job Placement", bg: C.grey, Icon: Briefcase },
                            { t: "EDP Training", bg: C.red, Icon: Presentation },
                            { t: "Enterprise Setup", bg: C.red, Icon: Store },
                            { t: "Self Employment", bg: C.yellow, Icon: Laptop, dark: true },
                        ].map(({ t, bg, Icon, dark }) => (
                            <span key={t} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-bold" style={{ background: bg, color: dark ? C.ink : "#fff" }}>
                                <Icon className="h-5 w-5" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="mb-5 overflow-hidden rounded-xl">
                        <Banner bg={C.coral} color={C.ink}>
                            Features for Sustainability
                        </Banner>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {FEATURES.map(({ label, Icon, color }) => (
                            <div key={label[0]} className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4">
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-white" style={{ borderColor: color, color }}>
                                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                                </span>
                                <p className="text-xl font-bold leading-snug text-stone-900">{label.join(" ")}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="mb-5 overflow-hidden rounded-xl">
                        <Banner bg={C.banner} color={C.redDark}>
                            Outcomes
                        </Banner>
                    </div>
                    <div className="space-y-3">
                        {OUTCOMES.map(({ label, Icon, bg }) => (
                            <div key={label} className="flex items-center gap-4 rounded-2xl p-4" style={{ background: bg }}>
                                <Icon className="h-9 w-9 shrink-0 text-stone-800" strokeWidth={1.6} />
                                <p className="text-xl font-bold leading-snug text-stone-900">{label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 rounded-2xl border border-slate-300 bg-[#D5E2DC] p-5 text-center text-2xl font-extrabold leading-snug text-stone-900">
                        Empowered Youth with Enhanced Agency and Income
                    </div>
                </div>
            </div>
        </section>
    );
}
