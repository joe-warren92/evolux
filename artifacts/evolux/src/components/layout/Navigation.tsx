import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work",     href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Insights", href: "#insights" },
  { label: "About",    href: "#about" },
];

export function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuBtnRef                = useRef<HTMLButtonElement>(null);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── body scroll lock when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── close on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Skip to content ── */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      {/* ── Header ── */}
      <motion.header
        role="banner"
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || menuOpen
            ? "bg-white/97 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* 3-column grid: logo | nav | actions */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[62px] grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Evolux — go to homepage"
            data-testid="link-logo"
            className="justify-self-start font-black text-[11px] tracking-[0.28em] uppercase text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            EVOLUX
          </Link>

          {/* ── Desktop nav — centred ── */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className="relative text-[13px] font-normal text-foreground/50 hover:text-foreground transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
              >
                {link.label}
                {/* Accent dot — hover indicator */}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-200"
                />
              </a>
            ))}
          </nav>

          {/* ── Right: CTA + status + mobile toggle ── */}
          <div className="justify-self-end flex items-center gap-3">

            {/* CTA */}
            <a
              href="#review"
              aria-label="Get a free website review"
              data-testid="nav-review-cta"
              className="hidden sm:inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-[7px] text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-accent/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{ borderRadius: "3px" }}
            >
              Free Website Review
              <ArrowUpRight size={10} strokeWidth={2.5} />
            </a>

            {/* Availability status — desktop only */}
            <div
              aria-label="Currently available for new projects"
              className="hidden lg:flex items-center gap-2"
            >
              <span className="relative flex h-[7px] w-[7px]" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-foreground/40">
                Available
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuBtnRef}
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 -mr-1"
            >
              <motion.span
                className="block h-px bg-foreground origin-center"
                animate={menuOpen
                  ? { width: "20px", rotate: 45, y: 6 }
                  : { width: "20px", rotate: 0,  y: 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="block h-px bg-foreground"
                animate={menuOpen
                  ? { width: "0px", opacity: 0 }
                  : { width: "14px", opacity: 1 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                className="block h-px bg-foreground origin-center"
                animate={menuOpen
                  ? { width: "20px", rotate: -45, y: -6 }
                  : { width: "20px", rotate: 0,   y: 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-white flex flex-col md:hidden pt-[62px]"
          >
            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="flex-1 flex flex-col px-6 pt-2 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.04 + i * 0.045 }}
                  className="flex items-center justify-between py-5 border-b border-border group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="text-[1.625rem] font-semibold tracking-[-0.02em] text-foreground group-hover:text-accent transition-colors duration-150">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-foreground/20 group-hover:text-accent transition-colors duration-150"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Footer actions */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.25 }}
              className="px-6 pb-10 pt-6 border-t border-border flex flex-col gap-4"
            >
              <a
                href="#review"
                onClick={close}
                style={{ borderRadius: "3px" }}
                className="w-full bg-accent text-accent-foreground py-4 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Free Website Review
                <ArrowUpRight size={14} />
              </a>
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-[7px] w-[7px]" aria-hidden>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-foreground/35">
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
