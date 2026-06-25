import {
    Hero,
    FeatureGrid,
    StickyShowcase,
    SystemTeardown,
    InfrastructureSpec,
    Testimonials,
} from "@/features/home";

export const metadata = {
    title: "Rahul Shakya Studio // Hardened Systems Architecture",
    description: "Transforming ambitious concepts into scalable full-stack applications, intelligent data models, and high-retention cinematic media.",
};

export default function Home() {
    return (
        <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased">
            {/* 1. The Collective Stage Hero Banner */}
            <Hero />

            {/* 2. Three Core Disciplines Section Grid */}
            <FeatureGrid />

            {/* 3. Flagship Platform Case Studies Segment */}
            <StickyShowcase />

            {/* 4. Infrastructure Structural Architecture Panel */}
            <SystemTeardown />

            {/* 5. Verified Founder Validation Logs */}
            <Testimonials />

            {/* 6. Hardware-Style Performance SLA Grid */}
            <InfrastructureSpec />
        </div>
    );
}