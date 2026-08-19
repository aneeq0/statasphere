import { useId } from 'react'
import { cn } from '../lib/cn'
import { Link } from './Link'

type LogoProps = {
  inverted?: boolean
  className?: string
}

export function Logo({ inverted = false, className }: LogoProps) {
  const gid = useId().replace(/:/g, '')
  const word = inverted ? '#fbf8f8' : '#292b59'
  const end = inverted ? '#fbf8f8' : '#292b59'

  return (
    <Link
      href="/"
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 rounded-sm sm:gap-3',
        className,
      )}
      aria-label="Statasphere home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        className="size-10 sm:size-11"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gid} x1="9" y1="39" x2="39" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dcaeca" />
            <stop offset="1" stopColor={end} />
          </linearGradient>
        </defs>
        <path
          d="M15.4 7.6a18.4 18.4 0 1 0 17.2 0"
          stroke={`url(#${gid})`}
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M12.8 33.2 18.6 24.6 24.2 27.2 32.2 16.4 36.4 12.2"
          stroke={`url(#${gid})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12.8" cy="33.2" r="2.2" fill="#dcaeca" />
        <circle cx="18.6" cy="24.6" r="2.15" fill="#dcaeca" />
        <circle cx="24.2" cy="27.2" r="2.15" fill="#b07090" />
        <circle cx="32.2" cy="16.4" r="2.2" fill={end} />
        <path
          d="M36.4 6.8 37.7 10.4 41.3 11.7 37.7 13 36.4 16.6 35.1 13 31.5 11.7 35.1 10.4 Z"
          fill={end}
        />
      </svg>
      <span
        className="text-[1.35rem] font-medium lowercase leading-none tracking-[-0.045em] sm:text-[1.5rem]"
        style={{ color: word }}
      >
        statasphere
      </span>
    </Link>
  )
}
