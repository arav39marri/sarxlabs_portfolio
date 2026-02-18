import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SARX LABS - Technology Studio',
  description: 'Premium tech studio building web applications, mobile apps, AI solutions, and custom software',
  icons: {
    icon: [
      {
        url: '/logo_sarxlabs.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_sarxlabs.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_sarxlabs.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_sarxlabs.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
