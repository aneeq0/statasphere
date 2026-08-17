import sameProduct from '../assets/same-product.jpg'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { ProductScreenshot } from '../components/ProductScreenshot'
import { ProductStill } from '../components/ProductStill'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

const questions = [
  {
    title: 'Product Exposure',
    copy: "Are the products we've invested in actually being seen?",
  },
  {
    title: 'Feed Quality',
    copy: 'Is the catalogue ready to perform across the channels using it?',
  },
  {
    title: 'Unconverting Spend',
    copy: 'Where are we paying for activity without generating sales?',
  },
  {
    title: 'Commercial Return',
    copy: 'Is the investment actually paying back?',
  },
] as const

export function StatasphereView() {
  return (
    <Section id="product" className="bg-white" aria-labelledby="view-heading">
      <Container>
        <Grid alignLg="end">
          <GridItem lg={7}>
            <FadeIn>
              <SectionHeading
                id="view-heading"
                size="lg"
                eyebrow="Statasphere view"
                title={
                  <>
                    See the business
                    <span className="block">before you see</span>
                    <span className="block">the channel.</span>
                  </>
                }
              />
            </FadeIn>
          </GridItem>
          <GridItem lg={5}>
            <FadeIn>
              <p className="body-copy">
                From each commercial question, teams can investigate the channels, products
                and signals sitting underneath the headline.
              </p>
            </FadeIn>
          </GridItem>
        </Grid>

        <FadeIn className="mt-12">
          <ProductScreenshot>
            <ProductStill
              src={sameProduct}
              alt="The same product seen differently across Google Shopping, Meta Ads, TikTok, Snapchat, BigCommerce and ChatGPT."
            />
          </ProductScreenshot>
        </FadeIn>

        <Grid className="mt-12">
          {questions.map((item, index) => (
            <GridItem key={item.title} md={4} lg={3}>
              <FadeIn delayMs={index * 60}>
                <article className="border-t border-navy/15 pt-6">
                  <p className="eyebrow text-accent-dark">0{index + 1}</p>
                  <h3 className="mt-4 text-[1.125rem] font-medium tracking-[-0.03em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-snug text-muted">{item.copy}</p>
                </article>
              </FadeIn>
            </GridItem>
          ))}
        </Grid>

        <FadeIn>
          <Grid className="mt-12">
            <GridItem lg={8}>
              <p className="t-lead text-navy">
                One commercial view. Multiple channel perspectives.
              </p>
            </GridItem>
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  )
}
