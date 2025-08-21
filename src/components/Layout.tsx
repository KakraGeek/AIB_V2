import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ProgressBar from './ProgressBar'
import FloatingActionButton from './FloatingActionButton'

const Layout: React.FC = React.memo(() => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path: string) => location.pathname === path

  // Memoize scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Memoize navigation items to prevent recreation
  const navigationItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'Partners & Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' }
  ], [])

  // Memoize header animation variants to prevent recreation
  const headerVariants = useMemo(() => ({
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.6 }
  }), [])

  // Memoize mobile menu animation variants
  const mobileMenuVariants = useMemo(() => ({
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeOut" }
  }), [])

  // Memoize footer animation variants
  const footerVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }), [])

  return (
    <div className="min-h-screen flex flex-col layout-stable">
      <ProgressBar />
      
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-header ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-optimized shadow-lg' 
            : 'bg-white'
        }`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
        // Add will-change to optimize GPU rendering
        style={{ willChange: 'transform' }}
      >
        <div className="container-custom">
          <div className="flex items-center h-16">
            {/* Mobile menu button - LEFT SIDE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors button-optimized"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - CENTER */}
            <Link to="/" className="flex items-center space-x-3 flex-1 justify-center md:justify-start logo-container">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
                // Add will-change to optimize GPU rendering
                style={{ willChange: 'transform' }}
              >
                                 <img 
                   src="/images/logo.png" 
                   alt="AGILE INSURANCE BROKERS LOGO" 
                   className="h-10 w-auto object-contain image-optimized"
                 />
              </motion.div>
                             <div className="flex flex-col brand-name">
                 <div className="flex items-baseline space-x-1">
                   <span className="text-xl font-bold text-primary-600">AGILE</span>
                   <span className="text-secondary-700">INSURANCE</span>
                 </div>
                 <span className="text-sm font-medium text-secondary-900">BROKERS LTD</span>
               </div>
            </Link>

            {/* Desktop Navigation - RIGHT SIDE */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-optimized ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors button-optimized hover-optimized"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden bg-white border-t border-gray-200 shadow-lg mobile-nav"
              // Add will-change to optimize GPU rendering
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="container-custom py-8 space-y-4">
                {/* Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover-optimized touch-optimized ${
                        isActive(item.path)
                          ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>
                
                {/* CTA Section */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-3">Ready to get started?</p>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg text-lg font-semibold text-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 button-optimized touch-optimized"
                    >
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      <main className="flex-1 animation-safe">
        <Outlet />
      </main>

      <motion.footer 
        className="bg-gray-800 text-white"
        variants={footerVariants}
        initial="initial"
        whileInView="whileInView"
        // Add will-change to optimize GPU rendering
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
                             <h3 className="text-xl font-bold mb-4 text-white uppercase">AGILE INSURANCE BROKERS LTD</h3>
              <p className="text-gray-300 mb-4">
                Providing peace of mind through sound insurance and exceptional service since 2019.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📍 Romick Plaza, Kweku Boi Street, Adenta</p>
                <p>📧 info@agilebrokersgh.com</p>
                <p>📞 +233 244 104 087 / +233 248 290 188</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Risk Assessment</li>
                <li className="text-gray-300">Claims Management</li>
                <li className="text-gray-300">Policy Reviews</li>
                <li className="text-gray-300">Premium Negotiations</li>
                <li className="text-gray-300">Compliance Alerts</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                         <p className="text-gray-400 text-sm">
               © 2025 AGILE INSURANCE BROKERS LTD. All rights reserved. | Powered by The Geek Toolbox.
             </p>
          </div>
        </div>
      </motion.footer>

      <FloatingActionButton />
      {/* Temporarily disabled to fix infinite re-render loop */}
      {/* <PerformanceMonitor /> */}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
