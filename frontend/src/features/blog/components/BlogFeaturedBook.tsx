"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Bookmark } from "lucide-react";

interface Tag {
  id: string;
  name: string;
}

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  volume_label: string;
  read_time_mins: number;
  author_name: string;
  cover_image_url?: string;
  tags: Tag[];
}

export default function BlogFeaturedBook({ post }: { post: BlogPost }) {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="px-6 sm:px-12 max-w-[1140px] mx-auto pb-32">
      <Link href={`/blog/${post.slug}`} className="group block">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: appleEase }}
          className="bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[540px] hover:shadow-xs transition-all duration-500"
        >
          
          {/* LEFT SIDE: EDITORIAL BOOK TEXT GRID (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between items-start bg-white border-r border-[#d2d2d7]/30">
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-between text-xs font-mono text-[#86868b] uppercase tracking-wider">
                <span>{post.volume_label || "VOLUME 01 // FEATURED"}</span>
                <span className="flex items-center gap-1.5 font-semibold text-[#0071e3] bg-[#0071e3]/5 px-2.5 py-0.5 rounded-full">
                  <Bookmark className="w-3 h-3 fill-[#0071e3]" /> Featured Essay
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.02] group-hover:text-[#0071e3] transition-colors duration-300 max-w-[15ch]">
                  {post.title}
                </h2>
                <p className="text-[16px] md:text-lg leading-relaxed text-[#515154] font-normal max-w-xl pt-2">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Read Analytics Footer */}
            <div className="mt-12 pt-6 border-t border-[#f5f5f7] flex items-center justify-between w-full text-xs font-mono text-[#86868b]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.read_time_mins} Min Read</span>
                <span>{post.author_name ? post.author_name.toUpperCase() : "BY RAHUL SHAKYA"}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-[#0071e3] font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Open Chapter <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DESIGN SCENE FRAME IMAGE (5 Columns) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-auto bg-gradient-to-br from-[#e8e8ed] to-[#f5f5f7]">
            <Image
              src={post.cover_image_url || "/images/blog-featured-engine.jpg"}
              alt={post.title}
              fill
              priority
              sizes="(max-w-1024px) 100vw, 500px"
              className="object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-700 mix-blend-multiply"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

        </motion.div>
      </Link>
    </section>
  );
}