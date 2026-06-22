import BlogHero from "@/features/blog/components/BlogHero";
import BlogFeaturedBook from "@/features/blog/components/BlogFeaturedBook";
import BlogGridStream from "@/features/blog/components/BlogGridStream";

export const metadata = {
  title: "The Technical Ledger // Rahul Shakya Publication",
  description: "Deep insights into full-stack execution, autonomous AI agent architecture, and high-uptime production engineering.",
};

export default function BlogPage() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased">
      {/* 1. True White Minimalist Title Stage */}
      <BlogHero />
      
      {/* 2. Premium "Volume 01" Hardcover Featured Article Layout */}
      <BlogFeaturedBook />
      
      {/* 3. Sequential Technical Chapters Directory */}
      <BlogGridStream />
    </div>
  );
}