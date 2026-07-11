'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { tr, type Lang } from '@/lib/i18n'

const MotionLink = motion.create(Link)

export function FloatingCta({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight
      const contactSection = document.getElementById('contact')
      const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity
      setVisible(window.scrollY > heroHeight * 0.7 && contactTop > 120)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <MotionLink
          href="#contact"
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
        >
          {tr(lang, 'navBook')} ☕
        </MotionLink>
      )}
    </AnimatePresence>
  )
}
