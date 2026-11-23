/* Builds the structured data (JSON-LD) for a page: the page itself + its breadcrumb trail.
   Plain JavaScript (no React) so the build script can use it too.
   Only facts that are already on the page / in routes.js are used. */
import { ROUTE_BY_PATH } from "./routes.js";
import { SITE_URL, OG_IMAGE_PATH, absoluteUrl } from "./site.js";

export function breadcrumbTrail(route) {
  const trail = [];
  let current = route;
  const seen = new Set();
  while (current && !seen.has(current.path)) {
    seen.add(current.path);
    trail.unshift(current);
    current = current.parent ? ROUTE_BY_PATH[current.parent] : null;
  }
  if (trail[0]?.path !== "/") trail.unshift(ROUTE_BY_PATH["/"]);
  return trail;
}

export function buildPageSchema(route) {
  const url = absoluteUrl(route.path);
  const graph = [
    {
      "@type": route.type || "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: route.title,
      description: route.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${OG_IMAGE_PATH}` },
    },
  ];
  if (route.path !== "/") {
    graph[0].breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbTrail(route).map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        item: absoluteUrl(item.path),
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
