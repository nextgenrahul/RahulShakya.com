import ServicesHero from "@/features/services/components/ServicesHero";
import ServicesMatrix from "@/features/services/components/ServicesMatrix";
import ServicesSLA from "@/features/services/components/ServicesSLA";
import ServicesSpecs from "@/features/services/components/ServicesSpecs";
import ServicesCTA from "@/features/services/components/ServicesCTA";

export const metadata = {
    title: "Services // Hardened Application Systems Architecture",
    description: "Enterprise software scaling, production containerization, and localized AI engine deployment.",
};

export default function ServicesPage() {
    return (
        <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased">
            <ServicesHero />

            <ServicesMatrix />

            <ServicesSLA />

            <ServicesSpecs />

            <ServicesCTA />
        </div>
    );
}