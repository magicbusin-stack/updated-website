import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// Coded version of the Adolescent Programme "Implementation Model" flowchart.
// It is drawn on a fixed 1054px-wide canvas (so the connector lines always meet the boxes) and scaled to fit the screen.
const CANVAS_W = 1054;
const MIN_SCALE = 0.62; // on very small screens the chart scrolls sideways instead of shrinking further

const TONES = {
  pink: { head: "#FDE2EC", card: "#FFF0F5", stroke: "#F49DBF" },
  blue: { head: "#E4EDFE", card: "#F0F5FF", stroke: "#A8C5FA" },
};
const SHADOW = "shadow-[0_10px_25px_-4px_rgba(0,0,0,0.08),0_4px_10px_-3px_rgba(0,0,0,0.04)]";
const SHADOW_HOVER = "hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.14),0_10px_18px_-4px_rgba(0,0,0,0.08)]";

function Box({ nodeId, reg, tone, level = "card", side, onActive, className = "", children }) {
  const t = TONES[tone];
  return (
    <div
      ref={nodeId && reg ? reg(nodeId) : undefined}
      onMouseEnter={() => onActive && onActive(side)}
      onMouseLeave={() => onActive && onActive(null)}
      className={`relative flex flex-col items-center justify-center rounded-3xl border text-center transition-all duration-200 hover:z-40 hover:-translate-y-1 hover:scale-[1.02] ${SHADOW} ${SHADOW_HOVER} ${className}`}
      style={{ background: level === "head" ? t.head : t.card, borderColor: t.stroke }}
    >
      {children}
    </div>
  );
}

const Title = ({ children, className = "text-base" }) => <h4 className={`font-bold leading-tight text-neutral-900 ${className}`}>{children}</h4>;
const Sub = ({ children, className = "text-[11px] mt-1" }) => <p className={`leading-snug text-neutral-600 ${className}`}>{children}</p>;

export default function ImplementationModelChart({ onActive }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [innerH, setInnerH] = useState(980);
  const nodes = useRef({});
  const [lines, setLines] = useState({ paths: [], dots: [] });
  const reg = (id) => (el) => {
    if (el) nodes.current[id] = el;
  };

  useEffect(() => {
    const measure = () => {
      const w = wrapRef.current ? wrapRef.current.clientWidth : CANVAS_W;
      setScale(Math.max(MIN_SCALE, Math.min(1, w / CANVAS_W)));
      if (innerRef.current) setInnerH(innerRef.current.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // Work out where every connector starts and ends from the real position of the boxes, so the lines always touch them.
  useLayoutEffect(() => {
    const compute = () => {
      const inner = innerRef.current;
      if (!inner) return;
      const R = (id) => {
        const el = nodes.current[id];
        let x = 0;
        let y = 0;
        let e = el;
        while (e && e !== inner) {
          x += e.offsetLeft;
          y += e.offsetTop;
          e = e.offsetParent;
        }
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        return { l: x, r: x + w, t: y, b: y + h, cx: x + w / 2, cy: y + h / 2 };
      };
      const curve = (sx, sy, ex, ey) => `M ${sx} ${sy} C ${sx + (ex - sx) * 0.55} ${sy}, ${ex} ${ey - (ey - sy) * 0.55}, ${ex} ${ey}`;
      const down = (a, b) => `M ${a.cx} ${a.b + 3} L ${a.cx} ${b.t - 3}`;
      const n = {};
      Object.keys(nodes.current).forEach((k) => {
        n[k] = R(k);
      });
      const paths = [];
      const dots = [];
      // root -> direct / indirect
      dots.push([n.root.l, n.root.cy], [n.root.r, n.root.cy]);
      paths.push(curve(n.root.l, n.root.cy, n.direct.cx, n.direct.t - 3), curve(n.root.r, n.root.cy, n.indirect.cx, n.indirect.t - 3));
      // direct -> in community / in school
      const icX = n.inCommunity.l + 26;
      const isX = n.inSchool.r - 40;
      dots.push([n.direct.l, n.direct.cy], [n.direct.r, n.direct.cy]);
      paths.push(curve(n.direct.l, n.direct.cy, icX, n.inCommunity.t - 3), curve(n.direct.r, n.direct.cy, isX, n.inSchool.t - 3));
      // indirect -> design & development / delivery
      const ddX = n.design.l + 26;
      const dlX = n.delivery.r - 40;
      dots.push([n.indirect.l, n.indirect.cy], [n.indirect.r, n.indirect.cy]);
      paths.push(curve(n.indirect.l, n.indirect.cy, ddX, n.design.t - 3), curve(n.indirect.r, n.indirect.cy, dlX, n.delivery.t - 3));
      // in school -> adolescents
      paths.push(`M ${n.inSchool.cx} ${n.inSchool.b + 3} L ${n.inSchool.cx} ${n.adoD.t - 3}`);
      // in community: rail down the left side with a short arrow into each stakeholder
      const railX = n.inCommunity.l + 26;
      const stakeholders = ["parents", "head", "smc", "panchayat"].map((k) => n[k]);
      dots.push([railX, n.inCommunity.b + 3]);
      paths.push(`M ${railX} ${n.inCommunity.b + 3} L ${railX} ${stakeholders[3].cy}`);
      stakeholders.forEach((c) => paths.push(`M ${railX} ${c.cy} L ${c.l - 3} ${c.cy}`));
      // adolescents (direct) -> life skills / FLN / employability, rail on the right
      const rail2 = n.lifeSkills.r + 12;
      const sx = n.adoD.r - 30;
      dots.push([sx, n.adoD.b + 3]);
      paths.push(`M ${sx} ${n.adoD.b + 3} L ${sx} ${n.adoD.b + 20} L ${rail2} ${n.adoD.b + 20} L ${rail2} ${n.employ.cy}`);
      [n.lifeSkills, n.fln, n.employ].forEach((c) => paths.push(`M ${rail2} ${c.cy} L ${c.r + 3} ${c.cy}`));
      paths.push(down(n.lifeSkills, n.fln), down(n.fln, n.employ));
      // indirect columns
      paths.push(down(n.design, n.scert), down(n.scert, n.curriculum));
      paths.push(down(n.delivery, n.trainer), down(n.trainer, n.master), down(n.master, n.teachers), down(n.teachers, n.adoI));
      setLines({ paths, dots });
    };
    compute();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(compute);
  }, []);

  const D = (props) => <Box tone="pink" side={0} onActive={onActive} reg={reg} {...props} />;
  const I = (props) => <Box tone="blue" side={1} onActive={onActive} reg={reg} {...props} />;

  return (
    <div ref={wrapRef} className="w-full overflow-x-auto">
      <div style={{ width: CANVAS_W * scale, height: innerH * scale, margin: "0 auto" }}>
        <div
          ref={innerRef}
          role="img"
          aria-label="Adolescent Programme Implementation Model: a Direct Model implemented by the Magic Bus team in community and in school, and an Indirect Model implemented through partnership with the state school education department"
          className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          style={{ width: CANVAS_W, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          {/* connector lines */}
          <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <marker id="imc-arrow" markerWidth="6" markerHeight="6" orient="auto-start-reverse" refX="6" refY="5" viewBox="0 0 10 10">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#5A6474" />
              </marker>
            </defs>
            <g fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#imc-arrow)">
              {lines.paths.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
            <g fill="#525252">
              {lines.dots.map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.2} />
              ))}
            </g>
          </svg>

          <div className="relative z-10 flex flex-col items-center">
            {/* root */}
            <div ref={reg("root")} className={`mb-12 flex h-14 w-80 items-center justify-center rounded-full border-2 border-[#E9C736] bg-[#FFDE59] ${SHADOW}`}>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">Implementation Model</h3>
            </div>

            {/* Direct / Indirect */}
            <div className="mb-10 grid w-full grid-cols-2 gap-12">
              <div className="flex justify-center">
                <D nodeId="direct" level="head" className="w-[310px] p-5">
                  <h4 className="mb-1 text-xl font-bold text-neutral-900">Direct Model</h4>
                  <p className="text-xs font-medium leading-snug text-neutral-700">
                    Implemented on-ground
                    <br />
                    by Magic Bus team
                  </p>
                </D>
              </div>
              <div className="flex justify-center">
                <I nodeId="indirect" level="head" className="w-[310px] p-5">
                  <h4 className="mb-1 text-xl font-bold text-neutral-900">Indirect Model</h4>
                  <p className="text-xs font-medium leading-snug text-neutral-700">
                    Implemented through state school
                    <br />
                    education dept. partnership
                  </p>
                </I>
              </div>
            </div>

            <div className="grid w-full grid-cols-4 items-start gap-6">
              {/* column 1: in community */}
              <div className="flex flex-col items-center space-y-7">
                <D nodeId="inCommunity" level="head" className="h-[106px] w-full p-4">
                  <Title>In Community</Title>
                  <Sub className="mt-1 text-xs">
                    Engagement with
                    <br />
                    community stakeholders
                  </Sub>
                </D>
                <D nodeId="parents" className="h-[116px] w-[156px] p-3">
                  <Title>Parents</Title>
                </D>
                <D nodeId="head" className="h-[116px] w-[156px] p-3">
                  <Title>
                    Head
                    <br />
                    of School
                  </Title>
                </D>
                <D nodeId="smc" className="h-[126px] w-[156px] p-3">
                  <Title>
                    School
                    <br />
                    Mgmt.
                    <br />
                    Committee
                  </Title>
                </D>
                <D nodeId="panchayat" className="h-[160px] w-[156px] p-3">
                  <Title>
                    Panchayat
                    <br />
                    Raj Institution
                    <br />
                    or Ward
                  </Title>
                </D>
              </div>

              {/* column 2: in school */}
              <div className="flex flex-col items-center space-y-7">
                <D nodeId="inSchool" level="head" className="h-[106px] w-full p-4">
                  <Title>In School</Title>
                  <Sub className="mt-1 text-xs">
                    Programme
                    <br />
                    implementation
                  </Sub>
                </D>
                <D nodeId="adoD" className="h-[108px] w-full p-3">
                  <Title>Adolescents</Title>
                  <span className="text-xs font-medium text-neutral-700">
                    (6<sup>th</sup> to 12<sup>th</sup> Grade)
                  </span>
                </D>
                <D nodeId="lifeSkills" className="h-[116px] w-full p-3">
                  <Title>
                    Life Skills
                    <br />
                    Education
                  </Title>
                  <Sub>Activity-based sessions on the playground</Sub>
                </D>
                <D nodeId="fln" className="h-[138px] w-full p-3">
                  <Title className="text-sm">
                    Foundational Literacy
                    <br />
                    &amp; Numeracy
                  </Title>
                  <Sub>Education support in Community Learning Centers</Sub>
                </D>
                <D nodeId="employ" className="h-[160px] w-full p-3">
                  <Title className="mb-1 text-sm">Employability Education</Title>
                  <Sub className="text-[11px]">Digital &amp; Financial Literacy, Career Awareness &amp; Functional English</Sub>
                </D>
              </div>

              {/* column 3: design & development */}
              <div className="flex flex-col items-center space-y-7">
                <I nodeId="design" level="head" className="h-[106px] w-full p-4">
                  <Title>
                    Design &amp;
                    <br />
                    Development
                  </Title>
                  <Sub className="mt-1 text-xs">Life Skills programme</Sub>
                </I>
                <I nodeId="scert" className="h-[282px] w-full p-5">
                  <h4 className="mb-2 text-lg font-bold text-neutral-900">SCERT</h4>
                  <p className="max-w-[190px] text-xs leading-relaxed text-neutral-600">
                    Collaboration with state school education department to integrate Life Skills education
                  </p>
                </I>
                <I nodeId="curriculum" className="h-[296px] w-full p-4">
                  <h4 className="mb-2 text-base font-bold leading-snug text-neutral-900">
                    Curriculum
                    <br />
                    &amp; Training
                    <br />
                    Development
                  </h4>
                  <p className="text-[11px] leading-relaxed text-neutral-600">
                    Contextualised curriculum designed, training plan for govt. school teachers developed &amp; monitoring &amp; assessment
                    mechanisms facilitated
                  </p>
                </I>
              </div>

              {/* column 4: delivery */}
              <div className="flex flex-col items-center space-y-7">
                <I nodeId="delivery" level="head" className="h-[106px] w-full p-4">
                  <Title>Delivery</Title>
                  <Sub className="mt-1 text-xs">Life Skills programme</Sub>
                </I>
                <I nodeId="trainer" className="h-[120px] w-full p-3">
                  <Title className="text-sm">Magic Bus Trainer</Title>
                  <Sub>Equipped to impart Life Skills programme to Master Trainers across districts</Sub>
                </I>
                <I nodeId="master" className="h-[126px] w-full p-3">
                  <Title className="text-sm">Master Trainers</Title>
                  <Sub>Equipped to impart Life Skills programme to govt. school teachers</Sub>
                </I>
                <I nodeId="teachers" className="h-[126px] w-full p-3">
                  <Title className="text-sm">Govt. School Teachers</Title>
                  <Sub>Equipped to deliver Life Skills to adolescents</Sub>
                </I>
                <I nodeId="adoI" className="h-[146px] w-full p-3">
                  <Title className="text-sm">Adolescents</Title>
                  <span className="mb-1 text-xs font-semibold text-neutral-700">
                    (6<sup>th</sup> to 10<sup>th</sup> Grade)
                  </span>
                  <Sub>Engaged in Life Skills education on the playground &amp; in classrooms</Sub>
                </I>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
