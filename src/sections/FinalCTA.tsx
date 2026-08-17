import { MAILTO } from '../config'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'

export function FinalCTA() {
  return (
    <Section id="contact" className="relative overflow-hidden bg-deep" size="lg" aria-labelledby="cta-heading">
      <DataField dark />
      <Container className="relative">
        <FadeIn>
          <Grid>
            <GridItem lg={8}>
              <h2 id="cta-heading" className="t-h2 text-white">
                Beyond Channel Intelligence.
              </h2>
              <p className="body-copy-on-dark mt-6">
                See what changed.
                <br />
                Understand why.
                <br />
                Know where to act.
              </p>
              <div className="mt-10">
                <Button href={MAILTO} variant="onDark" className="w-full sm:w-auto" arrow>
                  Talk to Statasphere
                </Button>
              </div>
            </GridItem>
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  )
}
