"use client";

import { motion } from "framer-motion";
import { Timeline, TimelineEvent } from "@/app/(site)/components/ui/Timeline";

export default function AboutMilestones() {
  return (
    <section className="bg-[#f5f5f7] py-32 px-6 border-t border-[#d2d2d7]/50">
      <div className="max-w-[840px] mx-auto space-y-16">
        
        {/* Component Header */}
        <div className="space-y-4">
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b]">
            System Timeline
          </span>
          <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            The Trajectory of Execution.
          </h2>
        </div>

        {/* Chronological Stack */}
        <Timeline>
          {/* Reason: Naturally traces technical lineage and key system evolution milestones over multi-year vectors */}
          <TimelineEvent time="2026" title="AI Engineering Frameworks & Agency Foundation">
            Launched **rahulshakya.com** alongside internal projects like **LinksToMe** and **ATSmith**. Shifted development entirely toward integrating localized large language models, sparse vector indexes (pgvector), and hardened multi-tenant SaaS API routing meshes.
          </TimelineEvent>
          
          <TimelineEvent time="2025" title="BCA Graduation & Core Full-Stack Deep Dive">
            Completed a Bachelor of Computer Applications degree, cementing deep logic parameters. Implemented production instances across the MERN stack, Java ecosystems, and container pipelines using Docker and Nginx reverse proxy controllers.
          </TimelineEvent>
          
          <TimelineEvent time="2024" title="System Algorithms & Architectural Studies">
            Immersed inside Data Structures, Object-Oriented Software Design, and system communication models. Engineered fast command line wrappers, tracking memory limits and algorithmic space complexities.
          </TimelineEvent>
        </Timeline>

      </div>
    </section>
  );
}