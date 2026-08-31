import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

const EASE = [0.16, 1, 0.3, 1];
const _MOTION = motion;

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-70px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function SectionTag({ children, dark = false }) {
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
                dark
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-brand-black/10 bg-brand-yellow/20 text-brand-black"
            }`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-yellow" : "bg-brand-red"}`} />
            {children}
        </span>
    );
}

const GRADIENTS = [
    ["#E12228", "#FF6B6B"],
    ["#21BDEA", "#0077B6"],
    ["#E01085", "#FF6EB4"],
    ["#B3CC35", "#6A994E"],
    ["#FFCC04", "#F4A261"],
    ["#7B2D8B", "#C77DFF"],
    ["#E12228", "#FF9A3C"],
    ["#21BDEA", "#48CAE4"]
];

function getInitials(name) {
    if (!name) return "";
    return name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

function toPhotoPath(name) {
    if (!name) return "";
    const nameMap = {
        "Deval Sanghavi": "deval",
        "Jaideep Khanna": "jaideep",
        "Rajiv Dube": "rajiv",
        "Rajeev Dubey": "rajeev",
        "Sandeep Murthy": "sandeep",
        "Shaneen Parikh": "shaneen",
        "Vivek Pandit": "vivek",
        Amit: "amit",
        Clive: "clive",
        Ivan: "ivan",
        Jayant: "jayant",
        Lindsay: "lindsay",
        Matthew: "matthew"
    };
    const fileName = nameMap[name];
    if (!fileName) return "";
    if (name === "Rajeev Dubey") {
        return `/board-of-directors/${fileName}.webp`;
    }
    return `/board-of-directors/${fileName}.jpg`;
}

function Avatar({ name, index, className = "w-20 h-20 rounded-2xl" }) {
    const [imgError, setImgError] = useState(false);
    const [from, to] = GRADIENTS[index % GRADIENTS.length];
    const photoSrc = toPhotoPath(name);

    return (
        <div className={`${className} overflow-hidden ring-1 ring-black/5 shrink-0`}>
            {!imgError ? (
                <img
                    src={photoSrc}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
                >
                    <span className="text-white font-extrabold text-xl">{getInitials(name)}</span>
                </div>
            )}
        </div>
    );
}

function BioModal({ director, isOpen, onClose }) {
    const directorIndex = detailedBios.findIndex((d) => d.name === director?.name);
    const [from, to] = GRADIENTS[directorIndex >= 0 ? directorIndex % GRADIENTS.length : 0];

    return (
        <AnimatePresence>
            {isOpen && director && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 14 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="h-32 rounded-t-3xl"
                            style={{ background: `linear-gradient(130deg, ${from}, ${to})` }}
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white transition-colors hover:bg-white/35"
                            aria-label="Close bio"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="px-6 pb-8 sm:px-8 -mt-14">
                            <Avatar name={director.name} index={Math.max(0, directorIndex)} className="w-24 h-24 rounded-2xl shadow-lg" />
                            <h2 className="mt-4 text-2xl font-bold text-[#1A1A1A]">{director.name}</h2>
                            {director.role && <p className="text-brand-red font-medium mb-6">{director.role}</p>}
                            <div className="prose prose-gray max-w-none">{director.bio}</div>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={onClose}
                                className="mt-8 w-full rounded-xl bg-[#1A1A1A] px-6 py-3 font-semibold text-white transition-colors hover:bg-black"
                            >
                                Close
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function DirectorFeatureCard({ director, index, onReadMore }) {
    const [from, to] = GRADIENTS[index % GRADIENTS.length];

    return (
        <FadeUp delay={0.05 * (index % 5)}>
            <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
                />
                <div className="flex flex-col gap-5 sm:flex-row">
                    <Avatar name={director.name} index={index} />
                    <div className="min-w-0">
                        <h3 className="text-2xl font-bold leading-tight text-[#1A1A1A]">{director.name}</h3>
                        {director.role && <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">{director.role}</p>}
                        <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{director.shortBio}</p>
                        <button
                            onClick={() => onReadMore(director)}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] transition-colors hover:text-brand-red"
                        >
                            Read More
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.article>
        </FadeUp>
    );
}

function CompactDirectorCard({ name, index, onReadMore }) {
    const director = detailedBios.find((d) => d.name === name);

    return (
        <FadeUp delay={0.05 * (index % 4)}>
            <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
            >
                <div className="flex items-center gap-3">
                    <Avatar name={name} index={index} className="h-14 w-14 rounded-xl" />
                    <div className="min-w-0">
                        <h4 className="truncate text-sm font-bold text-[#1A1A1A]">{name}</h4>
                        {director?.role && <p className="truncate text-xs font-medium text-gray-500">{director.role}</p>}
                    </div>
                </div>
                {director && (
                    <button
                        onClick={() => onReadMore(director)}
                        className="mt-3 text-xs font-semibold text-brand-red transition-colors hover:text-brand-red/75"
                    >
                        Read More
                    </button>
                )}
            </motion.div>
        </FadeUp>
    );
}

const detailedBios = [
    {
        name: "Deval Sanghavi",
        role: "Founder, Dasra",
        shortBio: "Before founding Dasra, Deval was an investment banker at Morgan Stanley, which has equipped him to develop a unique philanthropic investment model that brings rigor and discipline to the sector.",
        bio: (
            <>
                <p className="mb-4">
                    Before founding Dasra, Deval was an investment banker at Morgan Stanley, which has equipped him to develop a unique philanthropic investment model that brings rigor and discipline to the sector. Deval's experience in the social sector enabled him to play a vital role in the inception of the Times of India Social-Impact Awards 2011.
                </p>
                <p className="mb-4">
                    He is engaged with both philanthropists and social entrepreneurs and has spoken about this unique investment model at leading events such as the Global Philanthropy Forum, Unconvention and Maidan Summit, among others. He has been instrumental in building partnerships with top leaders from the sector such as Omidyar Network (ON), Vodafone Foundation and ICICI Foundation to name a few.
                </p>
                <p>
                    He is a graduate of the University of Texas at Austin, completing his Bachelor of Business Administration with a dual Honours Degree in Business and Finance and a minor in Asian Studies.
                </p>
            </>
        )
    },
    {
        name: "Jaideep Khanna",
        role: "CEO, Barclays Asia Pacific",
        shortBio: "Jaideep Khanna is the CEO, Barclays Asia Pacific and Country CEO for India. He is Chair of the Asia Pacific Executive Forum and a member of the global Investment Bank Management Team.",
        bio: (
            <>
                <p className="mb-4">
                    Jaideep Khanna is the CEO, Barclays Asia Pacific and Country CEO for India. He is Chair of the Asia Pacific Executive Forum, a member of the global Investment Bank Management Team, and a Board member of Barclays global Service Centre.
                </p>
                <p className="mb-4">
                    Jaideep is responsible for driving the strategic priorities of Barclays Asia Pacific franchise and was instrumental in building the Barclays franchise in India. He has extensive experience in Banking and Financial Services, having previously worked for Deutsche Bank, ABN AMRO Securities and ANZ Grindlays from 1991-2001.
                </p>
                <p>
                    Jaideep holds a Master of Science degree in Applied Physics and a Bachelor of Science degree in Applied Mathematics from the School of Engineering and Applied Sciences, Harvard University.
                </p>
            </>
        )
    },
    {
        name: "Rajiv Dube",
        role: "Industry Veteran",
        shortBio: "Mr. Rajiv Dube is an Indian industry veteran with nearly 36 years of multi sector experience, having served at the highest echelon of two Indian conglomerates - Tata and Aditya Birla.",
        bio: (
            <>
                <p className="mb-4">
                    Mr. Rajiv Dube is an Indian industry veteran with nearly 36 years of multi sector experience, having served at the highest echelon of two Indian conglomerates - Tata and Aditya Birla. He began his career on the shop floor of Tata Motors and rose to be President of its car business before joining the group board of the Aditya Birla group as an executive director, on which he remained for nearly nine years. He has served on several other Indian and foreign boards in various capacities over 21 years and brings deep insights in corporate governance, management and transformation of businesses.
                </p>
                <p>
                    An avid sustainability champion, he was an alternate Council Member of the World Business Council for Sustainable Development (WBCSD) Geneva and has been active on several industry bodies. Currently, Mr. Dube is an advisory board member and professor of practice at the Deakin Business School, Melbourne and a senior advisor to firms in India and Australia.
                </p>
            </>
        )
    },
    {
        name: "Rajeev Dubey",
        role: "Chairman, Magic Bus Foundation",
        shortBio: "Rajeev Dubey has recently retired from the Chairmanship of the Mahindra First Choice Wheels, Mahindra Insurance Brokers and Mahindra Steel Service Centre.",
        bio: (
            <>
                <p className="mb-4">
                    Rajeev Dubey has recently retired from the Chairmanship of the Mahindra First Choice Wheels, Mahindra Insurance Brokers and Mahindra Steel Service Centre, and from the governing Body of the International Labour Organisation (ILO), Geneva. He was also the Employers Vice President of the Asia Region.
                </p>
                <p className="mb-4">
                    He joined Mahindra in 2004 after a career spanning 29 years with the Tata Group, with Tata Steel, and the next 7 years CEO first of Tata Metaliks and then of Rallis India. He is currently Chairman of the Magic Bus Foundation, India and serves on the Board of Governors of the Scindia School Gwalior, the Lal Bahadur Shastri Institute of Management New Delhi, XISS Ranchi, the IILM Business School, and the Council of Global Advisors (Strategy) of the Yale School of Management, USA and also serves on the board of the Indian Inspired Leadership (SOIL), the Advisory Mentoring Board of the Manav Rachna Educational Institutions and the strategic he is also the Honorary Director General.
                </p>
                <p className="mb-4">
                    He studied Economics at St. Stephens College, Delhi University and did his MBA at the Yale School of Management, USA.
                </p>
                <p>
                    Management has also served as President of the of the Employers' Federation of India (EFI) and served as the National Human Resource Development Network (NHRDN), and was a Member of the Steering Committee and National Executive Council for many years of Federation of the Indian Chambers of Commerce and Industry (FICCI).
                </p>
            </>
        )
    },
    {
        name: "Sandeep Murthy",
        role: "Board Member",
        shortBio: "Sandeep Murthy brings extensive experience in technology and business development to the Magic Bus board.",
        bio: (
            <>
                <p className="mb-4">
                    Sandeep Murthy is a distinguished business leader with significant experience in technology and business development. His expertise spans across multiple sectors including telecommunications, media, and entertainment.
                </p>
                <p>
                    He has held senior leadership positions in various multinational corporations and brings a wealth of knowledge in strategic planning and organizational growth.
                </p>
            </>
        )
    },
    {
        name: "Shaneen Parikh",
        role: "Board Member",
        shortBio: "Shaneen Parikh is a prominent business leader known for her contributions to corporate governance and leadership.",
        bio: (
            <>
                <p className="mb-4">
                    Shaneen Parikh is a respected business leader with extensive experience in corporate governance and strategic leadership. She has served on various boards and advisory committees.
                </p>
                <p>
                    Her expertise in business strategy and her commitment to social causes make her a valuable member of the Magic Bus Foundation board.
                </p>
            </>
        )
    },
    {
        name: "Vivek Pandit",
        role: "Board Member",
        shortBio: "Vivek Pandit is a senior business executive with decades of experience in corporate leadership and operations.",
        bio: (
            <>
                <p className="mb-4">
                    Vivek Pandit is a seasoned business leader with extensive experience in corporate operations and management. He has led large organizations and brought significant value through his strategic insights.
                </p>
                <p>
                    His commitment to societal impact and his business acumen make him an important contributor to the Magic Bus Foundation's mission.
                </p>
            </>
        )
    },
    {
        name: "Amit",
        role: "Global Board Member",
        shortBio: "Amit brings global business perspective and strategic vision to the Magic Bus Global Board.",
        bio: (
            <>
                <p className="mb-4">
                    Amit is a global business leader with extensive experience across international markets. His expertise in scaling organizations and driving growth has been instrumental in various ventures.
                </p>
                <p>
                    He is passionate about social impact and contributes significantly to Magic Bus's global initiatives.
                </p>
            </>
        )
    },
    {
        name: "Clive",
        role: "Global Board Member",
        shortBio: "Clive brings international development expertise and cross-cultural leadership to the board.",
        bio: (
            <>
                <p className="mb-4">
                    Clive has significant experience in international development and cross-cultural leadership. His work has impacted communities across multiple continents.
                </p>
                <p>
                    His dedication to creating positive change aligns perfectly with Magic Bus's mission of transforming lives.
                </p>
            </>
        )
    },
    {
        name: "Ivan",
        role: "Global Board Member",
        shortBio: "Ivan contributes deep expertise in corporate strategy and global operations to the Magic Bus board.",
        bio: (
            <>
                <p className="mb-4">
                    Ivan is a strategic leader with extensive experience in global operations and corporate development. He has worked with leading organizations across various industries.
                </p>
                <p>
                    His strategic thinking and operational expertise help guide Magic Bus's global expansion efforts.
                </p>
            </>
        )
    },
    {
        name: "Jayant",
        role: "Global Board Member",
        shortBio: "Jayant brings strong financial acumen and business leadership experience to the board.",
        bio: (
            <>
                <p className="mb-4">
                    Jayant is a distinguished business leader with strong expertise in finance and business strategy. He has held senior positions in major corporations.
                </p>
                <p>
                    His financial wisdom and business insights contribute greatly to Magic Bus's sustainable growth.
                </p>
            </>
        )
    },
    {
        name: "Lindsay",
        role: "Global Board Member",
        shortBio: "Lindsay contributes expertise in social enterprise and nonprofit leadership to the Magic Bus board.",
        bio: (
            <>
                <p className="mb-4">
                    Lindsay has extensive experience in the nonprofit and social enterprise sector. Her work has focused on creating sustainable impact in underserved communities.
                </p>
                <p>
                    Her passion for social justice and organizational leadership makes her an invaluable member of the Global Board.
                </p>
            </>
        )
    },
    {
        name: "Matthew",
        role: "Global Board Member",
        shortBio: "Matthew brings international business experience and strategic vision to the Magic Bus Global Board.",
        bio: (
            <>
                <p className="mb-4">
                    Matthew is a globally-minded business leader with experience across multiple continents. His expertise in strategic planning and international operations is highly valued.
                </p>
                <p>
                    He is committed to supporting Magic Bus's mission and brings innovative ideas to the board's discussions.
                </p>
            </>
        )
    }
];

const boards = {
    // india: ["Deval Sanghavi", "Jaideep Khanna", "Rajiv Dube", "Rajeev Dubey", "Sandeep Murthy", "Shaneen Parikh", "Vivek Pandit"],
    // global: [],
    usa: [],
    uk: [],
    singapore: [],
    germany: []
};

function HeroSection({ totalMembers, totalRegions }) {
    return (
        <HeroBanner
            badgeText="Magic Bus India Foundation"
            title="Board of Directors"
            subtitle="Transforming lives with visionary leaders"
            description="Meet the distinguished leaders who guide our mission to empower children and youth through education, life skills, and livelihood opportunities."
        />
    );
}

function IntroductionSection({ onReadMore }) {
    return (
        <section className="bg-[#f8f8f6] py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[320px_1fr] lg:gap-12 lg:px-12">
                <FadeUp className="h-fit rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                    <SectionTag>Introduction</SectionTag>
                    <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A]">
                        Our Board of Directors
                    </h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                        To ensure we achieve our mission effectively and responsibly, Magic Bus has formed global and regional governing boards. The governing boards offer strategic direction, financial oversight, and legal and ethical governance, ensuring that our efforts have maximum impact while remaining rooted in our core values.
                    </p>
                </FadeUp>
                <div className="space-y-5">
                    {detailedBios.map((director, index) => (
                        <DirectorFeatureCard key={director.name} director={director} index={index} onReadMore={onReadMore} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RegionalBoardsSection({ selectedBoard, onSelectBoard, onReadMore }) {
    const boardTabs = [
        // { key: "india", title: "India Board" },
        // { key: "global", title: "Global Board" },
        { key: "usa", title: "USA Board" },
        { key: "uk", title: "UK Board" },
        { key: "singapore", title: "Singapore Board" },
        { key: "germany", title: "Germany Board" }
    ];
    const members = boards[selectedBoard] || [];

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <FadeUp className="mb-8">
                    <SectionTag>Regional Governance</SectionTag>
                    <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] md:text-4xl">Our Regional Boards</h2>
                </FadeUp>
                <FadeUp delay={0.1} className="rounded-3xl border border-black/5 bg-[#f8f8f6] p-4 sm:p-6">
                    <div className="mb-6 flex flex-wrap gap-2">
                        {boardTabs.map((tab) => {
                            const isActive = tab.key === selectedBoard;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => onSelectBoard(tab.key)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                        isActive
                                            ? "bg-[#1A1A1A] text-white shadow-md"
                                            : "bg-white text-[#1A1A1A] border border-black/10 hover:border-black/25"
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>
                    {members.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {members.map((name, i) => (
                                <CompactDirectorCard key={`${selectedBoard}-${name}`} name={name} index={i} onReadMore={onReadMore} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
                            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gray-400">{boardTabs.find((t) => t.key === selectedBoard)?.title}</p>
                            <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">No board members listed yet.</p>
                        </div>
                    )}
                </FadeUp>
            </div>
        </section>
    );
}

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
                                Explore Our People
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                Meet The Team Driving Impact
                            </h2>
                            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
                                Discover the wider leadership and programme teams who work every day
                                to support children and young people from education to livelihood.
                            </p>

                            <div className="flex items-center justify-center">
                                <Link
                                    to="/our-team"
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 font-bold text-brand-black shadow-lg transition hover:shadow-xl hover:bg-brand-yellow/90 group"
                                >
                                    View Our Team
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

export default function BoardOfDirectors() {
    const [selectedDirector, setSelectedDirector] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState("india");

    const totalRegions = useMemo(() => Object.keys(boards).length, []);
    const totalMembers = useMemo(() => detailedBios.length, []);

    return (
        <Layout>
            <HeroSection totalMembers={totalMembers} totalRegions={totalRegions} />
            <IntroductionSection onReadMore={setSelectedDirector} />
            <RegionalBoardsSection
                selectedBoard={selectedBoard}
                onSelectBoard={setSelectedBoard}
                onReadMore={setSelectedDirector}
            />
            <JoinCTA />
            <BioModal director={selectedDirector} isOpen={!!selectedDirector} onClose={() => setSelectedDirector(null)} />
        </Layout>
    );
}
