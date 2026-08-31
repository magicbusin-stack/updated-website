// src/pages/GovernmentPartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

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

const GOVERNMENT_PARTNERS = [
  { name: "Andhra Pradesh", logo: "/government partners/Govt Andhra Pradesh-01.png" },
  { name: "Assam", logo: "/government partners/Govt Assam-01.png" },
  { name: "Haryana", logo: "/government partners/Govt Haryana-01.png" },
  { name: "Mizoram", logo: "/government partners/Govt Mizoram-01.png" },
  { name: "Odisha", logo: "/government partners/Govt of Odisha.png" },
  { name: "Rajasthan", logo: "/government partners/Govt Rajasthan-01.png" },
  { name: "Himachal Pradesh", logo: "/government partners/himachal.png" },
  { name: "Meghalaya", logo: "/government partners/meghalaya.png" },
  { name: "Madhya Pradesh", logo: "/government partners/MP Govt Logo.jpg" },
  { name: "Chhattisgarh", logo: "/government partners/chhatisgadh.png" },
];

export default function GovernmentPartners() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("govtpartner@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Government Partners"
          title="Government partners."
          subtitle="Co-creating scalable, system-led programs across Indian school networks."
          description="Magic Bus partners with multiple state governments to align with the National Education Policy (NEP 2020) and mainstream life skills education."
          image="/src/assets/images/partner-hero.jpg"
          ctas={[
            { href: "mailto:govtpartner@magicbusindia.org", label: "Partner with us", variant: "primary", showArrow: true },
            { href: "#government-showcase", label: "View State Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Government Partners</span>
          </div>
        </section>

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Branding and Title */}
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-red bg-brand-red/5 border border-brand-red/10 uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  State & National Alignment
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Our Government <br />
                  <span className="relative inline-block">
                    Partners
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                  </span>
                </h2>
                
                <p className="mt-6 text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                  Collaborating with state education systems to build sustainable, high-impact life skills models.
                </p>
              </div>

              {/* Right Column: Paragraph Text */}
              <div className="space-y-8 text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2">
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
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                State Education Collaborations
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Active program delivery across {GOVERNMENT_PARTNERS.length} states
              </p>
            </div>

            {/* Partners Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {GOVERNMENT_PARTNERS.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-center justify-center min-h-[170px] shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 relative group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xl bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col items-center text-center p-1 w-full">
                    <div className="h-20 flex items-center justify-center mb-3">
                      <img 
                        src={partner.logo} 
                        alt={`Government of ${partner.name}`} 
                        className="max-h-16 max-w-[120px] object-contain group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="leading-tight">
                      <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-[0.18em]">Government of</span>
                      <span className="block text-[13px] font-black text-slate-800 tracking-tight mt-0.5">{partner.name}</span>
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
            <h4 className="text-sm uppercase font-bold tracking-widest text-slate-800">To know more, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:govtpartner@magicbusindia.org"
                className="text-xl sm:text-3xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                govtpartner@magicbusindia.org
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full text-xs font-bold transition-all"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>

        {/* ===== 6) CROSS NAVIGATION OTHER PARTNERS ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Ecosystem Connect
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Other Partners
            </h3>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
              Explore how we collaborate across various domains to achieve holistic community growth and empowerment.
            </p>

            {/* Button Links Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Corporate Partners", path: "/corporate-partners" },
                { label: "Foundations & Institutions", path: "/foundation-partners" },
                { label: "Employment Partners", path: "/employment-partners" },
                { label: "Knowledge Partners", path: "/knowledge-partners" },
              ].map((p, idx) => (
                <Link
                  key={idx}
                  to={p.path}
                  className="group relative overflow-hidden bg-gray-50 hover:bg-slate-900 border border-slate-200/60 hover:border-slate-900 p-6 rounded-2xl flex flex-col justify-between items-center text-center h-32 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow group-hover:scale-150 transition-transform" />
                  <span className="font-bold text-xs md:text-sm text-slate-700 group-hover:text-white transition-colors">
                    {p.label}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-brand-red group-hover:text-brand-yellow tracking-wider uppercase">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}
