import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const steps = [
  {
    number: '01',
    label: 'See',
    title: 'One view of the business',
    copy: 'Start with the commercial picture across channels instead of opening multiple platforms and trying to reconcile the story manually.',
  },
  {
    number: '02',
    label: 'Detect',
    title: "Know what's changing",
    copy: 'Statasphere identifies important movement, emerging risks and product-level opportunities.',
  },
  {
    number: '03',
    label: 'Understand',
    title: 'Know why it matters',
    copy: 'The Analyst Agent investigates the data behind each signal and turns it into a clear commercial explanation.',
  },
  {
    number: '04',
    label: 'Act',
    title: 'Know what to do next',
    copy: 'Statasphere recommends the next action and identifies the platform best placed to execute it.',
  },
] as const

function SeePanel() {
  const layers = [
    { label: 'Channels', detail: 'Advertising and marketplace activity' },
    { label: 'Products', detail: 'Catalogue exposure and performance' },
    { label: 'Commerce', detail: 'Orders, returns and commercial outcome' },
  ] as const

  return (
    <div>
      <p className="eyebrow text-white/45">Commercial view</p>
      <ul className="mt-6 space-y-2.5">
        {layers.map((layer, index) => (
          <li
            key={layer.label}
            className={cn(
              'stage-item rounded-xl px-5 py-4',
              index === layers.length - 1
                ? 'bg-white shadow-[0_20px_40px_-24px_rgba(5,7,23,0.55)]'
                : 'border border-white/10 bg-white/[0.07]',
            )}
          >
            <p
              className={cn(
                'text-[1.0625rem] font-medium tracking-[-0.03em]',
                index === layers.length - 1 ? 'text-navy' : 'text-soft',
              )}
            >
              {layer.label}
            </p>
            <p
              className={cn(
                'mt-1 text-[0.8125rem] leading-snug',
                index === layers.length - 1 ? 'text-muted' : 'text-white/55',
              )}
            >
              {layer.detail}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[0.875rem] font-medium tracking-[-0.02em] text-white/75">
        One view of the business before the channel.
      </p>
    </div>
  )
}

function DetectPanel() {
  const signals = ['Visibility Falling', 'Revenue Declining', 'Spend Rising'] as const

  return (
    <div>
      <p className="eyebrow text-white/45">Surface</p>
      <ul className="mt-6 space-y-2.5">
        {signals.map((signal, index) => {
          const featured = index === 0
          return (
            <li
              key={signal}
              className={cn(
                'stage-item flex items-center gap-4 rounded-xl px-5 py-4',
                featured
                  ? 'bg-white shadow-[0_20px_40px_-24px_rgba(5,7,23,0.55)]'
                  : 'border border-white/10 bg-white/[0.07]',
              )}
            >
              <span
                className={cn('size-2 shrink-0 rounded-full', featured ? 'bg-accent-dark' : 'bg-white/30')}
                aria-hidden="true"
              />
              <p
                className={cn(
                  'text-[0.9375rem] font-medium tracking-[-0.02em]',
                  featured ? 'text-navy' : 'text-white/70',
                )}
              >
                {signal}
              </p>
            </li>
          )
        })}
      </ul>
      <p className="mt-6 text-[0.875rem] leading-snug text-white/55">
        Important movement rises before teams have to search for it.
      </p>
    </div>
  )
}

function UnderstandPanel() {
  const fields = [
    { label: 'Products', detail: 'Which products caused it' },
    { label: 'Channels', detail: 'Which channels changed' },
    { label: 'Cause', detail: 'Isolated or a wider pattern' },
    { label: 'Impact', detail: 'Why it matters commercially' },
  ] as const

  return (
    <div>
      <p className="eyebrow text-white/45">Investigation</p>
      <div className="mt-6 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.label}
            className="stage-item rounded-xl border border-white/10 bg-white/[0.07] px-4 py-4 sm:px-5 sm:py-5"
          >
            <p className="text-[0.6875rem] uppercase tracking-[0.14em] text-accent">{field.label}</p>
            <p className="mt-2.5 text-[0.9375rem] font-medium leading-snug tracking-[-0.02em] text-soft">
              {field.detail}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 flex items-center gap-3 text-[0.8125rem] font-medium tracking-[-0.02em] text-white/75">
        Analyst Agent
        <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
        Signal Brief
      </p>
    </div>
  )
}

function ActPanel() {
  const destinations = [
    { label: 'Feed', detail: 'Catalogue and enrichment' },
    { label: 'Commerce', detail: 'Merchandising and inventory' },
    { label: 'Media', detail: 'Budget and channel decisions' },
  ] as const

  return (
    <div>
      <p className="eyebrow text-white/45">Next action</p>
      <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {destinations.map((destination) => (
          <div
            key={destination.label}
            className="stage-item rounded-xl border border-white/10 bg-white/[0.07] px-4 py-4 sm:min-h-[9.5rem]"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[0.9375rem] font-medium tracking-[-0.02em] text-soft">
                {destination.label}
              </p>
              <ArrowUpRight className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
            </div>
            <p className="mt-3 text-[0.75rem] leading-snug text-white/55">{destination.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[0.875rem] leading-snug text-white/55">
        Intelligence in Statasphere. Action where the work already happens.
      </p>
    </div>
  )
}

const stagePanels = [SeePanel, DetectPanel, UnderstandPanel, ActPanel] as const

function StageVisual({ index, reduced }: { index: number; reduced: boolean }) {
  const [shown, setShown] = useState(index)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const shownRef = useRef(index)

  useEffect(() => {
    if (index === shownRef.current) return

    if (reduced) {
      shownRef.current = index
      setShown(index)
      setPhase('in')
      return
    }

    setPhase('out')
    let frame1 = 0
    let frame2 = 0
    const hide = window.setTimeout(() => {
      shownRef.current = index
      setShown(index)
      frame1 = window.requestAnimationFrame(() => {
        frame2 = window.requestAnimationFrame(() => setPhase('in'))
      })
    }, 240)

    return () => {
      window.clearTimeout(hide)
      window.cancelAnimationFrame(frame1)
      window.cancelAnimationFrame(frame2)
    }
  }, [index, reduced])

  const step = steps[shown] ?? steps[0]
  const Panel = stagePanels[shown] ?? stagePanels[0]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy text-soft shadow-[0_28px_64px_-28px_rgba(5,7,23,0.55)] ring-1 ring-accent/20">
      <div className="pointer-events-none absolute inset-0 grid-field-dark opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className={cn('relative flex min-h-[22rem] flex-col p-5 sm:min-h-[28rem] sm:p-7 lg:min-h-[32rem]', reduced ? '' : `stage-fade is-${phase}`)}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-accent">
              {step.number} — {step.label}
            </p>
            <p className="mt-2 text-[1.25rem] font-medium tracking-[-0.03em] text-soft sm:text-[1.375rem]">
              {step.title}
            </p>
          </div>
          <span
            className="select-none text-[3rem] font-medium leading-none tracking-[-0.06em] text-white/10 sm:text-[3.5rem]"
            aria-hidden="true"
          >
            {step.number}
          </span>
        </div>
        <div className="mt-8 flex-1">
          <Panel />
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const reduced = usePrefersReducedMotion()
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])
  const activeRef = useRef(0)
  const lockedRef = useRef(false)
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    if (index === activeRef.current) return
    lockedRef.current = true
    activeRef.current = index
    setActive(index)
    itemRefs.current[index]?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'center',
    })
    window.setTimeout(() => {
      lockedRef.current = false
    }, 700)
  }

  useEffect(() => {
    if (reduced) {
      setActive(steps.length - 1)
      activeRef.current = steps.length - 1
      return
    }

    const nodes = itemRefs.current.filter((node): node is HTMLLIElement => node != null)
    if (nodes.length === 0) return

    let timer = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = Number(visible.target.getAttribute('data-index'))
        if (Number.isNaN(index)) return
        window.clearTimeout(timer)
        timer = window.setTimeout(() => {
          if (lockedRef.current || index === activeRef.current) return
          activeRef.current = index
          setActive(index)
        }, 120)
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [reduced])

  const lineProgress = steps.length > 1 ? active / (steps.length - 1) : 1

  return (
    <Section id="how-it-works" className="bg-off" aria-labelledby="how-heading">
      <Container>
        <FadeIn>
          <Grid>
            <GridItem lg={8}>
              <SectionHeading
                id="how-heading"
                size="lg"
                eyebrow="How Statasphere works"
                title="From thousands of signals to the ones that matter."
              />
            </GridItem>
          </Grid>
        </FadeIn>

        <nav className="mt-12 hidden lg:block" aria-label="How Statasphere works">
          <ol className="flex items-center gap-3">
            {steps.map((step, index) => (
              <li key={step.number} className="flex flex-1 items-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    'text-[0.75rem] uppercase tracking-[0.14em] transition-colors duration-500',
                    index <= active ? 'text-navy' : 'text-muted hover:text-navy',
                  )}
                >
                  {step.label}
                </button>
                {index < steps.length - 1 ? (
                  <span className="h-px flex-1 bg-navy/10" aria-hidden="true">
                    <span
                      className="block h-px bg-accent-dark transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ width: index < active ? '100%' : index === active ? '50%' : '0%' }}
                    />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <Grid className="mt-12" stretch>
          <GridItem lg={5}>
            <ol className="relative">
              <div className="absolute bottom-4 left-3 top-4 w-px bg-navy/10" aria-hidden="true">
                <span
                  className="block w-px bg-accent-dark transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ height: `${lineProgress * 100}%` }}
                />
              </div>
              {steps.map((step, index) => {
                const isActive = index === active
                return (
                  <li
                    key={step.number}
                    ref={(node) => {
                      itemRefs.current[index] = node
                    }}
                    data-index={index}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className={cn(
                        'w-full py-8 pl-10 text-left transition-[opacity,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        index === 0 && 'pt-0',
                        isActive ? 'opacity-100' : 'opacity-45 hover:opacity-80',
                      )}
                    >
                      <span
                        className={cn(
                          'absolute left-0 flex size-6 items-center justify-center rounded-full border text-[0.625rem] font-semibold transition-colors duration-500',
                          index === 0 ? 'top-0' : 'top-8',
                          isActive ? 'border-accent bg-accent text-navy' : 'border-navy/20 bg-off text-navy',
                        )}
                      >
                        {step.number.slice(1)}
                      </span>
                      <p className="eyebrow text-accent-dark">
                        {step.number} — {step.label}
                      </p>
                      <h3 className="t-h3 mt-3 text-navy">{step.title}</h3>
                      <p className="body-copy mt-3">{step.copy}</p>
                    </button>
                  </li>
                )
              })}
            </ol>
          </GridItem>

          <GridItem lg={7}>
            <div className="lg:sticky lg:top-28">
              <StageVisual index={active} reduced={reduced} />
            </div>
          </GridItem>
        </Grid>

        <Grid className="mt-16">
          <GridItem lg={8}>
            <p className="t-lead text-navy">
              Intelligence in Statasphere. Action where the work already happens.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
