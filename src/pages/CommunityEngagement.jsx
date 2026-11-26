import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, GraduationCap, Heart, Landmark, MousePointerClick, Users } from "lucide-react";
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
    fill: "#21BDEA",
    ink: "#1A1A1A",
  },
  {
    key: "cc",
    label: ["Community", "Coordinators", "(CCs)"],
    title: "Community Coordinator",
    line: "A Community Coordinator (CC) is a dedicated volunteer who brings people together, supports community initiatives, addresses local needs, and promotes unity, well-being, and positive development.",
    text: "A Community Coordinator (CC) is a dedicated and selfless volunteer committed to the overall development and well-being of the community. They actively support community initiatives, encourage participation, and bring people together for a common cause. Through their leadership, teamwork, and commitment, they help address community needs and promote positive change. Their ultimate goal is to build a stronger, happier, and more united community.",
    angle: -46,
    fill: "#A6CE39",
    ink: "#1A1A1A",
  },
  {
    key: "cyl",
    label: ["Community", "Youth", "Leaders", "(CYLs)"],
    title: "Community Youth Leader",
    line: "A Community Youth Leader is a volunteer dedicated to community welfare and development.",
    text: "A Community Youth Leader is an individual who voluntarily works for the welfare and development of the community, supporting programme activities and responding to the needs of the community with dedication and a spirit of service.",
    angle: 26,
    fill: "#FFCC04",
    ink: "#1A1A1A",
  },
  {
    key: "gk",
    label: ["Goalkeepers"],
    title: "Goalkeeper",
    line: "A Goalkeeper motivates youth through sports and actively contributes to community development.",
    text: "A Goalkeeper voluntarily works for the well-being of the community. They encourage adolescents through sports and recreational activities while contributing to positive social change and community development.",
    angle: 98,
    fill: "#E01085",
    ink: "#FFFFFF",
  },
  {
    key: "gc",
    label: ["Girl", "Champions", "(GCs)"],
    title: "Girl Champion",
    line: "Creating confident, connected, and capable adolescent girls who can make informed choices and influence their own futures.",
    text: "The Girl Champion approach aims to create a supportive ecosystem in which adolescent girls develop confidence, agency, peer networks, and practical skills to make informed decisions, navigate challenges, access opportunities, and participate meaningfully in their families, schools, and communities.",
    angle: 170,
    fill: "#FF7A1A",
    ink: "#1A1A1A",
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
const R_CENTER = 66;
const R_INNER = 228;
const R_OUTER = 394;
const NAVY = "#1B3A6B";
const SCHOOL_COLOR = "#E12228";
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

/* the child in the middle of the wheel (drawn around 0,0) */
function ChildIcon({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M -7 22 V 42 M 7 22 V 42" stroke={NAVY} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M -14 -2 L -28 -16 M 14 -2 L 28 -16" stroke="#F2B38B" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="-15" y="-8" width="30" height="34" rx="10" fill="#E12228" />
      <circle cx="0" cy="-24" r="14" fill="#F2B38B" />
      <path d="M -14.5 -26 A 14.5 14.5 0 0 1 14.5 -26 Q 0 -36 -14.5 -26 Z" fill="#3B2A20" />
      <circle cx="-5" cy="-23" r="1.8" fill="#1A1A1A" />
      <circle cx="5" cy="-23" r="1.8" fill="#1A1A1A" />
      <path d="M -5 -17 Q 0 -13 5 -17" stroke="#1A1A1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* rows of the institutions wedge (a tapering pyramid that follows the shape of the wedge) */
const INST_ROWS = [
  [["Urban Local Bodies", 0]],
  [["District Officials", -92], ["Block Officials", 92]],
  [["ICDS / Anganwadi", 0]],
  [["CWCs", -62], ["VCPCs", 62]],
  [["VECs", -52], ["PRIs", 52]],
];

function Wheel({ active, setActive }) {
  const [hover, setHover] = useState(null);
  const press = (k) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(k);
    }
  };
  const on = (k) => active === k;
  /* one clickable segment: the chosen one pops out a little and gets a shadow, the hovered one brightens */
  const seg = (k, aria, mid, d, fill, children) => {
    const out = on(k) ? 9 : 0;
    return (
      <g
        key={k}
        role="button"
        tabIndex={0}
        aria-pressed={on(k)}
        aria-label={aria}
        onClick={() => setActive(k)}
        onKeyDown={press(k)}
        onMouseEnter={() => setHover(k)}
        onMouseLeave={() => setHover(null)}
        className="cursor-pointer outline-none"
        style={{
          transform: `translate(${Math.cos(rad(mid)) * out}px, ${Math.sin(rad(mid)) * out}px)`,
          transition: "transform .35s cubic-bezier(.16,1,.3,1), filter .25s",
          filter: on(k) ? "drop-shadow(0 8px 12px rgba(0,0,0,.30))" : hover === k ? "brightness(1.1)" : "none",
        }}
      >
        <path d={d} fill={fill} stroke="#fff" strokeWidth="3" />
        {children}
      </g>
    );
  };
  return (
    <svg viewBox="0 0 860 860" className="mx-auto h-auto w-full max-w-[780px] xl:max-w-none" role="group" aria-label="Community engagement wheel: the adolescent, the people and institutions around them, and the community volunteers who facilitate">
      {/* curved heading around the top */}
      <defs>
        <path id="ce-arc" d={`M ${CX - 410} ${CY} A 410 410 0 0 1 ${CX + 410} ${CY}`} />
      </defs>
      <text className="fill-brand-red" style={{ fontSize: 19, fontWeight: 800, letterSpacing: "0.22em" }}>
        <textPath href="#ce-arc" startOffset="50%" textAnchor="middle">
          FACILITATED BY COMMUNITY VOLUNTEERS
        </textPath>
      </text>

      {/* outer ring: the five volunteer roles */}
      {ROLES.map((r) => {
        const [lx, ly] = pt((R_INNER + R_OUTER) / 2 + 1, r.angle);
        const n = r.label.length;
        return seg(
          r.key,
          r.title,
          r.angle,
          segment(R_INNER + 3, R_OUTER, r.angle - 35.4, r.angle + 35.4),
          r.fill,
          <text x={lx} y={ly - ((n - 1) * 25) / 2 + 7} textAnchor="middle" fill={r.ink} style={{ fontSize: 21, fontWeight: 800 }} pointerEvents="none">
            {r.label.map((l, i) => (
              <tspan key={l} x={lx} dy={i === 0 ? 0 : 25}>
                {l}
              </tspan>
            ))}
          </text>,
        );
      })}

      {/* inner ring, top: parents, HMs, teachers */}
      {seg(
        "school",
        "Parents, headmasters and teachers: Child Cabinet and School Management Committees",
        -90,
        segment(R_CENTER + 3, R_INNER, SCHOOL_FROM, SCHOOL_TO),
        SCHOOL_COLOR,
        [
          ["Parents", -126, 168],
          ["HMs", -90, 140],
          ["Teachers", -54, 168],
        ].map(([t, a, r]) => {
          const [x, y] = pt(r, a);
          return (
            <text key={t} x={x} y={y + 8} textAnchor="middle" fill="#fff" style={{ fontSize: 24, fontWeight: 800 }} pointerEvents="none">
              {t}
            </text>
          );
        }),
      )}

      {/* inner ring, rest: institutions */}
      {seg(
        "inst",
        "Institutions and government bodies",
        90,
        segment(R_CENTER + 3, R_INNER, SCHOOL_TO, SCHOOL_FROM + 360),
        NAVY,
        INST_ROWS.map((row, i) =>
          row.map(([name, dx]) => (
            <text key={name} x={CX + dx} y={CY + 98 + i * 27} textAnchor="middle" fill="#fff" style={{ fontSize: 19, fontWeight: 700 }} pointerEvents="none">
              {name}
            </text>
          )),
        ),
      )}

      {/* centre: the adolescent */}
      <circle cx={CX} cy={CY} r={R_CENTER} fill="#fff" stroke="#E12228" strokeWidth="5" />
      <ChildIcon x={CX} y={CY - 1} scale={1.15} />
    </svg>
  );
}

const META = {
  school: { tag: "At home and in school · SMC · Bal Panchayat", color: SCHOOL_COLOR, ink: "#fff" },
  inst: { tag: "Coordinate with institutions", color: NAVY, ink: "#fff" },
};

/* the text on the right (or below) that changes with the click */
function Panel({ active }) {
  const role = ROLES.find((r) => r.key === active);
  const meta = role ? { tag: "Community volunteer", color: role.fill, ink: role.ink } : META[active];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="space-y-5"
      >
        <span className="inline-flex rounded-full px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.14em]" style={{ background: meta.color, color: meta.ink }}>
          {meta.tag}
        </span>
        {active === "school" &&
          SCHOOL_CARDS.map((c, i) => <InfoCard key={c.title} Icon={i === 0 ? Users : GraduationCap} title={c.title} line={c.line} text={c.text} accent={SCHOOL_COLOR} />)}
        {active === "inst" && (
          <InfoCard Icon={Landmark} title="Institutions and governance" text={INSTITUTION_TEXT} accent={NAVY}>
            <ul className="mt-4 flex flex-wrap gap-2">
              {INSTITUTIONS.map((i) => (
                <li key={i.short} className="rounded-full px-3 py-1 text-[15px] font-semibold" style={{ background: `${NAVY}14`, color: NAVY }}>
                  {i.full}
                </li>
              ))}
            </ul>
          </InfoCard>
        )}
        {role && <InfoCard Icon={Heart} title={role.title} line={role.line} text={role.text} accent={role.fill} ink={role.ink} />}
      </motion.div>
    </AnimatePresence>
  );
}

function InfoCard({ Icon, title, line, text, accent = "#E12228", ink = "#fff", children }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-gray-200 p-6 shadow-sm md:p-7" style={{ background: `linear-gradient(180deg, ${accent}22 0%, #ffffff 42%)` }}>
      <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: accent }} />
      <div className="flex items-start gap-4">
        {Icon && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm" style={{ background: accent, color: ink }}>
            <Icon className="h-6 w-6" />
          </span>
        )}
        <h3 className="pt-1 text-xl font-extrabold leading-snug text-[#1A1A1A] md:text-2xl">{title}</h3>
      </div>
      {line && <p className="mt-4 text-lg font-bold leading-snug text-[#1A1A1A]">{line}</p>}
      <p className="mt-3 text-[17px] leading-relaxed text-[#1A1A1A]/85">{text}</p>
      {children}
    </article>
  );
}

/* phones and tablets: the same circles as tappable groups (the drawn wheel is too small to read there) */
function PhoneCircles({ active, setActive }) {
  const chip = (k, label, color, ink = "#fff") => (
    <button
      key={k}
      type="button"
      onClick={() => setActive(k)}
      aria-pressed={active === k}
      className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-left text-[15px] font-bold transition ${
        active === k ? "border-[#1A1A1A] bg-[#1A1A1A] text-white" : "border-transparent text-[#1A1A1A]"
      }`}
      style={active === k ? undefined : { background: `${color}26` }}
    >
      <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: color }} />
      {label}
    </button>
  );
  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">Around the adolescent</p>
        <p className="mt-3 text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/60">At home and in school</p>
        <div className="mt-2 flex flex-wrap gap-2">{chip("school", "Parents · HMs · Teachers · SMC · Bal Panchayat", SCHOOL_COLOR)}</div>
        <p className="mt-4 text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/60">Institutions (coordinate)</p>
        <div className="mt-2 flex flex-wrap gap-2">{chip("inst", INSTITUTIONS.map((i) => i.short).join(" · "), NAVY)}</div>
      </div>
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-red">Facilitated by community volunteers</p>
        <div className="mt-3 flex flex-wrap gap-2">{ROLES.map((r) => chip(r.key, r.title, r.fill))}</div>
      </div>
    </div>
  );
}

/* bold words in the paragraphs are the words used on the circles */
const B = ({ children }) => <strong className="font-extrabold text-[#1A1A1A]">{children}</strong>;

/* a small round chip that jumps to that part of the wheel */
function JumpChip({ children, color, ink = "#1A1A1A", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-3.5 py-1.5 text-[15px] font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: color, color: ink }}
    >
      {children}
    </button>
  );
}

function WheelSection() {
  const [active, setActive] = useState("school");
  const panelRef = useRef(null);
  const wheelRef = useRef(null);
  /* a click on the wheel: show the text, and scroll to it only when it is stacked below the wheel and out of sight */
  const choose = (k) => {
    setActive(k);
    requestAnimationFrame(() => {
      const el = panelRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.65 || r.bottom < 80) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  /* a click on a chip in the cards above: go to the wheel and open that part */
  const jump = (k) => {
    setActive(k);
    wheelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const card = "relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8";
  const badge = "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm";
  return (
    <section className="overflow-x-clip bg-[#F7F7F5] py-12 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <FadeUp className="h-full">
            <div className={card}>
              <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-red" />
              <div className="flex items-center gap-4">
                <span className={`${badge} bg-brand-red`}>
                  <Users className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-extrabold leading-tight text-[#1A1A1A] md:text-3xl">The people around the adolescent</h2>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-[#1A1A1A]/85">
                To translate into action across our communities, we work closely with<B> stakeholders </B>who directly shape an adolescent’s daily environment. This begins with<B> parents, teachers, and </B>strengthening support at home and within schools through Bal panchayat and<B> School Management Committees (SMCs)</B>. At the institutional and governance level, we collaborate with<B> Urban local bodies</B>, <B>Panchayati Raj Institutions (PRIs), ICDS/Anganwadi workers, Village Education Committees (VECs), Village Child Protection Committees (VCPCs), Child Welfare Committees (CWCs), and block- and district-level government officials</B> to build shared accountability and ensure child protection, education, and adolescent well-being remain community-owned priorities.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Parents", "HMs", "Teachers", "SMCs", "Bal Panchayat"].map((t) => (
                  <JumpChip key={t} color={SCHOOL_COLOR} ink="#fff" onClick={() => jump("school")}>
                    {t}
                  </JumpChip>
                ))}
                {INSTITUTIONS.map((i) => (
                  <JumpChip key={i.short} color={NAVY} ink="#fff" onClick={() => jump("inst")}>
                    {i.short}
                  </JumpChip>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.08} className="h-full">
            <div className={card}>
              <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-yellow" />
              <div className="flex items-center gap-4">
                <span className={`${badge} bg-brand-yellow !text-[#1A1A1A]`}>
                  <Heart className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-extrabold leading-tight text-[#1A1A1A] md:text-3xl">Community volunteers</h2>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-[#1A1A1A]/85">
                To support stakeholders on the ground, we nurture a dedicated<B> cadre of community volunteers </B>such as<B> Girl Champions, Goalkeepers, Community Youth Leaders (CYLs), Community Coordinators (CCs), and Young Leaders </B>— who work alongside families and local institutions to sustain participation, mentor peers, and drive lasting change from within.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <JumpChip key={r.key} color={r.fill} ink={r.ink} onClick={() => jump(r.key)}>
                    {r.title}
                  </JumpChip>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <div ref={wheelRef} className="mt-12 scroll-mt-24 grid items-start gap-8 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] xl:gap-12">
          <FadeUp className="xl:sticky xl:top-24">
            <div className="hidden lg:block">
              <Wheel active={active} setActive={choose} />
            </div>
            <div className="lg:hidden">
              <PhoneCircles active={active} setActive={choose} />
            </div>
          </FadeUp>
          {/* the text for whatever was clicked */}
          <div ref={panelRef} className="scroll-mt-28">
            <p className="mb-4 hidden items-center gap-2 text-[15px] font-semibold text-[#1A1A1A]/60 lg:flex">
              <MousePointerClick className="h-5 w-5 text-brand-red" /> Click any part of the wheel to read about it
            </p>
            <Panel active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Bronfenbrenner's layers around the adolescent: parents and peers, schools, local institutions, wider community systems */
const LAYERS = [
  { label: "Wider community systems", r: 300, fill: "#21BDEA" },
  { label: "Local institutions", r: 250, fill: "#A6CE39" },
  { label: "Schools", r: 200, fill: "#FFCC04" },
  { label: "Parents and peers", r: 150, fill: "#FF8A3D" },
];

function LayersGraphic() {
  return (
    <svg viewBox="0 0 640 340" className="mx-auto h-auto w-full max-w-[600px]" role="img" aria-label="Layers of support around an adolescent: parents and peers, schools, local institutions and wider community systems">
      <defs>
        {LAYERS.map((l, i) => {
          const r = l.r - 25 - 7;
          return <path key={l.label} id={`ce-layer-${i}`} d={`M ${320 - r} 320 A ${r} ${r} 0 0 1 ${320 + r} 320`} />;
        })}
      </defs>
      {LAYERS.map((l, i) => (
        <motion.g key={l.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
          <path d={`M ${320 - l.r} 320 A ${l.r} ${l.r} 0 0 1 ${320 + l.r} 320 Z`} fill={l.fill} stroke="#fff" strokeWidth="4" />
          <text fill="#1A1A1A" style={{ fontSize: 25, fontWeight: 800 }}>
            <textPath href={`#ce-layer-${i}`} startOffset="50%" textAnchor="middle">
              {l.label}
            </textPath>
          </text>
        </motion.g>
      ))}
      <path d="M 220 320 A 100 100 0 0 1 420 320 Z" fill="#fff" stroke="#E12228" strokeWidth="5" />
      <ChildIcon x={320} y={270} scale={1.05} />
    </svg>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <FadeUp>
              <div className="space-y-6 text-lg leading-relaxed text-[#1A1A1A]/85 md:text-xl">
                <p>
                  Adolescent’s growth does not happen in isolation — it is shaped every day by their family, school, and neighbourhood. Grounded in <B>Bronfenbrenner’s Ecological Systems Model</B>, our work recognises that every young person is influenced by interconnected layers of support, from parents and peers to schools, local institutions, and wider community systems. Without a strong, supportive environment across these everyday spaces, lasting change cannot take place.
                </p>
                <p>
                  That is why, at Magic Bus, Community Engagement is a process of working in partnership with communities to enable them to sustainably address issues affecting adolescent well-being and reduce their socio-economic vulnerabilities. By equipping parents, local leaders, and young role models to take ownership, we transform everyday environments into spaces where adolescents are safe, supported, and empowered to thrive.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-[#F7F7F5] p-5 shadow-sm ring-1 ring-gray-200/70 sm:p-8">
                <LayersGraphic />
                <p className="mt-4 text-center text-[15px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A]/60">Layers of support around every adolescent</p>
              </div>
            </FadeUp>
          </div>
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
