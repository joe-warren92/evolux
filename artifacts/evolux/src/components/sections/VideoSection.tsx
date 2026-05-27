import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { YoutubeEmbed } from "@/components/ui/youtube-embed";

const VIDEO_ID = "dWjJn7rQjNQ";

export function VideoSection() {
  return (
    <section className="py-28 px-6 md:px-10 bg-foreground overflow-hidden relative border-t border-white/[0.06]">

      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, hsl(22 88% 48% / 0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, hsl(22 88% 48% / 0.07) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-white/30">Evolux in action</span>
            </div>
            <h2 className="type-display-md font-extrabold tracking-tight text-white leading-tight">
              See what conversion-focused
              <br />
              <span className="text-white/30">web design looks like.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-1 flex flex-col gap-4 lg:max-w-xs"
          >
            <p className="type-body text-white/40 leading-relaxed">
              A short walkthrough of how Evolux approaches web design — from strategy to launch — and why the process matters as much as the result.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-accent transition-colors"
            >
              More about Evolux <ArrowUpRight size={12} />
            </Link>
          </motion.div>
        </div>

        {/* Embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <YoutubeEmbed
            videoId={VIDEO_ID}
            title="Evolux Web Design — How we build websites that generate enquiries"
            className="rounded-none"
          />
        </motion.div>

        {/* Caption row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between mt-5"
        >
          <span className="type-index text-white/20">Evolux Web Design · Sunderland, UK</span>
          <Link
            href="/free-review"
            className="flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-accent transition-colors"
          >
            Start your project <ArrowUpRight size={12} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
