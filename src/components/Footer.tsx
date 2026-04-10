export default function Footer() {
  return (
    <footer className="py-12 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/XxgSZ6bx/RISHIKESH-LOGO-black-theme.png" 
            alt="Rishikesh Mishra" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="text-white/40 text-sm">
          © 2026 Rishikesh Mishra. All rights reserved.
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
