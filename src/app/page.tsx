'use client';

import { useState } from 'react';

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/70">Now accepting Q1 2025 engagements</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block text-white">We Come to You.</span>
          <span className="block gradient-text">We Deploy.</span>
          <span className="block text-white">You <span className="electric-glow text-cyan-400">Profit.</span></span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          The elite OpenClaw forward-deploy team. We bring enterprise-grade AI automation 
          directly to your infrastructure, tailored to your exact needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-lg">
            Start Your Transformation
          </a>
          <a href="#how-it-works" className="btn-secondary text-lg">
            See How It Works
          </a>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/40">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">150+</div>
            <div className="text-sm">Deployments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">$12M+</div>
            <div className="text-sm">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">98%</div>
            <div className="text-sm">Client Retention</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We assess your infrastructure, understand your pain points, and identify high-impact AI opportunities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Custom Blueprint",
      description: "Our architects design a tailored AI solution that integrates seamlessly with your existing systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Forward Deploy",
      description: "Our elite team arrives on-site or connects remotely to deploy, test, and optimize your AI systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Maintain & Scale",
      description: "Ongoing support ensures your AI investment compounds. We monitor, optimize, and evolve with you.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">How It Works</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A battle-tested methodology refined across 150+ enterprise deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="gradient-border p-8 h-full card-hover">
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4">{step.icon}</div>
                  <span className="text-6xl font-bold text-white/10 absolute -top-2 -right-2">{step.number}</span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-white/20">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Expertise Section
function TeamExpertise() {
  const expertise = [
    { area: "Large Language Models", detail: "GPT-4, Claude, Llama, custom fine-tuning" },
    { area: "Computer Vision", detail: "Object detection, image generation, video analysis" },
    { area: "MLOps & Infrastructure", detail: "Kubernetes, Docker, cloud-native AI pipelines" },
    { area: "Data Engineering", detail: "ETL, real-time streaming, data lake architecture" },
    { area: "Security & Compliance", detail: "SOC2, HIPAA, GDPR, air-gapped deployments" },
    { area: "Edge Computing", detail: "On-premise inference, IoT integration, low-latency" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Elite Engineers. <br />
              <span className="gradient-text">Proven Results.</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Our forward-deploy specialists come from OpenAI, Google, Meta, and top AI research labs. 
              We don&apos;t just understand AI—we&apos;ve built it at scale.
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-2 border-[#0a0a0f] flex items-center justify-center text-sm font-bold">
                    {['JD', 'AK', 'MR', 'SC', 'LT'][i]}
                  </div>
                ))}
              </div>
              <span className="text-white/60">+12 more specialists</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10">
                <h3 className="font-bold mb-2">{item.area}</h3>
                <p className="text-sm text-white/50">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Studies Section
function CaseStudies() {
  const cases = [
    {
      industry: "Financial Services",
      title: "Automated Compliance Review",
      result: "87% reduction in manual review time",
      description: "Deployed AI document analysis system processing 50,000+ documents monthly with 99.2% accuracy.",
    },
    {
      industry: "Healthcare",
      title: "Diagnostic Imaging Pipeline",
      result: "4.2x faster diagnosis turnaround",
      description: "HIPAA-compliant AI system integrated with existing PACS infrastructure across 12 facilities.",
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance",
      result: "$2.3M saved in first year",
      description: "Edge AI deployment monitoring 2,400 sensors with sub-second anomaly detection.",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Real Results. Real Impact.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            See how we&apos;ve transformed operations for industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <article key={index} className="gradient-border p-8 card-hover">
              <div className="relative z-10">
                <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">{study.industry}</span>
                <h3 className="text-2xl font-bold mt-3 mb-4">{study.title}</h3>
                <p className="text-white/60 mb-6">{study.description}</p>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-3xl font-bold gradient-text">{study.result}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2 group">
            Discuss your use case
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const tiers = [
    {
      name: "Discovery",
      price: "$5K",
      description: "AI readiness assessment and strategic roadmap",
      features: [
        "2-day on-site assessment",
        "Infrastructure audit",
        "AI opportunity mapping",
        "Custom implementation roadmap",
        "Executive presentation",
        "30-day follow-up call",
      ],
      cta: "Book Discovery",
      popular: false,
    },
    {
      name: "Implementation",
      price: "$25K",
      description: "Full AI system deployment and integration",
      features: [
        "Everything in Discovery",
        "Custom AI solution design",
        "Full deployment & integration",
        "Team training (up to 20 people)",
        "90-day support included",
        "Performance optimization",
        "Documentation & runbooks",
      ],
      cta: "Start Implementation",
      popular: true,
    },
    {
      name: "Partnership",
      price: "$50K",
      description: "Ongoing AI excellence and continuous improvement",
      features: [
        "Everything in Implementation",
        "Dedicated AI architect",
        "Quarterly on-site reviews",
        "24/7 priority support",
        "Continuous optimization",
        "New feature development",
        "Executive AI briefings",
        "Multi-system expansion",
      ],
      cta: "Become a Partner",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Investment</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Pricing That Scales With Impact</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. ROI guaranteed or we work until it is.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl transition-all duration-500 ${
                tier.popular 
                  ? 'bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/50 scale-105' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-5xl font-bold mb-2">
                  <span className={tier.popular ? 'gradient-text' : ''}>{tier.price}</span>
                </div>
                <p className="text-white/60 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'btn-primary' 
                    : 'border border-white/20 hover:border-cyan-400/50 hover:bg-white/5'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    tier: 'implementation',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/60">
            Book a free discovery call. No pressure, just possibilities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="gradient-border p-8 md:p-12">
          <div className="relative z-10 grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                required
                className="input-field"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Work Email *</label>
              <input
                type="email"
                id="email"
                required
                className="input-field"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white/60 mb-2">Company *</label>
              <input
                type="text"
                id="company"
                required
                className="input-field"
                placeholder="Acme Corporation"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="tier" className="block text-sm font-medium text-white/60 mb-2">Interest Level</label>
              <select
                id="tier"
                className="input-field cursor-pointer"
                value={formData.tier}
                onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
              >
                <option value="discovery">Discovery ($5K)</option>
                <option value="implementation">Implementation ($25K)</option>
                <option value="partnership">Partnership ($50K)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Tell us about your AI goals</label>
              <textarea
                id="message"
                rows={4}
                className="input-field resize-none"
                placeholder="What challenges are you looking to solve with AI?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full text-lg">
                Book Your Free Discovery Call
              </button>
              <p className="text-center text-white/40 text-sm mt-4">
                We respond within 24 hours. No spam, ever.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold gradient-text mb-2">Forward OpenClaw</div>
            <p className="text-white/40 text-sm">Elite AI deployment for enterprises that demand excellence.</p>
          </div>
          
          <nav className="flex gap-8 text-white/60">
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Forward OpenClaw. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" aria-hidden="true" />
      
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold gradient-text">Forward OpenClaw</a>
          <nav className="hidden md:flex gap-8 text-white/60">
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">Get Started</a>
        </div>
      </header>

      <Hero />
      <HowItWorks />
      <TeamExpertise />
      <CaseStudies />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
