import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Briefcase,
  ChevronRight,
  Heart,
  Mail,
  PersonStanding,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import QuoteCard from "../components/ui/QuoteCard";
import { StatsBand } from "../components/reports/ReportBlocks";
import usePageMeta from "../hooks/usePageMeta";
import usePhone from "../hooks/usePhone";

const EASE = [0.16, 1, 0.3, 1];

/* Phones: a row you swipe sideways (so the page is not one long column). Tablet and desktop: the normal layout. */
const SWIPE_ROW =
  "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0";
const SWIPE_ITEM = "w-[82%] shrink-0 snap-center sm:w-auto sm:shrink";

function FadeUp({ children, delay = 0, className = "", immediate = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={immediate || inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════ 1. SPORTS ECOSYSTEM ══════════════════════ */
const POLICY_CHIPS = ["National Sports Policy (NSP) 2025", "Khelo India", "SPEFL-SC · Ministry of Skill Development and Entrepreneurship (MSDE)"];

function EcosystemSection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeUp className="lg:col-span-7">
            <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
              Sports <span className="text-brand-red">Ecosystem</span>
            </h2>
            <p className="mt-4 text-xl font-bold leading-snug text-[#1A1A1A] md:text-2xl">
              Sport as an Outcome and a Pedagogy for Education, Skilling, and Social Change
            </p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">
              <p>
                Anchored in the National Sports Policy (NSP) 2025, Khelo India, and the Sports, Physical Education, Fitness and Leisure Skills Council (SPEFL-SC) under the Ministry of Skill Development and Entrepreneurship (MSDE), our Sports for Development (S4D) approach harnesses physical activity and play as a structured pedagogy.
              </p>
              <p>
                By embedding sport into the learning journey, we build 21st-century skills — such as teamwork, critical thinking, resilience, and leadership — while creating clear pathways from grassroots play to skilling, employability, and youth entrepreneurship.
              </p>
              <p>Simultaneously sports is pursued to empower adolescents to play and participate in professional competitive setups.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img loading="lazy" decoding="async" src="/ngo-images/11.jpg" alt="Children playing football in a Magic Bus session" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {POLICY_CHIPS.map((c) => (
                  <span key={c} className="rounded-full border border-gray-300/80 bg-[#F7F7F5] px-3.5 py-1.5 text-[15px] font-semibold leading-snug text-[#1A1A1A]/85">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 2. THEORY OF CHANGE ══════════════════════ */
const STAGES = [
  {
    key: "inputs",
    title: "Inputs",
    Icon: Users,
    bar: "bg-brand-blue",
    tile: "bg-brand-blue text-white",
    text: "text-[#0E86A8]",
    dot: "bg-brand-blue",
    points: ["Trained youth coaches and mentors", "Safe spaces & sports equipment", "Curriculum & life skills pedagogy", "Partnerships & community support"],
  },
  {
    key: "do",
    title: "Through Sports We Do",
    Icon: PersonStanding,
    bar: "bg-brand-green",
    tile: "bg-brand-green text-[#1A1A1A]",
    text: "text-[#5E7A00]",
    dot: "bg-brand-green",
    points: ["Regular sport sessions", "Life skills integration", "Mentoring & guidance", "Exposure & experiences", "Competition & events"],
  },
  {
    key: "develop",
    title: "Young People Develop",
    Icon: Sparkles,
    bar: "bg-brand-magenta",
    tile: "bg-brand-magenta text-white",
    text: "text-brand-magenta",
    dot: "bg-brand-magenta",
    points: ["Confidence & self-esteem", "Life & employability skills", "Discipline, teamwork & resilience", "Aspirations & agency", "Leadership & citizenship"],
  },
  {
    key: "leads",
    title: "Which Leads To",
    Icon: TrendingUp,
    bar: "bg-brand-yellow",
    tile: "bg-brand-yellow text-[#1A1A1A]",
    text: "text-[#A16207]",
    dot: "bg-brand-yellow",
    points: ["Better learning outcomes", "Improved health & wellbeing", "Delayed risk behaviours", "Career readiness & employability", "Active civic participation"],
  },
  {
    key: "result",
    title: "Resulting In",
    Icon: Heart,
    bar: "bg-brand-red",
    tile: "bg-brand-red text-white",
    text: "text-brand-red",
    dot: "bg-brand-red",
    points: ["Young people lead fulfilling lives, contribute to strong communities and drive inclusive societal change."],
    sentence: true,
  },
];

function TheoryOfChange() {
  const phone = usePhone();
  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-12 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <FadeUp className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            Theory of Change: <span className="text-brand-red">How Sports Drives Transformation</span>
          </h2>
        </FadeUp>

        {/* Five steps from inputs to impact. Phones: swipe through them. Large screens: one row joined by arrows. */}
        <div className={`${SWIPE_ROW} mt-10 sm:mt-14 sm:flex-wrap sm:justify-center xl:grid xl:grid-cols-5 xl:gap-0 xl:px-0`}>
          {STAGES.map((st, i) => (
            <FadeUp key={st.key} delay={0.08 * i} immediate={phone} className="relative flex w-[82%] shrink-0 snap-center flex-col sm:w-[46%] sm:shrink lg:w-[31%] xl:w-auto xl:px-2">
              <article tabIndex={0} className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm outline-none transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-brand-yellow">
                <span className={`absolute inset-x-0 top-0 h-1.5 ${st.bar}`} />
                <div className="flex items-center gap-3">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 ${st.tile}`}>
                    <st.Icon className="h-7 w-7" />
                  </span>
                  <span className="text-3xl font-black text-[#1A1A1A]/15">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`mt-4 text-lg font-black uppercase leading-snug tracking-wide ${st.text}`}>{st.title}</h3>
                {st.sentence ? (
                  <p className="mt-3 text-lg font-medium leading-relaxed text-[#1A1A1A]/85">{st.points[0]}</p>
                ) : (
                  <ul className="mt-3 space-y-2.5">
                    {st.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[17px] font-medium leading-snug text-[#1A1A1A]/85">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${st.dot}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
              {i < STAGES.length - 1 && (
                <span aria-hidden="true" className="absolute right-[-18px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-lg xl:flex">
                  <ChevronRight className="h-5 w-5" />
                </span>
              )}
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xl font-semibold leading-relaxed text-[#1A1A1A] md:text-2xl">
            Grounded in our Theory of Change, this framework directly enables our key interventions on the ground.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ══════════════════════ 3. KEY INTERVENTIONS ══════════════════════ */
/* All four are shown in one format (one card style, one colour), as the programme team asked. */
const INTERVENTIONS = [
  {
    title: "S4D (Sports for Life Skills Development)",
    Icon: Activity,
    points: [
      "Using sport as a pedagogical tool to develop life skills, values and positive behaviours for adolescents.",
      "Strengthening adolescent confidence, resilience, teamwork and responsible citizenship.",
    ],
  },
  {
    title: "Sports for Employability",
    Icon: Briefcase,
    text: "Leveraging sports to build 21st century skills, increase aspirations and prepare young people for better livelihood opportunities.",
  },
  {
    title: "S4D Fellows",
    Icon: Users,
    text: "Youth-led change makers who design and deliver sports-based life skills initiatives, fostering leadership and community action among peers.",
  },
  {
    title: "Sports Excellence",
    Icon: Trophy,
    text: "Identifying and nurturing talented young people in sport to help them achieve their potential at higher levels, while instilling discipline, resilience and leadership.",
  },
];

function InterventionsSection() {
  const phone = usePhone();
  return (
    <section id="interventions" className="overflow-hidden bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            Our Key <span className="text-brand-red">Interventions</span>
          </h2>
        </FadeUp>

        <div className={`${SWIPE_ROW} mt-10 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4`}>
          {INTERVENTIONS.map((it, i) => (
            <FadeUp key={it.title} delay={0.08 * i} immediate={phone} className={`${SWIPE_ITEM} flex flex-col sm:h-full`}>
              <article tabIndex={0} className="group relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F5] p-6 shadow-sm outline-none transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl focus-visible:ring-4 focus-visible:ring-brand-yellow md:p-7">
                <span className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <it.Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold leading-snug text-[#1A1A1A] md:text-2xl">{it.title}</h3>
                {it.points ? (
                  <ul className="mt-3 space-y-3">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-[#1A1A1A]/85">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-[17px] leading-relaxed text-[#1A1A1A]/85">{it.text}</p>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 4. IMPACT AT A GLANCE ══════════════════════ */
const IMPACT = [
  { to: 200, suffix: "+", label: "Teams", Icon: Users, color: "yellow" },
  { to: 7, label: "Sports", Icon: Trophy, color: "green" },
  { to: 1, label: "Vision: Equal opportunity to all adolescents to compete, excel, and rise.", Icon: Target, color: "blue" },
  {
    to: 120,
    suffix: "+",
    label: "Girls Teams actively competing, reflecting our deep commitment to breaking barriers and advancing girls’ leadership in sports.",
    Icon: Heart,
    color: "red",
  },
];

/* ══════════════════════ 5. TESTIMONIALS (reserved) ══════════════════════ */
/* The programme team will share these soon. Add each one as { quote, name, role, image } and the section appears by itself. */
const TESTIMONIALS = [];

function TestimonialsSection() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            <span className="text-brand-red">Testimonials</span>
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <FadeUp key={t.name} className="h-full">
              <QuoteCard quote={t.quote} name={t.name} role={t.role} image={t.image} initial={t.name?.[0]} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 6. PARTNER WITH US ══════════════════════ */
function ContactSection() {
  return (
    <section id="contact-s4d" className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <FadeUp className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Partner <span className="text-brand-yellow">with us</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <motion.a
            href="mailto:subhomoy@magicbusindia.org"
            whileHover={{ y: -3 }}
            className="group mx-auto flex max-w-2xl flex-col items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-brand-yellow/40 hover:bg-white/10 sm:flex-row sm:items-center sm:p-7"
          >
            <span className="shrink-0 rounded-xl bg-brand-yellow p-4">
              <Mail className="h-6 w-6 text-brand-black" />
            </span>
            <div className="min-w-0 max-w-full flex-1">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/65">Sports for Development</p>
              <p className="text-xl font-extrabold text-white transition-colors group-hover:text-brand-yellow">Partner with us</p>
              <div className="mt-3 inline-flex max-w-full items-start gap-2 break-all text-[15px] font-bold text-brand-yellow sm:text-base">
                subhomoy@magicbusindia.org
              </div>
            </div>
            <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-yellow opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
          </motion.a>
        </FadeUp>
      </div>
    </section>
  );
}

export default function SportsForDevelopment() {
  usePageMeta({
    title: "Sports for Development (S4D): Sport as Pedagogy | Magic Bus",
    description:
      "Magic Bus Sports for Development uses sport as a pedagogy for education, skilling and social change, with 200+ teams, 7 sports and 120+ girls teams.",
  });
  return (
    <Layout>
      <HeroBanner
        badgeText="Adolescent Programme"
        image="/ngo-images/our-approach-adolescent.jpg"
        title="Sports for Development"
        subtitle="Sport as an Outcome and a Pedagogy for Education, Skilling, and Social Change"
        ctas={[
          { href: "#interventions", label: "Our Key Interventions", variant: "primary", showArrow: true },
          { href: "#contact-s4d", label: "Partner with us" },
        ]}
      />
      <EcosystemSection />
      <TheoryOfChange />
      <InterventionsSection />
      <StatsBand
        eyebrow={null}
        title="Our Impact at a Glance"
        subtitle="200+ Teams. 7 Sports. 1 Vision: Equal opportunity to all adolescents to compete, excel, and rise."
        stats={IMPACT}
        cols={4}
        compact
        slider
        slideSeconds={4}
      />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
