import { Button } from '../components/Button'
import { ConnectorNetwork } from '../components/ConnectorNetwork'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { AnimatedLines } from '../components/AnimatedText'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft" aria-labelledby="hero-heading">
      <DataField />
      <Container className="relative pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
        <Grid stretch alignLg="center">
          <GridItem lg={5}>
            <AnimatedLines
              id="hero-heading"
              lines={[
                'Beyond',
                <span key="accent" className="text-accent">
                  Channel Intelligence.
                </span>,
              ]}
              className="font-medium leading-[0.96] tracking-[-0.05em] text-[clamp(2.875rem,1.5rem+5.2vw,5.75rem)] text-navy"
            />
            <p className="mt-8 max-w-[40rem] text-[1.1875rem] leading-[1.6] text-muted md:text-[1.3125rem] md:leading-[1.62]">
              Every platform sees a different part of performance. Statasphere connects
              channel, product and commerce data to show what is changing, why it matters
              and where action should happen next.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#problem" className="w-full sm:w-auto" size="lg" arrow>
                Explore Statasphere
              </Button>
              <Button href="/#how-it-works" variant="secondary" className="w-full sm:w-auto" size="lg">
                See How It Works
              </Button>
            </div>
          </GridItem>

          <GridItem lg={7}>
            <FadeIn delayMs={160}>
              <div className="mx-auto min-w-0 w-full max-w-[24rem] sm:max-w-[30rem] lg:ml-auto lg:max-w-[40rem]">
                <ConnectorNetwork variant="hero" />
              </div>
            </FadeIn>
          </GridItem>
        </Grid>
      </Container>
    </section>
  )
}
