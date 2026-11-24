// src/pages/Certifications.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { certificationsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import { CountUp } from "../components/reports/ReportBlocks";
import {
  Shield,
  Award,
  CheckCircle,
  Calendar,
  Building,
  FileText,
  Globe,
  Star,
  Verified,
  ShieldCheck,
  Users,
  Eye,
} from "lucide-react";

/**
 * Certifications Page
 * Features:
 * - Hero section highlighting transparency
 * - Certification cards with details
 * - Interactive certification viewer
 * - Download functionality
 * - Consistent theme and design
 */

/* ---------------- Certifications Data ---------------- */
const CERTIFICATIONS = [
  {
    id: 1,
    name: "MCA & FCRA Certificate",
    description: "Magic Bus India Foundation is registered for undertaking Microfinance unit of operation. MCA Certificate is issued by the office of the Registrar of Companies under Ministry of Corporate Affairs, GoI. It is the approval of Companies under Ministry of Corporate Affairs, GoI. The FCRA Certificate is for the purpose of incorporation and operation.",
    registrationNo: "U91110MH2006NPL163893",
    issuingAuthority: "Ministry of Corporate Affairs, Government of India",
    type: "Legal Registration",
    status: "Active",
    validUntil: "Perpetual",
    downloadUrl: "#",
    icon: <Building className="w-6 h-6" />,
    color: "bg-blue-500",
    featured: true
  },
  {
    id: 2,
    name: "PAN",
    description: "Permanent Account Number",
    registrationNo: "AAATC2664F",
    issuingAuthority: "Income Tax Department, Government of India",
    type: "Tax Registration",
    status: "Active",
    validUntil: "Perpetual",
    downloadUrl: "#",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-green-500",
    featured: false
  },
  {
    id: 3,
    name: "TAN",
    description: "Tax Deduction Account Number",
    registrationNo: "MUMB00794D",
    issuingAuthority: "Income Tax Department, Government of India",
    type: "Tax Registration",
    status: "Active",
    validUntil: "Perpetual",
    downloadUrl: "#",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-green-500",
    featured: false
  },
  {
    id: 4,
    name: "80G Certificate",
    description: "Magic Bus India Foundation is registered for 12A with the office of the Registrar of Companies under Ministry of Corporate Affairs, GoI. 12A registration is granted by the Income Tax Department. This 80G Certificate is granted by the Income Tax Department for the purpose of tax exemption.",
    registrationNo: "AAATC2664FE20214",
    issuingAuthority: "Income Tax Department, Government of India",
    type: "Tax Exemption",
    status: "Active",
    validUntil: "March 2025",
    downloadUrl: "#",
    icon: <Award className="w-6 h-6" />,
    color: "bg-purple-500",
    featured: true
  },
  {
    id: 5,
    name: "12A Certificate",
    description: "Magic Bus India Foundation is registered for 12A with the office of the Registrar of Companies under Ministry of Corporate Affairs, GoI. 12A registration is granted by the Income Tax Department. This 12A Certificate is granted by the Income Tax Department for the purpose of tax exemption.",
    registrationNo: "AAATC2664FE20214",
    issuingAuthority: "Income Tax Department, Government of India",
    type: "Tax Exemption",
    status: "Active",
    validUntil: "March 2025",
    downloadUrl: "#",
    icon: <Award className="w-6 h-6" />,
    color: "bg-purple-500",
    featured: true
  },
  {
    id: 6,
    name: "FCRA Certificate",
    description: "Magic Bus India Foundation is registered for undertaking FCRA with the office of the Registrar of Companies under Ministry of Corporate Affairs, GoI. Under Section 6(1) of the Foreign Contribution Regulations, 2010 and FCRA Certificate is granted by the Home Ministry, Government of India for the purpose of receiving foreign contribution for charitable activities.",
    registrationNo: "083781016",
    issuingAuthority: "Ministry of Home Affairs, Government of India",
    type: "Foreign Contribution",
    status: "Active",
    validUntil: "December 2025",
    downloadUrl: "#",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-indigo-500",
    featured: true
  },
  {
    id: 7,
    name: "CSR 1 Certificate",
    description: "Magic Bus India Foundation is registered for undertaking CSR activities with the office of the Registrar of Companies under Ministry of Corporate Affairs, GoI. It is a CSR 1 Certificate is required for non-profit organizations to get funding from corporates and undertake CSR activities.",
    registrationNo: "CSR00001330",
    issuingAuthority: "Ministry of Corporate Affairs, Government of India",
    type: "CSR Registration",
    status: "Active",
    validUntil: "Perpetual",
    downloadUrl: "#",
    icon: <Building className="w-6 h-6" />,
    color: "bg-orange-500",
    featured: false
  },
  {
    id: 8,
    name: "Board of Directors",
    description: "Magic Bus has appointed Board of Directors. The updated register of board members as of FY 2024 - 2025 is maintained and available for review.",
    registrationNo: "Click here to view the Board of Directors",
    issuingAuthority: "Magic Bus India Foundation",
    type: "Governance",
    status: "Updated",
    validUntil: "Annual Update",
    downloadUrl: "#",
    icon: <Users className="w-6 h-6" />,
    color: "bg-teal-500",
    featured: false
  },
  {
    id: 9,
    name: "NGO Darpan Certificate",
    description: "Magic Bus India Foundation is registered and recognized by the government on NGO Darpan as a non-profit organization for the purpose of transparency and to register and manage non-profit organizations in India.",
    registrationNo: "MH/2017/0146479, UP/110MH2006NPL163893",
    issuingAuthority: "NITI Aayog, Government of India",
    type: "NGO Registration",
    status: "Active",
    validUntil: "Perpetual",
    downloadUrl: "#",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-red-500",
    featured: true
  },
  {
    id: 10,
    name: "ISO Certificate",
    description: "Magic Bus Training Services is now ISO 9001:2015 certified. This Office has functions have validated to be in line with international Quality Management System.",
    registrationNo: "ISO9 20019000",
    issuingAuthority: "International Organization for Standardization",
    type: "Quality Management",
    status: "Active",
    validUntil: "2026",
    downloadUrl: "#",
    icon: <Star className="w-6 h-6" />,
    color: "bg-yellow-500",
    featured: true
  },
  {
    id: 11,
    name: "NGOsource Equivalency Determination Certificate",
    description: "Magic Bus has an NGOsource Equivalency Determination (ED) Certificate. Equivalency Determination (ED) is a process by which U.S. grantmakers can make grants to non-U.S. organizations that are the equivalent of U.S. public charities. The grantmaker must collect a set of detailed information about the grantee organization and then can and make a reasonable determination of its equivalency to a U.S. public charity.",
    registrationNo: "NGOsource Verified",
    issuingAuthority: "NGOsource (TechSoup Global)",
    type: "International Recognition",
    status: "Active",
    validUntil: "Annual Review",
    downloadUrl: "#",
    icon: <Verified className="w-6 h-6" />,
    color: "bg-cyan-500",
    featured: true
  },
  {
    id: 12,
    name: "GuideStar Gold Certificate",
    description: "Magic Bus India Foundation has a registered GuideStar Certificate. This recognition is based on the FCRA applications as accepted by and Manual of of legal and financial compliance, transparency, accountability and governance.",
    registrationNo: "GuideStar Gold Certified",
    issuingAuthority: "GuideStar India",
    type: "Transparency Certification",
    status: "Active",
    validUntil: "Annual Review",
    downloadUrl: "#",
    icon: <Award className="w-6 h-6" />,
    color: "bg-amber-500",
    featured: true
  }
];

/* ---------------- Hero Section ---------------- */
function CertificationsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img fetchPriority="high" decoding="async"
        src="/ngo-images/award1.jpg"
        alt="Magic Bus Certifications"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
            Transparency & Compliance
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight bg-gradient-to-r from-brand-red via-brand-yellow to-white bg-clip-text text-transparent">
            Transparency is at the Heart of Magic Bus
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Magic Bus is a non-profit organization registered as Magic Bus India Foundation under section 8 of the Companies Act 2013.
            We maintain the highest standards of transparency, accountability, and compliance with all regulatory requirements.
          </p>

          <div className="mt-6">
            <motion.a
              href="#certifications"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Certifications
                <Shield className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats Section ---------------- */
/* Four number cards: the figure counts up when it scrolls into view; each card lifts, glows and shows a coloured bar on hover. */
const STAT_STYLES = {
  red: { block: "bg-brand-red text-white", bar: "bg-brand-red", glow: "bg-brand-red/15" },
  blue: { block: "bg-brand-blue text-brand-black", bar: "bg-brand-blue", glow: "bg-brand-blue/20" },
  yellow: { block: "bg-brand-yellow text-brand-black", bar: "bg-brand-yellow", glow: "bg-brand-yellow/25" },
  green: { block: "bg-brand-green text-brand-black", bar: "bg-brand-green", glow: "bg-brand-green/25" },
};

function CertificationStats() {
  const stats = [
    { to: 12, suffix: "+", label: "Active Certifications", Icon: ShieldCheck, color: "red" },
    { to: 100, suffix: "%", label: "Compliance Rate", Icon: CheckCircle, color: "blue" },
    { to: 2006, suffix: "", label: "Established Since", Icon: Calendar, color: "yellow" },
    { to: 5, suffix: "+", label: "Regulatory Bodies", Icon: Building, color: "green" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => {
            const c = STAT_STYLES[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-default overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${c.glow}`} />
                <span className={`relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${c.block}`}>
                  <stat.Icon className="h-8 w-8" />
                </span>
                <div className="relative mt-6 text-5xl md:text-6xl font-black leading-none tracking-tight text-ink">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="relative mt-3 text-lg md:text-xl font-bold text-slate-700">{stat.label}</div>
                <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${c.bar}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Modern Certifications Table ---------------- */
function CertificationsTable() {
  const getIconColorClasses = (color) => {
    const colorMap = {
      'bg-blue-500': 'bg-blue-50 text-blue-600',
      'bg-green-500': 'bg-green-50 text-green-600',
      'bg-purple-500': 'bg-purple-50 text-purple-600',
      'bg-indigo-500': 'bg-indigo-50 text-indigo-600',
      'bg-orange-500': 'bg-orange-50 text-orange-600',
      'bg-teal-500': 'bg-teal-50 text-teal-600',
      'bg-red-500': 'bg-red-50 text-red-600',
      'bg-yellow-500': 'bg-yellow-50 text-yellow-600',
      'bg-cyan-500': 'bg-cyan-50 text-cyan-600',
      'bg-amber-500': 'bg-amber-50 text-amber-600',
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Certificate</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Registration No.</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Issuing Authority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Valid Until</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {CERTIFICATIONS.map((certification, index) => (
              <motion.tr
                key={certification.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColorClasses(certification.color)}`}>
                      {certification.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-semibold text-ink text-sm">{certification.name}</div>
                        {certification.featured && (
                          <span className="bg-brand-red text-white px-2 py-1 rounded-md text-xs font-medium">
                            Key
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-2 max-w-xs">
                        {certification.description.length > 100
                          ? `${certification.description.substring(0, 100)}...`
                          : certification.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-ink break-all max-w-xs">
                    {certification.registrationNo}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-slate-600 max-w-xs">
                    {certification.issuingAuthority}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {certification.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                    certification.status === 'Active'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      certification.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    {certification.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-slate-600">{certification.validUntil}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/* ---------------- Commitment to Transparency (interactive) ---------------- */
/* The three parts of the original paragraph, one per tab. Hover or click a tab to read that part. */
const COMMITMENT_POINTS = [
  {
    label: "Certifications & registrations",
    Icon: FileText,
    text: "Magic Bus India Foundation maintains all necessary certifications and registrations",
  },
  {
    label: "Full compliance",
    Icon: CheckCircle,
    text: "to ensure full compliance with Indian regulations and international standards.",
  },
  {
    label: "Open for review",
    Icon: Eye,
    text: "Our commitment to transparency means all our documents are regularly updated and available for review.",
  },
];

function TransparencyCommitment() {
  const [active, setActive] = useState(0);
  const current = COMMITMENT_POINTS[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red" />
      <div className="p-8 md:p-12">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/10">
            <Shield className="h-10 w-10 text-brand-red" />
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-ink">Commitment to Transparency</h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg md:text-xl font-medium text-slate-700">
            Select a point below to read it.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 grid gap-3 md:grid-cols-3" role="tablist" aria-label="Commitment to Transparency">
          {COMMITMENT_POINTS.map((pt, i) => {
            const on = i === active;
            return (
              <button
                key={pt.label}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group flex items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/25 ${
                  on ? "border-brand-red bg-brand-red text-white shadow-lg -translate-y-1" : "border-slate-200 bg-slate-50 text-ink hover:border-brand-red/40 hover:bg-white"
                }`}
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${on ? "bg-white/20 text-white" : "bg-brand-red/10 text-brand-red"}`}>
                  <pt.Icon className="h-6 w-6" />
                </span>
                <span className="text-lg md:text-xl font-extrabold leading-snug">{pt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected point */}
        <div className="mt-6 rounded-2xl bg-slate-50 p-6 md:p-8" role="tabpanel" aria-live="polite">
          <p className="text-center text-xl md:text-2xl font-semibold leading-relaxed text-slate-500">
            {COMMITMENT_POINTS.map((pt, i) => (
              <span
                key={pt.label}
                className={`transition-colors duration-300 ${
                  i === active ? "font-extrabold text-brand-red" : "text-slate-600"
                }`}
              >
                {pt.text}{" "}
              </span>
            ))}
          </p>
          <div className="mt-5 flex justify-center gap-2">
            {COMMITMENT_POINTS.map((pt, i) => (
              <span key={pt.label} className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-brand-red" : "w-2 bg-slate-300"}`} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Main Certifications Component ---------------- */
export default function Certifications() {
  return (
    <Layout>
        <FaqSchema faqs={certificationsFAQ} />
      <div className="bg-slate-50 text-ink min-h-screen">
        <CertificationsHero />

        <CertificationStats />

        {/* Certifications Table */}
        <section id="certifications" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                Our Certifications & Compliance Documents
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complete overview of our certifications, registrations, and compliance documents that demonstrate
                our commitment to transparency, accountability, and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <CertificationsTable />
            </motion.div>

            {/* Additional Info: Commitment to Transparency (pick a point to read it) */}
            <TransparencyCommitment />
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-12 border border-slate-200"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-red" />
              </div>

              <h3 className="text-3xl font-bold text-ink mb-4">Built on Trust & Transparency</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Every certification represents our unwavering commitment to accountability,
                transparency, and the highest standards of organizational governance.
              </p>

              <div className="cta-pair mx-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-red/90 transition-colors inline-flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Learn More About Our Governance
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download All Certificates
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          items={certificationsFAQ}
          title="Certifications FAQs"
          subtitle="Common questions about our certifications, compliance documents, and transparency practices."
          categoriesLabel="Filter by category"
        />
      </div>
    </Layout>
  );
}