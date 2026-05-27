import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[60px] transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_hsl(0_0%_91%)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-sans font-black text-xs tracking-[0.28em] uppercase text-foreground"
        data-testid="link-logo"
      >
        EVOLUX
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Pricing", href: "#pricing" },
          { label: "Insights", href: "#insights" },
        ].map(item => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-normal text-foreground/50 hover:text-foreground transition-colors duration-200"
            data-testid={`link-${item.label.toLowerCase()}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#review"
          className="hidden sm:flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-full type-label hover:bg-accent/90 transition-colors"
          data-testid="nav-review-cta"
        >
          Free review <ArrowUpRight size={11} />
        </a>
        <div className="flex items-center gap-2 border border-border bg-background/80 px-3 py-1.5 rounded-full type-label text-foreground/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          <span className="hidden lg:inline tracking-[0.1em]">Available</span>
        </div>
      </div>
    </motion.nav>
  );
}
