import { motion } from "framer-motion";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";
import project4 from "@/assets/images/project-4.png";

const projects = [
  { id: 1, title: "Aura Architecture", category: "Web Design", image: project1, style: "portrait" },
  { id: 2, title: "Lumina Studio", category: "Brand Identity", image: project2, style: "landscape" },
  { id: 3, title: "Chronos Finance", category: "Product Design", image: project3, style: "landscape" },
  { id: 4, title: "Nexus Platform", category: "Development", image: project4, style: "portrait" }
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest mb-6">
            <span className="text-xl leading-none -mt-1">●</span> Recent Projects
          </div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.1]">
            <span className="block text-muted-foreground font-normal">Selected</span>
            <span className="block font-bold">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24">
          <div className="flex flex-col gap-8 md:gap-16">
            {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className={`overflow-hidden bg-muted rounded-2xl relative mb-6 ${project.style === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="font-display text-white text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-8 md:gap-16 md:mt-32">
            {projects.filter((_, i) => i % 2 !== 0).map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className={`overflow-hidden bg-muted rounded-2xl relative mb-6 ${project.style === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="font-display text-white text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border border-border text-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-muted transition-colors" data-testid="button-all-projects">
            All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
