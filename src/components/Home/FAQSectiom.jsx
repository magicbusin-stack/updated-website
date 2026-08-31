import React, { useMemo, useState } from "react";
import { ChevronDown, Search, HelpCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Props:
 * - items: Array<{ question: string, answer: string | ReactNode, category?: string }>
 * - title?: string
 * - subtitle?: string
 * - categoriesLabel?: string
 */
export default function FAQSection({
  items = [],
  title = "Frequently Asked Questions",
  subtitle = "Clear answers about our programmes, partnerships, and impact.",
  categoriesLabel = "Filter by category",
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null); // index of open item
  const [activeCategory, setActiveCategory] = useState("All");

  // Build category list
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(items.map((i) => (i.category ? i.category : "General")))
    );
    return ["All", ...cats];
  }, [items]);

  // Filtered items
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((it) =>
        activeCategory === "All"
          ? true
          : (it.category || "General") === activeCategory
      )
      .filter((it) =>
        !q
          ? true
          : it.question.toLowerCase().includes(q) ||
            String(it.answer).toLowerCase().includes(q)
      );
  }, [items, query, activeCategory]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-yellow px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-black uppercase">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
            {title}
          </h2>
          <p className="mt-3 text-brand-black/70 text-base md:text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          {/* Search */}
          <label className="relative flex-1 max-w-xl">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g., placements, fellowship, volunteering)"
              className="w-full rounded-xl border border-border pl-10 pr-4 py-3 outline-none focus:ring-4 focus:ring-brand-yellow/30 focus:border-brand-yellow text-ink placeholder:text-ink/40"
            />
          </label>

          {/* Categories */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/70">
              <Filter className="w-4 h-4" />
              {categoriesLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = c === activeCategory;
                return (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-3 py-1.5 rounded-full border text-sm transition ${
                      active
                        ? "bg-brand-red text-white border-brand-red"
                        : "bg-white text-ink border-border hover:bg-gray-50"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
          {filtered.length === 0 && (
            <div className="p-8 text-center text-ink/60">
              No results. Try a different keyword or category.
            </div>
          )}

          {filtered.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={`${item.question}-${i}`} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-start gap-4 hover:bg-brand-yellow/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/30"
                >
                  {/* Bullet */}
                  <span
                    className={`mt-1 inline-block w-2 h-2 rounded-full ${
                      isOpen ? "bg-brand-red" : "bg-ink/30 group-hover:bg-brand-red"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base md:text-lg font-semibold text-ink">
                        {item.question}
                      </h3>
                      {item.category && (
                        <span className="text-xs font-semibold rounded-full border border-brand-black/10 bg-brand-yellow/70 text-brand-black px-2 py-0.5">
                          {item.category}
                        </span>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="pt-3 pr-2 text-[15px] leading-relaxed text-ink/80">
                            {typeof item.answer === "string" ? (
                              <p>{item.answer}</p>
                            ) : (
                              item.answer
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 mt-1 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-brand-red" : "text-ink/50 group-hover:text-ink"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact / fallback CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:bg-red-600 transition active:scale-[0.99]"
          >
            Still have questions? Contact us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
