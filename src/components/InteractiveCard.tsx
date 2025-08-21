import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'rotate'
  onClick?: () => void
  delay?: number
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  onClick,
  delay = 0
}) => {
  const getHoverVariants = (): Variants => {
    switch (hoverEffect) {
      case 'lift':
        return {
          hover: { 
            y: -8, 
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
          }
        }
      case 'glow':
        return {
          hover: { 
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
          }
        }
      case 'scale':
        return {
          hover: { 
            scale: 1.05 
          }
        }
      case 'rotate':
        return {
          hover: { 
            rotate: 2 
          }
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md transition-colors duration-200 ${className}`}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      variants={getHoverVariants()}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </motion.div>
  )
}

export default InteractiveCard
