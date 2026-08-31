// src/pages/Reports.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  FileText,
  Download,
  Calendar,
  Eye,
  BarChart3,
  TrendingUp,
  Shield,
  Globe,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Heart,
  Briefcase,
} from "lucide-react";

/**
 * Reports Page - Main Hub
 * Features:
 * - Overview of all report categories
 * - Links to specific report pages
 * - Featured audited statements and FCRA reports
 * - Navigation to specialized report pages
 */

/* ---------------- Financial Reports Data ---------------- */
const FINANCIAL_REPORTS_DATA = {
  auditedStatements: [
    {
      id: 1,
      title: "Audited Statement of Accounts 2023-24",
      year: "2023-24",
      type: "Audited Statement",
      description: "Comprehensive audited financial statements prepared by certified chartered accountants, providing complete transparency of our financial operations and fund utilization.",
      fileSize: "2.4 MB",
      pages: 45,
      downloadUrl: "#",
      featured: true,
      publishDate: "2024-09-15"
    },
    {
      id: 2,
      title: "Audited Statement of Accounts 2022-23",
      year: "2022-23",
      type: "Audited Statement",
      description: "Annual audited financial statements showing detailed income, expenditure, and fund allocation across all programs and administrative functions.",
      fileSize: "2.1 MB",
      pages: 42,
      downloadUrl: "#",
      featured: false,
      publishDate: "2023-09-20"
    },
    {
      id: 3,
      title: "Audited Statement of Accounts 2021-22",
      year: "2021-22",
      type: "Audited Statement",
      description: "Detailed financial audit covering program expenditure, administrative costs, and fund management practices.",
      fileSize: "2.0 MB",
      pages: 40,
      downloadUrl: "#",
      featured: false,
      publishDate: "2022-09-25"
    }
  ],

  fcraReports: [
    {
      id: 4,
      title: "FCRA Details 2023-24",
      year: "2023-24",
      type: "FCRA Details",
      description: "Detailed Foreign Contribution Regulation Act (FCRA) compliance report showing all foreign contributions received and their utilization as per regulatory requirements.",
      fileSize: "1.8 MB",
      pages: 25,
      downloadUrl: "#",
      featured: true,
      publishDate: "2024-07-30"
    },
    {
      id: 5,
      title: "FCRA Audited Financial Statement 2023-24",
      year: "2023-24",
      type: "FCRA Audited Statement",
      description: "Audited financial statement specifically for FCRA compliance, prepared by certified chartered accountants and submitted to regulatory authorities.",
      fileSize: "2.2 MB",
      pages: 35,
      downloadUrl: "#",
      featured: true,
      publishDate: "2024-07-15"
    },
    {
      id: 6,
      title: "FCRA Details 2022-23",
      year: "2022-23",
      type: "FCRA Details",
      description: "Annual FCRA compliance report detailing foreign contributions and their utilization across various programs.",
      fileSize: "1.6 MB",
      pages: 22,
      downloadUrl: "#",
      featured: false,
      publishDate: "2023-07-25"
    }
  ]
};

// Flatten financial reports for filtering
const ALL_FINANCIAL_REPORTS = [
  ...FINANCIAL_REPORTS_DATA.auditedStatements,
  ...FINANCIAL_REPORTS_DATA.fcraReports
];

/* ---------------- Hero Section ---------------- */
function ReportsHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <img
        src="/ngo-images/2.JPG"
        alt="Magic Bus Reports"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f";
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
            Reports & Publications
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Transparency Through Documentation
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Explore our comprehensive collection of reports and publications that showcase our impact,
            research findings, and commitment to transparency across all our programs and initiatives.
          </p>

          <div className="mt-6">
            <motion.a
              href="#report-categories"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Reports
                <FileText className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Report Categories Section ---------------- */
function ReportCategories() {
  const categories = [
    {
      title: "Impact Reports",
      description: "Evidence-based reports measuring program effectiveness and social impact",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "blue",
      link: "/impact-reports",
      stats: "4+ Reports"
    },
    {
      title: "Annual Reports",
      description: "Comprehensive yearly documentation of programs, achievements, and growth",
      icon: <FileText className="w-8 h-8" />,
      color: "green",
      link: "/annual-reports",
      stats: "16+ Reports"
    },
    {
      title: "Gender Journey",
      description: "Research on women's empowerment and gender-focused program outcomes",
      icon: <Heart className="w-8 h-8" />,
      color: "pink",
      link: "/gender-journey-report",
      stats: "3+ Studies"
    },
    {
      title: "FLFPR Reports",
      description: "Female Labour Force Participation Rate research and workforce studies",
      icon: <Briefcase className="w-8 h-8" />,
      color: "indigo",
      link: "/flfpr-report",
      stats: "3+ Studies"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
      green: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
      pink: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
      indigo: "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="report-categories" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
            Report Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of reports organized by category and focus area
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={category.link}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 text-center">{category.title}</h3>
                <p className="text-slate-600 text-sm text-center mb-4">{category.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {category.stats}
                  </span>
                </div>
                <div className="flex items-center justify-center text-brand-red group-hover:text-brand-red/80 transition-colors">
                  <span className="text-sm font-medium">View Reports</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Report Card Component ---------------- */
function ReportCard({ report, index }) {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Annual Report': return <BarChart3 className="w-6 h-6" />;
      case 'Audited Statement': return <Shield className="w-6 h-6" />;
      case 'FCRA Details': return <Globe className="w-6 h-6" />;
      case 'FCRA Audited Statement': return <CheckCircle className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  const getTypeColorClasses = (type) => {
    switch (type) {
      case 'Annual Report': return 'bg-blue-50 text-blue-600';
      case 'Audited Statement': return 'bg-green-50 text-green-600';
      case 'FCRA Details': return 'bg-purple-50 text-purple-600';
      case 'FCRA Audited Statement': return 'bg-orange-50 text-orange-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'Annual Report': return 'hover:border-blue-500/30';
      case 'Audited Statement': return 'hover:border-green-500/30';
      case 'FCRA Details': return 'hover:border-purple-500/30';
      case 'FCRA Audited Statement': return 'hover:border-orange-500/30';
      default: return 'hover:border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-xl border border-slate-200 ${getBorderColor(report.type)} hover:shadow-lg transition-all duration-300 overflow-hidden group`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColorClasses(report.type)}`}>
              {getTypeIcon(report.type)}
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

/* ---------------- Filter Section ---------------- */
function FinancialReportsFilter({ activeFilter, setActiveFilter, activeYear, setActiveYear }) {
  const filters = ["All Reports", "Audited Statement", "FCRA Details", "FCRA Audited Statement"];
  const years = ["All Years", "2023-24", "2022-23", "2021-22"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Type Filter */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-600 mr-2">Type:</span>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeFilter === filter
                    ? "bg-brand-red text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-8 bg-slate-200"></div>

          {/* Year Filter */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-600 mr-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeYear === year
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
      </div>
    </div>
  );
}

/* ---------------- Financial Reports Stats ---------------- */
function FinancialReportsStats() {
  const stats = [
    { number: "100%", label: "Transparency", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "CA", label: "Audited Reports", icon: <Award className="w-8 h-8" /> },
    { number: "FCRA", label: "Compliance", icon: <Shield className="w-8 h-8" /> },
    { number: "Annual", label: "Reporting", icon: <Calendar className="w-8 h-8" /> },
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

/* ---------------- Main Reports Component ---------------- */
export default function Reports() {
  const [activeFilter, setActiveFilter] = useState("All Reports");
  const [activeYear, setActiveYear] = useState("All Years");

  // Filter financial reports based on type and year
  const filteredReports = ALL_FINANCIAL_REPORTS.filter(report => {
    const matchesType = activeFilter === "All Reports" || report.type === activeFilter;
    const matchesYear = activeYear === "All Years" || report.year === activeYear;
    return matchesType && matchesYear;
  });

  return (
    <Layout>
      <main className="bg-slate-50 text-ink min-h-screen">
        <ReportsHero />

        <ReportCategories />

        <FinancialReportsStats />

        <FinancialReportsFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />

        {/* Financial Reports Section */}
        <section id="financial-reports" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
                Financial Reports & Compliance
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {filteredReports.length} {filteredReports.length === 1 ? 'report' : 'reports'}
                {activeFilter !== "All Reports" && ` for ${activeFilter}`}
                {activeYear !== "All Years" && ` in ${activeYear}`}
              </p>
            </motion.div>

            {filteredReports.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredReports.map((report, index) => (
                  <ReportCard key={report.id} report={report} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">No reports found</h3>
                <p className="text-slate-600">Try adjusting your filters to see more reports</p>
              </div>
            )}
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="py-16 bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Committed to Transparency</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our financial reports and compliance documents ensure complete transparency in our operations.
                All reports are audited by certified chartered accountants and made publicly accessible.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-red font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download All Reports
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Subscribe to Updates
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}