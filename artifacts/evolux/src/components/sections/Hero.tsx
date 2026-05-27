import { motion } from "framer-motion";
import heroShowcase from "@assets/Screenshot-2025-02-14-at-20.27.41_(3)_1779878754711.webp";
import { Star } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const recentWins = [
  { client: "Circular Branding", metric: "200+", label: "brands served" },
  { client: "Ockerby Academy", metric: "5.0", label: "Google rating" },
  { client: "Marley Doulas", metric: "Fully", label: "booked at launch" },
];

export function Hero() {
  return (
    <section className="relative flex flex-col pt-[60px] bg-background overflow-hidden">

      {/* Very faint accent wash — top right only */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none select-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, hsl(22 88% 48% / 0.055) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-16 md:pt-24 pb-14 relative z-10">

        {/* ── Headline row ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-10">

          {/* Headline */}
          <div className="flex-1 min-w-0">
            {/* Index marker */}
            <div className="flex items-center gap-4 mb-8">
              <span className="type-index">Sunderland, North East England</span>
              <span className="w-12 h-px bg-border" />
              <span className="type-index">Est. 2023</span>
            </div>

            <h1>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-light text-foreground/30"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Most websites are
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-black text-foreground"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  brochures.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-black text-foreground"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                >
                  Yours should be a{" "}
                  <span className="accent-underline">salesperson.</span>
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Proof card — sharp, editorial, left-accented */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7 }}
            className="hidden lg:flex flex-col shrink-0 w-[248px] self-end mb-1"
            style={{ borderLeft: "2px solid hsl(var(--accent))", borderTop: "1px solid hsl(var(--border))" }}
          >
            {/* Stars header */}
            <div className="px-5 pt-4 pb-3.5 border-b border-border flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={9} className="fill-accent text-accent" />)}
              </div>
              <span className="type-index">5.0 on Google</span>
            </div>
            {recentWins.map((win, i) => (
              <div
                key={win.client}
                className={`px-5 py-3 flex items-center justify-between gap-3 ${i < recentWins.length - 1 ? "border-b border-border" : ""}`}
                style={{ background: i === 0 ? "hsl(0 0% 99%)" : "transparent" }}
              >
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{win.client}</p>
                  <p className="type-index mt-0.5">result</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-black text-accent tracking-tight leading-none">{win.metric}</p>
                  <p className="type-index mt-0.5">{win.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Sub-copy + CTA row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-[440px]"
          >
            <p className="type-body-lg text-foreground/50 leading-relaxed mb-8">
              If your website isn't consistently generating enquiries, there's usually a reason. We find it, fix it, and build you something that works as hard as you do.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                className="bg-foreground text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-accent transition-colors duration-300"
                data-testid="button-book-call"
              >
                Book a Strategy Call
              </button>
              <a
                href="#review"
                className="flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-accent transition-colors duration-300 border-b border-transparent hover:border-accent pb-px"
                data-testid="link-free-review"
              >
                Free website review <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Real testimonial pull-quote */}
            <div className="flex items-start gap-4 pt-5 border-t border-border">
              <div className="shrink-0 text-3xl font-black text-accent/25 leading-none select-none mt-[-6px]">"</div>
              <div>
                <p className="type-body text-foreground/45 leading-relaxed italic">
                  We couldn't be happier with the new website Joe created for us. It truly captures who we are.
                </p>
                <p className="type-index mt-2.5 text-foreground/30">Katie Dutton — Manton Executives</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile client strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="flex lg:hidden flex-wrap items-center gap-5 text-xs font-semibold text-foreground/30 tracking-[0.12em] uppercase pb-1"
          >
            {["Circular", "Marley Doulas", "Ockerby Academy", "Manton"].map(c => (
              <span key={c}>{c}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Dark showcase panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-foreground text-primary-foreground relative overflow-hidden"
        style={{ borderRadius: "1rem 1rem 0 0" }}
      >
        {/* Showcase image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroShowcase}
            alt="Evolux client work"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/50 to-black/10" />
        </div>

        {/* Inner border for depth */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }} />

        {/* Content */}
        <div className="relative z-20 px-6 md:px-10 pt-10 pb-8 min-h-[46vh] md:min-h-[50vh] flex flex-col justify-end">
          {/* Bottom editorial bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-white text-lg font-black tracking-tight leading-none mb-1">20+</p>
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
                <p className="text-white text-lg font-black tracking-tight leading-none mb-1">UK-wide</p>
                <p className="type-index text-white/30">clients served</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/25 text-xs font-medium tracking-[0.18em] uppercase">
              <span className="w-4 h-px bg-white/20" />
              Evolux Web Design
              <span className="w-4 h-px bg-white/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
