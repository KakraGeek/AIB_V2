import React, { useEffect } from 'react'
import type { SEOConfig } from '@/config/seo'

interface SEOHeadProps {
  config: SEOConfig
}

const SEOHead: React.FC<SEOHeadProps> = ({ config }) => {
  useEffect(() => {
    // Update document title
    document.title = config.title
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      let meta = document.querySelector(`meta[${property ? property : 'name'}="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    // Update or create link tags
    const updateLinkTag = (rel: string, href: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        if (type) link.setAttribute('type', type)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }
    
    // Basic Meta Tags
    updateMetaTag('description', config.description)
    updateMetaTag('keywords', config.keywords)
    updateMetaTag('author', 'Agile Insurance Brokers Ltd')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('googlebot', 'index, follow')
    
    // Canonical URL
    updateLinkTag('canonical', config.canonicalUrl)
    
    // Favicon
    updateLinkTag('icon', '/images/logo.png', 'image/png')
    updateLinkTag('apple-touch-icon', '/images/logo.png')
    
    // Open Graph / Facebook
    updateMetaTag('og:type', config.ogType, 'property')
    updateMetaTag('og:title', config.title, 'property')
    updateMetaTag('og:description', config.description, 'property')
    updateMetaTag('og:url', config.canonicalUrl, 'property')
    updateMetaTag('og:image', `https://www.agilebrokersgh.com${config.ogImage}`, 'property')
    updateMetaTag('og:image:width', '1200', 'property')
    updateMetaTag('og:image:height', '630', 'property')
    updateMetaTag('og:site_name', 'Agile Insurance Brokers Ltd', 'property')
    updateMetaTag('og:locale', 'en_GH', 'property')
    updateMetaTag('og:image:alt', 'Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana', 'property')
    
    // Twitter
    updateMetaTag('twitter:card', config.twitterCard)
    updateMetaTag('twitter:title', config.title)
    updateMetaTag('twitter:description', config.description)
    updateMetaTag('twitter:image', `https://www.agilebrokersgh.com${config.ogImage}`)
    
    // Geographic Meta Tags
    updateMetaTag('geo.region', 'GH')
    updateMetaTag('geo.placename', 'Accra, Ghana')
    updateMetaTag('geo.position', '5.7141;-0.1568')
    updateMetaTag('ICBM', '5.7141, -0.1568')
    
    // Dublin Core Meta Tags
    updateMetaTag('DC.title', config.title)
    updateMetaTag('DC.description', config.description)
    updateMetaTag('DC.subject', 'Insurance Brokers Ghana')
    updateMetaTag('DC.creator', 'Agile Insurance Brokers Ltd')
    updateMetaTag('DC.publisher', 'Agile Insurance Brokers Ltd')
    updateMetaTag('DC.coverage', 'Ghana')
    updateMetaTag('DC.language', 'en')
    
    // Additional SEO Meta Tags
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    updateMetaTag('language', 'English')
    updateMetaTag('revisit-after', '7 days')
    updateMetaTag('distribution', 'global')
    updateMetaTag('rating', 'general')
    
    // Business Information
    updateMetaTag('business:contact_data:street_address', 'Romick Plaza, Kweku Boi Street, Adenta')
    updateMetaTag('business:contact_data:locality', 'Accra')
    updateMetaTag('business:contact_data:country_name', 'Ghana')
    updateMetaTag('business:contact_data:phone_number', '+233244104087')
    updateMetaTag('business:contact_data:email', 'info@agilebrokersgh.com')
    
    // Theme Color for Mobile Browsers
    updateMetaTag('theme-color', '#3B82F6')
    updateMetaTag('msapplication-TileColor', '#3B82F6')
    
    // Add structured data script
    const existingScript = document.querySelector('script[data-seo-structured]')
    if (existingScript) {
      existingScript.remove()
    }
    
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-seo-structured', 'true')
    script.textContent = JSON.stringify(config.structuredData)
    document.head.appendChild(script)
    
  }, [config])
  
  // This component doesn't render anything visible
  return null
}

export default SEOHead
