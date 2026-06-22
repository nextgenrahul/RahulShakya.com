"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FileText, ArrowRight, Activity, ShieldCheck, Award } from "lucide-react";

export default function PortfolioHero() {
  const appleEase = [0.25, 1, 0.5, 1] as const;
  const [imageError, setImageError] = useState(false);

  const quickStats = [
    { label: "Client Retention Rate", value: "100%", icon: <Award className="w-4 h-4 text-[#0071e3]" /> },
    { label: "Type Safety Density", value: "100%", icon: <ShieldCheck className="w-4 h-4 text-[#0071e3]" /> },
    { label: "Production SLA Uptime", value: "99.99%", icon: <Activity className="w-4 h-4 text-[#0071e3]" /> }
  ];

  return (
    <section className="pt-44 pb-32 px-6 sm:px-12 max-w-[1140px] mx-auto border-b border-[#d2d2d7]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT TEXT MONOLITH (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs font-bold tracking-widest text-[#86868b] uppercase"
          >
            ACTIVE_OPERATOR // RAHUL SHAKYA
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-[clamp(36px,5.2vw,72px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.05]"
          >
            Full-stack core execution. Hardened for production scale.
          </motion.h1>

          {/* Core Action Suite & Resume Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full tracking-tight transition-all shadow-xs group cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Access System Resume
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center text-[#0071e3] hover:underline text-[16px] font-medium gap-1 group py-2"
            >
              Initialize Connection Brief
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Quick Metrics Sub-Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#f5f5f7]"
          >
            {quickStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#f5f5f7]/60 p-3.5 rounded-2xl border border-[#d2d2d7]/30">
                <div className="p-2 bg-white rounded-xl shadow-2xs">{stat.icon}</div>
                <div>
                  <div className="text-xl font-semibold text-[#1d1d1f] tracking-tight leading-none">{stat.value}</div>
                  <div className="text-[11px] font-medium text-[#86868b] mt-1 tracking-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT ASYMMETRIC IMAGE BLOCK (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: appleEase, delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          {/* Apple Premium Minimal Image Container Asset */}
          <div className="aspect-[4/5] w-full bg-gradient-to-tr from-[#f5f5f7] via-[#e8e8ed] to-[#f5f5f7] rounded-[36px] border border-[#d2d2d7]/60 shadow-xs relative overflow-hidden group">
            
            {!imageError ? (
              <Image 
                src="/images/rahul-profile.jpg" 
                alt="Rahul Shakya Profile" 
                priority // Tells Next.js to preload this above-the-fold hero image instantly
                fill // Dynamically occupies the 4:5 parent frame constraints cleanly
                sizes="(max-w-1024px) 100vw, 400px" // Responsive cache size allocation
                className="object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                onError={() => setImageError(true)} // Toggles state if local file asset is missing
              />
            ) : (
              /* High-signal typographic fallback inside container layout if asset is absent */
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center font-mono text-xs text-[#86868b]">
                [ SYSTEM_IMAGE // DEPLOYED_PENDING ]
              </div>
            )}

            {/* Geometric Accent Line Box Overlay */}
            <div className="absolute inset-0 border border-white/40 rounded-[36px] pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}