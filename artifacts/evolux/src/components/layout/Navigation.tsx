import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[60px] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/60 shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-border/30"
      }`}
    >
      <Link
        href="/"
        className="font-sans font-semibold text-sm tracking-[0.22em] uppercase text-foreground"
        data-testid="link-logo"
      >
        EVOLUX
      </Link>

      <div className="hidden md:flex items-center gap-7">
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-200"
            data-testid={`link-${item.label.toLowerCase()}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 border border-border bg-background/80 px-3.5 py-1.5 rounded-full type-label text-foreground/80">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
        </span>
        <span className="hidden sm:inline tracking-[0.1em]">Available for new projects</span>
      </div>
    </motion.nav>
  );
}
