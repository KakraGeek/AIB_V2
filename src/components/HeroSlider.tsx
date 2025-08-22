import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { heroSlides } from '@/data/heroSlides'
import { cn } from '@/lib/utils'

interface HeroSliderProps {
  interval?: number
  className?: string
}

const HeroSlider: React.FC<HeroSliderProps> = React.memo(({ 
  interval = 5000, 
  className 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Memoize slide variants to prevent recreation on every render
  const slideVariants = useMemo(() => ({
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }), [])

  // Memoize content variants
  const contentVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    })
  }), [])

  // Optimize autoplay to prevent unnecessary re-renders
  useEffect(() => {
    if (!isPlaying || isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, isPaused, interval])

  // Pause on hover/focus
  const handlePause = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleResume = useCallback(() => {
    setIsPaused(false)
  }, [])

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          goToNext()
          break
        case ' ':
          event.preventDefault()
          setIsPlaying(prev => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Memoize the current slide data to prevent unnecessary re-renders
  const currentSlideData = useMemo(() => heroSlides[currentSlide], [currentSlide])

  return (
    <div 
      className={cn(
        "relative w-full hero-slider",
        // Responsive height: full screen on desktop, appropriate height on mobile
        "h-screen md:h-screen",
        // Mobile-specific height adjustments - reduced to match image height
        "min-h-[40vh] sm:min-h-[50vh] md:min-h-screen",
        // White background to cover parent gradient
        "bg-white",
        className
      )}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onFocus={handlePause}
      onBlur={handleResume}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={currentSlide} mode="wait">
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={prefersReducedMotion ? {} : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0 w-full h-full motion-div"
          // Add will-change to optimize GPU rendering
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Background Image - Now responsive for mobile */}
          <div 
            className="absolute inset-0 image-optimized"
            style={{
              backgroundImage: `url(${currentSlideData.image})`
            }}
          />
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black"
            style={{ 
              opacity: currentSlideData.overlayOpacity || 0.3
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <motion.h1
                custom={0}
                variants={prefersReducedMotion ? {} : contentVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-optimized"
                aria-live="polite"
                // Add will-change to optimize GPU rendering
                style={{ willChange: 'transform, opacity' }}
              >
                {currentSlideData.title}
              </motion.h1>
              
              <motion.p
                custom={1}
                variants={prefersReducedMotion ? {} : contentVariants}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 text-optimized px-2"
                style={{ willChange: 'transform, opacity' }}
              >
                {currentSlideData.subtitle}
              </motion.p>
              

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Responsive positioning */}
      <div className="absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:z-20 bottom-0 left-0 right-0 z-10">
        <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 mb-4 md:mb-0 px-4 py-2 md:rounded-t-lg md:bg-transparent md:backdrop-blur-sm bg-transparent">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 md:p-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 button-optimized touch-optimized"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={16} className="md:w-5 md:h-5" /> : <Play size={16} className="md:w-5 md:h-5" />}
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-2 md:p-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 button-optimized touch-optimized"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>

          {/* Dots */}
          <div className="flex space-x-1 md:space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 button-optimized touch-optimized",
                  index === currentSlide 
                    ? "bg-primary-600 scale-125" 
                    : "bg-primary-400 hover:bg-primary-500"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-2 md:p-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 button-optimized touch-optimized"
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Slide Counter - Responsive positioning */}
      <div className="absolute md:top-4 md:right-4 md:z-20 top-0 left-0 right-0 z-10">
        <div className="bg-transparent md:bg-transparent text-white px-3 py-1 md:px-4 md:py-2 md:rounded-lg text-xs md:text-sm md:backdrop-blur-sm font-medium text-center md:text-left">
          {currentSlide + 1} / {heroSlides.length}
        </div>
      </div>
    </div>
  )
})

HeroSlider.displayName = 'HeroSlider'

export default HeroSlider
