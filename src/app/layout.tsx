import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://forwardopenclaw.com'),
  title: {
    default: "Forward OpenClaw | Elite AI Deployment & Consulting",
    template: "%s | Forward OpenClaw"
  },
  description: "We come to you. We deploy. We maintain. You profit. Forward OpenClaw is the elite team that brings enterprise-grade AI automation to your doorstep. $5K-$50K engagements that transform your business.",
  keywords: ["AI consulting", "AI deployment", "enterprise AI", "AI automation", "OpenClaw", "machine learning consulting", "AI implementation", "forward deploy AI"],
  authors: [{ name: "Forward OpenClaw" }],
  creator: "Forward OpenClaw",
  publisher: "Forward OpenClaw",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://forwardopenclaw.com',
    siteName: 'Forward OpenClaw',
    title: 'Forward OpenClaw | Elite AI Deployment & Consulting',
    description: 'We come to you. We deploy. We maintain. You profit. Enterprise-grade AI automation delivered by elite specialists.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forward OpenClaw - Elite AI Deployment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward OpenClaw | Elite AI Deployment & Consulting',
    description: 'We come to you. We deploy. We maintain. You profit. Enterprise-grade AI automation delivered by elite specialists.',
    images: ['/og-image.png'],
    creator: '@forwardopenclaw',
  },
  alternates: {
    canonical: 'https://forwardopenclaw.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Forward OpenClaw",
              "url": "https://forwardopenclaw.com",
              "logo": "https://forwardopenclaw.com/logo.png",
              "description": "Elite AI deployment and consulting team specializing in enterprise-grade AI automation.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/forwardopenclaw",
                "https://linkedin.com/company/forwardopenclaw"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "contact@forwardopenclaw.com"
              },
              "areaServed": "Worldwide",
              "priceRange": "$5,000 - $50,000"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Consulting and Deployment",
              "provider": {
                "@type": "Organization",
                "name": "Forward OpenClaw"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Deployment Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Discovery",
                      "description": "AI readiness assessment and strategy roadmap"
                    },
                    "price": "5000",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Implementation",
                      "description": "Full AI system deployment and integration"
                    },
                    "price": "25000",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Partnership",
                      "description": "Ongoing AI maintenance and optimization"
                    },
                    "price": "50000",
                    "priceCurrency": "USD"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
