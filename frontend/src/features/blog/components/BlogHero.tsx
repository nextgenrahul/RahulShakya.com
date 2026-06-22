"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="pt-48 pb-20 px-6 sm:px-12 max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#86868b] flex items-center gap-2"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#0071e3]" /> CORE_PUBLICATION // EDITION_2026
          </motion.div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            className="text-[clamp(36px,5.5vw,72px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.05]"
          >
            The Technical Ledger.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.12 }}
            className="text-xl text-[#86868b] font-normal leading-relaxed max-w-xl"
          >
            Deep-dive operational manuals, backend performance post-mortems, and clean code architecture blueprints written for systems operators.
          </motion.p>
        </div>
      </div>
    </section>
  );
}