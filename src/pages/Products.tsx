import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead config={seoConfigs.products} />
      <ParallaxHeader 
        title="Our Products" 
        subtitle="Comprehensive insurance solutions for every need"
        imageIndex={1}
      />
      <div className="container-custom py-20">
        <ScrollAnimation animation="fadeIn" delay={0.1}>
          <div className="text-center mb-16">

            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive insurance solutions tailored to protect what matters most to you
            </motion.p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
                             {
                 title: 'Motor Insurance',
                 description: 'Comprehensive coverage for cars, motorcycles, and commercial vehicles with competitive rates and excellent claims service.',
                 image: '/images/Product_Images/new_motor insurance_result.webp'
               },
               {
                 title: 'Marine Insurance',
                 description: 'Protection for cargo, vessels, and marine-related risks with specialized coverage options.',
                 image: '/images/Product_Images/new_marine insurance_result.webp'
               },
               {
                 title: 'Workmen\'s Compensation',
                 description: 'Employee protection coverage for workplace injuries and occupational hazards.',
                 image: '/images/Product_Images/new_workmen_result.webp'
               },
               {
                 title: 'Public Liability',
                 description: 'Protection against third-party claims for property damage or bodily injury.',
                 image: '/images/Product_Images/new_public liability_result.webp'
               },
               {
                 title: 'Health Insurance',
                 description: 'Comprehensive health coverage for individuals, families, and corporate groups.',
                 image: '/images/Product_Images/new_health insurance_result.webp'
               },
               {
                 title: 'Commercial Building Insurance',
                 description: 'Property protection for commercial buildings, contents, and business interruption.',
                 image: '/images/Product_Images/new_commercial building_result.webp'
               },
               {
                 title: 'Group Life Comprehensive Plan',
                 description: 'Life insurance coverage for employees with additional benefits and riders.',
                 image: '/images/Product_Images/new_group life_result.webp'
               },
               {
                 title: 'Assets All-Risk Insurance',
                 description: 'Comprehensive protection for valuable assets against various risks and perils.',
                 image: '/images/Product_Images/new_assets all risk_result.webp'
               },
               {
                 title: 'Combined Fire & Burglary',
                 description: 'Protection against fire damage and theft with comprehensive coverage options.',
                 image: '/images/Product_Images/new_combined fire & burglary_result.webp'
               },
               {
                 title: 'Goods-in-Transit Insurance',
                 description: 'Coverage for goods while being transported by road, rail, or air.',
                 image: '/images/Product_Images/new_goods-in-transit_result.webp'
               },
               {
                 title: 'Insurance Bonds/Guarantees',
                 description: 'Financial guarantees and surety bonds for various business and legal requirements.',
                 image: '/images/Product_Images/new_insurance bonds_result.webp'
               },
               {
                 title: 'Travel Insurance',
                 description: 'Comprehensive travel protection including medical, trip cancellation, and baggage coverage.',
                 image: '/images/Product_Images/new_travel insurance_result.webp'
               },
               {
                 title: 'Professional Indemnity',
                 description: 'Protection for professionals against claims of negligence or professional errors.',
                 image: '/images/Product_Images/new_professional indemnity_result.webp'
               }
            ].map((product, index) => (
              <motion.div 
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <InteractiveCard hoverEffect="lift" className="p-8 h-full">
                  <motion.div 
                    className="w-full h-56 mb-6 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-scale-down"
                      style={{ imageRendering: 'auto' }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-4 text-center"
                    whileHover={{ color: '#3B82F6' }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-center leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.description}
                  </motion.p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Product Categories */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              Product Categories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { category: 'Personal', count: '5+ Products', icon: '👤', color: 'bg-blue-500' },
                { category: 'Commercial', count: '8+ Products', icon: '🏢', color: 'bg-green-500' },
                { category: 'Specialized', count: '3+ Products', icon: '🎯', color: 'bg-purple-500' },
                { category: 'Corporate', count: '4+ Products', icon: '💼', color: 'bg-orange-500' }
              ].map((cat, index) => (
                <motion.div 
                  key={cat.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <InteractiveCard hoverEffect="scale" className="p-6 text-center">
                    <motion.div 
                      className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cat.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{cat.category}</h4>
                    <p className="text-gray-600">{cat.count}</p>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimation>

        {/* Why Choose Our Products */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <InteractiveCard hoverEffect="glow" className="p-8 max-w-4xl mx-auto">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                Why Choose Our Insurance Products?
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Comprehensive Coverage', description: 'Wide range of protection options', icon: '🛡️' },
                  { title: 'Competitive Rates', description: 'Best value for your insurance needs', icon: '💰' },
                  { title: 'Expert Guidance', description: 'Professional advice on coverage selection', icon: '🎯' }
                ].map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-4xl mb-3"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </InteractiveCard>
          </motion.div>
        </ScrollAnimation>

      </div>
      
      {/* Call to Action */}
      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <ParallaxCallToAction imageIndex={4}>
          <div className="container-custom text-center">
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.7 }}
            >
              Ready to Find the Right Coverage?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.9 }}
            >
              Our team of experts is ready to help you choose the perfect insurance products for your needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.1 }}
            >
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
              <motion.a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </ParallaxCallToAction>
      </ScrollAnimation>
    </div>
  )
}

export default Products
