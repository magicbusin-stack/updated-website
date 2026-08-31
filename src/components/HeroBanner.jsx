import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FlipCoinButton from "./ui/flip-coin-button";

const EASE = [0.16, 1, 0.3, 1];

function HeroBanner({
    badgeText = "Magic Bus India Foundation",
    title,
    subtitle,
    description,
    image = "/ngo-images/3.JPG",
    ctas = [],
    showStats = false,
    stats = [],
    statsVariant = "inline",
    titleGradient = true,
    showTitleDivider = true,
    subtitleClassName = "mt-3 text-xl md:text-2xl font-semibold text-white",
    descriptionClassName = "mt-7 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed",
}) {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-[75vh] w-full flex items-end overflow-hidden bg-[#1A1A1A]">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/30 via-[#1A1A1A]/50 to-[#1A1A1A]/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/70 via-transparent to-transparent" />
            </div>

            <motion.div
                className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
                animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="pointer-events-none absolute right-1/3 bottom-1/4 h-48 w-48 rounded-full bg-brand-yellow/15 blur-3xl"
                animate={{ y: [0, -28, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            <div className="relative z-10 w-full pb-16 pt-32 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
                        className="mb-5"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
                            {badgeText}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                        className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${
                            titleGradient
                                ? "bg-gradient-to-r from-brand-red via-brand-yellow to-white bg-clip-text text-transparent"
                                : "text-white"
                        }`}
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.32, duration: 0.7, ease: EASE }}
                            className={subtitleClassName}
                        >
                            {subtitle}
                        </motion.h2>
                    )}

                    {showTitleDivider && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28, duration: 0.55, ease: EASE }}
                            className="mt-4 h-1 w-28 rounded-full bg-white/95"
                        />
                    )}

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.65, ease: EASE }}
                            className={descriptionClassName}
                        >
                            {description}
                        </motion.p>
                    )}

                    {ctas.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.58, duration: 0.6, ease: EASE }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            {ctas.map((cta, i) => {
                                const ctaClass = `inline-flex w-48 h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold transition ${
                                    cta.variant === "primary"
                                        ? "bg-brand-red text-white shadow-lg hover:bg-brand-red/90 hover:shadow-xl hover:shadow-brand-red/25"
                                        : "border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50"
                                }`;

                                if (cta.to === "/donate") {
                                    return (
                                        <FlipCoinButton key={i} onFlipComplete={() => navigate(cta.to)}>
                                            {cta.label}
                                        </FlipCoinButton>
                                    );
                                }

                                if (cta.href) {
                                    return (
                                        <a
                                            key={i}
                                            href={cta.href}
                                            target={cta.target}
                                            rel={cta.rel}
                                            className={ctaClass}
                                        >
                                            {cta.icon && <cta.icon className="w-4 h-4" />}
                                            {cta.label}
                                            {cta.showArrow && <ArrowRight className="w-4 h-4" />}
                                        </a>
                                    );
                                }

                                return (
                                    <Link key={i} to={cta.to} className={ctaClass}>
                                        {cta.icon && <cta.icon className="w-4 h-4" />}
                                        {cta.label}
                                        {cta.showArrow && <ArrowRight className="w-4 h-4" />}
                                    </Link>
                                );
                            })}
                        </motion.div>
                    )}

                    {showStats && stats.length > 0 && statsVariant === "inline" && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
                            className="mt-10 flex flex-wrap gap-2 md:gap-0"
                        >
                            {stats.map((s, i) => (
                                <div key={s.label} className="flex items-center gap-3 pr-6 mr-6 border-r border-white/10 last:border-0">
                                    <div className="text-2xl font-extrabold text-brand-yellow">{s.num ?? s.value}</div>
                                    <div className="text-xs text-white/40 font-medium leading-tight max-w-[80px]">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {showStats && stats.length > 0 && statsVariant === "boxes" && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
                            className="mt-8 grid gap-3 sm:grid-cols-3"
                        >
                            {stats.map((s) => (
                                <div key={s.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                                    <p className="text-sm uppercase tracking-[0.12em] text-white/70">{s.label}</p>
                                    <p className="mt-2 text-xl font-bold text-white">{s.num ?? s.value}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
