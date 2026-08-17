import readyForAction from '../assets/ready-for-action.jpg'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { ProductScreenshot } from '../components/ProductScreenshot'
import { ProductStill } from '../components/ProductStill'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

const flow = ['Intelligence', 'Opportunity', 'Action', 'Execution'] as const

const destinations = ['Feed', 'Commerce', 'Media'] as const

const groups = [
  {
    title: 'Feed Intelligence',
    items: [
      'Product enrichment',
      'Custom label changes',
      'Product prioritisation',
      'Feed optimisation',
    ],
  },
  {
    title: 'Commerce Intelligence',
    items: [
      'Merchandising changes',
      'Inventory decisions',
      'Promotion decisions',
      'Product prioritisation',
    ],
  },
  {
    title: 'Media Intelligence',
    items: [
      'Budget decisions',
      'Campaign investigation',
      'Product exclusions',
      'Channel optimisation',
    ],
  },
] as const

export function Action() {
  return (
    <Section className="bg-off" aria-labelledby="action-heading">
      <Container>
        <Grid alignLg="end">
          <GridItem lg={7}>
            <FadeIn>
              <SectionHeading
                id="action-heading"
                eyebrow="Action"
                title="Intelligence is only valuable if something happens next."
              />
            </FadeIn>
          </GridItem>
          <GridItem lg={5}>
            <FadeIn>
              <p className="body-copy">Statasphere connects insight with execution.</p>
            </FadeIn>
          </GridItem>
        </Grid>

        <FadeIn>
          <ol className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            {flow.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                <span className="text-base font-medium tracking-[-0.03em] text-navy">
                  {item}
                </span>
                {index < flow.length - 1 ? (
                  <span className="hidden h-px w-10 bg-accent-dark/80 sm:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </FadeIn>

        <Grid className="mt-12" stretch>
          {groups.map((group, index) => (
            <GridItem key={group.title} md={4} lg={4}>
              <FadeIn delayMs={index * 50} className="h-full">
                <Card>
                  <p className="eyebrow text-accent-dark">{destinations[index]}</p>
                  <h3 className="mt-3 text-[1.375rem] font-medium tracking-[-0.03em] text-navy">
                    {group.title}
                  </h3>
                  <ul className="mt-6 flex-1 space-y-2 border-t border-navy/10 pt-6">
                    {group.items.map((item) => (
                      <li key={item} className="text-[0.9375rem] leading-snug text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            </GridItem>
          ))}
        </Grid>

        <div className="mt-16">
          <ProductScreenshot>
            <ProductStill
              src={readyForAction}
              alt="A Signal Brief pointing the next action to a feed provider, commerce platform or channel platforms."
            />
          </ProductScreenshot>
        </div>

        <FadeIn>
          <Grid className="mt-16">
            <GridItem lg={8}>
              <blockquote>
                <p className="t-lead text-navy">
                  Statasphere finds the opportunity.
                  <br />
                  The action belongs in the platform built to execute it.
                </p>
                <p className="body-copy mt-6">
                  This is what takes Statasphere beyond traditional Channel Intelligence.
                </p>
              </blockquote>
            </GridItem>
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  )
}
