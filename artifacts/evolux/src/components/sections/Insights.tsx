import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { INSIGHT_POSTS, JOE_AUTHOR } from "@/data/insights";

const FEATURED = INSIGHT_POSTS.slice(0, 3);

/* Cover blob positions — gives each card a distinct feel */
const COVER_BLOBS = [
  "radial-gradient(ellipse 70% 80% at 110% -10%, hsl(22 88% 48% / 0.35) 0%, transparent 70%)",
  "radial-gradient(ellipse 65% 70% at -10% 110%, hsl(22 88% 48% / 0.30) 0%, transparent 70%)",
  "radial-gradient(ellipse 80% 60% at 50% -20%,  hsl(22 88% 48% / 0.28) 0%, transparent 65%)",
];

export function Insights() {
  return (
    <section id="insights" className="py-28 px-6 md:px-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 type-label text-muted-foreground mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Insights
            </div>
            <h2>
              <span className="block type-display-md font-extrabold text-foreground/35">Straight talk about</span>
              <span className="block type-display-md font-extrabold text-foreground">web design & business.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="type-body text-muted-foreground max-w-xs lg:pb-2"
          >
            We write about the decisions that grow businesses — not the tools we use to get there.
          </motion.p>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              data-testid={`card-insight-${i + 1}`}
            >
              <Link
                href={`/insights/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-foreground/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* ── Dark cover tile ── */}
                <div className="relative h-52 bg-foreground overflow-hidden flex flex-col justify-between p-6">
                  {/* Gradient bloom */}
                  <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: COVER_BLOBS[i] }} />

                  {/* Large background number */}
                  <span
                    aria-hidden
                    className="absolute bottom-2 right-4 font-black leading-none text-white/[0.06] select-none"
                    style={{ fontSize: "clamp(5rem, 8vw, 7rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Top row */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="type-label text-accent bg-accent/15 border border-accent/25 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 type-label text-white/40">
                      <Clock size={10} />
                      {post.readingTime} min
                    </div>
                  </div>

                  {/* Pull quote */}
                  <p className="relative z-10 text-sm font-semibold text-white/70 leading-snug max-w-[26ch]">
                    "{post.coverQuote}"
                  </p>
                </div>

                {/* ── Content area ── */}
                <div className="flex flex-col flex-1 p-6 bg-white">
                  <h3 className="text-base font-bold text-foreground leading-snug tracking-tight mb-3 flex-1 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="type-body text-foreground/45 leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center shrink-0">
                        <span className="text-[8px] font-extrabold text-white">{JOE_AUTHOR.initials}</span>
                      </div>
                      <span className="type-label text-foreground/45">
                        {JOE_AUTHOR.name} · {new Date(post.publishedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-foreground/25 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-between border-t border-border pt-8"
        >
          <p className="type-label text-muted-foreground">New articles published monthly</p>
          <Link
            href="/insights"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            data-testid="button-all-insights"
          >
            View all articles <ArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
