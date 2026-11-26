// src/pages/GovernmentPartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import PartnerHeadline from "../components/Corporate/PartnerHeadline";
import PartnerCategories from "../components/Corporate/PartnerCategories";
import { governmentPartners } from "../data/governmentPartners";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
};

const GOVERNMENT_PARTNERS = governmentPartners;

export default function GovernmentPartners() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("govtpartner@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <div className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Government Partners"
          title="Government partners."
          subtitle="Co-creating scalable, system-led programs across Indian school networks."
          description="Magic Bus partners with multiple state governments to align with the National Education Policy (NEP 2020) and mainstream life skills education."
          image="/ngo-images/partner-hero.jpg"
          ctas={[
            { href: "mailto:govtpartner@magicbusindia.org", label: "Partner with us", variant: "primary", showArrow: true },
            { href: "#government-showcase", label: "View State Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Branding and Title */}
              <div className="lg:sticky lg:top-24">
                <PartnerHeadline chip="State & National Alignment" line1="Our Government" line2="Partners" sub="Collaborating with state education systems to build sustainable, high-impact life skills models." />
              </div>

              {/* Right Column: Paragraph Text */}
              <div className="space-y-8 text-slate-700 text-lg md:text-xl leading-relaxed mt-2">
                <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                  Magic Bus collaborates with state governments in meeting the objectives of the <strong>National Education Policy (2020)</strong>, especially pertaining to holistic learning and life skills education. Having delivered life skills education in schools and communities over two decades now, Magic Bus partners with state governments to co-create relevant and contextualised life skills curriculums and content focusing on socio-emotional and higher-order thinking skills, build capacities of teachers and systems to deliver life skills inputs in schools, and monitor interventions for efficacy and quality.
                </p>
                <p>
                  Through the journey, Magic Bus serves as an enabler and a facilitator co-creating and testing models and approaches, building evidence to strengthen the system's ability to mainstream life skills education. At present, Magic Bus is also working with different school systems and departments in states such as Maharashtra, Haryana, Rajasthan, Mizoram, Rajasthan, Odisha, Assam and Madhya Pradesh.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) GRID SHOWCASE ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100" id="government-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                State Education Collaborations
              </h3>
              <p className="text-slate-600 text-lg mt-2">
                Active program delivery across {GOVERNMENT_PARTNERS.length} states
              </p>
            </div>

            {/* Partners Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {GOVERNMENT_PARTNERS.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[300px] shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 relative group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xl bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col items-center text-center p-1 w-full">
                    <div className="h-40 flex items-center justify-center mb-4">
                      <img loading="lazy" decoding="async" 
                        src={partner.logo} 
                        alt={`Government of ${partner.name}`} 
                        className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="leading-tight">
                      <span className="block text-sm font-bold text-slate-500 uppercase tracking-[0.18em]">Government of</span>
                      <span className="block text-xl font-black text-slate-800 tracking-tight mt-1">{partner.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ===== 5) INTERACTIVE CONTACT YELLOW STRIP ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-base uppercase font-bold tracking-widest text-slate-800">To know more, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:govtpartner@magicbusindia.org"
                className="text-2xl sm:text-4xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                govtpartner@magicbusindia.org
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/25 hover:bg-white/40 backdrop-blur rounded-full text-base font-bold transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>

        <PartnerCategories current="government" />

      </div>
    </Layout>
  );
}
