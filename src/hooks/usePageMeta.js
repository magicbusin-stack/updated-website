import { useEffect } from "react";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  const existed = Boolean(el);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (existed) el.setAttribute("content", previous ?? "");
    else el.remove();
  };
}

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;
    const undo = [];
    if (description) {
      undo.push(upsertMeta("name", "description", description));
      undo.push(upsertMeta("property", "og:description", description));
    }
    if (title) undo.push(upsertMeta("property", "og:title", title));
    return () => {
      document.title = previousTitle;
      undo.forEach((fn) => fn());
    };
  }, [title, description]);
}
