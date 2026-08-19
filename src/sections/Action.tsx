import { useEffect, useRef, useState } from 'react'
import { AlignJustify, ArrowUpRight, LayoutGrid } from 'lucide-react'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Section } from '../components/Section'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const cases = [
  {
    dest: 'feed',
    status: 'Feed action',
    title: 'Visibility Falling on Google Shopping',
    chip1: '93 products affected',
    chip2: '41 top sellers at risk',
    action:
      'Prioritise the affected products for feed optimisation, starting with the highest-value products losing the most visibility.',
  },
  {
    dest: 'commerce',
    status: 'Commerce action',
    title: 'High-Value Products Losing Commercial Return',
    chip1: '28 products affected',
    chip2: 'Revenue down 17%',
    action:
      'Review how the affected products are merchandised and promoted, prioritising the products with the sharpest decline in commercial return.',
  },
  {
    dest: 'channel',
    status: 'Channel action',
    title: 'Spend Rising While Revenue Declines',
    chip1: 'Spend up 19%',
    chip2: 'ROAS down 23%',
    action:
      'Review where the additional budget is being deployed and reduce exposure in the areas where spend has increased without a matching return.',
  },
] as const

const destinations = [
  {
    id: 'feed',
    title: 'Feed provider',
    copy: 'Titles, attributes, custom labels, feed quality and product eligibility.',
    tag: 'Feed action',
    icon: AlignJustify,
  },
  {
    id: 'commerce',
    title: 'Commerce platform',
    copy: 'Merchandising, catalogue, pricing, promotions and product availability.',
    tag: 'Commerce action',
    icon: LayoutGrid,
  },
  {
    id: 'channel',
    title: 'Channel platform',
    copy: 'Budget, bidding, campaign settings, targeting and channel-level optimisation.',
    tag: 'Channel action',
    icon: ArrowUpRight,
  },
] as const

const examples = [
  {
    title: 'Feed action',
    copy: 'Improve titles or attributes, restructure labels, review product eligibility.',
  },
  {
    title: 'Commerce action',
    copy: 'Review merchandising, availability, pricing or promotional treatment.',
  },
  {
    title: 'Channel action',
    copy: 'Reallocate budget, adjust bidding or change campaign settings.',
  },
] as const

export function Action() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(true)
  const [index, setIndex] = useState(0)
  const current = cases[index]

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
      setIndex((currentIndex) => (currentIndex + 1) % cases.length)
    }, 5400)
    return () => window.clearInterval(timer)
  }, [reduced, index])

  return (
    <Section className="relative overflow-hidden bg-soft pb-8 md:pb-10" aria-labelledby="action-heading">
      <DataField />
      <Container className="relative">
        <FadeIn>
          <p className="mb-[18px] text-[0.8125rem] font-extrabold uppercase tracking-[0.2em] text-[#7f89a0]">
            From Intelligence to Action
          </p>
          <h2
            id="action-heading"
            className="t-h1 max-w-[59.375rem] tracking-[-0.055em] text-navy"
          >
            The next move belongs <span className="text-accent">where the work happens.</span>
          </h2>
          <p className="body-copy mt-6 max-w-[51.875rem] text-[1.1875rem] leading-[1.62]">
            Statasphere recommends what should happen next and points the action back to the system
            best placed to carry it out — whether that is a{' '}
            <strong className="font-semibold text-navy">
              commerce platform, feed provider or channel platform.
            </strong>
          </p>
        </FadeIn>

        <div
          ref={ref}
          className="relative mt-9 overflow-hidden rounded-[28px] border border-[#e9e5eb] bg-white/[0.84] p-5 shadow-[0_28px_70px_rgba(47,49,95,0.10)] sm:p-7"
        >
          <div
            className="pointer-events-none absolute -right-[140px] -top-[160px] size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(207,143,180,0.16),rgba(207,143,180,0.04)_44%,transparent_72%)]"
            aria-hidden="true"
          />
          <div className="relative z-[2] mb-7 flex items-center justify-between gap-5">
            <p className="text-[0.6875rem] font-extrabold uppercase tracking-[0.18em] text-[#9a8193]">
              Recommended action → right destination
            </p>
            <p className="text-xs text-[#9da4b4]">{current.status}</p>
          </div>

          <div className="relative z-[2] grid items-center gap-6 lg:grid-cols-[0.9fr_0.48fr_1.22fr] lg:gap-[26px]">
            <div className="relative min-h-[18.75rem] overflow-hidden rounded-[22px] bg-navy p-6 text-white shadow-[0_22px_48px_rgba(47,49,95,0.18)]">
              <div className="pointer-events-none absolute inset-0 grid-field-dark opacity-40" aria-hidden="true" />
              <div className="relative z-[2]">
                <p className="mb-3.5 text-[0.625rem] font-extrabold uppercase tracking-[0.17em] text-[#d6aec5]">
                  Signal Brief — Recommended Action
                </p>
                <p className="mb-[18px] text-[1.5625rem] font-semibold leading-[1.08] tracking-[-0.035em]">
                  {current.title}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/12 bg-white/9 px-2.5 py-2 text-[0.6875rem] text-[#d9ddec]">
                    {current.chip1}
                  </span>
                  <span className="rounded-full border border-white/12 bg-white/9 px-2.5 py-2 text-[0.6875rem] text-[#d9ddec]">
                    {current.chip2}
                  </span>
                </div>
                <p className="mb-2.5 text-[0.625rem] font-extrabold uppercase tracking-[0.16em] text-[#b9bfd1]">
                  What to do next
                </p>
                <p className="text-[1.0625rem] font-semibold leading-[1.48]">{current.action}</p>
              </div>
            </div>

            <div className="relative flex h-[100px] items-center justify-center lg:h-[240px]">
              <div className="relative h-0.5 w-20 rotate-90 rounded-full bg-[linear-gradient(90deg,#e3dfe6,#dcaeca,#e3dfe6)] lg:w-full lg:rotate-0">
                {reduced ? null : (
                  <span className="proto-travel absolute top-1/2 left-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_7px_rgba(207,143,180,0.11)]" />
                )}
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 rounded-full border border-[#e6e2e9] bg-white px-3 py-2.5 text-[0.6875rem] font-extrabold whitespace-nowrap text-[#8a7790] shadow-[0_8px_18px_rgba(47,49,95,0.05)]">
                ACTION HANDOFF
              </span>
            </div>

            <div className="grid gap-3">
              {destinations.map((destination, destIndex) => {
                const Icon = destination.icon
                const active = destination.id === current.dest
                return (
                  <button
                    key={destination.id}
                    type="button"
                    onClick={() => setIndex(destIndex)}
                    className={cn(
                      'grid items-center gap-3.5 rounded-[18px] border bg-white px-[18px] py-[17px] text-left transition duration-500 min-[640px]:grid-cols-[48px_1fr_auto]',
                      active
                        ? 'translate-x-1.5 scale-100 border-[#dfbfd1] bg-[#fffafb] opacity-100 shadow-[0_16px_34px_rgba(207,143,180,0.14)]'
                        : 'scale-[0.985] border-[#e7e3e9] opacity-[0.58]',
                    )}
                  >
                    <span className="grid size-[46px] place-items-center rounded-[14px] border border-[#ebe5eb] bg-[#f5f1f5] text-navy">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="mb-1 block text-[1.0625rem] font-bold text-navy">{destination.title}</span>
                      <span className="block text-[0.8125rem] leading-[1.45] text-[#858da2]">{destination.copy}</span>
                    </span>
                    <span
                      className={cn(
                        'justify-self-start rounded-full px-2.5 py-2 text-[0.6875rem] font-extrabold whitespace-nowrap min-[640px]:justify-self-end',
                        active ? 'bg-[#f6e9f0] text-[#9a6886]' : 'bg-[#f4f1f4] text-[#7c8397]',
                      )}
                    >
                      {destination.tag}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative z-[2] mt-6 grid gap-3 sm:grid-cols-3">
            {examples.map((example) => (
              <div key={example.title} className="rounded-2xl border border-[#e8e4ea] bg-white px-[15px] py-3.5">
                <strong className="mb-1.5 block text-[0.8125rem] text-navy">{example.title}</strong>
                <span className="text-xs leading-[1.45] text-[#8b93a7]">{example.copy}</span>
              </div>
            ))}
          </div>

          <div className="relative z-[2] mt-[17px] h-[3px] overflow-hidden rounded-full bg-[#eee9ee]">
            <span
              key={index}
              className={cn('block h-full rounded-full bg-accent', reduced ? 'w-full' : 'proto-progress')}
              style={reduced ? undefined : { animationDuration: '5.4s' }}
            />
          </div>
        </div>

        <p className="mt-[34px] max-w-[61.25rem] text-[1.5rem] font-medium leading-[1.12] tracking-[-0.03em] text-navy sm:text-[1.75rem]">
          Statasphere makes the next move clear. <span className="text-accent">The action stays where it belongs.</span>
        </p>
      </Container>
    </Section>
  )
}
