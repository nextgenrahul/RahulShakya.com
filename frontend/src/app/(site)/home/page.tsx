import {
    Hero,
    FeatureGrid,
    StickyShowcase,
    SystemTeardown,
    InfiniteMarquee,
    // Services,
    // Portfolio,
    Testimonials,
    // Faq,
    // Cta,
} from "@/features/home";

export default function Home() {
    return (
        <>
            <Hero />
            <FeatureGrid />
            <StickyShowcase />
            <SystemTeardown />
            {/* <InfiniteMarquee /> */}
            <Testimonials />
            {/* <Services />
            <Portfolio />
            <Faq />
            <Cta /> */}
        </>
    );
}
