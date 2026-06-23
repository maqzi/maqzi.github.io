import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Munaf Qazi — ML Engineering Director',
    template: '%s | Munaf Qazi',
  },
  description:
    'Director of ML Engineering at Munich Re. I build AI systems from research to production — platforms, models, and products at enterprise scale.',
  keywords: [
    'Munaf Qazi',
    'ML Engineering',
    'Machine Learning',
    'AI Systems',
    'MLOps',
    'Technical Leadership',
    'New York',
  ],
  authors: [{ name: 'Munaf Arshad Qazi' }],
  creator: 'Munaf Arshad Qazi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maqzi.github.io',
    siteName: 'Munaf Qazi',
    title: 'Munaf Qazi — ML Engineering Director',
    description:
      'Director of ML Engineering at Munich Re. Building AI systems from research to production at enterprise scale.',
    images: [
      {
        url: 'https://maqzi.github.io/og.png',
        width: 1200,
        height: 630,
        alt: 'Munaf Qazi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Munaf Qazi — ML Engineering Director',
    description:
      'Director of ML Engineering at Munich Re. Building AI systems from research to production.',
    images: ['https://maqzi.github.io/og.png'],
  },
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
  metadataBase: new URL('https://maqzi.github.io'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
