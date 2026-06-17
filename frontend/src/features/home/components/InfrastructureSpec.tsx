"use client";

import { motion } from "framer-motion";
import { Server, Globe, Cpu, RefreshCw, Radio } from "lucide-react";

export default function InfrastructureSpec() {
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const infrastructureNodes = [
        {
            icon: <Globe className="w-5 h-5 text-[#0071e3]" />,
            title: "Edge Delivery Network",
            spec: "Next.js Static ISR Engine",
            value: "Sub-40ms TTFB Globally"
        },
        {
            icon: <Cpu className="w-5 h-5 text-[#0071e3]" />,
            title: "Compute Core Clustering",
            spec: "Isolated Docker Pods",
            value: "Auto-Healing Processes"
        },
        {
            icon: <RefreshCw className="w-5 h-5 text-[#0071e3]" />,
            title: "Data Replication Nodes",
            spec: "PostgreSQL WAL Archiving",
            value: "Real-Time DB Sync"
        }
    ];

    return (
        <section className="bg-white py-32 px-6 border-t border-[#d2d2d7]/50">
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* LEFT COLUMN: ARCHITECTURAL COPYWAY (5 Columns) */}
                <div className="lg:col-span-5 space-y-6">
                    <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b] flex items-center gap-2">
                        <Radio className="w-3.5 h-3.5 text-[#0071e3] animate-pulse" /> Live Deployment Spec
                    </span>
                    <h2 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-tight text-[#1d1d1f] leading-[1.1]">
                        Global deployment. <br />
                        Hardened stability.
                    </h2>
                    <p className="text-[17px] leading-relaxed text-[#86868b] font-normal">
                        Every application framework we ship is bound inside a multi-region cluster layout. If an entire data center fails, upstream traffic re-routes seamlessly within seconds.
                    </p>
                </div>

                {/* RIGHT COLUMN: CINEMATIC SPECIFICATION DASHBOARD (7 Columns) */}
                <div className="lg:col-span-7 bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-10 space-y-4">

                    {/* Node Mapping Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#d2d2d7]/40 text-xs font-mono text-[#86868b]">
                        <span>NODE LOCATION TRACKING</span>
                        <span>ACTIVE 2026</span>
                    </div>

                    {/* Infrastructure Cards Stacking */}
                    <div className="space-y-3">
                        {infrastructureNodes.map((node, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: appleEase, delay: index * 0.1 }}
                                className="bg-white border border-[#d2d2d7]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#0071e3]/20 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-[#f5f5f7] rounded-xl text-[#0071e3]">
                                        {node.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#1d1d1f]">{node.title}</h4>
                                        <p className="text-xs font-mono text-[#86868b] mt-0.5">{node.spec}</p>
                                    </div>
                                </div>

                                <div className="text-xs font-semibold text-white bg-[#1d1d1f] sm:bg-transparent sm:text-[#0071e3] sm:bg-[#0071e3]/5 px-3 py-1.5 rounded-full font-mono sm:font-sans self-stretch sm:self-auto text-center">
                                    {node.value}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Console Output Bar */}
                    <div className="pt-4 border-t border-[#d2d2d7]/40 text-[11px] font-mono text-[#86868b] flex justify-between items-center">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                            SYSTEM OVERVIEW: ZERO ERRORS LOGGED
                        </span>
                        <span>VER. 1.0.4</span>
                    </div>

                </div>

            </div>
        </section>
    );
}