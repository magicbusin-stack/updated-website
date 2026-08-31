// src/pages/GenderJourneyReport.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { genderJourneyFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import {
  FileText,
  Download,
  Calendar,
  Eye,
  Users,
  TrendingUp,
  Heart,
  Award,
  CheckCircle,
  Target,
  BookOpen,
  Star,
} from "lucide-react";

/**
 * Gender Journey Report Page
 * Colors updated: purple/pink -> brand-red / brand-yellow
 * Text normalized to neutral shades (text-ink, slate, neutral)
 *
 * NOTE:
 * - This file uses utility classes like `brand-red`, `brand-yellow`, `text-ink`.
 *   Make sure these tokens exist in your Tailwind config (or replace with hex/classes).
 */

const GENDER_REPORTS_DATA = [
  {
    id: 1,
    title: "Gender Journey Report 2023-24",
    subtitle: "Empowering Girls Through Education and Life Skills",
    year: "2023-24",
    description:
      "Comprehensive analysis of our gender-focused interventions, tracking the journey of adolescent girls through education, life skills development, and empowerment programs.",
    fileSize: "6.8 MB",
    pages: 95,
    downloadUrl: "#",
    featured: true,
    publishDate: "2024-09-15",
    keyFindings: [
      "85% improvement in self-confidence among participants",
      "78% increase in school retention rates",
      "92% completion rate for life skills programs",
      "67% participants pursuing higher education",
    ],
    methodology: "Mixed-methods research with 2,500+ participants across 8 states",
  },
  {
    id: 2,
    title: "Adolescent Girls Empowerment Study 2022-23",
    subtitle: "Breaking Barriers, Building Futures",
    year: "2022-23",
    description:
      "In-depth study examining the challenges faced by adolescent girls in rural and urban settings, and the effectiveness of our intervention programs.",
    fileSize: "5.4 MB",
    pages: 78,
    downloadUrl: "#",
    featured: false,
    publishDate: "2023-07-20",
    keyFindings: [
      "73% reduction in early marriage intentions",
      "89% improvement in health awareness",
      "65% increase in career aspirations",
      "81% participants became peer educators",
    ],
    methodology: "Longitudinal study with control groups across 6 states",
  },
  {
    id: 3,
    title: "Women's Leadership Development Report 2021-22",
    subtitle: "From Participants to Leaders",
    year: "2021-22",
    description:
      "Analysis of leadership development outcomes among women participants, tracking their progression from beneficiaries to community leaders and change agents.",
    fileSize: "4.9 MB",
    pages: 68,
    downloadUrl: "#",
    featured: false,
    publishDate: "2022-08-10",
    keyFindings: [
      "156 women became community leaders",
      "45% started their own enterprises",
      "91% reported increased decision-making power",
      "68% became mentors for other women",
    ],
    methodology: "Case study approach with 500+ women leaders",
  },
];

function GenderJourneyHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/4.JPG"
        alt="Gender Journey Report"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2";
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
          <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
            Gender Empowerment
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Empowering Girls & Women
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Our Gender Journey Reports document the transformative impact of our
            gender-focused programs, showcasing how we empower girls and women
            to become leaders and change agents in their communities.
          </p>

          <div className="mt-6">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-yellow/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Gender Reports
                <Heart className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GenderStats() {
  const stats = [
    { number: "50K+", label: "Girls Empowered", icon: <Users className="w-8 h-8" /> },
    { number: "85%", label: "Confidence Boost", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "78%", label: "School Retention", icon: <BookOpen className="w-8 h-8" /> },
    { number: "156", label: "Women Leaders", icon: <Star className="w-8 h-8" /> },
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

function GenderReportCard({ report, index }) {
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
              <Heart className="w-6 h-6 text-brand-red" />
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
              <p className="text-xs text-slate-500">Gender Research</p>
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

export default function GenderJourneyReport() {
  return (
    <Layout>
        <FaqSchema faqs={genderJourneyFAQ} />
      <main className="bg-slate-50 text-ink min-h-screen">
        <GenderJourneyHero />
        <GenderStats />

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
                Gender Journey Reports
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Research-based reports documenting the empowerment journey of girls
                and women through our programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GENDER_REPORTS_DATA.map((report, index) => (
                <GenderReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-ink mb-4">Our Gender Impact Areas</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Key areas where our gender-focused programs create lasting change
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Education",
                  icon: <BookOpen className="w-8 h-8" />,
                  desc: "Keeping girls in school and supporting higher education",
                },
                {
                  title: "Life Skills",
                  icon: <Target className="w-8 h-8" />,
                  desc: "Building confidence, communication, and leadership skills",
                },
                {
                  title: "Health Awareness",
                  icon: <Heart className="w-8 h-8" />,
                  desc: "Reproductive health education and wellness programs",
                },
                {
                  title: "Leadership",
                  icon: <Award className="w-8 h-8" />,
                  desc: "Developing women leaders and change agents",
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
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Empowering the Next Generation</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our gender journey reports showcase the transformative power of
                education, life skills, and empowerment programs in creating
                lasting change for girls and women.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-red font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download All Gender Reports
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Support Our Programs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          items={genderJourneyFAQ}
          title="Gender Journey FAQs"
          subtitle="Common questions about our gender empowerment research, programmes, and impact."
          categoriesLabel="Filter by topic"
        />
      </main>
    </Layout>
  );
}
