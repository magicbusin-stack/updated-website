// src/pages/News.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { newsFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Eye,
  Share2,
  ExternalLink,
  Newspaper,
  TrendingUp,
  Award,
  Users,
  Globe,
  Filter,
  ChevronDown,
} from "lucide-react";

/**
 * Modern News Page
 * Features:
 * - Clean hero section with news focus
 * - Featured news carousel
 * - Modern filter and search
 * - Grid layout with hover effects
 * - News categories and tags
 * - External link handling
 */

/* ---------------- News Data ---------------- */
const NEWS_ARTICLES = [
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
const uniqueCategories = (articles) => Array.from(new Set(articles.map(a => a.category))).sort();
const dateToPretty = (iso) => new Date(iso).toLocaleDateString("en-GB", { 
  day: "numeric", 
  month: "short", 
  year: "numeric" 
});

const getTypeIcon = (type) => {
  switch(type) {
    case 'press-release': return <Newspaper className="w-4 h-4" />;
    case 'media-coverage': return <Globe className="w-4 h-4" />;
    case 'announcement': return <TrendingUp className="w-4 h-4" />;
    case 'research': return <Award className="w-4 h-4" />;
    default: return <Newspaper className="w-4 h-4" />;
  }
};

const getTypeColor = (type) => {
  switch(type) {
    case 'press-release': return 'bg-blue-100 text-blue-700';
    case 'media-coverage': return 'bg-green-100 text-green-700';
    case 'announcement': return 'bg-purple-100 text-purple-700';
    case 'research': return 'bg-orange-100 text-orange-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

/* ---------------- Hero Section ---------------- */
function NewsHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/award1.jpg"
        alt="Magic Bus News"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
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
            Latest News
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Stay Updated with Magic Bus
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Get the latest news, updates, and announcements about our programs, partnerships, 
            achievements, and impact in transforming young lives across India.
          </p>

          <div className="mt-6">
            <motion.a
              href="#news"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Read Latest News
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Featured News Carousel ---------------- */
function FeaturedNews({ articles }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="news" className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
          Breaking News
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Stay informed about our latest achievements, partnerships, and program updates
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main featured article */}
        <motion.div className="lg:col-span-2" layout>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={articles[activeIndex]?.image}
                  alt={articles[activeIndex]?.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(articles[activeIndex]?.type)}`}>
                      {getTypeIcon(articles[activeIndex]?.type)}
                      {articles[activeIndex]?.type?.replace('-', ' ')}
                    </span>
                    <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                      {articles[activeIndex]?.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {articles[activeIndex]?.title}
                  </h3>

                  <p className="text-white/90 mb-6 line-clamp-3">
                    {articles[activeIndex]?.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {dateToPretty(articles[activeIndex]?.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {articles[activeIndex]?.readingTime} min read
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {articles[activeIndex]?.views}
                      </span>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-brand-yellow font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      {articles[activeIndex]?.externalLink ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>

        {/* News navigation */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <motion.button
              key={article.id}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-4 rounded-2xl transition-all ${
                index === activeIndex
                  ? "bg-brand-red/10 border-2 border-brand-red/20 shadow-lg"
                  : "bg-white hover:bg-slate-50 border-2 border-transparent"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex gap-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className={`font-semibold text-sm mb-2 line-clamp-2 ${
                    index === activeIndex ? "text-brand-red" : "text-ink"
                  }`}>
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{dateToPretty(article.date)}</span>
                    <span>{article.readingTime}m</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}/* -
--------------- Modern Filter Section ---------------- */
function NewsFilterSection({ query, setQuery, resultsCount, categories, activeCategory, setActiveCategory }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Search Bar */}
          <div className="lg:max-w-xs">
            <div className={`flex items-center gap-2 bg-slate-50 rounded-md px-2 py-1.5 border transition-all ${
              isFocused ? "border-brand-red bg-white shadow-sm" : "border-transparent"
            }`}>
              <Search className={`w-3.5 h-3.5 transition-colors ${
                isFocused ? "text-brand-red" : "text-slate-400"
              }`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search news..."
                className="flex-1 bg-transparent outline-none text-ink placeholder-slate-400 text-xs w-24"
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
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-600 mr-2">Category:</span>
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeCategory === "All" 
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
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeCategory === category
                      ? "bg-brand-red text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category} ({NEWS_ARTICLES.filter(a => a.category === category).length})
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

/* ---------------- News Card Component ---------------- */
function NewsCard({ article, index }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleReadMore = () => {
    if (article.externalLink) {
      window.open(article.externalLink, '_blank');
    } else {
      // Handle internal news article
      console.log('Navigate to internal article:', article.id);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(article.type)}`}>
            {getTypeIcon(article.type)}
            {article.type.replace('-', ' ')}
          </span>
          <span className="bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isBookmarked ? "bg-brand-red text-white" : "bg-white/80 text-slate-600"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TrendingUp className="w-4 h-4" />
          </motion.button>

          <motion.button
            className="p-2 rounded-full bg-white/80 text-slate-600 hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-brand-red/10 rounded-full flex items-center justify-center">
            <Newspaper className="w-4 h-4 text-brand-red" />
          </div>
          <span className="text-sm text-slate-600">{article.source}</span>
        </div>

        <h3 className="text-xl font-bold text-ink mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
          {article.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {dateToPretty(article.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime}m
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.views}
            </span>
          </div>
        </div>

        <motion.button
          onClick={handleReadMore}
          className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
          whileHover={{ x: 5 }}
        >
          Read Full Article
          {article.externalLink ? (
            <ExternalLink className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </motion.button>
      </div>
    </motion.article>
  );
}

/* ---------------- Newsletter Signup ---------------- */
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest Magic Bus news, program updates, and impact stories delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                type="submit"
                className="bg-white text-brand-red font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={subscribed}
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </div>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/90 mt-4"
            >
              Thank you for subscribing! You'll receive our latest news soon.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Main News Component ---------------- */
export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = useMemo(() => uniqueCategories(NEWS_ARTICLES), []);
  const featuredArticles = useMemo(() => NEWS_ARTICLES.filter(a => a.featured), []);

  // Filter articles based on category and search
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter(article => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesSearch = !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
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
      <main className="bg-slate-50 text-ink min-h-screen">
        <NewsHero />
        
        <FeaturedNews articles={featuredArticles} />

        {/* <NewsFilterSection
          query={searchQuery}
          setQuery={handleSearchChange}
          resultsCount={filteredArticles.length}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
        /> */}

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Results Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-2">
              {activeCategory === "All" ? "All News" : activeCategory}
            </h2>
            <p className="text-slate-600">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* News Grid */}
          {paginatedArticles.length > 0 ? (
            <motion.div
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              layout
            >
              <AnimatePresence>
                {paginatedArticles.map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
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
              <p className="text-slate-600 mb-6">
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

          {/* Simple Pagination */}
          {paginatedArticles.length > 0 && totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? "bg-brand-red text-white"
                        : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <NewsletterSignup />

        {/* FAQ Section */}
        <FAQSection
          items={newsFAQ}
          title="News & Updates FAQs"
          subtitle="Find answers to common questions about our news coverage, media mentions, and updates."
          categoriesLabel="Filter by topic"
        />
      </main>
    </Layout>
  );
}