import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type AnimatedLinesProps = {
  id?: string
  lines: readonly ReactNode[]
  as?: 'h1' | 'h2' | 'p'
  className?: string
  delay?: number
  onceInView?: boolean
}

export function AnimatedLines({
  id,
  lines,
  as: Tag = 'h1',
  className,
  delay = 0,
  onceInView = false,
}: AnimatedLinesProps) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(!onceInView)

  useEffect(() => {
    if (!onceInView || reduced) {
      setActive(true)
      return
    }
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [onceInView, reduced])

  return (
    <Tag id={id} ref={ref as never} className={cn('text-balance', className)}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          <span
            className="block"
            style={
              reduced || !active
                ? undefined
                : {
                    animation: 'text-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
                    animationDelay: `${delay + lineIndex * 0.12}s`,
                  }
            }
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
