"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Bookmark } from "lucide-react";

export default function BlogFeaturedBook() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="px-6 sm:px-12 max-w-[1140px] mx-auto pb-32">
      <Link href="/blog/autonomous-agent-architecture" className="group block">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: appleEase }}
          className="bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[540px] hover:shadow-xs transition-all duration-500"
        >
          
          {/* LEFT SIDE: BOOK MANUSCRIPT TEXT PAGE (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between items-start bg-white border-r border-[#d2d2d7]/30">
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-between text-xs font-mono text-[#86868b] uppercase tracking-wider">
                <span>VOLUME 01 // CHAPTER 04</span>
                <span className="flex items-center gap-1.5 font-semibold text-[#0071e3] bg-[#0071e3]/5 px-2.5 py-0.5 rounded-full">
                  <Bookmark className="w-3 h-3 fill-[#0071e3]" /> Featured Essay
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight group-hover:text-[#0071e3] transition-colors duration-300">
                  Architecting Production Autonomous Agent Layers inside Next.js Monorepos
                </h2>
                <p className="text-[16px] md:text-lg leading-relaxed text-[#515154] font-normal max-w-xl pt-2">
                  An exhaustive breakdown of orchestrating zero-latency vector embedding streams using PostgreSQL pgvector. Discover how we isolate background task logic to bypass execution thread bottlenecks entirely.
                </p>
              </div>
            </div>

            {/* Meta Read Footer */}
            <div className="mt-12 pt-6 border-t border-[#f5f5f7] flex items-center justify-between w-full text-xs font-mono text-[#86868b]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 14 Min Read</span>
                <span>BY RAHUL SHAKYA</span>
              </div>
              <div className="inline-flex items-center gap-1 text-[#0071e3] font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Open Chapter <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FULL IMAGE STAGE (5 Columns) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-auto bg-gradient-to-br from-[#e8e8ed] to-[#f5f5f7]">
            <Image
              src="/images/blog-featured-engine.jpg"
              alt="System Architecture Rendering"
              fill
              priority
              sizes="(max-w-1024px) 100vw, 500px"
              className="object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-700 mix-blend-multiply"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
          </div>

        </motion.div>
      </Link>
    </section>
  );
}