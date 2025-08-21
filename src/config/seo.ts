export interface SEOConfig {
  title: string
  description: string
  keywords: string
  canonicalUrl: string
  ogImage: string
  ogType: string
  twitterCard: string
  structuredData: object
}

export const siteConfig = {
  name: 'Agile Insurance Brokers Ltd',
  url: 'https://agilebrokersgh.com',
  description: 'Leading insurance brokers in Ghana offering comprehensive insurance solutions including life, health, motor, business, and property insurance. Licensed and regulated by NIC.',
  logo: '/images/logo.png',
  ogImage: '/images/logo.png',
  phone: '+233 244 104 087',
  email: 'info@agilebrokersgh.com',
  address: 'Romick Plaza, Kweku Boi Street, Adenta, Ghana',
  gps: 'GD-009-1766'
}

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Home | Agile Insurance',
    description: 'Agile Insurance Brokers Ghana - Your trusted insurance broker in Accra. Compare insurance quotes, get expert advice on life, health, motor, business & property insurance. Licensed by NIC.',
    keywords: 'insurance brokers in Ghana, Ghana insurance broker, insurance brokerage Ghana, Agile Insurance Brokers Ghana, licensed insurance broker Ghana, best insurance brokers in Accra, top insurance brokers Ghana',
    canonicalUrl: 'https://agilebrokersgh.com',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'InsuranceAgency',
      name: 'Agile Insurance Brokers Ltd',
      description: 'Leading insurance brokers in Ghana offering comprehensive insurance solutions',
      url: 'https://agilebrokersgh.com',
      logo: 'https://agilebrokersgh.com/images/logo.png',
      telephone: '+233244104087',
      email: 'info@agilebrokersgh.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Romick Plaza, Kweku Boi Street, Adenta',
        addressLocality: 'Accra',
        addressCountry: 'GH',
        postalCode: 'GD-009-1766'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Ghana'
      },
      serviceArea: {
        '@type': 'Country',
        name: 'Ghana'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Insurance Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Motor Insurance'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Health Insurance'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Life Insurance'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Insurance'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Property Insurance'
            }
          }
        ]
      }
    }
  },
  about: {
    title: 'About | Agile Insurance',
    description: 'Learn about Agile Insurance Brokers Ghana - a licensed and regulated insurance broker in Accra. Established 2019, serving Ghana with professional insurance solutions.',
    keywords: 'Agile Insurance Brokers Ghana, licensed insurance broker Ghana, NIC licensed insurance broker Ghana, Ghana insurance commission broker, regulated insurance broker Ghana',
    canonicalUrl: 'https://agilebrokersgh.com/about',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agile Insurance Brokers Ltd',
      description: 'Licensed insurance broker in Ghana',
      url: 'https://agilebrokersgh.com',
      logo: 'https://agilebrokersgh.com/images/logo.png',
      foundingDate: '2019',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Romick Plaza, Kweku Boi Street, Adenta',
        addressLocality: 'Accra',
        addressCountry: 'GH'
      }
    }
  },
  services: {
    title: 'Services | Agile Insurance',
    description: 'Comprehensive insurance services in Ghana: life insurance, health insurance, motor insurance, business insurance, property insurance. Get expert advice from Agile Insurance Brokers.',
    keywords: 'life insurance broker Ghana, health insurance brokers Ghana, auto insurance brokers Ghana, business insurance broker Ghana, property insurance brokers Ghana, group insurance brokers Ghana',
    canonicalUrl: 'https://agilebrokersgh.com/services',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Insurance Brokerage Services',
      provider: {
        '@type': 'Organization',
        name: 'Agile Insurance Brokers Ltd'
      },
      description: 'Comprehensive insurance services in Ghana',
      areaServed: 'Ghana'
    }
  },
  products: {
    title: 'Products | Agile Insurance',
    description: 'Wide range of insurance products in Ghana: motor insurance, health insurance, life insurance, business insurance, property insurance. Compare quotes with Agile Insurance Brokers.',
    keywords: 'life assurance Ghana, home insurance Ghana, travel insurance Ghana, motor insurance Ghana, group life insurance Ghana, health cover Ghana, business protection insurance Ghana',
    canonicalUrl: 'https://agilebrokersgh.com/products',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Insurance Products',
      description: 'Comprehensive insurance products in Ghana',
      brand: {
        '@type': 'Brand',
        name: 'Agile Insurance Brokers'
      }
    }
  },
  team: {
    title: 'Team | Agile Insurance',
    description: 'Meet our professional insurance broker team in Ghana. Experienced brokers providing expert insurance advice and solutions across Ghana.',
    keywords: 'insurance broker team Ghana, professional insurance brokers Ghana, experienced insurance brokers Ghana, trusted Ghana insurance agent',
    canonicalUrl: 'https://agilebrokersgh.com/team',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agile Insurance Brokers Ltd',
      description: 'Professional insurance broker team in Ghana'
    }
  },
  clients: {
    title: 'Partners & Clients | Agile Insurance',
    description: 'Leading organizations across Ghana trust Agile Insurance Brokers for their insurance needs. View our client portfolio and partnerships.',
    keywords: 'insurance broker clients Ghana, organizations using Agile Insurance Brokers, trusted insurance broker Ghana, leading insurance broker Ghana',
    canonicalUrl: 'https://agilebrokersgh.com/clients',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agile Insurance Brokers Ltd',
      description: 'Trusted by leading organizations in Ghana'
    }
  },
  contact: {
    title: 'Contact | Agile Insurance',
    description: 'Contact Agile Insurance Brokers Ghana for insurance quotes, expert advice, and personalized insurance solutions. Located in Accra, serving all of Ghana.',
    keywords: 'contact Agile Insurance Brokers Ghana, insurance broker contact Ghana, get insurance quotes Ghana, insurance advice Ghana, Agile Insurance Brokers Accra',
    canonicalUrl: 'https://agilebrokersgh.com/contact',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Agile Insurance Brokers',
      description: 'Get in touch for insurance quotes and advice'
    }
  },
  notFound: {
    title: 'Page Not Found | Agile Insurance',
    description: 'The page you are looking for could not be found. Return to Agile Insurance Brokers Ghana homepage for insurance solutions.',
    keywords: 'page not found, 404 error, Agile Insurance Brokers Ghana',
    canonicalUrl: 'https://agilebrokersgh.com/404',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Page Not Found',
      description: 'The requested page could not be found'
    }
  }
}

export const generateMetaTags = (config: SEOConfig) => {
  return {
    title: config.title,
    meta: [
      {
        name: 'description',
        content: config.description
      },
      {
        name: 'keywords',
        content: config.keywords
      },
      {
        name: 'author',
        content: 'Agile Insurance Brokers Ltd'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'googlebot',
        content: 'index, follow'
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: config.ogType
      },
      {
        property: 'og:title',
        content: config.title
      },
      {
        property: 'og:description',
        content: config.description
      },
      {
        property: 'og:url',
        content: config.canonicalUrl
      },
             {
         property: 'og:image',
         content: `https://agilebrokersgh.com${config.ogImage}`
       },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:image:height',
        content: '630'
      },
      {
        property: 'og:site_name',
        content: 'Agile Insurance Brokers Ltd'
      },
      {
        property: 'og:locale',
        content: 'en_GH'
      },
      // Twitter
      {
        name: 'twitter:card',
        content: config.twitterCard
      },
      {
        name: 'twitter:title',
        content: config.title
      },
      {
        name: 'twitter:description',
        content: config.description
      },
             {
         name: 'twitter:image',
         content: `https://agilebrokersgh.com${config.ogImage}`
       },
      // WhatsApp specific
      {
        property: 'og:image:alt',
        content: 'Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana'
      },
      // Additional SEO
      {
        name: 'geo.region',
        content: 'GH'
      },
      {
        name: 'geo.placename',
        content: 'Accra, Ghana'
      },
      {
        name: 'geo.position',
        content: '5.7141;-0.1568'
      },
      {
        name: 'ICBM',
        content: '5.7141, -0.1568'
      },
      {
        name: 'DC.title',
        content: config.title
      },
      {
        name: 'DC.description',
        content: config.description
      },
      {
        name: 'DC.subject',
        content: 'Insurance Brokers Ghana'
      },
      {
        name: 'DC.creator',
        content: 'Agile Insurance Brokers Ltd'
      },
      {
        name: 'DC.publisher',
        content: 'Agile Insurance Brokers Ltd'
      },
      {
        name: 'DC.coverage',
        content: 'Ghana'
      },
      {
        name: 'DC.language',
        content: 'en'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: config.canonicalUrl
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/logo.png'
      },
      {
        rel: 'apple-touch-icon',
        href: '/images/logo.png'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(config.structuredData)
      }
    ]
  }
}
