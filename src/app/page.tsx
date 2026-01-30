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
          {['Process', 'Expertise', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-aa hover:text-a rounded-xl transition-all duration-300 hover:bg-white/50 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
          Start a Project
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
          <span className="block text-a">We Deploy</span>
          <span className="block font-editorial-italic text-orange">AI Excellence</span>
          <span className="block text-a">You Thrive</span>
        </h1>

        <p className="text-lg md:text-xl text-aa max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          The elite OpenClaw forward-deploy team brings enterprise-grade AI automation
          directly to your infrastructure, tailored precisely to your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3" style={{ opacity: 0 }}>
          <a href="#contact" className="btn-primary text-base">
            Start Your Transformation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#process" className="btn-secondary text-base">
            See How It Works
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

// Process Section
function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We assess your infrastructure, understand your pain points, and identify high-impact AI opportunities tailored to your business.",
    },
    {
      number: "02",
      title: "Blueprint",
      description: "Our architects design a bespoke AI solution that integrates seamlessly with your existing systems and workflows.",
    },
    {
      number: "03",
      title: "Deploy",
      description: "Our elite team arrives on-site or connects remotely to deploy, test, and optimize your AI systems with precision.",
    },
    {
      number: "04",
      title: "Evolve",
      description: "Ongoing support ensures your AI investment compounds. We monitor, optimize, and evolve with your growing needs.",
    },
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            How We <span className="italic text-orange">Transform</span> Your Business
          </h2>
          <p className="text-lg text-aa max-w-2xl mx-auto">
            A refined methodology developed through enterprise deployments across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-border">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Expertise Section
function Expertise() {
  const expertise = [
    {
      area: "Large Language Models",
      detail: "GPT-4, Claude, Llama, custom fine-tuning",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      )
    },
    {
      area: "Computer Vision",
      detail: "Object detection, image generation, video analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      area: "MLOps & Infrastructure",
      detail: "Kubernetes, Docker, cloud-native AI pipelines",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    {
      area: "Data Engineering",
      detail: "ETL, real-time streaming, data lake architecture",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      area: "Security & Compliance",
      detail: "SOC2, HIPAA, GDPR, air-gapped deployments",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      area: "Edge Computing",
      detail: "On-premise inference, IoT integration, low-latency",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="expertise" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-8">
              Elite Engineers.<br />
              <span className="italic text-orange">Proven Results.</span>
            </h2>
            <p className="text-lg text-aa mb-8 leading-relaxed">
              Our forward-deploy specialists come from leading AI research labs and top tech companies.
              We don&apos;t just understand AI&mdash;we&apos;ve built it at scale.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-card border-2 border-background flex items-center justify-center text-sm font-semibold text-aa"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-aa">+12 specialists ready to deploy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/40 border border-border/30 hover:border-orange/30 transition-all duration-300 hover:bg-white/60 group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 text-orange group-hover:bg-orange/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-a mb-2">{item.area}</h3>
                <p className="text-sm text-aa">{item.detail}</p>
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
    <section id="services" className="section-padding relative">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            Investment That <span className="italic text-orange">Scales</span>
          </h2>
          <p className="text-lg text-aa max-w-2xl mx-auto">
            Transparent pricing with guaranteed results. Choose the engagement level that fits your needs.
          </p>
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
      question: "How long does a typical deployment take?",
      answer: "Deployment timelines vary based on complexity. Discovery engagements are completed in 2 days, while full implementations typically range from 4-8 weeks. We'll provide a detailed timeline during your initial consultation."
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: "We primarily work with mid-market and enterprise clients who have established data infrastructure. However, we evaluate each opportunity based on potential impact and fit, not just company size."
    },
    {
      question: "What makes your approach different?",
      answer: "Unlike consultants who deliver reports and leave, we deploy directly into your environment. Our team stays engaged through implementation, ensuring the solution works in production, not just on paper."
    },
    {
      question: "How do you handle sensitive data and security?",
      answer: "Security is paramount. We're SOC2 compliant and can work within air-gapped environments. All deployments follow your security protocols, and we sign comprehensive NDAs before any engagement."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "Every engagement includes a support period (30-90 days depending on tier). Partnership clients receive dedicated support with 24/7 availability. We also offer annual support contracts for completed implementations."
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 line-pattern" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-editorial mb-6">
            Common <span className="italic text-orange">Questions</span>
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
          <span className="inline-block px-4 py-2 rounded-full bg-orange/10 text-orange text-sm font-semibold tracking-wide uppercase mb-6">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial mb-6">
            Ready to <span className="italic text-orange">Transform?</span>
          </h2>
          <p className="text-lg text-aa">
            Book a free discovery call. No pressure, just possibilities.
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
              <label htmlFor="message" className="block text-sm font-medium text-aa mb-2">Tell us about your AI goals</label>
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
                    Book Your Free Discovery Call
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-center text-aa text-sm mt-4">
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
              Elite AI deployment for enterprises that demand excellence. We come to you, we deploy, you thrive.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-a mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="#process" className="text-aa hover:text-orange transition-colors">Process</a>
              <a href="#expertise" className="text-aa hover:text-orange transition-colors">Expertise</a>
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
      <Process />
      <Expertise />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
