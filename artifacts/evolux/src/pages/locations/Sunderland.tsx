import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, Check, ShieldCheck, Star, MapPin,
  Layers, Smartphone, Zap, Search, BarChart2, Pencil,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const INDUSTRIES = [
  "Professional services",
  "Trades & construction",
  "Healthcare & wellness",
  "Financial & legal",
  "Hospitality & leisure",
  "Retail & e-commerce",
  "Consultancy",
  "Recruitment",
];

const DELIVERABLES = [
  {
    icon: Pencil,
    title: "Custom design",
    desc: "Every layout is built for your business. No Sunderland business looks like any other — and neither should your website.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    desc: "The majority of your local visitors arrive on a phone. We build mobile-first from day one.",
  },
  {
    icon: Layers,
    title: "Conversion architecture",
    desc: "Structured to guide visitors toward making contact — clear hierarchy, logical flow, low-friction calls to action.",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "On-page SEO, schema markup, and Google Business alignment — so Sunderland searchers find you first.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Fast-loading pages rank better and convert better. We optimise every asset so your site scores on Core Web Vitals.",
  },
  {
    icon: BarChart2,
    title: "Analytics",
    desc: "GA4 configured with conversion goals, so you can see exactly which pages are driving enquiries.",
  },
];

const PACKAGES = [
  {
    id: "launch",
    name: "Launch",
    tagline: "A credible, conversion-ready website to get you in front of Sunderland clients.",
    price: "£1,800",
    note: "Starting from",
    features: [
      "5-page custom design & build",
      "Mobile-first, fully responsive",
      "Local SEO foundations",
      "CMS — edit copy yourself",
      "Google Business alignment",
      "14-day post-launch support",
    ],
    highlight: false,
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "The full package for Sunderland businesses ready to dominate local search.",
    price: "£3,500",
    note: "Starting from",
    features: [
      "Up to 12 custom pages",
      "Full visual identity system",
      "Conversion-optimised layouts",
      "Advanced local & on-page SEO",
      "Headless CMS integration",
      "Analytics & goal tracking",
      "30-day post-launch support",
      "Monthly strategy review",
    ],
    highlight: true,
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "For Sunderland businesses that want to stand apart — and stay there.",
    price: "£6,500",
    note: "Starting from",
    features: [
      "Up to 25 fully custom pages",
      "Complete brand identity system",
      "Custom animations & interactions",
      "Conversion-led copywriting",
      "Advanced local SEO & analytics",
      "90-day post-launch support",
      "Quarterly strategy sessions",
      "You own every file and line of code",
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: "Are you actually based in Sunderland?",
    a: "Yes — Evolux was founded and is based in Sunderland, Tyne & Wear. Joe has worked with local businesses across the city since 2023.",
  },
  {
    q: "Do you meet clients in person?",
    a: "For local Sunderland clients, in-person meetings can be arranged. Most discovery and review sessions happen via video call for efficiency, but we're flexible.",
  },
  {
    q: "Can you help my business rank for 'web design Sunderland' type searches?",
    a: "Yes — local SEO is built into every project. We implement on-page optimisation, schema markup, and Google Business alignment as standard, giving you the best foundation for local search visibility.",
  },
  {
    q: "Do you work with small local businesses?",
    a: "Absolutely. Many of our clients are owner-managed businesses based in Sunderland. You don't need a large marketing budget to get a website that generates real enquiries.",
  },
  {
    q: "What types of Sunderland businesses do you work with?",
    a: "Professional services, trades, healthcare, legal, consultancy, hospitality — any local business that uses their website to generate enquiries. If that's you, we'd love to talk.",
  },
];

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export default function Sunderland() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Web Design Sunderland — Evolux Web Design & Development",
    description:
      "Local web design and development in Sunderland, Tyne & Wear. Custom websites built to win enquiries for Sunderland businesses. Free review available.",
    canonicalPath: "/locations/sunderland",
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
            <div className="absolute -top-28 -right-28 w-[720px] h-[720px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.10) 0%, transparent 65%)" }} />
            <div className="absolute top-0 left-1/3 w-[500px] h-[340px]"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(22 88% 48% / 0.05) 0%, transparent 70%)" }} />
          </div>
          <div aria-hidden className="absolute top-[64px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.55) 30%, hsl(22 88% 48% / 0.3) 65%, transparent 100%)" }}
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 md:pt-20 pb-24 relative z-10">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between mb-10 md:mb-12"
            >
              <div className="flex items-center gap-2">
                <Link href="/" className="group flex items-center gap-2">
                  <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                  </div>
                  <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
                </Link>
                <span className="type-index text-foreground/15">/</span>
                <Link href="/locations" className="type-index text-foreground/35 hover:text-accent transition-colors">Locations</Link>
                <span className="type-index text-foreground/15">/</span>
                <span className="type-index text-foreground/40">Sunderland</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5">
                <MapPin size={9} className="text-accent" />
                <span className="type-index text-foreground/40">Sunderland, Tyne & Wear, SR1</span>
              </div>
            </motion.div>

            {/* H1 */}
            <div className="max-w-5xl mb-10 md:mb-14">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="type-display-lg font-extrabold tracking-tight leading-[1.02] mb-8"
              >
                <span className="text-foreground">Web Design & Development</span>
                <br />
                <span className="text-foreground/25">in Sunderland.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="type-body-lg text-foreground/50 max-w-[52ch] leading-relaxed mb-10"
              >
                Evolux is a Sunderland-based web design studio. We build conversion-focused websites for local businesses that want to win more enquiries — not just more traffic.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#packages"
                  className="flex items-center gap-2.5 bg-foreground text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  View packages & pricing
                </a>
                <Link
                  href="/free-review"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/50 hover:text-foreground border-b border-foreground/20 hover:border-foreground pb-px transition-colors"
                >
                  Free website review <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            </div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-10 border-t border-border"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
                </div>
                <span className="type-index text-foreground/40">5.0 on Google</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-1.5">
                <MapPin size={9} className="text-foreground/30" />
                <span className="type-index text-foreground/35">Sunderland, Tyne & Wear</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <span className="type-index text-foreground/35">Est. 2023</span>
              <div className="w-px h-5 bg-border hidden sm:block" />
              <span className="type-index text-foreground/35 hidden sm:block">30-day post-launch guarantee</span>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LOCAL CONTEXT
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.16] pointer-events-none select-none" />
          <div className="max-w-7xl mx-auto relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">A local studio</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight mb-6">
                  <span className="text-foreground/30">We know Sunderland</span>
                  <br />
                  <span className="text-foreground">business.</span>
                </h2>
                <p className="type-body text-foreground/55 leading-relaxed mb-6">
                  Evolux was founded in Sunderland by Joe in 2023. We've worked with businesses across the city — from the city centre and Deptford to Houghton-le-Spring and Washington — and we understand what the Sunderland market looks like from the inside.
                </p>
                <p className="type-body text-foreground/55 leading-relaxed">
                  That local knowledge informs every project. We know who your competitors are, how local customers search, and what it takes to stand out in the North East market.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <p className="type-label text-foreground/35 mb-5 uppercase tracking-widest">Industries we serve in Sunderland</p>
                <div className="grid grid-cols-2 gap-2">
                  {INDUSTRIES.map((industry, i) => (
                    <motion.div
                      key={industry}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="flex items-center gap-2.5 bg-white border border-border rounded-xl px-4 py-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground/70">{industry}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-8 border-l-2 border-accent pl-6 py-1">
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                  </div>
                  <blockquote className="text-[15px] font-medium text-foreground/70 leading-relaxed italic mb-4">
                    "We couldn't be happier with the new website Joe created for us. It truly captures who we are."
                  </blockquote>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-black text-foreground/50">KD</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-none">Katie Dutton</p>
                      <p className="type-index text-foreground/40 mt-0.5">Manton Executives, Sunderland</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHAT WE DELIVER
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">What's included</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight">
                  <span className="text-foreground/30">Everything your</span>
                  <br />
                  <span className="text-foreground">website needs.</span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 lg:col-start-8 type-body-lg text-foreground/50 leading-relaxed"
              >
                Every Sunderland project includes the same complete build — design, development, performance, SEO, and analytics. Nothing is charged as an add-on that should have been included from the start.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {DELIVERABLES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    className="bg-white p-8 flex flex-col gap-4 group hover:bg-[hsl(0,0%,99%)] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={17} className="text-foreground/45 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="type-body text-foreground/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PACKAGES
        ══════════════════════════════════════════════════ */}
        <section id="packages" className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">Packages</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight">
                  <span className="block text-foreground/30">Transparent pricing.</span>
                  <span className="block text-foreground">No surprises.</span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="type-body text-foreground/50 max-w-sm lg:pb-2"
              >
                Fully scoped before we start. What we quote is what you pay — no extras halfway through.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {PACKAGES.map((pkg, i) => (
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
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white type-label px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most popular
                    </div>
                  )}
                  <div className="mb-6 pt-3">
                    <p className={`type-label mb-3 ${pkg.highlight ? "text-white/50" : "text-foreground/50"}`}>{pkg.name}</p>
                    <p className={`text-sm leading-snug mb-6 ${pkg.highlight ? "text-white/55" : "text-foreground/50"}`}>{pkg.tagline}</p>
                    <p className={`type-label mb-1 ${pkg.highlight ? "text-white/35" : "text-foreground/40"}`}>{pkg.note}</p>
                    <p className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>{pkg.price}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={13} className="shrink-0 mt-0.5 text-accent" />
                        <span className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/70" : "text-foreground/65"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      pkg.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "border border-foreground/15 text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {pkg.name === "Growth Retainer" ? "Talk retainer" : `Start with ${pkg.name}`} <ArrowUpRight size={13} />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white border border-border rounded-2xl px-8 py-6 mb-5"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground mb-1">30-day post-launch guarantee on every package.</p>
                <p className="type-body text-foreground/50">If something isn't right in the 30 days after go-live, we fix it. No quibble, no extra charge.</p>
              </div>
              <Link
                href="/free-review"
                className="shrink-0 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                Not sure? Get a free review <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
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
                <span className="text-foreground/30">Questions about</span>
                <br />
                <span className="text-foreground">working with us.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y divide-border bg-white rounded-2xl border border-border overflow-hidden">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group hover:bg-foreground/[0.02] transition-colors"
                  >
                    <span className="text-[15px] font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:border-accent group-hover:text-accent transition-colors text-sm leading-none font-light">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
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
        <section id="contact" className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-foreground relative overflow-hidden">
          <svg aria-hidden className="absolute -bottom-20 -left-20 w-[400px] h-[400px] pointer-events-none select-none opacity-[0.05]" viewBox="0 0 400 400" fill="none">
            <circle cx="60" cy="340" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="60" cy="340" r="120" stroke="hsl(22 88% 48%)" strokeWidth="0.8"/>
          </svg>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin size={11} className="text-accent" />
                <span className="type-index text-white/35">Sunderland, Tyne & Wear</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight text-white mb-5">
                Ready to grow your Sunderland business online?
              </h2>
              <p className="type-body-lg text-white/45 mb-10 max-w-[46ch] mx-auto leading-relaxed">
                Start with a free review of your current website. Joe will assess it against 20 conversion factors and send you a personalised video in 48 hours.
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
                  Or email Joe directly <ArrowUpRight size={12} />
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
