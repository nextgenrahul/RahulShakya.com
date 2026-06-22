"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";

export default function BlogGridStream() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  const technicalChapters = [
    {
      chapter: "CHAPTER 03",
      title: "Hardening JWT Session States with Dual-Token Cookie Guards",
      exerpt: "Eliminating Cross-Site Scripting (XSS) application variables by processing microservice validation layers straight through strict browser storage barriers.",
      readTime: "9 Min Read",
      imgSrc: "/images/blog-security.jpg"
    },
    {
      chapter: "CHAPTER 02",
      title: "Bypassing PostgreSQL Connection Bottlenecks with In-Memory Redis Caching",
      exerpt: "A practical benchmarking log tracking connection pooling optimization models. How we offload heavy query strings to achieve consistent sub-45ms responses.",
      readTime: "11 Min Read",
      imgSrc: "/images/blog-database.jpg"
    },
    {
      chapter: "CHAPTER 01",
      title: "The Logic Paradigm: Transitioning from BCA Foundations to Production Engineering",
      exerpt: "An editorial deep-dive exploring memory complexity bounds, object-oriented parameters, and structuring clean backend architecture workflows.",
      readTime: "7 Min Read",
      imgSrc: "/images/blog-academic.jpg"
    }
  ];

  return (
    <section className="bg-[#f5f5f7] py-32 px-6 sm:px-12 border-t border-[#d2d2d7]/50">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Floating Stream Anchor */}
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            ARCHIVED_CHAPTERS
          </h2>
        </div>

        {/* Right Flowing Stream Column */}
        <div className="lg:col-span-8 space-y-16">
          {technicalChapters.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: appleEase }}
            >
              <Link href={`/blog/chapter-${idx + 1}`} className="group grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center pb-12 border-b border-[#d2d2d7]/60 block">
                
                {/* Visual Thumbnail Segment (4 Columns) */}
                <div className="sm:col-span-4 aspect-[16/10] bg-white rounded-2xl border border-[#d2d2d7]/40 relative overflow-hidden bg-gradient-to-br from-[#e8e8ed] to-white">
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    fill
                    sizes="(max-w-768px) 100vw, 250px"
                    className="object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-500 mix-blend-multiply"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Content Details Segment (8 Columns) */}
                <div className="sm:col-span-8 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#808083]">
                    <span>{post.chapter}</span>
                    <span className="flex items-center gap-1 font-normal"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors leading-tight flex items-start gap-1 justify-between">
                    <span className="max-w-[90%]">{post.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </h3>
                  
                  <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                    {post.exerpt}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}