import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Mail,
  ArrowRight,
  BookOpen,
  Briefcase,
  Phone,
  FileText,
  Bookmark,
  Sparkles,
  Info,
  Filter,
  CheckCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import faqData from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-black mb-4">
      {children}
    </span>
  );
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Grouped FAQs
  const allFAQItems = useMemo(() => {
    const list = [];
    
    const addItems = (itemsArray = [], groupName, iconName) => {
      itemsArray.forEach((item) => {
        list.push({
          ...item,
          group: groupName,
          category: item.category || "General",
        });
      });
    };

    addItems(faqData.homefaq || [], "General & Foundation");
    addItems(faqData.whoWeAreFAQ || [], "General & Foundation");
    addItems(faqData.cultureFAQ || [], "General & Foundation");

    addItems(faqData.adolescentFAQ || [], "Programmes");
    addItems(faqData.governmentPartnershipFAQ || [], "Programmes");
    addItems(faqData.cwwFAQ || [], "Programmes");
    addItems(faqData.digitalSkillingFAQ || [], "Programmes");
    addItems(faqData.edpFAQ || [], "Programmes");
    addItems(faqData.mbDostFAQ || [], "Programmes");
    addItems(faqData.futureXFAQ || [], "Programmes");

    addItems(faqData.annualReportsFAQ || [], "Resources & Reports");
    addItems(faqData.newsFAQ || [], "Resources & Reports");
    addItems(faqData.certificationsFAQ || [], "Resources & Reports");
    addItems(faqData.flfprFAQ || [], "Resources & Reports");
    addItems(faqData.genderJourneyFAQ || [], "Resources & Reports");
    addItems(faqData.podcastFAQ || [], "Resources & Reports");

    addItems(faqData.contactFAQ || [], "Support & Careers");

    return list;
  }, []);

  // Filter tabs definition
  const tabs = [
    { id: "all", label: "All FAQs", count: allFAQItems.length },
    { id: "General & Foundation", label: "General & Foundation", count: allFAQItems.filter(i => i.group === "General & Foundation").length },
    { id: "Programmes", label: "Programmes", count: allFAQItems.filter(i => i.group === "Programmes").length },
    { id: "Resources & Reports", label: "Resources & Reports", count: allFAQItems.filter(i => i.group === "Resources & Reports").length },
    { id: "Support & Careers", label: "Support & Careers", count: allFAQItems.filter(i => i.group === "Support & Careers").length },
  ];

  // Filtered list based on active tab and search query
  const filteredFAQs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allFAQItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.group === activeTab;
      
      let matchesSearch = true;
      if (query) {
        const qText = item.question.toLowerCase();
        // Since answer can be a string or a React node, we extract text content or search search term safely
        let aText = "";
        if (typeof item.answer === "string") {
          aText = item.answer.toLowerCase();
        } else {
          // If it's a React element, we search inside its standard stringified format or fallback to matching question
          aText = "";
        }
        matchesSearch = qText.includes(query) || aText.includes(query) || (item.category && item.category.toLowerCase().includes(query));
      }

      return matchesTab && matchesSearch;
    });
  }, [allFAQItems, activeTab, searchQuery]);

  return (
    <Layout>
      <FaqSchema faqs={allFAQItems} />
      {/* Hero Section */}
      <HeroBanner
        badgeText="FAQ Center"
        image="/ngo-images/3.JPG"
        title="Frequently Asked Questions"
        subtitle="How can we help you?"
        description="Find comprehensive answers about our childhood development programs, skilling initiatives, volunteer ecosystem, and reports."
        ctas={[
          { href: "#faq-content", label: "Browse FAQs", variant: "primary", showArrow: true },
          { href: "mailto:info@magicbusindia.org", label: "Email Support" },
        ]}
      />

      {/* Main Content Area */}
      <section id="faq-content" className="py-20 bg-[#F9F9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Sidebar: Tabs */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <FadeUp>
                <div className="rounded-3xl border border-[#E0E0E0] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-brand-red" />
                    Categories
                  </h3>
                  <div className="space-y-1.5">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setExpandedIndex(null);
                          }}
                          className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                            isActive
                              ? "bg-brand-red text-white shadow-md shadow-brand-red/10"
                              : "text-[#1A1A1A]/70 hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                              isActive ? "bg-white/20 text-white" : "bg-[#F5F5F5] text-[#1A1A1A]/50"
                            }`}
                          >
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Direct Support Card */}
                <div className="mt-6 rounded-3xl bg-[#1A1A1A] text-white p-6 relative overflow-hidden shadow-xl">
                  {/* Background decoration */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-brand-red/10 blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow">Still Confused?</span>
                    <h4 className="text-xl font-extrabold mt-2 mb-3">Contact Support</h4>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">
                      If you couldn't find the answer you were looking for, feel free to contact us.
                    </p>
                    <a
                      href="mailto:info@magicbusindia.org"
                      className="inline-flex items-center gap-2 rounded-2xl bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs px-5 py-3 w-full justify-center transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      info@magicbusindia.org
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right: FAQ Search & Accordion */}
            <div className="lg:col-span-8 space-y-6">
              <FadeUp>
                {/* Search Bar */}
                <div className="relative rounded-3xl border border-[#E0E0E0] bg-white p-4 shadow-sm flex items-center">
                  <Search className="w-5 h-5 text-[#1A1A1A]/40 ml-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setExpandedIndex(null);
                    }}
                    placeholder="Search all questions..."
                    className="w-full bg-transparent border-0 outline-none focus:ring-0 text-sm font-semibold text-[#1A1A1A] px-4 placeholder-[#1A1A1A]/35"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-brand-red hover:underline font-bold px-3"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Match Stats */}
                <div className="flex items-center justify-between text-xs text-[#1A1A1A]/50 font-bold px-2 mt-2">
                  <span>
                    {searchQuery
                      ? `Found ${filteredFAQs.length} matching FAQs`
                      : `Showing ${filteredFAQs.length} FAQs`}
                  </span>
                  <span>Category: {tabs.find(t => t.id === activeTab)?.label}</span>
                </div>
              </FadeUp>

              {/* Accordion Container */}
              <div className="space-y-3 mt-4">
                <AnimatePresence mode="popLayout">
                  {filteredFAQs.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white rounded-3xl border border-[#E0E0E0] p-10 text-center"
                    >
                      <Info className="w-8 h-8 text-[#1A1A1A]/30 mx-auto mb-3" />
                      <p className="text-sm font-extrabold text-[#1A1A1A]">No FAQs found</p>
                      <p className="text-xs text-[#1A1A1A]/50 mt-1 max-w-sm mx-auto">
                        Try refining your search keyword or selecting a different category on the left sidebar.
                      </p>
                    </motion.div>
                  ) : (
                    filteredFAQs.map((faq, index) => {
                      const isExpanded = expandedIndex === index;
                      return (
                        <motion.div
                          layout
                          key={faq.question}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="bg-white rounded-2xl border border-[#E0E0E0] overflow-hidden"
                        >
                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                          >
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                                  {faq.group}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/20" />
                                <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">
                                  {faq.category}
                                </span>
                              </div>
                              <h4 className="text-sm md:text-base font-extrabold text-[#1A1A1A] leading-snug">
                                {faq.question}
                              </h4>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0 w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#1A1A1A]/60 mt-1"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: EASE }}
                              >
                                <div className="px-6 pb-5 pt-2 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#F5F5F5] bg-[#FDFDFD]">
                                  {typeof faq.answer === "string" ? (
                                    <p>{faq.answer}</p>
                                  ) : (
                                    faq.answer
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
