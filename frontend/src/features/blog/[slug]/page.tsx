import { notFound } from "next/navigation";
import DynamicArticleContent from "@/features/blog/components/DynamicArticleContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    try {
        const res = await fetch(`http://localhost:8000/api/v1/blog/${slug}`);
        const payload = await res.json();
        if (!payload.success || !payload.data) return { title: "Entry Missing" };

        return {
            title: `${payload.data.seo_title || payload.data.title} // The Technical Ledger`,
            description: payload.data.seo_description || payload.data.excerpt,
        };
    } catch (err) {
        return { title: "The Technical Ledger" };
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    const res = await fetch(`http://localhost:8000/api/v1/blog/${slug}`, {
        next: { revalidate: 60 },
    });
    const payload = await res.json();

    if (!payload.success || !payload.data) {
        notFound();
    }

    return (
        <div className="bg-white text-[#1d1d1f] min-h-screen selection:bg-[#0071e3]/10 antialiased pb-32">
            <DynamicArticleContent post={payload.data} />
        </div>
    );
}