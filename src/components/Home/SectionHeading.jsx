import { motion } from "framer-motion";
import { fadeUp, fadeUpSm } from "../../hooks/useScrollAnimations";

/* One headline style for the main home page sections, so each section clearly starts with a headline:
   a yellow tag (same as the tags on the other pages), a large bold title and a short red bar.
   Inside a section that already animates its header (variants "hidden" / "visible") it fades in with it;
   anywhere else it simply shows. */
export default function SectionHeading({ tag, title, id, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <motion.span
        variants={fadeUpSm}
        className="mb-4 inline-flex items-center rounded-full border border-brand-black/15 bg-brand-yellow px-4 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-brand-black"
      >
        {tag}
      </motion.span>
      <motion.h2
        id={id}
        variants={fadeUp}
        className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.div variants={fadeUpSm} aria-hidden="true" className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-brand-red" />
    </div>
  );
}
