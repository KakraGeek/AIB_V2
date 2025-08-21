import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ProgressBar from './ProgressBar'
import FloatingActionButton from './FloatingActionButton'

const Layout: React.FC = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'Partners & Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar />
      
             <motion.header 
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled 
             ? 'bg-white/95 backdrop-blur-md shadow-lg' 
             : 'bg-white'
         }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <img 
                  src="/images/logo.png" 
                  alt="Agile Insurance Brokers Logo" 
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl font-bold text-primary-600">Agile</span>
                  <span className="text-xl font-bold text-secondary-700">Insurance</span>
                </div>
                <span className="text-sm font-medium text-secondary-900">Brokers Ltd</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-6 space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-base font-medium text-center transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      <main className="flex-1">
        <Outlet />
      </main>

      <motion.footer 
        className="bg-gray-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
                              <h3 className="text-xl font-bold mb-4"><span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span> <span className="text-secondary-900">Brokers Ltd</span></h3>
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
              © 2025 Agile Insurance Brokers Ltd. All rights reserved. | Powered by The Geek Toolbox.
            </p>
          </div>
        </div>
      </motion.footer>

      <FloatingActionButton />
    </div>
  )
}

export default Layout
