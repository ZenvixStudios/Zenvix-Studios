import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in AI-powered ad design, creative visuals for social media, digital ad campaigns, and brand visual identity.",
  },
  {
    question: "How long does delivery take?",
    answer: "Typically, initial concepts are delivered within 24-48 hours. The final output depends on the complexity and revisions.",
  },
  {
    question: "Do you use AI in your designs?",
    answer: "Yes, I use AI tools like Midjourney and DALL-E to generate unique base assets, which I then refine and perfect using professional design tools.",
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely! I offer multiple rounds of revisions to ensure you are 100% satisfied with the final result.",
  },
  {
    question: "What are your pricing ranges?",
    answer: "Pricing varies based on the project scope. I offer affordable packages for startups and premium solutions for established brands.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">FAQ</h2>
          <p className="text-white/60">Common questions about my services and workflow.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/5 rounded-2xl bg-dark-soft overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-accent" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
