// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layers, Bot, Cpu, Shield, ArrowRight } from "lucide-react";

// export default function ServicesMatrix() {
//   const [activeTier, setActiveTier] = useState<number>(0);
//   const appleEase = [0.25, 1, 0.5, 1] as const;

//   const operationalTiers = [
//     {
//       icon: <Layers className="w-5 h-5" />,
//       label: "Full-Stack SaaS Ecosystems",
//       summary: "End-to-end multi-tenant application design.",
//       details: "Engineering responsive web layers using Next.js 15 and React 19 server-side models. We structure multi-tenant layouts with complete data isolation, pooled backend data channels, and clean route mapping.",
//       stack: ["Next.js 15", "React 19", "Node.js", "Prisma ORM"]
//     },
//     {
//       icon: <Bot className="w-5 h-5" />,
//       label: "Autonomous AI & RAG Infrastructure",
//       summary: "Integrating localized LLM and vector processing loops.",
//       details: "Building advanced Retrieval-Augmented Generation (RAG) frameworks. We map raw contextual data streams into pgvector databases, enabling fast, sub-200ms intelligent vector queries directly from secure backend pipelines.",
//       stack: ["PostgreSQL", "pgvector", "LangChain", "Vector Indexes"]
//     },
//     {
//       icon: <Cpu className="w-5 h-5" />,
//       label: "Containerized DevOps Orchestration",
//       summary: "Isolated virtual environments built for high-uptime environments.",
//       details: "Packaging complete multi-container stacks using Docker and Docker Compose. Upstream data paths route securely through custom-configured Nginx reverse proxy nodes to prevent raw port scanning vulnerabilities.",
//       stack: ["Docker", "Nginx Proxy", "Linux Scripting", "GitHub Actions"]
//     }
//   ];

//   return (
//     <section className="py-36 px-6 sm:px-12 bg-[#f5f5f7] border-t border-[#d2d2d7]/50 overflow-hidden">
//       <div className="max-w-[1140px] mx-auto space-y-16">
//         <div className="max-w-2xl space-y-4">
//           <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
//             CORE_OFFERINGS
//           </span>
//           <h2 className="text-[clamp(28px,4.2vw,46px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
//             Specialized engineering channels.
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
//           <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
//             {operationalTiers.map((tier, idx) => {
//               const isSelected = activeTier === idx;
//               return (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveTier(idx)}
//                   className={`p-6 text-left rounded-[24px] border transition-all duration-300 flex items-center gap-5 cursor-pointer relative overflow-hidden group ${
//                     isSelected ? "bg-white border-[#d2d2d7] shadow-xs text-[#0071e3]" : "bg-transparent border-transparent text-[#86868b] hover:bg-white/40"
//                   }`}
//                 >
//                   <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-white border border-[#d2d2d7]/50"}`}>
//                     {tier.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">{tier.label}</h3>
//                     <p className="text-xs text-[#86868b] mt-0.5 font-normal">{tier.summary}</p>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           <div className="lg:col-span-7 bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xs min-h-[400px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTier}
//                 initial={{ opacity: 0, scale: 0.99, y: 8 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.99, y: -8 }}
//                 transition={{ duration: 0.45, ease: appleEase }}
//                 className="space-y-8 flex-grow flex flex-col justify-between"
//               >
//                 <p className="text-[16px] leading-relaxed text-[#515154] font-normal">
//                   {operationalTiers[activeTier].details}
//                 </p>
//                 <div className="pt-6 border-t border-[#f5f5f7] flex flex-wrap gap-2">
//                   {operationalTiers[activeTier].stack.map((tech) => (
//                     <span key={tech} className="text-xs font-medium text-[#515154] bg-[#f5f5f7] border border-[#d2d2d7]/50 px-3 py-1 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, BrainCircuit, Film, Blocks, CheckCircle2 } from "lucide-react";

export default function ServicesMatrix() {
  const [activeTier, setActiveTier] = useState<number>(0);
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const studioCapabilities = [
    {
      icon: <Layers className="w-5 h-5" />,
      label: "Full-Stack Software Engineering",
      summary: "End-to-end multi-tenant application design.",
      details: "Our dedicated web developer engineers fast, responsive web systems using Next.js 15 and React 19. We structure custom architectures with absolute data isolation, robust backend processes, and clean modular structures.",
      stack: ["Next.js 15", "React 19", "Node.js / Java", "Prisma ORM"]
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      label: "Data Intelligence & AI Engineering",
      summary: "Custom analytical modeling and AI pipelines.",
      details: "Our data scientist processes complex data payloads into actionable growth systems. We design optimized relational tables, implement vector search databases (pgvector), and deploy secure data-tracking engines to extract clear user metrics.",
      stack: ["PostgreSQL", "pgvector / SQL", "Python / Predictive AI", "Redis Cache"]
    },
    {
      icon: <Film className="w-5 h-5" />,
      label: "Cinematic Media & Growth Motion",
      summary: "High-retention video production and brand loops.",
      details: "Our expert video editor crafts high-end technical stories, crisp SaaS product demonstrations, and engaging social media creative systems. We match pristine visual assets with your technical product to drive maximum acquisition loops.",
      stack: ["SaaS Product Demos", "Brand Motion Design", "High-Retention Loops", "Short-Form Assets"]
    }
  ];

  return (
    <section className="py-36 px-6 sm:px-12 bg-[#f5f5f7] border-t border-[#d2d2d7]/50 overflow-hidden">
      <div className="max-w-[1140px] mx-auto space-y-16">
        
        {/* Apple Style Section Title Header */}
        <div className="max-w-2xl space-y-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono flex items-center gap-2">
            <Blocks className="w-4 h-4 text-[#0071e3]" /> COMPREHENSIVE_CAPABILITIES
          </span>
          <h2 className="text-[clamp(28px,4.2vw,46px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            Specialized engineering channels. <br />
            Aligned for unified execution.
          </h2>
        </div>

        {/* 3:9 Layout Grid Interaction Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT TRIGGER TIER BUTTONS */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {studioCapabilities.map((tier, idx) => {
              const isSelected = activeTier === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTier(idx)}
                  className={`p-6 text-left rounded-[24px] border transition-all duration-300 flex items-center gap-5 cursor-pointer relative overflow-hidden group ${
                    isSelected ? "bg-white border-[#d2d2d7] shadow-xs text-[#0071e3]" : "bg-transparent border-transparent text-[#86868b] hover:bg-white/40"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-white border border-[#d2d2d7]/50"}`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors">{tier.label}</h3>
                    <p className="text-xs text-[#86868b] mt-0.5 font-normal">{tier.summary}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CINEMATIC SPEC VIEWBOARD CARD */}
          <div className="lg:col-span-7 bg-white border border-[#d2d2d7]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xs min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                transition={{ duration: 0.45, ease: appleEase }}
                className="space-y-8 flex-grow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0071e3]/5 text-[#0071e3] text-xs font-semibold rounded-full font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3]" />
                    VERIFIED_STUDIO_DELIVERABLE
                  </div>
                  <p className="text-[16px] leading-relaxed text-[#515154] font-normal">
                    {studioCapabilities[activeTier].details}
                  </p>
                </div>

                {/* Sub-Badges Matrix Arrays */}
                <div className="pt-6 border-t border-[#f5f5f7] flex flex-wrap gap-2">
                  {studioCapabilities[activeTier].stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-[#515154] bg-[#f5f5f7] border border-[#d2d2d7]/50 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}