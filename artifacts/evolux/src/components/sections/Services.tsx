import { motion } from "framer-motion";
import { Eye, Users, Zap, Code2, BarChart3, Palette } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Brand Strategy",
    desc: "Positioning, messaging and visual identity that puts you ahead of the market.",
  },
  {
    icon: Palette,
    title: "Website Design",
    desc: "Editorial, conversion-focused design built around your audience and goals.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Fast, semantic, accessible builds that score near-perfect on every performance metric.",
  },
  {
    icon: BarChart3,
    title: "CRO & SEO",
    desc: "On-page optimisation baked in from day one — not bolted on as an afterthought.",
  },
  {
    icon: Users,
    title: "Ongoing Partnership",
    desc: "Monthly retainers for brands that want a dedicated creative team, not a one-off job.",
  },
  {
    icon: Zap,
    title: "Rapid Launch",
    desc: "Need to move fast? Our Sprint package ships a polished site in under four weeks.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-10 bg-[hsl(0,0%,97%)]">
      <div className="max-w-7xl mx-auto">

        {/* Statement header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 type-label text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              What We Do
            </motion.div>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] tracking-tight text-foreground"
            >
              We shape how ambitious brands show up online — combining strategy, design and engineering into work that{" "}
              <span className="text-muted-foreground font-normal">earns attention</span> and{" "}
              <span className="text-muted-foreground font-normal">drives revenue.</span>
            </motion.h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white border border-border rounded-2xl p-8 flex flex-col hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 bg-foreground text-primary-foreground rounded-full flex items-center justify-center mb-7 shrink-0">
                  <Icon size={16} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">{svc.title}</h3>
                <p className="type-body text-muted-foreground leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <div className="flex-1">
            <p className="text-xl font-bold tracking-tight text-foreground mb-2">
              "The best investment we've made for our brand."
            </p>
            <p className="type-body text-muted-foreground">
              "ROI was visible within weeks of launch. Our enquiry rate jumped by 340% and hasn't stopped climbing."
            </p>
            <p className="type-label text-foreground/45 mt-3">Tom Archer — CEO, Stratum</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <div className="flex flex-col gap-1">
              <span className="type-stat font-extrabold text-foreground">200+</span>
              <span className="type-label text-muted-foreground">Projects delivered</span>
            </div>
            <button
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/85 transition-colors"
              data-testid="button-learn-about-us"
            >
              Learn About Us
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
