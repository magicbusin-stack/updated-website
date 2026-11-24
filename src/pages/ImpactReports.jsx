// src/pages/ImpactReports.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { StatsBand, ReportCard, ReportGrid } from "../components/reports/ReportBlocks";
import { BarChart3, TrendingUp, Users, Target, Award, CheckCircle } from "lucide-react";

/**
 * Impact Reports Page
 * Dedicated page for impact measurement and evaluation reports.
 * To make a Download button work: put the PDF in /public/reports/ and set downloadUrl to "/reports/<file>.pdf".
 * Until a real link is set (downloadUrl: "#"), the card shows "PDF coming soon" instead of a button that does nothing.
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
    highlights: ["95% skill improvement", "78% employment rate", "2.5M+ lives impacted"],
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
    highlights: ["92% completion rate", "85% satisfaction score", "1.8M+ beneficiaries"],
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
    highlights: ["1:7.2 SROI ratio", "₹850Cr social value", "15 states covered"],
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
    highlights: ["3-year tracking", "80% retention rate", "Sustained behavior change"],
  },
];

/* ------------------------------ hero ------------------------------ */
function ImpactReportsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img fetchPriority="high" decoding="async"
        src="/ngo-images/3.JPG"
        alt="Impact Reports"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div className="max-w-3xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="inline-block border border-brand-yellow/40 bg-brand-yellow/10 text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-base font-semibold">Impact Measurement</span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Measuring Real Impact</h1>

          <p className="mt-5 text-xl md:text-2xl text-white leading-relaxed">
            Our impact reports provide evidence-based insights into program effectiveness, beneficiary outcomes, and the measurable social change we create in communities across
            India.
          </p>

          <div className="mt-8">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-9 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Impact Reports
                <BarChart3 className="w-5 h-5" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ stats ------------------------------ */
const STATS = [
  { prefix: "", to: 2.5, decimals: 1, suffix: "M+", label: "Lives Impacted", Icon: Users, color: "yellow" },
  { prefix: "", to: 95, decimals: 0, suffix: "%", label: "Skill Improvement", Icon: TrendingUp, color: "green" },
  { prefix: "1:", to: 7.2, decimals: 1, suffix: "", label: "SROI Ratio", Icon: Target, color: "red" },
  { prefix: "", to: 15, decimals: 0, suffix: "", label: "States Covered", Icon: Award, color: "blue" },
];

function ImpactStats() {
  return <StatsBand eyebrow="Our impact at a glance" stats={STATS} />;
}

export default function ImpactReports() {
  return (
    <Layout>
      <div className="bg-slate-50 text-ink min-h-screen">
        <ImpactReportsHero />
        <ImpactStats />

        {/* Reports Section */}
        <section id="reports" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-ink leading-tight">Impact Assessment Reports</h2>
              <div className="mx-auto mt-4 mb-6 h-1.5 w-24 rounded bg-brand-yellow" />
              <p className="mx-auto max-w-3xl text-xl text-slate-600 leading-relaxed">Evidence-based reports showcasing measurable outcomes and social impact across our programs</p>
            </motion.div>

            <ReportGrid count={IMPACT_REPORTS_DATA.length}>
              {IMPACT_REPORTS_DATA.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} kind={report.type} highlights={report.highlights} />
              ))}
            </ReportGrid>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow">
          <div className="max-w-5xl mx-auto px-6 text-center text-white">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-5">Rigorous Impact Methodology</h3>
              <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Our impact assessments follow internationally recognized evaluation frameworks, ensuring credible and actionable insights for continuous program improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {[
                  ["Data Collection", "Primary and secondary data from multiple stakeholders"],
                  ["Analysis Framework", "Theory of Change and Results-Based Measurement"],
                  ["External Validation", "Third-party evaluation and peer review process"],
                ].map(([t, d]) => (
                  <div key={t} className="bg-white/10 rounded-2xl p-7 backdrop-blur-sm">
                    <h4 className="text-xl font-bold mb-2">{t}</h4>
                    <p className="text-lg text-white/90 leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
