"use client";

import { motion } from "framer-motion";

export default function AboutPrinciples() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const corePrinciples = [
    {
      number: "01",
      title: "Intuition Before Syntax",
      description: "Code syntax is fleeting, but structural intuition is permanent. Every codebase is built with a clear architectural mental model first, ensuring the system can scale or shift modules smoothly without brittle breaking points."
    },
    {
      number: "02",
      title: "Treat Bugs as Structural Opportunities",
      description: "Errors are not random inconveniences; they are telemetry signals showing structural gaps. Every bug encountered is handled with structured tracing to reinforce edge-case tracking parameters permanently."
    },
    {
      number: "03",
      title: "High-Signal, Zero Filler Execution",
      description: "Reject complex technical bloat. Whether designing API endpoints or caching database pools, the implementation prioritizes high engineering clarity and direct code readability over confusing over-engineering."
    }
  ];

  return (
    <section className="bg-white py-36 px-6 sm:px-12 max-w-[1140px] mx-auto border-t border-[#d2d2d7]/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Anchor Label */}
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            EXECUTION_MINDSET
          </h2>
        </div>

        {/* Right Flowing Typographic Pillars */}
        <div className="lg:col-span-8 space-y-24">
          {corePrinciples.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: appleEase, delay: idx * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start group"
            >
              {/* Giant Serif Numeric Marker */}
              <div className="sm:col-span-2 text-4xl sm:text-5xl font-light text-[#d2d2d7] font-sans group-hover:text-[#0071e3] transition-colors duration-300 leading-none">
                {principle.number}
              </div>
              
              {/* Text Pillars */}
              <div className="sm:col-span-10 space-y-3">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
                  {principle.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}