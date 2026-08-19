import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { ChannelMark } from './ChannelMark'

const scenes = [
  {
    chapter: 'Product Performance',
    sub: 'Same product. Different performance by channel.',
  },
  {
    chapter: 'Channel Performance',
    sub: 'Same business. Channels moving differently.',
  },
  {
    chapter: 'The Question',
    sub: 'Where should attention go next?',
  },
] as const

const productChannels = [
  { channel: 'google', story: 'ROAS ↑ 32% • Revenue ↑ 24%', status: 'Strong', tone: 'good' },
  { channel: 'meta', story: 'ROAS ↓ 21% • Spend ↑ 18%', status: 'Underperforming', tone: 'bad' },
  { channel: 'tiktok', story: 'ROAS ↑ 2% • Revenue ↑ 4%', status: 'Stable', tone: 'flat' },
] as const

const channelCards = [
  {
    channel: 'google',
    callout: 'Growing efficiently.',
    metrics: [
      { label: 'Spend', value: '↑ 12%', tone: 'good' },
      { label: 'Revenue', value: '↑ 28%', tone: 'good' },
      { label: 'ROAS', value: '↑ 14%', tone: 'good' },
    ],
  },
  {
    channel: 'meta',
    callout: 'Efficiency weakening.',
    metrics: [
      { label: 'Spend', value: '↑ 19%', tone: 'bad' },
      { label: 'Revenue', value: '↓ 8%', tone: 'bad' },
      { label: 'ROAS', value: '↓ 23%', tone: 'bad' },
    ],
  },
  {
    channel: 'tiktok',
    callout: 'Holding steady.',
    metrics: [
      { label: 'Spend', value: '↓ 2%', tone: 'flat' },
      { label: 'Revenue', value: '↑ 1%', tone: 'flat' },
      { label: 'ROAS', value: '→ Stable', tone: 'flat' },
    ],
  },
] as const

const toneClass = {
  good: 'text-[#5d7a72]',
  bad: 'text-[#a36f89]',
  flat: 'text-[#8a91a3]',
} as const

const statusClass = {
  good: 'bg-[#eef4f2] text-[#5d7a72]',
  bad: 'bg-[#f7edf2] text-[#a36f89]',
  flat: 'bg-[#f3f3f5] text-[#8a91a3]',
} as const

export function ProblemVisual() {
  const reduced = usePrefersReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const [scene, setScene] = useState(0)
  const [highlight, setHighlight] = useState(0)
  const visibleRef = useRef(true)

  useEffect(() => {
    if (reduced) return
    const element = rootRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
      },
      { threshold: 0.2 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [reduced])

  useEffect(() => {
    if (reduced) return
    const sceneTimer = window.setInterval(() => {
      if (!visibleRef.current) return
      setScene((current) => (current + 1) % scenes.length)
      setHighlight(0)
    }, 5200)
    return () => window.clearInterval(sceneTimer)
  }, [reduced])

  useEffect(() => {
    if (reduced || scene >= 2) return
    const inner = window.setInterval(() => {
      if (!visibleRef.current) return
      setHighlight((current) => (current + 1) % 3)
    }, 1100)
    return () => window.clearInterval(inner)
  }, [reduced, scene])

  const current = scenes[scene]

  return (
    <div ref={rootRef} className="relative w-full">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(100%,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(207,143,180,0.15),rgba(207,143,180,0.05)_42%,transparent_72%)]"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[30px] border border-[#ebe7ed] bg-white/[0.82] p-5 shadow-[0_28px_70px_rgba(47,49,95,0.09)] sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-[#9b8295]">
            {current.chapter}
          </p>
          <p className="hidden text-right text-[0.75rem] text-[#9ca4b3] sm:block">{current.sub}</p>
        </div>

        <div className="relative min-h-[22rem]">
          {scene === 0 ? (
            <div className="proto-reveal">
              <p className="text-[1.5rem] font-semibold leading-[1.06] tracking-[-0.04em] text-navy sm:text-[1.9375rem]">
                The same product can perform very differently by channel.
              </p>
              <p className="mt-2 text-[0.9375rem] text-[#7e879d]">
                One product. Three channels. Three different outcomes.
              </p>
              <div className="mt-6 grid items-center gap-6 min-[900px]:grid-cols-[0.82fr_1.18fr]">
                <div className="mx-auto w-full max-w-[16.25rem] overflow-hidden rounded-3xl border border-[#e6e1e8] bg-white shadow-[0_18px_40px_rgba(47,49,95,0.09)]">
                  <div className="relative h-[14.375rem] overflow-hidden bg-[#f7eef3]">
                    <img
                      src="/signature-heel.jpg"
                      alt="Signature Heel in black patent leather"
                      className={cn(
                        'absolute inset-0 h-full w-full object-cover object-center',
                        !reduced && 'product-float',
                      )}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_42%,rgba(255,255,255,0.18)_100%)]" />
                    {!reduced ? (
                      <span className="product-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
                    ) : null}
                  </div>
                  <div className="px-5 py-[1.125rem]">
                    <p className="mb-1.5 text-[0.625rem] font-extrabold uppercase tracking-[0.18em] text-[#9b86a0]">
                      Same product
                    </p>
                    <p className="text-xl font-bold tracking-[-0.025em] text-navy">Signature Heel</p>
                    <p className="mt-1 text-xs text-[#9ba2b2]">SKU 184729 • Black / 6</p>
                  </div>
                </div>

                <ul className="grid gap-3">
                  {productChannels.map((item, index) => (
                    <li
                      key={item.channel}
                      className={cn(
                        'grid items-center gap-3 rounded-2xl border bg-white px-4 py-3.5 shadow-[0_8px_18px_rgba(47,49,95,0.04)] transition duration-300 min-[480px]:grid-cols-[110px_1fr_auto]',
                        highlight === index
                          ? 'translate-x-1 border-[#dfbfd1] bg-[#fffafb] shadow-[0_12px_28px_rgba(207,143,180,0.13)]'
                          : 'border-[#e7e3e9]',
                      )}
                    >
                      <ChannelMark channel={item.channel} compact />
                      <p className="text-[0.8125rem] text-[#778099]">{item.story}</p>
                      <span
                        className={cn(
                          'justify-self-start rounded-full px-2.5 py-2 text-xs font-extrabold whitespace-nowrap min-[480px]:justify-self-end',
                          statusClass[item.tone],
                        )}
                      >
                        {item.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {scene === 1 ? (
            <div className="proto-reveal">
              <p className="text-[1.5rem] font-semibold leading-[1.06] tracking-[-0.04em] text-navy sm:text-[1.9375rem]">
                The channels themselves can be moving in different directions.
              </p>
              <p className="mt-2 text-[0.9375rem] text-[#7e879d]">
                Same business. Different channel performance at the same time.
              </p>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-3">
                {channelCards.map((card, index) => (
                  <li
                    key={card.channel}
                    className={cn(
                      'rounded-[18px] border bg-white p-4 shadow-[0_10px_22px_rgba(47,49,95,0.045)] transition duration-300',
                      highlight === index
                        ? '-translate-y-1 border-[#dfbfd1] shadow-[0_14px_32px_rgba(207,143,180,0.14)]'
                        : 'border-[#e7e3e9]',
                    )}
                  >
                    <ChannelMark channel={card.channel} className="mb-4 text-sm" />
                    {card.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between border-b border-[#f0edf1] py-2.5 text-[0.8125rem] last:border-b-0"
                      >
                        <span className="text-[#8b93a7]">{metric.label}</span>
                        <strong className={cn('text-sm', toneClass[metric.tone])}>{metric.value}</strong>
                      </div>
                    ))}
                    <p className="mt-4 rounded-[15px] border border-[#ecd9e4] bg-[#f5e7ef] px-3.5 py-3.5 text-sm leading-snug text-[#88758d]">
                      {card.callout}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {scene === 2 ? (
            <div className="proto-reveal flex min-h-[22rem] items-center justify-center text-center">
              <div className="max-w-[35rem]">
                <p className="mb-[18px] text-xs font-extrabold uppercase tracking-[0.18em] text-[#9b8295]">
                  The question
                </p>
                <p className="text-[2.125rem] font-semibold leading-[1.02] tracking-[-0.05em] text-navy sm:text-[3.25rem]">
                  What is working, what is not — and <span className="text-accent">where?</span>
                </p>
                <p className="mx-auto mt-[18px] max-w-[31.25rem] text-[1.0625rem] leading-[1.55] text-[#7d879d]">
                  Product performance and channel performance can move in different directions at the
                  same time.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-[#e6e2e8] pt-[18px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Problem scenes">
            {scenes.map((item, index) => (
              <button
                key={item.chapter}
                type="button"
                role="tab"
                aria-selected={scene === index}
                aria-label={item.chapter}
                onClick={() => {
                  setScene(index)
                  setHighlight(0)
                }}
                className={cn(
                  'h-2 rounded-full bg-[#ddd7e0] transition-all duration-300',
                  scene === index ? 'w-6 bg-accent' : 'w-2',
                )}
              />
            ))}
          </div>
          <p className="text-[0.8125rem] text-[#818a9f]">
            <strong className="font-semibold text-navy">Performance is never one story.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
