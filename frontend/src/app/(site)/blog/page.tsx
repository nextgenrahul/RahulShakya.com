import BlogHero from "@/features/blog/components/BlogHero";
import BlogFeaturedBook from "@/features/blog/components/BlogFeaturedBook";
import BlogGridStream from "@/features/blog/components/BlogGridStream";

export const metadata = {
  title: "The Technical Ledger // Rahul Shakya Studio",
  description: "Deep insights into full-stack execution, autonomous AI agent architecture, and high-uptime production engineering.",
};

// Server-side entry fetch matching pure asyncpg FastAPI API parameters
// Cleaned up syntax glitches and updated target host vectors
async function getBlogData() {
  try {
    // We swap 'localhost:8000' for the internal docker service identifier 'rahulshakya-api:8000'
    const listRes = await fetch("http://rahulshakya-api:8000/api/v1/blog?page=1&per_page=10", {
      next: { revalidate: 60 },
    });
    
    // Fixed syntax error here: removed the duplicate opening bracket balance token
    const featuredRes = await fetch("http://rahulshakya-api:8000/api/v1/blog/featured", {
      next: { revalidate: 60 },
    });

    const listPayload = await listRes.json();
    const featuredPayload = await featuredRes.json();

    return {
      posts: listPayload.success ? listPayload.data : [],
      featuredPost: featuredPayload.success ? featuredPayload.data : null,
    };
  } catch (error) {
    console.error("FastAPI Connection Fault:", error);
    return { posts: [], featuredPost: null };
  }
}

export default async function BlogPage() {
  const { posts, featuredPost } = await getBlogData();

  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased">
      {/* 1. Clear Typography Headline Billboard */}
      <BlogHero />
      
      {/* 2. Premium Open Book Asymmetric Feature Slot */}
      {featuredPost && <BlogFeaturedBook post={featuredPost} />}
      
      {/* 3. High-Signal Chronological Archive Stream */}
      <BlogGridStream posts={posts} />
    </div>
  );
}