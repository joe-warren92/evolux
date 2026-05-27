import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, PenTool, Instagram, Printer, Presentation,
  Mail, LayoutTemplate, Check,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const DELIVERABLES = [
  {
    icon: Instagram,
    title: "Social media graphics",
    desc: "Posts, stories, ads and profile assets sized and styled for LinkedIn, Instagram and Facebook — consistent with your brand.",
  },
  {
    icon: Printer,
    title: "Print materials",
    desc: "Business cards, flyers, brochures, banners and signage — designed to print-ready specification with correct bleeds and colour profiles.",
  },
  {
    icon: Presentation,
    title: "Presentation decks",
    desc: "Branded pitch decks and slide templates for Google Slides or PowerPoint — making your business look the part in every meeting.",
  },
  {
    icon: Mail,
    title: "Email marketing templates",
    desc: "Branded email templates for newsletters, campaigns and automated sequences — designed for click-through, not just open rates.",
  },
  {
    icon: LayoutTemplate,
    title: "Marketing collateral",
    desc: "Proposals, case study documents, service brochures and reports — branded consistently and designed to leave a strong impression.",
  },
  {
    icon: PenTool,
    title: "Custom illustrations & icons",
    desc: "Bespoke icon sets or simple illustrations to support your website, presentations or brand guidelines.",
  },
];

const PACKAGES = [
  {
    name: "Project-based",
    price: "From £250",
    note: "Per project",
    tagline: "For one-off design needs with a clear brief.",
    features: [
      "Fixed price per project",
      "Scoped deliverables agreed upfront",
      "2 rounds of revisions included",
      "Print-ready or web-optimised files",
      "Turnaround quoted per project",
    ],
    cta: "Get a quote",
    highlight: false,
    examples: "e.g. business cards, flyer, social pack",
  },
  {
    name: "Monthly Retainer",
    price: "From £350",
    note: "Per month",
    tagline: "Ongoing design support, always on-brand.",
    features: [
      "Set hours allowance each month",
      "Priority scheduling",
      "Unused hours roll over (up to 50%)",
      "Consistent brand voice across all assets",
      "Monthly review of upcoming needs",
      "Direct access — no briefing delays",
    ],
    cta: "Start a retainer",
    highlight: true,
    examples: "Ideal for businesses needing regular design",
  },
];

const FAQS = [
  {
    q: "Do I need to have a brand identity already?",
    a: "Not necessarily — we can work with your existing brand assets, or we can build the brand identity first. Both options are available.",
  },
  {
    q: "What file formats will I receive?",
    a: "All final files are delivered in the formats you need — web-optimised (PNG, SVG, JPEG) and/or print-ready (PDF, AI, EPS) depending on the project.",
  },
  {
    q: "How does the retainer work in practice?",
    a: "You have a set number of hours each month. You submit requests (as many or as few as you need), and we work through them in priority order. There's no fixed brief — it's flexible by design.",
  },
  {
    q: "Can you work to an existing brand style guide?",
    a: "Yes — if you have an existing brand identity, we work within those guidelines to ensure consistency. If the guidelines are incomplete, we'll flag any gaps.",
  },
  {
    q: "Can I combine graphic design with a web design project?",
    a: "Yes — combining both into one project means consistent brand direction from the start. We'll scope both together and discount where there's natural overlap.",
  },
];

export default function GraphicDesign() {
  useSEO({
    title: "Graphic Design Services — Print, Social & Marketing | Evolux",
    description:
      "Graphic design for UK small businesses — social media graphics, print materials, presentation decks and marketing collateral. From £250 per project or £350/mo retainer.",
    canonicalPath: "/services/graphic-design",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="pt-[62px] bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-24 md:pb-32">

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 mb-16"
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                </div>
                <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
              </Link>
              <span className="type-index text-foreground/15">/</span>
              <Link href="/services" className="type-index text-foreground/35 hover:text-accent transition-colors">Services</Link>
              <span className="type-index text-foreground/15">/</span>
              <span className="type-index text-foreground/40">Graphic Design</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="type-label text-foreground/40">Graphic Design</span>
                </div>
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                  <span className="text-foreground">Design that makes your</span>
                  <br />
                  <span className="text-foreground/30">business look the part.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  From social media graphics to print materials and presentation decks — consistent, professional design keeps your brand credible at every touchpoint. Available project-by-project or as an ongoing monthly retainer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:flex lg:col-span-4 lg:col-start-9 flex-col gap-5"
              >
                {[
                  { label: "Output formats", value: "Web + print-ready" },
                  { label: "Revisions", value: "2 rounds included" },
                  { label: "Availability", value: "Project or retainer" },
                  { label: "Starting from", value: "£250 per project" },
                ].map(item => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-b-0">
                    <span className="type-index text-foreground/35">{item.label}</span>
                    <span className="text-xs font-semibold text-foreground text-right">{item.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── What's covered ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="flex items-center gap-3 mb-5"><span className="w-6 h-px bg-accent" /><span className="type-index text-foreground/40">What we design</span></div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">Every format</span><br />
                <span className="text-foreground">your brand needs.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DELIVERABLES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.07 }} className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center"><Icon size={16} className="text-foreground/50" /></div>
                    <div>
                      <h3 className="text-sm font-extrabold text-foreground mb-2 tracking-tight">{item.title}</h3>
                      <p className="type-body text-foreground/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="flex items-center gap-3 mb-5"><span className="w-6 h-px bg-accent" /><span className="type-index text-foreground/40">Options</span></div>
              <h2 className="type-display-md font-extrabold tracking-tight"><span className="text-foreground/30">One-off project</span><br /><span className="text-foreground">or monthly retainer.</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PACKAGES.map((pkg, i) => (
                <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1 }}
                  className={`rounded-2xl p-8 flex flex-col gap-6 ${pkg.highlight ? "bg-foreground text-white" : "bg-white border border-border"}`}>
                  <div>
                    <p className={`type-label mb-1 ${pkg.highlight ? "text-white/40" : "text-foreground/40"}`}>{pkg.note}</p>
                    <p className={`text-2xl font-extrabold tracking-tight mb-1 ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                    <p className={`text-sm font-bold mb-1 ${pkg.highlight ? "text-accent" : "text-foreground"}`}>{pkg.name}</p>
                    <p className={`type-index mb-2 ${pkg.highlight ? "text-white/30" : "text-foreground/30"}`}>{pkg.examples}</p>
                    <p className={`type-body ${pkg.highlight ? "text-white/50" : "text-foreground/50"}`}>{pkg.tagline}</p>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={12} className="mt-[0.2rem] shrink-0 text-accent" />
                        <span className={`type-body ${pkg.highlight ? "text-white/65" : "text-foreground/60"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/free-review" className={`w-full py-3.5 rounded-full text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors ${pkg.highlight ? "bg-accent text-white hover:bg-accent/90" : "bg-foreground/6 text-foreground hover:bg-foreground/10"}`}>
                    {pkg.cta} <ArrowUpRight size={13} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <div className="flex items-center gap-3 mb-5"><span className="w-6 h-px bg-accent" /><span className="type-index text-foreground/40">FAQ</span></div>
              <h2 className="type-display-md font-extrabold tracking-tight"><span className="text-foreground/30">Questions</span><br /><span className="text-foreground">answered.</span></h2>
            </motion.div>
            <div className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden">
              {FAQS.map((faq, i, arr) => (
                <div key={faq.q} className={`p-7 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <p className="text-sm font-bold text-foreground mb-3">{faq.q}</p>
                  <p className="type-body text-foreground/50 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dark CTA ── */}
        <section className="py-20 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(22 88% 48% / 0.1) 0%, transparent 55%)" }} />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="type-display-md font-extrabold text-white tracking-tight mb-5">
                Ready to look the part<br /><span className="text-white/30">at every touchpoint?</span>
              </h2>
              <p className="type-body-lg text-white/45 mb-8 max-w-[42ch] mx-auto leading-relaxed">
                Tell us what you need and we'll quote the same day.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/free-review" className="flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors">
                  Get in touch <ArrowUpRight size={14} />
                </Link>
                <Link href="/services" className="flex items-center gap-2 text-sm font-semibold text-white/45 hover:text-white border-b border-white/20 hover:border-white pb-px transition-colors">
                  See all services <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
