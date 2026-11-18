import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";

export default function ProgrammesSlider() {
  const baseSlides = useMemo(
    () => [
      {
        id: "adolescent-programme",
        title: "Adolescent Programme",
        summary:
          "Foundational life skills that build confidence and core competencies.",
        tags: ["6 Months"],
        image: "/ngo-images/1.JPG",
        gradient: "from-blue-400 via-purple-500 to-indigo-600",
      },
      {
        id: "youth-programme",
        title: "Youth Programme",
        summary:
          "Industry-aligned training that connects youth to sustainable jobs.",
        tags: ["95% Placement", "₹15K+"],
        image: "/ngo-images/2.JPG",
        gradient: "from-green-400 via-emerald-500 to-teal-600",
      },
      {
        id: "women-entrepreneurship",
        title: "Women Entrepreneurship",
        summary:
          "Business and financial skills that help women build and sustain their own micro-enterprises.",
        tags: ["Women-led", "Financial Literacy"],
        image: "/ngo-images/6.jpeg",
        gradient: "from-purple-400 via-violet-500 to-indigo-600",
      },
      {
        id: "employee-volunteering",
        title: "Employee Volunteering",
        summary:
          "Corporate partnerships for high-impact, structured volunteering.",
        tags: ["500+ Companies", "Teams"],
        image: "/ngo-images/3.JPG",
        gradient: "from-orange-400 via-red-500 to-pink-600",
      },
    ],
    []
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            CORE PROGRAMMES
          </motion.h2>
          <motion.p variants={fadeUpSm} className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Transforming lives through structured pathways from adolescence to
            sustainable livelihoods.
          </motion.p>
        </motion.div>

        <div className="programmesGrid grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {baseSlides.map((s) => (
            <ProgrammeCard key={s.id} slide={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── gradient color map for Tailwind dynamic class workaround ─── */
const GRADIENT_MAP = {
  "from-blue-400 via-purple-500 to-indigo-600":
    "linear-gradient(135deg, #E12228 0%, #FF9E04 100%)",
  "from-green-400 via-emerald-500 to-teal-600":
    "linear-gradient(135deg, #E12228 0%, #FF9E04 100%)",
  "from-orange-400 via-red-500 to-pink-600":
    "linear-gradient(135deg, #E12228 0%, #FF9E04 100%)",
  "from-purple-400 via-violet-500 to-indigo-600":
    "linear-gradient(135deg, #E12228 0%, #FF9E04 100%)",
};

function ProgrammeCard({ slide }) {
  const { image, gradient, title, summary, tags } = slide;
  const bgGradient = GRADIENT_MAP[gradient] || GRADIENT_MAP["from-blue-400 via-purple-500 to-indigo-600"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="listitem"
      aria-label={title}
      tabIndex={0}
      className="programme-card-outer h-[400px] sm:h-[300px] md:h-[420px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-xl"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={() => setIsHovered((v) => !v)}
    >
      {/* Inner wrapper that flips */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ══════ FRONT FACE ══════ */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 p-3 sm:p-6 md:p-8 text-white">
            <h3 className="text-base sm:text-2xl md:text-[28px] font-bold leading-tight">{title}</h3>
          </div>
        </div>

        {/* ══════ BACK FACE ══════ */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: bgGradient,
          }}
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.08] blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 sm:p-6 md:p-8 text-center text-white">
            {/* Title */}
            <h3 className="text-lg sm:text-[22px] md:text-[26px] font-extrabold leading-tight mb-2 sm:mb-4">
              {title}
            </h3>

            {/* Divider */}
            <div className="w-10 sm:w-12 h-[3px] rounded-full bg-white/40 mb-3 sm:mb-5" />

            {/* Summary */}
            <p className="text-white/95 text-sm md:text-base leading-snug sm:leading-relaxed max-w-[95%] sm:max-w-[90%] mb-3 sm:mb-6">
              {summary}
            </p>

            {/* Tags */}
            <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center mb-4 sm:mb-6">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wide uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/15 text-white/90 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base bg-white text-gray-900 font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-black/15 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
.programme-card-outer {
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
}

.programmesGrid:hover .programme-card-outer {
  transform: scale(0.97);
  opacity: 0.6;
}

.programmesGrid .programme-card-outer:hover,
.programmesGrid .programme-card-outer:focus-visible {
  transform: scale(1.05) !important;
  opacity: 1 !important;
}
`;

let injected = false;
function injectStyles() {
  if (typeof document !== "undefined" && !injected) {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-programmes-grid", "true");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    injected = true;
  }
}

injectStyles();
