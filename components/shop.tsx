'use client'

import { motion } from 'motion/react'
import { useLang } from '@/lib/i18n'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CoffeeBagSvg } from '@/components/coffee-bag-svg'

type Product = {
  nameRo: string
  nameEn: string
  weight: string
  price: string
  descRo: string
  descEn: string
  badge?: { ro: string; en: string }
  accent: string
  bag: { bagColor: string; flapColor: string; labelColor: string; accentColor: string }
}

const products: Product[] = [
  {
    nameRo: 'Lăbuță de Dimineață',
    nameEn: 'Morning Paw',
    weight: '250g',
    price: '49 lei',
    descRo: 'Un blend delicat de Etiopia & Colombia. Exact cât îi trebuie lui Zucchini să-și miște coada la prima cafea.',
    descEn: "A delicate Ethiopia & Colombia blend. Just enough to get Zucchini's tail wagging at first sip.",
    badge: { ro: '⭐ Preferat', en: '⭐ Fan fav' },
    accent: 'bg-mustard/20 border-mustard/40',
    bag: { bagColor: '#D4A843', flapColor: '#B8902F', labelColor: '#8B6914', accentColor: '#F5D78A' },
  },
  {
    nameRo: 'Os Prăjit Intens',
    nameEn: 'Dark Roast Bone',
    weight: '250g',
    price: '52 lei',
    descRo: 'Prăjit închis, tare și fără scuze. Pentru zilele în care Zucchini latră la toată lumea din parc.',
    descEn: 'Dark, bold and unapologetic. For the days Zucchini barks at everyone in the park.',
    accent: 'bg-terracotta/10 border-terracotta/30',
    bag: { bagColor: '#5C2E0E', flapColor: '#3D1A06', labelColor: '#2A1004', accentColor: '#C4703A' },
  },
  {
    nameRo: 'Teckel Signature',
    nameEn: 'Teckel Signature',
    weight: '250g · 500g',
    price: '55 / 99 lei',
    descRo: 'Blendăul casei. Lung ca un teckel, aromat ca o cafenea bună. Aprobat cu ambele lăbuțe față.',
    descEn: 'The house blend. Long like a dachshund, aromatic like a good café. Approved with both front paws.',
    badge: { ro: '🏠 Casa', en: '🏠 House' },
    accent: 'bg-forest/10 border-forest/30',
    bag: { bagColor: '#2D5A3D', flapColor: '#1A3D28', labelColor: '#0F2419', accentColor: '#7EC89A' },
  },
  {
    nameRo: 'Siesta lui Zucchini',
    nameEn: "Zucchini's Nap",
    weight: '200g',
    price: '46 lei',
    descRo: 'Decafeinizat, ușor și floral. Perfect pentru după-amiezi leneșe — exact cum doarme Zucchini pe canapea.',
    descEn: 'Decaf, light and floral. Perfect for lazy afternoons — just like Zucchini napping on the couch.',
    accent: 'bg-accent/50 border-border',
    bag: { bagColor: '#B8A9D4', flapColor: '#8E7DB8', labelColor: '#5C4E8A', accentColor: '#E8E0F5' },
  },
  {
    nameRo: 'Filtru de Haită',
    nameEn: 'Pack Filter',
    weight: '150g',
    price: '39 lei',
    descRo: 'Single origin din Kenya. Zucchini a mirosit saci întregi de boabe ca să-l aleagă pe acesta.',
    descEn: 'Single origin from Kenya. Zucchini sniffed whole sacks of beans to pick this one.',
    accent: 'bg-secondary/50 border-border',
    bag: { bagColor: '#C4956A', flapColor: '#A0724A', labelColor: '#6B4A2A', accentColor: '#EDD5B5' },
  },
  {
    nameRo: 'Cutia cu Surprize',
    nameEn: 'Surprise Box',
    weight: '3 × 150g',
    price: '119 lei',
    descRo: 'Trei sorturi diferite, ambalate ca un cadou. Zucchini alege el ce intră — boss e boss.',
    descEn: 'Three different coffees, gift-wrapped. Zucchini picks what goes in — boss is boss.',
    badge: { ro: '🎁 Cadou', en: '🎁 Gift' },
    accent: 'bg-warm-red/10 border-warm-red/30',
    bag: { bagColor: '#C0392B', flapColor: '#922B21', labelColor: '#641E16', accentColor: '#F1948A' },
  },
]

export function Shop() {
  const { tr, lang } = useLang()

  return (
    <section id="shop" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
          {tr('shopKicker')}
        </span>
        <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
          {tr('shopTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
          {tr('shopSub')}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.nameRo}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className={`relative flex flex-col rounded-[2rem] border p-6 ${p.accent}`}
          >
            {p.badge && (
              <span className="absolute right-5 top-5 rounded-full bg-card px-3 py-1 text-xs font-bold text-foreground shadow-sm">
                {lang === 'ro' ? p.badge.ro : p.badge.en}
              </span>
            )}

            <div className="mx-auto w-36 h-48">
              <CoffeeBagSvg {...p.bag} />
            </div>

            <div className="mt-2 flex-1">
              <h3 className="font-heading text-xl font-black text-foreground">
                {lang === 'ro' ? p.nameRo : p.nameEn}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {p.weight}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {lang === 'ro' ? p.descRo : p.descEn}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-heading text-2xl font-black text-foreground">
                {p.price}
              </span>
              <Button size="sm" className="rounded-full gap-1.5">
                <ShoppingBag className="h-3.5 w-3.5" />
                {tr('shopOrder')}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
