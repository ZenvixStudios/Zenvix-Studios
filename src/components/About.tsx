import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-dark relative">
              <img 
                src="https://i.ibb.co/Vc9HcB4j/3a443acc-0eec-4a15-b724-12215626693f.png" 
                alt="Rishikesh Mishra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">About Me</h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              I'm a creative designer who uses AI and design skills to craft visually appealing ads that grab attention and deliver impact.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-accent font-bold text-3xl mb-1">16</h4>
                <p className="text-white/40 text-sm uppercase tracking-widest">Age</p>
              </div>
              <div>
                <h4 className="text-accent font-bold text-3xl mb-1">AI+</h4>
                <p className="text-white/40 text-sm uppercase tracking-widest">Focus</p>
              </div>
            </div>
            <p className="mt-12 text-white/60">
              My personality is defined by curiosity and a constant drive to learn. I believe that the intersection of human creativity and artificial intelligence is the future of advertising.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
