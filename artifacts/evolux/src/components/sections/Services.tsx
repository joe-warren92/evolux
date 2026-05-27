import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const painPoints = [
  {
    num: "01",
    problem: "Your site doesn't reflect the quality of your business within the first 10 seconds.",
    benefit: "You'll have a website that makes exactly the right first impression — one that immediately signals credibility to the type of client you want to attract.",
  },
  {
    num: "02",
    problem: "Prospects can't quickly work out whether you're the right fit for them.",
    benefit: "Clear, direct positioning that lets the right people self-qualify fast — so every enquiry that comes in is already pre-sold on working with you.",
  },
  {
    num: "03",
    problem: "You make claims on your site, but don't back them up with evidence.",
    benefit: "Proof in the right places — testimonials, results, case studies — so prospects build trust before they've even contacted you.",
  },
  {
    num: "04",
    problem: "There's no obvious next step — so people leave without getting in touch.",
    benefit: "A clear, low-friction path from visitor to enquiry on every page — so more of your traffic becomes business.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6 md:px-10 bg-[hsl(0,0%,97.5%)] overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.18] pointer-events-none select-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">The four credibility gaps</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="type-display-md font-extrabold text-foreground tracking-tight"
            >
              Sound familiar?
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
              Most professional services websites fail for the same reason: they look credible enough at first glance, but don't build the trust a prospect needs to actually make contact. These are the four gaps we fix.
            </motion.p>
          </div>
        </div>

        {/* 2×2 card grid */}
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
            <p className="type-body text-muted-foreground">A free website review will identify your specific credibility gaps — and tell you exactly what's costing you enquiries.</p>
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
