// src/pages/GenderJourneyReport.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { genderJourneyFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import { Link } from "react-router-dom";
import { StatsBand, HighlightsBox, ReportFacts, ReportActions } from "../components/reports/ReportBlocks";
import {
  FileText,
  Calendar,
  Users,
  TrendingUp,
  Heart,
  Award,
  Target,
  BookOpen,
  Star,
  ArrowRight,
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
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-1.5 rounded-full text-base font-semibold">
            Gender Empowerment
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Empowering Girls & Women
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-white/90 leading-relaxed">
            Our Gender Journey Reports document the transformative impact of our
            gender-focused programs, showcasing how we empower girls and women
            to become leaders and change agents in their communities.
          </p>

          <div className="mt-8">
            <motion.a
              href="#reports"
              className="group relative overflow-hidden rounded-full bg-brand-red px-9 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-yellow/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Gender Reports
                <Heart className="w-5 h-5" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const GENDER_STATS = [
  { prefix: "", to: 50, decimals: 0, suffix: "K+", label: "Girls Empowered", Icon: Users, color: "red" },
  { prefix: "", to: 85, decimals: 0, suffix: "%", label: "Confidence Boost", Icon: TrendingUp, color: "yellow" },
  { prefix: "", to: 78, decimals: 0, suffix: "%", label: "School Retention", Icon: BookOpen, color: "green" },
  { prefix: "", to: 156, decimals: 0, suffix: "", label: "Women Leaders", Icon: Star, color: "blue" },
];

function GenderStats() {
  return <StatsBand eyebrow="Our impact at a glance" stats={GENDER_STATS} />;
}

function GenderReportCard({ report, index, wide }) {
  const date = new Date(report.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:border-brand-red/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] ${wide ? "lg:col-span-2" : ""}`}
    >
      <span className="h-2 w-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
            <Heart className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-base font-semibold text-slate-700">{report.year}</span>
              {report.featured && <span className="rounded-full bg-brand-yellow px-3 py-1 text-base font-semibold text-black">Latest</span>}
            </div>
            <p className="mt-1.5 text-base font-medium uppercase tracking-wide text-slate-500">Gender Research</p>
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-extrabold leading-snug text-ink transition-colors group-hover:text-brand-red">{report.title}</h3>
        <p className="mt-2 text-lg font-semibold text-brand-red">{report.subtitle}</p>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{report.description}</p>

        {/* Key findings, highlighted */}
        <HighlightsBox title="Key findings" items={report.keyFindings} columns={wide ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"} />

        {/* Methodology */}
        <div className="mt-5 rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5">
          <h4 className="text-base font-extrabold uppercase tracking-wide text-brand-red">Methodology</h4>
          <p className="mt-1.5 text-lg leading-relaxed text-ink/85">{report.methodology}</p>
        </div>

        <ReportFacts pages={report.pages} fileSize={report.fileSize} />

        <p className="mt-5 flex items-center gap-2 text-base text-slate-500">
          <Calendar className="h-5 w-5" />
          Published {date}
        </p>

        <ReportActions url={report.downloadUrl} />
      </div>
    </motion.article>
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
        <section id="reports" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-ink leading-tight">
                Gender Journey Reports
              </h2>
              <div className="mx-auto mt-4 mb-6 h-1.5 w-24 rounded bg-brand-yellow" />
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Research-based reports documenting the empowerment journey of girls
                and women through our programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {GENDER_REPORTS_DATA.map((report, index) => (
                <GenderReportCard key={report.id} report={report} index={index} wide={GENDER_REPORTS_DATA.length % 2 === 1 && index === GENDER_REPORTS_DATA.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight">Our Gender Impact Areas</h2>
              <div className="mx-auto mt-4 mb-6 h-1.5 w-24 rounded bg-brand-yellow" />
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="text-center p-8 rounded-3xl border border-brand-yellow/40 bg-gradient-to-br from-red-50 to-yellow-50 hover:-translate-y-1 hover:shadow-xl transition duration-300"
                >
                  <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center mx-auto mb-5 text-brand-red">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-ink mb-2">{area.title}</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-red via-brand-yellow to-brand-red">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-5">Empowering the Next Generation</h3>
              <p className="text-white/95 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Our gender journey reports showcase the transformative power of
                education, life skills, and empowerment programs in creating
                lasting change for girls and women.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#reports"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-red shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                >
                  <FileText className="w-5 h-5" />
                  Browse the reports
                </a>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.98]"
                >
                  Support Our Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
