import { CONTACT_EMAIL, LEGAL, LOGIN_URL, MAILTO } from '../config'
import { Container } from './Container'
import { Grid, GridItem } from './Grid'
import { Link } from './Link'
import { Logo } from './Logo'

const legalLinks = [
  { label: 'Privacy Policy', href: LEGAL.privacy },
  { label: 'Terms of Service', href: LEGAL.terms },
  { label: 'Data Processing', href: LEGAL.dataProcessing },
] as const

const productLinks = [
  { label: 'Platform', href: '/#problem' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Intelligence', href: '/#intelligence' },
  { label: 'Contact', href: '/#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-navy text-soft">
      <Container className="py-16 md:py-20">
        <Grid>
          <GridItem lg={5}>
            <Logo inverted />
            <p className="body-copy-on-dark mt-6 max-w-sm">
              Channel Intelligence for ecommerce.
            </p>
            <a
              href={MAILTO}
              className="mt-6 inline-flex min-h-11 items-center text-[0.9375rem] text-accent transition-colors hover:text-soft"
            >
              {CONTACT_EMAIL}
            </a>
          </GridItem>

          <GridItem md={4} lg={2}>
            <p className="eyebrow text-accent">Product</p>
            <nav aria-label="Footer product" className="mt-5">
              <ul className="flex flex-col lg:gap-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[0.9375rem] text-white/70 transition-colors hover:text-white lg:min-h-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </GridItem>

          <GridItem md={4} lg={2}>
            <p className="eyebrow text-accent">Legal</p>
            <nav aria-label="Footer legal" className="mt-5">
              <ul className="flex flex-col lg:gap-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[0.9375rem] text-white/70 transition-colors hover:text-white lg:min-h-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  {/* <a
                    href={LOGIN_URL}
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-[0.9375rem] text-white/70 transition-colors hover:text-white lg:min-h-0"
                  >
                    Login
                  </a> */}
                </li>
              </ul>
            </nav>
          </GridItem>

          <GridItem md={4} lg={3}>
            <p className="eyebrow text-accent">Company</p>
            <address className="mt-5 not-italic text-[0.9375rem] leading-relaxed text-white/70">
              <p className="font-medium text-soft">Statasphere Ltd</p>
              <p className="mt-3">51 The Fairway</p>
              <p>North Wembley</p>
              <p>HA0 3TN</p>
              <p>United Kingdom</p>
              <p className="mt-3">Company Number: 16671675</p>
            </address>
          </GridItem>
        </Grid>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">© 2026 Statasphere Ltd. All rights reserved.</p>
          <p className="text-sm text-white/55">United Kingdom</p>
        </Container>
      </div>
    </footer>
  )
}
