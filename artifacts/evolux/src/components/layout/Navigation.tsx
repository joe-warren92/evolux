import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, FileSearch, BookOpen, MapPin } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const RESOURCES = [
  {
    icon: FileSearch,
    label: "Free Website Review",
    desc: "Personalised video in your inbox in 48 hours",
    href: "/free-review",
    accent: true,
  },
  {
    icon: BookOpen,
    label: "Insights",
    desc: "Strategy, design & hiring guides",
    href: "/insights",
    accent: false,
  },
  {
    icon: MapPin,
    label: "Locations",
    desc: "Sunderland & across the North East",
    href: "/locations",
    accent: false,
  },
];

const NAV_LINKS = [
  { label: "Projects",  href: "/projects" },
  { label: "Services",  href: "/services/web-design" },
  { label: "Packages",  href: "/packages" },
  { label: "About",     href: "/about" },
];

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export function Navigation() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const menuBtnRef                        = useRef<HTMLButtonElement>(null);
  const dropdownRef                       = useRef<HTMLDivElement>(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body lock when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Escape closes everything */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) { setMenuOpen(false); menuBtnRef.current?.focus(); }
      setResourcesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* click outside closes dropdown */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const close = () => { setMenuOpen(false); setResourcesOpen(false); };

  /* ── Render ── */
  return (
    <>
      {/* Skip link */}
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold rounded-full">
        Skip to content
      </a>

      {/* ── Header bar ── */}
      <motion.header
        role="banner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/98 backdrop-blur-xl border-b border-foreground/8 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Inner layout — 3-col grid */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-[64px] grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-3 lg:gap-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Evolux — go to homepage"
            data-testid="link-logo"
            className="font-black text-[11px] tracking-[0.3em] uppercase text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
          >
            EVOLUX
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center justify-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase()}`}
                className="relative text-[13px] font-medium text-foreground/50 hover:text-foreground transition-colors duration-200 py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm whitespace-nowrap"
              >
                {link.label}
                <span aria-hidden className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}

            {/* Resources dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setResourcesOpen(v => !v)}
                className={`flex items-center gap-1 text-[13px] font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm whitespace-nowrap ${resourcesOpen ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-250 ${resourcesOpen ? "rotate-180 text-accent" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[272px] z-50"
                    style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.10))" }}
                  >
                    {/* Arrow */}
                    <div
                      aria-hidden
                      className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-border rotate-45"
                    />
                    {/* Panel */}
                    <div className="bg-white border border-border rounded-2xl overflow-hidden">
                      {/* Accent rule */}
                      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, hsl(22 88% 48%) 0%, hsl(22 88% 58% / 0.25) 100%)" }} />
                      <div className="p-2">
                        {RESOURCES.map(item => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl hover:bg-foreground/[0.035] transition-colors group cursor-pointer"
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${item.accent ? "bg-accent/10 group-hover:bg-accent/15" : "bg-foreground/5 group-hover:bg-foreground/8"}`}>
                                <Icon size={14} className={`transition-colors ${item.accent ? "text-accent" : "text-foreground/45 group-hover:text-foreground/70"}`} />
                              </div>
                              <div>
                                <p className={`text-[13px] font-semibold leading-none mb-1 transition-colors ${item.accent ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                                  {item.label}
                                </p>
                                <p className="text-[11px] text-foreground/40 leading-snug">{item.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* ── Right: CTA + status + mobile toggle ── */}
          <div className="flex items-center justify-end gap-3">

            {/* Availability pill — large screens only */}
            <div aria-label="Currently available for new projects" className="hidden xl:flex items-center gap-1.5">
              <span className="relative flex h-[6px] w-[6px]" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500" />
              </span>
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-foreground/35">Available</span>
            </div>

            {/* Divider */}
            <div className="hidden xl:block w-px h-4 bg-foreground/10" />

            {/* CTA — desktop */}
            <a
              href="#review"
              aria-label="Get a free website review"
              data-testid="nav-review-cta"
              className="hidden lg:inline-flex items-center gap-1.5 bg-foreground text-white px-4 py-2 rounded-full text-[11.5px] font-semibold tracking-[0.04em] hover:bg-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Free Review
              <ArrowUpRight size={10} strokeWidth={2.5} />
            </a>

            {/* Hamburger — below lg */}
            <button
              ref={menuBtnRef}
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex items-center justify-center w-9 h-9 -mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
            >
              <span className="flex flex-col gap-[5px] w-[18px]">
                <motion.span
                  className="block h-[1.5px] bg-foreground origin-center rounded-full"
                  animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-foreground rounded-full"
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.18 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-foreground origin-center rounded-full"
                  style={{ width: "12px" }}
                  animate={menuOpen ? { rotate: -45, y: -6.5, width: "18px" } : { rotate: 0, y: 0, width: "12px" }}
                  transition={{ duration: 0.22 }}
                />
              </span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* ── Mobile / tablet overlay menu ── */}
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-[64px]"
          >
            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="flex-1 px-5 md:px-8 pt-3 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.04 + i * 0.05 }}
                  className="flex items-center justify-between py-[18px] border-b border-foreground/6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-150">
                    {link.label}
                  </span>
                  <ArrowUpRight size={14} className="text-foreground/20 group-hover:text-accent transition-colors duration-150" />
                </motion.a>
              ))}

              {/* Resources — expanded in mobile */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.04 + NAV_LINKS.length * 0.05 }}
                className="border-b border-foreground/6"
              >
                <div className="flex items-center justify-between py-[18px]">
                  <span className="text-2xl font-semibold tracking-tight text-foreground/35">Resources</span>
                </div>
                <div className="flex flex-col gap-1 pb-4 -mt-1">
                  {RESOURCES.map(item => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-foreground/4 group transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.accent ? "bg-accent/10" : "bg-foreground/5"}`}>
                          <Icon size={13} className={item.accent ? "text-accent" : "text-foreground/40"} />
                        </div>
                        <div>
                          <p className={`text-[14px] font-semibold leading-none mb-0.5 ${item.accent ? "text-accent" : "text-foreground"}`}>{item.label}</p>
                          <p className="text-[11px] text-foreground/40">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </nav>

            {/* Bottom CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.28 }}
              className="px-5 md:px-8 pb-8 pt-5 border-t border-foreground/6 flex flex-col gap-3"
            >
              <a
                href="#review"
                onClick={close}
                className="w-full bg-foreground text-white py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Free Website Review
                <ArrowUpRight size={14} />
              </a>
              <div className="flex items-center justify-center gap-2 py-1">
                <span className="relative flex h-[6px] w-[6px]" aria-hidden>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50" />
                  <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-foreground/35">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
