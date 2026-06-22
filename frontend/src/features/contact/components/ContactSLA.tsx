"use client";

import { ShieldCheck, Clock, Check } from "lucide-react";

export default function ContactSLA() {
  const compliance = [
    { icon: <Clock className="w-4 h-4 text-emerald-500" />, header: "24-Hour Review Turnaround", note: "Every incoming submission is systematically run through a validation check to map stack sizing targets efficiently." },
    { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, header: "Data Privacy Measures", note: "Submitted request text files remain locked securely inside private database rows and are never broadcast over public data pools." }
  ];

  return (
    <section className="bg-white py-24 px-6 sm:px-12 border-t border-[#d2d2d7]/50 max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">SECURITY_SLA</h2>
        </div>
        <div className="lg:col-span-8 space-y-8">
          {compliance.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="p-1 bg-emerald-500/5 rounded-md mt-1">{item.icon}</div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-[#1d1d1f] tracking-tight">{item.header}</h3>
                <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed font-normal max-w-xl">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}