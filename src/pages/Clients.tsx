import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const Clients: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead config={seoConfigs.clients} />
      <ParallaxHeader 
        title="Our Partners & Clients" 
        subtitle="Trusted by leading organizations and individuals across Ghana"
        imageIndex={4}
      />
      <div className="container-custom py-20">
        <ScrollAnimation animation="fadeIn" delay={0.1}>
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-xl text-gray-600 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Trusted by leading organizations and individuals across Ghana
              </motion.p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Partners Section */}
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our Partners
            </motion.h2>
            <InteractiveCard hoverEffect="lift" className="p-8">
              <motion.p 
                className="text-lg text-gray-700 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span> <span className="text-secondary-900">Brokers</span> partners with all registered insurance companies in Ghana to offer the broadest and most competitive insurance solutions.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                We also maintain strong working relationships with the following key institutions:
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    name: 'Ghana Police Service', 
                    logo: '/images/ghana-police-logo-removebg-preview.png',
                    description: 'Law enforcement partnership'
                  },
                  { 
                    name: 'Ghana Fire Service', 
                    logo: '/images/fire_service-removebg-preview.png',
                    description: 'Emergency services collaboration'
                  },
                  { 
                    name: 'State Transport Company', 
                    logo: '/images/stc-removebg-preview.png',
                    description: 'Transportation solutions'
                  },
                  { 
                    name: 'Driver and Vehicle Licensing Authority (DVLA)', 
                    logo: '/images/DVLA-removebg-preview.png',
                    description: 'Vehicle licensing partnership'
                  }
                ].map((partner, index) => (
                  <motion.div 
                    key={partner.name}
                    className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-center text-gray-600 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                These partnerships enable us to deliver professional, compliant, and client-focused insurance services nationwide.
              </motion.p>
            </InteractiveCard>
          </div>
        </ScrollAnimation>

        {/* Clients Section */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div>
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Some Major Clients
            </motion.h2>
            <InteractiveCard hoverEffect="glow" className="p-8">
              <motion.p 
                className="text-lg text-gray-700 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Since our inception, we have successfully provided top-tier broking services across various sectors of the Ghanaian economy. Our clientele includes corporations, renowned local businesses, corporate groups, informal associations, and private individuals.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: 'Construction/Civil Engineering',
                    icon: '🏗️',
                    clients: ['ZDI Limited', 'Providence Ltd']
                  },
                  {
                    category: 'Banking & Finance',
                    icon: '🏦',
                    clients: ['Fiaseman Rural Bank Plc']
                  },
                  {
                    category: 'Printing & Publishing',
                    icon: '📚',
                    clients: ['Ideaz Printhouse Limited']
                  },
                  {
                    category: 'Car Rentals',
                    icon: '🚗',
                    clients: ['Dzakay Car Rentals', 'Jeken Car Rentals', 'Oliver Car Rentals']
                  },
                  {
                    category: 'Health/Pharmaceuticals',
                    icon: '🏥',
                    clients: ['Royale E&E Medicals Ltd', 'Barnor Hospital', 'Mediport Fertility']
                  },
                  {
                    category: 'Oil & Gas',
                    icon: '⛽',
                    clients: ['Magnify Petroleum Ltd', 'Energy Links Ltd']
                  },
                  {
                    category: 'Education',
                    icon: '🎓',
                    clients: ['Country Int School', 'Goshen Community School']
                  },
                  {
                    category: 'NGOs',
                    icon: '🌍',
                    clients: ['Rainforest Alliance']
                  }
                ].map((sector, index) => (
                  <motion.div 
                    key={sector.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-4 flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="text-2xl mr-2"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {sector.icon}
                      </motion.span>
                      {sector.category}
                    </motion.h3>
                    <ul className="space-y-2 text-gray-600">
                      {sector.clients.map((client, clientIndex) => (
                        <motion.li 
                          key={client}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 1.5 + index * 0.1 + clientIndex * 0.05 }}
                          whileHover={{ x: 5, color: '#3B82F6' }}
                        >
                          • {client}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-center text-gray-600 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                These relationships allow us to provide comprehensive, reliable insurance solutions across a broad spectrum of client needs.
              </motion.p>
            </InteractiveCard>
          </div>
        </ScrollAnimation>

      </div>
      
      {/* Why Leading Organizations Choose Us */}
      <ScrollAnimation animation="fadeIn" delay={0.4}>
        <ParallaxCallToAction imageIndex={0}>
          <div className="container-custom text-center">
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Why Leading Organizations Choose Us
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Trusted Partner', description: 'Over 5 years of reliable service', icon: '🤝' },
                { title: 'Industry Expertise', description: 'Deep knowledge of Ghana\'s insurance landscape', icon: '💼' },
                { title: 'Client Success', description: 'Serving 50+ major organizations', icon: '🎯' }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-200">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
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
                href="/about/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </motion.div>
          </div>
        </ParallaxCallToAction>
      </ScrollAnimation>
    </div>
  )
}

export default Clients
