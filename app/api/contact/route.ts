import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

function formatDate(raw: string) {
  if (!raw) return '—'
  const d = new Date(raw)
  return d.toLocaleString('ro-RO', { dateStyle: 'full', timeStyle: 'short' })
}

function buildEmail(name: string, phone: string, guests: string, date: string, message: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''
  const logoUrl = siteUrl ? `${siteUrl}/images/teckel-logo.jpg` : ''

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;color:#92400e;font-weight:600;width:140px;vertical-align:top">${label}</td>
      <td style="padding:10px 16px;color:#1c1917;vertical-align:top">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:'Helvetica Neue',Arial,sans-serif">
  <table style="width:100%;background:#fafaf9;padding:32px 16px;border-spacing:0">
    <tr><td style="text-align:center">
      <table style="max-width:560px;width:100%;border-spacing:0">

        <!-- Header -->
        <tr><td style="background:#7c2d12;border-radius:16px 16px 0 0;padding:32px;text-align:center">
          ${logoUrl ? `<img src="${logoUrl}" alt="Teckel &amp; Co." width="72" height="72" style="border-radius:50%;object-fit:cover;margin-bottom:12px;display:block;margin-left:auto;margin-right:auto">` : ''}
          <div style="font-size:22px;font-weight:800;color:#fef3c7;letter-spacing:-0.3px">Teckel &amp; Co.</div>
          <div style="font-size:13px;color:#fcd9a0;margin-top:4px;letter-spacing:2px;text-transform:uppercase">Rezervare nouă 🐾</div>
        </td></tr>

        <!-- Intro -->
        <tr><td style="background:#ffffff;padding:28px 32px 8px">
          <p style="margin:0;font-size:16px;color:#44403c;line-height:1.6">
            Bună ziua! A sosit o rezervare nouă pe site. Găsești detaliile mai jos. 🐶☕
          </p>
        </td></tr>

        <!-- Reservation card -->
        <tr><td style="background:#ffffff;padding:8px 32px 28px">
          <table style="width:100%;background:#fef9f0;border:1px solid #fde68a;border-radius:12px;border-collapse:collapse;border-spacing:0">
            ${row('👤 Nume', name)}
            <tr><td colspan="2" style="border-top:1px solid #fde68a;padding:0"></td></tr>
            ${row('📞 Telefon', `<a href="tel:${phone}" style="color:#b45309;text-decoration:none">${phone}</a>`)}
            <tr><td colspan="2" style="border-top:1px solid #fde68a;padding:0"></td></tr>
            ${row('🐾 Persoane', guests)}
            <tr><td colspan="2" style="border-top:1px solid #fde68a;padding:0"></td></tr>
            ${row('📅 Data / ora', formatDate(date))}
            ${message ? `<tr><td colspan="2" style="border-top:1px solid #fde68a;padding:0"></td></tr>${row('💬 Mesaj', message)}` : ''}
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#292524;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center">
          <p style="margin:0;font-size:12px;color:#a8a29e">
            Teckel &amp; Co. · Strada Cafelei 12, București · 🐾 Viața e scurtă, bea cafea bună
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(req: Request) {
  const { name, phone, guests, date, message } = await req.json()

  if (!date || new Date(date) <= new Date()) {
    return NextResponse.json({ error: 'Data trebuie să fie în viitor!' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Teckel & Co. <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `🐾 Rezervare nouă — ${name}, ${guests} pers.`,
    html: buildEmail(name, phone, guests, date, message),
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
