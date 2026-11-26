import React, { useCallback, useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

/* "From Childhood to Livelihood": the eight layers of the journey artwork, stacked exactly as in the approved layout
   (all are 1366 x 768 transparent images, so every layer fills the same frame). Back to front:

   03 sky  >  04 clouds  >  06 field  >  08 shop  >  05 woman (before)  >  07 woman (after)  >  01 road + milestone  >  02 bus

   The hill (road + milestone) is in front of the scene and the bus is in front of the hill. The finished scene is
   exactly the approved picture: the bus parked at the top of the hill with half of it under the white line.

   How it plays (once, when the scene is on screen; there is a Replay button):
     1. only the hill and the milestone are there; the bus drives in along the curve and stops half way
     2. while the bus waits (6 seconds) the sky, clouds and field appear, then the left woman pops up from behind the hill
     3. the bus carries on and parks at the top of the hill
     4. the right woman pops up from behind the hill, with the shop behind her

   Visitors who prefer reduced motion see the finished scene straight away. */

const W = 1366;
const H = 768;

/* the road is a circle: centre (683, 1052.5) (measured on the artwork). The bus layer is drawn with the bus parked at the
   top of the hill (bottom centre at 683, 592), so riding on the circle of radius 460.5 puts the bus exactly there at the top
   and keeps it half under the white line all the way. */
const CX = 683.08;
const CY = 1052.5;
const BUS_ANCHOR = [683, 592]; // bottom centre of the parked bus
const R_BUS = CY - BUS_ANCHOR[1];
const BUS_FROM = -64; // degrees from the top of the hill: it starts below the left edge
const BUS_MID = 0.5; //  and stops half way (0 = start, 1 = parked at the top)

function busTransform(t) {
  const deg = BUS_FROM * (1 - t);
  const a = (deg * Math.PI) / 180;
  const x = CX + R_BUS * Math.sin(a);
  const y = CY - R_BUS * Math.cos(a);
  return `translate(${((x - BUS_ANCHOR[0]) / W) * 100}%, ${((y - BUS_ANCHOR[1]) / H) * 100}%) rotate(${deg}deg)`;
}

/* the field artwork ends in a straight vertical edge (it is meant to meet the shop). While the right half is still empty,
   that edge is softened with --fe; when the shop arrives --fe opens to 100% and the field is exactly as designed. */
const FIELD_EDGE = "linear-gradient(to right, #000 var(--fe), transparent calc(var(--fe) + 7%))";
const fieldMask = { WebkitMaskImage: FIELD_EDGE, maskImage: FIELD_EDGE };

const LAYERS = [
  { id: "sky", src: "/journey/03-sky.webp" },
  { id: "clouds", src: "/journey/04-clouds.webp" },
  { id: "field", src: "/journey/06-field.webp", style: fieldMask },
  { id: "shop", src: "/journey/08-shop.webp" },
  { id: "before", src: "/journey/05-woman-before.webp", origin: "41% 90%" },
  { id: "after", src: "/journey/07-woman-after.webp", origin: "58.6% 85%" },
  { id: "road", src: "/journey/01-road.webp" },
  { id: "bus", src: "/journey/02-bus.webp" },
];

const EASE_IO = [0.65, 0, 0.35, 1];
const EASE_BUS = [0.45, 0, 0.55, 1];
const EASE_OUT = [0.16, 1, 0.3, 1];

/* the timeline, in seconds */
const T = {
  bus1: 0.6, // the bus drives in ...
  bus1Len: 2.4,
  wait: 6, //   ... and waits here for 6 seconds
};
T.bus2 = T.bus1 + T.bus1Len + T.wait; // then it carries on and parks
T.bus2Len = 2.4;
T.arrive = T.bus2 + T.bus2Len;
T.end = T.arrive + 1.9;

/* title / text: shown on the hill once the bus has parked. Nothing is shown until wording is passed in. */
export default function JourneyStory({ title, text }) {
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

  useEffect(() => {
    if (reduce || !ready || !seen) return;
    const root = stageRef.current;
    if (!root) return;
    const el = (id) => root.querySelector(`[data-layer="${id}"]`);
    const run = [];
    const go = (target, keyframes, options) => run.push(animate(target, keyframes, options));
    const bus = el("bus");
    const drive = (t) => (bus.style.transform = busTransform(t));
    /* a woman pops up from behind the hill: she rises while fading in quickly (the delay has to be repeated for opacity) */
    const pop = (target, delay) => {
      go(target, { y: ["40%", "0%"] }, { delay, duration: 1.1, ease: EASE_OUT });
      go(target, { opacity: [0, 1] }, { delay, duration: 0.35, ease: "easeOut" });
    };

    // 1. the bus drives in and stops half way
    go(0, BUS_MID, { delay: T.bus1, duration: T.bus1Len, ease: EASE_BUS, onUpdate: drive });

    // 2. while it waits: the sky opens from the top of the hill, clouds fade in, the field and the left woman pop up
    const w = T.bus1 + T.bus1Len; // the moment the bus stops
    go(el("sky"), { clipPath: ["circle(0% at 50% 64.5%)", "circle(95% at 50% 64.5%)"] }, { delay: w + 0.3, duration: 1.5, ease: EASE_IO });
    go(el("clouds"), { opacity: [0, 1] }, { delay: w + 1.4, duration: 1.3, ease: "easeOut" });
    go(el("clouds"), { x: ["1.5%", "-1.5%"] }, { delay: w + 1.4, duration: 16, ease: "linear" });
    go(el("field"), { opacity: [0, 1], y: ["14%", "0%"] }, { delay: w + 2.2, duration: 1.1, ease: EASE_OUT });
    pop(el("before"), w + 3.5);

    // 3. the bus carries on and parks at the top of the hill
    go(BUS_MID, 1, { delay: T.bus2, duration: T.bus2Len, ease: EASE_BUS, onUpdate: drive });

    // 4. the right woman pops up from behind the hill, then the shop behind her
    pop(el("after"), T.arrive);
    go(el("shop"), { opacity: [0, 1], y: ["14%", "0%"] }, { delay: T.arrive + 0.3, duration: 1.1, ease: EASE_OUT });
    go(el("field"), { "--fe": ["42%", "100%"] }, { delay: T.arrive + 0.3, duration: 1.3, ease: EASE_IO });
    const cap = el("caption");
    if (cap) go(cap, { opacity: [0, 1] }, { delay: T.arrive + 1.2, duration: 0.8, ease: "easeOut" });

    const timer = setTimeout(() => setDone(true), T.end * 1000);
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
    if (reduce) return id === "field" ? { "--fe": "100%" } : {};
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
            aria-label="A journey from labour to livelihood: a bus drives up a hill road to a milestone that reads Taking a million from childhood to livelihood; behind the hill, a woman carrying a metal bowl on her head stands in a wheat field, and beside her a woman shows packets of spices in front of her own spice and general store."
            className="relative aspect-[1366/768] w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
            style={{ containerType: "inline-size" }}
          >
            {LAYERS.map((l) => (
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
                style={{ ...l.style, ...(l.origin ? { transformOrigin: l.origin } : null), ...start(l.id) }}
              />
            ))}
            {(title || text) && (
              <div
                data-layer="caption"
                className="pointer-events-none absolute bottom-[3%] left-1/2 hidden w-[52%] -translate-x-1/2 text-center text-white sm:block"
                style={reduce ? undefined : { opacity: 0 }}
              >
                {title && <p className="font-extrabold uppercase" style={{ fontSize: "2.1cqw", lineHeight: 1.3 }}>{title}</p>}
                {text && <p style={{ fontSize: "1.7cqw", lineHeight: 1.45, marginTop: "0.5cqw" }}>{text}</p>}
              </div>
            )}
          </div>
          {(title || text) && (
            <div className="mt-5 text-center sm:hidden">
              {title && <p className="text-lg font-extrabold uppercase text-[#1A1A1A]">{title}</p>}
              {text && <p className="mt-2 text-base text-[#1A1A1A]/80">{text}</p>}
            </div>
          )}
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
