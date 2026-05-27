import { motion } from "framer-motion";
import heroShowcase from "@assets/Screenshot-2025-02-14-at-20.27.41_(3)_1779878754711.webp";
import { Star, ArrowUpRight } from "lucide-react";

const proofRows = [
  { client: "Circular Branding",  tag: "Labels & packaging",  metric: "200+",   unit: "brands worldwide" },
  { client: "Ockerby Academy",    tag: "Dance academy",       metric: "5.0 ★",  unit: "Google rating"    },
  { client: "Marley Doulas",      tag: "Birth doula",         metric: "Booked", unit: "out within weeks" },
];

const clientNames = ["Circular", "Marley Doulas", "Ockerby Academy", "Manton Executives"];

export function Hero() {
  return (
    <section className="relative flex flex-col pt-[62px] bg-background overflow-hidden">

      {/* Subtle accent wash — top right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[50vw] h-[60vh] pointer-events-none select-none"
        style={{ background: "radial-gradient(ellipse at 80% 10%, hsl(22 88% 48% / 0.05) 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-10 md:pt-14 pb-12 relative z-10">

        {/* ── Two-column: headline left, proof card right ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-8 lg:mb-10">

          {/* Headline */}
          <div className="flex-1 min-w-0">
            {/* Location / year index */}
            <div className="flex items-center gap-3 mb-5">
              <span className="type-index text-foreground/35">Sunderland, North East England</span>
              <span className="w-8 h-px bg-border shrink-0" />
              <span className="type-index text-foreground/35">Est. 2023</span>
            </div>

            {/* H1 — consistent weight, colour creates the hierarchy */}
            <h1 className="mb-0">
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-extrabold text-foreground/38"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Most websites are
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-extrabold text-foreground"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  brochures.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-extrabold text-foreground"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  Yours should be a{" "}
                  <span className="accent-underline">salesperson.</span>
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Proof card — desktop only, aligned to top of headline */}
          <motion.aside
            aria-label="Recent client results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="hidden lg:flex flex-col shrink-0 w-[268px] rounded-2xl overflow-hidden border border-border bg-white shadow-sm self-start mt-10"
          >
            {/* Google rating header */}
            <div className="px-5 pt-4 pb-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                <span className="type-index ml-0.5">5.0 on Google</span>
              </div>
              <span className="type-index text-foreground/30">Recent work</span>
            </div>

            {/* Client rows */}
            {proofRows.map((row, i) => (
              <div
                key={row.client}
                className={`px-5 py-3.5 flex items-center justify-between gap-4 ${i < proofRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground leading-none mb-1">{row.client}</p>
                  <p className="type-index text-foreground/35">{row.tag}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-extrabold text-accent leading-none mb-1">{row.metric}</p>
                  <p className="type-index text-foreground/35">{row.unit}</p>
                </div>
              </div>
            ))}
          </motion.aside>
        </div>

        {/* ── Sub-copy + CTAs + social proof ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-[500px]"
        >
          <p className="type-body-lg text-foreground/50 leading-relaxed mb-7">
            If your website isn't consistently generating enquiries, there's usually a reason. We find it, fix it, and build you something that works as hard as you do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              className="bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              data-testid="button-book-call"
            >
              Book a Strategy Call
            </button>
            <a
              href="#review"
              className="border border-border px-6 py-3.5 rounded-full text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-300 flex items-center gap-2"
              data-testid="link-free-review"
            >
              Free website review <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Social proof bar — stars + quote + attribution */}
          <div className="flex items-start gap-4 pt-6 border-t border-border">
            {/* Stars + Google */}
            <div className="flex flex-col items-center gap-1.5 shrink-0 pt-0.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
              </div>
              <span className="type-index text-foreground/30 whitespace-nowrap">5.0 Google</span>
            </div>
            <div className="w-px self-stretch bg-border shrink-0" />
            <div>
              <p className="type-body text-foreground/50 leading-relaxed italic">
                "We couldn't be happier with the new website Joe created for us. It truly captures who we are."
              </p>
              <p className="type-index text-foreground/30 mt-2">Katie Dutton — Manton Executives</p>
            </div>
          </div>

          {/* Mobile: client name strip */}
          <div className="flex lg:hidden flex-wrap items-center gap-x-5 gap-y-2 mt-6">
            {clientNames.map(c => (
              <span key={c} className="type-index text-foreground/25">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Dark showcase panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-foreground text-primary-foreground relative overflow-hidden rounded-t-[2rem]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroShowcase}
            alt="Selection of Evolux client websites"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/5" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }} />

        <div className="relative z-20 px-6 md:px-10 pt-10 pb-8 min-h-[44vh] md:min-h-[48vh] flex flex-col justify-end">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-t border-white/10 pt-6">
            <div className="flex items-center gap-5 sm:gap-7">
              <div>
                <p className="text-white text-xl font-extrabold tracking-tight leading-none mb-1">20+</p>
                <p className="type-index text-white/30">projects delivered</p>
              </div>
              <div className="w-px h-7 bg-white/10" />
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-white text-white" />)}
                </div>
                <p className="type-index text-white/30">5.0 Google rating</p>
              </div>
              <div className="hidden sm:block w-px h-7 bg-white/10" />
              <div className="hidden sm:block">
                <p className="text-white text-xl font-extrabold tracking-tight leading-none mb-1">UK-wide</p>
                <p className="type-index text-white/30">clients served</p>
              </div>
            </div>
            <p className="type-index text-white/20 tracking-[0.2em]">EVOLUX WEB DESIGN</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
