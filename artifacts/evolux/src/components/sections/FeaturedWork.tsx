import { motion } from "framer-motion";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";

const projects = [
  {
    id: 1,
    title: "Aura Architecture",
    category: "Web Design & Development",
    image: project1,
  },
  {
    id: 2,
    title: "Lumina Studio",
    category: "Brand Identity & E-Commerce",
    image: project2,
  },
  {
    id: 3,
    title: "Chronos Finance",
    category: "Product Design",
    image: project3,
  }
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 flex justify-between items-end"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">Selected Work</h2>
          <span className="text-muted-foreground uppercase tracking-widest text-sm hidden md:block">03 Projects</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group cursor-pointer ${index === 1 ? 'md:mt-32' : ''} ${index === 2 ? 'md:col-span-2 md:w-2/3 mx-auto' : ''}`}
            >
              <div className="overflow-hidden bg-muted aspect-[4/3] mb-6 relative">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center overflow-hidden">
                <h3 className="font-display text-2xl group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
