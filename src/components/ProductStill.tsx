import { cn } from '../lib/cn'

type ProductStillProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export function ProductStill({ src, alt, className, eager = false }: ProductStillProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-auto w-full object-cover object-center', className)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
