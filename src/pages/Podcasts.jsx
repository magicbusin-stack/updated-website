import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ExternalLink,
    Headphones,
    Mail,
    Mic,
    Play,
    PlayCircle,
    Radio,
    Sparkles,
    Youtube,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { podcastFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

/* ─────────────── helpers ─────────────── */
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

/* ─────────────── podcast data ─────────────── */
const podcasts = [
    {
        id: "yuwow",
        title: "YuWOW Ki Awaaz",
        tagline: "Employability Skills For The Nation",
        description:
            "A dynamic podcast series featuring conversations with industry leaders, career counsellors, and Magic Bus programme graduates. Each episode dives into the skills, mindsets, and real-world stories that help young people from underserved communities build sustainable livelihoods.",
        episodes: "6 Episodes",
        language: "Hindi & English",
        theme: "Employability & Youth",
        color: "#E12228",
        gradFrom: "#E12228",
        gradTo: "#C0392B",
        image: "/podcasts/yuwow.png",
        youtubeUrl: "https://www.youtube.com/@MagicBusIndia",
        spotifyUrl: "#",
        highlights: ["Career readiness", "Digital skills", "Industry insights"],
    },
    {
        id: "giving-hour",
        title: "The Giving Hour",
        tagline: "Inspiring Voices, Lasting Impact",
        description:
            "The Giving Hour brings together philanthropists, CSR leaders, and social sector changemakers for candid conversations about effective giving, NGO governance, and creating lasting impact in communities. A must-listen for anyone passionate about social development.",
        episodes: "2 Episodes",
        language: "English",
        theme: "Philanthropy & CSR",
        color: "#FFCC04",
        gradFrom: "#FFCC04",
        gradTo: "#F39C12",
        image: "/podcasts/giving-hour.png",
        youtubeUrl: "https://www.youtube.com/@MagicBusIndia",
        spotifyUrl: "#",
        highlights: ["CSR strategy", "NGO leadership", "Impact measurement"],
    },
    {
        id: "why-purpose",
        title: "Why Purpose?",
        tagline: "Purpose as Identity: Driving Social Good",
        description:
            "An introspective podcast series that explores what it means to live and lead with purpose. Featuring thought leaders, educators, and social entrepreneurs who have chosen to align their professional journeys with meaningful community impact and social good.",
        episodes: "2 Episodes",
        language: "English",
        theme: "Leadership & Purpose",
        color: "#21BDEA",
        gradFrom: "#21BDEA",
        gradTo: "#1A8FBF",
        image: "/podcasts/why-purpose.png",
        youtubeUrl: "https://www.youtube.com/@MagicBusIndia",
        spotifyUrl: "#",
        highlights: ["Purpose-driven work", "Social entrepreneurship", "Leadership"],
    },
];

/* ─────────────── SECTION: INTRO ─────────────── */
function IntroSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Left text */}
                    <div>
                        <FadeUp>
                            <SectionTag>
                                <Mic className="w-3 h-3" />
                                Podcasts of Magic Bus
                            </SectionTag>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
                                Voices of Change and Impact
                            </h2>
                            <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
                                Tune in to our insightful podcasts highlighting the power of life
                                skills, employability training, sport for development, and community
                                engagement to help young people overcome the cycle of poverty and
                                build bright futures for themselves.
                            </p>
                            <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                                {[
                                    { num: "3", label: "Podcast Series" },
                                    { num: "10+", label: "Episodes" },
                                    { num: "2", label: "Languages" },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-2xl border border-[#E0E0E0] bg-[#F9F9F6] px-4 py-4 text-center"
                                    >
                                        <p className="text-2xl font-black text-brand-red">{s.num}</p>
                                        <p className="text-xs text-[#1A1A1A]/55 font-semibold mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: decorative listen-anywhere strip */}
                    <FadeUp delay={0.15}>
                        <div className="relative rounded-3xl overflow-hidden bg-[#1A1A1A] p-8 shadow-2xl">
                            {/* Ambient glow */}
                            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-red/20 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-brand-yellow/15 blur-3xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center shrink-0">
                                        <Radio className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-extrabold text-sm">Now Streaming</p>
                                        <p className="text-white/40 text-xs">Magic Bus Podcast Network</p>
                                    </div>
                                </div>

                                {/* Waveform animation */}
                                <div className="flex items-end gap-1 h-12 mb-6">
                                    {[4, 8, 12, 6, 10, 14, 8, 5, 11, 7, 13, 9, 6, 10, 4, 12, 8, 6, 11, 7].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 rounded-full bg-brand-red"
                                            style={{ height: `${h * 3}px` }}
                                            animate={{ scaleY: [1, 1.8, 0.6, 1.4, 1] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.07,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Listen on your favourite platform — YouTube, Spotify, or wherever you get your podcasts.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { icon: Youtube, label: "YouTube", color: "#FF0000" },
                                        { icon: Headphones, label: "Spotify", color: "#1DB954" },
                                        { icon: Mic, label: "Apple Podcasts", color: "#8B5CF6" },
                                    ].map(({ icon: Icon, label, color }) => (
                                        <motion.a
                                            key={label}
                                            href="https://www.youtube.com/@MagicBusIndia"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 hover:text-white hover:border-white/20 transition-all"
                                            whileHover={{ y: -2 }}
                                        >
                                            <Icon className="w-3.5 h-3.5" style={{ color }} />
                                            {label}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}

/* ─────────────── PODCAST CARD ─────────────── */
function PodcastCard({ podcast, index }) {
    const [hovered, setHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <FadeUp delay={0.08 * index}>
            <motion.div
                className="group relative rounded-3xl overflow-hidden border border-[#E0E0E0] bg-white shadow-sm"
                whileHover={{ y: -6, boxShadow: `0 24px 64px ${podcast.color}18` }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                {/* Accent bar top */}
                <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${podcast.gradFrom}, ${podcast.gradTo})` }}
                />

                <div className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image panel */}
                    <div className="relative lg:w-[45%] h-56 lg:h-auto overflow-hidden shrink-0">
                        <motion.img
                            src={podcast.image}
                            alt={podcast.title}
                            className="w-full h-full object-cover"
                            animate={{ scale: hovered ? 1.04 : 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Play button */}
                        <motion.a
                            href={podcast.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ opacity: hovered ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                                style={{ backgroundColor: podcast.color }}
                                whileHover={{ scale: 1.1 }}
                                animate={{ scale: hovered ? [1, 1.06, 1] : 1 }}
                                transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
                            >
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </motion.div>
                        </motion.a>

                        {/* Episode count chip */}
                        <div
                            className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                            style={{ backgroundColor: `${podcast.color}CC` }}
                        >
                            {podcast.episodes}
                        </div>
                    </div>

                    {/* Content panel */}
                    <div className="flex flex-col flex-1 p-7 lg:p-10">
                        {/* Tag */}
                        <span
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 w-fit"
                            style={{ borderColor: `${podcast.color}40`, color: podcast.color, backgroundColor: `${podcast.color}0D` }}
                        >
                            <Mic className="w-3 h-3" />
                            {podcast.theme}
                        </span>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] leading-tight mb-2">
                            {podcast.title}
                        </h2>
                        <p className="text-sm font-semibold text-[#1A1A1A]/45 mb-4 italic">
                            "{podcast.tagline}"
                        </p>
                        <p className="text-sm text-[#1A1A1A]/65 leading-relaxed mb-6 flex-1">
                            {podcast.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {podcast.highlights.map((h) => (
                                <span
                                    key={h}
                                    className="rounded-full border border-[#E0E0E0] bg-[#F5F5F5] px-3 py-1 text-[11px] font-semibold text-[#1A1A1A]/60"
                                >
                                    {h}
                                </span>
                            ))}
                        </div>

                        {/* Meta row */}
                        <div className="flex items-center gap-4 text-xs text-[#1A1A1A]/40 font-semibold mb-6">
                            <span>{podcast.language}</span>
                            <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/20" />
                            <span>{podcast.episodes}</span>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3">
                            <motion.a
                                href={podcast.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-md"
                                style={{ backgroundColor: podcast.color }}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <PlayCircle className="w-4 h-4" />
                                Watch on YouTube
                            </motion.a>
                            <motion.a
                                href={podcast.spotifyUrl}
                                className="inline-flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white px-6 py-2.5 text-sm font-bold text-[#1A1A1A]/70"
                                whileHover={{ scale: 1.04, y: -1, borderColor: podcast.color, color: podcast.color }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Headphones className="w-4 h-4" />
                                Listen on Spotify
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </FadeUp>
    );
}

function PodcastsSection() {
    return (
        <section id="podcast-list" className="py-20 bg-[#F9F9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <FadeUp className="mb-14">
                    <SectionTag>
                        <Sparkles className="w-3 h-3" />
                        All Podcast Series
                    </SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight max-w-xl">
                        Three Series. One Mission.
                    </h2>
                    <p className="mt-3 text-base text-[#1A1A1A]/60 max-w-2xl">
                        Explore conversations that matter — about youth, purpose, giving, and the power of community.
                    </p>
                </FadeUp>

                <div className="space-y-8">
                    {podcasts.map((p, i) => (
                        <PodcastCard key={p.id} podcast={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────── SECTION: CONTACT ─────────────── */
function ContactSection() {
    return (
        <section id="contact-podcasts" className="py-20 bg-[#1A1A1A]">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <FadeUp>
                    <SectionTag>Let's Connect!</SectionTag>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
                        Want to collaborate, appear as a guest, or learn more about our podcast programmes? Write to us.
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

                <FadeUp delay={0.18}>
                    <div className="mt-10">
                        <motion.a
                            href="https://www.youtube.com/@MagicBusIndia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/60 hover:border-white/30 hover:text-white transition-all"
                            whileHover={{ scale: 1.04 }}
                        >
                            <Youtube className="w-4 h-4 text-[#FF0000]" />
                            Visit our YouTube Channel
                            <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

/* ─────────────── PAGE EXPORT ─────────────── */
export default function Podcasts() {
    return (
        <Layout>
            <FaqSchema faqs={podcastFAQ} />
            <HeroBanner
                badgeText="Magic Bus India Foundation"
                image="/ngo-images/1.JPG"
                title="Podcasts"
                subtitle="Voices of change and impact"
                titleGradient={false}
                description="Tune in to conversations about life skills, employability, sport for development, and community engagement — stories that inspire young people to overcome poverty and build bright futures."
                ctas={[
                    { href: "#podcast-list", label: "Explore Podcasts", variant: "primary", showArrow: true },
                    { href: "#contact-podcasts", label: "Connect With Us" },
                ]}
            />

            <IntroSection />
            <PodcastsSection />
            <FAQSection
                items={podcastFAQ}
                title="Frequently Asked Questions"
                subtitle="Everything you want to know about our podcast series."
            />
            <ContactSection />
        </Layout>
    );
}
