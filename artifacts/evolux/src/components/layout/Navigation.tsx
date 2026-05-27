import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/80 backdrop-blur-md border-b border-border/40 text-foreground"
    >
      <Link href="/" className="font-display font-medium text-lg tracking-[0.2em] uppercase" data-testid="link-logo">
        EVOLUX
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-normal">
        <a href="#work" className="hover:text-muted-foreground transition-colors" data-testid="link-work">Work</a>
        <a href="#about" className="hover:text-muted-foreground transition-colors" data-testid="link-about">About</a>
        <a href="#services" className="hover:text-muted-foreground transition-colors" data-testid="link-services">Services</a>
        <a href="#contact" className="hover:text-muted-foreground transition-colors" data-testid="link-contact">Contact</a>
      </div>

      <div className="flex items-center gap-2 border border-border px-4 py-2 rounded-full text-sm font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="hidden sm:inline">Available for new projects</span>
      </div>
    </motion.nav>
  );
}
