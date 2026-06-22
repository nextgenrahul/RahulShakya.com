"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Cpu } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [activeScope, setActiveScope] = useState("");
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const stackTargets = ["Full-Stack App Development", "Autonomous AI Integration", "Database Architecture Optimization", "Cloud DevOps Deployment"];

  const executeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-6 sm:px-12 max-w-[1140px] mx-auto pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[40px] p-6 sm:p-12 shadow-2xs overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form key="form" onSubmit={executeSubmit} className="space-y-10 max-w-3xl mx-auto">
              
              {/* Option Matrix Row */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider font-mono block">1. Select Core System Focus Layer</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stackTargets.map((target) => (
                    <button
                      key={target}
                      type="button"
                      onClick={() => setActiveScope(target)}
                      className={`px-5 py-4 text-left text-sm font-semibold rounded-2xl border transition-all ${
                        activeScope === target ? "border-[#0071e3] bg-white text-[#0071e3] shadow-2xs" : "border-[#d2d2d7]/50 bg-white/40 text-[#1d1d1f] hover:bg-white"
                      }`}
                    >
                      {target}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Communication Fields */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider font-mono block">2. Operational Details</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-white border border-[#d2d2d7]/60 rounded-2xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-all" />
                  <input required type="email" placeholder="Work Email" className="w-full px-5 py-4 bg-white border border-[#d2d2d7]/60 rounded-2xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-all" />
                </div>
                <textarea required rows={5} placeholder="Describe the current architecture constraints, database transaction blocks, or platform timeline parameters..." className="w-full px-5 py-4 bg-white border border-[#d2d2d7]/60 rounded-2xl text-sm placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-all resize-none" />
              </div>

              {/* Submission Button Trigger */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-[#86868b] text-center sm:text-left leading-relaxed">
                  Brief requests update live inside our development data cache. <br />
                  A secure response proposal draft routes back within 24 operational hours.
                </p>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-all tracking-tight shadow-2xs group cursor-pointer whitespace-nowrap">
                  Transmit Request
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

            </motion.form>
          ) : (
            /* Submission Complete View Panel */
            <motion.div key="success" initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: appleEase }} className="text-center py-16 space-y-4 max-w-sm mx-auto">
              <div className="inline-flex p-4 bg-[#0071e3]/5 text-[#0071e3] rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">Parameters Ingested</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">The tracking tokens have routed successfully. Rahul will evaluate your platform specifications directly.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}