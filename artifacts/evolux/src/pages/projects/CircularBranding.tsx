import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import heroMockup from "@assets/mockup3-1_1779878754712.webp";
import screen1 from "@assets/Screenshot_2026-05-27_092951_1779870750832.png";
import screen2 from "@assets/Screenshot_2026-05-27_093006_1779870750834.png";
import screen3 from "@assets/Screenshot_2026-05-27_093017_1779870750835.png";
import screen4 from "@assets/Screenshot_2026-05-27_093030_1779870750836.png";

const deliverables = [
  "Custom WordPress build with Bricks Builder",
  "Full visual identity integration",
  "Trade enquiry funnel & lead capture",
  "Case study portfolio showcase",
  "Mobile-first responsive design",
  "Core SEO & meta optimisation",
  "CMS for self-managed content",
  "30-day post-launch support",
];

const outcomes = [
  { metric: "200+", label: "fashion brands reached" },
  { metric: "5.0★", label: "Google rating" },
  { metric: "3×",   label: "trade enquiry increase" },
];

export default function CircularBranding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>

        {/* ── Case hero ── */}
        <section className="pt-[62px] bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-0">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-10"
            >
              <Link
                href="/#projects"
                className="flex items-center gap-1.5 type-label text-foreground/40 hover:text-accent transition-colors"
              >
                <ArrowLeft size={11} />
                Projects
              </Link>
              <span className="type-label text-foreground/20">/</span>
              <span className="type-label text-foreground/40">Circular Branding Group</span>
            </motion.div>

            {/* Title block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="type-label text-muted-foreground">Web Design & Development</span>
                </div>
                <h1 className="type-display-lg font-extrabold text-foreground tracking-tight mb-5 leading-tight">
                  Circular Branding Group
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  A premium B2B trade website for a labels, trims and packaging supplier — built to win brand partnerships and showcase their portfolio to fashion's biggest names.
                </p>
              </motion.div>

              {/* Project meta */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
              >
                <div className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden bg-white">
                  {[
                    { label: "Client",   value: "Circular Branding Group" },
                    { label: "Industry", value: "Labels & Packaging" },
                    { label: "Services", value: "Web Design, Development" },
                    { label: "Year",     value: "2024" },
                    { label: "Result",   value: "200+ brands worldwide" },
                  ].map((item, i, arr) => (
                    <div key={item.label} className={`flex items-baseline justify-between gap-4 px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="type-label text-muted-foreground shrink-0">{item.label}</span>
                      <span className="text-xs font-semibold text-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero image — full bleed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden bg-[hsl(0,0%,97%)]"
          >
            <img
              src={heroMockup}
              alt="Circular Branding Group website on laptop"
              className="w-full max-h-[70vh] object-cover object-center"
            />
          </motion.div>
        </section>

        {/* ── Overview ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* The brief */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-accent" />
                    <span className="type-index text-foreground/40">The brief</span>
                  </div>
                  <h2 className="type-display-md font-extrabold text-foreground tracking-tight mb-8">
                    A supplier that needed to look like a partner.
                  </h2>
                  <div className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed">
                    <p>
                      Circular Branding Group supply labels, trims and packaging to some of the UK and Europe's leading fashion brands. Their product quality was exceptional — but their digital presence didn't reflect it. The old website looked like a catalogue, not a premium supplier.
                    </p>
                    <p>
                      The brief was clear: build something that would immediately signal credibility and quality to a brand buyer visiting for the first time. Something that positioned Circular not as a vendor, but as a creative partner in brand packaging.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-4 lg:col-start-9">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <p className="type-label text-muted-foreground mb-5">What was delivered</p>
                  <ul className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden">
                    {deliverables.map((item, i, arr) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="type-body text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge / Solution ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="bg-white p-10 flex flex-col gap-5"
              >
                <span className="type-label text-accent/70">01 — The challenge</span>
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-snug">
                  Buyers arriving and leaving without making contact.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The original site had no clear call-to-action, no trust signals, and no way for a brand buyer to quickly understand the scope of Circular's capabilities. Traffic was arriving from trade shows and referrals — but the site wasn't converting it.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The product photography was strong. The client relationships were even stronger. The site just wasn't communicating any of that.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="bg-white p-10 flex flex-col gap-5"
              >
                <span className="type-label text-accent/70">02 — The solution</span>
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-snug">
                  Built to win trade partnerships, not just display products.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  We rebuilt from scratch around a single goal: give a brand buyer everything they need to feel confident making contact. That meant a clear product capability overview, a portfolio that showed the calibre of existing clients, and a frictionless enquiry path.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The design direction was deliberately editorial — reflecting the visual language of the fashion brands Circular supplies, rather than a generic supplier template.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Screens ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">Selected screens</span>
            </motion.div>

            {/* Large + small grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
              >
                <img src={screen1} alt="Circular Branding — homepage" className="w-full h-full object-cover object-top" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
              >
                <img src={screen2} alt="Circular Branding — portfolio" className="w-full h-full object-cover object-top" />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[screen3, screen4, heroMockup].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
                >
                  <img src={src} alt={`Circular Branding screen ${i + 3}`} className="w-full h-full object-cover object-top" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="py-24 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 20%, hsl(22 88% 48% / 0.12) 0%, transparent 55%)" }}
          />
          <div className="max-w-7xl mx-auto relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-white/30">Outcomes</span>
              </div>
              <h2 className="type-display-md font-extrabold text-white tracking-tight">
                The numbers 90 days<br />after launch.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
              {outcomes.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/[0.04] px-10 py-10"
                >
                  <p className="text-accent font-extrabold tracking-tight leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                    {item.metric}
                  </p>
                  <p className="type-label text-white/40">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-accent/40 pl-8 max-w-2xl"
            >
              <p className="type-quote text-white/65 mb-5">
                "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for."
              </p>
              <footer className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                </div>
                <span className="type-label text-white/35">Katie Dutton — Manton Executives</span>
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ── Next project + CTA ── */}
        <section className="py-24 px-6 md:px-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="type-label text-muted-foreground mb-4">Ready to start?</p>
                <h2 className="type-display-md font-extrabold text-foreground tracking-tight mb-4">
                  Let's build something<br />
                  <span className="text-foreground/35">that performs.</span>
                </h2>
                <p className="type-body text-foreground/45 max-w-md leading-relaxed">
                  Every Evolux project starts with a free website review — an honest assessment of what's working and what's costing you enquiries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
              >
                <Link
                  href="/#review"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get a free website review <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/#projects"
                  className="border border-border px-8 py-4 rounded-full text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  ← Back to all projects
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
