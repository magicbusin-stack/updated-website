// src/pages/ImpactReports.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Layout from "../components/Layout";
import {
  FileText,
  Download,
  Eye,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
  Sparkles,
  Calendar,
  HardDrive,
  Clock,
} from "lucide-react";

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
        <motion.div className="max-w-3xl text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-1.5 rounded-full text-base font-semibold">Impact Measurement</span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">Measuring Real Impact</h1>

          <p className="mt-5 text-xl md:text-2xl text-white/90 leading-relaxed">
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
/* Counts up from 0 when it scrolls into view (a still number for visitors who prefer reduced motion). */
function CountUp({ prefix = "", to, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(to);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const dur = 1800;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const STATS = [
  { prefix: "", to: 2.5, decimals: 1, suffix: "M+", label: "Lives Impacted", Icon: Users, ring: "from-brand-yellow to-amber-400", glow: "bg-brand-yellow/25" },
  { prefix: "", to: 95, decimals: 0, suffix: "%", label: "Skill Improvement", Icon: TrendingUp, ring: "from-emerald-400 to-brand-green", glow: "bg-brand-green/25" },
  { prefix: "1:", to: 7.2, decimals: 1, suffix: "", label: "SROI Ratio", Icon: Target, ring: "from-rose-400 to-brand-red", glow: "bg-brand-red/25" },
  { prefix: "", to: 15, decimals: 0, suffix: "", label: "States Covered", Icon: Award, ring: "from-sky-400 to-brand-blue", glow: "bg-brand-blue/25" },
];

function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#232323] to-[#1A1A1A] py-16 md:py-24">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-yellow">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            Our impact at a glance
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/50 hover:bg-white/10 sm:p-8"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${s.glow} opacity-60`} />
              <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14 ${s.ring}`}>
                <s.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <div className="relative mt-5 bg-gradient-to-b from-white to-brand-yellow bg-clip-text text-4xl font-black leading-none tracking-tight text-transparent sm:text-5xl xl:text-6xl">
                <CountUp prefix={s.prefix} to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <p className="relative mt-3 text-base font-semibold uppercase tracking-wider text-white/80 sm:text-lg">{s.label}</p>
              <span className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${s.ring}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ report cards ------------------------------ */
/* A highlight that starts with a figure ("95% skill improvement") shows the figure big and the words under it;
   a highlight without a figure gets a tick instead. */
function Highlight({ text }) {
  const m = text.match(/^(\S*\d\S*)\s+(.+)$/);
  return (
    <li className="flex items-center gap-3 rounded-xl border border-brand-yellow/50 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-col sm:items-start sm:gap-1">
      {m ? (
        <>
          <span className="text-3xl font-black leading-none text-brand-red sm:text-4xl">{m[1]}</span>
          <span className="text-lg font-semibold leading-snug text-ink">{m[2]}</span>
        </>
      ) : (
        <>
          <CheckCircle className="h-8 w-8 shrink-0 text-brand-green sm:h-9 sm:w-9" />
          <span className="text-lg font-semibold leading-snug text-ink">{text}</span>
        </>
      )}
    </li>
  );
}

function ImpactReportCard({ report, index }) {
  const ready = report.downloadUrl && report.downloadUrl !== "#";
  const date = new Date(report.publishDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:border-brand-red/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
    >
      <span className="h-2 w-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
            <FileText className="h-7 w-7" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-base font-semibold text-slate-700">{report.year}</span>
              {report.featured && <span className="rounded-full bg-brand-red px-3 py-1 text-base font-semibold text-white">Latest</span>}
            </div>
            <p className="mt-1.5 text-base font-medium uppercase tracking-wide text-slate-500">{report.type}</p>
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-extrabold leading-snug text-ink transition-colors group-hover:text-brand-red">{report.title}</h3>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{report.description}</p>

        {/* Key highlights */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-yellow/60 bg-gradient-to-br from-brand-yellow/25 via-brand-yellow/10 to-white p-5">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-yellow/40 blur-2xl" />
          <h4 className="relative flex items-center gap-2 text-lg font-extrabold uppercase tracking-wide text-brand-red">
            <Sparkles className="h-5 w-5" />
            Key highlights
          </h4>
          <ul className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {report.highlights.map((h) => (
              <Highlight key={h} text={h} />
            ))}
          </ul>
        </div>

        {/* Facts */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { v: report.pages, l: "Pages", Icon: FileText },
            { v: report.fileSize, l: "Size", Icon: HardDrive },
            { v: "PDF", l: "Format", Icon: Download },
          ].map((f) => (
            <div key={f.l} className="rounded-2xl border border-slate-200 p-3 text-center">
              <f.Icon className="mx-auto h-5 w-5 text-brand-red" />
              <div className="mt-1 text-lg font-extrabold text-ink">{f.v}</div>
              <div className="text-base text-slate-500">{f.l}</div>
            </div>
          ))}
        </div>

        <p className="mt-5 flex items-center gap-2 text-base text-slate-500">
          <Calendar className="h-5 w-5" />
          Published {date}
        </p>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          {ready ? (
            <>
              <a
                href={report.downloadUrl}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-lg font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#c41b20] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30 active:translate-y-0 active:scale-[0.98]"
              >
                <Download className="h-5 w-5" />
                Download report
              </a>
              <a
                href={report.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-7 py-4 text-lg font-bold text-ink transition hover:border-brand-red hover:text-brand-red active:scale-[0.98]"
              >
                <Eye className="h-5 w-5" />
                View
              </a>
            </>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-dashed border-slate-300 bg-slate-50 px-7 py-4 text-lg font-bold text-slate-500">
              <Clock className="h-5 w-5" />
              PDF coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ImpactReports() {
  return (
    <Layout>
      <main className="bg-slate-50 text-ink min-h-screen">
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

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {IMPACT_REPORTS_DATA.map((report, index) => (
                <ImpactReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
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
      </main>
    </Layout>
  );
}
