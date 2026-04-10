import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 rounded-[3rem] bg-dark-soft border border-accent/20 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 max-w-2xl mx-auto leading-tight">
            Let’s create something <span className="text-accent">amazing</span> together
          </h2>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-2xl text-xl hover:bg-accent-hover transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)]"
          >
            Get Your Ad Now
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
