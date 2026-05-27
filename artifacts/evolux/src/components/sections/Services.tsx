import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Website Design & Build",
    detail: "Strategy-first, then design, then code. We deliver a complete website — not a template with your logo swapped in.",
    tags: ["Custom design", "Responsive build", "CMS integration"],
  },
  {
    num: "02",
    title: "Brand Identity",
    detail: "Logo, typography, colour system, brand guidelines. The visual language your company deserves.",
    tags: ["Logo design", "Visual identity", "Brand guidelines"],
  },
  {
    num: "03",
    title: "Conversion Rate Optimisation",
    detail: "We analyse where your visitors drop off and fix it — through copy, layout, and UX decisions backed by data.",
    tags: ["UX audit", "A/B testing", "Landing pages"],
  },
  {
    num: "04",
    title: "SEO & Performance",
    detail: "Technical SEO, Core Web Vitals, structured data. Built in from day one — never bolted on.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema markup"],
  },
  {
    num: "05",
    title: "Ongoing Retainer",
    detail: "A dedicated creative team for companies that treat their website as a living product, not a one-off job.",
    tags: ["Monthly updates", "Priority support", "Strategy calls"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 type-label text-muted-foreground mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Services
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-tight text-foreground"
            >
              We don't do generic. Every engagement is tailored to where you{" "}
              <span className="text-muted-foreground font-normal italic">actually</span>{" "}
              are — and where you want to go.
            </motion.h2>
          </div>
        </div>

        {/* Editorial list — nothing like a card grid */}
        <div className="border-t border-border">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="service-line group"
            >
              <div className="py-7 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <span className="type-label text-muted-foreground/40">{svc.num}</span>
                </div>
                <div className="col-span-11 lg:col-span-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                    {svc.title}
                  </h3>
                </div>
                <div className="col-span-11 lg:col-span-5 lg:col-start-6">
                  <p className="type-body text-muted-foreground leading-relaxed">{svc.detail}</p>
                </div>
                <div className="col-span-11 lg:col-span-2 flex lg:justify-end">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map(t => (
                      <span key={t} className="type-label text-muted-foreground/60 border border-border px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-border rounded-2xl px-8 py-6"
        >
          <div>
            <p className="text-base font-bold text-foreground mb-1">
              "Best ROI of any agency we've worked with."
            </p>
            <p className="type-body text-muted-foreground italic">
              "The Studio package paid for itself in the first quarter."
            </p>
            <p className="type-label text-foreground/40 mt-2">Alex Donovan — Founder, Relink</p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-center">
              <p className="text-2xl font-extrabold tracking-tight text-foreground">200+</p>
              <p className="type-label text-muted-foreground">Projects</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <button
              className="bg-foreground text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300 flex items-center gap-2"
              data-testid="button-learn-services"
            >
              All services <ArrowUpRight size={13} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
