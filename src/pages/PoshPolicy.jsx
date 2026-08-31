// src/pages/PoshPolicy.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ArrowRight, Shield, Heart, HelpCircle, Users, Download, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const HARASSMENT_DEFINITIONS = [
  {
    id: 1,
    title: "Unwelcome Advances & Visuals",
    desc: "Unwelcome sexual advances, requests for sexual favours, display of sex-related visuals, audios, pornographic or obscene material, and any other verbal or physical conduct of a sexual nature."
  },
  {
    id: 2,
    title: "Suggestive Communication",
    desc: "Transmitting any message by mail, telephone, email, etc., that is obscene, lewd, suggestive, or blatantly sexual in nature."
  },
  {
    id: 3,
    title: "Employment Conditions",
    desc: "Any explicit or implicit communication wherein a sexual favor or demand, whether by words or actions, is made a condition for an individual’s employment, career progress, promotion, or benefits."
  },
  {
    id: 4,
    title: "Sexually Charged Remarks",
    desc: "Sexually charged jokes, verbal remarks, and behavior that have sexually oriented innuendoes or unwanted targeting."
  },
  {
    id: 5,
    title: "Unwanted Contact & Attention",
    desc: "Consistent pattern of unnecessary physical contact, staring, or targeting unreasonable attention at an individual in day-to-day dealings."
  },
  {
    id: 6,
    title: "Gender Differentiation",
    desc: "Any pervasive pattern of behaviour that makes employees uncomfortable, insecure, or feel humiliated or disadvantaged on the basis of gender differentiation, or actual sexual assault."
  }
];

const REGIONAL_COMMITTEE = {
  east: {
    email: "posh.east@magicbusindia.org",
    leadName: "Sandhya Raman Krishnan",
    leadRole: "Director - Adolescent Program Operations",
    featuredMember: {
      name: "Mary Jones Lallawmawmi",
      role: "Sr. Manager - Program & Govt. Partnership",
      image: "/posh/mary.webp"
    },
    members: [
      { name: "Somenath Ghosh", role: "Sr. Manager - Monitoring & Evaluation" },
      { name: "Sujit Ghosh", role: "Sr. Manager - Operations" },
      { name: "Manaswini Panigrahi", role: "Sr. Manager - Training" },
      { name: "Padmini Pathi", role: "Program Manager" }
    ]
  },
  west: {
    email: "posh.west@magicbusindia.org",
    leadName: "Leena C Rao",
    leadRole: "Head - Program Design and Development",
    featuredMember: {
      name: "Leena C Rao",
      role: "Head - Program Design and Development",
      image: "/posh/leena.jpg"
    },
    members: [
      { name: "Diana Peters", role: "Head - Executive Assistant to CEO" },
      { name: "Bhimraj Pawar", role: "City Manager" },
      { name: "Subhomoy Bhaduri", role: "Associate Director - Training" },
      { name: "Apoorva Deepesh Punekar", role: "Deputy General Manager - Human Resources" },
      { name: "Dipti Patel", role: "Sr. Manager - Donor Retention & Engagement" },
      { name: "Niles Desai", role: "Deputy General Manager - Finance & Accounts" },
      { name: "Pravina Kukade", role: "Deputy General Manager - EDP Livelihood" },
      { name: "Ritesh Dhote", role: "Sr. Manager - Program" }
    ]
  },
  north: {
    email: "posh.north@magicbusindia.org",
    leadName: "Smita Shendye",
    leadRole: "Head - Government Partnership",
    featuredMember: {
      name: "Smita Shendye",
      role: "Head - Government Partnership",
      image: "/posh/smita.jpg"
    },
    members: [
      { name: "Sandeep Singh", role: "District Livelihood - Sr. Manager" },
      { name: "Vikas Khanna", role: "Project Director" },
      { name: "Jaya Verma", role: "Manager - Staff Training" },
      { name: "Swetabja Patranabish", role: "Assistant Manager - Program" },
      { name: "Manish Pathak", role: "Manager - Training" }
    ]
  },
  south: {
    email: "posh.south@magicbusindia.org",
    leadName: "Yalamanchi Siva Ranjani",
    leadRole: "Sr. Manager - Program",
    featuredMember: {
      name: "Yalamanchi Siva Ranjani",
      role: "Sr. Manager - Program",
      image: "/posh/yalamanchi.jpg"
    },
    members: [
      { name: "Pasumarthy Venkata Gowri Soujanya", role: "Assistant Manager - Training" },
      { name: "Alexander A", role: "Program Manager" },
      { name: "Anuja V S", role: "Program Manager" },
      { name: "Vijay Kotina", role: "Sr. Manager - Staff Training" },
      { name: "Nicholette Joyce", role: "Sr. Manager - Program" },
      { name: "Bindu A", role: "Cluster Manager" },
      { name: "Venkatesh T", role: "Deputy General Manager - Program" }
    ]
  }
};

export default function PoshPolicy() {
  const [activeRegion, setActiveRegion] = useState("west");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPoshEmail, setCopiedPoshEmail] = useState(false);

  const handleCopyEmail = (emailStr, type) => {
    navigator.clipboard.writeText(emailStr);
    if (type === "main") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPoshEmail(true);
      setTimeout(() => setCopiedPoshEmail(false), 2000);
    }
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Workplace Safeguards"
          title="POSH Policy of Magic Bus"
          subtitle="Ensuring a secure, respectful, and equal workplace for all."
          description="Magic Bus is committed to ensuring that the work environment at all locations is conducive to fair, safe, and harmonious relationships between employees."
          image="/ngo-images/6.jpeg"
          ctas={[
            { href: "https://www.magicbus.org/assets/uploads/POSH_Policy_April_2025.pdf", label: "Read Complete Policy PDF", variant: "primary", showArrow: true, target: "_blank" },
            { href: "#committee-directory", label: "Contact Internal Committee", variant: "secondary" }
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">POSH Policy</span>
          </div>
        </section>

        {/* ===== 3) SECTION 2: INTRO & SCOPE ===== */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Side Info */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-red bg-brand-red/5 border border-brand-red/10 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  Zero Tolerance Stance
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Ensuring Safety <br />
                  <span className="relative inline-block">
                    For Women
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                  </span>
                </h2>
                
                {/* Scope Card */}
                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
                  <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider mb-2">Scope of Policy</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    This policy applies to all individuals employed in a permanent, contractual, or temporary capacity at any location of Magic Bus India Foundation.
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="space-y-8 text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2">
                <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12 font-medium">
                  At Magic Bus India Foundation, we are committed to ensuring that the work environment at all our locations is conducive to fair, safe, harmonious relations between employees. Discrimination and harassment of any type are strictly prohibited. We are also committed to ensuring that no employee is disadvantaged due to gender discrimination.
                </p>
                <p>
                  To ensure absolute clarity on the important and sensitive issue of sexual harassment, this policy outlines the organization’s approach to the issue and its guidelines for addressing any related incidents pertaining to this.
                </p>

                {/* Indication policy stance box */}
                <div className="border-l-4 border-brand-red pl-6 py-2 bg-slate-50/50 rounded-r-xl">
                  <h4 className="font-bold text-slate-950 text-base">Organization Policy on Sexual Harassment</h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed font-light">
                    The organization policy is to totally prohibit any form of sexual harassment. This applies equally to relations between superior and subordinates as well as between peers. Any incident of sexual harassment will be viewed extremely seriously. A complaint or report of sexual harassment will be immediately investigated, and appropriate action will be taken against the offending employee or employees. Such action will include strict disciplinary action, including termination of service.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) DEFINITIONS INTERACTIVE SHOWCASE ===== */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Indicative Definitions
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                What Constitutes Sexual Harassment?
              </h3>
              <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
                Any physical or verbal behavior and communication that has unwelcome sexual connotations. Below is an indicative overview.
              </p>
            </div>

            {/* Definitions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HARASSMENT_DEFINITIONS.map((def) => (
                <div
                  key={def.id}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-red transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-slate-300 font-extrabold text-xs uppercase tracking-widest block mb-2">Category {def.id}</span>
                    <h4 className="font-extrabold text-slate-800 text-base mb-3 tracking-tight">{def.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{def.desc}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[10px] font-bold text-brand-red/60 mt-4 select-none">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Indicative Criteria</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Document Link */}
            <div className="mt-12 text-center">
              <a
                href="https://www.magicbus.org/assets/uploads/POSH_Policy_April_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-slate-900 border-b-2 border-brand-red/30 hover:border-slate-900 pb-1 transition-all"
              >
                <span>Read the Complete POSH Policy Document</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </section>

        {/* ===== 5) INTERNAL COMMITTEE DIRECTORY ===== */}
        <section className="py-24 bg-white" id="committee-directory">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                POSH Internal Committee
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Speak Up Safely — Contact Our Committee
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Our committee consists of regional support representatives and an independent external member.
              </p>
            </div>

            {/* Independent Member Callout */}
            <div className="max-w-xl mx-auto mb-16 bg-[#FAFAF9] border-2 border-slate-200/50 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-brand-yellow">
                <img
                  src="/posh/sandya.jpg"
                  alt="Dr. Sandya Advani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block bg-brand-yellow text-slate-900 font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-2">
                  Committee Oversight
                </span>
                <h4 className="font-extrabold text-slate-950 text-lg leading-tight">Dr. Sandya Advani</h4>
                <p className="text-xs text-brand-red font-bold mt-0.5">Independent External Member</p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Acts as an objective external voice to guarantee fair, impartial audits and procedural compliance.
                </p>
              </div>
            </div>

            {/* Regional Navigation Tabs */}
            <div className="flex justify-center mb-10">
              <div className="bg-slate-100 p-1 rounded-xl inline-flex gap-1 border border-slate-200/50">
                {Object.keys(REGIONAL_COMMITTEE).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`px-5 py-2 rounded-lg text-xs font-bold capitalize transition-all ${
                      activeRegion === reg
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {reg} Region
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Committee Details Grid */}
            <div className="grid lg:grid-cols-[1.2fr_2fr] gap-8 bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200/50">
              
              {/* Left Column: Featured Regional Contact */}
              <AnimatePresence mode="wait">
                {Object.entries(REGIONAL_COMMITTEE).map(([key, data]) => {
                  if (key !== activeRegion) return null;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.35, ease: EASE_EXPO }}
                      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-slate-100 mx-auto lg:mx-0">
                          <img
                            src={data.featuredMember.image}
                            alt={data.featuredMember.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="text-center lg:text-left">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Featured Member</span>
                          <h4 className="font-extrabold text-slate-950 text-lg leading-tight mt-1">{data.featuredMember.name}</h4>
                          <p className="text-xs text-brand-red font-semibold mt-1">{data.featuredMember.role}</p>
                        </div>
                      </div>

                      {/* Contact trigger box */}
                      <div className="mt-8 pt-6 border-t border-slate-100 text-center lg:text-left">
                        <span className="block text-[9px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Regional POSH Email</span>
                        <a
                          href={`mailto:${data.email}`}
                          className="font-black text-slate-900 hover:text-brand-red text-sm transition-colors tracking-tight block truncate mb-3"
                        >
                          {data.email}
                        </a>
                        <button
                          onClick={() => handleCopyEmail(data.email, "posh")}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors"
                        >
                          {copiedPoshEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedPoshEmail ? "Copied!" : "Copy Email"}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Right Column: Other Regional Members List */}
              <AnimatePresence mode="wait">
                {Object.entries(REGIONAL_COMMITTEE).map(([key, data]) => {
                  if (key !== activeRegion) return null;
                  return (
                    <motion.div
                      key={`${key}-members`}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.35, ease: EASE_EXPO }}
                      className="space-y-4"
                    >
                      <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Committee Members</h4>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {data.members.map((mem) => (
                          <div
                            key={mem.name}
                            className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:border-brand-yellow/60 transition-colors"
                          >
                            <h5 className="font-bold text-slate-900 text-sm leading-tight">{mem.name}</h5>
                            <p className="text-[11px] text-slate-400 mt-1">{mem.role}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>

          </div>
        </section>

        {/* ===== 6) SECTION 3: CONTACT DETAILS (YELLOW STRIP) ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900 border-t border-slate-200/20">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-slate-800">To file a complaint or for any concerns, contact us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:poshicc@magicbusindia.org"
                className="text-xl sm:text-3xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                poshicc@magicbusindia.org
              </a>
              <button
                onClick={() => handleCopyEmail("poshicc@magicbusindia.org", "main")}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full text-xs font-bold transition-all"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
