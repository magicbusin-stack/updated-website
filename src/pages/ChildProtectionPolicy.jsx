// src/pages/ChildProtectionPolicy.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ArrowRight, Shield, Heart, Users, FileText, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const STRATEGY_POINTS = [
  {
    id: "prevention",
    title: "Proactive Prevention",
    letter: "A",
    description: "Establishing a strict Code of Conduct, mandatory background verifications for all staff/volunteers, and continuous educational training on child safety standards.",
    details: "We ensure all personnel undergo intensive screening processes. Regular refresher workshops help staff recognize signs of vulnerability, physical, emotional, and social neglect, fostering a protective atmosphere at all program sites."
  },
  {
    id: "response",
    title: "Response to Concerns",
    letter: "B",
    description: "A zero-tolerance framework with standardized, confidential channels to report, escalate, and investigate any protection concerns.",
    details: "Our strict reporting timeline mandates immediate escalation of any suspected distress. We collaborate closely with child protection authorities, ensuring compliance with POCSO and relevant legal framework requirements."
  },
  {
    id: "audit",
    title: "Audit & Review",
    letter: "C",
    description: "Conducting periodic compliance reviews, site audits, and updating the safeguarding policy to match national guidelines.",
    details: "Policy documents are reviewed annually by independent experts and our internal Child Protection Committee to adapt to dynamic community needs and regulatory changes."
  },
  {
    id: "partners",
    title: "Working with Partners",
    letter: "D",
    description: "Requiring all partner organizations, vendors, and local institutions to sign and adhere to our Child Protection Annexures.",
    details: "We perform due diligence before entering collaborations. Training resources are extended to our ecosystem partners to align their local operations with our child safeguarding standards."
  },
  {
    id: "media",
    title: "Media & Communications",
    letter: "E",
    description: "Strict controls on child photography, film production, digital representation, and storage of identity metrics.",
    details: "We enforce written parental consent policies before any student is featured in public materials. All images represent children in a dignified, respectful manner that protects their location and identity."
  },
  {
    id: "support",
    title: "Support Services",
    letter: "F",
    description: "Direct linking of children in distress to professional counseling networks, rehabilitation facilities, and hotlines.",
    details: "We build linkages with state-sponsored Child Welfare Committees, helpline networks (such as 1098), and local medical resources to ensure immediate response during crises."
  },
  {
    id: "visitors",
    title: "Visitors & Associates",
    letter: "G",
    description: "Mandatory declaration, supervised site access, and signing of safeguarding commitments for all external guests.",
    details: "External visitors must register in advance, be accompanied by a certified Magic Bus representative at all times, and sign our visitor code of conduct before interacting with children."
  }
];

export default function ChildProtectionPolicy() {
  const [activeFocus, setActiveFocus] = useState("children"); // "children" or "women"
  const [activeStrategy, setActiveStrategy] = useState("prevention");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@magicbusindia.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        
        {/* ===== 1) HERO BANNER ===== */}
        <HeroBanner
          badgeText="Safeguarding & Ethics"
          title="Child Protection Policy"
          subtitle="Ensuring a safe, nurturing, and joyful environment for every child we serve."
          description="At Magic Bus India Foundation, our zero-tolerance framework ensures absolute safety and protection of children and women across all locations."
          image="/ngo-images/7.jpg"
          ctas={[
            { href: "https://www.magicbus.org/assets/uploads/child-protection-and-safeguarding-policy.pdf", label: "Read Policy PDF", variant: "primary", showArrow: true, target: "_blank" },
            { href: "#policy-details", label: "Learn Implementation", variant: "secondary" }
          ]}
        />

        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-4 bg-gray-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60 flex items-center gap-2">
            <Link to="/" className="hover:text-brand-red transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-ink font-semibold">Child Protection Policy</span>
          </div>
        </section>

        {/* ===== 3) SECTION 1: ABOUT POLICY WITH INTERACTIVE SELECTOR ===== */}
        <section className="py-24 bg-white relative overflow-hidden" id="policy-details">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Interactive Switcher */}
            <div className="flex justify-center mb-16">
              <div className="bg-slate-100/80 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-200/50">
                <button
                  onClick={() => setActiveFocus("children")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeFocus === "children"
                      ? "bg-white text-brand-red shadow-md shadow-brand-red/5"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  Child Safeguarding
                </button>
                <button
                  onClick={() => setActiveFocus("women")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeFocus === "women"
                      ? "bg-white text-brand-red shadow-md shadow-brand-red/5"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Heart className="w-4 h-4" />
                  Safe Workplace for Women
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start min-h-[300px]">
              
              {/* Left Column: Heading Accent */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-red bg-brand-red/5 border border-brand-red/10 uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Commitment to Ethics
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {activeFocus === "children" ? (
                    <>
                      Ensuring Safety <br />
                      <span className="relative inline-block">
                        of Children
                        <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                      </span>
                    </>
                  ) : (
                    <>
                      Harmonious <br />
                      <span className="relative inline-block">
                        Workplaces
                        <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                      </span>
                    </>
                  )}
                </h2>
              </div>

              {/* Right Column: Dynamic Text */}
              <div className="text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2">
                <AnimatePresence mode="wait">
                  {activeFocus === "children" ? (
                    <motion.div
                      key="children-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: EASE_EXPO }}
                      className="space-y-6"
                    >
                      <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                        Magic Bus is committed to working with children. Magic Bus fully acknowledges the organisation’s responsibilities and duty of care and protection for children through our day-to-day contact with children. Magic Bus further commits that all Magic Bus staff are able to prevent and respond to any form of abuse, violence and exploitation against children.
                      </p>
                      <p>
                        We create supportive pipelines across local teams, volunteers, and partnering schools to identify risks early, enabling children to realize their full potential in inclusive and safe surroundings.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="women-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: EASE_EXPO }}
                      className="space-y-6"
                    >
                      <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                        At Magic Bus India Foundation, we are committed to ensuring that the work environment at all our locations is conducive to fair, safe, harmonious relations between employees. Discrimination and harassment of any type are strictly prohibited. We are also committed to ensuring that no employee is disadvantaged due to gender discrimination.
                      </p>
                      <p>
                        To ensure absolute clarity on the important and sensitive issue of sexual harassment, our Internal Complaints Committee (ICC) handles audits, reporting protocols, and addresses any related incidents to maintain a safe corporate atmosphere.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 4) SECTION 2: SCOPE & ACCOUNTABILITY ===== */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Scope and Accountability
                </h3>
                <p className="text-slate-500 text-sm mt-3 max-w-sm">
                  Our safeguarding standards extend to all associates, visitors, and field staff.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/5 text-brand-red flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base mb-2">Universal Scope</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    This policy applies to all staff, volunteers, visitors and associates of Magic Bus who are all responsible to read, understand and adhere to the Child Protection and Safeguarding Policy and Child Protection Code of Conduct.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base mb-2">Officer-in-Charge</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    The designated Child Protection Officer holds overall leadership and executive responsibility for implementing, monitoring, and updating the Safeguarding Policy.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm sm:col-span-2">
                  <h4 className="font-bold text-slate-800 text-base mb-2">Participatory Safe Spaces</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Magic Bus commits to ensuring the full participation of children by providing them with safe and joyful learning spaces. It also commits to developing strong and positive relationships between mentors and children. Anyone who exploits this relationship will be investigated immediately.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== 5) SECTION 3: POLICY IMPLEMENTATION STRATEGY ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Implementation Strategy
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                How We Implement Our Guidelines
              </h3>
              <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
                Our policy is executed through seven operational pillars to ensure continuous protection.
              </p>
            </div>

            {/* Interactive Layout */}
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200/50">
              
              {/* Tab Selector Links */}
              <div className="space-y-2">
                {STRATEGY_POINTS.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setActiveStrategy(pt.id)}
                    className={`w-full flex items-center justify-between text-left p-4 rounded-xl transition-all duration-300 ${
                      activeStrategy === pt.id
                        ? "bg-white text-brand-red font-bold shadow-md shadow-slate-200/60 border border-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        activeStrategy === pt.id ? "bg-brand-red text-white" : "bg-slate-200 text-slate-600"
                      }`}>
                        {pt.letter}
                      </span>
                      <span className="text-sm font-semibold tracking-tight">{pt.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      activeStrategy === pt.id ? "translate-x-1 opacity-100 text-brand-red" : "opacity-0"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Dynamic Details Box */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 flex flex-col justify-between shadow-sm min-h-[300px]">
                <AnimatePresence mode="wait">
                  {STRATEGY_POINTS.map((pt) => {
                    if (pt.id !== activeStrategy) return null;
                    return (
                      <motion.div
                        key={pt.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, ease: EASE_EXPO }}
                        className="space-y-6"
                      >
                        <div>
                          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Pillar Details</span>
                          <h4 className="text-xl font-extrabold text-slate-900 mt-1">{pt.title}</h4>
                        </div>
                        <p className="text-slate-700 text-sm font-medium leading-relaxed bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl p-4">
                          {pt.description}
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed">
                          {pt.details}
                        </p>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                
                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Magic Bus Safekeeping</span>
                  <span>Compliance active</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ===== 6) SECTION 4: FULL POLICY DOWNLOAD BUTTON ===== */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
              <FileText className="w-8 h-8 text-brand-yellow" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Full Child Protection Policy
            </h3>
            
            <p className="text-white/60 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
              Read the complete documentation detailing our operational safeguards, legal codes of conduct, and oversight committee framework.
            </p>

            <div className="mt-10">
              <a
                href="https://www.magicbus.org/assets/uploads/child-protection-and-safeguarding-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-slate-950 font-black text-sm tracking-wide rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Read the Complete Child Protection Policy
              </a>
            </div>
          </div>
        </section>

        {/* ===== 7) SECTION 5: CONTACT DETAILS (YELLOW STRIP) ===== */}
        <section className="bg-brand-yellow py-10 text-center text-slate-900 border-t border-slate-200/20">
          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-sm uppercase font-bold tracking-widest text-slate-800">For any concerns, please contact us at</h4>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@magicbusindia.org"
                className="text-xl sm:text-3xl font-black text-slate-950 hover:text-brand-red transition-colors tracking-tight"
              >
                info@magicbusindia.org
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

      </main>
    </Layout>
  );
}
