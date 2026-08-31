// src/pages/WorkWithUs.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Search, MapPin, Briefcase, Play, X, Upload, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Program Manager - Livelihoods",
    category: "Program Operations",
    location: "Mumbai",
    experience: "5+ Years",
    type: "Full-Time",
    description: "Lead youth skilling center operations, drive corporate placement tie-ups, and manage local community mobilization pipelines."
  },
  {
    id: 2,
    title: "District Livelihood Trainer",
    category: "Training",
    location: "Delhi NCR",
    experience: "2+ Years",
    type: "Full-Time",
    description: "Facilitate core 21st-century employability and life skills training sessions for graduate youth at tier-II/III colleges."
  },
  {
    id: 3,
    title: "M&E Specialist",
    category: "Monitoring & Evaluation",
    location: "Bengaluru",
    experience: "3+ Years",
    type: "Full-Time",
    description: "Design assessment frameworks, manage field data collectors, and compile periodic impact evaluation reports."
  },
  {
    id: 4,
    title: "Center Coordinator",
    category: "Program Operations",
    location: "Hyderabad",
    experience: "1+ Years",
    type: "Full-Time",
    description: "Oversee daily center administration, student attendance metrics, and support local job fair coordination campaigns."
  },
  {
    id: 5,
    title: "Finance & Admin Executive",
    category: "Finance & Admin",
    location: "Mumbai",
    experience: "2+ Years",
    type: "Full-Time",
    description: "Manage accounts payable/receivable, coordinate vendor invoicing, and support the internal audit documentation process."
  }
];

const CATEGORIES = ["All Profiles", "Program Operations", "Training", "Monitoring & Evaluation", "Finance & Admin"];
const LOCATIONS = ["All Locations", "Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad"];

const TESTIMONIALS = [
  {
    id: "gptw2022",
    title: "Magic Bus | Great Place To Work 2022",
    speaker: "Corporate Team Overview",
    youtubeId: "dQw4w9WgXcQ", // Placeholder video ID
    duration: "2:45"
  },
  {
    id: "pravina",
    title: "Pravina Kukade | Great Place to Work",
    speaker: "Pravina Kukade (DGM Livelihood)",
    youtubeId: "dQw4w9WgXcQ",
    duration: "3:10"
  },
  {
    id: "ravi",
    title: "Great Place to Work | Ravi's Story",
    speaker: "Ravi Kumar (Field Officer)",
    youtubeId: "dQw4w9WgXcQ",
    duration: "2:15"
  },
  {
    id: "shubhomoy",
    title: "Shubhomoy | Great Place To Work",
    speaker: "Subhomoy Bhaduri (Associate Director)",
    youtubeId: "dQw4w9WgXcQ",
    duration: "4:02"
  },
  {
    id: "vilasini",
    title: "Vilasini's Story | Great Place To Work",
    speaker: "Vilasini (Program Coordinator)",
    youtubeId: "dQw4w9WgXcQ",
    duration: "3:30"
  }
];

export default function WorkWithUs() {
  const [selectedCat, setSelectedCat] = useState("All Profiles");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");
  const [activeJobs, setActiveJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null); // Active job for application modal
  const [submittedApp, setSubmittedApp] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null); // Active YouTube video object
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form Fields State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    let filtered = SAMPLE_JOBS;
    if (selectedCat !== "All Profiles") {
      filtered = filtered.filter(j => j.category === selectedCat);
    }
    if (selectedLoc !== "All Locations") {
      filtered = filtered.filter(j => j.location === selectedLoc);
    }
    setActiveJobs(filtered);
    setHasSearched(true);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setSubmittedApp(true);
    setTimeout(() => {
      setSubmittedApp(false);
      setAppliedJob(null);
      setFormName("");
      setFormEmail("");
      setFileName("");
    }, 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("careers@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Join the Family"
          title="Work with Us"
          subtitle="Transform lives, spread impact, and grow with a certified Great Place to Work."
          description="Every step of the way, our driven and dedicated team ensures they strive to fulfil our mission. Be a part of the Magic!"
          image="/ngo-images/6.jpeg"
          ctas={[
            { href: "#job-search", label: "Explore Opportunities", variant: "primary", showArrow: true },
            { href: "#testimonials", label: "Watch Testimonials", variant: "secondary" }
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Work with Us</span>
          </div>
        </section>

        {/* ===== 3) SECTION 1: INTRODUCTION ===== */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Title */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-red bg-brand-red/5 border border-brand-red/10 uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Our People, Our Pride
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Work with <br />
                  <span className="relative inline-block">
                    Magic Bus
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                  </span>
                </h2>
              </div>

              {/* Right Column: Paragraph */}
              <div className="text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2 space-y-6">
                <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12 font-medium">
                  Magic Bus is a family and one of our biggest strengths is our people. Every step of the way, our driven and dedicated team ensures they strive to fulfil our mission and vision. We are guided by five strong values and this approach has enabled us to impact more than a million lives since 1999.
                </p>
                <p>
                  As a certified Great Place to Work, we offer a dynamic professional path built on respect, continuous learning, and direct social contribution. Discover how your skills can create sustainable livelihood transitions.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) SECTION 2: JOB FILTER (INTERACTIVE ENGINE) ===== */}
        <section className="py-20 bg-slate-50 border-y border-slate-100 scroll-mt-20" id="job-search">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Filter Panel */}
            <div className="bg-brand-yellow p-6 md:p-8 rounded-3xl shadow-sm border border-brand-yellow/30 mb-12">
              <h3 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight mb-4 text-center">
                Want to join us? Explore career opportunities
              </h3>
              
              <form onSubmit={handleFilterSubmit} className="grid md:grid-cols-[1fr_1fr_auto] gap-4 items-center">
                {/* Select category */}
                <div className="relative">
                  <select
                    value={selectedCat}
                    onChange={(e) => setSelectedCat(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white rounded-xl border-none focus:ring-2 focus:ring-slate-900 text-sm font-bold text-slate-800 shadow-sm appearance-none cursor-pointer"
                  >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                {/* Select location */}
                <div className="relative">
                  <select
                    value={selectedLoc}
                    onChange={(e) => setSelectedLoc(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white rounded-xl border-none focus:ring-2 focus:ring-slate-900 text-sm font-bold text-slate-800 shadow-sm appearance-none cursor-pointer"
                  >
                    {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 bg-brand-red hover:bg-slate-950 text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
                >
                  Submit Search
                </button>
              </form>
            </div>

            {/* Jobs List Grid */}
            <div className="space-y-4">
              {!hasSearched ? (
                <div className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
                  <Search className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                  <h4 className="font-extrabold text-slate-800 text-lg">Find Your Perfect Role</h4>
                  <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto">
                    Select a job profile and your preferred location above, then click <strong>Submit Search</strong> to explore career opportunities.
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Available Vacancies ({activeJobs.length})</h4>
                  
                  <AnimatePresence mode="popLayout">
                    {activeJobs.length > 0 ? (
                      activeJobs.map((job) => (
                        <motion.div
                          key={job.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3, ease: EASE_EXPO }}
                          className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                        >
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2 items-center">
                              <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">{job.category}</span>
                              <span className="bg-brand-red/5 text-brand-red text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                            </div>
                            <h4 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-tight">{job.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed max-w-2xl font-light">{job.description}</p>
                          </div>

                          <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                            <div className="text-left md:text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                              <span>EXP: {job.experience}</span>
                              <span className="block mt-0.5">{job.type}</span>
                            </div>
                            
                            <button
                              onClick={() => setAppliedJob(job)}
                              className="px-6 py-2.5 bg-slate-900 hover:bg-brand-red text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300"
                            >
                              Apply Now
                            </button>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-2xl"
                      >
                        <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                        <h5 className="font-bold text-slate-800 text-base">No Open Vacancies</h5>
                        <p className="text-xs text-slate-400 mt-1">Try resetting the dropdown filters to explore other categories.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ===== 5) SECTION 3: EMPLOYEE TESTIMONIALS (VIDEOS) ===== */}
        <section className="py-24 bg-white" id="testimonials">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Team Stories
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Watch Employee Testimonials
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Hear directly from our team about work-life culture, career growth, and local field impacts.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className="bg-[#FAFAF9] border border-slate-200/50 rounded-3xl p-5 flex flex-col justify-between hover:shadow-lg hover:border-brand-yellow transition-all duration-300"
                >
                  {/* Visual Video Cover Placeholder */}
                  <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-5 group border border-slate-800 shadow-inner flex items-center justify-center">
                    {/* Simulated visual video backdrop cover */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('/ngo-images/${5 + (idx % 3)}.jpeg')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-slate-950/10" />
                    
                    <button
                      onClick={() => setActiveVideo(t)}
                      className="w-14 h-14 rounded-full bg-brand-yellow hover:bg-brand-red text-slate-950 hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 z-10"
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </button>
                    
                    <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur text-[10px] text-white font-bold px-2 py-0.5 rounded">
                      {t.duration}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base leading-snug tracking-tight mb-1">{t.title}</h4>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{t.speaker}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===== 6) SECTION 4: BEWARE OF JOB SCAMS (ADVISORY PANEL) ===== */}
        <section className="py-16 bg-red-50/50 border-t border-red-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-red-200/60 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-red-100 text-red-600 rounded-2xl p-4 shrink-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-red-950 tracking-tight">Beware of Job Scams</h3>
                <p className="text-sm text-red-900/70 leading-relaxed font-light">
                  Magic Bus India Foundation never requests payment, administration fees, or deposits at any stage of the recruitment process. Please do not pay any third-party agencies or consultants claiming to represent us. All official job confirmations are issued directly from <span className="font-bold">magicbus.org</span> domain emails.
                </p>
                
                <div className="pt-2">
                  <a
                    href="mailto:careers@magicbusindia.org"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 transition-colors uppercase tracking-wider"
                  >
                    <span>Report Fraudulent Invites</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7) SECTION 5: CONTACT DETAILS (YELLOW STRIP) ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-slate-800">For career queries or direct CV submissions, email us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:careers@magicbusindia.org"
                className="text-xl sm:text-3xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                careers@magicbusindia.org
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full text-xs font-bold transition-all"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>

        {/* ===== MODAL: JOB APPLICATION FORM ===== */}
        <AnimatePresence>
          {appliedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setAppliedJob(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.35, ease: EASE_EXPO }}
                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
              >
                <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-yellow">Position Application</span>
                    <h4 className="font-extrabold text-lg leading-tight mt-1">{appliedJob.title}</h4>
                    <p className="text-xs text-white/50 mt-0.5">{appliedJob.location} • {appliedJob.category}</p>
                  </div>
                  
                  <button
                    onClick={() => setAppliedJob(null)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6">
                  {submittedApp ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-3"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8" />
                      </div>
                      <h5 className="font-bold text-slate-800 text-lg">Application Submitted!</h5>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        Thank you for applying. Our talent acquisition committee will reach out to you within 5 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Priyanjali Sen"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-red text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="e.g. priyanjali@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-red text-sm"
                        />
                      </div>

                      {/* File upload simulator */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Resume / CV (PDF)</label>
                        <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-brand-yellow/60 transition-colors relative cursor-pointer group">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => {
                              if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                            }}
                          />
                          <Upload className="w-5 h-5 text-slate-400 mx-auto mb-2 group-hover:text-brand-yellow transition-colors" />
                          <span className="text-xs text-slate-500 font-bold block">
                            {fileName ? fileName : "Upload Document (Max 5MB)"}
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Supports PDF, DOC, DOCX</span>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-slate-900 hover:bg-brand-red text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300"
                      >
                        Submit Application
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ===== MODAL: VIDEO TESTIMONIAL PLAYER ===== */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: EASE_EXPO }}
                className="bg-black aspect-video w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-800"
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Embedded dynamic YouTube video player */}
                <iframe
                  title={activeVideo.title}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </main>
    </Layout>
  );
}
