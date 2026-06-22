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
      {/* Section 1: Massive Editorial Header */}
      <ServicesHero />
      
      {/* Section 2: Interactive Layered Capabilities (Soft Gray Grid) */}
      <ServicesMatrix />
      
      {/* Section 3: The Execution Lifecycle & Deliverables */}
      <ServicesSLA />
      
      {/* Section 4: Performance Specification Metrics */}
      <ServicesSpecs />
      
      {/* Section 5: High-End Interactive Closing Intake Block */}
      <ServicesCTA />
    </div>
  );
}