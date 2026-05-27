import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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

export function Intro() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={aboutPortrait}
                alt="Evolux Studio"
                className="w-full h-full object-cover"
              />
              {/* Floating stat bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/65 backdrop-blur-sm px-6 py-5 flex items-center justify-between gap-4">
                {[
                  { value: 20, suffix: "+", label: "projects" },
                  { value: 5, suffix: "+", label: "years exp" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center flex-1">
                    <p className="text-white font-extrabold text-2xl tracking-tight leading-none">
                      <Counter to={stat.value} suffix={stat.suffix} duration={1.8} delay={i * 0.2} />
                    </p>
                    <p className="text-white/50 text-xs mt-1 type-label">{stat.label}</p>
                  </div>
                ))}
                <div className="w-px h-8 bg-white/15 shrink-0" />
                <div className="flex flex-col items-center flex-1">
                  <p className="text-white font-extrabold text-2xl tracking-tight leading-none">4.9</p>
                  <p className="text-white/50 text-xs mt-1 type-label">avg rating</p>
                </div>
              </div>

              {/* Available badge */}
              <div className="absolute top-4 left-4 bg-white/92 backdrop-blur-sm text-foreground px-3.5 py-1.5 rounded-full flex items-center gap-2 type-label">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Available for new projects
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
              About Evolux
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="type-display-md font-extrabold text-foreground mb-7 tracking-tight"
            >
              Hey, I'm Joe.<br />
              <span className="text-muted-foreground font-light">Founder of Evolux.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-5 type-body-lg text-muted-foreground leading-relaxed mb-10"
            >
              <p>
                With 5+ years in web design and development, I founded Evolux Web Design in 2023 with a simple idea: that businesses in the North East — and across the UK — deserve websites that actually generate enquiries, not just look the part.
              </p>
              <p>
                I combine technical expertise, creativity, and a genuine obsession with conversion to build WordPress websites that deliver measurable results. Based in Sunderland, working with clients across the country.
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-[hsl(0,0%,97.5%)] rounded-xl px-6 py-5"
              style={{ borderLeft: "3px solid hsl(var(--accent))" }}
            >
              <p className="type-quote text-foreground/70 mb-3">
                "Amazing! This company is so easy to work with — they created my website exactly how I'd imagined with no faff or hassle. I would highly recommend to anyone."
              </p>
              <footer className="type-label text-foreground/40">Leah Hall — Client</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
