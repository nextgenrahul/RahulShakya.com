import {
    Hero,
    FeatureGrid,
    StickyShowcase,
    SystemTeardown,
    InfrastructureSpec,
    Testimonials,
} from "@/features/home";

export default function Home() {
    return (
        <>
            <Hero />
            <FeatureGrid />
            <StickyShowcase />
            <SystemTeardown />
            <Testimonials />
            <InfrastructureSpec />
        </>
    );
}
