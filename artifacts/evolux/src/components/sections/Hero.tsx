import { motion } from "framer-motion";
import heroShowcase from "@assets/Screenshot-2025-02-14-at-20.27.41_(3)_1779878754711.webp";
import { Star, ArrowUpRight } from "lucide-react";

const CLIENTS = [
  "Circular Branding",
  "Manton Executives",
  "Ockerby Academy",
  "Marley Doulas",
  "MA Virtuals",
];

export function Hero() {
  return (
    <section className="relative flex flex-col pt-[62px] bg-background overflow-hidden">

      {/* ── Background layers ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        {/* Primary warm bloom — top right */}
        <div
          className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.11) 0%, transparent 65%)" }}
        />
        {/* Secondary smaller bloom — upper centre */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/3 w-[500px] h-[380px]"
          style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(22 88% 48% / 0.055) 0%, transparent 70%)" }}
        />
        {/* Tertiary soft bloom — bottom left */}
        <div
          className="absolute bottom-0 -left-24 w-[420px] h-[340px]"
          style={{ background: "radial-gradient(ellipse at 0% 100%, hsl(22 88% 48% / 0.04) 0%, transparent 65%)" }}
        />
      </div>

      {/* Thin accent rule at top edge */}
      <div
        aria-hidden
        className="absolute top-[62px] left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.5) 30%, hsl(22 88% 48% / 0.35) 65%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-14 md:pt-20 pb-16 relative z-10">

        {/* ── Stamp row ── */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center justify-between mb-10 md:mb-12"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 flex items-center justify-center shrink-0 select-none">
              <span className="text-[7px] font-black text-foreground/35 leading-none">E</span>
            </div>
            <span className="type-index text-foreground/40">Evolux Web Design</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-foreground/15 shrink-0" />
            <span className="hidden sm:inline type-index text-foreground/25">Sunderland, UK · Est. 2023</span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="type-index text-foreground/45">Available for new projects</span>
          </motion.div>
        </motion.div>

        {/* ── H1 ── */}
        <h1 className="mb-10 md:mb-12">
          <span className="block overflow-hidden">
            <motion.span
              className="block type-display-lg font-extrabold text-foreground tracking-tight"
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Websites built to win
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block type-display-lg font-extrabold tracking-tight"
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-foreground accent-underline">enquiries,</span>
              <span className="text-foreground/30"> not just traffic.</span>
            </motion.span>
          </span>
        </h1>

        {/* ── Content row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          {/* Left */}
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="type-body-lg text-foreground/50 leading-relaxed mb-8 max-w-[44ch]">
              If your website isn't consistently generating enquiries, there's usually a reason. We find it, fix it, and build you something that works as hard as you do.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-12 md:mb-14">
              <button
                className="flex items-center gap-2.5 bg-foreground text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
                data-testid="button-book-call"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                Book a Strategy Call
              </button>
              <a
                href="#review"
                className="text-sm font-medium text-foreground/40 hover:text-accent border-b border-transparent hover:border-accent pb-px transition-colors flex items-center gap-1.5"
                data-testid="link-free-review"
              >
                Free website review <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Trusted by — horizontal name strip */}
            <div className="border-t border-border pt-7">
              <p className="type-index text-foreground/25 mb-4 uppercase tracking-[0.2em]">Trusted by</p>
              <div className="flex flex-wrap gap-x-7 gap-y-2">
                {CLIENTS.map(name => (
                  <span key={name} className="text-[13px] font-semibold text-foreground/30">{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — editorial testimonial, desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="hidden lg:flex lg:col-span-5 lg:col-start-8 items-end pb-3"
          >
            <figure className="flex flex-col gap-4 pl-6 border-l-2 border-accent/25">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-accent text-accent" />)}
              </div>
              <blockquote>
                <p className="text-[1.05rem] font-semibold text-foreground/55 leading-relaxed italic max-w-[30ch]">
                  "We couldn't be happier with the new website Joe created for us. It truly captures who we are."
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-1">
                <div className="w-7 h-7 rounded-full bg-foreground/8 flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-black text-foreground/35">KD</span>
                </div>
                <span className="type-index text-foreground/35">Katie Dutton — Manton Executives</span>
              </figcaption>
            </figure>
          </motion.div>
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
            <div className="flex items-center gap-5 sm:gap-8">
              {/* Client stacks */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["CB","ME","OA"].map(init => (
                    <div key={init} className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-[8px] font-black text-white/60">{init}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={8} className="fill-white text-white" />)}
                  </div>
                  <p className="type-index text-white/35">20+ clients served</p>
                </div>
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
