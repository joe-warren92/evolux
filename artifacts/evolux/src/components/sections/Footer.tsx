import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display text-5xl md:text-8xl tracking-tight mb-16 leading-tight">
            <span className="block text-muted-foreground font-normal">Ready to build</span>
            <span className="block font-bold">something remarkable?</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <button 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
              data-testid="button-start-project"
            >
              Start a Project &rarr;
            </button>
            <span className="text-muted-foreground text-xl">
              Or reach out at <a href="mailto:hello@evolux.studio" className="text-foreground hover:underline">hello@evolux.studio</a>
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-sm text-muted-foreground border-t border-border pt-8 mt-auto">
          <div className="flex items-center gap-8">
            <span className="font-display font-medium tracking-[0.2em] uppercase text-foreground">EVOLUX</span>
            <div className="hidden md:flex gap-6">
              <a href="#work" className="hover:text-foreground transition-colors">Work</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <p>© {new Date().getFullYear()} Evolux Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
