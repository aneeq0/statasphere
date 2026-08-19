import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { ProblemVisual } from '../components/ProblemVisual'
import { Section } from '../components/Section'

export function Problem() {
  return (
    <Section id="problem" className="relative overflow-hidden bg-soft" aria-labelledby="problem-heading">
      <DataField />
      <Container className="relative">
        <Grid stretch alignLg="center">
          <GridItem lg={5}>
            <FadeIn>
              <p className="mb-6 text-[0.8125rem] font-extrabold uppercase tracking-[0.2em] text-[#7f89a0]">
                The Problem
              </p>
              <h2
                id="problem-heading"
                className="t-h1 max-w-[24rem] tracking-[-0.055em] text-navy lg:max-w-none"
              >
                Performance is never <span className="text-accent">one story.</span>
              </h2>
              <p className="mt-7 max-w-[36.875rem] text-[1.25rem] font-semibold leading-[1.5] text-navy sm:text-[1.375rem]">
                What is working in one place may be doing something very different somewhere else.
              </p>
              <p className="body-copy mt-5 max-w-[36.875rem]">
                A product can be performing strongly on one channel and underperforming on another.
                At the same time, one channel can be gaining efficiency while another is spending more
                and returning less. Performance moves differently across both products and channels.
              </p>
              <p className="mt-[30px] max-w-[36.875rem] border-t border-[#ddd9e2] pt-6 text-[1.1875rem] font-bold leading-[1.5] text-navy">
                The challenge is knowing what is working, what is not — and where attention should go
                next.
              </p>
            </FadeIn>
          </GridItem>
          <GridItem lg={7}>
            <FadeIn delayMs={120}>
              <ProblemVisual />
            </FadeIn>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
