import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutPortrait from "@/assets/images/about-portrait.png";

function Counter({ from = 0, to, duration = 2, delay = 0 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp + (delay * 1000);
      
      const progress = timestamp - startTime;
      
      if (progress < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      
      const percentage = Math.min(progress / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(from + (to - from) * easeOutQuart));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, delay, isInView]);

  return <span ref={ref}>{count}</span>;
}

export function Intro() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden bg-muted"
        >
          <img src={aboutPortrait} alt="Creative Director" className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span className="text-lg leading-none -mt-1">●</span> Available for new projects
          </div>
        </motion.div>

        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest mb-8 text-foreground"
          >
            <span className="text-xl leading-none -mt-1">●</span> About the Studio
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-relaxed mb-16 text-foreground"
          >
            Evolux is built for brands that want a considered digital presence without compromise. Our work spans strategy, design, and development — built to perform and designed to impress.
          </motion.p>
          
          <div className="w-full h-[1px] bg-border mb-12"></div>
          
          <div className="grid grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl font-display font-bold">
                <Counter to={4} duration={1.5} />.<Counter to={9} duration={1.5} />
              </div>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Average Rating</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl font-display font-bold">
                <Counter to={50} duration={2} />+
              </div>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Completed Projects</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-5xl font-display font-bold">
                <Counter to={8} duration={1.5} />+
              </div>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</span>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
