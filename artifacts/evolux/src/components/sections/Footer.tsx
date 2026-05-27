import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Genuinely one of the best decisions we made this year. The site they built outperforms everything we had before.",
    author: "Priya Mehta",
    role: "Brand Director, Nexus",
  },
  {
    quote: "Evolux nailed our brief on the first presentation. Launched on time, on budget, and the results have been exceptional.",
    author: "Daniel Park",
    role: "COO, Wavemark",
  },
  {
    quote: "Our bounce rate dropped 40% and average session time more than doubled. That's the Evolux effect.",
    author: "Clara Hughes",
    role: "Head of Digital, Stratum",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">

      {/* Testimonial strip */}
      <div className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 type-label text-muted-foreground mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Client Results
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={12} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="type-quote text-muted-foreground leading-relaxed">{t.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="type-label text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA block */}
      <div className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2>
              <span className="block type-display-lg text-muted-foreground font-light">Ready to build</span>
              <span className="block type-display-lg font-extrabold text-foreground -mt-2">something remarkable?</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/85 transition-colors"
                data-testid="button-start-project"
              >
                Start a Project →
              </button>
              <span className="type-body text-muted-foreground">
                Or email us at{" "}
                <a
                  href="mailto:hello@evolux.studio"
                  className="text-foreground font-medium hover:underline underline-offset-4"
                >
                  hello@evolux.studio
                </a>
              </span>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-border pt-8">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-sm tracking-[0.22em] uppercase text-foreground">EVOLUX</span>
              <div className="hidden md:flex gap-6">
                {["Work","About","Services","Contact"].map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="type-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <p className="type-label text-muted-foreground">© {new Date().getFullYear()} Evolux Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
