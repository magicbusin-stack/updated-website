// src/pages/ImpactReports.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import {
  FileText,
  Download,
  Calendar,
  Eye,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";

/**
 * Impact Reports Page
 * Dedicated page for impact measurement and evaluation reports
 */

const IMPACT_REPORTS_DATA = [
  {
    id: 1,
    title: "Impact Assessment Report 2023-24",
    year: "2023-24",
    type: "Impact Assessment",
    description: "Comprehensive impact evaluation measuring program effectiveness, beneficiary outcomes, and long-term social change across all intervention areas.",
    fileSize: "5.2 MB",
    pages: 85,
    downloadUrl: "#",
    featured: true,
    publishDate: "2024-10-15",
    highlights: ["95% skill improvement", "78% employment rate", "2.5M+ lives impacted"]
  },
  {
    id: 2,
    title: "Program Effectiveness Study 2022-23",
    year: "2022-23",
    type: "Effectiveness Study",
    description: "Detailed analysis of program delivery mechanisms, beneficiary satisfaction, and measurable outcomes across different demographic segments.",
    fileSize: "4.8 MB",
    pages: 72,
    downloadUrl: "#",
    featured: true,
    publishDate: "2023-09-30",
    highlights: ["92% completion rate", "85% satisfaction score", "1.8M+ beneficiaries"]
  },
  {
    id: 3,
    title: "Social Return on Investment (SROI) Analysis 2023",
    year: "2023",
    type: "SROI Analysis",
    description: "Quantitative assessment of social value created per rupee invested, demonstrating the economic impact of our interventions.",
    fileSize: "3.5 MB",
    pages: 45,
    downloadUrl: "#",
    featured: false,
    publishDate: "2023-12-20",
    highlights: ["1:7.2 SROI ratio", "₹850Cr social value", "15 states covered"]
  },
  {
    id: 4,
    title: "Longitudinal Impact Study 2020-2023",
    year: "2020-2023",
    type: "Longitudinal Study",
    description: "Three-year tracking study following beneficiaries to measure sustained impact and long-term behavioral changes.",
    fileSize: "6.1 MB",
    pages: 95,
    downloadUrl: "#",
    featured: false,
    publishDate: "2023-08-15",
    highlights: ["3-year tracking", "80% retention rate", "Sustained behavior change"]
  }
];

function ImpactReportsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden  ">
      <img
        src="/ngo-images/3.JPG"
        alt="Impact Reports"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71";
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
            Impact Measurement
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Measuring Real Impact
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Our impact reports provide evidence-based insights into program effectiveness,
            beneficiary outcomes, and the measurable social change we create in communities across India.
          </p>

          <div className="mt-6">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Impact Reports
                <BarChart3 className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    { number: "2.5M+", label: "Lives Impacted", icon: <Users className="w-8 h-8" /> },
    { number: "95%", label: "Skill Improvement", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "1:7.2", label: "SROI Ratio", icon: <Target className="w-8 h-8" /> },
    { number: "15", label: "States Covered", icon: <Award className="w-8 h-8" /> },
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

function ImpactReportCard({ report, index }) {
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
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
                  {report.year}
                </span>
                {report.featured && (
                  <span className="bg-brand-red text-white px-2 py-1 rounded-md text-xs font-medium">
                    Latest
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">{report.type}</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-ink mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
          {report.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {report.description}
        </p>

        {/* Key Highlights */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">Key Highlights</h4>
          <div className="space-y-1">
            {report.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-xs text-slate-600">{highlight}</span>
              </div>
            ))}
            {report.highlights.length > 2 && (
              <div className="text-xs text-blue-600 font-medium">
                +{report.highlights.length - 2} more insights
              </div>
            )}
          </div>
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
            {new Date(report.publishDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-red/90 transition-colors flex items-center gap-2"
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

export default function ImpactReports() {
  return (
    <Layout>
      <main className="bg-slate-50 text-ink min-h-screen">
        <ImpactReportsHero />
        <ImpactStats />

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
                Impact Assessment Reports
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Evidence-based reports showcasing measurable outcomes and social impact across our programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {IMPACT_REPORTS_DATA.map((report, index) => (
                <ImpactReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Rigorous Impact Methodology</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our impact assessments follow internationally recognized evaluation frameworks,
                ensuring credible and actionable insights for continuous program improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Data Collection</h4>
                  <p className="text-sm text-white/80">Primary and secondary data from multiple stakeholders</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Analysis Framework</h4>
                  <p className="text-sm text-white/80">Theory of Change and Results-Based Measurement</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">External Validation</h4>
                  <p className="text-sm text-white/80">Third-party evaluation and peer review process</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}