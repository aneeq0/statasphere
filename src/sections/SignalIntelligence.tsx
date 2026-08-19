import { useEffect, useRef, useState } from 'react'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Section } from '../components/Section'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const briefs = {
  product: {
    eyeline: 'Example Product Signal Brief',
    title: 'Visibility Falling on Google Shopping',
    meta: 'Detected 2 hours ago · Last 7 days vs previous 7 days',
    severity: 'Critical',
    icon: '▤',
    number: '-38%',
    cards: [
      {
        label: 'What changed',
        title: 'Product visibility fell sharply.',
        copy: 'Impressions declined across the affected products over the last 7 days.',
      },
      {
        label: 'Why it matters',
        title: 'High-value products are being affected.',
        copy: '93 products are impacted, including 41 top sellers. Reduced exposure is creating a meaningful commercial risk.',
      },
      {
        label: "What's driving it",
        title: 'The decline is concentrated, not random.',
        copy: 'The largest losses are clustered across high-value products that remain eligible but are receiving materially less exposure.',
      },
      {
        label: 'What to do next',
        title: 'Prioritise the affected products.',
        copy: 'Review feed quality and product segmentation, starting with the highest-value products losing the most visibility.',
      },
    ],
    spark: (
      <path
        d="M2 8 L15 10 L28 12 L40 11 L54 18 L68 21 L82 25 L96 30 L118 35"
        stroke="#cf8fb4"
        strokeWidth="3"
        strokeLinecap="round"
      />
    ),
    trend: { title: 'Visibility trend', copy: '7-day decline across affected products' },
    stats: [
      { value: '93', label: 'Affected products' },
      { value: '41', label: 'Top sellers impacted' },
      { value: '-21%', label: 'Revenue movement' },
    ],
    summary:
      'Visibility has fallen materially across a concentrated group of high-value products, increasing the risk of further revenue decline if the pattern continues.',
    chip: 'Product intelligence',
  },
  channel: {
    eyeline: 'Example Channel Signal Brief',
    title: 'Meta Spend Rising While Revenue Declines',
    meta: 'Detected 1 hour ago · Last 7 days vs previous 7 days',
    severity: 'High',
    icon: '▥',
    number: '+19%',
    cards: [
      {
        label: 'What changed',
        title: 'Spend increased while revenue fell.',
        copy: 'Meta investment rose over the last 7 days, but the additional spend did not translate into higher commercial return.',
      },
      {
        label: 'Why it matters',
        title: 'More budget is producing less return.',
        copy: 'Revenue declined 8% and ROAS weakened 23%, creating a clear efficiency issue at channel level.',
      },
      {
        label: "What's driving it",
        title: 'The decline is concentrated in recent spend growth.',
        copy: 'The weakest performance is concentrated in the areas where spend expanded fastest, rather than across the entire channel.',
      },
      {
        label: 'What to do next',
        title: 'Review where the extra spend is going.',
        copy: 'Prioritise the areas where spend has increased fastest without a matching improvement in commercial return.',
      },
    ],
    spark: (
      <>
        <path
          d="M2 30 L16 27 L30 24 L44 20 L58 17 L72 15 L88 12 L103 9 L118 7"
          stroke="#cf8fb4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M2 14 L16 15 L30 16 L44 19 L58 21 L72 23 L88 27 L103 29 L118 32"
          stroke="#2f315f"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".65"
        />
      </>
    ),
    trend: { title: 'Spend vs revenue', copy: 'Spend rising as revenue moves down' },
    stats: [
      { value: '+19%', label: 'Spend' },
      { value: '-8%', label: 'Revenue' },
      { value: '-23%', label: 'ROAS' },
    ],
    summary:
      'Meta is absorbing more budget while commercial return is weakening, with the deterioration concentrated in the areas of fastest spend growth.',
    chip: 'Channel intelligence',
  },
} as const

type BriefType = keyof typeof briefs

export function SignalIntelligence() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(true)
  const [type, setType] = useState<BriefType>('product')
  const [playId, setPlayId] = useState(0)
  const brief = briefs[type]

  const show = (next: BriefType) => {
    setType(next)
    setPlayId((value) => value + 1)
  }

  useEffect(() => {
    if (reduced) return
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
      },
      { threshold: 0.18 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [reduced])

  useEffect(() => {
    if (reduced) return
    const timer = window.setInterval(() => {
      if (!visibleRef.current) return
      show(type === 'product' ? 'channel' : 'product')
    }, 6800)
    return () => window.clearInterval(timer)
  }, [reduced, type])

  return (
    <Section id="intelligence" className="relative overflow-hidden bg-soft" aria-labelledby="signal-heading">
      <DataField />
      <Container className="relative">
        <FadeIn>
          <p className="mb-[18px] text-[0.8125rem] font-extrabold uppercase tracking-[0.2em] text-[#7f89a0]">
            The Signal Brief
          </p>
          <h2
            id="signal-heading"
            className="t-h1 max-w-[50rem] tracking-[-0.055em] text-navy"
          >
            The story <span className="text-accent">behind the signal.</span>
          </h2>
          <p className="body-copy mt-6 max-w-[48.75rem] text-[1.1875rem] leading-[1.6]">
            Statasphere brings together{' '}
            <strong className="font-semibold text-navy">
              what changed, why it matters, what is driving it and what to do next.
            </strong>
          </p>
        </FadeIn>

        <div ref={ref} className="mx-auto mt-8 max-w-[84rem]">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-[#e5e0e7] bg-white/80 p-1 shadow-[0_8px_22px_rgba(47,49,95,0.05)]">
              {(['product', 'channel'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => show(item)}
                  className={cn(
                    'rounded-full px-[15px] py-2.5 text-[0.8125rem] font-bold transition duration-300',
                    type === item ? 'bg-navy text-white shadow-[0_7px_18px_rgba(47,49,95,0.17)]' : 'text-[#7f879d]',
                  )}
                >
                  {item === 'product' ? 'Product Signal' : 'Channel Signal'}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#9aa1b1]">Examples rotate automatically</p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#e9e5eb] bg-white/[0.86] p-5 shadow-[0_28px_70px_rgba(47,49,95,0.10)] sm:p-[26px]">
            <div
              className="pointer-events-none absolute -right-[150px] -top-[180px] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(207,143,180,0.15),rgba(207,143,180,0.04)_45%,transparent_72%)]"
              aria-hidden="true"
            />
            <article key={`${type}-${playId}`} className="relative z-[2]">
              <div className="flex flex-col gap-5 border-b border-[#e8e4ea] pb-[22px] sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3.5">
                  <div
                    className="grid size-[46px] shrink-0 place-items-center rounded-[14px] bg-[linear-gradient(145deg,#dcaeca,#b96595)] text-[1.3125rem] text-white shadow-[0_12px_24px_rgba(207,143,180,0.2)]"
                    aria-hidden="true"
                  >
                    {brief.icon}
                  </div>
                  <div>
                    <p className="mb-1.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.16em] text-[#9a7e90]">
                      {brief.eyeline}
                    </p>
                    <h3 className="m-0 text-[1.5rem] font-semibold leading-[1.08] tracking-[-0.035em] text-navy sm:text-[1.875rem]">
                      {brief.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#949cad]">{brief.meta}</p>
                  </div>
                </div>
                <span className="self-start rounded-full bg-[#f5e6ee] px-3 py-2 text-[0.6875rem] font-extrabold tracking-[0.08em] text-[#a05d81] uppercase">
                  {brief.severity}
                </span>
              </div>

              <div className="mt-[18px] grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
                {brief.cards.map((card, index) => (
                  <div
                    key={card.label}
                    className={cn(
                      'min-h-[12.8125rem] rounded-[18px] border border-[#ebe7ed] bg-white px-[19px] py-5 shadow-[0_10px_25px_rgba(47,49,95,0.04)]',
                      reduced ? 'opacity-100' : 'proto-reveal',
                    )}
                    style={reduced ? undefined : { animationDelay: `${0.2 + index * 0.45}s` }}
                  >
                    <p className="mb-3.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.16em] text-[#9a8292]">
                      {card.label}
                    </p>
                    {index === 0 ? (
                      <p className="mb-2 text-5xl font-semibold tracking-[-0.05em] text-[#a36f89]">
                        {brief.number}
                      </p>
                    ) : null}
                    <p className="mb-2.5 text-xl font-bold leading-[1.2] text-navy">{card.title}</p>
                    <p className="text-sm leading-[1.55] text-[#727c95]">{card.copy}</p>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  'mt-3.5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-[1.1fr_repeat(3,0.7fr)]',
                  reduced ? 'opacity-100' : 'proto-reveal',
                )}
                style={reduced ? undefined : { animationDelay: '2.45s' }}
              >
                <div className="flex items-center gap-3 rounded-[15px] border border-[#ebe7ed] bg-[#f9f7f9] px-[15px] py-3.5 sm:col-span-2 xl:col-span-1">
                  <svg className="h-[42px] w-[115px] shrink-0" viewBox="0 0 120 42" fill="none" aria-hidden="true">
                    {brief.spark}
                  </svg>
                  <div>
                    <strong className="mb-0.5 block text-sm text-navy">{brief.trend.title}</strong>
                    <span className="text-[0.6875rem] text-[#969dac]">{brief.trend.copy}</span>
                  </div>
                </div>
                {brief.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center rounded-[15px] border border-[#ebe7ed] bg-[#f9f7f9] px-[15px] py-3.5"
                  >
                    <strong className="mb-0.5 text-xl text-navy">{stat.value}</strong>
                    <span className="text-[0.6875rem] text-[#969dac]">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  'mt-3.5 flex flex-col items-start justify-between gap-[18px] rounded-2xl bg-navy px-[18px] py-4 text-white sm:flex-row sm:items-center',
                  reduced ? 'opacity-100' : 'proto-reveal',
                )}
                style={reduced ? undefined : { animationDelay: '2s' }}
              >
                <div>
                  <p className="mb-1.5 text-[0.625rem] font-extrabold tracking-[0.17em] text-[#d5b3c6] uppercase">
                    Brief summary
                  </p>
                  <p className="max-w-[56.25rem] text-base leading-[1.45]">{brief.summary}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/13 bg-white/10 px-3 py-2 text-xs text-[#d9ddeb]">
                  {brief.chip}
                </span>
              </div>
            </article>

            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-[#eee9ee]">
              <span
                key={`bar-${type}-${playId}`}
                className={cn('block h-full rounded-full bg-accent', reduced ? 'w-full' : 'proto-progress')}
                style={reduced ? undefined : { animationDuration: '6.8s' }}
              />
            </div>
          </div>
        </div>

        <p className="mt-[34px] max-w-[61.25rem] text-[1.375rem] font-medium leading-[1.12] tracking-[-0.03em] text-navy sm:text-[1.625rem]">
          The Brief points to the action. <span className="text-accent">Next, take it where the work happens.</span>
        </p>
      </Container>
    </Section>
  )
}
