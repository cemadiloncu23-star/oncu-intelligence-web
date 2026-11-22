import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ToasterSonner } from '@/components/toaster-sonner'
import CookieConsent from '@/components/CookieConsent'
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics'
import AppThemeProvider from '@/components/AppThemeProvider'
import './globals.css'

const plusJakarta = IBM_Plex_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-plus-jakarta" });
const robotoMono = IBM_Plex_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], display: "swap", variable: "--font-roboto-mono" });
const inter = IBM_Plex_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-space-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-jetbrains" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oncuintelligence.com';

export const metadata: Metadata = {
  title: {
    default: 'KutGöz | GES için uydu tabanlı saha izleme ve fizibilite — ÖNCÜ Intelligence',
    template: '%s | KutGöz — ÖNCÜ Intelligence',
  },
  description:
    'KutGöz, güneş enerjisi santrallerini ve yatırım arazilerini Sentinel-2 uydu verisiyle izler: tozlanma, bitki istilası ve su birikintisi uyarıları, yatırım öncesi saha ve ışınım raporu.',
  keywords: [
    'KutGöz',
    'GES izleme',
    'güneş enerjisi santrali',
    'GES fizibilite',
    'uydu görüntüsü',
    'Sentinel-2',
    'tozlanma',
    'ÖNCÜ Intelligence',
  ],
  authors: [{ name: 'Cem Adil Öncü' }],
  creator: 'ÖNCÜ Intelligence',
  category: 'Technology',
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
    siteName: 'KutGöz — ÖNCÜ Intelligence',
    title: 'KutGöz | GES için uydu tabanlı saha izleme ve fizibilite',
    description:
      'Güneş santrallerinizi ve yatırım arazilerinizi uydudan izleyin: saha sağlığı uyarıları ve yatırım öncesi saha raporu.',
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
    title: 'KutGöz | GES için uydu tabanlı saha izleme ve fizibilite',
    description:
      'Güneş santrallerinizi ve yatırım arazilerinizi uydudan izleyin — ÖNCÜ Intelligence.',
    creator: '@oncuintel',
  },
  icons: {
    icon: '/onc-logo.png',
    shortcut: '/onc-logo.png',
    apple: '/onc-logo.png',
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
    <html lang="tr" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="tr" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      </head>
      <body className={`${plusJakarta.variable} ${robotoMono.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased`}>
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
