'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear status when user starts typing
    if (status.message) setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
        setFormData({ name: '', email: '', company: '', message: '' })
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose()
          setStatus({ type: '', message: '' })
        }, 2000)
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      onClose()
      setStatus({ type: '', message: '' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide glassmorphism border border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <motion.button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-xl sm:text-2xl disabled:opacity-50"
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              disabled={isLoading}
            >
              ✕
            </motion.button>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Let&apos;s Talk</h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Share your project details and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Status Messages */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition text-sm sm:text-base disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition text-sm sm:text-base disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition text-sm sm:text-base disabled:opacity-50"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition resize-none h-24 sm:h-32 text-sm sm:text-base disabled:opacity-50"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 sm:py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="w-full py-20 px-4 bg-black relative overflow-hidden">
      <div ref={containerRef} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-3xl -z-10" />

          <motion.h2
            className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Have an idea?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-[#00bfff]">
              We'll build it.
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From concept to deployment, we handle every aspect of your digital
            vision. Let's create something extraordinary together.
          </motion.p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-all glow-red"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(255, 0, 0, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>

          {/* Animated Border */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-gray-400 mb-4">
              Or reach out directly at{' '}
              <span className="text-[#00bfff] font-semibold">
                sarxlabs@gmail.com
              </span>
            </p>
            {/* <div className="flex justify-center gap-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#ff0000] transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#00bfff] transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#ff0000] transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                Twitter
              </motion.a>
            </div> */}
          </motion.div>
        </motion.div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
