'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

export type Lang = 'ro' | 'en'

type Dict = Record<string, { ro: string; en: string }>

export const t: Dict = {
  navAbout: { ro: 'Povestea noastră', en: 'Our story' },
  navMenu: { ro: 'Meniu', en: 'Menu' },
  navShop: { ro: 'Magazin', en: 'Shop' },
  navGallery: { ro: 'Galerie', en: 'Gallery' },
  navVisit: { ro: 'Contact', en: 'Contact' },
  navBook: { ro: 'Rezervă', en: 'Book' },

  heroKicker: { ro: 'Cafea de specialitate · Brooklyn vibes', en: 'Specialty coffee · Brooklyn vibes' },
  heroTitle1: { ro: 'Viața e scurtă.', en: 'Life is short.' },
  heroTitle2: { ro: 'Bea cafea bună.', en: 'Drink good coffee.' },
  heroSub: {
    ro: 'Pregătită cu grijă, servită cu drag — și aprobată oficial de Zucchini, baristaul nostru șef.',
    en: 'Carefully prepared, served with love — and officially approved by Zucchini, our head barista.',
  },
  heroCta: { ro: 'Vezi meniul', en: 'See our menu' },
  heroCta2: { ro: 'Vezi magazinul', en: 'Shop our coffee' },

  aboutKicker: { ro: 'Povestea noastră', en: 'Our story' },
  aboutTitle: { ro: 'Salut, sunt Zucchini.', en: "Hi, I'm Zucchini." },
  aboutP1: {
    ro: 'Sunt un teckel arlechin cu opinii puternice despre cafea și cocktailuri. În fiecare dimineață inspectez boabele, latru la espressorul care curge prea repede și mă asigur că fiecare client primește o îmbrățișare (sau cel puțin o adulmecare prietenoasă).',
    en: "I'm a harlequin dachshund with strong opinions about coffee and cocktails. Every morning I inspect the beans, bark at the espresso machine when it pulls too fast, and make sure every guest gets a cuddle — or at least a friendly sniff.",
  },
  aboutP2: {
    ro: 'Stăpânul meu prăjește cafeaua, eu mă ocup de „relațiile cu clienții”. Împreună am construit un loc mic și colorat unde cafeaua e luată în serios, dar nimeni nu e prea serios.',
    en: 'My human roasts the coffee, I handle "customer relations." Together we built a small, colorful place where the coffee is taken seriously, but nobody takes themselves too seriously.',
  },
  aboutBadge1: { ro: 'Boabe prăjite local', en: 'Locally roasted beans' },
  aboutBadge2: { ro: 'Prietenos cu câinii', en: 'Dog friendly' },
  aboutBadge3: { ro: 'Aprobat de Zucchini', en: 'Approved by Zucchini' },

  shopKicker: { ro: 'Magazin', en: 'Shop' },
  shopTitle: { ro: 'Cafea de dus acasă', en: 'Coffee to take home' },
  shopSub: {
    ro: 'Fiecare pungă e inspectată personal de Zucchini. Dacă nu latră la ea, e bună.',
    en: "Every bag is personally inspected by Zucchini. If he doesn't bark at it, it's good.",
  },
  shopOrder: { ro: 'Comandă', en: 'Order' },
  shopDetails: { ro: 'Detalii', en: 'Details' },
  shopUsage: { ro: 'Tip', en: 'Usage' },
  shopOrigin: { ro: 'Origine', en: 'Origin' },
  shopProcess: { ro: 'Procesare', en: 'Process' },
  shopTaste: { ro: 'Profil de gust', en: 'Taste profile' },
  shopRegion: { ro: 'Regiune', en: 'Region' },
  shopFarmer: { ro: 'Fermă', en: 'Farm/er' },
  shopVariety: { ro: 'Soi', en: 'Variety' },
  shopPackaging: { ro: 'Ambalaj disponibil', en: 'Available packaging' },

  menuKicker: { ro: 'Meniul', en: 'The menu' },
  menuTitle: { ro: 'Ce-ți toarnă Zucchini azi', en: 'What Zucchini is pouring today' },
  menuSub: {
    ro: 'Prețuri în lei. Toate băuturile vin cu o coadă care se mișcă.',
    en: 'Prices in lei. Every drink comes with a wagging tail.',
  },

  galleryKicker: { ro: 'Galerie', en: 'Gallery' },
  galleryTitle: { ro: 'Cafea, câine, repetă', en: 'Coffee, dog, repeat' },

  visitKicker: { ro: 'Unde ne găsești', en: 'Where to find us' },
  visitTitle: { ro: 'Treci pe la noi', en: 'Come visit' },
  hours: { ro: 'Program', en: 'Hours' },
  address: { ro: 'Adresă', en: 'Address' },
  weekdays: { ro: 'Luni – Vineri', en: 'Mon – Fri' },
  saturday: { ro: 'Sâmbătă', en: 'Saturday' },
  sunday: { ro: 'Duminică', en: 'Sunday' },

  contactKicker: { ro: 'Rezervări', en: 'Reservations' },
  contactTitle: { ro: 'Vino să-l saluți pe Zucchini', en: 'Come say hi to Zucchini' },
  contactSub: {
    ro: 'Rezervă o masă și îți promitem cel puțin o vizită de la teckelul arlechin șef.',
    en: 'Book a table and we promise at least one visit from the harlequin dachshund-in-chief.',
  },
  formName: { ro: 'Nume', en: 'Name' },
  formPhone: { ro: 'Telefon', en: 'Phone' },
  formGuests: { ro: 'Persoane', en: 'Guests' },
  formDate: { ro: 'Data & ora', en: 'Date & time' },
  formMessage: { ro: 'Mesaj (opțional)', en: 'Message (optional)' },
  formSubmit: { ro: 'Rezervă masa', en: 'Book a table' },
  formSuccess: {
    ro: 'Mulțumim! Zucchini îți pregătește deja o îmbrățișare. 🐾',
    en: "Thanks! Zucchini is already prepping a cuddle for you. 🐾",
  },

  footerTagline: {
    ro: 'Cafea bună, câine bun, oameni buni.',
    en: 'Good coffee, good dog, good people.',
  },
  footerRights: { ro: 'Toate drepturile rezervate.', en: 'All rights reserved.' },
}

type Ctx = { lang: Lang; toggle: () => void; tr: (k: keyof typeof t) => string }
const LangContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ro')
  const toggle = useCallback(() => setLang((l) => (l === 'ro' ? 'en' : 'ro')), [])
  const tr = useCallback((k: keyof typeof t) => t[k][lang], [lang])
  return (
    <LangContext.Provider value={{ lang, toggle, tr }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
