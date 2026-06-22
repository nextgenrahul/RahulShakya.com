"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="pt-48 pb-24 px-6 sm:px-12 max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#86868b]"
          >
            CAPABILITY_SUITE // 2026
          </motion.div>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase }}
            className="text-[clamp(38px,6vw,76px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.04]"
          >
            Production blueprints. Optimized to scale.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase, delay: 0.15 }}
            className="text-[clamp(18px,2.2vw,22px)] font-normal text-[#86868b] leading-relaxed max-w-2xl"
          >
            Deploying highly stable full-stack web architectures and isolated AI node infrastructures. We systematically strip away runtime lag, secure data flows, and ensure deterministic system execution.
          </motion.p>
        </div>
      </div>
    </section>
  );
}