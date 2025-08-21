import React from 'react'
import { motion } from 'framer-motion'

interface ParallaxHeaderProps {
  title: string
  subtitle?: string
  imageIndex: number
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({ title, subtitle, imageIndex }) => {
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
    <div className="relative h-64 md:h-80 lg:h-96">
      {/* Fixed Background Image - Visible within container */}
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
      

      
      {/* Overlay for better text readability - properly contained */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ParallaxHeader
