import { motion } from "framer-motion";
import { Eye, Users } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground"
            >
              <span className="text-xl leading-none -mt-1">●</span> Our Value
            </motion.div>
          </div>
          <div className="lg:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight font-bold text-foreground"
            >
              Our values guide every project we take, shaping how we collaborate with clients, approach design <span className="text-muted-foreground">challenges,</span> and build considered <span className="text-muted-foreground">digital experiences.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted border border-border rounded-3xl p-10 flex flex-col"
          >
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm mb-8">
              <Eye size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Clear Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every project starts with strategy, aligning design with your brand goals and audience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted border border-border rounded-3xl p-10 flex flex-col"
          >
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm mb-8">
              <Users size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Quality Partnership</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work closely with clients through every stage, with honest communication throughout.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-muted border border-border rounded-3xl p-10 flex flex-col justify-between"
          >
            <div>
              <div className="text-5xl font-display font-bold mb-2">200+</div>
              <div className="text-lg font-medium mb-6">Projects Completed</div>
              <div className="flex flex-wrap gap-2 text-sm font-semibold text-muted-foreground mb-8">
                Wavemark · Huxley · Stratum
              </div>
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium w-fit hover:bg-primary/90 transition-colors" data-testid="button-learn-about-us">
              Learn About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
