import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Star, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { YoutubeEmbed } from "@/components/ui/youtube-embed";
import { useSEO } from "@/lib/seo";
import marleyLaptop from "@assets/Mockup-laptop-Marley_1779878754713.webp";

const VIDEO_ID = "dWjJn7rQjNQ";

/* ── Animated counter ── */
function Counter({ to, suffix = "", duration = 2, delay = 0 }: {
  to: number; suffix?: string; duration?: number; delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (ts: number) => {
      if (startTime === null) startTime = ts + delay * 1000;
      const elapsed = ts - startTime;
      if (elapsed < 0) { raf = requestAnimationFrame(animate); return; }
      const pct = Math.min(elapsed / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - pct, 4);
      setCount(Math.round(to * ease));
      if (pct < 1) raf = requestAnimationFrame(animate);
      else setCount(to);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to, duration, delay]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Founder card (same editorial dark card as Intro section) ── */
function FounderCard() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground flex flex-col justify-between p-8">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 15%, hsl(22 88% 48% / 0.13) 0%, transparent 55%)" }}
      />
      <div aria-hidden className="absolute inset-0 flex items-center px-6 pointer-events-none select-none overflow-hidden">
        <span className="font-black text-white/[0.04] leading-none tracking-[-0.06em] whitespace-nowrap" style={{ fontSize: "clamp(5rem, 18vw, 11rem)" }}>
          JOE
        </span>
      </div>
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-black text-[10px] tracking-[0.3em] uppercase text-white/25">EVOLUX</span>
        <div className="text-right">
          <p className="type-index text-white/20 mb-1.5">Certified expert</p>
          <p className="text-[10px] font-semibold text-white/40 tracking-wide">Bricks Builder</p>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center py-8">
        <p className="type-index text-white/30 mb-3">Web designer & developer</p>
        <p className="text-white font-extrabold tracking-tight leading-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
          Joe Evolux
        </p>
        <p className="type-body text-white/45 leading-relaxed max-w-[26ch]">
          5+ years turning underperforming websites into lead-generation machines. Based in Sunderland. Working across the UK.
        </p>
      </div>
      <div className="relative z-10">
        <div className="flex items-end gap-8 border-t border-white/10 pt-5">
          {[
            { value: 20, suffix: "+", label: "projects delivered" },
            { value: 5,  suffix: "+", label: "years experience"   },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-white font-black text-2xl tracking-tight leading-none tabular-nums">
                <Counter to={stat.value} suffix={stat.suffix} duration={1.8} delay={i * 0.2} />
              </span>
              <span className="type-index text-white/35">{stat.label}</span>
            </div>
          ))}
          <div className="ml-auto text-right">
            <span className="type-index text-white/25 block mb-1">Based in</span>
            <span className="text-white/50 text-xs font-medium">Sunderland, UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function About() {
  useSEO({
    title: "About — Joe, Founder of Evolux Web Design",
    description:
      "Evolux is a one-person web design studio based in Sunderland, founded by Joe in 2023. We build conversion-focused websites for UK small businesses that actually generate enquiries.",
    canonicalPath: "/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joe",
      jobTitle: "Web Designer & Developer",
      worksFor: {
        "@type": "Organization",
        name: "Evolux Web Design",
        url: "https://evoluxwebdesign.co.uk",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sunderland",
        addressRegion: "Tyne & Wear",
        addressCountry: "GB",
      },
    },
  });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Page hero ── */}
        <section className="pt-[62px] bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-24 md:pb-32">

            {/* Stamp row */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between mb-10 md:mb-14"
            >
              <div className="flex items-center gap-2.5">
                <Link
                  href="/"
                  className="group flex items-center gap-2 hover:gap-2.5 transition-all"
                >
                  <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                  </div>
                  <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
                </Link>
                <span className="type-index text-foreground/15">/</span>
                <span className="type-index text-foreground/40">About</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <Star size={9} className="fill-accent text-accent" />
                <span className="type-index text-foreground/40">5.0 Google</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                  <span className="text-foreground">Built differently.</span>
                  <br />
                  <span className="text-foreground/30">On purpose.</span>
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  Evolux is a one-person web design studio based in Sunderland, founded in 2023 on a single principle: a website should generate enquiries, not just exist.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="hidden lg:block lg:col-span-4 lg:col-start-9"
              >
                <div className="flex flex-col gap-5">
                  <p className="type-index text-foreground/25 uppercase tracking-[0.2em]">Founded</p>
                  <p className="text-4xl font-extrabold text-foreground tracking-tight leading-none">2023</p>
                  <p className="type-body text-foreground/35 leading-relaxed">
                    Sunderland, Tyne & Wear<br />North East England
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span className="type-index text-foreground/40">Available for new projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── The story ── */}
        <section className="py-24 px-6 md:px-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

              {/* Founder card — sticky on scroll */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky lg:top-24"
              >
                <FounderCard />
                <div className="flex items-center justify-between pt-3.5 border-t border-border">
                  <span className="type-index text-foreground/30">Founded 2023</span>
                  <span className="type-index text-foreground/30">WordPress + Bricks Builder</span>
                </div>
              </motion.div>

              {/* Story text */}
              <div className="flex flex-col gap-8 pt-2 lg:pt-10">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-6 h-px bg-accent" />
                    <span className="type-index text-foreground/40">The story</span>
                  </div>
                  <h2 className="type-display-md font-extrabold tracking-tight text-foreground mb-8 leading-tight">
                    Hey, I'm Joe.
                    <br />
                    <span className="text-foreground/35">Founder of Evolux.</span>
                  </h2>
                  <div className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed">
                    <p>
                      Evolux started in 2023 because I kept seeing the same problem: small businesses with genuinely great products and services, losing enquiries to websites that looked fine but converted nobody. The design was okay. The photography was decent. But the conversion strategy — the thinking that turns a visitor into a lead — was nowhere to be found.
                    </p>
                    <p>
                      I'd been working in web design and development for 5 years before founding Evolux. What that time taught me is that most agencies are optimising for the wrong thing. They build sites that impress other designers — not sites that generate business for their clients.
                    </p>
                    <p>
                      Evolux is different because conversion is the starting point, not an afterthought. Every layout decision, every heading, every call-to-action exists because it moves a visitor closer to making contact. The result: websites that pay for themselves.
                    </p>
                  </div>
                </motion.div>

                {/* Three facts */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="border border-border rounded-2xl overflow-hidden"
                >
                  {[
                    { label: "Direct access",     desc: "You work with me throughout. No account managers, no briefing documents passed down a chain." },
                    { label: "Conversion first",  desc: "Every design decision is tied to one question: does this move a visitor closer to making contact?" },
                    { label: "Measured results",  desc: "I review performance at 30, 60, and 90 days post-launch. The job isn't done when the site goes live." },
                  ].map((item, i, arr) => (
                    <div key={item.label} className={`px-6 py-5 flex items-start gap-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[0.45rem]" />
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-none mb-1.5">{item.label}</p>
                        <p className="type-body text-foreground/45 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA strip */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="pt-7 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <Link
                    href="/projects"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-px"
                  >
                    See the work <ArrowUpRight size={13} />
                  </Link>
                  <Link
                    href="/free-review"
                    className="flex items-center gap-2.5 bg-foreground text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
                  >
                    Get a free website review <ArrowUpRight size={13} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section className="py-24 px-6 md:px-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">Watch</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight leading-tight">
                  <span className="text-foreground/35">Two minutes on</span>
                  <br />
                  how Evolux works.
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="type-body text-foreground/45 max-w-xs lg:pb-1 leading-relaxed"
              >
                The thinking behind why we build websites differently — and what that means for your business.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="ring-1 ring-border rounded-2xl overflow-hidden shadow-sm"
            >
              <YoutubeEmbed
                videoId={VIDEO_ID}
                title="Evolux Web Design — How we build websites that generate enquiries"
                className="rounded-none"
              />
            </motion.div>
          </div>
        </section>

        {/* ── How I work ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">How I work</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight leading-tight max-w-xl">
                <span className="text-foreground/35">Conversion first,</span>
                <br />
                everything else second.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                {
                  num: "01",
                  title: "Discovery before design",
                  body: "Every project starts with a deep-dive into your business, your customers, and what's actually stopping them from making contact. Design comes after the strategy is clear.",
                },
                {
                  num: "02",
                  title: "Built around your buyer",
                  body: "The layout, the copy hierarchy, the calls-to-action — all are designed around the psychology of your specific target customer. Not a generic template.",
                },
                {
                  num: "03",
                  title: "Launched and reviewed",
                  body: "Go-live is the start, not the finish. Performance is reviewed at 30, 60, and 90 days, with adjustments made based on real behaviour — not assumptions.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10 flex flex-col gap-5"
                >
                  <span className="type-index text-foreground/25">{item.num}</span>
                  <h3 className="text-lg font-extrabold text-foreground tracking-tight leading-snug">{item.title}</h3>
                  <p className="type-body text-foreground/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">The toolkit</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight leading-tight mb-6">
                  <span className="text-foreground/35">The tools that</span>
                  <br />
                  do the work.
                </h2>
                <p className="type-body text-foreground/45 leading-relaxed">
                  Every platform and tool is chosen because it gives clients maximum flexibility and performance — not because it's the easiest option for the developer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <div className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden">
                  {[
                    {
                      tool: "WordPress",
                      role: "Core platform",
                      desc: "The world's most flexible CMS — gives clients full content control without needing a developer for every change.",
                    },
                    {
                      tool: "Bricks Builder",
                      role: "Visual builder",
                      desc: "A certified Bricks Builder developer. Clean, semantic markup and performance that page builders typically sacrifice.",
                    },
                    {
                      tool: "Custom CSS",
                      role: "Styling & animation",
                      desc: "No bloated frameworks. Every interaction and transition is purposeful — designed to guide, not distract.",
                    },
                    {
                      tool: "WooCommerce",
                      role: "E-commerce",
                      desc: "For clients selling online, a full WooCommerce build with payment integration, inventory, and shipping.",
                    },
                    {
                      tool: "SEO Fundamentals",
                      role: "Search visibility",
                      desc: "Core on-page SEO baked into every build — schema markup, meta structure, performance scores, and clean URLs.",
                    },
                  ].map((item, i, arr) => (
                    <div
                      key={item.tool}
                      className={`flex items-start gap-5 px-6 py-5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-[0.2rem]" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-1">
                          <p className="text-sm font-semibold text-foreground">{item.tool}</p>
                          <span className="type-label text-foreground/30">{item.role}</span>
                        </div>
                        <p className="type-body text-foreground/45 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Numbers ── */}
        <section className="py-24 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(22 88% 48% / 0.1) 0%, transparent 55%)" }}
          />
          <div className="max-w-7xl mx-auto relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-white/30">By the numbers</span>
              </div>
              <h2 className="type-display-md font-extrabold text-white tracking-tight">
                Work that speaks<br />
                <span className="text-white/35">for itself.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {[
                { value: 20,  suffix: "+", label: "projects delivered",  delay: 0    },
                { value: 5,   suffix: "+", label: "years experience",    delay: 0.1  },
                { value: 200, suffix: "+", label: "brands reached",      delay: 0.2  },
                { value: 100, suffix: "%", label: "5-star Google reviews",delay: 0.3  },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="bg-white/[0.04] px-8 py-10"
                >
                  <p
                    className="text-accent font-extrabold tracking-tight leading-none mb-3 tabular-nums"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                  >
                    <Counter to={stat.value} suffix={stat.suffix} duration={1.8} delay={stat.delay + 0.3} />
                  </p>
                  <p className="type-label text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Work preview image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 rounded-2xl overflow-hidden"
            >
              <img
                src={marleyLaptop}
                alt="Marley Doulas website — Evolux project"
                className="w-full max-h-[50vh] object-cover object-top"
              />
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">Client feedback</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight leading-tight">
                <span className="text-foreground/35">In their</span>
                <br />
                own words.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for.",
                  name: "Katie Dutton",
                  company: "Manton Executives",
                  rating: 5,
                },
                {
                  quote: "Amazing! This company is so easy to work with — they created my website exactly how I'd imagined with no faff or hassle. I would highly recommend to anyone.",
                  name: "Leah Hall",
                  company: "Client",
                  rating: 5,
                },
                {
                  quote: "Joe completely transformed our online presence. From the first conversation to launch day, the process was smooth, professional and the result speaks for itself.",
                  name: "Sarah M.",
                  company: "Evolux Client",
                  rating: 5,
                },
                {
                  quote: "Incredible attention to detail and a genuine understanding of what we needed. Our enquiry rate has gone up noticeably since the new site launched.",
                  name: "David K.",
                  company: "Evolux Client",
                  rating: 5,
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="border border-border rounded-2xl p-8 flex flex-col gap-5 bg-white"
                >
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
                  </div>
                  <p className="type-quote text-foreground/60 leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <footer className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-extrabold text-foreground/40 uppercase">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-none mb-0.5">{t.name}</p>
                      <p className="type-index text-foreground/35">{t.company}</p>
                    </div>
                  </footer>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)] border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="type-label text-muted-foreground mb-4">Ready to start?</p>
                <h2 className="type-display-md font-extrabold text-foreground tracking-tight mb-4 leading-tight">
                  Let's build something
                  <br />
                  <span className="text-foreground/35">that actually works.</span>
                </h2>
                <p className="type-body text-foreground/45 max-w-[42ch] leading-relaxed">
                  Every project starts with a free website review — an honest assessment of what's working, what's not, and what it would take to fix it.
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
                  View our work
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
