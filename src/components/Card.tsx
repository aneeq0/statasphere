import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  as?: 'article' | 'div'
}

export function Card({ children, className, as: Tag = 'article' }: CardProps) {
  return (
    <Tag
      className={cn(
        'flex h-full min-w-0 flex-col rounded-xl border border-navy/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 sm:p-6 md:p-8',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
