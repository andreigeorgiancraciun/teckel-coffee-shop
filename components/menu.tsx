'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useLang, type Lang } from '@/lib/i18n'

type Item = { name: { ro: string; en: string }; desc?: { ro: string; en: string }; price: string }
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
      { name: { ro: 'Espresso Single', en: 'Espresso Single' }, price: '9' },
      { name: { ro: 'Espresso Double', en: 'Espresso Double' }, price: '12' },
      { name: { ro: 'Americano / Long Black', en: 'Americano / Long Black' }, price: '13' },
      { name: { ro: 'Cortado', en: 'Cortado' }, price: '13' },
      { name: { ro: 'Cappuccino', en: 'Cappuccino' }, price: '15' },
      { name: { ro: 'Flat White', en: 'Flat White' }, price: '18' },
    ],
  },
  {
    id: 'specialty',
    title: { ro: 'Cold & Specialty', en: 'Cold & Specialty' },
    accent: 'bg-terracotta',
    chip: 'bg-terracotta/15 text-terracotta',
    cardBg: 'bg-terracotta/10',
    items: [
      { name: { ro: 'Cold Brew', en: 'Cold Brew' }, price: '18' },
      { name: { ro: 'Latte', en: 'Latte' }, desc: { ro: 'Cald / Rece', en: 'Hot / Iced' }, price: '20' },
      { name: { ro: 'Matcha Latte', en: 'Matcha Latte' }, desc: { ro: 'Cald / Rece', en: 'Hot / Iced' }, price: '23' },
      { name: { ro: 'Cold Brew Tonic', en: 'Cold Brew Tonic' }, price: '26' },
      { name: { ro: 'Babyccino', en: 'Babyccino' }, desc: { ro: 'pentru copii', en: 'for kids' }, price: '7' },
      { name: { ro: 'Extra Shot', en: 'Extra Shot' }, price: '+4' },
      { name: { ro: 'Lapte ovăz', en: 'Oat milk' }, price: '+3' },
    ],
  },
  {
    id: 'spritz',
    title: { ro: 'Spritz & Fresh', en: 'Spritz & Fresh' },
    accent: 'bg-mustard',
    chip: 'bg-mustard/25 text-foreground',
    cardBg: 'bg-mustard/15',
    items: [
      { name: { ro: 'Aperol Spritz', en: 'Aperol Spritz' }, price: '30' },
      { name: { ro: 'Hugo', en: 'Hugo' }, price: '30' },
      { name: { ro: 'Paloma', en: 'Paloma' }, price: '40' },
    ],
  },
  {
    id: 'gintonic',
    title: { ro: 'Gin & Tonic', en: 'Gin & Tonic' },
    accent: 'bg-forest',
    chip: 'bg-forest/15 text-forest',
    cardBg: 'bg-forest/10',
    items: [
      { name: { ro: 'Gin Tonic Originale', en: 'Gin Tonic Originale' }, price: '38' },
      { name: { ro: 'Gin Tonic Arancia', en: 'Gin Tonic Arancia' }, price: '38' },
      { name: { ro: 'Gin Tonic Limone', en: 'Gin Tonic Limone' }, price: '38' },
      { name: { ro: 'Gin Tonic Rosa', en: 'Gin Tonic Rosa' }, price: '38' },
    ],
  },
  {
    id: 'classics',
    title: { ro: 'Classics', en: 'Classics' },
    accent: 'bg-warm-red',
    chip: 'bg-warm-red/15 text-warm-red',
    cardBg: 'bg-warm-red/10',
    items: [
      { name: { ro: 'Negroni', en: 'Negroni' }, price: '35' },
      { name: { ro: 'Margarita', en: 'Margarita' }, price: '35' },
      { name: { ro: 'Whiskey Sour', en: 'Whiskey Sour' }, price: '35' },
      { name: { ro: 'Amaretto Sour', en: 'Amaretto Sour' }, price: '35' },
      { name: { ro: 'Espresso Martini', en: 'Espresso Martini' }, price: '40' },
      { name: { ro: 'Pornstar Martini', en: 'Pornstar Martini' }, price: '40' },
    ],
  },
  {
    id: 'spirits',
    title: { ro: 'Spirits & Shots', en: 'Spirits & Shots' },
    accent: 'bg-terracotta',
    chip: 'bg-terracotta/15 text-terracotta',
    cardBg: 'bg-terracotta/10',
    items: [
      { name: { ro: 'Vodka Beluga', en: 'Vodka Beluga' }, desc: { ro: '50 ml', en: '50 ml' }, price: '25' },
      { name: { ro: 'Whiskey Glenfiddich', en: 'Whiskey Glenfiddich' }, desc: { ro: '50 ml', en: '50 ml' }, price: '25' },
      { name: { ro: 'Jägermeister', en: 'Jägermeister' }, price: '18' },
      { name: { ro: 'Tequila Añejo', en: 'Tequila Añejo' }, price: '23' },
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
          <li key={`${item.name.en}-${item.price}`} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">{item.name[lang]}</p>
              {item.desc && <p className="text-sm text-muted-foreground">{item.desc[lang]}</p>}
            </div>
            <span className={`shrink-0 rounded-full px-3 py-1 text-sm font-bold ${cat.chip}`}>
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
          <motion.div
            {...reveal(categories.length)}
            className="flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] border border-border bg-secondary/50 backdrop-blur-md p-8 text-center sm:col-span-2"
          >
            <p className="font-heading text-xl font-bold text-foreground">
              {lang === 'ro' ? 'Vinuri, bere, ceai, limonadă și altele' : 'Wines, beer, tea, lemonade & more'}
            </p>
            <p className="text-muted-foreground">
              {lang === 'ro' ? 'Vezi meniul complet' : 'See the full menu'}
            </p>
            <Link
              href="/menu"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {lang === 'ro' ? 'Meniu complet →' : 'Full menu →'}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
