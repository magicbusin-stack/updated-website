// src/pages/OurApproach.jsx
import React, { useState } from "react"; // Added useState
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Sparkles,
  School,
  Handshake,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Layout from "../components/Layout";
import StrategicFramework from "../components/AboutUs/StrategicFramework";
import AnimatedGradientBorder from "../components/ui/animated-gradient-border";
import { Link } from "react-router-dom";

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

// ===== Key Components Circular Diagram (Updated) =====
function KeyComponentsGrid() {
  // State to track which component is active (Default to ID 1)
  const [activeId, setActiveId] = useState(1);

  const components = [
    {
      id: 1,
      title: "Life Skills\nEducation",
      icon: Sparkles,
      color: "bg-brand-yellow",
      borderColor: "border-brand-yellow",
      textColor: "text-brand-yellow",
      position: { top: "0%", left: "35%", transform: "translate(-35%, 0%)" },
      description: "Teaches core life skills to adolescents and youth, helping them become more resilient and show higher self-efficacy."
    },
    {
      id: 2,
      title: "Education\nEnhancement",
      icon: School,
      color: "bg-brand-magenta",
      borderColor: "border-brand-magenta",
      textColor: "text-brand-magenta",
      position: { top: "30%", right: "0%", transform: "translate(0%, 0%)" },
      description: "Provides adolescents with learning support that improves their basic literacy and numeracy, to boost their overall grades."
    },
    {
      id: 3,
      title: "Employability\nSkills Education",
      icon: Briefcase,
      color: "bg-brand-blue",
      borderColor: "border-brand-blue",
      textColor: "text-brand-blue",
      position: { bottom: "10%", right: "10%", transform: "translate(0%, 0%)" },
      description: "Includes financial literacy, digital literacy, spoken English and career awareness that will help young people to get a job."
    },
    {
      id: 4,
      title: "Livelihood\nConnect",
      icon: Users,
      color: "bg-brand-red",
      borderColor: "border-brand-red",
      textColor: "text-brand-red",
      position: { bottom: "10%", left: "10%", transform: "translate(0%, 0%)" },
      description: "Involves sector-specific orientation, placement and post-placement support to help young people sustain their jobs."
    },
    {
      id: 5,
      title: "Community\nEngagement",
      icon: Handshake,
      color: "bg-brand-green",
      borderColor: "border-brand-green",
      textColor: "text-brand-green",
      position: { top: "30%", left: "0%", transform: "translate(0%, 0%)" },
      description: "Engages with parents, local government bodies, and the community to build support for adolescents."
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-wide">
            KEY COMPONENTS
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Five integrated pillars working together to move youth from childhood into secure livelihoods.
          </p>
        </motion.div>

        {/* ===== DESKTOP RADIAL LAYOUT (Visible on lg screens) ===== */}
        <div className="hidden lg:block relative w-full max-w-4xl mx-auto aspect-square max-h-[700px]">

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {/* Pulsing rings around center */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-100 scale-[1.8] opacity-50"></div>
            <div className="absolute inset-0 rounded-full border border-gray-100 scale-[2.5] opacity-30"></div>

            <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-gray-50 z-20 relative">
              <div className="p-3 bg-gray-50 rounded-full mb-2">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 text-center leading-none">
                OUR<br /><span className="text-brand-red">APPROACH</span>
              </h4>
            </div>
          </motion.div>

          {/* Component Satellites */}
          {components.map((component, index) => {
            const Icon = component.icon;
            const delay = 0.5 + (index * 0.1);
            const isActive = activeId === component.id;

            return (
              <motion.div
                key={component.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: delay,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute w-64 group z-30"
                style={component.position}
                onMouseEnter={() => setActiveId(component.id)} // Set Active on Hover
              >
                <div className="flex flex-col items-center text-center">

                  {/* Icon Circle */}
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4
                    text-white ${component.color} relative z-10 transition-transform duration-300 
                    ${isActive ? 'scale-110 shadow-xl' : 'scale-100'}
                  `}>
                    <Icon size={32} className="relative z-10" />

                    {/* Rotating Dashed ring around icon */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 rounded-full border-2 border-dashed ${component.borderColor} opacity-60 scale-125`}
                    />
                  </div>

                  {/* Title */}
                  <h4 className={`font-bold text-lg mb-2 whitespace-pre-line leading-tight transition-colors duration-300 ${isActive ? 'text-brand-black' : 'text-gray-500'}`}>
                    {component.title}
                  </h4>

                  {/* Description Card (Visible if Active) */}
                  <div className={`
                      transition-all duration-500 transform absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-50
                      ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}>
                    <p className="text-sm text-gray-600 leading-relaxed text-left">
                      {component.description}
                    </p>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                  </div>

                </div>

                {/* Connecting Line to Center */}
                <svg className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-20">
                  <line x1="50%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
                </svg>

              </motion.div>
            );
          })}
        </div>

        {/* ===== MOBILE/TABLET LIST LAYOUT (Visible on md/sm screens) ===== */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className={`p-4 rounded-full ${component.color} text-white mb-4 relative`}>
                  <Icon size={24} className="relative z-10" />
                  {/* Mobile Rotation Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-white/50 rounded-full scale-110"
                  />
                </div>
                <h4 className={`font-bold text-lg mb-2 ${component.textColor}`}>
                  {component.title.replace('\n', ' ')}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {component.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}

// ===== Page component =====
export default function OurApproach() {
  const heroImg = "/src/assets/images/banner1.jpg";
  const adolescentImg = "/src/assets/images/approach1.jpg";
  const livelihoodImg = "/src/assets/images/approach2.jpg";

  return (
    <Layout>
      <main className="text-ink font-sans bg-white">
        {/* ===== HERO ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Adult with children walking (Magic Bus)"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.57]"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1593113598332-cd5ca77b6b0b";
            }}
          />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Our Approach
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="text-3xl md:text-5xl font-heading font-extrabold leading-tight text-white max-w-xl"
                >
                  Equip. Educate. Empower.
                </motion.h1>

                <motion.p variants={fadeUp} className="text-white/90 max-w-xl">
                  Magic Bus works with vulnerable young people to create a
                  seamless pathway from childhood to livelihood — combining
                  socio-emotional learning, foundational education and sectoral
                  employability aligned with NEP 2020.
                </motion.p>

                <motion.div variants={fadeUp} className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-red text-white font-semibold shadow"
                    href="#programmes"
                  >
                    Explore Programmes
                    <ArrowRight size={14} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/30 text-white bg-white/10"
                    href="#impact"
                  >
                    Our Impact
                  </motion.a>
                </motion.div>
              </motion.div>

              <div className="hidden md:flex justify-end">
                <motion.div
                  variants={fadeUp}
                  className="w-full max-w-xs text-right pr-6"
                >
                  <div className="bg-white/6 rounded-lg p-4 backdrop-blur-sm">
                    <h3 className="text-white font-semibold">Childhood to Livelihood</h3>
                    <p className="text-white/90 text-sm mt-2">
                      Two aligned pathways for adolescents and youth to ensure
                      educational completion and stable livelihoods.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTRO & BREADCRUMB ===== */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-sm text-gray-500 mb-4">Home / Our Approach</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-brand-black">
                  Our Approach
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Young people from underserved communities are especially
                  vulnerable to the fallouts of poverty such as school
                  drop-out and child labour. Magic Bus works to address these at
                  the root through our <strong>Childhood to Livelihood</strong>{" "}
                  approach. The National Education Policy (2020) emphasises
                  socio-emotional learning and higher-order thinking skills —
                  both core to our programmes.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <AnimatedGradientBorder radius="1rem">
                  <aside className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-brand-black mb-3">Focus Areas</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <Sparkles className="mt-1 text-brand-yellow" size={16} />
                        <div>
                          <strong className="block">Life Skills</strong>
                          Socio-emotional learning, resilience & decision-making
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <School className="mt-1 text-brand-blue" size={16} />
                        <div>
                          <strong className="block">Education Enhancement</strong>
                          Foundational literacy & numeracy support
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Briefcase className="mt-1 text-brand-magenta" size={16} />
                        <div>
                          <strong className="block">Livelihood Skills</strong>
                          Digital, English, sector-specific training & job placement
                        </div>
                      </li>
                    </ul>
                  </aside>
                </AnimatedGradientBorder>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAMME AREAS (TWO-COLUMN) ===== */}
        <section id="programmes" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-semibold text-center text-brand-black mb-8"
            >
              Programme Areas
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <ProgramCard
                  img={adolescentImg}
                  title="Adolescent Programme"
                  colorClass="bg-brand-red"
                  Icon={Users}
                >
                  Through the Adolescent Programme we work with adolescents for
                  holistic development — helping them complete secondary
                  education. Activity-based life skills and education enhancement
                  build confidence and foundational literacy & numeracy.
                </ProgramCard>
              </motion.div>

              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <ProgramCard
                  img={livelihoodImg}
                  title="Livelihood Programme"
                  colorClass="bg-brand-blue"
                  Icon={Briefcase}
                >
                  The Livelihood Programme enhances youth employability via
                  life skills, sectoral training and job placements. Post-placement
                  mentoring and financial counselling supports retention.
                </ProgramCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== KEY COMPONENTS (GRID) ===== */}
        <KeyComponentsGrid />

        {/* ===== THEORY OF CHANGE ===== */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-semibold text-center text-brand-black"
            >
              Theory of Change
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 text-gray-600 max-w-3xl mx-auto text-center"
            >
              Magic Bus emerged stronger following the pandemic. A planning
              exercise mapped a strategy to deliver two aligned, skills-anchored
              approaches for adolescents and youth.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard title="Strategic Pathways">
                Adolescent Programme (12–18): secondary completion and life
                skills. Livelihood Programme (18–25): skills, placements and
                retention.
              </InfoCard>

              <InfoCard title="Best-in-Class Programmes">
                Direct delivery (school & community), government partnership,
                livelihood centers for skilling & placement support.
              </InfoCard>

              <InfoCard title="Outcomes of Focus">
                Academic impact, empowerment & agency, employability,
                job-placement and workplace retention.
              </InfoCard>
            </div>
          </div>
        </section>

        {/* ===== STRATEGIC FRAMEWORK ===== */}
        <StrategicFramework />

        {/* ===== CTA ===== */}
        <section className="bg-brand-red text-white py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-semibold"
            >
              Join us to transform lives
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 max-w-2xl mx-auto text-white/90"
            >
              Support programmes that create sustained change — from classrooms
              to careers. Partner, volunteer or donate to build a stronger
              future for vulnerable young people.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 flex justify-center gap-4"
            >
              <Link to="/donate" className="px-5 py-2 rounded-md bg-white text-brand-red font-semibold">
                Donate
              </Link>
              <Link to="/partner" className="px-5 py-2 rounded-md border border-white/40 text-white">
                Partner with us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}