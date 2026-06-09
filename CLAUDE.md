# Coffee Shop Website

Site de prezentare generat pe v0.app, pentru un prieten. Deployment final pe Vercel.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (style: base-nova)
- Motion (animații) + Vercel Analytics (doar în producție)
- Package manager: **pnpm** (obligatoriu, nu npm/yarn)

## Pornire locală

```bash
pnpm install
pnpm dev       # http://localhost:3000
```

## Structură

```
app/
  layout.tsx       # Root layout, fonturi Google, metadata
  page.tsx         # Pagina principală — compune toate secțiunile
  globals.css      # Variabile CSS, teme, stiluri globale
components/
  navbar.tsx       # Navigație + toggle limbă RO/EN
  hero.tsx         # Secțiunea hero cu animație
  about.tsx        # Povestea cafenelei
  menu.tsx         # Meniu cu băuturi și prețuri
  gallery.tsx      # Galerie foto
  visit.tsx        # Program și adresă
  contact.tsx      # Formular rezervări (momentan fără backend)
  footer.tsx
  ui/              # Componente shadcn (Button, Input etc.)
lib/
  i18n.tsx         # Context + dicționar traduceri RO/EN (client-side)
  utils.ts         # Helper cn()
public/images/     # Imagini: logo, hero, galerie
```

## Internaționalizare

Traduceri în `lib/i18n.tsx`. Limbă implicită: **română**. Toggle în navbar. Fără rute separate — totul pe `/`.

## Known issues / TODO

- **Formularul de contact** nu are backend — trebuie conectat (Resend, Formspree sau Vercel serverless route) înainte de producție
- **Metadatele** din `app/layout.tsx` sunt fictive — de actualizat cu numele real al cafenelei, descriere, OG image
- **Titlul paginii** (`package.json` → `name`) e setat ca `my-project` — de redenumit

## pnpm 11 — problemă build scripts

pnpm 11 blochează build scripts ale dependențelor până la aprobare explicită.
Fix (deja aplicat): `pnpm approve-builds --all` — aprobă `sharp` și `msw`.
Nu mai e nevoie să rulezi asta din nou dacă `pnpm-lock.yaml` e commitat.

## Deploy Vercel

Zero config. Push pe GitHub + import în Vercel.
`@vercel/analytics` se activează automat în producție.
