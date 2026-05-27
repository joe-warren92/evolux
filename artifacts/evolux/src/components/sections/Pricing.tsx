import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">Engagements</h2>
          <p className="text-muted-foreground text-lg">We work with a select number of clients per year. Our pricing reflects the depth of our craft.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 p-12 flex flex-col"
          >
            <h3 className="font-display text-2xl mb-2">Digital Presence</h3>
            <div className="text-muted-foreground mb-8">From $15,000</div>
            <p className="mb-8">A comprehensive redesign of your digital flagship. Perfect for established brands looking to elevate their positioning.</p>
            <ul className="flex flex-col gap-4 mb-12 text-sm text-muted-foreground flex-grow">
              <li className="flex items-start gap-3"><span className="text-white">━</span> Brand alignment & strategy</li>
              <li className="flex items-start gap-3"><span className="text-white">━</span> Custom UX/UI design</li>
              <li className="flex items-start gap-3"><span className="text-white">━</span> High-performance CMS integration</li>
              <li className="flex items-start gap-3"><span className="text-white">━</span> Bespoke interactions & motion</li>
            </ul>
            <button className="border border-white/20 px-6 py-3 w-fit hover:bg-white hover:text-black transition-colors">Inquire</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-black p-12 flex flex-col"
          >
            <h3 className="font-display text-2xl mb-2">Product Ecosystem</h3>
            <div className="text-black/60 mb-8">From $45,000</div>
            <p className="mb-8">End-to-end design and engineering for complex web applications. When off-the-shelf won't cut it.</p>
            <ul className="flex flex-col gap-4 mb-12 text-sm text-black/70 flex-grow">
              <li className="flex items-start gap-3"><span className="text-black">━</span> Full product architecture</li>
              <li className="flex items-start gap-3"><span className="text-black">━</span> Scalable design systems</li>
              <li className="flex items-start gap-3"><span className="text-black">━</span> React / Next.js engineering</li>
              <li className="flex items-start gap-3"><span className="text-black">━</span> Ongoing technical partnership</li>
            </ul>
            <button className="bg-black text-white px-6 py-3 w-fit hover:bg-black/80 transition-colors">Inquire</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
