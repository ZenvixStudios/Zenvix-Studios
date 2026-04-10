import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Target, Rocket } from "lucide-react";

const tickerItems = [
  "High-converting ad creatives",
  "Affordable yet premium designs",
  "Powered by AI, perfected by creativity",
  "Scroll-stopping visuals",
  "Designed for impact",
  "Creative ads that sell",
  "Modern design solutions",
  "Unique & eye-catching visuals",
  "Fast & reliable delivery",
  "Turning ideas into visuals",
];

const tools = [
  { name: "Canva", icon: "🎨" },
  { name: "Midjourney", icon: "🤖" },
  { name: "Photoshop", icon: "🖌️" },
  { name: "Figma", icon: "📐" },
  { name: "CapCut", icon: "🎬" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold mb-6">
            <Sparkles size={14} />
            <span>Creative Designer & AI Specialist</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Hello, I'm <br />
            <span className="text-accent glow-text">Rishikesh Mishra</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-4 max-w-lg">
            I create high-impact ad visuals using AI and creative design.
          </p>
          
          <p className="text-sm text-white/40 mb-8 italic">
            "Turning ideas into eye-catching visuals."
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#work"
              className="px-8 py-4 bg-accent text-dark font-bold rounded-xl flex items-center gap-2 hover:bg-accent-hover transition-all hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Tool Icons */}
          <div className="flex items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-white/30">Tools:</span>
            {tools.map((tool) => (
              <div key={tool.name} className="text-2xl" title={tool.name}>
                {tool.icon}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Abstract Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Main Glowing Orb */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl border border-accent/30 backdrop-blur-3xl"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 p-6 bg-dark-soft border border-white/10 rounded-2xl glow-box"
            >
              <Zap className="text-accent" size={32} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 p-6 bg-dark-soft border border-white/10 rounded-2xl glow-box"
            >
              <Target className="text-accent" size={32} />
            </motion.div>

            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 -right-20 p-6 bg-dark-soft border border-white/10 rounded-2xl glow-box"
            >
              <Rocket className="text-accent" size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="mt-20 py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-2xl font-display font-bold text-white/20 uppercase tracking-tighter">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
