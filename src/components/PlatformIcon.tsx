import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Camera,
  Megaphone,
  Music2,
  Package,
  Search,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
} from 'lucide-react'
import { cn } from '../lib/cn'

const icons: Record<string, LucideIcon> = {
  'Google Ads': Megaphone,
  'Google Merchant Center': Package,
  Meta: Share2,
  TikTok: Music2,
  Shopify: Store,
  BigCommerce: ShoppingBag,
  'Amazon Ads': ShoppingCart,
  Snapchat: Camera,
  'Google Analytics': BarChart3,
  ChatGPT: Sparkles,
  'Google Search Console': Search,
}

type PlatformIconProps = {
  name: string
  className?: string
  size?: 'sm' | 'md'
  tone?: 'soft' | 'solid'
}

export function PlatformIcon({ name, className, size = 'md', tone = 'soft' }: PlatformIconProps) {
  const Icon = icons[name] ?? Package

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        size === 'sm' ? 'size-8' : 'size-10',
        tone === 'solid'
          ? 'rounded-full bg-navy text-soft'
          : 'rounded-lg bg-navy/5 text-navy',
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={size === 'sm' ? 'size-4' : 'size-[1.125rem]'} strokeWidth={1.75} />
    </span>
  )
}
