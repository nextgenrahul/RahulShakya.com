"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Activity, Zap, Layers } from "lucide-react";

export default function FeatureGrid() {
    const appleEase = [0.25, 1, 0.5, 1] as const;
    const gridItems = [
        {
            icon: <Cpu className="w-6 h-6 text-[#0071e3]" />,
            title: "Autonomous AI Architecture",
            description: "Integrating production-grade localized Large Language Models (LLMs) and dense Retrieval-Augmented Generation (RAG) pipelines straight into core database processing layers.",
            size: "md:col-span-2",
            metric: "Sub-200ms Latency"
        },
        {
            icon: <Zap className="w-6 h-6 text-[#0071e3]" />,
            title: "Blazing Speed Vectors",
            description: "Configured using high-performance Next.js Server Components, Rust tooling compilers, and custom payload optimizations.",
            size: "md:col-span-1",
            metric: "100/100 Lighthouse"
        },
        {
            icon: <Terminal className="w-6 h-6 text-[#0071e3]" />,
            title: "Enterprise Containerization",
            description: "Isolated using Docker. Your web systems compile identically from staging clusters right into production servers with zero environment deviations.",
            size: "md:col-span-1",
            metric: "100% Deterministic"
        },
        {
            icon: <Shield className="w-6 h-6 text-[#0071e3]" />,
            title: "Hardened Vault Session Security",
            description: "Dual-token cookie isolation architecture protecting backend endpoints against Cross-Site Scripting (XSS) and CSRF system vulnerabilities.",
            size: "md:col-span-2",
            metric: "Bank-Grade Guarding"
        },
        {
            icon: <Activity className="w-6 h-6 text-[#0071e3]" />,
            title: "Real-time Metric Streamlining",
            description: "Built-in telemetry tracking with distributed cluster health dashboards logging runtime telemetry natively.",
            size: "md:col-span-3",
            metric: "Active Upstream Control"
        }
    ];

    return (
        <section className="bg-[#f5f5f7] py-24 px-6 border-t border-[#d2d2d7]/50">
            <div className="max-w-[1140px] mx-auto space-y-16">

                {/* Apple-Style Section Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b] flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#0071e3]" /> System Integrity
                    </span>
                    <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        Engineered down to the pixel. <br />
                        Optimized for raw computing power.
                    </h2>
                </div>

                {/* Premium Bento Grid Structure */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gridItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: appleEase, delay: index * 0.05 }}
                            className={`${item.size} bg-white rounded-3xl p-8 border border-[#d2d2d7]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative overflow-hidden group min-h-[240px]`}
                        >
                            <div>
                                <div className="p-3 bg-[#f5f5f7] rounded-2xl w-fit mb-6 group-hover:bg-[#0071e3]/5 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                                    {item.description}
                                </p>
                            </div>

                            {/* Quiet Performance Readout Marker */}
                            <div className="mt-6 pt-4 border-t border-[#f5f5f7] flex justify-between items-center">
                                <span className="text-xs font-mono tracking-wider uppercase text-[#86868b]">Operational Spec</span>
                                <span className="text-xs font-semibold text-[#0071e3] bg-[#0071e3]/5 px-2.5 py-1 rounded-full">
                                    {item.metric}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}