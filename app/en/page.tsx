import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Menu } from '@/components/menu'
import { Shop } from '@/components/shop'
import { Gallery } from '@/components/gallery'
import { Visit } from '@/components/visit'
import { Footer } from '@/components/footer'
import PawTrail from '@/components/paw-trail-loader'
import { BgBlobs } from '@/components/bg-blobs'

export const metadata: Metadata = {
  title: 'Teckel Coffee & Cocktails — specialty coffee with Zucchini',
  description:
    'A specialty coffee shop run (mostly) by Zucchini, our harlequin dachshund. Espresso, filter, cold brew & good vibes.',
  alternates: {
    canonical: '/en',
    languages: { ro: '/', en: '/en' },
  },
}

// Reservations are hidden for now — Contact and FloatingCta come back once the flow is ready
export default function EnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main className="relative">
        <BgBlobs />
        <PawTrail />
        <Hero lang="en" />
        <Menu lang="en" />
        <Shop lang="en" />
        <About lang="en" />
        <Gallery lang="en" />
        <Visit lang="en" />
      </main>
      <Footer lang="en" />
    </>
  )
}
