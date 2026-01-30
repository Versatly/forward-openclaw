import type { Metadata } from "next";
import { Rethink_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://forwardopenclaw.com'),
  title: {
    default: "Forward OpenClaw | Simple AI for Local Shops, Salons, and Service Businesses",
    template: "%s | Forward OpenClaw"
  },
  description: "Save hours every day with AI automation for your local business. Just forward customer messages and let AI handle bookings, replies, and more. No coding required.",
  keywords: ["AI for small business", "AI automation for local businesses", "customer service AI", "AI booking system", "WhatsApp AI", "AI for plumbers", "AI for salons", "AI for restaurants", "business automation", "local service AI"],
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
    title: 'Forward OpenClaw | Simple AI for Local Shops, Salons, and Service Businesses',
    description: 'Save hours every day with AI automation for your local business. Just forward customer messages and let AI handle bookings, replies, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forward OpenClaw - Simple AI for Local Service Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward OpenClaw | Simple AI for Local Shops, Salons, and Service Businesses',
    description: 'Save hours every day with AI automation for your local business. Just forward customer messages and let AI handle bookings, replies, and more.',
    images: ['/og-image.png'],
    creator: '@forwardopenclaw',
  },
  alternates: {
    canonical: 'https://forwardopenclaw.com',
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
              "description": "Simple AI automation for local service businesses. Save hours every day by forwarding customer messages and letting AI handle bookings, replies, and more.",
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
              "serviceType": "AI Automation for Local Service Businesses",
              "provider": {
                "@type": "Organization",
                "name": "Forward OpenClaw"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Automation Services for Local Businesses",
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
                      "description": "Full AI setup and configuration for your business workflows"
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
      <body className={`${rethinkSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
