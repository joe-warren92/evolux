import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
    >
      <Link href="/" className="font-display font-bold text-xl tracking-tight uppercase">
        Evolux
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a href="#work" className="hover:text-white/70 transition-colors">Work</a>
        <a href="#services" className="hover:text-white/70 transition-colors">Services</a>
        <a href="#process" className="hover:text-white/70 transition-colors">Process</a>
      </div>

      <a href="#contact" className="text-sm font-medium tracking-wide border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
        Start a Project
      </a>
    </motion.nav>
  );
}
