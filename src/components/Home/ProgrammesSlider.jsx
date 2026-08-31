import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeUpSm, staggerStd, VIEWPORT_ONCE } from "../../hooks/useScrollAnimations";
import { Users, BriefcaseBusiness, Handshake, HandCoins } from "lucide-react";

export default function ProgrammesSlider() {
  const baseSlides = useMemo(
    () => [
      {
        id: "adolescent-programme",
        title: "Adolescent Programme",
        subtitle: "Ages 11–18",
        summary:
          "Foundational life skills for ages 11–18, building confidence and core competencies.",
        tags: ["Ages 11–18", "6 Months"],
        Icon: Users,
        image: "/ngo-images/1.JPG",
        gradient: "from-blue-400 via-purple-500 to-indigo-600",
      },
      {
        id: "youth-programme",
        title: "Youth Programme",
        subtitle: "Youth & Livelihoods",
        summary:
          "Industry-aligned training that connects youth to sustainable jobs.",
        tags: ["95% Placement", "₹15K+"],
        Icon: BriefcaseBusiness,
        image: "/ngo-images/2.JPG",
        gradient: "from-green-400 via-emerald-500 to-teal-600",
      },
      {
        id: "women-entrepreneurship",
        title: "Women Entrepreneurship",
        subtitle: "Micro-Enterprise",
        summary:
          "Business and financial skills that help women build and sustain their own micro-enterprises.",
        tags: ["Women-led", "Financial Literacy"],
        Icon: HandCoins,
        image: "/ngo-images/6.jpeg",
        gradient: "from-purple-400 via-violet-500 to-indigo-600",
      },
      {
        id: "employee-volunteering",
        title: "Employee Volunteering",
        subtitle: "Corporate Partners",
        summary:
          "Corporate partnerships for high-impact, structured volunteering.",
        tags: ["500+ Companies", "Teams"],
        Icon: Handshake,
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
          <motion.p variants={fadeUpSm} className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3">
            Comprehensive Solutions
          </motion.p>
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
    "linear-gradient(135deg, #E12228 0%, #FFCC04 100%)",
  "from-orange-400 via-red-500 to-pink-600":
    "linear-gradient(135deg, #FF9E04 0%, #FFCC04 100%)",
  "from-purple-400 via-violet-500 to-indigo-600":
    "linear-gradient(135deg, #E12228 0%, #FF9E04 100%)",
};

function ProgrammeCard({ slide }) {
  const { image, gradient, Icon, title, subtitle, summary, tags } = slide;
  const bgGradient = GRADIENT_MAP[gradient] || GRADIENT_MAP["from-blue-400 via-purple-500 to-indigo-600"];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="listitem"
      aria-label={`${title}, ${subtitle}`}
      tabIndex={0}
      className="programme-card-outer h-[190px] sm:h-[300px] md:h-[420px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-xl"
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
            {subtitle && (
              <p className="text-[10px] sm:text-sm font-light uppercase tracking-widest opacity-80">
                {subtitle}
              </p>
            )}
            <h3 className="mt-0.5 sm:mt-1 text-sm sm:text-xl md:text-[24px] font-semibold leading-tight">{title}</h3>
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
            {/* Icon */}
            <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-white/15 backdrop-blur-sm grid place-items-center mb-2 sm:mb-6 shadow-lg shadow-black/10">
              <Icon className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xs sm:text-[22px] md:text-[26px] font-extrabold leading-tight mb-1.5 sm:mb-4">
              {title}
            </h3>

            {/* Divider */}
            <div className="hidden sm:block w-12 h-[3px] rounded-full bg-white/40 mb-5" />

            {/* Summary */}
            <p className="hidden sm:block text-white/85 text-[14px] md:text-[15px] leading-relaxed max-w-[90%] mb-6">
              {summary}
            </p>

            {/* Tags */}
            <div className="hidden sm:flex gap-2 flex-wrap justify-center mb-6">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-white/15 text-white/90 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button className="px-3 py-1.5 text-xs sm:px-8 sm:py-3 sm:text-base bg-white text-gray-900 font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-black/15 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
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
