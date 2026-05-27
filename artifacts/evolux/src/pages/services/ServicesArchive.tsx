import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, Globe, Shield, TrendingUp, Layers, PenTool,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Design & Development",
    slug: "web-design",
    href: "/services/web-design",
    desc: "Conversion-focused WordPress websites built from strategy — not templates. For businesses that need their site to generate real enquiries.",
    tags: ["WordPress", "Bricks Builder", "Mobile-first", "CMS"],
    from: "£1,800",
    accent: true,
  },
  {
    icon: Shield,
    title: "Website Maintenance",
    slug: "website-maintenance",
    href: "/services/website-maintenance",
    desc: "Monthly WordPress care plans covering updates, backups, security monitoring and priority support — so you never have to think about it.",
    tags: ["Security", "Backups", "Updates", "Monitoring"],
    from: "£79/mo",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimisation",
    slug: "conversion-optimisation",
    href: "/services/conversion-optimisation",
    desc: "A structured audit of why your existing site isn't converting — and the priority changes that will fix it, with or without a full rebuild.",
    tags: ["CRO Audit", "UX", "Analytics", "Copy"],
    from: "£450",
    accent: false,
  },
  {
    icon: Layers,
    title: "Brand Identity",
    slug: "branding",
    href: "/services/branding",
    desc: "A complete visual identity — logo, palette, typography, guidelines and social kit — built around the positioning that makes your business distinctive.",
    tags: ["Logo", "Guidelines", "Typography", "Social kit"],
    from: "£950",
    accent: false,
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    slug: "graphic-design",
    href: "/services/graphic-design",
    desc: "Ongoing design support for social media, print materials, presentations and marketing collateral — keeping your brand consistent across every touchpoint.",
    tags: ["Social media", "Print", "Presentations", "Marketing"],
    from: "£250",
    accent: false,
  },
];

export default function ServicesArchive() {
  useSEO({
    title: "Services — Web Design, Branding & CRO | Evolux",
    description:
      "Web design, website maintenance, conversion rate optimisation, brand identity and graphic design services for UK small businesses. Based in Sunderland.",
    canonicalPath: "/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Evolux Web Design Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://evoluxwebdesign.co.uk${s.href}`,
      })),
    },
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
              className="flex items-center gap-2.5 mb-16 md:mb-20"
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                </div>
                <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
              </Link>
              <span className="type-index text-foreground/15">/</span>
              <span className="type-index text-foreground/40">Services</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                  <span className="text-foreground">Every service</span>
                  <br />
                  <span className="text-foreground/30">your business needs online.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  From a first website to a complete brand identity, Evolux provides the full range of digital services for UK small businesses — all delivered personally by Joe.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:flex lg:col-span-4 lg:col-start-9 flex-col gap-4"
              >
                <p className="type-index text-foreground/25 uppercase tracking-[0.2em]">One studio</p>
                <p className="type-body text-foreground/45 leading-relaxed">
                  All services are delivered by the same person who takes your initial call — no hand-offs, no account managers, no briefing chains.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span className="type-index text-foreground/40">Available for new projects</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                const isFirst = i === 0;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: i * 0.08 }}
                    className={isFirst ? "lg:col-span-2" : ""}
                  >
                    <Link
                      href={service.href}
                      className={`group flex flex-col gap-6 p-8 md:p-10 rounded-2xl border transition-all duration-200 hover:ring-2 hover:ring-accent cursor-pointer h-full ${
                        isFirst
                          ? "bg-foreground border-foreground lg:flex-row lg:items-center"
                          : "bg-white border-border"
                      }`}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isFirst ? "bg-white/10" : "bg-foreground/5 group-hover:bg-accent/10"
                      } transition-colors`}>
                        <Icon size={20} className={isFirst ? "text-white/70" : "text-foreground/50 group-hover:text-accent"} />
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col gap-3 flex-1 ${isFirst ? "lg:flex-row lg:items-center lg:gap-10" : ""}`}>
                        <div className={`flex-1 ${isFirst ? "" : ""}`}>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h2 className={`text-xl font-extrabold tracking-tight leading-snug ${
                              isFirst ? "text-white" : "text-foreground group-hover:text-accent transition-colors"
                            }`}>
                              {service.title}
                            </h2>
                            <ArrowUpRight
                              size={16}
                              className={`shrink-0 mt-0.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                isFirst ? "text-white/30" : "text-foreground/20 group-hover:text-accent"
                              }`}
                            />
                          </div>
                          <p className={`type-body leading-relaxed ${isFirst ? "text-white/55" : "text-foreground/50"}`}>
                            {service.desc}
                          </p>
                        </div>

                        <div className={`flex flex-col gap-3 ${isFirst ? "lg:items-end lg:shrink-0" : ""}`}>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {service.tags.map(tag => (
                              <span
                                key={tag}
                                className={`type-label px-2.5 py-1 rounded-full ${
                                  isFirst ? "bg-white/10 text-white/50" : "bg-foreground/5 text-foreground/45"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* Price */}
                          <div className={`flex items-baseline gap-1.5 mt-1 ${isFirst ? "lg:justify-end" : ""}`}>
                            <span className={`type-index ${isFirst ? "text-white/30" : "text-foreground/30"}`}>From</span>
                            <span className={`text-base font-extrabold tracking-tight ${isFirst ? "text-accent" : "text-foreground"}`}>{service.from}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── "How it works" strip ── */}
        <section className="py-20 px-6 md:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                {
                  num: "01",
                  title: "Tell me about your business",
                  body: "A short call or email — you explain what you need and what's not working. No obligation, no hard sell.",
                },
                {
                  num: "02",
                  title: "Receive a clear proposal",
                  body: "A scoped proposal with timeline, deliverables and fixed price. No ambiguity, no surprises when the invoice arrives.",
                },
                {
                  num: "03",
                  title: "We get to work",
                  body: "Every project is delivered by Joe personally. You'll have direct access throughout — no delays waiting on a third party.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10 flex flex-col gap-4"
                >
                  <span className="type-index text-foreground/25">{item.num}</span>
                  <h3 className="text-lg font-extrabold text-foreground tracking-tight leading-snug">{item.title}</h3>
                  <p className="type-body text-foreground/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(22 88% 48% / 0.1) 0%, transparent 55%)" }} />
          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-white/30">Not sure where to start?</span>
                <span className="w-6 h-px bg-accent" />
              </div>
              <h2 className="type-display-md font-extrabold text-white tracking-tight mb-5">
                Get a free website review<br />
                <span className="text-white/30">and we'll tell you exactly what you need.</span>
              </h2>
              <p className="type-body-lg text-white/45 mb-8 max-w-[44ch] mx-auto leading-relaxed">
                A personalised video review delivered to your inbox within 48 hours — no obligation, no sales pitch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/free-review"
                  className="flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Get your free review <ArrowUpRight size={14} />
                </Link>
                <a
                  href="mailto:info@evoluxwebdesign.co.uk"
                  className="flex items-center gap-2 text-sm font-semibold text-white/45 hover:text-white border-b border-white/20 hover:border-white pb-px transition-colors"
                >
                  Email directly <ArrowUpRight size={12} />
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
