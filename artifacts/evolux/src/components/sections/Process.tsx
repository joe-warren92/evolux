import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    time: "Day 1",
    desc: "You leave the call with complete clarity — what your site will do for your business, what it costs, and when it goes live. No vague proposals, no waiting a fortnight for a quote.",
  },
  {
    num: "02",
    title: "Design direction",
    time: "Week 2",
    desc: "You see the finished design before a single line of code is written — real typography, real colour, real layouts. You approve it or we revise it. No surprises further down the line.",
  },
  {
    num: "03",
    title: "Build & test",
    time: "Weeks 3–5",
    desc: "You get a site that loads fast, ranks on Google, and works flawlessly on every device — tested across browsers and screen sizes before you're ever asked to review it.",
  },
  {
    num: "04",
    title: "Launch & handover",
    time: "Week 6",
    desc: "You go live with confidence. We handle the technical side entirely, walk you through the CMS, and remain on hand for 30 days. Your business, your site, your control.",
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
              <span className="block type-display-md text-muted-foreground font-light">Four clear steps.</span>
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
              "Every step was clear and on schedule. We knew exactly what was happening and why."
            </p>
            <footer className="type-label text-foreground/40 mt-2.5">Rachel Moore — Wavemark</footer>
          </motion.blockquote>
        </div>

        {/* Step list with timeline */}
        <div className="relative">

          {/* Vertical timeline line — runs through the step numbers */}
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
              {/* Large faint background number */}
              <span
                aria-hidden
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[9rem] font-extrabold leading-none tracking-[-0.05em] text-foreground/[0.03] select-none pointer-events-none tabular-nums"
              >
                {step.num}
              </span>

              {/* Timeline dot */}
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

        {/* KPI bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-8"
        >
          {[
            { value: "4–6 wks", label: "From brief to launch" },
            { value: "100%", label: "On-time delivery" },
            { value: "30 days", label: "Support after you go live" },
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
