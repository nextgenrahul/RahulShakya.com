import AboutHero from "@/features/about/components/AboutHero";
import AboutMilestones from "@/features/about/components/AboutMilestones";
import AboutPrinciples from "@/features/about/components/AboutPrinciples";

export const metadata = {
  title: "About Rahul Shakya | Architectural Systems Operator",
  description: "The technical trajectory, background execution layers, and core philosophy of Rahul Shakya.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-24 selection:bg-[#0071e3]/10 antialiased">
      <AboutHero />
      
      <AboutMilestones />

      <AboutPrinciples />
    </main>
  );
}
