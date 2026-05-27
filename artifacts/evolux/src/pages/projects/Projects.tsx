import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";
import circularMockup from "@assets/mockup3-1_1779878754712.webp";
import marleyMockup from "@assets/4K-Mockup-1-1_1779878754714.webp";
import ockerbyMockup from "@assets/Macbook-Air-Light-Background-2_1779878754715.png";
import vaMockup from "@assets/iMac-M4-Purple-1_1779878754716.jpg";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "circular-branding",
    num: "01",
    title: "Circular Branding Group",
    category: "Web Design & Development",
    industry: "Labels & Packaging",
    year: "2024",
    result: "200+",
    resultLabel: "fashion brands served",
    desc: "Trade website for a labels, trims and packaging supplier. Built to win brand partnerships and showcase their portfolio.",
    image: circularMockup,
    href: "/projects/circular-branding",
    featured: true,
  },
  {
    id: "marley-doulas",
    num: "02",
    title: "Marley Doulas",
    category: "Brand Identity + Web",
    industry: "Healthcare & Wellness",
    year: "2024",
    result: "",
    resultLabel: "",
    desc: "Website for a birth doula in Surrey Hills and South London. Built around trust and enquiry conversion.",
    image: marleyMockup,
    href: null,
  },
  {
    id: "ockerby-academy",
    num: "03",
    title: "Ockerby Academy",
    category: "Web Design & Booking",
    industry: "Education & Performing Arts",
    year: "2024",
    result: "5.0★",
    resultLabel: "Google rating",
    desc: "Website for a dance and musical theatre academy in West Yorkshire. Built around class sign-ups.",
    image: ockerbyMockup,
    href: null,
  },
  {
    id: "manton-executives",
    num: "04",
    title: "Manton Executives",
    category: "Brand Identity + Web",
    industry: "Executive Recruitment",
    year: "2024",
    result: "",
    resultLabel: "",
    desc: "Website for an executive recruitment agency in Sunderland. Built to reflect a growing team.",
    image: vaMockup,
    href: null,
  },
];

const STATS = [
  { value: "4", label: "Projects delivered" },
  { value: "5.0★", label: "Google rating" },
  { value: "UK-wide", label: "Clients served" },
  { value: "2023", label: "Founded in Sunderland" },
];

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function Projects() {
  useSEO({
    title: "Projects — Evolux Web Design",
    description:
      "A selection of web design and brand identity projects by Evolux — Sunderland-based studio specialising in conversion-focused websites for UK businesses.",
    canonicalPath: "/projects",
  });

  const [featured, ...rest] = PROJECTS;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="pt-[64px] relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.07) 0%, transparent 65%)" }} />
          </div>
          <div aria-hidden className="absolute top-[64px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.5) 30%, hsl(22 88% 48% / 0.3) 65%, transparent 100%)" }} />

          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-14 md:pt-20 pb-16 relative z-10">

            {/* Stamp row */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 mb-10 md:mb-14"
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                </div>
                <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
              </Link>
              <span className="type-index text-foreground/15">/</span>
              <span className="type-index text-foreground/40">Projects</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-[1.03] mb-5">
                  <span className="text-foreground">Results that</span>
                  <br />
                  <span className="text-foreground/25">speak for themselves.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 max-w-[46ch] leading-relaxed">
                  Every project at Evolux starts with a question: what does success actually look like for this business? The work below is our answer.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-4"
              >
                {STATS.map(s => (
                  <div key={s.label} className="border border-border rounded-2xl px-5 py-4 bg-white">
                    <p className="text-2xl font-extrabold tracking-tight text-foreground mb-0.5">{s.value}</p>
                    <p className="type-index text-foreground/40">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURED PROJECT
        ══════════════════════════════════════════════════ */}
        <section className="pb-6 px-5 md:px-8 lg:px-10 border-t border-border">
          <div className="max-w-7xl mx-auto pt-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={featured.href!} className="group block">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/8] bg-[hsl(0,0%,96%)] mb-5">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.85]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end p-8">
                    <div className="flex items-end justify-between w-full gap-4">
                      <div>
                        <p className="type-index text-white/50 mb-1.5">{featured.category}</p>
                        <p className="text-white text-xl font-bold tracking-tight">{featured.title}</p>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-white/90 backdrop-blur-sm type-label text-foreground px-3 py-1.5 rounded-full">
                      {featured.num} — Featured project
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white type-label px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View case study ↗
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-t border-border pt-5">
                  <div className="md:col-span-6">
                    <p className="type-label text-foreground/40 mb-1.5">{featured.category}</p>
                    <h2 className="text-2xl font-extrabold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">{featured.title}</h2>
                    <p className="type-body text-foreground/50 leading-relaxed max-w-[52ch]">{featured.desc}</p>
                  </div>
                  <div className="md:col-span-3 md:col-start-8 flex flex-col gap-2">
                    {[
                      { label: "Industry", value: featured.industry },
                      { label: "Year", value: featured.year },
                    ].map(m => (
                      <div key={m.label} className="flex items-baseline justify-between gap-2 border-b border-border pb-2 last:border-b-0">
                        <span className="type-index text-foreground/35">{m.label}</span>
                        <span className="text-xs font-semibold text-foreground">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="md:col-span-2 md:col-start-11 flex flex-col items-start md:items-end gap-1">
                    <p className="text-3xl font-extrabold tracking-tight text-accent leading-none">{featured.result}</p>
                    <p className="type-index text-foreground/40 text-right">{featured.resultLabel}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            REMAINING PROJECTS GRID
        ══════════════════════════════════════════════════ */}
        <section className="py-10 px-5 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {rest.map((project, i) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="group">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[hsl(0,0%,96%)] mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.88]"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end p-5">
                        <div>
                          <p className="type-index text-white/50 mb-1">{project.category}</p>
                          <p className="text-white text-base font-bold tracking-tight">{project.title}</p>
                        </div>
                      </div>
                      {/* Num badge */}
                      <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-sm type-label text-foreground px-3 py-1.5 rounded-full">
                        {project.num}
                      </div>
                      {/* Coming soon */}
                      <div className="absolute top-3.5 right-3.5 border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 type-label px-3 py-1.5 rounded-full">
                        Case study coming soon
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <p className="text-sm font-bold text-foreground leading-tight">{project.title}</p>
                        <p className="text-sm font-extrabold text-accent shrink-0 tracking-tight">{project.result}</p>
                      </div>
                      <p className="type-index text-foreground/35 mb-2">{project.category} · {project.year}</p>
                      <p className="type-body text-foreground/45 leading-snug">{project.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            RESULTS FOOTNOTE
        ══════════════════════════════════════════════════ */}
        <div className="px-5 md:px-8 lg:px-10 pb-6">
          <div className="max-w-7xl mx-auto border-t border-border pt-5 flex items-center justify-between gap-4">
            <p className="type-index text-foreground/30">All results measured at 90 days post-launch</p>
            <p className="type-index text-foreground/30">Sunderland, Tyne & Wear — est. 2023</p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-5 md:px-8 lg:px-10 mx-5 md:mx-8 lg:mx-10 mb-10 rounded-3xl bg-foreground relative overflow-hidden">
          <svg aria-hidden className="absolute -bottom-16 -right-16 w-[380px] h-[380px] pointer-events-none select-none opacity-[0.05]" viewBox="0 0 380 380" fill="none">
            <circle cx="320" cy="320" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="320" cy="320" r="110" stroke="hsl(22 88% 48%)" strokeWidth="0.8"/>
          </svg>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
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
              <h2 className="type-display-md font-extrabold tracking-tight text-white mb-4">
                Want results like these?
              </h2>
              <p className="type-body-lg text-white/45 mb-10 max-w-[40ch] mx-auto leading-relaxed">
                Start with a free website review — we'll show you exactly what's holding your current site back.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/free-review"
                  className="flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                  Get a free website review
                </Link>
                <Link
                  href="/packages"
                  className="flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white/70 border-b border-white/15 hover:border-white/40 pb-px transition-colors"
                >
                  See packages & pricing <ArrowRight size={12} />
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
