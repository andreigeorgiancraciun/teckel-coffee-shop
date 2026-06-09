'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { socials } from '@/components/social-icons'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { lang, toggle, tr } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#menu', label: tr('navMenu') },
    { href: '#shop', label: tr('navShop') },
    { href: '#gallery', label: tr('navGallery') },
    { href: '#contact', label: tr('navVisit') },
    { href: '#about', label: tr('navAbout') },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-cream/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="inline-grid w-[112px] gap-0.5 leading-none text-foreground">
          <Image
            src="/images/dog-logo.png"
            alt="Teckel Coffee & Cocktails logo — a harlequin dachshund"
            width={258}
            height={138}
            className="w-full h-auto drop-shadow-sm"
          />
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-[18px] font-black uppercase leading-none tracking-tight text-foreground">
              Teckel
            </span>
            <span className="flex flex-col font-heading text-[7.5px] font-bold uppercase leading-[1.3] tracking-wider text-primary">
              <span>Coffee &amp;</span>
              <span>Cocktails</span>
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 sm:flex">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold"
          >
            <span
              className={cn(
                'rounded-full px-3 py-1.5 transition-colors',
                lang === 'ro' ? 'bg-primary text-primary-foreground' : 'text-foreground/60',
              )}
            >
              RO
            </span>
            <span
              className={cn(
                'rounded-full px-3 py-1.5 transition-colors',
                lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground/60',
              )}
            >
              EN
            </span>
          </button>

          <button
            className="rounded-full border border-border bg-card p-2 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
