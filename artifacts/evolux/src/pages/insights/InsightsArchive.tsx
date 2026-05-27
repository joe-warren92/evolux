import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";
import { INSIGHT_POSTS, JOE_AUTHOR, ALL_CATEGORIES } from "@/data/insights";

function AuthorChip() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center shrink-0">
        <span className="text-[8px] font-extrabold text-white">{JOE_AUTHOR.initials}</span>
      </div>
      <span className="type-label text-foreground/50">{JOE_AUTHOR.name}</span>
    </div>
  );
}

export default function InsightsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  useSEO({
    title: "Insights — Web Design & Business Strategy",
    description:
      "Straight talk on web design, conversion optimisation, and digital strategy for UK small businesses. Written by Joe, founder of Evolux Web Design.",
    ogType: "website",
    canonicalPath: "/insights",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Evolux Insights",
      description:
        "Web design strategy, conversion optimisation, and digital growth advice for UK SMEs.",
      url: "https://evoluxwebdesign.co.uk/insights",
      publisher: {
        "@type": "Organization",
        name: "Evolux Web Design",
        url: "https://evoluxwebdesign.co.uk",
      },
    },
  });

  const filtered =
    activeCategory === "All"
      ? INSIGHT_POSTS
      : INSIGHT_POSTS.filter(p => p.category === activeCategory);

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
              className="flex items-center justify-between mb-16 md:mb-20"
            >
              <div className="flex items-center gap-2.5">
                <Link href="/" className="group flex items-center gap-2 hover:gap-2.5 transition-all">
                  <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                  </div>
                  <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
                </Link>
                <span className="type-index text-foreground/15">/</span>
                <span className="type-index text-foreground/40">Insights</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <AuthorChip />
                <span className="type-label text-foreground/25">·</span>
                <span className="type-label text-foreground/35">Monthly</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight">
                  <span className="text-foreground">Straight talk about</span>
                  <br />
                  <span className="text-foreground/30">web design & business.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 lg:pb-1"
              >
                <p className="type-body text-foreground/45 leading-relaxed">
                  We write about the decisions that grow businesses — conversion, strategy, and the honest maths of web investment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Topics we cover ── */}
        <section className="py-16 px-6 md:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">What we write about</span>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  topic: "Conversion strategy",
                  desc: "Why most websites don't convert — and the layout, copy, and UX decisions that change that.",
                },
                {
                  topic: "Web design for small business",
                  desc: "Practical advice on briefs, timelines, budgets, and choosing the right builder for your needs.",
                },
                {
                  topic: "Local SEO & visibility",
                  desc: "How to rank for the searches your customers are actually making — without paying for ads.",
                },
                {
                  topic: "The business case for investment",
                  desc: "The honest maths of web design ROI: when a new site pays for itself, and when it doesn't.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="bg-white border border-border rounded-2xl p-6"
                >
                  <p className="text-sm font-bold text-foreground mb-2 leading-snug">{item.topic}</p>
                  <p className="type-body text-foreground/45 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category filter ── */}
        <section className="bg-background sticky top-[62px] z-30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
              {ALL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-foreground text-white"
                      : "text-foreground/50 hover:text-foreground hover:bg-foreground/6"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto shrink-0 type-label text-foreground/25">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
            </div>
          </div>
        </section>

        {/* ── Post grid ── */}
        <section className="py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => {
                const blobPositions = [
                  "radial-gradient(ellipse 70% 80% at 110% -10%, hsl(22 88% 48% / 0.35) 0%, transparent 70%)",
                  "radial-gradient(ellipse 65% 70% at -10% 110%, hsl(22 88% 48% / 0.30) 0%, transparent 70%)",
                  "radial-gradient(ellipse 80% 60% at 50% -20%,  hsl(22 88% 48% / 0.28) 0%, transparent 65%)",
                ];
                const blobStyle = blobPositions[i % blobPositions.length];
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={`/insights/${post.slug}`}
                      className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      {/* ── Dark cover tile ── */}
                      <div className="relative h-52 bg-foreground overflow-hidden flex flex-col justify-between p-6">
                        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: blobStyle }} />
                        <span
                          aria-hidden
                          className="absolute bottom-2 right-4 font-black leading-none text-white/[0.06] select-none"
                          style={{ fontSize: "clamp(5rem, 8vw, 7rem)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex items-center justify-between relative z-10">
                          <span className="type-label text-accent bg-accent/15 border border-accent/25 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5 type-label text-white/40">
                            <Clock size={10} />
                            {post.readingTime} min read
                          </div>
                        </div>
                        <p className="relative z-10 text-sm font-semibold text-white/70 leading-snug max-w-[26ch]">
                          "{post.coverQuote}"
                        </p>
                      </div>

                      {/* ── Content area ── */}
                      <div className="flex flex-col flex-1 p-6 bg-white">
                        <h2 className="text-base font-bold text-foreground leading-snug tracking-tight mb-3 flex-1 group-hover:text-accent transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="type-body text-foreground/45 leading-relaxed mb-5 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center shrink-0">
                              <span className="text-[9px] font-extrabold text-white">{JOE_AUTHOR.initials}</span>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold text-foreground leading-none">{JOE_AUTHOR.name}</p>
                              <p className="type-index text-foreground/35 mt-0.5">{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                            </div>
                          </div>
                          <ArrowUpRight
                            size={15}
                            className="text-foreground/25 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Author bio strip ── */}
        <section className="py-16 px-6 md:px-10 border-t border-border bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center shrink-0">
                <span className="text-lg font-extrabold text-white">{JOE_AUTHOR.initials}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground mb-0.5">{JOE_AUTHOR.name} — {JOE_AUTHOR.role}</p>
                <p className="type-body text-foreground/45 leading-relaxed max-w-2xl">{JOE_AUTHOR.bio}</p>
              </div>
              <Link
                href="/about"
                className="shrink-0 border border-border px-5 py-2.5 rounded-full text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                About Joe <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
