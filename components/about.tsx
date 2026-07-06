'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useLang } from '@/lib/i18n'
import { PawPrint, Coffee, Heart } from 'lucide-react'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
}

export function About() {
  const { tr } = useLang()

  const badges = [
    { icon: Coffee, label: tr('aboutBadge1') },
    { icon: PawPrint, label: tr('aboutBadge2') },
    { icon: Heart, label: tr('aboutBadge3') },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div {...reveal} className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest/10 p-6">
            <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-mustard/50" />
            <div className="relative aspect-square w-full">
              <Image
                src="/images/zucchini-about.png"
                alt="Zucchini the harlequin dachshund wearing a little barista apron"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-3 rotate-[-4deg] rounded-2xl border border-border bg-card px-4 py-2 shadow-md">
            <p className="font-heading text-sm font-bold text-foreground">
              Chief Tasting Officer
            </p>
            <p className="text-xs text-muted-foreground">Zucchini, teckel arlechin</p>
          </div>
        </motion.div>

        <motion.div {...reveal} className="order-1 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {tr('aboutKicker')}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {tr('aboutTitle')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            {tr('aboutP1')}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {tr('aboutP2')}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
