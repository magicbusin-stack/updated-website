import { motion } from "framer-motion";
import { Layers, Users, Code2, Briefcase, Network } from "lucide-react";
import {
  fadeUp,
  fadeUpSm,
  scalePop,
  staggerStd,
  staggerFast,
  slideLeft,
  VIEWPORT_ONCE,
  EASE_EXPO,
} from "../../hooks/useScrollAnimations";

const steps = [
  {
    id: 1,
    title: "Strong Foundation",
    desc: "Ages 11–18 — foundational development & life skills",
    icon: Layers,
    grad: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Develop Life Skills",
    desc: "Communication, leadership & personal development",
    icon: Users,
    grad: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Master Market Skills",
    desc: "Technical & digital skills aligned with market needs",
    icon: Code2,
    grad: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Secure Career",
    desc: "Career counselling & placement opportunities",
    icon: Briefcase,
    grad: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Alumni Network",
    desc: "Lifelong support & community of successful graduates",
    icon: Network,
    grad: "from-fuchsia-500 to-violet-500",
  },
];

export default function JourneyZigzagAnimated() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header — stagger with slow reveal */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          variants={staggerStd}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <motion.p
            variants={fadeUpSm}
            className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3"
          >
            Our proven model
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extrabold text-ink mb-4"
          >
            Childhood to Livelihood Journey
          </motion.h2>
          <motion.p
            variants={fadeUpSm}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            A clear, practical 5-step pathway that prepares young people for
            meaningful careers and lifelong success.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Dotted wave path — draws itself on scroll */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-6 hidden md:block"
            viewBox="0 0 1200 180"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="
                M 70 90
                C 120 40, 200 40, 260 90
                S 440 120, 540 90
                S 740 60, 840 120
                S 1000 100, 1100 90
              "
              stroke="#9B87F5"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="6 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.75 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 1.8, ease: EASE_EXPO, delay: 0.2 }}
            />
          </svg>

          {/* Steps grid — staggered cascade */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {steps.map((s, i) => {
              const isDown = i % 2 === 1;
              return (
                <motion.div
                  key={s.id}
                  variants={fadeUp}
                  className={`relative flex flex-col items-center ${
                    isDown ? "mt-16" : "mt-0"
                  }`}
                >
                  {/* Floating Icon — entry scale pop + perpetual float */}
                  <motion.div
                    variants={scalePop}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
                    className={`relative z-10 w-[96px] h-[96px] rounded-full grid place-items-center shadow-xl
                                bg-gradient-to-br ${s.grad}`}
                  >
                    <s.icon className="w-10 h-10 text-white drop-shadow-md" />
                    <motion.span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-ink text-xs font-bold grid place-items-center shadow"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{ type: "spring", stiffness: 400, damping: 16, delay: 0.3 + i * 0.07 }}
                    >
                      {s.id}
                    </motion.span>
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-white"
                      style={{ maskImage: "radial-gradient(white, transparent 60%)" }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    variants={fadeUpSm}
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16,24,40,0.14)" }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="mt-6 w-full"
                  >
                    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.08)] p-6 text-center">
                      <h3 className="text-lg font-semibold text-ink mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.4 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="inline-flex items-center justify-center rounded-full px-8 py-4
                         font-semibold bg-brand-red text-white shadow-lg"
            >
              Know Our Model
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}