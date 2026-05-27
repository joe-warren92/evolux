import { motion } from "framer-motion";
import heroShowcase from "@/assets/images/hero-showcase.png";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col pt-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col pt-12 md:pt-24 pb-24">
        
        <div className="flex justify-between items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm"
          >
            ©2026 Evolux Studio
          </motion.div>
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[7rem] leading-[1.05] tracking-tight max-w-[15ch] mb-12">
          <span className="block text-muted-foreground font-normal overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              We craft
            </motion.span>
          </span>
          <span className="block font-bold overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              digital experiences
            </motion.span>
          </span>
          <span className="block font-bold overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              that convert.
            </motion.span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-md"
          >
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Evolux is a bespoke creative studio that builds ambitious digital experiences for ambitious brands. We sit at the intersection of craft and commerce.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-3 font-medium hover:bg-primary/90 transition-colors" data-testid="button-book-call">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Book a Call
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-sm font-medium text-muted-foreground">Trusted by ambitious brands</span>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 font-display font-semibold text-muted-foreground text-xl">
              <span>Relink</span>
              <span>Wavemark</span>
              <span>Huxley</span>
              <span>Stratum</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-primary text-primary-foreground rounded-t-[2.5rem] p-6 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img src={heroShowcase} alt="Studio showcase" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between min-h-[40vh] md:min-h-[60vh]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-primary flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-primary flex items-center justify-center text-xs font-medium">AL</div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-primary flex items-center justify-center text-xs font-medium">MK</div>
              </div>
              <div className="flex items-center gap-1 ml-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-white text-white" />
                ))}
              </div>
            </div>
            <p className="text-lg font-medium">100+ Satisfied Clients</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
