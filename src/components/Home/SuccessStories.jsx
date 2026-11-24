import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";

/* "Lives We've Transformed": eight programme areas. Photos are the ones already on the site (/ngo-images/).
   Layout follows the Stitch "section element enhancement" design: a frosted caption bar over each photo with a
   coloured icon badge, the area name and a short tagline. */
const ICON = "w-5 h-5";
const svg = (children) => (
  <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const PROGRAM_AREAS = [
  {
    title: "Healthcare",
    tagline: "Holistic Wellness",
    badge: "bg-emerald-600",
    taglineColor: "text-emerald-400",
    image: "/ngo-images/1.JPG",
    icon: svg(<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />),
  },
  {
    title: "Nutrition",
    tagline: "Daily Sustenance",
    badge: "bg-amber-500",
    taglineColor: "text-amber-400",
    image: "/ngo-images/2.JPG",
    icon: svg(<path d="M19 8h2a2 2 0 012 2v1a4 4 0 01-4 4h-2m-8 6h8a4 4 0 004-4V7H3v7a4 4 0 004 4zm2-14V3m4 0v3m-8-3v3" />),
  },
  {
    title: "Education",
    tagline: "Foundational Learning",
    badge: "bg-red-600",
    taglineColor: "text-red-400",
    image: "/ngo-images/3.JPG",
    icon: svg(<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />),
  },
  {
    title: "WaSH",
    tagline: "Clean Water & Hygiene",
    badge: "bg-cyan-500",
    taglineColor: "text-cyan-400",
    image: "/ngo-images/4.JPG",
    icon: svg(<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />),
  },
  {
    title: "Livelihood",
    tagline: "Job Readiness & Skills",
    badge: "bg-rose-700",
    taglineColor: "text-rose-400",
    image: "/ngo-images/5.jpeg",
    icon: svg(<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />),
  },
  {
    title: "Digital Transformation",
    tagline: "Tech & Future Skills",
    badge: "bg-orange-600",
    taglineColor: "text-orange-400",
    image: "/ngo-images/6.jpeg",
    icon: svg(<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />),
  },
  {
    title: "Migration and Urban Habitat",
    tagline: "Safe Community Relocation",
    badge: "bg-pink-600",
    taglineColor: "text-pink-400",
    image: "/ngo-images/6.jpg",
    icon: svg(<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />),
  },
  {
    title: "Social Justice and Inclusion",
    tagline: "Gender & Sports Equity",
    badge: "bg-teal-600",
    taglineColor: "text-teal-400",
    image: "/ngo-images/8.jpg",
    icon: svg(<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />),
  },
];

function ProgramCard({ program, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative aspect-[4/3] w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl bg-slate-900 shadow-md sm:w-auto sm:shrink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(15,23,42,0.22),0_10px_10px_-5px_rgba(15,23,42,0.06)]"
    >
      <img
        src={program.image}
        alt={program.title}
        loading="lazy"
        className="h-full w-full object-cover object-center opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden="true" />

      {/* Frosted caption bar */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-2.5 backdrop-blur-md transition-colors group-hover:bg-slate-900/95">
          <div aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white shadow-sm ${program.badge}`}>
            {program.icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">{program.title}</h3>
            <p className={`mt-0.5 text-sm font-medium ${program.taglineColor}`}>{program.tagline}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ProgramAreas grid */
export default function ProgramAreas() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-24" aria-labelledby="success-stories-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: staggered scroll reveal */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.span
            variants={fadeUpSm}
            className="mb-4 inline-block rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest text-red-600"
          >
            Success Stories
          </motion.span>
          <motion.h2 variants={fadeUp} id="success-stories-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Lives We've <span className="text-brand-red">Transformed</span>
          </motion.h2>
          <motion.p variants={fadeUpSm} className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Real stories from youth who found their path, built resilience, and unlocked potential through Magic Bus Programs.
          </motion.p>
        </motion.div>

        {/* Phones: one row you swipe sideways (not one long column). Tablet: 2 across. Desktop: 4 across. */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {PROGRAM_AREAS.map((p, i) => (
            <ProgramCard key={p.title} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
