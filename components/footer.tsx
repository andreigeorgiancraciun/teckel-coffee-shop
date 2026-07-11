import Image from 'next/image'
import { tr, type Lang } from '@/lib/i18n'
import { socials } from '@/components/social-icons'
import { PawPrint } from 'lucide-react'

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-grid gap-1 leading-none">
            <Image
              src="/images/dog-logo.png"
              alt="Teckel Coffee & Cocktails logo — a harlequin dachshund"
              width={258}
              height={138}
              style={{ width: '112px', height: 'auto' }}
              className="brightness-0 invert drop-shadow-sm"
            />
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-[18px] font-black uppercase leading-none tracking-tight text-background">
                Teckel
              </span>
              <span className="flex flex-col font-heading text-[7.5px] font-bold uppercase leading-[1.3] tracking-wider text-background/60">
                <span>Coffee &amp;</span>
                <span>Cocktails</span>
              </span>
            </div>
          </div>
          <p className="text-sm text-background/70">{tr(lang, 'footerTagline')}</p>

          <div className="flex items-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 text-center text-sm text-background/60">
          <span className="inline-flex items-center gap-1.5">
            © {new Date().getFullYear()} Teckel Coffee &amp; Cocktails. {tr(lang, 'footerRights')}
            <PawPrint className="h-3.5 w-3.5 text-background/60" />
          </span>
        </div>
      </div>
    </footer>
  )
}
