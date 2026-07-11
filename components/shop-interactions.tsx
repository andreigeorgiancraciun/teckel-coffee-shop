'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { Search } from 'lucide-react'
import { type Lang } from '@/lib/i18n'
import { buildWhatsappLink, type Product } from '@/components/shop'

// Modalul (și @base-ui/react/dialog) se încarcă doar la click pe lupă,
// nu blochează JS-ul critic de la încărcarea inițială a paginii.
const ProductDetailsDialog = dynamic(() => import('@/components/product-details-dialog'), {
  ssr: false,
})

const ShopCtx = createContext<((p: Product) => void) | null>(null)

function useOpenProduct() {
  const ctx = useContext(ShopCtx)
  if (!ctx) throw new Error('useOpenProduct must be used within ShopInteractions')
  return ctx
}

// Grila de produse (imagini, nume, preț) rămâne server-rendered — doar
// starea „ce produs e selectat" și modalul asociat sunt client-side.
export function ShopInteractions({ lang, children }: { lang: Lang; children: ReactNode }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <ShopCtx.Provider value={setSelected}>
      {children}
      {selected && (
        <ProductDetailsDialog
          product={selected}
          onClose={() => setSelected(null)}
          lang={lang}
          whatsappLink={buildWhatsappLink(selected, lang)}
        />
      )}
    </ShopCtx.Provider>
  )
}

export function ProductSearchTrigger({ product, ariaLabel }: { product: Product; ariaLabel: string }) {
  const open = useOpenProduct()
  return (
    <button
      type="button"
      onClick={() => open(product)}
      aria-label={ariaLabel}
      className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-md transition-transform hover:scale-105 hover:text-primary"
    >
      <Search className="h-4.5 w-4.5" />
    </button>
  )
}
