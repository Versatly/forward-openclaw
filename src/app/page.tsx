'use client';

import { useState, useEffect, useRef } from 'react';

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, ref };
}

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[95%] max-w-6xl' : 'w-[90%] max-w-5xl'
      }`}
    >
      <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-aa/10'
          : 'bg-white/40 backdrop-blur-md'
      }`}>
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-editorial text-xl text-a tracking-tight">Forward<span className="text-orange italic">OpenClaw</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {['Automations', 'Process', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === 'automations' ? 'process' : item.toLowerCase()}`}
              className="px-4 py-2 text-aa hover:text-a rounded-xl transition-all duration-300 hover:bg-white/50 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
          Schedule Call
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-light/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '-1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/10 rounded-full" />
      </div>

      <div className="relative z-10 container-wide text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 border border-border/30 mb-10 animate-fade-in-up">
          <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
          <span className="text-sm text-aa font-medium">Currently accepting new engagements</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial mb-8 tracking-tight animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
          <span className="block text-a">We Deploy OpenClaw Inside</span>
          <span className="block font-editorial-italic text-orange">Real Businesses</span>
          <span className="block text-a">— And It Runs the Day-to-Day</span>
        </h1>

        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          OpenClaw (formerly Clawdbot → Moltbot) is the open-source AI assistant that actually does work.
          Not chat. Not demos.
        </p>
        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          It reads and replies to emails, manages calendars, books meetings, runs code, researches competitors, files expenses, monitors systems, generates reports, and executes full workflows — 24/7 on your own hardware.
        </p>
        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          Thousands of people already run it personally. Real companies are now using it to replace entire manual processes.
        </p>
        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          We are the team that deploys it inside businesses — securely, customized, and production-ready.
        </p>
        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          You get an AI employee that never sleeps, never complains, and gets better every week.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3" style={{ opacity: 0 }}>
          <a href="#contact" className="btn-primary text-base">
            Schedule Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-aa/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-aa/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

// What Real Users Are Automating Section
function RealUsersAutomating() {
  const automations = [
    "Clears inbox, flags urgent emails, drafts replies, sends with one approval",
    "Pulls calendar, books meetings, adds Zoom links, reminds you when to leave based on traffic",
    "Runs daily/weekly research: competitor updates, market reports, news summaries",
    "Automates expense tracking, reimbursement submissions, invoice chasing",
    "Monitors systems, alerts on issues, runs fixes via scripts",
    "Handles customer support tickets, drafts responses, escalates when needed",
    "Writes and schedules content, generates images/slides, posts directly",
    "Codes, tests, deploys — full dev loops triggered by a message",
    "Proactive: checks your goals, suggests tasks, follows up on open items",
  ];

  const testimonials = [
    {
      quote: "It's running my company.",
      author: "@therno"
    },
    {
      quote: "From nervous 'hi what can you do?' to full throttle - design, code review, taxes, PM, content pipelines... AI as teammate, not tool.",
      author: "@lycfyi"
    },
    {
      quote: "A smart model with eyes and hands at a desk with keyboard and mouse. You message it like a coworker and it does everything a person could do.",
      author: "@nathanclark_"
    },
    {
      quote: "At this point I don't even know what to call @openclaw. This is the first time I have felt like I am living in the future since the launch of ChatGPT.",
      author: "@davemorin"
    },
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            What Real Users Are <span className="italic text-orange">Automating</span> Right Now
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {automations.map((automation, index) => (
            <div
              key={index}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-aa leading-relaxed">{automation}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg text-a mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-aa font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How We Deploy Section
function HowWeDeploy() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We map your current workflows, identify the biggest time sinks, and show exactly what OpenClaw will automate first.",
    },
    {
      number: "02",
      title: "Customization",
      description: "We build the exact skills, integrations, and guardrails your team needs. Gmail, Calendar, Slack, CRM, internal tools — whatever you use.",
    },
    {
      number: "03",
      title: "Deployment",
      description: "Secure install on your servers or cloud. Sandboxed, monitored, production-hardened. Your data never leaves your control.",
    },
    {
      number: "04",
      title: "Handover & Evolution",
      description: "Train your team. Set up approvals. Ongoing tuning so it keeps improving as your business changes.",
    },
  ];

  const whyChooseUs = [
    "We live and breathe OpenClaw — we've deployed it in companies just like yours.",
    "Self-hosted = full ownership. No vendor lock-in, no per-seat pricing, no data harvesting.",
    "Real results fast: most clients see major workflows automated in weeks.",
    "Battle-tested security: sandboxing, approval gates, audit logs.",
  ];

  return (
    <section id="expertise" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            How We Deploy It <span className="italic text-orange">In Your Business</span>
          </h2>
          <p className="text-lg text-aa max-w-2xl mx-auto mb-8">
            No Mac Mini experiments. No exposed keys. No weekend crashes.
          </p>
          <p className="text-lg text-aa max-w-2xl mx-auto font-semibold">
            We handle everything:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card h-full relative overflow-hidden">
                <span className="absolute -top-4 -right-2 text-8xl font-editorial text-border/20 group-hover:text-orange/10 transition-colors duration-500">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                    <span className="text-orange font-semibold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-editorial mb-3 text-a">{step.title}</h3>
                  <p className="text-aa leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-editorial mb-8 text-center">
            Why Businesses <span className="italic text-orange">Choose Us</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-aa leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const tiers = [
    {
      name: "Discovery Workshop",
      price: "$5,000",
      description: "2-day deep dive. Full workflow audit + prioritized automation roadmap. You walk away knowing exactly what's possible and ROI.",
      features: [
        "2-day deep dive",
        "Full workflow audit",
        "Prioritized automation roadmap",
        "ROI analysis",
      ],
      cta: "Book Discovery",
      popular: false,
    },
    {
      name: "Full Deployment",
      price: "$25,000",
      description: "Everything in Discovery + custom skills + production deploy + team training + 90 days support.",
      features: [
        "Everything in Discovery",
        "Custom skills development",
        "Production deployment",
        "Team training",
        "90 days support",
      ],
      cta: "Start Deployment",
      popular: true,
    },
    {
      name: "Ongoing Partnership",
      price: "$50,000+/year",
      description: "Dedicated engineer. Continuous new automations. Quarterly reviews. Priority fixes. We grow with you.",
      features: [
        "Everything in Full Deployment",
        "Dedicated engineer",
        "Continuous new automations",
        "Quarterly reviews",
        "Priority fixes",
        "We grow with you",
      ],
      cta: "Become a Partner",
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
            Engagements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            Choose Your <span className="italic text-orange">Engagement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 ${
                tier.popular
                  ? 'bg-a text-white scale-105 shadow-2xl shadow-a/20'
                  : 'bg-white/50 border border-border/30 hover:border-orange/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-orange rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-editorial mb-3 ${tier.popular ? 'text-white' : 'text-a'}`}>
                  {tier.name}
                </h3>
                <div className={`text-5xl font-editorial mb-3 ${tier.popular ? 'text-orange' : 'text-a'}`}>
                  {tier.price}
                </div>
                <p className={`text-sm ${tier.popular ? 'text-white/70' : 'text-aa'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-orange' : 'text-orange'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.popular ? 'text-white/90' : 'text-aa'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-orange text-white hover:bg-orange-light'
                    : 'border border-border hover:border-orange hover:text-orange'
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

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does deployment take?",
      answer: "Discovery: 2 days. Full deployment: 4–8 weeks depending on integrations."
    },
    {
      question: "Do you need our servers?",
      answer: "We deploy on your infrastructure (cloud or on-prem). You stay in control."
    },
    {
      question: "Is it secure for enterprise use?",
      answer: "Yes. Sandboxed tools, approval workflows, full audit trails. We've done air-gapped and regulated environments."
    },
    {
      question: "What if we already tried running it ourselves?",
      answer: "Most companies start there and hit limits. We take it from hobby to reliable business tool."
    },
    {
      question: "Do you support teams or just individuals?",
      answer: "Fully multi-user. Shared agents, role-based access, team channels."
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 line-pattern" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-editorial mb-6">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/30 bg-white/40 overflow-hidden transition-all duration-300 hover:border-orange/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium text-a pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'rotate-45 bg-orange' : ''}`}>
                  <svg
                    className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-orange'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-aa leading-relaxed">
                  {faq.answer}
                </p>
              </div>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            Ready to <span className="italic text-orange">Automate Your Business?</span>
          </h2>
          <p className="text-lg text-aa mb-4">
            Spots are limited — we only take clients we know we can transform.
          </p>
          <p className="text-lg text-aa mb-4">
            Book a 30-minute call. Tell us your biggest manual headache.
          </p>
          <p className="text-lg text-aa font-semibold">
            We'll show you exactly how OpenClaw fixes it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-aa mb-2">Full Name</label>
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
              <label htmlFor="email" className="block text-sm font-medium text-aa mb-2">Work Email</label>
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
              <label htmlFor="company" className="block text-sm font-medium text-aa mb-2">Company</label>
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
              <label htmlFor="tier" className="block text-sm font-medium text-aa mb-2">Interest Level</label>
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
              <label htmlFor="message" className="block text-sm font-medium text-aa mb-2">Tell us your biggest manual headache</label>
              <textarea
                id="message"
                rows={4}
                className="input-field resize-none"
                placeholder="What manual processes are slowing down your business?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-base !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Schedule Call
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-center text-aa text-sm mt-4">
                We'll show you exactly how OpenClaw fixes it.
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
    <footer className="py-16 border-t border-border/30">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-editorial text-xl text-a">Forward<span className="text-orange italic">OpenClaw</span></span>
            </a>
            <p className="text-aa max-w-sm">
              Forward OpenClaw — Elite OpenClaw Deployment<br />
              Your workflows automated. Your business accelerated.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-a mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="#process" className="text-aa hover:text-orange transition-colors">Automations</a>
              <a href="#expertise" className="text-aa hover:text-orange transition-colors">Process</a>
              <a href="#services" className="text-aa hover:text-orange transition-colors">Services</a>
              <a href="#contact" className="text-aa hover:text-orange transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-a mb-4">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-aa hover:text-orange transition-colors">LinkedIn</a>
              <a href="#" className="text-aa hover:text-orange transition-colors">Twitter</a>
              <a href="mailto:contact@forwardopenclaw.com" className="text-aa hover:text-orange transition-colors">Email Us</a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-aa text-sm">
            &copy; {new Date().getFullYear()} Forward OpenClaw. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-aa hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-aa hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />

      <Header />
      <Hero />
      <RealUsersAutomating />
      <HowWeDeploy />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
