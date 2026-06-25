"use client";

import { motion } from "framer-motion";

export default function AboutChronicle() {
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const logs = [
        {
            period: "2026",
            headline: "AI Engineering & Monorepo Scaling",
            body: "Architected autonomous agent platforms including LinksToMe and ATSmith. Directed project systems away from standard architectures into containerized multi-tenant environments utilizing PostgreSQL vector embeddings."
        },
        {
            period: "2025",
            headline: "Academic Graduation & Core Stack Deep Dives",
            body: "Completed a Bachelor of Computer Applications (BCA) degree, solidifying algorithmic foundations. Transitioned directly into full-scale MERN system development and clean modular routing design schemas."
        },
        {
            period: "2024",
            headline: "Algorithmic Tracking & Memory Optimization",
            body: "Analyzed spatial memory limits and object-oriented architectures. Formulated high-performance script commands and verified system parameters across clean Linux server networks."
        }
    ];

    return (
        <section className="bg-white py-36 px-6 sm:px-12 max-w-[1140px] mx-auto border-t border-[#d2d2d7]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Left Side Static Category Marker */}
                <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
                        CHRONOLOGICAL_LOG
                    </h2>
                </div>

                {/* Clean, Line-Free Log Stream */}
                <div className="lg:col-span-8 space-y-20">
                    {logs.map((log, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: appleEase }}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start"
                        >
                            {/* Timeline Year Indicator */}
                            <div className="sm:col-span-3 text-lg sm:text-xl font-semibold text-[#0071e3] font-mono leading-none">
                                [{log.period}]
                            </div>

                            {/* Detailed Technical Content Block */}
                            <div className="sm:col-span-9 space-y-3">
                                <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
                                    {log.headline}
                                </h3>
                                <p className="text-[16px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                                    {log.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}