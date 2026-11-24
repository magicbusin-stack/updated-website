import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Ticker from "../Home/OutreachTicker";

/* A number that counts up when it scrolls into view ("37,389", "52%", "25+", "1M+" ...).
   Before that, and on the server, it shows its real value; the real value also stays in the page text for
   screen readers and search engines while the number is counting. */
export default function CountOnView({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [armed, setArmed] = useState(false);
  useEffect(() => setArmed(true), []);
  return (
    <span ref={ref}>
      {!armed ? (
        value
      ) : (
        <>
          <span className="sr-only">{value}</span>
          <span aria-hidden="true">{inView ? <Ticker value={value} /> : String(value).replace(/\d/g, "0")}</span>
        </>
      )}
    </span>
  );
}
