import {
    Hero,
    Services,
    Portfolio,
    Testimonials,
    Faq,
    Cta,
} from "@/features/home";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Faq />
            <Cta />
        </>
    );
}
