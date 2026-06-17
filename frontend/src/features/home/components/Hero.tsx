"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    const techTags = [
        "Next.js 15",
        "React 19",
        "FastAPI",
        "Python",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "LLM Architecture",
    ];

    // Apple's signature fluid animation easing curve (Spring-mimicking bezier)
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: appleEase, delay },
        }),
    };

    return (
        <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3]/20">
            {/* ── PREMIUM WHITE HERO (Apple.com Main Stage) ── */}
            <section className="relative min-h-svh flex flex-col items-center justify-center text-center px-6 pt-22.5 pb-24 bg-white overflow-hidden">

                {/* Subtle, ambient pure-light overhead depth overlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(0,113,227,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10 max-w-[840px] w-full flex flex-col items-center">

                    {/* Apple-Style Status Pill */}
                    <motion.div
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/50 text-[13px] font-medium tracking-tight text-[#1d1d1f] mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#0071e3] fill-[#0071e3]/10" />
                        Available for Elite Product Engineering
                    </motion.div>

                    {/* Core Editorial Headline */}
                    <motion.h1
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="text-[clamp(42px,8vw,84px)] font-semibold tracking-tight leading-[1.05] text-[#1d1d1f]"
                    >
                        Full-Stack Developer.
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] via-[#42a5f5] to-[#0071e3] bg-[size:200%_auto] animate-[shimmer_5s_linear_infinite] font-bold">
                            AI Systems Architect.
                        </span>
                    </motion.h1>

                    {/* Subheadline (Clean, punchy, single-paragraph delivery) */}
                    <motion.p
                        custom={0.35}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="mt-7 text-[clamp(19px,2.4vw,22px)] font-normal leading-relaxed text-[#86868b] max-w-[620px]"
                    >
                        Engineering blazing fast, containerized web ecosystems and deep intelligent agents tailored for enterprise scale. From architecture to production.
                    </motion.p>

                    {/* Clean, Non-Boastful Authority Metrics */}
                    <motion.div
                        custom={0.45}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="flex items-center justify-center mt-12 w-full max-w-md border-y border-[#d2d2d7]/40 py-5"
                    >
                        <div className="flex-1 text-center border-r border-[#d2d2d7]/40">
                            <div className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-none">3+</div>
                            <div className="text-[12px] text-[#86868b] mt-1.5 font-medium tracking-tight">AI Engines Shipped</div>
                        </div>
                        <div className="flex-1 text-center border-r border-[#d2d2d7]/40">
                            <div className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-none">5+</div>
                            <div className="text-[12px] text-[#86868b] mt-1.5 font-medium tracking-tight">Core Frameworks</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-none">100%</div>
                            <div className="text-[12px] text-[#86868b] mt-1.5 font-medium tracking-tight">Production SLA</div>
                        </div>
                    </motion.div>

                    {/* Premium Call to Actions */}
                    <motion.div
                        custom={0.55}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 w-full sm:w-auto"
                    >
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center gap-1 group px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full tracking-tight transition-all duration-200 transform hover:scale-[1.01] shadow-sm w-full sm:w-auto"
                        >
                            Review Case Studies
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center text-[#0071e3] hover:underline text-[17px] font-normal tracking-tight gap-0.5 group w-full sm:w-auto py-2"
                        >
                            Initiate Project Brief
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </motion.div>

                    {/* Minimalist Tech Strip */}
                    <motion.div
                        custom={0.65}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                        className="mt-16 w-full"
                    >
                        <div className="text-[11px] tracking-wider font-semibold uppercase text-[#86868b] mb-4">Ecosystem Standarounds</div>
                        <div className="flex items-center justify-center flex-wrap gap-2 max-w-lg mx-auto">
                            {techTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3.5 py-1.5 text-xs font-medium text-[#515154] bg-[#f5f5f7] border border-[#d2d2d7]/60 rounded-full tracking-tight transition-all duration-200 hover:bg-white hover:border-[#0071e3] hover:text-[#0071e3] cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Clean Apple Scroll Cue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    onClick={() => document.getElementById("showcase-grid")?.scrollIntoView({ behavior: "smooth" })}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group"
                >
                    <div className="w-[20px] h-[30px] border border-[#d2d2d7] rounded-full flex justify-center pt-1.5 bg-[#f5f5f7]/50 backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-0.5 h-1.5 bg-[#86868b] rounded-full"
                        />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#86868b] group-hover:text-[#0071e3] transition-colors">
                        Explore
                    </span>
                </motion.div>
            </section>

            {/* ── HIGH-CONTRAST BEYOND HERO SECTION (Apple Product Context Split) ── */}
            <section id="showcase-grid" className="bg-[#f5f5f7] border-t border-[#d2d2d7]/50 py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b]">Engineering Execution</div>
                    <h2 className="text-[clamp(30px,5vw,52px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        Designed to perform. Built to last.
                    </h2>
                    <p className="text-lg text-[#86868b] leading-relaxed font-normal max-w-xl mx-auto">
                        We reject brittle code. Every application is containerized with Docker, validated with TypeScript type guards, and optimized for sub-100ms processing loops.
                    </p>
                </div>
            </section>
        </div>
    );
}