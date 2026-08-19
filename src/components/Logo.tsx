import logoLockup from '../assets/logo.png'
import logoLockupOnDark from '../assets/logo-on-dark.png'
import logoMark from '../assets/logo-mark.png'
import { cn } from '../lib/cn'
import { Link } from './Link'

type LogoProps = {
  inverted?: boolean
  className?: string
  variant?: 'lockup' | 'mark'
}

export function Logo({ inverted = false, variant = 'mark', className }: LogoProps) {
  const lockup = inverted ? logoLockupOnDark : logoLockup
  const src = variant === 'lockup' ? lockup : logoMark
  const width = variant === 'lockup' ? 991 : 211
  const height = variant === 'lockup' ? 249 : 198

  return (
    <Link
      href="/"
      className={cn('inline-flex shrink-0 items-center', className)}
      aria-label="Statasphere home"
    >
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        className={cn(
          variant === 'lockup'
            ? 'h-11 w-auto sm:h-12 lg:h-14'
            : inverted
              ? 'h-8 w-auto sm:h-10'
              : 'h-11 w-auto sm:h-12 lg:h-14',
          variant === 'mark' && inverted && 'brightness-0 invert',
        )}
      />
    </Link>
  )
}
