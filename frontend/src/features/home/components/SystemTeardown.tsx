"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Database, Code, ShieldCheck } from "lucide-react";

export default function SystemTeardown() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const architecturalPillars = [
        {
            icon: <Layers className="w-5 h-5" />,
            label: "Presentation Layer",
            title: "Edge-Rendered Interfaces",
            tech: "Next.js 15 // React 19 // Turbopack",
            details: "Utilizing strict Server Component trees to eliminate layout shifts. Dynamic assets are pre-compiled and served directly through edge CDNs to maintain sub-100ms loading targets globally."
        },
        {
            icon: <Code className="w-5 h-5" />,
            label: "Execution Engine",
            title: "Isolated Node.js Router",
            tech: "Express // TypeScript // ESM Runtime",
            details: "An independent backend layer built using clean architecture. Business logic is separated completely from network requests, meaning sub-modules can scale independently into microservices later."
        },
        {
            icon: <Database className="w-5 h-5" />,
            label: "Persistence Vector",
            title: "Hardened Data Storage",
            tech: "PostgreSQL // Prisma // Redis Cache",
            details: "Normalized database design featuring deep relational mapping. Heavy API routes leverage an in-memory Redis caching system to bypass redundant SQL querying constraints entirely."
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            label: "Guard Rails",
            title: "Zero-Trust Security Mesh",
            tech: "JWT Sessions // HTTP-Only Cookie Gates",
            details: "Cryptographically signed dual-token sessions isolate your administrative portals. Strict validation limits reject structural payload vulnerabilities before they reach the execution stack."
        }
    ];

    return (
        <section className="bg-white py-32 px-6 border-t border-[#d2d2d7]/50">
            <div className="max-w-[1140px] mx-auto space-y-16">

                {/* Section Header */}
                <div className="max-w-2xl space-y-4">
                    <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b]">
                        Architectural Blueprint
                    </span>
                    <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        How systems are constructed.
                    </h2>
                    <p className="text-lg text-[#86868b] font-normal">
                        A look inside the strict multi-tier engineering framework applied to every single custom build.
                    </p>
                </div>

                {/* Interactive Dashboard Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* TAB CHANNELS SELECTOR (4 Columns) */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
                        {architecturalPillars.map((pillar, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-4 px-6 py-5 text-left rounded-2xl transition-all duration-300 border min-w-[240px] lg:min-w-0 flex-shrink-0 cursor-pointer ${activeTab === idx
                                        ? "bg-[#f5f5f7] border-[#d2d2d7] text-[#0071e3]"
                                        : "bg-white border-transparent text-[#86868b] hover:bg-[#f5f5f7]/50"
                                    }`}
                            >
                                <div className={`p-2 rounded-xl transition-colors ${activeTab === idx ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-[#f5f5f7] text-[#86868b]"}`}>
                                    {pillar.icon}
                                </div>
                                <div>
                                    <div className="text-[11px] font-mono tracking-wider uppercase text-[#86868b]">Layer 0{idx + 1}</div>
                                    <div className="text-sm font-semibold text-[#1d1d1f]">{pillar.label}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* DYNAMIC PRESENTATION CONTENT CARD (8 Columns) */}
                    <div className="lg:col-span-8 bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 min-h-[360px] flex flex-col justify-between overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.5, ease: appleEase }}
                                className="space-y-6"
                            >
                                <div>
                                    <span className="text-xs font-mono text-[#0071e3] font-semibold bg-[#0071e3]/5 px-3 py-1 rounded-full">
                                        {architecturalPillars[activeTab].tech}
                                    </span>
                                    <h3 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mt-4">
                                        {architecturalPillars[activeTab].title}
                                    </h3>
                                </div>

                                <p className="text-[17px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                                    {architecturalPillars[activeTab].details}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Static Simulated Code Editor Status Bar */}
                        <div className="mt-12 pt-6 border-t border-[#d2d2d7]/40 flex items-center justify-between text-xs font-mono text-[#86868b]">
                            <span>STATUS: COMPILED_SUCCESSFULLY</span>
                            <span>RAHULSHAKYA // SYSTEM_CORE</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}