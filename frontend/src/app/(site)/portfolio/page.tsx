import PortfolioHero from "@/features/portfolio/components/PortfolioHero";
import PortfolioSkills from "@/features/portfolio/components/PortfolioSkills";
import PortfolioShowcase from "@/features/portfolio/components/PortfolioShowcase";
import PortfolioHistory from "@/features/portfolio/components/PortfolioHistory";
import PortfolioContact from "@/features/portfolio/components/PortfolioContact";

export const metadata = {
  title: "Portfolio // Rahul Shakya Archive",
  description: "Production system blueprints, structural execution metrics, and full-stack software deployments.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased">
      {/* 1. Stage Billboard with Image & Global Specs */}
      <PortfolioHero />
      
      {/* 2. Interactive Technical Capability Grid */}
      <PortfolioSkills />
      
      {/* 3. Deep Architectural Project Logs */}
      <PortfolioShowcase />
      
      {/* 4. Experience Chronicles */}
      <PortfolioHistory />
      
      {/* 5. Ingestion Request Brief Terminal */}
      <PortfolioContact />
    </div>
  );
}