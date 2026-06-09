export const socials = [
  { name: 'TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
  { name: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { name: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
]

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3h-2.7v12.3a2.4 2.4 0 1 1-2.4-2.4c.2 0 .5 0 .7.1V10.2a5.3 5.3 0 0 0-.7-.05 5.25 5.25 0 1 0 5.25 5.25V8.9a6.4 6.4 0 0 0 3.6 1.1V7.3a3.6 3.6 0 0 1-3.55-3.55c0-.25 0-.5 0-.75z" />
    </svg>
  )
}
