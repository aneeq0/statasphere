import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

export function Ecosystem() {
  return (
    <Section id="connectors" className="bg-white" aria-labelledby="ecosystem-heading">
      <Container>
        <Grid alignLg="end">
          <GridItem lg={7}>
            <FadeIn>
              <SectionHeading
                id="ecosystem-heading"
                size="lg"
                eyebrow="Connected ecosystem"
                title="One intelligence layer across the ecommerce ecosystem."
              />
            </FadeIn>
          </GridItem>
          <GridItem lg={5}>
            <FadeIn>
              <p className="body-copy">
                Bring the signals together without creating another silo.
              </p>
            </FadeIn>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
