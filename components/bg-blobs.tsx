// Paletă vie — roz aprins, fucsia, albastru electric, cyan, violet, verde neon, coral, portocaliu, galben
const C = {
  hotPink:  '255,45,149',
  fuchsia:  '230,0,200',
  electric: '0,194,255',
  cyan:     '0,224,209',
  violet:   '168,85,247',
  lime:     '204,255,0',
  coral:    '255,60,60',
  amber:    '255,165,0',
  green:    '0,230,118',
  yellow:   '255,214,0',
}

// Bloburile evită centrul paginii (unde stă textul), lipite de margini reale
// (0–12% și 88–100%) ca să nu se întindă peste conținut pe ecrane înguste.
// Un singur div cu multe gradiente radiale suprapuse — fără blur, fără
// repeat (care lăsa linii vizibile la muchia tile-ului), fără zeci de
// noduri DOM. Mai multe gradiente în șirul CSS tot costă puțin (un singur
// paint), spre deosebire de mai multe div-uri cu filter: blur().
const rowPatterns = [
  [{ x: 2,  c: C.hotPink  }, { x: 10, c: C.yellow   }, { x: 90, c: C.electric }, { x: 98, c: C.lime    }],
  [{ x: 3,  c: C.violet   }, { x: 11, c: C.amber    }, { x: 89, c: C.green    }, { x: 97, c: C.coral   }],
  [{ x: 1,  c: C.electric }, { x: 9,  c: C.coral    }, { x: 91, c: C.hotPink  }, { x: 99, c: C.yellow  }],
  [{ x: 2,  c: C.cyan     }, { x: 10, c: C.fuchsia  }, { x: 90, c: C.violet   }, { x: 98, c: C.green   }],
]

const ROW_H  = 560
const PAGE_H = 9500

const stops: string[] = []
let row = 0
for (let y = -100; y < PAGE_H; y += ROW_H) {
  const pattern = rowPatterns[row % rowPatterns.length]
  for (let col = 0; col < pattern.length; col++) {
    const p = pattern[col]
    const wobbleX = ((row + col) % 5 - 2) * 2
    const size = 220 + ((row + col) % 3) * 30
    const opacity = 0.3 + ((row + col) % 4) * 0.03
    // min(...vw) ține bloburile lipite de margine și pe ecrane înguste,
    // unde o rază fixă în px ar acoperi proporțional mult mai mult din text.
    stops.push(`radial-gradient(circle min(${size}px, 20vw) at ${p.x + wobbleX}% ${y}px, rgba(${p.c},${opacity}) 0%, rgba(${p.c},${opacity}) 15%, transparent 70%)`)
  }
  row++
}

const BACKGROUND_IMAGE = stops.join(', ')

export function BgBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0, contain: 'strict', backgroundImage: BACKGROUND_IMAGE }}
    />
  )
}
