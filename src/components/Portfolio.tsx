import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, X, Maximize2 } from "lucide-react";

const projects = [
  { id: 1, title: "Gourmet Pizza Ad", category: "Food & Beverage", image: "https://i.ibb.co/RT2QKhFr/PIZZA-PRORTFOLI-PRT-NO-3.png" },
  { id: 2, title: "Luxury Perfume Visual", category: "Beauty & Fashion", image: "https://i.ibb.co/MDRnVX5R/Luxury-perfume-ad.png" },
  { id: 3, title: "Best Burger Portfolio", category: "Food & Beverage", image: "https://i.ibb.co/rfXHCwsD/BEST-BURGER-PORFOLIO-REDY-ONE.png" },
  { id: 4, title: "Aloe Vera Facewash Ad", category: "Skincare", image: "https://i.ibb.co/R4yhxqfy/ALOE-VERA-FACEWASH-AD-PORTFOLIO.png" },
  { id: 5, title: "Morning Coffee Vibes", category: "Lifestyle", image: "https://i.ibb.co/q3s61J3C/COFFEE-ADVERTIZEMT-PORTFOLIO.png" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Work</h2>
            <p className="text-white/60 max-w-md">
              A collection of high-impact ad creatives designed to stop the scroll and drive results.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">All Projects</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold">AI Visuals</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-dark-soft border border-white/5 cursor-pointer glow-box-hover transition-all"
              onClick={() => setSelectedImage(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Maximize2 size={16} />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* See More Card */}
          <motion.a
            href="https://drive.google.com/drive/folders/1XvXMBKaA7YidM4AxcEtF8gppC2XbM73k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-accent/5 border border-accent/20 flex flex-col items-center justify-center gap-4 cursor-pointer glow-box-hover transition-all"
          >
            <div className="p-6 rounded-full bg-accent/10 border border-accent/20 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={48} className="text-accent" />
            </div>
            <span className="text-2xl font-display font-bold text-white">See More</span>
            <p className="text-white/40 text-sm">View full portfolio on Drive</p>
          </motion.a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Full Preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
