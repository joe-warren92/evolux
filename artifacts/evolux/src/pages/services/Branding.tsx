import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, Layers, Type, Palette, FileText,
  Share2, Package, Check,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const DELIVERABLES = [
  {
    icon: Palette,
    title: "Brand strategy session",
    desc: "A focused session to define your positioning, tone of voice, target audience and the single idea that makes your brand distinctive.",
  },
  {
    icon: Layers,
    title: "Primary logo + variations",
    desc: "A primary logo mark with full, stacked and icon variations — covering every context from website header to business card.",
  },
  {
    icon: Palette,
    title: "Colour palette",
    desc: "A primary and secondary colour system with exact HEX, RGB, and CMYK values — consistent across digital and print.",
  },
  {
    icon: Type,
    title: "Typography system",
    desc: "A paired typeface system covering headings, body and accent — with clear size hierarchy and usage guidance.",
  },
  {
    icon: FileText,
    title: "Brand guidelines document",
    desc: "A single-source reference document covering logo usage rules, colour, typography and tone — so your brand stays consistent everywhere.",
  },
  {
    icon: Share2,
    title: "Social media profile kit",
    desc: "Profile images, cover photos and post templates sized for LinkedIn, Instagram and Facebook — ready to use from day one.",
  },
];

const PACKAGES = [
  {
    name: "Brand Essentials",
    price: "£950",
    note: "Starting from",
    tagline: "A complete visual identity for a business starting out or rebranding.",
    features: [
      "Logo design (primary + variations)",
      "Colour palette with hex/RGB/CMYK values",
      "Typography system (two-font pairing)",
      "Logo usage rules document",
      "Social profile kit (3 platforms)",
      "Full file pack (SVG, PNG, PDF, EPS)",
    ],
    cta: "Start Brand Essentials",
    highlight: false,
  },
  {
    name: "Full Brand Identity",
    price: "£1,800",
    note: "Starting from",
    tagline: "Everything you need to launch with confidence and consistency.",
    features: [
      "Everything in Brand Essentials",
      "Brand strategy session (positioning & tone)",
      "Extended brand guidelines (20+ pages)",
      "Brand pattern or secondary graphics",
      "Business card design (ready to print)",
      "Email signature template",
      "Onboarding call + brand walkthrough",
    ],
    cta: "Start Full Brand Identity",
    highlight: true,
  },
];

const FAQS = [
  {
    q: "Do you design logos for any industry?",
    a: "Yes. The strategy session at the start of every project means the brand is grounded in your specific market, audience and positioning — regardless of sector.",
  },
  {
    q: "How many logo concepts will I receive?",
    a: "You'll receive one fully considered direction — not three half-baked options. This keeps feedback focused and results in a stronger final outcome.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds of revisions are included. Additional rounds are available at a day rate. In practice, the strategy session means the first direction lands close to the mark.",
  },
  {
    q: "Can I use the brand on a website built by someone else?",
    a: "Yes — all brand assets are delivered in formats suitable for any platform. Web-optimised SVGs and PNGs are included in every file pack.",
  },
  {
    q: "Can I add a website to the same project?",
    a: "Yes. A branding project can be bundled with a web design project — the brand strategy session doubles as the discovery session for the website build.",
  },
];

export default function Branding() {
  useSEO({
    title: "Brand Identity Design — Logo & Brand Guidelines | Evolux",
    description:
      "Complete brand identity design for UK small businesses — logo, colour palette, typography, brand guidelines and social kit. Starting from £950.",
    canonicalPath: "/services/branding",
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
              <span className="type-index text-foreground/40">Brand Identity</span>
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
                  <span className="type-label text-foreground/40">Brand Identity</span>
                </div>
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                  <span className="text-foreground">A brand that works</span>
                  <br />
                  <span className="text-foreground/30">as hard as you do.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  A brand isn't a logo — it's the feeling your business creates before a word is spoken. We build visual identities that communicate quality, consistency and trust from first contact to repeat business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:flex lg:col-span-4 lg:col-start-9 flex-col gap-5"
              >
                {[
                  { label: "Deliverable", value: "Logo, palette, type, guidelines" },
                  { label: "File formats", value: "SVG, PNG, PDF, EPS" },
                  { label: "Timeline", value: "2–3 weeks" },
                  { label: "Starting from", value: "£950" },
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

        {/* ── What's included ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <div className="flex items-center gap-3 mb-5"><span className="w-6 h-px bg-accent" /><span className="type-index text-foreground/40">What's included</span></div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">A complete identity,</span><br />
                <span className="text-foreground">built to last.</span>
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
              <div className="flex items-center gap-3 mb-5"><span className="w-6 h-px bg-accent" /><span className="type-index text-foreground/40">Packages</span></div>
              <h2 className="type-display-md font-extrabold tracking-tight"><span className="text-foreground/30">Choose your</span><br /><span className="text-foreground">starting point.</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PACKAGES.map((pkg, i) => (
                <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1 }}
                  className={`rounded-2xl p-8 flex flex-col gap-6 ${pkg.highlight ? "bg-foreground text-white" : "bg-white border border-border"}`}>
                  <div>
                    <p className={`type-label mb-1 ${pkg.highlight ? "text-white/40" : "text-foreground/40"}`}>{pkg.note}</p>
                    <p className={`text-2xl font-extrabold tracking-tight mb-1 ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                    <p className={`text-sm font-bold mb-2 ${pkg.highlight ? "text-accent" : "text-foreground"}`}>{pkg.name}</p>
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
                Start building a brand<br /><span className="text-white/30">worth recognising.</span>
              </h2>
              <p className="type-body-lg text-white/45 mb-8 max-w-[42ch] mx-auto leading-relaxed">
                Get in touch and we'll scope out a brand identity package to suit your business and budget.
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
