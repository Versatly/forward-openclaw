'use client';

import { useState, useEffect, useRef } from 'react';

// --- Header ---
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3' : 'py-6'}`}>
      <div className="container-wide flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-orange flex items-center justify-center rounded-md">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-editorial text-xl tracking-tight">Forward<span className="text-orange italic">OpenClaw</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Process', 'Services', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-aa hover:text-orange transition-colors uppercase tracking-wide">
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2 !px-4 text-xs">
            <span>Start Deployment</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange/30 bg-orange/5 mb-8">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            <span className="text-xs font-mono text-orange uppercase tracking-wider">Accepting New Engagements</span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
            Real AI. <br />
            <span className="font-editorial italic text-orange">Real Work.</span> <br />
            Your Hardware.
          </h1>

          <p className="text-xl md:text-2xl text-aa max-w-2xl leading-relaxed mb-12">
            We deploy OpenClaw inside your business to replace manual workflows with autonomous agents. 
            <span className="block mt-4 text-base font-mono text-aaa border-l-2 border-orange/30 pl-4">
              // Not chat. Not demos. <br/>
              // 24/7 execution on your infrastructure.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <span>Deploy OpenClaw</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#process" className="group flex items-center gap-2 px-6 py-4 rounded-lg border border-border hover:border-orange transition-colors bg-white">
              <span className="font-medium">See it in action</span>
              <svg className="w-4 h-4 text-aa group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          {/* Visual: Abstract "System Active" Representation */}
          <div className="relative bg-white rounded-xl border border-border shadow-2xl p-6 md:p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-light" />
            
            <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-xs font-mono text-aaa">openclaw-core-v2.1.0</div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-orange">➜</span>
                <span className="text-aa">Monitoring inbox (imap)...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-green-600">✓</span>
                <span className="text-a">Found 3 invoices matching "urgent"</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange">➜</span>
                <span className="text-aa">Extracting data to SAP...</span>
              </div>
              <div className="bg-background p-3 rounded border border-border/50 text-xs text-aa my-2">
                {`{ "vendor": "Acme Corp", "amount": 4500.00, "due": "2026-02-15" }`}
              </div>
              <div className="flex gap-3">
                <span className="text-green-600">✓</span>
                <span className="text-a">Payment scheduled. Notifying Slack.</span>
              </div>
              <div className="flex gap-3 animate-pulse">
                <span className="text-orange">_</span>
                <span className="text-aa">Waiting for next task...</span>
              </div>
            </div>
          </div>

          {/* Floaters */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg border border-border shadow-lg max-w-[200px]">
             <div className="text-xs font-mono text-aaa mb-1">UPTIME</div>
             <div className="text-xl font-bold text-a">99.99%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Automations (Ticker + Grid) ---
function Automations() {
  const actions = [
    { title: "Inbox Zero", desc: "Flags urgent, drafts replies" },
    { title: "Calendar", desc: "Books meetings, manages buffers" },
    { title: "Research", desc: "Market reports & news summaries" },
    { title: "Expense", desc: "Tracks receipts & reimbursements" },
    { title: "DevOps", desc: "Monitors systems & runs fixes" },
    { title: "Support", desc: "Drafts tickets & escalates" },
    { title: "Content", desc: "Writes & schedules posts" },
    { title: "Coding", desc: "Full dev loops from prompts" },
  ];

  return (
    <section className="py-20 border-y border-border bg-white overflow-hidden">
      {/* Ticker */}
      <div className="mb-16 relative">
         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
         
         <div className="flex gap-8 animate-ticker w-max">
           {[...actions, ...actions, ...actions].map((action, i) => (
             <div key={i} className="flex items-center gap-4 px-6 py-3 border border-border rounded-full whitespace-nowrap">
               <span className="w-2 h-2 bg-orange rounded-full" />
               <span className="font-mono text-sm uppercase tracking-wide font-bold">{action.title}</span>
               <span className="text-aa text-sm border-l border-border pl-4">{action.desc}</span>
             </div>
           ))}
         </div>
      </div>

      <div className="container-narrow text-center">
        <h2 className="text-4xl font-editorial mb-12">
          "It's running my <span className="text-orange italic">company.</span>"
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
           <div className="p-8 bg-background rounded-xl border border-border">
             <p className="text-lg leading-relaxed mb-6 font-medium">"From nervous 'hi what can you do?' to full throttle - design, code review, taxes, PM, content pipelines... AI as teammate, not tool."</p>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange text-xs">LY</div>
               <span className="font-mono text-sm text-aa">@lycfyi</span>
             </div>
           </div>
           <div className="p-8 bg-background rounded-xl border border-border">
             <p className="text-lg leading-relaxed mb-6 font-medium">"A smart model with eyes and hands at a desk. You message it like a coworker and it does everything a person could do."</p>
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange text-xs">NC</div>
               <span className="font-mono text-sm text-aa">@nathanclark_</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

// --- Process (Timeline) ---
function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We audit your workflows to find high-ROI automation targets." },
    { num: "02", title: "Build", desc: "Custom skills & integrations coded for your specific stack." },
    { num: "03", title: "Deploy", desc: "Secure installation on your private cloud or on-prem hardware." },
    { num: "04", title: "Evolve", desc: "Continuous training and new skills as your needs grow." },
  ];

  return (
    <section id="process" className="section-padding bg-background relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-editorial mb-6 sticky top-32">
              How We <br/> <span className="text-orange italic">Deploy.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="group flex gap-6 md:gap-10 border-b border-border/50 pb-12 last:border-0">
                  <div className="font-mono text-4xl text-border group-hover:text-orange transition-colors duration-500">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-3xl font-editorial mb-4">{step.title}</h3>
                    <p className="text-aa text-lg max-w-xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-6 bg-white border border-border rounded-lg inline-block">
               <h4 className="font-mono text-xs uppercase tracking-wider text-orange mb-2">Security First</h4>
               <p className="text-sm text-aa">No data leaves your control. Sandboxed environments. Full audit logs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services ---
function Services() {
  return (
    <section id="services" className="py-32 bg-a text-white">
      <div className="container-wide">
        <div className="text-center mb-24">
           <h2 className="text-5xl md:text-6xl font-editorial">Engagement Models</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discovery */}
          <div className="border border-white/20 p-8 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="font-mono text-sm text-white/50 mb-6">01 — START</div>
            <h3 className="text-3xl font-editorial mb-2">Discovery</h3>
            <div className="text-4xl text-orange font-mono mb-8">$5,000</div>
            <p className="text-white/70 mb-8 h-20">
              2-day deep dive audit. We map your workflows and deliver a prioritized automation roadmap & ROI analysis.
            </p>
            <a href="#contact" className="w-full block py-4 text-center border border-white/30 rounded-lg hover:bg-white hover:text-a transition-all">
              Book Workshop
            </a>
          </div>

          {/* Deployment */}
          <div className="bg-white text-a p-8 rounded-2xl transform lg:-translate-y-8 shadow-2xl shadow-orange/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">Most Popular</div>
            <div className="font-mono text-sm text-aa mb-6">02 — BUILD</div>
            <h3 className="text-3xl font-editorial mb-2">Deployment</h3>
            <div className="text-4xl text-orange font-mono mb-8">$25,000</div>
            <p className="text-aa mb-8 h-20">
              Full production build. Custom skills, secure deployment, team training, and 90 days of support.
            </p>
            <a href="#contact" className="w-full block py-4 text-center bg-orange text-white rounded-lg hover:bg-orange-light transition-all shadow-lg shadow-orange/30">
              Start Deployment
            </a>
          </div>

          {/* Partner */}
          <div className="border border-white/20 p-8 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="font-mono text-sm text-white/50 mb-6">03 — SCALE</div>
            <h3 className="text-3xl font-editorial mb-2">Partnership</h3>
            <div className="text-4xl text-orange font-mono mb-8">$50k<span className="text-xl">/yr</span></div>
            <p className="text-white/70 mb-8 h-20">
              Dedicated engineer, continuous new automations, priority fixes, and quarterly strategic reviews.
            </p>
            <a href="#contact" className="w-full block py-4 text-center border border-white/30 rounded-lg hover:bg-white hover:text-a transition-all">
              Become Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQ() {
  const faqs = [
    { q: "How long does it take?", a: "Discovery is 2 days. Full deployment typically takes 4–8 weeks depending on complexity." },
    { q: "Is my data secure?", a: "Yes. We deploy on your infrastructure. Your data never leaves your control." },
    { q: "Do you support teams?", a: "Absolutely. Multi-user support with role-based access and shared agent channels is built-in." },
  ];

  return (
    <section id="faq" className="py-24 border-b border-border">
      <div className="container-narrow">
        <h2 className="text-4xl font-editorial mb-12 text-center">Common Questions</h2>
        <div className="grid gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border p-6 rounded-lg bg-white">
              <h3 className="text-lg font-medium mb-2">{f.q}</h3>
              <p className="text-aa">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="bg-white border border-border rounded-2xl p-8 md:p-16 shadow-xl">
          <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-editorial mb-4">Let's Automate Work.</h2>
             <p className="text-aa">Tell us your biggest manual headache. We'll show you how to fix it.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-editorial">Received.</h3>
              <p className="text-aa">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div>
                <label className="block text-sm font-mono uppercase tracking-wide text-aa mb-2">Name</label>
                <input 
                  required 
                  className="w-full bg-background border border-border px-4 py-3 rounded focus:outline-none focus:border-orange transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wide text-aa mb-2">Work Email</label>
                <input 
                  required 
                  type="email"
                  className="w-full bg-background border border-border px-4 py-3 rounded focus:outline-none focus:border-orange transition-colors"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-wide text-aa mb-2">Manual Process to Fix</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 rounded focus:outline-none focus:border-orange transition-colors"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button disabled={status === 'submitting'} type="submit" className="w-full btn-primary !rounded-md">
                <span>{status === 'submitting' ? 'Sending...' : 'Request Consultation'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-a text-white/60 py-12 border-t border-white/10">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="font-editorial text-xl text-white">Forward<span className="text-orange italic">OpenClaw</span></span>
        </div>
        <div className="flex gap-6 text-sm font-mono">
           <a href="#" className="hover:text-white transition-colors">Twitter</a>
           <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
           <a href="mailto:contact@forwardopenclaw.com" className="hover:text-white transition-colors">Email</a>
        </div>
        <div className="text-xs font-mono">
          © {new Date().getFullYear()} Forward OpenClaw
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Automations />
      <Process />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
