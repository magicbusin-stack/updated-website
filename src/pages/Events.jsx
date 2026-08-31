import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    Clock,
    ExternalLink,
    Mail,
    MapPin,
    Search,
    Tag,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

/* ──────────────────── helpers ──────────────────── */
const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay }}
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

/* ──────────────────── data ──────────────────── */
const ALL_CATEGORIES = ["All", "Technology", "Livelihood", "Youth", "NGO", "AI"];

const events = [
    {
        id: 1,
        date: "29 Dec, 2025",
        category: "AI",
        tag: "Technology",
        title: "How AI Can Deepen Human Connection In NGO Communications",
        excerpt:
            "In the social sector, communication is more than an operational tool. It is a bridge between mission and impact. Explore how AI is reshaping how NGOs tell their stories.",
        image: "/ngo-images/ai2.jpg",
        readTime: "6 min read",
        featured: true,
    },
    {
        id: 2,
        date: "02 Dec, 2025",
        category: "Livelihood",
        tag: "Youth",
        title: "Coexisting For The Future Of Work",
        excerpt:
            "On a warm morning in a small town in Maharashtra, 21-year-old Anjali walks home with a sense of purpose she hadn't known before joining the FutureX programme.",
        image: "/ngo-images/6.jpeg",
        readTime: "5 min read",
        featured: true,
    },
    {
        id: 3,
        date: "15 Nov, 2025",
        category: "NGO",
        tag: "NGO",
        title: "Capturing the Magical Moments — Annual Celebration 2025",
        excerpt:
            "Every year Magic Bus brings together young people, programme graduates, and supporters to celebrate transformation. This year's event was nothing short of extraordinary.",
        image: "/ngo-images/1.JPG",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 4,
        date: "08 Nov, 2025",
        category: "Youth",
        tag: "Youth",
        title: "Youth Leadership Summit: Building Tomorrow's Changemakers",
        excerpt:
            "Over 500 young people from underserved communities came together for a day of workshops, keynotes, and peer learning at our annual Youth Leadership Summit.",
        image: "/ngo-images/5.jpeg",
        readTime: "7 min read",
        featured: false,
    },
    {
        id: 5,
        date: "22 Oct, 2025",
        category: "Technology",
        tag: "Technology",
        title: "Digital Skills for the Next Billion: Our AI Programme Launch",
        excerpt:
            "Magic Bus India Foundation officially launched its AI and digital skills programme, making it one of the first NGOs to integrate artificial intelligence into youth skilling.",
        image: "/ngo-images/Ai.jpeg",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 6,
        date: "10 Oct, 2025",
        category: "Livelihood",
        tag: "Livelihood",
        title: "From Classroom to Career: Stories of Impact from FutureX",
        excerpt:
            "Meet the young people who transformed their lives through the FutureX blended learning programme — and the mentors who made it possible.",
        image: "/ngo-images/6.jpg",
        readTime: "8 min read",
        featured: false,
    },
];

const galleryImages = [
    { src: "/ngo-images/1.JPG",   alt: "Annual event 2025" },
    { src: "/ngo-images/2.JPG",   alt: "Youth participants" },
    { src: "/ngo-images/3.JPG",   alt: "Training session" },
    { src: "/ngo-images/4.JPG",   alt: "Community engagement" },
    { src: "/ngo-images/5.jpeg",  alt: "Leadership summit" },
    { src: "/ngo-images/6.jpeg",  alt: "FutureX programme" },
];

/* ──────────────────── SECTION: INTRO + GALLERY ──────────────────── */
function IntroSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left text */}
                    <div>
                        <FadeUp>
                            <SectionTag>Explore The Latest Events</SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Witness the Transformative Power of Our Programmes
                            </h2>
                            <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Learn more about events of Magic Bus spreading impact in the lives
                                of underserved communities and helping young people thrive with
                                confidence.
                            </p>
                            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
                                See the faces behind the impact, witness the transformative power
                                of our programmes and explore visual stories of hope and resilience.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {[
                                    "Youth skilling & employability",
                                    "AI & digital literacy",
                                    "Community celebrations",
                                    "Leadership summits",
                                ].map((tag, i) => (
                                    <FadeUp key={tag} delay={0.07 * i}>
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F5] border border-[#E0E0E0] px-3 py-1.5 text-xs font-semibold text-[#1A1A1A]/70">
                                            <Tag className="w-3 h-3 text-brand-red" />
                                            {tag}
                                        </span>
                                    </FadeUp>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: interactive image gallery */}
                    <FadeUp delay={0.15}>
                        <div className="relative">
                            {/* Main image */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
                                key={active}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: EASE }}
                            >
                                <img
                                    src={galleryImages[active].src}
                                    alt={galleryImages[active].alt}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                                        Image {active + 1} of {galleryImages.length}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Thumbnail strip */}
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2 mt-3">
                                {galleryImages.map((img, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 ${
                                            active === i
                                                ? "border-brand-red shadow-md"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
                                ))}
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-brand-red text-white rounded-2xl px-4 py-3 shadow-xl"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-xl font-black leading-none">6+</p>
                                <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                                    Photo Stories
                                </p>
                            </motion.div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ──────────────────── SECTION: EVENT CARDS ──────────────────── */
function EventCard({ event, index, featured = false }) {
    return (
        <FadeUp delay={0.06 * index}>
            <motion.article
                className={`group relative bg-white rounded-2xl overflow-hidden border border-[#E0E0E0] shadow-sm flex flex-col h-full ${
                    featured ? "lg:flex-row" : ""
                }`}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
                {/* Image */}
                <div
                    className={`relative overflow-hidden shrink-0 ${
                        featured ? "lg:w-[45%] h-56 lg:h-auto" : "h-52"
                    }`}
                >
                    <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    />
                    {/* Category chip */}
                    <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {event.category}
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[#1A1A1A]/45 text-xs font-semibold mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            Posted on {event.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {event.readTime}
                        </span>
                    </div>

                    <h3
                        className={`font-extrabold text-[#1A1A1A] leading-snug group-hover:text-brand-red transition-colors duration-200 ${
                            featured ? "text-xl md:text-2xl" : "text-base"
                        }`}
                    >
                        {event.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#1A1A1A]/60 leading-relaxed flex-1">
                        {event.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#E0E0E0] bg-[#F5F5F5] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50">
                            <Tag className="w-3 h-3" />
                            {event.tag}
                        </span>
                        <motion.button
                            className="flex items-center gap-1.5 text-brand-red text-xs font-bold"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                    </div>
                </div>
            </motion.article>
        </FadeUp>
    );
}

function EventsSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = events.filter((e) => {
        const matchCat = activeCategory === "All" || e.category === activeCategory || e.tag === activeCategory;
        const matchSearch =
            !search ||
            e.title.toLowerCase().includes(search.toLowerCase()) ||
            e.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = filtered.filter((e) => e.featured);
    const rest = filtered.filter((e) => !e.featured);

    return (
        <section className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-12">
                    <SectionTag>Events & Stories</SectionTag>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight max-w-lg">
                            All Events at Magic Bus
                        </h2>
                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/40" />
                            <input
                                type="text"
                                placeholder="Search events…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E0E0E0] bg-white text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-brand-red transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category filter pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {ALL_CATEGORIES.map((cat) => (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                                    activeCategory === cat
                                        ? "bg-brand-red border-brand-red text-white shadow-md"
                                        : "bg-white border-[#E0E0E0] text-[#1A1A1A]/60 hover:border-brand-red hover:text-brand-red"
                                }`}
                                whileTap={{ scale: 0.96 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </FadeUp>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + search}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: EASE }}
                    >
                        {filtered.length === 0 ? (
                            <div className="text-center py-24 text-[#1A1A1A]/40 font-semibold">
                                No events found matching your search.
                            </div>
                        ) : (
                            <>
                                {/* Featured — full-width horizontal cards */}
                                {featured.length > 0 && (
                                    <div className="space-y-5 mb-8">
                                        {featured.map((e, i) => (
                                            <EventCard key={e.id} event={e} index={i} featured />
                                        ))}
                                    </div>
                                )}

                                {/* Rest — 3-col grid */}
                                {rest.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {rest.map((e, i) => (
                                            <EventCard key={e.id} event={e} index={i} />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

/* ──────────────────── SECTION: CONTACT ──────────────────── */
function ContactSection() {
    return (
        <section id="contact-events" className="py-20 bg-[#1A1A1A]">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <FadeUp>
                    <SectionTag>Connect With Us</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                        Stay Updated on Magic Bus Events
                    </h2>
                    <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
                        Have a question about our events or want to get involved? Reach out
                        and we'll get back to you.
                    </p>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <motion.a
                        href="mailto:info@magicbusindia.org"
                        className="group inline-flex items-center gap-4 rounded-2xl border border-brand-yellow/20 bg-white/5 px-8 py-5 max-w-md w-full mx-auto transition-all"
                        whileHover={{ scale: 1.02, borderColor: "rgba(255,204,4,0.5)", backgroundColor: "rgba(255,255,255,0.08)" }}
                        transition={{ type: "spring", stiffness: 250, damping: 22 }}
                    >
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Email ID</p>
                            <p className="text-white font-bold">info@magicbusindia.org</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                </FadeUp>

                {/* Stats strip */}
                <FadeUp delay={0.18}>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 mt-14 max-w-lg mx-auto">
                        {[
                            { num: "25+", label: "Years of events" },
                            { num: "100+", label: "Events annually" },
                            { num: "1M+", label: "Lives impacted" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-3xl font-black text-brand-yellow">{s.num}</p>
                                <p className="text-white/40 text-xs font-semibold mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ──────────────────── PAGE EXPORT ──────────────────── */
export default function Events() {
    return (
        <Layout>
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/1.JPG"
                title="Events at Magic Bus"
                subtitle="Stay updated with latest events"
                titleGradient={false}
                description="Capturing the magical moments. Explore events, stories and programmes that are transforming the lives of young people across India."
                ctas={[
                    { href: "#events-cards", label: "Explore Events", variant: "primary", showArrow: true },
                    { href: "#contact-events", label: "Connect With Us" },
                ]}
            />

            <IntroSection />

            <div id="events-cards">
                <EventsSection />
            </div>

            <ContactSection />
        </Layout>
    );
}
