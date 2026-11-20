import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Coffee, CupSoda, Snowflake, Heart, Sun, Citrus, Martini, Zap, type LucideIcon } from 'lucide-react'
import { tr, type Lang } from '@/lib/i18n'

type Text = { ro: string; en: string }
type Item = { name: Text; desc?: Text; ml?: string; price: string }
type Category = {
  id: string
  title: Text
  icon: LucideIcon
  accent: string
  chip: string
  cardBg: string
  wide?: boolean
  items: Item[]
}

const same = (s: string): Text => ({ ro: s, en: s })

const categories: Category[] = [
  {
    id: 'cold-season',
    title: { ro: 'Sezon rece', en: 'Cold Season' },
    wide: true,
    icon: Snowflake,
    accent: 'bg-warm-red',
    chip: 'bg-warm-red/15 text-warm-red',
    cardBg: 'bg-warm-red/10',
    items: [
      { name: same('Golden Milk'), desc: { ro: 'Turmeric, condimente & lapte', en: 'Turmeric, spices & milk' }, ml: '350', price: '20' },
      { name: same('Dirty Golden Milk'), desc: { ro: 'Turmeric, condimente, 2 x espresso & lapte', en: 'Turmeric, spices, 2 x espresso & milk' }, ml: '350', price: '26' },
      { name: same('Rooibos Latte'), desc: { ro: 'Ceai rooibos & lapte', en: 'Rooibos tea & milk' }, ml: '300', price: '20' },
      { name: same('Chai Latte'), desc: { ro: 'Chai condimentat & lapte', en: 'Spiced chai & milk' }, ml: '300', price: '20' },
      { name: same('Dirty Chai Latte'), desc: { ro: 'Chai condimentat, 2 x espresso & lapte', en: 'Spiced chai, 2 x espresso & milk' }, ml: '300', price: '26' },
      { name: same('Masala Chai Latte'), desc: { ro: 'Sirop Masala Chai & lapte', en: 'Masala chai syrup & milk' }, ml: '350', price: '23' },
      { name: same('Hot Chocolate'), desc: { ro: 'Pudră ciocolată caldă, ciocolată neagră & lapte', en: 'Hot chocolate powder, dark chocolate & milk' }, ml: '350', price: '23' },
      { name: same('Mocha'), desc: { ro: 'Pudră ciocolată caldă, ciocolată neagră, 1 x espresso & lapte', en: 'Hot chocolate powder, dark chocolate, 1 x espresso & milk' }, ml: '230', price: '23' },
      { name: same('Hot Ginger Lemonade'), desc: { ro: 'Lămâie, ghimbir & miere', en: 'Lemon, ginger & honey' }, ml: '250', price: '20' },
      { name: same('Naughty Hot Chocolate'), desc: { ro: 'Peanut Butter Whiskey, ciocolată neagră, lapte & frișcă', en: 'Peanut Butter Whiskey, dark chocolate, milk & whipped cream' }, ml: '230', price: '35' },
      { name: { ro: 'Vin fiert', en: 'Mulled Wine' }, desc: { ro: 'Vin roșu, condimente & portocală', en: 'Red wine, spices & orange' }, ml: '230', price: '25' },
    ],
  },
  {
    id: 'espresso',
    title: same('Espresso'),
    icon: Coffee,
    accent: 'bg-terracotta',
    chip: 'bg-terracotta/15 text-terracotta',
    cardBg: 'bg-terracotta/10',
    items: [
      { name: same('Espresso Single'), ml: '20', price: '9' },
      { name: same('Espresso Double'), ml: '40', price: '12' },
      { name: same('Americano / Long Black'), ml: '90', price: '13' },
      { name: same('Cortado'), ml: '90', price: '13' },
      { name: same('Cappuccino'), ml: '180', price: '15' },
      { name: same('Flat White'), ml: '230', price: '18' },
      { name: same('Latte'), desc: { ro: 'Cald / Rece', en: 'Hot / Iced' }, ml: '350', price: '20' },
    ],
  },
  {
    id: 'specialty',
    title: same('Cold & Specialty'),
    icon: CupSoda,
    accent: 'bg-terracotta',
    chip: 'bg-terracotta/15 text-terracotta',
    cardBg: 'bg-terracotta/10',
    items: [
      { name: same('Cold Brew'), ml: '150', price: '18' },
      { name: same('Matcha Latte'), desc: { ro: 'Cald / Rece', en: 'Hot / Iced' }, ml: '300', price: '23' },
      { name: same('Cold Brew Tonic'), ml: '200', price: '26' },
      { name: same('Babyccino'), desc: { ro: 'lapte spumat, pentru copii', en: 'frothed milk, for kids' }, ml: '230', price: '7' },
      { name: same('Extra Shot'), ml: '20', price: '+4' },
      { name: { ro: 'Lapte ovăz', en: 'Oat milk' }, price: '+3' },
    ],
  },
  {
    id: 'favorites',
    title: same("Zucchi's Favorites"),
    icon: Heart,
    accent: 'bg-warm-red',
    chip: 'bg-warm-red/15 text-warm-red',
    cardBg: 'bg-warm-red/10',
    items: [
      { name: same('Peanut Butter & Jelly'), desc: { ro: 'Whiskey, piure zmeură, lămâie', en: 'Whiskey, raspberry purée, lemon' }, ml: '200', price: '40' },
      { name: same('Amaretto Sour'), desc: { ro: 'Amaretto, whiskey, lămâie, sirop zahăr', en: 'Amaretto, whiskey, lemon, sugar syrup' }, ml: '200', price: '40' },
      { name: same('Pornstar Martini'), desc: { ro: 'Vodcă, lichior fructul pasiunii, piure fructul pasiunii, lime, sirop zahăr', en: 'Vodka, passion fruit liqueur, passion fruit purée, lime, sugar syrup' }, ml: '200', price: '40' },
    ],
  },
  {
    id: 'spritz',
    title: same('Spritz & Fresh'),
    icon: Sun,
    accent: 'bg-mustard',
    chip: 'bg-mustard/25 text-foreground',
    cardBg: 'bg-mustard/15',
    items: [
      { name: same('Aperol Spritz'), desc: { ro: 'Aperol, vin spumant', en: 'Aperol, sparkling wine' }, ml: '250', price: '35' },
      { name: same('Hugo'), desc: { ro: 'Vin spumant, lichior flori de soc, sirop flori de soc', en: 'Sparkling wine, elderflower liqueur, elderflower syrup' }, ml: '250', price: '35' },
      { name: same('Paloma'), desc: { ro: 'Tequila, apă tonică, lime', en: 'Tequila, tonic water, lime' }, ml: '250', price: '40' },
    ],
  },
  {
    id: 'gintonic',
    title: same('Gin & Tonic'),
    icon: Citrus,
    accent: 'bg-forest',
    chip: 'bg-forest/15 text-forest',
    cardBg: 'bg-forest/10',
    items: [
      { name: same('Gin Tonic Originale'), desc: { ro: 'Gin Malfy Originale, apă tonică', en: 'Malfy Originale gin, tonic water' }, ml: '250', price: '38' },
      { name: same('Gin Tonic Arancia'), desc: { ro: 'Gin Malfy Arancia, apă tonică', en: 'Malfy Arancia gin, tonic water' }, ml: '250', price: '38' },
      { name: same('Gin Tonic Limone'), desc: { ro: 'Gin Malfy Limone, apă tonică', en: 'Malfy Limone gin, tonic water' }, ml: '250', price: '38' },
      { name: same('Gin Tonic Rosa'), desc: { ro: 'Gin Malfy Rosa, apă tonică', en: 'Malfy Rosa gin, tonic water' }, ml: '250', price: '38' },
    ],
  },
  {
    id: 'classics',
    title: same('Classics'),
    icon: Martini,
    accent: 'bg-mustard',
    chip: 'bg-mustard/25 text-foreground',
    cardBg: 'bg-mustard/15',
    items: [
      { name: same('Negroni'), desc: { ro: 'Gin, Campari, vermut roșu', en: 'Gin, Campari, red vermouth' }, ml: '120', price: '35' },
      { name: same('Margarita'), desc: { ro: 'Tequila, triple sec, lime', en: 'Tequila, triple sec, lime' }, ml: '120', price: '35' },
      { name: same('Whiskey Sour'), desc: { ro: 'Whiskey, lămâie, sirop zahăr', en: 'Whiskey, lemon, sugar syrup' }, ml: '200', price: '35' },
      { name: same('Espresso Martini'), desc: { ro: 'Vodcă, cafea, lichior de cafea, sirop zahăr', en: 'Vodka, coffee, coffee liqueur, sugar syrup' }, ml: '200', price: '40' },
      { name: same('Cuba Libre'), desc: { ro: 'Rom, cola, lime', en: 'Rum, cola, lime' }, ml: '250', price: '30' },
    ],
  },
  {
    id: 'spirits',
    title: same('Spirits & Shots'),
    icon: Zap,
    accent: 'bg-forest',
    chip: 'bg-forest/15 text-forest',
    cardBg: 'bg-forest/10',
    items: [
      { name: same('Vodka Beluga'), ml: '50', price: '30' },
      { name: same('Whiskey Glenfiddich'), ml: '50', price: '30' },
      { name: same('Whiskey Jameson'), ml: '50', price: '25' },
      { name: same('Jägermeister'), desc: { ro: 'shot', en: 'shot' }, ml: '25', price: '18' },
      { name: same('Tequila Corralejo Añejo'), desc: { ro: 'shot', en: 'shot' }, ml: '25', price: '23' },
      { name: same('Whiskey Skrewball Peanut Butter'), desc: { ro: 'shot', en: 'shot' }, ml: '25', price: '20' },
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
    <Reveal
      {...reveal(index)}
      className={`flex flex-col overflow-hidden rounded-[2rem] border border-border backdrop-blur-md ${cat.cardBg} ${cat.wide ? 'sm:col-span-2' : ''}`}
    >
      <div className={`flex items-center gap-2.5 ${cat.accent} px-6 py-4`}>
        <cat.icon className="h-6 w-6 text-primary-foreground" strokeWidth={2.25} />
        <h3 className="font-heading text-2xl font-black text-primary-foreground">
          {cat.title[lang]}
        </h3>
      </div>
      <ul className={`flex-1 gap-x-10 gap-y-4 p-6 ${cat.wide ? 'grid sm:grid-cols-2 content-start' : 'flex flex-col'}`}>
        {cat.items.map((item) => (
          <li key={`${item.name.en}-${item.price}`} className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">{item.name[lang]}</p>
              {item.desc && <p className="text-sm text-muted-foreground">{item.desc[lang]}</p>}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {item.ml && <span className="text-sm text-muted-foreground">{item.ml} ml</span>}
              <span className={`rounded-full px-3 py-1 text-sm font-bold ${cat.chip}`}>
                {item.price} lei
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export function Menu({ lang }: { lang: Lang }) {
  return (
    <section id="menu" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {tr(lang, 'menuKicker')}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {tr(lang, 'menuTitle')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{tr(lang, 'menuSub')}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} lang={lang} index={i} />
          ))}
          <Reveal
            {...reveal(categories.length)}
            className="flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] border border-border bg-secondary/50 backdrop-blur-md p-8 text-center"
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
