import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { FadeIn } from './FadeIn'

type Label = {
  text: string
  position: 'tl' | 'tr' | 'bl' | 'br' | 'l' | 'r'
}

type ProductScreenshotProps = {
  children: ReactNode
  className?: string
  caption?: string
  title?: string
  labels?: readonly Label[]
  perspective?: boolean
}

const labelClass: Record<Label['position'], string> = {
  tl: 'top-3 left-3 md:top-4 md:left-4',
  tr: 'top-3 right-3 md:top-4 md:right-4',
  bl: 'bottom-3 left-3 md:bottom-4 md:left-4',
  br: 'bottom-3 right-3 md:bottom-4 md:right-4',
  l: 'top-1/2 left-3 -translate-y-1/2 md:left-4',
  r: 'top-1/2 right-3 -translate-y-1/2 md:right-4',
}

export function ProductScreenshot({
  children,
  className,
  caption,
  title,
  labels,
  perspective = false,
}: ProductScreenshotProps) {
  const reduced = usePrefersReducedMotion()
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame || reduced || !perspective) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      frame.style.transform = `perspective(1600px) rotateY(${x * 3}deg) rotateX(${-y * 2.5}deg)`
    }

    const onLeave = () => {
      frame.style.transform = 'perspective(1600px) rotateX(1.4deg) rotateY(-1.2deg)'
    }

    onLeave()
    frame.addEventListener('pointermove', onMove)
    frame.addEventListener('pointerleave', onLeave)
    return () => {
      frame.removeEventListener('pointermove', onMove)
      frame.removeEventListener('pointerleave', onLeave)
    }
  }, [perspective, reduced])

  return (
    <FadeIn className={cn('w-full min-w-0', className)}>
      <figure className="relative w-full min-w-0">
        <div
          ref={frameRef}
          className="relative overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[0_18px_44px_-24px_rgba(5,7,23,0.38)] ring-1 ring-accent/15 transition-transform duration-300 ease-out will-change-transform motion-reduce:transform-none motion-reduce:transition-none"
          style={
            perspective && !reduced
              ? { transform: 'perspective(1600px) rotateX(1.4deg) rotateY(-1.2deg)' }
              : undefined
          }
        >
          {title ? (
            <div className="flex items-center justify-between gap-3 border-b border-navy/10 bg-soft/80 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex gap-1" aria-hidden="true">
                  <span className="size-1.5 rounded-full bg-navy/20" />
                  <span className="size-1.5 rounded-full bg-navy/20" />
                  <span className="size-1.5 rounded-full bg-accent/80" />
                </span>
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-navy">
                  {title}
                </p>
              </div>
              <span className="size-1.5 rounded-full bg-accent signal-pulse" aria-hidden="true" />
            </div>
          ) : null}
          {children}
        </div>
        {labels?.map((label) => (
          <span
            key={label.text}
            className={cn(
              'pointer-events-none absolute z-10 hidden rounded-full border border-navy/10 bg-soft/90 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-navy backdrop-blur-md md:inline-flex',
              labelClass[label.position],
            )}
          >
            {label.text}
          </span>
        ))}
        {caption ? (
          <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
        ) : null}
      </figure>
    </FadeIn>
  )
}
