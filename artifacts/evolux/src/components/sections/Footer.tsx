import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote: "Genuinely one of the best business decisions we made this year. The site they built outperforms everything we had before.",
    author: "Priya Mehta",
    role: "Brand Director, Nexus",
    result: "2× lead volume",
  },
  {
    quote: "They nailed the brief first time. On time, on budget, and the results have been exceptional from week one.",
    author: "Daniel Park",
    role: "COO, Wavemark",
    result: "+180% organic traffic",
  },
  {
    quote: "Bounce rate dropped 40%. Average session time more than doubled. The Evolux approach genuinely works.",
    author: "Clara Hughes",
    role: "Head of Digital, Stratum",
    result: "−40% bounce rate",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">

      {/* Testimonial grid */}
      <div className="py-20 px-6 md:px-10 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-2 type-label text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Client results
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
              <span className="type-label text-muted-foreground ml-1.5">4.9 average across all projects</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-muted/50 rounded-xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
                  </div>
                  <span className="type-label text-accent">{t.result}</span>
                </div>
                <p className="type-quote text-foreground/70 leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="type-label text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="mb-4">
              <span className="block type-display-lg text-muted-foreground font-light">Your next client is</span>
              <span className="block type-display-lg font-extrabold text-foreground">searching right now.</span>
            </h2>
            <p className="type-body-lg text-muted-foreground max-w-lg mb-10">
              If your website isn't winning them over, someone else's is. Let's change that.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
                data-testid="button-start-project"
              >
                Start a project <ArrowUpRight size={14} />
              </button>
              <span className="type-body text-muted-foreground">
                Or email{" "}
                <a href="mailto:hello@evolux.studio" className="text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4">
                  hello@evolux.studio
                </a>
              </span>
              <span className="type-label text-muted-foreground/60 sm:ml-2">
                ↳ We reply within 24 hours
              </span>
            </div>
          </motion.div>

          {/* Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-border pt-8">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-sm tracking-[0.2em] uppercase text-foreground">EVOLUX</span>
              <div className="hidden md:flex gap-6">
                {["Work", "About", "Services", "Pricing", "Contact"].map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="type-body text-muted-foreground hover:text-accent transition-colors"
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
