import AboutMonomark from "@/features/about/components/AboutMonomark";
import AboutPhilosophy from "@/features/about/components/AboutPhilosophy";
import AboutPrinciples from "@/features/about/components/AboutPrinciples";
import AboutChronicle from "@/features/about/components/AboutChronicle";

export const metadata = {
  title: "About // Rahul Shakya Studio Trajectory",
  description: "The systemic thesis, execution tracking, and core collective profiling of our engineering studio.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-2 selection:bg-[#0071e3]/10 antialiased">
      {/* Section 1: Massive Editorial Monograph (Studio Team Introduction) */}
      <AboutMonomark />
      
      {/* Section 2: Premium Split Interactive Engine Dashboard (Brings visual depth & IDE terminal) */}
      <AboutPhilosophy />

      {/* Section 3: Asymmetric Philosophy & Working Mindset Pillars (01, 02, 03) */}
      <AboutPrinciples />
      
      {/* Section 4: High-End Asymmetric Timeline Stream Ledger */}
      <AboutChronicle />
    </main>
  );
}