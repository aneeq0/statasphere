export type LegalDoc = {
  slug: string
  title: string
  effective: string
  intro: string[]
  sections: {
    title: string
    paragraphs?: string[]
    bullets?: string[]
    closing?: string[]
  }[]
}

export const legalDocs: readonly LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    effective: '29/09/2025',
    intro: [
      'Statasphere Ltd (“Statasphere”, “we”, “us”, “our”) operates a SaaS analytics platform that integrates with third-party advertising, commerce, and marketplace APIs to provide performance reporting, monitoring, and analytics services to authorised users.',
      'This Privacy Policy explains how we collect, use, store, and protect information accessed through our platform.',
    ],
    sections: [
      {
        title: '1. Information We Collect',
        paragraphs: ['We collect and process the following categories of information:'],
      },
      {
        title: 'Account Information',
        bullets: [
          'Name',
          'Email address',
          'Company name',
          'Account credentials required to access the platform',
          'API authentication credentials',
          'OAuth tokens',
          'Access tokens',
          'Refresh tokens',
        ],
        closing: [
          'These credentials are generated only after explicit user authorization and are used solely to access permitted third-party data.',
        ],
      },
      {
        title: 'Advertising & Commerce Performance Data',
        paragraphs: ['When a user connects a third-party platform, we may access read-only performance data including:'],
        bullets: [
          'Impressions',
          'Clicks',
          'Spend',
          'Conversions',
          'Revenue',
          'Campaign, ad group, or product-level metrics',
          'Catalog or feed status information',
        ],
        closing: [
          'We do not access private messages, personal social media content, or non-authorised user data.',
        ],
      },
      {
        title: '2. How We Use Information',
        paragraphs: ['Information accessed through connected platforms is used exclusively to:'],
        bullets: [
          'Retrieve authorised performance metrics',
          'Display analytics and reporting within the Statasphere dashboard',
          'Generate performance insights and signal detection',
          'Provide product-level and channel-level reporting',
        ],
        closing: [
          'We do not use third-party data for advertising, profiling, resale, or marketing purposes.',
        ],
      },
      {
        title: '3. Third-Party Platform Integrations',
        paragraphs: ['Statasphere integrates with third-party platforms including, but not limited to:'],
        bullets: [
          'Google Ads',
          'Meta Ads',
          'Snap Ads',
          'TikTok Ads',
          'Pinterest Ads',
          'Amazon Ads',
          'Microsoft Ads',
          'Affiliate networks',
          'Commerce platforms such as Shopify or BigCommerce',
        ],
        closing: [
          'Access to third-party accounts occurs only after explicit OAuth authorization granted by the account owner.',
          'Statasphere requests read-only access to advertising and performance data unless otherwise explicitly stated.',
          'We do not create, modify, manage, or publish advertising campaigns on behalf of users.',
        ],
      },
      {
        title: '4. Data Authorization & Revocation',
        paragraphs: ['Users maintain full control over connected integrations.', 'A user may revoke access at any time by:'],
        bullets: [
          'Disconnecting the integration within Statasphere; or',
          'Revoking authorization directly within the third-party platform’s account settings.',
        ],
        closing: ['Upon revocation, Statasphere will no longer access new data from the third-party platform.'],
      },
      {
        title: '5. Data Storage & Security',
        paragraphs: ['We implement industry-standard technical and organisational security measures to protect data, including:'],
        bullets: [
          'Encrypted transmission (HTTPS/TLS)',
          'Secure server infrastructure',
          'Controlled access to production systems',
          'Restricted access to authentication credentials',
        ],
        closing: [
          'OAuth tokens and access credentials are stored securely and used solely for authorised API communication.',
        ],
      },
      {
        title: '6. Data Sharing & Disclosure',
        paragraphs: ['Statasphere does not:'],
        bullets: [
          'Sell third-party advertising data',
          'Rent or sublicense data',
          'Share performance data with unauthorised external parties',
        ],
        closing: [
          'Data is only accessible within the authorised user’s Statasphere account.',
          'We may disclose information if required by law or to comply with legal obligations.',
        ],
      },
      {
        title: '7. Data Retention',
        paragraphs: [
          'We retain connected platform data only for as long as necessary to provide reporting services to the authorised account holder or as required by applicable law.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    effective: '29/09/2025',
    intro: ['By accessing or using Statasphere, you agree to these Terms.'],
    sections: [
      {
        title: '1. Service Description',
        paragraphs: [
          'Statasphere provides a SaaS analytics platform that retrieves advertising and performance data from authorised third-party APIs and displays aggregated reporting within a dashboard environment.',
          'Statasphere does not manage advertising spend or modify ad accounts without explicit user action.',
        ],
      },
      {
        title: '2. User Responsibilities',
        paragraphs: ['Users must:'],
        bullets: [
          'Ensure API connections are authorised',
          'Maintain account security',
          'Comply with third-party platform terms',
        ],
      },
      {
        title: '3. API Usage',
        paragraphs: [
          'Statasphere accesses third-party APIs solely for data retrieval and reporting purposes.',
          'We do not:',
        ],
        bullets: [
          'Post ads',
          'Modify campaigns',
          'Change budgets',
          'Access private user data',
        ],
        closing: ['Unless explicitly enabled by the user.'],
      },
      {
        title: '4. Limitation of Liability',
        paragraphs: [
          'Statasphere provides reporting and analytics tools. We are not responsible for advertising performance outcomes.',
        ],
      },
      {
        title: '5. Governing Law',
        paragraphs: ['These Terms are governed by the laws of England and Wales.'],
      },
    ],
  },
  {
    slug: 'data-processing',
    title: 'Data Processing',
    effective: '29/09/2025',
    intro: ['Statasphere connects to third-party advertising platforms via official APIs.'],
    sections: [
      {
        title: 'We process',
        bullets: [
          'Campaign performance metrics',
          'Product-level advertising data',
          'Spend and revenue reporting',
        ],
      },
      {
        title: 'We do not',
        bullets: [
          'Store payment information',
          'Access personal social media messages',
          'Sell advertising data',
        ],
        closing: ['All API access occurs under authorised permissions granted by the user.'],
      },
    ],
  },
] as const

export function getLegalDoc(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug)
}
