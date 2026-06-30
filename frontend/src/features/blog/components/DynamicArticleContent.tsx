"use client";

import { Clock, ArrowLeft, Terminal, Bookmark } from "lucide-react";
import Link from "next/link";

interface Tag {
    id: string;
    name: string;
    slug: string;
}

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    volume_label: string;
    read_time_mins: number;
    author_name: string;
    tags: Tag[];
}

export default function DynamicArticleContent({ post }: { post: BlogPost }) {
    return (
        <article className="pt-40 px-6 max-w-[740px] mx-auto space-y-12">

            {/* Back Navigation Thread */}
            <div className="pb-4">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] hover:underline group font-sans"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    Back to The Ledger
                </Link>
            </div>

            {/* Article Meta Header */}
            <div className="space-y-4 border-b border-[#d2d2d7]/50 pb-8">
                <div className="flex items-center justify-between text-xs font-mono text-[#86868b] uppercase tracking-wider">
                    <span>{post.volume_label || "VOLUME 01 // ARCHIVE"}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.read_time_mins} Min Read</span>
                </div>

                <h1 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.08]">
                    {post.title}
                </h1>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#86868b]">
                    <span>BY {post.author_name.toUpperCase()}</span>

                    {/* Dynamic Render Loop for custom post tags */}
                    <div className="flex gap-2">
                        {post.tags?.map((tag) => (
                            <span key={tag.id} className="bg-[#f5f5f7] text-[#515154] px-2 py-0.5 rounded-md text-[10px] font-semibold">
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ARTICLE BODY TEXT CONTENT */}
            {/* Renders line breaks gracefully. In production, use next-mdx-remote or marked for Markdown compiling */}
            <div className="text-[17px] leading-[1.65] text-[#333336] font-normal space-y-8 tracking-normal font-sans whitespace-pre-line">
                {post.content}
            </div>

        </article>
    );
}