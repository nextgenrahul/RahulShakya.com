"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, Star } from "lucide-react";

export default function Testimonials() {
    const appleEase = [0.25, 1, 0.5, 1] as const;

    const reviews = [
        {
            quote: "Rahul transformed our entire resource allocation pipeline. The autonomous agent architecture he built eliminated manual matching processing errors completely, dropping our cycle latency down below 200ms.",
            author: "Marcus Vance",
            role: "VP of Engineering, NexaCorp Systems",
            metric: "99.9% Automation Rate"
        },
        {
            quote: "The clean architecture code structure Rahul delivered made scaling our multi-tenant SaaS straightforward. The Docker setup works identically across every staging cloud node we deploy.",
            author: "Elena Rostova",
            role: "CTO, CloudScale Infrastructure",
            metric: "4x Faster Deployments"
        }
    ];

    return (
        <section className="bg-[#f5f5f7] py-32 px-6 border-t border-[#d2d2d7]/50">
            <div className="max-w-[1140px] mx-auto space-y-16">

                {/* Apple-Style Section Header */}
                <div className="max-w-2xl space-y-4">
                    <span className="text-[12px] font-semibold tracking-wider uppercase text-[#86868b] flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-[#0071e3]" /> Strategic Reviews
                    </span>
                    <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
                        Validated by engineering leaders.
                    </h2>
                    <p className="text-lg text-[#86868b] font-normal">
                        Hear from technical executives who have scaled their platforms using our architectural frameworks.
                    </p>
                </div>

                {/* Premium Testimonials Stack Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: appleEase, delay: index * 0.1 }}
                            className="bg-white border border-[#d2d2d7]/40 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group min-h-[340px]"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1 text-[#0071e3]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#0071e3]" />
                                        ))}
                                    </div>
                                    <Quote className="w-8 h-8 text-[#d2d2d7]/40 group-hover:text-[#0071e3]/10 transition-colors" />
                                </div>

                                <p className="text-[17px] leading-relaxed text-[#1d1d1f] font-normal italic">
                                    {review.quote}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#f5f5f7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <div className="text-sm font-semibold text-[#1d1d1f]">{review.author}</div>
                                    <div className="text-xs text-[#86868b]">{review.role}</div>
                                </div>
                                <div className="text-xs font-mono font-semibold text-[#0071e3] bg-[#0071e3]/5 px-3 py-1 rounded-full w-fit">
                                    {review.metric}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}