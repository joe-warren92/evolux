import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote: "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for. Joe was always available, quick to respond, and incredibly patient throughout.",
    author: "Katie Dutton",
    role: "Manton Executives",
    initials: "KD",
  },
  {
    quote: "Amazing! This company is so easy to work with. They created my website exactly how I'd imagined with no faff or hassle. I would highly recommend to anyone.",
    author: "Leah Hall",
    role: "Client",
    initials: "LH",
  },
  {
    quote: "From start to finish, the process was clear and professional. The site launched on time, looks exactly like my business, and has already started generating enquiries.",
    author: "Daniel O.",
    role: "Client, North East",
    initials: "DO",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">

      {/* ── Testimonials ── */}
      <div className="py-24 px-6 md:px-10 border-b border-border">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-14">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">What clients say</span>
              </div>
              <h2 className="type-display-md font-extrabold text-foreground">
                Real words.
                <br />
                <span className="text-foreground/35">No agency gloss.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex flex-col items-end gap-1.5 pb-1"
            >
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
              </div>
              <span className="type-index text-foreground/30">5.0 on Google</span>
            </motion.div>
          </div>

          {/* Testimonials — editorial, no boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`pt-8 pb-10 flex flex-col gap-5 border-t border-border ${i < testimonials.length - 1 ? "md:pr-10 md:border-r" : "md:pl-10"} ${i > 0 && i < testimonials.length - 1 ? "md:pl-10" : ""}`}
              >
                <span className="text-4xl font-black text-foreground/10 leading-none select-none">"</span>
                <p className="type-quote text-foreground/55 leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center shrink-0 text-[10px] font-black text-foreground/40 tracking-wide">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-none">{t.author}</p>
                    <p className="type-index mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="relative py-28 px-6 md:px-10 overflow-hidden">

        {/* Ghost wordmark */}
        <span
          aria-hidden
          className="absolute bottom-0 right-0 font-black leading-none tracking-[-0.06em] text-foreground/[0.025] select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 16vw, 16rem)" }}
        >
          EVOLUX
        </span>

        <div
          aria-hidden
          className="absolute -top-20 -left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.045) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-5">
              <span className="block type-display-lg text-foreground/30 font-extrabold">Your next client is</span>
              <span className="block type-display-lg font-extrabold text-foreground">searching right now.</span>
            </h2>
            <p className="type-body-lg text-foreground/45 max-w-md mb-10">
              If your website isn't winning them over, someone else's is. Let's change that.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <button
                className="bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300 flex items-center gap-2"
                data-testid="button-start-project"
              >
                Start a project <ArrowUpRight size={14} />
              </button>
              <a
                href="mailto:info@evoluxwebdesign.co.uk"
                className="text-sm font-medium text-foreground/40 hover:text-accent transition-colors border-b border-border hover:border-accent pb-px"
              >
                info@evoluxwebdesign.co.uk
              </a>
            </div>

            {/* Contact strip */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
              {[
                { label: "Phone", value: "+44 7854 932203", href: "tel:+447854932203" },
                { label: "Email", value: "info@evoluxwebdesign.co.uk", href: "mailto:info@evoluxwebdesign.co.uk" },
                { label: "Based in", value: "Sunderland, Tyne & Wear", href: undefined },
                { label: "Serving", value: "Clients across the UK", href: undefined },
              ].map(item => (
                <div key={item.label}>
                  <p className="type-index text-foreground/30 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-t border-border pt-7">
            <div className="flex items-center gap-8">
              <span className="font-black text-xs tracking-[0.3em] uppercase text-foreground">EVOLUX</span>
              <div className="hidden md:flex gap-6">
                {["Work", "About", "Services", "Pricing", "Insights"].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="type-body text-foreground/35 hover:text-foreground transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <p className="type-index text-foreground/25">© {new Date().getFullYear()} Evolux Web Design. Sunderland, Tyne & Wear.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
