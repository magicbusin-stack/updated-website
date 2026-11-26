import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, GraduationCap, Heart, Users } from "lucide-react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import QuoteCard from "../components/ui/QuoteCard";
import { StatsBand } from "../components/reports/ReportBlocks";
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

/* ═══════════════════════ CONTENT (from the Community Engagement document) ═══════════════════════ */

/* First circle (click): the school-level groups. Content = the first table in the document. */
const SCHOOL_CARDS = [
  {
    title: "Child Cabinet / Bal Sabha",
    line: "Forming and activating Child Cabinets (Bal Sabha) as a vital part of the school system to build student leadership, peer voice, and holistic development.",
    text: "We form and activate Child Cabinets (Bal Sabha) as an essential pillar of the school ecosystem, giving students a structured platform to build leadership, teamwork, and decision-making skills. By encouraging active participation in school governance, peer discussions, cultural activities, and problem-solving exercises, Bal Sabha nurtures confidence, communication skills, creativity, and a strong sense of shared responsibility — promoting the holistic development of every student.",
  },
  {
    title: "School Management Committees (SMCs)",
    line: "Activating and strengthening SMCs to build collaborative school governance and community ownership of adolescent education and well-being.",
    text: "A School Management Committee (SMC) is a group formed at the school level consisting of parents, teachers, and local representatives. It plays an important role in the development and management of the school. We strengthen School Management Committees (SMCs) by bringing parents, teachers, and local leaders together to support school development and student retention. Through regular engagement and capacity building, we enable SMCs to monitor school quality, address barriers to learning, and foster a safe, inclusive environment where adolescents can thrive.",
  },
];

/* The institutions around the adolescent (first circle, lower part). Short names on the wheel, full names in the text. */
const INSTITUTIONS = [
  { short: "Urban Local Bodies", full: "Urban local bodies" },
  { short: "CWCs", full: "Child Welfare Committees (CWCs)" },
  { short: "District Officials", full: "district-level government officials" },
  { short: "VCPCs", full: "Village Child Protection Committees (VCPCs)" },
  { short: "VECs", full: "Village Education Committees (VECs)" },
  { short: "Block Officials", full: "block-level government officials" },
  { short: "PRIs", full: "Panchayati Raj Institutions (PRIs)" },
  { short: "ICDS / Anganwadi", full: "ICDS/Anganwadi workers" },
];
const INSTITUTION_TEXT =
  "At the institutional and governance level, we collaborate with Urban local bodies, Panchayati Raj Institutions (PRIs), ICDS/Anganwadi workers, Village Education Committees (VECs), Village Child Protection Committees (VCPCs), Child Welfare Committees (CWCs), and block- and district-level government officials to build shared accountability and ensure child protection, education, and adolescent well-being remain community-owned priorities.";

/* Second circle (click): the community volunteers. Content = the second table in the document. */
const ROLES = [
  {
    key: "yl",
    label: ["Young", "Leaders", "(YLs)"],
    title: "Young Leader",
    line: "A Young Leader motivates and guides adolescents while contributing to community development.",
    text: "A Young Leader is a dedicated individual who voluntarily works towards the welfare and development of the community. They motivate and guide adolescents by engaging them in sports, recreational, and educational activities, while promoting positive social change, leadership qualities, and overall community development.",
    angle: -118,
    fill: "#DDF3FB",
    strong: "#21BDEA",
  },
  {
    key: "cc",
    label: ["Community", "Coordinators", "(CCs)"],
    title: "Community Coordinator",
    line: "A Community Coordinator (CC) is a dedicated volunteer who brings people together, supports community initiatives, addresses local needs, and promotes unity, well-being, and positive development.",
    text: "A Community Coordinator (CC) is a dedicated and selfless volunteer committed to the overall development and well-being of the community. They actively support community initiatives, encourage participation, and bring people together for a common cause. Through their leadership, teamwork, and commitment, they help address community needs and promote positive change. Their ultimate goal is to build a stronger, happier, and more united community.",
    angle: -46,
    fill: "#EEF5CC",
    strong: "#B3CC35",
  },
  {
    key: "cyl",
    label: ["Community", "Youth Leaders", "(CYLs)"],
    title: "Community Youth Leader",
    line: "A Community Youth Leader is a volunteer dedicated to community welfare and development.",
    text: "A Community Youth Leader is an individual who voluntarily works for the welfare and development of the community, supporting programme activities and responding to the needs of the community with dedication and a spirit of service.",
    angle: 26,
    fill: "#FFF1BF",
    strong: "#FFCC04",
  },
  {
    key: "gk",
    label: ["Goalkeepers"],
    title: "Goalkeeper",
    line: "A Goalkeeper motivates youth through sports and actively contributes to community development.",
    text: "A Goalkeeper voluntarily works for the well-being of the community. They encourage adolescents through sports and recreational activities while contributing to positive social change and community development.",
    angle: 98,
    fill: "#FBD6E9",
    strong: "#E01085",
  },
  {
    key: "gc",
    label: ["Girl", "Champions", "(GCs)"],
    title: "Girl Champion",
    line: "Creating confident, connected, and capable adolescent girls who can make informed choices and influence their own futures.",
    text: "The Girl Champion approach aims to create a supportive ecosystem in which adolescent girls develop confidence, agency, peer networks, and practical skills to make informed decisions, navigate challenges, access opportunities, and participate meaningfully in their families, schools, and communities.",
    angle: 170,
    fill: "#FCD9DA",
    strong: "#E12228",
  },
];

/* Community Outreach numbers: "will share soon". Fill in `to` and the block appears by itself. */
const OUTREACH = [
  { to: null, label: "Communities Engaged (total villages / urban settlements)", Icon: Building2, color: "yellow" },
  { to: null, label: "Parents / caregivers reached", Icon: Users, color: "green" },
  { to: null, label: "SMC (School Management Committee) members", Icon: GraduationCap, color: "blue" },
  { to: null, label: "Total youth & community volunteers", Icon: Heart, color: "red" },
];

/* Testimonials: "will share soon". Add { quote, name, role, image } here and the section appears by itself. */
const TESTIMONIALS = [];

/* ═══════════════════════ THE WHEEL ═══════════════════════ */
const CX = 430;
const CY = 430;
const R_CENTER = 85;
const R_INNER = 235;
const R_OUTER = 358;
const rad = (d) => (d * Math.PI) / 180;
const pt = (r, deg) => [CX + r * Math.cos(rad(deg)), CY + r * Math.sin(rad(deg))];

/* a ring segment between two radii and two angles */
function segment(r1, r2, a1, a2) {
  const [x1, y1] = pt(r2, a1);
  const [x2, y2] = pt(r2, a2);
  const [x3, y3] = pt(r1, a2);
  const [x4, y4] = pt(r1, a1);
  const large = a2 - a1 > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r2} ${r2} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${r1} ${r1} 0 ${large} 0 ${x4} ${y4} Z`;
}

const SCHOOL_FROM = -155;
const SCHOOL_TO = -25;

function Wheel({ active, setActive }) {
  const [hover, setHover] = useState(null);
  const press = (k) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(k);
    }
  };
  const on = (k) => active === k;
  const lift = (k) => (on(k) || hover === k ? 1 : 0);
  return (
    <svg viewBox="0 0 1060 860" className="mx-auto h-auto w-full max-w-[1000px]" role="group" aria-label="Community engagement wheel: the adolescent, the people and institutions around them, and the community volunteers who facilitate">
      {/* curved heading around the top */}
      <defs>
        <path id="ce-arc" d={`M ${CX - 384} ${CY} A 384 384 0 0 1 ${CX + 384} ${CY}`} />
      </defs>
      <text className="fill-brand-red" style={{ fontSize: 19, fontWeight: 800, letterSpacing: "0.22em" }}>
        <textPath href="#ce-arc" startOffset="50%" textAnchor="middle">
          FACILITATED BY COMMUNITY VOLUNTEERS
        </textPath>
      </text>

      {/* outer ring: the five volunteer roles (second circle) */}
      {ROLES.map((r) => {
        const a1 = r.angle - 36;
        const a2 = r.angle + 36;
        const [lx, ly] = pt((R_INNER + R_OUTER) / 2 + 1, r.angle);
        return (
          <g
            key={r.key}
            role="button"
            tabIndex={0}
            aria-pressed={on(r.key)}
            aria-label={r.title}
            onClick={() => setActive(r.key)}
            onKeyDown={press(r.key)}
            onMouseEnter={() => setHover(r.key)}
            onMouseLeave={() => setHover(null)}
            className="cursor-pointer outline-none"
          >
            <path d={segment(R_INNER + 3, R_OUTER, a1 + 0.6, a2 - 0.6)} fill={lift(r.key) ? r.strong : r.fill} stroke="#fff" strokeWidth="3" style={{ transition: "fill .25s" }} />
            <text x={lx} y={ly - (r.label.length - 1) * 11 + 6} textAnchor="middle" fill="#1A1A1A" style={{ fontSize: 19, fontWeight: 800 }}>
              {r.label.map((l, i) => (
                <tspan key={l} x={lx} dy={i === 0 ? 0 : 23}>
                  {l}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* inner ring: school level (top) */}
      <g
        role="button"
        tabIndex={0}
        aria-pressed={on("school")}
        aria-label="Parents, headmasters and teachers: Child Cabinet and School Management Committees"
        onClick={() => setActive("school")}
        onKeyDown={press("school")}
        onMouseEnter={() => setHover("school")}
        onMouseLeave={() => setHover(null)}
        className="cursor-pointer outline-none"
      >
        <path d={segment(R_CENTER + 3, R_INNER, SCHOOL_FROM, SCHOOL_TO)} fill={lift("school") ? "#FFCC04" : "#FFF1BF"} stroke="#fff" strokeWidth="3" style={{ transition: "fill .25s" }} />
        {[
          ["Parents", -126, 172],
          ["HMs", -90, 142],
          ["Teachers", -54, 172],
        ].map(([t, a, r]) => {
          const [x, y] = pt(r, a);
          return (
            <text key={t} x={x} y={y + 6} textAnchor="middle" fill="#1A1A1A" style={{ fontSize: 22, fontWeight: 800 }}>
              {t}
            </text>
          );
        })}
      </g>

      {/* inner ring: institutions (the rest) */}
      <g
        role="button"
        tabIndex={0}
        aria-pressed={on("inst")}
        aria-label="Institutions and government bodies"
        onClick={() => setActive("inst")}
        onKeyDown={press("inst")}
        onMouseEnter={() => setHover("inst")}
        onMouseLeave={() => setHover(null)}
        className="cursor-pointer outline-none"
      >
        <path d={segment(R_CENTER + 3, R_INNER, SCHOOL_TO, SCHOOL_FROM + 360)} fill={lift("inst") ? "#BFD8E6" : "#E3EEF4"} stroke="#fff" strokeWidth="3" style={{ transition: "fill .25s" }} />
        {INSTITUTIONS.map((it, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          return (
            <text key={it.short} x={CX + (col === 0 ? -78 : 78)} y={CY + 118 + row * 27} textAnchor="middle" fill="#1A1A1A" style={{ fontSize: 17, fontWeight: 700 }}>
              {it.short}
            </text>
          );
        })}
      </g>

      {/* centre: the adolescent */}
      <circle cx={CX} cy={CY} r={R_CENTER} fill="#fff" stroke="#E12228" strokeWidth="5" />
      <g stroke="#E12228" strokeWidth="6" strokeLinecap="round" fill="none">
        <circle cx={CX} cy={CY - 24} r="15" />
        <path d={`M ${CX} ${CY - 8} V ${CY + 24} M ${CX - 22} ${CY + 6} H ${CX + 22} M ${CX} ${CY + 24} L ${CX - 16} ${CY + 52} M ${CX} ${CY + 24} L ${CX + 16} ${CY + 52}`} />
      </g>

      {/* callouts from the sketch */}
      <g role="button" tabIndex={0} aria-label="SMC and Bal Panchayat" onClick={() => setActive("school")} onKeyDown={press("school")} className="cursor-pointer outline-none">
        <line x1="880" y1="292" x2="618" y2="292" stroke="#1A1A1A" strokeWidth="3" />
        <path d="M 640 280 L 618 292 L 640 304" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="896" y="288" fill="#1A1A1A" style={{ fontSize: 22, fontWeight: 800 }}>SMC</text>
        <text x="896" y="316" fill="#1A1A1A" style={{ fontSize: 22, fontWeight: 800 }}>Bal Panchayat</text>
      </g>
      <g role="button" tabIndex={0} aria-label="Coordinate" onClick={() => setActive("inst")} onKeyDown={press("inst")} className="cursor-pointer outline-none">
        <line x1="880" y1="520" x2="640" y2="520" stroke="#1A1A1A" strokeWidth="3" />
        <path d="M 662 508 L 640 520 L 662 532" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="896" y="528" fill="#1A1A1A" style={{ fontSize: 22, fontWeight: 800 }}>Coordinate</text>
      </g>
    </svg>
  );
}

/* the text on the right (or below) that changes with the click */
function Panel({ active }) {
  const role = ROLES.find((r) => r.key === active);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: EASE }}
        className={active === "school" ? "grid gap-5 md:grid-cols-2" : "mx-auto max-w-3xl"}
      >
        {active === "school" &&
          SCHOOL_CARDS.map((c) => <InfoCard key={c.title} title={c.title} line={c.line} text={c.text} />)}
        {active === "inst" && (
          <InfoCard title="Institutions and governance" text={INSTITUTION_TEXT}>
            <ul className="mt-4 flex flex-wrap gap-2">
              {INSTITUTIONS.map((i) => (
                <li key={i.short} className="rounded-full border border-gray-300/80 bg-[#F7F7F5] px-3 py-1 text-[15px] font-medium text-[#1A1A1A]/85">
                  {i.full}
                </li>
              ))}
            </ul>
          </InfoCard>
        )}
        {role && <InfoCard title={role.title} line={role.line} text={role.text} accent={role.strong} />}
      </motion.div>
    </AnimatePresence>
  );
}

function InfoCard({ title, line, text, accent = "#E12228", children }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
      <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: accent }} />
      <h3 className="text-xl font-extrabold leading-snug text-[#1A1A1A] md:text-2xl">{title}</h3>
      {line && <p className="mt-3 text-lg font-bold leading-snug text-[#1A1A1A]">{line}</p>}
      <p className="mt-3 text-[17px] leading-relaxed text-[#1A1A1A]/85">{text}</p>
      {children}
    </article>
  );
}

/* phones: the same two circles as tappable groups (the drawn wheel is too small to read) */
function PhoneCircles({ active, setActive }) {
  const chip = (k, label, tone) => (
    <button
      key={k}
      type="button"
      onClick={() => setActive(k)}
      aria-pressed={active === k}
      className={`rounded-full border px-4 py-2 text-[15px] font-bold transition ${
        active === k ? "border-[#1A1A1A] bg-[#1A1A1A] text-white" : `border-gray-300 ${tone} text-[#1A1A1A]`
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">Around the adolescent</p>
        <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/60">At home and in school</p>
        <div className="mt-2 flex flex-wrap gap-2">{chip("school", "Parents · HMs · Teachers · SMC · Bal Panchayat", "bg-[#FFF1BF]")}</div>
        <p className="mt-4 text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/60">Institutions (coordinate)</p>
        <div className="mt-2 flex flex-wrap gap-2">{chip("inst", INSTITUTIONS.map((i) => i.short).join(" · "), "bg-[#E3EEF4]")}</div>
      </div>
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">Facilitated by community volunteers</p>
        <div className="mt-3 flex flex-wrap gap-2">{ROLES.map((r) => chip(r.key, r.title, ""))}</div>
      </div>
    </div>
  );
}

/* bold words in the paragraphs are the words used on the circles */
const B = ({ children }) => <strong className="font-extrabold text-[#1A1A1A]">{children}</strong>;

function WheelSection() {
  const [active, setActive] = useState("school");
  const panelRef = useRef(null);
  const choose = (k) => {
    setActive(k);
    requestAnimationFrame(() => {
      const el = panelRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.65 || r.bottom < 80) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return (
    <section className="overflow-hidden bg-[#F7F7F5] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeUp>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">
              To translate into action across our communities, we work closely with<B> stakeholders </B>who directly shape an adolescent’s daily environment. This begins with<B> parents, teachers, and </B>strengthening support at home and within schools through Bal panchayat and<B> School Management Committees (SMCs)</B>. At the institutional and governance level, we collaborate with<B> Urban local bodies</B>, <B>Panchayati Raj Institutions (PRIs), ICDS/Anganwadi workers, Village Education Committees (VECs), Village Child Protection Committees (VCPCs), Child Welfare Committees (CWCs), and block- and district-level government officials</B> to build shared accountability and ensure child protection, education, and adolescent well-being remain community-owned priorities.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">
              To support stakeholders on the ground, we nurture a dedicated<B> cadre of community volunteers </B>such as<B> Girl Champions, Goalkeepers, Community Youth Leaders (CYLs), Community Coordinators (CCs), and Young Leaders </B>— who work alongside families and local institutions to sustain participation, mentor peers, and drive lasting change from within.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12">
          <FadeUp>
            <div className="hidden lg:block">
              <Wheel active={active} setActive={choose} />
            </div>
            <div className="lg:hidden">
              <PhoneCircles active={active} setActive={choose} />
            </div>
          </FadeUp>
          {/* the text for whatever was clicked: it scrolls into view if it is out of sight */}
          <div ref={panelRef} className="mt-8 scroll-mt-28 md:mt-10">
            <Panel active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OutreachSection() {
  const shown = OUTREACH.filter((o) => o.to != null);
  if (!shown.length) return null;
  return <StatsBand eyebrow={null} title="Community Outreach" stats={shown} cols={4} compact slider slideSeconds={4} />;
}

function TestimonialsSection() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-20">
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

export default function CommunityEngagement() {
  usePageMeta({
    title: "Community Engagement: Safe Spaces for Adolescents | Magic Bus",
    description:
      "Magic Bus works with parents, schools, local institutions and community volunteers so that adolescents are safe, supported and empowered to thrive.",
  });
  return (
    <Layout>
      <HeroBanner
        badgeText="Adolescent Programme"
        image="/ngo-images/5.jpeg"
        title="Community Engagement"
        subtitle="Adolescent’s growth does not happen in isolation — it is shaped every day by their family, school, and neighbourhood."
        ctas={[{ href: "#community-wheel", label: "Explore the wheel", variant: "primary", showArrow: true }]}
      />

      <section className="overflow-hidden bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <FadeUp>
            <div className="space-y-6 text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">
              <p>
                Adolescent’s growth does not happen in isolation — it is shaped every day by their family, school, and neighbourhood. Grounded in Bronfenbrenner’s Ecological Systems Model, our work recognises that every young person is influenced by interconnected layers of support, from parents and peers to schools, local institutions, and wider community systems. Without a strong, supportive environment across these everyday spaces, lasting change cannot take place.
              </p>
              <p>
                That is why, at Magic Bus, Community Engagement is a process of working in partnership with communities to enable them to sustainably address issues affecting adolescent well-being and reduce their socio-economic vulnerabilities. By equipping parents, local leaders, and young role models to take ownership, we transform everyday environments into spaces where adolescents are safe, supported, and empowered to thrive.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <div id="community-wheel">
        <WheelSection />
      </div>
      <OutreachSection />
      <TestimonialsSection />
    </Layout>
  );
}
