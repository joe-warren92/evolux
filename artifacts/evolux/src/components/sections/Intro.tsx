import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

function Counter({ from = 0, to, suffix = "", duration = 2, delay = 0 }: {
  from?: number; to: number; suffix?: string; duration?: number; delay?: number;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (ts: number) => {
      if (startTime === null) startTime = ts + delay * 1000;
      const elapsed = ts - startTime;
      if (elapsed < 0) { raf = requestAnimationFrame(animate); return; }
      const pct = Math.min(elapsed / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - pct, 4);
      setCount(Math.round(from + (to - from) * ease));
      if (pct < 1) raf = requestAnimationFrame(animate);
      else setCount(to);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, from, to, duration, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Intro() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Founder identity card — editorial, dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground flex flex-col justify-between p-8">

              {/* Accent wash */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 70% 15%, hsl(22 88% 48% / 0.13) 0%, transparent 55%)" }}
              />

              {/* Ghost watermark — large personal name */}
              <div
                aria-hidden
                className="absolute inset-0 flex items-center px-6 pointer-events-none select-none overflow-hidden"
              >
                <span
                  className="font-black text-white/[0.04] leading-none tracking-[-0.06em] whitespace-nowrap"
                  style={{ fontSize: "clamp(5rem, 18vw, 11rem)" }}
                >
                  JOE
                </span>
              </div>

              {/* Top bar */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="font-black text-[10px] tracking-[0.3em] uppercase text-white/25">EVOLUX</span>
                <div className="text-right">
                  <p className="type-index text-white/20 mb-1.5">Certified expert</p>
                  <p className="text-[10px] font-semibold text-white/40 tracking-wide">Bricks Builder</p>
                </div>
              </div>

              {/* Centre bio text */}
              <div className="relative z-10 flex-1 flex flex-col justify-center py-8">
                <p className="type-index text-white/30 mb-3">Web designer & developer</p>
                <p className="text-white font-extrabold tracking-tight leading-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                  Joe Evolux
                </p>
                <p className="type-body text-white/45 leading-relaxed max-w-[26ch]">
                  5+ years turning underperforming websites into lead-generation machines. Based in Sunderland. Working across the UK.
                </p>
              </div>

              {/* Bottom stats */}
              <div className="relative z-10">
                <div className="flex items-end gap-8 border-t border-white/10 pt-5">
                  {[
                    { value: 20, suffix: "+", label: "projects delivered" },
                    { value: 5,  suffix: "+", label: "years experience"   },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="text-white font-black text-2xl tracking-tight leading-none tabular-nums">
                        <Counter to={stat.value} suffix={stat.suffix} duration={1.8} delay={i * 0.2} />
                      </span>
                      <span className="type-index text-white/35">{stat.label}</span>
                    </div>
                  ))}
                  <div className="ml-auto text-right">
                    <span className="type-index text-white/25 block mb-1">Based in</span>
                    <span className="text-white/50 text-xs font-medium">Sunderland, UK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Below-card credential strip */}
            <div className="flex items-center justify-between pt-3.5 mt-0 border-t border-border">
              <span className="type-index text-foreground/30">Founded 2023</span>
              <span className="type-index text-foreground/30">WordPress + Bricks Builder</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col pt-2 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">About Evolux</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="type-display-md font-extrabold text-foreground mb-8 tracking-tight"
            >
              Hey, I'm Joe.
              <br />
              <span className="text-foreground/35">Founder of Evolux.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed mb-10"
            >
              <p>
                With 5+ years in web design and development, I founded Evolux in 2023 with a simple idea: businesses across the UK deserve websites that actually generate enquiries — not just look the part.
              </p>
              <p>
                I combine technical expertise, brand thinking, and a genuine obsession with conversion to build WordPress websites that deliver measurable results. You'll always deal directly with me — no account managers, no handoffs.
              </p>
            </motion.div>

            {/* Three differentiators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-0 mb-10 border border-border rounded-2xl overflow-hidden"
            >
              {[
                { label: "Direct access", desc: "You work with me, not an account manager." },
                { label: "Conversion focus", desc: "Every design decision is tied to a business outcome." },
                { label: "Fast delivery", desc: "From brief to live site in 4–6 weeks, consistently." },
              ].map((item, i, arr) => (
                <div key={item.label} className={`px-6 py-4 flex items-start gap-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none mb-1">{item.label}</p>
                    <p className="type-body text-foreground/45">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-8 border-t border-border mb-8"
            >
              <span className="block text-4xl font-black text-accent/20 leading-none mb-3 select-none">"</span>
              <p className="type-quote text-foreground/55 mb-4">
                Amazing! This company is so easy to work with — they created my website exactly how I'd imagined with no faff or hassle. I would highly recommend to anyone.
              </p>
              <footer className="flex items-center gap-3">
                <span className="w-6 h-px bg-border" />
                <span className="type-index text-foreground/30">Leah Hall — Client</span>
              </footer>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="/free-review"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
              >
                Get a free website review <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
