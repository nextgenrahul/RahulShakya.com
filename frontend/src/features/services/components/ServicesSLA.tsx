"use client";

import { motion } from "framer-motion";

export default function ServicesSLA() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const deploymentSteps = [
    { phase: "01", name: "System Mapping", detail: "We detail the entire application footprint—including relational data diagrams, processing loops, and interface layouts—before generating the first commit." },
    { phase: "02", name: "Isolated Engineering", detail: "Developing within typed parameters under zero-trust guidelines. Features build modularly inside independent source directories to allow seamless upgrades." },
    { phase: "03", name: "Cluster Validation", detail: "Before target deployments map live, the software undergoes load-testing inside isolated sandboxes to verify connection pool scaling and routing speeds." }
  ];

  return (
    <section className="bg-white py-36 px-6 sm:px-12 max-w-[1140px] mx-auto border-t border-[#d2d2d7]/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            DELIVERY_LIFECYCLE
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-20">
          {deploymentSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: appleEase, delay: idx * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start group"
            >
              <div className="sm:col-span-2 text-4xl font-light text-[#d2d2d7] group-hover:text-[#0071e3] transition-colors duration-300 leading-none">
                {step.phase}
              </div>
              <div className="sm:col-span-10 space-y-2">
                <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">{step.name}</h3>
                <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-xl">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}