import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import { motion } from 'framer-motion'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead config={seoConfigs.home} />
      <HeroSlider />
      
      {/* Welcome Section */}
      <ScrollAnimation animation="fadeIn" delay={0.2}>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">
                 Welcome to <span className="uppercase"><span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span> <span className="text-secondary-900">Brokers Ltd</span></span>
               </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                 <span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span> <span className="text-secondary-900">Brokers Limited</span> was incorporated in 2019 under the Companies Act, 2019 (Act 992).
                The Company aims to be a leader in providing high quality and competitively priced insurance services nationwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mandate allows us to transact business with all registered insurance companies in Ghana.  
                Our brokerage services come to you at <span className="font-bold text-primary-600">"NO COST TO YOU"</span> and are designed to enhance your risk management strategies while ensuring efficiency and cost savings.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollAnimation animation="slideRight" delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700">To be everywhere risk exists.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideLeft" delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700">To provide peace of mind to our customers through sound insurance and exceptional service.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Brand Parallax Section */}
      <ScrollAnimation animation="fadeIn" delay={0.25}>
        <section className="relative py-24">
          {/* Fixed Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(/images/parallax/banner_parallax_03.webp)',
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          {/* Content with Logo Overlay */}
          <div className="container-custom relative z-10">
            <div className="text-center">
              {/* Brand Logo */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="/images/logo.png" 
                  alt="Agile Insurance Brokers Ltd" 
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto filter drop-shadow-lg"
                />
              </motion.div>
              
              {/* Brand Message */}
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Trusted Insurance Solutions
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                With over 5 years of experience serving Ghana, we've built our reputation on trust, 
                reliability, and exceptional customer service. Your protection is our priority.
              </motion.p>
              
              {/* Call to Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.a
                  href="/contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Get Started Today</span>
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Learn More</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Core Values Section */}
      <ScrollAnimation animation="fadeIn" delay={0.3}>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'Excellence', icon: '⭐', description: 'Striving for the highest quality in all we do' },
                { name: 'Integrity', icon: '🤝', description: 'Honest and ethical in all our dealings' },
                { name: 'Teamwork', icon: '👥', description: 'Collaborating to achieve common goals' },
                { name: 'Service', icon: '🛎️', description: 'Putting our clients first always' },
                { name: 'Empathy', icon: '❤️', description: 'Understanding our clients\' needs and concerns' },
                { name: 'Ethics', icon: '⚖️', description: 'Maintaining the highest moral standards' }
              ].map((value, index) => (
                <ScrollAnimation key={value.name} animation="scaleIn" delay={index * 0.1}>
                  <InteractiveCard hoverEffect="lift" className="p-6 text-center">
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.name}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </InteractiveCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation animation="fadeIn" delay={0.4}>
            <div className="text-center mb-16">
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">
                 Why Choose <span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span>?
               </h2>
              <p className="text-xl text-gray-600 mb-12">
                We provide comprehensive insurance solutions with personalized service
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation animation="slideUp" delay={0.5}>
              <InteractiveCard hoverEffect="glow" className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">No Cost to You</h3>
                <p className="text-gray-600">
                  Our brokerage services come at absolutely no cost to our clients. We earn our commission from insurance companies, not from you.
                </p>
              </InteractiveCard>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideUp" delay={0.6}>
              <InteractiveCard hoverEffect="glow" className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ghanaian-Owned</h3>
                <p className="text-gray-600">
                  As a local company, we understand the unique insurance needs and challenges faced by businesses and individuals in Ghana.
                </p>
              </InteractiveCard>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideUp" delay={0.7}>
              <InteractiveCard hoverEffect="glow" className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">All Insurance Companies</h3>
                <p className="text-gray-600">
                  We partner with all registered insurance companies in Ghana, giving you access to the broadest range of options and competitive rates.
                </p>
              </InteractiveCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ScrollAnimation animation="fadeIn" delay={0.8}>
        <ParallaxCallToAction imageIndex={1}>
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can help protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
              <motion.a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </ParallaxCallToAction>
      </ScrollAnimation>
    </div>
  )
}

export default Home
