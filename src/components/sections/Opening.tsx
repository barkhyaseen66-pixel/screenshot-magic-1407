import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-scene.jpg";
import { BookMockup } from "../BookMockup";
import { FadeIn, RevealText, Stagger, StaggerItem } from "../motion";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy text-cream">
      <img src={hero} alt="" aria-hidden width={910} height={822} className="absolute inset-0 h-full w-full object-cover object-[60%_center] animate-drift" />
      <div aria-hidden className="absolute bottom-[18%] right-[22%] h-64 w-64 rounded-full bg-amber/40 blur-3xl animate-shimmer" />
      <div aria-hidden className="absolute inset-0 bg-veil" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="max-w-xl">
          <FadeIn><p className="eyebrow text-amber">A book by Joseph Estes</p></FadeIn>
          <RevealText as="h1" delay={0.2} lines={["Am I", <em key="e" className="text-amber">Enough?</em>]}
            className="mt-6 text-[4.25rem] leading-[0.92] sm:text-8xl lg:text-[8.5rem]" />
          <FadeIn delay={0.7}>
            <p className="mt-8 font-display text-2xl leading-snug text-cream/95 sm:text-[1.75rem]">
              A deeply personal journey from proving your worth to living as though it was never in question.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
              For anyone who has ever wondered whether they were successful enough, strong enough, loved enough, or simply enough.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#book" className="btn-gold">Explore the Book</a>
              <a href="#reflections" className="btn-line">Read a Reflection</a>
            </div>
            <a href="#joseph" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand hover:text-amber">
              Meet Joseph <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </FadeIn>
        </div>
        <BookMockup eager className="mx-auto w-56 sm:w-64 lg:w-80" />
      </div>

      <p className="absolute bottom-8 left-6 hidden font-display text-lg italic text-sand md:block lg:left-10">
        “Your worth was never something you had to earn.”
      </p>
      <div aria-hidden className="absolute bottom-6 right-1/2 h-12 w-px translate-x-1/2 overflow-hidden bg-cream/20 md:right-10">
        <span className="block h-full w-full bg-gold animate-cue" />
      </div>
    </section>
  );
}

const questions = ["Am I doing enough?", "Am I making people proud?", "Am I living up to what others expected of me?"];

export function QuestionSection() {
  return (
    <section aria-labelledby="q-title" className="bg-paper px-6 py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-4xl">
        <p id="q-title" className="eyebrow text-slate">The question we carry</p>
        <div className="mt-14 space-y-8">
          {questions.map((q, i) => (
            <FadeIn key={q} delay={i * 0.1} y={24}>
              <p className="font-display text-4xl leading-tight text-ink/80 sm:text-6xl" style={{ paddingLeft: `${i * 6}%` }}>“{q}”</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-24"><div className="gold-rule" /></FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-16 text-center font-display text-3xl italic text-slate sm:text-4xl">What if we have been asking the wrong question?</p>
        </FadeIn>
        <div className="mt-16 grid items-center gap-8 text-center sm:grid-cols-[1fr_auto_1fr]">
          <FadeIn><p className="eyebrow !text-sm text-muted-foreground line-through decoration-gold/70">Am I enough?</p></FadeIn>
          <span aria-hidden className="mx-auto h-px w-16 bg-gold sm:h-16 sm:w-px" />
          <FadeIn delay={0.4}><p className="eyebrow !text-sm text-ink">Who am I becoming?</p></FadeIn>
        </div>
        <FadeIn delay={0.5}>
          <h2 className="mt-16 text-center text-4xl leading-tight sm:text-6xl">
            “Am I becoming the person I was <em className="text-gold">created</em> to be?”
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}

export function BookOverview() {
  return (
    <section id="book" className="bg-navy px-6 py-28 text-cream lg:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <BookMockup reflect className="mx-auto w-56 sm:w-72" />
        <div>
          <p className="eyebrow text-amber">The Book</p>
          <RevealText lines={["This is not a book", "about doing more."]} className="mt-6 text-5xl leading-[1.02] sm:text-6xl" />
          <FadeIn delay={0.3}>
            <p className="mt-8 max-w-xl leading-relaxed text-cream/80">
              <em>Am I Enough?</em> explores the hidden struggle behind achievement, approval, fear, responsibility and the masks we learn to wear.
              Through personal stories and honest reflection, Joseph Estes reveals how easily we confuse what we do with who we are — and invites
              readers to discover a deeper understanding of identity, purpose and value.
            </p>
          </FadeIn>
          <Stagger className="mt-12 grid grid-cols-2 border-t border-cream/15 sm:grid-cols-4">
            {["Identity", "Purpose", "Freedom", "Legacy"].map((w, i) => (
              <StaggerItem key={w} className="border-b border-cream/15 py-6 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-4 sm:first:pl-0">
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <p className="eyebrow mt-2 text-cream">{w}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <a href="#inside" className="btn-line mt-12">Discover What’s Inside</a>
        </div>
      </div>
    </section>
  );
}

const metrics = ["Career", "Money", "Titles", "Appearance", "Approval", "Recognition", "Performance"];

export function Scoreboard() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 40%"] });
  return (
    <section ref={ref} aria-labelledby="score-title" className="bg-cream px-6 py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-slate">The inner scoreboard</p>
        <RevealText lines={["The scoreboards change.", <em key="e">The question underneath them doesn’t.</em>]}
          className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl" />
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {metrics.map((m, i) => <Metric key={m} label={m} i={i} progress={scrollYProgress} reduce={!!reduce} />)}
          </ul>
          <div className="border-l border-gold pl-8">
            <p className="eyebrow text-slate">Unchanged</p>
            <p className="mt-2 font-display text-6xl tracking-[0.15em] text-gold sm:text-7xl">WORTH</p>
          </div>
        </div>
        <FadeIn><p className="mt-24 font-display text-3xl leading-snug sm:text-4xl">Life can measure performance.<br /><em className="text-slate">It cannot measure worth.</em></p></FadeIn>
      </div>
    </section>
  );
}

function Metric({ label, i, progress, reduce }: { label: string; i: number; progress: ReturnType<typeof useScroll>["scrollYProgress"]; reduce: boolean }) {
  const start = i / metrics.length * 0.7;
  const opacity = useTransform(progress, [start, start + 0.25], [1, 0.22]);
  const strike = useTransform(progress, [start, start + 0.2], ["0%", "100%"]);
  return (
    <motion.li style={reduce ? {} : { opacity }} className="relative font-display text-3xl text-slate sm:text-5xl">
      {label}
      <motion.span aria-hidden style={{ width: reduce ? "100%" : strike }} className="absolute left-0 top-1/2 h-px bg-ink/70" />
    </motion.li>
  );
}
