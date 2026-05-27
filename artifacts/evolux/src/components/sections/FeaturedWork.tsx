import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import circularMockup from "@assets/mockup3-1_1779878754712.webp";
import marleyMockup from "@assets/4K-Mockup-1-1_1779878754714.webp";
import ockerbyMockup from "@assets/Macbook-Air-Light-Background-2_1779878754715.png";
import vaMockup from "@assets/iMac-M4-Purple-1_1779878754716.jpg";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Circular Branding Group",
    category: "Web Design & Development",
    result: "200+ brands",
    desc: "A premium trade website for a labels, trims and packaging supplier — built to win brand partnerships and showcase their portfolio to fashion's biggest names.",
    image: circularMockup,
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    num: "02",
    title: "Marley Doulas",
    category: "Brand Identity + Web",
    result: "Fully booked at launch",
    desc: "A warm, trust-led website for a birth doula serving Surrey Hills and South London — built to convert anxious first-time parents before they've even made contact.",
    image: marleyMockup,
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    num: "03",
    title: "Ockerby Academy",
    category: "Web Design & Booking",
    result: "5.0 Google",
    desc: "A vibrant, functional website for a dance and musical theatre academy in West Yorkshire — built around class sign-ups and cutting admin overhead.",
    image: ockerbyMockup,
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    num: "04",
    title: "MA Virtuals",
    category: "Brand Identity + Web",
    result: "10× growth",
    desc: "A conversion-focused website for a VA agency that had grown beyond its old identity — designed to reflect the scale of a growing team.",
    image: vaMockup,
    aspect: "aspect-[3/4]",
  },
];

function ProjectCard({ project, delay, offsetTop = false }: {
  project: typeof projects[0];
  delay: number;
  offsetTop?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer ${offsetTop ? "lg:mt-32" : ""}`}
      data-testid={`card-project-${project.id}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden img-frame ${project.aspect}`} style={{ borderRadius: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.03] group-hover:brightness-[0.88]"
        />

        {/* Gradient reveal from bottom — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-5 pb-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="type-index text-white/50 mb-1.5">{project.category}</p>
              <p className="text-white text-base font-bold tracking-tight leading-tight">{project.title}</p>
            </div>
            <div className="shrink-0 w-7 h-7 bg-accent flex items-center justify-center">
              <ArrowUpRight size={13} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-baseline justify-between gap-4 pt-4 border-t border-border mt-0">
        <div className="flex items-baseline gap-4">
          <span className="type-index">{project.num}</span>
          <div>
            <p className="text-xs font-semibold text-foreground leading-tight">{project.title}</p>
            <p className="type-index mt-1">{project.category}</p>
          </div>
        </div>
        <span className="text-xs font-black text-accent whitespace-nowrap shrink-0 tracking-tight">{project.result}</span>
      </div>
    </motion.article>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header — asymmetric stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-accent" />
              <span className="type-index text-foreground/40">Selected work</span>
            </div>
            <h2>
              <span className="block type-display-lg font-light text-foreground/25">Results that</span>
              <span className="block type-display-lg font-black text-foreground">speak for themselves.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4 lg:col-start-9 flex items-end pb-1"
          >
            <p className="type-body text-foreground/45 leading-relaxed">
              Every project has a measurable outcome. We don't consider work complete until the numbers prove it.
            </p>
          </motion.div>
        </div>

        {/* Grid — asymmetric vertical offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 mb-16">
          <div className="flex flex-col gap-14">
            {projects.filter((_, i) => i % 2 === 0).map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1} />
            ))}
          </div>
          <div className="flex flex-col gap-14">
            {projects.filter((_, i) => i % 2 !== 0).map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1 + 0.15} offsetTop />
            ))}
          </div>
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-border pt-7"
        >
          <p className="type-index text-foreground/30">All results measured at 90 days post-launch</p>
          <button
            className="flex items-center gap-2 text-xs font-bold text-foreground tracking-[0.1em] uppercase hover:text-accent transition-colors"
            data-testid="button-all-projects"
          >
            See all case studies <ArrowUpRight size={12} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
