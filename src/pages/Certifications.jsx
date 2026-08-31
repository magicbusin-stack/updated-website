// src/pages/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { certificationsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
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
      <img
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
          <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
            Transparency & Compliance
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
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
function CertificationStats() {
  const stats = [
    { number: "12+", label: "Active Certifications", icon: <ShieldCheck className="w-8 h-8" /> },
    { number: "100%", label: "Compliance Rate", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "2006", label: "Established Since", icon: <Calendar className="w-8 h-8" /> },
    { number: "5+", label: "Regulatory Bodies", icon: <Building className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-red">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-ink mb-2">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
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


/* ---------------- Main Certifications Component ---------------- */
export default function Certifications() {
  return (
    <Layout>
        <FaqSchema faqs={certificationsFAQ} />
      <main className="bg-slate-50 text-ink min-h-screen">
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

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 bg-white rounded-xl border border-slate-200 p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">Commitment to Transparency</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Magic Bus India Foundation maintains all necessary certifications and registrations
                  to ensure full compliance with Indian regulations and international standards.
                  Our commitment to transparency means all our documents are regularly updated and available for review.
                </p>
              </div>
            </motion.div>
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

              <div className="flex flex-wrap justify-center gap-4">
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
      </main>
    </Layout>
  );
}