import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const About: React.FC = () => {
  return (
         <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-300">
      <SEOHead config={seoConfigs.about} />
      <ParallaxHeader 
        title="About Us" 
        subtitle="Discover our story, mission, and the values that drive us forward"
        imageIndex={0}
      />
      <div className="container-custom py-20">
        <ScrollAnimation animation="fadeIn" delay={0.1}>
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-xl text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-primary-600">AGILE</span> <span className="text-secondary-700">INSURANCE</span> <span className="text-secondary-900">BROKERS LTD</span> is a dynamic Ghanaian-owned insurance brokerage firm committed to protecting businesses, people, and assets across Ghana.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We were incorporated in 2019 and are authorized to transact business with all registered insurance companies in the country. Our focus is to provide tailored, affordable insurance solutions backed by professional advice and support.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We provide peace of mind to our clients through sound insurance and exceptional service.
              </motion.p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Company Highlights */}
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="py-20 bg-gradient-to-r from-indigo-200 via-indigo-100 to-purple-200">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: 'Authorized Broker',
                    description: 'Authorized to transact business with all registered insurance companies in Ghana.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    color: 'bg-blue-100 text-blue-600'
                  },
                  {
                    title: 'Professional Service',
                    description: 'Tailored, affordable insurance solutions backed by professional advice and support.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                      </svg>
                    ),
                    color: 'bg-red-100 text-red-600'
                  },
                  {
                    title: 'Client Focused',
                    description: 'Committed to protecting businesses, people, and assets across Ghana.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    color: 'bg-blue-100 text-blue-600'
                  }
                ].map((highlight, index) => (
                  <motion.div 
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <InteractiveCard hoverEffect="lift" className="p-8 text-center bg-gradient-to-br from-blue-200 to-blue-100 border-2 border-blue-300">
                      <motion.div 
                        className={`w-16 h-16 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </InteractiveCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Vision & Mission */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="py-20 bg-gradient-to-r from-indigo-300 via-indigo-200 to-purple-300">
            <div className="container-custom">
              <InteractiveCard hoverEffect="glow" className="p-8 bg-gradient-to-br from-indigo-200 to-indigo-100 border-2 border-indigo-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4"
                      whileHover={{ color: '#3B82F6' }}
                      transition={{ duration: 0.2 }}
                    >
                      Our Vision
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      To be everywhere risk exists.
                    </motion.p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    whileHover={{ x: -5 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4"
                      whileHover={{ color: '#3B82F6' }}
                      transition={{ duration: 0.2 }}
                    >
                      Our Mission
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      To provide peace of mind to our customers through sound insurance and exceptional service.
                    </motion.p>
                  </motion.div>
                </div>
              </InteractiveCard>
            </div>
          </div>
        </ScrollAnimation>

        {/* Company Values */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <div className="py-20 bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300">
            <div className="container-custom">
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Our Core Values
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                  {['Excellence', 'Integrity', 'Teamwork', 'Service', 'Empathy', 'Ethics'].map((value, index) => (
                    <motion.div 
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-gradient-to-br from-blue-200 to-blue-100 p-4 rounded-lg shadow-md cursor-pointer border-2 border-blue-300"
                    >
                      <span className="text-lg font-semibold text-primary-600">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>

      </div>
      
      {/* Call to Action */}
      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <ParallaxCallToAction imageIndex={0}>
          <div className="container-custom text-center">
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Ready to Experience Our Service?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              Join the growing number of businesses and individuals who trust us with their insurance needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.1 }}
            >
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
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

export default About
