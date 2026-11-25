import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { corporatePartners } from "../../data/corporatePartners";
import { foundationPartners } from "../../data/foundationPartners";
import { governmentPartners } from "../../data/governmentPartners";
import { employmentPartners } from "../../data/employmentPartners";
import { knowledgePartners } from "../../data/knowledgePartners";

/* The row of partner groups at the bottom of every partner page. Each card shows a few of that group's real logos,
   so it is clear these are groups of partners and not missing ones. The page you are on is left out. */
const GROUPS = [
  { key: "corporate", label: "Corporate Partners", path: "/corporate-partners", partners: corporatePartners },
  { key: "foundation", label: "Foundations & Institutions", path: "/foundation-partners", partners: foundationPartners },
  { key: "government", label: "Government Partners", path: "/government-partners", partners: governmentPartners },
  { key: "employment", label: "Employment Partners", path: "/employment-partners", partners: employmentPartners },
  { key: "knowledge", label: "Knowledge Partners", path: "/knowledge-partners", partners: knowledgePartners },
];

export default function PartnerCategories({ current }) {
  const groups = GROUPS.filter((g) => g.key !== current);
  return (
    <section className="border-t border-slate-100 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <span className="mb-3 inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-green">
          Ecosystem Connect
        </span>
        <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Explore Our Partner <span className="text-brand-red">Network</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
          Explore how we collaborate across various domains to achieve holistic community growth and empowerment.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => {
            const logos = g.partners.filter((p) => p.logo).slice(0, 4);
            return (
              <Link
                key={g.key}
                to={g.path}
                className="group flex flex-col rounded-2xl border border-slate-200/70 bg-gray-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:shadow-lg"
              >
                <div className="grid grid-cols-2 gap-2">
                  {logos.map((p) => (
                    <div key={p.name} className="flex h-20 items-center justify-center rounded-xl bg-white p-2">
                      <img src={p.logo} alt={p.name} loading="lazy" decoding="async" className="max-h-full w-full object-contain mix-blend-multiply" />
                    </div>
                  ))}
                </div>
                <span className="mt-4 text-lg font-extrabold leading-snug text-slate-800 transition-colors group-hover:text-white md:text-xl">{g.label}</span>
                <span className="mt-1 text-base text-slate-500 transition-colors group-hover:text-white/80">{g.partners.length} partners</span>
                <span className="mt-4 flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red transition-colors group-hover:text-brand-yellow">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
