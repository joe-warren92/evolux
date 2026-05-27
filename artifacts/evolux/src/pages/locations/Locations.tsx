import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const LOCATIONS = [
  {
    city: "Sunderland",
    region: "Tyne & Wear",
    slug: "/locations/sunderland",
    active: true,
    desc: "Our home city. We know the Sunderland business landscape and have worked with local companies across professional services, trades, and retail.",
    highlight: "Home base",
  },
  {
    city: "Newcastle upon Tyne",
    region: "Tyne & Wear",
    slug: null,
    active: false,
    desc: "Supporting Newcastle businesses with conversion-focused web design. Serving clients across Quayside, Jesmond, and the city centre.",
    highlight: "Serving",
  },
  {
    city: "Durham",
    region: "County Durham",
    slug: null,
    active: false,
    desc: "Working with professional services, tourism, and retail businesses across the city and county.",
    highlight: "Serving",
  },
  {
    city: "Gateshead",
    region: "Tyne & Wear",
    slug: null,
    active: false,
    desc: "From the Quays to Team Valley, supporting Gateshead businesses that want websites that work harder.",
    highlight: "Serving",
  },
  {
    city: "Middlesbrough",
    region: "Teesside",
    slug: null,
    active: false,
    desc: "Web design and development for Teesside businesses ready to turn their site into a lead-generating asset.",
    highlight: "Serving",
  },
  {
    city: "Nationwide",
    region: "United Kingdom",
    slug: null,
    active: false,
    desc: "We work with clients across the UK via video call. Location has never been a barrier to great work.",
    highlight: "UK-wide",
  },
];

export default function Locations() {
  useSEO({
    title: "Locations — Evolux Web Design | Sunderland & the North East",
    description:
      "Evolux Web Design is based in Sunderland and works with businesses across the North East and the UK. Find your local page for tailored web design services.",
    canonicalPath: "/locations",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="pt-[64px] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-28 -right-28 w-[680px] h-[680px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.09) 0%, transparent 65%)" }} />
          </div>
          <div aria-hidden className="absolute top-[64px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.5) 30%, hsl(22 88% 48% / 0.3) 65%, transparent 100%)" }}
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 md:pt-20 pb-24 relative z-10">

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
              <span className="type-index text-foreground/40">Locations</span>
            </motion.div>

            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="type-display-lg font-extrabold tracking-tight leading-[1.03] mb-8"
              >
                <span className="text-foreground">Based in Sunderland.</span>
                <br />
                <span className="text-foreground/25">Working across the UK.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="type-body-lg text-foreground/50 max-w-[52ch] leading-relaxed"
              >
                Evolux was founded in Sunderland in 2023 and has grown to serve businesses across the North East and beyond. Every client gets the same level of attention whether they're in Sunderland or Southampton.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Locations grid ── */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">Areas we serve</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                >
                  {loc.active && loc.slug ? (
                    <Link
                      href={loc.slug}
                      className={`group flex flex-col gap-4 p-7 rounded-2xl border transition-all duration-200 h-full ${
                        loc.active
                          ? "bg-foreground border-foreground hover:ring-2 hover:ring-accent cursor-pointer"
                          : "bg-white border-border"
                      }`}
                    >
                      <LocationCard loc={loc} />
                    </Link>
                  ) : (
                    <div className="flex flex-col gap-4 p-7 rounded-2xl border border-border bg-white h-full">
                      <LocationCard loc={loc} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── "Why we work nationally" strip ── */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">How we work</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight mb-5">
                  <span className="text-foreground/30">Location doesn't</span>
                  <br />
                  <span className="text-foreground">limit great work.</span>
                </h2>
                <p className="type-body text-foreground/50 leading-relaxed">
                  All discovery, design review, and handover sessions are run via video call. We've delivered projects for clients we've never met in person — and the results speak for themselves.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { heading: "Discovery call", body: "Your first session is a 45-minute strategy call via Zoom or Google Meet. No travel required." },
                  { heading: "Design review", body: "Figma prototypes are shared via link. You can comment directly on the design in your own time." },
                  { heading: "Regular check-ins", body: "You'll get weekly progress updates and can reach Joe directly — no account managers in the way." },
                  { heading: "Launch & handover", body: "Full CMS training via screenshare. Every client leaves knowing how to manage their own site." },
                ].map((item, i) => (
                  <div key={item.heading} className="bg-white border border-border rounded-xl p-5">
                    <p className="text-sm font-bold text-foreground mb-2">{item.heading}</p>
                    <p className="type-body text-foreground/50 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="type-display-md font-extrabold tracking-tight mb-5">
                <span className="text-foreground/30">Not sure if we cover</span>
                <br />
                <span className="text-foreground">your area?</span>
              </h2>
              <p className="type-body-lg text-foreground/45 mb-8">
                Get in touch — we almost certainly do. Or start with a free website review and we'll take it from there.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/free-review"
                  className="flex items-center gap-2.5 bg-foreground text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  Get a free website review
                </Link>
                <a
                  href="mailto:info@evoluxwebdesign.co.uk"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/45 hover:text-foreground border-b border-foreground/20 hover:border-foreground pb-px transition-colors"
                >
                  Email us directly <ArrowUpRight size={12} />
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

/* ── Reusable card internals ── */
function LocationCard({ loc }: { loc: typeof LOCATIONS[0] }) {
  const isActive = loc.active;
  return (
    <>
      <div className="flex items-start justify-between">
        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 ${isActive ? "bg-white/10" : "bg-foreground/5"}`}>
          <MapPin size={9} className={isActive ? "text-white/50" : "text-foreground/35"} />
          <span className={`type-index ${isActive ? "text-white/50" : "text-foreground/40"}`}>{loc.highlight}</span>
        </div>
        {isActive && (
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0">
            <ArrowUpRight size={12} className="text-white" />
          </div>
        )}
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-0.5 ${isActive ? "text-white" : "text-foreground"}`}>{loc.city}</h3>
        <p className={`type-index mb-4 ${isActive ? "text-white/35" : "text-foreground/35"}`}>{loc.region}</p>
        <p className={`type-body leading-relaxed ${isActive ? "text-white/55" : "text-foreground/50"}`}>{loc.desc}</p>
      </div>
      {isActive && (
        <div className={`mt-auto pt-4 border-t border-white/10 flex items-center gap-1.5`}>
          <span className="type-index text-accent">View Sunderland page</span>
          <ArrowUpRight size={10} className="text-accent" />
        </div>
      )}
    </>
  );
}
