import React from "react";

/* Key pillars of the Entrepreneurship Development Programme.
   Hard-coded version of the supplied "Key Pillars of EDP" design (replaces the old flat PNG).
   The arch photo at the bottom is a real programme photo from /public. */

const PILLARS = [
    {
        step: "Step 01",
        title: ["Life Skills", "Training"],
        text: "Foundational mindset, resilience & communication.",
        hover: "group-hover:text-amber-600",
        pin: "from-amber-500 to-amber-400",
        outer: "from-amber-100 via-orange-50 to-amber-200/50 text-amber-500",
        dashed: "border-amber-300/80",
        spin: "animate-[spin_18s_linear_infinite]",
        inner: "from-amber-500 to-orange-400 shadow-orange-500/30",
        lift: "lg:translate-y-0",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        ),
    },
    {
        step: "Step 02",
        title: ["Entrepreneurship", "Skill Training"],
        text: "Technical expertise, venture ideation & finance.",
        hover: "group-hover:text-sky-600",
        pin: "from-sky-500 to-sky-400",
        outer: "from-sky-100 via-sky-50 to-blue-200/50 text-sky-500",
        dashed: "border-sky-300/80",
        spin: "animate-[spin_22s_linear_infinite_reverse]",
        inner: "from-sky-500 to-blue-500 shadow-sky-500/30",
        lift: "lg:-translate-y-8",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
        ),
    },
    {
        step: "Step 03 • Core",
        core: true,
        title: ["Market", "Study"],
        text: "Customer validation, competitive scan & viability.",
        hover: "group-hover:text-rose-600",
        pin: "from-rose-500 to-pink-500",
        outer: "from-pink-100 via-rose-50 to-pink-200 text-rose-500",
        dashed: "border-rose-300",
        spin: "animate-pulse",
        inner: "from-rose-500 via-pink-500 to-rose-600 shadow-rose-500/35",
        lift: "lg:-translate-y-16",
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </>
        ),
    },
    {
        step: "Step 04",
        title: ["Business", "Plan Creation"],
        text: "Financial projections, operations & unit economics.",
        hover: "group-hover:text-purple-600",
        pin: "from-purple-500 to-fuchsia-500",
        outer: "from-purple-100 via-purple-50 to-fuchsia-100/50 text-purple-500",
        dashed: "border-purple-300/80",
        spin: "animate-[spin_20s_linear_infinite]",
        inner: "from-purple-600 to-fuchsia-500 shadow-purple-500/30",
        lift: "lg:-translate-y-8",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        ),
    },
    {
        step: "Step 05",
        title: ["Enterprise", "Setup"],
        text: "Legal compliance, physical/online store & scaling.",
        hover: "group-hover:text-teal-600",
        pin: "from-teal-500 to-cyan-500",
        outer: "from-teal-100 via-emerald-50 to-teal-200/50 text-teal-500",
        dashed: "border-teal-300/80",
        spin: "animate-[spin_24s_linear_infinite_reverse]",
        inner: "from-teal-500 to-cyan-500 shadow-teal-500/30",
        lift: "lg:translate-y-0",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009 9.35c.66 0 1.282-.213 1.792-.578a3 3 0 003.416 0c.51.365 1.132.578 1.792.578a2.993 2.993 0 002.25-.965 3.001 3.001 0 003.75.615M3.75 9.35L5.25 4.5h13.5l1.5 4.85" />
        ),
    },
];

export default function EdpPillars() {
    return (
        <section
            aria-label="Key pillars of the Entrepreneurship Development Programme"
            className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl sm:p-10 lg:p-12"
        >
            {/* Soft background glows */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/40 blur-3xl" />

            <div className="relative mx-auto mb-12 max-w-2xl text-center">
                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Key Pillars of{" "}
                    <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-teal-600 bg-clip-text text-transparent">EDP</span>
                </h3>
                <p className="mt-3 text-lg text-slate-600">
                    Comprehensive journey enabling aspiring entrepreneurs from foundation to enterprise launch.
                </p>
            </div>

            <div className="relative pb-2 pt-6 lg:pt-20">
                <div className="relative z-20 grid grid-cols-1 items-end gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                    {PILLARS.map((p) => (
                        <div
                            key={p.step}
                            className={`group flex cursor-default flex-col items-center text-center transition-transform duration-300 ${p.lift}`}
                        >
                            <span className={`mb-1 text-sm font-bold uppercase tracking-wider ${p.core ? "text-rose-600" : "text-slate-500"}`}>
                                {p.step}
                            </span>
                            <h4 className={`flex min-h-[3.5rem] items-center justify-center text-xl font-bold leading-snug text-slate-900 transition-colors ${p.hover}`}>
                                <span>
                                    {p.title[0]}
                                    <br className="hidden lg:inline" /> {p.title[1]}
                                </span>
                            </h4>

                            {/* Connector pin */}
                            <div className={`my-3 h-6 w-1.5 rounded-full bg-gradient-to-b transition-all duration-300 group-hover:h-9 ${p.pin}`} />

                            {/* Concentric ring icon */}
                            <div
                                className={`relative flex items-center justify-center rounded-full bg-gradient-to-br p-2 shadow-inner transition-all duration-300 group-hover:scale-[1.08] ${p.outer} ${
                                    p.core ? "h-32 w-32 sm:h-36 sm:w-36" : "h-28 w-28 sm:h-32 sm:w-32"
                                }`}
                            >
                                <div className={`absolute inset-1 rounded-full border-2 ${p.core ? "" : "border-dashed"} ${p.dashed} ${p.spin}`} />
                                <div
                                    className={`flex items-center justify-center rounded-full bg-gradient-to-tr text-white shadow-lg transition-transform duration-300 group-hover:scale-105 ${p.inner} ${
                                        p.core ? "h-24 w-24 sm:h-[6.5rem] sm:w-[6.5rem]" : "h-20 w-20"
                                    }`}
                                >
                                    <svg className={p.core ? "h-11 w-11" : "h-9 w-9"} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                                        {p.icon}
                                    </svg>
                                </div>
                            </div>

                            <p className="mt-4 max-w-[220px] text-base leading-relaxed text-slate-700">{p.text}</p>
                        </div>
                    ))}
                </div>

                {/* Arch with photo */}
                <div className="relative mt-12 flex flex-col items-center sm:mt-16">
                    <div className="relative h-60 w-full max-w-3xl overflow-hidden rounded-t-[180px] border-t-4 border-amber-400 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 shadow-2xl sm:h-80 sm:rounded-t-[260px]">
                        <img loading="lazy" decoding="async"
                            src="/edp-about.jpg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full object-cover"
                            style={{ objectPosition: "75% 45%" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center border-t border-amber-500/40 bg-black/90 px-6 py-4 text-center">
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 shrink-0 rounded-full bg-amber-400" />
                                <h4 className="text-lg font-bold tracking-wide text-amber-400 sm:text-2xl">Entrepreneurship Skilling and Mentoring</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
