'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useLang } from '@/lib/i18n'

const images = [
  { src: '/images/gallery/gallery-1.png', alt: 'Latte with latte art', span: 'row-span-2' },
  { src: '/images/gallery/gallery-2.png', alt: 'Dachshund resting on a café bench', span: '' },
  { src: '/images/gallery/gallery-3.png', alt: 'Barista pulling an espresso shot', span: '' },
  { src: '/images/gallery/gallery-4.png', alt: 'Dachshund next to a coffee cup', span: 'row-span-2' },
  { src: '/images/gallery/gallery-5.png', alt: 'Cozy coffee shop interior', span: '' },
  { src: '/images/gallery/gallery-6.png', alt: 'Glass of cold brew with ice', span: '' },
]

export function Gallery() {
  const { tr } = useLang()
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
          {tr('galleryKicker')}
        </span>
        <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
          {tr('galleryTitle')}
        </h2>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-[1.75rem] ${img.span}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
