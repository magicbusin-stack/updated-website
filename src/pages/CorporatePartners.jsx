// src/pages/CorporatePartners.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, Phone, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import PartnerHeadline from "../components/Corporate/PartnerHeadline";
import PartnerCategories from "../components/Corporate/PartnerCategories";
import LogoMarquee from "../components/Corporate/LogoMarquee";
import { corporatePartners } from "../data/corporatePartners";

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

            {/* The quote, in the same dark card as the testimonials on the other pages */}
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_EXPO }}
              className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] p-6 shadow-2xl ring-1 ring-brand-red/40 sm:p-10 md:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-red/30 blur-3xl" />
              <Quote aria-hidden="true" className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-white/10 sm:right-8 sm:top-6 sm:h-40 sm:w-40" />
              <div className="relative">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow shadow-lg">
                  <Quote className="h-6 w-6 text-brand-black" />
                </span>
                <blockquote className="text-lg font-semibold leading-relaxed text-white sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-relaxed">
                  &ldquo;These partnerships are built on a shared vision of shared values and goals. We recognize and acknowledge their contributions. Without this support, we would not be able to achieve the level of success we have today.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 sm:mt-7">
                  <span className="h-1 w-10 shrink-0 rounded-full bg-brand-yellow" />
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow sm:text-base">Magic Bus India Foundation</span>
                </figcaption>
              </div>
            </motion.figure>
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
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                    CSR & Employee Volunteering Partnership
                  </h3>
                  <p className="mt-3 text-slate-800 text-lg leading-relaxed">
                    Collaborate with us to design meaningful volunteering programs, maximize CSR alignment, and empower youth.
                  </p>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
                  
                  {/* Email + phone: dark contact cards with a yellow icon, like the contact cards on the other pages */}
                  <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#1A1A1A] p-5 text-left shadow-lg sm:max-w-xs">
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

                  <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#1A1A1A] p-5 text-left shadow-lg sm:max-w-xs">
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
                Proudly supported by {PARTNERS.length} corporate partners
              </p>
            </div>
          </div>
          <LogoMarquee partners={PARTNERS} rows={4} />
        </section>

        <PartnerCategories current="corporate" />

      </div>
    </Layout>
  );
}
