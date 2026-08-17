import sameProduct from '../assets/same-product.jpg'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { VideoEmbed } from '../components/VideoEmbed'

export function MarketingVideo() {
  return (
    <Section id="film" className="bg-off" aria-labelledby="film-heading">
      <Container>
        <Grid>
          <GridItem lg={8} lgStart={3}>
            <FadeIn>
              <SectionHeading
                id="film-heading"
                align="center"
                size="lg"
                title={
                  <>
                    The Same Product.
                    <span className="mt-0.5 block">Seen Differently.</span>
                  </>
                }
                description="See how fragmented channel signals become one commercial story. Watch Statasphere in 40 seconds."
              />
            </FadeIn>
          </GridItem>
        </Grid>

        <FadeIn className="mt-12">
          <VideoEmbed poster={sameProduct} />
        </FadeIn>
      </Container>
    </Section>
  )
}
