import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Strategy",
    readTime: "4 min",
    title: "Why most websites don't generate business — and what yours should do instead",
    excerpt:
      "Most sites are built to look presentable. The ones that generate revenue are engineered around a single question: what do we want the visitor to do? Here's the difference in practice.",
  },
  {
    id: 2,
    category: "Business case",
    readTime: "3 min",
    title: "The real cost of a cheap website",
    excerpt:
      "A £500 build feels like a saving. But if it's losing you 3 enquiries a month at an average deal value of £2,000, the maths fall apart quickly. We've done the calculation.",
  },
  {
    id: 3,
    category: "Hiring guide",
    readTime: "5 min",
    title: "5 questions to ask a web design agency before you sign anything",
    excerpt:
      "Every agency will tell you what you want to hear. Ask these five questions instead — the answers will tell you immediately whether they can actually deliver.",
  },
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

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-[hsl(0,0%,97.5%)] p-8 flex flex-col cursor-pointer hover:border-foreground/20 transition-colors"
              data-testid={`card-insight-${article.id}`}
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-6">
                <span className="type-label text-accent">{article.category}</span>
                <div className="flex items-center gap-1.5 type-label text-muted-foreground">
                  <Clock size={11} />
                  {article.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-4 flex-1 group-hover:text-accent transition-colors duration-200">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="type-body text-muted-foreground leading-relaxed mb-7">
                {article.excerpt}
              </p>

              {/* Read more */}
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                Read article
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
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
          <p className="type-label text-muted-foreground">
            New articles published monthly
          </p>
          <button
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            data-testid="button-all-insights"
          >
            View all articles <ArrowUpRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
