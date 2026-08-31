// src/pages/KnowledgePartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import BrandLogo from "../components/Corporate/BrandLogo";

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

const KNOWLEDGE_PARTNERS = [
  { name: "Dasra" },
  { name: "Life Skills Collaborative" },
  { name: "King's Trust International" },
  { name: "UNDP" },
  { name: "YuWaah!" },
  { name: "The Bridgespan Group" },
  { name: "Dalberg" },
  { name: "Sattva" },
];

export default function KnowledgePartners() {
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
          badgeText="Our Partners"
          title="Knowledge partners."
          subtitle="Amplifying impact and learning through strategic research and expert collaborations."
          description="We work with leading global advisory organizations and think tanks to design and evaluate our life skills and youth skilling interventions."
          image="/src/assets/images/partner-hero.jpg"
          ctas={[
            { href: "mailto:govtpartner@magicbusindia.org", label: "Connect with us", variant: "primary", showArrow: true },
            { href: "#knowledge-showcase", label: "View Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Knowledge Partners</span>
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
                  Research & Insights
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Our Knowledge <br />
                  <span className="relative inline-block">
                    Partners
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                  </span>
                </h2>
                
                <p className="mt-6 text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                  Strategic alliances driving global frameworks, academic research, and scalable community growth.
                </p>
              </div>

              {/* Right Column: Paragraph Text */}
              <div className="space-y-8 text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2">
                <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                  At Magic Bus, partnerships play an essential role in enabling us to achieve our mission and create a positive impact in the world. Our Corporate and Knowledge partners provide us with the necessary support, resources, and expertise to make a real difference in the communities we serve. Through these collaborations we can amplify our message and engage new audiences, helping us to create a broader impact in the communities we serve.
                </p>
                <p>
                  We are grateful for the strong and lasting relationships we have built with our partners, both in India and across the globe. These partnerships are built on a strong foundation of shared values and goals. We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) GRID SHOWCASE ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100" id="knowledge-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Knowledge & Advisory Council
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Strategic collaboration with {KNOWLEDGE_PARTNERS.length} premier institutions
              </p>
            </div>

            {/* Partners Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {KNOWLEDGE_PARTNERS.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white border border-slate-200/60 rounded-2xl p-8 flex items-center justify-center min-h-[140px] shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 relative group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xl bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <BrandLogo name={partner.name} />
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
                { label: "Government Partners", path: "/government-partners" },
                { label: "Employment Partners", path: "/connect-with-work" },
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
