import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Mail, ArrowRight, ArrowUpRight, Play, Quote } from "lucide-react";
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
  { title: "Importance of child Protection", url: "" },
  { title: "Gender Equality", url: "" },
  { title: "Effective Facilitation skill", url: "" },
  { title: "Training on Life Skills Education", url: "" },
];
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

        <div className="relative mt-10">
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
            className="mx-auto mt-6 flex h-64 w-64 items-center justify-center rounded-full p-6 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
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
// The programme team will share more quotes: add another entry to this list.
const VOICES = [
  { quote: "Since the sessions began, I feel more confident and open to sharing ideas with my classmates.", who: "Female Grade 10 Student, Odisha" },
  {
    quote:
      "जनजातीय कार्य विभाग के साथ नॉलेज पार्टनर के रूप में मैजिक बस इंडिया फाउंडेशन का कार्य सराहनीय है। सक्षम कार्यक्रम के अंतर्गत खेल आधारित पद्धति से विद्यार्थियों में जीवन कौशल विकसित हो रहे हैं।",
    who: "Assistant Commissioner (Education), Tribal Welfare Department, MP",
  },
  {
    quote:
      "Over the last year, our collective resolve as master trainers and mentors brought about a positive shift... Teachers at all levels began to embrace the programme wholeheartedly.",
    who: "State Resource Group (SRG), Odisha",
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
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {VOICES.map((v, i) => (
            <FadeUp key={v.who} delay={i * 0.06} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
                <Quote className="h-8 w-8" style={{ color: CORAL }} />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-slate-800">“{v.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-black/10 pt-4 text-sm font-bold text-slate-600">— {v.who}</figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. training videos, recognition, stories ---------- */
function MediaSection() {
  const videos = TRAINING_VIDEOS.filter((v) => v.url);
  const stories = STORIES_VIDEOS.filter((v) => v.youtubeId);
  return (
    <>
      {videos.length > 0 && (
        <section className="bg-white pt-16 sm:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeUp>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Training videos</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {videos.map((v) => (
                  <a
                    key={v.title}
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-[#0F172A] transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    {v.title}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
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
