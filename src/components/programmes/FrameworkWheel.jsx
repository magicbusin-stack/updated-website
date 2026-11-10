import React, { useState } from "react";

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
  const { hub, segments, footnote, ariaLabel } = data;
  const [pinned, setPinned] = useState("hub");
  const [hovered, setHovered] = useState(null);
  const activeId = hovered || pinned;

  const n = segments.length;
  const step = 360 / n;
  const shapes = [
    ...segments.map((sg, i) => ({
      ...sg,
      kind: "seg",
      a0: -step / 2 + i * step,
      a1: -step / 2 + (i + 1) * step,
      index: i,
    })),
    { id: "hub", kind: "hub" },
  ];

  const info =
    activeId === "hub"
      ? {
          title: hub.title,
          category: hub.category,
          layer: "Overview",
          color: hub.color,
          Icon: hub.icon,
          desc: hub.desc,
          list: segments.map((sg) => [sg.title, sg.items.length ? sg.items.map((it) => it[0]).join(" · ") : sg.desc]),
          listTitle: "What the programme covers",
        }
      : (() => {
          const sg = segments.find((x) => x.id === activeId);
          return {
            title: sg.title,
            category: hub.title,
            layer: `${segments.indexOf(sg) + 1} of ${n}`,
            color: sg.color,
            text: sg.text,
            Icon: sg.icon,
            desc: sg.desc,
            list: sg.items,
            listTitle: "Skills covered",
          };
        })();

  const interactive = (id, title) => ({
    role: "button",
    tabIndex: 0,
    "aria-label": title,
    "aria-pressed": pinned === id,
    onClick: () => setPinned(id),
    onMouseEnter: () => canHover() && setHovered(id),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered(null),
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
    const scale = hovered === id ? 1.06 : 1.03;
    return (
      <g
        key={`ov-${id}-${isPinned ? "p" : "h"}`}
        aria-hidden="true"
        pointerEvents="none"
        style={{
          "--s": scale,
          transformOrigin: `${ox}px ${oy}px`,
          transformBox: "view-box",
          animation: "fwPop .18s ease-out forwards",
          filter: isPinned ? "drop-shadow(0 0 8px rgba(225,34,40,0.6))" : "drop-shadow(0 0 9px rgba(37,99,235,0.55))",
        }}
      >
        {body(sh)}
      </g>
    );
  };

  const overlayIds = [...new Set([pinned, hovered].filter(Boolean))];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
      <style>{"@keyframes fwPop{from{transform:scale(1)}to{transform:scale(var(--s))}}"}</style>

      <div className="rounded-3xl bg-white border shadow-sm p-2 md:p-4">
        <svg
          viewBox="0 0 700 700"
          className="w-full h-auto"
          role="group"
          aria-label={ariaLabel}
          onMouseLeave={() => setHovered(null)}
        >
          <circle cx={CX} cy={CY} r={326} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 8" />
          {shapes.map((sh) => (
            <g key={sh.id} {...interactive(sh.id, sh.kind === "hub" ? hub.title : sh.title)}>
              {body(sh)}
            </g>
          ))}
          {overlayIds.map(overlay)}
        </svg>
        <p className="mt-1 mb-2 text-center text-sm text-slate-500">Hover over (or tap) any part of the wheel to learn more.</p>
      </div>

      <div className="md:sticky md:top-32 space-y-5">
        <div
          className="relative overflow-hidden rounded-3xl border p-6 md:p-8 shadow-md transition-colors"
          style={{ background: `linear-gradient(135deg, ${info.color}26 0%, #ffffff 65%)`, borderColor: `${info.color}55` }}
        >
          <div className="absolute inset-x-0 top-0 h-2 transition-colors" style={{ background: info.color }} />
          <div className="flex items-start justify-between gap-4 pt-1">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full px-3 py-1 text-xs md:text-sm font-bold" style={{ background: info.color, color: info.text || "#fff" }}>
                  {info.category}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-600">{info.layer}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-900">{info.title}</h3>
            </div>
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md"
              style={{ background: info.color, color: info.text || "#fff" }}
            >
              <info.Icon className="h-7 w-7" />
            </div>
          </div>
          <p className="mt-5 text-lg md:text-xl leading-8 text-slate-700">{info.desc}</p>
        </div>

        {info.list.length > 0 && (
          <div className="space-y-4 rounded-3xl border p-5 md:p-6 shadow-sm transition-colors" style={{ background: `${info.color}0F`, borderColor: `${info.color}33` }}>
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-xl md:text-2xl font-bold text-slate-900">{info.listTitle}</h4>
              <span className="shrink-0 rounded-full px-3 py-1 text-xs md:text-sm font-bold" style={{ background: info.color, color: info.text || "#fff" }}>
                {info.list.length} {info.list.length === 1 ? "Item" : "Items"}
              </span>
            </div>
            <ol className="flex flex-col gap-3">
              {info.list.map(([name, text], i) => (
                <li
                  key={name}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 md:p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderLeft: `6px solid ${info.color}` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold" style={{ background: info.color, color: info.text || "#fff" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-bold leading-snug text-slate-900">{name}</p>
                    <p className="mt-1 text-base md:text-lg leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {footnote && activeId !== "hub" && <p className="px-2 text-sm font-medium text-slate-500">{footnote}</p>}
      </div>
    </div>
  );
}
