import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Menu } from '@/components/menu'
import { Shop } from '@/components/shop'
import { Gallery } from '@/components/gallery'
import { Visit } from '@/components/visit'
import { Footer } from '@/components/footer'
import { PawTrail } from '@/components/paw-trail'
import { BgBlobs } from '@/components/bg-blobs'

// Rezervările sunt ascunse temporar — Contact și FloatingCta se readaugă când e gata fluxul
export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="relative">
        <BgBlobs />
        <PawTrail />
        <Hero />
        <Menu />
        <Shop />
        <About />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
