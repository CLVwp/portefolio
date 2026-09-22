"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/components/lang-provider";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, t, toggle } = useLang();

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <>
      <motion.header
        animate={{ y: open ? -80 : 0, opacity: open ? 0 : 1 }}
        className="sticky top-0 z-40 border-b border-white/10 bg-black"
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="mx-auto flex max-w-6xl items-stretch justify-between">
          <Link
            className="flex items-center border-r border-white/10 px-6 py-4 font-mono text-sm tracking-[0.2em] text-white transition-colors hover:bg-white/5"
            href="/"
          >
            CLM
          </Link>

          <nav className="hidden items-stretch md:flex">
            {links.map((link) => (
              <Link
                className={`flex items-center border-r border-white/10 px-6 font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:bg-white/5 ${
                  pathname === link.href ? "text-white" : "text-white/50"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-stretch">
            <button
              aria-label="Toggle language"
              className="flex items-center border-l border-white/10 px-4 font-mono text-xs tracking-[0.2em] text-white/70 uppercase transition-colors hover:bg-white/5 hover:text-white"
              onClick={toggle}
              type="button"
            >
              {lang === "fr" ? "FR" : "EN"}
            </button>
            <button
              aria-label={t.nav.menu}
              className="group flex w-14 items-center justify-center border-l border-white/10 transition-colors hover:bg-white/5"
              onClick={() => setOpen(true)}
              type="button"
            >
              <span className="relative block h-3 w-5">
                <span className="absolute top-0 left-0 h-px w-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[1px]" />
                <span className="absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px]" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex flex-col bg-black"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex justify-end border-b border-white/10">
              <button
                aria-label={t.nav.close}
                className="flex h-16 w-16 items-center justify-center border-l border-white/10 transition-colors hover:bg-white/5"
                onClick={() => setOpen(false)}
                type="button"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-white" />
                  <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center">
              {links.map((link, i) => (
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  className="w-full border-b border-white/10"
                  initial={{ y: 48, opacity: 0 }}
                  key={link.href}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.7,
                    ease: EASE,
                  }}
                >
                  <Link
                    className={`block px-8 py-6 text-5xl font-medium tracking-tight transition-colors hover:text-white sm:text-6xl ${
                      pathname === link.href ? "text-white" : "text-white/50"
                    }`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.footer
              animate={{ opacity: 1 }}
              className="px-8 py-10 font-mono text-xs tracking-[0.2em] text-white/40 uppercase"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t.nav.footer}
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
