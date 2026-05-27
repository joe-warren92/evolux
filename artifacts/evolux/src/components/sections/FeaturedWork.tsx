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
    result: "Trusted by 200+ brands",
    desc: "A premium trade website for a labels, trims and packaging supplier — built to win brand partnerships and showcase their portfolio to fashion's biggest names worldwide.",
    image: circularMockup,
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    num: "02",
    title: "Marley Doulas",
    category: "Brand Identity + Web",
    result: "Fully booked within weeks",
    desc: "A warm, trust-led website for a birth doula serving Surrey Hills and South London — turning anxious first-time parents into booked clients before they've even made contact.",
    image: marleyMockup,
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    num: "03",
    title: "Ockerby Academy",
    category: "Web Design & Booking",
    result: "5.0 Google rating",
    desc: "A vibrant, conversion-focused website for a dance and musical theatre academy in Eldwick, West Yorkshire — built around driving class sign-ups and cutting admin overhead.",
    image: ockerbyMockup,
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    num: "04",
    title: "MA Virtuals",
    category: "Brand Identity + Web",
    result: "10× growth since launch",
    desc: "A modern, credible website for a virtual assistant agency that had grown beyond its old identity — designed to attract the right clients and reflect the scale of a growing team.",
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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer ${offsetTop ? "lg:mt-28" : ""}`}
      data-testid={`card-project-${project.id}`}
    >
      <div className={`overflow-hidden bg-muted rounded-xl relative mb-5 ${project.aspect}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="type-label text-white/50 mb-1">{project.category}</p>
              <h3 className="text-white text-xl font-bold tracking-tight">{project.title}</h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
              <ArrowUpRight size={15} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3 px-0.5">
        <div className="flex items-baseline gap-3">
          <span className="type-label text-muted-foreground/40">{project.num}</span>
          <div>
            <p className="type-label text-muted-foreground mb-1">{project.category}</p>
            <h3 className="text-sm font-semibold text-foreground leading-tight">{project.title}</h3>
          </div>
        </div>
        <span className="type-label text-accent whitespace-nowrap shrink-0 pt-0.5">{project.result}</span>
      </div>
    </motion.article>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" className="py-28 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 type-label text-muted-foreground mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Selected work
            </div>
            <h2>
              <span className="block type-display-lg font-light text-muted-foreground">Results that</span>
              <span className="block type-display-lg font-extrabold text-foreground">speak for themselves</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="type-body text-muted-foreground max-w-xs lg:text-right lg:pb-2"
          >
            Every project has a measurable outcome. We don't consider work complete until the numbers prove it.
          </motion.p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          <div className="flex flex-col gap-10">
            {projects.filter((_, i) => i % 2 === 0).map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1} />
            ))}
          </div>
          <div className="flex flex-col gap-10">
            {projects.filter((_, i) => i % 2 !== 0).map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1 + 0.15} offsetTop />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-border pt-8"
        >
          <p className="type-label text-muted-foreground">
            All results measured at 90 days post-launch
          </p>
          <button
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
            data-testid="button-all-projects"
          >
            See all case studies <ArrowUpRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
