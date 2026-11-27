import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, ClipboardCheck, GraduationCap, Handshake, Layers, School, TrendingUp } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import QuoteCard from "../components/ui/QuoteCard";
import { CountUp } from "../components/reports/ReportBlocks";
import usePageMeta from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════ CONTENT (from the Academic Intervention document) ═══════════════════════ */

const WHY_TEXT =
  "Leaving school is rarely a sudden decision. Learning gaps are an important contributing factor along many other factors. According to the Annual Status of Education Report (ASER) 2024, foundational deficits persist right up to the threshold of secondary school: nationally, 54.2% of rural Grade 8 students cannot solve a basic division problem (ASER Centre, 2025, p. 48), and 32.5% of Grade 8 students in government schools cannot fluently read a Grade 2-level text (ASER Centre, 2025, p. 47). Adolescents who reach secondary school with unresolved gaps in reading, language, and number skills face a harder syllabus and board examinations, which can weaken their academic confidence and participation in school.";

/* the two ASER figures from the paragraph above, shown as big numbers */
const ASER = [
  { to: 54.2, label: "of rural Grade 8 students cannot solve a basic division problem", source: "ASER Centre, 2025, p. 48", color: "#E12228" },
  { to: 32.5, label: "of Grade 8 students in government schools cannot fluently read a Grade 2-level text", source: "ASER Centre, 2025, p. 47", color: "#F58220" },
];

const AIM = "Our intervention aims to reduce the risk of disengagement and dropout by strengthening learning competencies, academic confidence, and school participation.";

const INTERVENTIONS = [
  {
    n: 1,
    title: "Remedial Learning (FLN)",
    Icon: BookOpenCheck,
    color: "#FFCC04",
    ink: "#1A1A1A",
    text: "Adolescents are assessed and grouped according to their learning levels. Our structured, competency-based FLN intervention strengthens reading, comprehension, writing, and numeracy through differentiated learning support and periodic assessments, helping adolescents progressively acquire foundational competencies and participate more effectively in grade-level classroom learning.",
  },
  {
    n: 2,
    title: "Academic Support",
    Icon: GraduationCap,
    color: "#E12228",
    ink: "#FFFFFF",
    text: "The move into secondary school and the board examinations is a critical point for many adolescents. Our Academic Support intervention provides targeted assistance to students who are academically at risk, particularly those struggling with essential subject competencies. The focus is on strengthening conceptual understanding, addressing learning gaps, supporting examination preparedness, and enabling successful grade progression.",
  },
];

/* "What makes our approach different": the three paragraphs of the document, one idea per card */
const APPROACH = [
  {
    Icon: Layers,
    color: "#21BDEA",
    title: "A learning continuum",
    text: "We provide a continuum of competency-based learning support, beginning with foundational learning, progressing to academic support during the secondary years.",
  },
  {
    Icon: ClipboardCheck,
    color: "#A6CE39",
    title: "Assessment-led support",
    text: "Our approach is assessment-led and uses differentiated learning support, so each adolescent receives help matched to their learning level.",
  },
  {
    Icon: School,
    color: "#FFCC04",
    title: "Working with schools",
    text: "We work in integration with school systems, so that support reinforces what happens in the classroom.",
  },
];

const CLOSING = "By strengthening both learning outcomes and adolescents’ confidence, we aim to help them stay engaged in education and progress successfully through school.";

const SOURCES = [
  "ASER Centre. (2025). Annual Status of Education Report (Rural) 2024 (pp. 47–48).",
  "Pratham Education Foundation. (Note: ASER 2024 was surveyed in late 2024 and officially published in January 2025.)",
];

/* Testimonials: the document has the heading but no quotes yet. Add { quote, name, role, image } here and the section appears by itself. */
const TESTIMONIALS = [];

/* ═══════════════════════ SECTIONS ═══════════════════════ */

function WhySection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            Why continued academic support <span className="text-brand-red">matters</span>
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-yellow" />
        </FadeUp>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <FadeUp>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">{WHY_TEXT}</p>
          </FadeUp>
          <div className="grid gap-5">
            {ASER.map((s, i) => (
              <FadeUp key={s.to} delay={0.08 * i}>
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F5] p-6 shadow-sm sm:p-7">
                  <span className="absolute inset-y-0 left-0 w-2" style={{ background: s.color }} />
                  <p className="pl-3 text-6xl font-black leading-none sm:text-7xl" style={{ color: s.color }}>
                    <CountUp to={s.to} decimals={1} suffix="%" />
                  </p>
                  <p className="mt-3 pl-3 text-lg font-bold leading-snug text-[#1A1A1A]">{s.label}</p>
                  <p className="mt-2 pl-3 text-[15px] font-medium text-[#1A1A1A]/60">Source: {s.source}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red via-[#C41A1F] to-[#7F0F13] p-7 text-white shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/25 blur-3xl" />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow text-[#1A1A1A] shadow-lg">
                <TrendingUp className="h-7 w-7" />
              </span>
              <p className="text-xl font-extrabold leading-snug sm:text-2xl md:text-3xl md:leading-snug">{AIM}</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function InterventionsSection() {
  return (
    <section id="interventions" className="scroll-mt-24 overflow-hidden bg-[#F7F7F5] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            Our <span className="text-brand-red">interventions</span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-yellow" />
        </FadeUp>

        {/* the continuum: foundational learning first, then academic support in the secondary years */}
        <FadeUp className="mt-10">
          <div className="mx-auto flex max-w-3xl items-center gap-3 sm:gap-4" aria-hidden="true">
            <span className="rounded-full bg-brand-yellow px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#1A1A1A] sm:text-sm">Foundational learning</span>
            <span className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-brand-yellow to-brand-red" />
            <ArrowRight className="-ml-2 h-6 w-6 shrink-0 text-brand-red" />
            <span className="rounded-full bg-brand-red px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.12em] text-white sm:text-sm">Academic support</span>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {INTERVENTIONS.map((c, i) => (
            <FadeUp key={c.n} delay={0.1 * i} className="h-full">
              <article className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <span className="absolute inset-x-0 top-0 h-2" style={{ background: c.color }} />
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-md" style={{ background: c.color, color: c.ink }}>
                    <c.Icon className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">Intervention {c.n}</p>
                    <h3 className="text-2xl font-extrabold leading-tight text-[#1A1A1A] md:text-3xl">{c.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-[#1A1A1A]/85">{c.text}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeUp className="text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">
            What makes our approach <span className="text-brand-red">different</span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-brand-yellow" />
        </FadeUp>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {APPROACH.map((a, i) => (
            <FadeUp key={a.title} delay={0.08 * i} className="h-full">
              <div className="h-full rounded-3xl border border-gray-200 bg-[#F7F7F5] p-6 shadow-sm sm:p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-[#1A1A1A] shadow-md" style={{ background: a.color }}>
                  <a.Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold leading-snug text-[#1A1A1A] md:text-2xl">{a.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#1A1A1A]/85">{a.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] p-7 text-white shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-yellow/25 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <p className="max-w-3xl text-xl font-bold leading-relaxed sm:text-2xl sm:leading-relaxed">{CLOSING}</p>
              <Link
                to="/partner"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-lg font-extrabold text-[#1A1A1A] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Handshake className="h-5 w-5" /> Partner with us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

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

function SourcesSection() {
  return (
    <section className="bg-[#F7F7F5] pb-12 pt-4 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="border-t border-gray-300 pt-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/60">Data source</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[#1A1A1A]/70">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function AcademicIntervention() {
  usePageMeta({
    title: "Academic Intervention for Adolescents | Magic Bus",
    description:
      "Magic Bus supports adolescents aged 11 and above with remedial learning (FLN) and academic support, so learning gaps do not turn into disengagement and dropout.",
  });
  return (
    <Layout>
      <HeroBanner
        badgeText="Adolescent Programme"
        image="/ngo-images/2.JPG"
        title="Academic Intervention"
        subtitle="Working across a learning continuum, we address foundational gaps early and provide sustained academic support as students progress through school."
        description="Our programme focuses on adolescents aged 11 and above, intervening at a critical stage when learning gaps compound and the risk of disengagement rises."
        ctas={[
          { href: "#interventions", label: "Our interventions", variant: "primary", showArrow: true },
          { to: "/partner", label: "Partner with us" },
        ]}
      />
      <WhySection />
      <InterventionsSection />
      <ApproachSection />
      <TestimonialsSection />
      <SourcesSection />
    </Layout>
  );
}
