import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const outcomes = [
  "See exactly where you're losing potential customers",
  "Understand why visitors leave without contacting you",
  "Find out what's stopping Google from ranking your pages",
  "Know how your site performs on mobile (60% of your traffic)",
  "Walk away with 3 specific improvements that could increase enquiries this month",
];

export function LeadMagnet() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="review" className="relative py-28 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden">

      {/* ── Decorative ring elements ── */}
      <svg
        aria-hidden
        className="absolute -top-20 -right-20 w-[520px] h-[520px] pointer-events-none select-none opacity-[0.07]"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="380" cy="140" r="220" stroke="white" strokeWidth="1"/>
        <circle cx="380" cy="140" r="160" stroke="white" strokeWidth="0.6"/>
        <circle cx="380" cy="140" r="100" stroke="hsl(22 88% 48%)" strokeWidth="1.2"/>
        <circle cx="380" cy="140" r="44" stroke="hsl(22 88% 48%)" strokeWidth="1.5"/>
        {/* Cross-hairs */}
        <line x1="280" y1="140" x2="480" y2="140" stroke="white" strokeWidth="0.4" strokeDasharray="4 6"/>
        <line x1="380" y1="40" x2="380" y2="240" stroke="white" strokeWidth="0.4" strokeDasharray="4 6"/>
      </svg>

      <svg
        aria-hidden
        className="absolute -bottom-16 -left-16 w-[320px] h-[320px] pointer-events-none select-none opacity-[0.04]"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="260" r="160" stroke="white" strokeWidth="1"/>
        <circle cx="60" cy="260" r="100" stroke="hsl(22 88% 48%)" strokeWidth="0.8"/>
      </svg>

      {/* Subtle diagonal grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, white 0px, white 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
              Free website review
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="type-display-md font-extrabold text-white mb-6 tracking-tight"
            >
              Find out what your website is{" "}
              <span className="text-accent">costing your business.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="type-body-lg text-white/60 leading-relaxed mb-10"
            >
              Most businesses are losing enquiries every single day because of 3–5 fixable issues on their website. Our review identifies exactly what they are — delivered to your inbox within 48 hours, with no obligation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="type-label text-white/30 mb-4">What you'll receive</p>
              <ul className="flex flex-col gap-3">
                {outcomes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                    <span className="type-body text-white/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Review request received.</h3>
                <p className="type-body text-white/60 mb-2">
                  We'll have your personalised website review in your inbox within 48 hours.
                </p>
                <p className="type-body text-white/40">
                  Email{" "}
                  <a href="mailto:hello@evolux.studio" className="text-white/70 underline underline-offset-4">hello@evolux.studio</a>{" "}
                  if you have any questions in the meantime.
                </p>
              </div>
            ) : (
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Get your free website review</h3>
                <p className="type-body text-white/50 mb-8">
                  Takes 30 seconds to request. Takes us 48 hours to deliver.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="type-label text-white/40 mb-2 block">Your website URL</label>
                    <input
                      type="url"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-accent transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      data-testid="input-review-url"
                    />
                  </div>
                  <div>
                    <label className="type-label text-white/40 mb-2 block">Business email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-accent transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      data-testid="input-review-email"
                    />
                  </div>
                  <div>
                    <label className="type-label text-white/40 mb-2 block">Biggest website frustration <span className="text-white/20 normal-case">(optional)</span></label>
                    <input
                      type="text"
                      placeholder="e.g. we get traffic but no enquiries"
                      className="w-full border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-accent transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      data-testid="input-review-frustration"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground py-4 rounded-xl text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 mt-2"
                    data-testid="button-review-submit"
                  >
                    Send me my website review <ArrowUpRight size={15} />
                  </button>
                </form>

                <p className="type-label text-white/20 mt-5 text-center">
                  No sales pitch. No obligation. Just an honest review.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
