import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  as?: 'h2' | 'h3'
  invert?: boolean
  align?: 'left' | 'center'
  size?: 'lg' | 'md'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  as: Tag = 'h2',
  invert = false,
  align = 'left',
  size = 'md',
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow ? (
        <p className={cn('eyebrow mb-4', invert ? 'text-accent' : 'text-muted')}>{eyebrow}</p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          'font-medium tracking-[-0.04em]',
          size === 'lg' ? 't-h2' : 't-h2-md',
          invert ? 'text-white' : 'text-navy',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description ? (
        <div
          className={cn(
            'mt-6',
            invert ? 'body-copy-on-dark' : 'body-copy',
            centered && 'mx-auto max-w-2xl',
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}
