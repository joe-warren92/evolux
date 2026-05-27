import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";
import heroMockup from "@assets/4K-Mockup-1-1_1779878754714.webp";
import laptopMockup from "@assets/Mockup-laptop-Marley_1779878754713.webp";
import iphoneMockup from "@assets/Mockup-iphone-marley_1779878754712.webp";

const deliverables = [
  "Custom WordPress build with Bricks Builder",
  "Brand identity integration",
  "Trust-led homepage design",
  "Services & packages page",
  "Contact & enquiry flow",
  "Mobile-first responsive design",
  "Core on-page SEO",
  "30-day post-launch support",
];

export default function MarleyDoulas() {
  useSEO({
    title: "Marley Doulas — Case Study | Evolux Web Design",
    description:
      "How Evolux built a warm, trust-led website for Marley Doulas — a birth doula practice serving Surrey Hills and South London. Brand identity, conversion design, and mobile-first build.",
    canonicalPath: "/projects/marley-doulas",
  });

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
                href="/projects"
                className="flex items-center gap-1.5 type-label text-foreground/40 hover:text-accent transition-colors"
              >
                <ArrowLeft size={11} />
                Projects
              </Link>
              <span className="type-label text-foreground/20">/</span>
              <span className="type-label text-foreground/40">Marley Doulas</span>
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
                  <span className="type-label text-muted-foreground">Brand Identity + Web</span>
                </div>
                <h1 className="type-display-lg font-extrabold text-foreground tracking-tight mb-5 leading-tight">
                  Marley Doulas
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  A warm, trust-led website for a birth doula practice serving Surrey Hills and South London — built to reassure expectant parents and convert visitors into enquiries.
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
                    { label: "Client",   value: "Marley Doulas" },
                    { label: "Industry", value: "Healthcare & Wellness" },
                    { label: "Services", value: "Web Design, Brand Identity" },
                    { label: "Location", value: "Surrey Hills & South London" },
                    { label: "Year",     value: "2024" },
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
              alt="Marley Doulas website on desktop"
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
                    A practice that needed to feel as reassuring online as it does in person.
                  </h2>
                  <div className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed">
                    <p>
                      Marley Doulas provides birth doula support to families across Surrey Hills and South London. For expectant parents — especially first-timers — choosing a doula is one of the most personal decisions they'll make. The website needed to reflect that: warm, trustworthy, and immediately reassuring.
                    </p>
                    <p>
                      The brief was to build a site that communicated care and professionalism without feeling clinical. One that would answer a nervous parent's questions before they'd even thought to ask them — and make it easy to get in touch.
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
                  A personal service that felt impersonal online.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The previous website felt clinical and generic — the kind of design that works for a GP's surgery, not a birth doula whose entire value proposition is warmth, presence, and trust. Visitors were arriving, reading little, and leaving without making contact.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  For a service built entirely on personal connection, the digital first impression was doing serious damage. The gap between how the practice felt in person and how it appeared online was costing enquiries every week.
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
                  Designed around the emotional journey of expectant parents.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  We rebuilt the site around the psychology of an anxious expectant parent — what they need to feel safe, what questions they'll ask before making contact, and what stops them from reaching out. Warm typography, considered whitespace, and gentle brand colours replaced the functional-but-cold template.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  Every page was structured to answer unspoken questions: what does a doula actually do? Is this right for me? What happens if I get in touch? The enquiry path was simplified to a single, low-friction step.
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
              >
                <img src={laptopMockup} alt="Marley Doulas — laptop view" className="w-full h-full object-cover object-top" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3] flex items-center justify-center p-8"
              >
                <img src={iphoneMockup} alt="Marley Doulas — mobile view" className="h-full object-contain" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA dark ── */}
        <section className="py-24 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 20%, hsl(22 88% 48% / 0.12) 0%, transparent 55%)" }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="type-label text-white/30 mb-4">Ready to start?</p>
                <h2 className="type-display-md font-extrabold text-white tracking-tight mb-4">
                  Let's build something<br />
                  <span className="text-white/30">that performs.</span>
                </h2>
                <p className="type-body text-white/45 max-w-md leading-relaxed">
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
                  href="/free-review"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get a free website review <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/projects"
                  className="border border-white/20 px-8 py-4 rounded-full text-sm font-semibold text-white hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
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
