import { useId } from 'react'
import { cn } from '../lib/cn'

type SphereMarkProps = {
  className?: string
  size?: number
  inverted?: boolean
  spinning?: boolean
}

export function SphereMark({
  className,
  size = 88,
  inverted = false,
  spinning = false,
}: SphereMarkProps) {
  const gid = useId().replace(/:/g, '')
  const stroke = inverted ? '#fbf8f8' : '#292b59'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      className={cn(spinning && 'orb-spin', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="12" y1="76" x2="76" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dcaeca" />
          <stop offset="1" stopColor="#292b59" />
        </linearGradient>
      </defs>
      <circle
        cx="44"
        cy="44"
        r="36"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        strokeOpacity="0.55"
        strokeDasharray="170 56"
        strokeLinecap="round"
      />
      <path
        d="M22 58 L32 46 L40 50 L52 32 L66 22"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="58" r="2.4" fill="#dcaeca" />
      <circle cx="32" cy="46" r="2.4" fill="#dcaeca" />
      <circle cx="40" cy="50" r="2.4" fill="#b07090" />
      <circle cx="52" cy="32" r="2.6" fill="#292b59" />
      <path
        d="M66 16 L68.2 21.2 L73.4 23.4 L68.2 25.6 L66 30.8 L63.8 25.6 L58.6 23.4 L63.8 21.2 Z"
        fill={inverted ? '#fbf8f8' : '#292b59'}
      />
    </svg>
  )
}
