import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const included = [
  "Page speed & Core Web Vitals analysis",
  "Conversion funnel review",
  "SEO technical health check",
  "Mobile experience assessment",
  "3 quick wins you can action this week",
];

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="audit" className="py-28 px-6 md:px-10 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: hook */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 type-label text-white/40 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Free website audit
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="type-display-md font-extrabold text-white mb-6 tracking-tight"
            >
              Your website is probably{" "}
              <span className="text-accent">losing you money.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="type-body-lg text-white/60 leading-relaxed mb-10"
            >
              Most websites have 3–5 fixable issues costing them leads every day. We'll find yours — for free, within 48 hours, with no obligation to work with us.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={15} className="text-accent shrink-0" />
                  <span className="type-body text-white/70">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">You're on the list.</h3>
                <p className="type-body text-white/60">
                  We'll have your audit report in your inbox within 48 hours. Check your spam folder if you don't hear from us.
                </p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-white mb-2">Get your free audit</h3>
                <p className="type-body text-white/50 mb-8">Takes us 48 hours. Takes you 30 seconds to request.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="type-label text-white/40 mb-2 block">Your website URL</label>
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      data-testid="input-audit-url"
                    />
                  </div>
                  <div>
                    <label className="type-label text-white/40 mb-2 block">Work email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      data-testid="input-audit-email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground py-4 rounded-xl text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 mt-2"
                    data-testid="button-audit-submit"
                  >
                    Send me the audit <ArrowUpRight size={15} />
                  </button>
                </form>

                <p className="type-label text-white/25 mt-5 text-center">
                  No pitch. No spam. Just a straight audit.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
