import { AnimatedLines } from '../components/AnimatedText'
import { Container } from '../components/Container'
import { DataField } from '../components/DataField'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'

export function StrategicPositioning() {
  return (
    <Section className="relative overflow-hidden bg-deep" size="lg" aria-labelledby="positioning-heading">
      <DataField dark />
      <Container className="relative">
        <FadeIn>
          <Grid>
            <GridItem lg={8}>
              <p className="eyebrow mb-4 text-accent">Positioning</p>
              <AnimatedLines
                id="positioning-heading"
                as="h2"
                onceInView
                lines={["Channel Intelligence", "shouldn't end with", 'another dashboard.']}
                className="t-h2 text-white"
              />
              <p className="t-lead mt-8 text-white">
                It should make the platforms around it more intelligent.
              </p>
              <p className="body-copy-on-dark mt-6">
                Statasphere connects detection, investigation and action across ecommerce —
                creating an intelligence layer between the systems that understand performance
                and the systems capable of changing it.
              </p>
            </GridItem>
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  )
}
