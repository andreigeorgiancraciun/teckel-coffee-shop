'use client'

import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogPopup, DialogTitle } from '@/components/ui/dialog'
import { t, type Lang } from '@/lib/i18n'
import type { Product } from '@/components/shop'

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-2.5 text-sm last:border-0">
      <span className="font-semibold text-foreground">{label}</span>
      <span className="text-right text-muted-foreground">{value}</span>
    </div>
  )
}

export default function ProductDetailsDialog({
  product,
  onClose,
  lang,
  tr,
  whatsappLink,
}: {
  product: Product
  onClose: () => void
  lang: Lang
  tr: (k: keyof typeof t) => string
  whatsappLink: string
}) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogPopup>
        <DialogTitle>{lang === 'ro' ? product.nameRo : product.nameEn}</DialogTitle>

        <div className="relative mx-auto mt-4 aspect-square w-full max-w-56">
          <Image
            src={product.image}
            alt={lang === 'ro' ? product.nameRo : product.nameEn}
            fill
            sizes="224px"
            className="object-contain"
          />
        </div>

        <div className="mt-5">
          <DetailRow label={tr('shopUsage')} value={product.details.usage[lang]} />
          <DetailRow label={tr('shopOrigin')} value={product.details.origin[lang]} />
          <DetailRow label={tr('shopProcess')} value={product.details.process[lang]} />
          <DetailRow label={tr('shopTaste')} value={product.details.taste[lang]} />
          <DetailRow label={tr('shopRegion')} value={product.details.region[lang]} />
          <DetailRow label={tr('shopFarmer')} value={product.details.farmer[lang]} />
          <DetailRow label={tr('shopVariety')} value={product.details.variety[lang]} />
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-secondary/50 px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {tr('shopPackaging')}
            </p>
            <p className="font-heading text-xl font-black text-foreground">
              {product.weight} · {product.price}
            </p>
          </div>
          <Button className="rounded-full gap-1.5" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="h-3.5 w-3.5" />
              {tr('shopOrder')}
            </a>
          </Button>
        </div>
      </DialogPopup>
    </Dialog>
  )
}
