// src/pages/FLFPRReport.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { flfprFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import { StatsBand, ReportCard, ReportGrid } from "../components/reports/ReportBlocks";
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
      <img fetchPriority="high" decoding="async"
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

/* Same stats band as the Impact Reports and Gender Journey pages (numbers count up when they scroll into view) */
const FLFPR_STATS = [
  { prefix: "", to: 32, decimals: 0, suffix: "%", label: "FLFPR Increase", Icon: TrendingUp, color: "yellow" },
  { prefix: "", to: 78, decimals: 0, suffix: "%", label: "Employment Rate", Icon: Briefcase, color: "green" },
  { prefix: "", to: 3.2, decimals: 1, suffix: "K+", label: "Women Studied", Icon: Users, color: "red" },
  { prefix: "", to: 12, decimals: 0, suffix: "", label: "States Covered", Icon: Target, color: "blue" },
];

function FLFPRStats() {
  return <StatsBand eyebrow="Our research at a glance" stats={FLFPR_STATS} />;
}

export default function FLFPRReport() {
  return (
    <Layout>
        <FaqSchema faqs={flfprFAQ} />
      <div className="bg-slate-50 text-ink min-h-screen">
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

            <ReportGrid count={FLFPR_REPORTS_DATA.length}>
              {FLFPR_REPORTS_DATA.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} kind="Workforce Research" tag={report.subtitle} highlights={report.keyFindings} />
              ))}
            </ReportGrid>
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
      </div>
    </Layout>
  );
}
