import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type DataFieldProps = {
  children?: ReactNode
  className?: string
  dark?: boolean
}

export function DataField({ children, className, dark = false }: DataFieldProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className={cn('absolute inset-0', dark ? 'grid-field-dark' : 'grid-field')} />
      <div
        className={cn(
          'data-sweep absolute top-1/3 h-px w-1/3',
          dark ? 'bg-gradient-to-r from-transparent via-accent/50 to-transparent' : 'bg-gradient-to-r from-transparent via-navy/20 to-transparent',
        )}
      />
      <div
        className={cn(
          'glow-pulse absolute -left-16 top-1/4 size-52 rounded-full blur-3xl sm:-left-24 sm:size-72',
          dark ? 'bg-accent/10' : 'bg-accent/20',
        )}
      />
      <div
        className={cn(
          'glow-pulse absolute -right-12 bottom-0 size-56 rounded-full blur-3xl sm:-right-16 sm:size-80',
          dark ? 'bg-navy/40' : 'bg-navy/5',
        )}
        style={{ animationDelay: '-2s' }}
      />
      {children}
    </div>
  )
}
