import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote: "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for. Joe was an absolute pleasure to work with throughout — always available, quick to respond, and incredibly patient.",
    author: "Katie Dutton",
    role: "Manton Executives",
    result: "5★ Google review",
  },
  {
    quote: "Amazing! This company is so easy to work with. They created my website exactly how I'd imagined with no faff or hassle. I would highly recommend to anyone.",
    author: "Leah Hall",
    role: "Client",
    result: "5★ Google review",
  },
  {
    quote: "From start to finish, the process was clear and professional. The site launched on time, looks exactly like my business, and has already started generating enquiries. Brilliant service.",
    author: "Daniel O.",
    role: "Client, North East",
    result: "Enquiries from week one",
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
              What clients say
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
              <span className="type-label text-muted-foreground ml-1.5">5.0 on Google</span>
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
                <p className="type-quote text-foreground/70 leading-relaxed flex-1">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="type-label text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA — with decorative EVOLUX wordmark */}
      <div className="relative py-24 px-6 md:px-10 overflow-hidden">

        <span
          aria-hidden
          className="absolute bottom-0 right-0 font-extrabold leading-none tracking-[-0.05em] text-foreground/[0.028] select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: "clamp(7rem, 18vw, 18rem)" }}
        >
          EVOLUX
        </span>

        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.05) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <button
                className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
                data-testid="button-start-project"
              >
                Start a project <ArrowUpRight size={14} />
              </button>
              <span className="type-body text-muted-foreground">
                Or email{" "}
                <a href="mailto:info@evoluxwebdesign.co.uk" className="text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4">
                  info@evoluxwebdesign.co.uk
                </a>
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-muted-foreground">
              <div>
                <p className="type-label mb-1">Phone</p>
                <a href="tel:+447854932203" className="text-foreground hover:text-accent transition-colors font-medium">+44 7854 932203</a>
              </div>
              <div>
                <p className="type-label mb-1">Email</p>
                <a href="mailto:info@evoluxwebdesign.co.uk" className="text-foreground hover:text-accent transition-colors font-medium">info@evoluxwebdesign.co.uk</a>
              </div>
              <div>
                <p className="type-label mb-1">Based in</p>
                <span className="text-foreground font-medium">Sunderland, Tyne & Wear</span>
              </div>
              <div>
                <p className="type-label mb-1">Serving</p>
                <span className="text-foreground font-medium">Clients across the UK</span>
              </div>
            </div>
          </motion.div>

          {/* Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-border pt-8">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-sm tracking-[0.2em] uppercase text-foreground">EVOLUX</span>
              <div className="hidden md:flex gap-6">
                {["Work", "About", "Services", "Pricing", "Insights", "Contact"].map(link => (
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
            <p className="type-label text-muted-foreground">© {new Date().getFullYear()} Evolux Web Design. Sunderland, Tyne & Wear.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
