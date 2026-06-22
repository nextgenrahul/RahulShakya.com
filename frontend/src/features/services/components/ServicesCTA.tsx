"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-40 px-6 text-center border-t border-[#d2d2d7]/50">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
          SYSTEMS_INITIATION
        </span>
        <h2 className="text-[clamp(32px,5vw,60px)] font-semibold tracking-tighter text-[#1d1d1f] leading-none">
          Let&#39;s clear the technical bottlenecks.
        </h2>
        <p className="text-lg text-[#86868b] max-w-lg mx-auto font-normal">
          Connect with Rahul to initialize a high-performance system architecture blueprint tailored directly for your platform.
        </p>
        <div className="pt-4">
          <a
            href="mailto:rahul@example.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full tracking-tight transition-all duration-200 transform hover:scale-[1.01] shadow-xs group"
          >
            Initiate Architecture Brief
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}