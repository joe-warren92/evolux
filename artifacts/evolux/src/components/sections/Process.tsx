import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery call",
    time: "Day 1",
    desc: "A 45-minute call to understand your goals, your audience, and what's not working. No obligation. We'll tell you honestly if we're the right fit.",
  },
  {
    num: "02",
    title: "Strategy & proposal",
    time: "Days 2–5",
    desc: "We send a detailed proposal: scope, timeline, investment. No vague quotes — you know exactly what you're getting before any money changes hands.",
  },
  {
    num: "03",
    title: "Design direction",
    time: "Week 2",
    desc: "A complete design concept, not wireframes. You see the real thing — typography, colour, layout — before we write a single line of code.",
  },
  {
    num: "04",
    title: "Build & test",
    time: "Weeks 3–6",
    desc: "Fast, clean development with weekly check-ins. Tested on every device and browser before it gets anywhere near your domain.",
  },
  {
    num: "05",
    title: "Launch & handover",
    time: "Week 6–7",
    desc: "We handle the launch, run you through everything, and stay available for 30 days post-launch. Most clients stay with us long after that.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
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
              <span className="block type-display-md text-muted-foreground font-light">No surprises.</span>
              <span className="block type-display-md font-extrabold text-foreground">No handoffs. No drama.</span>
            </h2>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs border-l-2 border-accent/40 pl-5 lg:pb-1"
          >
            <p className="type-quote text-muted-foreground">
              "Every step was clear and on schedule. We knew what was happening and why."
            </p>
            <footer className="type-label text-foreground/40 mt-2.5">
              Rachel Moore — Head of Marketing, Wavemark
            </footer>
          </motion.blockquote>
        </div>

        {/* Vertical step list — more editorial than equal columns */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="grid grid-cols-12 gap-4 py-8 border-t border-border group"
            >
              <div className="col-span-2 lg:col-span-1 flex items-start pt-0.5">
                <span className="type-label text-muted-foreground/40">{step.num}</span>
              </div>
              <div className="col-span-10 lg:col-span-3 flex items-start gap-3">
                <div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight mb-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <span className="type-label text-accent/70">{step.time}</span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                <p className="type-body text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* KPI proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-8"
        >
          {[
            { value: "4–6 wks", label: "Typical project length" },
            { value: "100%", label: "On-time delivery" },
            { value: "30 days", label: "Post-launch support" },
            { value: "8+", label: "Years running" },
          ].map((kpi, i) => (
            <div key={kpi.label} className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-foreground">{kpi.value}</span>
              <span className="type-label text-muted-foreground">{kpi.label}</span>
            </div>
          ))}
          <button
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
            data-testid="button-start-process"
          >
            Start the process →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
