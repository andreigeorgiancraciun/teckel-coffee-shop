import dynamic from 'next/dynamic'
import { LanguageProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { BgBlobs } from '@/components/bg-blobs'
import PawTrail from '@/components/paw-trail-loader'

// Secțiunile de sub prima vizualizare sunt code-split separat de Navbar/Hero,
// ca JS-ul lor să nu concureze cu randarea logo-ului (elementul LCP) la
// încărcarea inițială. Tot randate pe server (ssr implicit true) — fără
// impact vizual sau CLS, doar hidratarea lor devine un chunk separat.
const About = dynamic(() => import('@/components/about').then((m) => m.About))
const Menu = dynamic(() => import('@/components/menu').then((m) => m.Menu))
const Shop = dynamic(() => import('@/components/shop').then((m) => m.Shop))
const Gallery = dynamic(() => import('@/components/gallery').then((m) => m.Gallery))
const Visit = dynamic(() => import('@/components/visit').then((m) => m.Visit))
const Footer = dynamic(() => import('@/components/footer').then((m) => m.Footer))

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
