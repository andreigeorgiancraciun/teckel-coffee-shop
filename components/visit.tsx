'use client'

import { motion } from 'motion/react'
import { useLang } from '@/lib/i18n'
import { MapPin, Clock, Phone } from 'lucide-react'

export function Visit() {
  const { tr } = useLang()
  return (
    <section id="visit" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {tr('visitKicker')}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {tr('visitTitle')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-border bg-terracotta/10 backdrop-blur-md lg:col-span-3"
          >
            <iframe
              title="Teckel & Co. location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.0900%2C44.4300%2C26.1100%2C44.4400&layer=mapnik&marker=44.4350%2C26.1000"
              className="h-80 w-full lg:h-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <div className="rounded-[2rem] border border-border bg-forest/10 backdrop-blur-md p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {tr('address')}
                </h3>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strada+Cafelei+12,+București,+România"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block leading-relaxed text-muted-foreground transition-colors hover:text-primary"
              >
                Strada Cafelei 12
                <br />
                Cartierul Vechi, București 030167
                <br />
                România
              </a>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href="tel:+40712345678"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  +40 712 345 678
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-mustard/15 backdrop-blur-md p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mustard/30 text-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {tr('hours')}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>{tr('weekdays')}</span>
                  <span className="font-medium text-foreground">07:00 – 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{tr('saturday')}</span>
                  <span className="font-medium text-foreground">08:00 – 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{tr('sunday')}</span>
                  <span className="font-medium text-foreground">08:00 – 18:00</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
