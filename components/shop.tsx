'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useLang } from '@/lib/i18n'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Product = {
  nameRo: string
  nameEn: string
  weight: string
  price: string
  descRo: string
  descEn: string
  badge?: { ro: string; en: string }
  accent: string
  image: string
}

const products: Product[] = [
  {
    nameRo: 'Colombia Patio Bonito',
    nameEn: 'Colombia Patio Bonito',
    weight: '200g',
    price: '80 lei',
    descRo: 'Filtru washed din Caldono, Cauca — lămâie siciliană, zmeură galbenă, coacăze roșii și o urmă florală de ceai. Zucchini aprobă orice miroase a fructe de pădure.',
    descEn: 'Washed filter from Caldono, Cauca — Sicilian lemon, yellow raspberries, red currants and a floral tea finish. Zucchini approves anything that smells like berries.',
    accent: 'bg-mustard/20 border-mustard/40',
    image: '/images/shop/columbia_coffee.png',
  },
  {
    nameRo: 'Ethiopia Buture',
    nameEn: 'Ethiopia Buture',
    weight: '200g',
    price: '75 lei',
    descRo: 'Espresso washed din Jimma — bomboane de portocală, caramel și o urmă de ciocolată neagră. Aciditate vie, dulceață care ține de foc.',
    descEn: 'Washed espresso from Jimma — orange candies, caramel fudge and a dark chocolate finish. Bright acidity balanced by a lingering sweetness.',
    accent: 'bg-terracotta/10 border-terracotta/30',
    image: '/images/shop/ethiopia_coffee.png',
  },
  {
    nameRo: 'Burundi Masha',
    nameEn: 'Burundi Masha',
    weight: '200g',
    price: '75 lei',
    descRo: 'Procesat honey la stația Masha, Kayanza — citrice proaspete, mușețel dulce, ceai de lămâie și o urmă delicată de anason stelat.',
    descEn: 'Honey-processed at the Masha station, Kayanza — fresh citrus, sweet chamomile, lemon tea and a delicate hint of star anise.',
    accent: 'bg-accent/50 border-border',
    image: '/images/shop/masha_coffee.png',
  },
  {
    nameRo: 'Summer Edition',
    nameEn: 'Summer Edition',
    weight: '200g',
    price: '80 lei',
    descRo: 'Blend de vară Columbia & Etiopia, washed — bomboane, milkshake de căpșuni, ceai rece și cais. Perfect pentru terasă și zile lungi.',
    descEn: 'Summer blend of Colombia & Ethiopia, washed — candies, strawberry milkshake, iced tea and apricot. Perfect for the terrace on long summer days.',
    badge: { ro: '☀️ Ediție de vară', en: '☀️ Summer edition' },
    accent: 'bg-secondary/50 border-border',
    image: '/images/shop/summer_coffee.png',
  },
  {
    nameRo: 'Naughty Surfer',
    nameEn: 'Naughty Surfer',
    weight: '200g',
    price: '80 lei',
    descRo: 'Blend espresso natural, Etiopia Yirgacheffe & Columbia Geisha — căpșuni, zmeură și un final cremos de pralină cu nuga.',
    descEn: 'Natural-process espresso blend, Ethiopia Yirgacheffe & Colombia Geisha — strawberries, raspberries and a creamy nougat-praline finish.',
    accent: 'bg-forest/10 border-forest/30',
    image: '/images/shop/surfer_coffee.png',
  },
  {
    nameRo: 'Naughty Unicorn',
    nameEn: 'Naughty Unicorn',
    weight: '200g',
    price: '80 lei',
    descRo: 'Blend filtru Etiopia & Columbia (Huila) — cireșe maoam, ciocolată cu lapte și înghețată de vanilie. Colorat pe cât de dulce e.',
    descEn: 'Filter blend of Ethiopia & Colombia (Huila) — cherry maoam, milk chocolate and vanilla ice cream. As colorful as it tastes.',
    accent: 'bg-warm-red/10 border-warm-red/30',
    image: '/images/shop/unicorn_coffee.png',
  },
]

const WHATSAPP_NUMBER = '40763823438'

function buildWhatsappLink(product: Product, lang: 'ro' | 'en') {
  const message =
    lang === 'ro'
      ? `Bună! Aș vrea să comand ${product.nameRo} (${product.weight}).`
      : `Hi! I'd like to order ${product.nameEn} (${product.weight}).`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

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

            <div className="relative mx-auto aspect-square w-full max-w-48">
              <Image
                src={p.image}
                alt={lang === 'ro' ? p.nameRo : p.nameEn}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 60vw, 220px"
                className="object-contain"
              />
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
              <Button size="sm" className="rounded-full gap-1.5" asChild>
                <a href={buildWhatsappLink(p, lang)} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  {tr('shopOrder')}
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
