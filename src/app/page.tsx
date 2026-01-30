'use client';

import { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Reveal } from '@/components/Reveal';
import { TextReveal } from '@/components/TextReveal';
import { Parallax } from '@/components/Parallax';
import { MagneticButton } from '@/components/MagneticButton';

// --- Header ---
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div className={`mx-auto transition-all duration-500 flex items-center justify-between ${
        scrolled 
          ? 'w-[90%] max-w-5xl bg-white/80 backdrop-blur-xl border border-border/50 rounded-full py-3 px-6 shadow-lg shadow-black/5' 
          : 'container-wide bg-transparent pb-6'
      }`}>
        <Reveal direction="down" duration={600}>
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-orange flex items-center justify-center rounded-md group-hover:scale-90 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`font-editorial text-xl tracking-tight transition-opacity duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              Forward<span className="text-orange italic">OpenClaw</span>
            </span>
            <span className={`font-editorial text-xl tracking-tight transition-opacity duration-300 absolute left-14 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-orange italic">FOC</span>
            </span>
          </a>
        </Reveal>

        <nav className="hidden md:flex items-center gap-8">
          {['Process', 'Services', 'FAQ'].map((item, i) => (
            <Reveal key={item} direction="down" delay={100 + (i * 50)} duration={600}>
              <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-aa hover:text-orange transition-colors uppercase tracking-wide">
                {item}
              </a>
            </Reveal>
          ))}
          <Reveal direction="down" delay={300} duration={600}>
            <MagneticButton href="#contact" className={`btn-primary !py-2 !px-4 text-xs ${scrolled ? '!py-1.5' : ''}`}>
              <span>Start Deployment</span>
            </MagneticButton>
          </Reveal>
        </nav>
      </div>
    </header>
  );
}

// --- Hero Section ---
function Hero() {
  const sysRef = useRef(null);

  useEffect(() => {
    // Complex animation for the "System Active" card
    const tl = anime.timeline({
      targets: '.sys-line',
      easing: 'easeOutExpo',
      delay: anime.stagger(800, { start: 500 }), // Wait 500ms then stagger each line by 800ms
      loop: true,
      direction: 'alternate',
      endDelay: 1000,
    });

    tl.add({
      opacity: [0, 1],
      translateX: [10, 0],
      duration: 800
    });
    
    // Status indicators pulse
    anime({
      targets: '.sys-status-dot',
      scale: [1, 1.2],
      opacity: [0.7, 1],
      duration: 1500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad',
      delay: anime.stagger(200)
    });

  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange/30 bg-orange/5 mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-xs font-mono text-orange uppercase tracking-wider">Accepting New Engagements</span>
            </div>
          </Reveal>

          <div className="mb-8">
            <TextReveal tag="h1" className="text-6xl md:text-8xl leading-[0.9] tracking-tighter" delay={300} type="word">
              Real AI.
            </TextReveal>
            <TextReveal tag="h1" className="text-6xl md:text-8xl leading-[0.9] tracking-tighter font-editorial italic text-orange" delay={450} type="word">
              Real Work.
            </TextReveal>
            <TextReveal tag="h1" className="text-6xl md:text-8xl leading-[0.9] tracking-tighter" delay={600} type="word">
              Your Hardware.
            </TextReveal>
          </div>

          <Reveal delay={800} direction="up">
            <p className="text-xl md:text-2xl text-aa max-w-2xl leading-relaxed mb-12">
              We deploy OpenClaw inside your business to replace manual workflows with autonomous agents. 
              <span className="block mt-4 text-base font-mono text-aaa border-l-2 border-orange/30 pl-4">
                // Not chat. Not demos. <br/>
                // 24/7 execution on your infrastructure.
              </span>
            </p>
          </Reveal>

          <Reveal delay={900} direction="up">
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="#contact" className="btn-primary">
                <span>Deploy OpenClaw</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#process" className="group flex items-center gap-2 px-6 py-4 rounded-lg border border-border hover:border-orange transition-colors bg-white">
                <span className="font-medium">See it in action</span>
                <svg className="w-4 h-4 text-aa group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Parallax speed={-0.1} className="w-full">
            <Reveal delay={600} direction="left" className="w-full">
              {/* Visual: Abstract "System Active" Representation */}
              <div ref={sysRef} className="relative bg-[#0F0F0F] rounded-xl border border-white/10 shadow-2xl shadow-orange/10 p-6 md:p-8 overflow-hidden group hover:shadow-orange/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-light opacity-50" />
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange/20 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="sys-status-dot w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="sys-status-dot w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="sys-status-dot w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-xs font-mono text-white/30">openclaw-core-v2.1.0</div>
                </div>

                <div className="space-y-4 font-mono text-sm text-white/90">
                  <div className="sys-line flex gap-3 opacity-0">
                    <span className="text-orange">➜</span>
                    <span className="text-white/60">Monitoring inbox (imap)...</span>
                  </div>
                  <div className="sys-line flex gap-3 opacity-0">
                    <span className="text-[#27C93F]">✓</span>
                    <span className="text-white">Found 3 invoices matching "urgent"</span>
                  </div>
                  <div className="sys-line flex gap-3 opacity-0">
                    <span className="text-orange">➜</span>
                    <span className="text-white/60">Extracting data to SAP...</span>
                  </div>
                  <div className="sys-line bg-white/5 p-3 rounded border border-white/10 text-xs text-white/70 my-2 opacity-0 font-medium">
                    {`{ "vendor": "Acme Corp", "amount": 4500.00, "due": "2026-02-15" }`}
                  </div>
                  <div className="sys-line flex gap-3 opacity-0">
                    <span className="text-[#27C93F]">✓</span>
                    <span className="text-white">Payment scheduled. Notifying Slack.</span>
                  </div>
                  <div className="sys-line flex gap-3 animate-pulse opacity-0">
                    <span className="text-orange">_</span>
                    <span className="text-white/60">Waiting for next task...</span>
                  </div>
                </div>
              </div>

              {/* Floaters */}
              <Parallax speed={0.05}>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg border border-border shadow-lg max-w-[200px] animate-float">
                   <div className="text-xs font-mono text-aaa mb-1 uppercase tracking-wider">System Uptime</div>
                   <div className="text-xl font-bold text-a flex items-center gap-2">
                     <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-pulse" />
                     99.99%
                   </div>
                </div>
              </Parallax>
            </Reveal>
          </Parallax>
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
      <Reveal className="mb-16 relative w-full" width="100%">
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
      </Reveal>

      <div className="container-narrow text-center">
        <Reveal direction="up">
          <h2 className="text-4xl font-editorial mb-12">
            "It's running my <span className="text-orange italic">company.</span>"
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
           <Reveal direction="right" delay={200}>
             <div className="p-8 bg-background rounded-xl border border-border h-full hover:border-orange/50 transition-colors duration-300">
               <p className="text-lg leading-relaxed mb-6 font-medium">"From nervous 'hi what can you do?' to full throttle - design, code review, taxes, PM, content pipelines... AI as teammate, not tool."</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange text-xs">LY</div>
                 <span className="font-mono text-sm text-aa">@lycfyi</span>
               </div>
             </div>
           </Reveal>
           <Reveal direction="left" delay={400}>
             <div className="p-8 bg-background rounded-xl border border-border h-full hover:border-orange/50 transition-colors duration-300">
               <p className="text-lg leading-relaxed mb-6 font-medium">"A smart model with eyes and hands at a desk. You message it like a coworker and it does everything a person could do."</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center font-bold text-orange text-xs">NC</div>
                 <span className="font-mono text-sm text-aa">@nathanclark_</span>
               </div>
             </div>
           </Reveal>
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
            <div className="sticky top-32">
              <Reveal>
                <h2 className="text-5xl font-editorial mb-6">
                  How We <br/> <span className="text-orange italic">Deploy.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {steps.map((step, i) => (
                <Reveal key={i} direction="up" delay={i * 100}>
                  <div className="group flex gap-6 md:gap-10 border-b border-border/50 pb-12 last:border-0">
                    <div className="font-mono text-4xl text-border group-hover:text-orange transition-colors duration-500">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-3xl font-editorial mb-4">{step.title}</h3>
                      <p className="text-aa text-lg max-w-xl">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={400} direction="up">
              <div className="mt-16 p-6 bg-white border border-border rounded-lg inline-block">
                 <h4 className="font-mono text-xs uppercase tracking-wider text-orange mb-2">Security First</h4>
                 <p className="text-sm text-aa">No data leaves your control. Sandboxed environments. Full audit logs.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services ---
function Services() {
  return (
    <section id="services" className="py-32 bg-[#111] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-24">
           <Reveal direction="up">
             <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8 backdrop-blur-sm">
               <span className="font-mono text-xs text-white/70 uppercase tracking-wider">Pricing Models</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-editorial">Engagement Models</h2>
           </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Discovery */}
          <Parallax speed={0.03} className="h-full">
            <Reveal delay={100} direction="up" className="h-full">
              <div className="group border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors h-full flex flex-col relative bg-[#1A1A1A]">
                <div className="font-mono text-sm text-white/40 mb-8 pt-2">01 — START</div>
                <h3 className="text-3xl font-editorial mb-4">Discovery</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl text-orange font-mono">$5,000</span>
                  <span className="text-white/40 font-mono text-sm">/ one-time</span>
                </div>
                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                  2-day deep dive audit. We map your workflows and deliver a prioritized automation roadmap & ROI analysis.
                </p>
                <ul className="space-y-4 mb-8 text-sm text-white/80 font-mono">
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> Workflow Audit</li>
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> Feasibility Report</li>
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> ROI Calculation</li>
                </ul>
                <MagneticButton href="#contact" className="w-full block py-4 text-center border border-white/20 rounded-lg hover:bg-white hover:text-a transition-all font-medium uppercase text-xs tracking-wider">
                  Book Workshop
                </MagneticButton>
              </div>
            </Reveal>
          </Parallax>

          {/* Deployment */}
          <Parallax speed={-0.03} className="h-full">
            <Reveal delay={200} direction="up" className="h-full">
              <div className="bg-white text-a p-1 rounded-2xl shadow-2xl shadow-orange/20 relative h-full transform lg:-translate-y-4">
                <div className="bg-orange text-white text-xs font-bold py-2 text-center uppercase tracking-widest rounded-t-xl">Most Popular</div>
                <div className="bg-white p-8 rounded-xl h-[calc(100%-32px)] flex flex-col">
                  <div className="font-mono text-sm text-aa mb-8">02 — BUILD</div>
                  <h3 className="text-3xl font-editorial mb-4">Deployment</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl text-orange font-mono">$25,000</span>
                    <span className="text-aa font-mono text-sm">/ implementation</span>
                  </div>
                  <p className="text-aa mb-8 flex-grow leading-relaxed">
                    Full production build. Custom skills, secure deployment, team training, and 90 days of support.
                  </p>
                  <ul className="space-y-4 mb-8 text-sm text-a font-mono">
                     <li className="flex items-center gap-3"><span className="text-orange">✓</span> Custom Agent Development</li>
                     <li className="flex items-center gap-3"><span className="text-orange">✓</span> Secure VPC Deployment</li>
                     <li className="flex items-center gap-3"><span className="text-orange">✓</span> Team Training & Handover</li>
                     <li className="flex items-center gap-3"><span className="text-orange">✓</span> 90 Days Support</li>
                  </ul>
                  <MagneticButton href="#contact" className="w-full block py-4 text-center bg-orange text-white rounded-lg hover:bg-orange-light transition-all shadow-lg shadow-orange/30 font-medium uppercase text-xs tracking-wider">
                    Start Deployment
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </Parallax>

          {/* Partner */}
          <Parallax speed={0.03} className="h-full">
            <Reveal delay={300} direction="up" className="h-full">
              <div className="group border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors h-full flex flex-col relative bg-[#1A1A1A]">
                <div className="font-mono text-sm text-white/40 mb-8 pt-2">03 — SCALE</div>
                <h3 className="text-3xl font-editorial mb-4">Partnership</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl text-orange font-mono">$50k</span>
                  <span className="text-white/40 font-mono text-sm">/ year</span>
                </div>
                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                  Dedicated engineer, continuous new automations, priority fixes, and quarterly strategic reviews.
                </p>
                <ul className="space-y-4 mb-8 text-sm text-white/80 font-mono">
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> Dedicated Engineer</li>
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> Unlimited New Workflows</li>
                   <li className="flex items-center gap-3"><span className="text-orange">✓</span> Priority SLA</li>
                </ul>
                <MagneticButton href="#contact" className="w-full block py-4 text-center border border-white/20 rounded-lg hover:bg-white hover:text-a transition-all font-medium uppercase text-xs tracking-wider">
                  Become Partner
                </MagneticButton>
              </div>
            </Reveal>
          </Parallax>
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
        <Reveal direction="up">
          <h2 className="text-4xl font-editorial mb-12 text-center">Common Questions</h2>
        </Reveal>
        <div className="grid gap-6">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 100} direction="up">
              <div className="border border-border p-6 rounded-lg bg-white">
                <h3 className="text-lg font-medium mb-2">{f.q}</h3>
                <p className="text-aa">{f.a}</p>
              </div>
            </Reveal>
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
        <Reveal direction="up">
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
                <MagneticButton href="" className="w-full">
                    <button disabled={status === 'submitting'} type="submit" className="w-full btn-primary !rounded-md">
                        <span>{status === 'submitting' ? 'Sending...' : 'Request Consultation'}</span>
                    </button>
                </MagneticButton>
              </form>
            )}
          </div>
        </Reveal>
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
