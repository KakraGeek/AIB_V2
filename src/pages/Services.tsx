import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const Services: React.FC = () => {
  return (
         <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <SEOHead config={seoConfigs.services} />
      <ParallaxHeader 
        title="Our Services" 
        subtitle="Professional insurance brokerage services tailored to your needs"
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
              Professional insurance brokerage services designed to enhance your risk management strategies
            </motion.p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Risk Assessment & Advisory',
                description: 'Comprehensive risk analysis and strategic advice to help you make informed insurance decisions.',
                icon: '🔍',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Claims Management',
                description: 'Expert assistance throughout the claims process to ensure fair and timely settlements.',
                icon: '📋',
                color: 'bg-green-100 text-green-600'
              },
              {
                title: 'Insurance Audits & Policy Reviews',
                description: 'Regular policy reviews and audits to ensure optimal coverage and cost-effectiveness.',
                icon: '📊',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                title: 'Claims Pre-financing',
                description: 'Financial support during claims processing to help maintain business continuity.',
                icon: '💰',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                title: 'Premium Negotiations',
                description: 'Skilled negotiation to secure the best possible rates and terms for your coverage.',
                icon: '🤝',
                color: 'bg-red-100 text-red-600'
              },
              {
                title: 'Policy Renewal & Compliance Alerts',
                description: 'Timely reminders and guidance for policy renewals and regulatory compliance.',
                icon: '⏰',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <InteractiveCard hoverEffect="lift" className="p-8 h-full bg-gradient-to-br from-primary-50 to-white border border-primary-200">
                  <motion.div 
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-4 text-center"
                    whileHover={{ color: '#3B82F6' }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-center leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Service Highlight */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <InteractiveCard hoverEffect="glow" className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-white border border-primary-200">
              <motion.div 
                className="text-6xl mb-6"
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                🎯
              </motion.div>
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                NO COST TO YOU
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                Our brokerage services are completely free to our clients. We earn our compensation directly from insurance companies, not from you.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                This means you get professional insurance advice and service at no additional cost while potentially saving money on your premiums.
              </motion.p>
            </InteractiveCard>
          </motion.div>
        </ScrollAnimation>

        {/* Why Choose Our Services */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
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
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Why Choose Our Services?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Expert Knowledge', description: 'Deep understanding of Ghana\'s insurance market', icon: '🧠' },
                { title: 'Personalized Approach', description: 'Tailored solutions for your specific needs', icon: '🎯' },
                { title: 'Ongoing Support', description: 'Continuous assistance throughout your policy lifecycle', icon: '🔄' }
              ].map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <InteractiveCard hoverEffect="scale" className="p-6 text-center bg-gradient-to-br from-secondary-50 to-white border border-secondary-200">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimation>

      </div>
      
      {/* Call to Action */}
      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <ParallaxCallToAction imageIndex={1}>
          <div className="container-custom text-center">
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.2 }}
            >
              Ready to Experience Professional Insurance Services?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.4 }}
            >
              Let us help you navigate the complex world of insurance with our expert guidance and personalized service.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.6 }}
            >
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="/products"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Products
              </motion.a>
            </motion.div>
          </div>
        </ParallaxCallToAction>
      </ScrollAnimation>
    </div>
  )
}

export default Services
