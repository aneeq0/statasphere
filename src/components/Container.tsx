import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'header' | 'footer' | 'nav'
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return <Tag className={cn('site-container', className)}>{children}</Tag>
}
