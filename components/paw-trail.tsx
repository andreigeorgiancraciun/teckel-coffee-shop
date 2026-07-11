'use client'

import { useEffect, useState } from 'react'
import { PawPrint } from 'lucide-react'

type Paw = {
  y: number
  xPercent: number
  rotation: number
  size: number
  opacity: number
}

function buildTrail(endY: number): Paw[] {
  const paws: Paw[] = []
  const startY = 660
  const step = 42
  const centerX = 50
  const amplitude = 37
  const wavelength = 1300
  const phaseOffset = Math.PI / 2 - (startY / wavelength) * 2 * Math.PI

  // seed pseudo-random ca sa nu se schimbe la fiecare resize
  let seed = 42
  const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646 }

  for (let i = 0; startY + i * step < endY; i++) {
    const y = startY + i * step
    const phase = (y / wavelength) * 2 * Math.PI + phaseOffset
    const swing = amplitude * Math.sin(phase)

    const nextPhase = ((y + step) / wavelength) * 2 * Math.PI + phaseOffset
    const nextSwing = amplitude * Math.sin(nextPhase)
    const dxPercent = nextSwing - swing
    const tangentDeg = Math.atan2(dxPercent, 100) * (180 / Math.PI)

    const isLeft = i % 2 === 0
    const perpOffset = isLeft ? -2.2 : 2.2
    const footRotation = tangentDeg + (isLeft ? -22 : 22)

    const size = rand() < 0.2 ? 26 + rand() * 12 : 12 + rand() * 7
    const opacity = 0.22 + rand() * 0.14

    paws.push({
      y,
      xPercent: centerX + swing + perpOffset,
      rotation: footRotation,
      size,
      opacity,
    })
  }

  return paws
}

export function PawTrail() {
  const [trail, setTrail] = useState<Paw[]>([])

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight
      setTrail(buildTrail(h + 400))
    }

    update()

    // Mobile browsers fire `resize` when the address bar hides/shows on scroll —
    // that's a height-only change, not a real layout change, so ignore it and
    // debounce the rest to avoid recomputing the whole trail mid-scroll/tap.
    let lastWidth = window.innerWidth
    let timeout: ReturnType<typeof setTimeout>
    const onResize = () => {
      if (window.innerWidth === lastWidth) return
      lastWidth = window.innerWidth
      clearTimeout(timeout)
      timeout = setTimeout(update, 200)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {trail.map((p, i) => (
        <PawPrint
          key={i}
          className="absolute"
          style={{
            top: `${p.y}px`,
            left: `${p.xPercent}%`,
            transform: `translateX(-50%) rotate(${p.rotation}deg)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            color: '#e11d48',
            strokeWidth: 2.2,
          }}
        />
      ))}
    </div>
  )
}
