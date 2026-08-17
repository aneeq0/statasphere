import type { AnchorHTMLAttributes, ReactNode } from 'react'

type LinkProps = {
  href: string
  children: ReactNode
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>

export function Link({ href, children, className, onClick, ...rest }: LinkProps) {
  const internal = href.startsWith('/') || href.startsWith('#')

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || !internal) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return
        }
        event.preventDefault()
        const next = href.startsWith('#') ? `/${href}` : href
        const url = new URL(next, window.location.origin)
        window.history.pushState({}, '', `${url.pathname}${url.hash}`)
        window.dispatchEvent(new PopStateEvent('popstate'))
        if (!url.hash) window.scrollTo(0, 0)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
