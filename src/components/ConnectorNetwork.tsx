import logoSrc from '../assets/logo-icon.png'
import { connectors } from '../lib/channels'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { PlatformIcon } from './PlatformIcon'
import { SphereMark } from './SphereMark'

const heroNodes = [
  { name: 'Google Ads', x: 50, y: 4 },
  { name: 'Meta', x: 83, y: 17 },
  { name: 'BigCommerce', x: 95, y: 50 },
  { name: 'TikTok', x: 84, y: 82 },
  { name: 'Snapchat', x: 53, y: 96 },
  { name: 'Amazon Ads', x: 18, y: 87 },
  { name: 'Google Analytics', x: 4, y: 60 },
  { name: 'ChatGPT', x: 8, y: 28 },
  { name: 'Google Search Console', x: 27, y: 15 },
  { name: 'Shopify', x: 69, y: 9 },
  { name: 'Google Merchant Center', x: 22, y: 44 },
] as const

const sectionOuterRing = [
  'Google Ads',
  'Meta',
  'TikTok',
  'Snapchat',
  'Amazon Ads',
  'ChatGPT',
] as const

const sectionInnerRing = [
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

type ConnectorNetworkProps = {
  variant?: 'section' | 'hero'
}

function HeroOrbital({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[40rem]"
      role="img"
      aria-label="Statasphere connecting ChatGPT, BigCommerce, Google Ads, Google Merchant Center, Google Search Console, Google Analytics, Meta, TikTok, Snapchat, Amazon Ads and Shopify"
    >
      <div className="relative aspect-square w-full">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[95.3%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-navy/[0.11]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[67.2%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent/55 shadow-[inset_0_0_90px_rgba(220,174,202,0.15)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[42.2%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-navy/10" />

        {!reduced
          ? [1, 2, 3, 4].map((n) => (
              <span key={n} className={`proto-flow proto-flow-${n}`} aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(220,174,202,0.08)]" />
              </span>
            ))
          : null}

        <div className="absolute left-1/2 top-1/2 z-10 flex size-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <img
            src={logoSrc}
            alt=""
            width={271}
            height={276}
            className={cn(
              'h-full w-auto drop-shadow-[0_10px_16px_rgba(41,43,89,0.10)]',
              !reduced && 'proto-logo-spin',
            )}
          />
        </div>

        <ul className="absolute inset-0 z-[5]">
          {heroNodes.map((node) => (
            <li
              key={node.name}
              className="absolute z-[5] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-[#e4e1e8] bg-white/95 py-2.5 pl-2.5 pr-3.5 text-[13px] text-navy shadow-[0_12px_28px_rgba(41,43,89,0.10)]"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <PlatformIcon name={node.name} size="sm" tone="brand" />
              <span className="tracking-[-0.02em]">{node.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SectionOrbital({ reduced }: { reduced: boolean }) {
  const nodes = [
    ...sectionOuterRing.map((name, index) => ({ name, ...pointOnRing(index, sectionOuterRing.length, 38) })),
    ...sectionInnerRing.map((name, index) => ({
      name,
      ...pointOnRing(index, sectionInnerRing.length, 24, Math.PI / 5),
    })),
  ]

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[52rem] lg:max-w-none lg:aspect-[5/4]"
      role="img"
      aria-label="Statasphere connecting ChatGPT, BigCommerce, Google Ads, Google Merchant Center, Google Search Console, Google Analytics, Meta, TikTok, Snapchat, Amazon Ads and Shopify"
    >
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
          style={reduced ? undefined : { transformOrigin: '50px 50px', transformBox: 'view-box' }}
        />
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
          <li
            key={node.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            aria-label={node.name}
          >
            <div className="flex items-center gap-2.5 rounded-full border border-navy/10 bg-white/95 py-1.5 pl-1.5 pr-4 shadow-[0_12px_32px_-16px_rgba(5,7,23,0.4)]">
              <PlatformIcon name={node.name} size="sm" tone="brand" />
              <span className="whitespace-nowrap text-[0.8125rem] tracking-[-0.02em] text-navy">{node.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConnectorNetwork({ variant = 'section' }: ConnectorNetworkProps) {
  const reduced = usePrefersReducedMotion()

  if (variant === 'hero') {
    return (
      <div className="relative w-full min-w-0 overflow-visible px-1 sm:px-0">
        <HeroOrbital reduced={reduced} />
      </div>
    )
  }

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
              <PlatformIcon name={connector.name} size="sm" tone="brand" />
              <span className="min-w-0 text-[0.9375rem] tracking-[-0.02em] text-navy">{connector.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <SectionOrbital reduced={reduced} />
      </div>
    </div>
  )
}
