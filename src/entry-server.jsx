/* Build-time prerender entry. NOT loaded by the browser.
   scripts/prerender.mjs calls render(url) for every page to get that page's finished HTML,
   so search engines and AI crawlers that do not run JavaScript still see the real content. */
import { StaticRouter } from "react-router-dom";
import { prerender } from "react-dom/static";
import { AppRoutes } from "./App.jsx";

async function streamToString(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let html = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    html += decoder.decode(value, { stream: true });
  }
  return html + decoder.decode();
}

/* Returns { html, errors }. If a page cannot be drawn on the server, `errors` says why and the
   caller keeps the normal empty shell for that page (the browser then draws it as before). */
export async function render(url) {
  const errors = [];
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
    { onError: (e) => errors.push(String((e && e.message) || e).split("\n")[0]) }
  );
  return { html: await streamToString(prelude), errors };
}
