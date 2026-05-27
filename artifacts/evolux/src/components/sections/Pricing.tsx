import { motion } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck } from "lucide-react";

const packages = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For businesses that need a credible first impression, delivered quickly.",
    price: "£1,800",
    note: "Starting from",
    features: [
      "5-page custom design & build",
      "Mobile-first, fully responsive",
      "Brand alignment session",
      "CMS — edit copy yourself",
      "Core SEO setup",
      "14-day post-launch support",
    ],
    cta: "Start with Launch",
    highlight: false,
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "The full package for brands serious about growth.",
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
    id: "elite",
    name: "Elite",
    tagline: "For businesses that want the very best — no compromises, no limits.",
    price: "£6,500",
    note: "Starting from",
    features: [
      "Up to 25 fully custom pages",
      "Complete brand identity system",
      "Custom animations & interactions",
      "Conversion-led copywriting",
      "Advanced SEO & analytics setup",
      "90-day post-launch support",
      "Quarterly strategy sessions",
      "You own every file and line of code",
    ],
    cta: "Talk to us about Elite",
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
              <span className="block type-display-md font-extrabold text-foreground/35">Transparent pricing.</span>
              <span className="block type-display-md font-extrabold text-foreground">No surprises.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="type-body text-muted-foreground max-w-sm lg:pb-2"
          >
            Every project is fully scoped before we start. What we quote is what you pay — no extras, no surprises halfway through.
          </motion.p>
        </div>

        {/* Cards */}
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
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white type-label px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}

              <div className="mb-6 pt-3">
                <p className={`type-label mb-3 ${pkg.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                  {pkg.name}
                </p>
                <p className={`text-sm leading-snug mb-6 ${pkg.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {pkg.tagline}
                </p>
                <p className={`type-label mb-1 ${pkg.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                  {pkg.note}
                </p>
                <p className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                  {pkg.price}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} className="shrink-0 mt-0.5 text-accent" />
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
                    : "border border-foreground/15 text-foreground hover:border-accent hover:text-accent"
                }`}
                data-testid={`button-pricing-${pkg.id}`}
              >
                {pkg.cta} <ArrowUpRight size={13} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white border border-border rounded-2xl px-8 py-6 mb-5"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground mb-1">
              30-day post-launch guarantee, on every package.
            </p>
            <p className="type-body text-muted-foreground">
              If something isn't right in the 30 days after you go live, we fix it. No quibble, no extra charge.
            </p>
          </div>
          <a
            href="/free-review"
            className="shrink-0 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            Not sure? Get a free review <ArrowUpRight size={12} />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-white overflow-hidden"
        >
          {[
            { title: "No hidden costs", desc: "Fully scoped before we start. What we quote is what you pay." },
            { title: "You deal with the designer", desc: "No account managers. The person building your site is the person you talk to." },
            { title: "30-day guarantee", desc: "Not happy with something in the first 30 days after launch? We fix it." },
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
