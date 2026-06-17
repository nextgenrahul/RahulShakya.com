import Link from "next/link";
import { Mail } from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]/60 text-[#86868b] px-6 py-16 font-sans">
            <div className="max-w-[1140px] mx-auto space-y-8">

                {/* Top Notes Disclaimer Rule — Apple Signature Look */}
                <div className="text-[11px] leading-relaxed pb-8 border-b border-[#d2d2d7]/50 max-w-4xl font-normal">
                    1. Latency metrics based on synthetic test scripts run across optimized localized testing clusters. Performance may shift slightly depending on routing distance data variations. <br />
                    2. Production service-level targets are tracked inside active Docker containers via runtime telemetry hooks.
                </div>

                {/* Structural Content Map Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
                    <div className="space-y-3">
                        <h5 className="text-[12px] font-semibold text-[#1d1d1f] tracking-tight">Identity Hub</h5>
                        <ul className="space-y-2 text-xs font-normal hover:text-[#1d1d1f]">
                            <li><a href="#about" className="hover:underline">About Rahul</a></li>
                            <li><a href="#case-studies" className="hover:underline">Case Archives</a></li>
                            <li><a href="#blog" className="hover:underline">Technical Writing</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-[12px] font-semibold text-[#1d1d1f] tracking-tight">Capabilities</h5>
                        <ul className="space-y-2 text-xs font-normal">
                            <li><a href="#services" className="hover:underline">Full-Stack SaaS</a></li>
                            <li><a href="#services" className="hover:underline">AI Embeddings / RAG</a></li>
                            <li><a href="#services" className="hover:underline">Custom Engines</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-[12px] font-semibold text-[#1d1d1f] tracking-tight">Infrastructure</h5>
                        <ul className="space-y-2 text-xs font-normal">
                            <li><a href="#infra" className="hover:underline">Docker Containerization</a></li>
                            <li><a href="#infra" className="hover:underline">Nginx Proxy Layer</a></li>
                            <li><a href="#infra" className="hover:underline">PostgreSQL Engine</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-[12px] font-semibold text-[#1d1d1f] tracking-tight">Connect Channels</h5>
                        <ul className="space-y-2 text-xs font-normal text-[#0071e3]">
                            <li><a href="#contact" className="hover:underline">Initiate Project Brief ↗</a></li>
                            <li><a href="https://instagram.com/rahulshakya.fintech" className="hover:underline">Instagram Profile ↗</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Metadata Baseline Line */}
                <div className="pt-8 border-t border-[#d2d2d7]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal">
                    <div>Copyright © 2026 Rahul Shakya. All architecture configurations active.</div>
                    <div className="flex gap-4 font-mono text-[11px]">
                        <span>RAHULSHAKYA</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}