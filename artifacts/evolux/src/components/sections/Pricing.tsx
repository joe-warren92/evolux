import { motion } from "framer-motion";
import { Lock, Check } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest mb-6">
            <span className="text-xl leading-none -mt-1">●</span> Packages
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Simple pricing
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Transparent pricing for studios and brands who want quality without guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-primary text-primary-foreground rounded-[2rem] p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Let's build<br/>something great
              </h3>
              <p className="text-primary-foreground/70 text-lg mb-12">
                Bring your vision to life with focused design and clear strategy.
              </p>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors w-fit" data-testid="button-get-in-touch">
              Get in Touch &rarr;
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-background border border-border rounded-[2rem] p-10 flex flex-col"
          >
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-8">
              <Lock size={20} className="text-foreground" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <h3 className="font-display text-3xl font-bold mb-2">Studio</h3>
                <p className="text-muted-foreground">Perfect for ambitious brands and growing businesses</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Starting from</span>
                <div className="text-4xl font-display font-bold">£2,500</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Custom website design</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Brand strategy session</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Responsive development</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>SEO foundations</span></li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Design system creation</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Content management setup</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>30-day post-launch support</span></li>
                <li className="flex items-start gap-3"><Check size={20} className="text-foreground shrink-0 mt-0.5" /> <span>Performance optimisation</span></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col border-t border-border pt-6"
          >
            <h4 className="font-bold mb-2">Transparent Process</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">No hidden fees or surprise invoices. We scope thoroughly and stick to the agreement.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col border-t border-border pt-6"
          >
            <h4 className="font-bold mb-2">Dedicated Team</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">You work directly with the seniors doing the work, no account managers acting as messengers.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col border-t border-border pt-6"
          >
            <h4 className="font-bold mb-2">Ongoing Support</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">We don't disappear after launch. Our packages include training and grace periods.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
