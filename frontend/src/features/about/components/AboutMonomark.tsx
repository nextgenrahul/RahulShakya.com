"use client";

import { motion } from "framer-motion";

export default function AboutMonomark() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="pt-48 pb-32 px-6 sm:px-12 max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side Metadata Flag */}
        <div className="lg:col-span-4 pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#86868b]"
          >
            STUDIO_PROFILE // DIRECTION
          </motion.div>
        </div>

        {/* Right Side Massive Editorial Monolith */}
        <div className="lg:col-span-8 space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase }}
            className="text-[clamp(38px,6vw,76px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.04]"
          >
            Obsessed with engineering speed. Driven by bulletproof systems.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase, delay: 0.15 }}
            className="text-[clamp(18px,2.4vw,22px)] font-normal text-[#86868b] leading-relaxed max-w-2xl space-y-6"
          >
            <p>
              We operate as a high-performance digital collective specialized in full-stack core networks, analytical data intelligence, and cinematic brand motion. Founded by Rahul Shakya following a rigorous trajectory in Computer Applications, our studio strips away technical debt to deploy stable, production-hardened ecosystems.
            </p>
            <p>
              By aligning dedicated talent across software engineering, data science, and media production, we bypass fragmented communication loops. Every product we ship is built with complete type safety, predictive analytics tracking, and conversion-focused growth loops.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}