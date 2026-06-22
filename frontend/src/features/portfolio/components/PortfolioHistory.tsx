"use client";

import { motion } from "framer-motion";

export default function PortfolioHistory() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const chronology = [
    { year: "2026", task: "AI Systems Engineering & Platform Assembly", details: "Launched rahulshakya.com alongside custom projects like LinksToMe and ATSmith. Shifted development entirely toward integrating localized models and hardened backend microservices." },
    { year: "2025", task: "BCA Academic Graduation & Full-Stack Systems Deployment", details: "Completed a Bachelor of Computer Applications (BCA) degree, solidifying logic parameters. Built production instances across the MERN stack and modular routing frameworks." },
    { year: "2024", task: "Data Structures & Relational Database Design", details: "Analyzed spatial complexity variations, algorithmic limitations, and object-oriented models. Configured safe script routines across secure server channels." }
  ];

  return (
    <section className="bg-white py-36 px-6 sm:px-12 border-t border-[#d2d2d7]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-[1140px] mx-auto">
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">TRAJECTORY_LOG</h2>
        </div>
        <div className="lg:col-span-8 space-y-16">
          {chronology.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: appleEase }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start"
            >
              <div className="sm:col-span-3 text-lg font-bold text-[#0071e3] font-mono">[{item.year}]</div>
              <div className="sm:col-span-9 space-y-2">
                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">{item.task}</h3>
                <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-xl">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}