import Image from 'next/image'
import Link from 'next/link'
import { tr, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { socials } from '@/components/social-icons'
import { NavbarShell } from '@/components/navbar-shell'
import { MobileNavToggle } from '@/components/mobile-nav-toggle'

export function Navbar({ lang }: { lang: Lang }) {
  const links = [
    { href: '#menu', label: tr(lang, 'navMenu') },
    { href: '#shop', label: tr(lang, 'navShop') },
    { href: '#gallery', label: tr(lang, 'navGallery') },
    { href: '#visit', label: tr(lang, 'navVisit') },
    { href: '#about', label: tr(lang, 'navAbout') },
  ]

  return (
    <NavbarShell>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="#top" className="inline-grid w-28 gap-0.5 leading-none text-foreground">
          <Image
            src="/images/dog-logo.png"
            alt="Teckel Coffee & Cocktails logo — a harlequin dachshund"
            width={258}
            height={138}
            priority
            fetchPriority="high"
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
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
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

          <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
            <Link
              href="/"
              className={cn(
                'rounded-full px-3 py-1.5 transition-colors',
                lang === 'ro' ? 'bg-primary text-primary-foreground' : 'text-foreground',
              )}
            >
              RO
            </Link>
            <Link
              href="/en"
              className={cn(
                'rounded-full px-3 py-1.5 transition-colors',
                lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground',
              )}
            >
              EN
            </Link>
          </div>

          <MobileNavToggle links={links} />
        </div>
      </nav>
    </NavbarShell>
  )
}
