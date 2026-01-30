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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-border py-4 shadow-sm' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className={`transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'} bg-orange flex items-center justify-center rounded-md`}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className={`font-editorial transition-all duration-500 ${scrolled ? 'text-lg' : 'text-2xl'} tracking-tight`}>
            Forward<span className="text-orange italic">OpenClaw</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Process', 'Services', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-aa hover:text-orange transition-colors uppercase tracking-wide">
              {item}
            </a>
          ))}
          <a href="#contact" className={`btn-primary ${scrolled ? '!py-2 !px-4 text-xs' : '!py-3 !px-6 text-sm'} transition-all duration-500`}>
            <span>Free Audit</span>
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
            <span className="text-xs font-mono text-orange uppercase tracking-wider">Same-Day Installation Available</span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tighter">
            Live by Tonight. <br />
            <span className="font-editorial italic text-orange">No Waiting.</span> <br />
            AI Running Today.
          </h1>

          <p className="text-xl md:text-2xl text-aa max-w-2xl leading-relaxed mb-12">
            Free 30-minute audit. If you qualify, we deploy same-day. Forward-deployed team installs AI that handles your customer messages, bookings, and inquiries before you go to bed tonight.
            <span className="block mt-4 text-base font-mono text-aaa border-l-2 border-orange/30 pl-4">
              // Forward-deployed engineers on standby <br/>
              // Same-day setup for qualifying businesses
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <span>Get Free 30-Min Audit</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#process" className="group flex items-center gap-2 px-6 py-4 rounded-lg border border-border hover:border-orange transition-colors bg-white">
              <span className="font-medium">See how it works</span>
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
    <section className="py-32 border-y border-border bg-white overflow-hidden">
      {/* Ticker */}
      <div className="mb-24 relative">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
         
         <div className="flex gap-12 animate-ticker w-max">
           {[...actions, ...actions, ...actions].map((action, i) => (
             <div key={i} className="flex items-center gap-4 px-8 py-4 border border-border bg-background rounded-full whitespace-nowrap hover:border-orange transition-colors duration-300">
               <span className="w-2 h-2 bg-orange rounded-full" />
               <span className="font-mono text-sm uppercase tracking-wide font-bold">{action.title}</span>
               <span className="text-aa text-sm border-l border-border pl-4 font-mono">{action.desc}</span>
             </div>
           ))}
         </div>
      </div>

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-editorial leading-[0.9] mb-8">
              "Installed before <br/><span className="text-orange italic">I finished lunch.</span>"
            </h2>
            <p className="text-xl text-aa leading-relaxed max-w-lg">
              We don't schedule meetings for next week. Our forward-deployed team shows up same-day and installs a digital workforce that's live before you close shop.
            </p>
          </div>
          
          <div className="space-y-6">
             {/* Testimonial 1 */}
             <div className="p-8 bg-background rounded-none border-l-4 border-orange relative">
               <div className="absolute top-8 right-8 text-6xl text-border font-serif opacity-20">"</div>
               <p className="text-lg leading-relaxed mb-6 font-medium relative z-10">
                 "From nervous 'hi what can you do?' to full throttle - design, code review, taxes, PM, content pipelines... AI as teammate, not tool."
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                 <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center font-bold text-white text-xs">LY</div>
                 <div>
                   <div className="font-bold text-sm uppercase tracking-wide">Leo Y.</div>
                   <div className="font-mono text-xs text-aa">Founder, @lycfyi</div>
                 </div>
               </div>
             </div>

             {/* Testimonial 2 */}
             <div className="p-8 bg-background rounded-none border-l-4 border-a relative opacity-60 hover:opacity-100 transition-opacity">
               <p className="text-lg leading-relaxed mb-6 font-medium">
                 "A smart model with eyes and hands at a desk. You message it like a coworker and it does everything a person could do."
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                 <div className="w-10 h-10 rounded-full bg-a flex items-center justify-center font-bold text-white text-xs">NC</div>
                 <div>
                   <div className="font-bold text-sm uppercase tracking-wide">Nathan C.</div>
                   <div className="font-mono text-xs text-aa">CTO, @nathanclark_</div>
                 </div>
               </div>
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
    { num: "01", title: "Free 30-Min Audit", desc: "Book a call. We analyze your business in 30 minutes—no charge, no commitment. We'll tell you exactly what we can automate and if you qualify for same-day install." },
    { num: "02", title: "Qualification", desc: "If your setup matches our criteria (most do), we green-light same-day deployment. Our forward-deployed team is already standing by." },
    { num: "03", title: "Same-Day Install", desc: "We show up. We configure everything. AI is handling your messages, bookings, and inquiries before you go home tonight." },
    { num: "04", title: "Live Support", desc: "Questions at 11pm? We're there. Ongoing optimization, instant fixes, zero waiting." },
  ];

  return (
    <section id="process" className="py-32 bg-background relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-6xl font-editorial mb-8 sticky top-32 leading-[0.9]">
              Live <br/> <span className="text-orange italic">By Tonight.</span>
            </h2>
            <div className="hidden lg:block sticky top-80 mt-12">
               <div className="font-mono text-xs uppercase tracking-wider text-aa mb-2">Security Protocol</div>
               <div className="p-4 border border-border bg-white text-sm text-aa">
                 <div className="flex items-center gap-2 mb-2 text-green-600">
                   <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                   SOC2 Compliant
                 </div>
                 No data leaves your control. Sandboxed environments. Full audit logs.
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-border">
              {steps.map((step, i) => (
                <div key={i} className="group grid md:grid-cols-12 gap-6 md:gap-10 py-16 border-b border-border items-start hover:bg-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
                  <div className="md:col-span-3 font-mono text-5xl md:text-6xl text-border group-hover:text-orange transition-colors duration-500 font-light tracking-tighter">
                    {step.num}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-4xl font-editorial mb-6 group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
                    <p className="text-aa text-xl leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:hidden mt-16 p-6 bg-white border border-border rounded-lg">
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/20">
           <h2 className="text-6xl md:text-8xl font-editorial leading-[0.9]">Engagement <br/> Models</h2>
           <div className="text-right hidden md:block">
             <div className="font-mono text-sm text-orange mb-2">AVAILABLE CAPACITY</div>
             <div className="flex gap-1 justify-end">
               {[1,2,3,4,5].map(i => <div key={i} className={`w-2 h-8 ${i < 4 ? 'bg-orange' : 'bg-white/10'}`} />)}
             </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20 border-b border-white/20">
          {/* Discovery */}
          <div className="group p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500">
            <div className="font-mono text-xs text-orange mb-8 tracking-widest">01 / AUDIT</div>
            <h3 className="text-4xl font-editorial mb-4">Free Audit</h3>
            <div className="text-xl text-white/60 mb-8 h-16">
              30-minute call. We assess your business and tell you if you qualify for same-day install.
            </div>
            <ul className="space-y-4 font-mono text-sm text-white/80 mb-12 border-t border-white/10 pt-8">
              <li className="flex justify-between"><span>Timeline</span> <span>30 Minutes</span></li>
              <li className="flex justify-between"><span>Deliverable</span> <span>Go/No-Go Decision</span></li>
              <li className="flex justify-between"><span>Team</span> <span>Forward-Deployed Engineer</span></li>
            </ul>
            <div className="flex items-end justify-between mb-8">
               <div className="text-4xl font-mono">FREE</div>
            </div>
            <a href="#contact" className="w-full inline-flex justify-center py-4 border border-white/30 hover:bg-white hover:text-a transition-all uppercase tracking-widest text-xs font-mono">
              Book Audit Now
            </a>
          </div>

          {/* Full Setup */}
          <div className="group p-8 lg:p-12 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-orange" />
            <div className="font-mono text-xs text-orange mb-8 tracking-widest">02 / DEPLOY</div>
            <h3 className="text-4xl font-editorial mb-4">Same-Day Install</h3>
            <div className="text-xl text-white/80 mb-8 h-16">
              Pass the audit? We deploy today. Forward-deployed team on-site or remote. Live by tonight.
            </div>
             <ul className="space-y-4 font-mono text-sm text-white/80 mb-12 border-t border-white/10 pt-8">
              <li className="flex justify-between"><span>Timeline</span> <span>Same Day</span></li>
              <li className="flex justify-between"><span>Deliverable</span> <span>Live System Tonight</span></li>
              <li className="flex justify-between"><span>Team</span> <span>Forward-Deployed Engineers</span></li>
            </ul>
            <div className="flex items-end justify-between mb-8">
               <div className="text-4xl font-mono text-orange">$15,000</div>
            </div>
            <a href="#contact" className="w-full inline-flex justify-center py-4 bg-orange text-white hover:bg-orange-light transition-all uppercase tracking-widest text-xs font-mono">
              Deploy Today
            </a>
          </div>

          {/* Partner */}
          <div className="group p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500">
            <div className="font-mono text-xs text-orange mb-8 tracking-widest">03 / ONGOING</div>
            <h3 className="text-4xl font-editorial mb-4">Always On</h3>
            <div className="text-xl text-white/60 mb-8 h-16">
              24/7 support. Same-day fixes. New features deployed within hours, not weeks.
            </div>
             <ul className="space-y-4 font-mono text-sm text-white/80 mb-12 border-t border-white/10 pt-8">
              <li className="flex justify-between"><span>Response Time</span> <span>&lt; 1 Hour</span></li>
              <li className="flex justify-between"><span>Support</span> <span>24/7 Priority</span></li>
              <li className="flex justify-between"><span>New Features</span> <span>Same-Day Deploy</span></li>
            </ul>
            <div className="flex items-end justify-between mb-8">
               <div className="text-4xl font-mono">$5k<span className="text-lg text-white/40">/mo</span></div>
            </div>
            <a href="#contact" className="w-full inline-flex justify-center py-4 border border-white/30 hover:bg-white hover:text-a transition-all uppercase tracking-widest text-xs font-mono">
              Add Ongoing Support
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
    { q: "How fast can you actually deploy?", a: "Same day. Book the free 30-minute audit in the morning, get approved, and we deploy before you close. Our forward-deployed team is standing by." },
    { q: "What does 'forward-deployed' mean?", a: "Engineers dedicated to your install—remote or on-site. No ticketing systems, no waiting in queue. Direct line, immediate action." },
    { q: "What if I don't qualify for same-day?", a: "Rare, but it happens. Complex integrations might need 24-48 hours. We'll tell you upfront in the free audit—no surprises." },
    { q: "Is my data secure?", a: "Yes. Enterprise-grade encryption, sandboxed environments. Your data never trains public models. We move fast, not reckless." },
    { q: "What if something breaks at 2am?", a: "We fix it. 24/7 support with <1 hour response. Same-day fixes aren't just for install—it's how we operate." },
  ];

  return (
    <section id="faq" className="py-32 border-b border-border">
      <div className="container-wide">
        <h2 className="text-6xl font-editorial mb-24 text-center">Common Questions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {faqs.map((f, i) => (
            <div key={i} className="group">
              <div className="font-mono text-orange mb-4 text-sm">0{i+1}.</div>
              <h3 className="text-2xl font-editorial mb-4 group-hover:text-orange transition-colors">{f.q}</h3>
              <p className="text-aa leading-relaxed">{f.a}</p>
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
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-6xl md:text-8xl font-editorial mb-8">Book Your <br/> <span className="text-orange italic">Free Audit.</span></h2>
           <p className="text-xl text-aa max-w-2xl mx-auto">30 minutes. No charge. We'll tell you exactly what we can automate—and if you qualify, we deploy today.</p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-24 border border-green-200 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-3xl font-editorial mb-2">Got it.</h3>
            <p className="text-aa">We're calling you within the hour. Keep your phone close.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-0 max-w-xl mx-auto">
            <div className="group relative">
              <input 
                required 
                placeholder=" "
                className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-orange transition-colors"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <label className="absolute left-0 top-4 text-aa transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange pointer-events-none">Name</label>
            </div>
            
            <div className="group relative pt-8">
              <input 
                required 
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-orange transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
              <label className="absolute left-0 top-12 text-aa transition-all duration-300 peer-focus:top-4 peer-focus:text-xs peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange pointer-events-none">Work Email</label>
            </div>

            <div className="group relative pt-8 pb-12">
              <textarea 
                required 
                rows={3}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-orange transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
              <label className="absolute left-0 top-12 text-aa transition-all duration-300 peer-focus:top-4 peer-focus:text-xs peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-orange pointer-events-none">What's slowing you down?</label>
            </div>

            <button disabled={status === 'submitting'} type="submit" className="w-full btn-primary !rounded-none !py-6 !text-base">
              <span>{status === 'submitting' ? 'Submitting...' : 'Book Free 30-Min Audit'}</span>
            </button>
          </form>
        )}
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
