import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { FragmentedSystems } from '../components/FragmentedSystems'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

const examples = [
  'A visibility problem might begin in the feed.',
  'A return problem might only affect one product range.',
  'A spike in media activity might look positive until commerce performance tells a different story.',
] as const

export function Problem() {
  return (
    <Section className="bg-white" aria-labelledby="problem-heading">
      <Container>
        <Grid stretch>
          <GridItem lg={6}>
            <FadeIn>
              <SectionHeading
                id="problem-heading"
                size="lg"
                eyebrow="The problem"
                title={
                  <>
                    Channels don't operate in isolation.
                    <span className="mt-2 block text-navy/80">
                      Their intelligence shouldn't either.
                    </span>
                  </>
                }
              />
            </FadeIn>

            <FadeIn>
              <div className="mt-10 space-y-6">
                <p className="body-copy">
                  Channel Intelligence has traditionally meant understanding individual
                  channel performance.
                </p>
                <p className="body-copy">
                  But ecommerce does not operate channel by channel. Performance is spread
                  across advertising platforms, feeds, commerce systems, marketplaces and
                  analytics.
                </p>
                <p className="body-copy">
                  Each platform explains its own part of the story while commercial
                  decisions often span multiple systems.
                </p>
              </div>
            </FadeIn>

            <ol className="mt-12">
              {examples.map((example, index) => (
                <FadeIn key={example} as="li" delayMs={index * 80}>
                  <div className="border-t border-navy/10 py-6">
                    <p className="eyebrow text-accent-dark">0{index + 1}</p>
                    <p className="mt-3 text-[1.2rem] leading-snug tracking-[-0.02em] text-navy md:text-[1.35rem]">
                      {example}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </ol>
          </GridItem>

          <GridItem lg={6}>
            <div className="lg:sticky lg:top-28">
              <FadeIn delayMs={120}>
                <FragmentedSystems />
              </FadeIn>
            </div>
          </GridItem>
        </Grid>

        <FadeIn>
          <div className="mt-16 border-t border-navy/10 pt-12 md:mt-20 md:pt-16">
            <Grid>
              <GridItem lg={8}>
                <p className="t-lead text-navy">
                  Statasphere connects those signals before the business has to.
                </p>
                <p className="body-copy mt-6">
                  It creates one intelligence layer across the ecommerce ecosystem — moving
                  teams from channel reporting to commercial understanding.
                </p>
              </GridItem>
            </Grid>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
