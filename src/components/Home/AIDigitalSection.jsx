import TechInnovationCarousel from "./TechInnovationCarousel";

// TODO: placeholder — swap in the final sub-headline copy once confirmed.
const SUBHEADLINE_PLACEHOLDER =
  "Explore the digital tools and platforms powering Magic Bus programmes end to end.";

export default function AIDigitalSection() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-amber-50 text-ink overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-ink">TECH AND INNOVATION</h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
          {SUBHEADLINE_PLACEHOLDER}
        </p>
      </div>
      <TechInnovationCarousel />
    </section>
  );
}
