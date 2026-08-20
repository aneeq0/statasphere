import logoSrc from '../assets/logo-icon.png'
import { MAILTO } from '../config'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Section } from '../components/Section'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const atmosphereLeft = [
  { label: 'Spend', className: 'left-[8%] top-[9%]', delay: '0s' },
  { label: 'Products', className: 'left-[46%] top-[36%]', delay: '1.4s' },
  { label: 'Revenue', className: 'left-[14%] bottom-[11%]', delay: '2.6s' },
] as const

const atmosphereRight = [
  { label: 'Visibility', className: 'right-[22%] top-[7%] text-accent/45', delay: '0.7s' },
  { label: 'Channels', className: 'right-[8%] top-[44%] text-accent/45', delay: '1.9s' },
  { label: 'Orders', className: 'right-[40%] bottom-[16%] text-accent/45', delay: '3.2s' },
] as const

export function FinalCTA() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-soft pt-8 md:pt-10"
      size="lg"
      aria-labelledby="cta-heading"
    >
      <DataField />

      {!reduced ? (
        <div
          className="pointer-events-none absolute inset-0 hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,46rem)_minmax(0,1fr)]"
          aria-hidden="true"
        >
          <div className="relative">
            {atmosphereLeft.map((word) => (
              <span
                key={word.label}
                className={cn(
                  'conclusion-drift absolute text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-navy/20',
                  word.className,
                )}
                style={{ animationDelay: word.delay }}
              >
                {word.label}
              </span>
            ))}
          </div>
          <div />
          <div className="relative">
            {atmosphereRight.map((word) => (
              <span
                key={word.label}
                className={cn(
                  'conclusion-drift absolute text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-navy/20',
                  word.className,
                )}
                style={{ animationDelay: word.delay }}
              >
                {word.label}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <Container className="relative">
        <div className="mx-auto max-w-[46rem] text-center">
          <FadeIn>
            <div className="relative mx-auto mb-8 flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Statasphere"
                width={271}
                height={276}
                className={cn('h-[4.75rem] w-auto sm:h-[5.5rem]', !reduced && 'proto-logo-spin')}
              />
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <p className="eyebrow text-muted">The Conclusion</p>
          </FadeIn>

          <FadeIn delayMs={140}>
            <h2 id="cta-heading" className="t-h1 mt-5 tracking-[-0.055em] text-navy">
              Built for the way
              <span className="mt-1 block text-accent">commerce actually works.</span>
            </h2>
          </FadeIn>

          <FadeIn delayMs={200}>
            <p className="body-copy mx-auto mt-7 max-w-[38rem] text-[1.0625rem] leading-[1.65] md:text-[1.125rem]">
              Products move differently. Channels move differently. Decisions happen across different
              systems. Statasphere brings the intelligence together so teams can see what matters and
              know where to move next.
            </p>
          </FadeIn>

          <FadeIn delayMs={260}>
            <div className="mx-auto mt-10 w-fit max-w-full px-2">
              <span className="block h-px bg-navy/10" />
              <p className="mt-6 whitespace-nowrap text-center text-[clamp(0.55rem,2.5vw,0.6875rem)] font-semibold uppercase tracking-[0.12em] text-muted sm:tracking-[0.18em]">
                Statasphere
                <span className="mx-1.5 text-accent/70" aria-hidden="true">
                  ·
                </span>
                <span className="text-accent">Beyond Channel Intelligence</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={320}>
            <div className="mt-10 flex justify-center">
              <Button href={MAILTO} className="min-w-[10.5rem]" arrow>
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
