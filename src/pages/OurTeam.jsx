import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Globe, Users, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

/* ─────────────────────────── helpers ─────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay }}
        >
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

/* ─────────────────────────── AVATAR FALLBACK ─────────────────────────── */
const GRADIENTS = [
    ["#E12228", "#FF6B6B"],
    ["#21BDEA", "#0077B6"],
    ["#E01085", "#FF6EB4"],
    ["#B3CC35", "#6A994E"],
    ["#FFCC04", "#F4A261"],
    ["#7B2D8B", "#C77DFF"],
    ["#E12228", "#FF9A3C"],
    ["#21BDEA", "#48CAE4"],
    ["#E01085", "#C41E6A"],
    ["#B3CC35", "#2D6A4F"],
    ["#FFCC04", "#E76F51"],
];

function getInitials(name) {
    return name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

/*
  PHOTO NAMING CONVENTION:
  Place photos in /public/team/ named as kebab-case of the full name.
  Examples:
    Aarthi Singh          → /team/aarthi-singh.jpg
    Tijana Milosevic      → /team/tijana-milosevic.jpg
    K Sai Kulothungan     → /team/k-sai-kulothungan.jpg
    Ganeish Shridhar Heghisthe → /team/ganeish-shridhar-heghisthe.jpg
  Supported extensions: .jpg, .jpeg, .png, .webp
  If the file is missing the card shows a gradient+initials fallback.
*/
function toPhotoPath(name) {
    return `/team/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
}

/* ─────────────────────────── PHOTO CARD ─────────────────────────── */
function TeamCard({ member, index, variant = "light" }) {
    const [imgError, setImgError] = useState(false);
    const isDark = variant === "dark";
    const [from, to] = GRADIENTS[index % GRADIENTS.length];
    const photoSrc = member.photo || toPhotoPath(member.name);

    return (
        <FadeUp delay={0.05 * (index % 6)}>
            <motion.div
                className={`group relative flex flex-col rounded-2xl overflow-hidden border h-full transition-all duration-300 hover:-translate-y-2 ${isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
                    : "bg-white border-gray-100 hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10"
                    }`}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.25 }}
            >
                {/* ── Photo area ─────────────────────────────────────── */}
                <div className="relative w-full aspect-[3/3.5] overflow-hidden bg-gray-100 shrink-0">
                    {!imgError ? (
                        <img
                            src={photoSrc}
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        /* Fallback — gradient + initials */
                        <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
                        >
                            <span className="text-5xl font-extrabold text-white/90 select-none drop-shadow-lg">
                                {getInitials(member.name)}
                            </span>
                        </div>
                    )}

                    {/* Gradient fade at bottom of photo into card body */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 h-16 ${isDark
                            ? "bg-gradient-to-t from-[#1A1A1A]/60 to-transparent"
                            : "bg-gradient-to-t from-white/60 to-transparent"
                            }`}
                    />

                    {/* Location badge */}
                    {member.location && (
                        <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white">
                                <MapPin className="w-2.5 h-2.5" />
                                {member.location}
                            </span>
                        </div>
                    )}
                </div>

                {/* ── Text body ───────────────────────────────────────── */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                    <h3
                        className={`font-bold text-base leading-snug ${isDark ? "text-white" : "text-[#1A1A1A]"
                            }`}
                    >
                        {member.name}
                    </h3>
                    <p
                        className={`text-xs font-semibold leading-snug ${isDark ? "text-brand-yellow" : "text-brand-red"
                            }`}
                    >
                        {member.role}
                    </p>
                    {member.bio && (
                        <p
                            className={`text-[13px] leading-relaxed mt-1 flex-1 ${isDark ? "text-white/50" : "text-[#1A1A1A]/55"
                                }`}
                        >
                            {member.bio}
                        </p>
                    )}
                </div>

                {/* Bottom accent line, slides in on hover */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
                />
            </motion.div>
        </FadeUp>
    );
}

/* ─────────────────────────── DATA ─────────────────────────── */
const indiaTeam = [
    {
        name: "Aarthi Singh",
        role: "Senior Director – Livelihood Operations",
        bio: "Aarthi comes with more than two decades of work experience across corporate and development sectors.",
    },
    {
        name: "Alpa Chauhan",
        role: "Senior Regional Director – West",
        bio: "Alpa is a development professional with over two decades of experience.",
    },
    {
        name: "Arun Nalavadi",
        role: "Chief of Programmes",
        bio: "Arun brings more than 43 years of experience spanning corporates and development work.",
    },
    {
        name: "Dhanashri Brahme",
        role: "Chief of Programmes",
        bio: "A graduate from Tata Institute of Social Sciences with extensive programme leadership experience.",
    },
    {
        name: "Ganeish Shridhar Heghisthe",
        role: "Director – Finance",
        bio: "Chartered Accountant with 23+ years of experience in financial leadership and compliance.",
    },
    {
        name: "Harish Hariharan",
        role: "Senior Director – Digital Skilling & Livelihoods",
        bio: "B-Tech (IIT-BHU) and MBA (FMS – Delhi University), with strong experience in digital skilling initiatives.",
    },
    {
        name: "Ipe Walliaveetil Eipe",
        role: "Director – Individual Fundraising",
        bio: "Heads the retail fundraising function and helps define the strategic roadmap for individual donor engagement.",
    },
    {
        name: "K Sai Kulothungan",
        role: "Senior Leader",
        bio: "A valued member of the Magic Bus India leadership team driving programme and operational excellence.",
    },
];

const internationalTeam = {
    uk: [
        {
            name: "Tijana Milosevic",
            role: "Executive Director – Magic Bus UK",
            location: "United Kingdom",
            bio: "Brings nearly two decades of experience across corporate and non-profit sectors, including fundraising leadership, organisational strategy, donor engagement, and building high-performing teams.",
        },
        {
            name: "Caroline Gellatly",
            role: "Executive Director – Magic Bus UK",
            location: "United Kingdom",
            bio: "Background in philanthropy with previous roles at the University of Cambridge, London Business School, Prostate Cancer UK, and London's Air Ambulance Charity.",
        },
    ],
    usa: [
        {
            name: "Sarah Currid",
            role: "Executive Director – Magic Bus USA",
            location: "United States",
            bio: "Purpose-driven leader with over 10 years of experience in the social impact sector, focused on partnerships addressing education inequity, workforce development, and youth achievement.",
        },
    ],
    singapore: [
        {
            name: "Sakaya Johns Rani",
            role: "Senior Leader – Singapore",
            location: "Singapore",
            bio: "Seasoned corporate leader with over 25 years of strategic leadership experience across diverse sectors.",
        },
        {
            name: "Shweta Vaidya",
            role: "Senior Leader – Singapore",
            location: "Singapore",
            bio: "Brings 18 years of corporate experience, including extensive work with DuPont across Asia Pacific.",
        },
        {
            name: "Purnima Kamath",
            role: "Head – Partnerships & Fund Raising (Singapore)",
            location: "Singapore",
            bio: "Over 25 years of experience in marketing, sales, media, e-commerce, integrated communications, and event management across Asia Pacific.",
        },
    ],
};

const featuredLeadership = [
    {
        name: "Matthew Spacie",
        role: "Founder",
        image: "/board-of-directors/matthew-sapacie.png",
        shortBio:
            "Formerly Chief Operating Officer of Cox and Kings and Founder of Cleartrip.com, Matthew comes with an extensive experience in senior positions in the corporate sector and an intuitive understanding of the needs of children and youth in India.",
        fullBio: [
            "Formerly Chief Operating Officer of Cox and Kings and Founder of Cleartrip.com, Matthew comes with an extensive experience in senior positions in the corporate sector and an intuitive understanding of the needs of children and youth in India.",
            "In 1999, Matthew established Magic Bus, and he has grown the organization from an informal, volunteer-led activity for disadvantaged children, into a leading organization working in the area of mentoring some of India's poorest children and young people from education to livelihood.",
            "Matthew has been elected an Ashoka Fellow, a TED Fellow and more recently an ACSEP Asia Centre for Social Entrepreneurship and Philanthropy (ACSEP) Fellow.",
            "In 2007, he was awarded an MBE for services to children in the Commonwealth.",
        ],
    },
    {
        name: "Jayant Rastogi",
        role: "Global CEO",
        image: "/board-of-directors/jayant-rastogi-global-ceo-ourteamimg.webp",
        shortBio:
            "Jayant is an industry veteran with over 28 years of extensive experience in setting up and driving successful and scalable businesses for MNCs and startups.",
        fullBio: [
            "Jayant is an industry veteran with over 28 years of extensive experience in setting up and driving successful and scalable businesses for MNCs and startups.",
            "An entrepreneur for the last three years, with a strong corporate background, Jayant has diverse experience of working in the technology, distribution and enterprise segment.",
            "He has comprehensive exposure to operations and business development, both in strategy formulation as well as at the implementation level.",
            "In his recent entrepreneurial avatar, he has co-founded two ventures. Both these ventures are strongly technology led, one is a social venture focused on providing affordable healthcare for the less privileged and the other is an aggregator platform for commercial transportation.",
            "During his corporate stint, he has worked with MNCs namely Motorola Solutions (Enterprise Mobility biz) and Novell as the CEO for India and ASEAN region. He has been a part of senior management teams, both in India and in APAC, and also been a part of Global strategy teams.",
            "Jayant is a mechanical engineer, with a flair for scaling up and driving large business operations. He is an avid believer in the benefits of Yoga and plays tennis and badminton.",
        ],
    },
];

function LeadershipBioModal({ leader, isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && leader && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 12 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/65"
                            aria-label="Close bio"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative min-h-[300px] lg:min-h-full">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <h3 className="text-3xl font-extrabold text-white">{leader.name}</h3>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                                        {leader.role}
                                    </p>
                                </div>
                            </div>
                            <div className="px-5 py-5 sm:px-6 sm:py-6 lg:py-7">
                                {leader.fullBio.map((paragraph) => (
                                    <p key={paragraph} className="mb-3 text-[13px] leading-relaxed text-[#1A1A1A]/80 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function LeadershipIntroSection({ onReadMore }) {
    return (
        <section className="bg-[#F4F4F2] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* <FadeUp className="max-w-3xl mx-auto text-center">
                    <SectionTag>Our Team</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                        Meet the People Behind Magic Bus
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/65">
                        One of Magic Bus' biggest strengths is its people, who ensure they strive to fulfil the organisation's mission and vision while upholding its values. If we have been able to impact one million lives since 1999, it is primarily because of the people who have made it happen through their dedication and expertise.
                    </p>
                </FadeUp> */}

                <FadeUp className="mt-16">
                    <div className="flex items-start gap-5 mb-10">
                        <div className="bg-brand-yellow rounded-xl p-3 mt-1 shrink-0">
                            <Users className="w-6 h-6 text-brand-black" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">Leadership</h3>
                            <p className="mt-2 text-[#1A1A1A]/60 max-w-2xl leading-relaxed">
                                Magic Bus is fortunate to have some of the brightest minds from both the corporate and non-profit world working towards empowering and changing the lives of children.
                            </p>
                        </div>
                    </div>
                </FadeUp>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredLeadership.map((leader) => (
                        <FadeUp key={leader.name}>
                            <motion.article
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="group h-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                                        <h4 className="text-3xl font-bold text-white leading-tight">{leader.name}</h4>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">{leader.role}</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col min-h-[220px]">
                                    <p className="text-base leading-relaxed text-[#1A1A1A]/75">
                                        {leader.shortBio}
                                    </p>
                                    <button
                                        onClick={() => onReadMore(leader)}
                                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-red/25 px-4 py-2 text-sm font-bold text-brand-red hover:bg-brand-red/5 transition-colors"
                                    >
                                        Read More
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-black font-extrabold">
                                            +
                                        </span>
                                    </button>
                                </div>
                            </motion.article>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────── SECTIONS ─────────────────────────── */

/* HERO */
function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#1A1A1A] pt-32 pb-20">
            <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />
            <div className="pointer-events-none absolute top-20 right-0 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-brand-blue/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
                    className="mb-5"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
                        Magic Bus India Foundation
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
                >
                    Our Team
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.65, ease: EASE }}
                    className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed"
                >
                    Magic Bus brings together experienced leaders from the corporate and
                    development sectors, working towards empowering adolescents and youth
                    through education, life skills, and livelihood opportunities.
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                    className="mt-10 flex flex-wrap gap-2 md:gap-0"
                >
                    {[
                        { num: "4", label: "Global Offices" },
                        { num: "11+", label: "Senior Leaders" },
                        { num: "25+", label: "Avg. Years Experience" },
                        { num: "4", label: "Countries" },
                    ].map((s, i) => (
                        <div key={s.label} className="flex items-center gap-3 pr-6 mr-6 border-r border-white/10 last:border-0">
                            <div className="text-2xl font-extrabold text-brand-yellow">{s.num}</div>
                            <div className="text-xs text-white/40 font-medium leading-tight max-w-[80px]">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* INDIA TEAM */
function IndiaTeamSection() {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12">
                    <SectionTag>India Team</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                        Leadership in India
                    </h2>
                    <p className="mt-3 text-[#1A1A1A]/60 max-w-xl leading-relaxed">
                        Our India leadership team drives our core programmes across adolescent
                        development, livelihood skilling, and organisational excellence.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {indiaTeam.map((member, i) => (
                        <TeamCard key={member.name} member={member} index={i} variant="light" />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* REGION BLOCK */
function RegionBlock({ flag, country, members, startIndex }) {
    return (
        <div className="mb-14 last:mb-0">
            <FadeUp className="flex items-center gap-4 mb-7">
                <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{flag}</span>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-0.5">Region</p>
                        <h3 className="text-xl font-extrabold text-white">{country}</h3>
                    </div>
                </div>
                <div className="flex-1 h-px bg-white/10" />
            </FadeUp>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                {members.map((member, i) => (
                    <TeamCard
                        key={member.name}
                        member={member}
                        index={startIndex + i}
                        variant="dark"
                    />
                ))}
            </div>
        </div>
    );
}

/* INTERNATIONAL TEAM */
function InternationalTeamSection() {
    return (
        <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-magenta/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue/8 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeUp className="mb-14">
                    <div className="flex items-start gap-5">
                        <div className="bg-brand-yellow rounded-xl p-3 mt-1 shrink-0">
                            <Globe className="w-6 h-6 text-brand-black" />
                        </div>
                        <div>
                            <SectionTag>International Team</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                Our Global Leadership
                            </h2>
                            <p className="mt-3 text-white/55 max-w-2xl leading-relaxed">
                                Magic Bus has some of the brightest minds from both corporate and
                                non-profit sectors working towards empowering and changing lives of
                                children around the world.
                            </p>
                        </div>
                    </div>
                </FadeUp>

                <RegionBlock flag="🇬🇧" country="United Kingdom" members={internationalTeam.uk} startIndex={0} />
                <RegionBlock flag="🇺🇸" country="United States" members={internationalTeam.usa} startIndex={2} />
                <RegionBlock flag="🇸🇬" country="Singapore" members={internationalTeam.singapore} startIndex={3} />
            </div>
        </section>
    );
}

/* JOIN CTA */
function JoinCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <FadeUp>
                    <div className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] text-white">
                        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-red/10 blur-3xl" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-6">
                                <Users className="w-3.5 h-3.5" />
                                Work With Us
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                Join Our Team of Change-Makers
                            </h2>
                            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
                                We are always looking for passionate, skilled professionals who believe
                                in the power of education and life skills to break the cycle of poverty.
                                Come build the future with us.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/work-with-us"
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-bold text-brand-black shadow-lg transition hover:shadow-xl hover:bg-brand-yellow/90 group"
                                >
                                    View Open Positions
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/40"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ─────────────────────────── PAGE EXPORT ─────────────────────────── */
export default function OurTeam() {
    const [selectedLeader, setSelectedLeader] = useState(null);

    return (
        <Layout>
            <HeroSection />
            <LeadershipIntroSection onReadMore={setSelectedLeader} />
            <IndiaTeamSection />
            <InternationalTeamSection />
            <JoinCTA />
            <LeadershipBioModal
                leader={selectedLeader}
                isOpen={!!selectedLeader}
                onClose={() => setSelectedLeader(null)}
            />
        </Layout>
    );
}
