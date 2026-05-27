import { motion } from "framer-motion";
import heroShowcase from "@/assets/images/hero-showcase.png";
import { Star } from "lucide-react";

const WORDS_LINE1 = ["We", "craft"];
const WORDS_LINE2 = ["digital", "experiences"];
const WORDS_LINE3 = ["that", "convert."];

export function Hero() {
  return (
    <section className="relative flex flex-col pt-[60px] bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-16 md:pt-24 pb-20">

        {/* Studio label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="type-label text-muted-foreground mb-10"
        >
          © 2026 Evolux Studio
        </motion.p>

        {/* Hero headline */}
        <h1 className="mb-14">
          <span className="block overflow-hidden">
            <motion.span
              className="block type-display-xl text-muted-foreground font-light"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We craft
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block type-display-xl font-extrabold text-foreground"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              digital experiences
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block type-display-xl font-extrabold text-foreground"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            >
              that convert.
            </motion.span>
          </span>
        </h1>

        {/* Subtitle row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="max-w-sm"
          >
            <p className="type-body-lg text-muted-foreground leading-relaxed mb-8">
              Bespoke websites and brand identities for companies that compete at the top. Strategy-led, craft-obsessed.
            </p>
            <div className="flex items-center gap-4">
              <button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2.5 text-sm font-semibold hover:bg-primary/85 transition-colors"
                data-testid="button-book-call"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Book a Call
              </button>
              <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                See our work
              </a>
            </div>

            {/* Hero testimonial snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex items-start gap-3 border-l-2 border-foreground/15 pl-4"
            >
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Evolux transformed our digital presence. Inbound leads doubled within 90 days of launch."
                </p>
                <p className="type-label text-foreground/50 mt-2">Sarah Chen — Founder, Lumina Studio</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trusted brands */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex flex-col gap-3"
          >
            <p className="type-label text-muted-foreground">Trusted by ambitious brands</p>
            <div className="flex flex-wrap items-center gap-5 md:gap-7 text-base font-semibold text-muted-foreground tracking-tight">
              <span>Relink</span>
              <span>Wavemark</span>
              <span>Huxley</span>
              <span>Stratum</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark showcase panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-foreground text-primary-foreground rounded-t-[2rem] overflow-hidden relative mx-auto"
        style={{ maxWidth: "100%" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroShowcase}
            alt="Studio showcase"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 flex items-end justify-between px-6 md:px-10 pt-10 pb-8 min-h-[50vh] md:min-h-[58vh]">
          {/* Client count + rating */}
          <div className="flex flex-col gap-3">
            <div className="flex -space-x-2.5">
              {[
                { initials: "SC", bg: "bg-blue-500" },
                { initials: "JW", bg: "bg-orange-500" },
                { initials: "MK", bg: "bg-emerald-500" },
                { initials: "TA", bg: "bg-violet-500" },
              ].map((a) => (
                <div
                  key={a.initials}
                  className={`w-9 h-9 rounded-full ${a.bg} border-2 border-foreground flex items-center justify-center text-[11px] font-semibold text-white`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={13} className="fill-white text-white" />
              ))}
              <span className="text-white/80 text-xs font-medium ml-1">4.9 / 5.0</span>
            </div>
            <p className="text-sm font-semibold text-white">100+ Satisfied Clients</p>
          </div>

          {/* Right label */}
          <p className="type-label text-white/40 hidden md:block">Selected work below ↓</p>
        </div>
      </motion.div>
    </section>
  );
}
