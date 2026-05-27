import { motion } from "framer-motion";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";
import project4 from "@/assets/images/project-4.png";

const projects = [
  {
    id: 1,
    title: "Aura Architecture",
    category: "Web Design",
    result: "↑ 280% increase in enquiries",
    image: project1,
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Lumina Studio",
    category: "Brand Identity + Web",
    result: "↑ 3× organic traffic in 60 days",
    image: project2,
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Chronos Finance",
    category: "Product Design",
    result: "↑ 52% improvement in conversion",
    image: project3,
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Nexus Platform",
    category: "Full-Stack Development",
    result: "↑ 98/100 Lighthouse performance score",
    image: project4,
    aspect: "aspect-[3/4]",
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
      data-testid={`card-project-${project.id}`}
    >
      <div className={`overflow-hidden bg-muted rounded-2xl relative mb-4 ${project.aspect}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
          <p className="type-label text-white/60 mb-2">{project.category}</p>
          <h3 className="text-white text-2xl font-bold tracking-tight leading-tight">{project.title}</h3>
        </div>
      </div>
      {/* Visible metadata below image */}
      <div className="flex items-start justify-between gap-4 px-1">
        <div>
          <p className="type-label text-muted-foreground mb-1">{project.category}</p>
          <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        </div>
        <p className="type-label text-muted-foreground whitespace-nowrap pt-0.5">{project.result}</p>
      </div>
    </motion.article>
  );
}

export function FeaturedWork() {
  const col1 = projects.filter((_, i) => i % 2 === 0);
  const col2 = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 type-label text-muted-foreground mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Recent Projects
          </div>
          <h2>
            <span className="block type-display-lg text-muted-foreground font-light">Selected</span>
            <span className="block type-display-lg font-extrabold text-foreground -mt-1">Work</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="flex flex-col gap-10">
            {col1.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.1} />)}
          </div>
          <div className="flex flex-col gap-10 md:mt-28">
            {col2.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.1 + 0.15} />)}
          </div>
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="type-body text-muted-foreground max-w-lg">
            Every project ships with measurable outcomes — we don't consider a project complete until the results prove it.
          </p>
          <button
            className="border border-foreground/20 text-foreground px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-muted transition-colors shrink-0"
            data-testid="button-all-projects"
          >
            View all projects →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
