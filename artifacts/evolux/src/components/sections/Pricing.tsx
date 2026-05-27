import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const packages = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For businesses entering the market with intent.",
    price: "£1,800",
    priceNote: "Starting from",
    features: [
      "5-page custom website",
      "Brand strategy session",
      "Mobile-first design",
      "Basic SEO setup",
      "CMS integration",
      "14-day post-launch support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "For ambitious brands that compete at the top.",
    price: "£3,500",
    priceNote: "Starting from",
    features: [
      "Full custom website (up to 12 pages)",
      "Complete brand identity",
      "Responsive design system",
      "Advanced SEO & performance",
      "Headless CMS setup",
      "Analytics & conversion tracking",
      "30-day post-launch support",
      "Monthly strategy review",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    id: "retainer",
    name: "Retainer",
    tagline: "A dedicated creative partner, every month.",
    price: "£1,200",
    priceNote: "Per month",
    features: [
      "Ongoing design & development",
      "Unlimited revision requests",
      "Priority turnaround",
      "Monthly strategy call",
      "Performance reporting",
      "Full source file access",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-10 bg-[hsl(0,0%,97%)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 type-label text-muted-foreground mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Packages
          </div>
          <h2 className="type-display-md font-extrabold text-foreground mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="type-body-lg text-muted-foreground max-w-xl">
            No hidden fees, no scope creep. Choose the package that fits where you are — or talk to us and we'll tailor one.
          </p>
        </motion.div>

        {/* Testimonial above cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="flex items-start gap-4 bg-white border border-border rounded-2xl px-8 py-5 max-w-2xl w-full">
            <div className="text-2xl leading-none text-foreground/20 font-serif mt-0.5">"</div>
            <div>
              <p className="type-body text-muted-foreground italic">
                Best ROI of any supplier we've worked with. The Studio package paid for itself in the first quarter.
              </p>
              <p className="type-label text-foreground/45 mt-2">Alex Donovan — Founder, Relink</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col relative overflow-hidden ${
                pkg.highlight
                  ? "bg-foreground text-primary-foreground ring-2 ring-foreground"
                  : "bg-white border border-border"
              }`}
              data-testid={`card-pricing-${pkg.id}`}
            >
              {pkg.highlight && (
                <div className="absolute top-5 right-5 bg-white/15 text-white type-label px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <div className="mb-8">
                <p className={`type-label mb-2 ${pkg.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                  {pkg.name}
                </p>
                <p className={`type-body mb-6 leading-snug ${pkg.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {pkg.tagline}
                </p>
                <div className={`type-label mb-1 ${pkg.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                  {pkg.priceNote}
                </div>
                <div className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                  {pkg.price}
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${pkg.highlight ? "text-white/70" : "text-foreground"}`}
                    />
                    <span className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-foreground/80"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                  pkg.highlight
                    ? "bg-white text-foreground hover:bg-white/90"
                    : "bg-foreground text-primary-foreground hover:bg-foreground/85"
                }`}
                data-testid={`button-pricing-${pkg.id}`}
              >
                Get Started <ArrowUpRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-white overflow-hidden"
        >
          {[
            {
              title: "No hidden costs",
              desc: "We scope every project thoroughly. What we quote is what you pay — full stop.",
            },
            {
              title: "Senior-only work",
              desc: "You deal directly with the designer doing the work. No account managers, no juniors.",
            },
            {
              title: "30-day guarantee",
              desc: "If you're not happy in the first 30 days, we'll fix it. Simple as that.",
            },
          ].map((item) => (
            <div key={item.title} className="p-8">
              <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="type-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
