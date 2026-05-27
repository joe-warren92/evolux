import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Alignment",
    desc: "We begin by understanding the unsaid requirements. Who are we speaking to? What is the true goal?"
  },
  {
    title: "Concept & Prototyping",
    desc: "Exploring visual and structural directions. We present one strong, considered path rather than three weak ones."
  },
  {
    title: "Refinement & Execution",
    desc: "Meticulous design and engineering. Every interaction, every breakpoint, every millisecond of motion is crafted."
  },
  {
    title: "Launch & Handoff",
    desc: "Deploying with zero downtime. We ensure your team knows exactly how to wield their new digital asset."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl tracking-tight sticky top-32"
          >
            Process
          </motion.h2>
        </div>
        
        <div className="md:col-span-7 md:col-start-6 flex flex-col gap-24">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 md:pl-12 border-l border-white/10"
            >
              <span className="absolute left-0 top-0 -translate-x-1/2 bg-background text-xs font-mono px-2 py-1 border border-white/20">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
