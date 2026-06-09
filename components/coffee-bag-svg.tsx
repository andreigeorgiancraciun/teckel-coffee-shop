type Props = {
  bagColor: string
  flapColor: string
  labelColor: string
  accentColor: string
}

export function CoffeeBagSvg({ bagColor, flapColor, labelColor, accentColor }: Props) {
  return (
    <svg
      viewBox="0 0 160 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* shadow */}
      <ellipse cx="80" cy="232" rx="52" ry="6" fill="rgba(0,0,0,0.10)" />

      {/* bag body */}
      <rect x="12" y="52" width="136" height="168" rx="14" fill={bagColor} />

      {/* subtle side sheen */}
      <rect x="12" y="52" width="22" height="168" rx="14" fill="rgba(255,255,255,0.10)" />
      <rect x="126" y="52" width="22" height="168" rx="14" fill="rgba(0,0,0,0.06)" />

      {/* top flap */}
      <path
        d="M22,52 L138,52 L133,14 L27,14 Z"
        fill={flapColor}
      />

      {/* crimp lines on flap */}
      <line x1="30" y1="28" x2="130" y2="28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="39" x2="128" y2="39" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />

      {/* hang hole */}
      <circle cx="80" cy="18" r="4" fill="rgba(0,0,0,0.18)" />
      <circle cx="80" cy="18" r="2.2" fill={flapColor} />

      {/* air valve */}
      <circle cx="80" cy="68" r="7" fill={accentColor} opacity="0.6" />
      <circle cx="80" cy="68" r="4.5" fill={accentColor} opacity="0.9" />
      <circle cx="80" cy="68" r="2" fill="rgba(255,255,255,0.5)" />

      {/* dog logo */}
      <image
        href="/images/dog-logo.png"
        x="18"
        y="82"
        width="124"
        height="66"
        preserveAspectRatio="xMidYMid meet"
      />

      {/* label strip at bottom */}
      <rect x="12" y="170" width="136" height="50" rx="0" fill={labelColor} />
      <rect x="12" y="206" width="136" height="14" rx="0" fill="rgba(0,0,0,0.12)" />
      <rect x="12" y="208" width="136" height="12" rx="0" fill={labelColor} opacity="0.6"/>

      {/* bottom rounded corners mask */}
      <rect x="12" y="196" width="136" height="24" rx="14" fill={labelColor} />

      {/* TECKEL text on label */}
      <text
        x="80"
        y="188"
        textAnchor="middle"
        fontFamily="serif"
        fontWeight="900"
        fontSize="16"
        letterSpacing="4"
        fill="rgba(255,255,255,0.92)"
      >
        TECKEL
      </text>
      <text
        x="80"
        y="200"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="6.5"
        letterSpacing="2.5"
        fill="rgba(255,255,255,0.60)"
      >
        COFFEE &amp; COCKTAILS
      </text>
    </svg>
  )
}
