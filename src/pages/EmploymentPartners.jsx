// src/pages/EmploymentPartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import PartnerHeadline from "../components/Corporate/PartnerHeadline";
import PartnerCategories from "../components/Corporate/PartnerCategories";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { employmentPartners } from "../data/employmentPartners";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
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

// Partner list + logos live in src/data/employmentPartners.js (copied from the live Employment Partners page)
const EMPLOYER_PARTNERS = employmentPartners;

export default function EmploymentPartners() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emp-partner@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <div className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Placement Network"
          title="Employer partners."
          subtitle="Connecting skilled, motivated youth to leading global and national employers."
          description="We collaborate with top-tier corporate employers across Retail, BFSI, QSR, and ITeS sectors to provide direct entry-level placements."
          image="/cww-banner.jpg"
          ctas={[
            { href: "mailto:emp-partner@magicbusindia.org", label: "Partner with us", variant: "primary", showArrow: true },
            { href: "#employer-showcase", label: "View Employer Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-base text-ink/70 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Employment Partners</span>
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
                <PartnerHeadline chip="Connecting Youth to Work" line1="Our Employment" line2="Partners" sub="Driving livelihood transition through shared values, industry alignment, and post-placement support." />
              </div>

              {/* Right Column: Paragraph Text */}
              <div className="space-y-8 text-slate-700 text-lg md:text-xl leading-relaxed mt-2">
                <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                  Magic Bus employment partners are crucial in helping achieve the mission of providing life skills to youth and enabling them to secure job opportunities. They offer various job opportunities to the youth who have completed Magic Bus' employability training programmes. The partnership also ensures that the training programmes align with the current job market trends and requirements.
                </p>
                <p>
                  This collaboration creates a win-win situation for both Magic Bus and the employment partners, leading to mutual growth and success. We recognize and acknowledge their contributions. Without their support, we would not be able to achieve the level of success we have today.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) ALL PARTNER LOGOS (moving rows) ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100 overflow-hidden" id="employer-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Corporate Employment Network
              </h3>
              <p className="text-slate-600 text-lg mt-2">
                Active placements and partnerships across {EMPLOYER_PARTNERS.length} major brands
              </p>
            </div>
          </div>
          <LogoMarquee partners={EMPLOYER_PARTNERS} rows={3} />
        </section>

        {/* ===== 5) INTERACTIVE CONTACT YELLOW STRIP ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-base uppercase font-bold tracking-widest text-slate-800">To know more, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:emp-partner@magicbusindia.org"
                className="text-2xl sm:text-4xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                emp-partner@magicbusindia.org
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

        <PartnerCategories current="employment" />

      </div>
    </Layout>
  );
}
