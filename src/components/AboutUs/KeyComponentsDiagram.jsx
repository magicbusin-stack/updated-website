import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Sparkles,
  School,
  Handshake,
  ArrowRight,
  MapPin,
  BookOpen,
  Layers,
} from "lucide-react";
import Layout from "../components/Layout"; // keep your Layout wrapper
import StrategicFramework from "../components/AboutUs/StrategicFramework";

// ===== Animation variants =====
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardHover = { scale: 1.02, y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.12)" };

// ===== Small components =====
function ProgramCard({ img, title, colorClass, Icon, children, href = "#" }) {
  return (
    <motion.article
      whileHover={cardHover}
      className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition"
    >
      <div className="h-64 w-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="flex items-center gap-3 text-lg font-semibold">
          <span className={`p-2 rounded-md ${colorClass} text-white`}>
            <Icon size={18} />
          </span>
          {title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{children}</p>

        <a
          href={href}
          className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${colorClass.replace(
            "bg-",
            "text-"
          )} hover:gap-3 transition`}
        >
          Learn More <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

function InfoCard({ title, children, accent }) {
  return (
    <motion.div
      variants={fadeUp}
      className="p-6 bg-white rounded-xl border shadow-sm"
    >
      <h4 className={`font-semibold mb-2 ${accent || "text-brand-red"}`}>{title}</h4>
      <p className="text-gray-600 text-sm">{children}</p>
    </motion.div>
  );
}

// ===== Key Components Grid (replaces petals) =====
function KeyComponentsGrid() {
  const items = [
    {
      id: "life-skills",
      title: "Life Skills Education",
      icon: Sparkles,
      accent: "bg-brand-yellow",
      desc:
        "Resilience, problem-solving and decision-making — socio-emotional learning for confident, reflective youth.",
    },
    {
      id: "community",
      title: "Community Engagement",
      icon: Handshake,
      accent: "bg-brand-green",
      desc:
        "Work with parents, local government and stakeholders to create a supportive ecosystem for young people.",
    },
    {
      id: "education",
      title: "Education Enhancement",
      icon: School,
      accent: "bg-brand-magenta",
      desc:
        "Conducive learning environments, remedial support and activity-based curriculum to boost literacy & numeracy.",
    },
    {
      id: "employability",
      title: "Employability Skills",
      icon: Briefcase,
      accent: "bg-brand-blue",
      desc:
        "21st century skills — digital literacy, spoken English and soft skills — to improve job-readiness.",
    },
    {
      id: "livelihood",
      title: "Livelihood Connect",
      icon: Users,
      accent: "bg-brand-red",
      desc:
        "Tie-ups with employers, sector-specific training and post-placement mentoring to ensure sustainable jobs.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-semibold text-brand-black"
        >
          Key Components
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          A connected system of interventions that together move young people from childhood into secure and dignified livelihoods.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          aria-label="Key components list"
        >
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.id}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                tabIndex={0}
                role="article"
                aria-labelledby={`${it.id}-title`}
                className="bg-white rounded-xl border p-6 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${it.accent} text-white`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 id={`${it.id}-title`} className="font-semibold text-lg text-brand-black">
                      {it.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
