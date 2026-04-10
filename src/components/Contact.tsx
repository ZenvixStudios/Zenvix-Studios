import { motion } from "motion/react";
import { Instagram, Mail, Send, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mjgpqjql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Something went wrong. Please try again.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Get in Touch</h2>
            <p className="text-white/60 mb-12 text-lg max-w-md">
              Ready to elevate your brand with high-impact visuals? Let's talk about your next project.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:zenvixstudiosalt@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center border border-white/5 group-hover:border-accent/50 transition-all">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-bold">zenvixstudiosalt@gmail.com</p>
                </div>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center border border-white/5 group-hover:border-accent/50 transition-all">
                  <Instagram className="text-accent" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Instagram</p>
                  <p className="text-xl font-bold">@rishikesh_designs</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center border border-white/5">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-dark border border-white/5"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-accent" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/60 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-dark-soft border border-white/10 focus:border-accent/50 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-dark-soft border border-white/10 focus:border-accent/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-xl bg-dark-soft border border-white/10 focus:border-accent/50 focus:outline-none transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={18} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-accent text-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
