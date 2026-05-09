import React from "react"
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Roboto_Mono } from 'next/font/google'
import { ToasterSonner } from '@/components/toaster-sonner'
import CookieConsent from '@/components/CookieConsent'
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics'
import AppThemeProvider from '@/components/AppThemeProvider'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const robotoMono = Roboto_Mono({ subsets: ["latin"], display: "swap", variable: "--font-roboto-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oncuintelligence.com';

export const metadata: Metadata = {
  title: 'Satenergy | Uydu istihbaratı ve enerji verimliliği — ÖNCÜ Intelligence',
  description:
    'Şirketler için enerji verimliliği operasyonu: tesis bazlı tüketim, sektör kıyası ve ISO 50001 uyumlu çıktılar. Uydu istihbaratı ile üretim analizi, verimlilik merkezi ve kurumsal raporlama — ÖNCÜ Intelligence.',
  keywords: [
    'Satenergy',
    'enerji verimliliği',
    'ISO 50001',
    'uydu istihbaratı',
    'enerji analizi',
    'kurumsal raporlama',
    'ÖNCÜ Intelligence',
    'ESCO',
  ],
  authors: [{ name: 'Cem Adil Öncü' }],
  creator: 'ÖNCÜ Intelligence',
  category: 'Technology',
  classification: 'Technology',
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'Satenergy — ÖNCÜ Intelligence',
    title: 'Satenergy | Uydu istihbaratı ve enerji verimliliği',
    description:
      'Kurumsal denetim ve raporlama: tesis skoru, sektör karşılaştırması, karbon ve tasarruf görünürlüğü, ISO 50001 uyumlu şablonlar.',
    images: [
      {
        url: `${siteUrl}/oncu-intelligence-logo.png`,
        width: 1200,
        height: 630,
        alt: 'ÖNCÜ Intelligence',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satenergy | Uydu istihbaratı ve enerji verimliliği',
    description:
      'Tesis bazlı tüketim, sektör kıyası ve ISO 50001 uyumlu çıktılar — tek oturumda. ÖNCÜ Intelligence.',
    creator: '@oncuintel',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="tr" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      </head>
      <body className={`${plusJakarta.variable} ${robotoMono.variable} font-sans antialiased`}>
        <AppThemeProvider>
        <a
          href="#main"
          className="fixed left-[-9999px] top-4 z-[300] whitespace-nowrap rounded-md bg-[#15803d] px-4 py-2 text-sm font-semibold text-white shadow-lg outline-none ring-offset-2 ring-offset-[#f8fafc] focus-visible:left-4 focus-visible:ring-2 focus-visible:ring-[#15803d] dark:ring-offset-background"
        >
          İçeriğe atla
        </a>
        {children}
        <ToasterSonner />
        <CookieConsent />
        <ConsentAwareAnalytics />
        </AppThemeProvider>
      </body>
    </html>
  )
}
