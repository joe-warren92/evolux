import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Check, Minus, ShieldCheck, Star } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const PACKAGES = [
  {
    id: "launch",
    name: "Launch",
    price: "£1,800",
    note: "Starting from",
    tagline: "A credible, conversion-ready website, delivered fast.",
    highlight: false,
    cta: "Start with Launch",
  },
  {
    id: "studio",
    name: "Studio",
    price: "£3,500",
    note: "Starting from",
    tagline: "The full package for brands serious about growth.",
    highlight: true,
    cta: "Start with Studio",
  },
  {
    id: "retainer",
    name: "Growth Retainer",
    price: "£1,200",
    note: "Per month",
    tagline: "A dedicated creative partner, month to month.",
    highlight: false,
    cta: "Talk retainer",
  },
];

type CellValue = true | false | string;

interface CompareRow {
  category?: string; // if set, this is a section header row
  feature?: string;
  launch?: CellValue;
  studio?: CellValue;
  retainer?: CellValue;
  tooltip?: string;
}

const COMPARE: CompareRow[] = [
  // ── DESIGN ──────────────────────────────
  { category: "Design & Build" },
  { feature: "Custom design (no templates)",         launch: true,     studio: true,       retainer: true },
  { feature: "Number of pages",                      launch: "Up to 5",  studio: "Up to 12", retainer: "Ongoing" },
  { feature: "Mobile-first build",                   launch: true,     studio: true,       retainer: true },
  { feature: "Responsive across all devices",        launch: true,     studio: true,       retainer: true },
  { feature: "Full visual identity system",          launch: false,    studio: true,       retainer: true },
  { feature: "Brand alignment session",              launch: true,     studio: true,       retainer: true },

  // ── CONVERSION ──────────────────────────
  { category: "Conversion & Performance" },
  { feature: "Conversion-optimised page layouts",    launch: false,    studio: true,       retainer: true },
  { feature: "CRO testing & iterative improvements", launch: false,    studio: false,      retainer: true },
  { feature: "Core Web Vitals optimisation",         launch: "Basic",  studio: true,       retainer: true },
  { feature: "Performance & image optimisation",     launch: true,     studio: true,       retainer: true },

  // ── CMS & CONTENT ───────────────────────
  { category: "CMS & Content" },
  { feature: "CMS — edit copy yourself",             launch: true,     studio: true,       retainer: true },
  { feature: "Headless CMS integration",             launch: false,    studio: true,       retainer: true },
  { feature: "Blog / news setup",                    launch: false,    studio: true,       retainer: true },

  // ── SEO ─────────────────────────────────
  { category: "SEO & Analytics" },
  { feature: "On-page SEO (titles, meta, schema)",   launch: "Core",   studio: true,       retainer: true },
  { feature: "Google Analytics 4 setup",             launch: true,     studio: true,       retainer: true },
  { feature: "Conversion goal tracking",             launch: false,    studio: true,       retainer: true },
  { feature: "Monthly performance reporting",        launch: false,    studio: false,      retainer: true },
  { feature: "XML sitemap & robots.txt",             launch: true,     studio: true,       retainer: true },

  // ── SUPPORT ─────────────────────────────
  { category: "Support & Delivery" },
  { feature: "Post-launch support window",           launch: "14 days", studio: "30 days", retainer: "Ongoing" },
  { feature: "30-day post-launch guarantee",         launch: false,    studio: true,       retainer: true },
  { feature: "Priority response time",               launch: false,    studio: false,      retainer: true },
  { feature: "Monthly strategy call",                launch: false,    studio: true,       retainer: true },
  { feature: "Full source file ownership",           launch: false,    studio: false,      retainer: true },
  { feature: "CMS training session",                 launch: true,     studio: true,       retainer: true },
];

const FAQS = [
  {
    q: "Can I upgrade from Launch to Studio later?",
    a: "Yes — if your business outgrows the Launch package, we can scope an upgrade. Because we built the original site, the process is significantly faster and less disruptive than starting from scratch.",
  },
  {
    q: "Are these fixed prices or estimates?",
    a: "The prices shown are starting points. Every project is scoped individually before we commit to a number — what we quote is what you pay. No extras added halfway through.",
  },
  {
    q: "What's included in the 'brand alignment session'?",
    a: "A focused 45-minute session before design begins where we align on tone, visual direction, target audience, and competitive positioning. It ensures the design reflects your business from day one.",
  },
  {
    q: "How does the Growth Retainer work?",
    a: "You get a set number of hours per month dedicated to your business — design, development, CRO improvements, and strategy. It's billed monthly with a 3-month minimum. You can increase or decrease the scope with notice.",
  },
  {
    q: "Do I need to choose a package before we talk?",
    a: "No. A free website review or a strategy call will help us understand what you actually need — and the right package becomes obvious from there.",
  },
];

/* ─────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────── */
function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlight ? "bg-accent/20" : "bg-foreground/8"}`}>
          <Check size={11} className={highlight ? "text-accent" : "text-foreground/60"} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <Minus size={13} className="text-foreground/20" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <p className={`text-center text-[12px] font-semibold leading-tight ${highlight ? "text-white/80" : "text-foreground/65"}`}>
      {value}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function Packages() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Packages & Pricing — Evolux Web Design",
    description:
      "Transparent web design packages for UK businesses. Launch from £1,800, Studio from £3,500, or a monthly Growth Retainer. Compare features side-by-side.",
    canonicalPath: "/packages",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="pt-[64px] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-28 w-[700px] h-[700px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.09) 0%, transparent 65%)" }} />
            <div className="absolute top-0 left-1/3 w-[500px] h-[320px]"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(22 88% 48% / 0.05) 0%, transparent 70%)" }} />
          </div>
          <div aria-hidden className="absolute top-[64px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.5) 30%, hsl(22 88% 48% / 0.3) 65%, transparent 100%)" }}
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 md:pt-20 pb-20 relative z-10">

            {/* Stamp row */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 mb-10 md:mb-12"
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                </div>
                <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
              </Link>
              <span className="type-index text-foreground/15">/</span>
              <span className="type-index text-foreground/40">Packages</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-[1.03] mb-6">
                  <span className="text-foreground">Transparent pricing.</span>
                  <br />
                  <span className="text-foreground/25">No surprises.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 max-w-[50ch] leading-relaxed">
                  Every project is fully scoped before we start. What we quote is what you pay. Choose the package that matches where your business is right now — and where you want it to go.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 lg:col-start-8 flex flex-col gap-3"
              >
                {[
                  { label: "No hidden extras", desc: "Everything is scoped and agreed upfront." },
                  { label: "30-day post-launch guarantee", desc: "On Studio and Retainer packages." },
                  { label: "You deal with the designer", desc: "No account managers. Direct access to Joe." },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={9} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <p className="type-body text-foreground/55 leading-snug">
                      <strong className="text-foreground font-semibold">{item.label}</strong> — {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PACKAGE CARDS
        ══════════════════════════════════════════════════ */}
        <section className="py-16 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {PACKAGES.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-2xl p-7 relative flex flex-col gap-5 ${
                    pkg.highlight
                      ? "bg-foreground ring-2 ring-accent"
                      : "bg-white border border-border"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white type-label px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most popular
                    </div>
                  )}
                  <div className="pt-2">
                    <p className={`type-label mb-2 ${pkg.highlight ? "text-white/45" : "text-foreground/45"}`}>{pkg.name}</p>
                    <p className={`text-sm mb-5 ${pkg.highlight ? "text-white/50" : "text-foreground/50"}`}>{pkg.tagline}</p>
                    <p className={`type-label mb-1 ${pkg.highlight ? "text-white/30" : "text-foreground/35"}`}>{pkg.note}</p>
                    <p className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                  </div>
                  <a
                    href="#comparison"
                    className={`mt-auto w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      pkg.highlight
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-foreground/15 text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    See what's included <ArrowUpRight size={12} />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white border border-border rounded-2xl px-7 py-5"
            >
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={16} className="text-accent" />
              </div>
              <p className="type-body text-foreground/55 flex-1">
                <strong className="text-foreground font-semibold">30-day post-launch guarantee</strong> on Studio and Retainer packages — if something isn't right after go-live, we fix it at no charge.
              </p>
              <Link
                href="/free-review"
                className="shrink-0 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                Not sure which? Free review <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════════════ */}
        <section id="comparison" className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">Full comparison</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">What's included</span>
                <br />
                <span className="text-foreground">in each package.</span>
              </h2>
            </motion.div>

            {/* Table — desktop */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block rounded-2xl border border-border overflow-hidden"
            >
              {/* Header */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
                <div className="bg-[hsl(0,0%,97%)] px-6 py-5 border-b border-border">
                  <p className="type-index text-foreground/35">Feature</p>
                </div>
                {PACKAGES.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`px-4 py-5 border-b border-border flex flex-col items-center gap-1 ${
                      pkg.highlight ? "bg-foreground" : "bg-[hsl(0,0%,97%)]"
                    }`}
                  >
                    <p className={`text-sm font-bold ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.name}</p>
                    <p className={`text-lg font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                    <p className={`type-index ${pkg.highlight ? "text-white/35" : "text-foreground/35"}`}>{pkg.note}</p>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {COMPARE.map((row, i) => {
                if (row.category) {
                  return (
                    <div key={row.category} className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[hsl(0,0%,96%)]">
                      <div className="px-6 py-3 col-span-4 border-b border-border">
                        <p className="type-index text-foreground/40 uppercase tracking-widest">{row.category}</p>
                      </div>
                    </div>
                  );
                }
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-border last:border-b-0 ${isEven ? "bg-white" : "bg-[hsl(0,0%,98.5%)]"}`}
                  >
                    <div className="px-6 py-4 flex items-center">
                      <p className="text-sm text-foreground/70">{row.feature}</p>
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-border">
                      <Cell value={row.launch!} highlight={false} />
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-border bg-foreground/[0.025]">
                      <Cell value={row.studio!} highlight={true} />
                    </div>
                    <div className="px-4 py-4 flex items-center justify-center border-l border-border">
                      <Cell value={row.retainer!} highlight={false} />
                    </div>
                  </div>
                );
              })}

              {/* Footer CTA row */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[hsl(0,0%,97%)] border-t border-border">
                <div className="px-6 py-5" />
                {PACKAGES.map(pkg => (
                  <div key={pkg.id} className={`px-4 py-5 flex items-center justify-center border-l border-border ${pkg.highlight ? "bg-foreground" : ""}`}>
                    <a
                      href="mailto:info@evoluxwebdesign.co.uk"
                      className={`flex items-center gap-1.5 text-[12px] font-semibold transition-colors ${
                        pkg.highlight
                          ? "text-accent hover:text-accent/80"
                          : "text-foreground/50 hover:text-accent"
                      }`}
                    >
                      {pkg.cta} <ArrowUpRight size={11} />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Table — mobile (stacked) */}
            <div className="md:hidden flex flex-col gap-6">
              {PACKAGES.map(pkg => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl overflow-hidden border ${pkg.highlight ? "border-accent" : "border-border"}`}
                >
                  {/* Package header */}
                  <div className={`px-6 py-5 ${pkg.highlight ? "bg-foreground" : "bg-[hsl(0,0%,97.5%)]"}`}>
                    <p className={`type-label mb-1 ${pkg.highlight ? "text-white/45" : "text-foreground/45"}`}>{pkg.name}</p>
                    <p className={`text-3xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                    <p className={`type-index mt-1 ${pkg.highlight ? "text-white/35" : "text-foreground/35"}`}>{pkg.note}</p>
                  </div>

                  {/* Features */}
                  <div className="bg-white divide-y divide-border">
                    {COMPARE.filter(r => !r.category).map(row => {
                      const val = pkg.id === "launch" ? row.launch : pkg.id === "studio" ? row.studio : row.retainer;
                      if (val === false) return null;
                      return (
                        <div key={row.feature} className="flex items-center gap-3 px-6 py-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${pkg.highlight ? "bg-accent/15" : "bg-foreground/8"}`}>
                            <Check size={9} className={pkg.highlight ? "text-accent" : "text-foreground/50"} strokeWidth={2.5} />
                          </div>
                          <p className="text-sm text-foreground/65">{row.feature}{typeof val === "string" ? ` — ${val}` : ""}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className={`px-6 py-4 ${pkg.highlight ? "bg-foreground" : "bg-[hsl(0,0%,97.5%)]"}`}>
                    <a
                      href="mailto:info@evoluxwebdesign.co.uk"
                      className={`flex items-center gap-1.5 text-sm font-semibold ${pkg.highlight ? "text-accent" : "text-foreground/50 hover:text-accent"} transition-colors`}
                    >
                      {pkg.cta} <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TESTIMONIAL
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { quote: "We couldn't be happier with the new website Joe created for us. It truly captures who we are.", name: "Katie Dutton", company: "Manton Executives", initials: "KD" },
                { quote: "Joe was always available, quick to respond, and incredibly patient throughout the whole process.", name: "Client", company: "Ockerby Academy", initials: "OA" },
                { quote: "The site looks incredible and has already started generating enquiries within the first week of launch.", name: "Client", company: "Marley Doulas", initials: "MD" },
              ].map((t, i) => (
                <motion.div
                  key={t.company}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="bg-white border border-border rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
                  </div>
                  <blockquote className="flex-1 text-[15px] text-foreground/65 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-black text-foreground/50">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-none">{t.name}</p>
                      <p className="type-index text-foreground/40 mt-0.5">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">FAQ</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">Pricing</span>{" "}
                <span className="text-foreground">questions.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y divide-border bg-white rounded-2xl border border-border overflow-hidden">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group hover:bg-foreground/[0.02] transition-colors"
                  >
                    <span className="text-[15px] font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:border-accent group-hover:text-accent transition-colors text-sm leading-none font-light">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-7 pb-6"
                    >
                      <p className="type-body text-foreground/55 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-foreground relative overflow-hidden">
          <svg aria-hidden className="absolute -bottom-20 -right-20 w-[440px] h-[440px] pointer-events-none select-none opacity-[0.05]" viewBox="0 0 440 440" fill="none">
            <circle cx="380" cy="380" r="220" stroke="white" strokeWidth="1"/>
            <circle cx="380" cy="380" r="130" stroke="hsl(22 88% 48%)" strokeWidth="0.8"/>
          </svg>
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                  <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500" />
                </span>
                <span className="type-index text-white/35">Currently available for new projects</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight text-white mb-5">
                Not sure which package is right for you?
              </h2>
              <p className="type-body-lg text-white/45 mb-10 max-w-[44ch] mx-auto leading-relaxed">
                A free website review will show you exactly what your current site is missing — and make the right package obvious.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/free-review"
                  className="flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  Get a free website review
                </Link>
                <a
                  href="mailto:info@evoluxwebdesign.co.uk"
                  className="flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white/70 border-b border-white/15 hover:border-white/40 pb-px transition-colors"
                >
                  Email Joe directly <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
