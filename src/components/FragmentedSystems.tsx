import { useEffect, useRef, useState } from 'react'
import { problemSystems } from '../lib/channels'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { SphereMark } from './SphereMark'

export function FragmentedSystems() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [merged, setMerged] = useState(false)

  useEffect(() => {
    if (reduced) {
      setMerged(true)
      return
    }

    const element = ref.current
    if (!element) return

    let timeout = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        timeout = window.setTimeout(() => setMerged(true), 700)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [reduced])

  return (
    <div ref={ref} className="relative mx-auto aspect-[5/4] w-full min-w-0 max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:mx-0 lg:max-w-none lg:aspect-square">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {problemSystems.map((system, index) => {
          const d = `M ${system.x} ${system.y} C ${system.x} 50, 50 ${system.y}, 50 50`
          return (
            <g key={system.name}>
              <path
                d={d}
                stroke="#dcaeca"
                strokeOpacity={merged ? 0.75 : 0.12}
                strokeWidth="0.4"
                className={!reduced && merged ? 'draw-line' : undefined}
                style={{ transition: 'stroke-opacity 0.7s ease', animationDelay: `${index * 0.1}s` }}
                pathLength={1}
              />
              {merged && !reduced ? (
                <circle r="0.65" fill="#dcaeca">
                  <animateMotion dur={`${4 + index * 0.4}s`} repeatCount="indefinite" path={d} />
                </circle>
              ) : null}
            </g>
          )
        })}
      </svg>

      {problemSystems.map((system) => (
        <div
          key={system.name}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
          style={{
            left: merged ? `${18 + (system.x - 12) * 0.64}%` : `${system.x}%`,
            top: merged ? `${22 + (system.y - 14) * 0.64}%` : `${system.y}%`,
          }}
        >
          <div
            className={cn(
              'rounded-full border bg-white/90 px-3 py-1.5 text-[0.6875rem] font-medium tracking-[-0.02em] text-navy shadow-[0_10px_24px_-16px_rgba(5,7,23,0.4)] backdrop-blur-md sm:text-[0.75rem]',
              merged ? 'border-accent/40' : 'border-navy/10',
            )}
          >
            {system.name}
          </div>
        </div>
      ))}

      <div
        className={cn(
          'absolute left-1/2 top-1/2 z-20 flex w-[48%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center transition-all duration-700',
          merged ? 'scale-100 opacity-100' : 'scale-90 opacity-40',
        )}
      >
        <div className="rounded-full border border-navy/10 bg-soft/95 px-4 py-5 shadow-[0_20px_50px_-24px_rgba(41,43,89,0.45)] backdrop-blur-md sm:px-6 sm:py-6">
          <SphereMark size={56} spinning={merged && !reduced} className="mx-auto" />
          <p className="mt-2 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy sm:text-[0.75rem]">
            Statasphere
          </p>
          <p className="mt-1 text-[0.5625rem] uppercase tracking-[0.12em] text-muted sm:text-[0.6875rem]">
            Intelligence layer
          </p>
        </div>
      </div>
    </div>
  )
}
