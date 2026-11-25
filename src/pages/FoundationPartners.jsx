// src/pages/FoundationPartners.jsx
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import PartnerHeadline from "../components/Corporate/PartnerHeadline";
import PartnerThanks from "../components/Corporate/PartnerThanks";
import PartnerCategories from "../components/Corporate/PartnerCategories";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { foundationPartners } from "../data/foundationPartners";

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

// Partner list + logos live in src/data/foundationPartners.js (copied from the live Foundation Partners page)
const FOUNDATION_PARTNERS = foundationPartners;

export default function FoundationPartners() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("institutional@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <div className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Our Foundation Partners"
          title="Working together for a better tomorrow."
          subtitle="Building collaborative ecosystems to expand child development and education"
          description="Strategic foundations and institutions that support our mission by providing vital funding, capacity building, and program recognition."
          image="/ngo-images/partner-hero.jpg"
          ctas={[
            { href: "mailto:institutional@magicbusindia.org", label: "Connect With Us", variant: "primary", showArrow: true },
            { href: "#foundation-showcase", label: "Explore Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-base text-ink/70 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Foundation Partners</span>
          </div>
        </section>

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-5xl mx-auto">
              <PartnerHeadline align="center" chip="Foundations & Institutions" line1="Our Foundation & Institutions" line2="Partners" />
              
              <div className="mx-auto mt-10 max-w-3xl space-y-6 text-[#1A1A1A]/90 text-lg md:text-xl leading-relaxed">
                <p>
                  Our work is significantly supported by our foundation and institution partners, who provide crucial assistance in various ways including funding, capacity-building support, networking, recognition and credibility. With their support, we are able to enhance our impact and fulfill our mission of creating positive change in the world.
                </p>
              </div>

              <div className="mt-14">
                <PartnerThanks
                  who="Foundations & Institutions"
                  message="We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today."
                  partners={FOUNDATION_PARTNERS}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4) ALL PARTNER LOGOS (moving rows) ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100 overflow-hidden" id="foundation-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Institution Network
              </h3>
              <p className="text-slate-600 text-lg mt-2">
                Supported by {FOUNDATION_PARTNERS.length} foundations and institutions
              </p>
            </div>
          </div>
          <LogoMarquee partners={FOUNDATION_PARTNERS} rows={2} />
        </section>

        {/* ===== 5) INTERACTIVE CONTACT YELLOW STRIP ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-base uppercase font-bold tracking-widest text-slate-800">To know more, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:institutional@magicbusindia.org"
                className="text-2xl sm:text-4xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                institutional@magicbusindia.org
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

        <PartnerCategories current="foundation" />

      </div>
    </Layout>
  );
}
