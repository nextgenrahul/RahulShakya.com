"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Bot, Cpu, Shield, ArrowRight } from "lucide-react";

export default function ServicesMatrix() {
  const [activeTier, setActiveTier] = useState<number>(0);
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const operationalTiers = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "Full-Stack SaaS Ecosystems",
      summary: "End-to-end multi-tenant application design.",
      details: "Engineering responsive web layers using Next.js 15 and React 19 server-side models. We structure multi-tenant layouts with complete data isolation, pooled backend data channels, and clean route mapping.",
      stack: ["Next.js 15", "React 19", "Node.js", "Prisma ORM"]
    },
    {
      icon: <Bot className="w-5 h-5" />,
      label: "Autonomous AI & RAG Infrastructure",
      summary: "Integrating localized LLM and vector processing loops.",
      details: "Building advanced Retrieval-Augmented Generation (RAG) frameworks. We map raw contextual data streams into pgvector databases, enabling fast, sub-200ms intelligent vector queries directly from secure backend pipelines.",
      stack: ["PostgreSQL", "pgvector", "LangChain", "Vector Indexes"]
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "Containerized DevOps Orchestration",
      summary: "Isolated virtual environments built for high-uptime environments.",
      details: "Packaging complete multi-container stacks using Docker and Docker Compose. Upstream data paths route securely through custom-configured Nginx reverse proxy nodes to prevent raw port scanning vulnerabilities.",
      stack: ["Docker", "Nginx Proxy", "Linux Scripting", "GitHub Actions"]
    }
  ];

  return (
    <section className="py-36 px-6 sm:px-12 bg-[#f5f5f7] border-t border-[#d2d2d7]/50 overflow-hidden">
      <div className="max-w-[1140px] mx-auto space-y-16">
        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            CORE_OFFERINGS
          </span>
          <h2 className="text-[clamp(28px,4.2vw,46px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            Specialized engineering channels.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {operationalTiers.map((tier, idx) => {
              const isSelected = activeTier === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTier(idx)}
                  className={`p-6 text-left rounded-[24px] border transition-all duration-300 flex items-center gap-5 cursor-pointer relative overflow-hidden group ${
                    isSelected ? "bg-white border-[#d2d2d7] shadow-xs text-[#0071e3]" : "bg-transparent border-transparent text-[#86868b] hover:bg-white/40"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-white border border-[#d2d2d7]/50"}`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">{tier.label}</h3>
                    <p className="text-xs text-[#86868b] mt-0.5 font-normal">{tier.summary}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xs min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                transition={{ duration: 0.45, ease: appleEase }}
                className="space-y-8 flex-grow flex flex-col justify-between"
              >
                <p className="text-[16px] leading-relaxed text-[#515154] font-normal">
                  {operationalTiers[activeTier].details}
                </p>
                <div className="pt-6 border-t border-[#f5f5f7] flex flex-wrap gap-2">
                  {operationalTiers[activeTier].stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-[#515154] bg-[#f5f5f7] border border-[#d2d2d7]/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}