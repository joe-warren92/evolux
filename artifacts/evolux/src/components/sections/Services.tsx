import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const painPoints = [
  {
    num: "01",
    problem: "You're getting visitors but barely any enquiries.",
    benefit: "You'll have a clear, deliberate path from visitor to enquiry — so your website generates business whether you're in the office or not.",
  },
  {
    num: "02",
    problem: "You're embarrassed to share your own website.",
    benefit: "You'll have a site you're proud to send to every prospect — one that does the selling before you've even picked up the phone.",
  },
  {
    num: "03",
    problem: "Your competitors look more credible than you online.",
    benefit: "You'll be the credible, professional choice — and clients will choose you based on first impressions alone.",
  },
  {
    num: "04",
    problem: "You're locked out of your own website.",
    benefit: "You'll own your site completely and update it yourself — no agency dependency, no developer call for every text change.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 type-label text-muted-foreground mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Sound familiar?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="type-display-md font-extrabold text-foreground tracking-tight"
            >
              We've heard it all before.
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="type-body-lg text-muted-foreground leading-relaxed"
            >
              These are the conversations we have every week. If any sound like you, there's a straightforward fix — and a clear business outcome on the other side.
            </motion.p>
          </div>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white p-8 md:p-10 flex flex-col gap-5 group hover:bg-[hsl(0,0%,99%)] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="type-label text-accent/60">{point.num}</span>
                <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={12} className="text-foreground" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug tracking-tight">
                "{point.problem}"
              </h3>
              <div className="pt-3 border-t border-border">
                <p className="type-label text-accent mb-2">What you gain</p>
                <p className="type-body text-muted-foreground leading-relaxed">{point.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-border rounded-2xl px-8 py-6"
        >
          <div>
            <p className="text-sm font-bold text-foreground mb-1">Not sure which applies to your business?</p>
            <p className="type-body text-muted-foreground">A free website review will tell you exactly what's holding your site back — and what it's costing you.</p>
          </div>
          <a
            href="#review"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap flex items-center gap-2"
            data-testid="button-get-review"
          >
            Get free review <ArrowUpRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
