import Image from 'next/image'
import Link from 'next/link'

export function MenuHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center px-5 py-4">
        <Link href="/" className="inline-grid w-28 gap-0.5 leading-none text-foreground">
          <Image
            src="/images/dog-logo.png"
            alt="Teckel Coffee & Cocktails logo"
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
        </Link>
      </div>
    </header>
  )
}
