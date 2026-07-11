'use client'

import dynamic from 'next/dynamic'

// ssr:false e permis doar dintr-un Client Component — de-asta izolăm
// dynamic() aici, separat de page.tsx (Server Component).
const PawTrail = dynamic(() => import('@/components/paw-trail').then((m) => m.PawTrail), {
  ssr: false,
})

export default function PawTrailLoader() {
  return <PawTrail />
}
