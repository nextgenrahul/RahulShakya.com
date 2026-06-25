"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Cpu, Database, Blocks, Terminal, CheckCircle2 } from "lucide-react";

export default function AboutPhilosophy() {
    const [activeLayer, setActiveLayer] = useState<number>(0);
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const infrastructureLayers = [
        {
            meta: "LAYER 01 // FRONTEND ENGINE",
            icon: <Layout className="w-5 h-5" />,
            heading: "Optimized Web Compositing",
            text: "Engineered using Next.js 15 server nodes and React 19 execution trees. User interfaces are completely stripped of runtime bloat, pre-compiled at the edge, and balanced to achieve sub-100ms first contentful paint benchmarks.",
            metric: "100% Core Web Vitals Passed",
            codeSnippet: "export const config = { runtime: 'edge' };"
        },
        {
            meta: "LAYER 02 // ROUTING SYSTEM",
            icon: <Cpu className="w-5 h-5" />,
            heading: "Asynchronous API Processors",
            text: "Backend runtime blocks are structured cleanly around Node.js and Express. API paths utilize strict Zod schema validation maps to capture payload errors before they propagate into internal storage clusters.",
            metric: "Sub-45ms Controller Response",
            codeSnippet: "router.post('/v1/deploy', validate(schema));"
        },
        {
            meta: "LAYER 03 // STORAGE MESH",
            icon: <Database className="w-5 h-5" />,
            heading: "Hardened Persistence Vectors",
            text: "Designing high-volume relational tables with PostgreSQL and Prisma ORM. Frequent database read strings route through localized, in-memory Redis memory caches to completely eliminate expensive storage lookups.",
            metric: "Pooled Database Connections",
            codeSnippet: "const cache = await redis.get(`node:${id}`);"
        }
    ];

    return (
        <section className="py-36 px-6 sm:px-12 bg-[#f5f5f7] border-t border-[#d2d2d7]/50 overflow-hidden">
            <div className="max-w-[1140px] mx-auto space-y-20">

                {/* Section Identification Title */}
                <div className="max-w-2xl space-y-4">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono flex items-center gap-2">
                        <Blocks className="w-4 h-4 text-[#0071e3]" /> Architectural Engine
                    </span>
                    <h2 className="text-[clamp(28px,4.2vw,46px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        The operational blueprint.
                    </h2>
                    <p className="text-lg text-[#86868b] font-normal">
                        A real-time technical breakdown of the multi-tier engineering protocols applied to every secure system container.
                    </p>
                </div>

                {/* Console Workspace Grid Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                    {/* LEFT SELECTION COLUMN (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                        {infrastructureLayers.map((layer, idx) => {
                            const isSelected = activeLayer === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveLayer(idx)}
                                    className={`p-6 text-left rounded-[24px] border transition-all duration-300 flex items-center gap-5 cursor-pointer relative overflow-hidden group ${isSelected
                                            ? "bg-white border-[#d2d2d7] shadow-xs text-[#0071e3]"
                                            : "bg-transparent border-transparent text-[#86868b] hover:bg-white/40"
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-white border border-[#d2d2d7]/50 text-[#86868b]"
                                        }`}>
                                        {layer.icon}
                                    </div>

                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-mono tracking-widest font-bold text-[#86868b]">
                                            {layer.meta}
                                        </div>
                                        <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight transition-colors group-hover:text-[#0071e3]">
                                            {layer.heading}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT SCREEN METRIC VISUALIZER (7 Columns) */}
                    <div className="lg:col-span-7 bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xs min-h-[440px] relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,rgba(0,113,227,0.02),transparent_70%)] pointer-events-none" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLayer}
                                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                                transition={{ duration: 0.45, ease: appleEase }}
                                className="space-y-8 flex-grow flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0071e3]/5 text-[#0071e3] text-xs font-semibold rounded-full font-mono">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        {infrastructureLayers[activeLayer].metric}
                                    </div>

                                    <p className="text-[16px] leading-relaxed text-[#515154] font-normal">
                                        {infrastructureLayers[activeLayer].text}
                                    </p>
                                </div>

                                {/* Dark IDE Input Mirror */}
                                <div className="bg-[#030303] rounded-2xl p-6 border border-white/10 font-mono text-xs text-zinc-400 space-y-3 shadow-inner relative">
                                    <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-800/60 text-zinc-500 text-[10px]">
                                        <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
                                        <span>SYSTEM_TERMINAL // RUNTIME_OUTPUT</span>
                                    </div>
                                    <pre className="overflow-x-auto scrollbar-none text-[#42a5f5]">
                                        <code>{infrastructureLayers[activeLayer].codeSnippet}</code>
                                    </pre>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-8 pt-4 border-t border-[#f5f5f7] flex items-center justify-between text-[11px] font-mono text-[#86868b]">
                            <span>INDEX_METRIC // OK</span>
                            <span>RAHULSHAKYA.COM</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}