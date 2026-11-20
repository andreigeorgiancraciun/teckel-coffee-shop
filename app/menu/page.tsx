import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meniu — Teckel Coffee & Cocktails',
  description: 'Descoperă meniul nostru de cafea, băuturi și cocktails.',
}

const pages = [
  { src: '/images/menu/1-reguli-caini.png', alt: 'Teckel Coffee & Cocktails — reguli pentru câini', width: 766, height: 1024 },
  { src: '/images/menu/2-meniu-fara-alcool.png', alt: 'Meniu Teckel Coffee & Cocktails — băuturi fără alcool', width: 1024, height: 1536 },
  { src: '/images/menu/3-meniu-alcool.png', alt: 'Meniu Teckel Coffee & Cocktails — băuturi cu alcool', width: 1024, height: 1536 },
  { src: '/images/menu/4-meniu-sezon-rece.png', alt: 'Meniu Teckel Coffee & Cocktails — sezon rece', width: 1122, height: 1402 },
]

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 flex flex-col gap-6">
      {pages.map((page, i) => (
        <Image
          key={page.src}
          src={page.src}
          alt={page.alt}
          width={page.width}
          height={page.height}
          sizes="(max-width: 672px) 100vw, 672px"
          className="w-full rounded-2xl shadow-lg"
          priority={i === 0}
        />
      ))}
    </main>
  )
}
