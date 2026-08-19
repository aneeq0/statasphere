import { cn } from '../lib/cn'

const marks = {
  google: {
    label: 'Google Ads',
    short: 'Google',
    src: 'https://cdn.simpleicons.org/googleads/4285F4',
  },
  meta: {
    label: 'Meta',
    short: 'Meta',
    src: 'https://cdn.simpleicons.org/meta/0866FF',
  },
  tiktok: {
    label: 'TikTok',
    short: 'TikTok',
    src: 'https://cdn.simpleicons.org/tiktok/000000',
  },
} as const

type ChannelMarkProps = {
  channel: keyof typeof marks
  compact?: boolean
  className?: string
}

export function ChannelMark({ channel, compact = false, className }: ChannelMarkProps) {
  const mark = marks[channel]

  return (
    <span className={cn('inline-flex items-center gap-2.5 font-bold tracking-[-0.02em] text-navy', className)}>
      <img src={mark.src} alt="" width={compact ? 24 : 25} height={compact ? 24 : 25} className="size-6 object-contain" />
      {compact ? mark.label : mark.short}
    </span>
  )
}
