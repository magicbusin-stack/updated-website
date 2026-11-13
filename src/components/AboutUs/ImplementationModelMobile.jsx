import React from "react";
import { ChevronDown } from "lucide-react";

// Phone version of the Implementation Model: the same boxes as the flowchart, stacked top to bottom so every line is readable.
const PINK = { head: "#FDE2EC", card: "#FFF0F5", stroke: "#F49DBF" };
const BLUE = { head: "#E4EDFE", card: "#F0F5FF", stroke: "#A8C5FA" };

function Card({ t, title, children, sub, className = "" }) {
  return (
    <div className={`rounded-2xl border p-4 text-center shadow-sm ${className}`} style={{ background: t.card, borderColor: t.stroke }}>
      <p className="text-base font-bold leading-tight text-neutral-900">{title}</p>
      {sub && <p className="mt-1 text-sm leading-snug text-neutral-600">{sub}</p>}
      {children}
    </div>
  );
}

const Down = () => (
  <div className="flex justify-center py-1.5 text-slate-500" aria-hidden="true">
    <ChevronDown className="h-5 w-5" />
  </div>
);

function Branch({ t, title, sub, children }) {
  return (
    <div className="rounded-2xl border p-3 shadow-sm" style={{ background: t.head, borderColor: t.stroke }}>
      <div className="px-1 pb-3 text-center">
        <p className="text-lg font-bold leading-tight text-neutral-900">{title}</p>
        <p className="mt-0.5 text-sm text-neutral-700">{sub}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function ImplementationModelMobile({ onActive }) {
  return (
    <div className="space-y-5">
      <div className="mx-auto flex h-12 w-64 items-center justify-center rounded-full border-2 border-[#E9C736] bg-[#FFDE59] shadow-sm">
        <h3 className="text-lg font-bold text-neutral-900">Implementation Model</h3>
      </div>

      {/* Direct model */}
      <div onTouchStart={() => onActive && onActive(0)} onMouseEnter={() => onActive && onActive(0)} onMouseLeave={() => onActive && onActive(null)}>
        <Branch t={PINK} title="Direct Model" sub="Implemented on-ground by Magic Bus team">
          <div className="space-y-4">
            <div>
              <Card t={PINK} title="In Community" sub="Engagement with community stakeholders" />
              <Down />
              <div className="grid grid-cols-2 gap-2">
                {["Parents", "Head of School", "School Mgmt. Committee", "Panchayat Raj Institution or Ward"].map((x) => (
                  <div key={x} className="flex items-center justify-center rounded-xl border bg-[#FFF0F5] px-2 py-3 text-center text-sm font-bold leading-snug text-neutral-900" style={{ borderColor: PINK.stroke }}>
                    {x}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card t={PINK} title="In School" sub="Programme implementation" />
              <Down />
              <Card t={PINK} title="Adolescents" sub={<>(6<sup>th</sup> to 12<sup>th</sup> Grade)</>} />
              <Down />
              <div className="space-y-2">
                <Card t={PINK} title="Life Skills Education" sub="Activity-based sessions on the playground" />
                <Card t={PINK} title="Foundational Literacy & Numeracy" sub="Education support in Community Learning Centers" />
                <Card t={PINK} title="Employability Education" sub="Digital & Financial Literacy, Career Awareness & Functional English" />
              </div>
            </div>
          </div>
        </Branch>
      </div>

      {/* Indirect model */}
      <div onTouchStart={() => onActive && onActive(1)} onMouseEnter={() => onActive && onActive(1)} onMouseLeave={() => onActive && onActive(null)}>
        <Branch t={BLUE} title="Indirect Model" sub="Implemented through state school education dept. partnership">
          <div className="space-y-4">
            <div>
              <Card t={BLUE} title="Design & Development" sub="Life Skills programme" />
              <Down />
              <Card t={BLUE} title="SCERT" sub="Collaboration with state school education department to integrate Life Skills education" />
              <Down />
              <Card t={BLUE} title="Curriculum & Training Development" sub="Contextualised curriculum designed, training plan for govt. school teachers developed & monitoring & assessment mechanisms facilitated" />
            </div>
            <div>
              <Card t={BLUE} title="Delivery" sub="Life Skills programme" />
              <Down />
              <Card t={BLUE} title="Magic Bus Trainer" sub="Equipped to impart Life Skills programme to Master Trainers across districts" />
              <Down />
              <Card t={BLUE} title="Master Trainers" sub="Equipped to impart Life Skills programme to govt. school teachers" />
              <Down />
              <Card t={BLUE} title="Govt. School Teachers" sub="Equipped to deliver Life Skills to adolescents" />
              <Down />
              <Card t={BLUE} title="Adolescents" sub={<>(6<sup>th</sup> to 10<sup>th</sup> Grade) Engaged in Life Skills education on the playground &amp; in classrooms</>} />
            </div>
          </div>
        </Branch>
      </div>
    </div>
  );
}
