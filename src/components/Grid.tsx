import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../lib/cn'

type GridProps = {
  children: ReactNode
  className?: string
  stretch?: boolean
  align?: 'start' | 'end' | 'center'
  alignLg?: 'start' | 'end' | 'center'
}

export function Grid({
  children,
  className,
  stretch = false,
  align,
  alignLg,
}: GridProps) {
  return (
    <div
      className={cn(
        'site-grid',
        stretch && 'is-stretch',
        align === 'end' && 'is-end',
        align === 'center' && 'is-center',
        alignLg === 'end' && 'is-lg-end',
        alignLg === 'center' && 'is-lg-center',
        className,
      )}
    >
      {children}
    </div>
  )
}

type GridItemProps = {
  children: ReactNode
  className?: string
  span?: number
  md?: number
  lg?: number
  lgStart?: number
}

export function GridItem({
  children,
  className,
  span = 4,
  md = 8,
  lg = 12,
  lgStart,
}: GridItemProps) {
  const style = {
    '--span': span,
    '--span-md': md,
    '--span-lg': lg,
    ...(lgStart != null ? { '--span-lg-start': lgStart } : {}),
  } as CSSProperties

  return (
    <div className={cn('site-grid-item', className)} style={style}>
      {children}
    </div>
  )
}
