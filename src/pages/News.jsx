// src/pages/News.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { newsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import {
  Play,
  Clock,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  Eye,
  ExternalLink,
  Calendar,
  Tag,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

/**
 * News page: same layout and styling as the Blogs page (hero, featured carousel, filters, cards, pagination, call to action).
 * Features:
 * - Immersive hero with animated elements
 * - Interactive featured stories carousel
 * - Modern filter system with animations
 * - Card-based layout with hover effects
 * - Enhanced sidebar with engagement metrics
 * - Smooth transitions and micro-interactions
 */

/* ---------------- News Data ---------------- */
const POSTS = [
  {
    id: 1,
    title: "Magic Bus Wins National Award for Youth Development Excellence",
    category: "Awards & Recognition",
    excerpt: "Magic Bus has been honored with the prestigious National Youth Development Award 2024 for our innovative approach to adolescent education and life skills training.",
    image: "/ngo-images/award1.jpg",
    date: "2024-12-10",
    readingTime: 4,
    featured: true,
    views: 3200,
    source: "Magic Bus Official",
    externalLink: null,
    tags: ["Awards", "Recognition", "Youth Development"],
    type: "press-release"
  },
  {
    id: 2,
    title: "Partnership with Tech Giants Brings Digital Learning to Rural Schools",
    category: "Partnerships",
    excerpt: "A groundbreaking collaboration with leading technology companies will provide digital learning tools and internet connectivity to over 500 rural schools across India.",
    image: "/ngo-images/Ai.jpeg",
    date: "2024-12-05",
    readingTime: 6,
    featured: true,
    views: 2800,
    source: "Education Times",
    externalLink: "https://example.com/news",
    tags: ["Technology", "Partnerships", "Digital Learning"],
    type: "media-coverage"
  },
  {
    id: 3,
    title: "10,000 Youth Complete Life Skills Program in Record Time",
    category: "Program Updates",
    excerpt: "Magic Bus celebrates a major milestone as 10,000 young people successfully complete our comprehensive life skills development program ahead of schedule.",
    image: "/ngo-images/girl.jpeg",
    date: "2024-11-28",
    readingTime: 5,
    featured: true,
    views: 2100,
    source: "Magic Bus Official",
    externalLink: null,
    tags: ["Milestones", "Life Skills", "Youth"],
    type: "announcement"
  },
  {
    id: 4,
    title: "International Conference Highlights Magic Bus Methodology",
    category: "Events",
    excerpt: "Our innovative 'Learning Through Play' methodology was featured as a case study at the Global Education Innovation Summit in Singapore.",
    image: "/ngo-images/3.JPG",
    date: "2024-11-20",
    readingTime: 4,
    featured: false,
    views: 1800,
    source: "Global Education Summit",
    externalLink: "https://example.com/summit",
    tags: ["International", "Methodology", "Conference"],
    type: "media-coverage"
  },
  {
    id: 5,
    title: "New Research Shows 85% Improvement in Student Engagement",
    category: "Research & Impact",
    excerpt: "Independent research conducted by leading universities shows significant improvements in student engagement and learning outcomes in Magic Bus partner schools.",
    image: "/ngo-images/2.JPG",
    date: "2024-11-15",
    readingTime: 7,
    featured: false,
    views: 2400,
    source: "Research Journal",
    externalLink: "https://example.com/research",
    tags: ["Research", "Impact", "Education"],
    type: "research"
  },
  {
    id: 6,
    title: "Magic Bus Expands Operations to Three New States",
    category: "Expansion",
    excerpt: "Following successful pilot programs, Magic Bus announces expansion into Assam, Jharkhand, and Chhattisgarh, reaching an additional 50,000 children.",
    image: "/ngo-images/4.JPG",
    date: "2024-11-08",
    readingTime: 5,
    featured: false,
    views: 1900,
    source: "Magic Bus Official",
    externalLink: null,
    tags: ["Expansion", "Growth", "Outreach"],
    type: "announcement"
  },
  {
    id: 7,
    title: "Corporate Volunteer Program Reaches 1000 Participants",
    category: "Volunteering",
    excerpt: "Our corporate volunteering initiative has successfully engaged over 1000 professionals from leading companies in meaningful educational activities.",
    image: "/ngo-images/5.jpeg",
    date: "2024-10-30",
    readingTime: 4,
    featured: false,
    views: 1600,
    source: "Magic Bus Official",
    externalLink: null,
    tags: ["Volunteering", "Corporate", "Engagement"],
    type: "program-update"
  },
  {
    id: 8,
    title: "Featured in UNESCO Report on Innovative Education Practices",
    category: "Recognition",
    excerpt: "Magic Bus methodology has been included in UNESCO's comprehensive report on innovative education practices that are transforming learning outcomes globally.",
    image: "/ngo-images/6.jpeg",
    date: "2024-10-25",
    readingTime: 6,
    featured: false,
    views: 2700,
    source: "UNESCO",
    externalLink: "https://example.com/unesco",
    tags: ["UNESCO", "Global Recognition", "Innovation"],
    type: "media-coverage"
  }
];

/* ---------------- Helper Functions ---------------- */
const uniqueCategories = (posts) => Array.from(new Set(posts.map((p) => p.category))).sort();

// One brand colour per category (used for tags, card borders and filter buttons).
const PALETTE = [
  { bg: "#E12228", fg: "#FFFFFF" },
  { bg: "#21BDEA", fg: "#1A1A1A" },
  { bg: "#B3CC35", fg: "#1A1A1A" },
  { bg: "#E01085", fg: "#FFFFFF" },
  { bg: "#FFCC04", fg: "#1A1A1A" },
  { bg: "#0F7F96", fg: "#FFFFFF" },
];
const CATEGORIES = uniqueCategories(POSTS);
const colorFor = (category) => PALETTE[Math.max(0, CATEGORIES.indexOf(category)) % PALETTE.length];
const dateToPretty = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/* ---------------- Modern Hero Section ---------------- */
function Hero() {
  return (
    <section className="relative h-[60svh] min-h-[420px] md:h-screen w-full overflow-hidden">
      <img fetchPriority="high" decoding="async"
        src="/ngo-images/award1.jpg"
        alt="Magic Bus News"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
            Latest News
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Stay Updated with Magic Bus
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Get the latest news, updates, and announcements about our programs, partnerships, achievements, and impact in transforming young lives across India.
          </p>

          <div className="mt-6">
            <motion.a
              href="#featured"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Read Latest News
                <ArrowRight className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-brand-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Interactive Featured Stories ---------------- */
function FeaturedStories({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length, isAutoPlaying]);

  return (
    <section id="featured" className="bg-gradient-to-b from-[#FFF3B0] to-[#FFFBE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <h2 className="lg:hidden text-2xl sm:text-3xl font-heading font-bold text-ink mb-4">Latest News</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
        {/* Main featured article */}
        <motion.div
          className="lg:col-span-2"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {items[activeIndex]?.externalLink && (
                <a href={items[activeIndex].externalLink} target="_blank" rel="noopener noreferrer" aria-label={items[activeIndex]?.title} className="absolute inset-0 z-10 rounded-3xl" />
              )}
              <div className="relative block rounded-3xl overflow-hidden shadow-2xl">
                <img loading="lazy" decoding="async"
                  src={items[activeIndex]?.image}
                  alt={items[activeIndex]?.title}
                  className="w-full h-56 sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-5 left-5 inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold shadow">
                  {items[activeIndex]?.category}
                </span>
              </div>

              <div
                className="mt-3 sm:mt-5 flex items-center justify-between gap-3 sm:gap-4 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-md transition hover:shadow-lg"
              >
                <h3 className="text-base sm:text-xl md:text-2xl font-bold leading-snug text-ink underline decoration-brand-red/40 decoration-2 underline-offset-4 transition-colors group-hover:text-brand-red group-hover:decoration-brand-red">
                  {items[activeIndex]?.title}
                </h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-transform group-hover:translate-x-1">
                  {items[activeIndex]?.externalLink ? <ExternalLink className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                </span>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>

        {/* Story navigation */}
        <div>
        <h2 className="hidden lg:block text-3xl md:text-4xl font-heading font-bold text-ink mb-2">Latest News</h2>
        <p className="hidden lg:block text-sm text-slate-600 mb-5">Stay informed about our latest achievements, partnerships, and programme updates</p>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 lg:block lg:space-y-4 lg:overflow-visible lg:pb-0 [scrollbar-width:none]">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`w-[78%] shrink-0 snap-start lg:w-full lg:shrink text-left p-3 sm:p-4 rounded-2xl transition-all ${index === activeIndex
                ? "bg-brand-red/10 border-2 border-brand-red/20 shadow-lg"
                : "bg-white hover:bg-slate-50 border-2 border-transparent"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex gap-4">
                <img loading="lazy" decoding="async"
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className={`font-semibold text-sm mb-2 line-clamp-2 ${index === activeIndex ? "text-brand-red" : "text-ink"
                    }`}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{dateToPretty(item.date)}</span>
                    <span>{item.readingTime}m</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}


function ModernFilterSection({ query, setQuery, resultsCount, categories, activeCategory, setActiveCategory }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
          {/* Search Bar - Extra Compact */}
          <div className="lg:min-w-xs">
            <div className={`flex items-center gap-2 bg-slate-50 rounded-md px-2 py-1.5 border transition-all ${isFocused ? "border-brand-red bg-white shadow-sm" : "border-transparent"}`}>
              <Search className={`w-3.5 h-3.5 transition-colors ${isFocused ? "text-brand-red" : "text-slate-400"}`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search news..."
                className="flex-1 bg-transparent outline-none text-ink placeholder-slate-400 text-sm sm:text-xs w-24"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-slate-400 hover:text-slate-600 text-sm"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-8 bg-slate-200"></div>

          {/* Category Filters */}
          <div className="flex-1">
            <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto sm:overflow-visible pb-1 [scrollbar-width:none]">
              <span className="hidden sm:inline text-sm font-medium text-slate-600 mr-2">Filter:</span>
              <button
                onClick={() => setActiveCategory("All")}
                className={`shrink-0 whitespace-nowrap px-3 py-1.5 sm:py-1 rounded-full text-xs font-medium transition-all ${activeCategory === "All"
                  ? "bg-brand-red text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={
                    activeCategory === category
                      ? { background: colorFor(category).bg, color: colorFor(category).fg }
                      : { background: colorFor(category).bg + "26", color: "#1A1A1A" }
                  }
                  className="shrink-0 whitespace-nowrap px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold transition-all hover:brightness-95"
                >
                  {category.split(' ').slice(0, 2).join(' ')} ({POSTS.filter(p => p.category === category).length})
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {(query || activeCategory !== "All") && (
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-brand-red">{resultsCount}</span> results
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- News Card ---------------- */
function NewsCard({ post, index }) {
  const c = colorFor(post.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer flex sm:block bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500 border-l-[6px] sm:border-l-0 sm:border-t-[6px]"
      style={{ borderColor: c.bg }}
    >
      {/* Invisible link covering the whole card (only when the article has a link), so a click anywhere opens it */}
      {post.externalLink && (
        <a href={post.externalLink} target="_blank" rel="noopener noreferrer" aria-label={post.title} className="absolute inset-0 z-10 rounded-2xl sm:rounded-3xl" />
      )}

      <div className="relative overflow-hidden w-28 shrink-0 sm:w-auto">
        <img loading="lazy" decoding="async"
          src={post.image}
          alt={post.title}
          className="w-full h-full min-h-[120px] sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-3 sm:p-6 min-w-0">
        <span className="inline-block mb-1.5 sm:mb-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-xs font-semibold" style={{ background: c.bg, color: c.fg }}>
          {post.category}
        </span>

        <h3 className="text-sm sm:text-xl font-bold text-ink mb-1.5 sm:mb-3 line-clamp-3 sm:line-clamp-2 group-hover:text-brand-red transition-colors">
          {post.title}
        </h3>

        <p className="hidden sm:block text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="hidden sm:flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: c.bg + "26", color: "#1A1A1A" }}>
              #{tag}
            </span>
          ))}
        </div>

        <p className="hidden sm:block mb-2 text-sm font-semibold text-slate-700">{post.source}</p>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 sm:mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {dateToPretty(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {post.readingTime}m
          </span>
        </div>

        {post.externalLink && (
          <span className="hidden sm:inline-flex items-center gap-2 text-brand-red font-semibold group-hover:gap-3 transition-all">
            Read Full Article
            <ExternalLink className="w-4 h-4" />
          </span>
        )}
      </div>
    </motion.article>
  );
}

/* ---------------- Enhanced Pagination ---------------- */
function Pagination({ currentPage, totalPages, onPageChange, hasMore, onLoadMore }) {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6 sm:mt-12">
      {/* Load More Button */}
      {hasMore && (
        <motion.button
          onClick={onLoadMore}
          className="px-8 py-4 bg-brand-red text-white rounded-full font-semibold hover:bg-brand-red/90 transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More News
        </motion.button>
      )}

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-2">
        <motion.button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-3 rounded-xl bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {getPageNumbers().map((page) => (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-3 rounded-xl font-semibold transition-all ${page === currentPage
              ? "bg-brand-red text-white shadow-lg"
              : "bg-white text-slate-600 hover:bg-slate-50 shadow-md"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {page}
          </motion.button>
        ))}

        <motion.button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-3 rounded-xl bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      <p className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}

/* ---------------- Enhanced Bottom CTA ---------------- */
function BottomCTA() {
  return (
    <section className="mt-8 sm:mt-20 bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#4A0F16] py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 sm:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-2 sm:mb-4">
            Join Our Mission
          </h3>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto">
            Support us in empowering young people through education, life skills, and sustainable livelihoods
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          <motion.a
            href="/partner"
            className="group p-4 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-11 h-11 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-6 group-hover:bg-brand-blue/20 transition-colors">
              <Users className="w-8 h-8 text-brand-blue" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-ink mb-1 sm:mb-3">Partner With Us</h4>
            <p className="hidden sm:block text-slate-600 mb-6">
              Collaborate with us to create lasting impact in communities
            </p>
            <div className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          <motion.a
            href="/employee-volunteering"
            className="group p-4 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-11 h-11 sm:w-16 sm:h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-6 group-hover:bg-brand-yellow/20 transition-colors">
              <Heart className="w-8 h-8 text-brand-yellow" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-ink mb-1 sm:mb-3">Volunteer</h4>
            <p className="hidden sm:block text-slate-600 mb-6">
              Join our community of volunteers making a difference
            </p>
            <div className="inline-flex items-center gap-2 text-brand-yellow font-semibold group-hover:gap-3 transition-all">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          <motion.a
            href="/donate"
            className="group p-4 sm:p-8 bg-gradient-to-br from-brand-red to-brand-red/80 text-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-11 h-11 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-6 group-hover:bg-white/30 transition-colors">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-3">Donate Now</h4>
            <p className="hidden sm:block text-white/90 mb-6">
              Make a direct impact with your generous contribution
            </p>
            <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
              Donate Today
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Main News Component ---------------- */
export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const postsPerPage = 6;

  const categories = useMemo(() => uniqueCategories(POSTS), []);
  const featuredPosts = useMemo(() => POSTS.filter(p => p.featured), []);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return POSTS.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <FaqSchema faqs={newsFAQ} />
      <div className="bg-gradient-to-b from-[#EAF8FD] via-white to-[#FFF0F6] text-ink min-h-screen">
        <Hero />

        <FeaturedStories items={featuredPosts} />

        <ModernFilterSection
          query={searchQuery}
          setQuery={handleSearchChange}
          resultsCount={filteredPosts.length}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:flex-1">
              {/* View Toggle & Results Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-ink mb-2">
                    {activeCategory === "All" ? "All News" : activeCategory}
                  </h2>
                  <p className="text-slate-600">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 mt-4 sm:mt-0">
                  <span className="text-sm text-slate-600">View:</span>
                  <div className="flex bg-white rounded-lg p-1 shadow-sm">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-brand-red text-white" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-brand-red text-white" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              {paginatedPosts.length > 0 ? (
                <motion.div
                  className={`grid gap-3 sm:gap-8 ${viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                    }`}
                  layout
                >
                  <AnimatePresence>
                    {paginatedPosts.map((post, index) => (
                      <NewsCard key={post.id} post={post} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">No news found</h3>
                  <p className="hidden sm:block text-slate-600 mb-6">
                    Try adjusting your search or browse different categories
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="px-6 py-3 bg-brand-red text-white rounded-full font-semibold hover:bg-brand-red/90 transition-colors"
                  >
                    Show All News
                  </button>
                </motion.div>
              )}

              {/* Pagination */}
              {paginatedPosts.length > 0 && totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  hasMore={currentPage < totalPages}
                  onLoadMore={() => setCurrentPage(prev => prev + 1)}
                />
              )}
            </div>

          </div>
        </div>

        <BottomCTA />

        {/* FAQ Section */}
        <FAQSection
          items={newsFAQ}
          title="News & Updates FAQs"
          subtitle="Find answers to common questions about our news coverage, media mentions, and updates."
          categoriesLabel="Filter by topic"
        />
      </div>
    </Layout>
  );
}