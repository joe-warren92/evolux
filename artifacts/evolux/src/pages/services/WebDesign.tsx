import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, Check, ShieldCheck, Star,
  Layers, Smartphone, Zap, BarChart2, Search, Pencil,
  Code2, Rocket,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const DELIVERABLES = [
  {
    icon: Pencil,
    title: "Brand-aligned design",
    desc: "Every layout, typeface and colour decision is made to reflect the quality of your business — not pulled from a generic template.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first build",
    desc: "Over 60% of your visitors arrive on a phone. Your site is built mobile-first and tested on real devices — not just resized.",
  },
  {
    icon: Layers,
    title: "Conversion architecture",
    desc: "Each page is structured to guide the right visitor toward making contact — clear hierarchy, logical flow, low-friction CTAs.",
  },
  {
    icon: Zap,
    title: "Performance & Core Web Vitals",
    desc: "Fast-loading pages rank better and convert better. We optimise images, code and hosting so your site scores well on every metric.",
  },
  {
    icon: Search,
    title: "On-page SEO",
    desc: "Title tags, schema markup, semantic HTML, sitemap — all the foundations that let Google understand and rank your pages.",
  },
  {
    icon: BarChart2,
    title: "Analytics & goal tracking",
    desc: "Google Analytics 4 configured with conversion goals so you can see exactly which pages and sources are generating enquiries.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "A focused strategy session to understand your business, your competitors, and the exact type of client you want to attract. We agree on goals before a pixel is placed.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    desc: "Full design in Figma — desktop and mobile. You review, give feedback, and approve before we write a single line of code. No surprises.",
    duration: "Weeks 1–2",
  },
  {
    step: "03",
    title: "Build",
    desc: "Your approved design is built to pixel precision using modern tooling. CMS integration means you can edit copy yourself without touching code.",
    duration: "Weeks 2–4",
  },
  {
    step: "04",
    title: "Launch & handover",
    desc: "We handle domain setup, hosting migration, and go-live. You receive full training on your CMS and 30 days of post-launch support as standard.",
    duration: "Week 4–5",
  },
];

const PACKAGES = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For businesses that need a credible first impression, fast.",
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
    tagline: "Our most ambitious work — for businesses that want to dominate their market.",
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

const FAQS = [
  {
    q: "How long does a project take?",
    a: "A typical 5-page website takes 3–4 weeks from the discovery call to launch. Larger Studio projects are usually 5–6 weeks. Timelines are agreed upfront and we stick to them.",
  },
  {
    q: "Do I need to supply copy and images?",
    a: "You'll need to provide the core information about your business. If you don't have professional photography, we can advise on licensed stock options that work for your brand. Copywriting support is available as an add-on.",
  },
  {
    q: "What platform will my website be built on?",
    a: "We build primarily on WordPress with Bricks Builder — a modern, fast page builder that gives you full editorial control without touching code. All sites are hosted on high-performance UK servers.",
  },
  {
    q: "Will I be able to update my own website?",
    a: "Yes. Every project includes CMS setup and a handover training session so you can edit text, images, and blog posts yourself. You'll never be dependent on a developer for day-to-day updates.",
  },
  {
    q: "What happens after launch?",
    a: "Every package includes a post-launch support window — 14 days on Launch, 30 days on Studio, and 90 days on Elite. During that window, any issues are fixed at no charge. After that, ad hoc support is always available.",
  },
  {
    q: "Do you work outside Sunderland / the North East?",
    a: "Absolutely. We work with businesses across the UK. Discovery and review sessions are run over video call — the location doesn't affect the quality of the work.",
  },
];

const TRUST = [
  { title: "No hidden costs", desc: "Fully scoped before we start. What we quote is what you pay." },
  { title: "You deal with the designer", desc: "No account managers. The person building your site is the person you talk to." },
  { title: "30-day guarantee", desc: "Not happy with something in the first 30 days after launch? We fix it, no charge." },
];

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export default function WebDesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Web Design Services — Evolux Web Design, Sunderland",
    description:
      "Conversion-focused web design for UK businesses. Custom builds that generate enquiries, not just traffic. Based in Sunderland — working nationally.",
    canonicalPath: "/services/web-design",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="pt-[64px] relative overflow-hidden">

          {/* Gradient bloom */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-28 w-[720px] h-[720px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.10) 0%, transparent 65%)" }} />
            <div className="absolute top-0 left-1/3 w-[500px] h-[340px]"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(22 88% 48% / 0.05) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 -left-24 w-[400px] h-[300px]"
              style={{ background: "radial-gradient(ellipse at 0% 100%, hsl(22 88% 48% / 0.04) 0%, transparent 70%)" }} />
          </div>
          <div aria-hidden className="absolute top-[64px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.55) 30%, hsl(22 88% 48% / 0.3) 65%, transparent 100%)" }}
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 md:pt-20 pb-24 relative z-10">

            {/* Stamp row */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between mb-10 md:mb-12"
            >
              <div className="flex items-center gap-2.5">
                <Link href="/" className="group flex items-center gap-2">
                  <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                  </div>
                  <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
                </Link>
                <span className="type-index text-foreground/15">/</span>
                <span className="type-index text-foreground/40">Web Design</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="type-index text-foreground/40">Sunderland, UK — working nationally</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="max-w-5xl mb-10 md:mb-14">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="type-display-lg font-extrabold tracking-tight leading-[1.02] mb-8"
              >
                <span className="text-foreground">Websites built to</span>
                <br />
                <span className="text-foreground/25">win enquiries.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="type-body-lg text-foreground/50 max-w-[52ch] leading-relaxed mb-10"
              >
                Custom web design for UK professional service businesses. Every layout decision, every line of copy, every call-to-action is engineered to turn visitors into enquiries.
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
                  Get a free website review <ArrowUpRight size={13} />
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
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-accent text-accent" />)}
                </div>
                <span className="type-index text-foreground/40">5.0 on Google</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <span className="type-index text-foreground/35">Est. 2023, Sunderland</span>
              <div className="w-px h-5 bg-border" />
              <span className="type-index text-foreground/35">WordPress · Bricks Builder</span>
              <div className="w-px h-5 bg-border hidden sm:block" />
              <span className="type-index text-foreground/35 hidden sm:block">30-day post-launch guarantee</span>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PROBLEM — the cost of a bad website
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.16] pointer-events-none select-none" />
          <div className="max-w-7xl mx-auto relative z-10">

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
                  <span className="type-index text-foreground/40">Why it matters</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight">
                  <span className="text-foreground/30">Your website is either</span>
                  <br />
                  <span className="text-foreground">working or it isn't.</span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 lg:col-start-8 type-body-lg text-foreground/50 leading-relaxed"
              >
                Most professional services websites have 3–5 gaps that stop visitors from making contact. They're rarely obvious — and they're almost never about visual design alone. They're about trust, clarity, and friction.
              </motion.p>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-6">
              {[
                { stat: "8 sec", label: "Average time before a visitor decides to stay or leave", note: "First impressions are formed in seconds — your site needs to communicate value immediately." },
                { stat: "60%+", label: "Of traffic arrives on mobile devices", note: "A site that isn't properly optimised for mobile is losing more than half its potential enquiries." },
                { stat: "3–5×", label: "More enquiries from conversion-optimised sites vs template sites", note: "The difference isn't always visual — it's structural. Hierarchy, trust signals, and clear next steps." },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10"
                >
                  <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-3">{item.stat}</p>
                  <p className="text-sm font-semibold text-foreground/60 mb-4 leading-snug">{item.label}</p>
                  <p className="type-body text-foreground/40 leading-relaxed border-t border-border pt-4">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DELIVERABLES
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
                  <span className="type-index text-foreground/40">What we deliver</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight">
                  <span className="text-foreground/30">Built from the ground up.</span>
                  <br />
                  <span className="text-foreground">For your business.</span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 lg:col-start-8 type-body-lg text-foreground/50 leading-relaxed"
              >
                No templates. No themes modified after the fact. Every project starts from a strategy session and is designed around your specific audience, goals, and competitive landscape.
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
            PROCESS
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-foreground overflow-hidden relative">

          {/* Decorative ring */}
          <svg aria-hidden className="absolute -top-16 -right-16 w-[460px] h-[460px] pointer-events-none select-none opacity-[0.06]" viewBox="0 0 460 460" fill="none">
            <circle cx="340" cy="120" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="340" cy="120" r="130" stroke="hsl(22 88% 48%)" strokeWidth="1"/>
            <circle cx="340" cy="120" r="60" stroke="hsl(22 88% 48%)" strokeWidth="1.5"/>
          </svg>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-white/30">How it works</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 type-display-md font-extrabold tracking-tight text-white"
              >
                A process built around clarity, not chaos.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 lg:col-start-8 type-body-lg text-white/45 leading-relaxed"
              >
                You'll always know where your project is, what's happening next, and who to contact. No chasing, no radio silence.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
              {PROCESS.map((step, i) => {
                const icons = [Pencil, Layers, Code2, Rocket];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white/[0.04] p-8 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <span className="type-index text-accent/60">{step.step}</span>
                      <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-white/40" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="type-body text-white/45 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/8">
                      <span className="type-index text-white/25">{step.duration}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PACKAGES & PRICING
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
                Every project is fully scoped before we start. What we quote is what you pay — no extras added halfway through.
              </motion.p>
            </div>

            {/* Cards */}
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
                    {pkg.cta} <ArrowUpRight size={13} />
                  </a>
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

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-white overflow-hidden"
            >
              {TRUST.map(item => (
                <div key={item.title} className="p-7">
                  <h4 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h4>
                  <p className="type-body text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TESTIMONIAL
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-4"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">Client results</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight">
                  <span className="text-foreground/30">Trusted by</span>
                  <br />
                  <span className="text-foreground">growing businesses.</span>
                </h2>
              </motion.div>

              <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    quote: "We couldn't be happier with the new website Joe created for us. It truly captures who we are.",
                    name: "Katie Dutton",
                    company: "Manton Executives",
                    initials: "KD",
                  },
                  {
                    quote: "Joe was always available, quick to respond, and incredibly patient. The turnaround was faster than we expected.",
                    name: "Client",
                    company: "Ockerby Academy",
                    initials: "OA",
                  },
                ].map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="border-l-2 border-accent pl-6 py-1"
                  >
                    <div className="flex gap-0.5 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                    </div>
                    <blockquote className="text-[15px] font-medium text-foreground/70 leading-relaxed italic mb-5">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-2.5">
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
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════ */}
        <section className="py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
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
                <span className="text-foreground/30">Common</span>{" "}
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
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500" />
                </span>
                <span className="type-index text-white/35">Currently available for new projects</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight text-white mb-5">
                Ready to build something that actually works?
              </h2>
              <p className="type-body-lg text-white/45 mb-10 max-w-[46ch] mx-auto leading-relaxed">
                Start with a free website review — Joe will assess your current site and tell you exactly what's holding it back. No commitment required.
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
