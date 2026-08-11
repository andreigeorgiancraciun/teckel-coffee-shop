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
  title: 'Teckel Coffee & Cocktails — cafea de specialitate cu Zucchini',
  description:
    'Cafenea de specialitate condusă (mai mult) de Zucchini, teckelul nostru arlechin. Espresso, filtru, cold brew și energie bună.',
  alternates: {
    canonical: '/',
    languages: { ro: '/', en: '/en' },
  },
}

// Rezervările sunt ascunse temporar — Contact și FloatingCta se readaugă când e gata fluxul
// About și Gallery sunt ascunse temporar
export default function Page() {
  return (
    <>
      <Navbar lang="ro" />
      <main className="relative">
        <BgBlobs />
        <PawTrail />
        <Hero lang="ro" />
        <Menu lang="ro" />
        <Shop lang="ro" />
        {/* <About lang="ro" /> */}
        {/* <Gallery lang="ro" /> */}
        <Visit lang="ro" />
      </main>
      <Footer lang="ro" />
    </>
  )
}
