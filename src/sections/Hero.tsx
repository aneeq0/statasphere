import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { HeroVisual } from '../components/HeroVisual'
import { AnimatedLines } from '../components/AnimatedText'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft" aria-labelledby="hero-heading">
      <DataField />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Grid stretch alignLg="center">
          <GridItem lg={5}>
            <p className="eyebrow text-muted">Channel Intelligence for ecommerce</p>
            <AnimatedLines
              id="hero-heading"
              lines={['Beyond', 'Channel', 'Intelligence.']}
              className="t-h1 mt-6 text-navy"
            />
            <p className="body-copy mt-8">
              Every platform sees a different part of performance. Statasphere connects
              channel, product and commerce data to show what is changing, why it matters
              and where action should happen next.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#product" className="w-full sm:w-auto" arrow>
                See Statasphere
              </Button>
              <Button href="/#film" variant="secondary" className="w-full sm:w-auto">
                Watch the 40 Second Film
              </Button>
            </div>
          </GridItem>

          <GridItem lg={7}>
            <FadeIn delayMs={160}>
              <p className="eyebrow mb-6 text-accent-dark">The Same Product. Seen Differently.</p>
              <div className="mx-auto w-full max-w-[22.5rem] sm:max-w-[26rem] md:max-w-[32rem] lg:max-w-none">
                <HeroVisual />
              </div>
            </FadeIn>
          </GridItem>
        </Grid>
      </Container>
    </section>
  )
}
