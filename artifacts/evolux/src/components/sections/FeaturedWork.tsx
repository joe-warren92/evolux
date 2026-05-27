import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";
import project4 from "@/assets/images/project-4.png";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Aura Architecture",
    category: "Web Design & Development",
    result: "+280% enquiries",
    desc: "A considered website for a London architecture practice that had outgrown its identity — built to win the kind of projects they actually wanted.",
    image: project1,
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    num: "02",
    title: "Lumina Studio",
    category: "Brand Identity + Web",
    result: "3× organic traffic",
    desc: "End-to-end brand and web for a creative studio entering a competitive market. Tripled organic traffic within 60 days of launch.",
    image: project2,
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    num: "03",
    title: "Chronos Finance",
    category: "Product Design",
    result: "+52% sign-ups",
    desc: "A complex financial product turned into a clean, trustworthy interface. Conversion rate improved 52% in the first quarter.",
    image: project3,
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    num: "04",
    title: "Nexus Platform",
    category: "Full-Stack Development",
    result: "98 Lighthouse score",
    desc: "Platform rebuilt from scratch for speed, accessibility and scale. Perfect performance score, zero legacy debt.",
    image: project4,
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
