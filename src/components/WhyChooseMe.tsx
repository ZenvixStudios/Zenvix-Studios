import { motion } from "motion/react";
import { DollarSign, Clock, Cpu, Zap } from "lucide-react";

const reasons = [
  {
    title: "Affordable pricing",
    desc: "Premium quality designs that don't break the bank.",
    icon: <DollarSign className="text-accent" />,
  },
  {
    title: "Fast delivery",
    desc: "Quick turnaround times without compromising on quality.",
    icon: <Clock className="text-accent" />,
  },
  {
    title: "AI-powered designs",
    desc: "Leveraging cutting-edge AI for unique and modern visuals.",
    icon: <Cpu className="text-accent" />,
  },
  {
    title: "Unique & creative",
    desc: "Every design is crafted with a fresh, creative perspective.",
    icon: <Zap className="text-accent" />,
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-dark-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Choose Me?</h2>
            <p className="text-white/60 mb-12 text-lg">
              I combine the speed of AI with the intuition of a creative designer to deliver ads that actually perform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="p-6 rounded-2xl bg-dark border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h4 className="font-bold mb-2">{reason.title}</h4>
                  <p className="text-white/40 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-accent/5 rounded-3xl border border-accent/10 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
            <div className="text-center z-10">
              <span className="text-8xl font-display font-bold text-accent glow-text">100%</span>
              <p className="text-white/60 font-bold uppercase tracking-widest mt-4">Satisfaction Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
