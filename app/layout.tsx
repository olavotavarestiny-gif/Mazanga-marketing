import type { Metadata } from "next";
import { Syne, Outfit } from 'next/font/google';
import Script from 'next/script';
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
    "https://instagram.com/mazangamarketing.ao",
    "https://www.linkedin.com/company/mazanga-digital"
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WXRT74G');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'pt',
                  includedLanguages: 'pt,fr',
                  autoDisplay: false,
                },
                'google_translate_element'
              );

              var savedLang = localStorage.getItem('site-lang');
              if (savedLang === 'fr') {
                document.cookie = 'googtrans=/pt/fr;path=/';
                document.cookie = 'googtrans=/pt/fr;domain=' + location.hostname + ';path=/';
                setTimeout(function () {
                  var select = document.querySelector('.goog-te-combo');
                  if (select) {
                    select.value = 'fr';
                    select.dispatchEvent(new Event('change'));
                  }
                }, 700);
              }
            }

            window.__setSiteLanguage = function (lang) {
              if (lang === 'pt') {
                localStorage.setItem('site-lang', 'pt');
                document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
                document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=' + location.hostname + '; path=/';
                window.location.reload();
                return;
              }

              localStorage.setItem('site-lang', 'fr');
              document.cookie = 'googtrans=/pt/fr;path=/';
              document.cookie = 'googtrans=/pt/fr;domain=' + location.hostname + ';path=/';

              var select = document.querySelector('.goog-te-combo');
              if (select) {
                select.value = 'fr';
                select.dispatchEvent(new Event('change'));
              } else {
                window.location.reload();
              }
            };
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body antialiased bg-bg-primary text-text-primary">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WXRT74G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
