// src/pages/CorporatePartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, Phone } from "lucide-react";
import Layout from "../components/Layout";
import QuoteCard from "../components/ui/QuoteCard";
import HeroBanner from "../components/HeroBanner";
import PartnerHeadline from "../components/Corporate/PartnerHeadline";
import PartnerCategories from "../components/Corporate/PartnerCategories";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { corporatePartners } from "../data/corporatePartners";
import { foundationPartners } from "../data/foundationPartners";
import { governmentPartners } from "../data/governmentPartners";
import { knowledgePartners } from "../data/knowledgePartners";

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

// "Our Network of Change": one moving row for each kind of partner, taken from that partner's own page.
// A logo that two pages both list is shown once, in the first row that has it (CSR, then Institutional, Government, Knowledge).
const norm = (n) => n.toLowerCase().replace(/[^a-z0-9]/g, "");
const used = new Set();
const unique = (list) =>
  list.filter((p) => {
    const k = norm(p.name);
    if (used.has(k)) return false;
    used.add(k);
    return true;
  });
const NETWORK_ROWS = [
  { label: "CSR Partners", partners: unique(corporatePartners) },
  { label: "Institutional Partners", partners: unique(foundationPartners) },
  { label: "Government Partners", partners: unique(governmentPartners) },
  { label: "Knowledge Partners", partners: unique(knowledgePartners) },
];
const NETWORK_TOTAL = NETWORK_ROWS.reduce((n, r) => n + r.partners.length, 0);

export default function CorporatePartners() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
      <div className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText=""
          title="United to spread the magic."
          subtitle="Driving impact together through shared vision and commitment"
          description="At Magic Bus, collaborations play an essential role in reaching out to children and young people. Together, we build resources, skills, and pathways out of poverty."
          image="/ngo-images/partner-hero.jpg"
          ctas={[
            { href: "mailto:csr@magicbusindia.org", label: "Partner with Us", variant: "primary", showArrow: true },
            { href: "#partners-showcase", label: "View Partners", variant: "secondary" },
          ]}
        />

        {/* ===== 3) EDITORIAL CONTENT INTRO ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Title Column */}
              <div className="lg:col-span-5">
                <PartnerHeadline chip="Shared Values" line1="Our Corporate" line2="Partnerships" />
              </div>

              {/* Right Paragraphs Column */}
              <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/90 text-lg md:text-xl leading-relaxed">
                <p>
                  At Magic Bus, partnerships play an essential role in reaching out to children and making a positive impact in the world. Our Corporate partners provide us with the necessary support, resources, and expertise to make a real difference in the communities we serve. 
                </p>
                <p>
                  Through these collaborations, we can amplify our message and reach new audiences, helping us to create a deeper impact in the communities we serve. We are grateful for the strong relationships we have built with our partners, both nationally and across the globe.
                </p>
              </div>

            </div>

            {/* The quote, in the standard dark quote card used on every page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_EXPO }}
              className="mt-12"
            >
              <QuoteCard
                size="wide"
                quote="These partnerships are built on a shared vision of shared values and goals. We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today."
                name="Magic Bus India Foundation"
              />
            </motion.div>
          </div>
        </section>

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
                  <p className="mt-1 text-slate-900 text-xl md:text-2xl font-semibold leading-relaxed">
                    Collaborate with us to design meaningful volunteering programs, maximize CSR alignment, and empower youth.
                  </p>
                </div>

                {/* Right Actions */}
                <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:w-80 lg:grid-cols-1">
                  
                  {/* Email + phone: dark contact cards with a yellow icon, like the contact cards on the other pages */}
                  <div className="flex h-full min-w-0 flex-col gap-3 rounded-2xl bg-[#1A1A1A] p-5 text-left shadow-lg">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                      <Mail className="h-5 w-5 text-brand-black" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-widest text-white/65">Email Contact</span>
                      <a href="mailto:csr@magicbusindia.org" className="mt-1 block text-lg font-extrabold text-brand-yellow hover:underline">
                        csr@magicbusindia.org
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-brand-yellow hover:text-brand-black"
                    >
                      {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copiedEmail ? "Copied!" : "Copy Email"}
                    </button>
                  </div>

                  <div className="flex h-full min-w-0 flex-col gap-3 rounded-2xl bg-[#1A1A1A] p-5 text-left shadow-lg">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow">
                      <Phone className="h-5 w-5 text-brand-black" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-widest text-white/65">Inquiry Phone</span>
                      <a href="tel:+918976720830" className="mt-1 block text-lg font-extrabold text-brand-yellow hover:underline">
                        +91 89767 20830
                      </a>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-brand-yellow hover:text-brand-black"
                    >
                      {copiedPhone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copiedPhone ? "Copied!" : "Copy Number"}
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== 5) ALL PARTNER LOGOS (moving rows) ===== */}
        <section className="py-20 bg-gray-50/50 border-y border-slate-100 overflow-hidden" id="partners-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Network of Change
              </h3>
              <p className="text-slate-600 text-lg mt-2">
                Proudly supported by {NETWORK_TOTAL} partners
              </p>
            </div>
          </div>
          <LogoMarquee groups={NETWORK_ROWS} />
        </section>

        <PartnerCategories current="corporate" />

      </div>
    </Layout>
  );
}
