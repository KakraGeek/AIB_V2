import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import ScrollAnimation from '@/components/ScrollAnimation'
import InteractiveCard from '@/components/InteractiveCard'
import ParallaxHeader from '@/components/ParallaxHeader'
import ParallaxCallToAction from '@/components/ParallaxCallToAction'
import SEOHead from '@/components/SEOHead'
import { seoConfigs } from '@/config/seo'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  insuranceType: string
  message: string
}

interface ValidationErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  insuranceType?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  // Validation functions
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required'
        if (value.trim().length < 2) return 'First name must be at least 2 characters'
        if (value.trim().length > 50) return 'First name must be less than 50 characters'
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'First name can only contain letters, spaces, hyphens, and apostrophes'
        return undefined
        
      case 'lastName':
        if (!value.trim()) return 'Last name is required'
        if (value.trim().length < 2) return 'Last name must be at least 2 characters'
        if (value.trim().length > 50) return 'Last name must be less than 50 characters'
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Last name can only contain letters, spaces, hyphens, and apostrophes'
        return undefined
        
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address'
        if (value.trim().length > 100) return 'Email must be less than 100 characters'
        return undefined
        
      case 'phone':
        if (value.trim()) {
          // Allow various phone formats: +233, 233, 0, or just numbers
          const phoneRegex = /^(\+?233|0)?[0-9]{9}$/
          const cleanPhone = value.replace(/\s+/g, '')
          if (!phoneRegex.test(cleanPhone)) return 'Please enter a valid Ghanaian phone number'
        }
        return undefined
        
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters'
        return undefined
        
      default:
        return undefined
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) {
        newErrors[key as keyof FormData] = error
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // Handle input blur (when user leaves a field)
  const handleInputBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    
    // Validate field on blur
    const error = validateField(name, formData[name as keyof FormData])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      // Mark all fields as touched to show errors
      const allTouched: Record<string, boolean> = {}
      Object.keys(formData).forEach(key => {
        allTouched[key] = true
      })
      setTouched(allTouched)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: 'info@agilebrokersgh.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        insurance_type: formData.insuranceType,
        message: formData.message,
        reply_to: formData.email
      }

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with your actual EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your actual EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // You'll need to replace this with your actual EmailJS public key
      )

      setSubmitStatus('success')
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.')
      
      // Reset form and validation state
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: ''
      })
      setErrors({})
      setTouched({})
      
    } catch (error: any) {
      console.error('Email sending failed:', error)
      
      // Provide more specific error messages based on error type
      let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      
      if (error?.text) {
        if (error.text.includes('Invalid service ID')) {
          errorMessage = 'Service configuration error. Please contact support.'
        } else if (error.text.includes('Invalid template ID')) {
          errorMessage = 'Template configuration error. Please contact support.'
        } else if (error.text.includes('Invalid public key')) {
          errorMessage = 'Authentication error. Please contact support.'
        } else if (error.text.includes('rate limit')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.'
        }
      }
      
      setSubmitStatus('error')
      setSubmitMessage(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to get field error state
  const getFieldError = (name: string) => {
    return touched[name] && errors[name as keyof FormData]
  }

  // Helper function to get field styling
  const getFieldStyling = (name: string) => {
    const hasError = getFieldError(name)
    const baseClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-all duration-200"
    
    if (hasError) {
      return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-red-500`
    }
    
    return `${baseClasses} border-gray-300 focus:border-primary-500`
  }

  return (
         <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <SEOHead config={seoConfigs.contact} />
      <ParallaxHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for personalized insurance solutions"
        imageIndex={5}
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
                Get in touch with our team for personalized insurance solutions
              </motion.p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ScrollAnimation animation="slideRight" delay={0.2}>
            <InteractiveCard hoverEffect="lift" className="p-8 bg-gradient-to-br from-primary-50 to-white border border-primary-200">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              
              <div className="space-y-6">
                {/* Office Address */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Main Office</h3>
                    <p className="text-gray-700 mb-1">Romick Plaza, Kweku Boi Street, Adenta</p>
                    <p className="text-gray-600 text-sm">GPS: GD-009-1766</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <motion.a 
                      href="mailto:info@agilebrokersgh.com" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      info@agilebrokersgh.com
                    </motion.a>
                  </div>
                </motion.div>

                {/* Phone Numbers */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile</h3>
                    <div className="space-y-1">
                      <motion.a 
                        href="tel:+233244104087" 
                        className="text-primary-600 hover:text-primary-700 transition-colors block"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        +233 244 104 087
                      </motion.a>
                      <motion.a 
                        href="tel:+233248290188" 
                        className="text-primary-600 hover:text-primary-700 transition-colors block"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        +233 248 290 188
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: Closed</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
            </InteractiveCard>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation animation="slideLeft" delay={0.3}>
            <InteractiveCard hoverEffect="glow" className="p-8 bg-gradient-to-br from-secondary-50 to-white border border-secondary-200">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Send Us a Message
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <motion.input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={() => handleInputBlur('firstName')}
                      required
                      className={getFieldStyling('firstName')}
                      placeholder="Enter your first name"
                      aria-describedby={getFieldError('firstName') ? 'firstName-error' : undefined}
                      whileFocus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                    />
                    {getFieldError('firstName') && (
                      <motion.p
                        id="firstName-error"
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        role="alert"
                      >
                        {errors.firstName}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <motion.input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onBlur={() => handleInputBlur('lastName')}
                      required
                      className={getFieldStyling('lastName')}
                      placeholder="Enter your last name"
                      aria-describedby={getFieldError('lastName') ? 'lastName-error' : undefined}
                      whileFocus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                    />
                    {getFieldError('lastName') && (
                      <motion.p
                        id="lastName-error"
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        role="alert"
                      >
                        {errors.lastName}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('email')}
                    required
                    className={getFieldStyling('email')}
                    placeholder="Enter your email address"
                    aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                    whileFocus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  />
                  {getFieldError('email') && (
                    <motion.p
                      id="email-error"
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('phone')}
                    className={getFieldStyling('phone')}
                    placeholder="Enter your phone number (e.g., +233244104087)"
                    aria-describedby={getFieldError('phone') ? 'phone-error' : 'phone-help'}
                  />
                  {getFieldError('phone') ? (
                    <motion.p
                      id="phone-error"
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      {errors.phone}
                    </motion.p>
                  ) : (
                    <p id="phone-help" className="mt-1 text-sm text-gray-500">
                      Optional. Format: +233244104087 or 0244104087
                    </p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Type of Interest
                  </label>
                  <motion.select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    className={getFieldStyling('insuranceType')}
                    whileFocus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  >
                    <option value="">Select an insurance type</option>
                    <option value="motor">Motor Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="property">Property Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="other">Other</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('message')}
                    required
                    className={`${getFieldStyling('message')} resize-none`}
                    placeholder="Tell us about your insurance needs..."
                    aria-describedby={getFieldError('message') ? 'message-error' : 'message-help'}
                    whileFocus={{ borderColor: "#3B82F6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                  />
                  {getFieldError('message') ? (
                    <motion.p
                      id="message-error"
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      {errors.message}
                    </motion.p>
                  ) : (
                    <p id="message-help" className="mt-1 text-sm text-gray-500">
                      Minimum 10 characters. Tell us about your specific insurance needs.
                    </p>
                  )}
                </motion.div>

                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)" } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </motion.button>
              </form>
            </InteractiveCard>
          </ScrollAnimation>
        </div>

        {/* Location Map */}
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="mt-16">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Find Us
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Visit our office at Romick Plaza, Kweku Boi Street, Adenta. We're conveniently located and easy to find.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.01 }}
            >
              <InteractiveCard hoverEffect="glow" className="p-4 bg-gradient-to-br from-primary-50 to-white border border-primary-200">
                                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.268328435708!2d-0.15675388468037214!3d5.714139315914483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d657dec04e9%3A0xaea9967536950837!2sRomick%20Plaza!5e0!3m2!1sen!2sgh!4v1703179200000!5m2!1sen!2sgh"
                   width="100%"
                   height="450"
                   style={{ border: 0, borderRadius: '8px' }}
                   allowFullScreen={true}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="AGILE INSURANCE BROKERS OFFICE LOCATION"
                 />
              </InteractiveCard>
            </motion.div>
          </div>
        </ScrollAnimation>

      </div>
      
      {/* Call to Action Section */}
      <ScrollAnimation animation="fadeIn" delay={0.4}>
        <ParallaxCallToAction imageIndex={5}>
          <div className="container-custom text-center">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
                             Why Choose AGILE INSURANCE BROKERS?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Our brokerage services come at <span className="font-bold">NO COST TO YOU</span> and are designed to enhance your risk management strategies while ensuring efficiency and cost savings.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              We partner with all registered insurance companies in Ghana to offer the broadest and most competitive insurance solutions.
            </motion.p>
            
            {/* Contact CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.a
                href="tel:+233244104087"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="mailto:info@agilebrokersgh.com"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </motion.a>
            </motion.div>
          </div>
        </ParallaxCallToAction>
      </ScrollAnimation>
    </div>
  )
}

export default Contact
