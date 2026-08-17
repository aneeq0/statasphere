import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/cn'
import { Link } from './Link'

const variants = {
  primary: 'bg-navy text-soft hover:-translate-y-px hover:bg-[#22244c]',
  secondary:
    'border border-navy/20 bg-transparent text-navy hover:-translate-y-px hover:border-navy/40',
  ghost: 'bg-transparent text-navy hover:text-navy/70',
  onDark: 'bg-soft text-deep hover:-translate-y-px hover:bg-white',
  onDarkOutline:
    'border border-white/25 bg-transparent text-soft hover:-translate-y-px hover:border-white/50',
} as const

const sizes = {
  default: 'h-12 px-6 text-[0.9375rem]',
  sm: 'h-10 px-5 text-[0.8125rem]',
} as const

type Variant = keyof typeof variants
type Size = keyof typeof sizes

const base =
  'group inline-flex max-w-full items-center justify-center gap-2 rounded-sm font-medium tracking-[-0.01em] transition-all duration-200 touch-manipulation motion-reduce:transition-none motion-reduce:hover:translate-y-0'

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  arrow?: boolean
  children?: ReactNode
}

type ButtonAsLink = CommonProps &
  { href: string } &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>

type ButtonAsButton = CommonProps &
  { href?: undefined } &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'default', className, arrow = false, children, ...rest } = props
  const classes = cn(base, sizes[size], variants[variant], className)
  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink
    const internal = href.startsWith('/') || href.startsWith('#')
    if (internal) {
      return (
        <Link href={href} className={classes} {...linkRest}>
          {content}
        </Link>
      )
    }
    return (
      <a href={href} className={classes} {...linkRest}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {content}
    </button>
  )
}
