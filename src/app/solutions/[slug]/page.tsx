import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "../../../data/solutions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.description,
    keywords: solution.keywords,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header (Minimal) */}
      <header className="fixed top-0 left-0 w-full z-50 py-6 mix-blend-difference text-white">
        <div className="container-wide flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-orange flex items-center justify-center rounded-md">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-editorial text-xl tracking-tight text-white">Forward<span className="italic text-orange">OpenClaw</span></span>
          </a>
          <a href="/#contact" className="btn-primary !py-2 !px-4 text-xs bg-white text-a hover:bg-white/90">
            <span>Deploy This Agent</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-20 border-b border-border/50 bg-a text-white overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/10 to-transparent"></div>
        
        <div className="container-narrow relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-8">
            <span className="w-2 h-2 bg-orange rounded-full animate-blink" />
            <span className="text-xs font-mono text-white/70 uppercase tracking-wider">Solution Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-editorial mb-8 leading-tight">
            {solution.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
            {solution.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Body */}
            <div className="prose prose-lg prose-headings:font-editorial prose-headings:font-normal prose-p:text-aa prose-strong:text-a">
               <div dangerouslySetInnerHTML={{ __html: solution.content }} />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
               <div className="p-6 bg-white border border-border rounded-xl sticky top-32">
                 <h3 className="font-mono text-xs uppercase tracking-wider text-aa mb-4">Implementation Specs</h3>
                 <ul className="space-y-4">
                   <li className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                     <span className="text-aa">Deploy Time</span>
                     <span className="font-medium">2-4 Weeks</span>
                   </li>
                   <li className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                     <span className="text-aa">Infrastructure</span>
                     <span className="font-medium">On-Prem / Cloud</span>
                   </li>
                   <li className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                     <span className="text-aa">Compliance</span>
                     <span className="font-medium">SOC2 / HIPAA</span>
                   </li>
                 </ul>
                 
                 <a href="/#contact" className="mt-8 btn-primary w-full text-center block">
                   <span>Schedule Demo</span>
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-12 border-t border-border bg-white">
        <div className="container-wide flex justify-between items-center text-sm text-aa">
          <span>© 2026 Forward OpenClaw</span>
          <a href="/" className="hover:text-orange transition-colors">Back to Home</a>
        </div>
      </footer>
    </main>
  );
}
