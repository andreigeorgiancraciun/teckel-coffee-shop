import type { Metadata } from 'next'
import Image from 'next/image'
import { MenuHeader } from '@/components/menu-header'

export const metadata: Metadata = {
  title: 'Meniu — Teckel Coffee & Cocktails',
  description: 'Descoperă meniul nostru de cafea, băuturi și cocktails.',
}

export default function MenuPage() {
  return (
    <>
      <MenuHeader />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Image
          src="/images/menu.png"
          alt="Meniu Teckel Coffee & Cocktails"
          width={1200}
          height={1600}
          className="w-full rounded-2xl shadow-lg"
          priority
        />
      </main>
    </>
  )
}
