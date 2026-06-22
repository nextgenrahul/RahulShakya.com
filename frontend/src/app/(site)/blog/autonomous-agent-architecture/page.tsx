import ArticleContent from "@/features/blog/components/ArticleContent";

export const metadata = {
  title: "Autonomous Agent Architecture // The Technical Ledger",
  description: "An deep-dive breakdown of orchestrating zero-latency vector embedding streams inside Next.js.",
};

export default function AutonomousAgentArticle() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased pb-32">
      {/* Premium Editorial Reading Article Layout */}
      <ArticleContent />
    </div>
  );
}