import {
  siBigcommerce,
  siGoogleanalytics,
  siGoogleads,
  siGooglesearchconsole,
  siMeta,
  siShopify,
  siSnapchat,
  siTiktok,
} from 'simple-icons'
import { cn } from '../lib/cn'

type BrandMark = {
  path: string
  hex: string
  onDark?: boolean
}

const amazonSmile: BrandMark = {
  hex: 'FF9900',
  path: 'M15.565 12.478c-2.043.8-4.747 1.09-7.027 1.09-3.323 0-6.32-.65-8.84-1.737-.197-.086-.51.043-.51.29 0 .192.11.366.232.48 2.76 2.35 6.4 3.71 10.627 3.71 2.61 0 5.47-.57 7.63-1.73.33-.18.15-.7-.11-.82zm2.26-1.54s.15-.2.15-.66c-.17-.06-.99-.2-2.12-.2-1.5 0-2.84.2-2.84.92 0 .37.2.62.7.75 1.06.27 3.2.23 4.11-.81zM13.54 1.2c1.9 0 3.24.7 4.02 1.92l-1.1.9c-.52-.74-1.28-1.16-2.9-1.16-2.18 0-3.82 1.46-3.82 3.94s1.64 3.94 3.82 3.94c1.62 0 2.4-.5 2.96-1.22v.98h1.32V2.08h-1.32v.86C16.5 1.86 15.5 1.2 13.54 1.2zm.08 2.28c1.36 0 2.28.94 2.28 2.56s-.92 2.56-2.28 2.56-2.28-.94-2.28-2.56.92-2.56 2.28-2.56z',
}

const openaiMark: BrandMark = {
  hex: '10A37F',
  path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.513 2.9001A5.9847 5.9847 0 0 0 13.26 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7581a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9504a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723V11.6a.7663.7663 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
}

const merchantCenter: BrandMark = {
  hex: '34A853',
  path: 'M7.2 3.6h9.6l2.4 3.6H4.8zm-2.4 4.8h14.4v10.2A1.8 1.8 0 0 1 17.4 20.4H6.6A1.8 1.8 0 0 1 4.8 18.6zm5.4 2.1v6.3h1.6l2.7-3.15v3.15h1.5V10.5h-1.55l-2.65 3.1V10.5z',
}

const brands: Record<string, BrandMark> = {
  'Google Ads': siGoogleads,
  Meta: siMeta,
  TikTok: siTiktok,
  Shopify: siShopify,
  BigCommerce: siBigcommerce,
  Snapchat: { ...siSnapchat, onDark: true },
  'Amazon Ads': amazonSmile,
  'Google Analytics': siGoogleanalytics,
  ChatGPT: openaiMark,
  'Google Search Console': siGooglesearchconsole,
  'Google Merchant Center': merchantCenter,
}

const box = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
} as const

const glyph = {
  xs: 'size-3.5',
  sm: 'size-[1.05rem]',
  md: 'size-5',
} as const

type PlatformIconProps = {
  name: string
  className?: string
  size?: 'xs' | 'sm' | 'md'
  tone?: 'soft' | 'solid' | 'brand'
}

export function PlatformIcon({ name, className, size = 'md', tone = 'brand' }: PlatformIconProps) {
  const brand = brands[name]
  const fill = tone === 'solid' ? '#fbf8f8' : brand ? `#${brand.hex}` : '#292b59'

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden',
        box[size],
        tone === 'solid' && 'rounded-full bg-navy text-soft',
        tone === 'soft' && 'rounded-lg bg-navy/5',
        tone === 'brand' && (brand?.onDark ? 'rounded-full bg-[#111]' : 'rounded-full bg-white ring-1 ring-navy/10'),
        className,
      )}
      aria-hidden="true"
    >
      {brand ? (
        <svg className={glyph[size]} viewBox="0 0 24 24" fill={fill} role="img">
          <path d={brand.path} />
        </svg>
      ) : (
        <span className="text-[0.5rem] font-bold text-navy">{name.slice(0, 1)}</span>
      )}
    </span>
  )
}
