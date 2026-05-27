import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, FileSearch, BookOpen } from "lucide-react";

/* ─── Resources dropdown items ────────────────────────────── */
const RESOURCES = [
  {
    icon: FileSearch,
    label: "Free Website Review",
    desc: "Personalised video review in 48 hours",
    href: "/free-review",
  },
  {
    icon: BookOpen,
    label: "Insights",
    desc: "Strategy, business case & hiring guides",
    href: "/insights",
  },
];

const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Process",  href: "/#process" },
  { label: "Pricing",  href: "/#pricing" },
  { label: "About",    href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const menuBtnRef                      = useRef<HTMLButtonElement>(null);
  const dropdownRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (menuOpen) { setMenuOpen(false); menuBtnRef.current?.focus(); }
        if (resourcesOpen) setResourcesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, resourcesOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold">
        Skip to content
      </a>

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
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[62px] grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Evolux — go to homepage"
            data-testid="link-logo"
            className="justify-self-start font-black text-[11px] tracking-[0.28em] uppercase text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            EVOLUX
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className="relative text-[13px] font-normal text-foreground/50 hover:text-foreground transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
              >
                {link.label}
                <span aria-hidden className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-200" />
              </a>
            ))}

            {/* Resources dropdown trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResourcesOpen(v => !v)}
                className="relative flex items-center gap-1 text-[13px] font-normal text-foreground/50 hover:text-foreground transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
                <span aria-hidden className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-border rounded-2xl shadow-lg overflow-hidden z-50"
                  >
                    {/* Accent top line */}
                    <div className="h-[2px]" style={{ background: "linear-gradient(90deg, hsl(22 88% 48%) 0%, hsl(22 88% 48% / 0.3) 100%)" }} />
                    <div className="p-2">
                      {RESOURCES.map(item => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setResourcesOpen(false)}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-foreground/[0.04] transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/10 transition-colors">
                              <Icon size={14} className="text-foreground/50 group-hover:text-accent transition-colors" />
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors leading-none mb-1">
                                {item.label}
                              </p>
                              <p className="type-index text-foreground/40 leading-snug">{item.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right: CTA + status + mobile toggle */}
          <div className="justify-self-end flex items-center gap-3">
            <a
              href="#review"
              aria-label="Get a free website review"
              data-testid="nav-review-cta"
              className="hidden sm:inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-[7px] rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase hover:bg-accent/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Free Website Review
              <ArrowUpRight size={10} strokeWidth={2.5} />
            </a>

            <div aria-label="Currently available for new projects" className="hidden lg:flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-foreground/40">Available</span>
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
              <motion.span className="block h-px bg-foreground origin-center"
                animate={menuOpen ? { width: "20px", rotate: 45, y: 6 } : { width: "20px", rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }} />
              <motion.span className="block h-px bg-foreground"
                animate={menuOpen ? { width: "0px", opacity: 0 } : { width: "14px", opacity: 1 }}
                transition={{ duration: 0.18 }} />
              <motion.span className="block h-px bg-foreground origin-center"
                animate={menuOpen ? { width: "20px", rotate: -45, y: -6 } : { width: "20px", rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
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
                  <ArrowUpRight size={15} className="text-foreground/20 group-hover:text-accent transition-colors duration-150" />
                </motion.a>
              ))}

              {/* Resources group in mobile */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.04 + NAV_LINKS.length * 0.045 }}
                className="py-5 border-b border-border"
              >
                <p className="text-[1.625rem] font-semibold tracking-[-0.02em] text-foreground/40 mb-4">Resources</p>
                <div className="flex flex-col gap-2 pl-2">
                  {RESOURCES.map(item => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-3 py-2 group"
                      >
                        <Icon size={14} className="text-foreground/30 group-hover:text-accent transition-colors shrink-0" />
                        <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.25 }}
              className="px-6 pb-10 pt-6 border-t border-border flex flex-col gap-4"
            >
              <Link
                href="/free-review"
                onClick={close}
                className="w-full bg-accent text-accent-foreground py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Free Website Review
                <ArrowUpRight size={14} />
              </Link>
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex h-[7px] w-[7px]" aria-hidden>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-foreground/35">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
