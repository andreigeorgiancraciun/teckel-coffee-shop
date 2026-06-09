type Blob = {
  top: number
  xPercent: number
  w: number
  h: number
  color: string
  blur: number
  opacity: number
}

// Paleta calda + galben si verde
const C = {
  amber:      '#FF9900',
  orange:     '#FF6600',
  coral:      '#FF3C3C',
  yellow:     '#FFD700',
  lemon:      '#CCFF00',
  caramel:    '#CC5500',
  blush:      '#FF5544',
  peach:      '#FF8833',
  green:      '#00CC44',
  sage:       '#44BB44',
}

// 5 blob-uri per rand — pozitii distribuite sa acopere toata latimea
// Bloburile evita centrul paginii (30%–70%) unde sta textul
// Se concentreaza pe margini stanga (0–28%) si dreapta (72–100%)
const rowPatterns = [
  [{ x:  4, c: C.amber   }, { x: 18, c: C.lemon   }, { x: 78, c: C.green   }, { x: 93, c: C.coral   }],
  [{ x:  6, c: C.sage    }, { x: 22, c: C.yellow  }, { x: 75, c: C.amber   }, { x: 91, c: C.peach   }],
  [{ x:  3, c: C.orange  }, { x: 20, c: C.green   }, { x: 77, c: C.lemon   }, { x: 94, c: C.amber   }],
  [{ x:  7, c: C.yellow  }, { x: 24, c: C.blush   }, { x: 74, c: C.sage    }, { x: 92, c: C.caramel }],
  [{ x:  5, c: C.lemon   }, { x: 19, c: C.orange  }, { x: 79, c: C.green   }, { x: 93, c: C.yellow  }],
  [{ x:  8, c: C.green   }, { x: 23, c: C.amber   }, { x: 76, c: C.lemon   }, { x: 91, c: C.sage    }],
]

const ROW_H  = 260
const PAGE_H = 9500  // acoperire mobil — sectiunile stivuite vertical sunt mult mai lungi

const BLOBS: Blob[] = []
let row = 0
for (let y = -100; y < PAGE_H; y += ROW_H) {
  const pattern = rowPatterns[row % rowPatterns.length]
  for (let col = 0; col < pattern.length; col++) {
    const p = pattern[col]
    const wobbleX = ((row + col) % 5 - 2) * 3
    const w = 440 + (row % 3) * 30
    const h = 400 + (col % 3) * 30
    const opacity = 0.07 + ((row + col) % 4) * 0.02  // 0.07–0.13
    BLOBS.push({
      top: y,
      xPercent: p.x + wobbleX,
      w, h,
      color: p.c,
      blur: 90,
      opacity,
    })
  }
  row++
}

export function BgBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top:        b.top,
            left:       `${b.xPercent}%`,
            width:      b.w,
            height:     b.h,
            background: b.color,
            opacity:    b.opacity,
            filter:     `blur(${b.blur}px)`,
            transform:  'translateX(-50%)',
          }}
        />
      ))}
    </div>
  )
}
