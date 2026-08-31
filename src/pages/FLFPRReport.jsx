// src/pages/FLFPRReport.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { flfprFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import {
  FileText,
  Download,
  Calendar,
  Eye,
  Users,
  TrendingUp,
  Briefcase,
  Award,
  CheckCircle,
  Target,
  BarChart3,
  PieChart,
} from "lucide-react";

/**
 * FLFPR (Female Labour Force Participation Rate) Report Page
 * Colors updated: blue/indigo -> brand-red / brand-yellow
 * Text normalized to neutral shades (text-ink, slate, neutral)
 *
 * Make sure `brand-red`, `brand-yellow`, and `text-ink` tokens are defined in Tailwind config,
 * or replace them with your preferred utility classes (e.g. bg-red-600, text-red-600).
 */

const FLFPR_REPORTS_DATA = [
  {
    id: 1,
    title: "Female Labour Force Participation Rate Study 2023-24",
    subtitle: "Bridging the Gender Gap in Workforce Participation",
    year: "2023-24",
    description:
      "Comprehensive research on factors affecting women's participation in the labour force, barriers to employment, and the impact of our skill development programs on increasing FLFPR.",
    fileSize: "7.2 MB",
    pages: 110,
    downloadUrl: "#",
    featured: true,
    publishDate: "2024-10-20",
    keyFindings: [
      "32% increase in FLFPR among program participants",
      "78% of trained women found employment within 6 months",
      "45% started their own micro-enterprises",
      "89% reported increased household decision-making power",
      "67% continued working after 2 years",
    ],
    methodology: "Longitudinal study with 3,200+ women across 12 states",
    sectors: ["Manufacturing", "Services", "Agriculture", "Entrepreneurship"],
  },
  {
    id: 2,
    title: "Women's Economic Empowerment Report 2022-23",
    subtitle: "From Skills to Sustainable Livelihoods",
    year: "2022-23",
    description:
      "Analysis of economic empowerment outcomes among women participants, focusing on skill development, employment generation, and entrepreneurship support.",
    fileSize: "6.1 MB",
    pages: 88,
    downloadUrl: "#",
    featured: false,
    publishDate: "2023-09-25",
    keyFindings: [
      "28% increase in monthly household income",
      "72% of participants gained new skills",
      "56% transitioned to formal employment",
      "38% started small businesses",
      "84% reported improved financial literacy",
    ],
    methodology: "Mixed-methods research with 2,800+ participants",
    sectors: ["Retail", "Healthcare", "Technology", "Handicrafts"],
  },
  {
    id: 3,
    title: "Rural Women Workforce Integration Study 2021-22",
    subtitle: "Connecting Rural Talent to Market Opportunities",
    year: "2021-22",
    description:
      "Focused study on challenges and opportunities for rural women's integration into the formal workforce, including digital literacy and market linkage programs.",
    fileSize: "5.8 MB",
    pages: 75,
    downloadUrl: "#",
    featured: false,
    publishDate: "2022-08-30",
    keyFindings: [
      "65% improvement in digital literacy",
      "48% connected to urban job markets",
      "71% increased confidence in workplace",
      "52% pursued additional training",
      "79% became peer mentors",
    ],
    methodology: "Case study approach across 8 rural districts",
    sectors: ["Digital Services", "Textiles", "Food Processing", "Logistics"],
  },
];

function FLFPRHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/5.JPG"
        alt="FLFPR Report"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-brand-yellow text-black px-3 py-1 rounded-full text-sm font-semibold">
            Workforce Research
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Women in the Workforce
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Our FLFPR reports provide critical insights into women's labour force
            participation, identifying barriers and showcasing how our programs
            create pathways to sustainable employment and economic empowerment.
          </p>

          <div className="mt-6">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-yellow/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View FLFPR Reports
                <Briefcase className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FLFPRStats() {
  const stats = [
    { number: "32%", label: "FLFPR Increase", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "78%", label: "Employment Rate", icon: <Briefcase className="w-8 h-8" /> },
    { number: "3.2K+", label: "Women Studied", icon: <Users className="w-8 h-8" /> },
    { number: "12", label: "States Covered", icon: <Target className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
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
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-red">
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

function FLFPRReportCard({ report, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
                  {report.year}
                </span>
                {report.featured && (
                  <span className="bg-brand-yellow text-black px-2 py-1 rounded-md text-xs font-medium">
                    Latest
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">Workforce Research</p>
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold text-ink mb-1 line-clamp-2 group-hover:text-brand-red transition-colors">
          {report.title}
        </h3>

        <p className="text-sm text-brand-red font-medium mb-3">{report.subtitle}</p>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{report.description}</p>

        {/* Key Findings */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
            Key Findings
          </h4>
          <div className="space-y-1">
            {report.keyFindings.slice(0, 2).map((finding, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                <span className="text-xs text-slate-600">{finding}</span>
              </div>
            ))}
            {report.keyFindings.length > 2 && (
              <div className="text-xs text-brand-red font-medium">
                +{report.keyFindings.length - 2} more findings
              </div>
            )}
          </div>
        </div>

        {/* Sectors */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
            Sectors
          </h4>
          <div className="flex flex-wrap gap-1">
            {report.sectors.slice(0, 3).map((sector, idx) => (
              <span
                key={idx}
                className="bg-red-50 text-brand-red px-2 py-1 rounded-md text-xs"
              >
                {sector}
              </span>
            ))}
            {report.sectors.length > 3 && (
              <span className="text-xs text-brand-red font-medium">
                +{report.sectors.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-4 p-3 bg-red-50 rounded-lg">
          <h4 className="text-xs font-semibold text-brand-red mb-1 uppercase tracking-wide">
            Methodology
          </h4>
          <p className="text-xs text-brand-red">{report.methodology}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3 mb-4">
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <div className="text-sm font-bold text-ink">{report.pages}</div>
            <div className="text-xs text-slate-500">Pages</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <div className="text-sm font-bold text-ink">{report.fileSize}</div>
            <div className="text-xs text-slate-500">Size</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <div className="text-sm font-bold text-ink">PDF</div>
            <div className="text-xs text-slate-500">Format</div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            {new Date(report.publishDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FLFPRReport() {
  return (
    <Layout>
        <FaqSchema faqs={flfprFAQ} />
      <main className="bg-slate-50 text-ink min-h-screen">
        <FLFPRHero />
        <FLFPRStats />

        {/* Reports Section */}
        <section id="reports" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                FLFPR Research Reports
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Research-driven insights into women's workforce participation and economic empowerment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FLFPR_REPORTS_DATA.map((report, index) => (
                <FLFPRReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Research Framework Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-ink mb-4">Our Research Framework</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive approach to understanding and improving women's workforce participation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Barrier Analysis",
                  icon: <BarChart3 className="w-8 h-8" />,
                  desc: "Identifying systemic and individual barriers to employment",
                },
                {
                  title: "Skill Assessment",
                  icon: <Target className="w-8 h-8" />,
                  desc: "Evaluating current skills and training needs",
                },
                {
                  title: "Market Linkage",
                  icon: <PieChart className="w-8 h-8" />,
                  desc: "Connecting women to employment opportunities",
                },
                {
                  title: "Impact Tracking",
                  icon: <TrendingUp className="w-8 h-8" />,
                  desc: "Measuring long-term employment outcomes",
                },
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-yellow-50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-red">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-600">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-brand-red via-brand-yellow to-brand-red">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Driving Economic Inclusion</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our FLFPR research provides evidence-based insights to create more inclusive workplaces 
                and sustainable employment opportunities for women across India.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-red font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download All FLFPR Reports
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Partner with Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          items={flfprFAQ}
          title="FLFPR Report FAQs"
          subtitle="Frequently asked questions about our Female Labour Force Participation Rate research and reports."
          categoriesLabel="Filter by topic"
        />
      </main>
    </Layout>
  );
}
