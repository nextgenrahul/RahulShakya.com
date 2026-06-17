import {
    Hero,
    FeatureGrid,
    StickyShowcase,
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
            <Services />
            <Portfolio />
            <Testimonials />
            <Faq />
            <Cta />
        </>
    );
}
