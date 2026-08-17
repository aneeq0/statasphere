import { Container } from '../components/Container'
import { Grid, GridItem } from '../components/Grid'
import { Section } from '../components/Section'
import type { LegalDoc } from '../content/legal'

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Section className="bg-white" size="lg" aria-labelledby="legal-heading">
      <Container>
        <Grid>
          <GridItem lg={8}>
            <p className="eyebrow text-muted">Legal</p>
            <h1 id="legal-heading" className="t-h2 mt-4 text-navy">
              {doc.title}
            </h1>
            <p className="mt-4 text-sm text-muted">Effective date: {doc.effective}</p>
          </GridItem>
        </Grid>

        <Grid className="mt-12">
          <GridItem lg={8}>
            <div className="space-y-10">
              {doc.intro.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}

              {doc.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[1.375rem] font-medium tracking-[-0.03em] text-navy">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="body-copy mt-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 border-t border-navy/10 pt-4">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-accent pl-4 text-[1.0625rem] leading-snug text-navy"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.closing?.map((paragraph) => (
                    <p key={paragraph} className="body-copy mt-4">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}
