"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function PortfolioContact() {
  const [submitted, setSubmitted] = useState(false);
  const [scope, setScope] = useState("");

  const projectTypes = ["Full-Stack App", "API Infrastructure", "Database Caching", "Other System"];

  const triggerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="bg-[#f5f5f7] py-36 px-6 sm:px-12 border-t border-[#d2d2d7]/50">
      <div className="max-w-[720px] mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">CONNECTION_PORTAL</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">Initialize a Project Brief.</h2>
        </div>

        <div className="bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-10 shadow-xs">
          {!submitted ? (
            <form onSubmit={triggerSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider font-mono block">1. Select Framework Target</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setScope(t)}
                      className={`px-4 py-3.5 text-left text-sm font-medium rounded-xl border transition-all ${
                        scope === t ? "border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3]" : "border-[#d2d2d7]/60 bg-[#f5f5f7]/50 text-[#1d1d1f] hover:bg-[#f5f5f7]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" className="w-full px-4 py-3.5 bg-[#f5f5f7]/50 border border-[#d2d2d7]/60 rounded-xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all" />
                <input required type="email" placeholder="Work Email" className="w-full px-4 py-3.5 bg-[#f5f5f7]/50 border border-[#d2d2d7]/60 rounded-xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all" />
              </div>

              <textarea required rows={4} placeholder="Tell me about your application constraints, connection limits, or project deadlines..." className="w-full px-4 py-3.5 bg-[#f5f5f7]/50 border border-[#d2d2d7]/60 rounded-xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all resize-none" />

              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-all tracking-tight group shadow-xs cursor-pointer">
                Transmit System Request
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#0071e3] mx-auto" />
              <h3 className="text-xl font-semibold text-[#1d1d1f]">Brief Transmitted</h3>
              <p className="text-sm text-[#86868b] max-w-xs mx-auto">Parameters routed successfully. Expect a technical proposal draft via email within 24 hours.</p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}