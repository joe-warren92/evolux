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
    <section id="services" className="relative py-32 px-6 md:px-10 bg-[hsl(0,0%,97.5%)] overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.15] pointer-events-none select-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — asymmetric, stripped back */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">The four credibility gaps</span>
            </div>
            <h2 className="type-display-md font-black text-foreground">Sound familiar?</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="type-body text-foreground/50 max-w-sm lg:pb-1 lg:text-right"
          >
            Most professional services websites fail to generate enquiries for the same four reasons. These are them.
          </motion.p>
        </div>

        {/* Editorial line-separator list */}
        <div className="mt-14">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-10 border-t border-border hover:bg-white/60 transition-colors duration-300 relative"
            >
              {/* Ghost number */}
              <span
                aria-hidden
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[7rem] font-black leading-none tracking-[-0.06em] text-foreground/[0.028] select-none pointer-events-none tabular-nums"
              >
                {point.num}
              </span>

              {/* Index */}
              <div className="col-span-1 flex items-start pt-0.5">
                <span className="type-index">{point.num}</span>
              </div>

              {/* Problem */}
              <div className="col-span-11 md:col-span-5">
                <p
                  className="font-semibold text-foreground leading-snug"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em" }}
                >
                  "{point.problem}"
                </p>
              </div>

              {/* Benefit — slides in on hover / always visible */}
              <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center gap-2">
                <p className="type-index text-accent mb-1.5">What you gain</p>
                <p className="type-body text-foreground/50 leading-relaxed">{point.benefit}</p>
              </div>

              {/* Arrow — hover reveal */}
              <div className="hidden md:flex col-span-1 items-center justify-end">
                <div className="w-6 h-6 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight size={11} className="text-foreground/60" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* CTA — stripped, direct */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Not sure which applies to you?</p>
            <p className="type-body text-foreground/45">A free website review identifies your specific gaps within 48 hours.</p>
          </div>
          <a
            href="#review"
            className="shrink-0 flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground transition-colors border-b border-accent hover:border-foreground pb-px"
            data-testid="button-get-review"
          >
            Get free review <ArrowUpRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
