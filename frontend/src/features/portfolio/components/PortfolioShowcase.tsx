"use client";

import { motion } from "framer-motion";
import { Terminal, Database } from "lucide-react";

export default function PortfolioShowcase() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const customProjects = [
    {
      label: "DEPLOYMENT_CORE // LINKS_TO_ME",
      title: "LinksToMe Architectural Router",
      context: "A high-performance link management network engineered to eliminate layout data tracking delays. Built completely within strict Server Component trees to keep baseline speeds blazing fast.",
      metrics: "Sub-85ms Paint Speed",
      spec: "Next.js 15 // Node API // PostgreSQL Engine"
    },
    {
      label: "DEPLOYMENT_CORE // AT_SMITH",
      title: "ATSmith Intelligent Matching Engine",
      context: "An advanced applicant schema validation system built to parse, process, and score heavy data structures cleanly. Employs modular object schemas to isolate data errors instantly.",
      metrics: "100% Deterministic Parsing",
      spec: "Express API // TypeScript Engine // Zod Validation"
    }
  ];

  return (
    <section className="bg-white py-36 px-6 sm:px-12 border-t border-[#d2d2d7]/40">
      <div className="max-w-[1140px] mx-auto space-y-24">
        
        <div className="max-w-xl space-y-3">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">SYSTEM_RELEASES</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">Flagship Applications.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: appleEase, delay: idx * 0.05 }}
              className="bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[380px] hover:shadow-xs transition-shadow duration-300"
            >
              <div className="space-y-6">
                <span className="text-[10px] font-mono font-bold text-[#86868b] uppercase tracking-wider block">{project.label}</span>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">{project.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#515154] font-normal">{project.context}</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#d2d2d7]/60 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#0071e3] bg-[#0071e3]/5 px-2.5 py-1 rounded-full">{project.spec}</span>
                <span className="text-xs font-bold text-white bg-[#1d1d1f] px-3 py-1.5 rounded-full font-mono">{project.metrics}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}