import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ÖNCÜ Intelligence | Stratejik Veri ve İleri Teknoloji Çözümleri',
  description: 'Savunma sanayi ve uzay teknolojilerinde yeni nesil mühendislik. İHA sistemleri, uydu veri analitiği ve stratejik istihbarat çözümleri.',
  generator: 'v0.app',
  keywords: ['savunma sanayi', 'uzay teknolojileri', 'İHA sistemleri', 'uydu veri analitiği', 'stratejik istihbarat'],
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
}

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
