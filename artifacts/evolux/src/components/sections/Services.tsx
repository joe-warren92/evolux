import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Digital Strategy",
    desc: "Positioning, architecture, and roadmapping for digital products that need to win."
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Visual systems that speak with confidence. Typography, color, and motion."
  },
  {
    num: "03",
    title: "Product Design",
    desc: "Interface design that respects the user's time and intelligence."
  },
  {
    num: "04",
    title: "Creative Development",
    desc: "High-performance, accessible, and beautifully animated frontend engineering."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl tracking-tight mb-24"
        >
          Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 border-t border-white/10 pt-16">
          {services.map((svc, i) => (
            <motion.div 
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-muted-foreground font-mono text-sm mb-6">{svc.num}</span>
              <h3 className="font-display text-3xl mb-4">{svc.title}</h3>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
