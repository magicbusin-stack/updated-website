import TechInnovationCarousel from "./TechInnovationCarousel";

// TODO: placeholder — swap in the final sub-headline copy once confirmed.
const SUBHEADLINE_PLACEHOLDER =
  "Explore the digital tools and platforms powering Magic Bus programmes end to end.";

export default function AIDigitalSection() {
  return (
    <section className="bg-gray-900 text-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">TECH AND INNOVATION</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          {SUBHEADLINE_PLACEHOLDER}
        </p>
      </div>
      <TechInnovationCarousel />
    </section>
  );
}
