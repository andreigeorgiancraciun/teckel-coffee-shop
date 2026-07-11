import { Reveal } from '@/components/reveal'
import { tr, type Lang } from '@/lib/i18n'
import { MapPin, Clock, Phone } from 'lucide-react'

export function Visit({ lang }: { lang: Lang }) {
  return (
    <section id="visit" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            {tr(lang, 'visitKicker')}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl text-balance">
            {tr(lang, 'visitTitle')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-border bg-terracotta/10 backdrop-blur-md lg:col-span-3"
          >
            <iframe
              title="Teckel & Co. location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.1127%2C44.4326%2C26.1167%2C44.4346&layer=mapnik&marker=44.4336%2C26.1147"
              className="h-80 w-full lg:h-full"
              loading="lazy"
            />
          </Reveal>

          <Reveal
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
                  {tr(lang, 'address')}
                </h3>
              </div>
              <a
                href="https://www.google.com/maps/place/Teckel+Coffee+%26+Cocktails/@44.4337077,26.1148325,18.78z/data=!4m15!1m8!3m7!1s0x40b1ff3adf093187:0xcd56d168b85d7c71!2sStrada+Romulus+23,+030167+Bucure%C8%99ti!3b1!8m2!3d44.4337414!4d26.1150804!16s%2Fg%2F11vkgmzt23!3m5!1s0x40b1ff0bfcd3f4b7:0xc7e728f864854b53!8m2!3d44.4336047!4d26.1146419!16s%2Fg%2F11nqwtpzbz?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block leading-relaxed text-muted-foreground transition-colors hover:text-primary"
              >
                Teckel Coffee & Cocktails
                <br />
                Strada Romulus 23, 030167 București
                <br />
                România
              </a>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href="tel:+40763823438"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  +40 763 823 438
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-mustard/15 backdrop-blur-md p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mustard/30 text-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {tr(lang, 'hours')}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>{tr(lang, 'mondayWednesday')}</span>
                  <span className="font-medium text-foreground">08:00 – 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{tr(lang, 'thursdayFriday')}</span>
                  <span className="font-medium text-foreground">08:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{tr(lang, 'saturday')}</span>
                  <span className="font-medium text-foreground">10:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{tr(lang, 'sunday')}</span>
                  <span className="font-medium text-foreground">10:00 – 22:00</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
