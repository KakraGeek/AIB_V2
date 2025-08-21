import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const NotFound: React.FC = () => {
  return (
         <div className="min-h-screen bg-gradient-to-br from-primary-300 via-primary-200 to-secondary-300 flex items-center justify-center px-4">
      <SEOHead config={seoConfigs.notFound} />
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.div 
            className="text-9xl font-bold text-primary-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            404
          </motion.div>
          <motion.div 
            className="text-6xl mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ rotate: 10, scale: 1.2 }}
          >
            🔍
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Home size={20} />
              <span>Go Home</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.history.back()}
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

                 <motion.div 
           className="bg-gradient-to-br from-primary-300 to-primary-200 rounded-lg shadow-md p-8 max-w-lg mx-auto border border-primary-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Looking for Something Specific?
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Try these popular pages or use our search to find what you need:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'About Us', href: '/about', icon: '🏢' },
              { name: 'Our Services', href: '/about/services', icon: '🛠️' },
              { name: 'Our Products', href: '/about/products', icon: '📦' },
              { name: 'Contact Us', href: '/contact', icon: '📞' }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: index % 2 === 0 ? -5 : 5 }}
              >
                <Link
                  to={link.href}
                  className="block p-4 bg-gradient-to-br from-primary-300 to-primary-200 hover:from-primary-400 hover:to-primary-300 rounded-lg transition-all duration-200 text-center group border border-primary-200"
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <motion.p 
            className="text-gray-500 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Still can't find what you're looking for?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              <Search size={16} />
              <span>Contact our support team</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
