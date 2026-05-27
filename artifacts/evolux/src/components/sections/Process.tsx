import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start with a structured discovery session to understand your brand, audience and goals. No project begins without a clear brief.",
  },
  {
    num: "02",
    title: "Design & Iteration",
    desc: "We present a full design direction — not wireframes. Rapid feedback cycles mean you see real progress every week.",
  },
  {
    num: "03",
    title: "Build & Optimise",
    desc: "Clean, performant code with accessibility and SEO built in from the first commit. We test on every device before you ever see it.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We handle the launch and stick around for 30 days to make sure everything beds in. Most clients stay with us long after that.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 type-label text-muted-foreground mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              How We Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block type-display-md text-muted-foreground font-light">A considered approach,</span>
              <span className="block type-display-md font-extrabold text-foreground">built for results.</span>
            </motion.h2>
          </div>

          {/* Testimonial alongside header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end"
          >
            <blockquote className="border-l-2 border-foreground/15 pl-5">
              <p className="type-quote text-muted-foreground">
                "From our first call to launch day, every step was clear and on schedule. We knew exactly what was happening and why."
              </p>
              <footer className="type-label text-foreground/45 mt-3">
                Rachel Moore — Head of Marketing, Wavemark
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-background p-8 flex flex-col"
            >
              <span className="type-label text-muted-foreground mb-6">{step.num}</span>
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-3 leading-snug">{step.title}</h3>
              <p className="type-body text-muted-foreground leading-relaxed flex-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-border pt-10"
        >
          {[
            { value: "4–6 wks", label: "Average project turnaround" },
            { value: "100%", label: "On-time delivery rate" },
            { value: "30 days", label: "Post-launch support included" },
          ].map((kpi) => (
            <div key={kpi.label} className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-foreground">{kpi.value}</span>
              <span className="type-label text-muted-foreground">{kpi.label}</span>
            </div>
          ))}
          <button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/85 transition-colors"
            data-testid="button-start-process"
          >
            Start a project →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
