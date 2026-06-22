"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap } from "lucide-react";

export default function AboutHero() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="py-2 px-6 max-w-285 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      {/* LEFT COLUMN: BIG EDITORIAL FOCUS STATEMENT (7 Columns) */}
      <div className="lg:col-span-7 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: appleEase }}
          className="text-xs font-mono font-semibold tracking-wider text-[#86868b] uppercase"
        >
          OPERATOR PROFILE // RAHUL SHAKYA
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
          className="text-[clamp(36px,5.5vw,64px)] font-semibold tracking-tight text-[#1d1d1f] leading-[1.1]"
        >
          Obsessed with engineering speed. <br />
          Driven by bulletproof systems.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6 text-lg text-[#86868b] leading-relaxed font-normal max-w-2xl"
        >
          <p>
            I specialize in crafting high-performance full-stack web platforms and autonomous AI ecosystems. My technical thesis centers on stripping away architectural bloat and packaging systems inside secure, production-hardened environments.
          </p>
          <p>
            Graduating with a degree in Computer Applications laid the mathematical and logical groundwork. From there, I transitioned directly into shipping scalable, asynchronous architectures—bridging the gap between front-end pixel response times and ultra-stable back-end database designs.
          </p>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: TECHNICAL PHILOSOPHY BADGES (5 Columns) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
        className="lg:col-span-5 bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-4xl p-8 space-y-6"
      >
        <div className="text-xs font-mono text-[#86868b] uppercase pb-4 border-b border-[#d2d2d7]/40">
          Core Execution Guarantees
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="p-3 bg-white border border-[#d2d2d7]/40 rounded-xl h-fit text-[#0071e3]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Deterministic Code Only</h3>
              <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                No fragile workarounds. Everything is strictly typed via TypeScript and completely isolated inside container networks.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-white border border-[#d2d2d7]/40 rounded-xl h-fit text-[#0071e3]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Zero-Trust Protocols</h3>
              <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                Architecting API connections behind dual-token cookie guards to ensure data integrity remains absolute.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-white border border-[#d2d2d7]/40 rounded-xl h-fit text-[#0071e3]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Asynchronous Multi-Threading</h3>
              <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                Offloading data pipelines and text parsing loops onto parallel Node instances to protect memory cycles.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}