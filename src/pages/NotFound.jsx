import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import Layout from "../components/Layout";

/* Shown for any address that is not a real page. The page tells search engines not to list it (see SeoManager),
   and the host (Vercel) answers with the proper 404 status because it serves /404.html for unknown addresses. */
const SUGGESTIONS = [
  { to: "/adolescent-programme", label: "Adolescent Programme" },
  { to: "/livelihood-programme", label: "Livelihood Programme" },
  { to: "/about-us", label: "About Magic Bus" },
  { to: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <Layout>
      <section className="bg-white pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Error 404</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#1A1A1A] md:text-5xl">Page not found</h1>
          <p className="mt-5 text-lg text-[#1A1A1A]/80">
            We could not find the page you were looking for. It may have moved, or the address may have a typing mistake.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-base font-bold text-white shadow-md transition hover:bg-[#c41b20]"
            >
              <Home className="h-5 w-5" />
              Back to the home page
            </Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {SUGGESTIONS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-[#F7F7F5] px-5 py-4 text-left text-lg font-bold text-[#1A1A1A] transition hover:border-brand-red hover:bg-white"
              >
                {s.label}
                <ArrowRight className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
