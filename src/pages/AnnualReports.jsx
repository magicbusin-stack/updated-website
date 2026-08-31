// src/pages/AnnualReports.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { annualReportsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
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
 * Annual Reports Page
 * Dedicated page for comprehensive annual reports
 */

const ANNUAL_REPORTS_DATA = [
  {
    id: 1,
    title: "Annual Report 2023-24",
    year: "2023-24",
    description: "Our comprehensive annual report showcasing impact stories, program achievements, financial highlights, and strategic initiatives for the fiscal year 2023-24.",
    fileSize: "8.5 MB",
    pages: 120,
    downloadUrl: "#",
    featured: true,
    publishDate: "2024-08-30",
    theme: "Empowering Futures",
    highlights: ["2.5M+ lives impacted", "15 states", "95% program effectiveness"]
  },
  {
    id: 2,
    title: "Annual Report 2022-23",
    year: "2022-23",
    description: "Detailed annual report covering our programs, impact metrics, beneficiary stories, and organizational growth during 2022-23.",
    fileSize: "7.8 MB",
    pages: 115,
    downloadUrl: "#",
    featured: true,
    publishDate: "2023-08-25",
    theme: "Building Resilience",
    highlights: ["2.1M+ beneficiaries", "12 states", "92% completion rate"]
  },
  {
    id: 3,
    title: "Annual Report 2021-22",
    year: "2021-22",
    description: "Annual report highlighting our resilience and adaptation during challenging times, showcasing continued impact and program innovation.",
    fileSize: "7.2 MB",
    pages: 108,
    downloadUrl: "#",
    featured: false,
    publishDate: "2022-09-10",
    theme: "Adapting for Impact",
    highlights: ["1.8M+ lives touched", "Digital transformation", "Community partnerships"]
  },
  {
    id: 4,
    title: "Annual Report 2020-21",
    year: "2020-21",
    description: "Comprehensive report documenting our response to the pandemic and continued commitment to youth development and education.",
    fileSize: "6.9 MB",
    pages: 102,
    downloadUrl: "#",
    featured: false,
    publishDate: "2021-09-15",
    theme: "Resilience in Crisis",
    highlights: ["Pandemic response", "Digital reach", "Health initiatives"]
  },
  {
    id: 5,
    title: "Annual Report 2019-20",
    year: "2019-20",
    description: "Annual report showcasing significant program expansion and impact across multiple states in India.",
    fileSize: "6.5 MB",
    pages: 98,
    downloadUrl: "#",
    featured: false,
    publishDate: "2020-09-20",
    theme: "Scaling Impact",
    highlights: ["Program expansion", "New partnerships", "Innovation labs"]
  },
  {
    id: 6,
    title: "Annual Report 2018-19",
    year: "2018-19",
    description: "Detailed report covering program innovations, partnership developments, and measurable impact on youth development.",
    fileSize: "6.1 MB",
    pages: 95,
    downloadUrl: "#",
    featured: false,
    publishDate: "2019-09-25",
    theme: "Innovation & Growth",
    highlights: ["Technology integration", "Skill development", "Youth leadership"]
  }
];

function AnnualReportsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/1.JPG"
        alt="Annual Reports"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d";
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
            Annual Documentation
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Our Journey of Impact
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Comprehensive annual reports documenting our programs, achievements, challenges, and the transformative 
            impact we create in communities across India, year after year.
          </p>

          <div className="mt-6">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Annual Reports
                <FileText className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnnualReportsStats() {
  const stats = [
    { number: "15+", label: "Years Documented", icon: <Calendar className="w-8 h-8" /> },
    { number: "16", label: "Annual Reports", icon: <FileText className="w-8 h-8" /> },
    { number: "2.5M+", label: "Lives Documented", icon: <Users className="w-8 h-8" /> },
    { number: "100%", label: "Transparency", icon: <CheckCircle className="w-8 h-8" /> },
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

function AnnualReportCard({ report, index }) {
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
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600" />
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
              <p className="text-xs text-slate-500">Annual Report</p>
            </div>
          </div>
        </div>

        {/* Title & Theme */}
        <h3 className="text-lg font-bold text-ink mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
          {report.title}
        </h3>
        
        <div className="mb-3">
          <span className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 rounded-md text-xs font-medium">
            Theme: {report.theme}
          </span>
        </div>

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
              <div className="text-xs text-green-600 font-medium">
                +{report.highlights.length - 2} more achievements
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

function YearFilter({ activeYear, setActiveYear }) {
  const years = ["All Years", "2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-slate-600 mr-2">Filter by Year:</span>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeYear === year
                  ? "bg-brand-red text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnnualReports() {
  const [activeYear, setActiveYear] = useState("All Years");

  // Filter reports based on year
  const filteredReports = ANNUAL_REPORTS_DATA.filter(report => {
    return activeYear === "All Years" || report.year === activeYear;
  });

  return (
    <Layout>
        <FaqSchema faqs={annualReportsFAQ} />
      <main className="bg-slate-50 text-ink min-h-screen">
        <AnnualReportsHero />

        {/* Annual Reports Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-6">
                Annual Reports
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Magic Bus India Foundation, we are committed to upholding the highest
                standards of transparency and accountability. Our financial statements, audit reports, and
                evaluations undergo rigorous reviews and are shared with stakeholders for timely disclosure.
                These reports are also published in our annual reports and made accessible on our website.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Our annual reports serve as a testament to our impact, showcasing key initiatives that
                empower adolescents and youth. They provide a snapshot of our financial health, progress,
                and real-life stories of transformation, highlighting the resilience and growth of the
                communities we serve.
              </p>
            </motion.div>
          </div>
        </section>

        <AnnualReportsStats />
        <YearFilter activeYear={activeYear} setActiveYear={setActiveYear} />

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
                Annual Reports
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {filteredReports.length} {filteredReports.length === 1 ? 'report' : 'reports'} 
                {activeYear !== "All Years" && ` for ${activeYear}`}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report, index) => (
                <AnnualReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="py-16 bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">What's Inside Our Annual Reports</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Each annual report provides a comprehensive view of our work, impact, and organizational growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Program Impact</h4>
                  <p className="text-sm text-white/80">Detailed outcomes, beneficiary stories, and measurable results</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Financial Health</h4>
                  <p className="text-sm text-white/80">Transparent financial statements and fund utilization</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Strategic Vision</h4>
                  <p className="text-sm text-white/80">Future plans, innovations, and organizational development</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          items={annualReportsFAQ}
          title="Frequently Asked Questions"
          subtitle="Clear answers about our annual reports, financial statements, and impact documentation."
          categoriesLabel="Filter by topic"
        />
      </main>
    </Layout>
  );
}