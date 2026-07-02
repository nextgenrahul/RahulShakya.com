"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactHero() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const workflows = [
    { step: "01", name: "Discovery", detail: "Scoping core business objectives." },
    { step: "02", name: "Architecture", detail: "Mapping data & engine models." },
    { step: "03", name: "Development", detail: "Iterating typed production blocks." },
    { step: "04", name: "Launch", detail: "Containerized edge deployment." }
  ];

  return (
    <section className="pt-40 pb-20 px-6 sm:px-12 max-w-[1200px] mx-auto border-b border-[#d2d2d7]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div className="lg:col-span-3 space-y-6 pt-2">
          <div className="space-y-3">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#86868b]">
              STUDIO_CONTACT
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0071e3]/5 border border-[#0071e3]/10 rounded-full text-[11px] font-mono font-bold text-[#0071e3]">
              AVAILABLE FOR Q3 2026
            </div>
          </div>

          <div className="pt-4 border-t border-[#f5f5f7] space-y-1">
            <div className="text-xs font-semibold text-[#1d1d1f] tracking-tight">
              Startups • SaaS • AI Products
            </div>
            <div className="text-[12px] text-[#86868b] font-normal leading-normal">
              Trusted by founders to transform ambitious ideas into hardened, scalable software platforms.
            </div>
          </div>
        </div>

        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Context Engine Segment (7 Columns) */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-5">
              <h1 className="text-[clamp(38px,6vw,68px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[0.95] max-w-[12ch]">
                Transform an idea into production software.
              </h1>
              <p className="text-[17px] md:text-[18px] text-[#86868b] leading-relaxed font-normal max-w-xl">
                We help founders and growing businesses build fast, secure digital systems without the complexity or friction of managing development pipelines themselves. Let&#39;s start the conversation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#brief-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1d1d1f] hover:bg-black text-white text-[14px] font-medium rounded-xl tracking-tight transition-all group cursor-pointer shadow-xs"
              >
                Start Project Brief
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {/* <a
                href="https://cal.com/rahulshakya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] text-[14px] font-medium rounded-xl tracking-tight transition-all cursor-pointer"
              >
                Book Discovery Call
              </a> */}
            </div>

            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 pt-6 border-t border-[#f5f5f7] text-[12px] text-[#86868b] font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-500" /> Response within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Mutual NDA available
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Transparent flat-pricing
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-500" /> Clear project metrics
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[28px] p-6 space-y-4 shadow-2xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_top_right,rgba(0,113,227,0.03),transparent_70%)] pointer-events-none" />
            
            <div className="text-[10px] font-mono text-[#86868b] tracking-wider pb-2 border-b border-[#d2d2d7]/30 uppercase">
              STUDIO_SYSTEM_PIPELINE 
            </div>

            <div className="space-y-3.5">
              {workflows.map((flow) => (
                <div key={flow.step} className="flex items-start gap-4 p-2.5 rounded-xl bg-white/60 border border-[#d2d2d7]/20">
                  <div className="text-xs font-mono font-bold text-[#0071e3] bg-[#0071e3]/5 px-2 py-0.5 rounded-md">
                    {flow.step}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1d1d1f] tracking-tight">{flow.name}</h4>
                    <p className="text-[11px] text-[#86868b] font-normal mt-0.5">{flow.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}