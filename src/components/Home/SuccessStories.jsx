import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";

/* === PROGRAM AREAS (images already in /ngo-images/) === */
const PROGRAM_AREAS = [
  { title: "Healthcare", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>), bgColor: "bg-emerald-600", image: "/ngo-images/1.JPG" },
  { title: "Nutrition", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>), bgColor: "bg-amber-500", image: "/ngo-images/2.JPG" },
  { title: "Education", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>), bgColor: "bg-red-600", image: "/ngo-images/3.JPG" },
  { title: "WaSH", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>), bgColor: "bg-cyan-500", image: "/ngo-images/4.JPG" },
  { title: "Livelihood", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>), bgColor: "bg-rose-700", image: "/ngo-images/5.jpeg" },
  { title: "Digital Transformation", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>), bgColor: "bg-orange-600", image: "/ngo-images/6.jpeg" },
  { title: "Migration and Urban Habitat", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>), bgColor: "bg-pink-600", image: "/ngo-images/6.jpg" },
  { title: "Social Justice and Inclusion", icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>), bgColor: "bg-teal-600", image: "/ngo-images/8.jpg" },
];

function ProgramCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
      aria-label={program.title}
    >
      {/* Background image — CSS transform for GPU compositing */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-400 ease-out group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${program.image})` }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay — fades out on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-400 ease-out group-hover:opacity-20"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
        aria-hidden="true"
      />

      {/* Colored overlay — uses scale instead of width/height for GPU performance */}
      <div
        className={`${program.bgColor} absolute inset-0 rounded-lg opacity-0 scale-0 origin-bottom-left will-change-[transform,opacity] transition-all duration-400 ease-out group-hover:opacity-90 group-hover:scale-100`}
        style={{ zIndex: 5 }}
        aria-hidden="true"
      />

      {/* PRE-HOVER: bottom bar with icon + title */}
      <div
        className="absolute left-0 right-0 bottom-0 z-30 transition-all duration-300 ease-out translate-y-0 opacity-100 group-hover:translate-y-4 group-hover:opacity-0"
      >
        <div className="flex items-center h-9 sm:h-16 w-full">
          <div
            className={`${program.bgColor} w-9 h-9 sm:w-16 sm:h-16 flex items-center justify-center rounded-bl-lg shrink-0`}
            style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.18)" }}
          >
            <div className="text-white scale-50 sm:scale-100">{program.icon}</div>
          </div>
          <div className="flex-1 bg-black/60 h-9 sm:h-16 flex items-center px-2 sm:px-5 rounded-br-lg min-w-0">
            <h3 className="text-white font-dosis font-semibold text-[11px] sm:text-lg leading-none truncate">
              {program.title}
            </h3>
          </div>
        </div>
      </div>

      {/* HOVER: centered icon + title */}
      <div
        className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none z-40 opacity-0 scale-95 translate-y-2 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
      >
        <div className="max-w-lg">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-white/10">
            <div className="text-white">{program.icon}</div>
          </div>
          <h3 className="text-white text-2xl font-dosis font-bold">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Accessibility: keyboard focus via :focus-within on parent group */}
      <button
        className="absolute inset-0 z-50 bg-transparent focus:outline-none"
        aria-label={`View ${program.title}`}
      />
    </motion.div>
  );
}

/* ProgramAreas grid */
export default function ProgramAreas() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — staggered scroll reveal */}
        <motion.div
          className="text-center mb-16"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.span variants={fadeUpSm} className="text-brand-red font-dosis font-bold text-sm uppercase tracking-wider">Success Stories</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-5xl font-dosis font-bold text-brand-black">Lives We've Transformed</motion.h2>
          <motion.p variants={fadeUpSm} className="text-gray-600 mt-4 max-w-2xl mx-auto font-lato text-lg">
            Real stories from youth who found their path through Magic Bus Programs
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {PROGRAM_AREAS.map((p, i) => (
            <ProgramCard key={p.title} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
