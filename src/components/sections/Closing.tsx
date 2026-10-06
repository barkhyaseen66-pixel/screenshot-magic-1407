import { useState } from "react";
import joseph from "@/assets/joseph.jpg";
import hero from "@/assets/hero-scene.jpg";
import { BookMockup } from "../BookMockup";
import { FadeIn, Stagger, StaggerItem } from "../motion";

export function Author() {
  return (
    <section id="joseph" className="bg-paper px-6 py-28 text-ink lg:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeIn className="mx-auto w-full max-w-sm">
          <div className="border border-gold p-3">
            <img src={joseph} alt="Joseph Estes smiling outdoors near a castle and loch" loading="lazy" width={248} height={240} className="aspect-[4/5] w-full object-cover" />
          </div>
        </FadeIn>
        <div>
          <p className="eyebrow text-slate">The author</p>
          <h2 className="mt-6 text-5xl sm:text-6xl">About Joseph Estes</h2>
          <FadeIn className="mt-8 max-w-xl space-y-5 leading-relaxed text-muted-foreground">
            <p>Joseph Estes grew up in a small Southeast Texas town as the son of a Baptist preacher. His life was shaped by faith, family, hard work, integrity and responsibility.</p>
            <p>From his first jobsite at twenty-three to years of leadership, he learned how easily we let our work speak for our worth. His writing explores what it means to stop proving and start becoming.</p>
          </FadeIn>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {["Faith", "Family", "Leadership", "Legacy"].map((w) => <li key={w} className="eyebrow text-ink">{w}<span className="ml-6 text-gold" aria-hidden>·</span></li>)}
          </ul>
          <p className="mt-12 font-display text-5xl italic text-gold" aria-label="Signature: Joseph Estes">Joseph Estes</p>
        </div>
      </div>
    </section>
  );
}

export function Legacy() {
  return (
    <section aria-labelledby="legacy-title" className="relative overflow-hidden bg-dusk px-6 py-32 text-cream lg:py-48">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2">
        {[0, 2, 4, 6].map((d) => (
          <span key={d} className="absolute inset-0 rounded-full border border-amber/30 animate-ripple" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 id="legacy-title" className="text-5xl leading-tight sm:text-7xl">What will your life <em>leave behind?</em></h2>
        <Stagger className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {["Character.", "Presence.", "Integrity.", "Grace.", "Faith.", "Love."].map((w) => (
            <StaggerItem key={w}><span className="font-display text-3xl italic sm:text-4xl">{w}</span></StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.4}>
          <blockquote className="mx-auto mt-20 max-w-2xl font-display text-2xl leading-relaxed text-cream sm:text-3xl">
            “Legacy is not only what remains after you are gone. It is what you are placing into other lives while you are here.”
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

export function ReviewCard({ quote, name, role }: { quote: string; name: string; role?: string }) {
  return (
    <figure className="border-t border-gold pt-8">
      <blockquote className="font-display text-2xl italic leading-snug">“{quote}”</blockquote>
      <figcaption className="mt-6"><span className="eyebrow text-ink">{name}</span>{role && <span className="mt-1 block text-sm text-muted-foreground">{role}</span>}</figcaption>
    </figure>
  );
}

export function Praise() {
  return (
    <section aria-labelledby="praise-title" className="bg-cream px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-slate">Early praise</p>
        <h2 id="praise-title" className="mt-4 text-4xl">Advance Praise Coming Soon</h2>
        <div className="mt-12 grid gap-12 opacity-60 md:grid-cols-3">
          {[1, 2, 3].map((n) => <ReviewCard key={n} quote="Endorsement to be added." name="Reviewer name" role="Placeholder — awaiting real endorsement" />)}
        </div>
      </div>
    </section>
  );
}

const retailers = ["Amazon", "Barnes & Noble", "Publisher", "Independent Bookstores"];

export function BuySection() {
  return (
    <section id="buy" className="relative overflow-hidden bg-navy px-6 py-28 text-cream lg:py-40">
      <img src={hero} alt="" aria-hidden loading="lazy" width={910} height={610} className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-4xl leading-tight sm:text-6xl">Maybe the question was never, <em className="text-amber">‘Am I enough?’</em></h2>
          <p className="mt-8 font-display text-2xl text-cream/90 sm:text-3xl">Maybe the better question is: <em>‘Who am I becoming?’</em></p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="#retailers" className="btn-gold">Get the Book</a>
            <a href="#book" className="btn-line">Read the First Chapter</a>
          </div>
          <ul id="retailers" className="mt-14 grid grid-cols-2 gap-px bg-cream/15 sm:grid-cols-4">
            {retailers.map((r) => (
              <li key={r} className="bg-navy/90 p-4">
                <span className="block text-sm text-cream">{r}</span>
                <span className="text-xs text-sand">Link coming soon</span>
              </li>
            ))}
          </ul>
        </div>
        <BookMockup reflect className="mx-auto w-60 sm:w-72 lg:w-80" />
      </div>
    </section>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section aria-labelledby="news-title" className="bg-paper px-6 py-24 text-ink">
      <div className="mx-auto max-w-xl text-center">
        <h2 id="news-title" className="text-4xl sm:text-5xl">A quieter kind of inbox.</h2>
        <p className="mt-4 text-muted-foreground">Occasional reflections on identity, purpose, faith, family, leadership and becoming.</p>
        {done ? (
          <p role="status" className="mt-10 font-display text-2xl italic text-gold">Thank you. We’ll write when it matters.</p>
        ) : (
          <form className="mt-10 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" required placeholder="Your email address"
              className="min-h-12 flex-1 border-b border-ink/30 bg-transparent px-1 text-ink placeholder:text-muted-foreground focus:border-gold focus:outline-none" />
            <button className="btn-gold">Join the Reflection</button>
          </form>
        )}
        <p className="eyebrow mt-6 text-muted-foreground">No noise. No daily emails.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl italic">Am I Enough?</p>
          <p className="mt-2 font-display italic text-sand">“Your worth was never something you had to earn.”</p>
        </div>
        <div className="text-sm text-cream/70">
          <p>Published by Collingwood Press</p>
          <p className="mt-1">© {new Date().getFullYear()} Joseph Estes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
