import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    time: "Day 1",
    desc: "You leave with complete clarity — a sitemap, a content plan, and a clear picture of what your site needs to do for your business. No vague proposals, no waiting a fortnight for a quote.",
  },
  {
    num: "02",
    title: "Design",
    time: "Week 2",
    desc: "You see the finished user experience and interface in prototype form before a single line of code is written. Real typography, real layouts, real copy. You approve it or we revise it.",
  },
  {
    num: "03",
    title: "Development",
    time: "Weeks 3–5",
    desc: "You get a fast-loading, fully responsive WordPress website built with Bricks Builder — tested across every device and browser size before you're ever asked to review it.",
  },
  {
    num: "04",
    title: "Deployment",
    time: "Week 6",
    desc: "You go live with confidence. Final testing, debugging, and launch on the live server — then a full handover so you can manage your own content from day one.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 type-label text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              How it works
            </div>
            <h2>
              <span className="block type-display-md font-extrabold text-foreground/35">Four clear steps.</span>
              <span className="block type-display-md font-extrabold text-foreground">You're in control throughout.</span>
            </h2>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs border-l-2 border-accent/40 pl-5 lg:pb-1"
          >
            <p className="type-quote text-muted-foreground">
              "Joe was an absolute pleasure to work with. He was always available, quick to respond, and incredibly patient throughout the entire process."
            </p>
            <footer className="type-label text-foreground/40 mt-2.5">Katie Dutton — Manton Executives</footer>
          </motion.blockquote>
        </div>

        {/* Step list */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[3px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent pointer-events-none hidden lg:block"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="relative grid grid-cols-12 gap-4 py-8 border-t border-border group overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[9rem] font-extrabold leading-none tracking-[-0.05em] text-foreground/[0.03] select-none pointer-events-none tabular-nums"
              >
                {step.num}
              </span>

              <div className="col-span-1 flex flex-col items-start pt-0.5 gap-2">
                <div className="hidden lg:flex items-center justify-center w-2 h-2 rounded-full bg-accent/60 ring-4 ring-background mt-0.5 shrink-0 group-hover:bg-accent transition-colors" />
                <span className="type-label text-muted-foreground/40 lg:hidden">{step.num}</span>
              </div>

              <div className="col-span-11 lg:col-span-3">
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-1 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <span className="type-label text-accent/70">{step.time}</span>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                <p className="type-body text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* KPI + CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 bg-[hsl(0,0%,97.5%)] border border-border rounded-2xl px-8 py-6 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-8">
            {[
              { value: "4–6 wks", label: "From brief to launch" },
              { value: "100%", label: "On-time delivery" },
              { value: "30 days", label: "Post-launch support" },
            ].map(kpi => (
              <div key={kpi.label} className="flex flex-col gap-0.5">
                <span className="text-xl font-extrabold tracking-tight text-foreground">{kpi.value}</span>
                <span className="type-label text-muted-foreground">{kpi.label}</span>
              </div>
            ))}
          </div>
          <a
            href="#review"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2 whitespace-nowrap"
            data-testid="button-start-process"
          >
            Start a project <ArrowUpRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
