import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];
const COLORS = ["#E12228", "#2563EB", "#7B52B8", "#0F7F96", "#3F8F2B", "#D97706", "#E11D48", "#1F4E8C", "#2E8B3E", "#C2410C"];

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

const PrivacyLink = () => (
  <Link to="/privacy-policy" className="font-semibold text-brand-red underline-offset-2 hover:underline">
    Privacy Policy
  </Link>
);

// Each clause is a list of paragraphs. The wording is the same as the existing Terms & Conditions page.
const CLAUSES = [
  [
    <>
      Your access and/or use of the Website constitutes acceptance of these Terms and Conditions and <PrivacyLink /> as at the date of your first use of the website.
    </>,
  ],
  [
    <>
      Magic Bus India Foundation reserves the rights to change these Terms and Conditions and <PrivacyLink /> at any time by posting changes online. Your continued use of the website after changes are posted constitutes
      your acceptance of these Terms and Conditions and <PrivacyLink /> as modified. You should therefore review these Terms and Conditions and <PrivacyLink /> regularly.
    </>,
  ],
  ["You agree to use the website only for lawful purposes, and in a matter which does not infringe the rights, or restrict, or inhabit the use and enjoyment of the website by any third party."],
  [
    "The website and the information, names, images, pictures, trade marks regarding or relating to Magic Bus India Foundation are provided “as is” without any representation or endorsement made and without warranty of any kind whether express or implied. To the extent permitted by law, Magic Bus India Foundation excludes all liability for any loss or damages including, without limitation, indirect, special or consequential loss or damages, or any loss or damages whatsoever arising from the use or in connection with such use or loss of use of the website, whether in contract or in negligence. Nothing in these Terms and Conditions limits or excludes Magic Bus India Foundation’s liability for death or personal injury resulting from negligence, fraud, or any liability which cannot be excluded to applicable law.",
  ],
  [
    "All intellectual property in the website and the material or information it contains (including without limitation copyright, designs, database rights and trade marks (registered or unregistered) is and shall remain the property of Magic Bus India Foundation or its third party licensors.",
    "Commercial use or publication of all or any item displayed is strictly prohibited without authorisation from Magic Bus India Foundation. Nothing contained in these Terms and Conditions shall be construed as conferring any licence by Magic Bus India Foundation to use any item displayed.",
    "Materials in the website may be copied for personal use only on the condition that all copyright notices and source indications are also reproduced, no modifications are made and each relevant item is copied in its entirety. However, some materials have been published on the website with the permission of the relevant copyright owners (who are not Magic Bus India Foundation). All rights are reserved on these materials and permission to copy them must be requested from the copyright owners (as indicated within these materials).",
  ],
  [
    "Magic Bus India Foundation takes no responsibility for the content of external internet websites. Following links to any other websites or pages shall be at your own risk and Magic Bus India Foundation shall not be responsible or liable, directly or indirectly, for any damages resulting from the use of such other websites.",
  ],
  [
    "Any communication or material that you transmit to, or post on, any public area of the website including any data, questions, comments, suggestions, or the like, is, and will be treated as, non-confidential and non-proprietary information. Magic Bus India Foundation reserves the right to remove any such communication or material from the Website at its own discretion.",
  ],
  ["If there is any conflict between these Terms and Conditions and rules and/or specific terms of use appearing on the Website relating to specific material then the latter shall prevail."],
  ["These Terms and Conditions shall be governed and construed in accordance with the laws of India. Any disputes shall be subject to the non-exclusive jurisdiction of the Indian Courts."],
  ["If these Terms and Conditions are not accepted in full, the use of the website must be terminated immediately."],
];

export default function TermsAndConditions() {
  usePageMeta({
    title: "Terms & Conditions | Magic Bus India Foundation",
    description: "The terms and conditions for using the Magic Bus India Foundation website.",
  });

  return (
    <Layout>
      <HeroBanner badgeText="Legal" title="Terms & Conditions" image="/ngo-images/7.jpg" />

      <div className="bg-[#F6F8FB] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-start gap-4 rounded-3xl bg-[#0F172A] p-6 text-white shadow-sm sm:items-center sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-[#0F172A]">
                <FileText className="h-6 w-6" />
              </span>
              <p className="text-lg leading-relaxed sm:text-xl">Use of this site is provided by Magic Bus India Foundation subject to the following Terms and Conditions.</p>
            </div>
          </FadeUp>

          {CLAUSES.map((paras, i) => (
            <FadeUp key={i}>
              <section className="flex items-start gap-3 rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:gap-5 sm:p-8" style={{ borderLeft: `6px solid ${COLORS[i % COLORS.length]}` }}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base font-black text-white sm:h-10 sm:w-10 sm:text-lg" style={{ background: COLORS[i % COLORS.length] }}>
                  {i + 1}
                </span>
                <div className="space-y-4">
                  {paras.map((p, j) => (
                    <p key={j} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </FadeUp>
          ))}
        </div>
      </div>
    </Layout>
  );
}
