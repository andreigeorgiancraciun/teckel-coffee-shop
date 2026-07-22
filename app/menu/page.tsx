import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meniu — Teckel Coffee & Cocktails',
  description: 'Descoperă meniul nostru de cafea, băuturi și cocktails.',
}

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 flex flex-col gap-6">
      <Image
        src="/images/menu/menu_page1.jpeg"
        alt="Meniu Teckel Coffee & Cocktails — pagina 1"
        width={1200}
        height={1600}
        className="w-full rounded-2xl shadow-lg"
        priority
      />
      <Image
        src="/images/menu/menu_page2.jpeg"
        alt="Meniu Teckel Coffee & Cocktails — pagina 2"
        width={1200}
        height={1600}
        className="w-full rounded-2xl shadow-lg"
      />
    </main>
  )
}
