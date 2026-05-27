import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Clock, Star, Play } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const WHAT_YOU_GET = [
  {
    number: "01",
    title: "Conversion score",
    desc: "Your site assessed against 20 factors that determine whether visitors make contact — or leave.",
  },
  {
    number: "02",
    title: "Personalised video walkthrough",
    desc: "A screen-recorded review delivered to your inbox within 48 hours. Specific, actionable, honest.",
  },
  {
    number: "03",
    title: "Priority action list",
    desc: "The 3–5 changes that will have the biggest impact on your enquiry rate — in order of importance.",
  },
];

const WHO_ITS_FOR = [
  "You get traffic but not enough enquiries",
  "You're not sure why visitors aren't making contact",
  "Your website was built a few years ago and hasn't been reviewed since",
  "You're considering a redesign and want an honest baseline first",
  "You want to understand what a conversion-focused site actually means",
];

const FAQS = [
  {
    q: "Is it really free?",
    a: "Yes. No hidden fees, no upsell call disguised as a review. You'll get a genuine assessment whether or not you ever work with Evolux.",
  },
  {
    q: "How long does it take?",
    a: "Submit your details in under 60 seconds. Joe records and delivers the video review within 48 business hours.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your website URL and email address. Optionally, a line on your biggest website frustration helps Joe focus the review.",
  },
  {
    q: "Will I get a sales pitch?",
    a: "No. The review stands alone. If you'd like to discuss next steps afterwards, that's entirely up to you.",
  },
  {
    q: "What kind of businesses does this suit?",
    a: "Professional services, trades, consultancies — any UK business that uses their website to generate enquiries. If you sell via your website, this is for you.",
  },
];

export default function FreeReview() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Free Website Review — Evolux Web Design",
    description:
      "Get a free, personalised video review of your website from Joe at Evolux. Scored against 20 conversion factors, delivered within 48 hours. No obligation.",
    canonicalPath: "/free-review",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Hero ── */}
        <section className="pt-[62px] bg-background relative overflow-hidden">

          {/* Gradient layers */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(22 88% 48% / 0.10) 0%, transparent 65%)" }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/3 w-[500px] h-[340px]"
              style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(22 88% 48% / 0.05) 0%, transparent 70%)" }} />
          </div>
          <div aria-hidden className="absolute top-[62px] left-0 right-0 h-[2px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 0%, hsl(22 88% 48% / 0.5) 30%, hsl(22 88% 48% / 0.35) 65%, transparent 100%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-20 relative z-10">

            {/* Stamp row */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between mb-10 md:mb-12"
            >
              <div className="flex items-center gap-2.5">
                <Link href="/" className="group flex items-center gap-2">
                  <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                    <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                  </div>
                  <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
                </Link>
                <span className="type-index text-foreground/15">/</span>
                <span className="type-index text-foreground/40">Free Review</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <Clock size={9} className="text-foreground/30" />
                <span className="type-index text-foreground/40">Delivered in 48 hours</span>
              </div>
            </motion.div>

            {/* H1 + form grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">

              {/* Left: copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                  <span className="text-foreground">Find out what's stopping</span>
                  <br />
                  <span className="text-foreground/30">your website converting.</span>
                </h1>

                <p className="type-body-lg text-foreground/50 leading-relaxed mb-10 max-w-[46ch]">
                  Joe reviews your site against 20 conversion factors and sends back a personalised screen-recorded video within 48 hours. Completely free. No pitch.
                </p>

                {/* Social proof strip */}
                <div className="flex items-center gap-6 pt-8 border-t border-border">
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-accent text-accent" />)}
                    </div>
                    <p className="type-index text-foreground/35">5.0 Google rating</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <p className="text-lg font-extrabold text-foreground leading-none mb-1">20+</p>
                    <p className="type-index text-foreground/35">sites reviewed</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div>
                    <p className="text-lg font-extrabold text-foreground leading-none mb-1">48h</p>
                    <p className="type-index text-foreground/35">turnaround</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
                className="lg:col-span-5 lg:col-start-8"
              >
                {submitted ? (
                  <div className="bg-foreground rounded-2xl p-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Request received.</h3>
                    <p className="type-body text-white/60 mb-2">
                      Joe will have your personalised video review in your inbox within 48 hours.
                    </p>
                    <p className="type-body text-white/40">
                      Questions?{" "}
                      <a href="mailto:info@evoluxwebdesign.co.uk" className="text-white/70 underline underline-offset-4">
                        info@evoluxwebdesign.co.uk
                      </a>
                    </p>
                  </div>
                ) : (
                  <div className="border border-border rounded-2xl p-8 bg-white shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-1.5">Request your free review</h2>
                    <p className="type-body text-foreground/45 mb-7">30 seconds to submit. Video in your inbox within 48 hours.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="type-label text-foreground/50 mb-2 block">Website URL</label>
                        <input
                          type="url"
                          value={url}
                          onChange={e => setUrl(e.target.value)}
                          placeholder="https://yourwebsite.com"
                          className="w-full border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/25 text-sm focus:outline-none focus:border-accent transition-colors bg-background"
                          data-testid="input-review-url"
                        />
                      </div>
                      <div>
                        <label className="type-label text-foreground/50 mb-2 block">Business email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="w-full border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/25 text-sm focus:outline-none focus:border-accent transition-colors bg-background"
                          data-testid="input-review-email-lp"
                        />
                      </div>
                      <div>
                        <label className="type-label text-foreground/50 mb-2 block">
                          Biggest website challenge?{" "}
                          <span className="text-foreground/25 normal-case">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={challenge}
                          onChange={e => setChallenge(e.target.value)}
                          placeholder="e.g. visitors but no enquiries"
                          className="w-full border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/25 text-sm focus:outline-none focus:border-accent transition-colors bg-background"
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex items-center gap-2.5 justify-center bg-foreground text-white py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300 mt-1"
                        data-testid="button-review-submit-lp"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                        Get my free review
                      </button>
                    </form>

                    <p className="type-label text-foreground/30 mt-5 text-center">
                      No sales pitch. No obligation. Just an honest review from Joe.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── What you get ── */}
        <section className="py-24 px-6 md:px-10 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">What's included</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">Everything you need</span>
                <br />
                <span className="text-foreground">to understand your site.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHAT_YOU_GET.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative border border-border rounded-2xl p-8 bg-white overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute top-4 right-5 font-black text-foreground/[0.05] leading-none select-none"
                    style={{ fontSize: "5rem" }}
                  >
                    {item.number}
                  </span>
                  <span className="block type-index text-accent mb-4 uppercase tracking-widest">{item.number}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="type-body text-foreground/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="py-24 px-6 md:px-10 border-t border-border bg-[hsl(0,0%,98%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" />
                  <span className="type-index text-foreground/40">Who it's for</span>
                </div>
                <h2 className="type-display-md font-extrabold tracking-tight mb-6">
                  <span className="text-foreground">This is for you if…</span>
                </h2>
                <ul className="flex flex-col gap-4">
                  {WHO_ITS_FOR.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span className="type-body text-foreground/65 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Testimonial pull */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-foreground rounded-2xl p-10 relative overflow-hidden"
              >
                <div aria-hidden className="absolute top-0 right-0 w-64 h-64 rounded-full"
                  style={{ background: "radial-gradient(circle at 100% 0%, hsl(22 88% 48% / 0.18) 0%, transparent 65%)" }} />
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-accent text-accent" />)}
                  </div>
                  <blockquote>
                    <p className="text-lg font-semibold text-white/80 leading-relaxed italic mb-6">
                      "Joe was always available, quick to respond, and incredibly patient throughout. The site looks amazing and truly captures who we are."
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-black text-white/60">KD</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-none">Katie Dutton</p>
                      <p className="type-index text-white/40 mt-0.5">Manton Executives</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 md:px-10 border-t border-border bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="type-display-md font-extrabold tracking-tight mb-4">
                <span className="text-foreground/30">Common</span>{" "}
                <span className="text-foreground">questions</span>
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y divide-border">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 w-5 h-5 rounded-full border border-border flex items-center justify-center text-foreground/40 group-hover:border-accent group-hover:text-accent transition-colors"
                      style={{ fontSize: "13px", lineHeight: 1 }}
                    >
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pb-5"
                    >
                      <p className="type-body text-foreground/55 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-6 md:px-10 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="type-display-md font-extrabold tracking-tight mb-5">
                <span className="text-foreground/30">Ready to find out</span>
                <br />
                <span className="text-foreground">what your site is missing?</span>
              </h2>
              <p className="type-body-lg text-foreground/45 mb-8">
                Free. Honest. In your inbox in 48 hours.
              </p>
              <a
                href="#top"
                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="inline-flex items-center gap-2.5 bg-foreground text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                Get my free review
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
