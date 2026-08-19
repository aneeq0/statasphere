import { useEffect, useId, useRef, useState } from 'react'
import { LOGIN_URL } from '../config'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePathname } from '../hooks/usePathname'
import { cn } from '../lib/cn'
import { Button } from './Button'
import { Container } from './Container'
import { Link } from './Link'
import { Logo } from './Logo'

const navItems = [
  { label: 'Platform', href: '/#problem', id: 'problem' },
  { label: 'Intelligence', href: '/#intelligence', id: 'intelligence' },
  { label: 'How It Works', href: '/#how-it-works', id: 'how-it-works' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
] as const

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const path = usePathname()
  const active = useActiveSection(path === '/' ? sectionIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>('a, button')
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        openButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
      <div
        className={cn(
          'relative z-[60] border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300',
          scrolled || open
            ? 'border-navy/10 bg-soft/90 shadow-[0_12px_40px_-28px_rgba(5,7,23,0.5)] backdrop-blur-xl'
            : 'border-navy/5 bg-soft/70 backdrop-blur-md',
        )}
      >
        <Container className="grid h-[4.5rem] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:h-[4.75rem]">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'whitespace-nowrap py-1.5 text-[0.875rem] font-medium tracking-[-0.01em] transition-colors duration-200',
                  active === item.id
                    ? 'text-navy'
                    : 'text-navy/55 hover:text-navy',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-5 lg:flex">
            <a
              href={LOGIN_URL}
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center text-[0.8125rem] font-medium text-navy/65 transition-colors hover:text-navy"
            >
              Login
            </a>
            <Button href="/#problem" size="sm">
              Explore Statasphere
            </Button>
          </div>

          <button
            ref={openButtonRef}
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center justify-self-end rounded-full border border-navy/10 bg-white text-navy touch-manipulation lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-navy transition-transform duration-300',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-px w-full bg-navy transition-opacity duration-200',
                  open ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-navy transition-transform duration-300',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </Container>
      </div>

      <div
        id={menuId}
        ref={panelRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex h-dvh max-h-dvh flex-col overflow-y-auto overscroll-contain bg-soft pt-[calc(4.5rem+env(safe-area-inset-top,0px))] transition-opacity duration-300 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col" aria-label="Mobile">
          <Container className="flex flex-1 flex-col pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-8">
            <p className="eyebrow text-muted">Menu</p>
            <ul className="mt-6 border-t border-navy/10">
              {navItems.map((item, index) => (
                <li key={item.href} className="border-b border-navy/10">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex min-h-12 items-center justify-between py-4 text-[1.375rem] font-medium tracking-[-0.03em] transition-colors',
                      active === item.id ? 'text-navy' : 'text-navy/70',
                      open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                    )}
                    style={{ transition: 'opacity 0.4s ease, transform 0.4s ease', transitionDelay: open ? `${80 + index * 50}ms` : '0ms' }}
                    tabIndex={open ? 0 : -1}
                    onClick={close}
                  >
                    <span>{item.label}</span>
                    <span className="eyebrow text-accent-dark">0{index + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={cn(
                'mt-auto flex flex-col gap-3 pt-10 transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
              )}
              style={{ transitionDelay: open ? '360ms' : '0ms' }}
            >
              <a
                href={LOGIN_URL}
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-navy/15 text-[0.9375rem] font-medium text-navy"
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                Login
              </a>
              <Button href="/#problem" className="w-full" arrow onClick={close} tabIndex={open ? 0 : -1}>
                Explore Statasphere
              </Button>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  )
}
