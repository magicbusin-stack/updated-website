import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_BY_PATH, NOT_FOUND } from "./routes.js";
import { SITE_URL, SITE_NAME, OG_IMAGE_PATH, OG_IMAGE_ALT, absoluteUrl } from "./site.js";
import { buildPageSchema } from "./schema.js";

/* Sets the page's search and social tags every time the address changes:
   title, description, canonical link, robots (index / noindex), Open Graph + Twitter tags,
   and the breadcrumb / page structured data (JSON-LD).
   The same values are also written into the static HTML of every page at build time
   (scripts/seo-build.mjs), so crawlers that do not run JavaScript see them too. */

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/* "/about-us/" and "/about-us" are the same page */
export function normalisePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalisePath(pathname);
    const route = ROUTE_BY_PATH[path];
    const known = Boolean(route);
    const data = route || NOT_FOUND;
    const noindex = !known || Boolean(route.noindex);
    const canonicalPath = known ? route.path : null;

    document.title = data.title;
    upsertMeta("name", "description", data.description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

    // Canonical: one clean address per page. Unknown pages get none.
    const existing = document.head.querySelector('link[rel="canonical"]');
    if (canonicalPath) upsertLink("canonical", absoluteUrl(canonicalPath));
    else if (existing) existing.remove();

    const image = `${SITE_URL}${OG_IMAGE_PATH}`;
    const pageUrl = canonicalPath ? absoluteUrl(canonicalPath) : absoluteUrl(path);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:title", data.title);
    upsertMeta("property", "og:description", data.description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", OG_IMAGE_ALT);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", data.title);
    upsertMeta("name", "twitter:description", data.description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:image:alt", OG_IMAGE_ALT);

    // Page + breadcrumb structured data (replaced on every page change)
    let script = document.getElementById("ld-page");
    if (known && !noindex) {
      if (!script) {
        script = document.createElement("script");
        script.id = "ld-page";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(buildPageSchema(route));
    } else if (script) {
      script.remove();
    }
  }, [pathname]);

  return null;
}
