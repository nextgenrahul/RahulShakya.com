import {
    Hero,
    FeatureGrid,
    StickyShowcase,
    SystemTeardown,
    Services,
    Portfolio,
    Testimonials,
    Faq,
    Cta,
} from "@/features/home";

export default function Home() {
    return (
        <>
            <Hero />
            <FeatureGrid />
            <StickyShowcase />
            <SystemTeardown />
            <Services />
            <Portfolio />
            <Testimonials />
            <Faq />
            <Cta />
        </>
    );
}
