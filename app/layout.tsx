import type { Metadata } from "next";
import { Syne, Outfit } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mazanga Marketing | Sistema de Crescimento B2B — Luanda, Angola',
  description: 'Mazanga implementa sistemas completos de aquisição e organização comercial para empresas B2B angolanas. ROI mensurável, não posts bonitos. Luanda, Angola.',
  keywords: [
    'agência marketing angola', 'marketing b2b angola', 'crescimento empresarial angola',
    'meta ads angola', 'google ads angola', 'crm angola', 'marketing digital luanda',
    'agência publicidade angola', 'sistema de vendas angola', 'mazanga marketing'
  ],
  metadataBase: new URL('https://mazanga.digital'),
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://mazanga.digital',
    siteName: 'Mazanga Marketing',
    title: 'Mazanga — Sistemas que geram receita previsível',
    description: 'Sistema completo de aquisição B2B para empresas angolanas.',
    images: [{ url: '/images/og-mazanga.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazanga — Sistemas que geram receita previsível',
    description: 'Sistema completo de aquisição B2B para empresas angolanas.',
  },
  robots: { index: true, follow: true },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Mazanga Marketing",
  "url": "https://mazanga.digital",
  "description": "Sistema completo de aquisição e organização comercial B2B para empresas angolanas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Luanda",
    "addressCountry": "AO"
  },
  "sameAs": [
    "https://instagram.com/mazangamarketing",
    "https://linkedin.com/company/mazanga"
  ],
  "areaServed": "AO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-body antialiased bg-bg-primary text-text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
