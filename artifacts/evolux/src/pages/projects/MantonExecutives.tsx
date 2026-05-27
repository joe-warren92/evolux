import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";
import heroMockup from "@assets/iMac-M4-Purple-1_1779878754716.jpg";
import mobileMockup from "@assets/Free-iPhone-16-Pro-in-Hand-Mockup-2_1779878754716.jpg";
import mobileMockup2 from "@assets/mockup-mobile-copy-2_1779878754713.webp";

const deliverables = [
  "Custom WordPress build with Bricks Builder",
  "Executive brand identity integration",
  "Services & specialisms overview",
  "Candidate & client registration flows",
  "Team and about pages",
  "Mobile-first responsive design",
  "Core on-page SEO",
  "30-day post-launch support",
];

export default function MantonExecutives() {
  useSEO({
    title: "Manton Executives — Case Study | Evolux Web Design",
    description:
      "How Evolux built a professional, conversion-focused website for Manton Executives — an executive recruitment agency in Sunderland. Brand identity, clean design, real enquiry flow.",
    canonicalPath: "/projects/manton-executives",
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
              <span className="type-label text-foreground/40">Manton Executives</span>
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
                  Manton Executives
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  A professional, conversion-focused website for an executive recruitment agency in Sunderland — built to reflect a growing team and attract higher-value clients and candidates.
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
                    { label: "Client",   value: "Manton Executives" },
                    { label: "Industry", value: "Executive Recruitment" },
                    { label: "Services", value: "Web Design, Brand Identity" },
                    { label: "Location", value: "Sunderland, Tyne & Wear" },
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
              alt="Manton Executives website on iMac"
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
                    An agency that had outgrown its digital presence.
                  </h2>
                  <div className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed">
                    <p>
                      Manton Executives is an executive recruitment agency based in Sunderland, placing senior-level candidates across the North East and beyond. As the business grew, the gap between the agency's real-world reputation and its online presence widened.
                    </p>
                    <p>
                      The brief was to build a website that reflected the quality of the agency's work — professional, clean, and immediately credible to both the clients hiring senior staff and the executives considering their next move. The site needed to work hard for both audiences simultaneously.
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
                  A website that undersold an agency doing excellent work.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The existing website had the hallmarks of a template site from an earlier era of the business — functional, but not credible at the senior end of the recruitment market. For clients considering the agency for C-suite or director-level placements, the digital first impression wasn't matching the quality of the conversations that followed.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  Executive candidates, too, were making quick judgements. In a market where talent has options, a dated website sends a signal — and not the right one.
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
                  Executive-grade design built for two audiences at once.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  We designed around two distinct user journeys — the client looking to fill a senior role, and the candidate exploring their next move. Clean typographic hierarchy, restrained colour palette, and professional photography direction gave the site the credibility its work deserved.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  Clear service definitions, a team presence, and straightforward contact paths meant neither audience had to work to understand what Manton offers or how to begin a conversation.
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
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3] flex items-center justify-center p-8"
              >
                <img src={mobileMockup} alt="Manton Executives — mobile view" className="h-full object-contain" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3] flex items-center justify-center p-8"
              >
                <img src={mobileMockup2} alt="Manton Executives — mobile mockup" className="h-full object-contain" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Testimonial / CTA ── */}
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
                <span className="type-index text-white/30">What the client said</span>
              </div>
              <h2 className="type-display-md font-extrabold text-white tracking-tight">
                In their own words.
              </h2>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-accent/40 pl-8 max-w-2xl"
            >
              <p className="type-quote text-white/65 mb-5">
                "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for. Joe was always available, quick to respond, and incredibly patient throughout."
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
                  href="/free-review"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get a free website review <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/projects"
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
