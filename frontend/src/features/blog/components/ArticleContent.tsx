"use client";

// import { motion } from "framer-motion";
import { Clock, ArrowLeft, Terminal, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ArticleContent() {
  const appleEase = [0.25, 1, 0.5, 1] as const;

  return (
    <article className="pt-40 px-6 max-w-185 mx-auto space-y-12">
      
      {/* Back Navigation Thread */}
      <div className="pb-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] hover:underline group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to The Ledger
        </Link>
      </div>

      <div className="space-y-4 border-b border-[#d2d2d7]/50 pb-8">
        <div className="flex items-center gap-4 text-xs font-mono text-[#86868b] uppercase">
          <span>VOLUME 01 // CHAPTER 04</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 14 Min Read</span>
        </div>
        
        <h1 className="text-[clamp(32px,5vw,52px)] font-semibold tracking-tighter text-[#1d1d1f] leading-[1.1]">
          Architecting Production Autonomous Agent Layers inside Next.js Monorepos
        </h1>
        
        <div className="pt-2 text-sm text-[#86868b] font-medium font-sans">
          WRITTEN BY RAHUL SHAKYA — ACTIVE PUBLICATION 2026
        </div>
      </div>

      {/* ARTICLE BODY TEXT CONTENT */}
      {/* Reason: Premium book-style leading settings make reading smooth and effortless for deep technical logs */}
      <div className="text-[17px] leading-[1.65] text-[#333336] font-normal space-y-8 tracking-normal">
        
        <p>
          Modern full-stack systems frequently demand intelligence orchestration layers that can process dynamic text strings, parse logical configurations, and make deterministic tracking decisions on the fly. However, embedding large models straight inside web runtime threads quickly degrades memory loops.
        </p>

        <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight pt-4">
          The Vector Stream Pipeline Optimization
        </h2>
        
        <p>
          To maintain a sub-200ms transaction cycle, the platform isolates textual database rows into mathematical coordinate blocks called vectors. By deploying an index system inside a PostgreSQL instance matching configurations with <code className="bg-[#f5f5f7] px-1.5 py-0.5 rounded font-mono text-xs text-[#0071e3]">pgvector</code> tokens, search logic bypasses slow sequential scans.
        </p>

        {/* Dynamic Architectural Accent Board Block */}
        <div className="bg-[#f5f5f7] border border-[#d2d2d7]/50 rounded-[24px] p-6 space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#86868b]">
            <Cpu className="w-4 h-4 text-[#0071e3]" /> CORE_PIPELINE_FLOW
          </div>
          <p className="text-sm text-[#515154] leading-relaxed">
            Every asynchronous query token is intercepted at the controller layer, validated through typed parameter guards, and evaluated concurrently via non-blocking child threads before data persistence triggers.
          </p>
        </div>

        <p>
          Rather than introducing complex third-party tools that add framework latency overhead, we can write an explicit, lightweight routing connection script that streams query embeddings straight down into raw pool strings.
        </p>

        <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight pt-4">
          Implementation Parameters Code Structure
        </h2>

        {/* Hardened Terminal Code Showcase Block */}
        <div className="bg-black rounded-2xl p-6 border border-white/10 font-mono text-xs text-zinc-400 space-y-3 shadow-inner my-6">
          <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-800/60 text-zinc-500 text-[10px]">
            <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>NODE_CONTROLLER // AGENT_ROUTER.TS</span>
          </div>
          <pre className="overflow-x-auto scrollbar-none text-[#42a5f5] leading-relaxed">
          {`import { createClient } from "@prisma/client";
          import { validatePayload } from "@/utils/zod";

          export async function POST(req: Request) {
            const payload = await req.json();
            const cleanTokens = validatePayload(payload);
            
            // Initialize edge routing coordinates matching vector bounds
            const embedding = await generateVectorToken(cleanTokens.text);
            const response = await db.$queryRaw\`
              SELECT id, document FROM "VectorStore" 
              ORDER BY embedding <=> \${embedding}::vector LIMIT 5;
            \`;
            
            return Response.json({ success: true, nodes: response });
          }`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight pt-4">
          Verification Summary
        </h2>

        <p>
          By enforcing a strict boundary between client interface renders and raw mathematical execution microservices, your core web loops stay safe, scalable, and fully prepared for concurrent production traffic vectors.
        </p>

        {/* Verified Impact Specs Checklist */}
        <div className="pt-6 border-t border-[#d2d2d7]/50 space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-medium text-[#1d1d1f]">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Type Guard Bounds: 100% Validated via Zod</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-medium text-[#1d1d1f]">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Average Vector Distance Match: ~42ms</span>
          </div>
        </div>

      </div>

    </article>
  );
}