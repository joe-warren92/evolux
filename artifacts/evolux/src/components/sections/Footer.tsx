import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

/* ─── Data ──────────────────────────────────────────────────── */

const testimonials = [
  {
    quote: "We couldn't be happier with the new website Joe created for us. It's absolutely amazing and truly captures who we are and what Manton Executives stands for. Joe was always available, quick to respond, and incredibly patient throughout.",
    author: "Katie Dutton",
    role: "Manton Executives",
    initials: "KD",
  },
];

const NAV_COMPANY = [
  { label: "About",    href: "/about"     },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services"  },
  { label: "Insights", href: "/insights"  },
  { label: "Pricing",  href: "/packages"  },
  { label: "Contact",  href: "/contact"   },
];

const NAV_LEGAL = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms & Conditions",href: "#" },
  { label: "Cookie Policy",     href: "#" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook",  href: "https://facebook.com"  },
  { label: "LinkedIn",  href: "https://linkedin.com"  },
];

/* ─── Component ─────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer id="contact">

      {/* ── Testimonials (light) ── */}
      <div className="py-24 px-6 md:px-10 bg-background border-t border-border">
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
                <p className="type-quote text-foreground/55 leading-relaxed flex-1">{t.quote}</p>
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

      {/* ── Dark footer ── */}
      <div className="bg-foreground relative overflow-hidden">

        {/* Accent glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 5% 30%, hsl(22 88% 48% / 0.1) 0%, transparent 45%)",
          }}
        />

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-white/10">

            {/* Left — CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-between gap-10"
            >
              <div>
                <h2
                  className="font-extrabold tracking-tight leading-tight mb-8"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  <span className="block text-white/30">Let's build something</span>
                  <span className="block text-white">incredible together.</span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#review"
                    className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Start a project <ArrowUpRight size={13} />
                  </Link>
                  <a
                    href="mailto:info@evoluxwebdesign.co.uk"
                    className="inline-flex items-center gap-2 border border-white/15 text-white/60 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/30 hover:text-white transition-colors"
                  >
                    Send an email
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="border-t border-white/10 pt-8">
                <p className="type-index text-white/25 mb-1.5">Based in</p>
                <p className="text-sm font-medium text-white/50 leading-relaxed">
                  Sunderland, Tyne & Wear<br />
                  North East England
                </p>
              </div>
            </motion.div>

            {/* Right — info grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
            >
              {/* Social */}
              <div>
                <p className="type-index text-white/25 mb-4 tracking-widest uppercase">Social</p>
                <div className="flex flex-col gap-2.5">
                  {SOCIAL.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="type-index text-white/25 mb-4 tracking-widest uppercase">Contact</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="mailto:info@evoluxwebdesign.co.uk"
                    className="text-sm font-semibold text-white/60 hover:text-white transition-colors break-all"
                  >
                    info@evoluxwebdesign.co.uk
                  </a>
                  <a
                    href="tel:+447854932203"
                    className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
                  >
                    +44 7854 932203
                  </a>
                </div>
              </div>

              {/* Company nav */}
              <div>
                <p className="type-index text-white/25 mb-4 tracking-widest uppercase">Company</p>
                <div className="flex flex-col gap-2.5">
                  {NAV_COMPANY.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="col-span-2 md:col-span-3 md:col-start-1 border-t border-white/[0.07] pt-8">
                <p className="type-index text-white/25 mb-4 tracking-widest uppercase">Legal</p>
                <div className="flex flex-wrap gap-x-8 gap-y-2.5">
                  {NAV_LEGAL.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-semibold text-white/40 hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
            <p className="type-index text-white/20">
              © {new Date().getFullYear()} Evolux Web Design Ltd. All rights reserved.
            </p>
            <p className="type-index text-white/15">
              Web Design & Development · Sunderland, UK
            </p>
          </div>
        </div>

        {/* ── Giant wordmark ── */}
        <div aria-hidden className="relative overflow-hidden h-[clamp(5rem,12vw,11rem)] select-none pointer-events-none">
          <span
            className="absolute bottom-[-0.18em] left-1/2 -translate-x-1/2 font-black leading-none tracking-[-0.06em] whitespace-nowrap text-white/[0.045]"
            style={{ fontSize: "clamp(7rem, 18vw, 18rem)" }}
          >
            EVOLUX
          </span>
        </div>

      </div>
    </footer>
  );
}
