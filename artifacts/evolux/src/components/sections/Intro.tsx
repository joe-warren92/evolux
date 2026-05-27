import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import aboutPortrait from "@/assets/images/about-portrait.png";

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

const differentiators = [
  "You deal directly with the person doing the work — not an account manager",
  "No project starts without a strategy session. Every decision has a reason.",
  "We've never missed a launch deadline",
  "30-day post-launch support is included on every project",
];

export function Intro() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Portrait — sticky on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={aboutPortrait}
                alt="Evolux Studio"
                className="w-full h-full object-cover"
              />
              {/* Stats overlay bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-white text-white" />)}
                  </div>
                  <p className="text-white text-xs font-medium">4.9 average rating</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <p className="text-white font-extrabold text-xl tracking-tight"><Counter to={50} duration={2} />+</p>
                  <p className="text-white/60 text-xs">projects delivered</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <p className="text-white font-extrabold text-xl tracking-tight"><Counter to={8} duration={1.5} />+</p>
                  <p className="text-white/60 text-xs">years in business</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 type-label text-muted-foreground mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              About the studio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="type-display-md font-extrabold text-foreground mb-8 tracking-tight"
            >
              We build websites that work as hard as you do.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="type-body-lg text-muted-foreground leading-relaxed mb-10"
            >
              Evolux is a small studio with a deliberate focus: we take on a limited number of projects at a time so every client gets our full attention. No juggling fifty accounts. No handing you off to a junior six weeks in.
            </motion.p>

            {/* Differentiators */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 mb-12"
            >
              {differentiators.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span className="type-body text-foreground/75">{d}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Testimonial */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted/60 rounded-xl p-6 border-l-3 border-accent"
              style={{ borderLeftWidth: "3px", borderLeftColor: "hsl(var(--accent))" }}
            >
              <p className="type-quote text-foreground/70">
                "Working with Evolux was the clearest, calmest project process we've had. They understood the brief immediately and delivered something we genuinely love."
              </p>
              <footer className="type-label text-foreground/40 mt-3">James Webb — Managing Director, Huxley</footer>
            </motion.blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
