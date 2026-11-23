/* Prerender step. Runs automatically at the end of `npm run build` (see scripts/seo-plugin.mjs).

   After the normal build, this draws every page once on the server and writes the finished HTML into that
   page's file (dist/<page>/index.html, and dist/404.html), inside <div id="root">.
   Search engines and AI crawlers that do not run JavaScript now read the real page content, and visitors
   see the page before the JavaScript has loaded. The browser then "hydrates" (attaches to) that HTML.

   Safe by design: if one page fails to draw on the server, that page keeps the normal empty shell
   (the browser draws it exactly as before) and a warning is printed. The build never breaks because of this step.

   Run by hand after a build:   node scripts/prerender.mjs            (uses ./dist)
   It must run in "development" mode so React's dev JSX runtime is available; the seo plugin starts it that way. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.resolve(process.argv[2] || path.join(root, "dist"));
const ROOT_DIV = '<div id="root"></div>';

/* React puts image preload hints at the very start of its output. They belong in <head>. */
function splitHead(html) {
  const hints = [];
  let body = html;
  for (;;) {
    const m = body.match(/^<link [^>]*\/?>/);
    if (!m) break;
    hints.push(m[0]);
    body = body.slice(m[0].length);
  }
  return { hints, body };
}

function inject(template, html) {
  const { hints, body } = splitHead(html);
  if (!template.includes(ROOT_DIV)) throw new Error('template has no empty <div id="root"></div>');
  let out = template.replace(ROOT_DIV, () => `<div id="root">${body}</div>`);
  if (hints.length) out = out.replace("</head>", () => `    ${hints.join("\n    ")}\n  </head>`);
  return out;
}

const server = await createServer({
  root,
  mode: "development",
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
  optimizeDeps: { noDiscovery: true, include: [] },
});

let done = 0;
const skipped = [];
try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const { ROUTES } = await server.ssrLoadModule("/src/seo/routes.js");

  const jobs = ROUTES.map((r) => ({
    url: r.path,
    file: r.path === "/" ? path.join(distDir, "index.html") : path.join(distDir, r.path.replace(/^\//, ""), "index.html"),
  }));
  jobs.push({ url: "/page-not-found-prerender", file: path.join(distDir, "404.html") }); // matches no page, so it draws the "not found" page

  for (const job of jobs) {
    try {
      const template = fs.readFileSync(job.file, "utf8");
      if (!template.includes(ROOT_DIV)) continue; // already prerendered
      const { html, errors } = await render(job.url);
      if (errors.length || html.includes("animate-spin") || !/<h1[\s>]/.test(html)) {
        skipped.push(`${job.url}: ${errors[0] || "page did not finish drawing on the server"}`);
        continue;
      }
      fs.writeFileSync(job.file, inject(template, html));
      done += 1;
    } catch (e) {
      skipped.push(`${job.url}: ${String(e.message).split("\n")[0]}`);
    }
  }
} finally {
  await server.close();
}

console.log(`\nPrerender: ${done} pages now contain their full content in the HTML.`);
for (const s of skipped) console.warn(`Prerender warning (kept the normal empty shell): ${s}`);
