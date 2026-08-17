import { connectors } from '../lib/channels'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { PlatformIcon } from './PlatformIcon'
import { SphereMark } from './SphereMark'

const outerRing = [
  'Google Ads',
  'Meta',
  'TikTok',
  'Snapchat',
  'Amazon Ads',
  'ChatGPT',
] as const

const innerRing = [
  'Shopify',
  'BigCommerce',
  'Google Merchant Center',
  'Google Analytics',
  'Google Search Console',
] as const

function pointOnRing(index: number, count: number, radius: number, offset = 0) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2 + offset
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius * 0.92,
  }
}

function Satellite({
  name,
  x,
  y,
}: {
  name: string
  x: number
  y: number
}) {
  const prominent = connectors.find((item) => item.name === name)?.prominent

  return (
    <li
      className={cn(
        'absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full border bg-white/95 py-1.5 pl-1.5 pr-4 shadow-[0_12px_32px_-16px_rgba(5,7,23,0.4)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.04]',
        prominent ? 'border-navy/25' : 'border-navy/10',
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <PlatformIcon name={name} size="sm" tone="solid" />
      <span className="whitespace-nowrap text-[0.8125rem] tracking-[-0.02em] text-navy">{name}</span>
    </li>
  )
}

export function ConnectorNetwork() {
  const reduced = usePrefersReducedMotion()
  const nodes = [
    ...outerRing.map((name, index) => ({ name, ...pointOnRing(index, outerRing.length, 38) })),
    ...innerRing.map((name, index) => ({
      name,
      ...pointOnRing(index, innerRing.length, 24, Math.PI / 5),
    })),
  ]

  return (
    <div>
      <div className="lg:hidden">
        <div className="mb-6 flex flex-col items-center rounded-2xl bg-navy px-6 py-8 text-center text-soft">
          <SphereMark size={56} inverted spinning={!reduced} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em]">Statasphere</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">Intelligence layer</p>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {connectors.map((connector) => (
            <li
              key={connector.name}
              className="flex min-h-11 items-center gap-3 rounded-full border border-navy/10 bg-white py-2 pl-2 pr-4"
            >
              <PlatformIcon name={connector.name} size="sm" tone="solid" />
              <span className="min-w-0 text-[0.9375rem] tracking-[-0.02em] text-navy">{connector.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto hidden aspect-square w-full max-w-[52rem] lg:block lg:max-w-none lg:aspect-[5/4]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl glow-pulse"
          aria-hidden="true"
        />

        {!reduced ? (
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] size-[78%] -translate-x-1/2 -translate-y-1/2">
            <div
              className="radar-sweep size-full rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, rgb(220 174 202 / 0.28) 7%, transparent 16%)',
              }}
              aria-hidden="true"
            />
          </div>
        ) : null}

        <svg className="absolute inset-0 z-[2] h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="16" stroke="#292b59" strokeOpacity="0.08" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="24" stroke="#dcaeca" strokeOpacity="0.45" strokeWidth="0.28" />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#292b59"
            strokeOpacity="0.14"
            strokeWidth="0.3"
            strokeDasharray="1.4 1.8"
            className={reduced ? undefined : 'orb-spin'}
            style={{ transformOrigin: '50px 50px' }}
          />
          {nodes.map((node, index) => {
            const d = `M 50 50 L ${node.x} ${node.y}`
            return (
              <g key={node.name}>
                <path d={d} stroke="#292b59" strokeOpacity="0.12" strokeWidth="0.28" />
                {!reduced ? (
                  <circle r="0.55" fill="#dcaeca">
                    <animateMotion
                      dur={`${5 + (index % 4) * 0.7}s`}
                      begin={`${index * 0.22}s`}
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                ) : null}
              </g>
            )
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-20 flex size-[9.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center text-soft shadow-[0_24px_60px_-20px_rgba(41,43,89,0.7)] lg:size-[11rem]">
          <SphereMark size={44} inverted spinning={!reduced} className="lg:h-14 lg:w-14" />
          <p className="mt-2 text-[0.625rem] font-semibold uppercase tracking-[0.16em] lg:text-[0.6875rem]">
            Statasphere
          </p>
          <p className="mt-0.5 text-[0.5rem] uppercase tracking-[0.14em] text-accent lg:text-[0.5625rem]">
            Intelligence layer
          </p>
        </div>

        <ul className="absolute inset-0 z-10">
          {nodes.map((node) => (
            <Satellite key={node.name} name={node.name} x={node.x} y={node.y} />
          ))}
        </ul>
      </div>
    </div>
  )
}
