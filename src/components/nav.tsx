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
        className="sticky top-0 z-40 border-b border-hairline bg-bg"
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-stretch">
          <Link
            className="flex items-center border-r border-hairline px-6 py-4 font-mono text-sm tracking-[0.2em] text-fg transition-colors hover:bg-hover"
            href="/"
          >
            CLM
          </Link>

          {/* Two equal halves around the container axis: the middle border
              continues the pages' central hairline (50% of max-w-6xl) exactly. */}
          <nav className="hidden items-stretch md:grid md:grid-cols-2">
            <div className="flex items-stretch justify-end border-r border-hairline">
              {links.slice(0, 2).map((link) => (
                <Link
                  className={`flex items-center px-6 font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:bg-hover ${
                    pathname === link.href ? "text-fg" : "text-fg-muted"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-stretch">
              {links.slice(2).map((link, i) => (
                <Link
                  className={`flex items-center px-6 font-mono text-xs tracking-[0.2em] uppercase transition-colors hover:bg-hover ${
                    i === 0 ? "border-r border-hairline" : ""
                  } ${pathname === link.href ? "text-fg" : "text-fg-muted"}`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-stretch justify-end">
            <button
              aria-label="Toggle language"
              className="flex items-center border-l border-hairline px-4 font-mono text-xs tracking-[0.2em] text-fg/70 uppercase transition-colors hover:bg-hover hover:text-fg"
              onClick={toggle}
              type="button"
            >
              {lang === "fr" ? "FR" : "EN"}
            </button>
            <button
              aria-label={t.nav.menu}
              className="group flex w-14 items-center justify-center border-l border-hairline transition-colors hover:bg-hover"
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
            className="fixed inset-0 z-50 flex flex-col bg-bg"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex justify-end border-b border-hairline">
              <button
                aria-label={t.nav.close}
                className="flex h-16 w-16 items-center justify-center border-l border-hairline transition-colors hover:bg-hover"
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
                  className="w-full border-b border-hairline"
                  initial={{ y: 48, opacity: 0 }}
                  key={link.href}
                  transition={{
                    delay: 0.1 + i * 0.07,
                    duration: 0.7,
                    ease: EASE,
                  }}
                >
                  <Link
                    className={`block px-8 py-6 text-5xl font-medium tracking-tight transition-colors hover:text-fg sm:text-6xl ${
                      pathname === link.href ? "text-fg" : "text-fg-muted"
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
              className="px-8 py-10 font-mono text-xs tracking-[0.2em] text-fg/40 uppercase"
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
