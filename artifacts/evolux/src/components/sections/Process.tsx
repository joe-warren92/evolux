import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    time: "Day 1",
    desc: "A 45-minute call to understand your goals, your audience, and what's not working. We'll tell you honestly whether we're the right fit before any money changes hands.",
  },
  {
    num: "02",
    title: "Design direction",
    time: "Week 2",
    desc: "A complete design concept — not wireframes or mood boards. You see the real thing: typography, colour, layout, copy. Rapid revisions until it's exactly right.",
  },
  {
    num: "03",
    title: "Build & test",
    time: "Weeks 3–5",
    desc: "Fast, clean development. Tested across every device and browser before you see so much as a staging link. Performance baked in, not bolted on.",
  },
  {
    num: "04",
    title: "Launch & handover",
    time: "Week 6",
    desc: "We handle the launch end-to-end, walk you through the CMS, and remain available for 30 days. Your site. Your control. No dependency on us unless you want it.",
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
              <span className="block type-display-md text-muted-foreground font-light">Four steps.</span>
              <span className="block type-display-md font-extrabold text-foreground">Zero surprises.</span>
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
              "Every step was clear and on schedule. We knew exactly what was happening and why."
            </p>
            <footer className="type-label text-foreground/40 mt-2.5">Rachel Moore — Wavemark</footer>
          </motion.blockquote>
        </div>

        {/* Step list */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="grid grid-cols-12 gap-4 py-8 border-t border-border group"
            >
              <div className="col-span-1">
                <span className="type-label text-muted-foreground/35">{step.num}</span>
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

        {/* KPI bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-8"
        >
          {[
            { value: "4–6 wks", label: "Typical timeline" },
            { value: "100%", label: "On-time delivery" },
            { value: "30 days", label: "Post-launch support" },
          ].map(kpi => (
            <div key={kpi.label} className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-foreground">{kpi.value}</span>
              <span className="type-label text-muted-foreground">{kpi.label}</span>
            </div>
          ))}
          <button
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
            data-testid="button-start-process"
          >
            Start a project →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
