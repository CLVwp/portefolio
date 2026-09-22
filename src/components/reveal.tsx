"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      className={className}
      initial={{ y: 64, opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      viewport={{ amount: 0.3, once: true }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
    >
      {children}
    </motion.div>
  );
}
