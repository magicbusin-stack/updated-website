import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ShieldCheck, Scale, SearchCheck, GraduationCap, RefreshCcw, Users, Building2, CalendarCheck } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];
const PDF_URL = "/policies/Information-Security-Management-System-Policy.pdf";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// Wording is taken from the signed ISMS Policy PDF.
const COMMITMENTS = [
  { Icon: Scale, color: "#E12228", text: "Complying with applicable legal, contractual, and regulatory requirements related to information security." },
  { Icon: SearchCheck, color: "#2563EB", text: "Identifying and mitigating information security risks through regular risk assessments." },
  { Icon: GraduationCap, color: "#2E8B3E", text: "Educating and training staff, volunteers, and third parties on information security responsibilities." },
  { Icon: RefreshCcw, color: "#7B52B8", text: "Continually improving the ISMS through audits, reviews, and stakeholder feedback." },
];

export default function IsmsPolicy() {
  usePageMeta({
    title: "ISMS Policy | Magic Bus India Foundation",
    description: "Magic Bus India Foundation's Information Security Management System (ISMS) Policy, aligned with ISO/IEC 27001.",
  });

  return (
    <Layout>
      <HeroBanner badgeText="Information Security" title="ISMS Policy" image="/ngo-images/7.jpg" />

      <div className="bg-[#F6F8FB] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-6 lg:px-8">
          <FadeUp>
            <section className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-[#0F172A]">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-black sm:text-2xl">Our commitment</h2>
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                Magic Bus is committed to maintaining the confidentiality, integrity, and availability of all information assets under its control, ensuring the protection of donor, beneficiary, employee, and partner data.
                As a socially responsible, non-profit organization, we recognize the importance of safeguarding information to maintain trust, meet legal and regulatory requirements, and support our humanitarian mission.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                Our Information Security Management System (ISMS) is established in alignment with <strong className="text-brand-yellow">ISO/IEC 27001</strong> and is integrated into our organizational processes.
                The ISMS applies to all digital and physical information, information processing facilities, communication technologies, and personnel handling information across our programs and support functions.
              </p>
            </section>
          </FadeUp>

          <FadeUp>
            <h2 className="px-1 pt-4 text-2xl font-black text-slate-900 sm:text-3xl">We are committed to</h2>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2">
            {COMMITMENTS.map(({ Icon, color, text }, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-black/10 bg-white p-6 shadow-sm" style={{ borderTop: `6px solid ${color}` }}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: color }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <section className="flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:gap-5 sm:p-8" style={{ borderLeft: "6px solid #D97706" }}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D97706] text-white">
                <Users className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                All personnel, including volunteers and contractors, are expected to adhere to this policy and contribute to a secure information environment.
              </p>
            </section>
          </FadeUp>

          <FadeUp>
            <section className="flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:gap-5 sm:p-8" style={{ borderLeft: "6px solid #0F7F96" }}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F7F96] text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                The top management of Magic Bus supports this policy and ensures adequate resources are available for its effective implementation.
              </p>
            </section>
          </FadeUp>

          <FadeUp>
            <section className="flex items-start gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:gap-5 sm:p-8" style={{ borderLeft: "6px solid #E11D48" }}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E11D48] text-white">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div className="space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>This policy is reviewed annually or upon significant change to ensure ongoing suitability and effectiveness.</p>
                <p>
                  The management acknowledges the need for continual improvement and has introduced various methods to ensure that effectiveness and continual improvement of the processes are achieved.
                </p>
              </div>
            </section>
          </FadeUp>

          <FadeUp>
            <section className="rounded-3xl bg-gradient-to-r from-[#FFF4C2] via-[#FFE680] to-[#FFF4C2] p-6 text-center shadow-sm sm:p-8">
              <h2 className="text-xl font-black text-[#0F172A] sm:text-2xl">Read the signed policy</h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-[#0F172A]/75">The original ISMS Policy document, as signed by Magic Bus India Foundation.</p>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
              >
                <Download className="h-5 w-5" />
                Download ISMS Policy (PDF)
              </a>
            </section>
          </FadeUp>
        </div>
      </div>
    </Layout>
  );
}
