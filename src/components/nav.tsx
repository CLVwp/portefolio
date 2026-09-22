"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        animate={{ y: open ? -80 : 0, opacity: open ? 0 : 1 }}
        className="fixed top-6 left-1/2 z-40 -translate-x-1/2"
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-2xl">
          <span className="px-4 py-2 text-[13px] font-medium tracking-tight text-white/90">
            CLM
          </span>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-90"
            onClick={() => setOpen(true)}
            type="button"
          >
            <span className="relative block h-3 w-4">
              <span className="absolute top-0 left-0 h-px w-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[1px]" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px]" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex flex-col"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />

            <div className="relative flex justify-end p-6">
              <button
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-90"
                onClick={() => setOpen(false)}
                type="button"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-white" />
                  <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.a
                  animate={{ y: 0, opacity: 1 }}
                  className="text-6xl font-medium tracking-tight text-white/90 transition-colors hover:text-white sm:text-7xl"
                  href={link.href}
                  initial={{ y: 48, opacity: 0 }}
                  key={link.label}
                  onClick={() => setOpen(false)}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.7,
                    ease: EASE,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.footer
              animate={{ opacity: 1 }}
              className="relative px-8 pb-10 text-xs tracking-[0.2em] text-white/40 uppercase"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Available for freelance — 2026
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
