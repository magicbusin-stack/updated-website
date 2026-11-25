import React from "react";
import { ExternalLink, Quote } from "lucide-react";

/* THE quote / testimonial card for the whole site: a dark card with a yellow quote tile, white text, and the
   person (photo, initial or icon) with their role in yellow underneath.
   Use this one everywhere a quote is shown, so quotes look the same on every page.

   size="card"    a card in a grid (default)
   size="wide"    a full-width feature quote (bigger text)
   size="dense"   a card in a row of three (a little less padding and text)
   size="compact" a small quote that sits inside another card
   quote          the words (no quotation marks needed; they are added). A node is fine, e.g. with <mark> highlights.
   name, role     who said it (role is shown in yellow)
   image          photo of the person; or initial="K"; or icon={SomeIcon}
   link           small round link button at the end of the person row (opens in a new tab)
   media          anything shown above the quote (a video, for example)
   badge          anything shown at the right of the quote tile (stars, a label ...) */
export default function QuoteCard({
  quote,
  name,
  role,
  image,
  initial,
  icon: Icon,
  link,
  linkLabel,
  media,
  badge,
  size = "card",
  quoteClassName = "",
  className = "",
  marks = true,
}) {
  const wide = size === "wide";
  const compact = size === "compact";
  const dense = size === "dense";
  const pad = wide ? "p-6 sm:p-10 md:p-12" : compact ? "p-5" : dense ? "p-6 sm:p-7" : "p-7 sm:p-8 md:p-10";
  const text = wide
    ? "text-lg font-semibold leading-relaxed sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-relaxed"
    : compact || dense
    ? "text-lg font-semibold leading-relaxed"
    : "text-lg font-semibold leading-relaxed sm:text-xl md:text-2xl md:leading-relaxed";
  const hasPerson = name || role;
  return (
    <figure
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#2B1216] to-[#6B0F18] ${pad} shadow-xl ring-1 ring-brand-red/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
      {wide && <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-red/30 blur-3xl" />}
      {wide && <Quote aria-hidden="true" className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-white/10 sm:right-8 sm:top-6 sm:h-40 sm:w-40" />}

      <div className="relative flex items-center justify-between gap-3">
        <span className={`flex items-center justify-center rounded-2xl bg-brand-yellow shadow-lg ${compact ? "h-11 w-11" : "h-12 w-12 sm:h-14 sm:w-14"}`}>
          <Quote className={compact ? "h-5 w-5 text-brand-black" : "h-6 w-6 text-brand-black sm:h-7 sm:w-7"} />
        </span>
        {badge}
      </div>

      {media && <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/15 bg-black">{media}</div>}

      <blockquote className={`relative ${compact ? "mt-4" : "mt-5 sm:mt-6"} flex-1 text-white ${text} ${quoteClassName}`}>
        {marks ? <>&ldquo;{quote}&rdquo;</> : quote}
      </blockquote>

      {hasPerson && (
        <figcaption className={`relative ${compact ? "mt-5 pt-4" : "mt-6 pt-5 sm:mt-8 sm:pt-6"} flex items-center gap-4 border-t border-white/20`}>
          {(image || initial || Icon) && (
            <span
              className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-yellow/20 font-black text-brand-yellow ring-4 ring-brand-yellow ${
                compact || dense ? "h-12 w-12 text-lg" : "h-14 w-14 text-xl sm:h-16 sm:w-16 sm:text-2xl"
              }`}
            >
              {image ? (
                <img loading="lazy" decoding="async" src={image} alt={name || ""} className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
              ) : Icon ? (
                <Icon className="h-7 w-7" />
              ) : (
                initial
              )}
            </span>
          )}
          <div className="min-w-0 flex-1">
            {name && <p className={`font-extrabold leading-snug text-white ${dense ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>{name}</p>}
            {role && <p className={`font-semibold leading-snug text-brand-yellow ${dense ? "text-[15px]" : "text-base"}`}>{role}</p>}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkLabel || `Read more from ${name || "this person"}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
