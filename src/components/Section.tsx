import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  'aria-labelledby'?: string
}

export function Section({
  id,
  children,
  className,
  size = 'md',
  'aria-labelledby': labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        size === 'sm' && 'section-space-sm',
        size === 'md' && 'section-space',
        size === 'lg' && 'section-space-lg',
        className,
      )}
    >
      {children}
    </section>
  )
}
