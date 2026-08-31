import React, { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import FAQSection from "../components/Home/FAQSectiom";
import { adolescentFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";

const _MOTION = motion;
const EASE = [0.16, 1, 0.3, 1];

const outreachMagicBusLed = [
  ["Adolescents Outreach", "3,58,219"],
  ["Schools", "2,332"],
  ["Community Learning Centres", "343"],
  ["% Girls Participants", "52%"],
  ["States & UTs", "22"],
  ["Districts", "72"]
];

const outreachGovt = [
  ["Adolescents Outreach", "29,56,366"],
  ["Schools", "27,737"],
  ["Master Trainers Trained", "1,474"],
  ["Teachers Trained", "37,389"],
  ["% Girls Participants", "52%"],
  ["Government Partnerships", "11"],
  ["Aspirational Blocks", "141"]
];

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

function NeedSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          <SectionTag>Why It Matters</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Breaking Barriers, Building Opportunities</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            India has 253 million adolescents below the age of 18. The dropout rate in India is highest at the
            secondary level (9-10) at 11.5%, followed by upper primary (6-8) at 3.5% and primary (1-5) at 0.3%.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            According to the National Family Health Survey 2019-21, about 23% of women were married before turning
            18 in India. These challenges point towards the need for timely intervention in adolescents’ lives through
            life skills education.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Developing life skills among young people is important for achieving Sustainable Development Goals (SDGs)
            and enabling young people to overcome the cycle of poverty.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function AboutProgramme() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <FadeUp>
          <SectionTag>What Is Magic Bus&apos;s Adolescent Programme?</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Adolescent Programme of Magic Bus</h2>
          <p className="mt-5 leading-relaxed text-slate-700">
            The Adolescent Programme of Magic Bus equips underserved adolescents aged 12-18 with life skills,
            foundation literacy and numeracy (FLN), and employability education, to pursue education, lead fulfilling
            lives, and add value to their communities.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            With the 11 life skills framework, Magic Bus imparts 21st century skills like assertiveness,
            collaboration, and negotiation through an activity-based school curriculum and community engagement. The
            Childhood to Livelihood model helps us nurture well-rounded individuals, ensuring a smooth transition of
            adolescents into adulthood.
          </p>
        </FadeUp>
        <FadeUp delay={0.08} className="overflow-hidden rounded-3xl border border-black/10">
          <img src="/ngo-images/11.jpg" alt="Adolescents in learning activity" className="h-full w-full object-cover" />
        </FadeUp>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const cards = [
    {
      title: "Play and Sports Curriculum",
      text: "A structured play and sports curriculum fosters teamwork, leadership, gender equity and agency among adolescents."
    },
    {
      title: "Community Learning Centres",
      text: "CLCs combine personalised learning support and socio-emotional development to improve foundational learning outcomes."
    },
    {
      title: "Government Partnerships",
      text: "Teachers are trained to integrate life skills in classrooms and playgrounds for confident school-to-work transitions."
    },
    {
      title: "System Strengthening",
      text: "State education bodies co-create curriculum, training frameworks and monitoring systems for durable impact."
    }
  ];

  return (
    <section className="bg-[#0F172A] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag dark>What We Do</SectionTag>
          <h2 className="mt-5 text-3xl font-black md:text-4xl">Role of Magic Bus in Empowering Adolescents</h2>
          <p className="mt-5 leading-relaxed text-white/85">
            Magic Bus works with underserved adolescents for their holistic development, helping them thrive in their
            journey to adulthood.
          </p>
        </FadeUp>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((item, idx) => (
            <FadeUp key={item.title} delay={idx * 0.05}>
              <_MOTION.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-xl font-bold">{item.title}</p>
                <p className="mt-3 leading-relaxed text-white/80">{item.text}</p>
              </_MOTION.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiagramSection({ title, label, imagePath }) {
  const [zoom, setZoom] = useState(false);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <SectionTag>{label}</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">{title}</h2>
          <button
            onClick={() => setZoom(true)}
            className="mt-6 mx-auto block w-full max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-[#F8FAFC] to-white p-3 sm:p-4"
            aria-label={`Open ${title} diagram`}
          >
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <img src={imagePath} alt={title} className="mx-auto w-full max-h-[520px] object-contain" />
            </div>
          </button>
        </FadeUp>
      </div>
      {zoom && (
        <button
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-5"
          onClick={() => setZoom(false)}
          aria-label={`Close ${title} diagram preview`}
        >
          <img src={imagePath} alt={`${title} enlarged`} className="max-h-[90vh] max-w-[90vw] rounded-xl bg-white p-2" />
        </button>
      )}
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
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

function OutreachImpactSection() {
  const [active, setActive] = useState("magic");
  const rows = useMemo(() => (active === "magic" ? outreachMagicBusLed : outreachGovt), [active]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Outreach and Impact 2024-25</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our Outreach</h2>
          <p className="mt-4 text-sm text-slate-600">Source: magicbus.org/outreach.php</p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-6 rounded-3xl border border-black/10 bg-[#F8FAFC] p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActive("magic")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === "magic" ? "bg-[#0F172A] text-white" : "bg-white text-slate-700"
              }`}
            >
              Magic Bus-led Model
            </button>
            <button
              onClick={() => setActive("govt")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === "govt" ? "bg-[#0F172A] text-white" : "bg-white text-slate-700"
              }`}
            >
              Government Partnership Model
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-xs uppercase tracking-[0.12em] text-slate-500">Metric</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-[0.12em] text-slate-500">Value</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([metric, value]) => (
                  <tr key={metric} className="border-t border-black/5">
                    <td className="px-4 py-3 font-medium text-slate-800">{metric}</td>
                    <td className="px-4 py-3 font-bold text-slate-950">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp className="mt-10">
          <h2 className="text-3xl font-black text-[#0F172A] md:text-4xl">Our Impact</h2>
          <p className="mt-4 text-sm text-slate-600">Source: Annual report 2024-25</p>
          <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="h-full rounded-2xl border border-black/10 bg-[#F8FAFC] p-5 shadow-sm">
              <p className="text-4xl font-black text-brand-red">27%</p>
              <p className="mt-2 leading-relaxed text-slate-700">Increase in attendance and school regularity</p>
            </div>
            <div className="h-full rounded-2xl border border-black/10 bg-[#F8FAFC] p-5 shadow-sm">
              <p className="text-4xl font-black text-brand-blue">46%</p>
              <p className="mt-2 leading-relaxed text-slate-700">Improvement in perceived ability to withstand and recover from difficulties</p>
            </div>
            <div className="h-full rounded-2xl border border-black/10 bg-[#F8FAFC] p-5 shadow-sm">
              <p className="text-4xl font-black text-brand-green">20%</p>
              <p className="mt-2 leading-relaxed text-slate-700">Increase in perceived ability to act as required to achieve goals</p>
            </div>
            <div className="h-full rounded-2xl border border-black/10 bg-[#F8FAFC] p-5 shadow-sm">
              <p className="text-4xl font-black text-brand-magenta">6%</p>
              <p className="mt-2 leading-relaxed text-slate-700">Improvement in adolescents&apos; gender attitude</p>
            </div>
          </div>
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
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-yellow hover:underline"
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
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-red hover:underline"
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
      <NeedSection />
      <AboutProgramme />
      <WhatWeDo />
      <DiagramSection
        label="Adolescent Programme Implementation Model"
        title="Adolescent Programme Implementation Model"
        imagePath="/implementation model.png"
      />
      <HowWeWork />
      <DiagramSection
        label="Life Skills Framework of Magic Bus"
        title="Life Skills Framework of Magic Bus"
        imagePath="/life skills framework.png"
      />
      <OutreachImpactSection />
      <OutreachMapSection />
      <PartnersSection />
      <SuccessStoriesSection />
      <FAQSection items={adolescentFAQ} />
      <ContactSection />
    </Layout>
  );
}
