import { MAILTO } from '../config'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Section } from '../components/Section'
import { SphereMark } from '../components/SphereMark'
import { cn } from '../lib/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const atmosphere = [
  { label: 'Spend', className: 'left-[2%] top-[42%]' },
  { label: 'Visibility', className: 'right-[2%] top-[44%] text-accent/45' },
  { label: 'Revenue', className: 'left-[10%] bottom-[22%]' },
  { label: 'Orders', className: 'right-[10%] bottom-[18%] text-accent/45' },
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
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="relative mx-auto h-full w-full max-w-[38rem]">
            {atmosphere.map((word, index) => (
              <span
                key={word.label}
                className={cn(
                  'conclusion-drift absolute text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-navy/20',
                  word.className,
                )}
                style={{ animationDelay: `${index * 0.55}s` }}
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
              <span className="relative z-[2] -mr-8 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy/25 sm:-mr-10 sm:text-[0.8125rem]">
                Products
              </span>
              <div
                className={cn(
                  'relative flex size-[10.25rem] shrink-0 items-center justify-center sm:size-[11.5rem]',
                  !reduced && 'conclusion-stamp',
                )}
              >
              <span className="pointer-events-none absolute inset-[12%] rounded-full bg-accent/15 blur-2xl" />
              <svg
                className={cn('absolute inset-0 h-full w-full', !reduced && 'conclusion-ring')}
                viewBox="0 0 168 168"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="84" cy="84" r="81" stroke="#292b59" strokeOpacity="0.08" strokeWidth="0.8" />
                <circle
                  cx="84"
                  cy="84"
                  r="72"
                  stroke="#dcaeca"
                  strokeOpacity="0.45"
                  strokeWidth="0.9"
                  strokeDasharray="3 4.5"
                />
                <defs>
                  <path
                    id="commerce-ring"
                    d="M84 84 m -62 0 a 62 62 0 1 1 124 0 a 62 62 0 1 1 -124 0"
                  />
                </defs>
                <text
                  fill="#717c91"
                  fontSize="10.5"
                  fontWeight="700"
                  letterSpacing="5.2"
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                >
                  <textPath href="#commerce-ring" startOffset="21%">
                    COMMERCE
                  </textPath>
                </text>
              </svg>
              <SphereMark
                size={86}
                className={cn(
                  'relative z-[1] h-[4.75rem] w-[4.75rem] sm:h-[5.5rem] sm:w-[5.5rem]',
                  !reduced && 'conclusion-mark',
                )}
              />
              </div>
              <span className="relative z-[2] -ml-8 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-accent/45 sm:-ml-10 sm:text-[0.8125rem]">
                Channels
              </span>
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
            <div className="mx-auto mt-10 max-w-[22rem]">
              <span className="block h-px bg-navy/10" />
              <p className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">
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
