import { useEffect, useRef, useState } from 'react'
import signalBrief from '../assets/signal-brief.jpg'
import signalsSurface from '../assets/signals-surface.jpg'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { ProductScreenshot } from '../components/ProductScreenshot'
import { ProductStill } from '../components/ProductStill'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const sequence = [
  {
    kicker: 'Signal detected',
    title: 'Visibility Falling',
  },
  {
    kicker: "What's changed",
    title: 'Where the movement is happening',
  },
  {
    kicker: "What's driving it",
    title: 'The channels, products and metrics',
  },
  {
    kicker: 'Why it matters',
    title: 'The commercial impact',
  },
  {
    kicker: 'What to do next',
    title: 'The next action',
  },
] as const

export function SignalIntelligence() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(reduced ? sequence.length - 1 : 0)

  useEffect(() => {
    if (reduced) return
    const element = ref.current
    if (!element) return

    let interval = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        interval = window.setInterval(() => {
          setStep((current) => {
            if (current >= sequence.length - 1) {
              window.clearInterval(interval)
              return current
            }
            return current + 1
          })
        }, 700)
        observer.disconnect()
      },
      { threshold: 0.28 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.clearInterval(interval)
    }
  }, [reduced])

  return (
    <Section id="intelligence" className="bg-off" aria-labelledby="signal-heading">
      <Container>
        <Grid alignLg="end">
          <GridItem lg={7}>
            <FadeIn>
              <SectionHeading
                id="signal-heading"
                size="lg"
                eyebrow="Signal intelligence"
                title={
                  <>
                    The important changes
                    <span className="block">rise to the surface.</span>
                  </>
                }
              />
            </FadeIn>
          </GridItem>
          <GridItem lg={5}>
            <FadeIn>
              <p className="body-copy">
                Teams shouldn't have to search dashboards hoping to notice something unusual.
                Statasphere surfaces the movements that deserve attention.
              </p>
            </FadeIn>
          </GridItem>
        </Grid>

        <FadeIn className="mt-12">
          <ProductScreenshot>
            <ProductStill
              src={signalBrief}
              alt="Statasphere Signal Brief for Visibility Falling on Google Shopping, showing what changed, why it matters, the likely cause and what to do next."
            />
          </ProductScreenshot>
        </FadeIn>

        <div ref={ref} className="mt-12">
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {sequence.map((item, index) => {
              const visible = index <= step
              const active = index === step
              return (
                <li
                  key={item.kicker}
                  className={cn(
                    'min-w-0 border-t border-navy/15 pt-6 transition-opacity duration-500',
                    visible ? 'opacity-100' : 'opacity-40',
                  )}
                >
                  <p className="eyebrow text-accent-dark">0{index + 1}</p>
                  <p className="mt-4 text-[1.125rem] font-medium tracking-[-0.03em] text-navy">
                    {item.kicker}
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-snug text-muted">{item.title}</p>
                  <span
                    className={cn(
                      'mt-4 block h-px w-8',
                      active ? 'bg-accent-dark' : 'bg-navy/15',
                    )}
                    aria-hidden="true"
                  />
                </li>
              )
            })}
          </ol>
        </div>

        <FadeIn className="mt-16">
          <p className="eyebrow mb-6 text-muted">Signals rise around the product</p>
          <ProductScreenshot>
            <ProductStill
              src={signalsSurface}
              alt="Signals rising around a product, including Visibility Falling, Revenue Declining, Spend Rising and Returns Rising."
            />
          </ProductScreenshot>
        </FadeIn>
      </Container>
    </Section>
  )
}
