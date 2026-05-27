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
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-20 md:pb-24">

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-12"
            >
              <Link href="/" className="flex items-center gap-1.5 type-label text-foreground/40 hover:text-accent transition-colors">
                <ArrowLeft size={11} /> Home
              </Link>
              <span className="type-label text-foreground/20">/</span>
              <span className="type-label text-foreground/40">Insights</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">Insights</span>
                </div>
                <h1 className="type-display-lg font-extrabold tracking-tight text-foreground leading-tight">
                  Straight talk about
                  <br />
                  <span className="text-foreground/35">web design & business.</span>
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
                <div className="flex items-center gap-2">
                  <AuthorChip />
                  <span className="type-label text-foreground/25">·</span>
                  <span className="type-label text-foreground/35">Published monthly</span>
                </div>
              </motion.div>
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
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group flex flex-col h-full rounded-2xl border border-border bg-white hover:border-foreground/20 transition-colors overflow-hidden"
                  >
                    {/* Accent header strip */}
                    <div className="h-1.5 bg-gradient-to-r from-accent/60 to-accent/20" />

                    <div className="flex flex-col flex-1 p-7">
                      {/* Category + reading time */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="type-label text-accent">{post.category}</span>
                        <div className="flex items-center gap-1.5 type-label text-foreground/35">
                          <Clock size={10} />
                          {post.readingTime} min read
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-base font-bold text-foreground leading-snug tracking-tight mb-3 flex-1 group-hover:text-accent transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="type-body text-foreground/45 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-5 border-t border-border">
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
              ))}
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
