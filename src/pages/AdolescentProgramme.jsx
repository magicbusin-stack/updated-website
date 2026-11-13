import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { adolescentFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import EnablingEcosystemWheel from "../components/AboutUs/EnablingEcosystemWheel";
import ImplementationModelChart from "../components/AboutUs/ImplementationModelChart";
import ImplementationModelMobile from "../components/AboutUs/ImplementationModelMobile";
import { CHANGE, PRINCIPLES, LIFE_SKILLS, INTERVENTIONS, ECOSYSTEM, IMPLEMENTATION } from "../components/AboutUs/adolescentFrameworkContent";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

const partnerLogos = [
  "/partners/1 (1).jpg",
  "/partners/1 (2).jpg",
  "/partners/1 (3).jpg",
  "/partners/1 (4).jpg",
  "/partners/1 (5).jpg",
  "/partners/1 (6).jpg",
  "/partners/1 (7).jpg",
  "/partners/1 (8).jpg",
  "/partners/1 (9).jpg",
  "/partners/1 (10).jpg",
  "/partners/1 (11).jpg",
  "/partners/1 (12).jpg",
  "/partners/1 (13).jpg",
  "/partners/1 (14).jpg",
  "/partners/1 (15).jpg",
  "/partners/1 (16).jpg",
  "/partners/1 (17).jpg",
  "/partners/1 (18).jpg",
  "/partners/1 (19).jpg",
  "/partners/1 (20).jpg",
  "/partners/1 (21).jpg",
  "/partners/1 (22).jpg",
  "/partners/1 (23).jpg",
  "/partners/1 (24).jpg",
  "/partners/1 (25).jpg"
];

const stories = [
  {
    title: "Playing with Purpose: Meet Zafia",
    image: "/testimonials/zafia.png",
    content:
      "When Zafia joined our Adolescent Programme, she discovered her potential through sport. With the help of Magic Bus trainers, she developed skills in communication, planning, and teamwork. Today, she speaks with confidence and leads with purpose, reflecting the transformative power of sport.",
    link: "https://www.linkedin.com/posts/magic-bus_magicbusindiafoundation-childhoodtolivelihood-activity-7392137703791935488-0KQa/",
    cta: "Read more"
  },
  {
    title: "Deepika: Our Kabaddi Champion Breaking Boundaries",
    image: "/testimonials/deepika.png",
    content:
      "Deepika turned her fear into determination through our Adolescent Programme in Sricity, Andhra Pradesh. Through training in sports, she became a state-level Kabaddi player and improved her school attendance, inspiring change in her community with resilience and self-belief.",
    link: "https://www.instagram.com/p/DP3QkH0DDHt/",
    cta: "Click to read more"
  }
];

const faqs = [
  {
    q: "How does Magic Bus promote adolescent well-being?",
    a: "Magic Bus equips underserved adolescents with life skills to help them realise their full potential, build agency, and become resilient in the face of life’s challenges."
  },
  {
    q: "Why is the stage of adolescence considered to be a crucial phase of growth?",
    a: "Adolescence is a phase of accelerated social, physical, and cognitive development. The experiences of people aged 10-19 years have significant impacts on their well-being in the short term as well as long term. The right support at this stage can ensure holistic development of adolescents."
  },
  {
    q: "What are life skills?",
    a: "As defined by the World Health Organisation, life skills are abilities for positive and adaptive behaviour that helps individuals deal effectively with the challenges and demands of daily life."
  },
  {
    q: "What is the aim of the Adolescent Programme of Magic Bus?",
    a: "The Adolescent Programme of Magic Bus aims to help adolescents complete their education, build brighter futures, and guard themselves from destabilisers like child labour and early marriage."
  }
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <_MOTION.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, ease: EASE, delay }}
    >
      {children}
    </_MOTION.div>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        dark
          ? "border-white bg-white text-white"
          : "border-black bg-brand-yellow text-[#0F172A]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-brand-yellow" : "bg-brand-red"}`} />
      {children}
    </span>
  );
}

const ACCENTS = ["#E12228", "#2563EB", "#3F8F2B", "#D97706", "#7B52B8"];

function InfoBoxes({ items, cols = "md:grid-cols-3", numbered = true }) {
  return (
    <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map(([title, text], i) => (
        <FadeUp key={title} delay={i * 0.05} className="h-full">
          <div className="h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="h-1.5" style={{ background: ACCENTS[i % ACCENTS.length] }} />
            <div className="p-6">
              {numbered && (
                <span
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                >
                  {i + 1}
                </span>
              )}
              <p className="text-xl font-bold text-[#0F172A]">{title}</p>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

function ContentSection({ tag, title, intro, items, cols, bg = "bg-white", numbered }) {
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>{tag}</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">{intro}</p>
        </FadeUp>
        <InfoBoxes items={items} cols={cols} numbered={numbered} />
      </div>
    </section>
  );
}

function SourceLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-semibold text-brand-blue underline-offset-2 hover:underline">
      {children}
    </a>
  );
}

function ChallengeSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Why It Matters</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">The Challenge</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            India is home to 253 million adolescents—the largest youth population in the world (
            <SourceLink href="https://www.unicef.org/india/adolescent-development-and-participation">UNICEF India, 2023</SourceLink>
            ). Yet barriers such as school dropout and early marriage can limit young people’s education and opportunities:
          </p>
        </FadeUp>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <FadeUp className="h-full">
            <div className="h-full rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-red">School dropout</p>
              <p className="mt-3 text-5xl font-black text-[#0F172A]">11.5%</p>
              <p className="mt-2 leading-relaxed text-slate-700">
                Dropout rates rise to 11.5% at the secondary level (Grades 9–10), compared with 3.5% in upper primary and 0.3% in
                primary school.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["0.3%", "Primary"],
                  ["3.5%", "Upper primary"],
                  ["11.5%", "Secondary (9–10)"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-[#F8FAFC] p-3">
                    <p className="text-xl font-black text-[#0F172A]">{v}</p>
                    <p className="mt-1 text-xs text-slate-600">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Source: <SourceLink href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2161543&reg=48&lang=2">Ministry of Education, 2024</SourceLink>
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.08} className="h-full">
            <div className="h-full rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">Early marriage</p>
              <p className="mt-3 text-5xl font-black text-[#0F172A]">23.3%</p>
              <p className="mt-2 leading-relaxed text-slate-700">
                23.3% of young women aged 20–24 were married before turning 18.
              </p>
              <p className="mt-6 text-sm text-slate-500">
                Source: <SourceLink href="https://www.nfhsiips.in/nfhsuser/nfhs5.php">NFHS-5, 2021</SourceLink>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <FadeUp>
          <SectionTag>Our Approach</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our Approach</h2>
          <div className="mt-5 rounded-2xl border-l-4 border-brand-yellow bg-[#FFFBEB] p-6">
            <p className="text-lg leading-relaxed text-slate-800">
              At Magic Bus, we place life skills at the heart of adolescent development, integrating experiential learning with
              academic support, sports and future readiness interventions. Through our competency based Life Skills Framework, we
              strengthen adolescents&apos; cognitive, social and emotional capabilities, enabling them to make informed decisions,
              build resilience, develop positive relationships and navigate challenges.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-800">
              Our approach is inclusive and gender-transformative, recognising that meaningful change requires not only building
              individual capabilities but also strengthening the environments in which adolescents learn and grow. By engaging
              schools, families, communities and government systems, we create supportive pathways for adolescents to remain
              engaged in education, explore opportunities and transition towards productive and fulfilling futures.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.08} className="overflow-hidden rounded-3xl border border-black/10">
          <img src="/ngo-images/11.jpg" alt="Adolescents in learning activity" className="h-full w-full object-cover" />
        </FadeUp>
      </div>
    </section>
  );
}

function LifeSkillsFrameworkSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">
        <FadeUp className="max-w-4xl">
          <SectionTag>Life Skills Framework</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our Life Skills Framework</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Our competency-based framework brings together 11 foundational life skills across cognitive, social and emotional
            dimensions. These capabilities cut across every intervention rather than forming a standalone programme.
          </p>
        </FadeUp>
        <div className="mt-8">
          <EnablingEcosystemWheel />
        </div>
      </div>
    </section>
  );
}

function InterventionBlock({ data, color, cols }) {
  return (
    <FadeUp className="mt-10">
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="p-6 text-white sm:p-8" style={{ background: color }}>
          <h3 className="text-2xl font-black md:text-3xl">{data.title}</h3>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/95 md:text-lg">{data.intro}</p>
        </div>
        <div className={`grid gap-4 p-5 sm:grid-cols-2 sm:p-6 ${cols}`}>
          {data.items.map(([name, text], i) => (
            <div key={name} className="rounded-2xl border border-black/10 bg-[#F8FAFC] p-5" style={{ borderTop: `4px solid ${color}` }}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: color }}>
                  {i + 1}
                </span>
                <p className="font-bold leading-snug text-[#0F172A]">{name}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

function InterventionsSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>What We Do</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Programme Interventions</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">{INTERVENTIONS.intro}</p>
        </FadeUp>
        <InterventionBlock data={INTERVENTIONS.sports} color="#E0670C" cols="lg:grid-cols-4" />
        <InterventionBlock data={INTERVENTIONS.academic} color="#3F8F2B" cols="lg:grid-cols-3" />
        <InterventionBlock data={INTERVENTIONS.future} color="#0F7F96" cols="lg:grid-cols-3" />
      </div>
    </section>
  );
}

function ImplementationSection() {
  const [active, setActive] = useState(null); // 0 = direct, 1 = systems partnership (set by hovering the chart)
  const cardColors = ["#E11D48", "#2563EB"];
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Adolescent Programme Implementation Model</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Implementation Model</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">{IMPLEMENTATION.intro}</p>
        </FadeUp>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {IMPLEMENTATION.items.map(([name, text], i) => (
            <FadeUp key={name} delay={i * 0.08} className="h-full">
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="h-full rounded-3xl border bg-white p-6 shadow-sm transition sm:p-8"
                style={{
                  borderColor: active === i ? cardColors[i] : "rgba(0,0,0,0.1)",
                  boxShadow: active === i ? `0 10px 30px ${cardColors[i]}26` : undefined,
                  borderLeft: `6px solid ${cardColors[i]}`,
                }}
              >
                <p className="text-2xl font-black text-[#0F172A]">{name}</p>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10">
          <div className="hidden lg:block">
            <ImplementationModelChart onActive={setActive} />
          </div>
          <div className="lg:hidden">
            <ImplementationModelMobile onActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>How We Work</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Helping Adolescents Thrive</h2>
        </FadeUp>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FadeUp className="rounded-2xl border border-black/10 bg-white p-6" delay={0.05}>
            <p className="text-4xl font-black text-brand-red">11</p>
            <p className="mt-3 font-semibold text-slate-900">State Government Partnerships</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Magic Bus has partnered with 11 state governments and 2 states under NITI Aayog to reach underserved
              adolescents.
            </p>
          </FadeUp>
          <FadeUp className="rounded-2xl border border-black/10 bg-white p-6" delay={0.1}>
            <p className="text-4xl font-black text-brand-blue">2</p>
            <p className="mt-3 font-semibold text-slate-900">States Under NITI Aayog</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We engage communities and stakeholders to create a supportive and sustainable environment for adolescents.
            </p>
          </FadeUp>
          <FadeUp className="rounded-2xl border border-black/10 bg-white p-6" delay={0.15}>
            <p className="text-4xl font-black text-brand-green">11</p>
            <p className="mt-3 font-semibold text-slate-900">Essential Life Skills</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our framework covers cognitive, emotional and social dimensions to strengthen adolescents&apos; self-efficacy.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const outcomes = [
  {
    title: "School regularity of adolescents*",
    sub: "More adolescents are attending school regularly.",
    from: ["61%", "Baseline"],
    to: ["84%", "End line"],
    delta: "+23",
    up: true,
    note: "School regularity increased by 23 percentage points, indicating more consistent school attendance among adolescents."
  },
  {
    title: "School regularity of girls*",
    sub: "More girls are attending school regularly.",
    from: ["64%", "Baseline"],
    to: ["87%", "End line"],
    delta: "+23",
    up: true,
    note: "School regularity among girls increased by 23 percentage points, showing improved consistency in school attendance."
  },
  {
    title: "Dropout rate**",
    sub: "Fewer students are dropping out of school.",
    from: ["7%", "UDISE"],
    to: ["1%", "Magic Bus"],
    delta: "-6",
    up: false,
    note: "The reported dropout rate was 6 percentage points lower in the Magic Bus programme than the UDISE reference."
  },
  {
    title: "Transition rate (Grade 8 to 9)**",
    sub: "More students are continuing to higher grades.",
    from: ["88%", "UDISE"],
    to: ["99%", "Magic Bus"],
    delta: "+11",
    up: true,
    note: "Transition from Grade 8 to Grade 9 was 11 percentage points higher in the Magic Bus programme."
  },
  {
    title: "Transition rate (Grade 10 to 11)**",
    sub: "More students are continuing to higher grades.",
    from: ["88%", "UDISE"],
    to: ["99%", "Magic Bus"],
    delta: "+11",
    up: true,
    note: "Transition from Grade 10 to Grade 11 was 11 percentage points higher in the Magic Bus programme."
  }
];

const outreachRows = [
  ["No. of States", "22"],
  ["No. of Districts", "72"],
  ["No. of Aspirational Districts", "12"],
  ["No. of Aspirational Blocks", "18"],
  ["No. of Tribal Dominant States", "9"],
  ["No. of CLC", "356"],
  ["No. of Schools", "2,191"],
  ["Adolescents Outreach", "3,23,963"]
];

function ReachOutcomesSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Reach and Outcomes</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">School Outcomes of Magic Bus Programme</h2>
        </FadeUp>

        <div className="mt-8 space-y-4">
          {outcomes.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.04}>
              <div className="grid grid-cols-2 items-center gap-x-3 gap-y-3 rounded-2xl border border-black/10 bg-[#F8FAFC] p-4 shadow-sm sm:p-5 md:grid-cols-[1.1fr_1fr_0.7fr_1.3fr] md:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <p className="text-lg font-bold text-[#0F172A]">{o.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{o.sub}</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-center">
                  <div>
                    <p className="text-3xl font-black text-slate-500">{o.from[0]}</p>
                    <p className="text-xs font-semibold text-slate-500">{o.from[1]}</p>
                  </div>
                  <span className="text-2xl text-slate-400" aria-hidden="true">
                    →
                  </span>
                  <div>
                    <p className="text-3xl font-black text-[#0F172A]">{o.to[0]}</p>
                    <p className="text-xs font-semibold text-slate-600">{o.to[1]}</p>
                  </div>
                </div>
                <div className={`rounded-xl px-3 py-2 text-center ${o.up ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                  <p className="text-2xl font-black">
                    {o.up ? "↑" : "↓"} {o.delta}
                  </p>
                  <p className="text-xs font-semibold">percentage points</p>
                </div>
                <p className="col-span-2 text-sm leading-relaxed text-slate-700 md:col-span-1">{o.note}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-5 flex flex-col items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center sm:flex-row sm:text-left">
            <p className="text-5xl font-black text-brand-red">99%</p>
            <p className="text-lg font-semibold text-slate-800">
              In MB programmes, the transition rate for adolescents of grade 9<sup>th</sup> to 10<sup>th</sup> is 99%.
            </p>
          </div>
          <div className="mt-5 space-y-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            <p>*On the basis of evaluation conducted during the period 2025-2026, reaching 323963 adolescents.</p>
            <p>
              **On the basis of UDISE (Unified District Information System for Education) data available for 2025-26 and internal MIS
              data (8<sup>th</sup> to 9<sup>th</sup> = 59148 adolescents, 9<sup>th</sup> to 10<sup>th</sup> = 36049 adolescents, 10
              <sup>th</sup> to 11<sup>th</sup> = 4451 adolescents, 12<sup>th</sup> / Higher secondary school completion = 3213
              adolescents) of MB programme. The UDISE transition data of 9<sup>th</sup> to 10<sup>th</sup> and higher secondary school
              completion is not available.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function OutreachSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Outreach</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our Outreach</h2>
        </FadeUp>
        <FadeUp delay={0.08} className="mt-6 max-w-3xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-red text-white">
                <th className="px-5 py-3 text-sm font-bold">Indicators</th>
                <th className="px-5 py-3 text-sm font-bold">Overall Count</th>
              </tr>
            </thead>
            <tbody>
              {outreachRows.map(([metric, value]) => (
                <tr key={metric} className="border-t border-black/5">
                  <td className="px-5 py-3 font-medium text-slate-800">{metric}</td>
                  <td className="px-5 py-3 text-lg font-bold text-slate-950">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </div>
    </section>
  );
}

function OutreachMapSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Geographical Presence</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our Reach Across India</h2>
          <div className="mt-6 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-white p-3 sm:p-4">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <img src="/mapnew.jpg" alt="Magic Bus outreach map" className="w-full max-h-[560px] object-contain" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function InnovativeSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Innovative Programmes</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Innovative Programmes</h2>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-800">
            We adapt our life skills approach to different needs and settings, combining accessible learning with partnerships that
            support participation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Our innovative programmes bring together life skills education, learning support, future readiness, and sport to respond
            to diverse needs and contexts. Working with government, schools, communities, and partners, we adapt our approaches to
            make learning inclusive, accessible, and relevant—helping participants build confidence, strengthen skills, and prepare
            for the future.
          </p>
        </FadeUp>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <FadeUp className="h-full">
            <div className="h-full rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 shadow-sm sm:p-8" style={{ borderTop: "6px solid #E12228" }}>
              <h3 className="text-2xl font-black text-[#0F172A]">Tarang</h3>
              <p className="mt-4 leading-relaxed text-slate-700">
                In partnership with the Department of Women and Child Development, Government of NCT of Delhi, Magic Bus India
                Foundation is implementing Project Tarang across 20 government-run Child Care Institutions to support the holistic
                development of adolescents in institutional care.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Through football and structured, play-based life skills education, Tarang helps adolescents build confidence,
                resilience, leadership, teamwork, and emotional wellbeing, while preparing them for successful reintegration into
                society.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.06} className="h-full">
            <div className="h-full rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 shadow-sm sm:p-8" style={{ borderTop: "6px solid #2563EB" }}>
              <h3 className="text-2xl font-black text-[#0F172A]">TN Rights</h3>
              <p className="mt-4 leading-relaxed text-slate-700">
                Under the World Bank-supported TN-RIGHTS Project, led by the Commissionerate for the Welfare of Differently Abled
                Persons, Government of Tamil Nadu, Magic Bus India Foundation is collaborating with Fernandez Direct Consulting LLP
                as the Knowledge Partner for the assignment to design a life skills education curriculum for persons with
                disabilities and support its implementation in Tamil Nadu.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                The initiative focuses on an inclusive, accessible, and locally relevant curriculum for all 21 categories of
                disabilities. It is being piloted in five districts of Tamil Nadu: Chennai, Cuddalore, Dharmapuri, Tenkasi, and
                Tiruchirappalli.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Alongside curriculum development and piloting, a participatory Training of Trainers (ToT) approach seeks to
                strengthen the capacities of parents, caregivers, teachers, and other stakeholders to support learning.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.12} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 shadow-sm sm:p-8" style={{ borderTop: "6px solid #3F8F2B" }}>
              <h3 className="text-2xl font-black text-[#0F172A]">ACAMH</h3>
              <div className="flex-1" />
              <a
                href="https://x.com/acamh/status/2118424138415058960"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View the post
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="bg-[#0F172A] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag dark>Our Partners for Adolescent Programme</SectionTag>
          <h2 className="mt-5 text-3xl font-black md:text-4xl">Our Partners</h2>
        </FadeUp>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partnerLogos.map((logo, idx) => (
            <FadeUp key={logo} delay={idx * 0.02}>
              <div className="grid h-24 place-items-center rounded-xl border border-white/15 bg-white px-4">
                <img src={logo} alt={`Partner ${idx + 1}`} className="max-h-14 w-auto object-contain" loading="lazy" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>Success Stories</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Success Stories of our Adolescents</h2>
        </FadeUp>
        <div className="mt-8 grid gap-5 lg:grid-cols-[280px_1fr]">
          <FadeUp className="space-y-2">
            {stories.map((story, idx) => (
              <button
                key={story.title}
                onClick={() => setActiveStory(idx)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  idx === activeStory
                    ? "border-transparent bg-[#0F172A] text-white shadow-lg"
                    : "border-black/10 bg-white text-slate-800 hover:border-black/20"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">Story {idx + 1}</p>
                <p className="mt-2 font-bold leading-snug">{story.title}</p>
              </button>
            ))}
          </FadeUp>

          <FadeUp delay={0.08}>
            <_MOTION.div
              key={stories[activeStory].title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 sm:p-8"
            >
              <div className="mb-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img
                  src={stories[activeStory].image}
                  alt={stories[activeStory].title}
                  className="h-[260px] w-full object-cover sm:h-[320px]"
                />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A]">{stories[activeStory].title}</h3>
              <p className="mt-4 leading-relaxed text-slate-700">{stories[activeStory].content}</p>
              <a
                href={stories[activeStory].link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {stories[activeStory].cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </_MOTION.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-white pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2">
          <FadeUp className="rounded-3xl border border-black/10 bg-[#0F172A] p-6 text-white sm:p-8">
            <SectionTag dark>For CSR Support</SectionTag>
            <h2 className="mt-5 text-3xl font-black">Contact us for CSR Enquiries</h2>
            <p className="mt-5 text-lg font-semibold">Sandhya Krishnan: Director - Adolescent Programme Operations</p>
            <a
              href="mailto:sandhya.krishnan@magicbusindia.org"
              className="mt-4 inline-flex max-w-full items-center gap-2 break-all font-semibold text-brand-yellow hover:underline"
            >
              <Mail className="h-4 w-4" />
              sandhya.krishnan@magicbusindia.org
            </a>
          </FadeUp>
          <FadeUp delay={0.08} className="rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 sm:p-8">
            <SectionTag>For Other Enquiries</SectionTag>
            <h2 className="mt-5 text-3xl font-black text-[#0F172A]">For Other Enquiries</h2>
            <p className="mt-5 text-slate-700">For other inquiries related to Magic Bus&apos;s Adolescent Life Skills Education Programme</p>
            <a
              href="mailto:info@magicbusindia.org"
              className="mt-4 inline-flex max-w-full items-center gap-2 break-all font-semibold text-brand-red hover:underline"
            >
              <Mail className="h-4 w-4" />
              info@magicbusindia.org
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default function AdolescentProgramme() {
  return (
    <Layout>
        <FaqSchema faqs={adolescentFAQ} />
      <HeroBanner
        badgeText="Adolescent Programme"
        title="Adolescent Programme"
        subtitle="Helping Adolescents Ace Life and Learning"
        image="/ngo-images/girl.jpeg"
        showStats
        statsVariant="boxes"
        stats={[
          { label: "Target Group", value: "Ages 12-18" },
          { label: "Girls Participation", value: "52%" },
          { label: "States & UTs Reached", value: "22" }
        ]}
      />
      <ChallengeSection />
      <ApproachSection />
      <LifeSkillsFrameworkSection />
      <ContentSection
        tag="The Change We Seek"
        title="The Change We Seek"
        intro={CHANGE.intro}
        items={CHANGE.items}
        cols="lg:grid-cols-3"
      />
      <ContentSection
        bg="bg-[#F6F8FB]"
        tag="Core Principles"
        title="Principles That Guide Our Work"
        intro={PRINCIPLES.intro}
        items={PRINCIPLES.items}
        cols="lg:grid-cols-4"
      />
      <ContentSection
        tag="Life Skills"
        title="Core Life Skills"
        intro={LIFE_SKILLS.intro}
        items={LIFE_SKILLS.items}
        cols="lg:grid-cols-3"
      />
      <InterventionsSection />
      <ContentSection
        tag="Enabling Ecosystem"
        title="Enabling Ecosystem"
        intro={ECOSYSTEM.intro}
        items={ECOSYSTEM.items}
        cols="lg:grid-cols-4"
      />
      <ImplementationSection />
      <HowWeWork />
      <ReachOutcomesSection />
      <OutreachSection />
      <OutreachMapSection />
      <InnovativeSection />
      <PartnersSection />
      <SuccessStoriesSection />
      <FAQSection items={adolescentFAQ} />
      <ContactSection />
    </Layout>
  );
}
