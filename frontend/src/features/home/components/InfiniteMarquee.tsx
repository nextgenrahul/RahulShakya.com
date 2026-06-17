"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
    const primaryRow = [
        "DETERMINISTIC ARCHITECTURE",
        "•",
        "SUB-100MS LATENCY TARGETS",
        "•",
        "ZERO TECHNICAL DEBT",
        "•",
        "AUTONOMOUS AGENT INTEGRATION",
        "•",
    ];

    const secondaryRow = [
        "NEXT.JS 15 ENGINE REVEALS",
        "•",
        "DOCKER CONTAINERIZED SHIELDING",
        "•",
        "CLEAN ENTERPRISE CODEBASE",
        "•",
        "99.99% RUNTIME MAXIMIZATION",
        "•",
    ];

    // Infinite looping translation settings
    const loopTransition = (duration: number) => ({
        ease: "linear",
        duration,
        repeat: Infinity,
    });

    return (
        <section className="bg-black py-24 overflow-hidden relative select-none">
            <div className="space-y-6 transform -rotate-1">

                {/* ROW 1: ROLLING LEFT TO RIGHT */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={loopTransition(25)}
                        className="flex items-center gap-8 text-[clamp(32px,6vw,72px)] font-bold tracking-tighter text-white/10 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 uppercase pr-8"
                    >
                        {Array(4).fill(primaryRow).flat().map((word, i) => (
                            <span key={i} className={word === "•" ? "text-[#0071e3]" : ""}>{word}</span>
                        ))}
                    </motion.div>
                </div>

                {/* ROW 2: ROLLING RIGHT TO LEFT */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <motion.div
                        animate={{ x: [-1000, 0] }}
                        transition={loopTransition(30)}
                        className="flex items-center gap-8 text-[clamp(32px,6vw,72px)] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-800 uppercase pr-8"
                    >
                        {Array(4).fill(secondaryRow).flat().map((word, i) => (
                            <span key={i} className={word === "•" ? "text-violet-500" : ""}>{word}</span>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}