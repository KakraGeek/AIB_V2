import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead config={seoConfigs.team} />
      <ParallaxHeader 
        title="Our Board & Management" 
        subtitle="Meet the distinguished professionals behind Agile Insurance Brokers Ltd"
        imageIndex={3}
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
                Meet the distinguished professionals behind <span className="text-primary-600">Agile</span> <span className="text-secondary-700">Insurance</span> <span className="text-secondary-900">Brokers Ltd</span>
              </motion.p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Patrick Morttey',
                role: 'Board Chairman',
                bio: 'Patrick Morttey is a distinguished finance and banking professional with extensive expertise in credit risk analysis, project financing, and value chain financing. With over three decades of experience in corporate and investment banking, he has successfully led and structured major financial transactions, including syndicated loans and strategic funding for large-scale projects in Ghana.',
                experience: 'Over three decades in corporate and investment banking',
                background: 'Former Deputy Head of Corporate Banking at GCB Bank PLC',
                education: 'MBA in Finance from the University of Ghana, certified ACCA Level 1 professional',
                expertise: ['Credit Risk Analysis', 'Project Financing', 'Value Chain Financing', 'Corporate Banking'],
                avatar: 'PM',
                color: 'bg-blue-500'
              },
              {
                name: 'Love Aklasi',
                role: 'Board Member',
                bio: 'Love Aklasi is a seasoned banking and financial services professional with over 15 years of experience in branch operations, sales, and customer relationship management. She has held key leadership roles in Fidelity Bank Ghana and United Bank for Africa, where she successfully drove profitability, optimized operations, and enhanced customer engagement.',
                experience: 'Over 15 years in banking and financial services',
                background: 'Key leadership roles in Fidelity Bank Ghana and United Bank for Africa',
                education: 'MBA in Marketing from the University of Leicester, BA in English from the University of Cape Coast',
                expertise: ['Branch Operations', 'Sales Management', 'Customer Relationship Management', 'Profitability Optimization'],
                avatar: 'LA',
                color: 'bg-green-500'
              },
              {
                name: 'Jemima Dei',
                role: 'Board Member',
                bio: 'Jemima Dei is a distinguished legal practitioner with extensive experience in corporate finance, commercial litigation, and regulatory compliance. She is currently a Counsel at Kuenyehia & Nutsukpui, where she specializes in high-stakes commercial disputes, corporate advisory, and arbitration.',
                experience: 'Extensive experience in corporate finance and commercial litigation',
                background: 'Counsel at Kuenyehia & Nutsukpui',
                education: 'LLM in Corporate Finance & Law from the University of Aberdeen, qualified lawyer in Ghana',
                expertise: ['Corporate Finance', 'Commercial Litigation', 'Regulatory Compliance', 'Corporate Advisory', 'Arbitration'],
                avatar: 'JD',
                color: 'bg-purple-500'
              },
              {
                name: 'Emmanuel Kobla Obey',
                role: 'Managing Director',
                bio: 'Mr. Emmanuel Kobla Obey is an insurance practitioner with experience from Trinity Insurance Brokers and Metrix Brokerage Ltd. He has been in the insurance industry for 10 years and has acquired rich experience in diverse fields. He is the Managing Director of Agile Insurance Brokers Ltd and is assisted by an Operations Manager and two senior officers.',
                experience: '10 years in the insurance industry',
                background: 'Experience from Trinity Insurance Brokers and Metrix Brokerage Ltd',
                education: 'Insurance practitioner with diverse field experience',
                expertise: ['Insurance Broking', 'Operations Management', 'Strategic Leadership', 'Client Relations'],
                avatar: 'EO',
                color: 'bg-orange-500'
              }
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <InteractiveCard hoverEffect="lift" className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Profile Icon */}
                    <motion.div 
                      className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.avatar}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Name and Role */}
                      <div className="mb-4">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-2"
                          whileHover={{ color: '#3B82F6' }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.name}
                        </motion.h3>
                        <motion.div 
                          className="flex items-center text-lg text-secondary-700 font-semibold"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4H9v2h2V5zm2 4H9v2h2V9z" clipRule="evenodd" />
                          </svg>
                          {member.role}
                        </motion.div>
                      </div>
                      
                      {/* Biography */}
                      <motion.p 
                        className="text-gray-700 leading-relaxed mb-6"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {member.bio}
                      </motion.p>
                      
                      {/* Key Information Grid */}
                      {member.experience && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4H9v2h2V5zm2 4H9v2h2V9z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <span className="text-sm font-semibold text-gray-600">Experience:</span>
                              <p className="text-gray-700 text-sm">{member.experience}</p>
                            </div>
                          </div>
                          
                          {member.background && (
                            <div className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4H9v2h2V5zm2 4H9v2h2V9z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <span className="text-sm font-semibold text-gray-600">Background:</span>
                                <p className="text-gray-700 text-sm">{member.background}</p>
                              </div>
                            </div>
                          )}
                          
                          {member.education && (
                            <div className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L8.48 8.5a1 1 0 001.04 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.7a2 2 0 002.364 0l5.508-2.13a1 1 0 00.517-1.103l-1.013-4.93a1 1 0 00-.517-.517L9.3 2.573a1 1 0 00-1.103.517L7.184 8.01a1 1 0 01-.517.517L1.573 10.3a1 1 0 00-.517 1.103l1.013 4.93a1 1 0 00.517.517L9.3 16.573z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <span className="text-sm font-semibold text-gray-600">Education:</span>
                                <p className="text-gray-700 text-sm">{member.education}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Areas of Expertise */}
                      {member.expertise && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                                whileHover={{ scale: 1.05, backgroundColor: '#E5E7EB' }}
                                transition={{ duration: 0.2 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Company Values */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
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
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { value: 'Excellence', icon: '⭐', color: 'bg-yellow-100 text-yellow-600' },
                { value: 'Integrity', icon: '🤝', color: 'bg-blue-100 text-blue-600' },
                { value: 'Teamwork', icon: '👥', color: 'bg-green-100 text-green-600' },
                { value: 'Service', icon: '🛎️', color: 'bg-purple-100 text-purple-600' },
                { value: 'Empathy', icon: '❤️', color: 'bg-red-100 text-red-600' },
                { value: 'Ethics', icon: '⚖️', color: 'bg-indigo-100 text-indigo-600' }
              ].map((item, index) => (
                <motion.div 
                  key={item.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                >
                  <motion.div 
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 text-xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-lg font-semibold text-primary-600">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimation>

        {/* Team Highlights */}
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <InteractiveCard hoverEffect="glow" className="p-8 max-w-4xl mx-auto">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                What Makes Our Team Special?
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Experience', description: 'Combined 50+ years in insurance', icon: '📚' },
                  { title: 'Expertise', description: 'Deep knowledge of Ghana\'s market', icon: '🎯' },
                  { title: 'Commitment', description: 'Dedicated to client success', icon: '💪' }
                ].map((highlight, index) => (
                  <motion.div 
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-4xl mb-3"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </InteractiveCard>
          </motion.div>
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
              Ready to Work with Our Expert Team?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              Experience the difference that our experienced and dedicated team can make for your insurance needs.
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
                Get in Touch
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

export default Team
