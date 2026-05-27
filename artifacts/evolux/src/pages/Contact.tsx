import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight, Mail, MapPin, Clock, CheckCircle2, Send,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";

const SERVICE_OPTIONS = [
  "Web Design & Development",
  "Website Maintenance",
  "Conversion Rate Optimisation",
  "Brand Identity",
  "Graphic Design",
  "Not sure yet — I'd like some advice",
  "Something else",
];

const BUDGET_OPTIONS = [
  "Under £500",
  "£500 – £1,000",
  "£1,000 – £3,000",
  "£3,000 – £6,000",
  "£6,000+",
  "Not sure yet",
];

const NEXT_STEPS = [
  {
    step: "01",
    title: "You'll hear back within one business day",
    body: "Joe reads every message personally. You'll get a real reply — not an automated acknowledgement — usually within a few hours.",
  },
  {
    step: "02",
    title: "A short call to understand your project",
    body: "A 20–30 minute call to properly understand what you need, what's not working, and what success looks like. No hard sell.",
  },
  {
    step: "03",
    title: "A clear, scoped proposal",
    body: "A fixed-price proposal with a defined scope, timeline, and deliverables — so you know exactly what you're getting and what it costs.",
  },
];

export default function Contact() {
  useSEO({
    title: "Contact Evolux Web Design — Sunderland",
    description:
      "Get in touch with Evolux Web Design. Based in Sunderland, Tyne & Wear — working with UK businesses on web design, branding, CRO and graphic design.",
    canonicalPath: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Evolux Web Design",
      url: "https://evoluxwebdesign.co.uk/contact",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "Evolux Web Design",
        email: "info@evoluxwebdesign.co.uk",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sunderland",
          addressRegion: "Tyne & Wear",
          addressCountry: "GB",
        },
      },
    },
  });

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget]   = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim())    e.name    = "Please enter your name";
    if (!email.trim())   e.email   = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email";
    if (!message.trim()) e.message = "Please tell us about your project";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const inputCls = (field: string) =>
    `w-full bg-[hsl(0,0%,97%)] border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all ${
      errors[field] ? "border-red-400 focus:ring-red-300" : "border-border hover:border-foreground/20"
    }`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>

        {/* ── Hero + form ── */}
        <section className="pt-[62px] bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 pt-12 mb-10 md:mb-12"
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full border border-foreground/20 group-hover:border-accent flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-[7px] font-black text-foreground/35 group-hover:text-accent select-none transition-colors leading-none">E</span>
                </div>
                <span className="type-index text-foreground/35 group-hover:text-accent transition-colors">Evolux</span>
              </Link>
              <span className="type-index text-foreground/15">/</span>
              <span className="type-index text-foreground/40">Contact</span>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 md:pb-32">

              {/* ── Left: info ── */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex flex-col gap-12"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="type-label text-foreground/40">Get in touch</span>
                  </div>
                  <h1 className="type-display-lg font-extrabold tracking-tight leading-tight mb-8">
                    <span className="text-foreground">Let's talk</span>
                    <br />
                    <span className="text-foreground/30">about your project.</span>
                  </h1>
                  <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[44ch]">
                    Whether you have a clear brief or just an idea of what you need — get in touch and we'll figure out the best path forward together.
                  </p>
                </div>

                {/* Contact details */}
                <div className="flex flex-col gap-5">
                  <a
                    href="mailto:info@evoluxwebdesign.co.uk"
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-accent hover:bg-accent/[0.02] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                      <Mail size={15} className="text-foreground/45 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="type-index text-foreground/35 mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                        info@evoluxwebdesign.co.uk
                      </p>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-foreground/15 group-hover:text-accent transition-colors" />
                  </a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-foreground/45" />
                    </div>
                    <div>
                      <p className="type-index text-foreground/35 mb-0.5">Based in</p>
                      <p className="text-sm font-semibold text-foreground">Sunderland, Tyne & Wear</p>
                      <p className="type-index text-foreground/35 mt-0.5">Working with UK businesses nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-foreground/45" />
                    </div>
                    <div className="flex-1">
                      <p className="type-index text-foreground/35 mb-0.5">Response time</p>
                      <p className="text-sm font-semibold text-foreground">Within one business day</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="relative flex h-[6px] w-[6px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50" />
                        <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green-500" />
                      </span>
                      <span className="type-index text-foreground/40">Available</span>
                    </div>
                  </div>
                </div>

                {/* Prefer a quicker start? */}
                <div className="p-6 rounded-2xl bg-[hsl(0,0%,97%)] border border-border">
                  <p className="text-sm font-bold text-foreground mb-2 tracking-tight">Not sure where to start?</p>
                  <p className="type-body text-foreground/50 leading-relaxed mb-4">
                    Submit your website for a free video review and Joe will tell you exactly what needs fixing — no obligation.
                  </p>
                  <Link
                    href="/free-review"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:text-foreground transition-colors"
                  >
                    Get a free website review <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.div>

              {/* ── Right: form ── */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 lg:col-start-7"
              >
                <div className="bg-white border border-border rounded-2xl overflow-hidden">
                  {/* Accent rule */}
                  <div className="h-[3px]" style={{ background: "linear-gradient(90deg, hsl(22 88% 48%) 0%, hsl(22 88% 58% / 0.25) 100%)" }} />

                  <div className="p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center text-center py-10 gap-6"
                        >
                          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                            <CheckCircle2 size={28} className="text-green-500" />
                          </div>
                          <div>
                            <h2 className="text-xl font-extrabold text-foreground mb-3 tracking-tight">Message received.</h2>
                            <p className="type-body text-foreground/55 leading-relaxed max-w-[36ch] mx-auto">
                              Thanks, {name.split(" ")[0]}. Joe will be in touch within one business day. Check your inbox — the reply comes directly from Joe, not a CRM.
                            </p>
                          </div>
                          <div className="flex flex-col gap-3 w-full max-w-[280px] mt-2">
                            <Link
                              href="/services"
                              className="flex items-center justify-center gap-2 bg-foreground text-white py-3.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
                            >
                              Explore our services <ArrowUpRight size={13} />
                            </Link>
                            <Link
                              href="/projects"
                              className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold text-foreground/50 hover:text-foreground transition-colors border border-border hover:border-foreground/20"
                            >
                              View our work
                            </Link>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <h2 className="text-lg font-extrabold text-foreground tracking-tight mb-1">Send a message</h2>
                          <p className="type-body text-foreground/45 mb-8">Typically replied to within a few hours on weekdays.</p>

                          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="type-label text-foreground/50 mb-2 block">
                                  Full name <span className="text-accent">*</span>
                                </label>
                                <input
                                  type="text"
                                  value={name}
                                  onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: "" })); }}
                                  placeholder="Joe Smith"
                                  className={inputCls("name")}
                                />
                                {errors.name && <p className="text-[11px] text-red-500 mt-1.5">{errors.name}</p>}
                              </div>
                              <div>
                                <label className="type-label text-foreground/50 mb-2 block">
                                  Email address <span className="text-accent">*</span>
                                </label>
                                <input
                                  type="email"
                                  value={email}
                                  onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: "" })); }}
                                  placeholder="joe@business.co.uk"
                                  className={inputCls("email")}
                                />
                                {errors.email && <p className="text-[11px] text-red-500 mt-1.5">{errors.email}</p>}
                              </div>
                            </div>

                            {/* Company / website */}
                            <div>
                              <label className="type-label text-foreground/50 mb-2 block">
                                Company or website <span className="type-index text-foreground/25">(optional)</span>
                              </label>
                              <input
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                placeholder="My Business Ltd / mybusiness.co.uk"
                                className={inputCls("company")}
                              />
                            </div>

                            {/* Service */}
                            <div>
                              <label className="type-label text-foreground/50 mb-2 block">
                                What do you need? <span className="type-index text-foreground/25">(optional)</span>
                              </label>
                              <select
                                value={service}
                                onChange={e => setService(e.target.value)}
                                className={`${inputCls("service")} appearance-none cursor-pointer`}
                              >
                                <option value="" disabled>Select a service…</option>
                                {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>

                            {/* Budget */}
                            <div>
                              <label className="type-label text-foreground/50 mb-2 block">
                                Budget <span className="type-index text-foreground/25">(optional)</span>
                              </label>
                              <select
                                value={budget}
                                onChange={e => setBudget(e.target.value)}
                                className={`${inputCls("budget")} appearance-none cursor-pointer`}
                              >
                                <option value="" disabled>Select a budget range…</option>
                                {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>

                            {/* Message */}
                            <div>
                              <label className="type-label text-foreground/50 mb-2 block">
                                Tell us about your project <span className="text-accent">*</span>
                              </label>
                              <textarea
                                value={message}
                                onChange={e => { setMessage(e.target.value); setErrors(p => ({ ...p, message: "" })); }}
                                rows={5}
                                placeholder="What's the challenge or opportunity you want help with? The more context, the better."
                                className={`${inputCls("message")} resize-none`}
                              />
                              {errors.message && <p className="text-[11px] text-red-500 mt-1.5">{errors.message}</p>}
                            </div>

                            <button
                              type="submit"
                              className="flex items-center justify-center gap-2.5 w-full bg-foreground text-white py-4 rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-300 mt-1"
                            >
                              Send message <Send size={13} />
                            </button>

                            <p className="type-index text-foreground/25 text-center">
                              Your details are used only to respond to your enquiry.
                            </p>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Border rule ── */}
        <div className="border-t border-border" />

        {/* ── What happens next ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-foreground/40">What happens next</span>
              </div>
              <h2 className="type-display-md font-extrabold tracking-tight">
                <span className="text-foreground/30">From first message</span>
                <br />
                <span className="text-foreground">to clear proposal.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {NEXT_STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-8 md:p-10 flex flex-col gap-4"
                >
                  <span className="type-index text-foreground/25">{item.step}</span>
                  <h3 className="text-base font-extrabold text-foreground tracking-tight leading-snug">{item.title}</h3>
                  <p className="type-body text-foreground/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
