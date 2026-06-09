import { cn } from '@/lib/utils'

export function DachshundIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 32"
      className={cn('h-6 w-auto', className)}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* body */}
      <path d="M8 18c0-2.2 1.8-4 4-4h34c1 0 2-.4 2.6-1.2l3-4c.7-.9 1.8-1.5 3-1.5h1.6c1.4 0 2.4 1.4 1.9 2.7l-1.2 3.3c-.3.8-.2 1.7.3 2.4l2.3 3.2c.8 1.1 0 2.6-1.3 2.6h-3.2c-.9 0-1.7-.5-2.1-1.3l-.4-.7v4c0 1.1-.9 2-2 2s-2-.9-2-2v-3H20v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3.2c-2.6-.4-4.7-2.3-5.5-4.8H8z" />
      {/* front leg */}
      <rect x="14" y="20" width="3" height="9" rx="1.5" />
      {/* back leg */}
      <rect x="48" y="20" width="3" height="9" rx="1.5" />
      {/* tail */}
      <path d="M8 16c-2.5-.5-4.5-1.8-5.5-3.8-.4-.8.2-1.7 1.1-1.6 1.6.2 3.1 1 4.4 2.2z" />
    </svg>
  )
}
