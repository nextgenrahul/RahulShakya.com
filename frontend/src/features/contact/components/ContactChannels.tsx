"use client";

import { Mail, Shield, Share2 } from "lucide-react";

export default function ContactChannels() {
    const networks = [
        { label: "DIRECT EMAIL PROTOCOL", channel: "techfuture98127@gmail.com", sub: "For secure encryption communications.", icon: <Mail className="w-4 h-4 text-[#0071e3]" />, href: "mailto:rahul@rahulshakya.com" },
        { 
        label: "SOCIAL HUB DISTRIBUTION", 
        channel: "@rahulshakya.co", 
        sub: "Active framework release notes updates.", 
        icon: <Share2 className="w-4 h-4 text-[#0071e3]" />, 
        href: "https://instagram.com/rahulshakya.fintech" 
        }    ];

    return (
        <section className="bg-white py-24 px-6 sm:px-12 border-t border-[#d2d2d7]/50 max-w-[1140px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                    <h2 className="text-[11px] font-bold tracking-[0.15em] text-[#86868b] uppercase font-mono">ALTERNATE_CHANNELS</h2>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {networks.map((net, i) => (
                        <a href={net.href} target="_blank" rel="noopener noreferrer" key={i} className="space-y-3 block p-6 rounded-2xl bg-[#f5f5f7]/50 border border-[#d2d2d7]/30 hover:border-[#0071e3]/20 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-xl shadow-3xs">{net.icon}</div>
                                <span className="text-[10px] font-mono font-bold text-[#86868b] tracking-wider">{net.label}</span>
                            </div>
                            <div className="text-lg font-semibold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors">{net.channel}</div>
                            <p className="text-xs text-[#86868b] font-normal leading-relaxed">{net.sub}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}