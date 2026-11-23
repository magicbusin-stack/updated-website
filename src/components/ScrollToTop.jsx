import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/* Every time the visitor opens another page, start that page at the top.
   (In a single-page site the browser otherwise keeps the old page's scroll position, so the new page can open
   in the middle or at the bottom.)
   Links that point to a section on the page (#programme-enquiries and so on) still scroll to that section;
   when the page is still loading, it keeps looking for the section for up to two seconds. */
const useBeforePaint = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useBeforePaint(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const goToSection = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          return true;
        }
        return false;
      };
      if (goToSection()) return undefined;
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        if (goToSection() || tries >= 20) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return undefined;
  }, [pathname, hash]);

  return null;
}
