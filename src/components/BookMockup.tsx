import { motion, useReducedMotion } from "framer-motion";
import cover from "@/assets/cover-front.jpg";

export function BookMockup({ className = "", reflect = false, eager = false }: { className?: string; reflect?: boolean; eager?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative [perspective:1600px] ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 40, rotate: reduce ? 0 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 40, damping: 18, delay: 0.3 }}
    >
      <div className="relative [transform:rotateY(-14deg)_rotateX(2deg)] [transform-style:preserve-3d]">
        <img
          src={cover}
          alt="Front cover of Am I Enough? by Joseph Estes — a man sits on a rock watching a golden sunset over water"
          width={910}
          height={1382}
          loading={eager ? "eager" : "lazy"}
          className="relative z-10 block w-full rounded-r-[3px] shadow-book"
        />
        <div aria-hidden className="absolute inset-y-0 left-0 z-20 w-4 bg-gradient-to-r from-ink/60 via-ink/10 to-transparent" />
        <div aria-hidden className="absolute inset-y-[3px] -right-3 z-0 w-3 bg-gradient-to-r from-sand to-cream [transform:rotateY(60deg)] origin-left" />
      </div>
      {reflect && <div aria-hidden className="mx-auto mt-6 h-10 w-3/4 rounded-[50%] bg-gold/30 blur-2xl" />}
    </motion.div>
  );
}
