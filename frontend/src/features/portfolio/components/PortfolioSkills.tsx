"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Cpu, Database, Terminal, CheckCircle2 } from "lucide-react";

export default function PortfolioSkills() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const frameworkLayers = [
    {
      meta: "01 // INTERFACE COMPOSITING",
      icon: <Layout className="w-5 h-5" />,
      title: "Client-Facing Architectures",
      desc: "Constructing fast, beautiful interfaces using Next.js 15, React 19, and Tailwind CSS v4. Focus vectors center heavily on complete Core Web Vitals targets and dynamic fluid motion controls.",
      tokens: ["Next.js 15", "React 19", "Tailwind v4", "TypeScript"]
    },
    {
      meta: "02 // RUNTIME LAYER",
      icon: <Cpu className="w-5 h-5" />,
      title: "Asynchronous API Processing",
      desc: "Configuring high-throughput backend infrastructure engines using Node.js and Java. Code design keeps route handlers completely isolated from logic pools to maintain robust microservices.",
      tokens: ["Node.js", "Java Core", "Express Framework", "REST APIs"]
    },
    {
      meta: "03 // DATA SECURITY & STORAGE",
      icon: <Database className="w-5 h-5" />,
      title: "Relational & Caching Systems",
      desc: "Designing secure, index-optimized relational schemas inside PostgreSQL managed through Prisma ORM maps. Heavy tracking routes leverage in-memory Redis keys to protect hardware speeds.",
      tokens: ["PostgreSQL", "Prisma ORM", "Redis Cache", "SQL Indexing"]
    }
  ];

  return (
    <section className="py-36 px-6 sm:px-12 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-[1140px] mx-auto space-y-16">
        
        <div className="max-w-xl space-y-3">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">TECHNICAL_CAPABILITIES</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">The Engineering Core.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* TAB TRIGGERS */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {frameworkLayers.map((layer, idx) => {
              const selected = activeLayer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-6 text-left rounded-[24px] border transition-all duration-300 flex items-center gap-5 cursor-pointer relative ${
                    selected ? "bg-white border-[#d2d2d7] shadow-xs text-[#0071e3]" : "bg-transparent border-transparent text-[#86868b] hover:bg-white/40"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${selected ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-white border border-[#d2d2d7]/50"}`}>
                    {layer.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#86868b] tracking-wider">{layer.meta}</div>
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">{layer.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CARD VIEW */}
          <div className="lg:col-span-7 bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xs min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                transition={{ duration: 0.45, ease: appleEase }}
                className="space-y-8 flex-grow flex flex-col justify-between"
              >
                <p className="text-[16px] leading-relaxed text-[#515154] font-normal">{frameworkLayers[activeLayer].desc}</p>
                <div className="pt-6 border-t border-[#f5f5f7] flex flex-wrap gap-2">
                  {frameworkLayers[activeLayer].tokens.map((token) => (
                    <span key={token} className="text-xs font-medium text-[#515154] bg-[#f5f5f7] border border-[#d2d2d7]/50 px-3 py-1 rounded-full">
                      {token}
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