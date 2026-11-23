/* SEO build helper.
   Runs automatically at the end of `npm run build` (see scripts/seo-plugin.mjs) and can also be run by hand:
       node scripts/seo-build.mjs --public     writes public/sitemap.xml and public/robots.txt
   Everything comes from src/seo/routes.js, so the sitemap, the robots file and every page's search/social tags agree.

   What it does at build time
     1. checks that every <Route> in src/App.jsx is listed in src/seo/routes.js (and the other way round)
     2. writes dist/sitemap.xml and dist/robots.txt
     3. writes a copy of the app's index.html for EVERY page (dist/<page>/index.html) with that page's own
        <title>, description, canonical link, robots tag, social tags and structured data already in the HTML,
        so search engines and social networks that do not run JavaScript still see the right tags
     4. writes dist/404.html (hosts such as Vercel send it with a real "404 Not Found" status for unknown addresses) */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, NOT_FOUND } from "../src/seo/routes.js";
import { SITE_URL, SITE_NAME, OG_IMAGE_PATH, OG_IMAGE_ALT, absoluteUrl } from "../src/seo/site.js";
import { buildPageSchema } from "../src/seo/schema.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const esc = (v) =>
  String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ---------- checks ---------- */
export function checkRoutes() {
  const app = fs.readFileSync(path.join(root, "src/App.jsx"), "utf8");
  const inApp = new Set([...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== "*"));
  const inList = new Set(ROUTES.map((r) => r.path));
  const missing = [...inApp].filter((p) => !inList.has(p));
  const extra = [...inList].filter((p) => !inApp.has(p));
  const problems = [];
  if (missing.length) problems.push(`In src/App.jsx but missing from src/seo/routes.js: ${missing.join(", ")}`);
  if (extra.length) problems.push(`In src/seo/routes.js but not a route in src/App.jsx: ${extra.join(", ")}`);
  if (inList.size !== ROUTES.length) problems.push("src/seo/routes.js lists the same path twice");
  for (const r of ROUTES) {
    if (!r.title || !r.description || !r.label) problems.push(`${r.path}: needs a title, description and label`);
    if (r.parent && !inList.has(r.parent)) problems.push(`${r.path}: parent ${r.parent} is not in the list`);
    for (const rel of r.related || []) if (!inList.has(rel)) problems.push(`${r.path}: related page ${rel} is not in the list`);
  }
  if (problems.length) throw new Error("SEO route check failed:\n - " + problems.join("\n - "));
  // soft warnings (do not stop the build)
  const warnings = [];
  for (const r of ROUTES) {
    if (r.title.length > 70) warnings.push(`${r.path}: title is ${r.title.length} characters (aim for 60 or fewer)`);
    if (r.description.length < 70 || r.description.length > 175) warnings.push(`${r.path}: description is ${r.description.length} characters (aim for 110-160)`);
  }
  return warnings;
}

/* ---------- files ---------- */
export function sitemapXml() {
  const urls = ROUTES.filter((r) => !r.noindex)
    .map((r) => `  <url>\n    <loc>${esc(absoluteUrl(r.path))}</loc>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt() {
  return [
    "# Magic Bus India Foundation: all search engines may crawl the whole site.",
    "# Pages that should not be listed carry a noindex tag instead (a page blocked here could not show that tag).",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

function seoBlock({ title, description, path: p, noindex, indexable }) {
  const url = absoluteUrl(p);
  const image = `${SITE_URL}${OG_IMAGE_PATH}`;
  const lines = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
    indexable ? `<link rel="canonical" href="${esc(url)}" />` : null,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<meta name="twitter:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
  ].filter(Boolean);
  return lines.map((l) => `    ${l}`).join("\n");
}

const BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

function pageHtml(template, route) {
  const noindex = Boolean(route.noindex);
  let block = seoBlock({ ...route, noindex, indexable: true });
  if (!noindex) {
    const json = JSON.stringify(buildPageSchema(route)).replace(/</g, "\\u003c");
    block += `\n    <script type="application/ld+json" id="ld-page">${json}</script>`;
  }
  return template.replace(BLOCK, () => `<!--seo:start-->\n${block}\n    <!--seo:end-->`);
}

function notFoundHtml(template) {
  const block = seoBlock({ title: NOT_FOUND.title, description: NOT_FOUND.description, path: "/", noindex: true, indexable: false });
  return template.replace(BLOCK, () => `<!--seo:start-->\n${block}\n    <!--seo:end-->`);
}

export function writePublicFiles() {
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemapXml());
  fs.writeFileSync(path.join(root, "public", "robots.txt"), robotsTxt());
}

export function generateDist(distDir) {
  const warnings = checkRoutes();
  const indexFile = path.join(distDir, "index.html");
  const template = fs.readFileSync(indexFile, "utf8");
  if (!BLOCK.test(template)) throw new Error("index.html has no <!--seo:start--> ... <!--seo:end--> block");

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml());
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt());

  let pages = 0;
  for (const route of ROUTES) {
    const html = pageHtml(template, route);
    if (route.path === "/") {
      fs.writeFileSync(indexFile, html);
    } else {
      const dir = path.join(distDir, route.path.replace(/^\//, ""));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
    }
    pages += 1;
  }
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml(template));

  const indexable = ROUTES.filter((r) => !r.noindex).length;
  console.log(`\nSEO: ${pages} page heads written, ${indexable} URLs in sitemap.xml, robots.txt and 404.html created.`);
  for (const w of warnings) console.warn(`SEO warning: ${w}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes("--public")) {
    const warnings = checkRoutes();
    writePublicFiles();
    console.log("Wrote public/sitemap.xml and public/robots.txt");
    for (const w of warnings) console.warn(`SEO warning: ${w}`);
  } else {
    console.log("Use: node scripts/seo-build.mjs --public");
  }
}
