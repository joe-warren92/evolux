import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useSEO } from "@/lib/seo";
import heroMockup from "@assets/Macbook-Air-Light-Background-2_1779878754715.png";
import screen1 from "@assets/Screenshot_2026-05-27_125506_1779882927176.png";
import screen2 from "@assets/Screenshot_2026-05-27_125833_1779883127781.png";

const deliverables = [
  "Custom WordPress build with Bricks Builder",
  "Class discovery & booking flow",
  "Timetable & schedule pages",
  "Mobile-first responsive design",
  "Online enquiry & registration forms",
  "Brand identity integration",
  "Core on-page SEO",
  "30-day post-launch support",
];

export default function OckerbyAcademy() {
  useSEO({
    title: "Ockerby Academy — Case Study | Evolux Web Design",
    description:
      "How Evolux built a vibrant, functional website for Ockerby Academy — a dance and musical theatre academy in West Yorkshire. Built around class sign-ups and reducing admin.",
    canonicalPath: "/projects/ockerby-academy",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>

        {/* ── Case hero ── */}
        <section className="pt-[62px] bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-0">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="flex items-center gap-1.5 type-label text-foreground/40 hover:text-accent transition-colors"
              >
                <ArrowLeft size={11} />
                Projects
              </Link>
              <span className="type-label text-foreground/20">/</span>
              <span className="type-label text-foreground/40">Ockerby Academy</span>
            </motion.div>

            {/* Title block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="type-label text-muted-foreground">Web Design & Booking</span>
                </div>
                <h1 className="type-display-lg font-extrabold text-foreground tracking-tight mb-5 leading-tight">
                  Ockerby Academy
                </h1>
                <p className="type-body-lg text-foreground/50 leading-relaxed max-w-[52ch]">
                  A vibrant, functional website for a dance and musical theatre academy in West Yorkshire — built to make finding and booking classes effortless.
                </p>
              </motion.div>

              {/* Project meta */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
              >
                <div className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden bg-white">
                  {[
                    { label: "Client",   value: "Ockerby Academy" },
                    { label: "Industry", value: "Education & Performing Arts" },
                    { label: "Services", value: "Web Design, Online Booking" },
                    { label: "Location", value: "West Yorkshire" },
                    { label: "Year",     value: "2024" },
                    { label: "Rating",   value: "5.0★ Google" },
                  ].map((item, i, arr) => (
                    <div key={item.label} className={`flex items-baseline justify-between gap-4 px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="type-label text-muted-foreground shrink-0">{item.label}</span>
                      <span className="text-xs font-semibold text-foreground text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero image — full bleed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden bg-[hsl(0,0%,97%)]"
          >
            <img
              src={heroMockup}
              alt="Ockerby Academy website on MacBook"
              className="w-full max-h-[70vh] object-cover object-center"
            />
          </motion.div>
        </section>

        {/* ── Overview ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* The brief */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-px bg-accent" />
                    <span className="type-index text-foreground/40">The brief</span>
                  </div>
                  <h2 className="type-display-md font-extrabold text-foreground tracking-tight mb-8">
                    A growing academy whose website was creating more admin, not less.
                  </h2>
                  <div className="flex flex-col gap-5 type-body-lg text-foreground/50 leading-relaxed">
                    <p>
                      Ockerby Academy runs dance and musical theatre classes for children and young adults across multiple age groups and disciplines. As the academy grew, so did the complexity — and the old website couldn't keep up. Parents were calling to ask basic questions that a well-built site should have answered automatically.
                    </p>
                    <p>
                      The brief was to build something that matched the energy of the academy: vibrant, welcoming, and easy to navigate. But equally important was function — a class structure that parents could understand at a glance, and a booking or enquiry path that didn't require a phone call.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-4 lg:col-start-9">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <p className="type-label text-muted-foreground mb-5">What was delivered</p>
                  <ul className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden">
                    {deliverables.map((item, i, arr) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="type-body text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge / Solution ── */}
        <section className="py-24 px-6 md:px-10 bg-[hsl(0,0%,97.5%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="bg-white p-10 flex flex-col gap-5"
              >
                <span className="type-label text-accent/70">01 — The challenge</span>
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-snug">
                  Parents couldn't find what they needed without picking up the phone.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  With multiple class types, age groups, and term schedules, the old website made finding the right class harder than it should have been. Parents resorted to calling — adding administrative overhead and slowing down sign-ups.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  The design also didn't reflect the fun, energetic environment that made Ockerby special. It was functional, but it wasn't compelling. New families searching online weren't getting a sense of why they should choose Ockerby over a competing academy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="bg-white p-10 flex flex-col gap-5"
              >
                <span className="type-label text-accent/70">02 — The solution</span>
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-snug">
                  Built around the way parents actually look for classes.
                </h3>
                <p className="type-body text-muted-foreground leading-relaxed">
                  We structured the site around discovery — making it easy to filter by age group and discipline, understand what each class involves, and get in touch or register with minimal steps. Timetables and term dates were presented clearly so parents could answer their own questions.
                </p>
                <p className="type-body text-muted-foreground leading-relaxed">
                  Visually, the site was built to capture the energy of the academy — bold, confident, and welcoming — while maintaining the clean UX needed for parents making practical decisions about their children's activities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Screens ── */}
        <section className="py-24 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">Selected screens</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
              >
                <img src={screen1} alt="Ockerby Academy — homepage" className="w-full h-full object-cover object-top" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl bg-[hsl(0,0%,97%)] aspect-[4/3]"
              >
                <img src={screen2} alt="Ockerby Academy — classes page" className="w-full h-full object-cover object-top" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="py-24 px-6 md:px-10 bg-foreground text-primary-foreground overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 20%, hsl(22 88% 48% / 0.12) 0%, transparent 55%)" }}
          />
          <div className="max-w-7xl mx-auto relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-accent" />
                <span className="type-index text-white/30">Recognition</span>
              </div>
              <h2 className="type-display-md font-extrabold text-white tracking-tight">
                A 5-star rating on Google.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/[0.04] px-10 py-10"
              >
                <p className="text-accent font-extrabold tracking-tight leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                  5.0★
                </p>
                <p className="type-label text-white/40">Google rating</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-l-2 border-accent/40 pl-8 max-w-2xl"
            >
              <p className="type-quote text-white/65 mb-5">
                Want a website built with the same thinking? Start with a free review and we'll show you exactly what's possible.
              </p>
              <Link
                href="/free-review"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Get a free website review <ArrowUpRight size={13} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Next project + CTA ── */}
        <section className="py-24 px-6 md:px-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="type-label text-muted-foreground mb-4">Ready to start?</p>
                <h2 className="type-display-md font-extrabold text-foreground tracking-tight mb-4">
                  Let's build something<br />
                  <span className="text-foreground/35">that performs.</span>
                </h2>
                <p className="type-body text-foreground/45 max-w-md leading-relaxed">
                  Every Evolux project starts with a free website review — an honest assessment of what's working and what's costing you enquiries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
              >
                <Link
                  href="/free-review"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get a free website review <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/projects"
                  className="border border-border px-8 py-4 rounded-full text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  ← Back to all projects
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
