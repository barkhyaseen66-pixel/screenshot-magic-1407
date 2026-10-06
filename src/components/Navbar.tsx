import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "book", label: "The Book" },
  { id: "inside", label: "Inside the Book" },
  { id: "joseph", label: "About Joseph" },
  { id: "reflections", label: "Reflections" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-700 ${scrolled ? "bg-navy/80 backdrop-blur-md" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <a href="#home" className="font-display text-xl italic tracking-wide">Am I Enough?</a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined}
                className={`relative py-2 text-[0.7rem] uppercase tracking-[0.22em] transition-colors hover:text-amber ${active === l.id ? "text-amber" : "text-cream/80"}`}>
                {l.label}
                {active === l.id && <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />}
              </a>
            </li>
          ))}
        </ul>
        <a href="#buy" className="hidden border-b border-gold pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-amber lg:inline-block">Buy the Book</a>
        <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div role="dialog" aria-modal="true" aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-navy px-8 py-6 text-cream"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center justify-between">
              <span className="font-display text-xl italic">Am I Enough?</span>
              <button className="grid h-11 w-11 place-items-center" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus>
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-16 space-y-6">
              {[...links, { id: "buy", label: "Buy the Book" }].map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`font-display text-4xl ${l.id === "buy" ? "italic text-amber" : ""}`}>{l.label}</a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto font-display italic text-sand">“Your worth was never something you had to earn.”</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
