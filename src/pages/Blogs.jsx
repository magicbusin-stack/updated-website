// src/pages/Blogs.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
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
 * Modern Blogs Page - Redesigned
 * Features:
 * - Immersive hero with animated elements
 * - Interactive featured stories carousel
 * - Modern filter system with animations
 * - Card-based layout with hover effects
 * - Enhanced sidebar with engagement metrics
 * - Smooth transitions and micro-interactions
 */

/* ---------------- Blog Posts Data (using project images) ---------------- */
const POSTS = [
  {
    id: 1,
    title: "How structured play improves school attendance",
    category: "Impact & Transformation Stories",
    excerpt: "A year-long pilot showed consistent improvements in attendance and learning outcomes when structured play was introduced across 12 schools.",
    image: "/ngo-images/1.jpeg",
    date: "2025-10-01",
    readingTime: 6,
    featured: true,
    views: 2400,
    likes: 89,
    author: "Dr. Priya Sharma",
    tags: ["Education", "Play-based Learning", "School Attendance"],
  },
  {
    id: 2,
    title: "Life skills curriculum: design and outcomes",
    category: "Life Skills & Education Insights",
    excerpt: "Designing a life-skills curriculum that scales requires local teachers, mentor training, and robust measurement frameworks.",
    image: "/ngo-images/2.JPG",
    date: "2025-09-18",
    readingTime: 5,
    featured: true,
    views: 1800,
    likes: 67,
    author: "Rajesh Kumar",
    tags: ["Life Skills", "Curriculum Design", "Teacher Training"],
  },
  {
    id: 3,
    title: "A teacher's story: transforming classrooms",
    category: "Programme Updates & Field Reports",
    excerpt: "From day-one scepticism to active engagement — one teacher's experience running a 6-month intervention in a peri-urban school.",
    image: "/ngo-images/3.JPG",
    date: "2025-09-05",
    readingTime: 4,
    featured: true,
    views: 900,
    likes: 45,
    author: "Meera Patel",
    tags: ["Teacher Stories", "Classroom Innovation", "Student Engagement"],
  },
  {
    id: 4,
    title: "Engaging corporates through employee volunteering",
    category: "CSR & Volunteering Insights",
    excerpt: "Companies want purpose. We share a blueprint for high-impact volunteering programs that align corporate KPIs with learning outcomes.",
    image: "/ngo-images/4.JPG",
    date: "2025-08-12",
    readingTime: 5,
    featured: false,
    views: 1100,
    likes: 78,
    author: "Amit Singh",
    tags: ["Corporate Volunteering", "CSR", "Employee Engagement"],
  },
  {
    id: 5,
    title: "Measuring impact: what we learned in Year 2",
    category: "Research & Thought Leadership",
    excerpt: "A short explainer of our Year 2 measurement framework, key metrics and how we reduced attrition in targeted cohorts.",
    image: "/ngo-images/5.jpeg",
    date: "2025-07-21",
    readingTime: 7,
    featured: false,
    views: 600,
    likes: 34,
    author: "Dr. Anita Desai",
    tags: ["Impact Measurement", "Research", "Data Analytics"],
  },
  {
    id: 6,
    title: "Digital literacy programs in rural communities",
    category: "Programme Updates & Field Reports",
    excerpt: "Bridging the digital divide through innovative teaching methods and community partnerships in remote areas.",
    image: "/ngo-images/6.jpeg",
    date: "2025-07-10",
    readingTime: 4,
    featured: false,
    views: 850,
    likes: 56,
    author: "Suresh Reddy",
    tags: ["Digital Literacy", "Rural Education", "Technology"],
  },
  {
    id: 7,
    title: "Youth leadership development success stories",
    category: "Impact & Transformation Stories",
    excerpt: "Meet the young leaders who are driving change in their communities through our leadership development programs.",
    image: "/ngo-images/7.jpg",
    date: "2025-06-28",
    readingTime: 6,
    featured: false,
    views: 1200,
    likes: 92,
    author: "Kavita Joshi",
    tags: ["Youth Leadership", "Community Development", "Success Stories"],
  },
  {
    id: 8,
    title: "Innovation in education: AI-powered learning",
    category: "Research & Thought Leadership",
    excerpt: "Exploring how artificial intelligence can enhance educational outcomes while maintaining human connection.",
    image: "/ngo-images/Ai.jpeg",
    date: "2025-06-15",
    readingTime: 8,
    featured: false,
    views: 950,
    likes: 73,
    author: "Dr. Vikram Gupta",
    tags: ["AI in Education", "Innovation", "EdTech"],
  },
  {
    id: 9,
    title: "Recognition and awards: celebrating impact",
    category: "Events & Announcements",
    excerpt: "Our recent achievements and recognition from national and international organizations for our work.",
    image: "/ngo-images/award1.jpg",
    date: "2025-06-01",
    readingTime: 3,
    featured: false,
    views: 750,
    likes: 41,
    author: "Communications Team",
    tags: ["Awards", "Recognition", "Achievements"],
  },
  {
    id: 10,
    title: "Empowering girls through education",
    category: "Impact & Transformation Stories",
    excerpt: "Stories of transformation as young girls break barriers and pursue their dreams through education and support.",
    image: "/ngo-images/girl.jpeg",
    date: "2025-05-20",
    readingTime: 5,
    featured: false,
    views: 1400,
    likes: 108,
    author: "Sunita Rao",
    tags: ["Girls Education", "Empowerment", "Gender Equality"],
  },
];

/* ---------------- Helper Functions ---------------- */
const uniqueCategories = (posts) => Array.from(new Set(posts.map((p) => p.category))).sort();
const dateToPretty = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/* ---------------- Modern Hero Section ---------------- */
function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/ngo-images/1.jpeg"
        alt="Blogs Hero"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1497486751825-1233686d5d80";
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
            Magic Bus Blogs
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Insights That Shape Futures
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Explore articles, stories, and research that highlight how structured interventions support adolescents and youth to complete education, develop life skills, and secure employment.
          </p>

          <div className="mt-6">
            <motion.a
              href="#featured"
              className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Browse Stories
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
    <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
          Featured Stories
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover our most impactful stories and insights from the field
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              className="group cursor-pointer"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={items[activeIndex]?.image}
                  alt={items[activeIndex]?.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {items[activeIndex]?.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {items[activeIndex]?.title}
                  </h3>

                  <p className="text-white/90 mb-6 line-clamp-3">
                    {items[activeIndex]?.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {dateToPretty(items[activeIndex]?.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {items[activeIndex]?.readingTime} min read
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {items[activeIndex]?.views}
                      </span>
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-brand-yellow font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      Read Story
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>

        {/* Story navigation */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-4 rounded-2xl transition-all ${index === activeIndex
                ? "bg-brand-red/10 border-2 border-brand-red/20 shadow-lg"
                : "bg-white hover:bg-slate-50 border-2 border-transparent"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className={`font-semibold text-sm mb-2 line-clamp-2 ${index === activeIndex ? "text-brand-red" : "text-ink"
                    }`}>
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{dateToPretty(item.date)}</span>
                    <span>{item.readingTime}m</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {item.likes}
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
}


function ModernFilterSection({ query, setQuery, resultsCount, categories, activeCategory, setActiveCategory }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Search Bar - Extra Compact */}
          <div className="lg:min-w-xs">
            <div className={`flex items-center gap-2 bg-slate-50 rounded-md px-2 py-1.5 border transition-all ${isFocused ? "border-brand-red bg-white shadow-sm" : "border-transparent"}`}>
              <Search className={`w-3.5 h-3.5 transition-colors ${isFocused ? "text-brand-red" : "text-slate-400"}`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search..."
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
              <span className="text-sm font-medium text-slate-600 mr-2">Filter:</span>
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === "All"
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
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === category
                    ? "bg-brand-red text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
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

/* ---------------- Modern Blog Card ---------------- */
function BlogCard({ post, index }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${isBookmarked ? "bg-brand-red text-white" : "bg-white/80 text-slate-600"
              }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bookmark className="w-4 h-4" />
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
          <img
            src={`https://ui-avatars.com/api/?name=${post.author}&background=ef4444&color=fff&size=32`}
            alt={post.author}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-slate-600">{post.author}</span>
        </div>

        <h3 className="text-xl font-bold text-ink mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
          {post.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {dateToPretty(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}m
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views}
            </span>

            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-1 transition-colors ${isLiked ? "text-red-500" : "text-slate-500 hover:text-red-500"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              {post.likes + (isLiked ? 1 : 0)}
            </motion.button>
          </div>
        </div>

        <motion.a
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
          whileHover={{ x: 5 }}
        >
          Read Full Story
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}

/* ---------------- Enhanced Sidebar ---------------- */
function Sidebar({ posts, categories, onSubscribe }) {
  const popular = [...posts].sort((a, b) => b.views - a.views).slice(0, 4);
  const latest = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const trending = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <motion.div
        className="bg-gradient-to-br from-brand-red via-brand-red to-brand-yellow text-white rounded-3xl p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
          <p className="text-white/90 text-sm">
            Get monthly insights and stories delivered to your inbox
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSubscribe(); }}>
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <motion.button
            type="submit"
            className="w-full bg-white text-brand-red font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe Now
          </motion.button>
        </form>
      </motion.div>

      {/* Trending Posts */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-brand-red" />
          <h4 className="font-bold text-ink">Trending Now</h4>
        </div>

        <div className="space-y-4">
          {trending.map((post, index) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex gap-4 group"
              whileHover={{ x: 5 }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-red text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              <div className="flex-1">
                <h5 className="font-semibold text-sm text-ink group-hover:text-brand-red transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h5>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{dateToPretty(post.date)}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Eye className="w-5 h-5 text-brand-red" />
          <h4 className="font-bold text-ink">Most Read</h4>
        </div>

        <div className="space-y-4">
          {popular.map((post) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex gap-4 group"
              whileHover={{ x: 5 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-ink group-hover:text-brand-red transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h5>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{dateToPretty(post.date)}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="w-5 h-5 text-brand-red" />
          <h4 className="font-bold text-ink">Categories</h4>
        </div>

        <div className="space-y-3">
          {categories.map((category) => {
            const count = posts.filter(p => p.category === category).length;
            return (
              <motion.button
                key={category}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors text-left"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm text-ink">{category}</span>
                <span className="text-xs bg-brand-red/10 text-brand-red px-2 py-1 rounded-full">
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}/* --
-------------- Enhanced Pagination ---------------- */
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
    <div className="flex flex-col items-center gap-6 mt-12">
      {/* Load More Button */}
      {hasMore && (
        <motion.button
          onClick={onLoadMore}
          className="px-8 py-4 bg-brand-red text-white rounded-full font-semibold hover:bg-brand-red/90 transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Stories
        </motion.button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
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
    <section className="mt-20 bg-gradient-to-r from-slate-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Support us in empowering young people through education, life skills, and sustainable livelihoods
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="/partner"
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue/20 transition-colors">
              <Users className="w-8 h-8 text-brand-blue" />
            </div>
            <h4 className="text-xl font-bold text-ink mb-3">Partner With Us</h4>
            <p className="text-slate-600 mb-6">
              Collaborate with us to create lasting impact in communities
            </p>
            <div className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          <motion.a
            href="/volunteer"
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-yellow/20 transition-colors">
              <Heart className="w-8 h-8 text-brand-yellow" />
            </div>
            <h4 className="text-xl font-bold text-ink mb-3">Volunteer</h4>
            <p className="text-slate-600 mb-6">
              Join our community of volunteers making a difference
            </p>
            <div className="inline-flex items-center gap-2 text-brand-yellow font-semibold group-hover:gap-3 transition-all">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          <motion.a
            href="/donate"
            className="group p-8 bg-gradient-to-br from-brand-red to-brand-red/80 text-white rounded-3xl shadow-lg hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Donate Now</h4>
            <p className="text-white/90 mb-6">
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

/* ---------------- Main Blogs Component ---------------- */
export default function Blogs() {
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

  const handleSubscribe = () => {
    alert("Thank you for subscribing! You'll receive our monthly insights soon.");
  };

  return (
    <Layout>
      <main className="bg-slate-50 text-ink min-h-screen">
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
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:flex-1">
              {/* View Toggle & Results Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-ink mb-2">
                    {activeCategory === "All" ? "All Stories" : activeCategory}
                  </h2>
                  <p className="text-slate-600">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"} found
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 sm:mt-0">
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
                  className={`grid gap-8 ${viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                    }`}
                  layout
                >
                  <AnimatePresence>
                    {paginatedPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
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
                  <h3 className="text-xl font-semibold text-ink mb-2">No stories found</h3>
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
                    Show All Stories
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

            {/* Sidebar */}
            <div className="lg:w-80">
              <Sidebar
                posts={POSTS}
                categories={categories}
                onSubscribe={handleSubscribe}
              />
            </div>
          </div>
        </div>

        <BottomCTA />
      </main>
    </Layout>
  );
}