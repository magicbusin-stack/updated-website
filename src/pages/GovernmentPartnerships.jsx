import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Mail, ArrowRight, ArrowUpRight, Play, GraduationCap, Brain, MapPin, X } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import usePageMeta from "../hooks/usePageMeta";
import GovernmentFootprintMap from "../components/programmes/GovernmentFootprintMap";

const EASE = [0.16, 1, 0.3, 1];
const CORAL = "#F26B6B";
const TEAL = "#3CBFC2";
const NAVY = "#1F4457";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black bg-brand-yellow px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F172A]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {children}
    </span>
  );
}

/* ---------- media still to be shared by the programme team ----------
   Paste the YouTube link (or the report link) in the empty quotes and the matching button / video appears on the page.
   Anything left empty is simply not shown. */
const TRAINING_VIDEOS = [
  { title: "Importance of child Protection", url: "https://www.youtube.com/watch?v=i7f3lsMQbh8" },
  { title: "Gender Equality", url: "https://www.youtube.com/watch?v=O-8oVEp9Ufw" },
  { title: "Effective Facilitation skill", url: "https://www.youtube.com/watch?v=of-HUcauoRM" },
  { title: "Training on Life Skills Education", url: "https://www.youtube.com/watch?v=eF7z6suqie4" },
];
const ytId = (url) => {
  const m = String(url).match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
};
const HUNDRED_REPORT_URL = ""; // "To read the HundrED report, Click Here"
const GOOD_SIGHT_URL = ""; // "To read the Good Sight Story, Click Here"
const STORIES_VIDEOS = [
  // { title: "Mr. H. Lalhruaitluanga, Additional State Project Dir., Samagra Shiksha", youtubeId: "" },
  // { title: "Saksham", youtubeId: "" }, // the Saksham video from the partnership goes right after the first one
];

/* ---------- 1. what we do / how we achieve ---------- */
function IntroSection() {
  const cards = [
    [
      "What do we do?",
      "Aligning with the vision of the National Education Policy (NEP) 2020 and Viksit Bharat, Magic Bus is committed to equipping underserved young people with life skills and future skills that build resilience, confidence, and agency.",
      "#E12228",
    ],
    [
      "How do we achieve this?",
      "We equip facilitators to deliver life skills education and enable government systems to support the holistic development of adolescents. Our approach integrates locally relevant life skills curricula, capacity building for teachers and trainers, and robust monitoring through technology and annual assessments.",
      "#2563EB",
    ],
  ];
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Government Partnerships</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Government Partnerships</h2>
        </FadeUp>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cards.map(([title, text, color], i) => (
            <FadeUp key={title} delay={i * 0.07} className="h-full">
              <div className="h-full rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 shadow-sm sm:p-8" style={{ borderTop: `6px solid ${color}` }}>
                <h3 className="text-2xl font-black text-[#0F172A]">{title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. system strengthening model ---------- */
const MODEL = [
  {
    n: 1,
    title: "Demonstration leading to system-wide scaling",
    text: "Teacher-led model in demonstration districts and developing master trainers from within the DIETs, CRCs and BRCs who in turn train teachers.",
  },
  {
    n: 2,
    title: "Curricular integration and system strengthening",
    text: "Co-development of state framework and curriculum for B.Ed. courses to make them life skills education inclusive.",
  },
  {
    n: 3,
    title: "Strengthening capacities and content for delivery of government programmes",
    text: "System led state wide project with on field monitoring support at the state level (curriculum development, teachers capacity building, system orientation).",
  },
  {
    n: 4,
    title: "Engaging in policy implementation through technical assistance",
    text: "Supporting and setting up PMUs to provide technical assistance in order to implement or integrate life skills education.",
  },
];

function ModelSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>System Strengthening Model</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">The Government Partnership Programme: System Strengthening Model</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Over the period of 3 years, Magic Bus has developed various models of interventions based on the learnings from the interventions with
            various states. State-specific models cater to the unique requirements, enable processes, and address the challenges in adherence to the
            resources available in the state.
          </p>
        </FadeUp>

        <div className="relative mt-10 flex flex-col">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-72 lg:gap-y-20">
            {MODEL.map((m, i) => (
              <FadeUp key={m.n} delay={i * 0.06} className="h-full">
                <div
                  className="relative h-full rounded-3xl border-[3px] bg-white p-6 shadow-sm sm:p-7"
                  style={{ borderColor: TEAL }}
                >
                  <span
                    className="absolute flex h-9 w-9 items-center justify-center rounded-full text-lg font-black text-white"
                    style={{ background: TEAL, top: -14, [i % 2 === 0 ? "right" : "left"]: 24 }}
                  >
                    {m.n}
                  </span>
                  <h3 className="text-xl font-extrabold leading-snug" style={{ color: CORAL }}>
                    {m.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-700">{m.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          {/* centre of the model (sits between the four cards on wider screens) */}
          <div
            className="order-first mx-auto mb-8 flex h-60 w-60 items-center justify-center rounded-full p-5 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:order-none lg:mb-0 lg:h-64 lg:w-64 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-6"
            style={{ background: CORAL, boxShadow: `0 0 0 14px ${TEAL}, 0 0 0 18px #fff, 0 16px 40px rgba(0,0,0,0.12)` }}
          >
            <p className="text-lg font-extrabold leading-snug text-white">
              The Government Partnership Programme - System Strengthening Model adopts demonstration to scale model
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. footprint ---------- */
function FootprintSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Our footprint</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our footprint</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            We collaborate with 12 state governments and national bodies such as NITI Aayog, reaching 141 Aspirational Blocks across India.
          </p>
        </FadeUp>

        <div className="mt-10">
          <GovernmentFootprintMap />
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. timeline ---------- */
const PHASES = [
  {
    year: "2022–2023",
    name: "Early Partnerships",
    color: CORAL,
    items: [
      ["Rajasthan", "Established three key district-level partnerships in Ajmer, Dholpur and Karauli."],
      ["Mizoram", "Integrated Life Skills into social science textbooks for grades 6 & 7 and commenced B.Ed teacher training."],
    ],
  },
  {
    year: "2023–2024",
    name: "Gaining Momentum",
    color: TEAL,
    items: [
      ["Andhra Pradesh", "Sankalpam Programme, dedicated timetable slots and integrated life skills with sports in 1,300 schools."],
      ["Odisha", "Kridangan Club (Aspirational Curriculum), sports integrated life skills delivered by teachers in grades 9-10, linking it to board exam marks."],
      ["Assam", "Launched large-scale, teacher-led implementation with SSA, covering 10K schools and over 1 million adolescents."],
      ["Haryana", "Teacher-led life skills delivered in three districts, reaching over 80,000 adolescents in Haryana."],
      ["Madhya Pradesh", "Partnered with the Tribal Welfare Department to roll out in 9,000 tribal schools."],
    ],
  },
  {
    year: "2024–2025",
    name: "Nationwide Scaling",
    color: NAVY,
    items: [
      ["Expanding Tribal Outreach", "New partnerships in Rajasthan and Chhattisgarh to deepen engagement in tribal schools."],
      ["Systemic Integration", "Technical partnerships in Himachal Pradesh (HPC) and Meghalaya (MPOWER) to embed life skills in state frameworks, targeting 5,00,000 adolescents in Meghalaya."],
      ["NITI Aayog Partnership", "Collaborating to improve educational outcomes for 2,00,000 adolescents in aspirational blocks of Uttar Pradesh, Himachal Pradesh, Uttarakhand and Haryana."],
    ],
  },
  {
    year: "2025–2026",
    name: "Deepening Inclusion",
    color: CORAL,
    items: [
      [
        "Project Tarang",
        "Implemented in partnership with the Department of Women and Child Development (Govt. of NCT of Delhi), this initiative uses football and play-based life skills across 20 Child Care Institutions to foster holistic adolescent development and successful societal reintegration.",
      ],
      [
        "TN-RIGHTS Project",
        "In collaboration with the Commissionerate for the Welfare of Differently Abled Persons (Govt. of Tamil Nadu) and Fernandez Direct Consulting LLP, Magic Bus is designing and piloting an accessible life skills curriculum for all 21 categories of disabilities across five districts, supported by a Training of Trainers (ToT) model.",
      ],
    ],
  },
];

function TimelineSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Our journey</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Our partnership journey, 2022–2026</h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PHASES.map((p, i) => (
            <FadeUp key={p.year} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="px-5 py-4 text-white" style={{ background: p.color }}>
                  <p className="text-lg font-black leading-tight">
                    {p.year}: {p.name}
                  </p>
                </div>
                <ul className="flex-1 space-y-5 p-5">
                  {p.items.map(([title, text]) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: p.color, color: p.color }}>
                        <Landmark className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-extrabold text-[#0F172A]">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. proof on the ground ---------- */
// The programme team will share more evidence lines: add another entry to this list and a new card appears.
const FINDINGS = [
  { big: "78%", label: "met the benchmark", text: "Students crossed the baseline benchmark of a minimum 60% score." },
  { big: "76%", label: "achieved advanced proficiency", text: "Among students with two years of exposure, compared with 36.7% in control schools." },
  {
    big: "84%",
    label: "Strong results in empathy and self-awareness",
    text: "Benchmark achievement reached 84% in empathy and 78% in self-awareness, with self-awareness at 58% in non-intervention schools.",
  },
  { big: "75%", label: "Proficiency by gender", text: "Girls achieved 75% proficiency, compared with 64% for boys." },
  {
    big: "3.7×",
    label: "Session attendance and advanced scores",
    text: "Students attending 13+ sessions had 3.7 times higher odds of achieving advanced scores than students without exposure.",
  },
];
const FINDING_COLORS = [CORAL, TEAL, NAVY, "#D97706", "#7B52B8"];

function ProofSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Evidence</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Proof on the Ground</h2>
          <p className="mt-4 text-lg font-semibold text-slate-800">Key findings from our Government Partnership life skills programme in the field</p>
          <p className="mt-3 leading-relaxed text-slate-600">The Life-Skills Impact Assessment Report 2025 (Odisha) reports the following findings:</p>
        </FadeUp>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FINDINGS.map((f, i) => (
            <FadeUp key={f.label} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-3xl border border-black/10 bg-[#F8FAFC] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" style={{ borderTop: `6px solid ${FINDING_COLORS[i % FINDING_COLORS.length]}` }}>
                <p className="text-5xl font-black" style={{ color: FINDING_COLORS[i % FINDING_COLORS.length] }}>
                  {f.big}
                </p>
                <p className="mt-2 text-lg font-extrabold leading-snug text-[#0F172A]">{f.label}</p>
                <p className="mt-2 leading-relaxed text-slate-600">{f.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. voices from field ---------- */
// The programme team will share more quotes: add another entry to this list (pick one of the three colour themes).
const THEMES = {
  coral: {
    card: "linear-gradient(to bottom,#fffbf5,#fff5f5,#ffeef1)",
    border: "rgba(254,205,211,0.9)",
    icon: "linear-gradient(135deg,#f43f5e,#e11d48)",
    ring: "#ffe4e6",
    badgeBg: "#ffe4e6",
    badgeText: "#be123c",
    watermark: "rgba(244,63,94,0.10)",
    glow: "linear-gradient(135deg,rgba(253,164,175,0.35),rgba(253,230,138,0.3))",
    line: "rgba(254,205,211,0.9)",
  },
  teal: {
    card: "linear-gradient(to bottom,#f2fdf9,#e8faf4,#dcf7ee)",
    border: "#99f6e4",
    icon: "linear-gradient(135deg,#0d9488,#047857)",
    ring: "#ccfbf1",
    badgeBg: "#ccfbf1",
    badgeText: "#115e59",
    watermark: "rgba(13,148,136,0.10)",
    glow: "linear-gradient(135deg,rgba(94,234,212,0.3),rgba(110,231,183,0.3))",
    line: "rgba(153,246,228,0.9)",
  },
  indigo: {
    card: "linear-gradient(to bottom,#f5f6ff,#edefff,#e4e7ff)",
    border: "#c7d2fe",
    icon: "linear-gradient(135deg,#4f46e5,#9333ea)",
    ring: "#e0e7ff",
    badgeBg: "#e0e7ff",
    badgeText: "#3730a3",
    watermark: "rgba(79,70,229,0.10)",
    glow: "linear-gradient(135deg,rgba(165,180,252,0.3),rgba(216,180,254,0.3))",
    line: "rgba(199,210,254,0.9)",
  },
};
const VOICES = [
  {
    theme: "coral",
    Icon: GraduationCap,
    role: "Student",
    place: "Odisha",
    quote: "Since the sessions began, I feel more confident and open to sharing ideas with my classmates.",
    who: "Female Grade 10 Student, Odisha",
    initials: "OD",
  },
  {
    theme: "teal",
    Icon: Landmark,
    role: "Government Partner",
    place: "Madhya Pradesh",
    hindi: true,
    quote:
      "जनजातीय कार्य विभाग के साथ नॉलेज पार्टनर के रूप में मैजिक बस इंडिया फाउंडेशन का कार्य सराहनीय है। सक्षम कार्यक्रम के अंतर्गत खेल आधारित पद्धति से विद्यार्थियों में जीवन कौशल विकसित हो रहे हैं।",
    who: "Assistant Commissioner (Education), Tribal Welfare Department, MP",
    initials: "MP",
  },
  {
    theme: "indigo",
    Icon: Brain,
    role: "Master Trainer / SRG",
    place: "Odisha",
    quote:
      "Over the last year, our collective resolve as master trainers and mentors brought about a positive shift... Teachers at all levels began to embrace the programme wholeheartedly.",
    who: "State Resource Group (SRG), Odisha",
    initials: "SRG",
  },
];

function VoicesSection() {
  return (
    <section className="bg-[#F6F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="max-w-4xl">
          <SectionTag>Voices</SectionTag>
          <h2 className="mt-5 text-3xl font-black text-[#0F172A] md:text-4xl">Voices from Field</h2>
        </FadeUp>
        <div className="mt-8 grid items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VOICES.map((v, i) => {
            const t = THEMES[v.theme];
            return (
              <FadeUp key={v.who} delay={i * 0.06} className={`h-full ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <figure
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8"
                  style={{ background: t.card, borderColor: t.border }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 right-4 select-none font-serif text-9xl leading-none transition-transform duration-500 group-hover:scale-110"
                    style={{ color: t.watermark }}
                  >
                    “
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125"
                    style={{ background: t.glow }}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md transition-transform group-hover:scale-105"
                        style={{ background: t.icon, boxShadow: `0 0 0 4px ${t.ring}` }}
                      >
                        <v.Icon className="h-6 w-6" />
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-full border px-2.5 py-0.5 text-xs font-bold tracking-wide" style={{ background: t.badgeBg, color: t.badgeText, borderColor: t.border }}>
                          {v.role}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border bg-white/90 px-2 py-0.5 text-[11px] font-semibold" style={{ color: t.badgeText, borderColor: t.border }}>
                          <MapPin className="h-3 w-3" />
                          {v.place}
                        </span>
                      </div>
                    </div>
                    <blockquote className={`font-semibold leading-relaxed text-slate-900 ${v.hindi ? "text-[17px] leading-[1.75]" : "text-lg"}`}>“{v.quote}”</blockquote>
                  </div>
                  <figcaption className="relative z-10 mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: t.line }}>
                    <p className="pr-2 text-sm font-bold leading-snug tracking-tight text-slate-900">— {v.who}</p>
                    <span
                      className="ml-2 flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full px-2 text-xs font-bold text-white shadow-sm"
                      style={{ background: t.icon, boxShadow: `0 0 0 2px ${t.border}` }}
                    >
                      {v.initials}
                    </span>
                  </figcaption>
                </figure>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. training videos, recognition, stories ---------- */
function MediaSection() {
  const [playing, setPlaying] = useState(null);
  const videos = TRAINING_VIDEOS.filter((v) => v.url);
  const stories = STORIES_VIDEOS.filter((v) => v.youtubeId);
  return (
    <>
      {videos.length > 0 && (
        <section className="bg-white pt-16 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeUp>
              <h3 className="text-2xl font-black text-[#0F172A] md:text-3xl">Training videos</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {videos.map((v) => {
                  const id = ytId(v.url);
                  return (
                    <button
                      key={v.title}
                      type="button"
                      onClick={() => setPlaying(v)}
                      className="group overflow-hidden rounded-xl border border-black/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      aria-label={`Play video: ${v.title}`}
                    >
                      <span className="relative block aspect-video overflow-hidden bg-black">
                        <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                        <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] shadow-lg transition group-hover:scale-110">
                            <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                          </span>
                        </span>
                      </span>
                      <span className="block bg-brand-yellow px-3 py-2.5 text-center text-sm font-semibold text-[#0F172A]">{v.title}</span>
                    </button>
                  );
                })}
              </div>
            </FadeUp>
          </div>
          {playing && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label={playing.title} onClick={() => setPlaying(null)}>
              <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => setPlaying(null)}
                  aria-label="Close video"
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F172A] shadow hover:opacity-90"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${ytId(playing.url)}?autoplay=1&rel=0`}
                    title={playing.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="mt-3 text-center font-semibold text-white">{playing.title}</p>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp>
            <div className="grid overflow-hidden rounded-3xl bg-brand-yellow md:grid-cols-2">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-black text-[#0F172A]">A globally lauded education innovation</h3>
                <p className="mt-3 leading-relaxed text-[#1f2937]">
                  The SCALE programme was recently recognised by <strong>HundrED</strong> as the <strong>top 100 education innovations</strong> out of
                  +3000 entries worldwide.
                </p>
                {HUNDRED_REPORT_URL && (
                  <p className="mt-4 flex flex-wrap items-center gap-3 text-[#1f2937]">
                    To read the HundrED report,
                    <a href={HUNDRED_REPORT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white">
                      Click Here <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </p>
                )}
              </div>
              <div className="border-t border-black/20 p-6 sm:p-8 md:border-l md:border-t-0">
                <h3 className="text-xl font-black text-[#0F172A]">Recognised for Impact</h3>
                <p className="mt-3 leading-relaxed text-[#1f2937]">
                  Good Sight magazine recently recognised SCALE in its special edition, <strong>Champions of Change,</strong> which identified the
                  programme as one of the <strong>most impactful education initiatives.</strong>
                </p>
                {GOOD_SIGHT_URL && (
                  <p className="mt-4 flex flex-wrap items-center gap-3 text-[#1f2937]">
                    To read the Good Sight Story,
                    <a href={GOOD_SIGHT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white">
                      Click Here <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </FadeUp>

          {stories.length > 0 && (
            <div className="mt-14">
              <h3 className="text-center text-2xl font-black text-slate-700">
                <span className="border-b-4 border-brand-yellow pb-1">Stories From The Ground</span>
              </h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {stories.map((s) => (
                  <div key={s.youtubeId} className="overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${s.youtubeId}`}
                        title={s.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="bg-white px-4 py-3 text-sm font-semibold text-slate-700">{s.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- 8. partner with us ---------- */
function PartnerSection() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0F172A] p-8 text-white sm:p-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black md:text-3xl">Partner with us</h2>
              <p className="mt-3 text-lg leading-relaxed text-white/85">
                Together, let’s nurture young generations for Viksit Bharat. Connect with our head office or regional teams to explore a government
                partnership.
              </p>
            </div>
            <a
              href="mailto:govtpartner@magicbusindia.org"
              className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-brand-yellow px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:opacity-90 sm:px-6 sm:text-base"
            >
              <Mail className="h-5 w-5 shrink-0" />
              govtpartner@magicbusindia.org
              <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function GovernmentPartnerships() {
  usePageMeta({
    title: "Government Partnerships | Magic Bus India Foundation",
    description:
      "Aligned with NEP 2020 and Viksit Bharat, Magic Bus works with 12 state governments and NITI Aayog to equip facilitators, teachers and government systems to deliver life skills education at scale.",
  });
  return (
    <Layout>
      <HeroBanner
        badgeText="Adolescent Programme"
        title="Government Partnerships"
        subtitle="Life skills education at scale, with state governments and national bodies"
        image="/ngo-images/6.jpeg"
      />
      <IntroSection />
      <ModelSection />
      <FootprintSection />
      <TimelineSection />
      <ProofSection />
      <VoicesSection />
      <MediaSection />
      <PartnerSection />
    </Layout>
  );
}
