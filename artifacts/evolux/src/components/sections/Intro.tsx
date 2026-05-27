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
    <section id="about" className="py-32 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            {/* Image — sharp corners, full bleed */}
            <div className="relative aspect-[4/5] overflow-hidden img-frame bg-muted">
              <img
                src={aboutPortrait}
                alt="Joe, founder of Evolux Web Design"
                className="w-full h-full object-cover"
              />
              {/* Gradient at base for stats */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pt-20 px-6 pb-6">
                <div className="flex items-end gap-8 border-t border-white/15 pt-5">
                  {[
                    { value: 20, suffix: "+", label: "projects delivered" },
                    { value: 5, suffix: "+", label: "years experience" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="text-white font-black text-2xl tracking-tight leading-none tabular-nums">
                        <Counter to={stat.value} suffix={stat.suffix} duration={1.8} delay={i * 0.2} />
                      </span>
                      <span className="type-index text-white/40">{stat.label}</span>
                    </div>
                  ))}
                  <div className="ml-auto text-right">
                    <span className="type-index text-white/30 block mb-1">Based in</span>
                    <span className="text-white/60 text-xs font-medium">Sunderland</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio credential — below image */}
            <div className="flex items-center justify-between pt-4 border-t border-border mt-0">
              <span className="type-index text-foreground/30">Founded 2023</span>
              <span className="type-index text-foreground/30">Certified Bricks Builder Expert</span>
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
              className="type-display-md font-black text-foreground mb-8"
            >
              Hey, I'm Joe.<br />
              <span className="text-foreground/25 font-light">Founder of Evolux.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed mb-12"
            >
              <p>
                With 5+ years in web design and development, I founded Evolux Web Design in 2023 with a simple idea: that businesses in the North East — and across the UK — deserve websites that actually generate enquiries, not just look the part.
              </p>
              <p>
                I combine technical expertise, creativity, and a genuine obsession with conversion to build WordPress websites that deliver measurable results. Based in Sunderland, working with clients across the country.
              </p>
            </motion.div>

            {/* Testimonial — editorial, no box */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-8 border-t border-border"
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
          </div>
        </div>
      </div>
    </section>
  );
}
