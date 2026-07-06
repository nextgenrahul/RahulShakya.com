"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";

interface Tag {
  id: string;
  name: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  volume_label: string;
  read_time_mins: number;
  cover_image_url?: string;
  tags: Tag[];
}

export default function BlogGridStream({ posts }: { posts: BlogPost[] }) {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <section className="bg-[#f5f5f7] py-32 px-6 sm:px-12 border-t border-[#d2d2d7]/50">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-36">
          <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">
            ARCHIVED_CHAPTERS
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-16">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: appleEase }}
            >
              <Link href={`/blog/${post.slug}`} className="group grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center pb-12 border-b border-[#d2d2d7]/60 block">
                
                <div className="sm:col-span-4 aspect-[16/10] bg-white rounded-2xl border border-[#d2d2d7]/40 relative overflow-hidden bg-gradient-to-br from-[#e8e8ed] to-white">
                  <Image
                    src={post.cover_image_url || "/images/blog-fallback.jpg"}
                    alt={post.title}
                    fill
                    sizes="(max-w-768px) 100vw, 250px"
                    className="object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-500 mix-blend-multiply"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="sm:col-span-8 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#808083]">
                    <span>{post.volume_label || `CHAPTER 0${idx + 1}`}</span>
                    <span className="flex items-center gap-1 font-normal"><Clock className="w-3.5 h-3.5" /> {post.read_time_mins} Min Read</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors leading-[1.1] flex items-start gap-1 justify-between">
                    <span className="max-w-[90%]">{post.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </h3>
                  
                  <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-xl">
                    {post.excerpt}
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