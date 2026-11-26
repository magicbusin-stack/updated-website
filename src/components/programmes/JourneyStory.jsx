import React, { useCallback, useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

/* "From Childhood to Livelihood": the eight layers of the journey artwork, stacked exactly as they were designed
   (all are 1366 x 768 transparent PNGs, so every layer fills the same frame):

   01 road + milestone   fixed, the first thing you see
   02 bus                drives along the curve of the road and passes over the milestone
   03 sky                opens up like an iris from the top of the hill and takes over the scene
   04 clouds             fade in and drift very slowly
   05 woman (before)     rises in on the left, with 06 the field behind her
   07 woman (after)      rises in on the right, with 08 the shop behind her
   (both women are in front of everything: the field, the shop and the tree)

   It plays once when the scene is on screen, and has a Replay button. Visitors who prefer reduced motion see the finished scene. */

const W = 1366;
const H = 768;

/* the road is a circle: centre (683, 1052.5), radius 558 (measured on the artwork). The bus rides on it. */
const CX = 683.08;
const CY = 1052.5;
const R_ROAD = 558 - 6;
const BUS_ANCHOR = [683, 592]; // bottom centre of the bus in its own layer
const BUS_FROM = -72; // degrees from the top of the hill: starts below the left edge ...
const BUS_TO = 72; //   ... and leaves below the right edge

function busTransform(t) {
  const deg = BUS_FROM + (BUS_TO - BUS_FROM) * t;
  const a = (deg * Math.PI) / 180;
  const x = CX + R_ROAD * Math.sin(a);
  const y = CY - R_ROAD * Math.cos(a);
  return `translate(${((x - BUS_ANCHOR[0]) / W) * 100}%, ${((y - BUS_ANCHOR[1]) / H) * 100}%) rotate(${deg}deg)`;
}

/* the field artwork ends in a straight vertical edge (it is meant to meet the shop). While the left woman is alone, that edge is
   softened with --fe; when the shop arrives --fe opens to 100% and the field is exactly as designed. */
const FIELD_EDGE = "linear-gradient(to right, #000 var(--fe), transparent calc(var(--fe) + 7%))";
const fieldMask = { WebkitMaskImage: FIELD_EDGE, maskImage: FIELD_EDGE };

const LAYERS = [
  { id: "road", src: "/journey/01-road.webp" },
  { id: "bus", src: "/journey/02-bus.webp" },
  { id: "sky", src: "/journey/03-sky.webp" },
  { id: "clouds", src: "/journey/04-clouds.webp" },
  { id: "field", src: "/journey/06-field.webp", style: fieldMask },
  /* the shop artwork has a strip of ground that starts left of the middle: it is cut at exactly 50% so the wheat field keeps the left half */
  { id: "shop", src: "/journey/08-shop.webp", style: { clipPath: "inset(0 0 0 50%)" } },
  /* the women are placed and straightened with a fixed transform on a wrapper (the entrance animation runs on the image inside).
     Both turn around the bottom of the figure and stand on the same line (y = 650 of 768):
     left woman: moved left, turned 2.9° clockwise, raised 51 px and scaled to 94% so her bowl stays inside the frame;
     right woman: turned 13.5° anticlockwise (her photo was tilted), moved 114 px right so she is clear of the field and
     stops just before the shop sign, and lowered 9 px. */
  { id: "before", src: "/journey/05-woman-before.webp", wrap: { transform: "translate(-24%, -6.64%) rotate(2.9deg) scale(0.94)", transformOrigin: "41% 91.1%" } },
  { id: "after", src: "/journey/07-woman-after.webp", wrap: { transform: "translate(8.35%, 1.17%) rotate(-13.5deg)", transformOrigin: "58.6% 83.3%" } },
];

const EASE_IO = [0.65, 0, 0.35, 1];
const EASE_OUT = [0.16, 1, 0.3, 1];

export default function JourneyStory() {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const near = useInView(wrapRef, { once: true, margin: "800px" });
  const seen = useInView(wrapRef, { once: true, amount: 0.5 });
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const [round, setRound] = useState(0); // bumping this starts the scene again

  /* wait until every layer is downloaded and decoded, so nothing pops in half way */
  useEffect(() => {
    if (!near || ready) return;
    const imgs = [...(stageRef.current?.querySelectorAll("img") || [])];
    let alive = true;
    Promise.all(imgs.map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve()))).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, [near, ready]);

  /* the timeline (seconds from the start) */
  useEffect(() => {
    if (reduce || !ready || !seen) return;
    const root = stageRef.current;
    if (!root) return;
    const el = (id) => root.querySelector(`[data-layer="${id}"]`);
    const run = [];
    const go = (target, keyframes, options) => run.push(animate(target, keyframes, options));

    // 0.6 s: the bus sets off and drives over the whole hill (it passes over the milestone on the way)
    const bus = el("bus");
    go(0, 1, { delay: 0.6, duration: 5.6, ease: [0.45, 0, 0.55, 1], onUpdate: (t) => (bus.style.transform = busTransform(t)) });
    // 5.2 s: the sky opens from the top of the hill and covers the road
    go(el("sky"), { clipPath: ["circle(0% at 50% 64.5%)", "circle(95% at 50% 64.5%)"] }, { delay: 5.2, duration: 1.5, ease: EASE_IO });
    // 6.3 s: clouds fade in and drift slowly
    go(el("clouds"), { opacity: [0, 1] }, { delay: 6.3, duration: 1.4, ease: "easeOut" });
    go(el("clouds"), { x: ["1.5%", "-1.5%"] }, { delay: 6.3, duration: 16, ease: "linear" });
    // 7.3 s: the woman on the left, then the field in front of her
    go(el("before"), { opacity: [0, 1], y: ["5%", "0%"] }, { delay: 7.3, duration: 0.9, ease: EASE_OUT });
    go(el("field"), { opacity: [0, 1], y: ["14%", "0%"] }, { delay: 7.6, duration: 1.1, ease: EASE_OUT });
    go(el("field"), { "--fe": ["42%", "100%"] }, { delay: 9.3, duration: 1.3, ease: EASE_IO });
    // 9.2 s: the woman on the right, then the shop in front of her
    go(el("after"), { opacity: [0, 1], y: ["5%", "0%"] }, { delay: 9.2, duration: 0.9, ease: EASE_OUT });
    go(el("shop"), { opacity: [0, 1], y: ["14%", "0%"] }, { delay: 9.5, duration: 1.1, ease: EASE_OUT });

    const timer = setTimeout(() => setDone(true), 10900);
    return () => {
      clearTimeout(timer);
      run.forEach((c) => c.stop());
    };
  }, [ready, seen, reduce, round]);

  const replay = useCallback(() => {
    setDone(false);
    setRound((r) => r + 1);
  }, []);

  /* where every layer starts (the finished scene is shown straight away for reduced motion) */
  const start = (id) => {
    if (reduce) return id === "road" || id === "bus" ? { opacity: 0 } : id === "field" ? { "--fe": "100%" } : {};
    if (id === "sky") return { clipPath: "circle(0% at 50% 64.5%)" };
    if (id === "bus") return { transform: busTransform(0), transformOrigin: `${(BUS_ANCHOR[0] / W) * 100}% ${(BUS_ANCHOR[1] / H) * 100}%`, willChange: "transform" };
    if (id === "road") return {};
    if (id === "field") return { opacity: 0, "--fe": "42%" };
    return { opacity: 0 };
  };


  return (
    <section className="overflow-hidden bg-[#FDFBF7] py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div ref={wrapRef}>
          <div
            key={round}
            ref={stageRef}
            role="img"
            aria-label="A journey from labour to livelihood: a bus travels over the hill road; then a woman carrying a metal bowl on her head stands in a wheat field, and beside her a woman shows packets of spices in front of her own spice and general store."
            className="relative aspect-[1366/768] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
          >
            {LAYERS.map((l) => {
              const img = (
                <img
                  key={l.id}
                  data-layer={l.id}
                  src={near ? l.src : undefined}
                  alt=""
                  width={W}
                  height={H}
                  decoding="async"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full select-none"
                  style={{ ...l.style, ...start(l.id) }}
                />
              );
              return l.wrap ? (
                <div key={l.id} className="pointer-events-none absolute inset-0" style={l.wrap}>
                  {img}
                </div>
              ) : (
                img
              );
            })}
          </div>
        </div>

        {!reduce && (
          <div className="mt-5 flex h-11 justify-center">
            <button
              type="button"
              onClick={replay}
              tabIndex={done ? 0 : -1}
              aria-hidden={!done}
              className={`inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 text-[15px] font-bold text-[#1A1A1A] shadow-sm transition duration-300 hover:border-brand-red hover:text-brand-red ${done ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <RotateCcw className="h-4 w-4" /> Replay the journey
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
