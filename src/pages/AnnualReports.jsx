// src/pages/AnnualReports.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { annualReportsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import { StatsBand, ReportCard, ReportGrid } from "../components/reports/ReportBlocks";
import { FileText, Calendar, Users, CheckCircle } from "lucide-react";

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
      <img fetchPriority="high" decoding="async"
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

/* Same stats band as the Impact Reports and Gender Journey pages (numbers count up when they scroll into view) */
const ANNUAL_STATS = [
  { prefix: "", to: 15, decimals: 0, suffix: "+", label: "Years Documented", Icon: Calendar, color: "yellow" },
  { prefix: "", to: 16, decimals: 0, suffix: "", label: "Annual Reports", Icon: FileText, color: "green" },
  { prefix: "", to: 2.5, decimals: 1, suffix: "M+", label: "Lives Documented", Icon: Users, color: "red" },
  { prefix: "", to: 100, decimals: 0, suffix: "%", label: "Transparency", Icon: CheckCircle, color: "blue" },
];

function AnnualReportsStats() {
  return <StatsBand eyebrow="Our reports at a glance" stats={ANNUAL_STATS} />;
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
      <div className="bg-slate-50 text-ink min-h-screen">
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

            <ReportGrid count={filteredReports.length}>
              {filteredReports.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} kind="Annual Report" tag={`Theme: ${report.theme}`} highlights={report.highlights} />
              ))}
            </ReportGrid>
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
      </div>
    </Layout>
  );
}