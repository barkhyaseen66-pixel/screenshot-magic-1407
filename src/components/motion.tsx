import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({ children, delay = 0, y = 16, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line reveal: each line slides up from behind a clip. */
export function RevealText({ lines, className, as: Tag = "h2", delay = 0 }: { lines: ReactNode[]; className?: string; as?: "h1" | "h2" | "h3" | "p"; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: reduce ? 0 : "105%", opacity: reduce ? 0 : 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: delay + i * 0.14, ease }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

const parent: Variants = { show: { transition: { staggerChildren: 0.18 } } };
const child: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease } } };

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={parent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15% 0px" }}>
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={child}>{children}</motion.div>;
}
