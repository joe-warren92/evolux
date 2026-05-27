import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

const features = [
  {
    title: "Design-Led Thinking",
    desc: "Every project begins with strategy, ensuring design decisions support business goals."
  },
  {
    title: "Senior Expertise",
    desc: "Work directly with experienced designers who understand digital products and brands."
  },
  {
    title: "Structured Projects",
    desc: "Clear scope, defined milestones, and transparent pricing so you always know where things stand."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">
            <span className="block text-muted-foreground font-normal">A well-designed approach</span>
            <span className="block font-bold">built for results.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6">
                <CircleDot size={18} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
