import React from "react";

export function Timeline({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative border-l border-[#d2d2d7] ml-4 pl-6 sm:pl-8 space-y-12">
            {children}
        </div>
    );
}

export function TimelineEvent({
    time,
    title,
    children,
}: {
    time: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            {/* Node Dot Indicator */}
            <span className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-3 h-3 rounded-full bg-[#0071e3] border-4 border-[#f5f5f7] ring-1 ring-[#d2d2d7]" />

            <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#0071e3] tracking-wide bg-[#0071e3]/5 px-2.5 py-0.5 rounded-full">
                    {time}
                </span>
                <h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight pt-1">
                    {title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#86868b] font-normal max-w-2xl">
                    {children}
                </p>
            </div>
        </div>
    );
}