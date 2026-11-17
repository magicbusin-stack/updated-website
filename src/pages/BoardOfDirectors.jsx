import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import ReadMoreButton from "../components/ReadMoreButton";
import { boardMembers, boardTabs } from "../data/boardMembers";

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/10 bg-brand-yellow/25 px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-black">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            {children}
        </span>
    );
}

/* Photos are saved as /public/board-of-directors/<first-last>.jpg; initials show if a photo is ever missing */
function Photo({ member, className }) {
    const [failed, setFailed] = useState(false);
    const initials = member.name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("");
    if (failed) {
        return (
            <div className={`flex items-center justify-center bg-gradient-to-br from-[#E12228] to-[#FF6B6B] ${className}`}>
                <span className="text-5xl font-extrabold text-white/90">{initials}</span>
            </div>
        );
    }
    return (
        <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className={`object-cover ${member.name === "Matthew Spacie" ? "object-[85%_30%]" : "object-[50%_20%]"} ${className}`}
        />
    );
}

/* ----------------------------- member card ----------------------------- */
function MemberCard({ member, index, onOpen }) {
    return (
        <FadeUp delay={0.04 * (index % 4)} className="h-full">
            <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_8px_22px_rgba(0,0,0,0.06)]"
            >
                {/* photos are 500x312, so the frame uses the same ratio and never stretches them */}
                <div className="relative aspect-[500/312] overflow-hidden bg-gray-100">
                    <Photo member={member} className="h-full w-full" />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h4 className="text-lg font-bold leading-snug text-[#1A1A1A]">{member.name}</h4>
                    {member.role && <p className="mt-0.5 text-sm font-semibold uppercase tracking-wider text-brand-red">{member.role}</p>}
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">{member.bio[0]}</p>
                    <ReadMoreButton onClick={() => onOpen(member)} />
                </div>
            </motion.article>
        </FadeUp>
    );
}

/* ----------------------------- bio pop-up ----------------------------- */
function BioModal({ member, onClose }) {
    useEffect(() => {
        if (!member) return undefined;
        const onKey = (e) => e.key === "Escape" && onClose();
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [member, onClose]);

    return (
        <AnimatePresence>
            {member && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${member.name} biography`}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 14 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="sticky top-3 z-20 -mb-14 ml-auto mr-3 mt-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75"
                            aria-label="Close biography"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                            <div className="overflow-hidden rounded-2xl bg-gray-100 sm:max-w-[500px]">
                                <Photo member={member} className="aspect-[500/312] w-full" />
                            </div>
                            <h2 className="mt-5 text-2xl font-extrabold text-[#1A1A1A] sm:text-3xl">{member.name}</h2>
                            {member.role && <p className="mt-1 text-base font-semibold uppercase tracking-wider text-brand-red">{member.role}</p>}
                        </div>
                        <div className="space-y-4 px-6 pb-8 pt-5 sm:px-8">
                            {member.bio.map((para) => (
                                <p key={para} className="text-base leading-relaxed text-[#1A1A1A]/85 sm:text-lg sm:leading-8">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ----------------------------- sections ----------------------------- */
function HeroSection() {
    return (
        <HeroBanner
            badgeText="Magic Bus India Foundation"
            title="Board of Directors"
            subtitle="Transforming lives with visionary leaders"
            description="Meet the distinguished leaders who guide our mission to empower children and youth through education, life skills, and livelihood opportunities."
        />
    );
}

function BoardsSection({ onOpen }) {
    return (
        <section className="bg-[#f8f8f6] py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <FadeUp className="mx-auto max-w-4xl text-center">
                    <SectionTag>Governance</SectionTag>
                    <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl">Our Board of Directors</h2>
                    <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
                        To ensure we are achieving our mission effectively and efficiently, Magic Bus has constituted global and regional governing boards. These teams provide strategic direction, financial
                        oversight, and legal and ethical compliance, to ensure we bring about the maximum possible impact while operating in accordance with our core values.
                    </p>
                </FadeUp>

                {/* Jump links: one swipeable row on phones */}
                <nav aria-label="Boards" className="-mx-6 mt-10 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
                    {boardTabs.map((t) => (
                        <a
                            key={t.key}
                            href={`#board-${t.key}`}
                            className="shrink-0 whitespace-nowrap rounded-full border border-black/10 bg-white px-5 py-2 text-base font-bold text-[#1A1A1A] transition hover:border-black/30 hover:shadow-sm"
                        >
                            {t.title}
                            <span className="ml-2 rounded-full bg-black/5 px-2 py-0.5 text-sm">{t.members.length}</span>
                        </a>
                    ))}
                </nav>

                {boardTabs.map((t) => (
                    <div key={t.key} id={`board-${t.key}`} className="scroll-mt-28 pt-14">
                        <FadeUp>
                            <div className="mb-6 flex items-center gap-4 border-b border-black/10 pb-3">
                                <h3 className="text-2xl font-extrabold text-[#1A1A1A] sm:text-3xl">{t.title}</h3>
                                <span className="rounded-full bg-brand-yellow/40 px-3 py-1 text-sm font-bold text-brand-black">{t.members.length} members</span>
                            </div>
                        </FadeUp>
                        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {t.members.map((n, i) => {
                                const m = boardMembers[n];
                                return m ? <MemberCard key={`${t.key}-${n}`} member={m} index={i} onOpen={onOpen} /> : null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function JoinCTA() {
    return (
        <section className="bg-white py-14 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-12">
                <FadeUp>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] p-10 text-center text-white md:p-14">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
                        <div className="relative z-10">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-brand-yellow">
                                <Users className="h-4 w-4" />
                                Explore Our People
                            </div>
                            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">Meet The Team Driving Impact</h2>
                            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/75">
                                Discover the wider leadership and programme teams who work every day to support children and young people from education to livelihood.
                            </p>
                            <Link
                                to="/our-team"
                                className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-lg font-bold text-brand-black shadow-lg transition hover:bg-brand-yellow/90 hover:shadow-xl"
                            >
                                View Our Team
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

export default function BoardOfDirectors() {
    const [selected, setSelected] = useState(null);

    return (
        <Layout>
            <HeroSection />
            <BoardsSection onOpen={setSelected} />
            <JoinCTA />
            <BioModal member={selected} onClose={() => setSelected(null)} />
        </Layout>
    );
}
