import { motion } from "motion/react";
import { Lightbulb, PenTool, Palette, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Understanding the idea",
    desc: "We dive deep into your brand's core message and target audience.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Creating concepts",
    desc: "Brainstorming and sketching out initial AI-assisted concepts.",
    icon: <PenTool size={32} />,
  },
  {
    title: "Designing visuals",
    desc: "Crafting the final high-impact visuals with precision and creativity.",
    icon: <Palette size={32} />,
  },
  {
    title: "Delivering final output",
    desc: "Providing you with ready-to-use, high-converting ad creatives.",
    icon: <CheckCircle size={32} />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Process</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            A streamlined workflow designed to turn your vision into reality efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-dark-soft border border-white/5 relative group hover:border-accent/30 transition-all"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.desc}
              </p>
              <div className="absolute top-8 right-8 text-4xl font-display font-bold text-white/[0.03]">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
