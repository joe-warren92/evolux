import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-display text-5xl md:text-8xl tracking-tight max-w-[12ch] mb-12">
            Let's build something extraordinary.
          </h2>
          <a href="mailto:hello@evolux.studio" className="text-xl md:text-2xl border-b border-white/20 pb-2 hover:border-white transition-colors">
            hello@evolux.studio
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-sm text-muted-foreground">
          <div>
            <p className="font-display text-xl text-white mb-4">Evolux</p>
            <p>© {new Date().getFullYear()} Evolux Web Design.<br/>All rights reserved.</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-white mb-2">Social</span>
              <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white mb-2">Legal</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
