'use client'

import { motion } from 'motion/react'
import { useLang, type Lang } from '@/lib/i18n'

type Item = { name: { ro: string; en: string }; desc: { ro: string; en: string }; price: string }
type Category = {
  id: string
  title: { ro: string; en: string }
  accent: string
  chip: string
  cardBg: string
  items: Item[]
}

const categories: Category[] = [
  {
    id: 'espresso',
    title: { ro: 'Espresso', en: 'Espresso' },
    accent: 'bg-terracotta',
    chip: 'bg-terracotta/15 text-terracotta',
    cardBg: 'bg-terracotta/10',
    items: [
      { name: { ro: 'Espresso', en: 'Espresso' }, desc: { ro: 'Dublu, dens, serios.', en: 'Double shot, dense, serious.' }, price: '10' },
      { name: { ro: 'Flat White', en: 'Flat White' }, desc: { ro: 'Microspumă mătăsoasă.', en: 'Silky microfoam.' }, price: '16' },
      { name: { ro: 'Cortado', en: 'Cortado' }, desc: { ro: 'Echilibru perfect 1:1.', en: 'Perfect 1:1 balance.' }, price: '14' },
    ],
  },
  {
    id: 'filter',
    title: { ro: 'Filtru', en: 'Filter' },
    accent: 'bg-forest',
    chip: 'bg-forest/15 text-forest',
    cardBg: 'bg-forest/10',
    items: [
      { name: { ro: 'V60', en: 'V60' }, desc: { ro: 'Single origin, clar și floral.', en: 'Single origin, clean & floral.' }, price: '18' },
      { name: { ro: 'Chemex', en: 'Chemex' }, desc: { ro: 'Pentru doi, sau doar pentru tine.', en: 'For two, or just you.' }, price: '24' },
      { name: { ro: 'Batch Brew', en: 'Batch Brew' }, desc: { ro: 'Cafeaua zilei, mereu proaspătă.', en: "Today's brew, always fresh." }, price: '12' },
    ],
  },
  {
    id: 'coldbrew',
    title: { ro: 'Cold Brew', en: 'Cold Brew' },
    accent: 'bg-mustard',
    chip: 'bg-mustard/25 text-foreground',
    cardBg: 'bg-mustard/15',
    items: [
      { name: { ro: 'Cold Brew Clasic', en: 'Classic Cold Brew' }, desc: { ro: 'Infuzat 18 ore.', en: '18-hour steep.' }, price: '17' },
      { name: { ro: 'Tonic de Cafea', en: 'Coffee Tonic' }, desc: { ro: 'Espresso, tonic, lămâie.', en: 'Espresso, tonic, lemon.' }, price: '19' },
      { name: { ro: 'Nitro', en: 'Nitro' }, desc: { ro: 'Cremos ca berea, fără alcool.', en: 'Creamy like stout, zero booze.' }, price: '21' },
    ],
  },
  {
    id: 'food',
    title: { ro: 'Mâncare', en: 'Food' },
    accent: 'bg-warm-red',
    chip: 'bg-warm-red/15 text-warm-red',
    cardBg: 'bg-warm-red/10',
    items: [
      { name: { ro: 'Croissant cu unt', en: 'Butter Croissant' }, desc: { ro: 'Copt în casă, fulgi peste tot.', en: 'House-baked, flakes everywhere.' }, price: '12' },
      { name: { ro: 'Banana Bread', en: 'Banana Bread' }, desc: { ro: 'Rețeta bunicii, aprobat de Max.', en: "Grandma's recipe, Max-approved." }, price: '14' },
      { name: { ro: 'Avocado Toast', en: 'Avocado Toast' }, desc: { ro: 'Pâine cu maia, ou, chili.', en: 'Sourdough, egg, chili.' }, price: '26' },
    ],
  },
]

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.35, ease: 'easeOut' as const, delay: i * 0.06 },
})

function CategoryCard({ cat, lang, index }: { cat: Category; lang: Lang; index: number }) {
  return (
    <motion.div
      {...reveal(index)}
      className={`flex flex-col overflow-hidden rounded-[2rem] border border-border backdrop-blur-md ${cat.cardBg}`}
    >
      <div className={`flex items-center justify-between ${cat.accent} px-6 py-4`}>
        <h3 className="font-heading text-2xl font-black text-primary-foreground">
          {cat.title[lang]}
        </h3>
      </div>
      <ul className="flex flex-1 flex-col gap-4 p-6">
        {cat.items.map((item) => (
          <li key={item.name.en} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">{item.name[lang]}</p>
              <p className="text-sm text-muted-foreground">{item.desc[lang]}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-sm font-bold ${cat.chip}`}
            >
              {item.price} lei
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Menu() {
  const { lang, tr } = useLang()
  return (
    <section id="menu" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {tr('menuKicker')}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {tr('menuTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{tr('menuSub')}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
