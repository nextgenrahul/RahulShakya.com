"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServicesSpecs() {
  const specs = [
    { title: "Target API Latency", val: "< 50ms" },
    { title: "Lighthouse Vitals", val: "100/100" },
    { title: "Database Architecture", val: "Relational + Vector" },
    { title: "Container Deployment", val: "Multi-Region Docker" }
  ];

  return (
    <section className="bg-[#f5f5f7] py-32 px-6 sm:px-12 border-t border-[#d2d2d7]/50">
      <div className="max-w-[1140px] mx-auto space-y-16">
        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            PERFORMANCE_BENCHMARKS
        </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">Designed for extreme processing.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-[#d2d2d7]/40 shadow-xs space-y-2"
            >
              <div className="text-xs font-mono font-bold text-[#86868b] uppercase">{spec.title}</div>
              <div className="text-2xl font-semibold text-[#0071e3] tracking-tight">{spec.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}