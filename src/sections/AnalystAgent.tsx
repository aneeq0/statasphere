import analystAgent from '../assets/analyst-agent.jpg'
import signalBrief from '../assets/signal-brief.jpg'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Grid, GridItem } from '../components/Grid'
import { ProductScreenshot } from '../components/ProductScreenshot'
import { ProductStill } from '../components/ProductStill'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

const questions = [
  'Which products caused it?',
  'Which channels changed?',
  'Is it isolated or part of a wider pattern?',
  'What should we investigate first?',
] as const

function InvestigationChain() {
  return (
    <div className="mt-8" aria-label="Investigation path from product to Signal Brief">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.75rem] uppercase tracking-[0.12em] text-muted">
        {['Product', 'Channel', 'Metric'].map((item, index) => (
          <li key={item} className="flex items-center gap-3">
            <span className="font-medium text-navy">{item}</span>
            {index < 2 ? (
              <span className="text-accent-dark" aria-hidden="true">
                —
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <ol className="mt-4 border-l border-accent-dark/60 pl-4">
        {['Commerce', 'Analyst Agent', 'Signal Brief'].map((item) => (
          <li
            key={item}
            className="py-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-navy"
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function AnalystAgent() {
  return (
    <Section className="bg-white" aria-labelledby="analyst-heading">
      <Container>
        <Grid>
          <GridItem lg={7}>
            <div className="flex flex-col gap-8">
              <ProductScreenshot
                perspective
                labels={[
                  { text: 'Product', position: 'tl' },
                  { text: 'Channel', position: 'tr' },
                  { text: 'Signal Brief', position: 'br' },
                ]}
              >
                <ProductStill
                  src={analystAgent}
                  alt="The Statasphere Analyst Agent beginning an investigation on a Visibility Falling signal, with evidence collection in progress."
                />
              </ProductScreenshot>
              <ProductScreenshot>
                <ProductStill
                  src={signalBrief}
                  alt="The resulting Signal Brief explaining Visibility Falling on Google Shopping."
                />
              </ProductScreenshot>
            </div>
          </GridItem>

          <GridItem lg={5}>
            <FadeIn>
              <SectionHeading
                id="analyst-heading"
                eyebrow="Analyst Agent"
                title={
                  <>
                    Every signal
                    <span className="block">deserves an</span>
                    <span className="block">explanation.</span>
                  </>
                }
              />
              <p className="mt-6 text-[1.0625rem] leading-snug tracking-[-0.02em] text-navy">
                Finding a movement is useful.
                <br />
                Understanding why it happened is where intelligence becomes valuable.
              </p>
              <p className="body-copy mt-4">
                The Statasphere Analyst Agent investigates the data behind each signal —
                connecting channel movement, product performance and commercial outcomes into
                a clear Signal Brief.
              </p>
            </FadeIn>

            <FadeIn>
              <InvestigationChain />
            </FadeIn>

            <ul className="mt-8 space-y-3">
              {questions.map((question) => (
                <li
                  key={question}
                  className="border-l-2 border-accent pl-4 text-[0.9375rem] tracking-[-0.02em] text-navy"
                >
                  {question}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[1.0625rem] font-medium tracking-[-0.03em] text-navy">
              Less dashboard interpretation. More decision-making.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
