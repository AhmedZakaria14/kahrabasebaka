import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config/site';
import { getLocalBusinessSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { ContactModal } from '@/components/common/ContactModal';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { ScrollToTop } from '@/components/common/ScrollToTop';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.SITE_URL),
  title: {
    default: siteConfig.defaultMetaTitle,
    template: `%s${siteConfig.titleSuffix}`
  },
  description: siteConfig.defaultMetaDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: 'Next.js',
  keywords: [
    'كهربائي بالرياض',
    'كهربائي الرياض',
    'فني كهرباء بالرياض',
    'كهربائي منازل بالرياض',
    'صيانة كهرباء بالرياض',
    'تأسيس كهرباء بالرياض',
    'معلم كهرباء بالرياض',
    'سباك بالرياض',
    'سباك الرياض',
    'فني سباكة بالرياض',
    'سباك منازل بالرياض',
    'صيانة سباكة بالرياض',
    'كشف تسربات المياه بالرياض',
    'إصلاح تسربات المياه بالرياض',
    'تسليك مجاري بالرياض',
    'تركيب أدوات صحية بالرياض',
    'تركيب سخانات بالرياض',
    'صيانة سخانات بالرياض',
    'تمديدات سباكة بالرياض'
  ],
  alternates: {
    canonical: siteConfig.SITE_URL
  },
  openGraph: {
    title: siteConfig.defaultMetaTitle,
    description: siteConfig.defaultMetaDescription,
    url: siteConfig.SITE_URL,
    siteName: siteConfig.name,
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'فني كهرباء وسباكة الرياض لخدمات الصيانة المنزلية والتركيب'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultMetaTitle,
    description: siteConfig.defaultMetaDescription,
    images: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${ibmPlexSansArabic.className}`}>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${ibmPlexSansArabic.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950`}>
        <ScrollProgress />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <ScrollToTop />
        <ContactModal />
      </body>
    </html>
  );
}
