import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Shield, ChartBar, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import logo from '../images/logo.png'; // Ensure this path is correct

const quotes = [
  "Precision in Strategy, Excellence in Execution.",
  "Your Trusted Partner in Financial Growth.",
  "Integrity defines us. Results drive us.",
  "Navigating complexity with financial clarity."
];

const ComingSoon = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center relative overflow-hidden font-sans selection:bg-blue-100">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Corporate Glows */}
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[40%] bg-emerald-50 rounded-full blur-[100px] opacity-50" />
        
        {/* Fixed Grid: Reduced opacity to 0.02 for a subtle, high-end feel */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* --- TOP NAVIGATION --- */}
      <nav className="w-full max-w-7xl px-10 py-10 flex justify-between items-center z-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* LOGO SIZE FIX: Uses h-24 on desktop for professional scale */}
          <img src={logo} alt="Rudronil" className="h-16 md:h-24 w-auto object-contain" />
        </motion.div>
        
        <div className="hidden md:flex gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Wealth</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Advisory</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Capital</span>
        </div>
      </nav>

      {/* --- MAIN CONTENT (CENTERED) --- */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 w-full max-w-5xl"
      >
        {/* Badge */}
        <div className="mb-8 px-5 py-2 rounded-full border border-blue-100 bg-white/50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm">
          Elevating Financial Standards
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
           <span className="text-blue-600">Coming</span>
          <span className="text-emerald-600"></span> soon.
        </h1>

        {/* Animated Quotes */}
        <div className="h-12 mb-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-xl text-slate-500 italic font-light"
            >
              "{quotes[currentQuote]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Professional CTA Input */}
        {/* <div className="w-full max-w-lg bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Enter corporate email" 
            className="flex-1 px-6 py-4 rounded-xl text-slate-700 focus:outline-none bg-transparent text-sm"
          />
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all text-sm group">
            Get Notified <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}

        {/* Services / Trust Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50">
          <div className="flex flex-col items-center gap-3">
            <Shield size={24} strokeWidth={1.5} />
            <span className="text-[9px] uppercase font-bold tracking-widest">Secure Assets</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ChartBar size={24} strokeWidth={1.5} />
            <span className="text-[9px] uppercase font-bold tracking-widest">Market Growth</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Globe size={24} strokeWidth={1.5} />
            <span className="text-[9px] uppercase font-bold tracking-widest">Global Reach</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Mail size={24} strokeWidth={1.5} />
            <span className="text-[9px] uppercase font-bold tracking-widest">Expert Support</span>
          </div>
        </div>
      </motion.main>

      {/* --- FOOTER --- */}
      <footer className="w-full max-w-7xl px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6 z-20 border-t border-slate-200/50">
        <div className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">
          © 2026 Rudronil Financial Services Pvt Ltd.
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-5 text-slate-400">
             <Linkedin className="hover:text-blue-700 cursor-pointer transition-colors" size={18} />
             <Twitter className="hover:text-blue-400 cursor-pointer transition-colors" size={18} />
          </div>
          <div className="h-4 w-[1px] bg-slate-200" />
          <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:text-blue-600 cursor-pointer">
            Contact Relations
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;