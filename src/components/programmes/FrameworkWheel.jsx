import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ListChecks } from "lucide-react";

/* The framework wheel of the Youth Skilling and Connect With Work pages.
   It works and looks like the Life Skills Framework wheel on the Adolescent Programme page (EnablingEcosystemWheel):
   - hover (computer) or Tab shows a piece in the panel; clicking / tapping pins it;
   - the piece glows in its own colour, with a soft glow behind the wheel and a pulse around the centre;
   - on phones a row of chips above the wheel picks the piece (the labels inside the wheel are small);
   - the panel on the right has the same boxes, fonts and sizes: a coloured header card, and a numbered list
     whose items open to show their text (the first one is open to start with). */

const CX = 350;
const CY = 350;
const R_HUB = 112;
const R_IN = 122;
const R_OUT = 305;

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const pt = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.sin(a), CY - r * Math.cos(a)];
};

const sector = (r1, r2, a0, a1) => {
  const g = 0.9;
  const s = a0 + g;
  const e = a1 - g;
  const large = e - s > 180 ? 1 : 0;
  const [x1, y1] = pt(r2, s);
  const [x2, y2] = pt(r2, e);
  const [x3, y3] = pt(r1, e);
  const [x4, y4] = pt(r1, s);
  return `M${x1} ${y1} A${r2} ${r2} 0 ${large} 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 ${large} 0 ${x4} ${y4} Z`;
};

function Lines({ x, y, lines, size = 16, color = "#fff", weight = 700 }) {
  const start = y - ((lines.length - 1) * size * 1.15) / 2;
  return (
    <text x={x} y={start} textAnchor="middle" dominantBaseline="middle" fontSize={size} fontWeight={weight} fill={color} pointerEvents="none">
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.15}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

export default function FrameworkWheel({ data }) {
  const { hub, segments, ariaLabel } = data;
  const [pinned, setPinned] = useState("hub");
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState({ id: null, i: 0 }); // which list item is expanded in the panel
  const chipRefs = useRef({});
  const activeId = hovered || pinned;

  // keep the selected chip in view when a part of the wheel is tapped (phones)
  useEffect(() => {
    const el = chipRefs.current[pinned];
    if (el && el.offsetParent) el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [pinned]);

  const n = segments.length;
  const step = 360 / n;
  const shapes = [
    ...segments.map((sg, i) => ({
      ...sg,
      kind: "seg",
      a0: -step / 2 + i * step,
      a1: -step / 2 + (i + 1) * step,
    })),
    { id: "hub", kind: "hub" },
  ];

  const colorOf = (id) => (id === "hub" ? hub.color : segments.find((x) => x.id === id).color);

  // What the panel shows: the hub shows an overview, a segment shows its own skills.
  const info =
    activeId === "hub"
      ? {
          title: hub.title,
          color: hub.color,
          Icon: hub.icon,
          desc: hub.desc,
          list: segments.map((sg) => [sg.title, sg.items.length ? sg.items.map((it) => it[0]).join(" · ") : sg.desc]),
          listTitle: "What the programme covers",
        }
      : (() => {
          const sg = segments.find((x) => x.id === activeId);
          return { title: sg.title, color: sg.color, text: sg.text, Icon: sg.icon, desc: sg.desc, list: sg.items, listTitle: "Skills covered" };
        })();
  const openIdx = open.id === activeId ? open.i : 0;

  const interactive = (id, title) => ({
    role: "button",
    tabIndex: 0,
    "aria-label": title,
    "aria-pressed": pinned === id,
    onClick: () => setPinned(id),
    onMouseEnter: () => canHover() && setHovered(id),
    onMouseLeave: () => setHovered((h) => (h === id ? null : h)),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered((h) => (h === id ? null : h)),
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setPinned(id);
      }
    },
    style: { cursor: "pointer", outline: "none" },
  });

  const originOf = (sh) => (sh.kind === "seg" ? pt((R_IN + R_OUT) / 2, (sh.a0 + sh.a1) / 2) : [CX, CY]);

  const body = (sh) => {
    if (sh.kind === "seg") {
      const [lx, ly] = originOf(sh);
      return (
        <>
          <path d={sector(R_IN, R_OUT, sh.a0, sh.a1)} fill={sh.color} stroke="#fff" strokeWidth={3} />
          <Lines x={lx} y={ly} lines={sh.lines} size={n > 4 ? 21 : 23} color={sh.text || "#fff"} />
        </>
      );
    }
    return (
      <>
        <circle cx={CX} cy={CY} r={R_HUB} fill="#fff" stroke="#e2e8f0" strokeWidth={3} />
        <Lines x={CX} y={CY - 22} lines={hub.centre} size={19} color="#1e293b" weight={800} />
        <Lines x={CX} y={CY + 52} lines={hub.centreSub} size={14} color="#E12228" weight={700} />
      </>
    );
  };

  // Enlarged copy drawn on top so a hovered piece can grow without being hidden by its neighbours.
  const overlay = (id) => {
    const sh = shapes.find((x) => x.id === id);
    const [ox, oy] = originOf(sh);
    const isPinned = pinned === id;
    const color = colorOf(id);
    const scale = hovered === id ? 1.07 : 1.04;
    const glow = isPinned && hovered !== id ? `drop-shadow(0 0 7px ${color}aa)` : `drop-shadow(0 0 11px ${color})`;
    return (
      <g
        key={`ov-${id}-${isPinned ? "p" : "h"}`}
        className="fw-pop"
        aria-hidden="true"
        pointerEvents="none"
        style={{
          "--s": scale,
          transformOrigin: `${ox}px ${oy}px`,
          transformBox: "view-box",
          animation: "fwPop .18s ease-out forwards",
          filter: glow,
        }}
      >
        {body(sh)}
      </g>
    );
  };

  const overlayIds = [...new Set([pinned, hovered].filter(Boolean))];
  const glowColor = colorOf(activeId);
  const InfoIcon = info.Icon;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
      <style>{`
@keyframes fwPop{from{transform:scale(1)}to{transform:scale(var(--s))}}
@keyframes fwPulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.1);opacity:0}}
@media (prefers-reduced-motion: reduce){
  .fw-anim{animation:none!important}
  .fw-pop{animation-duration:.01ms!important}
}`}</style>

      <div className="relative overflow-hidden rounded-3xl bg-white border shadow-sm p-1.5 md:p-4">
        {/* soft glow behind the wheel that follows the colour of the active piece */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: glowColor, filter: "blur(70px)", opacity: hovered ? 0.26 : 0.16, transition: "background .5s ease, opacity .4s ease" }}
        />

        {/* Quick-select chips for phones */}
        <div className="relative z-10 mb-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 pt-1 md:hidden" role="group" aria-label="Choose a part of the wheel">
          {[["hub", "Overview", hub.color], ...segments.map((sg) => [sg.id, sg.title, sg.color])].map(([id, label, color]) => (
            <button
              key={id}
              ref={(el) => {
                chipRefs.current[id] = el;
              }}
              type="button"
              aria-pressed={pinned === id}
              onClick={() => setPinned(id)}
              className="flex shrink-0 snap-start items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors"
              style={
                pinned === id
                  ? { background: color, borderColor: color, color: "#fff" }
                  : { background: "#fff", borderColor: "#e2e8f0", color: "#334155" }
              }
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: pinned === id ? "#fff" : color }} />
              {label}
            </button>
          ))}
        </div>

        <svg viewBox="0 0 700 700" className="relative z-10 h-auto w-full" role="group" aria-label={ariaLabel} onMouseLeave={() => setHovered(null)}>
          <circle cx={CX} cy={CY} r={326} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 8" />
          {shapes.map((sh) => (
            <g key={sh.id} {...interactive(sh.id, sh.kind === "hub" ? hub.title : sh.title)}>
              {body(sh)}
            </g>
          ))}

          {/* soft pulse around the centre, in the colour of the active piece */}
          <circle
            className="fw-anim"
            cx={CX}
            cy={CY}
            r={R_HUB}
            fill="none"
            stroke={glowColor}
            strokeWidth={3}
            pointerEvents="none"
            style={{ transformOrigin: "center", transformBox: "fill-box", animation: "fwPulse 2.8s ease-out infinite", transition: "stroke .5s ease" }}
          />

          {overlayIds.map(overlay)}
        </svg>
      </div>

      <div className="md:sticky md:top-24 space-y-3">
        <div
          className="relative overflow-hidden rounded-2xl border p-3 md:p-4 shadow-md transition-colors"
          style={{ background: `linear-gradient(135deg, ${info.color}26 0%, #ffffff 65%)`, borderColor: `${info.color}55` }}
        >
          <div className="absolute inset-x-0 top-0 h-2 transition-colors" style={{ background: info.color }} />
          <div className="flex items-center justify-between gap-3 pt-1">
            <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-slate-900">{info.title}</h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-md" style={{ background: info.color, color: info.text || "#fff" }}>
              <InfoIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-3 text-sm leading-5 text-slate-700">{info.desc}</p>
        </div>

        {info.list.length > 0 && (
          <div className="space-y-3 rounded-2xl border p-3 md:p-4 shadow-sm transition-colors" style={{ background: `${info.color}0F`, borderColor: `${info.color}33` }}>
            <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-slate-900">
              <ListChecks className="h-5 w-5" style={{ color: info.color }} />
              {info.listTitle}
            </h4>
            <ol className="flex flex-col gap-2">
              {info.list.map(([name, text], i) => {
                const expandable = Boolean(text);
                const isOpen = expandable && openIdx === i;
                return (
                  <li key={name} className="rounded-xl bg-white shadow-sm transition hover:shadow-md" style={{ borderLeft: `4px solid ${info.color}` }}>
                    <button
                      type="button"
                      disabled={!expandable}
                      aria-expanded={expandable ? isOpen : undefined}
                      onClick={() => setOpen({ id: activeId, i: isOpen ? -1 : i })}
                      className={`flex w-full items-center gap-3 p-2 md:p-2.5 text-left ${expandable ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ background: info.color, color: info.text || "#fff" }}>
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm md:text-base font-bold leading-snug text-slate-900">{name}</span>
                      {expandable && <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                    </button>
                    {isOpen && <p className="px-3 pb-3 pl-[3.25rem] text-xs md:text-[13px] leading-snug text-slate-600">{text}</p>}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
