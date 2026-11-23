import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROUTE_BY_PATH } from "./routes";
import { normalisePath } from "./SeoManager";

/* "Explore more": a few closely related pages at the bottom of every page that lists them in routes.js.
   Real links with descriptive text, so visitors and search engines can move between related pages. */
export default function RelatedPages() {
  const { pathname } = useLocation();
  const route = ROUTE_BY_PATH[normalisePath(pathname)];
  if (!route || route.hideRelated || route.noindex || !route.related?.length) return null;

  const links = route.related.map((p) => ROUTE_BY_PATH[p]).filter((r) => r && !r.noindex && r.path !== route.path);
  if (links.length === 0) return null;

  return (
    <nav aria-label="Related pages" className="border-t border-gray-200 bg-[#F7F7F5] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-2xl font-extrabold text-[#1A1A1A] md:text-3xl">
          Explore <span className="text-brand-red">more</span>
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((r) => (
            <li key={r.path}>
              <Link
                to={r.path}
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-lg font-bold leading-snug text-[#1A1A1A] shadow-sm transition hover:-translate-y-1 hover:border-brand-red hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/25"
              >
                <span>{r.label}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-brand-red transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
