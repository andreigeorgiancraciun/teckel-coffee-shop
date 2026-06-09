'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useLang } from '@/lib/i18n'
import { PawPrint } from 'lucide-react'

export function Contact() {
  const { tr } = useLang()
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="overflow-hidden rounded-[2.5rem] border border-border bg-card/75 backdrop-blur-md"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative flex flex-col justify-center overflow-hidden bg-primary p-8 text-primary-foreground md:p-12">
            {/* trail de lăbuțe */}
            <PawPrint className="absolute right-6 top-6 h-16 w-16 rotate-12 opacity-15" />
            <PawPrint className="absolute left-5 top-10 h-10 w-10 -rotate-[20deg] opacity-10" />
            <PawPrint className="absolute right-10 top-24 h-8 w-8 rotate-6 opacity-10" />
            <PawPrint className="absolute left-10 bottom-24 h-12 w-12 -rotate-12 opacity-10" />
            <PawPrint className="absolute right-5 bottom-16 h-9 w-9 rotate-[30deg] opacity-10" />
            <PawPrint className="absolute left-3 bottom-8 h-7 w-7 -rotate-6 opacity-10" />
            <PawPrint className="absolute right-16 bottom-6 h-11 w-11 -rotate-[15deg] opacity-15" />
            <PawPrint className="absolute left-1/2 top-4 h-7 w-7 rotate-[20deg] opacity-10" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
              {tr('contactKicker')}
            </span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-balance">
              {tr('contactTitle')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
              {tr('contactSub')}
            </p>
          </div>

          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <PawPrint className="h-8 w-8" />
                </span>
                <p className="mt-4 font-heading text-2xl font-bold text-foreground text-balance">
                  {tr('formSuccess')}
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">{tr('formName')}</Label>
                    <Input id="name" required className="rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">{tr('formPhone')}</Label>
                    <Input id="phone" type="tel" required className="rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="guests">{tr('formGuests')}</Label>
                    <Input
                      id="guests"
                      type="number"
                      min={1}
                      defaultValue={2}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="date">{tr('formDate')}</Label>
                    <Input id="date" type="datetime-local" className="rounded-xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">{tr('formMessage')}</Label>
                  <Textarea id="message" rows={3} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="mt-2 rounded-full">
                  {tr('formSubmit')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
