import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'avatar' | 'button'
  className?: string
  lines?: number
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  className = '',
  lines = 3
}) => {
  const shimmerVariants: Variants = {
    shimmer: {
      x: ['-100%', '100%'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: lines }).map((_, i) => (
                <div key={i} className="h-3 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        )
      
      case 'text':
        return (
          <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        )
      
      case 'avatar':
        return (
          <div className={`flex items-center space-x-4 ${className}`}>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        )
      
      case 'button':
        return (
          <div className={`h-10 bg-gray-200 rounded-lg w-24 ${className}`}></div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative overflow-hidden">
      {renderSkeleton()}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        variants={shimmerVariants}
        animate="shimmer"
      />
    </div>
  )
}

export default LoadingSkeleton
