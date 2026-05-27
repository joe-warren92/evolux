import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-4 md:col-start-2">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-widest text-sm font-medium"
          >
            Our Positioning
          </motion.h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-display leading-snug"
          >
            Evolux is a bespoke creative studio that builds ambitious digital experiences for ambitious brands. We sit at the intersection of craft and commerce — precise, confident, and quietly extraordinary. 
            <br/><br/>
            We don't do templates. We don't do 'good enough'. We build digital products that feel like being handed a portfolio by someone who doesn't need to explain why they're good.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
