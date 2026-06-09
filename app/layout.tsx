import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Fraunces, DM_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
})
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Teckel Coffee & Cocktails — with Zucchini',
  description:
    'A Brooklyn-style specialty coffee & cocktails spot run (mostly) by Zucchini, our harlequin dachshund. Espresso, filter, cold brew & good vibes. Cafea de specialitate și cocktailuri cu Zucchini.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
