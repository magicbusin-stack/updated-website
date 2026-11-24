import { motion } from "framer-motion";
import { fadeUp, fadeUpSm } from "../../hooks/useScrollAnimations";

/* One headline style for the main home page sections: a large bold title with its key words in red
   (the same two-tone headline the other pages use), and a short red bar under it. There is no tag above it any more.
   accent: the last words of the title that are shown in red.
   Inside a section that already animates its header (variants "hidden" / "visible") it fades in with it;
   anywhere else it simply shows. */
export default function SectionHeading({ title, accent, id, className = "" }) {
  const hasAccent = accent && title.endsWith(accent);
  const lead = hasAccent ? title.slice(0, title.length - accent.length) : title;
  return (
    <div className={`text-center ${className}`}>
      <motion.h2
        id={id}
        variants={fadeUp}
        className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl"
      >
        {lead}
        {hasAccent && <span className="text-brand-red">{accent}</span>}
      </motion.h2>
      <motion.div variants={fadeUpSm} aria-hidden="true" className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-brand-red" />
    </div>
  );
}
