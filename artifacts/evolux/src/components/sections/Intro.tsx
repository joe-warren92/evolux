import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
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

const stats = [
  { value: 49, divisor: 10, label: "Average Rating", format: (v: number) => (v / 10).toFixed(1) },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

export function Intro() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted"
        >
          <img
            src={aboutPortrait}
            alt="Evolux Creative Director"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-white/92 backdrop-blur-sm text-foreground px-4 py-2 rounded-full flex items-center gap-2 type-label">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Available for new projects
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
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            About the Studio
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold leading-[1.35] tracking-tight text-foreground mb-10"
          >
            Evolux is built for brands that refuse to be ordinary. We deliver websites and identities that don't just look the part — they perform, convert, and grow with you.
          </motion.p>

          {/* Testimonial */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="border-l-2 border-foreground/15 pl-5 mb-10"
          >
            <p className="type-quote text-muted-foreground">
              "Working with Evolux was the smoothest design process we've ever experienced. They understood our brand immediately."
            </p>
            <footer className="type-label text-foreground/45 mt-2.5">James Webb — Managing Director, Huxley</footer>
          </motion.blockquote>

          <div className="w-full h-px bg-border mb-10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Average Rating", display: "4.9", to: 49, decimal: true },
              { label: "Completed Projects", display: "50+", to: 50, suffix: "+" },
              { label: "Years Experience", display: "8+", to: 8, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col gap-1.5"
              >
                <div className="type-stat font-extrabold text-foreground">
                  {stat.decimal
                    ? <><Counter to={4} duration={1.5} /><span>.</span><Counter to={9} duration={1.5} /></>
                    : <Counter to={stat.to} duration={2} suffix={stat.suffix ?? ""} />
                  }
                </div>
                <div className="flex items-center gap-1 mb-0.5">
                  {i === 0 && [1,2,3,4,5].map(s => (
                    <Star key={s} size={10} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <span className="type-label text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
