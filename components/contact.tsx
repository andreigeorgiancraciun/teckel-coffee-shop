'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { tr, type Lang } from '@/lib/i18n'
import { PawPrint } from 'lucide-react'

export function Contact({ lang }: { lang: Lang }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

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
            <PawPrint className="absolute left-5 top-10 h-10 w-10 -rotate-20 opacity-10" />
            <PawPrint className="absolute right-10 top-24 h-8 w-8 rotate-6 opacity-10" />
            <PawPrint className="absolute left-10 bottom-24 h-12 w-12 -rotate-12 opacity-10" />
            <PawPrint className="absolute right-5 bottom-16 h-9 w-9 rotate-30 opacity-10" />
            <PawPrint className="absolute left-3 bottom-8 h-7 w-7 -rotate-6 opacity-10" />
            <PawPrint className="absolute right-16 bottom-6 h-11 w-11 -rotate-15 opacity-15" />
            <PawPrint className="absolute left-1/2 top-4 h-7 w-7 rotate-20 opacity-10" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
              {tr(lang, 'contactKicker')}
            </span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-balance">
              {tr(lang, 'contactTitle')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
              {tr(lang, 'contactSub')}
            </p>
          </div>

          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="flex h-full min-h-70 flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/15 text-forest">
                  <PawPrint className="h-8 w-8" />
                </span>
                <p className="mt-4 font-heading text-2xl font-bold text-foreground text-balance">
                  {tr(lang, 'formSuccess')}
                </p>
              </div>
            ) : (
              <form
                noValidate
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)
                  const name = fd.get('name') as string
                  const phone = fd.get('phone') as string
                  const date = fd.get('date') as string
                  const errs: Record<string, string> = {}
                  if (!name.trim()) errs.name = 'Numele este obligatoriu.'
                  if (!phone.trim()) errs.phone = 'Telefonul este obligatoriu.'
                  if (!date) errs.date = 'Te rugăm să alegi o dată și oră.'
                  else if (new Date(date) <= new Date()) errs.date = 'Data trebuie să fie în viitor.'
                  setFieldErrors(errs)
                  if (Object.keys(errs).length > 0) return
                  setLoading(true)
                  setError(null)
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: fd.get('name'),
                      phone: fd.get('phone'),
                      guests: fd.get('guests'),
                      date: fd.get('date'),
                      message: fd.get('message'),
                    }),
                  })
                  setLoading(false)
                  if (res.ok) {
                    setSubmitted(true)
                  } else {
                    const body = await res.json().catch(() => ({}))
                    setError(body.error ?? 'Ceva n-a mers. Încearcă din nou sau sună-ne direct.')
                  }
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">{tr(lang, 'formName')}</Label>
                    <Input id="name" name="name" className="rounded-xl" />
                    {fieldErrors.name && <p className="text-xs text-destructive">{fieldErrors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">{tr(lang, 'formPhone')}</Label>
                    <Input id="phone" name="phone" type="tel" className="rounded-xl" />
                    {fieldErrors.phone && <p className="text-xs text-destructive">{fieldErrors.phone}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="guests">{tr(lang, 'formGuests')}</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      defaultValue={2}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="date">{tr(lang, 'formDate')}</Label>
                    <Input
                      id="date"
                      name="date"
                      type="datetime-local"
                      min={new Date().toISOString().slice(0, 16)}
                      className="rounded-xl"
                    />
                    {fieldErrors.date && <p className="text-xs text-destructive">{fieldErrors.date}</p>}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">{tr(lang, 'formMessage')}</Label>
                  <Textarea id="message" name="message" rows={3} className="rounded-xl" />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <Button type="submit" size="lg" disabled={loading} className="mt-2 rounded-full">
                  {loading ? 'Se trimite…' : tr(lang, 'formSubmit')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
