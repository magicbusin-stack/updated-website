// src/pages/CorporatePartners.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, Phone, ExternalLink, ArrowRight, Check, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import BrandLogo from "../components/Corporate/BrandLogo";
import { corporatePartners } from "../data/corporatePartners";
import PartnersCarousel from "../components/Corporate/PartnersCarousel";

// Core scroll animation definitions
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
};

// Partner list + logos live in src/data/corporatePartners.js (copied from the live Corporate Partners page)
const PARTNERS = corporatePartners;

const CATEGORIES = [
  "All",
  "Tech & Consulting",
  "Finance & Insurance",
  "Retail & Consumer",
  "Industrial & Manufacturing",
  "Automotive & Engineering",
  "Energy & Infrastructure",
  "Aviation & Logistics",
  "Media & Services",
  "Social & Community"
];



export default function CorporatePartners() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Filter partners based on search input and selected category pill
  const filteredPartners = useMemo(() => {
    return PARTNERS.filter((partner) => {
      const matchesSearch = partner.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || partner.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("csr@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918976720830");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Corporate Partners"
          title="United to spread the magic."
          subtitle="Driving impact together through shared vision and commitment"
          description="At Magic Bus, collaborations play an essential role in reaching out to children and young people. Together, we build resources, skills, and pathways out of poverty."
          image="/ngo-images/partner-hero.jpg"
          ctas={[
            { href: "mailto:csr@magicbusindia.org", label: "Partner with Us", variant: "primary", showArrow: true },
            { href: "#partners-showcase", label: "View Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-base text-ink/70 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Corporate Partners</span>
          </div>
        </section>

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Title Column */}
              <div className="lg:col-span-5">
                <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  Shared Values
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Our Corporate <br />
                  <span className="bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-transparent">Partnerships</span>
                </h2>
                <div className="mt-6 h-1 w-20 bg-brand-yellow rounded-full" />
              </div>

              {/* Right Paragraphs Column */}
              <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/90 text-lg md:text-xl leading-relaxed">
                <p>
                  At Magic Bus, partnerships play an essential role in reaching out to children and making a positive impact in the world. Our Corporate partners provide us with the necessary support, resources, and expertise to make a real difference in the communities we serve. 
                </p>
                <p>
                  Through these collaborations, we can amplify our message and reach new audiences, helping us to create a deeper impact in the communities we serve. We are grateful for the strong relationships we have built with our partners, both nationally and across the globe.
                </p>
                <p className="border-l-4 border-brand-red pl-5 italic text-slate-700 bg-gray-50/50 py-4 pr-4 rounded-r-2xl">
                  "These partnerships are built on a shared vision of shared values and goals. We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today."
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== FEATURED PARTNERS CAROUSEL ===== */}
        <PartnersCarousel />

        {/* ===== 4) CSR VOLUNTEERING FLOATING YELLOW CARD ===== */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_EXPO }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellow text-brand-black p-8 md:p-12 shadow-xl"
            >
              {/* decorative items */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Left Text */}
                <div className="text-center lg:text-left max-w-xl">
                  <span className="inline-block bg-brand-black/10 text-brand-black text-sm font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-3">
                    Corporate Engagement
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                    CSR & Employee Volunteering Partnership
                  </h3>
                  <p className="mt-3 text-slate-800 text-lg leading-relaxed">
                    Collaborate with us to design meaningful volunteering programs, maximize CSR alignment, and empower youth.
                  </p>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
                  
                  {/* Email Box */}
                  <div className="bg-white/95 backdrop-blur px-5 py-4 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between gap-3 text-left">
                    <div>
                      <span className="text-sm text-slate-500 font-bold uppercase tracking-wider block">Email Contact</span>
                      <a href="mailto:csr@magicbusindia.org" className="text-lg font-bold text-slate-800 hover:text-brand-red transition-colors block mt-1">
                        csr@magicbusindia.org
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center gap-1.5 text-base font-bold text-brand-red hover:underline"
                    >
                      {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedEmail ? "Copied!" : "Copy Email"}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="bg-white/95 backdrop-blur px-5 py-4 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between gap-3 text-left">
                    <div>
                      <span className="text-sm text-slate-500 font-bold uppercase tracking-wider block">Inquiry Phone</span>
                      <a href="tel:+918976720830" className="text-lg font-bold text-slate-800 hover:text-brand-red transition-colors block mt-1">
                        +91 89767 20830
                      </a>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="inline-flex items-center justify-center gap-1.5 text-base font-bold text-brand-red hover:underline"
                    >
                      {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedPhone ? "Copied!" : "Copy Number"}
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== 5) PARTNERS SEARCH, FILTER & GRID SECTION ===== */}
        <section className="py-20 bg-gray-50/50" id="partners-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Our Network of Change
                </h3>
                <p className="text-slate-600 text-lg mt-2">
                  Showing {filteredPartners.length} of {PARTNERS.length} strategic partners
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search corporate partners..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3.5 text-base focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 focus:border-brand-yellow transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-base font-bold transition-all whitespace-nowrap border ${
                    activeCategory === cat
                      ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                      : "bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Partners Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${activeCategory}-${search}`} // Force re-render of animations when filters change
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-center justify-center min-h-[190px] shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 relative group cursor-pointer"
                  >
                    {/* Corner accent that lights up on hover */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xl bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <BrandLogo name={partner.name} logo={partner.logo} showName />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredPartners.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white border border-dashed border-slate-200 rounded-3xl"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <h4 className="text-slate-800 font-bold text-xl">No partners found</h4>
                <p className="text-slate-500 text-base mt-1">Try resetting your filters or modifying your search query.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-xl"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}

          </div>
        </section>

        {/* ===== 6) EXPLORE OTHER PARTNERS SECTION ===== */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
            
            <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Ecosystem Connect
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Other Partners
            </h3>
            <p className="text-slate-600 text-lg mt-2 max-w-xl mx-auto">
              Explore how we collaborate across various domains to achieve holistic community growth and empowerment.
            </p>

            {/* Button Links Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Foundations & Institutions", path: "/foundation-partners" },
                { label: "Government Partners", path: "/government-partners" },
                { label: "Employment Partners", path: "/employment-partners" },
                { label: "Knowledge Partners", path: "/knowledge-partners" },
              ].map((p, idx) => (
                <Link
                  key={idx}
                  to={p.path}
                  className="group relative overflow-hidden bg-gray-50 hover:bg-slate-900 border border-slate-200/60 hover:border-slate-900 p-6 rounded-2xl flex flex-col justify-between items-center text-center h-36 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Subtle color highlight dot on hover */}
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow group-hover:scale-150 transition-transform" />
                  <span className="font-bold text-base md:text-lg text-slate-700 group-hover:text-white transition-colors">
                    {p.label}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-brand-red group-hover:text-brand-yellow tracking-wider uppercase">
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
