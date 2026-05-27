import { motion } from "framer-motion";
import heroShowcase from "@/assets/images/hero-showcase.png";
import { Star, ArrowUpRight } from "lucide-react";

const recentWins = [
  { client: "Aura Architecture", metric: "+280%", label: "enquiries" },
  { client: "Chronos Finance", metric: "+52%", label: "sign-up rate" },
  { client: "Lumina Studio", metric: "3×", label: "organic traffic" },
];

export function Hero() {
  return (
    <section className="relative flex flex-col pt-[60px] bg-background overflow-hidden">

      {/* ── Decorative gradient blobs ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Accent blob — top right */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.07) 0%, transparent 65%)" }}
        />
        {/* Neutral blob — bottom left of headline */}
        <div
          className="absolute top-60 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(0 0% 50% / 0.04) 0%, transparent 65%)" }}
        />
        {/* Decorative watermark text */}
        <span
          className="absolute -bottom-4 left-0 text-[clamp(8rem,20vw,18rem)] font-extrabold leading-none tracking-[-0.05em] text-foreground/[0.025] select-none whitespace-nowrap"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          WEB DESIGN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-14 md:pt-20 pb-16 relative z-10">

        {/* Headline + proof card */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
          <div className="flex-1">
            <h1>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl text-muted-foreground font-light"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  Most websites are
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-extrabold text-foreground"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  brochures.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block type-display-xl font-extrabold text-foreground"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.41, ease: [0.16, 1, 0.3, 1] }}
                >
                  Yours should be a{" "}
                  <span className="accent-underline">salesperson.</span>
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Desktop proof card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-0 border border-border rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shrink-0 w-[260px] self-end mb-2 shadow-sm"
          >
            <div className="px-5 pt-5 pb-3 border-b border-border">
              <p className="type-label text-muted-foreground mb-1">Recent client results</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-accent text-accent" />)}
                <span className="type-label text-muted-foreground ml-1.5">4.9 avg rating</span>
              </div>
            </div>
            {recentWins.map((win, i) => (
              <div
                key={win.client}
                className={`px-5 py-3.5 flex items-center justify-between gap-3 ${i < recentWins.length - 1 ? "border-b border-border" : ""}`}
              >
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{win.client}</p>
                  <p className="type-label text-muted-foreground mt-0.5">90-day result</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-extrabold text-accent tracking-tight">{win.metric}</p>
                  <p className="type-label text-muted-foreground">{win.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sub-copy row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-md"
          >
            <p className="type-body-lg text-muted-foreground leading-relaxed mb-8">
              You'll get more enquiries, more credibility, and a site you're proud to send to every prospect — built for UK companies that mean business.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                className="bg-primary text-primary-foreground px-6 py-3.5 rounded-full flex items-center gap-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                data-testid="button-book-call"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                Book a Free Call
              </button>
              <a
                href="#review"
                className="border border-border px-6 py-3.5 rounded-full text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-300 flex items-center gap-2"
                data-testid="link-free-review"
              >
                Free website review <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-px self-stretch bg-accent/40 shrink-0 rounded-full" />
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "Our enquiry rate jumped 340% in the first month. Evolux is the best investment we've made."
                </p>
                <p className="type-label text-foreground/45 mt-2">Tom Archer — CEO, Stratum</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex flex-col gap-3 lg:hidden"
          >
            <p className="type-label text-muted-foreground">Trusted by growth-focused businesses</p>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-foreground/40 tracking-tight">
              <span>Relink</span><span>Wavemark</span><span>Huxley</span><span>Stratum</span><span>Nexus</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark showcase panel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-foreground text-primary-foreground rounded-t-[2rem] overflow-hidden relative"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroShowcase}
            alt="Studio showcase"
            className="w-full h-full object-cover opacity-45 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex items-end justify-between px-6 md:px-10 pt-12 pb-8 min-h-[48vh] md:min-h-[52vh]">
          <div className="flex flex-col gap-3">
            <div className="flex -space-x-2">
              {[
                { i: "SC", c: "bg-blue-500" },
                { i: "JW", c: "bg-orange-500" },
                { i: "MK", c: "bg-emerald-500" },
                { i: "TA", c: "bg-violet-500" },
                { i: "PM", c: "bg-rose-500" },
              ].map(a => (
                <div key={a.i} className={`w-8 h-8 rounded-full ${a.c} border-2 border-black flex items-center justify-center text-[10px] font-bold text-white`}>
                  {a.i}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-white text-white" />)}
              <span className="text-white/70 text-xs font-medium ml-1.5">4.9 from 50+ projects</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="type-label text-white/30">Next project start</span>
            <span className="text-white text-sm font-semibold">February 2026</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
