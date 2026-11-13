// src/pages/ChildProtectionPolicy.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ArrowRight, Shield, Users, FileText, Download, X } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

const EASE_EXPO = [0.16, 1, 0.3, 1];

const PDF_URL = "/policies/child-protection-and-safeguarding-policy.pdf";

// Text below follows the Child Protection & Safeguarding Policy and Procedures (March 2022, revised 28 June 2022).
const STRATEGY_POINTS = [
  {
    id: "prevention",
    title: "Proactive Prevention",
    letter: "A",
    description: "Induction and ongoing child protection training, a signed Code of Conduct, child-safe recruitment, safety checks before every session, and awareness for children and parents.",
    details: "All staff, volunteers, visitors and associates receive an induction to the policy. Background checks are carried out for all staff and volunteer positions, and candidates are confirmed only where the interview and background check show no risks to children. Risk assessments and safety checks are done before each session at the venue and on transportation, and parents or guardians sign consent forms. Children are told about their right to be protected during initial rapport building and once every year."
  },
  {
    id: "response",
    title: "Response to Concerns",
    letter: "B",
    description: "Anyone can report a concern, and it must be reported as soon as possible and within 24 hours. There does not need to be certainty that a child is at risk; it is enough to raise a concern.",
    details: "Concerns are reported on the Child Protection Report Form, which goes directly to the Regional Child Protection Committee. The Committee leads the investigation and a decision is made within one week. Complaints are handled fairly and transparently, including an appeals process, and where a crime is believed to have taken place the incident is reported to the police."
  },
  {
    id: "audit",
    title: "Audit & Review",
    letter: "C",
    description: "An annual report goes to the Board of Directors. The policy is reviewed every three years, including the participation of children, and its implementation is audited once in each three-year cycle.",
    details: "Senior Management submits a consolidated annual report from all regions, summarising the number and nature of policy breaches and the actions taken. The three-year review covers the Code of Conduct, the system for reporting concerns, risk management, advice and support, training, recruitment and work with partners."
  },
  {
    id: "partners",
    title: "Working with Partners",
    letter: "D",
    description: "Partners must agree to implement the Child Protection and Safeguarding Policy, or have their own policy in place, before a partnership with Magic Bus begins.",
    details: "Partnership agreements specify which organisation holds overall responsibility for child protection, including investigations and final decisions. Children's personal data is not shared with partners; implementation partners sign a Non-Disclosure Agreement restricting the use of children's data to the purpose for which it was collected. Contractors and vendors self-declare that they will not employ anyone below 18 years for any task."
  },
  {
    id: "media",
    title: "Media & Communications",
    letter: "E",
    description: "Written consent from a child's parent or guardian, by signature or thumb print, is obtained before photographing or filming a child for work-related purposes.",
    details: "Magic Bus explains how the images will be used. All photographs, films and videos present children in a dignified and respectful manner, adequately clothed, and children's identities remain confidential. Unpublished images are stored securely: hard copies in locked storage and electronic copies password protected."
  },
  {
    id: "support",
    title: "Support Services",
    letter: "F",
    description: "Children who have experienced injury, harm or abuse are provided with the necessary support services.",
    details: "Magic Bus has links with organisations that support children who have experienced injury, harm or abuse. Children, adolescents and families are given details of support services, and district-level lists of medical, police, counselling, legal and child rights services are displayed on notice boards at Magic Bus offices, schools and other public places."
  },
  {
    id: "visitors",
    title: "Visitors & Associates",
    letter: "G",
    description: "Visitors and associates must read and understand the policy and Code of Conduct before visiting any Magic Bus programme.",
    details: "They carry the same responsibilities to protect children as Magic Bus staff, and are not allowed to be alone with children or to have access to identifying details or confidential information about children. Visitors and associates include board members, consultants, researchers, partners, media and donors."
  }
];

const REPORT_STEPS = [
  { title: "What to report", color: "#E12228", body: "Any concern that a child is being abused, has suffered harm or is at risk of abuse or harm." },
  { title: "Who can report", color: "#2563EB", body: "Anyone: a child, adult, staff member, volunteer, visitor or associate." },
  { title: "How to report", color: "#2E8B3E", body: "Tell the Magic Bus staff member responsible for the session. Staff submit the Child Protection Report Form on Magic Bus Academy, which goes directly to the Regional Child Protection Committee. Report as soon as possible, and within 24 hours." },
  { title: "What happens next", color: "#7B52B8", body: "A detailed investigation takes place, including talking to the person who reported, the child and their parents, and other witnesses. The person concerned is suspended while it takes place. A decision is made within one week." },
];

const CODE_WILL = [
  "Be warm, friendly and caring towards the children and treat all children with dignity and respect.",
  "Be sensitive to children who may be vulnerable and provide the additional support they may require.",
  "Recognise the development needs and capacities of the children and avoid excessive training or competition.",
  "Be aware of situations which may have risks of harm, injury or abuse.",
  "As far as possible, be visible in working with children and work with children in the presence of other people.",
  "Work in an open way, willing to listen and act so that any issues or concerns can be raised.",
  "Challenge and respond to any poor or unsafe work practices.",
  "Empower children, and discuss with them their rights, what is acceptable and unacceptable, and what they can do if there is a problem.",
];

const CODE_WILL_NOT = [
  "Hit or otherwise physically assault or abuse children, including use of corporal punishment.",
  "Engage in sexual activities with children or behave in a sexually provocative way.",
  "Engage children in exploitative activities, including child labour.",
  "Use language to degrade or humiliate a child, or bully, shame or belittle children.",
  "Sleep in the same bed or room with a child, or have a child stay overnight at my house.",
  "Discriminate against, or show differential treatment or favour to, particular children.",
  "Drink alcohol, smoke or use illegal substances when working with children.",
  "Take photographs of children without the written consent of their parent or guardian.",
  "Give my personal contact details to children or families. The contact point for all communication is Magic Bus.",
];

export default function ChildProtectionPolicy() {
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
          description="Magic Bus is committed to preventing and responding to any form of abuse, violence and exploitation against children."
          image="/ngo-images/7.jpg"
          ctas={[
            { href: PDF_URL, label: "Read Policy PDF", variant: "primary", showArrow: true, target: "_blank" },
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
            
            {/* Content Area */}
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start min-h-[300px]">
              
              {/* Left Column: Heading Accent */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-red bg-brand-red/5 border border-brand-red/10 uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Commitment to Ethics
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Ensuring Safety <br />
                  <span className="relative inline-block">
                    of Children
                    <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-brand-yellow rounded-full" />
                  </span>
                </h2>
              </div>

              {/* Right Column: Dynamic Text */}
              <div className="text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO }}
                  className="space-y-6"
                >
                  <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-red first-letter:mr-3 first-letter:float-left first-letter:h-12">
                        Magic Bus is committed to working with children. Magic Bus fully acknowledges the organisation’s responsibilities and duty of care and protection for children through our day-to-day contact with children. Magic Bus further commits that all Magic Bus staff are able to prevent and respond to any form of abuse, violence and exploitation against children.
                      </p>
                      <p>
                        Magic Bus uses a mentoring model and an activity-based curriculum so that children emerge from the programme as adults with more control and choice in their lives. Magic Bus recognises the important role that parents and guardians play and seeks their consent to children’s participation in programmes and activities.
                      </p>
                </motion.div>
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
                    The Child Protection Officer has overall responsibility for the Child Protection and Safeguarding Policy.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm sm:col-span-2">
                  <h4 className="font-bold text-slate-800 text-base mb-2">Participatory Safe Spaces</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Magic Bus commits to ensuring the full participation of children by providing them with safe and joyful learning spaces. It also commits to developing strong and positive relationships between mentors and children. Anyone who exploits this relationship will be investigated.
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

        {/* ===== REPORTING PROCEDURE ===== */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">Reporting</span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">How a Concern Is Handled</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REPORT_STEPS.map((st, i) => (
                <div key={st.title} className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm" style={{ borderTop: `6px solid ${st.color}` }}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: st.color }}>{i + 1}</span>
                  <h4 className="mt-4 text-lg font-extrabold text-slate-900">{st.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{st.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500 max-w-3xl mx-auto">
              Investigations are carried out by the regional Child Protection Committee. Confidentiality is of vital importance and information is shared only on a need-to-know basis. Where abuse is found to have taken place, the person concerned may be dismissed and the child is given appropriate support; where it is not, staff and volunteers are reinstated.
            </p>
          </div>
        </section>

        {/* ===== CODE OF CONDUCT ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">Code of Conduct</span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Everyone Associated With Magic Bus Agrees To</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">Staff, volunteers, visitors and associates sign the Code of Conduct before accessing information about children or visiting programmes.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm" style={{ borderLeft: "6px solid #2E8B3E" }}>
                <h4 className="text-xl font-extrabold text-slate-900">I will</h4>
                <ul className="mt-5 space-y-3">
                  {CODE_WILL.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2E8B3E]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm" style={{ borderLeft: "6px solid #E12228" }}>
                <h4 className="text-xl font-extrabold text-slate-900">I will not</h4>
                <ul className="mt-5 space-y-3">
                  {CODE_WILL_NOT.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-[#E12228]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-400">A summary of the Code of Conduct; the full text is in the policy PDF.</p>
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
              Read the complete Child Protection & Safeguarding Policy and Procedures (March 2022, revised 28 June 2022), including the Code of Conduct, reporting procedure, committees and report forms.
            </p>

            <div className="mt-10">
              <a
                href={PDF_URL}
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
