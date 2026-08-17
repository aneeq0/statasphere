import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type FadeInProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'li'
}

export function FadeIn({ children, className, delayMs = 0, as = 'div' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(reduced)
  const Tag = as

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <Tag
      ref={ref as never}
      className={cn('fade-up min-w-0', visible && 'is-visible', className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
