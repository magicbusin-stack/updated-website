import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];
const CONTACT_EMAIL = "info@magicbus.org";

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

// Plain text (the earlier yellow highlights were removed on request)
const Hl = ({ children }) => <>{children}</>;

const P = ({ children, className = "" }) => <p className={`text-base leading-relaxed text-slate-700 sm:text-lg ${className}`}>{children}</p>;

function Bullets({ color, items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{item}</p>
        </li>
      ))}
    </ul>
  );
}

const SECTIONS = [
  { id: "collect", q: "What information does Magic Bus India Foundation collect?", color: "#E12228" },
  { id: "use", q: "How is your information used?", color: "#2563EB" },
  { id: "share", q: "Does Magic Bus India Foundation share your information?", color: "#7B52B8" },
  { id: "secure", q: "How secure is the information you give us?", color: "#0F7F96" },
  { id: "access", q: "How can you access, correct or delete your data?", color: "#3F8F2B" },
  { id: "optout", q: "How do you opt out of receiving messages from Magic Bus India Foundation?", color: "#D97706" },
  { id: "children", q: "How does Magic Bus India Foundation protect children’s privacy?", color: "#E11D48" },
];

function Section({ n, children }) {
  const s = SECTIONS[n];
  return (
    <FadeUp>
      <section id={s.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="flex items-center gap-4 px-6 py-4 text-white sm:px-8" style={{ background: s.color }}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black" style={{ color: s.color }}>
            {n + 1}
          </span>
          <h2 className="text-xl font-black leading-snug sm:text-2xl">{s.q}</h2>
        </div>
        <div className="space-y-5 p-6 sm:p-8">{children}</div>
      </section>
    </FadeUp>
  );
}

export default function PrivacyPolicy() {
  usePageMeta({
    title: "Privacy Policy | Magic Bus India Foundation",
    description: "How Magic Bus India Foundation collects, uses, shares and protects your personal information, and how you can access, correct or delete it.",
  });

  return (
    <Layout>
      <HeroBanner badgeText="Legal" title="Privacy Policy" image="/ngo-images/7.jpg" />

      <div className="bg-[#F6F8FB] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-6 lg:px-8">
          {/* intro */}
          <FadeUp>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F172A] text-brand-yellow">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-black text-[#0F172A] sm:text-3xl">Our commitment</h2>
              </div>
              <div className="space-y-4">
                <P>
                  Magic Bus India Foundation’s privacy policy reflects our commitment to <Hl>use information fairly, keep it secure, make sure it is accurate, and keep it up to date.</Hl>{" "}
                  <Hl>By entering and using this website you are deemed to accept the provisions in this policy.</Hl>
                </P>
                <P>
                  This policy applies to all the pages hosted on this site. <Hl>It does not apply to pages hosted by Magic Bus India’s affiliates, linked organizations, partners, or to other organizations</Hl> to
                  which we may provide a link and whose privacy policies may differ.
                </P>
                <P>
                  Please read the following to understand how your personal information will be treated. <Hl>The policy may change from time to time so please check back periodically.</Hl>
                </P>
              </div>
            </div>
          </FadeUp>

          {/* questions this policy answers */}
          <FadeUp>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-black text-[#0F172A] sm:text-2xl">This policy will answer the following questions:</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-start gap-3 rounded-2xl border border-black/10 bg-[#F8FAFC] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderLeft: `5px solid ${s.color}` }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: s.color }}>
                      {i + 1}
                    </span>
                    <span className="flex-1 font-semibold leading-snug text-slate-800">{s.q}</span>
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* contact */}
          <FadeUp>
            <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-sm sm:p-8">
              <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                Our security measures and this policy are reviewed on a regular basis. If you have any questions relating to this policy, please address them to:
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-[#0F172A]">
                  <MapPin className="h-5 w-5" />
                </span>
                <address className="not-italic leading-relaxed text-white">
                  <strong className="text-xl text-brand-yellow">Legal Head</strong>
                  <br />
                  3rd Floor, JK Textiles Building, Mehra Estate,
                  <br />
                  Near Jaswanti Landmark, LBS Marg,
                  <br />
                  Vikhroli West, Mumbai - 400079
                </address>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="tel:02262434848" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold transition hover:bg-white/10 sm:text-base">
                  <Phone className="h-5 w-5" />
                  022 62434848
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-[#0F172A] transition hover:opacity-90 sm:text-base">
                  <Mail className="h-5 w-5" />
                  {CONTACT_EMAIL}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/75 sm:text-base">If you are not satisfied with our response to your concern: you may wish to contact the CEO’s Office.</p>
            </div>
          </FadeUp>

          {/* 1 */}
          <Section n={0}>
            <P>
              We collect personal information (including demographic and personal profile data) as volunteered by you in registration forms, subscriptions, campaigns and e-actions. However,{" "}
              <Hl>you can access our web site without disclosing any of your personal data.</Hl> Magic Bus India Foundation also collects the following (non-identifying) information:
            </P>
            <Bullets
              color="#E12228"
              items={[
                "the internet domain and IP addresses from which you access the website.",
                "the type of browser (for example Internet Explorer or Firefox)",
                "the operating system you use (for example, Windows, Macintosh)",
                "the date and time of your visit",
                "the pages you access",
              ]}
            />
            <P>
              Magic Bus India Foundation also collects personal information. Magic Bus India Foundation may place <Hl>internet ‘cookies’</Hl> on your hard drive. These cookies may save data about you such as your name and the pages of
              the website that you viewed. <Hl>You may decline, disable or delete the internet cookies</Hl> while visiting the website by activating the relevant browser setting. However, doing so may affect the website
              functionality.
            </P>
          </Section>

          {/* 2 */}
          <Section n={1}>
            <P>
              Magic Bus India Foundation uses the information to help us understand more about how supporters use our site and to make improvements. We also use the information for{" "}
              <Hl>marketing purposes such as sending you our e-newsletter.</Hl> If you have subscribed to the Magic Bus India Foundation e-newsletter you will receive it by email on a <Hl>monthly basis.</Hl>
            </P>
          </Section>

          {/* 3 */}
          <Section n={2}>
            <P>
              The neither information you provide will not be sold or rented nor will it be shared with third parties <Hl>unless we have your permission, are required to disclose the information by law,</Hl> or in the
              following circumstances:
            </P>
            <Bullets
              color="#7B52B8"
              items={[
                "Magic Bus India Foundation may share your personal information from time to time, with its affiliate non-profit entities, linked organisations, charity collaborators, within or outside India, which may then use such information in connection with their activities.",
                <>
                  <Hl>With your permission,</Hl> Magic Bus India Foundation may also share your information with other organisations with similar aims and objectives.
                </>,
                "From time to time we encourage site visitors to take e-actions which we run in partnership with allied organisations, such as Kick for Change. While such e-actions will be hosted by this website, all personal data submitted through the e-action may be collected by our allies and shared between Magic Bus India Foundation, our allies and their partners. Information passed to Magic Bus India Foundation from allied organizations will be subject to the Privacy Policy described above.",
                <>
                  <Hl>The disclosure of your personal information discussed above may involve the transfer of that information outside of India.</Hl>
                </>,
              ]}
            />
          </Section>

          {/* 4 */}
          <Section n={3}>
            <P>
              Magic Bus India Foundation uses industry standard efforts to safeguard the confidentiality of your personally identifiable information, such as <Hl>firewalls and Secure Socket Layers.</Hl> We make every effort to
              protect the loss, misuse, and alteration of the information under our control. However, <Hl>no data transmission over the Internet can be guaranteed to be 100 percent secure.</Hl>
            </P>
          </Section>

          {/* 5 */}
          <Section n={4}>
            <Bullets
              color="#3F8F2B"
              items={[
                <>
                  <Hl>Website User Accounts:</Hl> You can access, correct or delete your personal data by logging in to your user account and making the necessary changes. You should promptly update your personal information if it
                  changes or is inaccurate.
                </>,
                <>
                  <Hl>E-Newsletter:</Hl> You can delete your personal data by unsubscribing from the e-newsletter. To change your email address, first, unsubscribe and then re-subscribe with your new data.
                </>,
              ]}
            />
          </Section>

          {/* 6 */}
          <Section n={5}>
            <P>
              <Hl>We will only send you emails if you have given us permission</Hl> to contact you about Magic Bus India Foundation’s work. We do not send out random, untargeted emails (spam). Any emails we send you will enable
              you to <Hl>opt-out of receiving further emails from us.</Hl> We will clearly state whether we received your details from an organization who recommended you to us.
            </P>
          </Section>

          {/* 7 */}
          <Section n={6}>
            <P>
              The safety of children is very important to us. <Hl>No information should be submitted to or posted at Magic Bus India Foundation by children without prior parental consent.</Hl> All applicable laws are followed
              with respect to data collection from children. <Hl>No sharing of data collected from children with any third parties is permitted at any time under any circumstances.</Hl>
            </P>
          </Section>

          <FadeUp>
            <p className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-center text-base text-slate-700 sm:text-lg">This Privacy Policy was last updated on 25th October 2018.</p>
          </FadeUp>
        </div>
      </div>
    </Layout>
  );
}
