import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const packages = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For businesses that need a high-quality first impression, fast.",
    price: "£1,800",
    note: "Starting from",
    features: [
      "5-page custom design & build",
      "Mobile-first, fully responsive",
      "Brand alignment session",
      "CMS so you can edit copy yourself",
      "Core SEO setup",
      "14-day post-launch support",
    ],
    cta: "Start with Launch",
    highlight: false,
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Our most complete offering — for brands serious about growth.",
    price: "£3,500",
    note: "Starting from",
    features: [
      "Up to 12 custom pages",
      "Full visual identity system",
      "Conversion-optimised layouts",
      "Advanced SEO & Core Web Vitals",
      "Headless CMS integration",
      "Analytics & goal tracking",
      "30-day post-launch support",
      "Monthly strategy review",
    ],
    cta: "Start with Studio",
    highlight: true,
  },
  {
    id: "retainer",
    name: "Growth Retainer",
    tagline: "A dedicated creative partner for companies treating design as an ongoing asset.",
    price: "£1,200",
    note: "Per month",
    features: [
      "Ongoing design & development",
      "CRO testing & improvements",
      "Priority support & turnaround",
      "Monthly strategy call",
      "Performance reporting",
      "Full source file ownership",
    ],
    cta: "Talk retainer",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 type-label text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Packages
            </div>
            <h2>
              <span className="block type-display-md text-muted-foreground font-light">Invest once.</span>
              <span className="block type-display-md font-extrabold text-foreground">Grow indefinitely.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="type-body text-muted-foreground max-w-sm lg:text-right lg:pb-2"
          >
            No sliding scales based on your budget. No hidden extras. What you see is what you pay.
          </motion.p>
        </div>

        {/* Cards — featured one is accent-bordered not just dark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`rounded-2xl p-7 flex flex-col relative ${
                pkg.highlight
                  ? "bg-foreground text-primary-foreground ring-2 ring-accent"
                  : "bg-white border border-border"
              }`}
              data-testid={`card-pricing-${pkg.id}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white type-label px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}

              <div className="mb-6 pt-2">
                <p className={`type-label mb-3 ${pkg.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                  {pkg.name}
                </p>
                <p className={`text-sm leading-snug mb-6 ${pkg.highlight ? "text-white/65" : "text-muted-foreground"}`}>
                  {pkg.tagline}
                </p>
                <p className={`type-label mb-1 ${pkg.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                  {pkg.note}
                </p>
                <p className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                  {pkg.price}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${pkg.highlight ? "text-accent" : "text-accent"}`}
                    />
                    <span className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/75" : "text-foreground/75"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  pkg.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-foreground/20 text-foreground hover:bg-muted"
                }`}
                data-testid={`button-pricing-${pkg.id}`}
              >
                {pkg.cta} <ArrowUpRight size={13} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white border border-border rounded-2xl px-8 py-6 mb-8"
        >
          <p className="text-2xl text-accent/30 font-serif leading-none shrink-0 hidden sm:block">"</p>
          <div className="flex-1">
            <p className="type-body text-foreground italic mb-1.5">
              The Studio package paid for itself within the first quarter. I wish we'd done it two years earlier.
            </p>
            <p className="type-label text-foreground/40">Alex Donovan — Founder, Relink</p>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-white overflow-hidden"
        >
          {[
            { title: "No hidden costs", desc: "Fully scoped before we start. What we quote is what you pay." },
            { title: "Direct access", desc: "You deal with the designer and developer, not a project manager." },
            { title: "30-day guarantee", desc: "Not happy in the first 30 days after launch? We fix it, full stop." },
          ].map(item => (
            <div key={item.title} className="p-7">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h4>
              <p className="type-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
