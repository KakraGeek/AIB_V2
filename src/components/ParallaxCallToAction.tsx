import React from 'react'

interface ParallaxCallToActionProps {
  children: React.ReactNode
  imageIndex: number
  className?: string
}

const ParallaxCallToAction: React.FC<ParallaxCallToActionProps> = ({ children, imageIndex, className = '' }) => {
  const parallaxImages = [
    '/images/parallax/About-Us.webp',
    '/images/parallax/Our-Services.webp',
    '/images/parallax/Our-Products.webp',
    '/images/parallax/Our-Team.webp',
    '/images/parallax/Partners-Clients.webp',
    '/images/parallax/Contact-Us.webp'
  ]

  const backgroundImage = parallaxImages[imageIndex % parallaxImages.length]

  return (
    <div className={`relative ${className}`}>
      {/* Fixed Background Image - Edge to Edge */}
      <div 
        className="parallax-bg absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content with proper spacing */}
      <div className="relative z-20 py-20">
        {children}
      </div>
    </div>
  )
}

export default ParallaxCallToAction
