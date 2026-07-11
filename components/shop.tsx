import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { tr, type Lang } from '@/lib/i18n'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShopInteractions, ProductSearchTrigger } from '@/components/shop-interactions'

export type Bi = { ro: string; en: string }

type ProductDetails = {
  usage: Bi
  origin: Bi
  process: Bi
  taste: Bi
  region: Bi
  farmer: Bi
  variety: Bi
}

export type Product = {
  nameRo: string
  nameEn: string
  weight: string
  price: string
  badge?: Bi
  accent: string
  image: string
  details: ProductDetails
}

export const products: Product[] = [
  {
    nameRo: 'Colombia Patio Bonito',
    nameEn: 'Colombia Patio Bonito',
    weight: '200g',
    price: '80 lei',
    accent: 'bg-mustard/20 border-mustard/40',
    image: '/images/shop/columbia_coffee.png',
    details: {
      usage: { ro: 'Filtru', en: 'Filter' },
      origin: { ro: 'Columbia', en: 'Colombia' },
      process: { ro: 'Washed', en: 'Washed' },
      taste: { ro: 'Lămâie siciliană, zmeură galbenă, coacăze roșii, ceai floral', en: 'Sicilian lemon, yellow raspberries, red currants, floral tea' },
      region: { ro: 'Caldono, Cauca', en: 'Caldono, Cauca' },
      farmer: { ro: 'Paola & Carlos Trujillo', en: 'Paola & Carlos Trujillo' },
      variety: { ro: 'Bourbon Aji', en: 'Bourbon Aji' },
    },
  },
  {
    nameRo: 'Ethiopia Buture',
    nameEn: 'Ethiopia Buture',
    weight: '200g',
    price: '75 lei',
    accent: 'bg-terracotta/10 border-terracotta/30',
    image: '/images/shop/ethiopia_coffee.png',
    details: {
      usage: { ro: 'Espresso', en: 'Espresso' },
      origin: { ro: 'Etiopia', en: 'Ethiopia' },
      process: { ro: 'Washed', en: 'Washed' },
      taste: { ro: 'Bomboane de portocală, caramel, ciocolată neagră', en: 'Orange candies, caramel fudge, dark chocolate' },
      region: { ro: 'Jimma', en: 'Jimma' },
      farmer: { ro: '—', en: '—' },
      variety: { ro: '74110, 75112 & soi nativ etiopian', en: '74110, 75112 & native Ethiopian' },
    },
  },
  {
    nameRo: 'Burundi Masha',
    nameEn: 'Burundi Masha',
    weight: '200g',
    price: '75 lei',
    accent: 'bg-accent/50 border-border',
    image: '/images/shop/masha_coffee.png',
    details: {
      usage: { ro: 'Espresso', en: 'Espresso' },
      origin: { ro: 'Burundi', en: 'Burundi' },
      process: { ro: 'Honey', en: 'Honey' },
      taste: { ro: 'Citrice proaspete, mușețel dulce, ceai de lămâie, anason stelat', en: 'Fresh citrus, sweet chamomile, lemon tea, star anise' },
      region: { ro: 'Kayanza', en: 'Kayanza' },
      farmer: { ro: 'Stația Masha', en: 'Masha station' },
      variety: { ro: 'Bourbon', en: 'Bourbon' },
    },
  },
  {
    nameRo: 'Summer Edition',
    nameEn: 'Summer Edition',
    weight: '200g',
    price: '80 lei',
    badge: { ro: '☀️ Ediție de vară', en: '☀️ Summer edition' },
    accent: 'bg-secondary/50 border-border',
    image: '/images/shop/summer_coffee.png',
    details: {
      usage: { ro: 'Omni (filtru & espresso)', en: 'Omni (filter & espresso)' },
      origin: { ro: 'Columbia & Etiopia', en: 'Colombia & Ethiopia' },
      process: { ro: 'Washed', en: 'Washed' },
      taste: { ro: 'Bomboane, milkshake de căpșuni, ceai rece, cais', en: 'Candies, strawberry milkshake, iced tea, apricot' },
      region: { ro: '—', en: '—' },
      farmer: { ro: 'Diego Samuel Bermudez & Taferi Kela', en: 'Diego Samuel Bermudez & Taferi Kela' },
      variety: { ro: 'Mix', en: 'Mix' },
    },
  },
  {
    nameRo: 'Naughty Surfer',
    nameEn: 'Naughty Surfer',
    weight: '200g',
    price: '80 lei',
    accent: 'bg-forest/10 border-forest/30',
    image: '/images/shop/surfer_coffee.png',
    details: {
      usage: { ro: 'Espresso', en: 'Espresso' },
      origin: { ro: 'Etiopia & Columbia', en: 'Ethiopia & Colombia' },
      process: { ro: 'Natural', en: 'Natural' },
      taste: { ro: 'Căpșuni, zmeură, final cremos de pralină cu nuga', en: 'Strawberries, raspberries, creamy nougat-praline finish' },
      region: { ro: 'Yirgacheffe & Huila', en: 'Yirgacheffe & Huila' },
      farmer: { ro: 'Finca El Mirador & stația Gotiti', en: 'Finca El Mirador & Gotiti station' },
      variety: { ro: 'Geisha', en: 'Geisha' },
    },
  },
  {
    nameRo: 'Naughty Unicorn',
    nameEn: 'Naughty Unicorn',
    weight: '200g',
    price: '80 lei',
    accent: 'bg-warm-red/10 border-warm-red/30',
    image: '/images/shop/unicorn_coffee.png',
    details: {
      usage: { ro: 'Filtru', en: 'Filter' },
      origin: { ro: 'Etiopia & Columbia (Huila)', en: 'Ethiopia & Colombia (Huila)' },
      process: { ro: 'Natural & Washed', en: 'Natural & Washed' },
      taste: { ro: 'Cireșe maoam, ciocolată cu lapte, înghețată de vanilie', en: 'Cherry maoam, milk chocolate, vanilla ice cream' },
      region: { ro: 'Huila', en: 'Huila' },
      farmer: { ro: 'Ferma El Diviso', en: 'El Diviso farm' },
      variety: { ro: 'Ombligon', en: 'Ombligon' },
    },
  },
]

const WHATSAPP_NUMBER = '40763823438'

export function buildWhatsappLink(product: Product, lang: Lang) {
  const message =
    lang === 'ro'
      ? `Bună! Aș vrea să comand ${product.nameRo} (${product.weight}).`
      : `Hi! I'd like to order ${product.nameEn} (${product.weight}).`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function Shop({ lang }: { lang: Lang }) {
  return (
    <section id="shop" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <Reveal
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
          {tr(lang, 'shopKicker')}
        </span>
        <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
          {tr(lang, 'shopTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
          {tr(lang, 'shopSub')}
        </p>
      </Reveal>

      <ShopInteractions lang={lang}>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal
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
                <ProductSearchTrigger product={p} ariaLabel={tr(lang, 'shopDetails')} />
              </div>

              <div className="mt-2 flex-1">
                <h3 className="font-heading text-xl font-black text-foreground">
                  {lang === 'ro' ? p.nameRo : p.nameEn}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {p.weight}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-heading text-2xl font-black text-foreground">
                  {p.price}
                </span>
                <Button size="sm" className="rounded-full gap-1.5" asChild>
                  <a href={buildWhatsappLink(p, lang)} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    {tr(lang, 'shopOrder')}
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </ShopInteractions>
    </section>
  )
}
