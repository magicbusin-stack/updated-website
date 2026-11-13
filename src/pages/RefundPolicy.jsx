import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Clock, Globe2, IndianRupee, Receipt, HelpCircle } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];
const DONOR_EMAIL = "donors@magicbusindia.org";

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

const MailLink = ({ children = DONOR_EMAIL }) => (
  <a href={`mailto:${DONOR_EMAIL}`} className="font-semibold text-brand-red underline-offset-2 hover:underline">
    {children}
  </a>
);

function PolicyCard({ color, Icon, title, children }) {
  return (
    <FadeUp>
      <section className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="rp-shimmer relative flex items-center gap-3 overflow-hidden px-6 py-4 text-white sm:px-8" style={{ background: color }}>
          <span className="rp-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/25">
            <Icon className="h-5 w-5" />
          </span>
          <h2 className="rp-blink text-xl font-black sm:text-2xl">{title}</h2>
        </div>
        <div className="p-6 sm:p-8">{children}</div>
      </section>
    </FadeUp>
  );
}

function Points({ color, items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: color }}>
            {i + 1}
          </span>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{item}</p>
        </li>
      ))}
    </ol>
  );
}

const STYLES = `
@keyframes rpBlink{0%,100%{opacity:1}50%{opacity:.62}}
@keyframes rpPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(15,23,42,.35)}50%{transform:scale(1.08);box-shadow:0 0 0 10px rgba(15,23,42,0)}}
@keyframes rpGlow{0%,100%{box-shadow:0 0 0 0 rgba(245,184,0,.55)}50%{box-shadow:0 0 0 10px rgba(245,184,0,0)}}
@keyframes rpSweep{0%{transform:translateX(-120%)}60%,100%{transform:translateX(120%)}}
.rp-blink{animation:rpBlink 1.8s ease-in-out infinite}
.rp-icon{animation:rpPulse 1.8s ease-in-out infinite}
.rp-question{animation:rpGlow 2s ease-out infinite}
.rp-shimmer::after{content:"";position:absolute;inset:0;width:45%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent);animation:rpSweep 3.2s ease-in-out infinite;pointer-events:none}
@media (prefers-reduced-motion: reduce){.rp-blink,.rp-icon,.rp-question,.rp-shimmer::after{animation:none}}
`;

export default function RefundPolicy() {
  usePageMeta({
    title: "Refunds & Cancellation Policy | Magic Bus India Foundation",
    description: "How donation refunds and cancellations work at Magic Bus India Foundation for Indian and foreign donors, and how to contact Donor Services.",
  });

  return (
    <Layout>
      <style>{STYLES}</style>
      <HeroBanner
        badgeText="Donor Information"
        title="Refunds & Cancellation Policy"
        image="/ngo-images/11.jpg"
      />

      <div className="bg-[#F6F8FB] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-6 lg:px-8">
          <FadeUp>
            <div className="rp-question flex items-center gap-4 rounded-3xl border-2 border-[#F5B800] bg-gradient-to-r from-[#FFF4C2] via-[#FFE680] to-[#FFF4C2] p-5 shadow-md sm:p-6">
              <span className="rp-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-brand-yellow shadow-lg sm:h-14 sm:w-14">
                <HelpCircle className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <h2 className="rp-blink text-2xl font-black leading-tight text-[#0F172A] sm:text-3xl md:text-4xl">Can I cancel a donation that I’ve made?</h2>
            </div>
          </FadeUp>

          <PolicyCard color="#E12228" Icon={IndianRupee} title="For all Indian Donors">
            <Points
              color="#E12228"
              items={[
                "Magic Bus India Foundation offers a refund policy to the donors only in case there has been an error / technical reason for the transfer due to which donors have mistakenly made double payments or donated extra amount.",
                "No refund /cancellation request for the donated amount by any donor will be entertained for online donation through the online payment gateway after the donation is accepted by our online payment gateway service providers unless there is a fraud notification from our payment gateway service providers.",
                "No refund is made of extra bank charges incurred by donor in case of cheque or ECS bounce / No refund is processed once a tax certificate has been issued in the donor’s name.",
                <>
                  You can cancel your donation by sending a mail on <MailLink />
                </>,
              ]}
            />
          </PolicyCard>

          <PolicyCard color="#2563EB" Icon={Globe2} title="For all foreign donors">
            <Points
              color="#2563EB"
              items={[
                <>
                  Once the funds for Donation are transferred, refund of same will not be possible as per <strong className="text-slate-900">Foreign Contribution (Regulation) Act, 2010 (FCRA).</strong>
                </>,
              ]}
            />
          </PolicyCard>

          <PolicyCard color="#0F7F96" Icon={Receipt} title="Delivery">
            <Points color="#0F7F96" items={["We will send you a receipt for your donation in the post and/or via email, according to your preferences."]} />
          </PolicyCard>

          <FadeUp>
            <section className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-[#0F172A]">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-black sm:text-2xl">Donor Services Contact Information</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                For any information relating to a donation, please email{" "}
                <a href={`mailto:${DONOR_EMAIL}`} className="font-semibold text-brand-yellow hover:underline">
                  {DONOR_EMAIL}
                </a>{" "}
                or telephone the Magic Bus Donations Department on <strong className="text-white">022-62434825</strong> /{" "}
                <strong className="text-white">022-62434826</strong> during office hours (9 am to 6 pm Monday-Friday).
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${DONOR_EMAIL}`}
                  className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-brand-yellow px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:opacity-90 sm:text-base"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  {DONOR_EMAIL}
                </a>
                <a href="tel:02262434825" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base">
                  <Phone className="h-5 w-5" />
                  022-62434825
                </a>
                <a href="tel:02262434826" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base">
                  <Phone className="h-5 w-5" />
                  022-62434826
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4" />
                9 am to 6 pm, Monday-Friday
              </p>
            </section>
          </FadeUp>
        </div>
      </div>
    </Layout>
  );
}
