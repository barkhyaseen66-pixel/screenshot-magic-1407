import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import maskImg from "@/assets/mask.jpg";
import jobsite from "@/assets/jobsite.jpg";
import freedom from "@/assets/freedom.jpg";
import { FadeIn, RevealText } from "../motion";

const masks = [
  { t: "The Successful One", d: "Everyone assumes they have it figured out.", pos: "30% center" },
  { t: "The Funny One", d: "Laughter can become the safest hiding place.", pos: "45% center" },
  { t: "The Perfectionist", d: "From the outside it looks like excellence. From the inside it can feel like fear.", pos: "60% center" },
  { t: "The Strong One", d: "Everyone depends on them. They learn to depend on no one.", pos: "75% center" },
];

export function Masks() {
  return (
    <section aria-labelledby="masks-title" className="bg-ink px-6 py-28 text-cream lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-amber">The masks we wear</p>
        <RevealText lines={["Who are you when", <em key="e">no one is watching?</em>]} className="mt-6 text-5xl leading-tight sm:text-6xl" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {masks.map((m, i) => (
            <FadeIn key={m.t} delay={i * 0.12}>
              <article tabIndex={0} className="group relative aspect-[3/4.4] overflow-hidden outline-none">
                <img src={maskImg} alt="" aria-hidden loading="lazy" width={800} height={1104}
                  style={{ objectPosition: m.pos, filter: `hue-rotate(${i * -6}deg)` }}
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 grayscale-[40%] transition duration-[1.6s] group-hover:scale-100 group-hover:opacity-90 group-hover:grayscale-0 group-focus-visible:opacity-90" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <span className="font-display text-lg text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="eyebrow !text-xs text-cream">{m.t}</h3>
                    <p className="mt-3 font-display text-xl italic leading-snug text-cream/90 lg:translate-y-2 lg:opacity-70 lg:transition lg:duration-700 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">“{m.d}”</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JosephStory() {
  return (
    <section aria-labelledby="story-title" className="relative bg-navy text-cream">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[60svh] lg:sticky lg:top-0 lg:h-screen">
          <img src={jobsite} alt="A white hard hat resting on concrete at a highway construction site at sunrise, cranes in the distance" loading="lazy" width={1600} height={1008} className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy" />
        </div>
        <div className="px-6 py-24 lg:px-16 lg:py-40">
          <p className="eyebrow text-amber">Joseph’s journey</p>
          <h2 id="story-title" className="mt-6 text-5xl sm:text-6xl">The hard hat <em>was new.</em></h2>
          <FadeIn className="mt-12 max-w-lg space-y-8 font-display text-2xl leading-relaxed text-cream/90">
            <p>At twenty-three, Joseph walked onto an $84 million highway project surrounded by men who seemed to know exactly where they belonged.</p>
            <p>His hard hat was new.<br /><em className="text-amber">His confidence wasn’t.</em></p>
          </FadeIn>
          <FadeIn className="mt-20 max-w-lg">
            <div className="gold-rule" />
            <p className="mt-10 text-lg leading-relaxed text-cream/80">The jobsite was measuring his work. He had mistaken it for a measure of his worth.</p>
          </FadeIn>
          <FadeIn className="mt-24">
            <blockquote className="relative max-w-lg border-l border-gold pl-8">
              <span aria-hidden className="absolute -left-2 -top-10 font-display text-8xl text-gold/50">“</span>
              <p className="font-display text-4xl italic leading-tight">You don’t have to prove you belong here. You already do.</p>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const chapters = [
  ["Where Did the Question Begin?", "Tracing the quiet moments when we first started measuring ourselves."],
  ["The Mirror", "Looking honestly at the reflection — and the masks layered over it."],
  ["What Is the True Measure of a Life?", "Questioning the scoreboards we inherited without choosing."],
  ["The Weight We Cannot See", "The pressure, fear and responsibility carried in silence."],
  ["The Measure That Never Changed", "Discovering a worth that performance can neither add to nor take away."],
  ["The Freedom of Knowing Your Worth", "What opens up when you stop living on trial."],
  ["The Legacy of a Life Well Lived", "Character, presence and love as what truly remains."],
  ["Now Go Live", "An invitation to become who you were created to be."],
];

export function Journey() {
  const [active, setActive] = useState(0);
  return (
    <section id="inside" className="bg-paper px-6 py-28 text-ink lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="eyebrow text-slate">Inside the book</p>
          <h2 className="mt-6 text-5xl leading-tight sm:text-6xl">A journey from <em className="text-gold">proving</em> to becoming.</h2>
          <div className="relative mt-12 hidden aspect-square max-w-sm place-items-center lg:grid" aria-hidden>
            {[1, 2, 3, 4].map((r) => (
              <span key={r} className="absolute rounded-full border border-gold/30" style={{ inset: `${r * 10}%` }} />
            ))}
            <AnimatePresence mode="wait">
              <motion.span key={active} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
                className="font-display text-[9rem] leading-none text-gold">0{active + 1}</motion.span>
            </AnimatePresence>
          </div>
        </div>
        <ol className="relative border-l border-border">
          <motion.span aria-hidden className="absolute -left-px top-0 w-px bg-gold" animate={{ height: `${((active + 1) / chapters.length) * 100}%` }} transition={{ duration: 0.8 }} />
          {chapters.map(([t, s], i) => (
            <motion.li key={t} onViewportEnter={() => setActive(i)} viewport={{ margin: "-45% 0px -45% 0px" }}
              className={`py-10 pl-8 transition-opacity duration-700 sm:pl-12 ${i === active ? "opacity-100" : "opacity-50"}`}>
              <span className="font-display text-gold">Chapter 0{i + 1}</span>
              <h3 className="mt-2 text-3xl sm:text-4xl">{t}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{s}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const prompts = [
  "When did you first begin wondering whether you were enough?",
  "Where have you confused your performance with your value?",
  "If you stopped trying to prove your worth, what would you be free to become?",
];

export function QuietSpace() {
  return (
    <section id="reflections" className="bg-cream px-6 py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-slate">Reflections</p>
        <h2 className="mt-6 text-5xl tracking-[0.12em] sm:text-6xl">THE QUIET SPACE</h2>
        <p className="mt-6 font-display text-2xl italic text-slate">Some questions should not be answered quickly.</p>
      </div>
      <div className="mx-auto mt-24 max-w-3xl space-y-28">
        {prompts.map((p, i) => (
          <FadeIn key={p}>
            <span className="font-display text-gold">0{i + 1}</span>
            <p className="mt-4 font-display text-3xl leading-snug sm:text-4xl">{p}</p>
            <motion.div aria-hidden className="mt-6 h-px origin-left bg-gold" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.3 }} />
            <label htmlFor={`reflect-${i}`} className="sr-only">Private reflection for: {p}</label>
            <textarea id={`reflect-${i}`} rows={3} placeholder="Write privately here…"
              className="mt-6 w-full resize-none bg-transparent font-display text-xl italic leading-relaxed text-ink placeholder:text-muted-foreground focus:outline-none" />
          </FadeIn>
        ))}
        <p className="eyebrow text-center text-muted-foreground">Your reflection stays in your browser. Nothing is saved or sent.</p>
      </div>
    </section>
  );
}

const freedoms = ["to fail", "to rest", "to say no", "to ask for help", "to love", "to become"];

export function Freedom() {
  return (
    <section aria-labelledby="free-title" className="relative overflow-hidden bg-gradient-to-b from-navy via-slate to-paper px-6 pb-28 pt-28 text-cream lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <RevealText lines={["What becomes possible when", <em key="e" className="text-amber">worth is no longer on trial?</em>]} className="max-w-4xl text-4xl leading-tight sm:text-6xl" />
        <ul className="mt-20 grid gap-x-12 sm:grid-cols-2">
          {freedoms.map((f, i) => (
            <FadeIn key={f} delay={(i % 2) * 0.15}>
              <li className={`border-t border-cream/25 py-8 ${i % 2 ? "sm:mt-16" : ""}`}>
                <span className="eyebrow text-sand">The freedom</span>
                <p className="mt-2 font-display text-4xl italic sm:text-5xl">{f}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-20">
          <img src={freedom} alt="A calm lake at sunrise with golden mist and distant mountains" loading="lazy" width={1600} height={912} className="aspect-[16/7] w-full object-cover" />
        </FadeIn>
      </div>
    </section>
  );
}
