'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'

export function Hero() {
  const { tr } = useLang()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >


      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="mt-6 font-heading text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            {tr('heroTitle1')}
            <br />
            <span className="text-primary">{tr('heroTitle2')}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {tr('heroSub')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 text-base">
              <a href="#menu">{tr('heroCta')}</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 text-base"
            >
              <a href="#contact">{tr('heroCta2')}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto"
        >
          {/* rama groasa — bg-mustard + padding intern = efect de rama foto */}
          <div className="relative w-full max-w-md rounded-[2.5rem] bg-mustard p-4 shadow-2xl">
            {/* imaginea invizibila seteaza inaltimea containerului */}
            <Image
              src="/images/HERO.png"
              alt=""
              aria-hidden
              width={600}
              height={500}
              className="w-full invisible"
              unoptimized
            />
            {/* zona de clip — foto se misca DOAR in interiorul ei */}
            <div className="absolute inset-4 overflow-hidden rounded-[2rem]">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-x-0"
                style={{ top: '-14px', bottom: '-14px' }}
              >
                <Image
                  src="/images/HERO.png"
                  alt="Zucchini în cafeneaua Teckel Coffee & Cocktails"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
            <span className="absolute right-7 top-7 z-10 rotate-6 rounded-full bg-warm-red px-4 py-2 font-heading text-sm font-bold text-primary-foreground shadow-lg">
              woof! ☕
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
