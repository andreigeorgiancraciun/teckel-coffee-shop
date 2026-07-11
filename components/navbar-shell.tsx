'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Singurul motiv pentru care header-ul are nevoie de JS: fundalul se schimbă
// la scroll. Izolat aici ca restul navbar-ului (logo, linkuri, text tradus)
// să rămână server-rendered, primit ca `children`.
export function NavbarShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-cream/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      {children}
    </header>
  )
}
