// src/pages/FoundationPartners.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, Check, Copy, ArrowRight } from "lucide-react";
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

const FOUNDATION_PARTNERS = [
  { name: "Azim Premji Foundation", category: "Social & Education" },
  { name: "BioUrja", category: "Energy & Development" },
  { name: "Bernard Lewis Charitable Trust", category: "Philanthropy" },
  { name: "CAF (Charities Aid Foundation)", category: "Philanthropy" },
  { name: "Dhanam Foundation", category: "Social & Education" },
  { name: "echidna giving", category: "Philanthropy" },
  { name: "FIFA Foundation", category: "Sports for Development" },
  { name: "Google.org", category: "Technology & Grant" },
  { name: "The Hans Foundation", category: "Social & Education" },
  { name: "Laureus", category: "Sports for Development" },
  { name: "Life Skills Collaborative", category: "Social & Education" },
  { name: "Manchester City", category: "Sports for Development" },
  { name: "Michael & Susan Dell Foundation", category: "Philanthropy" },
  { name: "THE EXTRA MILE", category: "Philanthropy" },
  { name: "Wimbledon Foundation", category: "Sports for Development" },
  { name: "World Resources Institute", category: "Energy & Development" },
];

const CATEGORIES = [
  "All",
  "Social & Education",
  "Philanthropy",
  "Sports for Development",
  "Energy & Development",
  "Technology & Grant",
];



export default function FoundationPartners() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredPartners = useMemo(() => {
    return FOUNDATION_PARTNERS.filter((partner) => {
      const matchesSearch = partner.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || partner.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("institutional@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Foundation Partners"
          title="Working together for a better tomorrow."
          subtitle="Building collaborative ecosystems to expand child development and education"
          description="Strategic foundations and institutions that support our mission by providing vital funding, capacity building, and program recognition."
          image="/src/assets/images/partner-hero.jpg"
          ctas={[
            { href: "mailto:institutional@magicbusindia.org", label: "Connect With Us", variant: "primary", showArrow: true },
            { href: "#foundation-showcase", label: "Explore Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Foundation Partners</span>
          </div>
        </section>

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Foundations & Institutions
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-headline">
                Our Foundation and Institutions Partners
              </h2>
              <div className="mt-6 h-1 w-20 bg-brand-yellow rounded-full mx-auto" />
              
              <div className="mt-8 space-y-6 text-[#1A1A1A]/85 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Our work is significantly supported by our foundation and institution partners, who provide crucial assistance in various ways including funding, capacity-building support, networking, recognition and credibility. With their support, we are able to enhance our impact and fulfill our mission of creating positive change in the world.
                </p>
                <p className="border-t border-slate-100 pt-6 font-semibold text-slate-800 text-lg italic">
                  We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4) GRID & FILTERING SHOWCASE ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100" id="foundation-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Our Institution Network
                </h3>
                <p className="text-slate-500 text-sm mt-2">
                  Showing {filteredPartners.length} of {FOUNDATION_PARTNERS.length} institutions
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-yellow/20 focus:border-brand-yellow transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
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
              key={`${activeCategory}-${search}`}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-center justify-center min-h-[110px] shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 relative group cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xl bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <BrandLogo name={partner.name} />
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
                <h4 className="text-slate-800 font-bold text-base">No partners found</h4>
                <p className="text-slate-400 text-xs mt-1">Try resetting your filters or modifying your search query.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}

          </div>
        </section>

        {/* ===== 5) INTERACTIVE CONTACT YELLOW STRIP ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-slate-800">To know more, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:institutional@magicbusindia.org"
                className="text-xl sm:text-3xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                institutional@magicbusindia.org
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
                { label: "Government Partners", path: "/government-partners" },
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
