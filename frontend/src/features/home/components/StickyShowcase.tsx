"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, Code, Bot, Server } from "lucide-react";

export default function StickyShowcase() {
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const workflows = [
        {
            icon: <Bot className="w-5 h-5 text-[#0071e3]" />,
            tag: "Case Study 01 // Smart Agent Systems",
            title: "LinksToMe Infrastructure Router",
            description: "A centralized multi-tenant digital asset distribution system engineered over isolated relational tables and sub-100ms processing layers.",
            impact: "+240% Engagement"
        },
        {
            icon: <Server className="w-5 h-5 text-[#0071e3]" />,
            title: "ATSmith Intelligent Parser Engine",
            description: "Engineered an asymmetric pipeline handling high-throughput Applicant Tracking System (ATS) matching scores. Built using multi-threaded Node.js cluster processes parsing heavy JSON schemas cleanly.",
            impact: "< 85ms Matching Response"
        },
        {
            icon: <Database className="w-5 h-5 text-[#0071e3]" />,
            title: "High-Volume Ledger Scaling",
            description: "Normalized relational database tables with explicit indexing tracking over 10M live rows. Configured custom pooled connection layers protecting read pipelines against concurrent write spikes.",
            impact: "99.99% Database Uptime"
        }
    ];

    return (
        <section className="bg-white py-32 px-6 border-t border-[#d2d2d7]/50">
            <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">

                {/* LEFT COLUMN: STICKY BRAND BLOCK */}
                <div className="md:w-5/12 h-fit md:sticky md:top-32 space-y-6">
                    <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b] flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-[#0071e3]" /> STUDIO DELIVERABLES
                    </span>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-tight text-[#1d1d1f] leading-[1.1]">
                        Proven platform rollouts.
                    </h2>
                    <p className="text-[17px] leading-relaxed text-[#86868b] font-normal max-w-sm">
                        We don&apos;t talk about theoretical concepts. These are deep architectural metrics captured straight from running deployments.
                    </p>
                    <div className="pt-4">
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-1 text-[#0071e3] hover:underline text-[17px] font-medium group"
                        >
                            Explore entire terminal log
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: STAGGERED SCROLLING CONTENT CARDS */}
                <div className="md:w-7/12 space-y-12">
                    {workflows.map((flow, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-120px" }}
                            transition={{ duration: 0.8, ease: appleEase }}
                            className="bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[32px] p-8 lg:p-10 flex flex-col justify-between min-h-[320px] hover:border-[#0071e3]/30 transition-colors duration-300"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-white border border-[#d2d2d7]/50 rounded-xl shadow-xs">
                                            {flow.icon}
                                        </div>
                                        <span className="text-[11px] font-mono tracking-wider text-[#86868b] uppercase">
                                            {flow.tag || "Core Architecture Module"}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                                        {flow.title}
                                    </h3>
                                    <p className="text-[16px] leading-relaxed text-[#86868b] font-normal">
                                        {flow.description}
                                    </p>
                                </div>
                            </div>

                            {/* Performance Metric Badge Footer */}
                            <div className="mt-8 pt-6 border-t border-[#d2d2d7]/40 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                                    Verified Result
                                </span>
                                <span className="text-sm font-semibold tracking-tight text-white bg-[#1d1d1f] px-4 py-1.5 rounded-full shadow-sm">
                                    {flow.impact}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}