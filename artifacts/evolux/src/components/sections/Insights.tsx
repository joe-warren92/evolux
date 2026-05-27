import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { INSIGHT_POSTS, JOE_AUTHOR } from "@/data/insights";

const FEATURED = INSIGHT_POSTS.slice(0, 3);

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

        {/* Articles */}
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
                className="group rounded-2xl border border-border bg-[hsl(0,0%,97.5%)] p-8 flex flex-col h-full hover:border-foreground/20 transition-colors"
              >
                {/* Meta */}
                <div className="flex items-center justify-between mb-6">
                  <span className="type-label text-accent">{post.category}</span>
                  <div className="flex items-center gap-1.5 type-label text-muted-foreground">
                    <Clock size={11} />
                    {post.readingTime} min
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-4 flex-1 group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="type-body text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Author + CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center shrink-0">
                      <span className="text-[8px] font-extrabold text-white">{JOE_AUTHOR.initials}</span>
                    </div>
                    <span className="type-label text-foreground/45">{JOE_AUTHOR.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    Read
                    <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
