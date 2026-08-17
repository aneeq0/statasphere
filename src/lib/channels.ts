export const heroChannels = [
  { name: 'Google Ads', metric: 'Clicks', x: 50, y: 10 },
  { name: 'Meta', metric: 'Spend', x: 88, y: 28 },
  { name: 'TikTok', metric: 'Engagement', x: 88, y: 72 },
  { name: 'Snapchat', metric: 'Views', x: 50, y: 90 },
  { name: 'Commerce', metric: 'Orders / Returns', x: 12, y: 72 },
  { name: 'ChatGPT', metric: 'Impressions', x: 12, y: 28 },
] as const

export const problemSystems = [
  { name: 'Google Ads', x: 12, y: 18 },
  { name: 'Meta', x: 78, y: 14 },
  { name: 'TikTok', x: 88, y: 58 },
  { name: 'Commerce', x: 18, y: 72 },
  { name: 'Marketplaces', x: 52, y: 8 },
  { name: 'Analytics', x: 46, y: 86 },
] as const

export const connectors = [
  { name: 'BigCommerce', prominent: true },
  { name: 'Google Ads', prominent: false },
  { name: 'Google Merchant Center', prominent: false },
  { name: 'Meta', prominent: false },
  { name: 'TikTok', prominent: false },
  { name: 'Snapchat', prominent: false },
  { name: 'Amazon Ads', prominent: false },
  { name: 'Shopify', prominent: false },
  { name: 'Google Search Console', prominent: false },
  { name: 'Google Analytics', prominent: false },
  { name: 'ChatGPT', prominent: false },
] as const
