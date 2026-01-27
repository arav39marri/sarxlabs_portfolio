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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full glassmorphism border border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
            >
              ✕
            </motion.button>

            <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
            <p className="text-gray-400 mb-6">
              Share your project details and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition resize-none h-32"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
                hello@sarxlabs.com
              </span>
            </p>
            <div className="flex justify-center gap-6">
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
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
